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
      <section className="relative h-[600px] -mx-4 flex items-center justify-center overflow-hidden">
        {/* Background layers */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-primary/10 to-background" />

        {/* Cutlery Pattern Background */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPGcgZmlsbD0iY3VycmVudENvbG9yIiBmaWxsLW9wYWNpdHk9IjAuMDUiPgogICAgPHBhdGggZD0iTTMwIDIwaDJ2NjBoLTJ6TTY4IDIwaDJ2NjBoLTJ6Ii8+CiAgICA8cGF0aCBkPSJNMjUgNDBoMTB2MmgtMTB6TTY1IDQwaDEwdjJoLTEweiIvPgogICAgPHBhdGggZD0iTTI1IDYwaDEwdjJoLTEwek02NSA2MGgxMHYyaC0xMHoiLz4KICAgIDxwYXRoIGQ9Ik00MCAyNWMyLjc2IDAgNSAyLjI0IDUgNXYyMGMwIDIuNzYtMi4yNCA1LTUgNXMtNS0yLjI0LTUtNVYzMGMwLTIuNzYgMi4yNC01IDUtNXpNNjAgMjVjMi43NiAwIDUgMi4yNCA1IDV2MjBjMCAyLjc2LTIuMjQgNS01IDVzLTUtMi4yNC01LTVWMzBjMC0yLjc2IDIuMjQtNSA1LTV6Ii8+CiAgPC9nPgo8L3N2Zz4=')] opacity-[0.25] transform scale-[2]" />

        {/* Animated Grid Pattern */}
        <div className="absolute inset-0">
          <div className="grid grid-cols-[repeat(auto-fill,minmax(8rem,1fr))] h-full">
            {Array.from({ length: 36 }).map((_, i) => (
              <div
                key={i}
                className="border-[0.5px] border-primary/10 relative overflow-hidden transition-all duration-1000"
                style={{
                  opacity: Math.random() * 0.3 + 0.2,
                  transform: `rotate(${Math.random() * 45}deg)`,
                }}
              >
                <div 
                  className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent"
                  style={{
                    transformOrigin: 'center',
                    animation: `pulse ${8 + Math.random() * 4}s infinite`
                  }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-40 h-40 rounded-full bg-primary/10 blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-48 h-48 rounded-full bg-primary/10 blur-3xl animate-pulse" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />
        </div>

        {/* Content */}
        <div className="relative text-center space-y-8 max-w-2xl mx-auto px-4">
          <div className="space-y-4">
            <h1 className="text-5xl font-bold tracking-tight leading-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80">
                Precision Crafted
                <span className="block mt-2">Cutlery</span>
              </span>
            </h1>
            <div className="h-1 w-20 mx-auto bg-gradient-to-r from-primary/20 via-primary/40 to-primary/20 rounded-full" />
          </div>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Experience the artistry of fine dining with our handcrafted collection of premium kitchen knives and culinary tools.
          </p>
          <div className="flex gap-4 justify-center">
            <Button 
              asChild 
              size="lg" 
              className="px-8 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/10"
            >
              <Link href="/products">Shop Collection</Link>
            </Button>
            <Button 
              asChild 
              size="lg" 
              variant="outline" 
              className="px-8 transition-all duration-300 hover:bg-primary/5 hover:border-primary/50"
            >
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

<style jsx global>{`
  @keyframes pulse {
    0%, 100% { transform: scale(1); opacity: 0.1; }
    50% { transform: scale(1.1); opacity: 0.2; }
  }
`}</style>