// WhoWeHelpProfessional build: 2026-07-05 v1
import { useEffect } from "react";
import { Briefcase } from 'lucide-react';
import WhoWeHelpPage from '../components/WhoWeHelpPage';
export default function WhoWeHelpProfessional() {
  useEffect(() => { console.log("WhoWeHelpProfessional build: 2026-07-05 v1"); }, []);

  return (
    <WhoWeHelpPage
      icon={Briefcase}
      headline="Digital Marketing for Professional Services"
      subheadline="Photographers, accountants, consultants &mdash; get found by the clients who need you most."
      intro="Whether you're a photographer, financial advisor, real estate agent, marketing consultant, or any other service professional, your reputation and online visibility are everything. GNL Digital Group helps professional service providers build a digital presence that earns trust, generates referrals, and consistently brings in new business."
      benefits={[
        { title: 'Niche Keyword Targeting', desc: 'We find the exact phrases your ideal clients search and make sure you rank for them.' },
        { title: 'Portfolio & Credibility Showcase', desc: 'We help you present your work, credentials, and client success stories compellingly online.' },
        { title: 'Review & Referral Growth', desc: 'Systematic strategies to grow your online reviews and amplify word-of-mouth referrals.' },
        { title: 'Personal Brand Building', desc: 'Your name is your brand. We help build it as an authority in your local market.' },
        { title: 'Lead Generation Funnels', desc: 'Targeted landing pages and calls-to-action that turn visitors into qualified inquiries.' },
        { title: 'Affordable Monthly Plans', desc: 'Right-sized marketing investment for independent professionals and small firms.' },
      ]}
      services={[
        { title: 'Local SEO', desc: 'Rank on Google for your specialty and service area to attract ready-to-buy clients.' },
        { title: 'Website Design', desc: 'Professional, fast websites that reflect your brand and convert visitors into leads.' },
        { title: 'Review Management', desc: 'Build credibility with a consistent stream of positive client reviews.' },
        { title: 'Content Strategy', desc: 'Blog posts and service pages that establish your expertise and drive organic traffic.' },
        { title: 'Google Business Profile', desc: 'Optimized local listings that drive calls and inquiries directly to you.' },
        { title: 'All-In-One Web Package', desc: 'Complete website rebuild, domain registration, and hosting with ongoing management&mdash;one simple monthly fee.' },
      ]}
      cta="Ready to Grow Your Client Base?"
      introAlign="left"
    />
  );
}