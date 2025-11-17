import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Rocket, Globe, Smartphone, Palette } from "lucide-react";
import { useState } from "react";

const services = [
  {
    icon: Rocket,
    title: "MVP Development",
    description: "Build your minimum viable product in 3–6 weeks. Launch fast, gather feedback, and iterate with confidence.",
    gradient: "from-blue-500 to-cyan-500",
    fullDescription: {
      title: "MVP Development",
      subtitle: "Turn your idea into a functional, launch-ready Minimum Viable Product with speed, clarity, and scalable architecture.",
      data: [
        {
          title: "🚀 What This Service Includes",
          content: [
            { title: "", details: "Idea validation and feature prioritization (build what truly matters)" },
            { title: "", details: "Rapid UI/UX design and prototype creation" },
            { title: "", details: "Core feature development using modern frameworks" },
            { title: "", details: "Scalable backend & clean API development" },
            { title: "", details: "User authentication, roles & permissions" },
            { title: "", details: "Database setup and optimized architecture" },
            { title: "", details: "Deployment to cloud hosting (AWS, Vercel, DigitalOcean)" },
            { title: "", details: "Post-launch iteration support based on user feedback" },
          ]
        },
        {
          title: "🛠️ Tools & Technologies We Use",
          content: [
            { title: "Frontend:", details: "React.js, Next.js, Vue.js, React Native, Expo" },
            { title: "Backend:", details: "Node.js, NestJS, Express.js, Django, Laravel" },
            { title: "Databases:", details: "PostgreSQL, MongoDB, MySQL, Firebase" },
            { title: "DevOps & Deployment:", details: "Docker, AWS, Vercel, DigitalOcean, Render" },
            { title: "Prototyping:", details: "Figma, Framer, Adobe XD" },
            { title: "Testing:", details: "Jest, Cypress, Playwright" },
            { title: "APIs:", details: "REST, GraphQL, Webhooks, OAuth" },
          ]
        },
        {
          title: "⚙️ Our Process",
          content: [
            { title: "Discovery & Validation:", details: "We refine your idea, define the core value, and build a feature roadmap for the MVP." },
            { title: "Rapid Prototyping:", details: "We design clean, intuitive UI/UX aligned with user expectations." },
            { title: "Development Sprint:", details: "We build the essential features using a scalable and flexible architecture." },
            { title: "Testing & QA:", details: "We ensure the product works smoothly across devices, browsers, and real environments." },
            { title: "Launch & Deployment:", details: "We deploy your MVP on cloud hosting with performance and security optimizations." },
            { title: "User Feedback & Iteration:", details: "We analyze real user behavior to plan the next feature upgrades." },
          ]
        },
        {
          title: "💡 Why This Matters",
          content: [
            { title: "", details: "Launch quickly and start validating your idea with real users" },
            { title: "", details: "Avoid spending months on unnecessary features" },
            { title: "", details: "Attract investors with a functional, presentable product" },
            { title: "", details: "Reduce development costs with a focused scope" },
            { title: "", details: "Scale easily once product-market fit is achieved" },
          ]
        },
        {
          title: "🎯 Ideal For",
          content: [
            { title: "", details: "Founders testing startup ideas" },
            { title: "", details: "Businesses launching digital products for the first time" },
            { title: "", details: "Companies validating a new feature before full rollout" },
            { title: "", details: "Entrepreneurs seeking investor readiness fast" },
          ]
        }
      ]
    }

  },
  {
    icon: Globe,
    title: "Web App Development",
    description: "Responsive, scalable, and secure business web apps that work seamlessly across all devices and browsers.",
    gradient: "from-purple-500 to-pink-500",
    fullDescription: {
      title: "Web App Development",
      subtitle: "Build fast, scalable, and modern web applications tailored to your business needs with clean architecture and seamless user experiences.",
      data: [
        {
          title: "💻 What This Service Includes",
          content: [
            { title: "", details: "Custom web application development built for performance" },
            { title: "", details: "Responsive UI development for all devices" },
            { title: "", details: "API integration & backend development" },
            { title: "", details: "Real-time features (chat, live updates, dashboards)" },
            { title: "", details: "Role-based authentication & secure access control" },
            { title: "", details: "Admin dashboards & analytics tools" },
            { title: "", details: "Deployment, hosting, and scalability planning" },
          ]
        },
        {
          title: "🛠️ Tools & Technologies We Use",
          content: [
            { title: "Frontend:", details: "React.js, Next.js, Vue.js, Angular, Tailwind CSS" },
            { title: "Backend:", details: "Node.js, NestJS, Express.js, Laravel" },
            { title: "Databases:", details: "PostgreSQL, MongoDB, MySQL, Redis" },
            { title: "Cloud & DevOps:", details: "AWS, Docker, NGINX, CI/CD Pipelines" },
            { title: "Real-time:", details: "Socket.IO, WebSockets, Firebase" },
            { title: "Testing:", details: "Jest, Cypress, Playwright" },
            { title: "API Technologies:", details: "REST, GraphQL, Webhooks" },
          ]
        },
        {
          title: "⚙️ Our Process",
          content: [
            { title: "Requirements & Planning:", details: "We align on features, user flows, and the tech stack to build a clear development roadmap." },
            { title: "Architecture & Design:", details: "We craft scalable system architecture and integrate UI/UX design for smooth usability." },
            { title: "Frontend Development:", details: "We build clean, responsive, and modern interfaces using industry-leading frameworks." },
            { title: "Backend Development:", details: "We implement secure APIs, databases, and business logic with best coding practices." },
            { title: "Quality Assurance:", details: "We perform functional, performance, and browser-specific testing to ensure a flawless product." },
            { title: "Deployment & Optimization:", details: "We deploy on cloud platforms with SEO, performance, and security optimizations." },
            { title: "Continuous Support:", details: "We provide updates, bug fixes, and feature enhancements as your business evolves." },
          ]
        },
        {
          title: "💡 Why This Matters",
          content: [
            { title: "", details: "Gives your business a strong digital presence" },
            { title: "", details: "Enhances user engagement with modern web interfaces" },
            { title: "", details: "Improves internal operations with custom tools & automation" },
            { title: "", details: "Provides long-term scalability for future growth" },
            { title: "", details: "Ensures enterprise-level security and performance" },
          ]
        },
        {
          title: "🚀 Ideal For",
          content: [
            { title: "", details: "Startups launching new web platforms or MVPs" },
            { title: "", details: "Businesses needing custom internal tools or dashboards" },
            { title: "", details: "Companies upgrading outdated systems" },
            { title: "", details: "E-commerce, SaaS products, and enterprise solutions" },
          ]
        }
      ]
    }

  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Native-quality mobile experiences with React Native and Flutter. One codebase, iOS and Android ready.",
    gradient: "from-green-500 to-emerald-500",
    fullDescription: {
      title: "Mobile App Development",
      subtitle: "Build fast, secure, and scalable mobile apps that deliver seamless experiences across iOS and Android.",
      data: [
        {
          title: "📱 What This Service Includes",
          content: [
            { title: "", details: "Custom iOS & Android application development" },
            { title: "", details: "Hybrid & cross-platform apps (React Native, Flutter)" },
            { title: "", details: "API development & backend integration" },
            { title: "", details: "Real-time features (chat, notifications, live updates)" },
            { title: "", details: "End-to-end deployment on App Store & Play Store" },
            { title: "", details: "Performance optimization and scalability" },
            { title: "", details: "Security best practices and data protection" },
          ]
        },
        {
          title: "🛠️ Tools & Technologies We Use",
          content: [
            { title: "Frameworks:", details: "React Native, Flutter, Swift, Kotlin" },
            { title: "Backend:", details: "Node.js, NestJS, Firebase, AWS, Supabase" },
            { title: "Databases:", details: "PostgreSQL, MongoDB, MySQL, Firestore" },
            { title: "State Management:", details: "Redux, Zustand, MobX, Riverpod" },
            { title: "Development Tools:", details: "Xcode, Android Studio, VS Code" },
            { title: "Testing:", details: "Jest, Detox, Appium, Firebase Test Lab" },
            { title: "DevOps:", details: "Fastlane, CI/CD, App Center" },
          ]
        },
        {
          title: "⚙️ Our Process",
          content: [
            { title: "Project Discovery:", details: "We understand your app goals, features, and audience, then define a clear roadmap." },
            { title: "Architecture Planning:", details: "We choose scalable architectures and define the tech stack for the best long-term stability." },
            { title: "UI/UX Integration:", details: "We convert approved designs into responsive, smooth screens aligned with platform standards." },
            { title: "App Development:", details: "We build core features, integrate backend, add real-time functionality, and follow clean code practices." },
            { title: "Quality Assurance:", details: "We perform rigorous testing—functional, performance, and device-specific—to ensure flawless delivery." },
            { title: "Deployment & Launch:", details: "We publish your app on the App Store and Play Store with proper guidelines and metadata." },
            { title: "Post-Launch Support:", details: "We provide maintenance, updates, bug fixes, and new features as your app grows." },
          ]
        },
        {
          title: "💡 Why This Matters",
          content: [
            { title: "", details: "Builds a strong mobile presence for your business" },
            { title: "", details: "Delivers fast, intuitive, and user-friendly experiences" },
            { title: "", details: "Improves customer engagement and retention" },
            { title: "", details: "Ensures scalability for future growth" },
            { title: "", details: "Provides secure and reliable performance across devices" },
          ]
        },
        {
          title: "🚀 Ideal For",
          content: [
            { title: "", details: "Startups building MVPs or full-scale products" },
            { title: "", details: "Businesses needing mobile visibility" },
            { title: "", details: "Existing apps needing redesign or modernization" },
            { title: "", details: "Companies expanding into custom mobile solutions" },
          ]
        }
      ]
    }

  },
  {
    icon: Palette,
    title: "UI/UX & Prototyping Services",
    description: "Validate ideas with clickable prototypes before full development. Design beautiful, intuitive interfaces users love.",
    gradient: "from-orange-500 to-red-500",
    fullDescription: {
      title: "UI/UX & Prototyping Services",
      subtitle: "Validate ideas with clickable prototypes before full development. Design beautiful, intuitive interfaces users love.",
      data: [
        {
          title: "🔍 What This Service Includes",
          content: [
            {title: "", details: "User research & requirement understanding"},
            {title: "", details: "Wireframes (low-fidelity sketches to outline structure)"},
            {title: "", details: "High-fidelity UI screens (pixel-perfect designs)"},
            {title: "", details: "Clickable prototypes for user testing"},
            {title: "", details: "Design system & component library"},
            {title: "", details: "UX flow mapping & journey optimization"},
            {title: "", details: "Usability review and iterations"},
          ]
        },
        {
          title: "🎨 Tools & Technologies We Use",
          content: [
            {title: "UI Design:", details: "Figma, Adobe XD, Sketch"},
            {title: "Prototyping:", details: "Figma Prototypes, InVision, Framer"},
            {title: "Design Systems:", details: " Material UI, Ant Design, Apple HIG, Tailwind UI"},
            {title: "User Flow Mapping:", details: "Miro, Lucidchart, FigJam"},
            {title: "Collaboration:", details: "Zeplin, Jira, Confluence"},
          ]
        },
        {
          title: "⚙️ Our Process",
          content: [
            {title: "Discovery & Research:", details: "We understand your product goals, target audience, business needs, and we will do competitor analysis help us shape the right direction."},
            {title: "UX Strategy & Wireframing:", details: "We create wireframes to define structure, layout, and user experience without focusing on visuals."},
            {title: "UI Design:", details: " We craft visually appealing, modern, and brand-aligned interfaces using best-in-class design principles."},
            {title: "Interactive Prototyping:", details: "We turn your screens into a clickable prototype so you can visualize the full flow before any development begins."},
            {title: "Feedback & Iteration:", details: "We deliver clean, organized design files with detailed specs and assets for developers."},
            {title: "Development-Ready Assets:", details: "We deliver clean, organized design files with detailed specs and assets for developers."},
          ]
        },
        {
          title: "💡 Why This Matters",
          content: [
            {title: "", details: "Prevents costly changes during development"},
            {title: "", details: "Helps validate ideas early with stakeholders"},
            {title: "", details: "Ensures seamless, intuitive user experiences"},
            {title: "", details: "Accelerates development with ready-to-use assets"},
            {title: "", details: "Builds brand trust with polished UI"},
          ]
        },
        {
          title: "🚀 Ideal For",
          content: [
            {title: "", details: "Startups validating MVP ideas"},
            {title: "", details: "Businesses redesigning outdated interfaces"},
            {title: "", details: "Products needing professional UI polish"},
            {title: "", details: "Companies wanting consistent design systems"},
          ]
        },
      ]
    }
  },
];

