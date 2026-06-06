const GNL_PHONE = '704-594-5826';
const GNL_PHONE_HREF = 'tel:+17045945826';
const GNL_EMAIL = 'greg@gnldigitalgroup.com';
const WARREN_EMAIL = 'james@warrenfamilylaw.net';
const DEMO_PATH = '/warren-demo';

const palette = {
  navy: '#f7f3ec',     // page background (was dark) -> warm cream
  navy2: '#eef1e8',    // section background -> soft sage-tinted cream
  navy3: '#e8ede3',    // alt section -> sage mist
  sage: '#5f6f58',
  sage2: '#4c5a47',
  gold: '#b98e3f',
  gold2: '#a87f3d',
  cream: '#fdfbf7',
  text: '#3a3a37',     // primary text (was light) -> warm charcoal
  muted: '#6f6c66',    // secondary text -> warm gray
};

const deliverables = [
  {
    icon: '🌐',
    title: 'New Website',
    eyebrow: 'Modern, mobile-first, built to convert',
    desc: 'A professional family-law website with clear practice-area sections, strong consultation calls-to-action, and a polished design that gives visitors confidence before they call.',
  },
  {
    icon: '📍',
    title: 'Local SEO Foundation',
    eyebrow: 'Charlotte-area visibility',
    desc: 'Pages and structure focused on the local searches that matter, including family law, divorce, custody, support, alimony, property division, and related services.',
  },
  {
    icon: '⭐',
    title: 'Review Growth System',
    eyebrow: 'Build trust before the call',
    desc: 'A simple approval-based process to request reviews from past clients and make your reputation match the decades of experience behind the firm.',
  },
  {
    icon: '📧',
    title: 'Professional Email',
    eyebrow: WARREN_EMAIL,
    desc: 'Move away from consumer email and present a professional domain email. Mail can still be forwarded or configured so the day-to-day workflow stays familiar.',
  },
  {
    icon: '📋',
    title: 'Lead Routing',
    eyebrow: 'Secretary filters the noise',
    desc: 'Website forms can route to the right person first so real potential clients get attention and junk does not interrupt James unnecessarily.',
  },
  {
    icon: '📞',
    title: 'VoIP Phone System',
    eyebrow: 'Office workflow from anywhere',
    desc: 'A modern phone setup that lets calls be answered, screened, and transferred professionally whether the secretary is in the office or working remotely.',
  },
];

const proofPoints = [
  { value: '26+', label: 'Years Serving Local Businesses' },
  { value: '#1', label: 'Google Visibility Built for Our Own Brand' },
  { value: '10', label: 'Days to Build & Launch GNL' },
  { value: '1', label: 'Direct Point of Contact: Greg' },
];

const timeline = [
  ['1', 'Confirm scope', 'Review the agreement and confirm the services Warren Family Law wants to move forward with.'],
  ['2', 'Build & review', 'Create the website, contact paths, email setup, and local SEO structure, then review together before launch.'],
  ['3', 'Launch & improve', 'Publish the new presence, monitor inquiries, improve local visibility, and continue building reviews.'],
];

function Button({ href, children, variant = 'gold', target }) {
  const isGold = variant === 'gold';
  return (
    <a
      href={href}
      target={target}
      rel={target ? 'noopener noreferrer' : undefined}
      className="btn"
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10,
        padding: '15px 24px',
        borderRadius: 6,
        fontWeight: 800,
        letterSpacing: '.4px',
        textDecoration: 'none',
        textTransform: isGold ? 'uppercase' : 'none',
        color: isGold ? '#ffffff' : palette.sage2,
        background: isGold ? `linear-gradient(135deg, ${palette.sage}, ${palette.sage2})` : 'rgba(95,111,88,.06)',
        border: isGold ? '1px solid rgba(255,255,255,.18)' : `1px solid ${palette.sage}`,
        boxShadow: isGold ? '0 14px 30px rgba(95,111,88,.22)' : 'none',
      }}
    >
      {children}
    </a>
  );
}

