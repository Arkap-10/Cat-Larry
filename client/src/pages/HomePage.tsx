import { Link } from "wouter";
import { useProducts } from "@/hooks/use-products";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Loader2, Star, Shield, Package } from "lucide-react";

export default function HomePage() {
  const { products, isLoading } = useProducts();
  const featuredProducts = products.filter(p => p.featured);

  return (
    <div className="space-y-16">
      <section className="relative h-[600px] -mx-4 flex items-center justify-center bg-gradient-to-r from-primary/10 via-primary/5 to-background">
        <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10" />
        <div className="relative text-center space-y-6 max-w-2xl mx-auto px-4">
          <h1 className="text-5xl font-bold text-primary tracking-tight">
            Precision Crafted Cutlery
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Experience the artistry of fine dining with our handcrafted collection of premium kitchen knives and culinary tools.
          </p>
          <div className="flex gap-4 justify-center">
            <Button asChild size="lg" className="px-8">
              <Link href="/products">Shop Collection</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="px-8">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Featured Collection</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover our most sought-after pieces, each one a testament to superior craftsmanship and timeless design.
          </p>
        </div>

        {isLoading ? (
          <div className="flex justify-center">
            <Loader2 className="h-8 w-8 animate-spin" />
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </section>

      <section className="container mx-auto py-16 bg-muted/30 rounded-lg">
        <div className="grid md:grid-cols-3 gap-8 px-8">
          <div className="text-center space-y-4">
            <Star className="h-8 w-8 mx-auto text-primary" />
            <h3 className="text-xl font-semibold">Premium Quality</h3>
            <p className="text-muted-foreground">
              Crafted from the finest materials, ensuring exceptional durability and performance.
            </p>
          </div>
          <div className="text-center space-y-4">
            <Shield className="h-8 w-8 mx-auto text-primary" />
            <h3 className="text-xl font-semibold">Lifetime Warranty</h3>
            <p className="text-muted-foreground">
              Our confidence in quality backed by a comprehensive lifetime warranty.
            </p>
          </div>
          <div className="text-center space-y-4">
            <Package className="h-8 w-8 mx-auto text-primary" />
            <h3 className="text-xl font-semibold">Free Shipping</h3>
            <p className="text-muted-foreground">
              Complimentary shipping on all orders over $150 within the United States.
            </p>
          </div>
        </div>
      </section>

      <section className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">The Art of Craftsmanship</h3>
            <p className="text-muted-foreground leading-relaxed">
              With over five decades of expertise in crafting premium cutlery, we bring you the finest selection
              of professional-grade kitchen tools. Each piece is meticulously designed and rigorously tested to meet
              the highest standards of quality and performance.
            </p>
            <Button asChild variant="outline">
              <Link href="/about">Learn Our Story</Link>
            </Button>
          </div>
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">Expert Support</h3>
            <p className="text-muted-foreground leading-relaxed">
              Our team of culinary experts is dedicated to helping you select the perfect tools for your kitchen.
              Get personalized recommendations and professional advice to enhance your cooking experience and create
              memorable dining moments.
            </p>
            <Button asChild variant="outline">
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}