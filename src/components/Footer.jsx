import { Link } from 'react-router-dom';
import { Phone, Mail, Menu, X, ExternalLink } from 'lucide-react';
import { useState } from 'react';

const LOGO_URL = 'https://media.base44.com/images/public/6a15c006a4679719cfa0af7a/ae8ba42c7_Logo.png';

export default function Footer() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          <div>
            <img src={LOGO_URL} alt="GNL Digital Group" className="h-10 w-auto mb-4" />
            <p className="text-primary-foreground/60 text-sm leading-relaxed">
              Charlotte's premier digital marketing agency for law firms. 25+ years of technology expertise, hyper-local focus.
            </p>
          </div>
          
          {/* Hamburger Menu for Navigation */}
          <div className="relative">
            <h4 className="font-heading font-bold text-secondary mb-4 tracking-widest text-sm uppercase">Navigation</h4>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="flex items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground transition-colors"
            >
              {menuOpen ? <X size={18} /> : <Menu size={18} />}
              <span className="text-sm">Menu</span>
            </button>
            {menuOpen && (
              <ul className="absolute bottom-full left-0 mb-2 space-y-2 pl-4 border-l-2 border-primary-foreground/20 bg-primary/95 backdrop-blur-sm rounded-md p-3 shadow-lg">
                {[['Home', '/'], ['About', '/about'], ['For Small Business', '/small-business'], ['Contact', '/contact']].map(([label, to]) => (
                  <li key={label}>
                    <Link to={to} className="text-primary-foreground/70 hover:text-primary-foreground text-sm transition-colors whitespace-nowrap">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
          
          <div>
            <h4 className="font-heading font-bold text-secondary mb-4 tracking-widest text-sm uppercase">Contact</h4>
            <div className="space-y-3">
              <a href="tel:+17045945826" className="flex items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground text-sm transition-colors">
                <Phone size={14} /> (704) 594-5826
              </a>
              <a href="mailto:linda@gnldigitalgroup.com" className="flex items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground text-sm transition-colors">
                <Mail size={14} /> linda@gnldigitalgroup.com
              </a>
              <p className="text-primary-foreground/60 text-sm">53 Cabarrus Ave West<br />Concord, NC 28025</p>
            </div>
          </div>
        </div>
        
        {/* Prominent Onsite Computer Service CTA */}
        <div className="bg-secondary/10 rounded-lg p-6 text-center border border-secondary/30">
          <h3 className="font-heading font-bold text-lg text-secondary mb-2">Professional On-Site Computer Service</h3>
          <p className="text-primary-foreground/70 text-sm mb-6">Visit our store or call us for expert computer repair</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://www.onsitecomputerservice.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-secondary text-primary font-semibold px-6 py-3 rounded-lg hover:bg-secondary/90 transition-colors"
            >
              Visit Our Store <ExternalLink size={16} />
            </a>
            <a
              href="tel:+17045945826"
              className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground font-semibold px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors border-2 border-primary-foreground/20"
            >
              <Phone size={16} /> Call Us
            </a>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/10 pt-6 text-center text-primary-foreground/40 text-sm">
          © {new Date().getFullYear()} GNL Digital Group. All rights reserved.
        </div>
      </div>
    </footer>
  );
}