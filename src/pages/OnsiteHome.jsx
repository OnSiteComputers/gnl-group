import { useState, useEffect, useRef } from 'react';
import { base44 } from '@/api/base44Client';
import OnsiteNavbar from '../components/onsite/OnsiteNavbar';
import OnsiteHero from '../components/onsite/OnsiteHero';
import OnsiteTrustBar from '../components/onsite/OnsiteTrustBar';
import OnsiteWhyUs from '../components/onsite/OnsiteWhyUs';
import OnsiteServices from '../components/onsite/OnsiteServices';
import OnsiteAbout from '../components/onsite/OnsiteAbout';
import OnsiteReviews from '../components/onsite/OnsiteReviews';
import OnsiteContact from '../components/onsite/OnsiteContact';
import OnsiteFooter from '../components/onsite/OnsiteFooter';

export default function OnsiteHome() {
  useEffect(() => {
    // Load Elfsight platform script
    const existing = document.querySelector('script[src="https://static.elfsight.com/platform/platform.js"]');
    if (!existing) {
      const script = document.createElement('script');
      script.src = 'https://static.elfsight.com/platform/platform.js';
      script.async = true;
      document.head.appendChild(script);
    }

    // Load Google Fonts
    const fontLink = document.createElement('link');
    fontLink.rel = 'stylesheet';
    fontLink.href = 'https://fonts.googleapis.com/css2?family=Oswald:wght@400;500;600;700&family=Source+Sans+3:wght@300;400;500;600&display=swap';
    document.head.appendChild(fontLink);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div style={{ fontFamily: "'Source Sans 3', sans-serif", color: '#1a1a2e', overflowX: 'hidden' }}>
      <OnsiteNavbar scrollTo={scrollTo} />
      <main>
        <OnsiteHero />
        <OnsiteTrustBar />
        <OnsiteWhyUs />
        <OnsiteServices />
        <OnsiteAbout />
        <OnsiteReviews />
        <OnsiteContact />
      </main>
      <OnsiteFooter scrollTo={scrollTo} />
    </div>
  );
}