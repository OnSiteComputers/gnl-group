import { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Phone, Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const PHONE = '(704) 594-5826';
const PHONE_HREF = 'tel:+17045945826';
const LOGO_URL = 'https://media.base44.com/images/public/6a152f2d01c96ed4b2ab605a/c97c06916_Logo.png';

const NAV_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/#services' },
  { label: 'Reviews', to: '/#reviews' },
  { label: 'Contact', to: '/contact' },
];

const WHO_WE_HELP = [
  { label: 'Law Firms', to: '/who-we-help/law-firms' },
  { label: 'Medical & Healthcare', to: '/who-we-help/medical' },
  { label: 'Restaurants', to: '/who-we-help/restaurants' },
  { label: 'Professional Services', to: '/who-we-help/professional' },
  { label: 'Home Services', to: '/who-we-help/home-services' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 192; // navbar height
      const targetPosition = el.getBoundingClientRect().top + window.pageYOffset - offset;
      const startPosition = window.pageYOffset;
      const distance = targetPosition - startPosition;
      const duration = 1200; // slower scroll (1.2 seconds)
      let start = null;

      const animation = (currentTime) => {
        if (start === null) start = currentTime;
        const timeElapsed = currentTime - start;
        const progress = Math.min(timeElapsed / duration, 1);
        const ease = 1 - Math.pow(1 - progress, 3); // ease-out cubic
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
    setOpen(false);
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
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-primary shadow-lg`}>
        <div className="max-w-7xl mx-auto px-4 h-48 flex items-center justify-between">
          <Link to="/" className="flex flex-col items-center">
            <img src={LOGO_URL} alt="GNL Digital Group" className="h-24 w-auto" />
            <span className="text-secondary font-heading text-sm tracking-widest uppercase mt-1">Helping Local Businesses Dominate Search Results</span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-6">
            {NAV_LINKS.map(l => (
              <Link
                key={l.label}
                to={l.to}
                onClick={(e) => handleNav(e, l.to)}
                className={`text-sm font-medium transition-colors ${
                  location.pathname === l.to
                    ? 'text-secondary'
                    : 'text-primary-foreground/80 hover:text-primary-foreground'
                }`}
              >
                {l.label}
              </Link>
            ))}
            {/* Who We Help Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setDropdownOpen(p => !p)}
                className="flex items-center gap-1 text-sm font-medium text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                Who We Help <ChevronDown size={14} className={`transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              {dropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-52 bg-white rounded-md shadow-lg border border-border overflow-hidden z-50">
                  {WHO_WE_HELP.map(item => (
                    <Link
                      key={item.label}
                      to={item.to}
                      onClick={() => { setDropdownOpen(false); window.scrollTo({ top: 0 }); }}
                      className="block px-4 py-3 text-sm text-foreground hover:bg-secondary/10 hover:text-secondary transition-colors border-b border-border/40 last:border-0"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <a href={PHONE_HREF} className="flex items-center gap-2 text-primary-foreground/90 hover:text-primary-foreground text-sm font-medium transition-colors">
              <Phone size={15} />
              {PHONE}
            </a>
            <Button asChild size="sm" variant="secondary" className="rounded-sm font-semibold text-primary">
              <Link to="/contact">Free Strategy Session</Link>
            </Button>
          </div>

          {/* Mobile hamburger */}
          <button className="lg:hidden text-primary-foreground" onClick={() => setOpen(true)}>
            <Menu size={24} />
          </button>
        </div>
      </nav>

      {/* Mobile overlay menu */}
      {open && (
        <div className="fixed inset-0 z-[100] bg-primary flex flex-col items-center justify-center gap-8">
          <button onClick={() => setOpen(false)} className="absolute top-6 right-6 text-primary-foreground">
            <X size={28} />
          </button>
          {NAV_LINKS.map(l => (
            <Link
              key={l.label}
              to={l.to}
              onClick={(e) => handleNav(e, l.to)}
              className="text-primary-foreground font-heading text-3xl hover:text-secondary transition-colors"
            >
              {l.label}
            </Link>
          ))}
          <div className="w-full text-center">
            <p className="text-secondary font-heading text-lg font-bold mb-3">Who We Help</p>
            {WHO_WE_HELP.map(item => (
              <Link
                key={item.label}
                to={item.to}
                onClick={() => { setOpen(false); window.scrollTo({ top: 0 }); }}
                className="block text-primary-foreground/80 font-body text-xl py-2 hover:text-secondary transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>
          <a href={PHONE_HREF} className="text-secondary font-semibold text-xl mt-4">
            Call Now: {PHONE}
          </a>
        </div>
      )}
    </>
  );
}