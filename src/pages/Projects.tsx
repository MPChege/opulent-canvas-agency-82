
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
        title: "Zenith East Africa",
        description: "Building impactful businesses and brands across Africa. A comprehensive corporate website showcasing strategic consulting services with modern design principles.",
        imageUrl: "/lovable-uploads/996bead4-2818-4cb2-a70b-4b580fdc7d8d.png",
        technologies: ["React", "Next.js", "Tailwind CSS", "Modern Design"],
        url: "https://www.zenitheastafrica.com/"
      },
      {
        title: "Steeple Consultancy",
        description: "Professional consulting services platform turning rough ideas into polished diamonds. Features responsive design and client portfolio showcase.",
        imageUrl: "/lovable-uploads/cc22ec64-d261-4892-9173-10c3a22e6499.png",
        technologies: ["React", "CSS3", "JavaScript", "Responsive Design"],
        url: "https://steepleconsultancy.netlify.app/"
      },
      {
        title: "MP Roysambu 2022",
        description: "Political campaign website for Brown Munyoroku Kariuki featuring modern design, community engagement features, and donation integration.",
        imageUrl: "/lovable-uploads/baa0c213-7b59-49e8-8d4c-bf25ee9412cc.png",
        technologies: ["HTML5", "CSS3", "JavaScript", "Payment Integration"],
        url: "https://brownmunyorokukariuki.netlify.app/"
      },
      {
        title: "Dable Properties",
        description: "Real estate marketing platform featuring property listings, virtual tours, and integrated payment systems for land sales near KAG University.",
        imageUrl: "/lovable-uploads/78d9727b-f752-479c-ad6a-04c010886f76.png",
        technologies: ["React", "Property Management", "Payment Gateway", "Maps API"],
        url: "https://dableproperties.co.ke/"
      },
      {
        title: "Samsky Tours & Travel",
        description: "International travel booking platform with destination packages, tour customization, and seamless booking experience for global travelers.",
        imageUrl: "/lovable-uploads/acaeef24-f707-4295-b6f4-09bc502db4df.png",
        technologies: ["React", "Booking System", "Payment Gateway", "Travel API"],
        url: "https://www.samskytours.co.ke/"
      },
      {
        title: "SoftLife Hotel Advisor",
        description: "Comprehensive hotel recommendation platform with location-based services, reviews, and booking integration for travelers.",
        imageUrl: "/lovable-uploads/0d4fcf34-787f-4a10-a2ab-fc8296169b4e.png",
        technologies: ["React", "Maps Integration", "Review System", "Location Services"],
        url: "https://maishasoft.netlify.app/"
      }
    ]
  },
  {
    icon: Smartphone,
    title: "Mobile & Web Applications",
    color: "from-green-500 to-green-700",
    projects: [
      {
        title: "Mbuga Photography",
        description: "Safari photography booking platform showcasing Kenyan wildlife photography services with portfolio galleries and booking system.",
        imageUrl: "/lovable-uploads/4c26efd5-db31-41d4-b33e-55bf4d38f074.png",
        technologies: ["React", "Gallery System", "Booking Integration", "Photography Portfolio"],
        url: "https://mbuga-pics-website.vercel.app/"
      },
      {
        title: "Netflix Clone",
        description: "Full-featured streaming platform clone with user authentication, content management, and responsive design for entertainment content.",
        imageUrl: "/lovable-uploads/2cb903e3-a11a-4629-b922-06c875c24707.png",
        technologies: ["React", "Authentication", "Content Management", "Streaming"],
        url: "https://n-reel.web.app/"
      },
      {
        title: "E-commerce Platform",
        description: "Modern e-commerce solution featuring product catalogs, shopping cart, payment integration, and inventory management system.",
        imageUrl: "/lovable-uploads/8d9cb61b-2269-47f0-9100-f36eb22b2cca.png",
        technologies: ["React", "E-commerce", "Payment Gateway", "Inventory Management"],
        url: "https://ecommerce-app-vicowiti.vercel.app/"
      },
      {
        title: "Girlskate Nairobi",
        description: "Community platform for skateboarding enthusiasts in Nairobi, featuring event management and community engagement tools.",
        imageUrl: "/lovable-uploads/acbb5bb2-0e01-4003-828a-52ff92d92005.png",
        technologies: ["React", "Community Features", "Event Management", "Social Platform"],
        url: "https://girlskatenairobi.co.ke/"
      }
    ]
  },
  {
    icon: Wifi,
    title: "Blockchain & Advanced Tech",
    color: "from-purple-500 to-purple-700",
    projects: [
      {
        title: "School Food & Time Management System",
        description: "Innovative NFC-enabled system for school cafeterias combining contactless payment, meal tracking, and schedule management. NFC (Near Field Communication) technology allows students to simply tap their wristband or card to purchase meals, track nutrition, and manage their daily schedules seamlessly.",
        imageUrl: "/lovable-uploads/687e496d-59ec-4356-97b4-5104034cb778.png",
        technologies: ["NFC Technology", "IoT", "React", "Time Management", "Contactless Payment"],
        url: "#"
      },
      {
        title: "KibokoDAO Web3 Platform",
        description: "Decentralized platform representing African communities in global Web3 ecosystem, featuring DAO governance and community collaboration tools.",
        imageUrl: "/lovable-uploads/6b7f7b4a-8720-4fd1-b6a9-bdc8264b2168.png",
        technologies: ["Web3", "Blockchain", "DAO", "Smart Contracts"],
        url: "https://www.kibokodao.org/"
      },
      {
        title: "Potara.io Metaverse",
        description: "Web3 metaverse project featuring NFT integration, virtual worlds, and decentralized gaming experiences.",
        imageUrl: "/lovable-uploads/d13778ae-2862-4c01-b279-81af39a7ac64.png",
        technologies: ["Metaverse", "NFTs", "Web3", "Virtual Reality"],
        url: "https://potara.io/"
      },
      {
        title: "Capped Range Gaming",
        description: "NFT gaming platform with virtual poker games, tournament features, and cryptocurrency integration for competitive gaming.",
        imageUrl: "/lovable-uploads/722cbbc4-a453-4eb1-a4f4-10aa6a7955b2.png",
        technologies: ["NFT Gaming", "Blockchain", "Cryptocurrency", "Tournament System"],
        url: "#"
      },
      {
        title: "Krypt Wallet",
        description: "Secure cryptocurrency wallet application with multi-chain support, transaction history, and advanced security features.",
        imageUrl: "/lovable-uploads/268bacb8-9468-4d45-baab-1f0f382ae144.png",
        technologies: ["Cryptocurrency", "Wallet", "Security", "Multi-chain"],
        url: "https://webthreealex.vercel.app/"
      },
      {
        title: "Carbon Corp D-App",
        description: "Decentralized application for carbon credit trading and environmental impact tracking with blockchain verification.",
        imageUrl: "/lovable-uploads/b14740b6-db26-42bf-818f-2c2d4addac1d.png",
        technologies: ["DApp", "Carbon Credits", "Environmental Tech", "Blockchain"],
        url: "https://www.carboncorp.xyz/"
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
                      <Button variant="link" className="text-brand-deep-blue p-0 h-auto hover:text-brand-gold group/link" asChild>
                        <a href={project.url} target="_blank" rel="noopener noreferrer">
                          View Case Study <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/link:translate-x-1" />
                        </a>
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
