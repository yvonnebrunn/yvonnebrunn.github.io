const Footer = () => {
  return (
    <footer className="py-10 bg-card border-t border-border">
      <div className="container mx-auto px-6 text-center">
        <p className="font-display text-lg text-foreground mb-1">
          Übergangsbegleitung
        </p>
        <p className="font-body text-sm text-muted-foreground">
          Vom Überleben zum Leben · © {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
