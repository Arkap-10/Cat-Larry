import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";

export default function NavigationMenu() {
  const [location] = useLocation();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <nav className="flex items-center space-x-4 lg:space-x-6">
          <Button
            asChild
            variant={location === "/" ? "secondary" : "ghost"}
          >
            <Link href="/">Home</Link>
          </Button>
          <Button
            asChild
            variant={location === "/about" ? "secondary" : "ghost"}
          >
            <Link href="/about">About</Link>
          </Button>
          <Button
            asChild
            variant={location === "/products" ? "secondary" : "ghost"}
          >
            <Link href="/products">Products</Link>
          </Button>
          <Button
            asChild
            variant={location === "/contact" ? "secondary" : "ghost"}
          >
            <Link href="/contact">Contact</Link>
          </Button>
        </nav>
      </div>
    </header>
  );
}