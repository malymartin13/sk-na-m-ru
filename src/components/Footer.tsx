const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container px-4 mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Vestavěné skříně</h3>
            <p className="text-primary-foreground/80">
              Kvalitní vestavěné skříně na míru s posuvnými dveřmi.
              Profesionální plánování a kompletní dodávka.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Služby</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>Plánování prostoru</li>
              <li>Skříň bez dveří</li>
              <li>Skříň s posuvnými dveřmi</li>
              <li>Profesionální montáž</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Kontakt</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>
                <a href="tel:+420123456789" className="hover:text-primary-foreground transition-colors">
                  +420 123 456 789
                </a>
              </li>
              <li>
                <a href="mailto:info@vestavneskrine.cz" className="hover:text-primary-foreground transition-colors">
                  info@vestavneskrine.cz
                </a>
              </li>
              <li>Praha a okolí</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center text-primary-foreground/60 text-sm">
          <p>© {currentYear} Vestavěné skříně. Všechna práva vyhrazena.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
