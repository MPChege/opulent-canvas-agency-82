
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    title: "Our Location",
    details: [
      "TRM Roysambu, Nairobi",
      "Kenya, East Africa"
    ]
  },
  {
    icon: Phone,
    title: "Phone",
    details: [
      "+254 (0) 700 123 456",
      "+254 (0) 733 987 654"
    ]
  },
  {
    icon: Mail,
    title: "Email",
    details: [
      "hello@elysian.ke",
      "projects@elysian.ke"
    ]
  },
  {
    icon: Clock,
    title: "Business Hours",
    details: [
      "Mon - Fri: 8:00 AM - 6:00 PM",
      "Sat: 9:00 AM - 2:00 PM (EAT)"
    ]
  }
];

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-brand-deep-blue via-green-900 to-purple-900">
        <div className="container max-w-screen-xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-brand-cream mb-6 animate-fade-in-up">
            Contact Us
          </h1>
          <p className="text-lg md:text-xl text-brand-cream/80 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Ready to transform your vision into reality? Let's start the conversation and build something extraordinary together.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container max-w-screen-xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <div key={info.title} className="animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <Card className="h-full bg-brand-cream shadow-xl hover:shadow-2xl transition-all duration-300 group border-transparent hover:border-brand-gold/50 text-center">
                  <CardHeader>
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-brand-gold/10 flex items-center justify-center group-hover:bg-brand-gold/20 transition-colors">
                      <info.icon className="w-8 h-8 text-brand-gold" />
                    </div>
                    <CardTitle className="text-xl font-serif text-brand-deep-blue">{info.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    {info.details.map((detail, detailIndex) => (
                      <p key={detailIndex} className="text-foreground/70 text-sm mb-1">{detail}</p>
                    ))}
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 md:py-24 bg-brand-light-gray">
        <div className="container max-w-screen-xl mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-deep-blue mb-4 animate-fade-in-up">
                Start Your Project
              </h2>
              <p className="text-lg md:text-xl text-foreground/80 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                Tell us about your vision and we'll help bring it to life.
              </p>
            </div>
            
            <Card className="bg-brand-cream shadow-2xl border-transparent animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-brand-deep-blue mb-2">
                        First Name *
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand-gold focus:border-transparent transition-colors"
                        placeholder="Enter your first name"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-brand-deep-blue mb-2">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand-gold focus:border-transparent transition-colors"
                        placeholder="Enter your last name"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-brand-deep-blue mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand-gold focus:border-transparent transition-colors"
                        placeholder="your.email@example.com"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-brand-deep-blue mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand-gold focus:border-transparent transition-colors"
                        placeholder="+254 700 123 456"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-brand-deep-blue mb-2">
                      Company/Organization
                    </label>
                    <input
                      type="text"
                      id="company"
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand-gold focus:border-transparent transition-colors"
                      placeholder="Your company name"
                    />
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-brand-deep-blue mb-2">
                      Service Interest *
                    </label>
                    <select
                      id="service"
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand-gold focus:border-transparent transition-colors"
                      required
                    >
                      <option value="">Select a service</option>
                      <option value="web">Web Development</option>
                      <option value="mobile">Mobile Development</option>
                      <option value="iot">IoT Solutions</option>
                      <option value="custom">Custom Software</option>
                      <option value="digital">Digital Transformation</option>
                      <option value="security">Cybersecurity</option>
                      <option value="consultation">General Consultation</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="budget" className="block text-sm font-medium text-brand-deep-blue mb-2">
                      Project Budget (USD)
                    </label>
                    <select
                      id="budget"
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand-gold focus:border-transparent transition-colors"
                    >
                      <option value="">Select budget range</option>
                      <option value="5k-15k">$5,000 - $15,000</option>
                      <option value="15k-50k">$15,000 - $50,000</option>
                      <option value="50k-100k">$50,000 - $100,000</option>
                      <option value="100k+">$100,000+</option>
                      <option value="discuss">Let's discuss</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-brand-deep-blue mb-2">
                      Project Description *
                    </label>
                    <textarea
                      id="message"
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand-gold focus:border-transparent transition-colors resize-vertical"
                      placeholder="Tell us about your project vision, requirements, timeline, and any specific challenges you'd like us to address..."
                      required
                    ></textarea>
                  </div>

                  <div className="text-center">
                    <Button 
                      type="submit" 
                      size="lg" 
                      className="bg-brand-gold text-brand-deep-blue hover:bg-yellow-500 text-lg px-8 py-6 group"
                    >
                      Send Message <Send className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Map/Location Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container max-w-screen-xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-deep-blue mb-8 animate-fade-in-up">
            Visit Our Innovation Hub
          </h2>
          <p className="text-lg md:text-xl text-foreground/80 mb-8 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Located in the vibrant tech ecosystem of TRM Roysambu, our office is a hub of creativity and innovation where ideas come to life.
          </p>
          <div className="bg-brand-cream rounded-lg p-8 shadow-xl animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <p className="text-brand-deep-blue font-medium text-lg">
              TRM Roysambu, Nairobi, Kenya
            </p>
            <p className="text-foreground/70 mt-2">
              Accessible via Thika Road, with ample parking and public transport connections.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
