import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

const contactMethods = [
  {
    icon: Mail,
    title: "Email",
    value: "anupam@catlarry.com",
    sub: "We respond within 24 hours",
    href: "mailto:anupam@catlarry.com",
  },
  {
    icon: Phone,
    title: "Phone",
    value: "+91-7454948779",
    sub: "Mon-Sat, 9 AM - 6 PM IST",
    href: "tel:+917454948779",
  },
  {
    icon: MapPin,
    title: "Office & Factory",
    value: "Moradabad, India",
    sub: "Behind Reliance Petrol Pump, Lakri Fazalpur, Delhi Road, Moradabad-244001 (U.P), India",
    href: null,
  },
  {
    icon: Clock,
    title: "Business Hours",
    value: "Mon - Sat",
    sub: "9:00 AM - 6:00 PM IST",
    href: null,
  },
];

export default function ContactPage() {
  return (
    <div className="space-y-0">
      <section className="relative -mx-4 py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-primary/5" />
        <div className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full bg-primary/10 blur-[100px] animate-glow-pulse" />
        <div className="relative container mx-auto px-4 text-center space-y-6">
          <p className="text-xs uppercase tracking-[0.3em] text-primary/60 animate-fade-in-up opacity-0">
            Get In Touch
          </p>
          <h1 className="text-5xl md:text-7xl font-bold animate-fade-in-up opacity-0 delay-200">
            <span className="text-gradient-gold">Contact</span>{" "}
            <span className="text-foreground">Us</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in-up opacity-0 delay-300">
            Ready to elevate your hospitality experience? We'd love to hear from you.
          </p>
          <div className="h-px w-24 mx-auto bg-gradient-to-r from-transparent via-primary to-transparent animate-line-expand opacity-0 delay-400" />
        </div>
      </section>

      <section className="py-20 -mx-4">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethods.map((method, i) => (
              <Card
                key={i}
                className="premium-border hover-lift bg-card/30 animate-fade-in-up opacity-0"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <CardContent className="p-6 space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <method.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div className="space-y-2">
                    <p className="text-xs uppercase tracking-wider text-primary/60">{method.title}</p>
                    {method.href ? (
                      <a
                        href={method.href}
                        className="text-lg font-semibold text-gradient-gold hover:opacity-80 transition-opacity block"
                      >
                        {method.value}
                      </a>
                    ) : (
                      <p className="text-lg font-semibold text-gradient-gold">{method.value}</p>
                    )}
                    <p className="text-sm text-muted-foreground">{method.sub}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 -mx-4 bg-gradient-to-b from-transparent via-primary/[0.03] to-transparent">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold">
              <span className="text-gradient-gold">Partner</span>{" "}
              <span className="text-foreground">With Us</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Whether you're a five-star hotel chain, a boutique restaurant, or a hospitality equipment distributor, we have the products and expertise to meet your needs. Our team of engineers specializes in developing customized products that match international standards.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="px-8 bg-gradient-to-r from-primary to-primary/80 shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all duration-300 hover:scale-105"
              >
                <a href="mailto:anupam@catlarry.com">
                  Send an Email
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="px-8 border-primary/30 hover:bg-primary/10"
              >
                <Link href="/products">Browse Products</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
