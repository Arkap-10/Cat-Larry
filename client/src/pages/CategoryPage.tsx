import { useRoute } from "wouter";
import { useQuery } from "@tanstack/react-query";
import { Loader2 } from "lucide-react";
import ProductCard from "@/components/ProductCard";
import type { Product, Category } from "@db/schema";

export default function CategoryPage() {
  const [, params] = useRoute("/category/:slug");
  
  const { data: category, isLoading: isCategoryLoading } = useQuery<Category>({
    queryKey: [`/api/categories/${params?.slug}`],
    enabled: !!params?.slug,
  });

  const { data: products = [], isLoading: isProductsLoading } = useQuery<Product[]>({
    queryKey: [`/api/categories/${params?.slug}/products`],
    enabled: !!params?.slug,
  });

  if (isCategoryLoading || isProductsLoading) {
    return (
      <div className="flex justify-center py-12">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    );
  }

  if (!category) {
    return <div>Category not found</div>;
  }

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">{category.name}</h1>
        {category.description && (
          <p className="text-muted-foreground">{category.description}</p>
        )}
      </div>

      {products.length === 0 ? (
        <p className="text-muted-foreground">No products available in this category.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}
