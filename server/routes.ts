import type { Express } from "express";
import { createServer, type Server } from "http";
import { db } from "@db";
import { products, reviews, categories } from "@db/schema";
import { eq, desc } from "drizzle-orm";

export function registerRoutes(app: Express): Server {
  // Categories routes
  app.get("/api/categories", async (req, res) => {
    const allCategories = await db.query.categories.findMany();
    res.json(allCategories);
  });

  app.get("/api/categories/:slug", async (req, res) => {
    const [category] = await db
      .select()
      .from(categories)
      .where(eq(categories.slug, req.params.slug))
      .limit(1);

    if (!category) {
      return res.status(404).send("Category not found");
    }
    res.json(category);
  });

  app.get("/api/categories/:slug/products", async (req, res) => {
    const [category] = await db
      .select()
      .from(categories)
      .where(eq(categories.slug, req.params.slug))
      .limit(1);

    if (!category) {
      return res.status(404).send("Category not found");
    }

    const categoryProducts = await db
      .select()
      .from(products)
      .where(eq(products.categoryId, category.id));
    
    res.json(categoryProducts);
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
        rating,
        comment,
      })
      .returning();

    res.json(review);
  });

  const httpServer = createServer(app);
  return httpServer;
}