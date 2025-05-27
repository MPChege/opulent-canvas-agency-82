
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section 
      className="relative py-20 md:py-32 lg:py-48 bg-cover bg-center animate-fade-in-up"
      style={{ backgroundImage: "url('https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=2000&auto=format&fit=crop')" }}
    >
      <div className="absolute inset-0 bg-brand-deep-blue/70 backdrop-blur-sm"></div>
      <div className="container max-w-screen-xl mx-auto px-6 relative z-10 text-center">
        <h1 className="text-5xl md:text-7xl font-bold font-serif mb-6 text-brand-cream animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          Architects of Digital Elegance
        </h1>
        <p className="text-xl md:text-2xl text-brand-cream/90 mb-10 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          We design and develop bespoke software solutions that blend cutting-edge technology with timeless sophistication.
        </p>
        <div className="animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <Button size="lg" className="bg-brand-gold text-brand-deep-blue hover:bg-yellow-500 text-lg px-8 py-6 group">
            Discover Our Craft <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
