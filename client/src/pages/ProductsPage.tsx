import { useState } from "react";
import { Link } from "wouter";
import { useQuery } from "@tanstack/react-query";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Loader2, Search } from "lucide-react";
import type { Category } from "@db/schema";

export default function ProductsPage() {
  const { data: categories = [], isLoading } = useQuery<Category[]>({
    queryKey: ["/api/categories"],
  });
  const [search, setSearch] = useState("");

  const filteredCategories = categories.filter(category =>
    category.name.toLowerCase().includes(search.toLowerCase()) ||
    (category.description?.toLowerCase() || "").includes(search.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="relative flex-1">
        <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Search categories..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="pl-9"
        />
      </div>

      {isLoading ? (
        <div className="flex justify-center py-12">
          <Loader2 className="h-8 w-8 animate-spin" />
        </div>
      ) : (
        <>
          <p className="text-muted-foreground">
            Showing {filteredCategories.length} of {categories.length} categories
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCategories.map((category) => (
              <Card key={category.id} className="flex flex-col">
                <CardContent className="flex-1 p-6">
                  <h3 className="text-xl font-semibold mb-2">{category.name}</h3>
                  {category.description && (
                    <p className="text-muted-foreground">{category.description}</p>
                  )}
                </CardContent>
                <CardFooter className="p-6 pt-0">
                  <Button asChild className="w-full">
                    <Link href={`/category/${category.slug}`}>View Products</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </>
      )}
    </div>
  );
}