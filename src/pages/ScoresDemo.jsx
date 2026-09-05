// ScoresDemo build: 2026-09-05 v1
// ScoresDemo.jsx
// Scores Palm Beach — one-page redesign demo (proposal for scorespb.com)
// Route suggestion: /scores-demo
// NOTE: Client's own brand look — neon nightlife (black / magenta / cyan). Not the GNL black/gold system.
// Photos currently point at the client's live Squarespace CDN. Swap to local /scores-*.jpg once we host assets.
// Copy is the client's existing site copy, kept verbatim for SEO parity.

import React, { useEffect } from "react";

// ---- brand tokens (neon nightlife) ----
const INK = "#07070a";        // page black
const INK_2 = "#0c0c11";      // section black
const INK_3 = "#0f0f15";      // card black
const INK_4 = "#050507";      // footer black
const TEXT = "#e9e6ee";
const TEXT_MUTE = "#c9c4d2";
const TEXT_DIM = "#8d879a";
const TEXT_FAINT = "#6f6a7b";
const MAGENTA = "#ff2bd6";
const CYAN = "#26e6ff";
const LINE = "rgba(255,255,255,0.08)";

const DISPLAY = "'Bebas Neue','Haettenschweiler','Arial Narrow',sans-serif";
const BODY = "'Barlow','Helvetica Neue',Arial,sans-serif";

const CDN = "https://images.squarespace-cdn.com/content/v1/5ec3cc45548ac6508af8645d";
const IMG = {
  lounge: `${CDN}/4c57cfcc-b188-46df-9898-d840ade9b991/gentlemens-club-palm-beach-scores-vip-lounge.jpg.jpg`,
  screens: `${CDN}/5dcca528-1a0a-428e-849e-8962419793de/palm-springs-fl-sports-bar-big-screens.jpg.jpg`,
  belvedere: `${CDN}/1597238864969-JIKDZUPPTY64C1F8TYMV/belvedere+lounge+still0.png`,
  bachelor: `${CDN}/5638cc0c-ec9f-4c2e-a380-3a9d323cb39b/scores-palm-beach-bachelor-party-vip.jpg.jpg`,
  ufc: `${CDN}/0277bbaa-1850-400f-badc-e04ce39a2aaa/02B12504-94B5-44D5-8A81-FFCDC3E9C38C.png`,
  grille: `${CDN}/1589924516948-MR1NPLMHOBBJKUCZJADP/image-asset.jpeg`,
};

const PHONE = "(561) 649-2000";
const PHONE_TEL = "5616492000";
const MAP_SRC =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3566.9759385376037!2d-80.09193499999999!3d26.617218!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d8d80c9a731c59%3A0x470d87876a0407d4!2sScores%20Palm%20Beach!5e0!3m2!1sen!2sus!4v1772203039918!5m2!1sen!2sus";

const NAV = [
  ["Sports", "#sports"],
  ["The Club", "#club"],
  ["VIP", "#vip"],
  ["UFC", "#ufc"],
  ["Specials", "#specials"],
  ["Menu", "#menu"],
  ["Visit", "#visit"],
];

const SPECIALS = [
  { tag: "Tuesdays", title: "Don Julio Blanco + Moet Imperial", body: "Bottle of Don Julio Blanco Tequila & Bottle of Moet Imperial", price: "$225", color: MAGENTA },
  { tag: "Wednesdays", title: "Grey Goose + Moet Imperial", body: "Bottle of Grey Goose & Bottle of Moet Imperial", price: "$225", color: CYAN },
  { tag: "Thursdays", title: "Crown Royal + Moet Imperial", body: "Bottle of Crown Royal & Bottle of Moet Imperial", price: "$225", color: MAGENTA },
  { tag: "Friday & Sat", title: "Grey Goose + 2 Moet Imperial", body: "Bottle of Grey Goose & 2 Bottle of Moet Imperial", price: "$375", color: CYAN },
  { tag: "Mon · Thu · Sun", title: "VIP Suites", body: "Mondays, Thursdays & Sundays", price: "$25 Rentals", color: MAGENTA },
  { tag: "Tuesdays", title: "Lingerie Tuesdays", body: "Drink Specials · Open to 5am", price: "Till 5AM", color: CYAN },
  { tag: "Select Nights", title: "DJ Troy Collier", body: "Select Nights · Open to 5am", price: "Live", color: MAGENTA },
  { tag: "Serving Now", title: "Try our 24k Steak", body: "Every bite is pure gold.", price: "24K", color: CYAN },
];

