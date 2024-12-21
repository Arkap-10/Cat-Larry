import { Switch, Route, useLocation } from "wouter";
import { ScrollArea } from "@/components/ui/scroll-area";
import NavigationMenu from "./components/NavigationMenu";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import ProductDetail from "./pages/ProductDetail";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import AccountPage from "./pages/AccountPage";
import ContactPage from "./pages/ContactPage";
import AuthPage from "./pages/AuthPage";
import { useUser } from "./hooks/use-user";
import { Loader2 } from "lucide-react";

function App() {
  const { user, isLoading } = useUser();
  const [location] = useLocation();

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  // Protected routes that require authentication
  const protectedRoutes = ['/cart', '/checkout', '/account'];
  if (!user && protectedRoutes.includes(location)) {
    return <AuthPage />;
  }

  return (
    <div className="min-h-screen bg-background">
      <NavigationMenu />
      <ScrollArea className="h-[calc(100vh-4rem)]">
        <main className="container mx-auto px-4 py-8">
          <Switch>
            <Route path="/" component={HomePage} />
            <Route path="/products" component={ProductsPage} />
            <Route path="/product/:id" component={ProductDetail} />
            <Route path="/cart" component={CartPage} />
            <Route path="/checkout" component={CheckoutPage} />
            <Route path="/account" component={AccountPage} />
            <Route path="/auth" component={AuthPage} />
            <Route path="/contact" component={ContactPage} />
          </Switch>
        </main>
      </ScrollArea>
    </div>
  );
}

export default App;
