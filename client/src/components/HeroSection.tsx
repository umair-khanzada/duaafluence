import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import heroBackground from "@assets/generated_images/Blue_gradient_innovation_background_91dcf32e.png";

export default function HeroSection() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-60 dark:opacity-20"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      
      {/* Vibrant gradient orbs */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-accent/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}} />
      
      <div className="container mx-auto px-6 py-20 md:py-32 relative z-10">
        <div className="flex justify-center items-center">
          {/* Content */}
          <div className="space-y-8 max-w-4xl text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-primary/10 to-accent/10 border-2 border-primary/20 mx-auto">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-bold gradient-text uppercase tracking-wider" data-testid="text-tagline">
                Rapid MVPs for Bold Ideas
              </span>
            </div>
            
            {/* Headline with gradient */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight" data-testid="text-hero-headline">
              Turn Your Idea Into a{" "}
              <span className="gradient-text">
                Working App
              </span>{" "}
              — Fast 🚀
            </h1>
            
            {/* Subheadline */}
            <p className="text-xl md:text-2xl text-foreground/80 leading-relaxed max-w-3xl mx-auto font-medium" data-testid="text-hero-subheadline">
              We help startups and small businesses turn their ideas into real products — in{" "}
              <span className="text-accent font-bold">weeks, not months</span>.
            </p>
            
            {/* Stats */}
            <div className="flex flex-wrap justify-center gap-6 md:gap-8 py-4">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-black gradient-text">10+</div>
                <div className="text-xs md:text-sm text-muted-foreground font-semibold uppercase tracking-wider">Years Experience</div>
              </div>
              <div className="hidden sm:block w-px bg-border" />
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-black gradient-text">50+</div>
                <div className="text-xs md:text-sm text-muted-foreground font-semibold uppercase tracking-wider">MVPs Launched</div>
              </div>
              <div className="hidden sm:block w-px bg-border" />
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-black gradient-text">3-6</div>
                <div className="text-xs md:text-sm text-muted-foreground font-semibold uppercase tracking-wider">Weeks to Launch</div>
              </div>
            </div>
            
            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Button 
                size="lg" 
                className="text-white text-sm md:text-base font-bold px-6 md:px-10 py-5 md:py-7 rounded-2xl gradient-primary hover:scale-105 transition-all duration-300 glow-primary group shadow-xl w-full sm:w-auto"
                onClick={() => window.open('https://calendly.com/duaafluence-info/30min?back=1&month=2025-11&date=2025-11-17', '_blank')}
                data-testid="button-book-consultation"
              >
                Book a Free Consultation
                <ArrowRight className="ml-2 h-4 md:h-5 w-4 md:w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="text-sm md:text-base font-bold px-6 md:px-10 py-5 md:py-7 rounded-2xl border-3 border-primary/30 hover:border-primary hover:bg-primary/10 transition-all duration-300 w-full sm:w-auto"
                onClick={() => scrollToSection('portfolio')}
                data-testid="button-see-work"
              >
                See Our Work
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
