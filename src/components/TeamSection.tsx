
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Linkedin, Twitter } from "lucide-react";

const teamMembers = [
  {
    name: "Eleonora Dubois",
    role: "Lead UI/UX Architect",
    bio: "Eleonora orchestrates digital symphonies, transforming complex challenges into intuitive and beautiful user experiences. Her eye for detail is unmatched.",
    imageUrl: "https://images.unsplash.com/photo-1520466809213-7b9a56db9266?q=80&w=800&auto=format&fit=crop", // Placeholder image
    socials: {
      linkedin: "#",
      twitter: "#",
    },
  },
  {
    name: "Julian Sinclair",
    role: "Principal Software Engineer",
    bio: "With a passion for elegant code and robust systems, Julian crafts the backbone of our digital masterpieces, ensuring performance and scalability.",
    imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop", // Placeholder image
    socials: {
      linkedin: "#",
      twitter: "#",
    },
  },
  {
    name: "Seraphina Bellwether",
    role: "Creative Director",
    bio: "Seraphina brings visions to life with a unique blend of artistic flair and strategic insight, ensuring every project resonates with luxury and purpose.",
    imageUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=800&auto=format&fit=crop", // Placeholder image
    socials: {
      linkedin: "#",
      twitter: "#",
    },
  },
];

const TeamSection = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container max-w-screen-xl mx-auto px-6">
        <div className="text-center mb-12 md:mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-deep-blue mb-4">Meet Our Artisans</h2>
          <p className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto">
            The visionary minds dedicated to crafting your digital legacy with passion and precision.
          </p>
        </div>
        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
          {teamMembers.map((member, index) => (
            <div key={member.name} className="animate-fade-in-up" style={{ animationDelay: `${index * 0.2}s` }}>
              <Card className="h-full flex flex-col overflow-hidden bg-brand-cream shadow-xl hover:shadow-2xl transition-all duration-300 group border-transparent hover:border-brand-gold/50 text-center">
                <CardHeader className="p-0 items-center pt-8">
                  <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-brand-gold/50 mb-4 group-hover:border-brand-gold transition-colors duration-300">
                    <img 
                      src={member.imageUrl} 
                      alt={member.name} 
                      className="w-full h-full object-cover" 
                    />
                  </div>
                  <CardTitle className="text-2xl font-serif font-semibold text-brand-deep-blue mb-1">{member.name}</CardTitle>
                  <p className="text-sm text-brand-gold font-medium mb-3">{member.role}</p>
                </CardHeader>
                <CardContent className="p-6 flex-grow">
                  <p className="text-foreground/70 leading-relaxed text-sm mb-4">
                    {member.bio}
                  </p>
                  <div className="flex justify-center space-x-3">
                    {member.socials.linkedin && (
                      <a href={member.socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-brand-deep-blue/70 hover:text-brand-gold transition-colors">
                        <Linkedin size={20} />
                      </a>
                    )}
                    {member.socials.twitter && (
                      <a href={member.socials.twitter} target="_blank" rel="noopener noreferrer" className="text-brand-deep-blue/70 hover:text-brand-gold transition-colors">
                        <Twitter size={20} />
                      </a>
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
