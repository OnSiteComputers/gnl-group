// WhoWeHelpRealtors — build: 2026-07-05 v1
import { Home } from 'lucide-react';
import WhoWeHelpPage from '../components/WhoWeHelpPage';

console.log("WhoWeHelpRealtors build: 2026-07-05 v1 ✅");

export default function WhoWeHelpRealtors() {
  return (
    <WhoWeHelpPage
      icon={Home}
      headline="Digital Marketing for Realtors"
      subheadline="Get in front of buyers and sellers searching for agents — in Charlotte and across the Carolinas."
      intro="In real estate, visibility is everything. GNL Digital Group helps realtors and real estate teams dominate local search results, build a standout online reputation, and turn website visitors into signed clients — so you can focus on closing deals."
      benefits={[
        { title: 'Local SEO That Generates Leads', desc: 'We rank your listings and agent profile at the top of Google when buyers and sellers search locally.' },
        { title: 'Reputation That Wins Listings', desc: 'More 5-star reviews mean more trust at the door. We help you earn and showcase them consistently.' },
        { title: 'Websites That Convert Visitors', desc: 'Professional, fast, mobile-first websites designed to capture leads and book showings.' },
        { title: 'Neighborhood & Market Targeting', desc: 'We optimize your presence for the specific neighborhoods, cities, and zip codes you serve.' },
        { title: 'Competitor Intelligence', desc: 'We analyze top-ranking agents and build a strategy that positions you above the competition.' },
        { title: 'No Long-Term Contracts', desc: 'We earn your business every month with transparent reporting and real results.' },
      ]}
      services={[
        { title: 'Local SEO', desc: 'Dominate Google Maps and organic search results for your target markets and neighborhoods.' },
        { title: 'Website Design', desc: 'Realtor websites built for credibility, lead capture, and mobile performance.' },
        { title: 'Review Management', desc: 'Systematic approach to growing your Google review count and responding professionally.' },
        { title: 'Content Marketing', desc: 'Neighborhood guides and landing pages that rank and establish your local authority.' },
        { title: 'All-In-One Web Package', desc: 'Complete website rebuild, domain registration, and hosting with ongoing management — one simple monthly fee.' },
        { title: 'Analytics & Reporting', desc: "Monthly reports showing exactly where your leads come from and what's working." },
      ]}
      cta="Ready to Grow Your Real Estate Business?"
      introAlign="left"
    />
  );
}