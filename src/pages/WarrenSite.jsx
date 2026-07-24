// WarrenSite build: 2026-07-23 v2 — imported from Claude Design "Warren Family Law.dc.html"
// Burgundy/gold rebuild of the Warren Family Law demo homepage.
// Route: /warren-demo-v2 (leaves the original /warren-demo untouched).
// v2: practice-area links now point at the real practice-area page
//     (/warren-demo-v2/practice-areas?area=slug — see WarrenPracticeArea.jsx);
//     shared header/footer/brand/CSS exported for reuse by that page.
//
// Contact form posts to Web3Forms with the access key below; if the key is
// cleared it falls back to a mailto: to INTAKE_EMAIL.
import React, { useState, useEffect } from 'react';

const WEB3FORMS_ACCESS_KEY = 'd2219353-a730-4625-a866-5de269abafb3';
const INTAKE_EMAIL = 'intake@warrenfamilylaw.net';

export const PHONE_DISPLAY = '(704) 333-7770';
export const PHONE_HREF = 'tel:+17043337770';
export const EMAIL = 'intake@warrenfamilylaw.net';

const CREST = '/warren-crest.png';
// Hero from the design's uploads/hero.png (recompressed to webp).
const HERO_PHOTO = '/warren-hero.webp';
const ABOUT_PHOTO = '/James.Warren.jpg';
const CHARLOTTE_PHOTO = '/warren-charlotte.webp';

const LINKEDIN_URL = 'https://www.linkedin.com/company/james-a-warren-jr/';
const FACEBOOK_URL = 'https://www.facebook.com/WarrenFamilyLaw/';

// Base paths for this demo. Plain anchors (not router Links) so hash
// scrolling between the two pages just works.
export const HOME_PATH = '/warren-demo-v2';
export const AREA_PATH = '/warren-demo-v2/practice-areas';
export const areaHref = (slug) => `${AREA_PATH}?area=${slug}`;

export const PRACTICE_AREAS = [
  { slug: 'divorce', label: 'Divorce' },
  { slug: 'uncontested-divorce', label: 'Uncontested Divorce' },
  { slug: 'military-divorce', label: 'Military Divorce' },
  { slug: 'child-custody', label: 'Child Custody' },
  { slug: 'child-support', label: 'Child Support' },
  { slug: 'grandparents-rights', label: "Grandparents' Rights" },
  { slug: 'alimony', label: 'Spousal Support / Alimony' },
  { slug: 'property-division', label: 'Property Division' },
  { slug: 'legal-separation', label: 'Legal Separation' },
  { slug: 'adoption', label: 'Adoption' },
  { slug: 'domestic-violence', label: 'Domestic Violence' },
  { slug: 'modifications-enforcement', label: 'Modifications & Enforcement' }
];

const CLIENT_OPTIONS = [
  'Yes, I am a potential new client',
  'No, I am a current/existing client',
  'Neither'
];

const FORM_AREAS = [
  'General inquiry', 'Divorce', 'Child Custody', 'Child Support',
  'Spousal Support / Alimony', 'Property Division', 'Legal Separation',
  'Prenuptial / Postnuptial Agreement'
];

const REVIEWS = [
  { text: "Mr. Warren is the attorney you hire when you want the truth, not fluff. He was honest, strategic, and fully focused on what matters most: my child. He and his paralegal make a sharp, responsive team that kept me informed and prepared. You won't feel like a case number, you'll feel represented.", cite: 'Zack M., Charlotte, NC' },
  { text: "Only hire Mr. Warren if you want to WIN. One of the best civil lawyers in the Charlotte area. He is extremely detail-oriented, professional, and strategic. He fought hard for my case and communicated clearly throughout the process. Highly recommend him to anyone needing strong legal representation.", cite: 'Saicharan K., Charlotte, NC' },
  { text: "Mr. Warren did a fantastic job representing me for a visitation case for my granddaughter. His experience is priceless, his advice and attention to law and facts are to the point. He is a powerhouse in the courtroom, doesn't waste any time, and had our case won in our favor in a couple hours.", cite: 'Sara J., Charlotte, NC' },
  { text: "I wish I had found Mr. Warren years earlier. He was forthright, fair, and asked me from the outset what my goals were. He cuts to the chase and does not nickel and dime you like many other attorneys do. I would highly recommend him to go to bat for you in your case.", cite: 'Mark P., Charlotte, NC' },
  { text: "BEST family law attorney, by far. I've known Mr. Warren since the mid 90's and would use no other in a divorce situation. Extremely professional and will fight for you, all the way.", cite: 'Greg H., Charlotte, NC' },
  { text: "I have been a client of Mr. Warren for many years. We went to trial in one divorce case, and he was so good, so on-point, we easily won the case. He has sound advice, is a good listener, and did not kill us on fees. I highly recommend Mr. Warren!", cite: 'Steve J., Charlotte, NC' },
  { text: "Won my case with the upmost professionalism and toughness. I would recommend James to anyone dealing with a custody and/or child support issue. Fantastic!", cite: 'Mary B., Charlotte, NC' },
  { text: "Mr. Warren has done a wonderful job representing me. He is very strong in the courtroom, is upfront with what outcomes are realistically possible, and stays on top of case law to support the case at hand. I highly recommend him.", cite: 'Beth H., Charlotte, NC' }
];

