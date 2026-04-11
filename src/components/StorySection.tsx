import { motion } from "framer-motion";
import yvonnePortrait from "@/assets/yvonne-portrait.jpg";

const StorySection = () => {
  return (
    <section className="py-24 md:py-32 bg-card">
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
              Vom Schatten zur Löwenmama:{" "}
              <span className="italic text-primary">Meine 24-jährige Reise</span>
            </h2>

            <div className="space-y-5 mb-10">
              <p className="font-body text-muted-foreground text-base md:text-lg leading-relaxed">
                Seit meinem 18. Lebensjahr setze ich mich intensiv mit
                narzisstischen Dynamiken auseinander. Ich kenne das System aus
                der Kindheit und habe selbst eine 10-jährige toxische Beziehung
                durchlebt. Heute bin ich zweifache Mutter und seit 10 Jahren
                frei. Diese 24 Jahre persönliche Transformation und Heilung
                haben mich zur Expertin für Ihre Krise gemacht.
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
      </div>
    </section>
  );
};

export default StorySection;
