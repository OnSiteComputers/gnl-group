// HarrisburgProposal build: 2026-07-05 v1
import React, { useEffect } from "react";
/* ============================================================
   HARRISBURG SURVEYING &mdash; PROPOSAL  (route: /harrisburg-proposal)
   For: James West, Harrisburg Surveying
   From: GNL Digital Group
   Two tiers &mdash; $2,500 bundled / $3,000 bundled + live SEO dashboard.
   Same plat-sheet identity as the demo so the two pages read as one pitch.
   ============================================================ */

const C = {
  ink:   '#16140F',
  paper: '#F4F1E8',
  stake: '#F2C200',
  rule:  '#C9C3B2',
  red:   '#B7410E',
  sub:   '#6B6657',
  panel: '#FBFAF5',
};

// ==================== EDIT ME: demo + contact links ====================
const DEMO_URL  = 'https://gnldigitalgroup.com/harrisburg-demo';
const GNL_PHONE = '(704) 594-5826';
const GNL_EMAIL = 'greg@gnldigitalgroup.com';

// ==================== Action links ====================
const PAY_A_URL    = 'https://securelink-prod.valorpaytech.com:4430/?redirect=1&uid=a3672686-6b91-11f1-bfa3-0e5b8ebc1287';
const PAY_B_URL    = 'https://securelink-prod.valorpaytech.com:4430/?redirect=1&uid=f010ff6f-6b91-11f1-bfa3-0e5b8ebc1287';
const SIGN_URL     = 'https://www.jotform.com/sign/261691119401048/invite/01kvf382n3e81022cbe7824a6d';
const CONTRACT_URL = '/GNL-Service-Agreement-Harrisburg-Surveying.pdf';

const serif = { fontFamily: "'Spectral','Georgia',serif" };
const mono  = { fontFamily: "'JetBrains Mono','SFMono-Regular',ui-monospace,monospace" };

