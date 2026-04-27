import { Link } from "react-router-dom";

const Impressum = () => {
  return (
    <div className="min-h-screen bg-background pt-24 pb-16">
      <div className="container mx-auto px-6 max-w-3xl">
        <h1 className="font-display text-3xl md:text-4xl text-foreground mb-8">
          Impressum
        </h1>

        <div className="font-body text-muted-foreground leading-relaxed space-y-10">
          <section>
            <h2 className="font-display text-xl text-foreground mb-4">
              Angaben gemäß § 5 DDG
            </h2>
            <div className="space-y-2">
              <p className="font-bold text-foreground">Yvonne Brunn</p>
              <p className="font-bold text-foreground">Vom Überleben zum Leben – Übergangsbegleitung</p>
              <p>[folgt]</p>
              <p>14169 Berlin</p>
            </div>
          </section>

          <section>
            <h2 className="font-display text-xl text-foreground mb-4">
              Kontakt
            </h2>
            <div className="space-y-2">
              <p>Telefon: [folgt]</p>
              <p>
                E-Mail:{" "}
                <a
                  href="mailto:kontakt.y.brunn@gmail.com"
                  className="underline underline-offset-4 hover:text-foreground transition-colors"
                >
                  kontakt.y.brunn@gmail.com
                </a>
              </p>
            </div>
          </section>

          <section>
            <h2 className="font-display text-xl text-foreground mb-4">
              Redaktionell verantwortlich
            </h2>
            <div className="space-y-2">
              <p>Yvonne Brunn</p>
              <p>[Anschrift wie oben]</p>
            </div>
          </section>

          <section>
            <h2 className="font-display text-xl text-foreground mb-4">
              EU-Streitschlichtung
            </h2>
            <div className="space-y-4">
              <p>
                Die Europäische Kommission stellt eine Plattform zur
                Online-Streitbeilegung (OS) bereit:
              </p>
              <p>
                <a
                  href="https://ec.europa.eu/consumers/odr/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-4 hover:text-foreground transition-colors"
                >
                  https://ec.europa.eu/consumers/odr/
                </a>
              </p>
              <p>
                Unsere E-Mail-Adresse finden Sie oben im Impressum.
              </p>
            </div>
          </section>

          <section>
            <p>
              Dieses Impressum gilt auch für das Instagram-Profil{" "}
              <a
                href="https://instagram.com/yvonne_uebergangsbegleitung"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4 hover:text-foreground transition-colors"
              >
                @yvonne_uebergangsbegleitung
              </a>
              .
            </p>
          </section>

          <div className="pt-6 border-t border-border">
            <Link
              to="/"
              className="text-sm underline underline-offset-4 hover:text-foreground transition-colors"
            >
              ← Zurück zur Startseite
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Impressum;
