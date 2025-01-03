import { Card, CardContent } from "@/components/ui/card";
import { Beaker, Factory, Shield, Hammer } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative -mx-4 py-24 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-black to-black" />
        </div>
        <div className="relative container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary to-primary/90">
              Our Legacy of Excellence
            </span>
          </h1>
          <p className="text-xl text-primary/80 max-w-3xl mx-auto">
            A 50-year journey of crafting premium stainless steel products for the hospitality industry
          </p>
        </div>
      </section>

      {/* Company History */}
      <section className="container mx-auto">
        <Card className="bg-gradient-to-br from-black via-black to-black/95 border-primary/20">
          <CardContent className="p-8">
            <h2 className="text-3xl font-bold mb-6 text-primary">The Organization</h2>
            <div className="prose prose-lg prose-invert max-w-none">
              <p className="text-primary/80">
                Cat Larry Exports is a prestigious family-run business with over 50 years of heritage in manufacturing stainless steel metal products for the hospitality industry. Under the leadership of Mr. Anil Kumar Rastogi, representing the third generation, the company established its export-oriented manufacturing facility in 1994.
              </p>
              <p className="text-primary/80 mt-4">
                Starting from a modest 22,000 sq/ft premises, we have expanded five-fold over 23 years, now operating from a state-of-the-art 120,000 sq/ft facility. Our growth is marked by unwavering commitment to quality, timely deliveries, innovative product design, and advanced production techniques.
              </p>
              <p className="text-primary/80 mt-4">
                Today, our product range spans from essential cutlery to sophisticated equipment like rolled top chafers, induction chafers, and modern vacuum technology products, serving five-star hotels and casinos worldwide.
              </p>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Manufacturing Capabilities */}
      <section className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center text-primary">Manufacturing Excellence</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="bg-gradient-to-br from-black via-black to-black/95 border-primary/20">
            <CardContent className="p-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Factory className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-primary">Integrated Manufacturing</h3>
              </div>
              <p className="text-primary/80">
                Our entire manufacturing operation is executed under one roof, combining traditional forging methods with high-tech CNC tooling machines. This integrated approach enables us to equip five-star hotels with a complete range of food serving articles.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-black via-black to-black/95 border-primary/20">
            <CardContent className="p-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-primary">Quality Assurance</h3>
              </div>
              <p className="text-primary/80">
                Our products meet international standards of quality and aesthetics, backed by rigorous testing and quality control processes at every stage of production.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Coating Technologies */}
      <section className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center text-primary">Advanced Coating Technologies</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="bg-gradient-to-br from-black via-black to-black/95 border-primary/20">
            <CardContent className="p-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Beaker className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-primary">PVD Coating</h3>
              </div>
              <p className="text-primary/80">
                Our advanced Physical Vapor Deposition (PVD) coating technology uses specialized materials like ZrN, CrN, and TiCN, applied using cutting-edge Lateral Rotating Arc-Cathodes technology.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-black via-black to-black/95 border-primary/20">
            <CardContent className="p-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Hammer className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-primary">Teflon Coating</h3>
              </div>
              <p className="text-primary/80">
                We utilize state-of-the-art PTFE coating technology to enhance the functionality and durability of our products, ensuring superior non-stick performance and longevity.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-black via-black to-black/95 border-primary/20 lg:col-span-1 md:col-span-2 lg:col-auto">
            <CardContent className="p-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-primary">Silver & Nickel Plating</h3>
              </div>
              <p className="text-primary/80">
                Our plating services provide exceptional durability and aesthetic appeal, meeting the highest standards of quality and finishing in the industry.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
