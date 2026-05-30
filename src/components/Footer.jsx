import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Phone, Mail, Menu, X, ExternalLink, ChevronDown } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';

const LOGO_URL = 'https://media.base44.com/images/public/6a1a83ae581f8c993077c1a3/ba1c63261_Logo-no-backgroundwithtagline.png';

const NAV_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/#services' },
  { label: 'Testimonials', to: '/#testimonials' },
  { label: 'Reviews', to: '/#reviews' },
  { label: 'FAQ', to: '/#faq' },
];

const WHO_WE_HELP = [
  { label: 'Law Firms', to: '/who-we-help/law-firms' },
  { label: 'Medical & Healthcare', to: '/who-we-help/medical' },
  { label: 'Restaurants', to: '/who-we-help/restaurants' },
  { label: 'Professional Services', to: '/who-we-help/professional' },
  { label: 'Home Services', to: '/who-we-help/home-services' },
  { label: 'Realtors', to: '/who-we-help/realtors' },
];

const PHONE = '980-236-0810';
const PHONE_HREF = 'tel:+19802360810';

export default function Footer() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [whoOpen, setWhoOpen] = useState(false);
  const menuRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
        setWhoOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 104;
      const targetPosition = el.getBoundingClientRect().top + window.pageYOffset - offset;
      const startPosition = window.pageYOffset;
      const distance = targetPosition - startPosition;
      const duration = 1200;
      let start = null;
      const animation = (currentTime) => {
        if (start === null) start = currentTime;
        const timeElapsed = currentTime - start;
        const progress = Math.min(timeElapsed / duration, 1);
        const ease = 1 - Math.pow(1 - progress, 3);
        window.scrollTo(0, startPosition + distance * ease);
        if (timeElapsed < duration) {
          requestAnimationFrame(animation);
        }
      };
      requestAnimationFrame(animation);
    }
  };

  const handleNav = (e, to) => {
    e.preventDefault();
    if (to.includes('#')) {
      const [path, id] = to.split('#');
      const basePath = path || '/';
      if (location.pathname === basePath) {
        scrollToSection(id);
      } else {
        navigate(basePath);
        setTimeout(() => scrollToSection(id), 100);
      }
    } else {
      navigate(to);
      setTimeout(() => window.scrollTo({ top: 0, behavior: 'auto' }), 50);
    }
    setMenuOpen(false);
    setWhoOpen(false);
  };

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
          <div className="relative" ref={menuRef}>
            <h4 className="font-heading font-bold text-secondary mb-4 tracking-widest text-sm uppercase">Navigation</h4>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="flex items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground transition-colors"
            >
              {menuOpen ? <X size={18} /> : <Menu size={18} />}
              <span className="text-sm">Menu</span>
            </button>
            {menuOpen && (
              <div className="absolute bottom-full left-0 mb-2 w-64 bg-primary/95 backdrop-blur-sm rounded-md p-4 shadow-lg border border-primary-foreground/10">
                <ul className="space-y-1 mb-3 pb-3 border-b border-primary-foreground/10">
                  {NAV_LINKS.map(l => (
                    <li key={l.label}>
                      <Link
                        to={l.to}
                        onClick={(e) => handleNav(e, l.to)}
                        className="block py-2 text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
                {/* Who We Help Submenu */}
                <div className="mb-3 pb-3 border-b border-primary-foreground/10">
                  <button
                    onClick={() => setWhoOpen(!whoOpen)}
                    className="flex items-center justify-between w-full py-2 text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    Who We Help
                    <ChevronDown size={14} className={`transition-transform ${whoOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {whoOpen && (
                    <ul className="pl-3 mt-1 space-y-1">
                      {WHO_WE_HELP.map(item => (
                        <li key={item.label}>
                          <Link
                            to={item.to}
                            onClick={() => { setMenuOpen(false); setWhoOpen(false); window.scrollTo({ top: 0 }); }}
                            className="block py-1 text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                          >
                            {item.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
                <ul className="space-y-1 mb-3">
                  <li>
                    <Link
                      to="/small-business"
                      onClick={(e) => handleNav(e, '/small-business')}
                      className="block py-2 text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                    >
                      For Small Business
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/contact"
                      onClick={(e) => handleNav(e, '/contact')}
                      className="block py-2 text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
                <div className="flex flex-col gap-2 pt-3 border-t border-primary-foreground/10">
                  <Button asChild size="sm" variant="outline" className="font-semibold border-secondary text-secondary hover:bg-secondary/10 w-full justify-center">
                    <a href={PHONE_HREF}><Phone size={15} /> {PHONE}</a>
                  </Button>
                  <Button asChild size="sm" variant="secondary" className="font-semibold text-primary w-full justify-center">
                    <Link to="/contact" onClick={() => setMenuOpen(false)}>Free Strategy Session</Link>
                  </Button>
                </div>
              </div>
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
              href="https://www.onsitecomputerservice.net"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-secondary text-primary font-semibold px-6 py-3 rounded-lg hover:bg-secondary/90 transition-colors"
            >
              View Our Website <ExternalLink size={16} />
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