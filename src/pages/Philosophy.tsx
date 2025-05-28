
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Users, Lightbulb, Globe2, Rocket, Star } from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Ubuntu Philosophy",
    description: "We believe in the African philosophy of Ubuntu - 'I am because we are.' Our success is intertwined with the success of our clients and community."
  },
  {
    icon: Users,
    title: "Collaborative Innovation",
    description: "We work hand-in-hand with our clients, fostering an environment where ideas flourish and breakthrough solutions emerge."
  },
  {
    icon: Lightbulb,
    title: "Future-Forward Thinking",
    description: "We anticipate tomorrow's challenges today, building solutions that scale and evolve with technological advancement."
  },
  {
    icon: Globe2,
    title: "Global Standards, Local Heart",
    description: "While we maintain international quality standards, our solutions are deeply rooted in understanding local needs and contexts."
  },
  {
    icon: Rocket,
    title: "Continuous Learning",
    description: "In the fast-evolving tech landscape, we commit to perpetual learning and adaptation to stay at the forefront of innovation."
  },
  {
    icon: Star,
    title: "Excellence in Simplicity",
    description: "We believe the most elegant solutions are often the simplest ones - powerful, intuitive, and beautifully crafted."
  }
];

const Philosophy = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-brand-deep-blue via-purple-900 to-brand-deep-blue">
        <div className="container max-w-screen-xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-brand-cream mb-6 animate-fade-in-up">
            Our Philosophy
          </h1>
          <p className="text-lg md:text-xl text-brand-cream/80 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Rooted in African wisdom, powered by futuristic vision. We craft technology that honors our heritage while pioneering the future.
          </p>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 md:py-24 bg-brand-cream">
        <div className="container max-w-screen-xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-deep-blue mb-8 animate-fade-in-up">
            Our Mission
          </h2>
          <p className="text-xl md:text-2xl text-foreground/80 max-w-4xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            To bridge the digital divide by creating world-class technology solutions that empower African businesses and communities, 
            while showcasing the brilliance of African innovation to the global stage.
          </p>
        </div>
      </section>

      {/* Values Grid */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container max-w-screen-xl mx-auto px-6">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-deep-blue mb-4 animate-fade-in-up">
              Our Core Values
            </h2>
            <p className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              The principles that guide every decision we make and every solution we craft.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={value.title} className="animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <Card className="h-full bg-brand-cream shadow-xl hover:shadow-2xl transition-all duration-300 group border-transparent hover:border-brand-gold/50">
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-brand-gold/10 flex items-center justify-center group-hover:bg-brand-gold/20 transition-colors">
                      <value.icon className="w-8 h-8 text-brand-gold" />
                    </div>
                    <CardTitle className="text-xl font-serif text-brand-deep-blue">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-foreground/70 text-center">{value.description}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-16 md:py-24 bg-brand-light-gray">
        <div className="container max-w-screen-xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-deep-blue mb-8 animate-fade-in-up">
            Our Vision
          </h2>
          <p className="text-xl md:text-2xl text-foreground/80 max-w-4xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            To become Africa's leading technology catalyst, transforming how the world perceives African innovation 
            and establishing our continent as a global technology powerhouse by 2030.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Philosophy;
