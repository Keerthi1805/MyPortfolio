import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-6 border-t border-border bg-card/50">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Left side */}
          <div className="flex items-center gap-2 text-muted-foreground text-sm">
            <span>© {currentYear} Bhuvana Keerthi.</span>
            <span className="hidden sm:inline">Made with</span>
            <Heart className="h-4 w-4 text-primary hidden sm:inline" />
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/bhuvanakeerthi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/1805-dasari-bhuvana-keerthi-"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="mailto:bhuvanakeerthi06@gmail.com"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>

          {/* Right side */}
          <div className="text-muted-foreground text-sm">
            <span>Open to internship opportunities</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;