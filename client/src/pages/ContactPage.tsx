import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="max-w-5xl mx-auto space-y-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold">Contact Us</h1>
        <p className="text-muted-foreground mt-2">
          Get in touch with us for any inquiries about our products and services.
        </p>
      </div>

      <Card>
        <CardContent className="pt-6">
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <Mail className="h-5 w-5 mt-1 text-primary" />
              <div>
                <h3 className="font-semibold">Email</h3>
                <p className="text-muted-foreground">anupam@catlarry.com</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Phone className="h-5 w-5 mt-1 text-primary" />
              <div>
                <h3 className="font-semibold">Phone</h3>
                <p className="text-muted-foreground">+91-7454948779</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <MapPin className="h-5 w-5 mt-1 text-primary" />
              <div>
                <h3 className="font-semibold">Office Address</h3>
                <p className="text-muted-foreground">
                  Head Office, Factory & Showroom
                  Behind Reliance Petrol Pump,
                  Lakri Fazalpur, Delhi Road,
                  <br />
                  Moradabad
                  Moradabad-244001(U.P), INDIA.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}