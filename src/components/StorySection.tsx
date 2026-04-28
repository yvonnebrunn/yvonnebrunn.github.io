import { motion } from "framer-motion";
import { Instagram } from "lucide-react";
import yvonnePortrait from "@/assets/yvonne-portrait.jpg";

const StorySection = () => {
  return (
    <section className="pt-12 md:pt-16 pb-24 md:pb-32 bg-card">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center max-w-6xl mx-auto">
          {/* Column 1: Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-xl shadow-primary/10 bg-secondary flex items-center justify-center relative">
              {/* Portrait photo of Yvonne */}
              <img
                src={yvonnePortrait}
                alt="Yvonne – Übergangsbegleiterin"
                className="w-full h-full object-cover"
              />
              {/* Subtle overlay for style */}
              <div className="absolute inset-0 rounded-2xl ring-1 ring-primary/10" />
              
              {/* Transformation symbols */}
              <span className="absolute bottom-4 left-4 text-2xl md:text-3xl bg-background/80 backdrop-blur-sm rounded-full px-2 py-1" role="img" aria-label="Raupe">🐛</span>
              <span className="absolute bottom-4 right-4 text-2xl md:text-3xl bg-background/80 backdrop-blur-sm rounded-full px-2 py-1" role="img" aria-label="Schmetterling">🦋</span>
            </div>
          </motion.div>

          {/* Column 2: Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <p className="text-primary font-body tracking-[0.3em] uppercase text-xs mb-4">
              Meine Reise, meine Expertise
            </p>

            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-8 leading-tight">
              Vom Schatten ins Licht: <br />
              <span className="italic text-primary">Meine 24-jährige Reise</span>
            </h2>

            <div className="space-y-5 mb-10">
              <p className="font-body text-muted-foreground text-base md:text-lg leading-relaxed">
                Seit meinem 18. Lebensjahr setze ich mich intensiv mit
                narzisstischen Dynamiken auseinander. Ich kenne das System aus
                der Kindheit und habe selbst eine 10-jährige toxische Beziehung
                durchlebt. Heute bin ich zweifache Mutter und seit 10 Jahren
                frei. Diese 24 Jahre persönliche Transformation und Heilung
                <strong className="font-bold text-primary">
                  {" "}haben mich zur Expertin für deine Krise gemacht.
                </strong>
              </p>

              <p className="font-display text-lg md:text-xl italic text-foreground/90 leading-relaxed">
                Ich bin die Begleiterin, die ich mir damals gewünscht hätte.
                Sprechen wir darüber.
              </p>
            </div>

            <a
              href="#kontakt"
              className="inline-block bg-primary text-primary-foreground font-body font-medium px-8 py-4 rounded-lg hover:opacity-90 transition-opacity text-base tracking-wide"
            >
              Jetzt Kennenlerngespräch vereinbaren
            </a>

          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-12 max-w-6xl mx-auto rounded-2xl bg-background p-6 md:p-8 shadow-sm border border-border/40"
        >
          <div className="flex flex-col items-start gap-6">
            <div className="w-full">
              <h3 className="font-display text-2xl md:text-3xl text-primary mb-4 leading-tight">
                Begleitung im Alltag – Lass uns in Verbindung bleiben
              </h3>
              <div className="font-body text-muted-foreground text-base leading-relaxed space-y-4">
                <p>
                  Auf Instagram nehme ich dich mit hinter die Kulissen meiner
                  Arbeit als Übergangsbegleiterin. Dort findest du wertvolle
                  Impulse für deinen Weg:
                </p>
                <ul className="space-y-3 list-disc pl-5 md:grid md:grid-cols-3 md:gap-5 md:space-y-0">
                  <li>
                    <strong className="font-semibold text-primary">
                      Hilfe in Krisen:
                    </strong>{" "}
                    Wie du den ersten Schritt zurück ins Leben findest.
                  </li>
                  <li>
                    <strong className="font-semibold text-primary">
                      Toxische Dynamiken:
                    </strong>{" "}
                    Strategien und Klarheit im Umgang mit manipulativen
                    Menschen.
                  </li>
                  <li>
                    <strong className="font-semibold text-primary">
                      Einblicke & Austausch:
                    </strong>{" "}
                    Tägliche Unterstützung und Übungen für mehr innere
                    Stabilität.
                  </li>
                </ul>
              </div>
            </div>

            <a
              href="https://instagram.com/yvonne_uebergangsbegleitung"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 font-body font-semibold text-primary-foreground shadow-md transition-opacity hover:opacity-90"
            >
              <Instagram className="h-5 w-5" />
              <span>@yvonne_uebergangsbegleitung</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default StorySection;
