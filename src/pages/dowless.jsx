// Dowless build: 2026-07-10 v2
import { useEffect } from "react";
// ====================
//  DOWLESS LAW — LIVE SITE (route: /dowless)
//
//  Router:
//    <Route path="/dowless" element={<Dowless />} />
//
//  Navy / gold "calm authority" design (from approved mockup).
//  Nav + CTAs smooth-scroll to on-page sections. FAQ / Resources are inert
//  placeholders (no section exists yet — do not fabricate legal content).
//  Phone (tel:) and email (mailto:) links are LIVE everywhere.
//  Photos are CSS placeholders — swap in real images later.
// ====================

const PHONE = "704-782-7529";
const PHONE_HREF = "tel:+17047827529";
const EMAIL = "info@dowlesslaw.com";
const EMAIL_HREF = "mailto:info@dowlesslaw.com";

export default function Dowless() {
  useEffect(() => { console.log("Dowless build: 2026-07-10 v2"); }, []);

  useEffect(() => {
    document.title = "Dowless Law Firm — Bankruptcy & Wills, Concord NC";
  }, []);

  const go = (id) => (e) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  const inert = (e) => e.preventDefault();

  return (
    <div className="dl">
      <style>{css}</style>

      {/* ==================== TOP BAR ==================== */}
      <div className="dl-topbar">
        <div className="dl-topbar-in">
          <span className="dl-tb-left">
            <span className="dl-pin">◈</span> Serving Concord, Charlotte &amp; Surrounding Areas
          </span>
          <span className="dl-tb-right">
            <a href={PHONE_HREF} className="dl-tb-link"><span className="dl-ic">✆</span> {PHONE}</a>
            <a href={EMAIL_HREF} className="dl-tb-link"><span className="dl-ic">✉</span> {EMAIL}</a>
          </span>
        </div>
      </div>

      {/* ==================== NAV ==================== */}
      <header className="dl-nav" id="top">
        <div className="dl-nav-in">
          <a href="#top" onClick={go("top")} className="dl-brand">
            <span className="dl-crest">⚖</span>
            <span className="dl-brand-txt">
              <span className="dl-brand-name">DOWLESS</span>
              <span className="dl-brand-sub">LAW FIRM</span>
            </span>
          </a>

          <nav className="dl-links">
            <a href="#top" onClick={go("top")} className="dl-link dl-link-active">HOME</a>
            <a href="#about" onClick={go("about")} className="dl-link">ABOUT</a>
            <div className="dl-drop">
              <a href="#help" onClick={go("help")} className="dl-link dl-link-caret">
                BANKRUPTCY <span className="dl-caret">▾</span>
              </a>
              <div className="dl-drop-menu">
                <a href="#help" onClick={go("help")}>Chapter 7 Bankruptcy</a>
                <a href="#help" onClick={go("help")}>Chapter 13 Bankruptcy</a>
                <a href="#help" onClick={go("help")}>Stop Foreclosure</a>
                <a href="#help" onClick={go("help")}>Stop Wage Garnishment</a>
              </div>
            </div>
            <a href="#faq" onClick={inert} className="dl-link">FAQ</a>
            <a href="#resources" onClick={inert} className="dl-link">RESOURCES</a>
            <a href="#contact" onClick={go("contact")} className="dl-link">CONTACT</a>
          </nav>

          <a href="#contact" onClick={go("contact")} className="dl-cta-btn">FREE CONSULTATION</a>
        </div>
      </header>

      {/* ==================== HERO ==================== */}
      <section className="dl-hero">
        <div className="dl-hero-in">
          <div className="dl-hero-copy">
            <h1 className="dl-h1">A Fresh Start<br />Is Possible.</h1>
            <div className="dl-rule" />
            <p className="dl-hero-sub">
              Compassionate bankruptcy guidance<br />
              to help you move forward with confidence.
            </p>
            <div className="dl-hero-btns">
              <a href={PHONE_HREF} className="dl-btn dl-btn-navy"><span className="dl-ic">✆</span> CALL {PHONE}</a>
              <a href="#contact" onClick={go("contact")} className="dl-btn dl-btn-ghost"><span className="dl-ic">▤</span> SCHEDULE A CONSULTATION</a>
            </div>
            <div className="dl-hero-trust">
              <span className="dl-badge">◈</span>
              <span><strong>Over 30 Years of Experience</strong></span>
              <span className="dl-divider">|</span>
              <span>Local. Trusted. Focused on You.</span>
            </div>
          </div>
          <div className="dl-hero-photo" aria-label="Law office photo placeholder">
            <div className="dl-photo-note">Photo</div>
          </div>
        </div>
      </section>

      {/* ==================== HOW WE CAN HELP ==================== */}
      <section className="dl-help" id="help">
        <h2 className="dl-h2">How We Can Help</h2>
        <div className="dl-rule dl-rule-center" />
        <div className="dl-cards">
          {[
            { icon: "🛡", title: "Chapter 7 Bankruptcy", body: "Eliminate unsecured debt and get a fresh start. We'll guide you through every step." },
            { icon: "⌂", title: "Chapter 13 Bankruptcy", body: "Keep your property and catch up on what you owe through a manageable repayment plan." },
            { icon: "＄", title: "Stop Foreclosure", body: "Bankruptcy may help you stop foreclosure and protect your home. Let us help you explore your options." },
            { icon: "▭", title: "Stop Wage Garnishment", body: "Put an end to wage garnishments and creditor harassment. We're here to help." },
          ].map((c) => (
            <div className="dl-card" key={c.title}>
              <div className="dl-card-ic">{c.icon}</div>
              <h3 className="dl-card-title">{c.title}</h3>
              <p className="dl-card-body">{c.body}</p>
              <a href="#contact" onClick={go("contact")} className="dl-learn">LEARN MORE →</a>
            </div>
          ))}
        </div>
      </section>

      {/* ==================== ABOUT BAND ==================== */}
      <section className="dl-about" id="about">
        <div className="dl-about-in">
          <div className="dl-about-left">
            <p className="dl-about-eyebrow">DEDICATED.<br />EXPERIENCED.<br />HERE FOR YOU.</p>
            <p className="dl-about-body">
              At Dowless Law Firm, we understand that financial difficulties can be
              overwhelming. With decades of experience, we provide the knowledge,
              compassion, and personal attention you deserve.
            </p>
          </div>
          <div className="dl-about-photo" aria-label="Office interior photo placeholder">
            <div className="dl-photo-note">Photo</div>
          </div>
          <div className="dl-about-right">
            <ul className="dl-checks">
              <li><span className="dl-chk">✓</span> Over 30 Years of Legal Experience</li>
              <li><span className="dl-chk">✓</span> Focused Exclusively on Bankruptcy Law</li>
              <li><span className="dl-chk">✓</span> Personalized Attention to Every Case</li>
              <li><span className="dl-chk">✓</span> Convenient Location in Concord, NC</li>
              <li><span className="dl-chk">✓</span> Helping Clients Throughout Cabarrus County &amp; Surrounding Areas</li>
            </ul>
            <a href="#about" onClick={inert} className="dl-btn dl-btn-navy dl-about-btn">ABOUT ANN-CHARLOTTE DOWLESS</a>
          </div>
        </div>
      </section>

      {/* ==================== TRUST ROW ==================== */}
      <section className="dl-trust">
        <h2 className="dl-h2">Trusted by Our Clients</h2>
        <div className="dl-rule dl-rule-center" />
        <div className="dl-trust-row">
          <div className="dl-trust-col">
            <span className="dl-trust-ic">👥</span>
            <p><strong>Thousands of Clients</strong><br />Helped Get a Fresh Start</p>
          </div>
          <div className="dl-trust-col dl-trust-quote">
            <div className="dl-stars">★★★★★</div>
            <p className="dl-quote">
              &ldquo;Mrs. Dowless and her staff were absolutely wonderful.&rdquo;<br />
              &ldquo;They made a very stressful situation much easier.&rdquo;
            </p>
            <p className="dl-quote-attr">&ndash; Client Review</p>
          </div>
          <div className="dl-trust-col">
            <span className="dl-trust-ic">🤝</span>
            <p><strong>Compassionate Guidance.</strong><br />Proven Results.</p>
          </div>
        </div>
      </section>

      {/* ==================== CONTACT / FOOTER ==================== */}
      <footer className="dl-footer" id="contact">
        <div className="dl-footer-in">
          <div className="dl-foot-brand">
            <span className="dl-crest dl-crest-gold">⚖</span>
            <span className="dl-brand-txt">
              <span className="dl-brand-name dl-brand-name-light">DOWLESS</span>
              <span className="dl-brand-sub dl-brand-sub-light">LAW FIRM</span>
            </span>
          </div>
          <p className="dl-foot-tag">A Fresh Start Is Possible.</p>
          <div className="dl-foot-contact">
            <a href={PHONE_HREF} className="dl-foot-link"><span className="dl-ic">✆</span> {PHONE}</a>
            <a href={EMAIL_HREF} className="dl-foot-link"><span className="dl-ic">✉</span> {EMAIL}</a>
            <span className="dl-foot-link"><span className="dl-ic">◈</span> Concord, NC &amp; Surrounding Areas</span>
          </div>
          <p className="dl-foot-legal">
            We are a debt relief agency. We help people file for bankruptcy under the United States Bankruptcy Code.
          </p>
          <p className="dl-foot-copy">
            &copy; {new Date().getFullYear()} Dowless Law Firm &middot; Concord, NC
          </p>
        </div>
      </footer>
    </div>
  );
}

