// WhoWeHelpMedical — build: 2026-07-05 v1
import { Stethoscope } from 'lucide-react';
import WhoWeHelpPage from '../components/WhoWeHelpPage';

console.log("WhoWeHelpMedical build: 2026-07-05 v1 ✅");

export default function WhoWeHelpMedical() {
  return (
    <WhoWeHelpPage
      icon={Stethoscope}
      headline="Digital Marketing for Medical & Healthcare"
      subheadline="Help patients find your practice — and choose you with confidence."
      intro="Patients today search online before they ever pick up the phone. Whether you run a private practice, dental office, chiropractic clinic, or specialty group, GNL Digital Group helps you show up where it matters, build trust through reviews, and convert searchers into scheduled appointments."
      benefits={[
        { title: 'Patient-Focused SEO', desc: 'We rank your practice for the services patients in your area are actively searching for.' },
        { title: 'HIPAA-Conscious Marketing', desc: 'We understand the compliance landscape and market your practice responsibly.' },
        { title: 'Review Growth Strategy', desc: 'More positive reviews mean more new patients. We build a system that generates them consistently.' },
        { title: 'Mobile-Optimized Presence', desc: 'Most patients search on phones. Your website and listings will look perfect on every device.' },
        { title: 'Multi-Location Support', desc: 'Managing multiple offices? We optimize each location independently for maximum visibility.' },
        { title: 'Measurable ROI', desc: 'Track exactly how many calls and appointment requests come from your digital marketing.' },
      ]}
      services={[
        { title: 'Local SEO', desc: 'Get found on Google Maps and organic search by patients near your practice.' },
        { title: 'Website Design', desc: 'Clean, trustworthy medical websites optimized for patient conversion.' },
        { title: 'Review Management', desc: 'Build a 5-star reputation that sets you apart from competing practices.' },
        { title: 'Google Business Profile', desc: 'Fully optimized profiles that drive calls, directions, and appointment requests.' },
        { title: 'Content & Blogging', desc: 'Patient education content that ranks and builds credibility for your specialty.' },
        { title: 'All-In-One Web Package', desc: 'Complete website rebuild, domain registration, and hosting with ongoing management—one simple monthly fee.' },
      ]}
      cta="Ready to Attract More Patients?"
      introAlign="left"
    />
  );
}