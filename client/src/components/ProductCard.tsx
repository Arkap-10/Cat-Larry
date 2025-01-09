import { Link } from "wouter";
import type { Product } from "@db/schema";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Badge } from "@/components/ui/badge";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Card className="group overflow-hidden">
      <CardContent className="p-0">
        <AspectRatio ratio={1}>
          <img
            src={product.imageUrl}
            alt={product.name}
            className="object-cover w-full h-full transition-all duration-300 group-hover:scale-105"
          />
          {product.featured && (
            <Badge variant="secondary" className="absolute top-4 right-4">
              Featured
            </Badge>
          )}
        </AspectRatio>
        <div className="p-6">
          <div className="space-y-2">
            <h3 className="font-semibold text-lg tracking-tight truncate">
              {product.name}
            </h3>
            <p className="text-sm text-muted-foreground line-clamp-2">
              {product.description}
            </p>
          </div>
          <div className="mt-6">
            <p className="text-lg font-semibold text-primary">
              ${Number(product.price).toFixed(2)}
            </p>
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <Button 
          asChild 
          className="w-full transition-all duration-300 group-hover:bg-primary/90"
        >
          <Link href={`/product/${product.id}`}>View Details</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}