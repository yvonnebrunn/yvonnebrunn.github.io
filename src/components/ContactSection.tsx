import { motion } from "framer-motion";
import { Mail, Send } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [sending, setSending] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const name = formData.name.trim();
    const email = formData.email.trim();
    const message = formData.message.trim();

    if (!name || !email || !message) {
      toast({
        title: "Bitte füll alle Felder aus.",
        variant: "destructive",
      });
      return;
    }

    if (name.length > 100 || email.length > 255 || message.length > 2000) {
      toast({
        title: "Eingabe zu lang.",
        variant: "destructive",
      });
      return;
    }

    setSending(true);
    // Simulate send
    setTimeout(() => {
      setSending(false);
      toast({
        title: "Nachricht gesendet!",
        description: "Vielen Dank für deine Nachricht. Ich melde mich bald bei dir.",
      });
      setFormData({ name: "", email: "", message: "" });
    }, 1000);
  };

  return (
    <section id="kontakt" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-body tracking-[0.25em] uppercase text-sm mb-3">
            Kontakt
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-foreground mb-6">
            Lass uns <span className="italic text-primary">sprechen</span>
          </h2>
          <p className="font-body text-muted-foreground max-w-xl mx-auto text-lg leading-relaxed">
            Der erste Schritt ist oft der schwerste. Schreib mir – ich freu mich
            auf deine Nachricht.
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="flex items-center justify-center gap-2 mb-10 text-muted-foreground"
          >
            <Mail className="w-5 h-5 text-primary" />
            <span className="font-body text-lg">
              {/* E-Mail-Adresse hier eintragen */}
              kontakt.y.brunn@gmail.com

            </span>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="bg-card rounded-xl p-8 md:p-10 space-y-6"
          >
            <div>
              <label htmlFor="name" className="block font-body text-sm text-foreground mb-2">
                Name
              </label>
              <input
                id="name"
                type="text"
                maxLength={100}
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-background border border-border rounded-lg px-4 py-3 font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-shadow"
                placeholder="Ihr Name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block font-body text-sm text-foreground mb-2">
                E-Mail
              </label>
              <input
                id="email"
                type="email"
                maxLength={255}
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-background border border-border rounded-lg px-4 py-3 font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-shadow"
                placeholder="deine@email.de"
              />
            </div>
            <div>
              <label htmlFor="message" className="block font-body text-sm text-foreground mb-2">
                Nachricht
              </label>
              <textarea
                id="message"
                maxLength={2000}
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full bg-background border border-border rounded-lg px-4 py-3 font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-shadow resize-none"
                placeholder="Was bewegt dich?"
              />
            </div>
            <button
              type="submit"
              disabled={sending}
              className="w-full bg-primary text-primary-foreground font-body font-medium py-4 rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2 disabled:opacity-60"
            >
              {sending ? "Wird gesendet..." : "Nachricht senden"}
              <Send className="w-4 h-4" />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
