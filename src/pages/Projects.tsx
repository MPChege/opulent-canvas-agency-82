
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Globe, Smartphone, Wifi } from "lucide-react";
import { Button } from "@/components/ui/button";

const projectCategories = [
  {
    icon: Globe,
    title: "Web Development",
    color: "from-blue-500 to-blue-700",
    projects: [
      {
        title: "KenTrade Digital Platform",
        description: "Revolutionary e-commerce platform connecting Kenyan farmers directly to global markets, featuring real-time pricing and logistics optimization.",
        imageUrl: "https://images.unsplash.com/photo-1522199755839-a2bacb67c546?q=80&w=1200&auto=format&fit=crop",
        technologies: ["React", "Node.js", "MongoDB", "Payment Gateway"]
      },
      {
        title: "Safari Health Portal",
        description: "Comprehensive healthcare management system for rural clinics across East Africa, enabling telemedicine and patient record management.",
        imageUrl: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=1200&auto=format&fit=crop",
        technologies: ["Next.js", "PostgreSQL", "WebRTC", "PWA"]
      }
    ]
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    color: "from-green-500 to-green-700",
    projects: [
      {
        title: "Mama Pesa Mobile Banking",
        description: "Secure mobile banking solution designed for the unbanked population, featuring offline capabilities and USSD integration.",
        imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
        technologies: ["React Native", "Blockchain", "Offline-First", "USSD"]
      },
      {
        title: "Shule Smart Learning App",
        description: "Interactive learning platform for Kenyan students with offline content sync and progress tracking for remote areas.",
        imageUrl: "https://images.unsplash.com/photo-1522199755839-a2bacb67c546?q=80&w=1200&auto=format&fit=crop",
        technologies: ["Flutter", "Firebase", "AI Tutoring", "Offline Sync"]
      }
    ]
  },
  {
    icon: Wifi,
    title: "IoT Solutions",
    color: "from-purple-500 to-purple-700",
    projects: [
      {
        title: "Smart Irrigation Network",
        description: "IoT-powered irrigation system for smallholder farmers, optimizing water usage through soil sensors and weather data integration.",
        imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop",
        technologies: ["Arduino", "LoRaWAN", "Machine Learning", "Solar Power"]
      },
      {
        title: "Urban Traffic Intelligence",
        description: "Smart traffic management system for Nairobi, using IoT sensors and AI to optimize traffic flow and reduce congestion.",
        imageUrl: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=1200&auto=format&fit=crop",
        technologies: ["Raspberry Pi", "Computer Vision", "Edge Computing", "5G"]
      }
    ]
  }
];

const Projects = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-brand-deep-blue via-purple-900 to-green-900">
        <div className="container max-w-screen-xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-brand-cream mb-6 animate-fade-in-up">
            Our Projects
          </h1>
          <p className="text-lg md:text-xl text-brand-cream/80 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Showcasing innovation across Web, Mobile, and IoT solutions that are transforming lives across Africa.
          </p>
        </div>
      </section>

      {/* Projects by Category */}
      {projectCategories.map((category, categoryIndex) => (
        <section key={category.title} className={`py-16 md:py-24 ${categoryIndex % 2 === 0 ? 'bg-background' : 'bg-brand-light-gray'}`}>
          <div className="container max-w-screen-xl mx-auto px-6">
            <div className="text-center mb-12 md:mb-16">
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${category.color} mb-4`}>
                <category.icon className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-deep-blue mb-4 animate-fade-in-up">
                {category.title}
              </h2>
            </div>
            
            <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
              {category.projects.map((project, projectIndex) => (
                <div key={project.title} className="animate-fade-in-up" style={{ animationDelay: `${projectIndex * 0.2}s` }}>
                  <Card className="h-full flex flex-col overflow-hidden bg-brand-cream shadow-xl hover:shadow-2xl transition-all duration-300 group border-transparent hover:border-brand-gold/50">
                    <CardHeader className="p-0">
                      <div className="aspect-video overflow-hidden">
                        <img 
                          src={project.imageUrl} 
                          alt={project.title} 
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                        />
                      </div>
                    </CardHeader>
                    <CardContent className="p-6 flex-grow">
                      <h3 className="text-2xl font-serif font-semibold text-brand-deep-blue mb-3">{project.title}</h3>
                      <p className="text-foreground/70 leading-relaxed mb-4">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <span key={tech} className="px-3 py-1 bg-brand-gold/10 text-brand-deep-blue text-xs rounded-full">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                    <CardFooter className="p-6 pt-0">
                      <Button variant="link" className="text-brand-deep-blue p-0 h-auto hover:text-brand-gold group/link">
                        View Case Study <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/link:translate-x-1" />
                      </Button>
                    </CardFooter>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-brand-deep-blue">
        <div className="container max-w-screen-xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-cream mb-4 animate-fade-in-up">
            Ready to Build the Future?
          </h2>
          <p className="text-lg md:text-xl text-brand-cream/80 mb-8 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Let's create innovative solutions that will transform your industry and impact millions of lives.
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

export default Projects;
