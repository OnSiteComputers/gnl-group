import { useEffect } from "react";

// ════════════════════════════════════════════════════════════════
//  DOWLESS LAW — SAMPLE WEBSITE (route: /dowless-demo)
//
//  Add to your router:
//    <Route path="/dowless-demo" element={<DowlessDemo />} />
//
//  Design rule: clients facing debt are already in a dark place.
//  The site is the daylight — warm, calm, unhurried. "Halcyon."
//  All buttons are inert (demo only) except tel:/sms: links.
// ════════════════════════════════════════════════════════════════

const PHONE = "704-782-7529";
const TEXT = "704-918-3072";

export default function DowlessDemo() {
  useEffect(() => {
    document.title = "Dowless Law Firm — Bankruptcy & Wills, Concord NC";
  }, []);

  const inert = (e) => e.preventDefault();

  return (
    <div className="dd">
      <style>{css}</style>

      {/* ── NAV ── */}
      <nav className="dd-nav">
        <div className="dd-nav-inner">
          <span className="dd-logo">Dowless <em>Law Firm</em></span>
          <div className="dd-nav-links">
            <a href="#bankruptcy" >Bankruptcy</a>
            <a href="#wills">Wills</a>
            <a href="#about">About</a>
            <a className="dd-nav-cta" href={`tel:${PHONE.replace(/-/g, "")}`}>{PHONE}</a>
          </div>
        </div>
      </nav>

      {/* ── HERO ── */}
      <header className="dd-hero">
        <div className="dd-hero-inner">
          <p className="dd-kicker">Concord, North Carolina · Since 1995</p>
          <h1>The calls can stop.<br />The worry can stop.<br /><span>There is a way through this.</span></h1>
          <p className="dd-lede">
            If you&rsquo;re behind on bills, facing foreclosure, or being chased by
            creditors — you are not the first person to sit in that chair, and you
            won&rsquo;t be the last we help out of it. Bankruptcy law exists to give
            people a fresh start. Let&rsquo;s talk about yours. The first conversation
            is free.
          </p>
          <div className="dd-hero-ctas">
            <a className="dd-btn dd-btn-gold" href={`tel:${PHONE.replace(/-/g, "")}`}>Call {PHONE}</a>
            <a className="dd-btn dd-btn-quiet" href={`sms:${TEXT.replace(/-/g, "")}`}>Or text us — {TEXT}</a>
          </div>
          <p className="dd-hero-note">Free consultation · Evening appointments available</p>
        </div>
        <div className="dd-sun" aria-hidden="true" />
      </header>

      {/* ── REASSURANCE STRIP ── */}
      <section className="dd-strip">
        <div className="dd-strip-inner">
          <div><strong>30 years</strong><span>practicing law for our neighbors</span></div>
          <div><strong>Chapter 7 &amp; 13</strong><span>both paths, plainly explained</span></div>
          <div><strong>Free</strong><span>first consultation, always</span></div>
          <div><strong>Same week</strong><span>appointments when it&rsquo;s urgent</span></div>
        </div>
      </section>

      {/* ── BANKRUPTCY ── */}
      <section className="dd-section" id="bankruptcy">
        <div className="dd-two">
          <div>
            <p className="dd-kicker">Bankruptcy — Chapter 7 &amp; Chapter 13</p>
            <h2>Debt has rules. So does getting out of it.</h2>
            <p>
              Filing bankruptcy isn&rsquo;t giving up — it&rsquo;s using the legal
              protection Congress built for exactly the situation you&rsquo;re in.
              The moment your case is filed, federal law requires the collection
              calls, wage garnishments, and foreclosure proceedings to stop.
            </p>
            <p>
              Whether Chapter 7 (a clean slate) or Chapter 13 (a structured plan
              that can save your home) fits your situation, we&rsquo;ll walk through
              it in plain English — what you keep, what it costs, and what your
              life looks like on the other side.
            </p>
          </div>
          <div className="dd-cardstack">
            <div className="dd-mini">
              <h3>Chapter 7</h3>
              <p>A fresh start. Most unsecured debt — credit cards, medical bills, personal loans — discharged.</p>
            </div>
            <div className="dd-mini">
              <h3>Chapter 13</h3>
              <p>Keep your home and car. One manageable payment plan, three to five years, then done.</p>
            </div>
            <div className="dd-mini dd-mini-urgent">
              <h3>Facing foreclosure now?</h3>
              <p>Time matters more than anything. Call today — <a href={`tel:${PHONE.replace(/-/g, "")}`}>{PHONE}</a>.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="dd-section dd-steps-wrap">
        <p className="dd-kicker dd-center">What happens when you call</p>
        <h2 className="dd-center">Three steps. The first one is the hardest.</h2>
        <div className="dd-steps">
          <div className="dd-step">
            <span className="dd-step-n">1</span>
            <h3>You call or text</h3>
            <p>Kathy answers. You tell her a little about what&rsquo;s going on. No judgment — we&rsquo;ve heard it all, and helped through all of it.</p>
          </div>
          <div className="dd-step">
            <span className="dd-step-n">2</span>
            <h3>We sit down, free</h3>
            <p>You meet with Ann-Charlotte. She lays out your real options — sometimes bankruptcy, sometimes something simpler.</p>
          </div>
          <div className="dd-step">
            <span className="dd-step-n">3</span>
            <h3>You breathe again</h3>
            <p>Once you have a plan, the weight starts lifting. Most clients say the same thing: &ldquo;I should have called sooner.&rdquo;</p>
          </div>
        </div>
      </section>

      {/* ── WILLS ── */}
      <section className="dd-section" id="wills">
        <div className="dd-two dd-two-rev">
          <div className="dd-cardstack">
            <div className="dd-mini">
              <h3>Simple wills</h3>
              <p>Your wishes, in writing, done right — usually in a single visit.</p>
            </div>
            <div className="dd-mini">
              <h3>Powers of attorney</h3>
              <p>Someone you trust, ready to act if you can&rsquo;t.</p>
            </div>
            <div className="dd-mini">
              <h3>Healthcare directives</h3>
              <p>Your medical decisions stay yours.</p>
            </div>
          </div>
          <div>
            <p className="dd-kicker">Wills &amp; Estate Planning</p>
            <h2>The kindest paperwork you&rsquo;ll ever do.</h2>
            <p>
              A will isn&rsquo;t about you — it&rsquo;s about the people you love not
              having to guess, argue, or go to court while they&rsquo;re grieving.
              It&rsquo;s an afternoon of paperwork that saves your family months of
              trouble.
            </p>
            <p>
              If you&rsquo;ve been putting it off for years, you&rsquo;re in good
              company. Come in, get it done, and stop thinking about it.
            </p>
          </div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section className="dd-section dd-about" id="about">
        <div className="dd-two">
          <div>
            <p className="dd-kicker">Your attorney</p>
            <h2>Ann-Charlotte Dowless</h2>
            <p>
              Vanderbilt University. Emory University School of Law. Admitted to
              practice in Georgia (1995), North Carolina (1998), and the U.S.
              District Courts for the Western, Middle, and Eastern Districts of
              North Carolina.
            </p>
            <p>
              Thirty years of practice, the last twenty-five of them right here in
              Concord at Halcyon Square — helping neighbors through bankruptcies,
              foreclosure defense, and estate planning with straight answers and
              steady hands.
            </p>
          </div>
          <div className="dd-photo" aria-label="Photo placeholder">
            <span>Ann-Charlotte&rsquo;s photo</span>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="dd-final">
        <h2>The hardest part is the first call.<br />Make it today.</h2>
        <div className="dd-hero-ctas">
          <a className="dd-btn dd-btn-gold" href={`tel:${PHONE.replace(/-/g, "")}`}>Call {PHONE}</a>
          <a className="dd-btn dd-btn-quiet2" href={`sms:${TEXT.replace(/-/g, "")}`}>Text {TEXT}</a>
        </div>
        <p className="dd-final-addr">Dowless Law Firm · 51 Cabarrus Ave W, Halcyon Square · Concord, NC 28025</p>
      </section>

      {/* ── FOOTER w/ required disclosure ── */}
      <footer className="dd-footer">
        <p>&ldquo;We are a debt relief agency. We help people file for bankruptcy under the United States Bankruptcy Code.&rdquo;</p>
        <p>© {new Date().getFullYear()} Dowless Law Firm · Concord, NC · <a href="#top" onClick={inert}>Privacy</a> · <a href="#top" onClick={inert}>Disclaimer</a></p>
        <p className="dd-demo-tag">SAMPLE SITE — prepared by GNL Digital Group for review</p>
      </footer>
    </div>
  );
}

