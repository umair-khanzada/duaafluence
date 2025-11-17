import { Linkedin, Github, Instagram } from "lucide-react";

export default function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-secondary text-secondary-foreground py-16 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 mb-12">
          <div className="space-y-4">
            <h3 className="text-3xl font-black gradient-text" data-testid="text-footer-logo">
              Duaafluence
            </h3>
            <p className="text-secondary-foreground/80 font-semibold" data-testid="text-footer-tagline">
              Rapid MVPs for Bold Ideas
            </p>
            <p className="text-secondary-foreground/80 font-semibold" data-testid="text-footer-tagline">474 West Main St, Kent, Ohio, 44240</p>
          </div>

          <div className="space-y-4">
            <h4 className="font-black text-lg">Quick Links</h4>
            <nav className="flex flex-col space-y-3">
              <button 
                onClick={() => scrollToSection('who-we-are')}
                className="text-secondary-foreground/70 hover:text-secondary-foreground transition-colors text-left font-semibold hover:translate-x-1 duration-300 inline-block"
                data-testid="link-footer-about"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="text-secondary-foreground/70 hover:text-secondary-foreground transition-colors text-left font-semibold hover:translate-x-1 duration-300 inline-block"
                data-testid="link-footer-services"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('portfolio')}
                className="text-secondary-foreground/70 hover:text-secondary-foreground transition-colors text-left font-semibold hover:translate-x-1 duration-300 inline-block"
                data-testid="link-footer-portfolio"
              >
                Portfolio
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-secondary-foreground/70 hover:text-secondary-foreground transition-colors text-left font-semibold hover:translate-x-1 duration-300 inline-block"
                data-testid="link-footer-contact"
              >
                Contact
              </button>
            </nav>
          </div>

          <div className="space-y-4">
            <h4 className="font-black text-lg">Connect With Us</h4>
            <div className="flex space-x-4">
              <a 
                href="https://linkedin.com/company/duaafluence"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-lg"
                data-testid="link-social-linkedin"
              >
                <Linkedin className="w-6 h-6 text-white" />
              </a>
              <a 
                href="https://github.com/duaafluence"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-xl gradient-primary-reverse flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-lg"
                data-testid="link-social-github"
              >
                <Github className="w-6 h-6 text-white" />
              </a>
              <a 
                href="https://instagram.com/duaafluence"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-xl gradient-vibrant flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-lg"
                data-testid="link-social-instagram"
              >
                <Instagram className="w-6 h-6 text-white" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/20 pt-8">
          <p className="text-center text-secondary-foreground/60 font-semibold" data-testid="text-copyright">
            © {new Date().getFullYear()} duaafluence. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
