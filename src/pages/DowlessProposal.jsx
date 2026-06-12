import { useEffect } from "react";

// ════════════════════════════════════════════════════════════════
//  DOWLESS LAW FIRM — PROPOSAL PAGE  (route: /dowless)
//
//  Add to your router:
//    <Route path="/dowless" element={<DowlessProposal />} />
//
//  ── PER-CLIENT SETTINGS ── edit these, then republish ──
//  Pricing below is SUGGESTED — change the numbers before sending.
//  When Ann-Charlotte says yes, paste real links into SIGN/PAY.
// ════════════════════════════════════════════════════════════════
const FIRM_NAME = "Dowless Law Firm, P.C.";      // site says P.C. — confirm vs LLC
const CLIENT_FIRST = "Ann-Charlotte";
const SITE_PRICE = "$2,950";                      // SUGGESTED — one-time, new website build
const CARE_MONTHLY = "$200";                      // /mo — hosting + domain + email + change requests, 12-mo term
const OFFICE_PLAN = "$400";                       // /mo after year one — phones + 2 hrs computer work + VPN + support
const ONSITE_HOURS = "2 hours";                   // monthly On-Site computer work included
const PHONE_COUNT = "4";
const PHONE_MODEL = "Grandstream GRP2636 IP desk phones";
const CONTACT_PHONE = "980-236-0810";             // Greg / GNL
const CONTACT_EMAIL = "greg@gnldigitalgroup.com";
const SIGN_URL = "PASTE_SIGNING_LINK_WHEN_READY";
const PAY_URL = "PASTE_PAYMENT_LINK_WHEN_READY";

