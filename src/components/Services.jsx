import { Search, TrendingUp, MapPin, FileText, BarChart3, Globe, Package } from 'lucide-react';
import { motion } from 'framer-motion';

const SERVICES = [
  { icon: Search, title: 'Local SEO Strategy', desc: 'Dominate search results for high-value keywords in Charlotte and surrounding counties.' },
  { icon: MapPin, title: 'Local Map Pack', desc: 'Claim the top 3 positions in Google Maps where 46% of all searches have local intent.' },
  { icon: FileText, title: 'Content Authority', desc: 'Expert-level content that builds topical authority and converts visitors into paying customers.' },
  { icon: TrendingUp, title: 'Reputation Management', desc: 'Leverage your reviews and build a 5-star digital presence that instills immediate trust.' },
  { icon: BarChart3, title: 'Performance Analytics', desc: 'Transparent monthly reporting showing exactly how your investment drives new customer inquiries.' },
  { icon: Globe, title: 'Website Optimization', desc: 'Fast, mobile-first websites built to convert local traffic into real business results.' },
  { icon: Package, title: 'All-In-One Web Package', desc: 'Complete website rebuild, domain registration, and hosting with ongoing management—one simple monthly fee.' },
];

const cardStyle = {
  background: 'linear-gradient(145deg,#111111,#0D0D0D)', border: '1px solid #1E1E1E',
  padding: '28px', borderRadius: 4, transition: 'border-color .3s,transform .3s',
};

export default function Services() {
  return (
    <section id="services" style={{ padding: '80px 24px', background: '#080808', borderTop: '1px solid #161616', borderBottom: '1px solid #161616' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <motion.div style={{ textAlign: 'center', marginBottom: 64 }} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 14, marginBottom: 16 }}>
            <div style={{ width: 40, height: 1, background: '#D4A84B' }} />
            <span style={{ color: '#D4A84B', fontSize: 11, fontWeight: 700, letterSpacing: '.2em', textTransform: 'uppercase' }}>Our Expertise</span>
            <div style={{ width: 40, height: 1, background: '#D4A84B' }} />
          </div>
          <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: 'clamp(30px,5vw,64px)', fontWeight: 800, color: '#fff', margin: '0 0 16px' }}>Built for Local Dominance</h2>
          <p style={{ color: '#ccc', fontSize: 16, maxWidth: 580, margin: '0 auto', lineHeight: 1.78 }}>
            We don't do generic SEO. Every strategy is engineered specifically for businesses competing in the Charlotte metropolitan area.
          </p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: 20, marginBottom: 20 }}>
          {SERVICES.slice(0, 6).map((s, i) => (
            <motion.div key={s.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} style={cardStyle}>
              <div style={{ width: 44, height: 44, background: 'rgba(212,168,75,.08)', border: '1px solid rgba(212,168,75,.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 18 }}>
                <s.icon size={20} style={{ color: '#D4A84B' }} />
              </div>
              <h3 style={{ fontFamily: "'Playfair Display',serif", fontWeight: 700, fontSize: 19, color: '#fff', marginBottom: 10 }}>{s.title}</h3>
              <p style={{ color: '#ccc', fontSize: 14, lineHeight: 1.78, margin: 0 }}>{s.desc}</p>
            </motion.div>
          ))}
        </div>

        {SERVICES.slice(6).map((s) => (
          <motion.div key={s.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            style={{ padding: '32px 40px', background: 'linear-gradient(135deg,#1A1507,#110E04)', border: '1px solid rgba(212,168,75,.25)', display: 'flex', gap: 24, alignItems: 'center', flexWrap: 'wrap', borderRadius: 4 }}>
            <div style={{ width: 52, height: 52, background: 'linear-gradient(135deg,#C49A30,#F0C860)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <s.icon size={24} style={{ color: '#080808' }} />
            </div>
            <div style={{ flex: 1, minWidth: 240 }}>
              <h3 style={{ fontFamily: "'Playfair Display',serif", fontWeight: 700, fontSize: 24, color: '#fff', marginBottom: 8 }}>{s.title}</h3>
              <p style={{ color: '#ccc', fontSize: 15, lineHeight: 1.78, margin: 0 }}>{s.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}