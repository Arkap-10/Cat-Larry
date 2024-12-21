import { useQuery } from "@tanstack/react-query";
import type { Product } from "@db/schema";

export function useProducts() {
  const { data: products, isLoading } = useQuery<Product[]>({
    queryKey: ["/api/products"],
  });

  return {
    products: products || [],
    isLoading,
  };
}

export function useProduct(id: number) {
  const { data: product, isLoading } = useQuery<Product>({
    queryKey: [`/api/products/${id}`],
  });

  return {
    product,
    isLoading,
  };
}