export default function DowlessProposal() {
  useEffect(() => {
    document.title = "A proposal for Dowless Law Firm — GNL Digital Group";
  }, []);

  return (
    <div className="dlp">
      <style>{css}</style>

      {/* ── HERO — the letter from next door ── */}
      <header className="dlp-hero">
        <div className="dlp-doors" aria-hidden="true">
          <span className="dlp-door">51</span>
          <span className="dlp-wall" />
          <span className="dlp-door">53</span>
        </div>
        <p className="dlp-eyebrow">FROM 53 CABARRUS AVE W &nbsp;·&nbsp; TO 51 CABARRUS AVE W &nbsp;·&nbsp; HALCYON SQUARE, CONCORD</p>
        <h1>
          Fifteen years of sharing a wall.<br />
          <em>Let&rsquo;s finally fix the website.</em>
        </h1>
        <p className="dlp-lede">
          {CLIENT_FIRST} — you&rsquo;ve trusted me with your computers since you moved in
          next door. This is a straightforward quote for two things your office needs:
          a website that looks like the firm you actually are, and a phone system
          built for four people instead of two copper lines. Nothing else. No upsell.
        </p>
        <div className="dlp-contact" style={{ justifyContent: "center" }}>
          <a className="dlp-btn dlp-btn-primary" href="/dowless-demo">See your sample website</a>
          <a className="dlp-btn" href="#quote">See the quote</a>
        </div>
      </header>

      {/* ── THE HONEST AUDIT ── */}
      <section className="dlp-section dlp-audit">
        <p className="dlp-eyebrow">WHAT YOUR CURRENT SITE TELLS PEOPLE</p>
        <h2>Your work is current. Your website is from another decade.</h2>
        <div className="dlp-audit-grid">
          <div className="dlp-audit-card">
            <span className="dlp-audit-flag">Visitor counter</span>
            <p>There is a hit counter on your homepage. Clients under 60 have never seen one. It quietly dates everything around it.</p>
          </div>
          <div className="dlp-audit-card">
            <span className="dlp-audit-flag">AOL address in the code</span>
            <p>An old <strong>@aol.com</strong> address still lives in the site&rsquo;s hidden description — the text Google shows when someone searches your name. Your office runs on @dowlesslaw.com; the site should say so.</p>
          </div>
          <div className="dlp-audit-card">
            <span className="dlp-audit-flag">Built for 2005 screens</span>
            <p>Hand-coded pages, desktop-only layout. Most people who look you up do it from a phone — where the site is genuinely hard to read and use.</p>
          </div>
          <div className="dlp-audit-card">
            <span className="dlp-audit-flag">Strong story, buried</span>
            <p>Emory J.D., Vanderbilt, admitted in two states and three federal districts, 25+ years of practice. None of it presented the way it deserves.</p>
          </div>
        </div>
        <p className="dlp-note">
          To be clear: none of this reflects on the firm. It reflects on the website.
          People in foreclosure are scared and checking whether they can trust you —
          the site&rsquo;s only job is to say <em>yes, you can</em>, before they ever call.
        </p>
      </section>

      {/* ── SCOPE: TWO THINGS ── */}
      <section className="dlp-section" id="quote">
        <p className="dlp-eyebrow">THE QUOTE — ONE AGREEMENT, ONE BONUS</p>
        <h2>A year of website service. The phone system rides along free.</h2>

        <div className="dlp-scope">
          {/* WEBSITE — the agreement */}
          <div className="dlp-card">
            <h3>01 — A website worthy of the firm</h3>
            <ul>
              <li>Clean, modern site that works perfectly on phones</li>
              <li>Built around what you actually do: <strong>Chapter 7 &amp; 13 Bankruptcy</strong> and <strong>Wills</strong>, with your other practice areas covered</li>
              <li>Your credentials and 25+ years presented properly</li>
              <li>Free-consultation contact that goes straight to your inbox</li>
              <li>Every change you want for a full year — included. New wording, new photo, a new page: just ask</li>
              <li><strong>One bill covers your whole web presence:</strong> hosting, your domain, and your email service — all paid and managed by me. You will never see another renewal notice, hosting invoice, or email bill</li>
              <li>Your @dowlesslaw.com email — Ann-Charlotte, Kathy, Dodie, Heidi — keeps working untouched. I handle the technical move so nothing breaks for a single minute</li>
              <li>Secure, fast hosting on modern infrastructure</li>
            </ul>
            <div className="dlp-price">
              <div><span className="dlp-amount">{SITE_PRICE}</span><span className="dlp-per">one-time build</span></div>
              <div><span className="dlp-amount">{CARE_MONTHLY}</span><span className="dlp-per">/month — hosting, domain, email &amp; unlimited change requests, 12-month agreement</span></div>
            </div>
          </div>

          {/* PHONES — the signing bonus */}
          <div className="dlp-card dlp-bonus">
            <h3>02 — Sign for the year, and the phones are on me</h3>
            <p className="dlp-bonus-line">When you sign the 12-month website agreement, your office gets a complete new phone system as the signing bonus:</p>
            <ul>
              <li><strong>{PHONE_COUNT} {PHONE_MODEL} — free.</strong> One on every desk: yours, Kathy&rsquo;s, Dodie&rsquo;s, Heidi&rsquo;s</li>
              <li><strong>I pay your phone bill for the entire first year.</strong> Not a discount — paid</li>
              <li>Your number (704-782-7529) stays exactly the same — callers notice nothing</li>
              <li><strong>Fax, your way:</strong> send a 60-page filing from email or the portal in seconds — no more standing at the machine — and faxes arrive in your inbox as PDFs, confirmed and archived</li>
              <li><strong>Want to keep your fax machine too?</strong> A small adapter keeps it working exactly like today. Both ways run side by side — your office chooses</li>
              <li><strong>I train Kathy, Dodie, and Heidi in person</strong> on the new system — and I&rsquo;m next door whenever a question comes up</li>
              <li><strong>{ONSITE_HOURS} of On-Site computer work, free, every month.</strong> Slow PC, printer acting up, new machine setup — covered, all year</li>
              <li><strong>Secure work-from-home for you and Kathy:</strong> a modern VPN so you can reach the office from your house safely. The old exposed remote-desktop setup goes away — set up while I&rsquo;m installing the phones</li>
              <li><strong>Your cell number comes OFF the public website.</strong> The current site shows a personal cell for texting — the new site won&rsquo;t. And for a small add-on, I can set up a dedicated business text line so clients can text the office without anyone&rsquo;s personal number ever being out there</li>
              <li>Voicemail delivered to email, transfers between desks, after-hours rules you control</li>
              <li>Installed in one afternoon, by me, from next door</li>
            </ul>
            <div className="dlp-price">
              <div><span className="dlp-amount">$0</span><span className="dlp-per">first year — phones, install, service, VPN &amp; {ONSITE_HOURS} monthly computer work included</span></div>
              <div><span className="dlp-amount">{OFFICE_PLAN}</span><span className="dlp-per">/month after year one — the GNL Office Plan: all four lines + fax, {ONSITE_HOURS} of On-Site computer work every month, VPN &amp; network upkeep, and priority next-door support. Cancel anytime</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* ── NEIGHBOR TIP: INTERNET BILL ── */}
      <section className="dlp-section dlp-tip">
        <p className="dlp-eyebrow">NOT PART OF THE QUOTE — JUST A NEIGHBOR TIP</p>
        <h2>While we&rsquo;re at it: that Spectrum bill.</h2>
        <p>
          I run T-Mobile Business Internet in my office next door — about $70 a month.
          If you&rsquo;re paying Spectrum $100-something for the same job, that&rsquo;s real money
          every month for nothing. You&rsquo;d order it under your own account (no middleman,
          no markup, it&rsquo;s yours) — and <strong>I&rsquo;ll set the whole thing up for you, free.</strong> Takes
          me an afternoon, saves you several hundred dollars a year, and the new phones
          run great on it.
        </p>
      </section>

      {/* ── THE NO-SEO PROMISE ── */}
      <section className="dlp-section dlp-promise">
        <p className="dlp-eyebrow">WHAT I&rsquo;M NOT SELLING YOU</p>
        <h2>No marketing pitch. You said you have more work than you can do — I believe you.</h2>
        <p>
          My agency does SEO and marketing for firms that want more clients.
          You don&rsquo;t, so it&rsquo;s not in this quote and I won&rsquo;t bring it up again.
          If that ever changes — when you bring someone on, or when it&rsquo;s time to
          think about what the practice looks like down the road — it&rsquo;s one
          conversation away. Until then: a proper website and phones that work. That&rsquo;s the whole proposal.
        </p>
      </section>

      {/* ── WHY ME ── */}
      <section className="dlp-section dlp-neighbor">
        <p className="dlp-eyebrow">WHY THIS IS EASY</p>
        <h2>Your IT guy is twenty feet away. He has been for fifteen years.</h2>
        <p>
          You already know how I work — I&rsquo;ve been keeping your office computers
          running since you moved into Halcyon Square. Same person, same standards,
          one door over. When something needs attention, you don&rsquo;t file a ticket
          with a stranger. You knock on the wall.
        </p>
      </section>

      {/* ── NEXT STEPS ── */}
      <section className="dlp-section dlp-next">
        <p className="dlp-eyebrow">NEXT STEPS</p>
        <h2>Walk over, call, or email. Pick what&rsquo;s easiest.</h2>
        <div className="dlp-contact">
          <a className="dlp-btn dlp-btn-primary" href={`tel:${CONTACT_PHONE.replace(/-/g, "")}`}>Call Greg — {CONTACT_PHONE}</a>
          <a className="dlp-btn" href={`mailto:${CONTACT_EMAIL}?subject=Dowless%20Law%20proposal`}>Email {CONTACT_EMAIL}</a>
        </div>
        <p className="dlp-note">
          Say yes and I&rsquo;ll have a one-page agreement ready the same day.
          The website takes shape in about two weeks; phones install in an afternoon
          — I&rsquo;ll schedule it so your office never misses a call.
        </p>
      </section>

      <footer className="dlp-footer">
        <span>Prepared for {FIRM_NAME} · {CLIENT_FIRST} Dowless, Attorney at Law</span>
        <span>GNL Digital Group · 53 Cabarrus Ave W, Concord, NC · gnldigitalgroup.com</span>
      </footer>
    </div>
  );
}