const css = `
@import url('https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,500;0,600;1,500&family=Nunito+Sans:wght@400;600;700&display=swap');

.dd {
  --paper: #FCFAF5;
  --cloud: #F3EFE6;
  --ink: #2E3D4F;
  --harbor: #5B7C99;
  --honey: #C89B5A;
  --honey-deep: #A97E3F;
  --soft: #6E7B88;
  background: var(--paper);
  color: var(--ink);
  font-family: 'Nunito Sans', -apple-system, sans-serif;
  line-height: 1.65;
  margin: 0;
}
.dd h1, .dd h2, .dd h3 { font-family: 'Lora', Georgia, serif; color: var(--ink); margin: 0 0 16px; line-height: 1.22; }
.dd-kicker { font-size: 12px; letter-spacing: 2.2px; text-transform: uppercase; color: var(--honey-deep); font-weight: 700; margin: 0 0 12px; }
.dd-center { text-align: center; }

/* nav */
.dd-nav { position: sticky; top: 0; background: rgba(252,250,245,0.92); backdrop-filter: blur(8px); border-bottom: 1px solid #E7E1D4; z-index: 10; }
.dd-nav-inner { max-width: 1020px; margin: 0 auto; padding: 14px 22px; display: flex; align-items: center; justify-content: space-between; }
.dd-logo { font-family: 'Lora', serif; font-size: 20px; font-weight: 600; }
.dd-logo em { color: var(--harbor); font-style: italic; }
.dd-nav-links { display: flex; gap: 22px; align-items: center; }
.dd-nav-links a { text-decoration: none; color: var(--ink); font-weight: 600; font-size: 14.5px; }
.dd-nav-cta { background: var(--honey); color: #fff !important; padding: 9px 16px; border-radius: 99px; }

/* hero */
.dd-hero { position: relative; overflow: hidden; padding: 84px 22px 76px; }
.dd-hero-inner { max-width: 760px; margin: 0 auto; text-align: center; position: relative; z-index: 1; }
.dd-hero h1 { font-size: clamp(32px, 5.4vw, 52px); font-weight: 600; }
.dd-hero h1 span { color: var(--harbor); font-style: italic; }
.dd-lede { max-width: 600px; margin: 20px auto 30px; font-size: 17.5px; color: var(--soft); }
.dd-sun {
  position: absolute; top: -160px; left: 50%; transform: translateX(-50%);
  width: 680px; height: 680px; border-radius: 50%;
  background: radial-gradient(circle, rgba(200,155,90,0.16), rgba(200,155,90,0.05) 45%, transparent 70%);
  pointer-events: none;
}
.dd-hero-ctas { display: flex; gap: 14px; justify-content: center; flex-wrap: wrap; }
.dd-hero-note { font-size: 13.5px; color: var(--soft); margin-top: 16px; }

/* buttons */
.dd-btn { display: inline-block; padding: 14px 28px; border-radius: 10px; text-decoration: none; font-weight: 700; font-size: 15.5px; transition: transform .12s ease; }
.dd-btn:hover { transform: translateY(-1px); }
.dd-btn-gold { background: var(--honey); color: #fff; box-shadow: 0 8px 24px rgba(200,155,90,0.32); }
.dd-btn-quiet { border: 1.5px solid var(--harbor); color: var(--harbor); }
.dd-btn-quiet2 { border: 1.5px solid #fff; color: #fff; }

/* strip */
.dd-strip { background: var(--cloud); border-top: 1px solid #E7E1D4; border-bottom: 1px solid #E7E1D4; }
.dd-strip-inner { max-width: 1020px; margin: 0 auto; padding: 26px 22px; display: grid; grid-template-columns: repeat(auto-fit, minmax(170px, 1fr)); gap: 18px; text-align: center; }
.dd-strip strong { display: block; font-family: 'Lora', serif; font-size: 21px; color: var(--harbor); }
.dd-strip span { font-size: 13px; color: var(--soft); }

/* sections */
.dd-section { max-width: 1020px; margin: 0 auto; padding: 72px 22px; }
.dd-section h2 { font-size: clamp(25px, 3.6vw, 34px); }
.dd-section p { color: var(--soft); font-size: 16px; max-width: 560px; }
.dd-two { display: grid; grid-template-columns: 1.15fr 1fr; gap: 48px; align-items: center; }
.dd-two-rev { grid-template-columns: 1fr 1.15fr; }
@media (max-width: 760px) { .dd-two, .dd-two-rev { grid-template-columns: 1fr; } }

/* mini cards */
.dd-cardstack { display: grid; gap: 14px; }
.dd-mini { background: #fff; border: 1px solid #EAE4D8; border-radius: 14px; padding: 20px 22px; box-shadow: 0 6px 18px rgba(46,61,79,0.05); }
.dd-mini h3 { font-size: 18px; margin-bottom: 6px; }
.dd-mini p { font-size: 14.5px; margin: 0; }
.dd-mini-urgent { border-left: 4px solid var(--honey); }
.dd-mini a { color: var(--honey-deep); font-weight: 700; text-decoration: none; }

/* steps */
.dd-steps-wrap { background: transparent; }
.dd-steps { display: grid; grid-template-columns: repeat(auto-fit, minmax(230px, 1fr)); gap: 18px; margin-top: 36px; }
.dd-step { background: #fff; border: 1px solid #EAE4D8; border-radius: 14px; padding: 26px; text-align: center; }
.dd-step-n {
  display: inline-flex; align-items: center; justify-content: center;
  width: 44px; height: 44px; border-radius: 50%; background: var(--cloud); color: var(--honey-deep);
  font-family: 'Lora', serif; font-size: 20px; font-weight: 600; margin-bottom: 12px;
}
.dd-step p { font-size: 14.5px; margin: 0; }

/* about */
.dd-about { background: var(--cloud); border-radius: 24px; }
.dd-photo {
  aspect-ratio: 4/5; border-radius: 16px; background: linear-gradient(160deg, #E9E2D2, #DCD2BC);
  display: flex; align-items: center; justify-content: center; color: var(--soft); font-size: 14px; font-style: italic;
}

/* final */
.dd-final { background: linear-gradient(160deg, var(--harbor), #46627C); text-align: center; padding: 72px 22px; margin-top: 72px; }
.dd-final h2 { color: #fff; font-size: clamp(26px, 4vw, 36px); margin-bottom: 28px; }
.dd-final-addr { color: rgba(255,255,255,0.75); font-size: 13.5px; margin-top: 22px; }

/* footer */
.dd-footer { text-align: center; padding: 34px 22px 46px; }
.dd-footer p { font-size: 12.5px; color: var(--soft); max-width: 640px; margin: 6px auto; }
.dd-footer a { color: var(--soft); }
.dd-demo-tag { letter-spacing: 1.4px; font-weight: 700; color: var(--honey-deep) !important; font-size: 11px !important; margin-top: 14px !important; }

@media (prefers-reduced-motion: reduce) { .dd-btn { transition: none; } }
`;
