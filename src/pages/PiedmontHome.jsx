// PiedmontHome.jsx
// GNL Digital Group — Piedmont Hardwood Lumber Co. NEW WEBSITE homepage mockup
// Route: /piedmont-home  (mockup / design direction for the real site)
// Change-note: initial homepage mockup — sawmill palette matching the proposal + demo.
//   Hero = "Check Our Stock" linking to the live inventory board (the killer feature as the hero).
//   Full catalog from their own site content (1x4/1x6/1x8 grades + timbers). "We Buy Timber"
//   surfaced as its own section. Phone number prominent (fixes their current no-phone-on-site problem).
//
const SITE = {
  name: "Piedmont Hardwood Lumber Co.",
  town: "Mt. Pleasant, NC",
  phone: "(704) 436-9311",
  phoneRaw: "7044369311",
  est: "1960",
  email: "piedmonthardwood@gmail.com",
  stockUrl: "/piedmont-order-desk", // live stock board / order desk
};

import React from "react";

const C = {
  bark:"#3B2A1E", pine:"#7A5230", sawdust:"#F5F0E5", plank:"#EAD9BF",
  steel:"#2F6B7A", steelDk:"#204A54", ink:"#2A1D12", line:"#D8C4A4",
  green:"#3E7C4F", amber:"#C6801E", paper:"#FBF8F1",
};
const PUBLIC = "/piedmont"; // flat public/ folder, piedmont- prefixed: piedmont-loader.jpg etc.

