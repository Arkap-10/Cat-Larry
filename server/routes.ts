import type { Express } from "express";
import { createServer, type Server } from "http";
import { setupAuth } from "./auth";
import { db } from "@db";
import { products, orders, orderItems, cartItems, users } from "@db/schema";
import { eq, and } from "drizzle-orm";

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
      await db
        .update(cartItems)
        .set({ quantity: existing.quantity + quantity })
        .where(eq(cartItems.id, existing.id));
    } else {
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

  const httpServer = createServer(app);
  return httpServer;
}
