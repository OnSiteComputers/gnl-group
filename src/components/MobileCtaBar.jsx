import { Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const PHONE_HREF = 'tel:+17045945826';
const PHONE = '(704) 594-5826';

export default function MobileCtaBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-primary border-t border-primary-foreground/10 flex">
      <a
        href={PHONE_HREF}
        className="flex-1 flex items-center justify-center gap-2 py-4 text-primary-foreground font-semibold text-sm border-r border-primary-foreground/10 hover:bg-primary-foreground/5 transition-colors"
      >
        <Phone size={16} />
        Call Now
      </a>
      <Link
        to="/contact"
        className="flex-1 flex items-center justify-center py-4 bg-secondary text-primary font-bold text-sm hover:opacity-90 transition-opacity"
      >
        Get Free Strategy
      </Link>
    </div>
  );
}