import { Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-4 border-t border-border/50 bg-secondary/30">
      <div className="container mx-auto text-center">
        <p className="text-muted-foreground flex items-center justify-center gap-2">
          © {currentYear} Chauhan Shaktijeet. Built with
          <Heart className="text-primary" size={16} fill="currentColor" />
          and React
        </p>
      </div>
    </footer>
  );
};

export default Footer;
