import { Link, useLocation } from "wouter";
import { useUser } from "@/hooks/use-user";
import { useCart } from "@/hooks/use-cart";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ShoppingCart, User } from "lucide-react";

export default function NavigationMenu() {
  const [location] = useLocation();
  const { user } = useUser();
  const { cartItems } = useCart();

  const cartItemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

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

        <div className="ml-auto flex items-center space-x-4">
          <Button
            asChild
            variant="ghost"
            size="icon"
            className="relative"
          >
            <Link href="/cart">
              <ShoppingCart className="h-5 w-5" />
              {cartItemCount > 0 && (
                <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center">
                  {cartItemCount}
                </span>
              )}
            </Link>
          </Button>

          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <User className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem asChild>
                  <Link href="/account">My Account</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Button asChild variant="secondary">
              <Link href="/account">Sign In</Link>
            </Button>
          )}
        </div>
      </div>
    </header>
  );
}