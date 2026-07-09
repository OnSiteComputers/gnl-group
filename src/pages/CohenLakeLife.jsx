// CohenLakeLife — build: 2026-07-08 v3
import { useEffect } from "react";


// ─────────────────────────────────────────────────────────
//  Cohen Construction — Life on Lake Tillery
//  route: /cohen-lake-life
//  Add to your router:
//    <Route path="/cohen-lake-life" element={<CohenLakeLife />} />
// ─────────────────────────────────────────────────────────

export default function CohenLakeLife() {
  useEffect(() => {
    console.log("CohenLakeLife build: 2026-07-08 v3 ✅");
    document.title = "Cohen Construction — Life on Lake Tillery";
  }, []);

  return (
    <>
      <style>{css}</style>
      <div className="ll" id="top">
      
      <nav className="ll-nav"><div className="ll-nav-inner">
      <a href="#top" className="ll-mark"><span className="ll-mark-name">Cohen</span><span className="ll-mark-sub">Construction</span></a>
      <div className="ll-nav-links"><a href="#life">Lake Life</a><a href="#communities">Communities</a><a href="#marina">Marina</a><a className="ll-nav-cta" href="tel:7044743518">704-474-3518</a></div>
      </div></nav>
      
      <header className="ll-hero">
      <div className="ll-hero-sun" aria-hidden="true"></div>
      <div className="ll-hero-water" aria-hidden="true"></div>
      <div className="ll-hero-inner">
      <p className="ll-kicker">Lake Tillery · Norwood, North Carolina</p>
      <h1>Your life is better <em>on the water.</em></h1>
      <p className="ll-lede">Cohen Construction builds custom homes for the way lake people actually live — dock to door, sunrise to firepit. Twenty-five years on Lake Tillery, and counting.</p>
      <div className="ll-hero-ctas"><a className="ll-btn ll-btn-sun" href="#communities">Explore Our Communities</a><a className="ll-btn ll-btn-water" href="#inquiry">Request a Consultation</a></div>
      <p className="ll-hero-note">Free consultation · Waterfront lots available now</p>
      </div>
      </header>
      
      <section className="ll-strip"><div className="ll-strip-inner">
      <div><strong>25 years</strong><span>building on Lake Tillery</span></div>
      <div><strong>9 communities</strong><span>gated &amp; shoreline</span></div>
      <div><strong>20-slip</strong><span>private marina</span></div>
      <div><strong>Custom</strong><span>never off-the-shelf</span></div>
      </div></section>
      
      <section className="ll-section" id="life">
      <div className="ll-center" style={{ maxWidth: "620px", margin: "0 auto 44px" }}><p className="ll-kicker">The lake life</p><h2>It's not a house. It's a way to live.</h2></div>
      <div className="ll-life-grid"><div className="ll-life"><div className="ll-life-photo" style={{ backgroundImage: "url('/cohen/home2.jpg')" }} /><h3>Wake to the water</h3><p>Mornings on the dock, coffee on the porch, the lake still as glass. This is the everyday, not the vacation.</p></div>
      <div className="ll-life"><div className="ll-life-photo" style={{ backgroundImage: "url('/cohen/home5.jpg')" }} /><h3>Your slip is waiting</h3><p>A private 20-slip marina means your boat is steps from your door — not a trailer, not a public ramp.</p></div>
      <div className="ll-life"><div className="ll-life-photo" style={{ backgroundImage: "url('/cohen/home3.jpg')" }} /><h3>Built for gathering</h3><p>Open homes designed for family, friends, and long evenings that spill onto the deck and down to the shore.</p></div></div>
      </section>
      
      <section className="ll-section"><div className="ll-two">
      <div className="ll-media"></div>
      <div className="ll-copy"><p className="ll-kicker">Custom, start to finish</p><h2>Designed around your lot, your view, your life.</h2><p>Every Cohen home begins with the water. We orient the house to the light and the shoreline, then design around how you actually want to live in it — the porch where you'll have coffee, the window that frames the sunset, the deck built for a crowd.</p><p>No two lots are the same. No two Cohen homes are, either.</p></div>
      </div></section>
      
      <section className="ll-comm-wrap"><div className="ll-section">
      <div className="ll-center" style={{ maxWidth: "640px", margin: "0 auto 40px" }}><p className="ll-kicker">Where we build</p><h2>Nine communities. One remarkable lake.</h2><p style={{ color: "var(--slate)", fontSize: "16px" }}>Gated lake communities and shoreline lots across Stanly and Montgomery counties. Waterfront is finite — the best lots don't last.</p></div>
      <div className="ll-comm-grid"><a href="#inquiry" className="ll-comm">Uwharrie Landing<span>&rarr;</span></a>
      <a href="#inquiry" className="ll-comm">Bay Shore on Lake Tillery<span>&rarr;</span></a>
      <a href="#inquiry" className="ll-comm">Eagle Pointe<span>&rarr;</span></a>
      <a href="#inquiry" className="ll-comm">Edgewater on Lake Tillery<span>&rarr;</span></a>
      <a href="#inquiry" className="ll-comm">The Peninsula at Lake Tillery<span>&rarr;</span></a>
      <a href="#inquiry" className="ll-comm">The Cove at Lilly's Bridge<span>&rarr;</span></a>
      <a href="#inquiry" className="ll-comm">Swift Island Plantation<span>&rarr;</span></a>
      <a href="#inquiry" className="ll-comm">Uwharrie Cabin Village<span>&rarr;</span></a>
      <a href="#inquiry" className="ll-comm">Ken's Landing<span>&rarr;</span></a></div>
      </div></section>
      
      <section className="ll-section" id="marina" style={{ paddingLeft: 0, paddingRight: 0 }}>
      <div className="ll-marina"><div className="ll-marina-glow" aria-hidden="true"></div><div className="ll-marina-inner">
      <div><p className="ll-kicker light">The 20-slip marina</p><h2>Your boat, steps from your back door.</h2><p>Cohen's private marina is the difference between owning a lake house and living a lake life. No ramps, no trailers, no waiting — just walk down and go.</p></div>
      <a className="ll-btn ll-btn-sun" href="#inquiry">Ask About Slip Availability</a>
      </div></div>
      </section>
      
      <section className="ll-inquiry" id="inquiry"><div className="ll-inquiry-inner">
      <div className="ll-inquiry-copy"><p className="ll-kicker">Let's talk</p><h2>Start your life on the lake.</h2><p>Tell us which community catches your eye and what you're dreaming up. The first conversation is free — and there's no better time than now, while the good lots are still open.</p><p className="ll-inq-phone">Or call Cohen directly · <a href="tel:7044743518">704-474-3518</a></p></div>
      <div className="ll-form">
      <div className="ll-field"><label>Name</label><input type="text" placeholder="Your name" /></div>
      <div className="ll-field"><label>Email</label><input type="email" placeholder="you@email.com" /></div>
      <div className="ll-field"><label>Community of interest</label><select defaultValue=""><option value="" disabled>Select a community</option><option>Uwharrie Landing</option><option>Bay Shore on Lake Tillery</option><option>Eagle Pointe</option><option>Edgewater on Lake Tillery</option><option>The Peninsula at Lake Tillery</option><option>The Cove at Lilly's Bridge</option><option>Swift Island Plantation</option><option>Uwharrie Cabin Village</option><option>Ken's Landing</option><option>Not sure yet</option></select></div>
      <div className="ll-field"><label>Tell us what you're after</label><textarea rows="3" placeholder="Waterfront lot, boat slip, custom build, timeline…"></textarea></div>
      <button className="ll-btn ll-btn-sun ll-btn-full" onClick={(e)=>e.preventDefault()}>Request Consultation</button>
      <p className="ll-form-note">Demo form — inquiries route to GNL for testing.</p>
      </div>
      </div></section>
      
      <footer className="ll-footer"><div className="ll-footer-inner">
      <div><span className="ll-mark-name" style={{ color: "#fff" }}>Cohen</span> <span className="ll-mark-sub" style={{ color: "var(--sun)" }}>Construction</span><p className="ll-footer-addr">121 N Main St · Norwood, NC 28128<br />704-474-3518</p></div>
      <p className="ll-footer-tag">Life on Lake Tillery · Since 2001</p>
      </div></footer>
      
      </div>
    </>
  );
}

