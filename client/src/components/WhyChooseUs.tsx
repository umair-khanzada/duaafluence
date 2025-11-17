import { CheckCircle2 } from "lucide-react";

const benefits = [
  "10+ Years of Proven Experience",
  "Fast, Transparent Delivery",
  "Affordable MVP Packages",
  "Scalable Architecture",
  "End-to-End Development Partner",
  "Dedicated Support Team",
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-20 md:py-32 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-5xl md:text-6xl font-black" data-testid="text-why-choose-title">
            Why Businesses <span className="gradient-text">Choose Us</span>
          </h2>
        </div>
        
        <div className="grid sm:grid-cols-2 gap-4 md:gap-6 max-w-4xl mx-auto">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="group flex items-start space-x-4 p-6 rounded-2xl bg-gradient-to-br from-card to-muted/30 border-2 border-primary/10 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              data-testid={`benefit-${index}`}
            >
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <CheckCircle2 className="w-6 h-6 text-white" data-testid={`icon-check-${index}`} />
                </div>
              </div>
              <p className="text-lg font-bold pt-2" data-testid={`text-benefit-${index}`}>
                {benefit}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
