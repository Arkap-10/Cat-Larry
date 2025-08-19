import type { Express } from "express";
import { createServer, type Server } from "http";

// In-memory storage
const products = new Map();
const reviews = new Map();
let reviewId = 1;

// Initialize with data from lib/data.ts
import { products as productData } from "../client/src/lib/data";
productData.forEach(product => {
  products.set(product.id, product);
});

export function registerRoutes(app: Express): Server {
  // Products routes
  app.get("/api/products", async (_req, res) => {
    const allProducts = Array.from(products.values());
    res.json(allProducts);
  });

  app.get("/api/products/:id", async (req, res) => {
    const product = products.get(req.params.id);
    if (!product) {
      return res.status(404).send("Product not found");
    }
    res.json(product);
  });

  // Reviews routes
  app.get("/api/products/:id/reviews", async (req, res) => {
    const productId = req.params.id;
    const productReviews = Array.from(reviews.values())
      .filter(review => review.productId === productId)
      .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
    res.json(productReviews);
  });

  app.post("/api/products/:id/reviews", async (req, res) => {
    const productId = req.params.id;
    const { rating, comment } = req.body;

    // Validate rating
    if (rating < 1 || rating > 5) {
      return res.status(400).send("Rating must be between 1 and 5");
    }

    const review = {
      id: reviewId++,
      productId,
      rating,
      comment,
      createdAt: new Date().toISOString()
    };

    reviews.set(review.id, review);
    res.json(review);
  });

  const httpServer = createServer(app);
  return httpServer;
}