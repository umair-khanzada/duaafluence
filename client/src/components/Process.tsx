import { Phone, Pencil, Code, Rocket as RocketIcon, TrendingUp } from "lucide-react";

const steps = [
  {
    icon: Phone,
    title: "Discovery Call",
    description: "We learn about your vision, goals, and timeline",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Pencil,
    title: "Prototype & Design",
    description: "Create clickable prototypes to validate your concept",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Code,
    title: "Rapid Development",
    description: "Build your MVP with clean, scalable code",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: RocketIcon,
    title: "Launch & Feedback",
    description: "Deploy your app and gather real user insights",
    color: "from-orange-500 to-red-500",
  },
  {
    icon: TrendingUp,
    title: "Iterate & Scale",
    description: "Continuously improve based on data and feedback",
    color: "from-pink-500 to-purple-500",
  },
];

export default function Process() {
  return (
    <section id="process" className="py-20 md:py-32 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-5xl md:text-6xl font-black" data-testid="text-process-title">
            How We <span className="gradient-text">Work</span>
          </h2>
          <p className="text-xl text-muted-foreground font-semibold" data-testid="text-process-tagline">
            Our process is transparent, efficient, and results-driven.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8 max-w-7xl mx-auto">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative text-center group" data-testid={`step-${index}`}>
                <div className="flex flex-col items-center space-y-6">
                  {/* Icon */}
                  <div className="relative">
                    <div className={`w-24 h-24 rounded-3xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-xl group-hover:scale-110 transition-all duration-500 group-hover:rotate-6`}>
                      <Icon className="w-12 h-12 text-white" data-testid={`icon-step-${index}`} />
                    </div>
                    <div className={`absolute -top-3 -right-3 w-10 h-10 rounded-full flex items-center justify-center text-white font-black text-lg shadow-lg bg-gradient-to-br ${step.color} ring-1 ring-white/10`}>
                      {index + 1}
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <h3 className="text-xl font-black" data-testid={`text-step-title-${index}`}>
                      {step.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed" data-testid={`text-step-description-${index}`}>
                      {step.description}
                    </p>
                  </div>
                </div>
                
                {/* Connection line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-[60%] w-full h-1 bg-gradient-to-r from-primary to-accent opacity-20 -z-10" />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
