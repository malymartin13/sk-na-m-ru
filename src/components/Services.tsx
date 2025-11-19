import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Ruler, Package, Wrench } from "lucide-react";

const services = [
  {
    icon: Ruler,
    title: "Profesionální plánování",
    description: "Proměřím váš prostor a navrhu optimální řešení na míru vašim potřebám a stylu interiéru.",
  },
  {
    icon: Package,
    title: "Kvalitní dodávka",
    description: "Poskytnu vám skříň vyrobenou z kvalitních materiálů s možností výběru bez dveří nebo s posuvnými dveřmi.",
  },
  {
    icon: Wrench,
    title: "Odborná montáž",
    description: "Zajistím profesionální instalaci nebo samostatnou montáž, aby vše dokonale zapadlo a fungovalo.",
  },
];

const Services = () => {
  return (
    <section id="sluzby" className="py-20 bg-muted/30">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Co pro vás mohu udělat
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Kompletní služby od návrhu po instalaci
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="border-border/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <CardHeader>
                  <div className="w-14 h-14 rounded-lg bg-secondary/10 flex items-center justify-center mb-4">
                    <Icon className="w-7 h-7 text-secondary" />
                  </div>
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
