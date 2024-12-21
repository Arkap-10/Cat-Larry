import { useState } from "react";
import { useLocation } from "wouter";
import { useCart } from "@/hooks/use-cart";
import { useProducts } from "@/hooks/use-products";
import { useUser } from "@/hooks/use-user";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/hooks/use-toast";
import { Loader2 } from "lucide-react";

export default function CheckoutPage() {
  const [, setLocation] = useLocation();
  const { user } = useUser();
  const { cartItems, isLoading: isCartLoading } = useCart();
  const { products, isLoading: isProductsLoading } = useProducts();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [shippingAddress, setShippingAddress] = useState(user?.address || "");

  if (!user) {
    setLocation("/");
    return null;
  }

  if (isCartLoading || isProductsLoading) {
    return (
      <div className="flex justify-center py-12">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    );
  }

  const cartProducts = cartItems.map(item => ({
    ...item,
    product: products.find(p => p.id === item.productId)!
  }));

  const subtotal = cartProducts.reduce(
    (sum, item) => sum + Number(item.product.price) * item.quantity,
    0
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({
          shippingAddress,
          total: subtotal,
        }),
      });

      if (!response.ok) {
        throw new Error(await response.text());
      }

      toast({
        title: "Order placed successfully",
        description: "Thank you for your purchase!",
      });
      setLocation("/account");
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to place order. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Checkout</h1>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <Card>
          <CardContent className="pt-6">
            <h2 className="text-lg font-semibold mb-4">Shipping Address</h2>
            <Input
              value={shippingAddress}
              onChange={(e) => setShippingAddress(e.target.value)}
              placeholder="Enter your shipping address"
              required
            />
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
            {cartProducts.map((item) => (
              <div key={item.id} className="flex justify-between py-2">
                <span>{item.product.name} × {item.quantity}</span>
                <span>${(Number(item.product.price) * item.quantity).toFixed(2)}</span>
              </div>
            ))}
            <Separator className="my-4" />
            <div className="flex justify-between font-semibold">
              <span>Total</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
          </CardContent>
        </Card>

        <Button
          type="submit"
          className="w-full"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <Loader2 className="h-4 w-4 animate-spin mr-2" />
          ) : null}
          Place Order
        </Button>
      </form>
    </div>
  );
}
