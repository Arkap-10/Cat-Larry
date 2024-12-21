import { Link } from "wouter";
import { useCart } from "@/hooks/use-cart";
import { useProducts } from "@/hooks/use-products";
import CartItem from "@/components/CartItem";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Loader2, ShoppingCart } from "lucide-react";

export default function CartPage() {
  const { cartItems, isLoading: isCartLoading } = useCart();
  const { products, isLoading: isProductsLoading } = useProducts();

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

  if (cartItems.length === 0) {
    return (
      <div className="text-center py-12">
        <ShoppingCart className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
        <h2 className="text-xl font-semibold mb-2">Your cart is empty</h2>
        <p className="text-muted-foreground mb-4">
          Looks like you haven't added anything to your cart yet.
        </p>
        <Button asChild>
          <Link href="/products">Continue Shopping</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="grid lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2 space-y-4">
        {cartProducts.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>

      <div className="lg:col-span-1">
        <Card>
          <CardContent className="pt-6">
            <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-muted-foreground">
                <span>Shipping</span>
                <span>Calculated at checkout</span>
              </div>
            </div>
            <Separator className="my-4" />
            <div className="flex justify-between font-semibold">
              <span>Total</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
          </CardContent>
          <CardFooter>
            <Button asChild className="w-full">
              <Link href="/checkout">Proceed to Checkout</Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