export default function HarrisburgProposal() {
  useEffect(() => { console.log("HarrisburgProposal build: 2026-07-05 v1"); }, []);

  return (
    <div style={{ background: C.paper, minHeight: '100vh', color: C.ink, ...serif }}>
      <div style={{
        position: 'fixed', inset: 0, pointerEvents: 'none', opacity: 0.5,
        backgroundImage: `linear-gradient(${C.rule} 1px, transparent 1px), linear-gradient(90deg, ${C.rule} 1px, transparent 1px)`,
        backgroundSize: '32px 32px',
      }} />

      <div style={{ position: 'relative', maxWidth: 880, margin: '0 auto', padding: '0 24px' }}>

        {/* ==================== HEADER ==================== */}
        <header style={{ paddingTop: 48, paddingBottom: 28, borderBottom: `2px solid ${C.ink}` }}>
          <img src="/harrisburg-logo.png" alt="Harrisburg Surveying"
            style={{ width: '100%', maxWidth: 380, height: 'auto', display: 'block', marginBottom: 28 }} />
          <div style={{ ...mono, fontSize: 11, letterSpacing: '0.2em', color: C.red, marginBottom: 14 }}>
            &#9674; WEBSITE & ONLINE PRESENCE PROPOSAL
          </div>
          <h1 style={{ fontSize: 'clamp(32px,5.5vw,52px)', lineHeight: 1.0, margin: 0, fontWeight: 700 }}>
            Harrisburg Surveying,<br />brought current.
          </h1>
          <div style={{ ...mono, fontSize: 12, color: C.sub, marginTop: 20, display: 'flex', gap: 24, flexWrap: 'wrap' }}>
            <span>PREPARED FOR: JAMES WEST</span>
            <span>BY: GNL DIGITAL GROUP</span>
          </div>
        </header>

        {/* ==================== THE HONEST OPENER ==================== */}
        <section style={{ padding: '44px 0', borderBottom: `1px solid ${C.rule}` }}>
          <p style={{ fontSize: 'clamp(18px,2.6vw,24px)', lineHeight: 1.45, margin: 0, maxWidth: 660 }}>
            Six years ago I built you a site that was a big step up from what you had &mdash;
            and it served you well. But the web moves fast, and what looked sharp in 2018
            is the baseline today. A firm that's been surveying North Carolina since 1989
            deserves a site that matches the reputation.
          </p>
          <p style={{ fontSize: 'clamp(18px,2.6vw,24px)', lineHeight: 1.45, marginTop: 18, maxWidth: 660 }}>
            This is what current looks like: a fast, real website, an intake form that
            does the work for you, and everything &mdash; hosting, domain, email &mdash; handled.
          </p>
          <a href={DEMO_URL} style={{
            display: 'inline-block', marginTop: 28, ...mono, fontSize: 13, letterSpacing: '0.1em',
            background: C.stake, color: C.ink, padding: '14px 22px', border: `1px solid ${C.ink}`,
            textDecoration: 'none', fontWeight: 600,
          }}>
            &#9674; SEE THE LIVE DEMO &rarr;
          </a>
        </section>

        {/* ==================== WHAT'S INCLUDED ==================== */}
        <section style={{ padding: '44px 0', borderBottom: `1px solid ${C.rule}` }}>
          <SectionHead n="01" t="What's included, both tiers" />
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {[
              ['Custom-built website', 'Designed for a survey firm \u2014 not a template. Mobile, fast, and yours.'],
              ['Smart "Request a Survey" form', 'Replaces the paper RFP. Routes every request straight to your inbox, formatted and complete.'],
              ['Hosting \u2014 handled', 'Built on our own infrastructure. Fast, secure, nothing for you to manage.'],
              ['Domain \u2014 handled', 'harrisburgsurveying.com renewals and DNS, managed for you, as long as you\u2019re with us.'],
              ['Business email \u2014 handled', 'jwest@harrisburgsurveying.com kept working and professional.'],
            ].map(([h, d], i) => (
              <li key={i} style={{ display: 'flex', gap: 16, padding: '14px 0', borderTop: i ? `1px solid ${C.rule}` : 'none' }}>
                <span style={{ ...mono, color: C.red, fontSize: 13, marginTop: 3 }}>&#9674;</span>
                <div>
                  <div style={{ fontSize: 17, fontWeight: 600 }}>{h}</div>
                  <div style={{ color: C.sub, fontSize: 15, marginTop: 2 }}>{d}</div>
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* ==================== PRICING ==================== */}
        <section style={{ padding: '44px 0', borderBottom: `1px solid ${C.rule}` }}>
          <SectionHead n="02" t="Two ways to go" />
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }} className="hb-tiers">

            {/* TIER A */}
            <div style={{ border: `1px solid ${C.ink}`, background: C.panel, padding: 28, display: 'flex', flexDirection: 'column' }}>
              <div style={{ ...mono, fontSize: 11, letterSpacing: '0.16em', color: C.sub }}>TIER A</div>
              <div style={{ fontSize: 44, fontWeight: 700, margin: '8px 0 2px' }}>$2,500</div>
              <div style={{ ...mono, fontSize: 11, color: C.sub, letterSpacing: '0.08em' }}>YEAR ONE &#183; ALL-IN</div>
              <p style={{ fontSize: 15, color: C.sub, marginTop: 16, lineHeight: 1.5 }}>
                The complete website, the smart intake form, and hosting, domain &
                email all bundled and handled. One price, one year.
              </p>
              <a href={PAY_A_URL} style={{
                display: 'block', textAlign: 'center', marginTop: 'auto', ...mono, fontSize: 12,
                letterSpacing: '0.1em', background: C.ink, color: C.paper, padding: '12px',
                textDecoration: 'none', fontWeight: 600,
              }}>PAY TIER A &#183; $2,500 &rarr;</a>
            </div>

            {/* TIER B */}
            <div style={{ border: `2px solid ${C.ink}`, background: '#fff', padding: 28, position: 'relative', display: 'flex', flexDirection: 'column' }}>
              <div style={{ position: 'absolute', top: -1, right: -1, background: C.stake, ...mono, fontSize: 10, letterSpacing: '0.12em', padding: '5px 10px', border: `1px solid ${C.ink}` }}>
                RECOMMENDED
              </div>
              <div style={{ ...mono, fontSize: 11, letterSpacing: '0.16em', color: C.sub }}>TIER B</div>
              <div style={{ fontSize: 44, fontWeight: 700, margin: '8px 0 2px' }}>$3,000</div>
              <div style={{ ...mono, fontSize: 11, color: C.sub, letterSpacing: '0.08em' }}>YEAR ONE &#183; ALL-IN + SEO</div>
              <p style={{ fontSize: 15, color: C.sub, marginTop: 16, lineHeight: 1.5 }}>
                Everything in Tier A, plus SEO optimization so people searching for a
                surveyor near them find <em>you</em> &mdash; and your own
                <strong style={{ color: C.ink }}> live results dashboard</strong> you
                can check anytime to watch it working.
              </p>
              <a href={PAY_B_URL} style={{
                display: 'block', textAlign: 'center', marginTop: 'auto', ...mono, fontSize: 12,
                letterSpacing: '0.1em', background: C.stake, color: C.ink, padding: '12px',
                textDecoration: 'none', fontWeight: 600, border: `1px solid ${C.ink}`,
              }}>PAY TIER B &#183; $3,000 &rarr;</a>
            </div>
          </div>
          <p style={{ ...mono, fontSize: 11, color: C.sub, marginTop: 18 }}>
            One-year minimum. Hosting, domain & email stay handled for as long as you&rsquo;re with us.
          </p>
        </section>

        {/* ==================== SIGNING BONUS ==================== */}
        <section style={{ padding: '36px 0', borderBottom: `1px solid ${C.rule}` }}>
          <div style={{ border: `2px solid ${C.ink}`, background: C.stake, padding: 'clamp(22px,4vw,32px)' }}>
            <div style={{ ...mono, fontSize: 11, letterSpacing: '0.18em', color: C.ink, marginBottom: 12 }}>
              &#9674; INCLUDED WHEN YOU SIGN &mdash; EITHER TIER
            </div>
            <h3 style={{ fontSize: 'clamp(20px,3vw,26px)', margin: '0 0 10px', fontWeight: 700 }}>
              A fresh logo & 500 business cards, on the house.
            </h3>
            <p style={{ fontSize: 16, lineHeight: 1.5, margin: 0, maxWidth: 620 }}>
              I designed a new logo for Harrisburg Surveying &mdash; cleaner, sharper, built to
              match the new site. Sign on, and it&rsquo;s yours, along with <strong>500 printed
              business cards</strong> carrying it. No extra charge &mdash; it comes with the deal.
            </p>

            {/* card showcase */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginTop: 24 }} className="hb-cards">
              <figure style={{ margin: 0 }}>
                <div style={{ background: '#fff', padding: 14, border: `1px solid ${C.ink}` }}>
                  <img src="/James-West-Business-Card-front.png" alt="Business card &mdash; logo side"
                    style={{ width: '100%', height: 'auto', display: 'block' }} />
                </div>
                <figcaption style={{ ...mono, fontSize: 10, letterSpacing: '0.1em', color: C.ink, marginTop: 8, textTransform: 'uppercase' }}>Front &#183; logo</figcaption>
              </figure>
              <figure style={{ margin: 0 }}>
                <div style={{ background: '#fff', padding: 14, border: `1px solid ${C.ink}` }}>
                  <img src="/James-West-Business-Card-Back.png" alt="Business card &mdash; contact side"
                    style={{ width: '100%', height: 'auto', display: 'block' }} />
                </div>
                <figcaption style={{ ...mono, fontSize: 10, letterSpacing: '0.1em', color: C.ink, marginTop: 8, textTransform: 'uppercase' }}>Back &#183; your details</figcaption>
              </figure>
            </div>
          </div>
        </section>

        {/* ==================== WHAT SEO MEANS (plain English) ==================== */}
        <section style={{ padding: '44px 0', borderBottom: `1px solid ${C.rule}` }}>
          <SectionHead n="03" t={'What "SEO" actually means'} />
          <p style={{ fontSize: 17, lineHeight: 1.5, maxWidth: 660, margin: 0 }}>
            When someone in your area needs a survey, the first thing they do is type
            into Google &mdash; &ldquo;land surveyor near me,&rdquo; &ldquo;boundary survey Cabarrus County,&rdquo;
            &ldquo;ALTA survey Charlotte.&rdquo; SEO (search engine optimization) is the work that
            puts Harrisburg Surveying near the top of that list, instead of buried on
            page three where nobody looks.
          </p>
          <p style={{ fontSize: 17, lineHeight: 1.5, maxWidth: 660, marginTop: 16 }}>
            It&rsquo;s the difference between a website that just <em>exists</em> and one that
            actually brings you the phone call. We optimize your site so Google
            understands what you do, where you do it, and trusts you enough to show you
            first &mdash; and the live dashboard below lets you watch it happening in real time.
          </p>
        </section>

        {/* ==================== THE SEO DASHBOARD (tier B differentiator) ==================== */}
        <section style={{ padding: '44px 0', borderBottom: `1px solid ${C.rule}` }}>
          <SectionHead n="04" t="The live dashboard (Tier B)" />
          <p style={{ fontSize: 17, lineHeight: 1.5, maxWidth: 660, margin: 0 }}>
            Most agencies bill you for SEO and ask you to take their word for it. You
            get a private, password-protected page &mdash; built into our site, branded to
            yours &mdash; showing your real Google search performance: how many people found
            you, what they searched, where you rank. Updated automatically. No mystery,
            no monthly slideshow. You log in whenever you want and see exactly what
            you&rsquo;re paying for.
          </p>
        </section>

        {/* ==================== CLOSE ==================== */}
        <section style={{ padding: '48px 0 16px' }}>
          <h2 style={{ fontSize: 'clamp(24px,4vw,36px)', margin: 0, lineHeight: 1.1 }}>
            Take a look, then let&rsquo;s talk.
          </h2>
          <p style={{ fontSize: 17, color: C.sub, marginTop: 14, maxWidth: 600 }}>
            The demo is live and the form actually works &mdash; fill it out and see what
            lands in the inbox. When you&rsquo;re ready, I&rsquo;m a call away.
          </p>

          {/* ready-to-go action row */}
          <div style={{ marginTop: 30, padding: '24px', border: `2px solid ${C.ink}`, background: C.panel }}>
            <div style={{ ...mono, fontSize: 11, letterSpacing: '0.16em', color: C.red, marginBottom: 14 }}>
              &#9674; READY TO MOVE FORWARD?
            </div>
            <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
              <a href={PAY_A_URL} style={{
                ...mono, fontSize: 13, letterSpacing: '0.1em', background: C.ink, color: C.paper,
                padding: '14px 22px', textDecoration: 'none', fontWeight: 600,
              }}>PAY TIER A &#183; $2,500 &rarr;</a>
              <a href={PAY_B_URL} style={{
                ...mono, fontSize: 13, letterSpacing: '0.1em', background: C.stake, color: C.ink,
                padding: '14px 22px', border: `1px solid ${C.ink}`, textDecoration: 'none', fontWeight: 600,
              }}>PAY TIER B &#183; $3,000 &rarr;</a>
            </div>
            <div style={{ height: 1, background: C.rule, margin: '18px 0' }} />
            <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
              <a href={SIGN_URL} target="_blank" rel="noopener noreferrer" style={{
                ...mono, fontSize: 13, letterSpacing: '0.1em', background: C.ink, color: C.paper,
                padding: '14px 22px', textDecoration: 'none', fontWeight: 600,
              }}>SIGN THE AGREEMENT &rarr;</a>
              <a href={CONTRACT_URL} target="_blank" rel="noopener noreferrer" style={{
                ...mono, fontSize: 13, letterSpacing: '0.1em', background: 'none', color: C.ink,
                padding: '14px 22px', border: `1px solid ${C.ink}`, textDecoration: 'none',
              }}>VIEW / PRINT CONTRACT</a>
            </div>
            <p style={{ ...mono, fontSize: 11, color: C.sub, marginTop: 14, lineHeight: 1.5 }}>
              Prefer to pay by check? View or print the contract above &mdash; we&rsquo;ll take it from there.
            </p>
          </div>

          <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap', marginTop: 26 }}>
            <a href={DEMO_URL} style={{
              ...mono, fontSize: 13, letterSpacing: '0.1em', background: C.stake, color: C.ink,
              padding: '14px 22px', border: `1px solid ${C.ink}`, textDecoration: 'none', fontWeight: 600,
            }}>&#9674; OPEN THE DEMO &rarr;</a>
            <a href={`tel:7045945826`} style={{
              ...mono, fontSize: 13, letterSpacing: '0.1em', background: 'none', color: C.ink,
              padding: '14px 22px', border: `1px solid ${C.ink}`, textDecoration: 'none',
            }}>CALL GNL &#183; {GNL_PHONE}</a>
          </div>
        </section>

        <footer style={{ borderTop: `1px solid ${C.rule}`, marginTop: 40, padding: '24px 0 56px', ...mono, fontSize: 11, color: C.sub, display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 10 }}>
          <span>GNL DIGITAL GROUP</span>
          <span>{GNL_EMAIL} \u00B7 {GNL_PHONE}</span>
        </footer>
      </div>
    </div>
  );
}

function SectionHead({ n, t }) {
  return (
    <div style={{ display: 'flex', alignItems: 'baseline', gap: 14, marginBottom: 24 }}>
      <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 12, color: '#B7410E', letterSpacing: '0.1em' }}>{n}</span>
      <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 12, letterSpacing: '0.18em', textTransform: 'uppercase' }}>{t}</span>
    </div>
  );
}
