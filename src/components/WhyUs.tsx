import { Card, CardContent } from "@/components/ui/card";
import { Heart, Shield, Clock, Star } from "lucide-react";

const benefits = [
  {
    icon: Heart,
    title: "Osobní přístup",
    description: "Každý projekt je jedinečný a věnuji mu maximální pozornost",
  },
  {
    icon: Shield,
    title: "Kvalita a spolehlivost",
    description: "Kvalitní materiály a spolehliví dodavatelé",
  },
  {
    icon: Clock,
    title: "Flexibilita",
    description: "Přizpůsobím se vašim požadavkům a termínům",
  },
  {
    icon: Star,
    title: "Komplexní služba",
    description: "Od návrhu přes objednání až po finální instalaci",
  },
];

const WhyUs = () => {
  return (
    <section className="py-20">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Proč si vybrat moje služby
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Teprve začínám, ale nabízím profesionální přístup a péči o detail
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <Card
                key={index}
                className="border-border/50 text-center hover:shadow-md transition-shadow"
              >
                <CardContent className="pt-6">
                  <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-secondary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