/* ---------- inline icons (no icon-library dependency) ---------- */
const Icon = ({ d, size = 24, stroke = 'currentColor', sw = 1.7, fill = 'none', style }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={fill} stroke={stroke} strokeWidth={sw}
    strokeLinecap="round" strokeLinejoin="round" style={style} dangerouslySetInnerHTML={{ __html: d }} />
);
const ICONS = {
  phone: '<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>',
  users: '<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',
  heart: '<path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>',
  home: '<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>',
  file: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/>',
  shield: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/>',
  award: '<circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/>',
  star: '<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26"/>'
};

const SERVICES = [
  { icon: ICONS.users, title: 'Divorce & Separation', text: 'Compassionate representation to help you move forward.', href: areaHref('divorce') },
  { icon: ICONS.heart, title: 'Child Custody & Support', text: 'Protecting your children and your parental rights.', href: areaHref('child-custody') },
  { icon: ICONS.home, title: 'Alimony & Property Division', text: 'Fair and equitable solutions for your future.', href: areaHref('alimony') },
  { icon: ICONS.file, title: 'Prenuptial & Postnuptial Agreements', text: 'Plan today for tomorrow.', href: '#contact' }
];

const TRUST = [
  { icon: ICONS.shield, label: <>42+ Years<br />of Experience</> },
  { icon: ICONS.award, label: <>Local, Trusted,<br />Focused on Family</> },
  { icon: ICONS.users, label: <>Personalized Attention<br />Every Step of the Way</> }
];