const css = `
@import url('https://fonts.googleapis.com/css2?family=Libre+Caslon+Text:ital,wght@0,400;0,700;1,400&family=Public+Sans:wght@400;600;700&family=IBM+Plex+Mono:wght@500&display=swap');

.dlp {
  --ink: #232B33;
  --paper: #FAF9F6;
  --brick: #8C3B2E;
  --slate: #3E4C59;
  --brass: #A98E5B;
  --line: #D8D4CC;
  background: var(--paper);
  color: var(--ink);
  font-family: 'Public Sans', -apple-system, sans-serif;
  line-height: 1.6;
  margin: 0;
  min-height: 100vh;
}
.dlp h1, .dlp h2, .dlp h3 { font-family: 'Libre Caslon Text', Georgia, serif; line-height: 1.18; margin: 0 0 18px; }
.dlp-eyebrow { font-family: 'IBM Plex Mono', monospace; font-size: 11px; letter-spacing: 1.6px; color: var(--brick); font-weight: 500; margin: 0 0 14px; }

/* hero */
.dlp-hero { max-width: 880px; margin: 0 auto; padding: 72px 24px 64px; text-align: center; }
.dlp-doors { display: flex; align-items: center; justify-content: center; gap: 0; margin-bottom: 26px; }
.dlp-door {
  font-family: 'Libre Caslon Text', serif; font-size: 28px; font-weight: 700; color: var(--paper);
  background: var(--slate); width: 64px; height: 84px; display: flex; align-items: center; justify-content: center;
  border-radius: 6px 6px 0 0; box-shadow: inset 0 -10px 0 rgba(0,0,0,0.18);
}
.dlp-door:last-child { background: var(--brick); }
.dlp-wall { width: 10px; height: 84px; background: repeating-linear-gradient(0deg, var(--brass) 0 6px, #8d7546 6px 12px); }
.dlp-hero h1 { font-size: clamp(30px, 5vw, 46px); }
.dlp-hero h1 em { color: var(--brick); font-style: italic; }
.dlp-lede { max-width: 620px; margin: 18px auto 30px; font-size: 17px; color: var(--slate); }

/* sections */
.dlp-section { max-width: 880px; margin: 0 auto; padding: 56px 24px; border-top: 1px solid var(--line); }
.dlp-section h2 { font-size: clamp(24px, 3.6vw, 32px); max-width: 700px; }

/* audit */
.dlp-audit-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 16px; margin-top: 28px; }
.dlp-audit-card { background: #fff; border: 1px solid var(--line); border-radius: 10px; padding: 20px; }
.dlp-audit-flag {
  display: inline-block; font-family: 'IBM Plex Mono', monospace; font-size: 11px; letter-spacing: 0.6px;
  background: #F6E8E4; color: var(--brick); padding: 4px 10px; border-radius: 99px; margin-bottom: 10px; font-weight: 500;
}
.dlp-audit-card p { margin: 0; font-size: 14.5px; color: var(--slate); }
.dlp-note { margin-top: 26px; font-size: 15px; color: var(--slate); max-width: 660px; }

/* scope cards */
.dlp-scope { display: grid; grid-template-columns: repeat(auto-fit, minmax(310px, 1fr)); gap: 20px; margin-top: 30px; }
.dlp-card { background: #fff; border: 1px solid var(--line); border-top: 4px solid var(--brick); border-radius: 12px; padding: 28px; display: flex; flex-direction: column; }
.dlp-card:last-child { border-top-color: var(--brass); }
.dlp-bonus { background: linear-gradient(180deg, #FDFBF6, #fff); }
.dlp-bonus-line { font-size: 14.5px; color: var(--slate); margin: 0 0 14px; font-style: italic; }
.dlp-card h3 { font-size: 21px; }
.dlp-card ul { padding-left: 18px; margin: 0 0 22px; flex: 1; }
.dlp-card li { margin-bottom: 9px; font-size: 15px; }
.dlp-price { border-top: 1px dashed var(--line); padding-top: 16px; display: grid; gap: 8px; }
.dlp-amount { font-family: 'Libre Caslon Text', serif; font-size: 26px; font-weight: 700; color: var(--ink); margin-right: 8px; }
.dlp-per { font-size: 13px; color: var(--slate); }

/* promise + neighbor */
.dlp-promise h2, .dlp-neighbor h2 { color: var(--ink); }
.dlp-promise p, .dlp-neighbor p { max-width: 680px; font-size: 16px; color: var(--slate); }
.dlp-promise { background: #fff; border-left: 4px solid var(--brass); border-radius: 0 12px 12px 0; }
.dlp-tip { background: #F4F1E9; border-radius: 14px; }
.dlp-tip h2 { font-size: clamp(21px, 3vw, 26px); }
.dlp-tip p { max-width: 680px; font-size: 15.5px; color: var(--slate); }

/* buttons */
.dlp-btn {
  display: inline-block; padding: 13px 26px; border-radius: 8px; text-decoration: none;
  font-weight: 700; font-size: 15px; color: var(--ink); border: 1.5px solid var(--ink); transition: transform .12s ease;
}
.dlp-btn:hover { transform: translateY(-1px); }
.dlp-btn-primary { background: var(--brick); border-color: var(--brick); color: #fff; }
.dlp-contact { display: flex; gap: 14px; flex-wrap: wrap; margin: 26px 0 10px; }

/* footer */
.dlp-footer {
  border-top: 1px solid var(--line); max-width: 880px; margin: 0 auto; padding: 26px 24px 48px;
  display: flex; justify-content: space-between; gap: 12px; flex-wrap: wrap;
  font-family: 'IBM Plex Mono', monospace; font-size: 11px; color: var(--slate);
}
@media (prefers-reduced-motion: reduce) { .dlp-btn { transition: none; } }
`;
