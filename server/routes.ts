import type { Express } from "express";
import { createServer, type Server } from "http";
import { setupAuth } from "./auth";
import { db } from "@db";
import { products, orders, orderItems, cartItems, users, reviews } from "@db/schema";
import { eq, and, desc } from "drizzle-orm";

export function registerRoutes(app: Express): Server {
  setupAuth(app);

  // Get user profile
  app.get("/api/user", (req, res) => {
    if (req.isAuthenticated()) {
      return res.json(req.user);
    }
    res.status(401).send("Not authenticated");
  });

  // Products routes
  app.get("/api/products", async (req, res) => {
    const allProducts = await db.query.products.findMany();
    res.json(allProducts);
  });

  app.get("/api/products/:id", async (req, res) => {
    const [product] = await db
      .select()
      .from(products)
      .where(eq(products.id, parseInt(req.params.id)))
      .limit(1);

    if (!product) {
      return res.status(404).send("Product not found");
    }
    res.json(product);
  });

  // Cart routes
  app.get("/api/cart", async (req, res) => {
    if (!req.user) {
      return res.status(401).send("Not authenticated");
    }

    const items = await db
      .select()
      .from(cartItems)
      .where(eq(cartItems.userId, req.user.id));
    res.json(items);
  });

  app.post("/api/cart", async (req, res) => {
    if (!req.user) {
      return res.status(401).send("Not authenticated");
    }

    const { productId, quantity } = req.body;

    if (quantity === 0) {
      // Remove item from cart if quantity is 0
      await db
        .delete(cartItems)
        .where(
          and(
            eq(cartItems.userId, req.user.id),
            eq(cartItems.productId, productId)
          )
        );
      return res.json({ message: "Item removed from cart" });
    }

    const [existing] = await db
      .select()
      .from(cartItems)
      .where(
        and(
          eq(cartItems.userId, req.user.id),
          eq(cartItems.productId, productId)
        )
      )
      .limit(1);

    if (existing) {
      const newQuantity = existing.quantity + quantity;
      if (newQuantity <= 0) {
        await db
          .delete(cartItems)
          .where(eq(cartItems.id, existing.id));
        return res.json({ message: "Item removed from cart" });
      }
      
      await db
        .update(cartItems)
        .set({ quantity: newQuantity })
        .where(eq(cartItems.id, existing.id));
    } else {
      if (quantity <= 0) {
        return res.status(400).send("Quantity must be positive");
      }
      
      await db.insert(cartItems).values({
        userId: req.user.id,
        productId,
        quantity,
      });
    }

    res.json({ message: "Cart updated" });
  });

  // Orders routes
  app.post("/api/orders", async (req, res) => {
    if (!req.user) {
      return res.status(401).send("Not authenticated");
    }

    const { shippingAddress, total } = req.body;

    const [order] = await db
      .insert(orders)
      .values({
        userId: req.user.id,
        shippingAddress,
        total,
        status: "pending",
      })
      .returning();

    const userCartItems = await db
      .select()
      .from(cartItems)
      .where(eq(cartItems.userId, req.user.id));

    for (const item of userCartItems) {
      const [product] = await db
        .select()
        .from(products)
        .where(eq(products.id, item.productId))
        .limit(1);

      await db.insert(orderItems).values({
        orderId: order.id,
        productId: item.productId,
        quantity: item.quantity,
        price: product.price,
      });
    }

    await db
      .delete(cartItems)
      .where(eq(cartItems.userId, req.user.id));

    res.json(order);
  });

  // Reviews routes
  app.get("/api/products/:id/reviews", async (req, res) => {
    const productId = parseInt(req.params.id);
    const productReviews = await db
      .select()
      .from(reviews)
      .where(eq(reviews.productId, productId))
      .orderBy(desc(reviews.createdAt));
    res.json(productReviews);
  });

  app.post("/api/products/:id/reviews", async (req, res) => {
    if (!req.user) {
      return res.status(401).send("Not authenticated");
    }

    const productId = parseInt(req.params.id);
    const { rating, comment } = req.body;

    // Validate rating
    if (rating < 1 || rating > 5) {
      return res.status(400).send("Rating must be between 1 and 5");
    }

    const [review] = await db
      .insert(reviews)
      .values({
        productId,
        userId: req.user.id,
        rating,
        comment,
      })
      .returning();

    res.json(review);
  });

  const httpServer = createServer(app);
  return httpServer;
}
