import { Link } from "wouter";
import type { Product } from "@db/schema";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Card className="overflow-hidden">
      <CardContent className="p-0">
        <AspectRatio ratio={1}>
          <img
            src={product.imageUrl}
            alt={product.name}
            className="object-cover w-full h-full transition-transform hover:scale-105"
          />
        </AspectRatio>
        <div className="p-6">
          <h3 className="font-semibold truncate">{product.name}</h3>
          <p className="text-sm text-muted-foreground mt-2 line-clamp-2">
            {product.description}
          </p>
          <p className="text-lg font-semibold text-primary mt-4">
            ${Number(product.price).toFixed(2)}
          </p>
        </div>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <Button asChild className="w-full">
          <Link href={`/product/${product.id}`}>View Details</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
