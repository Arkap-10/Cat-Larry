import { useState, useMemo } from "react";
import { useSearch } from "wouter";
import { categories, products, type Product } from "@/lib/data";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ImageViewer } from "@/components/ImageViewer";
import { ChevronRight, ChevronLeft, Package, Sparkles, Ruler, Palette, Check } from "lucide-react";
import { cn } from "@/lib/utils";

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

  // Mobile step: 1 = categories, 2 = variants, 3 = product detail
  const [mobileStep, setMobileStep] = useState<1 | 2 | 3>(
    initialCategory ? 2 : 1
  );

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
  const currentTypes = typesByCategory[selectedCategorySlug] || [];
  const selectedProduct = currentProducts.find(p => p.id === selectedProductId) || currentProducts[0] || null;
  const currentCategory = categories.find(c => c.slug === selectedCategorySlug);
  const dimensions = selectedProduct ? extractDimensions(selectedProduct) : null;

  const handleCategorySelect = (slug: string) => {
    setSelectedCategorySlug(slug);
    const catProducts = productsByCategory[slug] || [];
    setSelectedProductId(catProducts[0]?.id || "");
    setMobileStep(2);
  };

  const handleProductSelect = (id: string) => {
    setSelectedProductId(id);
    setMobileStep(3);
  };

  const panelHeight = "lg:h-[calc(100vh-10rem)]";

  const variantPanel = (
    <div className="p-2 space-y-3">
      {currentTypes.length > 1 ? (
        currentTypes.map((type) => {
          const typeProducts = currentProducts.filter(
            p => getProductType(p, selectedCategorySlug) === type
          );
          return (
            <div key={type}>
              <p className="text-[10px] font-semibold uppercase tracking-widest text-primary/60 px-3 py-1.5">
                {type}
              </p>
              <div className="space-y-0.5">
                {typeProducts.map((product) => {
                  const isSelected = selectedProductId === product.id;
                  return (
                    <button
                      key={product.id}
                      onClick={() => handleProductSelect(product.id)}
                      className={cn(
                        "w-full text-left flex items-center gap-2 px-3 py-3 rounded-md text-sm transition-all duration-200 leading-snug",
                        isSelected
                          ? "bg-primary/15 text-primary font-medium"
                          : "text-muted-foreground hover:bg-accent/50 hover:text-foreground"
                      )}
                    >
                      <span className="flex-1">{product.name}</span>
                      {isSelected
                        ? <Check className="h-4 w-4 shrink-0 text-primary" />
                        : <ChevronRight className="h-4 w-4 shrink-0 opacity-30" />
                      }
                    </button>
                  );
                })}
              </div>
            </div>
          );
        })
      ) : (
        <div className="space-y-0.5">
          {currentProducts.map((product) => {
            const isSelected = selectedProductId === product.id;
            return (
              <button
                key={product.id}
                onClick={() => handleProductSelect(product.id)}
                className={cn(
                  "w-full text-left flex items-center gap-2 px-3 py-3 rounded-md text-sm transition-all duration-200 leading-snug",
                  isSelected
                    ? "bg-primary/15 text-primary font-medium"
                    : "text-muted-foreground hover:bg-accent/50 hover:text-foreground"
                )}
              >
                <span className="flex-1">{product.name}</span>
                {isSelected
                  ? <Check className="h-4 w-4 shrink-0 text-primary" />
                  : <ChevronRight className="h-4 w-4 shrink-0 opacity-30" />
                }
              </button>
            );
          })}
        </div>
      )}
    </div>
  );

  const productDetailContent = selectedProduct ? (
    <>
      <div className="relative bg-muted flex-[3] min-h-0">
        <div
          className="w-full h-full overflow-hidden cursor-pointer"
          onClick={() => setSelectedImage(selectedProduct.imageUrl)}
        >
          <img
            src={selectedProduct.imageUrl}
            alt={selectedProduct.description}
            className="w-full h-full object-contain bg-muted transition-transform duration-500 hover:scale-105"
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
        <p className="absolute bottom-3 right-3 text-[10px] text-muted-foreground/50 italic">
          Click image to enlarge
        </p>
      </div>

      <div className="flex-[2] p-6 space-y-4 overflow-y-auto border-t border-border/50">
        <div>
          <h2 className="text-xl lg:text-2xl font-bold leading-tight">
            {selectedProduct.description}
          </h2>
          <p className="text-xs text-muted-foreground mt-1">
            Ref: {selectedProduct.id}
          </p>
        </div>

        <div className="flex flex-wrap gap-6">
          {selectedProduct.finish && (
            <div className="flex items-start gap-2">
              <Palette className="h-4 w-4 text-primary mt-0.5 shrink-0" />
              <div>
                <p className="text-[10px] uppercase tracking-wider text-muted-foreground">Finish</p>
                <p className="text-sm font-medium whitespace-pre-line leading-snug mt-0.5">{selectedProduct.finish}</p>
              </div>
            </div>
          )}
          {dimensions && (
            <div className="flex items-start gap-2">
              <Ruler className="h-4 w-4 text-primary mt-0.5 shrink-0" />
              <div>
                <p className="text-[10px] uppercase tracking-wider text-muted-foreground">Dimensions</p>
                <p className="text-sm font-medium mt-0.5">{dimensions}</p>
              </div>
            </div>
          )}
        </div>

        {selectedProduct.features && selectedProduct.features.length > 0 && (
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Sparkles className="h-4 w-4 text-primary" />
              <h3 className="text-sm font-semibold uppercase tracking-wider">Features</h3>
            </div>
            <ul className="space-y-1.5">
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
    </>
  ) : null;

  return (
    <div className="py-6 space-y-4">
      <h1 className="text-2xl font-bold">Our Products</h1>

      {/* ── MOBILE LAYOUT (hidden on lg+) ── */}
      <div className="lg:hidden">

        {/* Step 1 — Category List */}
        {mobileStep === 1 && (
          <Card>
            <CardContent className="p-0">
              <div className="px-4 pt-4 pb-2 border-b border-border/50">
                <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
                  Categories
                </p>
              </div>
              <div className="divide-y divide-border/30">
                {categories.map((cat) => {
                  const count = (productsByCategory[cat.slug] || []).length;
                  return (
                    <button
                      key={cat.slug}
                      onClick={() => handleCategorySelect(cat.slug)}
                      className="w-full text-left flex items-center gap-3 px-4 py-4 transition-colors hover:bg-accent/50 active:bg-accent"
                    >
                      <Package className="h-4 w-4 shrink-0 text-primary/60" />
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium leading-tight">{cat.name}</p>
                        <p className="text-xs text-muted-foreground mt-0.5">{count} product{count !== 1 ? "s" : ""}</p>
                      </div>
                      <ChevronRight className="h-4 w-4 shrink-0 text-muted-foreground/40" />
                    </button>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Step 2 — Variant / Product List */}
        {mobileStep === 2 && (
          <Card>
            <CardContent className="p-0">
              <div className="px-4 pt-3 pb-2 border-b border-border/50 flex items-center gap-3">
                <button
                  onClick={() => setMobileStep(1)}
                  className="flex items-center gap-1 text-primary text-sm font-medium"
                >
                  <ChevronLeft className="h-4 w-4" />
                  <span>Categories</span>
                </button>
                <span className="text-muted-foreground/40 text-sm">›</span>
                <p className="text-sm font-semibold truncate flex-1">{currentCategory?.name}</p>
              </div>
              {variantPanel}
            </CardContent>
          </Card>
        )}

        {/* Step 3 — Product Detail */}
        {mobileStep === 3 && selectedProduct && (
          <div className="space-y-0">
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <div className="px-4 pt-3 pb-2 border-b border-border/50 flex items-center gap-2">
                  <button
                    onClick={() => setMobileStep(2)}
                    className="flex items-center gap-1 text-primary text-sm font-medium"
                  >
                    <ChevronLeft className="h-4 w-4" />
                    <span>{currentCategory?.name}</span>
                  </button>
                </div>
                <div className="flex flex-col">
                  {/* Image */}
                  <div
                    className="relative bg-muted cursor-pointer"
                    style={{ aspectRatio: "4/3" }}
                    onClick={() => setSelectedImage(selectedProduct.imageUrl)}
                  >
                    <img
                      src={selectedProduct.imageUrl}
                      alt={selectedProduct.description}
                      className="w-full h-full object-contain"
                      onError={(e) => {
                        const img = e.target as HTMLImageElement;
                        img.src = "/images/placeholder.jpg";
                      }}
                    />
                    <p className="absolute bottom-2 right-3 text-[10px] text-muted-foreground/50 italic">
                      Tap to enlarge
                    </p>
                  </div>

                  {/* Details */}
                  <div className="p-5 space-y-4 border-t border-border/50">
                    <div>
                      <h2 className="text-lg font-bold leading-tight">
                        {selectedProduct.description}
                      </h2>
                      <p className="text-xs text-muted-foreground mt-1">Ref: {selectedProduct.id}</p>
                    </div>

                    <div className="flex flex-wrap gap-5">
                      {selectedProduct.finish && (
                        <div className="flex items-start gap-2">
                          <Palette className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                          <div>
                            <p className="text-[10px] uppercase tracking-wider text-muted-foreground">Finish</p>
                            <p className="text-sm font-medium whitespace-pre-line leading-snug mt-0.5">{selectedProduct.finish}</p>
                          </div>
                        </div>
                      )}
                      {dimensions && (
                        <div className="flex items-start gap-2">
                          <Ruler className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                          <div>
                            <p className="text-[10px] uppercase tracking-wider text-muted-foreground">Dimensions</p>
                            <p className="text-sm font-medium mt-0.5">{dimensions}</p>
                          </div>
                        </div>
                      )}
                    </div>

                    {selectedProduct.features && selectedProduct.features.length > 0 && (
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <Sparkles className="h-4 w-4 text-primary" />
                          <h3 className="text-sm font-semibold uppercase tracking-wider">Features</h3>
                        </div>
                        <ul className="space-y-2">
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
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>

      {/* ── DESKTOP LAYOUT (hidden on mobile) ── */}
      <div className="hidden lg:flex flex-row gap-3 min-h-[calc(100vh-10rem)]">

        {/* Panel 1 — Categories */}
        <div className="w-48 shrink-0">
          <Card className="h-full">
            <CardContent className="p-0 h-full flex flex-col">
              <div className="px-3 pt-3 pb-2 border-b border-border/50">
                <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
                  Categories
                </p>
              </div>
              <ScrollArea className={cn(panelHeight, "flex-1")}>
                <div className="p-2 space-y-0.5">
                  {categories.map((cat) => {
                    const isActive = selectedCategorySlug === cat.slug;
                    return (
                      <button
                        key={cat.slug}
                        onClick={() => handleCategorySelect(cat.slug)}
                        className={cn(
                          "w-full text-left flex items-center gap-2 px-3 py-2.5 rounded-md text-sm transition-all duration-200",
                          isActive
                            ? "bg-primary/15 text-primary font-medium"
                            : "text-muted-foreground hover:bg-accent/50 hover:text-foreground"
                        )}
                      >
                        <Package className={cn("h-3.5 w-3.5 shrink-0", isActive ? "text-primary" : "text-muted-foreground/50")} />
                        <span className="leading-tight">{cat.name}</span>
                        {isActive && <ChevronRight className="h-3 w-3 ml-auto text-primary shrink-0" />}
                      </button>
                    );
                  })}
                </div>
              </ScrollArea>
            </CardContent>
          </Card>
        </div>

        {/* Panel 2 — Variants */}
        <div className="w-56 shrink-0">
          <Card className="h-full">
            <CardContent className="p-0 h-full flex flex-col">
              <div className="px-3 pt-3 pb-2 border-b border-border/50">
                <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground truncate">
                  {currentCategory?.name || "Variants"}
                </p>
                <p className="text-[10px] text-muted-foreground/60 mt-0.5">
                  {currentProducts.length} product{currentProducts.length !== 1 ? "s" : ""}
                </p>
              </div>
              <ScrollArea className={cn(panelHeight, "flex-1")}>
                <div className="p-2 space-y-3">
                  {currentTypes.length > 1 ? (
                    currentTypes.map((type) => {
                      const typeProducts = currentProducts.filter(
                        p => getProductType(p, selectedCategorySlug) === type
                      );
                      return (
                        <div key={type}>
                          <p className="text-[10px] font-semibold uppercase tracking-widest text-primary/60 px-3 py-1.5">
                            {type}
                          </p>
                          <div className="space-y-0.5">
                            {typeProducts.map((product) => {
                              const isSelected = selectedProductId === product.id;
                              return (
                                <button
                                  key={product.id}
                                  onClick={() => setSelectedProductId(product.id)}
                                  className={cn(
                                    "w-full text-left flex items-start gap-2 px-3 py-2.5 rounded-md text-xs transition-all duration-200 leading-snug",
                                    isSelected
                                      ? "bg-primary/15 text-primary font-medium"
                                      : "text-muted-foreground hover:bg-accent/50 hover:text-foreground"
                                  )}
                                >
                                  <span className="flex-1">{product.name}</span>
                                  {isSelected && (
                                    <Check className="h-3 w-3 shrink-0 mt-0.5 text-primary" />
                                  )}
                                </button>
                              );
                            })}
                          </div>
                        </div>
                      );
                    })
                  ) : (
                    <div className="space-y-0.5">
                      {currentProducts.map((product) => {
                        const isSelected = selectedProductId === product.id;
                        return (
                          <button
                            key={product.id}
                            onClick={() => setSelectedProductId(product.id)}
                            className={cn(
                              "w-full text-left flex items-start gap-2 px-3 py-2.5 rounded-md text-xs transition-all duration-200 leading-snug",
                              isSelected
                                ? "bg-primary/15 text-primary font-medium"
                                : "text-muted-foreground hover:bg-accent/50 hover:text-foreground"
                            )}
                          >
                            <span className="flex-1">{product.name}</span>
                            {isSelected && (
                              <Check className="h-3 w-3 shrink-0 mt-0.5 text-primary" />
                            )}
                          </button>
                        );
                      })}
                    </div>
                  )}
                </div>
              </ScrollArea>
            </CardContent>
          </Card>
        </div>

        {/* Panel 3 — Product Detail */}
        <div className="flex-1 min-w-0">
          {selectedProduct ? (
            <Card className="h-full overflow-hidden flex flex-col">
              <CardContent className="p-0 flex flex-col h-full">
                {productDetailContent}
              </CardContent>
            </Card>
          ) : (
            <Card className="h-full flex items-center justify-center">
              <CardContent className="text-center py-20">
                <Package className="h-16 w-16 mx-auto text-muted-foreground/30 mb-4" />
                <p className="text-muted-foreground">Select a category to browse products</p>
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
