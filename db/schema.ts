import { z } from "zod";

// Types
export interface Category {
  id: number;
  name: string;
  slug: string;
  description: string | null;
  createdAt: Date;
}

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  categoryId: number;
  featured: boolean;
  createdAt: Date;
}

export interface Review {
  id: number;
  productId: number;
  rating: number;
  comment: string | null;
  createdAt: Date;
}

// In-memory stores
export const categories = new Map<number, Category>();
export const products = new Map<number, Product>();
export const reviews = new Map<number, Review>();

// ID counters
let nextCategoryId = 1;
let nextProductId = 1;
let nextReviewId = 1;

// Schemas for validation
export const insertCategorySchema = z.object({
  name: z.string().min(1),
  slug: z.string().min(1),
  description: z.string().nullable(),
});

export const selectCategorySchema = z.object({
  id: z.number(),
  name: z.string(),
  slug: z.string(),
  description: z.string().nullable(),
  createdAt: z.date(),
});

export const insertProductSchema = z.object({
  name: z.string().min(1),
  description: z.string().min(1),
  price: z.number().positive(),
  imageUrl: z.string().url(),
  categoryId: z.number(),
  featured: z.boolean().default(false),
});

export const selectProductSchema = z.object({
  id: z.number(),
  name: z.string(),
  description: z.string(),
  price: z.number(),
  imageUrl: z.string(),
  categoryId: z.number(),
  featured: z.boolean(),
  createdAt: z.date(),
});

export const insertReviewSchema = z.object({
  productId: z.number(),
  rating: z.number().min(1).max(5),
  comment: z.string().nullable(),
});

export const selectReviewSchema = z.object({
  id: z.number(),
  productId: z.number(),
  rating: z.number(),
  comment: z.string().nullable(),
  createdAt: z.date(),
});

// Helper functions for managing data
export const addCategory = (data: z.infer<typeof insertCategorySchema>): Category => {
  const category: Category = {
    id: nextCategoryId++,
    ...data,
    createdAt: new Date(),
  };
  categories.set(category.id, category);
  return category;
};

export const addProduct = (data: z.infer<typeof insertProductSchema>): Product => {
  const product: Product = {
    id: nextProductId++,
    ...data,
    createdAt: new Date(),
  };
  products.set(product.id, product);
  return product;
};

export const addReview = (data: z.infer<typeof insertReviewSchema>): Review => {
  const review: Review = {
    id: nextReviewId++,
    ...data,
    createdAt: new Date(),
  };
  reviews.set(review.id, review);
  return review;
};