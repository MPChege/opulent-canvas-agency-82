
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Palette, Smartphone } from "lucide-react";

const services = [
  {
    icon: <Palette size={40} className="text-brand-gold mb-4" />,
    title: "UI/UX Design",
    description: "Crafting intuitive and visually stunning interfaces that captivate users and elevate your brand.",
  },
  {
    icon: <Code size={40} className="text-brand-gold mb-4" />,
    title: "Web Development",
    description: "Building robust, scalable, and high-performance web applications tailored to your unique business needs.",
  },
  {
    icon: <Smartphone size={40} className="text-brand-gold mb-4" />,
    title: "Mobile Applications",
    description: "Developing seamless and engaging mobile experiences for iOS and Android platforms.",
  },
];

const ServicesSection = () => {
  return (
    <section className="py-16 md:py-24 bg-brand-light-gray">
      <div className="container max-w-screen-xl mx-auto px-6">
        <div className="text-center mb-12 md:mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-deep-blue mb-4">Our Expertise</h2>
          <p className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto">
            From concept to launch, we provide a comprehensive suite of services to bring your digital vision to life with precision and artistry.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={service.title} className="animate-fade-in-up" style={{ animationDelay: `${index * 0.2}s` }}>
              <Card className="h-full bg-background shadow-xl hover:shadow-2xl transition-shadow duration-300 border-transparent hover:border-brand-gold">
                <CardHeader className="items-center text-center">
                  {service.icon}
                  <CardTitle className="text-2xl font-serif text-brand-deep-blue">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-foreground/70">{service.description}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
