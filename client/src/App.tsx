import { Switch, Route } from "wouter";
import { ScrollArea } from "@/components/ui/scroll-area";
import NavigationMenu from "./components/NavigationMenu";
import WebCraftTrademark from "./components/WebCraftTrademark";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import ProductDetail from "./pages/ProductDetail";
import CategoryPage from "./pages/CategoryPage";
import ContactPage from "./pages/ContactPage";
import AboutPage from "./pages/AboutPage";

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
            <Route path="/category/:slug" component={CategoryPage} />
            <Route path="/contact" component={ContactPage} />
          </Switch>
        </main>
      </ScrollArea>
      <WebCraftTrademark />
    </div>
  );
}

export default App;