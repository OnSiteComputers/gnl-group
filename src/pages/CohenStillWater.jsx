// CohenStillWater — build: 2026-07-08 v3
import { useEffect } from "react";

console.log("CohenStillWater build: 2026-07-08 v3 ✅");

// ─────────────────────────────────────────────────────────
//  COHEN CONSTRUCTION — DEMO 1 "STILL WATER" (route: /cohen-still-water)
//  Editorial / serene. Big lake photography, generous whitespace,
//  elegant serif. Sells calm + permanence. Tuned for an artist's eye.
//
//  Add to your router:
//    <Route path="/cohen-still-water" element={<CohenStillWater />} />
// ─────────────────────────────────────────────────────────

const PHONE = "704-474-3518";
const COMMUNITIES = [
  "Uwharrie Landing",
  "Bay Shore on Lake Tillery",
  "Eagle Pointe",
  "Edgewater on Lake Tillery",
  "The Peninsula at Lake Tillery",
  "The Cove at Lilly's Bridge",
  "Swift Island Plantation",
  "Uwharrie Cabin Village",
  "Ken's Landing",
];

export default function CohenStillWater() {
  useEffect(() => {
    document.title = "Cohen Construction — Lakefront Custom Homes on Lake Tillery";
  }, []);

  const inert = (e) => e.preventDefault();

  return (
    <div className="sw" id="top">
      <style>{css}</style>

      {/* NAV */}
      <nav className="sw-nav">
        <div className="sw-nav-inner">
          <a href="#top" onClick={inert} className="sw-mark">
            <span className="sw-mark-name">COHEN</span>
            <span className="sw-mark-sub">CONSTRUCTION</span>
          </a>
          <div className="sw-nav-links">
            <a href="#communities">Communities</a>
            <a href="#homes">Our Homes</a>
            <a href="#process">Process</a>
            <a className="sw-nav-cta" href={`tel:${PHONE.replace(/-/g, "")}`}>{PHONE}</a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <header className="sw-hero">
        <div className="sw-hero-photo" aria-hidden="true" />
        <div className="sw-hero-veil" aria-hidden="true" />
        <div className="sw-hero-inner">
          <p className="sw-kicker">Lake Tillery · North Carolina</p>
          <h1>Homes that hold<br />the quiet of the water.</h1>
          <p className="sw-lede">
            For twenty-five years, Cohen Construction has built custom lakefront
            homes across the Uwharrie region — where the shoreline, the light, and
            the way you live are all part of the design.
          </p>
          <div className="sw-hero-ctas">
            <a className="sw-btn sw-btn-solid" href="#communities">Explore Our Communities</a>
            <a className="sw-btn sw-btn-ghost" href="#inquiry">Request a Consultation</a>
          </div>
        </div>
        <div className="sw-scroll-hint" aria-hidden="true">scroll</div>
      </header>

      {/* QUIET STATEMENT */}
      <section className="sw-statement">
        <p>
          A Cohen home is not chosen from a catalog. It begins with a lot, a view,
          and a conversation — and ends with a place that feels as though it was
          always meant to stand there.
        </p>
      </section>

      {/* COMMUNITIES */}
      <section className="sw-section" id="communities">
        <div className="sw-sec-head">
          <p className="sw-kicker">Where we build</p>
          <h2>Nine communities on Lake Tillery.</h2>
          <p className="sw-sec-sub">
            Gated lake communities, a private marina, and shoreline lots across
            Stanly and Montgomery counties. Waterfront lots are finite — and the
            best ones don't wait.
          </p>
        </div>
        <div className="sw-comm-grid">
          {COMMUNITIES.map((name, i) => (
            <a key={name} href="#inquiry" className="sw-comm">
              <span className="sw-comm-num">{String(i + 1).padStart(2, "0")}</span>
              <span className="sw-comm-name">{name}</span>
              <span className="sw-comm-arrow">→</span>
            </a>
          ))}
        </div>
      </section>

      {/* SCARCITY STRIP */}
      <section className="sw-scarcity">
        <div className="sw-scarcity-inner">
          <div>
            <p className="sw-kicker light">On the water</p>
            <h2>Secure your place on the shoreline.</h2>
            <p>
              Cohen's communities include a private 20-slip marina and a limited
              number of true waterfront lots. When the water is the whole point,
              location isn't a feature — it's the foundation.
            </p>
          </div>
          <a className="sw-btn sw-btn-solid" href="#inquiry">Ask About Availability</a>
        </div>
      </section>

      {/* HOMES */}
      <section className="sw-section" id="homes">
        <div className="sw-sec-head">
          <p className="sw-kicker">Our homes</p>
          <h2>Built once. Built right.</h2>
        </div>
        <div className="sw-gallery">
          <div className="sw-tile sw-tile-tall" style={{ backgroundImage: "url('/cohen/home1.jpg')" }} />
          <div className="sw-tile" style={{ backgroundImage: "url('/cohen/home2.jpg')" }} />
          <div className="sw-tile" style={{ backgroundImage: "url('/cohen/home3.jpg')" }} />
          <div className="sw-tile sw-tile-wide" style={{ backgroundImage: "url('/cohen/home4.jpg')" }} />
        </div>
        <p className="sw-gallery-note">A selection of recent Cohen homes across Lake Tillery.</p>
      </section>

      {/* PROCESS */}
      <section className="sw-section sw-process" id="process">
        <div className="sw-sec-head sw-center">
          <p className="sw-kicker">How we build</p>
          <h2>Four steps, one standard.</h2>
        </div>
        <div className="sw-steps">
          {[
            ["01", "The Site", "We start where you'll live — the lot, the view, the way the light moves across the water."],
            ["02", "The Design", "Your home is drawn around that site. Nothing borrowed, nothing forced."],
            ["03", "The Build", "Twenty-five years of craft, managed closely, built to last generations."],
            ["04", "The Keys", "You move in. We stand behind what we built — because our name is on it."],
          ].map(([n, t, d]) => (
            <div key={n} className="sw-step">
              <span className="sw-step-n">{n}</span>
              <h3>{t}</h3>
              <p>{d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* INQUIRY */}
      <section className="sw-inquiry" id="inquiry">
        <div className="sw-inquiry-inner">
          <div className="sw-inquiry-copy">
            <p className="sw-kicker light">Begin the conversation</p>
            <h2>Tell us about the home you're imagining.</h2>
            <p>
              A consultation is the first step — no pressure, no obligation. Tell us
              which community interests you, and we'll take it from there.
            </p>
            <p className="sw-inquiry-phone">
              Or call us directly · <a href={`tel:${PHONE.replace(/-/g, "")}`}>{PHONE}</a>
            </p>
          </div>
          <div className="sw-form">
            <div className="sw-field">
              <label>Name</label>
              <input type="text" placeholder="Your name" />
            </div>
            <div className="sw-field">
              <label>Email</label>
              <input type="email" placeholder="you@email.com" />
            </div>
            <div className="sw-field">
              <label>Community of interest</label>
              <select defaultValue="">
                <option value="" disabled>Select a community</option>
                {COMMUNITIES.map((c) => <option key={c}>{c}</option>)}
                <option>Not sure yet</option>
              </select>
            </div>
            <div className="sw-field">
              <label>What are you looking for?</label>
              <textarea rows={3} placeholder="Waterfront lot, custom build, timeline…" />
            </div>
            <button className="sw-btn sw-btn-solid sw-btn-full" onClick={inert}>
              Request Consultation
            </button>
            <p className="sw-form-note">Demo form — inquiries route to GNL for testing.</p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="sw-footer">
        <div className="sw-footer-inner">
          <div>
            <span className="sw-mark-name dark">COHEN</span>
            <span className="sw-mark-sub dark">CONSTRUCTION</span>
            <p className="sw-footer-addr">
              121 N Main St · Norwood, NC 28128<br />
              {PHONE}
            </p>
          </div>
          <p className="sw-footer-tag">Lakefront custom homes · Lake Tillery · Since 2001</p>
        </div>
      </footer>
    </div>
  );
}

const css = `
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400&family=Inter:wght@400;500;600&display=swap');

.sw { --ink:#12233A; --water:#2E5A7A; --mist:#E8EEF2; --silver:#9DB0BD; --paper:#FBFCFD; --line:rgba(18,35,58,.1);
  background:var(--paper); color:var(--ink); font-family:'Inter',sans-serif; line-height:1.7; margin:0; }
.sw h1,.sw h2,.sw h3 { font-family:'Cormorant Garamond',Georgia,serif; color:var(--ink); margin:0 0 18px; line-height:1.12; font-weight:500; }
.sw-kicker { font-size:11px; letter-spacing:3.5px; text-transform:uppercase; color:var(--water); font-weight:600; margin:0 0 16px; }
.sw-kicker.light { color:var(--silver); }
.sw-center { text-align:center; margin-left:auto; margin-right:auto; }

/* nav */
.sw-nav { position:sticky; top:0; z-index:20; background:rgba(251,252,253,.9); backdrop-filter:blur(10px); border-bottom:1px solid var(--line); }
.sw-nav-inner { max-width:1140px; margin:0 auto; padding:18px 28px; display:flex; align-items:center; justify-content:space-between; }
.sw-mark { text-decoration:none; display:flex; flex-direction:column; line-height:1; }
.sw-mark-name { font-family:'Cormorant Garamond',serif; font-size:24px; font-weight:600; letter-spacing:6px; color:var(--ink); }
.sw-mark-sub { font-size:9px; letter-spacing:5px; color:var(--water); margin-top:5px; font-weight:600; }
.sw-mark-name.dark,.sw-mark-sub.dark { color:#fff; }
.sw-mark-sub.dark { color:var(--silver); }
.sw-nav-links { display:flex; gap:28px; align-items:center; }
.sw-nav-links a { text-decoration:none; color:var(--ink); font-size:14px; font-weight:500; letter-spacing:.3px; }
.sw-nav-links a:hover { color:var(--water); }
.sw-nav-cta { color:var(--water) !important; font-weight:600 !important; }

/* hero */
.sw-hero { position:relative; height:88vh; min-height:560px; display:flex; align-items:center; overflow:hidden; }
.sw-hero-photo { position:absolute; inset:0; background:
  linear-gradient(180deg, rgba(46,90,122,.35) 0%, rgba(27,58,84,.55) 55%, rgba(18,35,58,.85) 100%),
  url('/cohen/hero.jpg') center/cover no-repeat,
  linear-gradient(180deg, #2E5A7A 0%, #1B3A54 55%, #12233A 100%); }
.sw-hero-photo::after { content:""; position:absolute; inset:0; background:
  radial-gradient(1200px 500px at 70% 20%, rgba(255,255,255,.10), transparent 60%); }
.sw-hero-veil { position:absolute; inset:0; background:linear-gradient(90deg, rgba(18,35,58,.55), rgba(18,35,58,.15)); }
.sw-hero-inner { position:relative; z-index:2; max-width:1140px; margin:0 auto; padding:0 28px; width:100%; }
.sw-hero h1 { color:#fff; font-size:clamp(42px,6.5vw,80px); font-weight:500; letter-spacing:.5px; }
.sw-kicker + h1 { margin-top:0; }
.sw-hero .sw-kicker { color:#C9D6DF; }
.sw-lede { color:rgba(255,255,255,.9); font-size:18px; max-width:520px; margin:0 0 32px; font-weight:400; }
.sw-hero-ctas { display:flex; gap:14px; flex-wrap:wrap; }
.sw-scroll-hint { position:absolute; bottom:24px; left:50%; transform:translateX(-50%); z-index:2; color:rgba(255,255,255,.6);
  font-size:10px; letter-spacing:4px; text-transform:uppercase; }

/* buttons */
.sw-btn { display:inline-block; padding:15px 32px; border-radius:2px; text-decoration:none; font-size:13px; font-weight:600;
  letter-spacing:1.5px; text-transform:uppercase; transition:all .2s ease; cursor:pointer; border:none; font-family:'Inter',sans-serif; }
.sw-btn-solid { background:var(--water); color:#fff; }
.sw-btn-solid:hover { background:var(--ink); }
.sw-btn-ghost { background:transparent; color:#fff; border:1px solid rgba(255,255,255,.6); }
.sw-btn-ghost:hover { background:rgba(255,255,255,.1); border-color:#fff; }
.sw-btn-full { width:100%; margin-top:6px; }

/* quiet statement */
.sw-statement { max-width:820px; margin:0 auto; padding:110px 28px; text-align:center; }
.sw-statement p { font-family:'Cormorant Garamond',serif; font-size:clamp(24px,3.2vw,34px); line-height:1.45; color:var(--ink); font-weight:400; font-style:italic; }

/* sections */
.sw-section { max-width:1140px; margin:0 auto; padding:80px 28px; }
.sw-sec-head { max-width:640px; margin-bottom:52px; }
.sw-sec-head.sw-center { margin-left:auto; margin-right:auto; text-align:center; }
.sw-section h2 { font-size:clamp(32px,4.5vw,52px); }
.sw-sec-sub { color:var(--water); font-size:16px; }

/* communities */
.sw-comm-grid { display:grid; grid-template-columns:repeat(3,1fr); border-top:1px solid var(--line); border-left:1px solid var(--line); }
@media(max-width:760px){ .sw-comm-grid{ grid-template-columns:1fr; } }
.sw-comm { display:flex; align-items:center; gap:16px; padding:26px 24px; text-decoration:none; color:var(--ink);
  border-right:1px solid var(--line); border-bottom:1px solid var(--line); transition:background .2s; }
.sw-comm:hover { background:var(--mist); }
.sw-comm-num { font-family:'Cormorant Garamond',serif; font-size:16px; color:var(--silver); }
.sw-comm-name { flex:1; font-size:16px; font-weight:500; }
.sw-comm-arrow { color:var(--water); opacity:0; transform:translateX(-6px); transition:all .2s; }
.sw-comm:hover .sw-comm-arrow { opacity:1; transform:translateX(0); }

/* scarcity */
.sw-scarcity { background:var(--ink); color:#fff; }
.sw-scarcity-inner { max-width:1140px; margin:0 auto; padding:80px 28px; display:flex; align-items:center; justify-content:space-between; gap:48px; flex-wrap:wrap; }
.sw-scarcity h2 { color:#fff; }
.sw-scarcity p { color:rgba(255,255,255,.8); max-width:520px; }

/* gallery */
.sw-gallery { display:grid; grid-template-columns:repeat(4,1fr); grid-auto-rows:200px; gap:14px; }
@media(max-width:760px){ .sw-gallery{ grid-template-columns:repeat(2,1fr); } }
.sw-tile { background:linear-gradient(160deg,#DCE6EC,#C3D3DD); background-size:cover; background-position:center; border-radius:3px; }
.sw-tile-tall { grid-row:span 2; }
.sw-tile-wide { grid-column:span 2; }
.sw-gallery-note { text-align:center; color:var(--silver); font-size:14px; margin-top:22px; font-style:italic; font-family:'Cormorant Garamond',serif; }

/* process */
.sw-steps { display:grid; grid-template-columns:repeat(4,1fr); gap:36px; }
@media(max-width:760px){ .sw-steps{ grid-template-columns:1fr 1fr; } }
.sw-step-n { font-family:'Cormorant Garamond',serif; font-size:34px; color:var(--silver); display:block; margin-bottom:14px; }
.sw-step h3 { font-size:24px; }
.sw-step p { font-size:14.5px; color:#54636F; }

/* inquiry */
.sw-inquiry { background:var(--mist); }
.sw-inquiry-inner { max-width:1140px; margin:0 auto; padding:80px 28px; display:grid; grid-template-columns:1fr 1fr; gap:64px; align-items:center; }
@media(max-width:820px){ .sw-inquiry-inner{ grid-template-columns:1fr; gap:40px; } }
.sw-inquiry-copy h2 { font-size:clamp(30px,4vw,44px); }
.sw-inquiry-copy p { color:#54636F; max-width:440px; }
.sw-inquiry-phone { font-size:15px; }
.sw-inquiry-phone a { color:var(--water); font-weight:600; text-decoration:none; }
.sw-form { background:#fff; padding:36px; border-radius:4px; box-shadow:0 20px 50px rgba(18,35,58,.08); }
.sw-field { margin-bottom:18px; }
.sw-field label { display:block; font-size:11px; letter-spacing:1.5px; text-transform:uppercase; color:var(--water); font-weight:600; margin-bottom:7px; }
.sw-field input,.sw-field select,.sw-field textarea { width:100%; box-sizing:border-box; padding:13px 14px; border:1px solid var(--line);
  border-radius:3px; font-family:'Inter',sans-serif; font-size:15px; color:var(--ink); background:var(--paper); }
.sw-field input:focus,.sw-field select:focus,.sw-field textarea:focus { outline:none; border-color:var(--water); }
.sw-form-note { text-align:center; font-size:12px; color:var(--silver); margin:14px 0 0; }

/* footer */
.sw-footer { background:var(--ink); color:#fff; }
.sw-footer-inner { max-width:1140px; margin:0 auto; padding:56px 28px; display:flex; justify-content:space-between; align-items:flex-end; gap:32px; flex-wrap:wrap; }
.sw-footer-addr { color:rgba(255,255,255,.7); font-size:14px; margin-top:16px; line-height:1.7; }
.sw-footer-tag { color:var(--silver); font-size:13px; font-style:italic; font-family:'Cormorant Garamond',serif; }

@media (prefers-reduced-motion: reduce) { .sw-btn,.sw-comm-arrow { transition:none; } }
`;
