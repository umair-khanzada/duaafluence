import teamImage from "@assets/generated_images/Team_collaboration_photo_e1602ebe.png";
import { Users, Award, Zap, Target } from "lucide-react";

export default function WhoWeAre() {
  return (
    <section id="who-we-are" className="py-20 md:py-32 bg-gradient-to-b from-background via-primary/5 to-background relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-20 left-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-primary/5 to-accent/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            {/* Section badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 to-accent/10 border-2 border-primary/20">
              <Users className="w-4 h-4 text-primary" />
              <span className="text-sm font-bold gradient-text uppercase tracking-wider">About Our Team</span>
            </div>
            
            {/* Title */}
            <h2 className="text-5xl md:text-6xl font-black leading-tight" data-testid="text-who-we-are-title">
              Who We <span className="gradient-text">Are</span>
            </h2>
            
            {/* Description */}
            <p className="text-xl text-foreground/80 leading-relaxed font-medium" data-testid="text-who-we-are-description">
              We are a team of senior engineers and designers passionate about helping founders and small businesses bring their ideas to life. With over{" "}
              <span className="font-black gradient-text">a decade of experience</span>{" "}
              building scalable web and mobile applications, we specialize in rapid MVP development and prototyping so you can launch, test, and grow fast.
            </p>
            
            {/* Feature highlights */}
            <div className="grid sm:grid-cols-2 gap-4 pt-4">
              <div className="p-6 rounded-2xl bg-card border-2 border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-lg group">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold mb-2">10+ Years</h3>
                <p className="text-sm text-muted-foreground">Industry experience delivering high-quality solutions</p>
              </div>
              
              <div className="p-6 rounded-2xl bg-card border-2 border-accent/10 hover:border-accent/30 transition-all duration-300 hover:shadow-lg group">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent to-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold mb-2">Rapid MVP</h3>
                <p className="text-sm text-muted-foreground">Launch in weeks, not months with proven frameworks</p>
              </div>
              
              <div className="p-6 rounded-2xl bg-card border-2 border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-lg group">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold mb-2">Focused Approach</h3>
                <p className="text-sm text-muted-foreground">We build only what matters to validate your idea</p>
              </div>
              
              <div className="p-6 rounded-2xl bg-card border-2 border-accent/10 hover:border-accent/30 transition-all duration-300 hover:shadow-lg group">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent to-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold mb-2">Dedicated Team</h3>
                <p className="text-sm text-muted-foreground">Senior engineers and designers on every project</p>
              </div>
            </div>
          </div>
          
          {/* Image */}
          <div className="relative lg:h-[700px] flex items-center justify-center mt-8 lg:mt-0">
            <div className="relative w-full">
              {/* Glow effect */}
              <div className="absolute -inset-4 gradient-primary rounded-3xl blur-2xl opacity-20 animate-pulse" />
              
              {/* Image container */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-primary/20 transform hover:scale-[1.02] transition-transform duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20" />
                <img 
                  src={teamImage} 
                  alt="duaafluence team collaborating"
                  className="relative w-full h-auto"
                  data-testid="img-team-photo"
                />
              </div>
              
              {/* Floating badge */}
              <div className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 px-6 md:px-8 py-3 md:py-4 rounded-2xl gradient-primary shadow-xl border-4 border-background">
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-black text-white">50+</div>
                  <div className="text-xs md:text-sm font-bold text-white/90">MVPs Launched</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
