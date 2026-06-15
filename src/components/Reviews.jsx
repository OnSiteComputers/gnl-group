import { Star } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Reviews() {
  return (
    <section id="reviews" style={{ padding: '80px 24px', background: '#0B0B0B', borderTop: '1px solid #161616', borderBottom: '1px solid #161616' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <motion.div style={{ textAlign: 'center', marginBottom: 40 }} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 14, marginBottom: 16 }}>
            <div style={{ width: 40, height: 1, background: '#D4A84B' }} />
            <span style={{ color: '#D4A84B', fontSize: 11, fontWeight: 700, letterSpacing: '.2em', textTransform: 'uppercase' }}>Client Reviews</span>
            <div style={{ width: 40, height: 1, background: '#D4A84B' }} />
          </div>
          <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: 'clamp(28px,4vw,52px)', fontWeight: 800, color: '#fff', margin: '0 0 12px' }}>177 Five-Star Reviews</h2>
          <p style={{ color: '#ccc', fontSize: 15, maxWidth: 540, margin: '0 auto', lineHeight: 1.78 }}>
            Over 25+ years, we've built an unmatched record of client trust. Don't take our word for it — read what our clients say.
          </p>
        </motion.div>

        <motion.div style={{ display: 'flex', justifyContent: 'center', gap: 8, marginBottom: 40 }} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={28} style={{ fill: '#D4A84B', color: '#D4A84B' }} />
          ))}
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, textAlign: 'center', marginBottom: 48 }}>
          {[['177', '5-Star Reviews'], ['25+', 'Years in Business']].map(([num, label]) => (
            <div key={label} style={{ border: '1px solid rgba(212,168,75,.2)', padding: '28px', background: 'linear-gradient(145deg,#111,#0D0D0D)', borderRadius: 4 }}>
              <div style={{ fontFamily: "'Playfair Display',serif", fontWeight: 800, fontSize: 40, color: '#D4A84B' }}>{num}</div>
              <div style={{ color: '#ccc', fontSize: 14, marginTop: 6 }}>{label}</div>
            </div>
          ))}
        </div>

        <motion.h3 style={{ fontFamily: "'Playfair Display',serif", fontSize: 'clamp(22px,3vw,36px)', fontWeight: 800, textAlign: 'center', color: '#fff', marginBottom: 32 }}
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          What Our Customers Say
        </motion.h3>

        <div className="mb-10 elfsight-reviews-container">
          <div className="elfsight-app-989581b6-5532-43fa-8f5f-66c819c1d351" data-elfsight-app-lazy></div>
        </div>
      </div>
    </section>
  );
}