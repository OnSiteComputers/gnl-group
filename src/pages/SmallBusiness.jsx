// SmallBusiness build: 2026-07-05 v1
import { useEffect } from "react";
import { Phone, BarChart3, Users, Globe, Star, TrendingUp, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
const HERO_BG = 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=1920&q=80';

const SERVICES = [
  { icon: Globe, title: 'Local SEO', description: 'Dominate your local market. Get found by customers searching for your products or services nearby.' },
  { icon: BarChart3, title: 'Website Optimization', description: 'Fast, mobile-friendly websites that convert visitors into customers. Complete redesigns or improvements.' },
  { icon: Users, title: 'Reputation Management', description: 'Build trust with authentic reviews. We help you get more 5-star reviews and respond professionally.' },
  { icon: Star, title: 'Content Marketing', description: 'Engaging content that showcases your expertise and attracts your ideal customers.' },
  { icon: TrendingUp, title: 'Performance Tracking', description: 'Clear, transparent reports showing exactly how your digital marketing is performing.' },
  { icon: Phone, title: 'All-In-One Package', description: 'Everything you need to grow online. One monthly price, no hidden fees, cancel anytime.' },
];

const svcCard = {
  background: 'linear-gradient(145deg,#111,#0D0D0D)', border: '1px solid #1E1E1E',
  padding: '28px', borderRadius: 4, transition: 'border-color .3s',
};

export default function SmallBusiness() {
  useEffect(() => { console.log("SmallBusiness build: 2026-07-05 v1"); }, []);

  return (
    <div style={{ background: '#080808', color: '#fff', fontFamily: "'Inter',sans-serif", minHeight: '100vh' }}>
      <Navbar />

      {/* Hero */}
      <section style={{ position: 'relative', minHeight: '70vh', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
        <img src={HERO_BG} alt="Small business" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.2 }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg,rgba(8,8,8,.85),rgba(8,8,8,.95))' }} />
        <div style={{ position: 'relative', zIndex: 10, maxWidth: 860, margin: '0 auto', padding: '130px 24px 80px', textAlign: 'center' }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, border: '1px solid rgba(212,168,75,.4)', background: 'rgba(212,168,75,.06)', color: '#D4A84B', padding: '9px 22px', fontSize: 11, fontWeight: 700, letterSpacing: '.16em', textTransform: 'uppercase', marginBottom: 28 }}>
              <div style={{ width: 6, height: 6, background: '#D4A84B', borderRadius: '50%' }} />
              Grow Your Business Online
            </div>
            <h1 style={{ fontFamily: "'Playfair Display',serif", fontSize: 'clamp(38px,7vw,72px)', fontWeight: 800, lineHeight: 1.08, color: '#fff', marginBottom: 20 }}>
              SEO &amp; Digital Marketing<br />for Small Businesses
            </h1>
            <p style={{ color: '#ccc', fontSize: 18, maxWidth: 600, margin: '0 auto 40px', lineHeight: 1.78 }}>
              Get found by more customers, build your reputation, and grow your revenue with proven digital marketing strategies designed for small businesses.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16, justifyContent: 'center' }}>
              <Link to="/contact" style={{ borderRadius: 8, background: 'linear-gradient(135deg,#C49A30,#F0C860,#C49A30)', backgroundSize: '250% auto', color: '#080808', fontWeight: 800, letterSpacing: '.08em', padding: '15px 36px', border: 'none', cursor: 'pointer', fontSize: 13, textTransform: 'uppercase', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 9 }}>
                Get Free Consultation <ArrowRight size={16} />
              </Link>
              <a href="tel:+17045945826" style={{ borderRadius: 8, background: 'transparent', color: '#fff', fontWeight: 700, letterSpacing: '.08em', padding: '14px 35px', border: '1px solid rgba(255,255,255,.3)', cursor: 'pointer', fontSize: 13, textTransform: 'uppercase', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 9 }}>
                <Phone size={16} />(704) 594-5826
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section style={{ padding: '90px 24px', background: '#0B0B0B', borderTop: '1px solid #161616', borderBottom: '1px solid #161616' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <motion.div style={{ textAlign: 'center', marginBottom: 64 }} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 14, marginBottom: 16 }}>
              <div style={{ width: 40, height: 1, background: '#D4A84B' }} />
              <span style={{ color: '#D4A84B', fontSize: 11, fontWeight: 700, letterSpacing: '.2em', textTransform: 'uppercase' }}>What We Offer</span>
              <div style={{ width: 40, height: 1, background: '#D4A84B' }} />
            </div>
            <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: 'clamp(30px,5vw,60px)', fontWeight: 800, color: '#fff', margin: '0 0 16px' }}>Everything You Need to Grow Online</h2>
            <p style={{ color: '#ccc', fontSize: 16, maxWidth: 600, margin: '0 auto', lineHeight: 1.75 }}>Comprehensive digital marketing services tailored for small businesses. No jargon, no hidden fees, just results.</p>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: 20 }}>
            {SERVICES.map((service, idx) => (
              <motion.div key={service.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }} style={svcCard}>
                <div style={{ width: 44, height: 44, background: 'rgba(212,168,75,.1)', border: '1px solid rgba(212,168,75,.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 18 }}>
                  <service.icon size={20} style={{ color: '#D4A84B' }} />
                </div>
                <h3 style={{ fontFamily: "'Playfair Display',serif", fontWeight: 700, fontSize: 18, color: '#fff', marginBottom: 10 }}>{service.title}</h3>
                <p style={{ color: '#ccc', fontSize: 14, lineHeight: 1.75, margin: 0 }}>{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '100px 24px', background: 'linear-gradient(135deg,#0D0B06,#1C1607,#0D0B06)', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 1, background: 'linear-gradient(90deg,transparent,rgba(212,168,75,.4),transparent)' }} />
        <div style={{ maxWidth: 680, margin: '0 auto', position: 'relative', zIndex: 10 }}>
          <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: 'clamp(30px,4.5vw,56px)', fontWeight: 800, color: '#fff', marginBottom: 20 }}>Ready to Grow Your Business?</h2>
          <p style={{ color: '#ccc', marginBottom: 40, fontSize: 16, lineHeight: 1.75 }}>Schedule a free consultation. We'll analyze your current online presence and show you exactly how to get more customers.</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16, justifyContent: 'center' }}>
            <Link to="/contact" style={{ borderRadius: 8, background: 'linear-gradient(135deg,#C49A30,#F0C860,#C49A30)', backgroundSize: '250% auto', color: '#080808', fontWeight: 800, letterSpacing: '.08em', padding: '15px 36px', border: 'none', cursor: 'pointer', fontSize: 13, textTransform: 'uppercase', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 9 }}>
              Schedule Free Consultation <ArrowRight size={16} />
            </Link>
            <a href="tel:+17045945826" style={{ borderRadius: 8, background: 'transparent', color: '#fff', fontWeight: 700, letterSpacing: '.08em', padding: '14px 35px', border: '1px solid rgba(255,255,255,.3)', cursor: 'pointer', fontSize: 13, textTransform: 'uppercase', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 9 }}>
              <Phone size={16} />Call Now
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}