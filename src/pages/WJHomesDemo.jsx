// WJHomesDemo.jsx
// W.J. Homes, LLC — one-page sample website (demo for Wesley Joyner Jr.)
// Build: 2026-07-06 v01 ✅
// Route suggestion: /wj-homes-demo
// NOTE: This is Wesley's *own brand* look — warm, clean, photo-forward. Not the GNL black/gold system.
// Hero image: /wj-hero.jpg  (place in the repo's public/ folder, or swap the path to wherever assets live)
// Gallery currently reuses the hero as placeholder tiles — replace GALLERY paths with more of Wesley's home photos.

import React from "react";

// ---- brand tokens (builder aesthetic) ----
const CHARCOAL = "#22262B";   // dark roof/stone tone from the house
const STONE = "#3A4048";      // secondary dark
const CREAM = "#F7F5F1";      // warm white siding tone
const WARM = "#B8946A";       // warm wood/cedar accent (the porch post)
const WARM_DK = "#96754F";
const TEXT = "#2B2E33";
const TEXT_MUTE = "#6B6F76";
const LINE = "#E4E0D8";

const HERO = "/wj-hero.jpg";
// Replace these with additional real photos of Wesley's homes.
const GALLERY = ["/wj-hero.jpg", "/wj-hero.jpg", "/wj-hero.jpg"];

const PHONE = "704.791.5127";
const PHONE_TEL = "7047915127";

