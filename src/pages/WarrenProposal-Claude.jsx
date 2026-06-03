import { useState, useEffect } from 'react';

const PHONE = '704-594-5826';
const PHONE_HREF = 'tel:+17045945826';
const EMAIL = 'linda@gnldigitalgroup.com';

const services = [
  {
    icon: '🌐',
    title: 'New Website',
    desc: 'A modern, professional site built to convert visitors into consultations — with a contact form routed to your secretary, not your inbox.',
  },
  {
    icon: '📍',
    title: 'Local SEO',
    desc: 'Get found when people in Charlotte search "divorce attorney" or "family law attorney" — the searches that bring you new clients, not people who already know your name.',
  },
  {
    icon: '⭐',
    title: 'Google Reviews',
    desc: '42 years of practice deserves more than 15 reviews. With your approval, we reach out to past clients and grow your reputation the right way.',
  },
  {
    icon: '📧',
    title: 'Professional Email',
    desc: 'Move from AOL to jim@warrenfamilylaw.net — seamlessly. Your email still lands in your inbox. Nothing changes until you\'re ready.',
  },
  {
    icon: '📋',
    title: 'Contact Form Routing',
    desc: 'Website inquiries go to info@warrenfamilylaw.net — your secretary filters everything. You only see real potential clients, not junk.',
  },
  {
    icon: '📞',
    title: 'VoIP Phone System',
    desc: 'Replace your AT&T service with a modern IP phone system. Your secretary transfers calls from home as if she\'s sitting in your office — at a fraction of the cost.',
  },
];

const whyUs = [
  { num: '26+', label: 'Years of Tech Expertise' },
  { num: '#1', label: 'Google Ranking — Our Own Business' },
  { num: '10', label: 'Days to Build & Launch GNL' },
  { num: '1', label: 'Person You Deal With — Greg' },
];