const css = `
@import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,500;0,9..144,600;1,9..144,400&family=Inter:wght@400;500;600;700&display=swap');
.ll { --ink:#1C2B3A; --water:#2E6F8E; --sun:#E0A45E; --sun-deep:#C9843A; --sand:#F6EFE4; --cream:#FDFAF4; --slate:#5A6B78;
  background:var(--cream); color:var(--ink); font-family:'Inter',sans-serif; line-height:1.7; margin:0; }
body{margin:0;}
.ll h1,.ll h2,.ll h3{ font-family:'Fraunces',Georgia,serif; color:var(--ink); margin:0 0 16px; line-height:1.14; font-weight:500; }
.ll-kicker{ font-size:12px; letter-spacing:2.5px; text-transform:uppercase; color:var(--sun-deep); font-weight:700; margin:0 0 14px; }
.ll-kicker.light{ color:var(--sun); }
.ll-center{ text-align:center; margin-left:auto; margin-right:auto; }

/* nav */
.ll-nav{ position:sticky; top:0; z-index:20; background:rgba(253,250,244,.92); backdrop-filter:blur(10px); border-bottom:1px solid rgba(28,43,58,.08); }
.ll-nav-inner{ max-width:1160px; margin:0 auto; padding:16px 26px; display:flex; align-items:center; justify-content:space-between; }
.ll-mark{ text-decoration:none; display:flex; align-items:baseline; gap:10px; }
.ll-mark-name{ font-family:'Fraunces',serif; font-size:23px; font-weight:600; color:var(--ink); letter-spacing:.5px; }
.ll-mark-sub{ font-size:10px; letter-spacing:3px; text-transform:uppercase; color:var(--water); font-weight:700; }
.ll-nav-links{ display:flex; gap:26px; align-items:center; }
.ll-nav-links a{ text-decoration:none; color:var(--ink); font-size:14.5px; font-weight:500; }
.ll-nav-links a:hover{ color:var(--water); }
.ll-nav-cta{ background:var(--sun); color:#fff !important; padding:10px 20px; border-radius:99px; font-weight:600 !important; }
.ll-nav-cta:hover{ background:var(--sun-deep); }

/* hero */
.ll-hero{ position:relative; overflow:hidden; padding:96px 26px 104px; text-align:center;
  background:
    linear-gradient(170deg, rgba(249,231,204,.72) 0%, rgba(243,217,184,.55) 30%, rgba(220,200,174,.5) 60%, rgba(46,111,142,.45) 100%),
    url('/cohen/hero.jpg') center/cover no-repeat,
    linear-gradient(170deg, #F9E7CC 0%, #F3D9B8 30%, #DCC8AE 60%, #B9C7CB 100%); }
.ll-hero-sun{ position:absolute; top:-140px; left:50%; transform:translateX(-50%); width:520px; height:520px; border-radius:50%;
  background:radial-gradient(circle, rgba(224,164,94,.55), rgba(224,164,94,.18) 45%, transparent 68%); pointer-events:none; }
.ll-hero-water{ position:absolute; left:0; right:0; bottom:0; height:120px;
  background:linear-gradient(180deg, transparent, rgba(46,111,142,.25)); pointer-events:none; }
.ll-hero-inner{ position:relative; z-index:1; max-width:820px; margin:0 auto; }
.ll-hero h1{ font-size:clamp(40px,6.4vw,74px); font-weight:500; letter-spacing:-.5px; }
.ll-hero h1 em{ font-style:italic; color:var(--water); }
.ll-lede{ max-width:600px; margin:22px auto 34px; font-size:18.5px; color:#4A5560; }
.ll-hero-ctas{ display:flex; gap:14px; justify-content:center; flex-wrap:wrap; }
.ll-hero-note{ margin-top:18px; font-size:14px; color:var(--slate); }

/* buttons */
.ll-btn{ display:inline-block; padding:15px 30px; border-radius:99px; text-decoration:none; font-weight:700; font-size:15px; cursor:pointer; border:none; font-family:'Inter',sans-serif; transition:transform .12s ease, background .2s; }
.ll-btn:hover{ transform:translateY(-2px); }
.ll-btn-sun{ background:var(--sun); color:#fff; box-shadow:0 10px 26px rgba(224,164,94,.4); }
.ll-btn-sun:hover{ background:var(--sun-deep); }
.ll-btn-water{ background:transparent; color:var(--water); border:1.5px solid var(--water); }
.ll-btn-water:hover{ background:var(--water); color:#fff; }
.ll-btn-full{ width:100%; margin-top:4px; }

/* strip */
.ll-strip{ background:var(--water); color:#fff; }
.ll-strip-inner{ max-width:1160px; margin:0 auto; padding:30px 26px; display:grid; grid-template-columns:repeat(auto-fit,minmax(180px,1fr)); gap:20px; text-align:center; }
.ll-strip strong{ display:block; font-family:'Fraunces',serif; font-size:24px; }
.ll-strip span{ font-size:13px; color:rgba(255,255,255,.82); }

/* sections */
.ll-section{ max-width:1160px; margin:0 auto; padding:88px 26px; }
.ll-section h2{ font-size:clamp(30px,4.3vw,48px); }
.ll-two{ display:grid; grid-template-columns:1fr 1fr; gap:56px; align-items:center; }
.ll-two-rev .ll-media{ order:2; }
@media(max-width:820px){ .ll-two{ grid-template-columns:1fr; gap:36px; } .ll-two-rev .ll-media{ order:0; } }
.ll-copy p{ color:var(--slate); font-size:16.5px; max-width:520px; }
.ll-media{ aspect-ratio:5/4; border-radius:20px; background:url('/cohen/home1.jpg') center/cover no-repeat, linear-gradient(155deg,#BcD2D8,#8FB2BC 60%,#5E8A99); box-shadow:0 24px 60px rgba(28,43,58,.14); position:relative; overflow:hidden; }
.ll-media::after{ content:""; position:absolute; inset:0; background:radial-gradient(400px 200px at 30% 20%, rgba(255,255,255,.15), transparent 60%); }

/* lifestyle cards */
.ll-life-grid{ display:grid; grid-template-columns:repeat(3,1fr); gap:22px; margin-top:16px; }
@media(max-width:820px){ .ll-life-grid{ grid-template-columns:1fr; } }
.ll-life{ background:#fff; border-radius:18px; padding:0 0 26px; overflow:hidden; box-shadow:0 12px 30px rgba(28,43,58,.06); border:1px solid rgba(28,43,58,.05); }
.ll-life h3{ font-size:21px; margin:20px 26px 8px; }
.ll-life p{ margin:0 26px; font-size:14.5px; color:var(--slate); }
.ll-life-photo{ height:180px; background-size:cover; background-position:center; }
.ll-life-ico{ display:none; }

/* communities */
.ll-comm-wrap{ background:var(--sand); }
.ll-comm-grid{ display:grid; grid-template-columns:repeat(3,1fr); gap:16px; margin-top:12px; }
@media(max-width:820px){ .ll-comm-grid{ grid-template-columns:1fr 1fr; } }
@media(max-width:520px){ .ll-comm-grid{ grid-template-columns:1fr; } }
.ll-comm{ background:#fff; border-radius:14px; padding:22px 22px; text-decoration:none; color:var(--ink); font-weight:600; font-size:15.5px;
  display:flex; align-items:center; justify-content:space-between; box-shadow:0 6px 16px rgba(28,43,58,.05); transition:transform .15s; }
.ll-comm:hover{ transform:translateY(-3px); }
.ll-comm span{ color:var(--sun-deep); }

/* marina banner */
.ll-marina{ position:relative; overflow:hidden; background:linear-gradient(160deg, var(--ink), #24485C); color:#fff; border-radius:26px; margin:0 26px; }
.ll-marina-inner{ max-width:1108px; margin:0 auto; padding:64px 40px; display:flex; align-items:center; justify-content:space-between; gap:40px; flex-wrap:wrap; position:relative; z-index:1; }
.ll-marina h2{ color:#fff; }
.ll-marina p{ color:rgba(255,255,255,.82); max-width:520px; }
.ll-marina-glow{ position:absolute; top:-80px; right:-60px; width:360px; height:360px; border-radius:50%; background:radial-gradient(circle, rgba(224,164,94,.4), transparent 66%); }

/* inquiry */
.ll-inquiry{ background:var(--cream); }
.ll-inquiry-inner{ max-width:1160px; margin:0 auto; padding:88px 26px; display:grid; grid-template-columns:1fr 1fr; gap:60px; align-items:center; }
@media(max-width:820px){ .ll-inquiry-inner{ grid-template-columns:1fr; gap:40px; } }
.ll-inquiry-copy h2{ font-size:clamp(30px,4vw,44px); }
.ll-inquiry-copy p{ color:var(--slate); max-width:440px; }
.ll-inq-phone{ font-size:15.5px; }
.ll-inq-phone a{ color:var(--water); font-weight:700; text-decoration:none; }
.ll-form{ background:#fff; padding:36px; border-radius:20px; box-shadow:0 24px 60px rgba(28,43,58,.1); }
.ll-field{ margin-bottom:18px; }
.ll-field label{ display:block; font-size:11px; letter-spacing:1.4px; text-transform:uppercase; color:var(--sun-deep); font-weight:700; margin-bottom:7px; }
.ll-field input,.ll-field select,.ll-field textarea{ width:100%; box-sizing:border-box; padding:13px 14px; border:1px solid rgba(28,43,58,.14); border-radius:10px; font-family:'Inter',sans-serif; font-size:15px; color:var(--ink); background:var(--cream); }
.ll-field input:focus,.ll-field select:focus,.ll-field textarea:focus{ outline:none; border-color:var(--sun); }
.ll-form-note{ text-align:center; font-size:12px; color:var(--slate); margin:14px 0 0; }

/* footer */
.ll-footer{ background:var(--ink); color:#fff; }
.ll-footer-inner{ max-width:1160px; margin:0 auto; padding:56px 26px; display:flex; justify-content:space-between; align-items:flex-end; gap:32px; flex-wrap:wrap; }
.ll-footer-addr{ color:rgba(255,255,255,.72); font-size:14px; margin-top:14px; line-height:1.7; }
.ll-footer-tag{ color:var(--sun); font-size:13px; }
@media (prefers-reduced-motion: reduce){ .ll-btn,.ll-comm{ transition:none; } }
`;
