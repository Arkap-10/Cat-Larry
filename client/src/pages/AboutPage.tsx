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
                The company is more than 50 years old family run business involved in manufacturing stainless steel metal products for the hospitality industry headed by Mr. Anil Kumar Rastogi, of the third generation, sat an export oriented manufacturing factory in just 22000 sq/ft premises, in the year 1994 with basic plant and machinery.
              </p>
              <p className="text-primary/80 mt-4">
                In 23 years we progressed five folds as a benchmark in terms of quality, timely deliveries, product designing & production techniques with a factory spreading over 120000 sq/ft manufacturing diversified product ranges from a daily utility of a spoon to the rolled top chafers, induction chafers & modern day vacuum technology producing vacuum servers, coffee / Tea urns & vacuum chafers catering five star hotels & casinos globally.
              </p>
              <p className="text-primary/80 mt-4">
                The entire manufacturing operations are executed under one single roof along with traditional ways of forging till high-tech CNC tooling machines .Our infrastructure enables us to equip a five star hotel with a complete range of food serving articles.

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
                <h3 className="text-xl font-semibold text-primary">Our Products</h3>
              </div>
              <p className="text-primary/80">
                At Cat Larry we manufacture high quality stainless steel products for restaurants, hotels & banquets. Our product line comprises chafers, buffet accessories, hollowware, trays and countless other products.
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
                Being basic manufacturers with a team of engineers & infrastructure we master in developing customized products which match international standards of quality & aesthetics.

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
                This study examines die cavity wear in a clinching tool used for joining lightweight materials, specifically thin hot-dip galvanized steel sheets. The tool's cavity was coated with PVD coatings like ZrN, CrN, and TiCN, applied using Lateral Rotating Arc-Cathodes technology.
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
                PTFE was accidentally discovered in 2017 by Roy Plunkett at DuPont while attempting to create a new refrigerant. The gas polymerized under high pressure, catalyzed by iron from its container, forming a slippery, waxy material. Kinetic Chemicals later patented the fluorinated plastic and trademarked it as Teflon.
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