function SectionHeader({ eyebrow, title, children }) {
  return (
    <div style={{ textAlign: 'center', maxWidth: 760, margin: '0 auto 42px' }}>
      <div style={{ color: palette.gold2, letterSpacing: '4px', textTransform: 'uppercase', fontSize: 12, fontWeight: 800, marginBottom: 12 }}>{eyebrow}</div>
      <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(34px, 4vw, 52px)', lineHeight: 1.05, color: palette.text, margin: 0, fontWeight: 700 }}>{title}</h2>
      {children && <p style={{ color: palette.muted, fontSize: 18, lineHeight: 1.7, margin: '18px auto 0' }}>{children}</p>}
    </div>
  );
}

export default function WarrenProposal() {
  return (
    <div style={{ minHeight: '100vh', background: palette.navy, color: palette.text, fontFamily: "'Source Sans 3', system-ui, -apple-system, Segoe UI, sans-serif" }}>
      <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600;700&family=Source+Sans+3:wght@400;500;600;700;800&display=swap" rel="stylesheet" />

      <style>{`
        * { box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        @keyframes fadeUp { from { opacity:0; transform:translateY(26px); } to { opacity:1; transform:translateY(0); } }
        .fade-up { animation: fadeUp .7s ease both; }
        .d2 { animation-delay: .12s; } .d3 { animation-delay: .24s; } .d4 { animation-delay: .36s; }
        .btn { transition: transform .18s ease, opacity .18s ease, box-shadow .18s ease; }
        .btn:hover { transform: translateY(-2px); opacity: .92; }
        .card { transition: transform .18s ease, border-color .18s ease, background .18s ease; }
        .card:hover { transform: translateY(-4px); border-color: rgba(185,142,63,.5) !important; box-shadow: 0 14px 36px rgba(95,111,88,.14) !important; }
        .hero-grid { grid-template-columns: minmax(0, 1fr) 420px; }
        @media (max-width: 900px) { .hero-grid { grid-template-columns: 1fr; } .desktop-only { display:none !important; } }
      `}</style>

      <div style={{ background: 'rgba(224,170,63,.12)', borderBottom: '1px solid rgba(224,170,63,.24)', padding: '11px 22px', textAlign: 'center', color: palette.gold2, letterSpacing: '3px', textTransform: 'uppercase', fontSize: 12, fontWeight: 800 }}>
        Private Proposal — Prepared Exclusively for Warren Family Law
      </div>

      <section style={{ position: 'relative', overflow: 'hidden', padding: '34px 24px 76px', borderBottom: '1px solid rgba(58,58,55,.10)' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at top left, rgba(185,142,63,.12), transparent 46%), radial-gradient(ellipse at 80% 0%, rgba(95,111,88,.10), transparent 40%)', pointerEvents: 'none' }} />

        <header style={{ position: 'relative', maxWidth: 1180, margin: '0 auto 74px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 20 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            <div style={{ width: 44, height: 44, border: `1px solid ${palette.gold2}`, display: 'grid', placeItems: 'center', fontFamily: "'Cormorant Garamond', serif", fontSize: 26, color: palette.text }}>G</div>
            <div>
              <div style={{ fontFamily: "'Cormorant Garamond', serif", color: palette.text, fontSize: 27, letterSpacing: '2px', lineHeight: 1 }}>GNL</div>
              <div style={{ color: palette.gold2, fontSize: 12, letterSpacing: '3px', textTransform: 'uppercase' }}>Digital Group</div>
            </div>
          </div>
          <div className="desktop-only" style={{ display: 'flex', alignItems: 'center', gap: 24, fontSize: 13, letterSpacing: '1px', textTransform: 'uppercase', color: palette.muted }}>
            <a href="#scope" style={{ color: 'inherit', textDecoration: 'none' }}>Scope</a>
            <a href="#demo" style={{ color: 'inherit', textDecoration: 'none' }}>Demo</a>
            <a href="#next" style={{ color: 'inherit', textDecoration: 'none' }}>Next Step</a>
          </div>
        </header>

        <div className="hero-grid" style={{ position: 'relative', maxWidth: 1180, margin: '0 auto', display: 'grid', gap: 44, alignItems: 'center' }}>
          <div>
            <div className="fade-up" style={{ color: palette.gold2, letterSpacing: '4px', textTransform: 'uppercase', fontSize: 13, fontWeight: 800, marginBottom: 18 }}>Website • SEO • Email • Phones</div>
            <h1 className="fade-up d2" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(44px, 6vw, 78px)', lineHeight: .98, color: palette.text, fontWeight: 700, margin: '0 0 22px' }}>
              A stronger digital presence for <span style={{ color: palette.gold2 }}>Warren Family Law.</span>
            </h1>
            <p className="fade-up d3" style={{ maxWidth: 650, color: palette.muted, fontSize: 19, lineHeight: 1.7, margin: '0 0 32px' }}>
              James, this is the practical plan we discussed: modernize the website, improve local search visibility, move to a professional email address, and simplify the phone workflow so the firm looks as established online as it is in person.
            </p>
            <div className="fade-up d4" style={{ display: 'flex', flexWrap: 'wrap', gap: 14 }}>
              <Button href={DEMO_PATH} target="_blank">👁 View Warren Demo Site</Button>
              <Button href={GNL_PHONE_HREF} variant="outline">📞 Call Greg — {GNL_PHONE}</Button>
            </div>
          </div>

          <aside className="fade-up d3" style={{ background: '#ffffff', border: '1px solid rgba(58,58,55,.12)', borderRadius: 18, padding: 24, boxShadow: '0 22px 60px rgba(95,111,88,.16)' }}>
            <div style={{ color: palette.gold2, fontSize: 12, letterSpacing: '3px', textTransform: 'uppercase', fontWeight: 800, marginBottom: 16 }}>Proposal Snapshot</div>
            {[
              ['New demo website', 'Ready for James to review'],
              ['Professional email', WARREN_EMAIL],
              ['Lead flow', 'Form inquiries routed properly'],
              ['Phone system', 'Modern VoIP option'],
            ].map(([label, value]) => (
              <div key={label} style={{ borderTop: '1px solid rgba(58,58,55,.10)', padding: '16px 0' }}>
                <div style={{ color: palette.text, fontWeight: 800, fontSize: 17 }}>{label}</div>
                <div style={{ color: palette.muted, marginTop: 4 }}>{value}</div>
              </div>
            ))}
          </aside>
        </div>
      </section>

      <section style={{ background: palette.cream, color: palette.text, padding: '34px 24px' }}>
        <div style={{ maxWidth: 1080, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(190px, 1fr))', gap: 18, textAlign: 'center' }}>
          {proofPoints.map((item) => (
            <div key={item.label} style={{ padding: '16px 10px' }}>
              <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 48, lineHeight: 1, fontWeight: 700, color: palette.gold }}>{item.value}</div>
              <div style={{ marginTop: 8, color: '#34445a', fontSize: 13, letterSpacing: '1.5px', textTransform: 'uppercase', fontWeight: 800 }}>{item.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section id="scope" style={{ padding: '82px 24px', maxWidth: 1180, margin: '0 auto' }}>
        <SectionHeader eyebrow="The Full Scope" title="What GNL builds for Warren Family Law">
          A focused package that improves the first impression, the local visibility, and the way new client inquiries move through the office.
        </SectionHeader>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(310px, 1fr))', gap: 20 }}>
          {deliverables.map((item) => (
            <div key={item.title} className="card" style={{ background: '#ffffff', border: '1px solid rgba(58,58,55,.12)', borderRadius: 14, padding: 28 }}>
              <div style={{ fontSize: 30, marginBottom: 14 }}>{item.icon}</div>
              <div style={{ color: palette.gold2, fontSize: 12, letterSpacing: '2px', textTransform: 'uppercase', fontWeight: 800, marginBottom: 8 }}>{item.eyebrow}</div>
              <h3 style={{ fontFamily: "'Cormorant Garamond', serif", color: palette.text, fontSize: 28, lineHeight: 1.1, margin: '0 0 12px', fontWeight: 700 }}>{item.title}</h3>
              <p style={{ color: palette.muted, lineHeight: 1.7, fontSize: 16, margin: 0 }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="demo" style={{ padding: '84px 24px', background: `linear-gradient(135deg, ${palette.navy2}, ${palette.navy3})`, color: palette.text, borderTop: '1px solid rgba(58,58,55,.10)', borderBottom: '1px solid rgba(58,58,55,.10)' }}>
        <div style={{ maxWidth: 1080, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 34, alignItems: 'center' }}>
          <div>
            <div style={{ color: palette.gold2, letterSpacing: '4px', textTransform: 'uppercase', fontSize: 12, fontWeight: 800, marginBottom: 14 }}>Proof of Concept</div>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", color: palette.text, fontSize: 'clamp(34px, 4.5vw, 56px)', lineHeight: 1.02, margin: '0 0 18px', fontWeight: 700 }}>The demo shows the direction before anyone commits.</h2>
            <p style={{ color: palette.muted, fontSize: 18, lineHeight: 1.72, margin: '0 0 28px' }}>
              The Warren demo page gives James a real feel for the final product: attorney-focused design, family-law service sections, consultation buttons, review trust signals, and mobile-first presentation.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 14 }}>
              <Button href={DEMO_PATH} target="_blank">Open Demo Site →</Button>
              <Button href="https://gnldigitalgroup.com" target="_blank" variant="outline">View GNL Digital Group →</Button>
            </div>
          </div>

          <div style={{ background: palette.cream, color: palette.text, borderRadius: 16, padding: 28, boxShadow: '0 20px 50px rgba(95,111,88,.16)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', gap: 14, borderBottom: '1px solid rgba(7,23,40,.15)', paddingBottom: 16, marginBottom: 18 }}>
              <div>
                <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 30, fontWeight: 700 }}>Warren Demo</div>
                <div style={{ color: '#556274' }}>Based on the proposed site direction</div>
              </div>
              <div style={{ width: 48, height: 48, border: `2px solid ${palette.gold}`, display: 'grid', placeItems: 'center', fontFamily: "'Cormorant Garamond', serif", fontSize: 27, fontWeight: 700 }}>W</div>
            </div>
            {['Strong hero message and consultation CTA', 'Family law service cards', 'Google review trust section', 'Mobile layout matching the mockup'].map((line) => (
              <div key={line} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '11px 0', color: '#243247', fontWeight: 700 }}>
                <span style={{ color: palette.gold, fontSize: 20 }}>✓</span>{line}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '82px 24px', maxWidth: 1080, margin: '0 auto' }}>
        <SectionHeader eyebrow="Simple Rollout" title="A clean path from review to launch" />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 20 }}>
          {timeline.map(([num, title, desc]) => (
            <div key={num} style={{ position: 'relative', background: '#ffffff', border: '1px solid rgba(58,58,55,.12)', borderRadius: 14, padding: 28 }}>
              <div style={{ width: 46, height: 46, borderRadius: 999, background: 'rgba(224,170,63,.16)', color: palette.gold2, display: 'grid', placeItems: 'center', fontWeight: 900, fontSize: 20, marginBottom: 18 }}>{num}</div>
              <h3 style={{ color: palette.text, fontSize: 23, margin: '0 0 10px', fontWeight: 800 }}>{title}</h3>
              <p style={{ color: palette.muted, lineHeight: 1.7, margin: 0 }}>{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="next" style={{ padding: '82px 24px', background: palette.cream, color: palette.text }}>
        <div style={{ maxWidth: 820, margin: '0 auto', textAlign: 'center' }}>
          <div style={{ color: palette.gold, letterSpacing: '4px', textTransform: 'uppercase', fontSize: 12, fontWeight: 900, marginBottom: 14 }}>Next Step</div>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(36px, 5vw, 58px)', lineHeight: 1.02, margin: '0 0 18px', fontWeight: 700 }}>Review the agreement and the demo.</h2>
          <p style={{ color: '#48596e', fontSize: 18, lineHeight: 1.72, margin: '0 auto 30px', maxWidth: 650 }}>
            No pressure and no complicated process. James can review the agreement Greg left behind, open the demo site, and call or email Greg directly with any questions.
          </p>
          <p style={{ color: '#314258', fontWeight: 900, margin: '0 0 30px' }}>Month-to-month. No long-term lock-in. Practical support from the person doing the work.</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 14, justifyContent: 'center' }}>
            <Button href={GNL_PHONE_HREF}>📞 Call Greg — {GNL_PHONE}</Button>
            <Button href={`mailto:${GNL_EMAIL}`} variant="outline">{GNL_EMAIL}</Button>
          </div>
        </div>
      </section>

      <footer style={{ padding: '28px 24px', color: '#64758a', textAlign: 'center', fontSize: 13, borderTop: '1px solid rgba(58,58,55,.10)' }}>
        © 2026 GNL Digital Group — Private proposal for Warren Family Law. Not for public distribution.
      </footer>
    </div>
  );
}