export default function PiedmontHome() {
  return (
    <div style={{background:C.sawdust, color:C.ink, fontFamily:'"Inter",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif', lineHeight:1.55}}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700;800&family=Inter:wght@400;500;600;700&display=swap');
        .pf{font-family:"Playfair Display",Georgia,serif;}
        .wrap{max-width:1080px;margin:0 auto;padding:0 22px;}
        .btn{display:inline-block;text-decoration:none;font-weight:700;border-radius:7px;padding:15px 30px;font-size:16px;transition:.15s;border:none;cursor:pointer;}
        .btn-gold{background:${C.pine};color:#fff;} .btn-gold:hover{background:${C.bark};}
        .btn-steel{background:${C.steel};color:#fff;} .btn-steel:hover{background:${C.steelDk};}
        .btn-ghost{background:transparent;color:${C.sawdust};border:1.5px solid rgba(245,240,229,.6);} .btn-ghost:hover{background:rgba(245,240,229,.12);}
        .eyebrow{font-size:12px;letter-spacing:2.5px;text-transform:uppercase;color:${C.pine};font-weight:700;}
        .card{background:${C.paper};border:1px solid ${C.line};border-radius:12px;}
        @media(max-width:760px){.gridcat{grid-template-columns:1fr!important;} .split{grid-template-columns:1fr!important;} .h1{font-size:40px!important;} .navlinks{display:none!important;}}
      `}</style>

      {/* ===== top bar ===== */}
      <div style={{background:C.bark, color:C.sawdust}}>
        <div className="wrap" style={{display:"flex", justifyContent:"space-between", alignItems:"center", padding:"10px 22px", flexWrap:"wrap", gap:8}}>
          <div style={{fontSize:13.5, letterSpacing:.3}}>Southern Yellow Pine · Since {SITE.est} · {SITE.town}</div>
          <a href={`tel:${SITE.phoneRaw}`} style={{color:C.sawdust, textDecoration:"none", fontWeight:700, fontSize:16, letterSpacing:.5}}>
            ☎ {SITE.phone}
          </a>
        </div>
      </div>

      {/* ===== nav ===== */}
      <nav style={{background:C.pine, color:C.sawdust, position:"sticky", top:0, zIndex:20, boxShadow:"0 2px 10px rgba(0,0,0,.2)"}}>
        <div className="wrap" style={{display:"flex", justifyContent:"space-between", alignItems:"center", padding:"14px 22px"}}>
          <div className="pf" style={{fontSize:20, fontWeight:800, letterSpacing:.5}}>PIEDMONT HARDWOOD</div>
          <div className="navlinks" style={{display:"flex", gap:26, alignItems:"center", fontSize:15, fontWeight:600}}>
            <a href="#lumber" style={{color:C.sawdust, textDecoration:"none"}}>Our Lumber</a>
            <a href="#timber" style={{color:C.sawdust, textDecoration:"none"}}>We Buy Timber</a>
            <a href="#about" style={{color:C.sawdust, textDecoration:"none"}}>About</a>
            <a className="btn btn-steel" href={SITE.stockUrl} style={{padding:"9px 18px", fontSize:14}}>Check Our Stock</a>
          </div>
        </div>
      </nav>

      {/* ===== HERO ===== */}
      <header style={{position:"relative", minHeight:520, overflow:"hidden", borderBottom:`5px solid ${C.bark}`}}>
        <img src={`${PUBLIC}-loader.jpg`} alt="Piedmont Hardwood Lumber yard"
             style={{position:"absolute", inset:0, width:"100%", height:"100%", objectFit:"cover", objectPosition:"center 40%"}}/>
        <div style={{position:"absolute", inset:0, background:`linear-gradient(90deg, rgba(43,29,18,.88) 0%, rgba(43,29,18,.66) 50%, rgba(43,29,18,.34) 100%)`}}/>
        <div className="wrap" style={{position:"relative"}}>
          <div style={{maxWidth:660, paddingTop:70, paddingBottom:70}}>
            <div className="eyebrow" style={{color:C.plank}}>Family-Owned Since {SITE.est}</div>
            <h1 className="pf h1" style={{color:C.sawdust, fontSize:56, fontWeight:800, lineHeight:1.04, margin:"14px 0 16px", textShadow:"0 2px 14px rgba(0,0,0,.5)"}}>
              Southern Yellow Pine,<br/>Straight From The Mill.
            </h1>
            <p style={{color:"#eadfcb", fontSize:19, marginBottom:30, textShadow:"0 1px 6px rgba(0,0,0,.6)", maxWidth:560}}>
              Wholesale pine lumber — 1×4 to 1×8, six-foot to sixteen, plus heavy timbers made to order.
              Graded, dried or fresh sawn, ready to load. Sixty years serving builders across the region.
            </p>
            <div style={{display:"flex", gap:14, flexWrap:"wrap"}}>
              <a className="btn btn-gold" href={SITE.stockUrl} style={{fontSize:17, padding:"16px 34px"}}>Check Our Stock →</a>
              <a className="btn btn-ghost" href={`tel:${SITE.phoneRaw}`} style={{fontSize:17, padding:"16px 34px"}}>Call {SITE.phone}</a>
            </div>
          </div>
        </div>
      </header>

      {/* ===== live stock callout band ===== */}
      <section style={{background:C.steel, color:"#fff"}}>
        <div className="wrap" style={{padding:"22px", display:"flex", justifyContent:"space-between", alignItems:"center", flexWrap:"wrap", gap:16}}>
          <div style={{display:"flex", alignItems:"center", gap:14}}>
            <span style={{fontSize:30}}>◆</span>
            <div>
              <div className="pf" style={{fontSize:21, fontWeight:700}}>See what's in the yard — right now.</div>
              <div style={{fontSize:15, color:"#d5e8ec"}}>Live stock counts, updated as it moves. No need to call to check.</div>
            </div>
          </div>
          <a className="btn" href={SITE.stockUrl} style={{background:"#fff", color:C.steelDk, fontSize:16}}>Open Live Stock →</a>
        </div>
      </section>

      {/* ===== LUMBER CATALOG ===== */}
      <section id="lumber" className="wrap" style={{padding:"58px 22px 20px"}}>
        <div className="eyebrow">What We Carry</div>
        <h2 className="pf" style={{fontSize:38, color:C.bark, fontWeight:800, margin:"8px 0 8px"}}>Pine boards & timbers.</h2>
        <p style={{fontSize:17, color:"#5a4a36", maxWidth:680, marginBottom:30}}>
          Every board is southern yellow pine — durable, versatile, and priced for contractors. Grades run from
          #1 clear down to rough-cut barnwood, fresh sawn or kiln dried, your call.
        </p>

        <div style={{display:"grid", gridTemplateColumns:"1fr 1fr 1fr", gap:18}} className="gridcat">
          {[
            {s:"1×4", len:"6′ – 16′"},
            {s:"1×6", len:"6′ – 16′"},
            {s:"1×8", len:"6′ – 16′"},
          ].map((b,i)=>(
            <div key={i} className="card" style={{padding:"24px 24px 26px"}}>
              <div className="pf" style={{fontSize:34, color:C.pine, fontWeight:800, marginBottom:2}}>{b.s}</div>
              <div style={{fontSize:14, color:"#7a6a52", letterSpacing:1, marginBottom:14}}>{b.len}</div>
              <div style={{fontSize:14.5, color:"#4a3a28", lineHeight:1.9}}>
                #1 grade · #2 grade · #3/4 grade<br/>
                Appearance grade<br/>
                Rough-cut barnwood<br/>
                <span style={{color:C.pine, fontWeight:600}}>Fresh sawn or dried</span>
              </div>
            </div>
          ))}
        </div>

        {/* timbers row */}
        <div className="card" style={{marginTop:18, padding:"26px 28px", display:"grid", gridTemplateColumns:"1fr 1.4fr", gap:26, alignItems:"center"}} >
          <div>
            <div className="pf" style={{fontSize:28, color:C.bark, fontWeight:700, marginBottom:8}}>Heavy Timbers</div>
            <div style={{fontSize:16, color:"#5a4a36"}}>
              4×6, 4×8, 6×6, 8×8, 10×10, 12×12 — rough cut, 10′ to 16′. Made to order. Call for what you need.
            </div>
          </div>
          <div style={{borderRadius:10, overflow:"hidden", border:`1px solid ${C.line}`}}>
            <img src={`${PUBLIC}-warehouse.jpg`} alt="Stacked pine timbers under cover" style={{width:"100%", display:"block"}}/>
          </div>
        </div>
      </section>

      {/* ===== three promises ===== */}
      <section className="wrap" style={{padding:"36px 22px 20px"}}>
        <div style={{display:"grid", gridTemplateColumns:"1fr 1fr 1fr", gap:18}} className="gridcat">
          {[
            {t:"Fast Local Delivery", d:"We get lumber to your site when you need it and hit your deadlines. Local delivery available."},
            {t:"Competitive Pricing", d:"Straight-from-the-mill pricing. You don't sacrifice quality for a fair number."},
            {t:"Talk To A Real Person", d:"Questions about grade, length, or what fits your job? We've been doing this since 1960. Just ask."},
          ].map((p,i)=>(
            <div key={i} style={{borderTop:`3px solid ${C.pine}`, paddingTop:16}}>
              <div className="pf" style={{fontSize:20, color:C.bark, fontWeight:700, marginBottom:8}}>{p.t}</div>
              <div style={{fontSize:15.5, color:"#5a4a36"}}>{p.d}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== WE BUY TIMBER ===== */}
      <section id="timber" style={{marginTop:40, position:"relative", overflow:"hidden", borderTop:`5px solid ${C.bark}`, borderBottom:`5px solid ${C.bark}`}}>
        <img src={`${PUBLIC}-boards.jpg`} alt="Fresh sawn pine" style={{position:"absolute", inset:0, width:"100%", height:"100%", objectFit:"cover"}}/>
        <div style={{position:"absolute", inset:0, background:`linear-gradient(90deg, rgba(43,29,18,.92) 0%, rgba(43,29,18,.72) 100%)`}}/>
        <div className="wrap" style={{position:"relative", padding:"54px 22px"}}>
          <div style={{maxWidth:600}}>
            <div className="eyebrow" style={{color:C.plank}}>Landowners</div>
            <h2 className="pf" style={{fontSize:42, color:C.sawdust, fontWeight:800, margin:"10px 0 14px", textShadow:"0 2px 10px rgba(0,0,0,.5)"}}>
              We Buy Timber.
            </h2>
            <p style={{fontSize:18, color:"#eadfcb", marginBottom:24, textShadow:"0 1px 5px rgba(0,0,0,.6)"}}>
              Got standing pine on your land? We buy timber — and we've been fair with local landowners for over
              sixty years. Give us a call and let's talk about what you've got.
            </p>
            <a className="btn btn-gold" href={`tel:${SITE.phoneRaw}`} style={{fontSize:17, padding:"16px 34px"}}>Call {SITE.phone}</a>
          </div>
        </div>
      </section>

      {/* ===== ABOUT ===== */}
      <section id="about" className="wrap" style={{padding:"56px 22px 20px"}}>
        <div style={{display:"grid", gridTemplateColumns:"1fr 1fr", gap:36, alignItems:"center"}} className="split">
          <div style={{borderRadius:12, overflow:"hidden", border:`1px solid ${C.line}`, boxShadow:`0 3px 0 ${C.plank}`}}>
            <img src={`${PUBLIC}-sign.jpg`} alt="Piedmont Hardwood Lumber sign" style={{width:"100%", display:"block"}}/>
          </div>
          <div>
            <div className="eyebrow">Since {SITE.est}</div>
            <h2 className="pf" style={{fontSize:34, color:C.bark, fontWeight:800, margin:"8px 0 16px"}}>
              A family lumber business, built to last.
            </h2>
            <p style={{fontSize:17, color:"#4a3a28", marginBottom:14}}>
              Piedmont Hardwood Lumber Company is a family-owned manufacturer and wholesaler of high-quality southern
              yellow pine, serving contractors, woodworkers, and builders across the region since {SITE.est}.
            </p>
            <p style={{fontSize:17, color:"#4a3a28"}}>
              We specialize in this durable, versatile softwood — and we back every board with the kind of straight
              answers and fair dealing you only get from a family that's been at it for generations.
            </p>
          </div>
        </div>
      </section>

      {/* ===== CONTACT ===== */}
      <section style={{marginTop:44, background:C.bark, color:C.sawdust, padding:"50px 0"}}>
        <div className="wrap" style={{textAlign:"center"}}>
          <div className="eyebrow" style={{color:C.plank}}>Get In Touch</div>
          <h2 className="pf" style={{fontSize:34, color:C.sawdust, fontWeight:800, margin:"10px 0 8px"}}>Need lumber? Let's talk.</h2>
          <p style={{fontSize:17, color:"#e4d6bf", maxWidth:520, margin:"0 auto 26px"}}>
            Call the yard for pricing, availability, or to place an order. Or check what's in stock right now
            online — no phone call needed.
          </p>
          <div style={{display:"flex", gap:14, justifyContent:"center", flexWrap:"wrap", marginBottom:22}}>
            <a className="btn btn-gold" href={`tel:${SITE.phoneRaw}`} style={{fontSize:18, padding:"16px 38px"}}>☎ {SITE.phone}</a>
            <a className="btn btn-steel" href={SITE.stockUrl} style={{fontSize:18, padding:"16px 38px"}}>Check Our Stock</a>
          </div>
          <div style={{fontSize:15, color:"#c9b89a"}}>
            {SITE.town} · <a href={`mailto:${SITE.email}`} style={{color:"#e4d6bf"}}>{SITE.email}</a>
          </div>
          <div style={{fontSize:14, color:"#a89372", marginTop:6}}>
            Mon–Thu 7:30–5 · Fri 7:30–Noon
          </div>
        </div>
      </section>

      {/* footer */}
      <footer style={{background:"#2A1D12", color:C.plank, padding:"26px 0", textAlign:"center", fontSize:13.5}}>
        <div className="wrap">
          <div className="pf" style={{fontSize:18, color:C.sawdust, marginBottom:6}}>Piedmont Hardwood Lumber Co.</div>
          <div>Southern Yellow Pine · Since {SITE.est} · {SITE.town} · {SITE.phone}</div>
          <div style={{marginTop:10, opacity:.6, fontSize:12.5}}>Website by GNL Digital Group</div>
        </div>
      </footer>
    </div>
  );
}
