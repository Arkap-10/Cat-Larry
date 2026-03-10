import { useState, useMemo } from "react";
import { useSearch } from "wouter";
import { categories, products, type Product } from "@/lib/data";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ImageViewer } from "@/components/ImageViewer";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ChevronRight, Package, Sparkles, Ruler, Palette } from "lucide-react";

function getProductType(product: Product, categorySlug: string): string {
  const name = product.name.toUpperCase();

  if (categorySlug === "risers") {
    if (name.includes("DISPLAY STAND")) return "Display Stand";
    if (name.includes("DISPLAY STOOL")) return "Display Stool";
    if (name.includes("HEXAGON")) return "Hexagon Riser";
    return "Square Riser";
  }
  if (categorySlug === "cereal-range") {
    if (name.includes("JUICE")) return "Juice Dispenser";
    if (name.includes("REVOLVING")) return "Revolving Cereal Dispenser";
    return "Cereal Dispenser";
  }
  if (categorySlug === "goose-holloware") {
    if (name.includes("WATER PITCHER")) return "Water Pitcher";
    if (name.includes("COFFEE POT")) return "Coffee Pot";
    if (name.includes("CREAMER")) return "Creamer";
    if (name.includes("SUGAR BOWL")) return "Sugar Bowl";
    return "Holloware";
  }
  if (categorySlug === "king-holloware") {
    if (name.includes("COFFEE POT")) return "Coffee Pot";
    if (name.includes("WATER PITCHER")) return "Water Pitcher";
    if (name.includes("TEA POT")) return "Tea Pot";
    if (name.includes("SUGAR BOWL")) return "Sugar Bowl";
    if (name.includes("CREAMER")) return "Creamer";
    return "Holloware";
  }
  if (categorySlug === "hinge-marmite") {
    if (name.includes("6 QT")) return "6 QT Marmite";
    if (name.includes("11 QT")) return "11 QT Marmite";
    return "Hinge Marmite";
  }
  if (categorySlug.includes("chafer")) {
    if (name.includes("FRY HANDLE")) return "With Fry Handle";
    if (name.includes("WHITE TEFLON")) return "White Teflon";
    if (name.includes("ROSE GOLD")) return "Rose Gold";
    if (name.includes("PVD GOLD") || name.includes("GOLD")) return "PVD Gold";
    if (name.includes("SS")) return "Stainless Steel";
    return "Chafer";
  }
  if (categorySlug === "roll-top-chafers") {
    if (name.includes("FULL")) return "Full Size";
    if (name.includes("MINI")) return "Mini";
    return "Roll Top";
  }
  if (categorySlug === "teflon-servers") {
    if (name.includes("OVAL")) return "Oval";
    if (name.includes("RECTANGULAR")) return "Rectangular";
    if (name.includes("ROUND")) return "Round";
    if (name.includes("SQUARE")) return "Square";
    return "Server";
  }

  return "Product";
}

function extractDimensions(product: Product): string | null {
  const desc = product.description || product.name;
  const dimMatch = desc.match(/(\d+[\s''"×xX]+[\d\s''"×xX.]+)/);
  if (dimMatch) return dimMatch[0].trim();

  const features = product.features || [];
  for (const f of features) {
    const fMatch = f.match(/DIMENSION[S]?\s*:?\s*(.*)/i);
    if (fMatch) return fMatch[1].trim();
  }
  return null;
}

