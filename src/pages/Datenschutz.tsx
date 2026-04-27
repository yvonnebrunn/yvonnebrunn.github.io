import { Link } from "react-router-dom";

const Datenschutz = () => {
  return (
    <div className="min-h-screen bg-background pt-24 pb-16">
      <div className="container mx-auto px-6 max-w-3xl">
        <h1 className="font-display text-3xl md:text-4xl text-foreground mb-8">
          Datenschutzerklärung
        </h1>

        <div className="font-body text-muted-foreground leading-relaxed space-y-10">
          <section>
            <h2 className="font-display text-xl text-foreground mb-4">
              1. Datenschutz auf einen Blick
            </h2>
            <p>
              Die folgenden Hinweise geben einen einfachen Überblick darüber,
              was mit Ihren personenbezogenen Daten passiert, wenn Sie diese
              Website besuchen. Personenbezogene Daten sind alle Daten, mit
              denen Sie persönlich identifiziert werden können.
            </p>
          </section>

          <section className="pt-6 border-t border-border">
            <h2 className="font-display text-xl text-foreground mb-4">
              2. Verantwortliche Stelle
            </h2>
            <p className="mb-2 font-medium text-foreground">
              Verantwortlich für die Datenverarbeitung auf dieser Website ist:
            </p>
            <div className="space-y-1">
              <p>Yvonne Brunn</p>
              <p>Vom Überleben zum Leben – Übergangsbegleitung</p>
              <p>[folgt]</p>
              <p>14169 Berlin</p>
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

          <section className="pt-6 border-t border-border">
            <h2 className="font-display text-xl text-foreground mb-4">
              3. Datenerfassung auf dieser Website
            </h2>

            <h3 className="font-body font-bold text-foreground mb-2">
              Hosting durch GitHub
            </h3>
            <p className="mb-4">
              Diese Website wird auf GitHub Pages gehostet (GitHub Inc., 88
              Colin P. Kelly Jr. St, San Francisco, CA 94107, USA). Wenn Sie
              unsere Website besuchen, erfasst GitHub Log-Files (IP-Adresse,
              Datum, Uhrzeit, Browsertyp). Dies ist technisch notwendig, um die
              Website stabil und sicher bereitzustellen (Rechtsgrundlage: Art. 6
              Abs. 1 lit. f DSGVO).
            </p>

            <h3 className="font-body font-bold text-foreground mb-2">
              SSL- bzw. TLS-Verschlüsselung
            </h3>
            <p>
              Diese Seite nutzt aus Sicherheitsgründen eine Verschlüsselung.
              Eine verschlüsselte Verbindung erkennen Sie daran, dass die
              Adresszeile des Browsers von „http://“ auf „https://“ wechselt.
            </p>
          </section>

          <section className="pt-6 border-t border-border">
            <h2 className="font-display text-xl text-foreground mb-4">
              4. Soziale Medien (Instagram)
            </h2>
            <p className="mb-4">
              Auf unserer Website sind Funktionen des Dienstes Instagram
              eingebunden (Meta Platforms Ireland Limited). Wenn Sie auf den
              Instagram-Button klicken, während Sie in Ihrem Instagram-Account
              eingeloggt sind, kann Instagram den Besuch dieser Website Ihrem
              Benutzerkonto zuordnen.
            </p>
            <p>
              Weitere Informationen hierzu finden Sie in der
              Datenschutzerklärung von Instagram:{" "}
              <a
                href="https://instagram.com/about/legal/privacy/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4 hover:text-foreground transition-colors"
              >
                https://instagram.com/about/legal/privacy/
              </a>
              .
            </p>
          </section>

          <section className="pt-6 border-t border-border">
            <h2 className="font-display text-xl text-foreground mb-4">
              5. Ihre Rechte
            </h2>
            <p className="mb-4">
              Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen
              jederzeit das Recht auf:
            </p>
            <ul className="list-disc ml-6 space-y-2">
              <li>Auskunft über Ihre gespeicherten personenbezogenen Daten.</li>
              <li>Berichtigung oder Löschung dieser Daten.</li>
              <li>Einschränkung der Verarbeitung.</li>
              <li>
                Widerspruch gegen die Verarbeitung sowie das Recht auf
                Datenübertragbarkeit.
              </li>
            </ul>
            <p className="mt-4">
              Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie
              sich jederzeit unter der oben angegebenen Adresse an uns wenden.
            </p>
          </section>

          <p className="text-xs text-muted-foreground/60 mt-12 italic">
            Stand: April 2024
          </p>

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

export default Datenschutz;
