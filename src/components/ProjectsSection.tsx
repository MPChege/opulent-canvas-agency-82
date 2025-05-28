
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const projects = [
  {
    title: "Zenith East Africa Corporate Platform",
    category: "Web Development & Corporate Design",
    description: "Comprehensive corporate website for Zenith East Africa, building impactful businesses and brands across the continent with modern strategic consulting services.",
    imageUrl: "/lovable-uploads/996bead4-2818-4cb2-a70b-4b580fdc7d8d.png",
    link: "https://www.zenitheastafrica.com/",
  },
  {
    title: "KibokoDAO Web3 Community",
    category: "Blockchain Development & Web3",
    description: "Revolutionary decentralized platform representing African communities in global Web3 ecosystem, featuring DAO governance and collaborative tools.",
    imageUrl: "/lovable-uploads/6b7f7b4a-8720-4fd1-b6a9-bdc8264b2168.png",
    link: "https://www.kibokodao.org/",
  },
  {
    title: "Dable Properties Real Estate",
    category: "Full-Stack Development & PropTech",
    description: "Advanced real estate platform with property listings, virtual tours, and integrated payment systems for prime locations near KAG University.",
    imageUrl: "/lovable-uploads/78d9727b-f752-479c-ad6a-04c010886f76.png",
    link: "https://dableproperties.co.ke/",
  },
];

const ProjectsSection = () => {
  const navigate = useNavigate();

  const handleExploreProjects = () => {
    navigate('/projects');
  };

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
                  <Button variant="link" className="text-brand-deep-blue p-0 h-auto hover:text-brand-gold group/link" asChild>
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      View Case Study <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/link:translate-x-1" />
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          ))}
        </div>
        <div className="text-center mt-12 md:mt-16 animate-fade-in-up" style={{ animationDelay: `${projects.length * 0.2}s` }}>
          <Button 
            size="lg" 
            variant="outline" 
            className="text-brand-gold border-brand-gold hover:bg-brand-gold hover:text-brand-deep-blue text-lg px-8 py-6 group"
            onClick={handleExploreProjects}
          >
            Explore All Projects <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
