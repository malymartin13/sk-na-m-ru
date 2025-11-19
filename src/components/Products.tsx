import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const products = [
  {
    title: "Skříň bez dveří",
    description: "Ideální pro otevřené prostory a walk-in šatny",
    features: [
      "Plánování prostoru na míru",
      "Kvalitní materiály",
      "Police a závěsné tyče",
      "Optimální organizace",
    ],
  },
  {
    title: "Skříň s posuvnými dveřmi",
    description: "Kompletní řešení s elegantními dveřmi",
    features: [
      "Individuální návrh",
      "Posuvné dveře na míru",
      "Vnitřní organizace",
      "Různé varianty designu",
    ],
    featured: true,
  },
  {
    title: "Samostatná montáž",
    description: "Profesionální instalace vaší skříně",
    features: [
      "Odborná montáž",
      "Rychlá realizace",
      "Záruka na práci",
      "Úklid po montáži",
    ],
  },
];

const Products = () => {
  const scrollToContact = () => {
    document.getElementById("kontakt")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="produkty" className="py-20">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Možnosti objednávky
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Vyberte si řešení, které nejlépe vyhovuje vašim potřebám
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Card
              key={index}
              className={`relative border-border/50 hover:shadow-lg transition-all duration-300 ${
                product.featured ? "ring-2 ring-secondary shadow-xl scale-105" : ""
              }`}
            >
              {product.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-secondary text-secondary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                    Nejoblíbenější
                  </span>
                </div>
              )}
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl">{product.title}</CardTitle>
                <CardDescription className="text-base">
                  {product.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground/90">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  variant={product.featured ? "secondary" : "outline"}
                  className="w-full"
                  onClick={scrollToContact}
                >
                  Poptat zdarma
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