export default function WJHomesDemo() {
  return (
    <div style={{ fontFamily: "'Inter','Helvetica Neue',Arial,sans-serif", color: TEXT, background: CREAM, WebkitFontSmoothing: "antialiased" }}>

      {/* ============ TOP BAR ============ */}
      <nav
        style={{
          position: "absolute", top: 0, left: 0, right: 0, zIndex: 3,
          display: "flex", justifyContent: "space-between", alignItems: "center",
          padding: "22px clamp(20px,5vw,56px)",
        }}
      >
        <div style={{ color: CREAM, fontFamily: "'Playfair Display',Georgia,serif", fontWeight: 700, fontSize: 20, letterSpacing: "0.02em", textShadow: "0 1px 12px rgba(0,0,0,.45)" }}>
          W.J. Homes<span style={{ color: WARM }}>.</span>
        </div>
        <a href={`tel:${PHONE_TEL}`} style={{ color: CREAM, textDecoration: "none", fontSize: 14, fontWeight: 600, letterSpacing: "0.03em", textShadow: "0 1px 10px rgba(0,0,0,.5)" }}>
          {PHONE}
        </a>
      </nav>

      {/* ============ HERO ============ */}
      <header style={{ position: "relative", height: "min(92vh, 760px)", minHeight: 460, overflow: "hidden" }}>
        <img
          src={HERO}
          alt="Custom home built by W.J. Homes"
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
        />
        {/* gradient scrim for text legibility */}
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(15,18,22,.42) 0%, rgba(15,18,22,.08) 34%, rgba(15,18,22,.55) 100%)" }} />

        <div style={{ position: "absolute", left: 0, right: 0, bottom: 0, padding: "0 clamp(20px,5vw,56px) clamp(40px,7vh,74px)" }}>
          <div style={{ color: WARM, fontSize: 13, fontWeight: 700, letterSpacing: "0.24em", textTransform: "uppercase", marginBottom: 16, textShadow: "0 1px 10px rgba(0,0,0,.5)" }}>
            Custom Homes · Charlotte Metro · Est. 1998
          </div>
          <h1 style={{ margin: 0, color: CREAM, fontFamily: "'Playfair Display',Georgia,serif", fontWeight: 700, fontSize: "clamp(34px,6.6vw,72px)", lineHeight: 1.02, maxWidth: 900, textShadow: "0 2px 24px rgba(0,0,0,.5)" }}>
            Homes built to be lived in for generations.
          </h1>
          <p style={{ color: "#EDE9E2", fontSize: "clamp(15px,2vw,19px)", lineHeight: 1.55, maxWidth: 560, marginTop: 20, textShadow: "0 1px 14px rgba(0,0,0,.55)" }}>
            Twenty-five years of custom homebuilding across the Charlotte metro —
            craftsmanship you can stand on.
          </p>
          <div style={{ marginTop: 30, display: "flex", gap: 14, flexWrap: "wrap" }}>
            <a href="#contact" style={btnPrimary}>Start your build</a>
            <a href="#work" style={btnGhost}>See the work</a>
          </div>
        </div>
      </header>

      {/* ============ INTRO / WHO ============ */}
      <section style={{ maxWidth: 1080, margin: "0 auto", padding: "clamp(56px,9vw,104px) clamp(20px,5vw,56px)" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "clamp(32px,5vw,72px)", alignItems: "start" }}>
          <div>
            <div style={eyebrow}>Who we are</div>
            <h2 style={h2}>The name behind the framing, now behind the whole home.</h2>
          </div>
          <div>
            <p style={pBody}>
              Wesley Joyner started framing homes and never stopped raising the bar. Today,
              W.J. Homes builds complete custom homes across the Charlotte metro — the kind
              of work that gets passed down by word of mouth because the craftsmanship
              speaks for itself.
            </p>
            <p style={pBody}>
              Licensed general contractor. Twenty-five-plus years in the trade. Every home
              built like it's going to stand for the next hundred years — because it is.
            </p>
          </div>
        </div>

        {/* stat row */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px,1fr))", gap: 24, marginTop: "clamp(40px,6vw,72px)", borderTop: `1px solid ${LINE}`, paddingTop: 40 }}>
          <Stat n="25+" label="Years building" />
          <Stat n="1998" label="Established" />
          <Stat n="100%" label="Custom homes" />
          <Stat n="Charlotte" label="Metro & beyond" />
        </div>
      </section>

      {/* ============ WORK / GALLERY ============ */}
      <section id="work" style={{ background: CHARCOAL, padding: "clamp(56px,9vw,104px) clamp(20px,5vw,56px)" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto" }}>
          <div style={{ ...eyebrow, color: WARM }}>Selected work</div>
          <h2 style={{ ...h2, color: CREAM, maxWidth: 640 }}>Craftsmanship that shows up in the details.</h2>
          <p style={{ ...pBody, color: "#C9CBCF", maxWidth: 560, marginTop: 8 }}>
            A look at the homes we build — stone, siding, and finish work done right.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px,1fr))", gap: 16, marginTop: 40 }}>
            {GALLERY.map((src, i) => (
              <div key={i} style={{ position: "relative", aspectRatio: "4 / 3", overflow: "hidden", borderRadius: 6, background: STONE }}>
                <img src={src} alt={`W.J. Homes project ${i + 1}`} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </div>
            ))}
          </div>
          <p style={{ color: "#8A8D93", fontSize: 12.5, marginTop: 18, fontStyle: "italic" }}>
            Sample layout — swap in more photos of Wesley's homes to fill the gallery.
          </p>
        </div>
      </section>

      {/* ============ WHAT WE BUILD ============ */}
      <section style={{ maxWidth: 1080, margin: "0 auto", padding: "clamp(56px,9vw,104px) clamp(20px,5vw,56px)" }}>
        <div style={eyebrow}>What we build</div>
        <h2 style={{ ...h2, maxWidth: 620 }}>From the foundation to the final trim.</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px,1fr))", gap: 2, marginTop: 44, border: `1px solid ${LINE}`, borderRadius: 8, overflow: "hidden", background: LINE }}>
          <Service title="Custom Homes" body="Built from your plans or ours — start to finish, on your lot." />
          <Service title="Additions" body="Seamless additions that look like they were always part of the home." />
          <Service title="Framing & Structure" body="Where it all started — framing done right is a home that lasts." />
          <Service title="Finish Work" body="Stone, siding, trim, and the details that separate good from great." />
        </div>
      </section>

      {/* ============ CONTACT ============ */}
      <section id="contact" style={{ background: CREAM, borderTop: `1px solid ${LINE}`, padding: "clamp(56px,9vw,100px) clamp(20px,5vw,56px)" }}>
        <div style={{ maxWidth: 720, margin: "0 auto", textAlign: "center" }}>
          <div style={eyebrow}>Let's build</div>
          <h2 style={{ ...h2, fontSize: "clamp(28px,4.6vw,44px)" }}>Ready to talk about your home?</h2>
          <p style={{ ...pBody, maxWidth: 480, margin: "14px auto 0" }}>
            Give Wesley a call. No pressure, no sales pitch — just an honest conversation
            about what you want to build.
          </p>
          <a href={`tel:${PHONE_TEL}`} style={{ display: "inline-block", marginTop: 30, fontFamily: "'Playfair Display',Georgia,serif", fontSize: "clamp(26px,4vw,40px)", color: CHARCOAL, textDecoration: "none", fontWeight: 700, letterSpacing: "0.01em" }}>
            {PHONE}
          </a>
          <div style={{ marginTop: 14 }}>
            <a href={`tel:${PHONE_TEL}`} style={btnPrimary}>Call W.J. Homes</a>
          </div>
        </div>
      </section>

      {/* ============ FOOTER ============ */}
      <footer style={{ background: CHARCOAL, color: "#9CA0A6", padding: "36px clamp(20px,5vw,56px)", textAlign: "center", fontSize: 13 }}>
        <div style={{ color: CREAM, fontFamily: "'Playfair Display',Georgia,serif", fontWeight: 700, fontSize: 18, marginBottom: 8 }}>
          W.J. Homes, LLC<span style={{ color: WARM }}>.</span>
        </div>
        <div>Custom Homes · Charlotte Metro · Est. 1998 · {PHONE}</div>
        <div style={{ marginTop: 14, fontSize: 11.5, color: "#71757B" }}>
          Sample website by GNL Digital Group · demo only
        </div>
      </footer>
    </div>
  );
}

