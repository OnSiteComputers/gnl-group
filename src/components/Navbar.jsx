import { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Phone, Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const PHONE = '(704) 594-5826';
const PHONE_HREF = 'tel:+17045945826';
const LOGO_URL = 'https://media.base44.com/images/public/6a1a83ae581f8c993077c1a3/82281ed4d_GNL-Logo.png';

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

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 120; // adjusted for two-row header
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
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-primary shadow-lg">

        {/* ROW 1 — 3 columns: Logo | Tagline | Buttons (desktop only) */}
        <div className="max-w-7xl mx-auto px-4 h-36 hidden md:grid grid-cols-3 items-center">
          {/* Left: Logo */}
          <div className="flex items-center justify-center h-full">
            <Link to="/">
              <img src={LOGO_URL} alt="GNL Digital Group" style={{ height: 'clamp(6rem, 10vw, 9rem)', width: 'auto' }} />
            </Link>
          </div>

          {/* Center: Tagline */}
          <div className="flex items-center justify-center text-center text-primary-foreground font-heading font-bold italic tracking-wide" style={{ fontSize: 'clamp(1.1rem, 2vw, 1.6rem)' }}>
            Local Dominance. Real Results.
          </div>

          {/* Right: Phone + CTA stacked */}
          <div className="flex flex-col items-center justify-center gap-2 h-full">
            <Button asChild size="sm" variant="outline" className="font-semibold border-secondary text-secondary hover:bg-secondary/10 hover:text-secondary w-fit">
              <a href={PHONE_HREF}>
                <Phone size={15} className="mr-1" />
                {PHONE}
              </a>
            </Button>
            <Button asChild size="sm" variant="secondary" className="font-semibold text-primary w-fit">
              <Link to="/contact">Free Strategy Session</Link>
            </Button>
          </div>
        </div>

        {/* Mobile Row 1: Logo + Phone + Hamburger */}
        <div className="md:hidden max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex flex-col items-start gap-0.5">
            <Link to="/">
              <img src={LOGO_URL} alt="GNL Digital Group" style={{ height: '2.5rem', width: 'auto' }} />
            </Link>
            <p className="text-primary-foreground/80 text-xs italic font-heading font-semibold">Local Dominance. Real Results.</p>
          </div>
          <div className="flex items-center gap-2">
            <a href={PHONE_HREF} className="flex items-center gap-1 text-secondary font-semibold text-sm border border-secondary rounded px-2 py-1 hover:bg-secondary/10 transition-colors">
              <Phone size={13} /> <span className="hidden xs:inline">{PHONE}</span><span className="xs:hidden">Call</span>
            </a>
            <button
              className="text-primary-foreground p-2"
              onClick={() => { setMobileOpen(p => !p); setMobileWhoOpen(false); }}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* ROW 2 — Nav links centered (desktop only) */}
        <div className="hidden md:block">
          <div className="max-w-7xl mx-auto px-4 flex items-center justify-center gap-6 h-11" style={{ fontSize: 'clamp(0.88rem, 1.45vw, 1.1rem)' }}>
            {NAV_LINKS.map(l => (
              <Link
                key={l.label}
                to={l.to}
                onClick={(e) => handleNav(e, l.to)}
                className={`font-medium whitespace-nowrap transition-colors ${
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
                className="flex items-center gap-1 font-medium text-primary-foreground/80 hover:text-primary-foreground transition-colors whitespace-nowrap"
              >
                Who We Help <ChevronDown size={12} className={`transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} />
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
              className={`font-medium whitespace-nowrap transition-colors ${
                location.pathname === '/contact'
                  ? 'text-secondary'
                  : 'text-primary-foreground/80 hover:text-primary-foreground'
              }`}
            >
              Contact
            </Link>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden fixed top-16 left-0 right-0 z-40 bg-primary shadow-xl border-t border-primary-foreground/10">
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