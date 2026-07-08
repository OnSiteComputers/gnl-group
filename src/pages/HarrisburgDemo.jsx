// HarrisburgDemo build: 2026-07-05 v1
import React, { useEffect, useState } from 'react';
/* ============================================================
   HARRISBURG SURVEYING &mdash; DEMO PAGE  (route: /harrisburg-demo)
   Aesthetic: "plat sheet" &mdash; stake yellow / ink black, mono coordinates,
   hairline rules, the working drawing of a boundary survey as the brand.
   Form delivery: Web3Forms (temporary demo bridge).
   Swap to Cloudflare Worker after client migrates &mdash; change ONE line (ACCESS_KEY usage).
   ============================================================ */

// ==================== EDIT ME: survey types he actually offers ====================
// Pulled from harrisburgsurveying.com/services &mdash; his real seven.
const SURVEY_TYPES = [
  'Boundary Survey',
  'Mortgage / Physical Survey',
  'ALTA / ACSM Survey',
  'Topographic Survey',
  'As-Built Survey',
  'Utility Survey',
  'Specialized Survey',
  "Not sure \u2014 recommend one for me",
];

// ==================== Web3Forms public access key (safe to embed client-side) ====================
const ACCESS_KEY = '3d89122b-0437-4179-bc13-c6ac794da038';

// NC counties &mdash; his service area floated to the top
const COUNTIES = [
  'Cabarrus', 'Mecklenburg', 'Union', 'Rowan', 'Stanly', 'Iredell',
  '====================',
  'Alamance','Alexander','Anson','Ashe','Avery','Beaufort','Bertie','Bladen','Brunswick','Buncombe','Burke','Caldwell','Camden','Carteret','Caswell','Catawba','Chatham','Cherokee','Chowan','Clay','Cleveland','Columbus','Craven','Cumberland','Currituck','Dare','Davidson','Davie','Duplin','Durham','Edgecombe','Forsyth','Franklin','Gaston','Gates','Graham','Granville','Greene','Guilford','Halifax','Harnett','Haywood','Henderson','Hertford','Hoke','Hyde','Jackson','Johnston','Jones','Lee','Lenoir','Lincoln','Macon','Madison','Martin','McDowell','Mitchell','Montgomery','Moore','Nash','New Hanover','Northampton','Onslow','Orange','Pamlico','Pasquotank','Pender','Perquimans','Person','Pitt','Polk','Randolph','Richmond','Robeson','Rockingham','Rutherford','Sampson','Scotland','Surry','Swain','Transylvania','Tyrrell','Vance','Wake','Warren','Washington','Watauga','Wayne','Wilkes','Wilson','Yadkin','Yancey',
];

const C = {
  ink:    '#16140F',   // near-black, warm
  paper:  '#F4F1E8',   // drafting vellum
  stake:  '#F2C200',   // surveyor stake yellow
  rule:   '#C9C3B2',   // hairline grid
  red:    '#B7410E',   // plat correction red
  sub:    '#6B6657',   // muted label gray
};

