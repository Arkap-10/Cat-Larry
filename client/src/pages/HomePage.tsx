import { Link } from "wouter";
import { useProducts } from "@/hooks/use-products";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";

export default function HomePage() {
  const { products, isLoading } = useProducts();
  const featuredProducts = products.filter(p => p.featured);

  return (
    <div className="space-y-12">
      <section className="relative h-[500px] -mx-4 flex items-center justify-center bg-gradient-to-r from-primary/10 to-primary/5">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-primary">Premium Cutlery Collection</h1>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Discover our handcrafted selection of professional-grade kitchen knives and culinary tools
          </p>
          <Button asChild size="lg">
            <Link href="/products">Shop Now</Link>
          </Button>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-6">Featured Products</h2>
        {isLoading ? (
          <div className="flex justify-center">
            <Loader2 className="h-8 w-8 animate-spin" />
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </section>

      <section className="grid md:grid-cols-2 gap-8">
        <div className="bg-muted p-8 rounded-lg">
          <h3 className="text-xl font-semibold mb-4">About Our Craft</h3>
          <p className="text-muted-foreground">
            With decades of experience in crafting premium cutlery, we bring you the finest selection
            of professional-grade kitchen tools. Each piece is carefully designed and tested to meet
            the highest standards of quality and performance.
          </p>
        </div>
        <div className="bg-muted p-8 rounded-lg">
          <h3 className="text-xl font-semibold mb-4">Expert Support</h3>
          <p className="text-muted-foreground">
            Our team of culinary experts is here to help you choose the perfect tools for your kitchen.
            Get personalized recommendations and professional advice to enhance your cooking experience.
          </p>
        </div>
      </section>
    </div>
  );
}
