import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import type { CartItem, Product } from "@db/schema";

export function useCart() {
  const queryClient = useQueryClient();

  const { data: cartItems, isLoading } = useQuery<CartItem[]>({
    queryKey: ["/api/cart"],
  });

  const addToCart = useMutation({
    mutationFn: async (data: { productId: number; quantity: number }) => {
      const res = await fetch("/api/cart", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        throw new Error(await res.text());
      }

      return res.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/cart"] });
    },
  });

  return {
    cartItems: cartItems || [],
    isLoading,
    addToCart: addToCart.mutateAsync,
  };
}