export default function HarrisburgDemo() {
  useEffect(() => { console.log("HarrisburgDemo build: 2026-07-05 v1"); }, []);

  const [status, setStatus] = useState('idle'); // idle | sending | ok | err
  const [isOwner, setIsOwner] = useState('Yes');

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus('sending');
    const fd = new FormData(e.target);
    fd.append('access_key', ACCESS_KEY);
    fd.append('subject', 'New Survey Request &mdash; Harrisburg Surveying');
    fd.append('from_name', 'Harrisburg Surveying Website');
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: fd,
      });
      const data = await res.json();
      if (data.success) { setStatus('ok'); e.target.reset(); setIsOwner('Yes'); }
      else setStatus('err');
    } catch { setStatus('err'); }
  }

  const mono = { fontFamily: "'JetBrains Mono','SFMono-Regular',ui-monospace,monospace" };
  const serif = { fontFamily: "'Spectral','Georgia',serif" };

  const label = {
    display: 'block', fontSize: 11, letterSpacing: '0.12em',
    textTransform: 'uppercase', color: C.sub, marginBottom: 6, ...mono,
  };
  const input = {
    width: '100%', padding: '11px 12px', background: '#FBFAF5',
    border: `1px solid ${C.rule}`, borderRadius: 0, color: C.ink,
    fontSize: 15, outline: 'none', ...serif, boxSizing: 'border-box',
  };
  const field = { marginBottom: 18 };

  return (
    <div style={{ background: C.paper, minHeight: '100vh', color: C.ink, ...serif }}>
      {/* ==================== DEMO FRAMING BANNER ==================== */}
      <div style={{ position: 'relative', zIndex: 2, background: C.ink, color: C.paper, padding: '18px 24px', textAlign: 'center' }}>
        <p style={{ ...mono, fontSize: 15, lineHeight: 1.55, margin: '0 auto', maxWidth: 900, letterSpacing: '0.02em' }}>
          <span style={{ color: C.stake, fontWeight: 700, fontSize: 16 }}>&#9674; PREVIEW &mdash; </span>This shows one feature of your new site: the
          smart <strong style={{ color: '#fff' }}>Request a Survey</strong> form. Your full website also includes your
          home page, services, company profile, and more &mdash; designed &amp; managed by GNL Digital Group.
        </p>
      </div>

      {/* grid backdrop */}
      <div style={{
        position: 'fixed', inset: 0, pointerEvents: 'none', opacity: 0.5,
        backgroundImage: `linear-gradient(${C.rule} 1px, transparent 1px), linear-gradient(90deg, ${C.rule} 1px, transparent 1px)`,
        backgroundSize: '32px 32px',
      }} />

      <div style={{ position: 'relative', maxWidth: 920, margin: '0 auto', padding: '0 24px' }}>

        {/* ==================== TITLE BLOCK (plat header) ==================== */}
        <header style={{ paddingTop: 56, paddingBottom: 32, borderBottom: `2px solid ${C.ink}` }}>
          <div style={{ ...mono, fontSize: 11, letterSpacing: '0.2em', color: C.red, marginBottom: 18 }}>
            &#9674; PROFESSIONAL LAND SURVEYING &#183; STATE OF NORTH CAROLINA
          </div>
          <img src="/harrisburg-logo.png" alt="Harrisburg Surveying"
            style={{ width: '100%', maxWidth: 480, height: 'auto', display: 'block' }} />
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px 28px', marginTop: 20, ...mono, fontSize: 12, color: C.sub }}>
            <span>EST. 1989</span>
            <span>&#183;</span>
            <span>ALL OF NORTH CAROLINA</span>
            <span>&#183;</span>
            <span>(704) 455-9553</span>
          </div>
        </header>

        {/* ==================== HERO LINE ==================== */}
        <section style={{ padding: '48px 0 8px' }}>
          <p style={{ fontSize: 'clamp(20px,3vw,28px)', lineHeight: 1.35, margin: 0, maxWidth: 680 }}>
            Boundary lines, closings, topographic detail &mdash; established corners,
            recorded right. <span style={{ background: C.stake, padding: '0 6px' }}>Request a survey below.</span>
          </p>
          <p style={{ ...mono, fontSize: 12, color: C.sub, marginTop: 20 }}>
            Most requests answered within one business day.
          </p>
        </section>

        {/* ==================== THE FORM ==================== */}
        <section style={{
          margin: '28px 0 64px', background: '#FFFFFFcc', backdropFilter: 'blur(2px)',
          border: `1px solid ${C.ink}`, padding: 'clamp(24px,4vw,44px)',
        }}>
          {status === 'ok' ? (
            <div style={{ padding: '40px 8px', textAlign: 'center' }}>
              <div style={{ ...mono, color: C.red, fontSize: 12, letterSpacing: '0.2em', marginBottom: 12 }}>&#9674; RECEIVED</div>
              <h2 style={{ fontSize: 30, margin: '0 0 10px' }}>Request logged.</h2>
              <p style={{ color: C.sub, fontSize: 16, maxWidth: 440, margin: '0 auto' }}>
                Thanks &mdash; your request is in. James will be in touch within one business day to confirm scope and pricing.
              </p>
              <button onClick={() => setStatus('idle')} style={{
                marginTop: 24, ...mono, fontSize: 12, letterSpacing: '0.1em', background: 'none',
                border: `1px solid ${C.ink}`, padding: '10px 18px', cursor: 'pointer', color: C.ink,
              }}>SUBMIT ANOTHER &rarr;</button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              {/* SECTION 1 */}
              <SectionTag n="01" t="Your Information" />
              <Row>
                <div style={field}><label style={label}>Full Name *</label><input style={input} name="Full Name" required /></div>
                <div style={field}><label style={label}>Title / Role</label><input style={input} name="Title" placeholder="Homeowner, Attorney, Builder&hellip;" /></div>
              </Row>
              <Row>
                <div style={field}><label style={label}>Organization</label><input style={input} name="Organization" /></div>
                <div style={field}><label style={label}>Email *</label><input style={input} type="email" name="Email" required /></div>
              </Row>
              <Row>
                <div style={field}><label style={label}>Cell Phone *</label><input style={input} type="tel" name="Cell Phone" required /></div>
                <div style={field}><label style={label}>Work Phone</label><input style={input} type="tel" name="Work Phone" /></div>
              </Row>
              <div style={field}>
                <label style={label}>Best way to reach you *</label>
                <select style={input} name="Preferred Contact" required defaultValue="">
                  <option value="" disabled>Select&hellip;</option>
                  <option>Email</option><option>Cell phone</option><option>Work phone</option>
                </select>
              </div>

              {/* SECTION 2 */}
              <SectionTag n="02" t="Property Information" />
              <div style={field}>
                <label style={label}>Are you the current owner? *</label>
                <select style={input} name="Is Current Owner" required value={isOwner} onChange={e => setIsOwner(e.target.value)}>
                  <option>Yes</option><option>No</option>
                </select>
              </div>
              {isOwner === 'No' && (
                <div style={field}>
                  <label style={label}>Current Owner Name *</label>
                  <input style={input} name="Current Owner" required />
                </div>
              )}
              <div style={field}>
                <label style={label}>Property Street Address *</label>
                <input style={input} name="Property Address" required />
              </div>
              <Row>
                <div style={field}>
                  <label style={label}>County *</label>
                  <select style={input} name="County" required defaultValue="">
                    <option value="" disabled>Select&hellip;</option>
                    {COUNTIES.map((c, i) => <option key={i} disabled={c.startsWith('=')}>{c}</option>)}
                  </select>
                </div>
                <div style={field}>
                  <label style={label}>Parcel ID / PIN</label>
                  <input style={input} name="Parcel ID" placeholder="If known &mdash; on your tax bill" />
                </div>
              </Row>

              {/* SECTION 3 */}
              <SectionTag n="03" t="Survey Details" />
              <div style={field}>
                <label style={label}>Type of Survey *</label>
                <select style={input} name="Survey Type" required defaultValue="">
                  <option value="" disabled>Select&hellip;</option>
                  {SURVEY_TYPES.map((s, i) => <option key={i}>{s}</option>)}
                </select>
              </div>
              <div style={field}>
                <label style={label}>Timeline *</label>
                <select style={input} name="Timeline" required defaultValue="">
                  <option value="" disabled>Select&hellip;</option>
                  <option>ASAP</option><option>Within 2 weeks</option>
                  <option>Within a month</option><option>Just getting a quote</option>
                </select>
              </div>
              <div style={field}>
                <label style={label}>Additional Information</label>
                <textarea style={{ ...input, minHeight: 100, resize: 'vertical' }} name="Additional Information"
                  placeholder="Closing date, lender deadline, lot size, access notes&hellip;" />
              </div>

              {/* honeypot */}
              <input type="checkbox" name="botcheck" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />

              <button type="submit" disabled={status === 'sending'} style={{
                width: '100%', marginTop: 10, padding: '16px', background: C.stake,
                border: `1px solid ${C.ink}`, color: C.ink, fontSize: 14, letterSpacing: '0.14em',
                textTransform: 'uppercase', cursor: 'pointer', ...mono, fontWeight: 600,
                opacity: status === 'sending' ? 0.6 : 1,
              }}>
                {status === 'sending' ? 'Sending&hellip;' : 'Request My Survey &rarr;'}
              </button>
              {status === 'err' && (
                <p style={{ color: C.red, ...mono, fontSize: 12, marginTop: 12, textAlign: 'center' }}>
                  Something went wrong sending that. Call (704) 455-9553 or try again.
                </p>
              )}
            </form>
          )}
        </section>

        <footer style={{ borderTop: `1px solid ${C.rule}`, padding: '24px 0 56px', ...mono, fontSize: 11, color: C.sub, display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 10 }}>
          <span>HARRISBURG SURVEYING &#183; EST. 1989</span>
          <span>jwest@harrisburgsurveying.com &#183; (704) 455-9553</span>
        </footer>
      </div>
    </div>
  );
}

function SectionTag({ n, t }) {
  return (
    <div style={{ display: 'flex', alignItems: 'baseline', gap: 14, margin: '34px 0 20px', borderBottom: '1px solid #16140F', paddingBottom: 8 }}>
      <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 12, color: '#B7410E', letterSpacing: '0.1em' }}>{n}</span>
      <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 12, letterSpacing: '0.18em', textTransform: 'uppercase' }}>{t}</span>
    </div>
  );
}

function Row({ children }) {
  return <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 18 }} className="hb-row">{children}</div>;
}
