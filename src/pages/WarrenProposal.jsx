// WarrenProposal.jsx &mdash; GNL Digital Group &mdash; Warren Family Law proposal
// build: 2026-07-10 v12 [OK]  (resynced to v4 agreement: 3-mo minimum then month-to-month,
//   tiered $3,328/$3,500, phones-with-early-cancel, pay link removed, unconditional card bonus,
//   corrected JotForm Sign link; clarified Jim/Candace control booking availability; v9: emoji now use JS \\u escapes (render correctly AND stay pure ASCII); &mdash; kept only in JSX text;
//   v10: added "What This Looks Like Day To Day" phone-scenarios card &mdash; Candace-remote, transfer-to-cell, hold-and-reach, filtered cell (approved callers ring cell, rest to office), easy add-a-contact)
const GNL_PHONE = '704-594-5826';
const GNL_PHONE_HREF = 'tel:+17045945826';
const GNL_EMAIL = 'greg@gnldigitalgroup.com';
const WARREN_EMAIL = 'james@warrenfamilylaw.net';
const DEMO_PATH = '/warren-demo';
const WARREN_LOGO = '/warren-logo-full.png';
const WARREN_CARD = '/warren-business-card.png';
const WARREN_CARD_FRONT = '/warren-card-front.png';
const WARREN_CARD_BACK = '/warren-card-back.png';


