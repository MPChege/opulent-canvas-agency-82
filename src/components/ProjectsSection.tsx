
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Zenith Luxury E-commerce Platform",
    category: "Web Development & UI/UX Design",
    description: "A bespoke e-commerce solution for a high-end fashion retailer, focusing on a seamless user experience and opulent aesthetics. Integrated advanced inventory management and personalized shopping features.",
    imageUrl: "https://images.unsplash.com/photo-1522199755839-a2bacb67c546?q=80&w=1200&auto=format&fit=crop", // Placeholder image
    link: "/projects/zenith",
  },
  {
    title: "Nova Financial Analytics Dashboard",
    category: "Software Development & Data Visualization",
    description: "Developed a sophisticated financial analytics dashboard for an investment firm, providing real-time data insights and predictive modeling capabilities with an intuitive interface.",
    imageUrl: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=1200&auto=format&fit=crop", // Placeholder image (using hero image as temp)
    link: "/projects/nova-financial",
  },
  {
    title: "Aura Wellness Mobile App",
    category: "Mobile App Development & UI/UX Design",
    description: "Designed and built a cross-platform mobile application for a luxury wellness brand, featuring guided meditations, personalized programs, and seamless booking integrations.",
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop", // Placeholder image
    link: "/projects/aura-wellness",
  },
];

const ProjectsSection = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container max-w-screen-xl mx-auto px-6">
        <div className="text-center mb-12 md:mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-deep-blue mb-4">Our Signature Projects</h2>
          <p className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto">
            A glimpse into the tailored digital masterpieces we've crafted for our discerning clientele.
          </p>
        </div>
        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
          {projects.map((project, index) => (
            <div key={project.title} className="animate-fade-in-up" style={{ animationDelay: `${index * 0.2}s` }}>
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
                  <h3 className="text-2xl font-serif font-semibold text-brand-deep-blue mb-2">{project.title}</h3>
                  <p className="text-sm text-brand-gold font-medium mb-3">{project.category}</p>
                  <p className="text-foreground/70 leading-relaxed text-sm">
                    {project.description}
                  </p>
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
        <div className="text-center mt-12 md:mt-16 animate-fade-in-up" style={{ animationDelay: `${projects.length * 0.2}s` }}>
          <Button size="lg" variant="outline" className="text-brand-gold border-brand-gold hover:bg-brand-gold hover:text-brand-deep-blue text-lg px-8 py-6 group">
            Explore All Projects <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