/* ---------- shared styles ---------- */
const btnPrimary = {
  display: "inline-block", background: WARM, color: "#2A2015", textDecoration: "none",
  fontWeight: 700, fontSize: 14.5, letterSpacing: "0.02em", padding: "14px 26px",
  borderRadius: 4, boxShadow: "0 4px 18px rgba(0,0,0,.18)",
};
const btnGhost = {
  display: "inline-block", background: "rgba(255,255,255,.1)", color: "#FFF",
  textDecoration: "none", fontWeight: 600, fontSize: 14.5, letterSpacing: "0.02em",
  padding: "14px 26px", borderRadius: 4, border: "1px solid rgba(255,255,255,.5)",
  backdropFilter: "blur(2px)",
};
const eyebrow = {
  color: WARM_DK, fontSize: 12.5, fontWeight: 700, letterSpacing: "0.2em",
  textTransform: "uppercase", marginBottom: 14,
};
const h2 = {
  fontFamily: "'Playfair Display',Georgia,serif", fontWeight: 700,
  fontSize: "clamp(26px,4vw,40px)", lineHeight: 1.1, margin: 0, color: TEXT,
};
const pBody = { fontSize: 16.5, lineHeight: 1.7, color: TEXT_MUTE, margin: "0 0 16px" };

function Stat({ n, label }) {
  return (
    <div>
      <div style={{ fontFamily: "'Playfair Display',Georgia,serif", fontSize: "clamp(30px,4.5vw,46px)", fontWeight: 700, color: WARM_DK, lineHeight: 1 }}>{n}</div>
      <div style={{ fontSize: 12.5, letterSpacing: "0.08em", textTransform: "uppercase", color: TEXT_MUTE, marginTop: 8 }}>{label}</div>
    </div>
  );
}

function Service({ title, body }) {
  return (
    <div style={{ background: CREAM, padding: "28px 26px" }}>
      <h3 style={{ margin: "0 0 8px", fontSize: 18, fontWeight: 700, color: CHARCOAL, fontFamily: "'Playfair Display',Georgia,serif" }}>{title}</h3>
      <p style={{ margin: 0, fontSize: 14.5, lineHeight: 1.6, color: TEXT_MUTE }}>{body}</p>
    </div>
  );
}
