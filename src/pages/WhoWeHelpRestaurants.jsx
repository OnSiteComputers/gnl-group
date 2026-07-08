// WhoWeHelpRestaurants build: 2026-07-05 v1
import { useEffect } from "react";
import { UtensilsCrossed } from 'lucide-react';
import WhoWeHelpPage from '../components/WhoWeHelpPage';
export default function WhoWeHelpRestaurants() {
  useEffect(() => { console.log("WhoWeHelpRestaurants build: 2026-07-05 v1"); }, []);

  return (
    <WhoWeHelpPage
      icon={UtensilsCrossed}
      headline="Digital Marketing for Restaurants"
      subheadline="Fill more tables and drive more orders &mdash; online and in person."
      intro="Hungry customers search online before they decide where to eat. GNL Digital Group helps restaurants, cafes, and food businesses show up at the top of local searches, shine with great reviews, and turn a great online first impression into a loyal, returning customer base."
      benefits={[
        { title: '"Near Me" Search Dominance', desc: 'We put your restaurant at the top when locals search for your cuisine or dining experience.' },
        { title: 'Review Volume & Quality', desc: 'More great reviews on Google and Yelp drive more foot traffic and reservations.' },
        { title: 'Menu & Hours Visibility', desc: 'We make sure your hours, menu, and photos are accurate and compelling everywhere online.' },
        { title: 'Social Proof That Sells', desc: 'We help you leverage your best reviews and photos to build a crave-worthy online presence.' },
        { title: 'Event & Promotion Promotion', desc: 'Happy hours, seasonal specials, and events &mdash; we help you get the word out digitally.' },
        { title: 'Local Competition Analysis', desc: 'We know what the top-ranked restaurants in your area are doing and help you outrank them.' },
      ]}
      services={[
        { title: 'Local SEO', desc: 'Rank at the top of Google and Maps when people search for restaurants near them.' },
        { title: 'Google Business Profile', desc: 'Optimized profiles with photos, menus, and posts that drive reservations and walk-ins.' },
        { title: 'Review Management', desc: 'Build a stellar online reputation that keeps customers coming back.' },
        { title: 'Website Design', desc: 'Beautiful, fast restaurant websites that showcase your food and make ordering easy.' },
        { title: 'Social Media Presence', desc: 'Consistent, appetizing content that builds your following and drives visits.' },
        { title: 'All-In-One Web Package', desc: 'Complete website rebuild, domain registration, and hosting with ongoing management&mdash;one simple monthly fee.' },
      ]}
      cta="Ready to Fill More Tables?"
      introAlign="left"
    />
  );
}