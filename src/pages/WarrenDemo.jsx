import { useState, useEffect, useRef } from 'react';

const PHONE = '(704) 555-0100';
const PHONE_HREF = 'tel:+17045550100';
const ADDRESS = 'Charlotte, North Carolina';

const practiceAreas = [
  {
    title: 'Divorce',
    icon: '⚖️',
    desc: 'Strategic, compassionate guidance through one of life\'s most difficult transitions. We protect your assets, your future, and your dignity.',
    detail: 'Whether contested or uncontested, we help you navigate property division, spousal support, and every complex detail with clarity.'
  },
  {
    title: 'Child Custody',
    icon: '👨‍👧',
    desc: 'Your children deserve stability. We fight for custody arrangements that put their wellbeing first — always.',
    detail: 'From joint custody agreements to contested hearings, James A. Warren Jr. brings 42 years of family court experience to your case.'
  },
  {
    title: 'Child Support',
    icon: '🏠',
    desc: 'Fair support arrangements that reflect the real financial needs of your children and your situation.',
    detail: 'We handle both establishing and modifying support orders, ensuring every agreement is accurate, enforceable, and fair.'
  },
  {
    title: 'Spousal Support',
    icon: '🤝',
    desc: 'Whether you\'re seeking support or responding to a claim, we make sure the outcome is grounded in fact, not pressure.',
    detail: 'Alimony determinations can be complex. We make sure the financial realities of your marriage are accurately represented.'
  },
];

const stats = [
  { num: '42', label: 'Years of Experience' },
  { num: '1,000s', label: 'Families Helped' },
  { num: 'Direct', label: 'Access to James' },
  { num: 'Local', label: 'Charlotte & the Carolinas' },
];

const testimonials = [
  {
    text: 'James guided me through the hardest year of my life with patience, honesty, and real expertise. I always felt like I was his only client.',
    name: 'Former Client',
    case: 'Divorce & Custody'
  },
  {
    text: 'When I called, James answered. When I had questions, he explained everything clearly. That level of personal attention made all the difference.',
    name: 'Former Client',
    case: 'Child Custody'
  },
  {
    text: 'After 42 years in practice, James has seen everything. His calm experience gave me confidence when I needed it most.',
    name: 'Former Client',
    case: 'Spousal Support'
  },
];

function useInView(ref) {
  const [inView, setInView] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold: 0.15 });
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return inView;
}

function FadeIn({ children, delay = 0, style = {} }) {
  const ref = useRef();
  const inView = useInView(ref);
  return (
    <div ref={ref} style={{
      opacity: inView ? 1 : 0,
      transform: inView ? 'translateY(0)' : 'translateY(32px)',
      transition: `opacity .7s ease ${delay}s, transform .7s ease ${delay}s`,
      ...style
    }}>
      {children}
    </div>
  );
}

