import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CheckCircle, Phone, ArrowRight } from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';

const PHONE_HREF = 'tel:+17045945826';
const PHONE = '(704) 594-5826';

export default function WhoWeHelpPage({ icon: Icon, headline, subheadline, intro, benefits, services, cta, introAlign = 'center' }) {
  return (
    <div style={{ background: '#080808', color: '#fff', fontFamily: "'Inter',sans-serif", minHeight: '100vh' }}>
      <Navbar />

      {/* Hero */}
      <section style={{ background: 'linear-gradient(135deg,#0D0B06,#1C1607,#0D0B06)', padding: '130px 24px 80px', textAlign: 'center', borderBottom: '1px solid #1E1800' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, border: '1px solid rgba(212,168,75,.4)', background: 'rgba(212,168,75,.06)', color: '#D4A84B', padding: '9px 22px', fontSize: 11, fontWeight: 700, letterSpacing: '.16em', textTransform: 'uppercase', marginBottom: 32 }}>
              <div style={{ width: 6, height: 6, background: '#D4A84B', borderRadius: '50%' }} />
              Charlotte, NC · Local Dominance. Real Results.
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16, marginBottom: 20 }}>
              {Icon && <Icon style={{ color: '#D4A84B', width: 52, height: 52, strokeWidth: 1.5, flexShrink: 0 }} />}
              <h1 style={{ fontFamily: "'Playfair Display',serif", fontSize: 'clamp(32px,5vw,60px)', fontWeight: 800, color: '#fff', lineHeight: 1.1, margin: 0 }}>{headline}</h1>
            </div>
            <p style={{ color: '#ccc', fontSize: 18, maxWidth: 640, margin: '0 auto' }}>{subheadline}</p>
          </motion.div>
        </div>
      </section>

      {/* Intro */}
      <section style={{ padding: '72px 24px', background: '#0B0B0B', borderBottom: '1px solid #161616' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <motion.p
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            style={{ color: '#e0e0e0', fontSize: 17, lineHeight: 1.85, textAlign: introAlign === 'center' ? 'center' : 'left' }}
          >{intro}</motion.p>
        </div>
      </section>

      {/* Benefits */}
      <section style={{ padding: '80px 24px', background: '#080808', borderBottom: '1px solid #161616' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 14, marginBottom: 16 }}>
              <div style={{ width: 40, height: 1, background: '#D4A84B' }} />
              <span style={{ color: '#D4A84B', fontSize: 11, fontWeight: 700, letterSpacing: '.2em', textTransform: 'uppercase' }}>Why GNL Digital</span>
              <div style={{ width: 40, height: 1, background: '#D4A84B' }} />
            </div>
            <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: 'clamp(28px,4vw,48px)', fontWeight: 800, color: '#fff', margin: 0 }}>
              Why <span style={{ color: '#D4A84B' }}>GNL Digital</span> Works for You
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: 20 }}>
            {benefits.map((b, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                style={{ display: 'flex', alignItems: 'flex-start', gap: 16, background: 'linear-gradient(145deg,#111,#0D0D0D)', border: '1px solid #1E1E1E', padding: '24px', borderRadius: 4 }}>
                <CheckCircle style={{ color: '#D4A84B', marginTop: 2, flexShrink: 0, width: 20, height: 20 }} />
                <div>
                  <h3 style={{ fontWeight: 700, color: '#fff', marginBottom: 6, fontSize: 15 }}>{b.title}</h3>
                  <p style={{ color: '#ccc', fontSize: 14, lineHeight: 1.75, margin: 0 }}>{b.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section style={{ padding: '80px 24px', background: '#0B0B0B', borderBottom: '1px solid #161616' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 14, marginBottom: 16 }}>
              <div style={{ width: 40, height: 1, background: '#D4A84B' }} />
              <span style={{ color: '#D4A84B', fontSize: 11, fontWeight: 700, letterSpacing: '.2em', textTransform: 'uppercase' }}>Our Services</span>
              <div style={{ width: 40, height: 1, background: '#D4A84B' }} />
            </div>
            <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: 'clamp(28px,4vw,48px)', fontWeight: 800, color: '#fff', margin: 0 }}>Our Services for You</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: 20 }}>
            {services.map((s, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                style={{ background: 'linear-gradient(145deg,#111,#0D0D0D)', border: '1px solid rgba(212,168,75,.15)', padding: '28px', borderRadius: 4, transition: 'border-color .3s' }}>
                <h3 style={{ fontFamily: "'Playfair Display',serif", fontWeight: 700, fontSize: 18, marginBottom: 10, color: '#D4A84B' }}>{s.title}</h3>
                <p style={{ color: '#ccc', fontSize: 14, lineHeight: 1.75, margin: 0 }}>{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '100px 24px', background: 'linear-gradient(135deg,#0D0B06,#1C1607,#0D0B06)', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 1, background: 'linear-gradient(90deg,transparent,rgba(212,168,75,.4),transparent)' }} />
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ maxWidth: 680, margin: '0 auto', position: 'relative', zIndex: 10 }}>
          <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: 'clamp(30px,4.5vw,56px)', fontWeight: 800, color: '#fff', marginBottom: 20 }}>{cta}</h2>
          <p style={{ color: '#ccc', marginBottom: 40, fontSize: 16, lineHeight: 1.75 }}>No contracts. No fluff. Just results from a team that knows your industry.</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16, justifyContent: 'center' }}>
            <Link to="/contact" style={{
              borderRadius: 8, background: 'linear-gradient(135deg,#C49A30,#F0C860,#C49A30)', backgroundSize: '250% auto',
              color: '#080808', fontWeight: 800, letterSpacing: '.08em', padding: '15px 36px', border: 'none', cursor: 'pointer',
              fontSize: 13, textTransform: 'uppercase', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 9,
            }}>
              Get a Free Strategy Session <ArrowRight size={16} />
            </Link>
            <a href={PHONE_HREF} style={{
              borderRadius: 8, background: 'transparent', color: '#fff', fontWeight: 700, letterSpacing: '.08em',
              padding: '14px 35px', border: '1px solid rgba(255,255,255,.3)', cursor: 'pointer', fontSize: 13,
              textTransform: 'uppercase', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 9,
            }}>
              <Phone size={16} /> {PHONE}
            </a>
          </div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}