
import { Award, Feather, Gem } from 'lucide-react';

const philosophyPoints = [
  {
    icon: <Gem size={32} className="text-brand-gold" />,
    title: "Exquisite Craftsmanship",
    description: "Every line of code, every pixel, meticulously crafted to achieve unparalleled quality and enduring value."
  },
  {
    icon: <Feather size={32} className="text-brand-gold" />,
    title: "Timeless Aesthetics",
    description: "We believe in design that transcends trends, creating digital experiences that are both contemporary and classic."
  },
  {
    icon: <Award size={32} className="text-brand-gold" />,
    title: "Client-Centric Partnership",
    description: "Your vision is our blueprint. We collaborate closely to ensure outcomes that exceed expectations."
  }
]

const PhilosophySection = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container max-w-screen-xl mx-auto px-6">
        <div className="text-center mb-12 md:mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-deep-blue mb-4">Our Guiding Philosophy</h2>
          <p className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto">
            At the heart of Elysian lies a commitment to principles that define true luxury in the digital realm.
          </p>
        </div>
        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
          {philosophyPoints.map((point, index) => (
            <div key={point.title} className="flex flex-col items-center text-center p-6 animate-fade-in-up" style={{ animationDelay: `${index * 0.2}s` }}>
              <div className="mb-6 p-4 bg-brand-gold/10 rounded-full">
                {point.icon}
              </div>
              <h3 className="text-2xl font-serif font-semibold text-brand-deep-blue mb-3">{point.title}</h3>
              <p className="text-foreground/70 leading-relaxed">{point.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PhilosophySection;
