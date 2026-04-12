import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Subtle decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Caterpillar to butterfly transformation line */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
            className="flex items-center justify-center gap-4 mb-12"
          >
            <span className="text-3xl" role="img" aria-label="Raupe">🐛</span>
            <div className="flex-1 max-w-xs h-px bg-gradient-to-r from-primary/20 via-primary/60 to-primary/20 relative">
              <motion.div
                className="absolute top-1/2 -translate-y-1/2 w-2 h-2 bg-primary rounded-full"
                animate={{ x: ["0%", "100%", "0%"] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              />
            </div>
            <span className="text-3xl" role="img" aria-label="Schmetterling">🦋</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center"
          >
            <p className="text-primary font-body text-sm tracking-[0.4em] uppercase mb-6">
              Deine Brücke aus der Krise in die Neuausrichtung
            </p>

            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-medium text-foreground leading-[1.1] mb-8">
              Vom Überleben
              <br />
              <span className="italic text-primary">zum Leben</span>
            </h1>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.7 }}
              className="max-w-2xl mx-auto mb-12"
            >
              <p className="font-body text-lg md:text-xl text-muted-foreground leading-relaxed whitespace-pre-line">
                In Zeiten tiefster Verunsicherung und emotionaler Not, wenn die Worte fehlen und die Kraft für den Alltag versagt, bin ich für dich da. Ich kenne den Weg durch die Dunkelheit – und ich weiß, wie man Schritt für Schritt wieder ans Licht findet.

                Jede Veränderung trägt die Möglichkeit eines Neuanfangs in sich – wie die Raupe, die zum Schmetterling wird.
              </p>
              <p className="font-body text-base text-muted-foreground/80 mt-4">
                Ich begleite dich einfühlsam und klar durch Krisenzeiten.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <a
                href="#kontakt"
                className="inline-block bg-primary text-primary-foreground font-body font-medium px-8 py-4 rounded-lg hover:opacity-90 transition-opacity text-base tracking-wide"
              >
                Sprechen wir darüber
              </a>
              <a
                href="#about"
                className="inline-block border border-primary/30 text-foreground font-body font-medium px-8 py-4 rounded-lg hover:bg-primary/5 transition-colors text-base tracking-wide"
              >
                So kann ich dir helfen
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center pt-2">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 1.8 }}
            className="w-1.5 h-1.5 bg-primary/60 rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