export default function ProductsPage() {
  const searchString = useSearch();
  const urlParams = new URLSearchParams(searchString);
  const initialCategory = urlParams.get("category");

  const [selectedCategorySlug, setSelectedCategorySlug] = useState<string>(
    (initialCategory && categories.find(c => c.slug === initialCategory)?.slug) || categories[0]?.slug || ""
  );
  const productsByCategory = useMemo(() => {
    const map: Record<string, Product[]> = {};
    for (const cat of categories) {
      map[cat.slug] = products.filter(p => p.categorySlug === cat.slug);
    }
    return map;
  }, []);

  const initialProductId = useMemo(() => {
    const catProducts = productsByCategory[selectedCategorySlug] || [];
    return catProducts[0]?.id || "";
  }, []);

  const [selectedProductId, setSelectedProductId] = useState<string>(initialProductId);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const typesByCategory = useMemo(() => {
    const map: Record<string, string[]> = {};
    for (const cat of categories) {
      const catProducts = productsByCategory[cat.slug] || [];
      const types = [...new Set(catProducts.map(p => getProductType(p, cat.slug)))];
      map[cat.slug] = types;
    }
    return map;
  }, [productsByCategory]);

  const currentProducts = productsByCategory[selectedCategorySlug] || [];
  const selectedProduct = currentProducts.find(p => p.id === selectedProductId) || currentProducts[0] || null;
  const currentCategory = categories.find(c => c.slug === selectedCategorySlug);
  const dimensions = selectedProduct ? extractDimensions(selectedProduct) : null;

  const handleCategorySelect = (slug: string) => {
    setSelectedCategorySlug(slug);
    const catProducts = productsByCategory[slug] || [];
    setSelectedProductId(catProducts[0]?.id || "");
  };

  const handleProductSelect = (productId: string) => {
    setSelectedProductId(productId);
  };

  return (
    <div className="py-6 space-y-4">
      <h1 className="text-2xl font-bold">Our Products</h1>

      <div className="flex flex-col lg:flex-row gap-4 min-h-[calc(100vh-12rem)]">
        {/* Category Sidebar */}
        <div className="lg:w-72 w-full shrink-0">
          <Card className="h-full">
            <CardContent className="p-0">
              <ScrollArea className="lg:h-[calc(100vh-14rem)] h-auto">
                <div className="p-3">
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3 px-2">
                    Categories
                  </p>
                  <Accordion type="single" collapsible value={selectedCategorySlug} onValueChange={(val) => { if (val) handleCategorySelect(val); }}>
                    {categories.map((cat) => {
                      const catProducts = productsByCategory[cat.slug] || [];
                      const types = typesByCategory[cat.slug] || [];
                      return (
                        <AccordionItem key={cat.slug} value={cat.slug} className="border-b-0">
                          <AccordionTrigger className="px-2 py-2 text-sm hover:no-underline hover:bg-accent/50 rounded-md">
                            <span className="flex items-center gap-2 text-left">
                              <Package className="h-4 w-4 shrink-0 text-primary" />
                              <span className={selectedCategorySlug === cat.slug ? "font-semibold text-primary" : ""}>
                                {cat.name}
                              </span>
                            </span>
                          </AccordionTrigger>
                          <AccordionContent className="pb-1 pt-0 px-2">
                            <Select
                              value={catProducts.some(p => p.id === selectedProductId) ? selectedProductId : ""}
                              onValueChange={handleProductSelect}
                            >
                              <SelectTrigger className="w-full text-xs h-9">
                                <SelectValue placeholder="Select a product..." />
                              </SelectTrigger>
                              <SelectContent>
                                {types.length > 1 ? (
                                  types.map(type => {
                                    const typeProducts = catProducts.filter(p => getProductType(p, cat.slug) === type);
                                    return (
                                      <SelectGroup key={type}>
                                        <SelectLabel className="text-xs">{type}</SelectLabel>
                                        {typeProducts.map(product => (
                                          <SelectItem key={product.id} value={product.id} className="text-xs">
                                            {product.name}
                                          </SelectItem>
                                        ))}
                                      </SelectGroup>
                                    );
                                  })
                                ) : (
                                  catProducts.map(product => (
                                    <SelectItem key={product.id} value={product.id} className="text-xs">
                                      {product.name}
                                    </SelectItem>
                                  ))
                                )}
                              </SelectContent>
                            </Select>
                            <p className="text-[10px] text-muted-foreground mt-1 px-1">
                              {catProducts.length} product{catProducts.length !== 1 ? "s" : ""}
                            </p>
                          </AccordionContent>
                        </AccordionItem>
                      );
                    })}
                  </Accordion>
                </div>
              </ScrollArea>
            </CardContent>
          </Card>
        </div>

        {/* Product Detail Card */}
        <div className="flex-1 min-w-0">
          {selectedProduct ? (
            <Card className="h-full overflow-hidden">
              <CardContent className="p-0 flex flex-col h-full">
                {/* Image Area - 60% */}
                <div className="relative bg-muted" style={{ minHeight: "60%" }}>
                  <div className="aspect-[4/3] lg:aspect-[16/9] w-full overflow-hidden cursor-pointer"
                    onClick={() => setSelectedImage(selectedProduct.imageUrl)}>
                    <img
                      src={selectedProduct.imageUrl}
                      alt={selectedProduct.description}
                      className="w-full h-full object-contain bg-muted transition-transform hover:scale-105"
                      onError={(e) => {
                        const img = e.target as HTMLImageElement;
                        img.src = "/images/placeholder.jpg";
                      }}
                    />
                  </div>
                  {currentCategory && (
                    <Badge className="absolute top-4 left-4" variant="secondary">
                      {currentCategory.name}
                    </Badge>
                  )}
                  {selectedProduct.price && (
                    <Badge className="absolute top-4 right-4 text-base px-3 py-1" variant="default">
                      ${selectedProduct.price}
                    </Badge>
                  )}
                </div>

                {/* Details Area - 40% */}
                <div className="p-6 space-y-4 flex-1">
                  <div>
                    <h2 className="text-xl lg:text-2xl font-bold leading-tight">
                      {selectedProduct.description}
                    </h2>
                    <p className="text-xs text-muted-foreground mt-1">
                      ID: {selectedProduct.id}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    {selectedProduct.finish && (
                      <div className="flex items-center gap-2">
                        <Palette className="h-4 w-4 text-primary" />
                        <div>
                          <p className="text-xs text-muted-foreground">Finish</p>
                          <p className="text-sm font-medium whitespace-pre-line">{selectedProduct.finish}</p>
                        </div>
                      </div>
                    )}
                    {dimensions && (
                      <div className="flex items-center gap-2">
                        <Ruler className="h-4 w-4 text-primary" />
                        <div>
                          <p className="text-xs text-muted-foreground">Dimensions</p>
                          <p className="text-sm font-medium">{dimensions}</p>
                        </div>
                      </div>
                    )}
                  </div>

                  {selectedProduct.features && selectedProduct.features.length > 0 && (
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <Sparkles className="h-4 w-4 text-primary" />
                        <h3 className="text-sm font-semibold">Features</h3>
                      </div>
                      <ul className="space-y-1">
                        {selectedProduct.features.map((feature, index) => (
                          <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <ChevronRight className="h-3 w-3 mt-1 shrink-0 text-primary" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          ) : (
            <Card className="h-full flex items-center justify-center">
              <CardContent className="text-center py-20">
                <Package className="h-16 w-16 mx-auto text-muted-foreground/30 mb-4" />
                <p className="text-muted-foreground">Select a category and product to view details</p>
              </CardContent>
            </Card>
          )}
        </div>
      </div>

      <ImageViewer
        isOpen={!!selectedImage}
        onClose={() => setSelectedImage(null)}
        imageUrl={selectedImage || ""}
        alt="Product full size view"
      />
    </div>
  );
}
