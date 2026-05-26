import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const PHONE = '(704) 594-5826';
const PHONE_HREF = 'tel:+17045945826';
const LOGO_URL = 'https://media.base44.com/images/public/6a152f2d01c96ed4b2ab605a/c97c06916_Logo.png';

const NAV_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'For Lawyers', to: '/' },
  { label: 'For Small Business', to: '/small-business' },
  { label: 'Contact', to: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (to) => {
    setOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-primary shadow-lg' : 'bg-primary/95'}`}>
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <img src={LOGO_URL} alt="GNL Digital Group" className="h-10 w-auto" />
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-6">
            {NAV_LINKS.map(l => (
              <Link
                key={l.label}
                to={l.to}
                onClick={() => handleNav(l.to)}
                className={`text-sm font-medium transition-colors ${
                  location.pathname === l.to
                    ? 'text-secondary'
                    : 'text-primary-foreground/80 hover:text-primary-foreground'
                }`}
              >
                {l.label}
              </Link>
            ))}
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
              onClick={() => setOpen(false)}
              className="text-primary-foreground font-heading text-3xl hover:text-secondary transition-colors"
            >
              {l.label}
            </Link>
          ))}
          <a href={PHONE_HREF} className="text-secondary font-semibold text-xl mt-4">
            Call Now: {PHONE}
          </a>
        </div>
      )}
    </>
  );
}