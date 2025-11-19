import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin } from "lucide-react";

const ContactForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Děkujeme za váš zájem!",
        description: "Brzy se vám ozveme s nabídkou.",
      });
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  return (
    <section id="kontakt" className="py-20 bg-muted/30">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Nezávazná poptávka
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Popište mi váš prostor a představy, rád vám připravím nabídku
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Kontaktní informace</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <p className="font-medium">Telefon</p>
                    <a
                      href="tel:+420123456789"
                      className="text-muted-foreground hover:text-secondary transition-colors"
                    >
                      +420 123 456 789
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <a
                      href="mailto:malymartin11@seznam.cz"
                      className="text-muted-foreground hover:text-secondary transition-colors"
                    >
                      info@vestavneskrine.cz
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <p className="font-medium">Oblast působení</p>
                    <p className="text-muted-foreground">
                      Svitavy a okolí
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-card border border-border/50 rounded-lg p-6">
              <h4 className="font-semibold mb-2">Co se děje dál?</h4>
              <ol className="space-y-2 text-muted-foreground text-sm list-decimal list-inside">
                <li>Ozveme se vám do 24 hodin</li>
                <li>Domluví se osobní schůzka a zaměření</li>
                <li>Připravím návrh a cenovou nabídku</li>
                <li>Po odsouhlasení zrealizujeme objednávku a montáž</li>
              </ol>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name">Jméno a příjmení *</Label>
              <Input
                id="name"
                name="name"
                required
                placeholder="Jan Novák"
                className="bg-background"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email *</Label>
              <Input
                id="email"
                name="email"
                type="email"
                required
                placeholder="jan.novak@email.cz"
                className="bg-background"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Telefon *</Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                required
                placeholder="+420 776 198 253"
                className="bg-background"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Popis projektu *</Label>
              <Textarea
                id="message"
                name="message"
                required
                placeholder="Popište prosím rozměry prostoru, vaše představy o skříni a případné speciální požadavky..."
                className="min-h-32 bg-background"
              />
            </div>

            <Button
              type="submit"
              variant="secondary"
              size="lg"
              className="w-full"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Odesílám..." : "Odeslat poptávku"}
            </Button>

            <p className="text-sm text-muted-foreground text-center">
              Odesláním souhlasíte se zpracováním osobních údajů
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
