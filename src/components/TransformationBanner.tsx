import { motion } from "framer-motion";
import raupeSchmetterling from "@/assets/raupe-schmetterling.jpg";

const TransformationBanner = () => {
  return (
    <section className="relative h-[40vh] md:h-[50vh] overflow-hidden">
      {/* Background image */}
      <img
        src={raupeSchmetterling}
        alt="Transformation – von der Raupe zum Schmetterling"
        className="w-full h-full object-cover"
      />

      {/* Sage-green tinted overlay for color harmony */}
      <div className="absolute inset-0 bg-gradient-to-r from-foreground/40 via-primary/25 to-foreground/40" />

      {/* Top and bottom fade into surrounding sections */}
      <div className="absolute inset-0 bg-gradient-to-b from-card via-transparent to-background" style={{ opacity: 0.5 }} />

      {/* Centered quote */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8 }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <blockquote className="text-center px-6 max-w-2xl">
          <p className="font-display text-2xl md:text-3xl lg:text-4xl italic text-primary-foreground leading-relaxed drop-shadow-lg">
            Jede Verwandlung beginnt
            <br />
            mit dem Mut, loszulassen.
          </p>
        </blockquote>
      </motion.div>
    </section>
  );
};

export default TransformationBanner;