// -- PER-CLIENT SETTINGS -- edit these for each client, then republish --
// 1) SIGN_PDF_URL: path to the printable contract PDF (uploaded to /public).
// 2) SIGN_DIGITAL_URL: paste the Jotform Sign signing link (James signs, then you countersign).
// 3) PAY_URL:  paste the hosted payment-page link from your merchant account.
// 4) MONTHLY_FEE: the flat monthly retainer shown on the Pay button.
// 5) CONSULT_URL: paste the paid-booking link (Calendly/Acuity/Cal.com) that
//    collects the consult fee AND creates the Zoom link automatically.
// 6) CONSULT_FEE: the consultation price shown on the page.
const SIGN_PDF_URL = '/GNL-Agreement-Warren.pdf';
const SIGN_DIGITAL_URL = 'https://www.jotform.com/sign/261899098185073/invite/01kx502vsa2eae614bb6bc89b2';
const MAIL_TO_ADDRESS = '53 Cabarrus Ave W, Concord, NC 28025';
const CHECK_PAYABLE_TO = 'GNL Digital Group';
const PAY_URL = 'https://securelink-prod.valorpaytech.com:4430/?redirect=1&uid=88352a64-75f1-11f1-8d9b-128462456e49';
const MONTHLY_FEE = '$3,328';
const STEPUP_FEE = '$3,500';
const CONSULT_URL = 'https://calendly.com/greg-gnldigitalgroup/warren-family-law-consult';
const CONSULT_FEE = '$250';

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
    icon: '\u{1F310}',
    title: 'New Website',
    eyebrow: 'Modern, mobile-first, built to convert',
    desc: 'A professional family-law website with clear practice-area sections, strong consultation calls-to-action, and a polished design that gives visitors confidence before they call.',
  },
  {
    icon: '\u{1F4C5}',
    title: 'Paid Consultation Booking',
    eyebrow: 'Zoom consults, paid up front',
    desc: 'A booking link clients use to schedule a Zoom consultation and pay the consultation fee at the same time. The meeting link is created automatically, and the fee is collected before the call \u2014 no chasing payment, no unpaid no-shows.',
  },
  {
    icon: '\u{1F4CD}',
    title: 'Local SEO Foundation',
    eyebrow: 'Charlotte-area visibility',
    desc: 'Pages and structure focused on the local searches that matter, including family law, divorce, custody, support, alimony, property division, and related services.',
  },
  {
    icon: '\u2B50',
    title: 'Review Growth System',
    eyebrow: 'Build trust before the call',
    desc: 'A simple approval-based process to request reviews from past clients and make your reputation match the decades of experience behind the firm.',
  },
  {
    icon: '\u{1F4C8}',
    title: 'Your Google Dashboard',
    eyebrow: 'Watch your progress in real time',
    desc: 'Your own live view of your Google Business Profile \u2014 calls, clicks, searches, and direction requests, tracked over time. Full transparency: you see exactly how your visibility grows month over month, on your own screen, whenever you want.',
  },
  {
    icon: '\u{1F4E7}',
    title: 'Professional Email',
    eyebrow: WARREN_EMAIL,
    desc: 'Move away from consumer email and present a professional domain email. Mail can still be forwarded or configured so the day-to-day workflow stays familiar.',
  },
  {
    icon: '\u{1F4CB}',
    title: 'Lead Routing',
    eyebrow: 'Secretary filters the noise',
    desc: 'Website forms can route to the right person first so real potential clients get attention and junk does not interrupt James unnecessarily.',
  },
  {
    icon: '\u{1F4DE}',
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

function SectionHeader({ eyebrow, title, children, wide }) {
  return (
    <div style={{ textAlign: 'center', maxWidth: wide ? 1000 : 760, margin: '0 auto 42px' }}>
      <div style={{ color: palette.gold2, letterSpacing: '4px', textTransform: 'uppercase', fontSize: 12, fontWeight: 800, marginBottom: 12 }}>{eyebrow}</div>
      <h2 className={wide ? 'sh-nowrap' : undefined} style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(34px, 4vw, 52px)', lineHeight: 1.05, color: palette.text, margin: 0, fontWeight: 700 }}>{title}</h2>
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
        @media (min-width: 760px) { .sh-nowrap { white-space: nowrap; } }
      `}</style>

      <div style={{ background: 'rgba(224,170,63,.12)', borderBottom: '1px solid rgba(224,170,63,.24)', padding: '11px 22px', textAlign: 'center', color: palette.gold2, letterSpacing: '3px', textTransform: 'uppercase', fontSize: 12, fontWeight: 800 }}>
        Private Proposal &mdash; Prepared Exclusively for Warren Family Law
      </div>

      <section style={{ position: 'relative', overflow: 'hidden', padding: '34px 24px 76px', borderBottom: '1px solid rgba(58,58,55,.10)' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at top left, rgba(185,142,63,.12), transparent 46%), radial-gradient(ellipse at 80% 0%, rgba(95,111,88,.10), transparent 40%)', pointerEvents: 'none' }} />

        <header style={{ position: 'relative', maxWidth: 1180, margin: '0 auto 74px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 20 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <div style={{ background: palette.sage, borderRadius: 14, padding: '12px 16px', display: 'inline-flex', alignItems: 'center', boxShadow: '0 10px 30px rgba(95,111,88,.22)' }}>
              <img src="/gnl-logo-sig.png" alt="GNL Digital Group"
                   style={{ height: 50, width: 'auto', display: 'block' }} />
            </div>
            <div style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 700, fontSize: 26, color: palette.text, lineHeight: 1 }}>
              GNL <span style={{ color: palette.gold2 }}>Digital Group</span>
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
            <div className="fade-up" style={{ color: palette.gold2, letterSpacing: '4px', textTransform: 'uppercase', fontSize: 13, fontWeight: 800, marginBottom: 18 }}>Website &bull; SEO &bull; Email &bull; Phones</div>
            <h1 className="fade-up d2" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(44px, 6vw, 78px)', lineHeight: .98, color: palette.text, fontWeight: 700, margin: '0 0 22px' }}>
              A stronger digital presence for <span style={{ color: palette.gold2 }}>Warren Family Law.</span>
            </h1>
            <p className="fade-up d3" style={{ maxWidth: 650, color: palette.muted, fontSize: 19, lineHeight: 1.7, margin: '0 0 32px' }}>
              James, this is the practical plan we discussed: modernize the website, improve local search visibility, move to a professional email address, and simplify the phone workflow so the firm looks as established online as it is in person.
            </p>
            <div className="fade-up d4" style={{ display: 'flex', flexWrap: 'wrap', gap: 14 }}>
              <Button href={DEMO_PATH} target="_blank">&#128065; View Warren Demo Site</Button>
              <Button href={GNL_PHONE_HREF} variant="outline">&#128222; Call Greg &mdash; {GNL_PHONE}</Button>
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
        <SectionHeader eyebrow="The Full Scope" title="What GNL builds for Warren Family Law" wide>
          A focused package that improves the first impression, the local visibility, and the way new client inquiries move through the office.
        </SectionHeader>

        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 20 }}>
          {deliverables.map((item) => (
            <div key={item.title} className="card" style={{ flex: '0 1 340px', maxWidth: 360, background: '#ffffff', border: '1px solid rgba(58,58,55,.12)', borderRadius: 14, padding: 28 }}>
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
              <Button href={DEMO_PATH} target="_blank">Open Demo Site &#8594;</Button>
              <Button href="https://gnldigitalgroup.com" target="_blank" variant="outline">View GNL Digital Group &#8594;</Button>
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
                <span style={{ color: palette.gold, fontSize: 20 }}>&#10003;</span>{line}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '72px 24px', maxWidth: 920, margin: '0 auto', textAlign: 'center' }}>
        <div style={{ color: palette.gold2, letterSpacing: '4px', textTransform: 'uppercase', fontSize: 12, fontWeight: 800, marginBottom: 18 }}>A Note on the Logo</div>
        <img src={WARREN_LOGO} alt="Warren Family Law logo concept" style={{ width: 'min(420px, 80%)', height: 'auto', borderRadius: 16, margin: '0 auto 26px', display: 'block', boxShadow: '0 16px 40px rgba(95,111,88,.18)' }} />
        <p style={{ color: palette.muted, fontSize: 18, lineHeight: 1.72, maxWidth: 680, margin: '0 auto' }}>
          The logo shown throughout the demo is a concept Greg designed specifically for Warren Family Law. If you like it, it&rsquo;s yours &mdash; included at no extra charge. If you&rsquo;d prefer to keep your current logo, we&rsquo;ll use that instead. And if you like the direction but want changes, we&rsquo;ll refine it until it&rsquo;s right. Either way, <strong style={{ color: palette.text }}>you approve every design before anything goes live.</strong>
        </p>
      </section>

      <section style={{ padding: '72px 24px', maxWidth: 920, margin: '0 auto', textAlign: 'center' }}>
        <div style={{ color: palette.gold2, letterSpacing: '4px', textTransform: 'uppercase', fontSize: 12, fontWeight: 800, marginBottom: 18 }}>Everything Here Is Your Call</div>
        <p style={{ color: palette.muted, fontSize: 18, lineHeight: 1.72, maxWidth: 720, margin: '0 auto' }}>
          This proposal lays out everything GNL can offer Warren Family Law &mdash; but you decide what you actually want. The <strong style={{ color: palette.text }}>paid Zoom consultations are completely optional</strong>; they&rsquo;re there if you&rsquo;d ever like to meet a prospective client by video, but you&rsquo;re never required to use them. The same goes for the VoIP phones, the review program, and everything else here &mdash; all optional, all built around how you want to run your practice. <strong style={{ color: palette.text }}>Nothing gets added, changed, or charged without your approval first.</strong> You&rsquo;re in the driver&rsquo;s seat on every piece of this.
        </p>
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

      <section id="booking" style={{ padding: '82px 24px', background: palette.cream, color: palette.text, borderTop: '1px solid rgba(58,58,55,.10)' }}>
        <div style={{ maxWidth: 1080, margin: '0 auto' }}>
          <SectionHeader eyebrow="Your Consultation Booking, Explained" title="How clients book and pay &mdash; in plain English">
            This is the paid consultation system we set up for you. You won&rsquo;t touch a single setting &mdash; we build it, connect it to your calendar and Zoom, and show you and Candace exactly how to use it.
          </SectionHeader>

          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 20 }}>
            <div className="card" style={{ flex: '0 1 320px', maxWidth: 340, background: '#ffffff', border: '1px solid rgba(58,58,55,.12)', borderRadius: 14, padding: 28 }}>
              <div style={{ fontSize: 30, marginBottom: 14 }}>{'\u{1F4C5}'}</div>
              <h3 style={{ fontFamily: "'Cormorant Garamond', serif", color: palette.text, fontSize: 26, lineHeight: 1.1, margin: '0 0 12px', fontWeight: 700 }}>What your clients do</h3>
              <p style={{ color: palette.muted, lineHeight: 1.7, fontSize: 16, margin: 0 }}>
                A potential client clicks &ldquo;Schedule a Consultation&rdquo; on your website. They see the time slots you and Candace have opened, pick one that works, and pay the <strong style={{ color: palette.text }}>{CONSULT_FEE} consultation fee</strong> right then. A Zoom link is created automatically and emailed to both of you. No phone tag, and no unpaid no-shows &mdash; the fee is collected before the call.
              </p>
            </div>

            <div className="card" style={{ flex: '0 1 320px', maxWidth: 340, background: '#ffffff', border: '1px solid rgba(58,58,55,.12)', borderRadius: 14, padding: 28 }}>
              <div style={{ fontSize: 30, marginBottom: 14 }}>{'\u{1F512}'}</div>
              <h3 style={{ fontFamily: "'Cormorant Garamond', serif", color: palette.text, fontSize: 26, lineHeight: 1.1, margin: '0 0 12px', fontWeight: 700 }}>Your calendar stays private</h3>
              <p style={{ color: palette.muted, lineHeight: 1.7, fontSize: 16, margin: 0 }}>
                This is important: the booking page shows <strong style={{ color: palette.text }}>only the times you&rsquo;ve marked as available</strong>. Clients never see who else you&rsquo;re meeting, when, or any other detail from your calendar &mdash; just the open windows. Your other appointments stay completely private.
              </p>
            </div>

            <div className="card" style={{ flex: '0 1 320px', maxWidth: 340, background: '#ffffff', border: '1px solid rgba(58,58,55,.12)', borderRadius: 14, padding: 28 }}>
              <div style={{ fontSize: 30, marginBottom: 14 }}>{'\u{1F464}'}</div>
              <h3 style={{ fontFamily: "'Cormorant Garamond', serif", color: palette.text, fontSize: 26, lineHeight: 1.1, margin: '0 0 12px', fontWeight: 700 }}>You and Candace each get a login</h3>
              <p style={{ color: palette.muted, lineHeight: 1.7, fontSize: 16, margin: 0 }}>
                You get your own login. <strong style={{ color: palette.text }}>Candace gets her own separate login</strong> &mdash; no shared passwords. From home, she can view the calendar, book, reschedule, and cancel consultations on your behalf. You both always see the same up-to-date schedule.
              </p>
            </div>

            <div className="card" style={{ flex: '0 1 320px', maxWidth: 340, background: '#ffffff', border: '1px solid rgba(58,58,55,.12)', borderRadius: 14, padding: 28 }}>
              <div style={{ fontSize: 30, marginBottom: 14 }}>{'\u{1F4F1}'}</div>
              <h3 style={{ fontFamily: "'Cormorant Garamond', serif", color: palette.text, fontSize: 26, lineHeight: 1.1, margin: '0 0 12px', fontWeight: 700 }}>Manage it from your phone</h3>
              <p style={{ color: palette.muted, lineHeight: 1.7, fontSize: 16, margin: 0 }}>
                There&rsquo;s a free app for both <strong style={{ color: palette.text }}>iPhone and Android</strong>. You can see your day, get a notification the moment a consultation is booked, join the Zoom call, or reschedule &mdash; all with a couple of taps, whether you&rsquo;re at the office, at home, or between hearings.
              </p>
            </div>

            <div className="card" style={{ flex: '0 1 320px', maxWidth: 340, background: '#ffffff', border: '1px solid rgba(58,58,55,.12)', borderRadius: 14, padding: 28 }}>
              <div style={{ fontSize: 30, marginBottom: 14 }}>{'\u{1F6E0}'}</div>
              <h3 style={{ fontFamily: "'Cormorant Garamond', serif", color: palette.text, fontSize: 26, lineHeight: 1.1, margin: '0 0 12px', fontWeight: 700 }}>You stay in control</h3>
              <p style={{ color: palette.muted, lineHeight: 1.7, fontSize: 16, margin: 0 }}>
                Clients can only pick from the slots <strong style={{ color: palette.text }}>you open</strong> &mdash; they can&rsquo;t create their own Zoom meeting or set their own time. The <strong style={{ color: palette.text }}>{CONSULT_FEE} consultation fee is collected up front</strong> before any consultation is booked, the same as you charge now &mdash; and it works for both Zoom and in-person appointments. You set your hours; the system handles the rest.
              </p>
            </div>
          </div>

          <p style={{ textAlign: 'center', color: palette.muted, fontSize: 15, lineHeight: 1.7, margin: '34px auto 0', maxWidth: 680 }}>
            The booking tool is called <strong style={{ color: palette.text }}>Calendly</strong>. It&rsquo;s widely used, and we handle the entire setup for you &mdash; the calendar connection, the Zoom link, the payment collection, and Candace&rsquo;s login. There&rsquo;s a small monthly cost for the logins that&rsquo;s built into your service.
          </p>

          <div style={{ marginTop: 40, background: '#ffffff', border: '1px solid rgba(58,58,55,.12)', borderRadius: 16, padding: '32px 30px', maxWidth: 880, marginLeft: 'auto', marginRight: 'auto' }}>
            <h3 style={{ fontFamily: "'Cormorant Garamond', serif", color: palette.text, fontSize: 28, margin: '0 0 20px', fontWeight: 700, textAlign: 'center' }}>Step by step, start to finish</h3>
            {[
              ['A client finds you online', 'Someone searching for a family-law attorney lands on your new website and clicks \u201CSchedule a Consultation.\u201D'],
              ['They pick a time that works', 'They see only the days and time blocks you\u2019ve made available. Your other commitments stay private \u2014 they never see them. They choose an open slot.'],
              ['They pay the fee up front', 'Before the booking is confirmed, they pay the consultation fee. No fee, no booking \u2014 which means no unpaid no-shows and no awkward conversations about payment.'],
              ['Everything is created automatically', 'The Zoom meeting link is generated and emailed to both of you. The appointment lands on your calendar \u2014 and on Candace\u2019s, since she shares the view. Reminder emails go out on their own.'],
              ['You or Candace manage it from anywhere', 'From the office, from home, or from your phone, either of you can reschedule, cancel, or adjust availability. The calendar always stays in sync.'],
            ].map(([title, desc], i) => (
              <div key={title} style={{ display: 'flex', gap: 18, alignItems: 'flex-start', padding: '14px 0', borderTop: i === 0 ? 'none' : '1px solid rgba(58,58,55,.10)' }}>
                <div style={{ flexShrink: 0, width: 36, height: 36, borderRadius: 999, background: 'rgba(224,170,63,.16)', color: palette.gold2, display: 'grid', placeItems: 'center', fontWeight: 900, fontSize: 16 }}>{i + 1}</div>
                <div>
                  <div style={{ color: palette.text, fontWeight: 800, fontSize: 17, marginBottom: 4 }}>{title}</div>
                  <p style={{ color: palette.muted, lineHeight: 1.6, fontSize: 15, margin: 0 }} dangerouslySetInnerHTML={{ __html: desc }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="cards" style={{ padding: '72px 24px', background: `linear-gradient(135deg, ${palette.navy2}, ${palette.navy3})`, color: palette.text, borderTop: '1px solid rgba(58,58,55,.10)', borderBottom: '1px solid rgba(58,58,55,.10)' }}>
        <div style={{ maxWidth: 920, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 34 }}>
            <div style={{ color: palette.gold2, letterSpacing: '3px', textTransform: 'uppercase', fontSize: 12, fontWeight: 900, marginBottom: 10 }}>A Signing Thank-You</div>
            <h3 style={{ fontFamily: "'Cormorant Garamond', serif", color: palette.text, fontSize: 'clamp(28px, 3.5vw, 40px)', lineHeight: 1.08, margin: '0 auto 14px', fontWeight: 700, maxWidth: 620 }}>1,000 custom QR business cards &mdash; yours to keep.</h3>
            <p style={{ color: palette.muted, fontSize: 17, lineHeight: 1.7, margin: '0 auto', maxWidth: 660 }}>
              As soon as you sign, Greg submits your order for <strong style={{ color: palette.text }}>1,000 premium business cards</strong>, each with your firm&rsquo;s branding and a <strong style={{ color: palette.text }}>QR code that links straight to your website</strong>. Hand one to a client and they can open your site &mdash; and book a consultation &mdash; with a single tap. They&rsquo;re printed and shipped directly to your office, and they&rsquo;re <strong style={{ color: palette.text }}>yours to keep, no matter how long we work together</strong>.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 26, maxWidth: 820, margin: '0 auto' }}>
            <div style={{ textAlign: 'center' }}>
              <img src={WARREN_CARD_FRONT} alt="Warren Family Law business card &mdash; front" style={{ width: '100%', height: 'auto', borderRadius: 14, boxShadow: '0 16px 40px rgba(95,111,88,.20)' }} />
              <div style={{ color: palette.muted, fontSize: 13, fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase', marginTop: 10 }}>Front</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <img src={WARREN_CARD_BACK} alt="Warren Family Law business card &mdash; back" style={{ width: '100%', height: 'auto', borderRadius: 14, boxShadow: '0 16px 40px rgba(95,111,88,.20)' }} />
              <div style={{ color: palette.muted, fontSize: 13, fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase', marginTop: 10 }}>Back</div>
            </div>
          </div>
        </div>
      </section>

      <section id="official" style={{ padding: '82px 24px', background: `linear-gradient(135deg, ${palette.sage}, ${palette.sage2})`, color: '#fff' }}>
        <div style={{ maxWidth: 920, margin: '0 auto', textAlign: 'center' }}>
          <div style={{ color: '#f0ead9', letterSpacing: '4px', textTransform: 'uppercase', fontSize: 12, fontWeight: 900, marginBottom: 14 }}>Ready When You Are</div>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(34px, 4.5vw, 54px)', lineHeight: 1.04, margin: '0 0 16px', fontWeight: 700, color: '#fff' }}>Make it official.</h2>
          <p style={{ color: 'rgba(255,255,255,.9)', fontSize: 18, lineHeight: 1.7, margin: '0 auto 28px', maxWidth: 640 }}>
            Two simple steps, whenever you're ready: review and sign the agreement, then your first payment comes due only once your website is live. One flat monthly fee &mdash; everything included.
          </p>

          <div style={{ maxWidth: 680, margin: '0 auto 36px', background: 'rgba(255,255,255,.12)', border: `1px solid ${palette.gold}`, borderRadius: 14, padding: '22px 26px', textAlign: 'left' }}>
            <div style={{ color: palette.gold, letterSpacing: '2px', textTransform: 'uppercase', fontSize: 12, fontWeight: 900, marginBottom: 12 }}>Your Terms, In Writing</div>
            <div style={{ display: 'grid', gap: 10, color: 'rgba(255,255,255,.92)', fontSize: 15.5, lineHeight: 1.6 }}>
              <div>&bull; <strong style={{ color: '#fff' }}>{MONTHLY_FEE}/month</strong> for your first three months.</div>
              <div>&bull; <strong style={{ color: '#fff' }}>{STEPUP_FEE}/month</strong> after that, on a month-to-month basis.</div>
              <div>&bull; <strong style={{ color: '#fff' }}>Three-month minimum</strong>, then month-to-month &mdash; cancel anytime after with 30 days&rsquo; notice.</div>
              <div>&bull; <strong style={{ color: '#fff' }}>Nothing due at signing.</strong> Your first payment is due only once the site is live, due on receipt.</div>
              <div>&bull; <strong style={{ color: '#fff' }}>No upfront build fee</strong> &mdash; the $5,000 initial build has been knocked off in full.</div>
              <div>&bull; <strong style={{ color: '#fff' }}>Two Grandstream GRP2636 phones &amp; complimentary VoIP</strong> included while active &mdash; the phones are yours to keep after your first year.</div>
            </div>
          </div>

          <div style={{ maxWidth: 680, margin: '0 auto 36px', background: 'rgba(255,255,255,.12)', border: `1px solid ${palette.gold}`, borderRadius: 14, padding: '22px 26px', textAlign: 'left', display: 'flex', gap: 20, alignItems: 'center', flexWrap: 'wrap' }}>
            <img src="/grandstream-grp2636.png" alt="Grandstream GRP2636 IP desk phone"
                 style={{ width: 150, maxWidth: '100%', borderRadius: 10, background: '#fff', padding: 8, flexShrink: 0 }} />
            <div style={{ flex: 1, minWidth: 240 }}>
              <div style={{ color: palette.gold, letterSpacing: '2px', textTransform: 'uppercase', fontSize: 12, fontWeight: 900, marginBottom: 6 }}>Included With Your Agreement</div>
              <div style={{ color: '#fff', fontWeight: 800, fontSize: 17, marginBottom: 6 }}>Your phones &amp; phone service &mdash; included while we work together.</div>
              <p style={{ color: 'rgba(255,255,255,.85)', fontSize: 14, lineHeight: 1.6, margin: 0 }}>
                Your agreement includes <strong style={{ color: '#fff' }}>two Grandstream GRP2636 IP phones</strong> (one for the office, one for Candace working from home), plus <strong style={{ color: '#fff' }}>complimentary VoIP phone service while your agreement is active</strong> &mdash; no separate phone bill to worry about. Professional setup is included. Stay with us through your first year and <strong style={{ color: '#fff' }}>the two phones are yours to keep, free and clear</strong>. If you decide to part ways before the first year is up, you simply cover the two phones ($479.98) and take over the phone account from there.
              </p>
            </div>
          </div>

          <div style={{ maxWidth: 680, margin: '0 auto 36px', background: 'rgba(255,255,255,.12)', border: `1px solid ${palette.gold}`, borderRadius: 14, padding: '22px 26px', textAlign: 'left' }}>
            <div style={{ color: palette.gold, letterSpacing: '2px', textTransform: 'uppercase', fontSize: 12, fontWeight: 900, marginBottom: 6 }}>What This Looks Like Day To Day</div>
            <div style={{ color: '#fff', fontWeight: 800, fontSize: 17, marginBottom: 14 }}>A phone system that works the way a law firm actually runs.</div>
            <div style={{ display: 'grid', gap: 14, color: 'rgba(255,255,255,.9)', fontSize: 14.5, lineHeight: 1.6 }}>
              <div>&bull; <strong style={{ color: '#fff' }}>Candace answers from home exactly like she&rsquo;s at the office.</strong> Calls to the firm ring her phone wherever she is. Callers never know the difference, and there&rsquo;s no separate cell number to hand out.</div>
              <div>&bull; <strong style={{ color: '#fff' }}>&ldquo;Let me put you through to Mr. Warren.&rdquo;</strong> Candace can transfer a caller straight to you with one button &mdash; to your desk, or to your cell when you&rsquo;re at the courthouse or between hearings. You pick up as if you were sitting at your desk.</div>
              <div>&bull; <strong style={{ color: '#fff' }}>&ldquo;Hold one moment while I reach him.&rdquo;</strong> A client&rsquo;s on the line with a question only you can answer. Candace puts them on a brief hold, reaches you on your cell, gets the answer, and comes back &mdash; no callbacks, no phone tag.</div>
              <div>&bull; <strong style={{ color: '#fff' }}>Your cell rings only for who you want.</strong> The callers you approve reach your cell directly. Everyone else is routed to the office, so Candace catches them &mdash; you&rsquo;re not interrupted in a hearing by calls that don&rsquo;t need you, and nothing slips through.</div>
              <div>&bull; <strong style={{ color: '#fff' }}>Adding someone is as easy as a text.</strong> Want a client or referring attorney to reach your cell directly? Send Greg a quick message with the name and number and it&rsquo;s done &mdash; no apps to learn, no settings to dig through.</div>
            </div>
          </div>

          <div style={{ maxWidth: 480, margin: '0 auto', textAlign: 'left' }}>
            {/* Sign card */}
            <div style={{ background: '#fff', borderRadius: 16, padding: 28, boxShadow: '0 20px 50px rgba(0,0,0,.18)' }}>
              <h3 style={{ fontFamily: "'Cormorant Garamond', serif", color: palette.text, fontSize: 26, margin: '0 0 10px', fontWeight: 700 }}>Sign the Agreement</h3>
              <p style={{ color: palette.muted, lineHeight: 1.6, fontSize: 15, margin: '0 0 16px' }}>
                Two easy ways to sign &mdash; whichever you prefer:
              </p>
              <a className="btn" href={SIGN_PDF_URL} target="_blank" rel="noopener noreferrer"
                 style={{ display: 'block', textAlign: 'center', padding: '13px 18px', borderRadius: 8, fontWeight: 800, textDecoration: 'none', color: palette.sage2, background: 'rgba(95,111,88,.08)', border: `1px solid ${palette.sage}`, marginBottom: 10 }}>
                Print &amp; Mail &rarr;
              </a>
              <a className="btn" href={SIGN_DIGITAL_URL} target="_blank" rel="noopener noreferrer"
                 style={{ display: 'block', textAlign: 'center', padding: '13px 18px', borderRadius: 8, fontWeight: 800, textDecoration: 'none', color: '#fff', background: `linear-gradient(135deg, ${palette.sage}, ${palette.sage2})` }}>
                Sign Digitally &rarr;
              </a>
              <p style={{ color: palette.muted, lineHeight: 1.6, fontSize: 13, margin: '14px 0 0' }}>
                <strong style={{ color: palette.text }}>Print &amp; Mail:</strong> open the agreement, print it, sign, and mail it to {MAIL_TO_ADDRESS}.<br /><br />
                <strong style={{ color: palette.text }}>Sign Digitally:</strong> review and sign securely online in a few clicks. Once signed, Greg countersigns and you&rsquo;ll both receive a completed copy by email.
              </p>
              <div style={{ marginTop: 18, paddingTop: 16, borderTop: '1px solid rgba(58,58,55,.12)', color: palette.muted, lineHeight: 1.6, fontSize: 13 }}>
                <strong style={{ color: palette.text }}>Billing:</strong> nothing is due the day you sign. Your first invoice ({MONTHLY_FEE}) is sent once your website is live and approved, and Greg will send you a secure payment link at that time. Each month after bills the same way. Paying by debit card avoids the small card-processing fee.
              </div>
            </div>
          </div>

          <div style={{ marginTop: 26, padding: '20px 24px', background: 'rgba(255,255,255,.12)', border: '1px solid rgba(255,255,255,.25)', borderRadius: 14, maxWidth: 620, marginLeft: 'auto', marginRight: 'auto' }}>
            <div style={{ fontWeight: 800, fontSize: 16, marginBottom: 6 }}>Preview the paid consultation booking</div>
            <p style={{ color: 'rgba(255,255,255,.9)', fontSize: 14, lineHeight: 1.6, margin: '0 0 14px' }}>
              Take a look at the booking experience your clients would use &mdash; they pick from the times you&rsquo;ve made available, pay the {CONSULT_FEE} consultation fee, and the Zoom link is created automatically. You and Candace decide exactly which days and time slots are open for booking &mdash; clients only ever see the slots you&rsquo;ve opened, and the rest of your calendar stays private.
            </p>
            <a className="btn" href={CONSULT_URL} target="_blank" rel="noopener noreferrer"
               style={{ display: 'inline-block', padding: '13px 26px', borderRadius: 8, fontWeight: 800, textDecoration: 'none', color: '#fff', background: 'rgba(255,255,255,.16)', border: '1px solid rgba(255,255,255,.5)' }}>
              Preview the Booking Experience &rarr;
            </a>
            <div style={{ color: 'rgba(255,255,255,.65)', fontSize: 12, marginTop: 10 }}>
              Preview only &mdash; this is a sample setup, not a live charge.
            </div>
          </div>

          <p style={{ color: 'rgba(255,255,255,.8)', fontSize: 14, marginTop: 26 }}>
            Questions first? Call Greg at {GNL_PHONE} &mdash; no rush, no pressure.
          </p>
        </div>
      </section>

      <section id="next" style={{ padding: '82px 24px', background: palette.cream, color: palette.text }}>
        <div style={{ maxWidth: 820, margin: '0 auto', textAlign: 'center' }}>
          <div style={{ color: palette.gold, letterSpacing: '4px', textTransform: 'uppercase', fontSize: 12, fontWeight: 900, marginBottom: 14 }}>Next Step</div>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(36px, 5vw, 58px)', lineHeight: 1.02, margin: '0 0 18px', fontWeight: 700 }}>Review the agreement and the demo.</h2>
          <p style={{ color: '#48596e', fontSize: 18, lineHeight: 1.72, margin: '0 auto 30px', maxWidth: 650 }}>
            No pressure and no complicated process. James can review the agreement Greg left behind, open the demo site, and call or email Greg directly with any questions.
          </p>
          <p style={{ color: '#314258', fontWeight: 900, margin: '0 0 30px' }}>One flat monthly fee, everything included. A real partnership with the person doing the work.</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 14, justifyContent: 'center' }}>
            <Button href={GNL_PHONE_HREF}>&#128222; Call Greg &mdash; {GNL_PHONE}</Button>
            <Button href={`mailto:${GNL_EMAIL}`} variant="outline">{GNL_EMAIL}</Button>
          </div>
        </div>
      </section>

      <footer style={{ padding: '28px 24px', color: '#64758a', textAlign: 'center', fontSize: 13, borderTop: '1px solid rgba(58,58,55,.10)' }}>
        &copy; 2026 GNL Digital Group &mdash; Private proposal for Warren Family Law. Not for public distribution.
      </footer>
    </div>
  );
}