export default function WarrenDemo() {
  const [activeArea, setActiveArea] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const s = {
    charcoal: '#1c1c1e',
    dark: '#2a2a2d',
    cream: '#f5f0e8',
    warmWhite: '#faf8f4',
    gold: '#c9a84c',
    goldLight: '#e8c96a',
    muted: '#8a8070',
    text: '#3a3530',
    border: 'rgba(201,168,76,.2)',
  };

  return (
    <div style={{ fontFamily: "'Lora', serif", background: s.warmWhite, color: s.text, minHeight: '100vh' }}>
      <link href="https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Montserrat:wght@300;400;500;600;700&display=swap" rel="stylesheet" />

      <style>{`
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { -webkit-font-smoothing: antialiased; }
        @keyframes heroFade { from { opacity:0; transform:translateY(20px); } to { opacity:1; transform:translateY(0); } }
        .hero-text { animation: heroFade .9s ease forwards; }
        .hero-text-2 { animation: heroFade .9s ease .2s forwards; opacity:0; }
        .hero-text-3 { animation: heroFade .9s ease .4s forwards; opacity:0; }
        .hero-text-4 { animation: heroFade .9s ease .6s forwards; opacity:0; }
        .nav-link { font-family:'Montserrat',sans-serif; font-size:12px; letter-spacing:2px; text-transform:uppercase; color:#e8e0d0; text-decoration:none; transition:color .2s; }
        .nav-link:hover { color:#c9a84c; }
        .area-tab { cursor:pointer; transition:all .2s; border-bottom:2px solid transparent; padding-bottom:8px; }
        .area-tab:hover { color:#c9a84c; }
        .btn-gold { display:inline-block; background:#c9a84c; color:#1c1c1e; padding:16px 36px; font-family:'Montserrat',sans-serif; font-weight:700; font-size:12px; letter-spacing:2px; text-transform:uppercase; text-decoration:none; transition:all .2s; }
        .btn-gold:hover { background:#e8c96a; transform:translateY(-2px); box-shadow:0 8px 24px rgba(201,168,76,.3); }
        .btn-outline { display:inline-block; border:1px solid rgba(201,168,76,.5); color:#c9a84c; padding:16px 36px; font-family:'Montserrat',sans-serif; font-weight:600; font-size:12px; letter-spacing:2px; text-transform:uppercase; text-decoration:none; transition:all .2s; }
        .btn-outline:hover { background:rgba(201,168,76,.08); transform:translateY(-2px); }
        .stat-item { text-align:center; }
        .testimonial-card { background:white; padding:36px; border-left:3px solid #c9a84c; transition:transform .2s; }
        .testimonial-card:hover { transform:translateY(-4px); }
        .demo-badge { position:fixed; bottom:20px; right:20px; background:rgba(201,168,76,.95); color:#1c1c1e; padding:10px 16px; font-family:'Montserrat',sans-serif; font-size:11px; font-weight:700; letter-spacing:1px; text-transform:uppercase; z-index:100; border-radius:2px; box-shadow:0 4px 16px rgba(0,0,0,.2); }
        @media(max-width:768px) { .hero-grid { grid-template-columns:1fr !important; } .stats-grid { grid-template-columns:repeat(2,1fr) !important; } .areas-grid { grid-template-columns:1fr !important; } .testimonials-grid { grid-template-columns:1fr !important; } }
      `}</style>

      {/* DEMO BADGE */}
      <div className="demo-badge">⚡ Demo — Prepared by GNL Digital Group</div>

      {/* NAV */}
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
        background: scrolled ? 'rgba(28,28,30,.97)' : 'transparent',
        backdropFilter: scrolled ? 'blur(8px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(201,168,76,.15)' : 'none',
        transition: 'all .3s', padding: '20px 40px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between'
      }}>
        <div>
          <div style={{ fontFamily: "'Lora', serif", fontSize: 22, fontWeight: 600, color: '#fff', letterSpacing: '.5px' }}>Warren <span style={{ color: s.gold }}>Family Law</span></div>
          <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 9, letterSpacing: '3px', textTransform: 'uppercase', color: s.gold, marginTop: 2 }}>Charlotte, North Carolina</div>
        </div>
        <div style={{ display: 'flex', gap: 32, alignItems: 'center' }}>
          <a href="#about" className="nav-link" style={{ display: window.innerWidth < 768 ? 'none' : 'block' }}>Our Firm</a>
          <a href="#practice" className="nav-link" style={{ display: window.innerWidth < 768 ? 'none' : 'block' }}>Practice Areas</a>
          <a href="#contact" className="nav-link" style={{ display: window.innerWidth < 768 ? 'none' : 'block' }}>Contact</a>
          <a href={PHONE_HREF} className="btn-gold" style={{ padding: '11px 22px', fontSize: 11 }}>Free Consultation</a>
        </div>
      </nav>

      {/* HERO */}
      <section style={{
        minHeight: '100vh', position: 'relative', overflow: 'hidden',
        display: 'flex', alignItems: 'center',
        background: `linear-gradient(135deg, ${s.charcoal} 0%, #2d2420 50%, #1a1a1c 100%)`,
      }}>
        {/* decorative gold line */}
        <div style={{ position: 'absolute', top: 0, left: '42%', width: 1, height: '100%', background: 'linear-gradient(to bottom, transparent, rgba(201,168,76,.3), transparent)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 30% 50%, rgba(201,168,76,.06) 0%, transparent 60%)', pointerEvents: 'none' }} />

        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '120px 40px 80px', display: 'grid', gridTemplateColumns: '1.1fr .9fr', gap: 80, alignItems: 'center' }} className="hero-grid">
          <div>
            <div className="hero-text" style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 11, letterSpacing: '4px', textTransform: 'uppercase', color: s.gold, marginBottom: 24 }}>
              Serving Families Since 1984
            </div>
            <h1 className="hero-text-2" style={{ fontFamily: "'Lora', serif", fontSize: 'clamp(38px, 5.5vw, 68px)', fontWeight: 600, color: '#fff', lineHeight: 1.08, marginBottom: 28 }}>
              Guiding Families<br />Through Life's<br /><em style={{ color: s.gold }}>Hardest Decisions.</em>
            </h1>
            <p className="hero-text-3" style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 17, fontWeight: 300, color: '#c0b8ac', lineHeight: 1.75, maxWidth: 500, marginBottom: 40 }}>
              For over four decades, families across Charlotte have trusted James A. Warren Jr. to handle their most personal legal matters with experience, discretion, and genuine care.
            </p>
            <div className="hero-text-4" style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
              <a href={PHONE_HREF} className="btn-gold">Schedule a Consultation</a>
              <a href="#practice" className="btn-outline">Our Practice Areas</a>
            </div>
          </div>

          {/* Attorney card */}
          <div className="hero-text-3" style={{ position: 'relative' }}>
            <div style={{ background: 'linear-gradient(160deg, #2d2824, #221e1a)', border: `1px solid ${s.border}`, padding: '48px 36px', position: 'relative' }}>
              <div style={{ position: 'absolute', top: 16, right: 16, left: 16, bottom: 16, border: `1px solid ${s.border}`, pointerEvents: 'none' }} />
              {/* silhouette placeholder */}
              <div style={{ width: 120, height: 120, borderRadius: '50%', background: 'linear-gradient(135deg, #3a3530, #2a2520)', border: `2px solid ${s.gold}`, margin: '0 auto 24px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="rgba(201,168,76,.6)" strokeWidth="1">
                  <circle cx="12" cy="8" r="4" />
                  <path d="M4 21c0-4.4 3.6-8 8-8s8 3.6 8 8" />
                </svg>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontFamily: "'Lora', serif", fontSize: 22, fontWeight: 600, color: '#fff', marginBottom: 6 }}>James A. Warren Jr.</div>
                <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 10, letterSpacing: '3px', textTransform: 'uppercase', color: s.gold, marginBottom: 20 }}>Founding Attorney</div>
                <div style={{ width: 40, height: 1, background: s.gold, margin: '0 auto 20px' }} />
                <p style={{ fontFamily: "'Lora', serif", fontStyle: 'italic', fontSize: 15, color: '#a09888', lineHeight: 1.7 }}>
                  "When you hire me, you meet with me — not a paralegal, not a junior associate. You get 42 years of experience in your corner."
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* scroll indicator */}
        <div style={{ position: 'absolute', bottom: 32, left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
          <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 10, letterSpacing: '3px', textTransform: 'uppercase', color: 'rgba(255,255,255,.3)' }}>Scroll</div>
          <div style={{ width: 1, height: 48, background: 'linear-gradient(to bottom, rgba(201,168,76,.6), transparent)' }} />
        </div>
      </section>

      {/* STATS STRIP */}
      <div style={{ background: s.charcoal, borderBottom: `1px solid ${s.border}`, padding: '40px 40px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 24 }} className="stats-grid">
          {stats.map((st, i) => (
            <FadeIn key={st.label} delay={i * .1} style={{ textAlign: 'center' }}>
              <div style={{ fontFamily: "'Lora', serif", fontSize: 44, fontWeight: 600, color: s.gold, lineHeight: 1 }}>{st.num}</div>
              <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 10, letterSpacing: '2.5px', textTransform: 'uppercase', color: '#6a6058', marginTop: 10 }}>{st.label}</div>
            </FadeIn>
          ))}
        </div>
      </div>

      {/* ABOUT */}
      <section id="about" style={{ padding: '100px 40px', background: s.warmWhite }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }} className="hero-grid">
          <FadeIn>
            <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 11, letterSpacing: '4px', textTransform: 'uppercase', color: s.gold, marginBottom: 16 }}>Our Firm</div>
            <h2 style={{ fontFamily: "'Lora', serif", fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 600, color: s.charcoal, lineHeight: 1.1, marginBottom: 24 }}>
              You Meet Directly<br />with <em>James.</em>
            </h2>
            <div style={{ width: 48, height: 2, background: s.gold, marginBottom: 28 }} />
            <p style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 300, fontSize: 16, color: s.muted, lineHeight: 1.85, marginBottom: 20 }}>
              When you are starting the divorce process, struggling with a custody dispute, or dealing with any family law matter, you want to talk to someone who can actually give you answers.
            </p>
            <p style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 300, fontSize: 16, color: s.muted, lineHeight: 1.85, marginBottom: 36 }}>
              At Warren Family Law, you meet directly with Jim. His personal approach — and his record of resolving complex matters for Charlotte families — is what sets him apart from larger firms.
            </p>
            <a href={PHONE_HREF} className="btn-gold">Talk to Jim Today</a>
          </FadeIn>
          <FadeIn delay={.2}>
            <div style={{ background: s.cream, border: `1px solid rgba(201,168,76,.15)`, padding: '48px 40px' }}>
              {[
                { label: 'Founded', value: '1984' },
                { label: 'Location', value: 'Charlotte, NC' },
                { label: 'Practice Focus', value: 'Family Law' },
                { label: 'Approach', value: 'Direct — you work with James' },
                { label: 'Consultations', value: 'Free Initial Consultation' },
              ].map((item, i) => (
                <div key={item.label} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px 0', borderBottom: i < 4 ? `1px solid rgba(201,168,76,.12)` : 'none' }}>
                  <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 11, letterSpacing: '2px', textTransform: 'uppercase', color: s.muted }}>{item.label}</span>
                  <span style={{ fontFamily: "'Lora', serif", fontSize: 16, fontWeight: 500, color: s.charcoal }}>{item.value}</span>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* PRACTICE AREAS */}
      <section id="practice" style={{ padding: '100px 40px', background: s.cream }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <FadeIn style={{ textAlign: 'center', marginBottom: 60 }}>
            <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 11, letterSpacing: '4px', textTransform: 'uppercase', color: s.gold, marginBottom: 16 }}>How We Help</div>
            <h2 style={{ fontFamily: "'Lora', serif", fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 600, color: s.charcoal, lineHeight: 1.1 }}>Practice Areas</h2>
            <div style={{ width: 48, height: 2, background: s.gold, margin: '20px auto 0' }} />
          </FadeIn>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 2 }} className="areas-grid">
            {practiceAreas.map((area, i) => (
              <FadeIn key={area.title} delay={i * .1}>
                <div
                  onClick={() => setActiveArea(i)}
                  style={{
                    padding: '44px 40px', background: activeArea === i ? s.charcoal : 'white',
                    cursor: 'pointer', transition: 'all .25s', borderLeft: activeArea === i ? `4px solid ${s.gold}` : '4px solid transparent',
                  }}
                >
                  <div style={{ fontSize: 28, marginBottom: 16 }}>{area.icon}</div>
                  <h3 style={{ fontFamily: "'Lora', serif", fontSize: 22, fontWeight: 600, color: activeArea === i ? '#fff' : s.charcoal, marginBottom: 12, transition: 'color .25s' }}>{area.title}</h3>
                  <p style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 300, fontSize: 14, color: activeArea === i ? '#c0b8ac' : s.muted, lineHeight: 1.75, transition: 'color .25s' }}>
                    {activeArea === i ? area.detail : area.desc}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section style={{ padding: '100px 40px', background: s.warmWhite }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <FadeIn style={{ textAlign: 'center', marginBottom: 60 }}>
            <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 11, letterSpacing: '4px', textTransform: 'uppercase', color: s.gold, marginBottom: 16 }}>Client Stories</div>
            <h2 style={{ fontFamily: "'Lora', serif", fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 600, color: s.charcoal }}>What Our Clients Say</h2>
            <div style={{ width: 48, height: 2, background: s.gold, margin: '20px auto 0' }} />
          </FadeIn>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 24 }} className="testimonials-grid">
            {testimonials.map((t, i) => (
              <FadeIn key={i} delay={i * .15}>
                <div className="testimonial-card">
                  <div style={{ fontSize: 32, color: s.gold, fontFamily: "'Lora', serif", lineHeight: 1, marginBottom: 16 }}>"</div>
                  <p style={{ fontFamily: "'Lora', serif", fontStyle: 'italic', fontSize: 16, color: s.text, lineHeight: 1.8, marginBottom: 24 }}>{t.text}</p>
                  <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 11, letterSpacing: '2px', textTransform: 'uppercase', color: s.muted }}>{t.name}</div>
                  <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 11, color: s.gold, marginTop: 4 }}>{t.case}</div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" style={{ padding: '100px 40px', background: s.charcoal, textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 50% 0%, rgba(201,168,76,.08) 0%, transparent 65%)', pointerEvents: 'none' }} />
        <FadeIn>
          <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 11, letterSpacing: '4px', textTransform: 'uppercase', color: s.gold, marginBottom: 20 }}>Get in Touch</div>
          <h2 style={{ fontFamily: "'Lora', serif", fontSize: 'clamp(30px, 5vw, 54px)', fontWeight: 600, color: '#fff', marginBottom: 20 }}>
            Let's Talk About<br /><em style={{ color: s.gold }}>Your Situation.</em>
          </h2>
          <p style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 300, fontSize: 17, color: '#a09888', maxWidth: 500, margin: '0 auto 40px', lineHeight: 1.75 }}>
            Schedule a confidential consultation. No pressure — just straight answers from an attorney who has seen it all.
          </p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href={PHONE_HREF} className="btn-gold">📞 Call Now — {PHONE}</a>
            <a href="#contact" className="btn-outline">Send a Message</a>
          </div>
          <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 13, color: '#5a5248', marginTop: 32 }}>Charlotte, North Carolina &nbsp;·&nbsp; Serving Families Since 1984</p>
        </FadeIn>
      </section>

      {/* FOOTER */}
      <footer style={{ background: '#141414', padding: '40px', textAlign: 'center', borderTop: `1px solid ${s.border}` }}>
        <div style={{ fontFamily: "'Lora', serif", fontSize: 20, fontWeight: 600, color: '#fff', marginBottom: 8 }}>Warren <span style={{ color: s.gold }}>Family Law</span></div>
        <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 12, color: '#3a3530', marginTop: 16 }}>
          © 2026 Warren Family Law · Charlotte, NC · Demo concept prepared by GNL Digital Group
        </div>
      </footer>
    </div>
  );
}
