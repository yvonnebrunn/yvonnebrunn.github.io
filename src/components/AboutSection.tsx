import { motion } from "framer-motion";
import { Heart, Leaf, Sun } from "lucide-react";

const services = [
  {
    icon: Heart,
    title: "Einfühlsame Begleitung",
    description:
      "In einem geschützten Raum begleite ich Sie durch schwierige Lebensphasen – mit Empathie, Verständnis und ohne Bewertung.",
  },
  {
    icon: Leaf,
    title: "Persönliches Wachstum",
    description:
      "Gemeinsam entdecken wir Ihre inneren Ressourcen und stärken das, was Sie für Ihren nächsten Lebensabschnitt brauchen.",
  },
  {
    icon: Sun,
    title: "Neue Perspektiven",
    description:
      "Veränderung beginnt mit einem neuen Blickwinkel. Ich unterstütze Sie dabei, Möglichkeiten zu erkennen und mutig neue Wege zu gehen.",
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.7, ease: "easeOut" },
  }),
};

const AboutSection = () => {
  return (
    <section id="about" className="py-24 md:py-32 bg-card">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <p className="text-primary font-body tracking-[0.25em] uppercase text-sm mb-3">
            Über mich
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-foreground mb-6">
            Begleitung mit <span className="italic text-primary">Herz</span>
          </h2>
          <p className="font-body text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
            Jeder Mensch trägt die Kraft zur Veränderung in sich. Manchmal braucht es
            jemanden, der den Weg mitgeht – genau das ist meine Berufung.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeInUp}
              className="bg-background rounded-xl p-8 text-center group hover:shadow-lg transition-shadow duration-500"
            >
              <div className="w-14 h-14 mx-auto mb-6 rounded-full bg-secondary flex items-center justify-center group-hover:bg-accent transition-colors duration-500">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-xl text-foreground mb-3">
                {service.title}
              </h3>
              <p className="font-body text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
