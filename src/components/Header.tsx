import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  const navigation = [
    { name: "Služby", id: "sluzby" },
    { name: "Produkty", id: "produkty" },
    { name: "Galerie", id: "galerie" },
    { name: "Kontakt", id: "kontakt" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border/40">
      <nav className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="text-xl font-bold text-primary hover:text-secondary transition-colors"
          >
            Vestavěné skříně
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navigation.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-foreground/80 hover:text-foreground transition-colors"
              >
                {item.name}
              </button>
            ))}
            <Button
              variant="secondary"
              onClick={() => scrollToSection("kontakt")}
            >
              Nezávazná poptávka
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-3">
            {navigation.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left px-4 py-2 hover:bg-muted rounded-lg transition-colors"
              >
                {item.name}
              </button>
            ))}
            <div className="px-4 pt-2">
              <Button
                variant="secondary"
                className="w-full"
                onClick={() => scrollToSection("kontakt")}
              >
                Nezávazná poptávka
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
