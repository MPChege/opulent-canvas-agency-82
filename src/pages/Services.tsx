
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Smartphone, Wifi, Globe, Zap, Shield } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Web Development",
    description: "Cutting-edge web applications built with modern technologies, optimized for performance and user experience across all devices.",
    features: ["React & Next.js", "Progressive Web Apps", "E-commerce Solutions", "Custom CMS"]
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    description: "Native and cross-platform mobile apps that deliver exceptional user experiences on iOS and Android platforms.",
    features: ["React Native", "Flutter", "iOS Native", "Android Native"]
  },
  {
    icon: Wifi,
    title: "IoT Solutions",
    description: "Internet of Things solutions connecting the physical and digital worlds through smart sensors and intelligent automation.",
    features: ["Smart Home Systems", "Industrial IoT", "Agricultural Tech", "Healthcare Monitoring"]
  },
  {
    icon: Code,
    title: "Custom Software",
    description: "Bespoke software solutions tailored to your specific business needs and requirements.",
    features: ["Enterprise Applications", "API Development", "Database Design", "System Integration"]
  },
  {
    icon: Zap,
    title: "Digital Transformation",
    description: "Modernize your business processes with innovative digital solutions and automation.",
    features: ["Process Automation", "Cloud Migration", "Data Analytics", "AI Integration"]
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description: "Comprehensive security solutions to protect your digital assets and ensure data privacy.",
    features: ["Security Audits", "Penetration Testing", "Compliance", "Training"]
  }
];

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-brand-deep-blue to-purple-900">
        <div className="container max-w-screen-xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-brand-cream mb-6 animate-fade-in-up">
            Our Services
          </h1>
          <p className="text-lg md:text-xl text-brand-cream/80 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Empowering Africa's digital future through innovative technology solutions crafted by visionary developers in Nairobi.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container max-w-screen-xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={service.title} className="animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <Card className="h-full bg-brand-cream shadow-xl hover:shadow-2xl transition-all duration-300 group border-transparent hover:border-brand-gold/50">
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-brand-gold/10 flex items-center justify-center group-hover:bg-brand-gold/20 transition-colors">
                      <service.icon className="w-8 h-8 text-brand-gold" />
                    </div>
                    <CardTitle className="text-2xl font-serif text-brand-deep-blue">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-foreground/70 mb-4">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center text-sm text-foreground/60">
                          <div className="w-2 h-2 bg-brand-gold rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-brand-light-gray">
        <div className="container max-w-screen-xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-deep-blue mb-4 animate-fade-in-up">
            Ready to Transform Your Vision?
          </h2>
          <p className="text-lg md:text-xl text-foreground/80 mb-8 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Let's discuss how our expertise can bring your ideas to life with cutting-edge technology.
          </p>
          <div className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <a 
              href="/contact" 
              className="inline-block bg-brand-gold text-brand-deep-blue hover:bg-yellow-500 text-lg px-8 py-4 rounded-md font-medium transition-colors duration-300"
            >
              Start Your Project
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
