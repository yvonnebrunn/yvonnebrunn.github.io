import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="py-10 bg-card border-t border-border/50">
      <div className="container mx-auto px-6 text-center">
        <p className="font-display text-lg text-foreground mb-1">
          <span className="font-medium">Yvonne</span>
          <span className="text-primary mx-0.5"> | </span>
          <span className="text-primary">Übergangsbegleitung</span>
        </p>
        <p className="font-body text-sm text-muted-foreground mb-3">
          Vom Überleben zum Leben · © {new Date().getFullYear()}
        </p>
        <div className="flex items-center justify-center gap-4 font-body text-xs text-muted-foreground">
          <Link to="/datenschutz" className="hover:text-primary transition-colors">Datenschutz</Link>
          <span className="text-border">|</span>
          <Link to="/impressum" className="hover:text-primary transition-colors">Impressum</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
