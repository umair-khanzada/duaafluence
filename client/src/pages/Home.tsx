import HeroSection from "@/components/HeroSection";
import WhoWeAre from "@/components/WhoWeAre";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Portfolio from "@/components/Portfolio";
import WhyChooseUs from "@/components/WhyChooseUs";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <WhoWeAre />
      <Services />
      <Process />
      <Portfolio />
      <WhyChooseUs />
      <ContactSection />
      <Footer />
    </div>
  );
}