const css = `
  .dl { font-family: Georgia, 'Times New Roman', serif; color: #1E334D; background: #fff; overflow-x: hidden; }
  .dl a { text-decoration: none; color: inherit; }
  .dl-ic { font-style: normal; }

  .dl-topbar { background: #081D34; color: #d9dde4; font-size: 13px; font-family: Arial, Helvetica, sans-serif; }
  .dl-topbar-in { max-width: 1200px; margin: 0 auto; padding: 9px 24px; display: flex; justify-content: space-between; align-items: center; gap: 12px; flex-wrap: wrap; }
  .dl-tb-right { display: flex; gap: 26px; flex-wrap: wrap; }
  .dl-tb-link { color: #d9dde4; }
  .dl-tb-link:hover { color: #C9A24B; }
  .dl-pin { color: #C9A24B; }

  .dl-nav { background: #fff; border-bottom: 1px solid #eee; position: sticky; top: 0; z-index: 50; }
  .dl-nav-in { max-width: 1200px; margin: 0 auto; padding: 14px 24px; display: flex; align-items: center; justify-content: space-between; gap: 20px; }
  .dl-brand { display: flex; align-items: center; gap: 12px; }
  .dl-crest { font-size: 34px; color: #A4783F; line-height: 1; }
  .dl-brand-txt { display: flex; flex-direction: column; line-height: 1.05; }
  .dl-brand-name { font-size: 26px; letter-spacing: 3px; color: #1E334D; font-weight: 700; }
  .dl-brand-sub { font-size: 11px; letter-spacing: 5px; color: #A4783F; font-family: Arial, sans-serif; }
  .dl-links { display: flex; align-items: center; gap: 26px; font-family: Arial, Helvetica, sans-serif; }
  .dl-link { font-size: 14px; letter-spacing: 1px; color: #1E334D; padding: 6px 0; position: relative; cursor: pointer; }
  .dl-link:hover { color: #A4783F; }
  .dl-link-active { color: #A4783F; }
  .dl-link-active::after { content: ""; position: absolute; left: 0; right: 0; bottom: -2px; height: 2px; background: #A4783F; }
  .dl-caret { font-size: 10px; }
  .dl-drop { position: relative; }
  .dl-drop-menu { position: absolute; top: 100%; left: 0; background: #fff; border: 1px solid #eee; box-shadow: 0 10px 30px rgba(8,29,52,0.12); min-width: 230px; padding: 8px 0; opacity: 0; visibility: hidden; transform: translateY(6px); transition: all .16s ease; }
  .dl-drop:hover .dl-drop-menu { opacity: 1; visibility: visible; transform: translateY(0); }
  .dl-drop-menu a { display: block; padding: 10px 18px; font-size: 14px; color: #1E334D; }
  .dl-drop-menu a:hover { background: #f6f2ea; color: #A4783F; }
  .dl-cta-btn { background: #A4783F; color: #fff; font-family: Arial, sans-serif; font-size: 13px; letter-spacing: 1px; padding: 13px 22px; border-radius: 2px; white-space: nowrap; }
  .dl-cta-btn:hover { background: #8a6533; color: #fff; }

  .dl-hero { background: #f4f1ec; }
  .dl-hero-in { max-width: 1200px; margin: 0 auto; display: grid; grid-template-columns: 1fr 1fr; align-items: stretch; }
  .dl-hero-copy { padding: 64px 24px; }
  .dl-h1 { font-size: 58px; line-height: 1.05; color: #1E334D; margin: 0 0 22px; font-weight: 700; }
  .dl-rule { width: 64px; height: 3px; background: #A4783F; margin: 0 0 22px; }
  .dl-rule-center { margin: 14px auto 40px; }
  .dl-hero-sub { font-family: Arial, Helvetica, sans-serif; font-size: 19px; line-height: 1.5; color: #3a4a5f; margin: 0 0 30px; }
  .dl-hero-btns { display: flex; gap: 14px; flex-wrap: wrap; margin-bottom: 26px; }
  .dl-btn { font-family: Arial, Helvetica, sans-serif; font-size: 14px; letter-spacing: .5px; padding: 15px 24px; border-radius: 2px; display: inline-flex; align-items: center; gap: 9px; cursor: pointer; }
  .dl-btn-navy { background: #0f294a; color: #fff; }
  .dl-btn-navy:hover { background: #16375f; color: #fff; }
  .dl-btn-ghost { background: #fff; color: #1E334D; border: 1px solid #c9ccd1; }
  .dl-btn-ghost:hover { border-color: #A4783F; color: #A4783F; }
  .dl-hero-trust { font-family: Arial, Helvetica, sans-serif; font-size: 14px; color: #3a4a5f; display: flex; align-items: center; gap: 12px; flex-wrap: wrap; }
  .dl-badge { color: #A4783F; }
  .dl-divider { color: #c9ccd1; }
  .dl-hero-photo { background: linear-gradient(135deg, #cbb89b 0%, #a9906e 100%); min-height: 420px; display: flex; align-items: center; justify-content: center; }
  .dl-photo-note { font-family: Arial, sans-serif; color: rgba(255,255,255,0.8); font-size: 15px; letter-spacing: 2px; border: 1px dashed rgba(255,255,255,0.6); padding: 10px 20px; border-radius: 3px; }

  .dl-help { max-width: 1200px; margin: 0 auto; padding: 60px 24px; text-align: center; }
  .dl-h2 { font-size: 30px; color: #1E334D; margin: 0; font-weight: 700; }
  .dl-cards { display: grid; grid-template-columns: repeat(4, 1fr); gap: 30px; text-align: center; }
  .dl-card { padding: 8px 10px; }
  .dl-card-ic { width: 60px; height: 60px; border-radius: 50%; background: #f2f0eb; color: #1E334D; font-size: 26px; display: flex; align-items: center; justify-content: center; margin: 0 auto 18px; }
  .dl-card-title { font-size: 18px; color: #1E334D; margin: 0 0 12px; font-weight: 700; }
  .dl-card-body { font-family: Arial, Helvetica, sans-serif; font-size: 14px; line-height: 1.55; color: #556171; margin: 0 0 16px; }
  .dl-learn { font-family: Arial, Helvetica, sans-serif; font-size: 13px; letter-spacing: 1px; color: #A4783F; font-weight: 600; }
  .dl-learn:hover { color: #8a6533; }

  .dl-about { background: #fff; }
  .dl-about-in { max-width: 1200px; margin: 0 auto; display: grid; grid-template-columns: 1fr 1fr 1fr; align-items: stretch; }
  .dl-about-left { background: #0f294a; color: #e7e9ee; padding: 44px 34px; }
  .dl-about-eyebrow { color: #C9A24B; font-size: 22px; line-height: 1.25; margin: 0 0 20px; font-weight: 700; }
  .dl-about-body { font-family: Arial, Helvetica, sans-serif; font-size: 14.5px; line-height: 1.65; color: #cdd3dd; margin: 0; }
  .dl-about-photo { background: linear-gradient(135deg, #c3b096 0%, #8f7a5c 100%); min-height: 260px; display: flex; align-items: center; justify-content: center; }
  .dl-about-right { padding: 44px 34px; display: flex; flex-direction: column; justify-content: center; }
  .dl-checks { list-style: none; padding: 0; margin: 0 0 26px; font-family: Arial, Helvetica, sans-serif; }
  .dl-checks li { font-size: 15px; color: #33424f; padding: 9px 0; display: flex; gap: 12px; align-items: flex-start; }
  .dl-chk { color: #A4783F; font-weight: 700; }
  .dl-about-btn { align-self: flex-start; }

  .dl-trust { background: #f4f1ec; padding: 56px 24px; text-align: center; }
  .dl-trust-row { max-width: 1140px; margin: 0 auto; display: grid; grid-template-columns: 1fr 1.2fr 1fr; gap: 30px; align-items: center; }
  .dl-trust-col { display: flex; flex-direction: column; align-items: center; gap: 12px; font-family: Arial, Helvetica, sans-serif; font-size: 15px; color: #33424f; }
  .dl-trust-ic { width: 56px; height: 56px; border-radius: 50%; background: #0f294a; color: #fff; font-size: 24px; display: flex; align-items: center; justify-content: center; }
  .dl-trust-quote { border-left: 1px solid #ddd6c8; border-right: 1px solid #ddd6c8; padding: 0 24px; }
  .dl-stars { color: #C9A24B; font-size: 18px; letter-spacing: 3px; }
  .dl-quote { font-style: italic; color: #33424f; line-height: 1.6; margin: 6px 0; }
  .dl-quote-attr { font-family: Arial, sans-serif; font-size: 13px; color: #7a8494; margin: 0; }

  .dl-footer { background: #081D34; color: #cdd3dd; text-align: center; padding: 52px 24px 34px; }
  .dl-footer-in { max-width: 900px; margin: 0 auto; }
  .dl-foot-brand { display: inline-flex; align-items: center; gap: 12px; margin-bottom: 8px; }
  .dl-crest-gold { color: #C9A24B; }
  .dl-brand-name-light { color: #fff; }
  .dl-brand-sub-light { color: #C9A24B; }
  .dl-foot-tag { font-size: 20px; color: #fff; margin: 6px 0 22px; }
  .dl-foot-contact { display: flex; justify-content: center; gap: 28px; flex-wrap: wrap; font-family: Arial, Helvetica, sans-serif; font-size: 15px; margin-bottom: 26px; }
  .dl-foot-link { color: #cdd3dd; }
  .dl-foot-link:hover { color: #C9A24B; }
  .dl-foot-legal { font-family: Arial, Helvetica, sans-serif; font-size: 12.5px; color: #8b95a5; max-width: 620px; margin: 0 auto 16px; line-height: 1.5; }
  .dl-foot-copy { font-family: Arial, Helvetica, sans-serif; font-size: 12.5px; color: #7a8494; margin: 0; }

  @media (max-width: 900px) {
    .dl-links, .dl-cta-btn { display: none; }
    .dl-hero-in { grid-template-columns: 1fr; }
    .dl-hero-photo { min-height: 240px; order: -1; }
    .dl-h1 { font-size: 42px; }
    .dl-cards { grid-template-columns: 1fr 1fr; gap: 24px; }
    .dl-about-in { grid-template-columns: 1fr; }
    .dl-about-photo { min-height: 200px; }
    .dl-trust-row { grid-template-columns: 1fr; }
    .dl-trust-quote { border: none; border-top: 1px solid #ddd6c8; border-bottom: 1px solid #ddd6c8; padding: 22px 0; }
  }
  @media (max-width: 520px) {
    .dl-cards { grid-template-columns: 1fr; }
    .dl-h1 { font-size: 36px; }
    .dl-topbar-in { justify-content: center; }
  }
`;