const VIP_INCLUDES = [
  "Reserved private seating in the Main Floor VIP or Belvedere Lounge",
  "Dedicated VIP host and personalized service",
  "Premium bottle selection with mixers and garnishes",
  "Priority entry",
  "Elevated viewing access for major events including UFC and championship fights",
];

export default function ScoresDemo() {
  useEffect(() => { console.log("ScoresDemo build: 2026-09-05 v1"); }, []);

  return (
    <div style={{ fontFamily: BODY, color: TEXT, background: INK, WebkitFontSmoothing: "antialiased", overflowX: "hidden" }}>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Barlow:wght@400;500;600;700&display=swap" rel="stylesheet" />

      {/* ============ NAV ============ */}
      <header style={{ position: "sticky", top: 0, zIndex: 20, background: "rgba(7,7,10,0.85)", backdropFilter: "blur(14px)", borderBottom: `1px solid ${LINE}` }}>
        <div style={{ maxWidth: 1240, margin: "0 auto", padding: "14px clamp(20px,4vw,24px)", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "14px 24px", flexWrap: "wrap" }}>
          <a href="#top" style={{ fontFamily: DISPLAY, fontSize: 32, letterSpacing: "0.06em", lineHeight: 1, display: "flex", gap: 10, color: TEXT, textDecoration: "none", whiteSpace: "nowrap", flex: "none" }}>
            <span>SCORES</span><span style={{ color: MAGENTA }}>PALM BEACH</span>
          </a>
          <nav style={{ display: "flex", flexWrap: "wrap", gap: "10px 26px", fontSize: 14, fontWeight: 600, letterSpacing: "0.11em", textTransform: "uppercase", flex: "1 1 320px", minWidth: 0, order: 2, justifyContent: "center" }}>
            {NAV.map(([label, href]) => (
              <a key={href} href={href} style={{ color: TEXT, textDecoration: "none", whiteSpace: "nowrap" }}>{label}</a>
            ))}
          </nav>
          <div style={{ display: "flex", gap: 10, flex: "none", order: 3 }}>
            <a href="#menu" style={btnGhostSm}>Order Online</a>
            <a href="#vip" style={btnNeonSm}>Reserve VIP</a>
          </div>
        </div>
      </header>

      {/* ============ HERO ============ */}
      <section id="top" style={{ position: "relative", minHeight: "88vh", display: "flex", alignItems: "flex-end", overflow: "hidden" }}>
        <img src={IMG.lounge} alt="Scores Palm Beach VIP lounge" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", filter: "saturate(1.1)" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg,rgba(7,7,10,0.35) 0%,rgba(7,7,10,0.2) 40%,rgba(7,7,10,0.95) 100%)" }} />
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(60% 50% at 80% 30%,rgba(38,230,255,0.18),transparent 70%),radial-gradient(50% 50% at 15% 80%,rgba(255,43,214,0.22),transparent 70%)" }} />
        <div style={{ position: "relative", maxWidth: 1240, margin: "0 auto", padding: "120px clamp(20px,4vw,24px) 72px", width: "100%" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, fontSize: 13, fontWeight: 600, letterSpacing: "0.22em", textTransform: "uppercase", color: CYAN, marginBottom: 20 }}>
            <span style={{ width: 40, height: 1, background: CYAN, display: "inline-block" }} />
            Palm Springs, FL · Open till 5AM
          </div>
          <h1 style={{ fontFamily: DISPLAY, fontSize: "clamp(56px,10vw,150px)", lineHeight: 0.92, margin: "0 0 24px", letterSpacing: "0.01em", maxWidth: 1000 }}>
            Sports Bar &amp; Gentlemen’s Club{" "}
            <span style={{ color: MAGENTA, textShadow: "0 0 30px rgba(255,43,214,0.6)" }}>in Palm Beach</span>
          </h1>
          <p style={{ fontSize: "clamp(17px,2vw,24px)", maxWidth: 640, margin: "0 0 36px", color: TEXT_MUTE, lineHeight: 1.4, textWrap: "pretty" }}>
            VIP Bottle Service, UFC Watch Parties, Steakhouse Dining &amp; Late Night Entertainment
          </p>
          <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
            <a href="#vip" style={btnNeon}>Reserve VIP Table</a>
            <a href="#ufc" style={btnCyanOutline}>Fight Night Schedule</a>
          </div>
        </div>
      </section>

      {/* ============ QUICK FACTS ============ */}
      <div style={{ borderTop: `1px solid ${LINE}`, borderBottom: `1px solid ${LINE}`, background: INK_2 }}>
        <div style={{ maxWidth: 1240, margin: "0 auto", padding: "0 clamp(20px,4vw,24px)", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))" }}>
          <Fact label="Hours" value="Mon – Sun · Noon – 5AM" />
          <Fact label="Happy Hour" value="Half-priced appetizers till 6PM" />
          <Fact label="Admission" value="$1 till 8PM · $10 after" />
          <Fact label="Call" value={PHONE} color={CYAN} last />
        </div>
      </div>

      {/* ============ SPORTS BAR ============ */}
      <section id="sports" style={{ maxWidth: 1240, margin: "0 auto", padding: "clamp(72px,10vw,120px) clamp(20px,4vw,24px) 60px", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))", gap: "clamp(40px,5vw,64px)", alignItems: "center" }}>
        <div>
          <div style={{ ...eyebrow, color: CYAN }}>01 — Game Day</div>
          <h2 style={h2}>The Ultimate Sports Bar in Palm Beach</h2>
          <p style={pBody}>When it comes to finding the best sports bar in Palm Beach, Scores Palm Beach delivers an experience that goes far beyond the average game-day spot. With massive high-definition screens throughout the venue, premium surround sound for major events, and an electric late-night atmosphere, this is where true fans come to watch every play, punch, and knockout.</p>
          <p style={pBody}>From NFL Sundays to primetime matchups, Scores is the go-to destination for football fans across Palm Beach County. Catch every touchdown, rivalry showdown, and playoff game surrounded by fellow fans who live for the action. During college football season, the energy inside the building is unmatched — multiple games playing at once, full bar service, and a kitchen open late so you never miss a second of the action.</p>
          <p style={pBody}>Unlike most bars that shut down early, Scores Palm Beach stays open until 5AM, making it one of the best late-night sports bars in Palm Beach. Whether the game goes into overtime or the after-party is just getting started, the night doesn’t end when the final whistle blows.</p>
          <div style={{ display: "flex", gap: 28, marginTop: 32, flexWrap: "wrap" }}>
            <Stat n="NFL" label="Every Sunday" />
            <Stat n="UFC" label="Sound on" />
            <Stat n="NBA · NHL" label="Playoffs live" />
            <Stat n="5AM" label="Kitchen open late" />
          </div>
        </div>
        <Framed src={IMG.screens} alt="Big screens at Scores Palm Beach" glow={CYAN} ratio="4 / 5" />
      </section>

      {/* ============ THE CLUB ============ */}
      <section id="club" style={{ position: "relative", padding: "clamp(72px,10vw,120px) 0", overflow: "hidden", background: INK_2 }}>
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(50% 70% at 20% 50%,rgba(255,43,214,0.16),transparent 70%)" }} />
        <div style={{ position: "relative", maxWidth: 1240, margin: "0 auto", padding: "0 clamp(20px,4vw,24px)", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))", gap: "clamp(40px,5vw,64px)", alignItems: "center" }}>
          <Framed src={IMG.belvedere} alt="The Belvedere Lounge" glow={MAGENTA} ratio="4 / 5" />
          <div>
            <div style={{ ...eyebrow, color: MAGENTA }}>02 — After Dark</div>
            <h2 style={h2}>Luxury Gentlemen’s Club Experience in Palm Beach</h2>
            <p style={pBody}>For those seeking a refined and upscale gentlemen’s club in Palm Beach, Scores Palm Beach offers a luxury experience designed for guests who expect more. From the moment you arrive, the atmosphere is intentional — sophisticated lighting, modern design, elevated finishes, and a layout that blends energy with exclusivity.</p>
            <p style={pBody}>Unlike ordinary nightlife venues, Scores Palm Beach delivers a polished environment where comfort and discretion come first. The club features spacious VIP seating areas, private booths, and premium lounge sections that allow you to enjoy the entertainment in style. Whether you're hosting a private celebration, entertaining clients, or planning an unforgettable night out, the setting is designed to feel both indulgent and exclusive.</p>
            <p style={pBody}>Discretion and professionalism are at the core of everything we do. Our management team and staff prioritize guest comfort, privacy, and seamless service from start to finish. Whether you’re visiting for the first time or you’re a returning VIP guest, you can expect a welcoming environment built on respect and exceptional hospitality.</p>
            <div style={{ marginTop: 32, padding: "20px 24px", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 6, background: "rgba(255,255,255,0.03)", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16, flexWrap: "wrap" }}>
              <div>
                <div style={{ fontFamily: DISPLAY, fontSize: 26, letterSpacing: "0.03em" }}>The Belvedere Lounge</div>
                <div style={{ fontSize: 14, color: TEXT_DIM }}>Floor to ceiling glass views. Control audio, visual, temperature, lighting and entertainment from your private booth.</div>
              </div>
              <a href="#vip" style={btnMagentaOutlineSm}>Reserve</a>
            </div>
          </div>
        </div>
      </section>

      {/* ============ VIP ============ */}
      <section id="vip" style={{ maxWidth: 1240, margin: "0 auto", padding: "clamp(72px,10vw,120px) clamp(20px,4vw,24px)" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))", gap: "clamp(40px,5vw,64px)", alignItems: "start" }}>
          <div>
            <div style={{ ...eyebrow, color: CYAN }}>03 — VIP</div>
            <h2 style={h2}>VIP Bottle Service &amp; Private Tables in Palm Beach</h2>
            <p style={{ ...pBody, marginBottom: 28 }}>For guests who expect the best, VIP bottle service at Scores Palm Beach delivers an elevated nightlife experience designed around exclusivity, comfort, and personalized attention. Whether you're celebrating a special occasion, hosting clients, or planning a high-energy night out, our private tables and VIP sections offer the ultimate way to experience Palm Beach nightlife.</p>
            <div style={{ fontSize: 12, letterSpacing: "0.22em", textTransform: "uppercase", color: TEXT_DIM, marginBottom: 14 }}>Each VIP reservation includes</div>
            <ul style={{ listStyle: "none", padding: 0, margin: "0 0 32px", display: "grid", gap: 12 }}>
              {VIP_INCLUDES.map((item) => (
                <li key={item} style={{ display: "flex", gap: 14, alignItems: "flex-start", fontSize: 16, color: TEXT }}>
                  <span style={{ width: 8, height: 8, borderRadius: "50%", background: CYAN, boxShadow: `0 0 12px ${CYAN}`, flex: "none", marginTop: 7 }} />
                  {item}
                </li>
              ))}
            </ul>
            <a href={`tel:${PHONE_TEL}`} style={btnCyan}>Reserve VIP Table</a>
          </div>
          <div style={{ display: "grid", gap: 20 }}>
            <img src={IMG.bachelor} alt="Bachelor party VIP at Scores Palm Beach" style={{ width: "100%", aspectRatio: "16 / 10", objectFit: "cover", borderRadius: 6, display: "block" }} />
            <div style={{ padding: 28, borderRadius: 6, background: "linear-gradient(135deg,rgba(255,43,214,0.18),rgba(38,230,255,0.12))", border: "1px solid rgba(255,255,255,0.1)" }}>
              <div style={{ fontFamily: DISPLAY, fontSize: 34, letterSpacing: "0.03em", marginBottom: 10 }}>Bachelor Parties</div>
              <p style={{ margin: "0 0 18px", fontSize: 15, lineHeight: 1.6, color: TEXT_MUTE, textWrap: "pretty" }}>
                Scores Palm Beach is one of the most popular destinations for bachelor parties in Palm Beach. Our VIP bottle service packages are fully customizable for bachelor groups, offering premium table placement, personalized hosting, and tailored experiences designed to make the groom’s night unforgettable. From high-energy main floor tables to private lounge buyouts, we accommodate groups of all sizes.
              </p>
              <a href={`tel:${PHONE_TEL}`} style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: MAGENTA, textDecoration: "none" }}>Plan the night →</a>
            </div>
          </div>
        </div>
      </section>

      {/* ============ UFC ============ */}
      <section id="ufc" style={{ position: "relative", overflow: "hidden", minHeight: 640, display: "flex", alignItems: "center" }}>
        <img src={IMG.ufc} alt="UFC watch party at Scores Palm Beach" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(90deg,rgba(7,7,10,0.96) 0%,rgba(7,7,10,0.85) 45%,rgba(7,7,10,0.3) 100%)" }} />
        <div style={{ position: "relative", maxWidth: 1240, margin: "0 auto", padding: "100px clamp(20px,4vw,24px)", width: "100%" }}>
          <div style={{ maxWidth: 620 }}>
            <div style={{ ...eyebrow, color: MAGENTA }}>04 — Fight Night</div>
            <h2 style={h2}>UFC Watch Parties in Palm Beach</h2>
            <p style={pBody}>If you’re searching for the ultimate UFC watch party in Palm Beach, Scores Palm Beach delivers a fight night atmosphere that goes far beyond a typical sports bar. Every major UFC pay-per-view, championship bout, and headline card is shown live across massive high-definition screens throughout the venue, creating an electric environment from the first prelim to the final decision.</p>
            <p style={{ ...pBody, marginBottom: 32 }}>Championship cards and high-profile fights often fill quickly, so advance reservations are recommended.</p>
            <div style={{ display: "flex", alignItems: "center", gap: 20, padding: "20px 24px", borderRadius: 6, background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,43,214,0.4)", flexWrap: "wrap" }}>
              <div style={{ fontFamily: DISPLAY, fontSize: 14, letterSpacing: "0.22em", color: MAGENTA, padding: "6px 10px", border: `1px solid ${MAGENTA}`, borderRadius: 3 }}>Next Card</div>
              <div style={{ fontFamily: DISPLAY, fontSize: 32, letterSpacing: "0.03em", flex: 1, minWidth: 180 }}>UFC 328 — Saturday May 9th</div>
              <a href={`tel:${PHONE_TEL}`} style={btnNeonSm}>Reserve Seats</a>
            </div>
          </div>
        </div>
      </section>

      {/* ============ SPECIALS ============ */}
      <section id="specials" style={{ maxWidth: 1240, margin: "0 auto", padding: "clamp(72px,10vw,120px) clamp(20px,4vw,24px)" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: 24, flexWrap: "wrap", marginBottom: 48 }}>
          <div>
            <div style={{ ...eyebrow, color: CYAN }}>05 — This Week</div>
            <h2 style={{ ...h2, marginBottom: 0 }}>Events &amp; Specials</h2>
          </div>
          <div style={{ fontSize: 14, color: TEXT_DIM }}>Bottle specials nightly 7pm–12am · *select bottles only</div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(260px,1fr))", gap: 16 }}>
          {SPECIALS.map((s) => (
            <div key={s.title} style={{ padding: "28px 26px", borderRadius: 6, background: INK_3, border: `1px solid ${LINE}`, display: "flex", flexDirection: "column", gap: 10, minHeight: 190 }}>
              <div style={{ fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase", color: s.color }}>{s.tag}</div>
              <div style={{ fontFamily: DISPLAY, fontSize: 36, lineHeight: 1, letterSpacing: "0.03em" }}>{s.title}</div>
              <div style={{ fontSize: 15, lineHeight: 1.5, color: TEXT_MUTE, textWrap: "pretty", flex: 1 }}>{s.body}</div>
              <div style={{ fontFamily: DISPLAY, fontSize: 30, color: s.color, lineHeight: 1 }}>{s.price}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ============ THE GRILLE ============ */}
      <section id="menu" style={{ background: INK_2, borderTop: `1px solid ${LINE}`, borderBottom: `1px solid ${LINE}` }}>
        <div style={{ maxWidth: 1240, margin: "0 auto", padding: "clamp(72px,10vw,120px) clamp(20px,4vw,24px)", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))", gap: "clamp(40px,5vw,64px)", alignItems: "center" }}>
          <div>
            <div style={{ ...eyebrow, color: MAGENTA }}>06 — Steakhouse</div>
            <h2 style={h2}>The Grille</h2>
            <p style={pBody}>Culinary traditions with bar favorites. Scores restaurant has the best hand cut filets in town. Check out our wiings, bbq chicken flatbread and chocolate cake.</p>
            <p style={{ ...pBody, marginBottom: 32 }}>The kitchen remains open late, serving hand-cut steaks, wings, flatbreads, gourmet appetizers, and elevated bar favorites long after other spots have closed their doors.</p>
            <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
              <a href="https://palmspringsgrill.alohaorderonline.com/StartOrder.aspx" style={btnNeon}>Order Online</a>
              <a href="#specials" style={btnGhost}>View Menu</a>
            </div>
          </div>
          <div style={{ position: "relative" }}>
            <img src={IMG.grille} alt="Hand-cut steak at The Grille" style={{ width: "100%", aspectRatio: "5 / 4", objectFit: "cover", borderRadius: 6, display: "block" }} />
            <div style={{ position: "absolute", left: 24, bottom: 24, padding: "14px 18px", background: "rgba(7,7,10,0.85)", backdropFilter: "blur(8px)", borderRadius: 4, border: "1px solid rgba(255,255,255,0.12)" }}>
              <div style={{ fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase", color: TEXT_DIM }}>Serving now</div>
              <div style={{ fontFamily: DISPLAY, fontSize: 28, letterSpacing: "0.03em" }}>Try our 24k Steak — every bite is pure gold.</div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ VISIT ============ */}
      <section id="visit" style={{ maxWidth: 1240, margin: "0 auto", padding: "clamp(72px,10vw,120px) clamp(20px,4vw,24px)" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: 48, alignItems: "start" }}>
          <div>
            <div style={{ ...eyebrow, color: CYAN }}>07 — Find Us</div>
            <h2 style={h2}>Visit Scores Palm Beach in Palm Springs, FL</h2>
            <p style={{ ...pBody, marginBottom: 32 }}>Situated on Lake Worth Road, Scores Palm Beach offers easy access from I-95 and major surrounding routes, making it simple to arrive from anywhere in South Florida.</p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(160px,1fr))", gap: 28 }}>
              <div>
                <div style={miniLabel}>Location</div>
                <div style={{ fontSize: 16, lineHeight: 1.6 }}>
                  3174 Lake Worth Road<br />Palm Springs, FL 33461<br />
                  <a href={`tel:${PHONE_TEL}`} style={{ color: CYAN, textDecoration: "none" }}>{PHONE}</a><br />
                  info@scorespb.com
                </div>
              </div>
              <div>
                <div style={miniLabel}>Hours</div>
                <div style={{ fontSize: 16, lineHeight: 1.6 }}>Monday — Sunday<br />Noon — 5am</div>
              </div>
              <div>
                <div style={miniLabel}>Admission</div>
                <div style={{ fontSize: 16, lineHeight: 1.6 }}>$10.00 from 8pm – 4am<br />$1.00 from noon – 8pm<br />$15 / $25 VIP Dance</div>
              </div>
            </div>
            <div style={{ marginTop: 32, display: "inline-block", padding: "10px 14px", border: `1px solid ${MAGENTA}`, color: MAGENTA, borderRadius: 3, fontSize: 12, fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase" }}>
              You must be 21 and over to enter the club
            </div>
          </div>
          <iframe
            title="Map to Scores Palm Beach"
            src={MAP_SRC}
            loading="lazy"
            style={{ width: "100%", aspectRatio: "1 / 1", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 6, filter: "invert(0.92) hue-rotate(180deg) saturate(0.6)" }}
          />
        </div>
      </section>

      {/* ============ FOOTER ============ */}
      <footer style={{ borderTop: `1px solid ${LINE}`, background: INK_4 }}>
        <div style={{ maxWidth: 1240, margin: "0 auto", padding: "56px clamp(20px,4vw,24px) 40px", display: "grid", gap: 32 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 24, flexWrap: "wrap" }}>
            <div style={{ fontFamily: DISPLAY, fontSize: 32, letterSpacing: "0.06em" }}>
              SCORES <span style={{ color: MAGENTA }}>PALM BEACH</span>
            </div>
            <div style={{ display: "flex", gap: 24, fontSize: 13, fontWeight: 600, letterSpacing: "0.16em", textTransform: "uppercase", flexWrap: "wrap" }}>
              <a href="https://www.instagram.com/scorespalmbeach_/" style={footLink}>Instagram</a>
              <a href="https://www.facebook.com/scorespalmbeach" style={footLink}>Facebook</a>
              <a href="https://twitter.com/scorespalmbeach" style={footLink}>X</a>
              <a href="https://www.youtube.com/channel/UC8r3O_UKEsq28up2BmzkMhg" style={footLink}>YouTube</a>
              <a href="https://form.jotform.com/202976420325857" style={footLink}>Apply</a>
            </div>
          </div>
          <p style={{ margin: 0, fontSize: 13, lineHeight: 1.6, color: TEXT_FAINT, maxWidth: 900, textWrap: "pretty" }}>
            <strong style={{ color: TEXT_DIM }}>Palm Springs Grill LLC d/b/a Scores Palm Beach Sports Bar &amp; Men’s Club.</strong>{" "}
            All links to social media platforms found linked from this website are provided as a service and convenience to our guests. We make no representation concerning the content, quality, accuracy, legality, or suitability of their content. Scores Palm Beach makes no endorsement, expressed or implied, of any social media platforms and is not responsible for their content. All photos in graphics are stock photos, posed by models.
          </p>
          <div style={{ display: "flex", gap: 24, fontSize: 12, color: TEXT_FAINT, flexWrap: "wrap" }}>
            <a href="#top" style={{ color: TEXT_FAINT, textDecoration: "none" }}>ADA Compliance</a>
            <a href="#top" style={{ color: TEXT_FAINT, textDecoration: "none" }}>Privacy Policy</a>
            <a href="#top" style={{ color: TEXT_FAINT, textDecoration: "none" }}>Terms of Use</a>
          </div>
          <div style={{ fontSize: 11.5, color: "#4d4956" }}>Sample website by GNL Digital Group · demo only</div>
        </div>
      </footer>
    </div>
  );
}

/* ---------- shared styles ---------- */
const eyebrow = { fontSize: 13, fontWeight: 600, letterSpacing: "0.22em", textTransform: "uppercase", marginBottom: 16 };
const h2 = { fontFamily: DISPLAY, fontSize: "clamp(40px,5vw,72px)", lineHeight: 0.95, margin: "0 0 28px", letterSpacing: "0.02em" };
const pBody = { fontSize: 17, lineHeight: 1.65, color: TEXT_MUTE, margin: "0 0 18px", textWrap: "pretty" };
const miniLabel = { fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase", color: TEXT_DIM, marginBottom: 10 };
const footLink = { color: TEXT, textDecoration: "none" };

const btnBase = { display: "inline-block", textDecoration: "none", borderRadius: 4, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.14em" };
const btnNeon = { ...btnBase, padding: "18px 32px", background: MAGENTA, color: INK, fontSize: 15, boxShadow: "0 0 40px rgba(255,43,214,0.5)" };
const btnNeonSm = { ...btnBase, padding: "11px 18px", background: MAGENTA, color: INK, fontSize: 13, boxShadow: "0 0 24px rgba(255,43,214,0.45)", whiteSpace: "nowrap" };
const btnCyan = { ...btnBase, padding: "16px 28px", background: CYAN, color: INK, fontSize: 14, boxShadow: "0 0 30px rgba(38,230,255,0.4)" };
const btnCyanOutline = { ...btnBase, padding: "18px 32px", border: `1px solid ${CYAN}`, color: CYAN, fontSize: 15 };
const btnMagentaOutlineSm = { ...btnBase, padding: "12px 20px", border: `1px solid ${MAGENTA}`, color: MAGENTA, fontSize: 13, whiteSpace: "nowrap" };
const btnGhost = { ...btnBase, padding: "16px 28px", border: "1px solid rgba(255,255,255,0.25)", color: TEXT, fontSize: 14 };
const btnGhostSm = { ...btnBase, padding: "11px 18px", border: "1px solid rgba(255,255,255,0.25)", color: TEXT, fontSize: 13, fontWeight: 600, whiteSpace: "nowrap" };

function Fact({ label, value, color, last }) {
  return (
    <div style={{ padding: last ? "22px 0 22px 24px" : "22px 24px 22px 0", borderRight: last ? "none" : `1px solid ${LINE}` }}>
      <div style={{ fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase", color: TEXT_DIM, marginBottom: 6 }}>{label}</div>
      <div style={{ fontFamily: DISPLAY, fontSize: 26, letterSpacing: "0.03em", color: color || TEXT }}>{value}</div>
    </div>
  );
}

function Stat({ n, label }) {
  return (
    <div>
      <div style={{ fontFamily: DISPLAY, fontSize: 44, color: MAGENTA, lineHeight: 1 }}>{n}</div>
      <div style={{ fontSize: 12, letterSpacing: "0.14em", textTransform: "uppercase", color: TEXT_DIM }}>{label}</div>
    </div>
  );
}

function Framed({ src, alt, glow, ratio }) {
  return (
    <div style={{ position: "relative" }}>
      <img src={src} alt={alt} style={{ width: "100%", aspectRatio: ratio, objectFit: "cover", borderRadius: 6, display: "block" }} />
      <div style={{ position: "absolute", inset: 0, borderRadius: 6, boxShadow: `inset 0 0 0 1px ${glow}66, 0 0 60px ${glow}33`, pointerEvents: "none" }} />
    </div>
  );
}
