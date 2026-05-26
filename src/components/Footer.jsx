import { Link } from 'react-router-dom';
import { Phone, Mail } from 'lucide-react';

const LOGO_URL = 'https://media.base44.com/images/public/6a15c006a4679719cfa0af7a/966e853ce_Logo.png';

export default function Footer() {
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
          <div>
            <h4 className="font-heading font-bold text-secondary mb-4 tracking-widest text-sm uppercase">Navigation</h4>
            <ul className="space-y-2">
              {[['Home', '/'], ['About', '/about'], ['For Small Business', '/small-business'], ['Contact', '/contact']].map(([label, to]) => (
                <li key={label}>
                  <Link to={to} className="text-primary-foreground/70 hover:text-primary-foreground text-sm transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
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
        <div className="border-t border-primary-foreground/10 pt-6 text-center text-primary-foreground/40 text-sm">
          © {new Date().getFullYear()} GNL Digital Group. All rights reserved.
        </div>
      </div>
    </footer>
  );
}