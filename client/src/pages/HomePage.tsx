import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Shield, Truck, Award, ArrowRight, Globe, Factory, Sparkles } from "lucide-react";
import { categories, products } from "@/lib/data";

const stats = [
  { value: "50+", label: "Years of Excellence", icon: Award },
  { value: "120K", label: "Sq Ft Factory", icon: Factory },
  { value: "40+", label: "Countries Served", icon: Globe },
  { value: "500+", label: "Products", icon: Sparkles },
];

const storyProducts = [
  products.find(p => p.id === "1L0PPRTB2Q"),
  products.find(p => p.id === "GWP-64-G"),
  products.find(p => p.id === "DS4TSS"),
  products.find(p => p.id === "CD-REV-3"),
].filter(Boolean);

export default function HomePage() {
  return (
    <div className="space-y-0">
      {/* Hero Section */}
      <section className="relative -mx-4 min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/hero-premium.png"
            alt="Premium hospitality equipment"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/60" />
        </div>

        <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-primary/20 animate-glow-pulse" />
        <div className="absolute bottom-1/3 right-1/3 w-64 h-64 rounded-full bg-primary/10 animate-glow-pulse delay-500" />

        <div className="relative container mx-auto px-4 py-20">
          <div className="max-w-2xl space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card text-xs uppercase tracking-[0.2em] text-primary/80 animate-fade-in-up opacity-0">
              <Sparkles className="h-3 w-3" />
              Premium Hospitality Equipment
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.9] tracking-tight animate-fade-in-up opacity-0 delay-200">
              <span className="text-gradient-gold">Crafting</span>
              <br />
              <span className="text-foreground">Excellence</span>
              <br />
              <span className="text-primary/60 text-4xl md:text-5xl lg:text-6xl font-light italic">Since 1974</span>
            </h1>

            <div className="h-px w-24 bg-gradient-to-r from-primary to-transparent animate-line-expand opacity-0 delay-300" />

            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-lg animate-fade-in-up opacity-0 delay-400">
              Manufacturing premium stainless steel hospitality products trusted by five-star hotels and casinos worldwide.
            </p>

            <div className="flex flex-wrap gap-4 animate-fade-in-up opacity-0 delay-500">
              <Button
                asChild
                size="lg"
                className="px-8 h-12 text-base bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all duration-300 hover:scale-105"
              >
                <Link href="/products">
                  Explore Collection
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="px-8 h-12 text-base border-primary/30 hover:bg-primary/10 hover:border-primary/60 transition-all duration-300"
              >
                <Link href="/about">Our Story</Link>
              </Button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-8 animate-fade-in-up opacity-0 delay-700">
          {stats.map((stat, i) => (
            <div key={i} className="hidden md:flex flex-col items-center gap-1 text-center">
              <span className="text-2xl font-bold text-gradient-gold">{stat.value}</span>
              <span className="text-[10px] uppercase tracking-wider text-muted-foreground">{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Stats Bar (mobile) */}
      <section className="md:hidden -mx-4 bg-primary/5 border-y border-primary/10">
        <div className="container mx-auto px-4 py-6">
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <span className="text-xl font-bold text-gradient-gold">{stat.value}</span>
                <p className="text-[10px] uppercase tracking-wider text-muted-foreground mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-24 -mx-4">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <p className="text-xs uppercase tracking-[0.3em] text-primary/60">Browse By Category</p>
            <h2 className="text-4xl md:text-5xl font-bold">
              <span className="text-gradient-gold">Product</span>{" "}
              <span className="text-foreground">Categories</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {categories.map((cat, i) => {
              const catProductCount = products.filter(p => p.categorySlug === cat.slug).length;
              const firstProduct = products.find(p => p.categorySlug === cat.slug);
              return (
                <Link key={cat.slug} href={`/products?category=${cat.slug}`}>
                  <Card
                    className="group cursor-pointer overflow-hidden premium-border hover-lift h-full bg-card/50 animate-fade-in-up opacity-0"
                    style={{ animationDelay: `${i * 80}ms` }}
                  >
                    <CardContent className="p-0">
                      {firstProduct && (
                        <div className="aspect-[4/3] overflow-hidden bg-muted">
                          <img
                            src={firstProduct.imageUrl}
                            alt={cat.name}
                            className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                            onError={(e) => {
                              const img = e.target as HTMLImageElement;
                              img.src = "/images/placeholder.jpg";
                            }}
                          />
                        </div>
                      )}
                      <div className="p-4 space-y-1">
                        <h3 className="font-semibold text-sm group-hover:text-primary transition-colors duration-300">
                          {cat.name}
                        </h3>
                        <p className="text-[10px] text-muted-foreground uppercase tracking-wider">
                          {catProductCount} Products
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Value Propositions */}
      <section className="py-24 -mx-4">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Star,
                title: "Premium Quality",
                description: "Crafted from the finest stainless steel with advanced PVD and Teflon coating technologies for lasting durability."
              },
              {
                icon: Shield,
                title: "Trusted Worldwide",
                description: "Serving five-star hotels and casinos globally with products that meet international standards of quality and aesthetics."
              },
              {
                icon: Truck,
                title: "Global Shipping",
                description: "Direct factory-to-door delivery with secure packaging ensuring your premium products arrive in perfect condition."
              }
            ].map((item, i) => (
              <div
                key={i}
                className="group text-center space-y-5 p-8 rounded-xl premium-border hover-lift bg-card/30 animate-fade-in-up opacity-0"
                style={{ animationDelay: `${i * 150}ms` }}
              >
                <div className="relative inline-flex">
                  <div className="absolute inset-0 bg-primary/20 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gradient-gold">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Story Section */}
      <section className="py-24 -mx-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5" />
        <div className="relative container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <p className="text-xs uppercase tracking-[0.3em] text-primary/60">Our Legacy</p>
              <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                <span className="text-gradient-gold">The Art of</span>
                <br />
                <span className="text-foreground">Craftsmanship</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                With over five decades of expertise, Cat Larry has grown from a small family workshop to a 120,000 sq/ft manufacturing powerhouse. From traditional forging to high-tech CNC tooling, we master every step of production under one roof.
              </p>
              <div className="flex gap-4">
                <Button
                  asChild
                  variant="outline"
                  className="border-primary/30 hover:bg-primary/10 hover:border-primary/60"
                >
                  <Link href="/about">Learn Our Story</Link>
                </Button>
                <Button
                  asChild
                  variant="ghost"
                  className="text-primary hover:text-primary/80"
                >
                  <Link href="/contact">
                    Get in Touch <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/10 via-transparent to-primary/5 rounded-2xl blur-2xl" />
              <div className="relative grid grid-cols-2 gap-4">
                {storyProducts.map((product, i) => product && (
                  <div
                    key={product.id}
                    className={`rounded-xl overflow-hidden premium-border ${i === 0 ? 'row-span-2' : ''}`}
                  >
                    <img
                      src={product.imageUrl}
                      alt={product.description}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                      onError={(e) => {
                        const img = e.target as HTMLImageElement;
                        img.src = "/images/placeholder.jpg";
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 -mx-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-primary/5" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/10 blur-[100px]" />
        <div className="relative container mx-auto px-4 text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="text-gradient-gold">Ready to Elevate</span>
            <br />
            <span className="text-foreground">Your Hospitality?</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Partner with us for premium stainless steel products that define luxury in every detail.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="px-10 h-12 text-base bg-gradient-to-r from-primary to-primary/80 shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all duration-300 hover:scale-105"
            >
              <Link href="/contact">
                Contact Us Today
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="px-10 h-12 text-base border-primary/30 hover:bg-primary/10"
            >
              <Link href="/products">Browse Products</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="-mx-4 border-t border-primary/10 bg-background/50">
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary via-primary/80 to-primary/60 flex items-center justify-center">
                  <span className="text-background font-bold text-lg">CL</span>
                </div>
                <div>
                  <p className="font-bold text-gradient-gold">Cat Larry</p>
                  <p className="text-[10px] uppercase tracking-[0.15em] text-primary/50">Premium Exports</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                Manufacturing premium stainless steel products for the hospitality industry since 1974.
              </p>
            </div>
            <div className="space-y-4">
              <h4 className="text-sm font-semibold text-primary">Quick Links</h4>
              <div className="space-y-2">
                {[
                  { href: "/", label: "Home" },
                  { href: "/about", label: "About Us" },
                  { href: "/products", label: "Products" },
                  { href: "/contact", label: "Contact" },
                ].map(link => (
                  <Link key={link.href} href={link.href}>
                    <span className="block text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                      {link.label}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <h4 className="text-sm font-semibold text-primary">Products</h4>
              <div className="space-y-2">
                {categories.slice(0, 5).map(cat => (
                  <Link key={cat.slug} href={`/products?category=${cat.slug}`}>
                    <span className="block text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                      {cat.name}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <h4 className="text-sm font-semibold text-primary">Contact</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>anupam@catlarry.com</p>
                <p>+91-7454948779</p>
                <p>Moradabad, India</p>
              </div>
            </div>
          </div>
          <div className="border-t border-primary/10 mt-10 pt-6 text-center">
            <p className="text-xs text-muted-foreground">
              &copy; {new Date().getFullYear()} Cat Larry Exports. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
