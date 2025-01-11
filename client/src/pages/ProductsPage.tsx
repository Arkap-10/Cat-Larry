import { useState } from "react";
import { Link } from "wouter";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { categories } from "@/lib/data";

export default function ProductsPage() {
  const [search, setSearch] = useState("");

  const filteredCategories = categories.filter(category =>
    category.name.toLowerCase().includes(search.toLowerCase()) ||
    (category.description?.toLowerCase() || "").includes(search.toLowerCase())
  );

  return (
    <div className="container mx-auto px-4 py-8 space-y-6">
      <h1 className="text-3xl font-bold mb-8">Our Product Categories</h1>

      <div className="relative flex-1">
        <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Search categories..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="pl-9"
        />
      </div>

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
    </div>
  );
}