export const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;0,700;1,500&family=Inter:wght@400;500;600;700;800&display=swap');
.wfl { min-height: 100vh; background: #e7e2d7; color: #3a3a37; font-family: Inter, system-ui, sans-serif; padding-bottom: 48px; -webkit-font-smoothing: antialiased; }
.wfl a { color: #55252d; }
.wfl a:hover { color: #a87f3d; }
.wfl .page { width: min(1430px, 100%); margin: 0 auto; background: #fdfbf7; box-shadow: 0 12px 40px rgba(58,58,55,.22); overflow: hidden; }
.wfl .serif { font-family: 'Cormorant Garamond', serif; }
.wfl header.topbar { position: sticky; top: 0; z-index: 200; min-height: 112px; background: linear-gradient(90deg,#5c2830 0%,#471e25 100%); display: flex; align-items: center; justify-content: space-between; gap: 24px; flex-wrap: wrap; padding: 10px 40px; color: white; box-shadow: 0 4px 18px rgba(58,58,55,.22); }
.wfl .topbar nav { display: flex; align-items: center; gap: clamp(16px,2.4vw,36px); flex-wrap: wrap; }
.wfl .topbar nav > a, .wfl .pa-toggle { color: white; text-decoration: none; font-size: 13px; font-weight: 700; letter-spacing: .09em; }
.wfl .topbar nav > a:hover, .wfl .pa-toggle:hover { color: white; }
.wfl .brand { display: flex; align-items: center; gap: 16px; }
.wfl .brand .crest { width: auto; display: block; }
.wfl .brand .stack { display: flex; flex-direction: column; align-items: center; gap: 3px; }
.wfl .brand .word { font-weight: 600; line-height: 1; letter-spacing: .14em; white-space: nowrap; color: white; }
.wfl .brand .sub { font-weight: 500; line-height: 1; letter-spacing: .42em; color: #d9b878; margin-right: -.42em; white-space: nowrap; }
.wfl .brand .tag { color: rgba(255,255,255,.85); font-size: 8.5px; font-weight: 600; letter-spacing: .22em; white-space: nowrap; margin-top: 3px; }
.wfl .brand-header .crest { height: 78px; } .wfl .brand-header .word { font-size: 34px; } .wfl .brand-header .sub { font-size: 15px; }
.wfl .brand-footer .crest { height: 64px; } .wfl .brand-footer .word { font-size: 27px; } .wfl .brand-footer .sub { font-size: 12px; }
.wfl .brand-compact .crest { height: 56px; } .wfl .brand-compact .word { font-size: 24px; } .wfl .brand-compact .sub { font-size: 11px; }
.wfl .phone-cta { height: 54px; padding: 0 26px; font-size: 19px; letter-spacing: .01em; }
.wfl .pa-wrap { position: relative; display: inline-flex; }
.wfl .pa-menu { position: absolute; top: calc(100% + 12px); left: 50%; transform: translateX(-50%); background: #fdfbf7; border: 1px solid rgba(111,51,61,.25); border-radius: 10px; box-shadow: 0 18px 44px rgba(58,58,55,.25); padding: 8px; min-width: 480px; display: grid; grid-template-columns: 1fr 1fr; gap: 0 8px; z-index: 50; }
.wfl .pa-menu a { display: block; color: #55252d; font-size: 14px; font-weight: 600; padding: 10px 14px; border-radius: 7px; text-decoration: none; }
.wfl .pa-menu a:hover { background: #f1e5e4; color: #a87f3d; }
.wfl .btn-primary { display: inline-flex; align-items: center; justify-content: center; gap: 10px; background: linear-gradient(180deg,#6f333d 0%,#471e25 100%); border: 2px solid #c19a4f; box-shadow: inset 0 0 0 2px #471e25, inset 0 0 0 3px rgba(217,184,120,.75); color: white !important; text-decoration: none; border-radius: 4px; font-weight: 800; cursor: pointer; font-family: Inter, sans-serif; }
.wfl .btn-outline-light { display: inline-flex; align-items: center; justify-content: center; text-decoration: none; border-radius: 3px; font-weight: 800; border: 1px solid #c2974e; color: white !important; }
.wfl .btn-outline-light:hover { background: rgba(194,151,78,.18); color: white !important; }
.wfl .eyebrow { color: #a87f3d; font-weight: 800; letter-spacing: .24em; text-transform: uppercase; }
.wfl .rule { width: 62px; height: 2px; background: #c2974e; }
.wfl .hero { display: grid; grid-template-columns: repeat(auto-fit, minmax(min(380px,100%),1fr)); background: linear-gradient(135deg,#f7f3ec 0%,#f3ecea 100%); overflow: hidden; }
.wfl .hero-photo { position: relative; min-height: 480px; }
.wfl .hero-photo img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; object-position: center; }
.wfl .services { background: #f7f3ec; padding: 56px 44px 60px; text-align: center; border-top: 1px solid rgba(0,0,0,.05); }
.wfl .service-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(min(240px,100%),1fr)); }
.wfl .service-grid article { padding: 8px 30px 4px; display: flex; flex-direction: column; align-items: center; border-right: 1px solid rgba(58,58,55,.12); }
.wfl .service-grid article:last-child { border-right: none; }
.wfl .learn { display: inline-flex; align-items: center; gap: 5px; color: #a87f3d !important; text-decoration: none; font-size: 12px; font-weight: 800; letter-spacing: .08em; margin-top: auto; }
.wfl .reviews { display: flex; flex-wrap: wrap; background: #5c2830; color: white; }
@keyframes wflReviewFade { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: translateY(0); } }
.wfl .review-fade { animation: wflReviewFade .6s ease both; }
.wfl .trust { background: #f7f3ec; display: flex; flex-wrap: wrap; gap: 12px 0; padding: 30px 58px; border-top: 1px solid rgba(0,0,0,.05); }
.wfl .trust > div { flex: 1 1 280px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; gap: 20px; min-height: 64px; color: #3a3a37; font-weight: 600; font-size: 16px; line-height: 1.3; text-transform: uppercase; letter-spacing: .04em; padding: 10px 18px; }
.wfl .contact { background: linear-gradient(135deg,#471e25,#5c2830); color: white; padding: clamp(48px,5vw,72px) clamp(28px,5vw,64px); display: flex; flex-wrap: wrap; gap: clamp(36px,4vw,72px); justify-content: center; }
.wfl .contact form { flex: 1 1 380px; max-width: 560px; background: #fdfbf7; color: #3a3a37; border-radius: 8px; padding: clamp(24px,3vw,36px); box-shadow: 0 18px 44px rgba(0,0,0,.22); display: grid; gap: 16px; box-sizing: border-box; align-self: flex-start; }
.wfl .contact label { display: grid; gap: 6px; font-size: 12px; font-weight: 700; letter-spacing: .08em; color: #6f333d; }
.wfl .contact input, .wfl .contact select, .wfl .contact textarea { min-height: 46px; border: 1px solid rgba(111,51,61,.35); border-radius: 5px; padding: 0 14px; font-size: 15px; font-family: Inter, sans-serif; color: #3a3a37; background: white; box-sizing: border-box; width: 100%; }
.wfl .contact textarea { padding: 12px 14px; resize: vertical; }
.wfl footer.main { background: #3b1d22; color: rgba(255,255,255,.85); padding: 44px clamp(28px,5vw,64px) 30px; }
.wfl footer.main a { color: rgba(255,255,255,.85); text-decoration: none; }
.wfl footer.main a:hover { color: #dcb573; }
/* ---------- mobile ---------- */
@media (max-width: 860px) {
  .wfl header.topbar { position: relative; top: auto; min-height: 0; padding: 14px 16px 16px; justify-content: center; text-align: center; gap: 10px 20px; }
  .wfl .brand-header .crest { height: 48px; }
  .wfl .brand-header .word { font-size: 23px; }
  .wfl .brand-header .sub { font-size: 10px; }
  .wfl .brand-header .tag { display: none; }
  .wfl .topbar nav { justify-content: center; gap: 12px 18px; }
  .wfl .topbar nav > a, .wfl .pa-toggle { font-size: 12px; }
  .wfl .phone-cta { height: 44px; padding: 0 18px; font-size: 15px; }
  /* Full-width dropdown anchored to the header instead of the toggle */
  .wfl .pa-wrap { position: static; }
  .wfl .pa-menu { top: 100%; left: 12px; right: 12px; transform: none; min-width: 0; max-height: 60vh; overflow-y: auto; }
  .wfl .hero-photo { min-height: 340px; }
}
@media (max-width: 420px) {
  .wfl .pa-menu { grid-template-columns: 1fr; }
}
`;

/* ---------- brand lockup (crest + wordmark) ----------
   Sizes live in CSS (.brand-header / .brand-footer / .brand-compact) so
   media queries can shrink the header lockup on phones. */
export function BrandLockup({ variant = 'header', showTagline = true }) {
  return (
    <span className={`brand brand-${variant}`}>
      <img className="crest" src={CREST} alt="" />
      <span className="stack">
        <span className="serif word">WARREN</span>
        <span className="serif sub">FAMILY LAW</span>
        {showTagline && (
          <span className="tag">COMPASSIONATE &middot; EXPERIENCED &middot; DEDICATED</span>
        )}
      </span>
    </span>
  );
}

/* ---------- header (shared by home + practice-area pages) ---------- */
export function TopBar({ onHome = true }) {
  const [paOpen, setPaOpen] = useState(false);
  // On touch devices a tap fires mouseenter (opens the menu) immediately
  // before click (which would toggle it straight back closed). Remember when
  // hover opened it and let a click within that window keep it open.
  const hoverOpenedAt = React.useRef(0);
  // On the home page, section links are plain hash anchors; on the
  // practice-area page they navigate back to the home route first.
  const home = onHome ? '#top' : HOME_PATH;
  const section = (id) => (onHome ? `#${id}` : `${HOME_PATH}#${id}`);
  return (
    <header className="topbar">
      <a href={home} aria-label="Warren Family Law" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
        <BrandLockup />
      </a>
      <nav aria-label="Main navigation">
        <a href={home}>HOME</a>
        <div className="pa-wrap"
          onMouseEnter={() => { setPaOpen(true); hoverOpenedAt.current = Date.now(); }}
          onMouseLeave={() => setPaOpen(false)}>
          <a className="pa-toggle" href={section('services')}
            onClick={(e) => {
              e.preventDefault();
              // Functional update: the click can arrive before the render from
              // the tap-synthesized mouseenter, so read the live value here.
              setPaOpen(v => (v && Date.now() - hoverOpenedAt.current < 500) ? v : !v);
            }}
            aria-expanded={paOpen} style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
            PRACTICE AREAS <span style={{ fontSize: 9, transform: 'translateY(1px)' }}>&#9662;</span>
          </a>
          {paOpen && (
            <div className="pa-menu">
              {PRACTICE_AREAS.map(a => <a key={a.slug} href={areaHref(a.slug)} onClick={() => setPaOpen(false)}>{a.label}</a>)}
            </div>
          )}
        </div>
        <a href={section('about')}>ABOUT</a>
        <a href={section('reviews')}>REVIEWS</a>
        <a href={section('contact')}>CONTACT</a>
      </nav>
      <a className="btn-primary phone-cta" href={PHONE_HREF}>
        <Icon d={ICONS.phone} size={20} fill="white" stroke="white" sw={1} /> {PHONE_DISPLAY}
      </a>
    </header>
  );
}

/* ---------- contact form ---------- */
function ContactForm() {
  const [form, setForm] = useState({
    name: '', phone: '', email: '',
    newClient: CLIENT_OPTIONS[0], area: FORM_AREAS[0], message: ''
  });
  const [sendState, setSendState] = useState('idle');
  const set = (k) => (e) => setForm(f => ({ ...f, [k]: e.target.value }));

  const submit = async (e) => {
    e.preventDefault();
    const subject = `Consultation request — ${form.area || 'General inquiry'}${form.name ? ' — ' + form.name : ''}`;
    if (!WEB3FORMS_ACCESS_KEY) {
      const body = `Name: ${form.name}\nPhone: ${form.phone}\nEmail: ${form.email}\nNew client: ${form.newClient}\nRegarding: ${form.area}\n\n${form.message}`;
      window.location.href = `mailto:${INTAKE_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      return;
    }
    setSendState('sending');
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY, subject, from_name: 'Warren Family Law website',
          name: form.name, phone: form.phone, email: form.email,
          new_client: form.newClient, regarding: form.area, message: form.message
        })
      });
      const data = await res.json();
      if (data.success) {
        setSendState('sent');
        setForm({ name: '', phone: '', email: '', newClient: CLIENT_OPTIONS[0], area: FORM_AREAS[0], message: '' });
      } else {
        setSendState('error');
      }
    } catch {
      setSendState('error');
    }
  };

  return (
    <form onSubmit={submit}>
      <div className="serif" style={{ fontSize: 26, fontWeight: 600, color: '#33372f' }}>Send a Message</div>
      <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
        <label style={{ flex: '1 1 200px' }}>NAME
          <input type="text" required value={form.name} onChange={set('name')} placeholder="Your full name" />
        </label>
        <label style={{ flex: '1 1 200px' }}>PHONE
          <input type="tel" value={form.phone} onChange={set('phone')} placeholder="(704) 555-0123" />
        </label>
      </div>
      <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
        <label style={{ flex: '1 1 200px' }}>EMAIL
          <input type="email" required value={form.email} onChange={set('email')} placeholder="you@email.com" />
        </label>
        <label style={{ flex: '1 1 200px' }}>ARE YOU A NEW CLIENT?
          <select value={form.newClient} onChange={set('newClient')}>
            {CLIENT_OPTIONS.map(o => <option key={o} value={o}>{o}</option>)}
          </select>
        </label>
      </div>
      <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
        <label style={{ flex: '1 1 200px' }}>I NEED HELP WITH
          <select value={form.area} onChange={set('area')}>
            {FORM_AREAS.map(o => <option key={o} value={o}>{o}</option>)}
          </select>
        </label>
      </div>
      <label>BRIEFLY DESCRIBE YOUR SITUATION
        <textarea rows={4} value={form.message} onChange={set('message')} placeholder="A sentence or two is fine &mdash; please don't include sensitive details." />
      </label>
      {sendState === 'sent' && (
        <div style={{ background: '#f1e5e4', border: '1px solid rgba(111,51,61,.35)', borderRadius: 6, padding: '16px 18px', color: '#55252d', fontSize: 15, fontWeight: 600, lineHeight: 1.5 }}>
          Thank you &mdash; your message has been sent. We&rsquo;ll respond within one business day.
        </div>
      )}
      {sendState === 'error' && (
        <div style={{ background: '#f6e8e3', border: '1px solid rgba(168,90,60,.35)', borderRadius: 6, padding: '14px 18px', color: '#8a4a30', fontSize: 14, lineHeight: 1.5 }}>
          Something went wrong sending your message. Please call {PHONE_DISPLAY} or email us directly.
        </div>
      )}
      <button className="btn-primary" type="submit" disabled={sendState === 'sending'} style={{ minHeight: 52, fontSize: 15, letterSpacing: '.04em' }}>
        {sendState === 'sending' ? 'SENDING…' : 'SEND MESSAGE'}
      </button>
      <div style={{ fontSize: 12, color: '#6f6c66', lineHeight: 1.5 }}>
        Contacting the firm does not create an attorney&ndash;client relationship. Please don&rsquo;t include sensitive details.
      </div>
    </form>
  );
}

/* ---------- footer ---------- */
function Footer() {
  return (
    <footer className="main">
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(240px,100%),1fr))', gap: 36, alignItems: 'start' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14, margin: '0 0 14px' }}>
            <BrandLockup variant="footer" showTagline={false} />
          </div>
          <p style={{ fontSize: 13, lineHeight: 1.6, margin: 0, color: 'rgba(255,255,255,.6)', maxWidth: 300 }}>
            Family law representation in Charlotte, NC for over 42 years.
          </p>
        </div>
        <div>
          <div style={{ fontWeight: 800, fontSize: 12, letterSpacing: '.18em', color: '#dcb573', marginBottom: 14 }}>CONTACT</div>
          <div style={{ display: 'grid', gap: 8, fontSize: 14, lineHeight: 1.5 }}>
            <a href={PHONE_HREF}>{PHONE_DISPLAY}</a>
            <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
            <span style={{ color: 'rgba(255,255,255,.75)' }}>1001 Elizabeth Ave Ste 2A<br />Charlotte, NC 28204</span>
            <span style={{ display: 'flex', gap: 14, marginTop: 6 }}>
              <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z" /></svg>
              </a>
              <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.05V9.41c0-3.02 1.79-4.7 4.53-4.7 1.31 0 2.68.24 2.68.24v2.97h-1.51c-1.49 0-1.95.93-1.95 1.89v2.26h3.32l-.53 3.49h-2.79V24C19.61 23.1 24 18.1 24 12.07z" /></svg>
              </a>
            </span>
          </div>
        </div>
        <div>
          <div style={{ fontWeight: 800, fontSize: 12, letterSpacing: '.18em', color: '#dcb573', marginBottom: 14 }}>PRACTICE AREAS</div>
          <div style={{ display: 'grid', gap: 8, fontSize: 14 }}>
            {PRACTICE_AREAS.map(a => <a key={a.slug} href={areaHref(a.slug)}>{a.label}</a>)}
          </div>
        </div>
      </div>
      <div style={{ borderTop: '1px solid rgba(255,255,255,.14)', marginTop: 36, paddingTop: 20, fontSize: 12, lineHeight: 1.6, color: 'rgba(255,255,255,.45)', display: 'grid', gap: 10 }}>
        <p style={{ margin: 0, maxWidth: 900 }}>
          The information on this website is for general information purposes only. Nothing on this site should be taken as legal advice for any individual case or situation. This information is not intended to create, and receipt or viewing does not constitute, an attorney&ndash;client relationship.
        </p>
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap' }}>
          <span>&copy; 2026 Warren Family Law. All rights reserved.</span>
          <span>Attorney advertising. Prior results do not guarantee a similar outcome.</span>
        </div>
      </div>
    </footer>
  );
}

/* ---------- page ---------- */
export default function WarrenSite() {
  const [reviewIndex, setReviewIndex] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setReviewIndex(i => (i + 1) % REVIEWS.length), 7000);
    return () => clearInterval(id);
  }, []);
  const review = REVIEWS[reviewIndex];

  return (
    <main className="wfl">
      <style>{CSS}</style>
      <div className="page">
        <TopBar />

        <section className="hero" id="top">
          <div style={{ padding: 'clamp(40px,5vw,72px) 32px clamp(40px,5vw,64px) clamp(28px,4.5vw,64px)', maxWidth: 620, justifySelf: 'end', width: '100%', boxSizing: 'border-box', alignSelf: 'center' }}>
            <div className="eyebrow" style={{ fontSize: 15, letterSpacing: '.22em', marginBottom: 20 }}>42 Years of Experience</div>
            <h1 className="serif" style={{ fontWeight: 600, fontSize: 'clamp(46px,4.8vw,68px)', lineHeight: 1.02, margin: 0, letterSpacing: '-.02em', color: '#33372f' }}>
              Trusted Guidance.<br />Strong Advocacy.<br /><em style={{ fontStyle: 'italic', color: '#6f333d' }}>Better Outcomes.</em>
            </h1>
            <div className="rule" style={{ margin: '28px 0 24px' }} />
            <p style={{ color: '#6f6c66', fontSize: 17, lineHeight: 1.6, maxWidth: 520, margin: '0 0 30px', textWrap: 'pretty' }}>
              For over 42 years, Warren Family Law has helped families in Charlotte and surrounding areas navigate life's most challenging transitions with skill, compassion, and integrity.
            </p>
            <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', alignItems: 'center' }}>
              <a className="btn-primary" href={PHONE_HREF} style={{ minHeight: 52, padding: '0 26px', fontSize: 14, letterSpacing: '.04em' }}>CALL {PHONE_DISPLAY}</a>
              <a className="btn-primary" href={`mailto:${EMAIL}`} style={{ minHeight: 52, padding: '0 24px', fontSize: 14, letterSpacing: '.04em' }}>EMAIL US</a>
            </div>
          </div>
          <div className="hero-photo">
            <img src={HERO_PHOTO} alt="Parents walking with their child at sunset" />
          </div>
        </section>

        <section className="services" id="services">
          <div className="eyebrow" style={{ fontSize: 13, letterSpacing: '.3em', marginBottom: 10 }}>Serving Charlotte &amp; Surrounding Areas</div>
          <h2 className="serif" style={{ fontSize: 'clamp(34px,3vw,44px)', fontWeight: 600, lineHeight: 1.05, margin: 0, color: '#33372f' }}>Comprehensive Family Law Services</h2>
          <div className="rule" style={{ width: 70, margin: '22px auto 44px' }} />
          <div className="service-grid">
            {SERVICES.map(s => (
              <article key={s.title}>
                <Icon d={s.icon} size={46} stroke="#6f333d" style={{ marginBottom: 16 }} />
                <h3 className="serif" style={{ fontSize: 23, lineHeight: 1.1, margin: '0 0 10px', fontWeight: 700, color: '#33372f' }}>{s.title}</h3>
                <p style={{ color: '#6f6c66', fontSize: 14, lineHeight: 1.5, margin: '0 0 14px', textWrap: 'pretty' }}>{s.text}</p>
                <a className="learn" href={s.href}>LEARN MORE <span style={{ fontSize: 14 }}>&#8250;</span></a>
              </article>
            ))}
          </div>
        </section>

        <section className="reviews" id="reviews">
          <div style={{ flex: '1 1 300px', boxSizing: 'border-box', padding: '36px 40px', background: 'linear-gradient(135deg,#6f333d,#471e25)', borderRight: '1px solid rgba(255,255,255,.18)', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 12 }}>
            <div style={{ color: '#dcb573', fontWeight: 800, letterSpacing: '.08em', fontSize: 14 }}>WHAT OUR CLIENTS SAY</div>
            <div aria-label="4.5 star rating" style={{ color: '#dcb573', display: 'flex', gap: 7 }}>
              {[1, 2, 3, 4, 5].map(n => <Icon key={n} d={ICONS.star} size={26} fill="currentColor" stroke="currentColor" sw={1} />)}
            </div>
            <p style={{ margin: 0, fontSize: 14, color: 'rgba(255,255,255,.92)' }}>4.5 &#9733; on Google &middot; 15 reviews</p>
            <a className="btn-outline-light" href="#reviews" style={{ minHeight: 42, padding: '0 20px', fontSize: 12, letterSpacing: '.06em', alignSelf: 'flex-start' }}>READ ALL REVIEWS</a>
          </div>
          <div style={{ flex: '1.2 1 360px', boxSizing: 'border-box', padding: '34px 40px', background: 'linear-gradient(90deg,#642c35,#55252d)', display: 'grid', gridTemplateColumns: '48px 1fr', gap: 10, alignItems: 'start', minHeight: 230 }}>
            <div style={{ fontFamily: 'Georgia, serif', color: '#dcb573', fontSize: 80, lineHeight: .75 }}>&ldquo;</div>
            <div key={reviewIndex} className="review-fade">
              <blockquote className="serif" style={{ margin: 0, fontSize: 19, lineHeight: 1.5, fontStyle: 'italic', color: 'white' }}>{review.text}</blockquote>
              <cite style={{ display: 'block', color: '#dcb573', marginTop: 10, fontStyle: 'normal', fontSize: 15 }}>&mdash; {review.cite}</cite>
            </div>
          </div>
          <div style={{ flex: '1 1 340px', position: 'relative', minHeight: 230 }}>
            <img src={CHARLOTTE_PHOTO} alt="Charlotte, North Carolina" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
        </section>

        <section id="about" style={{ background: '#fdfbf7', padding: 'clamp(48px,5vw,76px) clamp(28px,5vw,64px)', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(340px,100%),1fr))', gap: 'clamp(32px,4vw,64px)', alignItems: 'center' }}>
          <div style={{ justifySelf: 'center' }}>
            <img src={ABOUT_PHOTO} alt="James Warren" style={{ width: 'min(440px,100%)', height: 420, objectFit: 'cover', borderRadius: 6 }} />
          </div>
          <div style={{ maxWidth: 560 }}>
            <div className="eyebrow" style={{ fontSize: 13, letterSpacing: '.3em', marginBottom: 12 }}>About the Firm</div>
            <h2 className="serif" style={{ fontSize: 'clamp(32px,3vw,42px)', fontWeight: 600, lineHeight: 1.08, margin: '0 0 20px', color: '#33372f' }}>James Warren, Attorney at Law</h2>
            <p style={{ color: '#6f6c66', fontSize: 16, lineHeight: 1.65, margin: '0 0 16px', textWrap: 'pretty' }}>
              For more than four decades, James Warren has represented families across Charlotte and the surrounding counties in divorce, custody, and support matters. Clients describe him as direct, strategic, and relentlessly prepared &mdash; an advocate who tells you the truth about your case and then fights for the best realistic outcome.
            </p>
            <p style={{ color: '#6f6c66', fontSize: 16, lineHeight: 1.65, margin: '0 0 28px', textWrap: 'pretty' }}>
              Every case begins with a candid conversation about your goals. You will work directly with Mr. Warren &mdash; not be passed to a junior associate &mdash; from the first consultation through resolution.
            </p>
            <a className="btn-primary" href={PHONE_HREF} style={{ minHeight: 50, padding: '0 26px', fontSize: 14, letterSpacing: '.04em' }}>CALL {PHONE_DISPLAY}</a>
          </div>
        </section>

        <section className="trust">
          {TRUST.map((t, i) => (
            <div key={i}>
              <Icon d={t.icon} size={44} stroke="#6f333d" sw={1.6} style={{ flex: '0 0 auto' }} />
              <span>{t.label}</span>
            </div>
          ))}
        </section>

        <section className="contact" id="contact">
          <div style={{ flex: '1 1 340px', maxWidth: 480 }}>
            <h2 className="serif" style={{ fontSize: 'clamp(32px,3vw,44px)', fontWeight: 600, lineHeight: 1.05, margin: '0 0 14px' }}>Ready to Talk About Your Case?</h2>
            <p className="serif" style={{ fontStyle: 'italic', color: '#dcb573', fontSize: 21, lineHeight: 1.5, margin: '0 0 16px', textWrap: 'pretty' }}>
              We will be your champion &mdash; through the good times and the bad, fighting for you at every step of the process.
            </p>
            <p style={{ color: 'rgba(255,255,255,.88)', fontSize: 17, lineHeight: 1.6, margin: '0 0 28px', textWrap: 'pretty' }}>
              Consultations are confidential. Call, or send us a message with the form &mdash; we&rsquo;ll respond within one business day.
            </p>
            <div style={{ display: 'grid', gap: 18, fontSize: 15 }}>
              <a className="btn-primary" href={PHONE_HREF} style={{ minHeight: 54, padding: '0 28px', fontSize: 16, letterSpacing: '.02em', justifySelf: 'start' }}>{PHONE_DISPLAY}</a>
              <div style={{ display: 'grid', gap: 6, color: 'rgba(255,255,255,.88)', lineHeight: 1.55 }}>
                <a href={`mailto:${EMAIL}`} style={{ color: 'white', fontWeight: 600, textDecoration: 'none' }}>{EMAIL}</a>
                <span>1001 Elizabeth Ave Ste 2A<br />Charlotte, NC 28204</span>
              </div>
            </div>
          </div>
          <ContactForm />
        </section>

        <Footer />
      </div>
    </main>
  );
}
