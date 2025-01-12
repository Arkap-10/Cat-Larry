import { useRoute, Link } from "wouter";
import { categories } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";

export default function CategoryPage() {
  const [, params] = useRoute("/category/:slug");

  const category = categories.find(cat => cat.slug === params?.slug);

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

      {/* For now, we'll show a message since we don't have products data yet */}
      <div className="text-center py-8">
        <p className="text-muted-foreground">
          Products for this category will be available soon.
        </p>
      </div>
    </div>
  );
}