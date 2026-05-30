import { Home } from 'lucide-react';
import WhoWeHelpPage from '../components/WhoWeHelpPage';

const BENEFITS = [
  {
    title: "Dominate Your Farm Area",
    desc: "Hyper-local SEO that puts you in front of buyers and sellers searching in your specific neighborhoods and price points."
  },
  {
    title: "Stand Out in a Crowded Market",
    desc: "While other agents rely on Zillow, we help you build your own brand authority and attract direct leads."
  },
  {
    title: "Convert More Leads",
    desc: "Professional web presence that builds trust instantly — turning website visitors into scheduled consultations."
  },
  {
    title: "Leverage Your Reviews",
    desc: "Showcase your 5-star client experiences prominently, building social proof that wins listings."
  },
];

const SERVICES = [
  {
    title: "Realtor Local SEO",
    desc: "Rank for 'Realtor near me' and neighborhood-specific searches. Dominate your farm area with targeted local optimization."
  },
  {
    title: "Real Estate Website Design",
    desc: "Modern, mobile-first websites that showcase listings, highlight your expertise, and capture buyer/seller leads 24/7."
  },
  {
    title: "Google Business Profile Optimization",
    desc: "Complete setup and ongoing optimization to appear in local searches and Google Maps when clients need you most."
  },
  {
    title: "Reputation Management",
    desc: "Strategic review generation systems that build your online credibility and attract more qualified leads."
  },
  {
    title: "Neighborhood Landing Pages",
    desc: "Custom pages for each neighborhood you serve, establishing you as the area expert and improving search visibility."
  },
  {
    title: "All-In-One Web Package",
    desc: "Complete digital presence: website, SEO, reviews, analytics, and ongoing support — everything you need to dominate your market."
  },
];

export default function WhoWeHelpRealtors() {
  return (
    <WhoWeHelpPage
      icon={Home}
      headline="Realtors & Real Estate Agents"
      subheadline="Dominate Your Local Market and Win More Listings"
      intro="The real estate market is more competitive than ever. Buyers and sellers start their search online — and if you're not showing up in local search results, you're losing business to agents who are. GNL Digital Group helps realtors build a powerful online presence that attracts qualified leads, establishes neighborhood authority, and converts website visitors into clients. We specialize in hyper-local SEO strategies that put you in front of people actively searching in your farm areas."
      benefits={BENEFITS}
      services={SERVICES}
      cta="Ready to Become the Go-To Agent in Your Area?"
      introAlign="left"
    />
  );
}