import { Scale } from 'lucide-react';
import WhoWeHelpPage from '../components/WhoWeHelpPage';

export default function WhoWeHelpLawFirms() {
  return (
    <WhoWeHelpPage
      icon={Scale}
      headline="Digital Marketing for Law Firms"
      subheadline="Get found by clients who need you — in Charlotte and across the Carolinas."
      intro="Attorneys work hard to build their reputation. Your digital presence should do the same. GNL Digital Group specializes in helping law firms attract the right clients online through local SEO, authoritative websites, and reputation management — so you can focus on winning cases."
      benefits={[
        { title: 'Local SEO That Drives Calls', desc: 'We rank your firm at the top of Google when local clients search for your practice area.' },
        { title: 'Reputation That Builds Trust', desc: 'More 5-star Google reviews mean more consultations. We help you earn and showcase them.' },
        { title: 'Websites That Convert', desc: 'Professional, fast, mobile-first websites designed to turn visitors into booked consultations.' },
        { title: 'Competitor Intelligence', desc: 'We analyze what top-ranking firms are doing and build a strategy that outperforms them.' },
        { title: 'Practice Area Targeting', desc: 'From personal injury to family law, we tailor content and keywords to your specialty.' },
        { title: 'No Long-Term Contracts', desc: 'We earn your business every month with transparent reporting and real results.' },
      ]}
      services={[
        { title: 'Local SEO', desc: 'Dominate Google Maps and organic search results for your practice areas in your target cities.' },
        { title: 'Website Design', desc: 'Attorney websites built for credibility, speed, and mobile performance.' },
        { title: 'Review Management', desc: 'Systematic approach to growing your Google review count and responding professionally.' },
        { title: 'Content Marketing', desc: 'Legal blog posts and landing pages that rank and establish your authority.' },
        { title: 'Google Ads', desc: 'High-intent PPC campaigns targeting clients actively searching for legal help.' },
        { title: 'Analytics & Reporting', desc: "Monthly reports showing exactly where your leads come from and what's working." },
      ]}
      cta="Ready to Grow Your Practice?"
    />
  );
}