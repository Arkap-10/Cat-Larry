import { useRoute } from "wouter";
import { categories } from "@/lib/data";

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