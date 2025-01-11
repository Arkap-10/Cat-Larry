import { useRoute } from "wouter";
import { useProduct } from "@/hooks/use-products";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Loader2 } from "lucide-react";
import ReviewSection from "@/components/ReviewSection";
import type { Review } from "@db/schema";

export default function ProductDetail() {
  const [, params] = useRoute("/product/:id");
  const queryClient = useQueryClient();
  const { data: reviews = [] } = useQuery<Review[]>({
    queryKey: [`/api/products/${params?.id}/reviews`],
    enabled: !!params?.id
  });
  const { product, isLoading } = useProduct(parseInt(params?.id || "0"));

  if (isLoading || !product) {
    return (
      <div className="flex justify-center py-12">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    );
  }

  return (
    <div className="grid md:grid-cols-2 gap-8">
      <Card>
        <CardContent className="p-0">
          <AspectRatio ratio={1}>
            <img
              src={product.imageUrl}
              alt={product.name}
              className="object-cover w-full h-full rounded-lg"
            />
          </AspectRatio>
        </CardContent>
      </Card>

      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <p className="text-2xl font-semibold text-primary mt-2">
            ${Number(product.price).toFixed(2)}
          </p>
        </div>

        <p className="text-muted-foreground">{product.description}</p>

        <div className="border-t pt-6">
          <h3 className="font-semibold mb-2">Product Details</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>Category: {product.category_id}</li>
            <li>SKU: {product.id}</li>
          </ul>
        </div>

        <div className="mt-8">
          <ReviewSection
            productId={product.id}
            reviews={reviews}
            onReviewAdded={() => queryClient.invalidateQueries({ queryKey: [`/api/products/${product.id}/reviews`] })}
          />
        </div>
      </div>
    </div>
  );
}