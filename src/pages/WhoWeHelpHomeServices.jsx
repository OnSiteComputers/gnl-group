import { Wrench } from 'lucide-react';
import WhoWeHelpPage from '../components/WhoWeHelpPage';

export default function WhoWeHelpHomeServices() {
  return (
    <WhoWeHelpPage
      icon={Wrench}
      headline="Digital Marketing for Home Services"
      subheadline="Contractors, plumbers, HVAC, landscapers — more calls, more jobs, more growth."
      intro="Homeowners search online when something needs fixing or improving. GNL Digital Group helps home service businesses dominate local search, generate more service calls, and build the kind of reputation that keeps the phone ringing year-round — even in the slow season."
      benefits={[
        { title: 'Service Area Domination', desc: 'We rank you across every city and neighborhood in your target service area.' },
        { title: 'Emergency Search Visibility', desc: '"Plumber near me open now" — we make sure you show up when urgency drives searches.' },
        { title: '5-Star Review Building', desc: 'Homeowners trust reviews. We build a system to consistently grow your star rating.' },
        { title: 'Seasonal Campaign Strategy', desc: 'AC tune-ups in spring, heating checks in fall — we help you market at the right time.' },
        { title: 'Mobile-First Presence', desc: 'Most home service searches happen on phones. Your site and listings are built for mobile.' },
        { title: 'No Fluff, Just Leads', desc: 'We focus on generating real service calls and quote requests — not vanity metrics.' },
      ]}
      services={[
        { title: 'Local SEO', desc: 'Rank at the top of Google when homeowners search for your trade in your area.' },
        { title: 'Google Business Profile', desc: 'Optimized listings with photos, services, and reviews that drive direct calls.' },
        { title: 'Review Management', desc: 'Build and maintain a stellar reputation that sets you apart from the competition.' },
        { title: 'Website Design', desc: 'Fast, professional websites with clear calls-to-action that convert visitors to callers.' },
        { title: 'Google Ads', desc: 'Pay-per-click campaigns targeting homeowners with urgent service needs.' },
        { title: 'All-In-One Web Package', desc: 'Complete website rebuild, domain registration, and hosting with ongoing management—one simple monthly fee.' },
      ]}
      cta="Ready to Keep Your Schedule Full?"
    />
  );
}