export default function Services() {
  const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null);
  return (
    <section id="services" className="py-20 md:py-32 bg-gradient-to-b from-background to-muted/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-5xl md:text-6xl font-black" data-testid="text-services-title">
            What We <span className="gradient-text">Do</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            End-to-end services to transform your vision into reality
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-6 max-w-7xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={index}
                className="group relative overflow-hidden border-2 hover:border-primary/50 transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl bg-card flex flex-col"
                data-testid={`card-service-${index}`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                
                <CardContent className="p-8 space-y-4 relative flex-1 flex flex-col">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                    <Icon className="w-8 h-8 text-white" data-testid={`icon-service-${index}`} />
                  </div>
                  <h3 className="text-2xl font-black" data-testid={`text-service-title-${index}`}>
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed flex-1" data-testid={`text-service-description-${index}`}>
                    {service.description}
                  </p>
                  <Button
                    className="w-full mt-4 bg-transparent border-2 border-black text-transparent bg-clip-text gradient-text font-bold py-2 rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300 group/btn uppercase"
                    onClick={() => setSelectedService(service)}
                    data-testid={`button-read-more-${index}`}
                  >
                    Read More →
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Modal Dialog */}
      <Dialog open={!!selectedService} onOpenChange={(open) => !open && setSelectedService(null)}>
        <DialogContent className="max-w-2xl border-0 shadow-2xl bg-white max-h-[90vh] flex flex-col overflow-hidden">
          <DialogHeader className="space-y-4 flex-shrink-0">
            <div className="flex items-start gap-6">
              {selectedService && (
                <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${selectedService.gradient} flex items-center justify-center shadow-lg`}>
                  {(() => {
                    const Icon = selectedService.icon;
                    return <Icon className="w-10 h-10 text-white" />;
                  })()}
                </div>
              )}
              <div className="flex-1">
                <DialogTitle className="text-[2rem] font-extrabold text-black">
                  {selectedService?.title}
                </DialogTitle>
                {selectedService?.fullDescription?.subtitle && (
                  <p className="mt-0 font-semibold text-foreground/90">{selectedService.fullDescription.subtitle}</p>
                )}
              </div>
            </div>
          </DialogHeader>
          
          <div className="space-y-6 px-6 overflow-y-auto flex-1">
            {selectedService?.fullDescription ? (
              <div className="text-foreground/90">
            
                    {Array.isArray(selectedService.fullDescription.data) && (
                      <div className="space-y-4 pt-2">
                        {selectedService.fullDescription.data.map((group: any, gi: number) => (
                          <div key={gi} className="pl-4">
                            {group.title && (
                              <div className="text-sm font-bold mb-2 text-foreground/60">{group.title}</div>
                            )}
                            {Array.isArray(group.content) && (
                              <div className="space-y-3 pl-8">
                                {group.content.map((item: any, ii: number) => (
                                  <div key={ii} className="flex gap-3">
                                    <span className="text-foreground/60 font-bold text-lg leading-5 flex-shrink-0">•</span>
                                    <div>
                                      {item.title ? (
                                        <span className="text-foreground/60 font-bold text-sm">
                                          {item.title} {' '}
                                        </span>
                                      ) : null}
                                      <span className="text-foreground/90 text-sm">
                                        {item.details}
                                      </span>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                
            ) : (
              <DialogDescription className="text-base leading-relaxed text-foreground/90">
                No details available.
              </DialogDescription>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}
