import { useRoute, Link } from "wouter";
import { categories, products } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft } from "lucide-react";

export default function CategoryPage() {
  const [, params] = useRoute("/category/:slug");

  const category = categories.find(cat => cat.slug === params?.slug);
  const categoryProducts = products.filter(product => product.categorySlug === params?.slug);

  if (!category) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Category Not Found</h1>
          <p className="text-muted-foreground">
            The category you're looking for doesn't exist or has been removed.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 space-y-6">
      <div className="flex items-center gap-4">
        <Button asChild variant="outline">
          <Link href="/products">
            <ChevronLeft className="h-4 w-4 mr-2" />
            Back to Products
          </Link>
        </Button>
      </div>

      <div className="space-y-2">
        <h1 className="text-3xl font-bold">{category.name}</h1>
        {category.description && (
          <p className="text-muted-foreground">{category.description}</p>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categoryProducts.map((product) => (
          <Card key={product.id} className="flex flex-col">
            <CardContent className="p-6">
              <div className="space-y-2">
                <div className="flex justify-between items-start">
                  <h3 className="font-medium">{product.id}</h3>
                  <Badge variant="secondary">{product.finish}</Badge>
                </div>
                <p className="text-sm text-muted-foreground">{product.description}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {categoryProducts.length === 0 && (
        <div className="text-center py-8">
          <p className="text-muted-foreground">
            No products available in this category.
          </p>
        </div>
      )}
    </div>
  );
}