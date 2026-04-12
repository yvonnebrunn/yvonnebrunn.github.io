import { motion } from "framer-motion";

const services = [
  {
    number: "01",
    title: "Krisenbegleitung & Akuthilfe",
    description:
      "Den Boden unter den Füßen wiederfinden. Ich helfe dir, toxische Dynamiken zu verstehen, das Chaos zu ordnen und emotionale Erstentlastung nach narzisstischem Missbrauch zu finden.",
  },
  {
    number: "02",
    title: "Übergangshilfe & Struktur",
    description:
      "Gemeinsam gehen wir über die Brücke. Ich unterstütze dich ganz praktisch beim Ausfüllen von Anträgen, bei der Vorbereitung auf Behörden oder Kliniken und begleite dich aktiv bei der Suche nach einem Therapieplatz.",
  },
  {
    number: "03",
    title: "Neuanfang: Vom Überleben zum Leben",
    description:
      "Die Transformation festigen. Wir stärken deinen Selbstwert nach toxischen Beziehungen und entwickeln neue Grenzen, damit du sicher und frei in deinen neuen Lebensabschnitt starten kannst.",
  },
];

const ServicesSection = () => {
  return (
    <section id="angebot" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <p className="text-primary font-body tracking-[0.3em] uppercase text-xs mb-4">
            Angebot
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-foreground mb-6 leading-tight">
            Mein <span className="italic text-primary">Weg</span> mit dir
          </h2>
          <div className="w-16 h-px bg-primary/40 mx-auto mb-8" />
          <p className="font-body text-muted-foreground text-lg leading-relaxed">
            Drei Phasen der Begleitung – angepasst an deine Situation und dein Tempo.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-0">
          {services.map((service, i) => (
            <motion.div
              key={service.number}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="flex gap-6 md:gap-10 py-8 border-b border-border/50 last:border-b-0"
            >
              <span className="font-display text-3xl md:text-4xl text-primary/30 font-medium shrink-0 leading-none pt-1">
                {service.number}
              </span>
              <div>
                <h3 className="font-display text-xl md:text-2xl text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="font-body text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Transformation visual */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          className="flex items-center justify-center gap-3 mt-16"
        >
          <span className="text-2xl">🐛</span>
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className="w-2 h-2 rounded-full bg-primary/40"
                initial={{ scale: 0.5, opacity: 0.3 }}
                whileInView={{ scale: 1, opacity: 0.3 + i * 0.15 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + i * 0.1 }}
              />
            ))}
          </div>
          <span className="text-2xl">🦋</span>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
