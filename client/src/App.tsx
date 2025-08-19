import { Switch, Route } from "wouter";
import { ScrollArea } from "@/components/ui/scroll-area";
import NavigationMenu from "./components/NavigationMenu";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import ProductDetail from "./pages/ProductDetail";
import ContactPage from "./pages/ContactPage";
import AboutPage from "./pages/AboutPage";
import { Loader2 } from "lucide-react";

function App() {
  return (
    <div className="min-h-screen bg-background">
      <NavigationMenu />
      <ScrollArea className="h-[calc(100vh-4rem)]">
        <main className="container mx-auto px-4 py-8">
          <Switch>
            <Route path="/" component={HomePage} />
            <Route path="/about" component={AboutPage} />
            <Route path="/products" component={ProductsPage} />
            <Route path="/product/:id" component={ProductDetail} />
            <Route path="/contact" component={ContactPage} />
          </Switch>
        </main>
      </ScrollArea>
    </div>
  );
}

export default App;