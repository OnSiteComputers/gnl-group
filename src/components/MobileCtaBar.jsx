import { Phone, Menu } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const PHONE_HREF = 'tel:+17045945826';
const PHONE = '(704) 594-5826';

const NAV_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/#services' },
  { label: 'Testimonials', to: '/#testimonials' },
  { label: 'Reviews', to: '/#reviews' },
  { label: 'FAQ', to: '/#faq' },
  { label: 'Contact', to: '/contact' },
];

export default function MobileCtaBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Floating hamburger button - bottom right, above CTA bar */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="lg:hidden fixed bottom-20 right-4 z-50 bg-secondary text-primary p-4 rounded-full shadow-lg hover:opacity-90 transition-opacity"
        aria-label="Toggle menu"
      >
        <Menu size={24} />
      </button>

      {/* Mobile menu dropdown */}
      {menuOpen && (
        <div className="lg:hidden fixed bottom-24 right-4 z-50 bg-primary border border-primary-foreground/10 rounded-lg shadow-xl overflow-hidden">
          <div className="flex flex-col">
            {NAV_LINKS.map(l => (
              <Link
                key={l.label}
                to={l.to}
                onClick={() => setMenuOpen(false)}
                className="px-6 py-3 text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary-foreground/5 text-sm font-medium border-b border-primary-foreground/10 last:border-0"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* CTA bar - fixed at bottom */}
      <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-primary border-t border-primary-foreground/10 flex">
        <a
          href={PHONE_HREF}
          className="flex-1 flex items-center justify-center gap-2 py-4 text-primary-foreground font-semibold text-base border-r border-primary-foreground/10 hover:bg-primary-foreground/5 transition-colors"
        >
          <Phone size={16} />
          Call Now
        </a>
        <Link
          to="/contact"
          className="flex-1 flex items-center justify-center py-4 bg-secondary text-primary font-bold text-base hover:opacity-90 transition-opacity"
        >
          Get Free Strategy
        </Link>
      </div>
    </>
  );
}