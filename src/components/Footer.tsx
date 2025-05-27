
import { Link } from 'react-router-dom';
import { Github, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-brand-deep-blue text-brand-cream py-12">
      <div className="container max-w-screen-2xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-serif font-semibold mb-4 text-brand-gold">Elysian</h3>
            <p className="text-brand-cream/80">
              Crafting luxurious digital experiences that transcend the ordinary.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-brand-gold">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/services" className="hover:text-brand-gold transition-colors">Services</Link></li>
              <li><Link to="/philosophy" className="hover:text-brand-gold transition-colors">Our Philosophy</Link></li>
              <li><Link to="/projects" className="hover:text-brand-gold transition-colors">Projects</Link></li>
              <li><Link to="/contact" className="hover:text-brand-gold transition-colors">Contact Us</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-brand-gold">Connect</h4>
            <div className="flex space-x-4">
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-brand-cream/80 hover:text-brand-gold transition-colors"><Twitter size={24} /></a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-brand-cream/80 hover:text-brand-gold transition-colors"><Linkedin size={24} /></a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-brand-cream/80 hover:text-brand-gold transition-colors"><Github size={24} /></a>
            </div>
             <p className="mt-4 text-sm text-brand-cream/70">
              123 Luxury Lane, Suite 500 <br />
              Beverly Hills, CA 90210
            </p>
          </div>
        </div>
        <div className="border-t border-brand-cream/20 pt-8 text-center text-sm text-brand-cream/60">
          &copy; {currentYear} Elysian. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
