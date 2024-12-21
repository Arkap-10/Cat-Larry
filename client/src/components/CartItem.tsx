import type { Product } from "@db/schema";
import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import { Minus, Plus, X } from "lucide-react";
import { useCart } from "@/hooks/use-cart";
import { useToast } from "@/hooks/use-toast";

interface CartItemProps {
  item: {
    id: number;
    quantity: number;
    product: Product;
  };
}

export default function CartItem({ item }: CartItemProps) {
  const { addToCart } = useCart();
  const { toast } = useToast();

  const updateQuantity = async (newQuantity: number) => {
    try {
      await addToCart({
        productId: item.product.id,
        quantity: newQuantity - item.quantity
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to update quantity. Please try again.",
        variant: "destructive",
      });
    }
  };

  const removeItem = () => updateQuantity(0);

  return (
    <Card>
      <CardContent className="p-4">
        <div className="flex gap-4">
          <div className="w-24">
            <AspectRatio ratio={1}>
              <img
                src={item.product.imageUrl}
                alt={item.product.name}
                className="object-cover w-full h-full rounded"
              />
            </AspectRatio>
          </div>
          
          <div className="flex-1">
            <div className="flex justify-between">
              <h3 className="font-semibold">{item.product.name}</h3>
              <Button
                variant="ghost"
                size="icon"
                onClick={removeItem}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
            
            <p className="text-sm text-muted-foreground mt-1">
              ${Number(item.product.price).toFixed(2)}
            </p>
            
            <div className="flex items-center gap-2 mt-4">
              <Button
                variant="outline"
                size="icon"
                onClick={() => updateQuantity(item.quantity - 1)}
                disabled={item.quantity <= 1}
              >
                <Minus className="h-4 w-4" />
              </Button>
              <span className="w-8 text-center">{item.quantity}</span>
              <Button
                variant="outline"
                size="icon"
                onClick={() => updateQuantity(item.quantity + 1)}
              >
                <Plus className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
