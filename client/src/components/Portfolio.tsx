import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import project1 from "@assets/generated_images/zabihah_1.webp";
import zabihah2 from "@assets/generated_images/zabihah_2.webp";
import zabihah3 from "@assets/generated_images/zabihah_3.webp";
import zabihah4 from "@assets/generated_images/zabihah_4.webp";
import zabihah5 from "@assets/generated_images/zabihah_5.webp";
import explore_bt1 from "@assets/generated_images/explore_btk_1.webp";
import explore_bt2 from "@assets/generated_images/explore_btk_2.webp";
import explore_bt3 from "@assets/generated_images/explore_btk_3.webp";
import explore_bt4 from "@assets/generated_images/explore_btk_4.webp";
import explore_bt5 from "@assets/generated_images/explore_btk_5.webp";
import explore_bt6 from "@assets/generated_images/explore_btk_6.webp";
import explore_bt7 from "@assets/generated_images/explore_btk_7.webp";
import ch1 from "@assets/generated_images/ch_1.webp";
import ch2 from "@assets/generated_images/ch_2.webp";
import ch3 from "@assets/generated_images/ch_3.webp";
import ch4 from "@assets/generated_images/ch_4.webp";
import ch5 from "@assets/generated_images/ch_5.webp";
import { useState, useRef, useEffect } from "react";

const projects = [
  {
    images: [project1, zabihah2, zabihah3, zabihah4, zabihah5],
    title: "Zabihah",
    result: "Zabihah is the original & largest guide to Halal food discovery and delivery, used by Halal foodies around the world since 1998",
    metric: "100K+ Downloads",
    liveLink: "https://zabihah.com",
    gradient: "from-green-500 to-emerald-500",
  },
  {
    images: [explore_bt1, explore_bt2, explore_bt3, explore_bt4, explore_bt5, explore_bt6, explore_bt7],
    title: "Explore BTK",
    result: "Explore BTK is an application from which you can explore Bahria Town Karachi. All businesses (Restaurants, Gyms, Schools, Electricians, Plumbers, Construction Companies, Petrol Pumps) etc. In one place it will be easy to find them and give them reviews based on your experience so others can benefit from your review.",
    metric: "900+ Daily active users",
    liveLink: "https://explorebtk.com/",
    gradient: "from-blue-500 to-purple-500",
  },
  {
    images: [ch1, ch2, ch3, ch4, ch5],
    title: "Cloth Hub",
    result: "Discover the world of fashion with Cloth Hub, your all-in-one app to explore, browse, and shop from top clothing brands. Stay ahead of trends and find your perfect style effortlessly.",
    metric: "50K+ Products",
    liveLink: "https://play.google.com/store/apps/details?id=com.clothhubapp&hl=en_US",
    gradient: "from-orange-500 to-pink-500",
  },
];

export default function Portfolio() {
  const [open, setOpen] = useState(false);
  const [currentProject, setCurrentProject] = useState<number | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const carouselApi = useRef<any>(null);

  const openProject = (index: number) => {
    setCurrentProject(index);
    setCurrentSlide(0);
    setOpen(true);
  };

  const closeProject = () => {
    setOpen(false);
    setCurrentProject(null);
  };

  useEffect(() => {
    if (!carouselApi.current) return;

    const onSelect = () => {
      setCurrentSlide(carouselApi.current.selectedIndex || 0);
    };

    carouselApi.current.on('select', onSelect);
    return () => {
      carouselApi.current?.off('select', onSelect);
    };
  }, []);

  return (
    <section id="portfolio" className="py-20 md:py-32 bg-gradient-to-b from-muted/30 to-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-5xl md:text-6xl font-black" data-testid="text-portfolio-title">
            Our <span className="gradient-text">Work</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-semibold" data-testid="text-portfolio-subtitle">
            Real products we've built for real businesses. From idea to launch in weeks.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="group overflow-hidden border-2 hover:border-primary/50 transition-all duration-500 hover:-translate-y-4 bg-card hover:shadow-2xl cursor-pointer flex flex-col"
              data-testid={`card-project-${index}`}
              onClick={() => openProject(index)}
            >
              <div className="relative overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500 z-10`} />
                <img 
                  src={project.images[0]} 
                  alt={project.title}
                  className="w-full h-64 object-contain group-hover:scale-110 transition-transform duration-700 bg-white"
                  style={{background: 'white'}}
                  data-testid={`img-project-${index}`}
                />
              </div>
              <CardContent className="p-6 space-y-3 flex flex-col flex-1">
                <h3 className="text-2xl font-black" data-testid={`text-project-title-${index}`}>
                  {project.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed flex-1" data-testid={`text-project-result-${index}`}>
                  {project.result}
                </p>
                <div className="flex justify-between items-center mt-auto pt-4 border-t">
                  <a 
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary/80 font-semibold text-sm hover:underline"
                    onClick={(e) => e.stopPropagation()}
                  >
                    See live
                  </a>
                  <p className="text-lg font-black gradient-text" data-testid={`text-project-metric-${index}`}>
                    {project.metric}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Project images modal */}
      <Dialog open={open} onOpenChange={(val) => !val && closeProject()}>
        <DialogContent className="max-w-6xl w-[95vw] md:w-[98vw] bg-white p-0 overflow-hidden flex flex-col [&>button]:z-50 [&>button]:bg-white [&>button]:rounded-full [&>button]:shadow-lg" style={{ height: '90vh', maxHeight: '800px' }}>
          <div className="relative w-full h-full flex items-center justify-center bg-white">
            {currentProject !== null && (
              <Carousel className="relative w-full h-full" setApi={(api) => { carouselApi.current = api; }}>
                <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-black h-10 w-10" />
                <CarouselContent className="w-full h-full m-0">
                  {projects[currentProject].images.map((img: string, i: number) => (
                    <CarouselItem key={i} className="w-full h-full p-0 basis-full flex items-center justify-center">
                      <img src={img} alt={`${projects[currentProject].title} ${i + 1}`} style={{maxWidth: '100%', maxHeight: '800px', objectFit: 'contain', display: 'block'}} />
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-black h-10 w-10" />
                
                {/* Indicator dots */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                  {projects[currentProject].images.map((_, i: number) => (
                    <button
                      key={i}
                      className={`rounded-full transition-all ${
                        i === currentSlide ? 'bg-primary w-6 h-2' : 'bg-gray-300 w-2 h-2 hover:bg-gray-400'
                      }`}
                      onClick={() => {
                        carouselApi.current?.scrollTo(i);
                      }}
                      aria-label={`Go to slide ${i + 1}`}
                    />
                  ))}
                </div>
              </Carousel>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}
