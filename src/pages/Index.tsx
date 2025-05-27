
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import PhilosophySection from "@/components/PhilosophySection";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <HeroSection />
        <ServicesSection />
        <PhilosophySection />
        {/* Placeholder for more sections like Projects, Team, Contact Form etc. */}
        <section className="py-16 md:py-24 bg-brand-light-gray">
            <div className="container max-w-screen-xl mx-auto px-6 text-center">
                <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-deep-blue mb-4 animate-fade-in-up">Ready to Elevate Your Digital Presence?</h2>
                <p className="text-lg md:text-xl text-foreground/80 mb-8 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                    Let's discuss how Elysian can transform your ideas into extraordinary digital realities.
                </p>
                <div className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                     <a 
                        href="/contact" 
                        className="inline-block bg-brand-gold text-brand-deep-blue hover:bg-yellow-500 text-lg px-8 py-4 rounded-md font-medium transition-colors duration-300"
                    >
                        Schedule a Consultation
                    </a>
                </div>
            </div>
        </section>
      </main>
    </div>
  );
};

export default Index;