export default function WarrenProposal() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setVisible(true), 100);
  }, []);

  return (
    <div style={{ fontFamily: "'Source Sans 3', sans-serif", background: '#0d1b2e', minHeight: '100vh', color: '#e8e0d0' }}>
      <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;0,700;1,500;1,600&family=Source+Sans+3:wght@300;400;500;600;700&display=swap" rel="stylesheet" />

      <style>{`
        @keyframes fadeUp { from { opacity:0; transform:translateY(28px); } to { opacity:1; transform:translateY(0); } }
        .fade-up { opacity:0; animation: fadeUp .7s ease forwards; }
        .d1{animation-delay:.1s} .d2{animation-delay:.25s} .d3{animation-delay:.4s} .d4{animation-delay:.55s}
        .card:hover { transform: translateY(-4px); border-color: rgba(184,150,86,.5) !important; }
        .card { transition: transform .2s, border-color .2s; }
        a.btn:hover { opacity: .88; transform: translateY(-2px); }
        a.btn { transition: opacity .2s, transform .2s; }
      `}</style>

      {/* CONFIDENTIAL BANNER */}
      <div style={{ background: 'rgba(184,150,86,.12)', borderBottom: '1px solid rgba(184,150,86,.25)', padding: '10px 24px', textAlign: 'center', fontSize: 12, letterSpacing: '3px', textTransform: 'uppercase', color: '#b8965a' }}>
        Private Proposal — Prepared Exclusively for Warren Family Law
      </div>

      {/* HERO */}
      <section style={{ padding: '80px 24px 90px', textAlign: 'center', borderBottom: '1px solid rgba(255,255,255,.07)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 50% 0%, rgba(184,150,86,.08) 0%, transparent 65%)', pointerEvents: 'none' }} />
        <div className="fade-up d1" style={{ fontSize: 12, letterSpacing: '4px', textTransform: 'uppercase', color: '#b8965a', marginBottom: 24 }}>
          GNL Digital Group — Private Proposal
        </div>
        <h1 className="fade-up d2" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(36px, 6vw, 64px)', fontWeight: 600, lineHeight: 1.05, color: '#fff', margin: '0 0 20px' }}>
          A New Digital Presence<br />
          <em style={{ color: '#b8965a', fontStyle: 'italic' }}>for Warren Family Law</em>
        </h1>
        <p className="fade-up d3" style={{ fontSize: 18, color: '#a0aaba', maxWidth: 560, margin: '0 auto 36px', lineHeight: 1.65 }}>
          James — here's what we discussed, laid out clearly. A modern site, local SEO, professional email, and a phone system that actually works for how your firm operates.
        </p>
        <div className="fade-up d4" style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href={PHONE_HREF} className="btn" style={{ background: '#b8965a', color: '#0d1b2e', padding: '14px 28px', borderRadius: 4, fontWeight: 700, letterSpacing: '.5px', textTransform: 'uppercase', fontSize: 14, textDecoration: 'none', display: 'inline-block' }}>
            📞 Call Greg — {PHONE}
          </a>
          <a href={`mailto:${EMAIL}`} className="btn" style={{ border: '1px solid rgba(184,150,86,.4)', color: '#b8965a', padding: '14px 28px', borderRadius: 4, fontWeight: 600, fontSize: 14, textDecoration: 'none', display: 'inline-block' }}>
            Email Us
          </a>
        </div>
      </section>

      {/* WHY NUMBERS */}
      <section style={{ background: 'rgba(255,255,255,.03)', borderBottom: '1px solid rgba(255,255,255,.07)', padding: '40px 24px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: 24, textAlign: 'center' }}>
          {whyUs.map(w => (
            <div key={w.num}>
              <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 46, fontWeight: 700, color: '#b8965a', lineHeight: 1 }}>{w.num}</div>
              <div style={{ fontSize: 12, letterSpacing: '2px', textTransform: 'uppercase', color: '#7a8898', marginTop: 8 }}>{w.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* WHAT WE DO */}
      <section style={{ padding: '80px 24px', maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <div style={{ fontSize: 11, letterSpacing: '4px', textTransform: 'uppercase', color: '#b8965a', marginBottom: 14 }}>The Full Scope</div>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 600, color: '#fff', margin: 0 }}>What We Build for You</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 20 }}>
          {services.map(s => (
            <div key={s.title} className="card" style={{ background: 'rgba(255,255,255,.04)', border: '1px solid rgba(255,255,255,.08)', borderRadius: 8, padding: '28px 26px' }}>
              <div style={{ fontSize: 28, marginBottom: 14 }}>{s.icon}</div>
              <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 22, fontWeight: 600, color: '#fff', margin: '0 0 10px' }}>{s.title}</h3>
              <p style={{ fontSize: 15, color: '#8a99aa', lineHeight: 1.65, margin: 0 }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* NEXT STEP */}
      <section style={{ background: 'rgba(255,255,255,.03)', borderTop: '1px solid rgba(255,255,255,.07)', borderBottom: '1px solid rgba(255,255,255,.07)', padding: '80px 24px' }}>
        <div style={{ maxWidth: 700, margin: '0 auto', textAlign: 'center' }}>
          <div style={{ fontSize: 11, letterSpacing: '4px', textTransform: 'uppercase', color: '#b8965a', marginBottom: 14 }}>Next Step</div>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 600, color: '#fff', margin: '0 0 20px' }}>Review the Agreement</h2>
          <p style={{ fontSize: 17, color: '#8a99aa', lineHeight: 1.7, marginBottom: 32 }}>
            You already have a copy of the agreement Greg left with you. Look it over at your convenience — no pressure, no deadline. Any questions at all, call or email Greg directly.
          </p>
          <p style={{ fontSize: 15, color: '#5a6878', fontStyle: 'italic' }}>Month-to-month. No long-term contracts. No lock-in.</p>
        </div>
      </section>

      {/* PROOF — ON-SITE */}
      <section style={{ padding: '80px 24px', maxWidth: 800, margin: '0 auto', textAlign: 'center' }}>
        <div style={{ fontSize: 11, letterSpacing: '4px', textTransform: 'uppercase', color: '#b8965a', marginBottom: 14 }}>Proof of Work</div>
        <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: 600, color: '#fff', margin: '0 0 20px' }}>You've Already Seen What We Build</h2>
        <p style={{ fontSize: 17, color: '#8a99aa', lineHeight: 1.7, marginBottom: 32 }}>
          On-Site Computer Service — Greg's own 26-year-old repair business — was rebuilt from scratch and ranked #1 on Google. That's the site Greg showed you in the parking lot. That's what we do for our clients.
        </p>
        <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="/warren-demo" target="_blank" rel="noopener noreferrer" className="btn" style={{ background: '#b8965a', color: '#0d1b2e', padding: '14px 28px', borderRadius: 4, fontWeight: 700, fontSize: 14, textDecoration: 'none', display: 'inline-block', letterSpacing: '.5px' }}>
            👁 See Your Demo Site →
          </a>
          <a href="https://onsitecomputerservice.net" target="_blank" rel="noopener noreferrer" className="btn" style={{ background: 'rgba(184,150,86,.15)', border: '1px solid rgba(184,150,86,.4)', color: '#b8965a', padding: '14px 28px', borderRadius: 4, fontWeight: 700, fontSize: 14, textDecoration: 'none', display: 'inline-block', letterSpacing: '.5px' }}>
            View On-Site Computer Service →
          </a>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: 'linear-gradient(135deg, #13233f, #1d3357)', borderTop: '1px solid rgba(184,150,86,.2)', padding: '80px 24px', textAlign: 'center' }}>
        <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(30px, 5vw, 50px)', fontWeight: 600, color: '#fff', margin: '0 0 16px' }}>
          Ready to Get Started, James?
        </h2>
        <p style={{ fontSize: 17, color: '#a0aaba', maxWidth: 500, margin: '0 auto 36px', lineHeight: 1.65 }}>
          Look over the agreement at your convenience. Any questions — call or email Greg directly.
        </p>
        <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href={PHONE_HREF} className="btn" style={{ background: '#b8965a', color: '#0d1b2e', padding: '16px 32px', borderRadius: 4, fontWeight: 700, letterSpacing: '.5px', textTransform: 'uppercase', fontSize: 15, textDecoration: 'none', display: 'inline-block' }}>
            📞 Call Greg — {PHONE}
          </a>
          <a href={`mailto:${EMAIL}`} className="btn" style={{ border: '1px solid rgba(184,150,86,.4)', color: '#b8965a', padding: '16px 32px', borderRadius: 4, fontWeight: 600, fontSize: 15, textDecoration: 'none', display: 'inline-block' }}>
            {EMAIL}
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <div style={{ padding: '24px', textAlign: 'center', fontSize: 13, color: '#3a4858', borderTop: '1px solid rgba(255,255,255,.05)' }}>
        © 2026 GNL Digital Group — Private proposal for Warren Family Law. Not for public distribution.
      </div>
    </div>
  );
}
