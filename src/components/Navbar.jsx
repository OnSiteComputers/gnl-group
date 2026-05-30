import { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Phone, Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const PHONE = '(704) 594-5826';
const PHONE_HREF = 'tel:+17045945826';
const LOGO_URL = 'https://media.base44.com/images/public/6a15c006a4679719cfa0af7a/ae8ba42c7_Logo.png';

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

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileWhoOpen, setMobileWhoOpen] = useState(false);
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
      const offset = 104; // navbar height + small breathing room
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
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-primary shadow-lg`}>
        <div className="max-w-7xl mx-auto px-4 h-28 flex items-center">

          {/* Left: Logo */}
          <Link to="/" className="flex items-center shrink-0">
            <img src={LOGO_URL} alt="GNL Digital Group" className="h-24 w-auto" />
          </Link>

          {/* Center: Tagline (hidden on mobile) */}
          <div className="hidden lg:flex flex-1 justify-center">
            <span className="text-primary-foreground font-heading font-bold text-lg tracking-wide">Dominate Your Market</span>
          </div>

          {/* Right: Nav links and buttons */}
          <div className="flex items-center gap-4 shrink-0">

          {/* Desktop nav links */}
          <div className="hidden lg:flex items-center gap-5 shrink-0">
            {NAV_LINKS.map(l => (
              <Link
                key={l.label}
                to={l.to}
                onClick={(e) => handleNav(e, l.to)}
                className={`text-sm font-medium whitespace-nowrap transition-colors ${
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
                className="flex items-center gap-1 text-sm font-medium whitespace-nowrap text-primary-foreground/80 hover:text-primary-foreground transition-colors"
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
            <Link
              to="/contact"
              onClick={(e) => handleNav(e, '/contact')}
              className={`text-sm font-medium whitespace-nowrap transition-colors ${
                location.pathname === '/contact'
                  ? 'text-secondary'
                  : 'text-primary-foreground/80 hover:text-primary-foreground'
              }`}
            >
              Contact
            </Link>
          </div>

          {/* Desktop CTA buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <Button asChild size="sm" variant="outline" className="font-semibold border-secondary text-secondary hover:bg-secondary/10 hover:text-secondary">
              <a href={PHONE_HREF}><Phone size={15} />{PHONE}</a>
            </Button>
            <Button asChild size="sm" variant="secondary" className="font-semibold text-primary">
              <Link to="/contact">Free Strategy Session</Link>
            </Button>
          </div>
          </div>

        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden fixed top-24 left-0 right-0 z-40 bg-primary shadow-xl border-t border-primary-foreground/10">
          <div className="flex flex-col px-6 py-4 space-y-1">
            {NAV_LINKS.map(l => (
              <Link
                key={l.label}
                to={l.to}
                onClick={(e) => { handleNav(e, l.to); setMobileOpen(false); }}
                className="py-3 text-base font-medium text-primary-foreground/80 hover:text-primary-foreground border-b border-primary-foreground/10 last:border-0"
              >
                {l.label}
              </Link>
            ))}
            {/* Who We Help */}
            <div className="py-3 border-b border-primary-foreground/10">
              <button
                onClick={() => setMobileWhoOpen(p => !p)}
                className="flex items-center justify-between w-full text-base font-medium text-primary-foreground/80 hover:text-primary-foreground"
              >
                Who We Help
                <ChevronDown size={16} className={`transition-transform ${mobileWhoOpen ? 'rotate-180' : ''}`} />
              </button>
              {mobileWhoOpen && (
                <div className="pl-3 mt-2 space-y-1">
                  {WHO_WE_HELP.map(item => (
                    <Link
                      key={item.label}
                      to={item.to}
                      onClick={() => { setMobileOpen(false); setMobileWhoOpen(false); window.scrollTo({ top: 0 }); }}
                      className="block py-2 text-sm text-primary-foreground/70 hover:text-primary-foreground"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <Link
              to="/contact"
              onClick={(e) => { handleNav(e, '/contact'); setMobileOpen(false); }}
              className="py-3 text-base font-medium text-primary-foreground/80 hover:text-primary-foreground border-b border-primary-foreground/10"
            >
              Contact
            </Link>
            <div className="pt-4 flex flex-col gap-3">
              <Button asChild size="sm" variant="outline" className="font-semibold border-secondary text-secondary hover:bg-secondary/10 w-full">
                <a href={PHONE_HREF}><Phone size={15} />{PHONE}</a>
              </Button>
              <Button asChild size="sm" variant="secondary" className="font-semibold text-primary w-full">
                <Link to="/contact" onClick={() => setMobileOpen(false)}>Free Strategy Session</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}