import { motion } from "framer-motion";
import { Heart, Leaf, Sun, Shield } from "lucide-react";

const values = [
  {
    icon: Shield,
    title: "Sicherheit",
    description:
      "Ein geschützter Raum, in dem du dich öffnen kannst – ohne Bewertung, mit voller Vertraulichkeit.",
  },
  {
    icon: Heart,
    title: "Empathie",
    description:
      "Ich höre zu und begleite dich mit echtem Mitgefühl durch schwierige Lebensphasen.",
  },
  {
    icon: Leaf,
    title: "Wachstum",
    description:
      "Wie die Raupe zum Schmetterling wird, entdecken wir gemeinsam deine inneren Ressourcen und Stärken.",
  },
  {
    icon: Sun,
    title: "Klarheit",
    description:
      "Gemeinsam ordnen wir das Chaos und finden klare nächste Schritte für Ihren Weg nach vorn.",
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
  }),
};

const AboutSection = () => {
  return (
    <section id="about" className="py-24 md:py-32 bg-card">
      <div className="container mx-auto px-6">
        {/* Section header with clear structure */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto text-center mb-20"
        >
          <p className="text-primary font-body tracking-[0.3em] uppercase text-xs mb-4">
            Über mich
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-foreground mb-6 leading-tight">
            Begleitung mit{" "}
            <span className="italic text-primary">Herz & Klarheit</span>
          </h2>
          <div className="w-16 h-px bg-primary/40 mx-auto mb-8" />
          <p className="font-body text-muted-foreground text-lg leading-relaxed">
            In Krisenzeiten brauchst du jemanden, der dir Halt gibt und
            gleichzeitig den Blick nach vorn richtet. Ich begleite dich auf
            diesem Weg – strukturiert, einfühlsam und mit dem Vertrauen in
            deine eigene Wandlungskraft.
          </p>
        </motion.div>

        {/* Values grid – clean 2x2 */}
        <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {values.map((item, i) => (
            <motion.div
              key={item.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeInUp}
              className="bg-background rounded-xl p-8 border border-border/50 hover:border-primary/30 transition-colors duration-500"
            >
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center shrink-0">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-lg text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="font-body text-muted-foreground text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Transformation quote */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="max-w-2xl mx-auto mt-20 text-center"
        >
          <blockquote className="font-display text-xl md:text-2xl italic text-foreground/80 leading-relaxed">
            „Was die Raupe Ende der Welt nennt,
            <br />
            nennt der Rest der Welt Schmetterling."
          </blockquote>
          <p className="font-body text-sm text-muted-foreground mt-4">— Laotse</p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
