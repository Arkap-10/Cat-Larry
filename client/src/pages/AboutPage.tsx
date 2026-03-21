import { Card, CardContent } from "@/components/ui/card";
import { Beaker, Factory, Shield, Hammer, Award, Globe, Users, Sparkles } from "lucide-react";

const milestones = [
  { year: "1974", title: "Founded", desc: "Family business established in Moradabad" },
  { year: "1994", title: "Export Factory", desc: "22,000 sq/ft factory with basic machinery" },
  { year: "2010", title: "Expansion", desc: "Advanced CNC tooling & PVD coating" },
  { year: "Today", title: "Global Leader", desc: "120,000 sq/ft serving 5-star hotels worldwide" },
];

export default function AboutPage() {
  return (
    <div className="space-y-0">
      <section className="relative -mx-4 py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-primary/5" />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 rounded-full bg-primary/10 blur-[100px] animate-glow-pulse" />
        <div className="relative container mx-auto px-4 text-center space-y-6">
          <p className="text-xs uppercase tracking-[0.3em] text-primary/60 animate-fade-in-up opacity-0">
            Our Heritage
          </p>
          <h1 className="text-5xl md:text-7xl font-bold animate-fade-in-up opacity-0 delay-200">
            <span className="text-gradient-gold">Legacy of</span>
            <br />
            <span className="text-foreground">Excellence</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in-up opacity-0 delay-300">
            A 50-year journey of crafting premium stainless steel products for the hospitality industry
          </p>
          <div className="h-px w-24 mx-auto bg-gradient-to-r from-transparent via-primary to-transparent animate-line-expand opacity-0 delay-400" />
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 -mx-4 bg-gradient-to-b from-transparent via-primary/[0.03] to-transparent">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {milestones.map((m, i) => (
              <div
                key={i}
                className="text-center space-y-3 p-6 rounded-xl premium-border bg-card/30 animate-fade-in-up opacity-0"
                style={{ animationDelay: `${i * 150}ms` }}
              >
                <span className="text-3xl font-bold text-gradient-gold">{m.year}</span>
                <h3 className="text-sm font-semibold text-foreground">{m.title}</h3>
                <p className="text-xs text-muted-foreground">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 -mx-4">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-xs uppercase tracking-[0.3em] text-primary/60">The Organization</p>
              <h2 className="text-3xl md:text-4xl font-bold text-gradient-gold">Our Story</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  The company is more than 50 years old family run business involved in manufacturing stainless steel metal products for the hospitality industry headed by Mr. Anil Kumar Rastogi, of the third generation.
                </p>
                <p>
                  Starting as an export oriented manufacturing factory in just 22,000 sq/ft premises in 1994 with basic plant and machinery, we have progressed five folds as a benchmark in terms of quality, timely deliveries, product designing & production techniques.
                </p>
                <p>
                  Today our factory spreads over 120,000 sq/ft manufacturing diversified product ranges from a daily utility of a spoon to rolled top chafers, induction chafers & modern day vacuum technology, catering five star hotels & casinos globally.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Factory, label: "120,000 sq/ft", sub: "Manufacturing Facility" },
                { icon: Users, label: "3rd Generation", sub: "Family Business" },
                { icon: Globe, label: "Global Reach", sub: "5-Star Hotels & Casinos" },
                { icon: Award, label: "50+ Years", sub: "Industry Experience" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="p-5 rounded-xl premium-border bg-card/30 text-center space-y-3 hover-lift animate-fade-in-up opacity-0"
                  style={{ animationDelay: `${i * 100}ms` }}
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mx-auto">
                    <item.icon className="h-5 w-5 text-primary" />
                  </div>
                  <p className="font-semibold text-sm text-gradient-gold">{item.label}</p>
                  <p className="text-[10px] uppercase tracking-wider text-muted-foreground">{item.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Manufacturing */}
      <section className="py-20 -mx-4 bg-gradient-to-b from-transparent via-primary/[0.03] to-transparent">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <p className="text-xs uppercase tracking-[0.3em] text-primary/60">What We Do</p>
            <h2 className="text-3xl md:text-4xl font-bold">
              <span className="text-gradient-gold">Manufacturing</span>{" "}
              <span className="text-foreground">Excellence</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="premium-border hover-lift bg-card/30 overflow-hidden">
              <CardContent className="p-8 space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Factory className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-gradient-gold">Our Products</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  At Cat Larry we manufacture high quality stainless steel products for restaurants, hotels & banquets. Our product line comprises chafers, buffet accessories, hollowware, trays and countless other products.
                </p>
              </CardContent>
            </Card>

            <Card className="premium-border hover-lift bg-card/30 overflow-hidden">
              <CardContent className="p-8 space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-gradient-gold">Quality Assurance</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Being basic manufacturers with a team of engineers & infrastructure we master in developing customized products which match international standards of quality & aesthetics.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Coating Technologies */}
      <section className="py-20 -mx-4">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <p className="text-xs uppercase tracking-[0.3em] text-primary/60">Technology</p>
            <h2 className="text-3xl md:text-4xl font-bold">
              <span className="text-gradient-gold">Advanced Coating</span>{" "}
              <span className="text-foreground">Technologies</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Beaker,
                title: "PVD Coating",
                desc: "Physical Vapor Deposition coatings like ZrN, CrN, and TiCN applied using Lateral Rotating Arc-Cathodes technology for superior durability and brilliant finishes."
              },
              {
                icon: Hammer,
                title: "Teflon Coating",
                desc: "Advanced PTFE non-stick coatings providing exceptional heat resistance, easy cleaning, and a sleek modern aesthetic for contemporary hospitality equipment."
              },
              {
                icon: Sparkles,
                title: "Silver & Nickel Plating",
                desc: "Premium plating services delivering exceptional durability and aesthetic appeal, meeting the highest standards of quality and finishing in the industry."
              }
            ].map((tech, i) => (
              <Card
                key={i}
                className="premium-border hover-lift bg-card/30 overflow-hidden animate-fade-in-up opacity-0"
                style={{ animationDelay: `${i * 150}ms` }}
              >
                <CardContent className="p-8 space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <tech.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-gradient-gold">{tech.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">{tech.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
