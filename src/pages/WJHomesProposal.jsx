// WJHomesProposal.jsx
// GNL Digital Group — W.J. Homes, LLC barter proposal page
// Build: 2026-07-06 v04 ✅
// Route: /wj-homes-proposal
// Design system: "Quiet Authority" — INK #0B0B0C · GOLD #C8A85A · BONE #F5F3EE
//
// v04: added two links to the live demo site (www.gnldigitalgroup.com/wj-homes-demo) — hero + pre-sign CTA.
// DEAL (v03 — corrected pricing):
//   Greg's side: full managed web service (website + SEO + GBP + support + VoIP, all-in monthly)
//                + 2x GRP2636 phones.
//                - $5,000 startup: WAIVED (covered by trade)
//                - First 12 months of service: FREE (covered by trade)
//                - After year one: $2,500/mo friend rate (normal rate $3,500/mo)
//   Wesley's side: framing labor + ALL materials (lumber, LVL, slider, basement material) —
//                  EXCEPT the two windows, which Greg supplies.
//   NOTE: $3,500/mo is the ALL-IN managed service (VoIP is one component, NOT a standalone $42k line).

import React from "react";

const INK = "#0B0B0C";
const GOLD = "#C8A85A";
const BONE = "#F5F3EE";
const INK_SOFT = "#1A1A1C";
const MUTED = "#8C8A82";

export default function WJHomesProposal() {
  return (
    <div
      style={{
        background: INK,
        color: BONE,
        fontFamily: "'Inter', 'Helvetica Neue', Arial, sans-serif",
        minHeight: "100vh",
        WebkitFontSmoothing: "antialiased",
      }}
    >
      {/* ============ HERO ============ */}
      <header
        style={{
          maxWidth: 960,
          margin: "0 auto",
          padding: "88px 28px 56px",
          borderBottom: `1px solid ${INK_SOFT}`,
        }}
      >
        <div
          style={{
            fontSize: 12,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: GOLD,
            marginBottom: 28,
            fontWeight: 600,
          }}
        >
          GNL Digital Group · Proposal
        </div>

        <h1
          style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: "clamp(34px, 6vw, 60px)",
            lineHeight: 1.05,
            fontWeight: 700,
            margin: "0 0 22px",
            color: BONE,
          }}
        >
          W.J. Homes, LLC
          <span style={{ display: "block", color: GOLD, fontStyle: "italic", fontSize: "0.7em", marginTop: 10 }}>
            built since 1998 — now built to be found
          </span>
        </h1>

        <p
          style={{
            fontSize: 18,
            lineHeight: 1.6,
            color: "#D8D5CC",
            maxWidth: 640,
            margin: "0 0 8px",
          }}
        >
          Wesley — you build custom homes people brag about. But when someone gets your
          name and searches for it, there's nothing there. No website, no Google listing,
          no reviews. This fixes that. And since I need framing done, we do it as a
          straight trade — your build for mine.
        </p>

        <a
          href="https://www.gnldigitalgroup.com/wj-homes-demo"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 10,
            marginTop: 26,
            background: GOLD,
            color: INK,
            textDecoration: "none",
            fontWeight: 700,
            fontSize: 15,
            letterSpacing: "0.02em",
            padding: "15px 28px",
            borderRadius: 4,
            boxShadow: "0 4px 20px rgba(200,168,90,.22)",
          }}
        >
          See your sample website →
        </a>
        <div style={{ fontSize: 12.5, color: MUTED, marginTop: 10 }}>
          Take a look at a live one-page site built with your name and your work.
        </div>

        <div style={{ marginTop: 34, display: "flex", gap: 28, flexWrap: "wrap", fontSize: 13, color: MUTED }}>
          <span>Prepared for <strong style={{ color: BONE }}>Wesley Joyner Jr.</strong></span>
          <span>From <strong style={{ color: BONE }}>Greg Blair · GNL Digital Group</strong></span>
          <span>704.594.5826</span>
        </div>
      </header>

      {/* ============ THE PROBLEM ============ */}
      <Section n="01" title="Why this matters">
        <p style={pStyle}>
          A custom-home builder with 25+ years in the Charlotte metro and{" "}
          <em style={{ color: BONE }}>zero</em> web presence is leaving real work on the
          table. Here's what happens today: someone gets referred to you, they pull out
          their phone, they search "W.J. Homes Charlotte" or "Wesley Joyner builder" — and
          they find nothing. To a client about to spend hundreds of thousands on a home,
          invisible online reads as small-time, even when the work is the best in the area.
        </p>
        <p style={pStyle}>
          The Google Business Profile is the piece most builders sleep on. It's what puts
          you on the map, lets past clients leave reviews, and makes you show up when
          somebody searches "custom home builder near me." That's lead flow you're already
          earning through referrals — you're just not catching it.
        </p>
      </Section>

      {/* ============ WHAT GNL PROVIDES ============ */}
      <Section n="02" title="What I'll build for you">
        <ul style={ulStyle}>
          <LineItem
            head="Custom website"
            body="A clean, professional site built from the ground up — your work, your homes, your reputation, front and center. Fast, mobile-first, no template look."
          />
          <LineItem
            head="Local SEO"
            body="Optimized so you rank when people in the metro search for custom home builders — not buried on page four."
          />
          <LineItem
            head="Google Business Profile"
            body="Set up and dialed in: map presence, photos, reviews, the works. This is the piece that turns referrals into found business."
          />
          <LineItem
            head="Two Grandstream GRP2636 phones"
            body="Professional VoIP handsets for the home office where your wife works. I buy them, set them up, and they're yours to keep."
          />
          <LineItem
            head="Full managed service — first year free"
            body="Everything handled together: hosting, SEO upkeep, updates, support, and your VoIP phone service — one all-in service, not a stack of separate bills. The first 12 months are covered by the trade; after that it's $2,500/mo (my normal is $3,500)."
          />
        </ul>
      </Section>

      {/* ============ THE VALUE ============ */}
      <Section n="03" title="What you're getting — and saving">
        <p style={pStyle}>
          Straight numbers, no games. Here's my normal pricing, and here's what this trade
          knocks off it:
        </p>
        <div
          style={{
            border: `1px solid ${INK_SOFT}`,
            borderRadius: 6,
            overflow: "hidden",
            maxWidth: 600,
            marginTop: 8,
          }}
        >
          <PriceRow label="Startup — build, SEO, Google Profile setup" value="$5,000" strike note="waived" />
          <PriceRow label="First 12 months of managed service" value="$3,500/mo" strike note="free — 1 year" />
          <PriceRow label="Two GRP2636 phones" value="included" />
          <PriceRow label="After year one — your rate" value="$2,500/mo" note="normally $3,500" />
          <PriceRow label="Your first-year savings" value="$47,000" total />
        </div>
        <p style={{ ...pStyle, marginTop: 22 }}>
          The <strong style={{ color: BONE }}>$3,500/mo is the all-in service</strong> —
          website hosting, SEO, updates, support, and your VoIP phone service, all together.
          Not a phone bill. It's the whole thing handled.
        </p>
        <p style={pStyle}>
          So the trade covers your <strong style={{ color: BONE }}>$5,000 startup</strong>{" "}
          and a <strong style={{ color: BONE }}>full free year</strong> — that's{" "}
          <strong style={{ color: GOLD }}>$47,000</strong> off. After the free year, you stay
          on at <strong style={{ color: BONE }}>$2,500/mo</strong> instead of my usual $3,500 —
          a grand a month less, for as long as you're with me.
        </p>
      </Section>

      {/* ============ WHAT WESLEY PROVIDES ============ */}
      <Section n="04" title="What you'll build for me">
        <p style={pStyle}>
          The framing on my rear addition and basement — and you carry the materials.
          Here's the split, plain:
        </p>
        <ul style={ulStyle}>
          <LineItem
            head="Rear addition + deck (dried-in)"
            body="Enclose the new room off the back, frame the elevated deck cantilevered off the existing beam, roof over the room, dried-in with paper on. No new posts in the yard — it works off the two 6×6s already in the ground and the LVL."
          />
          <LineItem
            head="Basement framing"
            body="Frame the bathroom, closets, and partition walls per the plan."
          />
          <LineItem
            head="Materials — on you"
            body="All of it: framing lumber, the structural LVL, the slider, basement material — you supply and buy. The only thing I provide is the two windows."
          />
        </ul>
      </Section>

      {/* ============ THE TRADE / STRAIGHT TALK ============ */}
      <Section n="05" title="Straight talk on the trade">
        <div
          style={{
            border: `1px solid ${INK_SOFT}`,
            borderLeft: `3px solid ${GOLD}`,
            padding: "26px 28px",
            background: "#111113",
            borderRadius: 4,
          }}
        >
          <p style={{ ...pStyle, marginTop: 0 }}>
            I'm covering your $5,000 startup and a full free year — $47,000 off my normal
            pricing. You're putting your crew, your craftsmanship, and the materials on the
            table. That's two businesses making a real trade — not me doing you a favor, and
            not you doing me one. Both sides bring something that costs them.
          </p>
          <p style={{ ...pStyle, marginBottom: 0 }}>
            After 11 years of you keeping my house standing and me keeping your computers
            running, this is the deal I want to make. Square where it counts.
          </p>
        </div>
      </Section>

      {/* ============ TERMS ============ */}
      <Section n="06" title="The terms, plain">
        <ul style={ulStyle}>
          <TermRow label="Web package" value="Website + local SEO + Google Business Profile + 2× GRP2636 + full managed service (hosting, support, VoIP all-in)" />
          <TermRow label="Startup" value="$5,000 — waived, covered by the trade" />
          <TermRow label="First year" value="Free — 12 months of managed service covered by the trade" />
          <TermRow label="After year one" value="$2,500/mo friend rate (normally $3,500/mo)" />
          <TermRow label="Framing" value="Rear addition/deck (dried-in) + basement framing — labor by Wesley" />
          <TermRow label="Materials" value="Wesley supplies ALL materials incl. the LVL — except the two windows, which Greg supplies" />
          <TermRow label="Phones" value="Purchased by Greg, included in the deal, Wesley's to keep" />
        </ul>
      </Section>

      {/* ============ SEE THE DEMO (before signing) ============ */}
      <section style={{ maxWidth: 960, margin: "0 auto", padding: "10px 28px 0" }}>
        <div
          style={{
            border: `1px solid ${INK_SOFT}`,
            borderRadius: 6,
            background: "#111113",
            padding: "28px 30px",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 18,
          }}
        >
          <div>
            <div style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 20, color: BONE, fontWeight: 700 }}>
              Want to see it first?
            </div>
            <div style={{ fontSize: 14.5, color: "#CBC8BF", marginTop: 4 }}>
              Here's a live sample site built with your name and one of your homes.
            </div>
          </div>
          <a
            href="https://www.gnldigitalgroup.com/wj-homes-demo"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              background: GOLD,
              color: INK,
              textDecoration: "none",
              fontWeight: 700,
              fontSize: 15,
              letterSpacing: "0.02em",
              padding: "14px 26px",
              borderRadius: 4,
              whiteSpace: "nowrap",
            }}
          >
            View your sample site →
          </a>
        </div>
      </section>

      {/* ============ SIGN ============ */}
      <section
        style={{
          maxWidth: 960,
          margin: "0 auto",
          padding: "20px 28px 96px",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: 40,
            flexWrap: "wrap",
            paddingTop: 40,
            borderTop: `1px solid ${INK_SOFT}`,
          }}
        >
          <SignBlock who="Wesley Joyner Jr. — W.J. Homes, LLC" />
          <SignBlock who="Greg Blair — GNL Digital Group" />
        </div>

        <p style={{ fontSize: 12, color: MUTED, marginTop: 48, lineHeight: 1.6 }}>
          GNL Digital Group · Concord, NC · 704.594.5826 · gnldigitalgroup.com
          <br />
          This is a good-faith proposal between friends, not a formal contract. Scope and
          timing to be confirmed together.
        </p>
      </section>
    </div>
  );
}

/* ---------- helpers ---------- */

const pStyle = {
  fontSize: 16.5,
  lineHeight: 1.7,
  color: "#D2CFC6",
  margin: "0 0 18px",
  maxWidth: 660,
};

const ulStyle = {
  listStyle: "none",
  padding: 0,
  margin: 0,
  maxWidth: 700,
};

function Section({ n, title, children }) {
  return (
    <section
      style={{
        maxWidth: 960,
        margin: "0 auto",
        padding: "54px 28px",
        borderBottom: "1px solid #141416",
      }}
    >
      <div style={{ display: "flex", alignItems: "baseline", gap: 18, marginBottom: 26 }}>
        <span
          style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: 15,
            color: GOLD,
            fontWeight: 700,
            letterSpacing: "0.1em",
          }}
        >
          {n}
        </span>
        <h2
          style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: "clamp(22px, 3.4vw, 30px)",
            fontWeight: 700,
            margin: 0,
            color: BONE,
          }}
        >
          {title}
        </h2>
      </div>
      {children}
    </section>
  );
}

function LineItem({ head, body }) {
  return (
    <li
      style={{
        padding: "16px 0",
        borderTop: "1px solid #17171A",
        display: "grid",
        gridTemplateColumns: "1fr",
        gap: 4,
      }}
    >
      <div style={{ color: GOLD, fontWeight: 600, fontSize: 15.5, letterSpacing: "0.01em" }}>
        {head}
      </div>
      <div style={{ color: "#CBC8BF", fontSize: 15, lineHeight: 1.6 }}>{body}</div>
    </li>
  );
}

function PriceRow({ label, value, total, strike, note }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        gap: 16,
        padding: "15px 20px",
        borderTop: "1px solid #17171A",
        background: total ? "#15130E" : "transparent",
      }}
    >
      <span style={{ color: total ? BONE : "#CBC8BF", fontSize: 15, fontWeight: total ? 700 : 400 }}>
        {label}
      </span>
      <span style={{ display: "flex", alignItems: "center", gap: 10, whiteSpace: "nowrap" }}>
        <span
          style={{
            color: total ? GOLD : "#D2CFC6",
            fontSize: total ? 20 : 15.5,
            fontWeight: 700,
            fontFamily: total ? "'Playfair Display', Georgia, serif" : "inherit",
            textDecoration: strike ? "line-through" : "none",
            opacity: strike ? 0.55 : 1,
          }}
        >
          {value}
        </span>
        {note && (
          <span
            style={{
              fontSize: 11.5,
              fontWeight: 700,
              letterSpacing: "0.04em",
              textTransform: "uppercase",
              color: total ? INK : "#15130E",
              background: GOLD,
              padding: "3px 9px",
              borderRadius: 3,
            }}
          >
            {note}
          </span>
        )}
      </span>
    </div>
  );
}

function TermRow({ label, value }) {
  return (
    <li
      style={{
        display: "grid",
        gridTemplateColumns: "180px 1fr",
        gap: 18,
        padding: "14px 0",
        borderTop: "1px solid #17171A",
        fontSize: 15,
        lineHeight: 1.55,
      }}
    >
      <span style={{ color: MUTED, textTransform: "uppercase", letterSpacing: "0.08em", fontSize: 12.5, paddingTop: 2 }}>
        {label}
      </span>
      <span style={{ color: "#D2CFC6" }}>{value}</span>
    </li>
  );
}

function SignBlock({ who }) {
  return (
    <div style={{ flex: "1 1 300px", minWidth: 260 }}>
      <div
        style={{
          height: 44,
          borderBottom: `1px solid ${GOLD}`,
          marginBottom: 10,
        }}
      />
      <div style={{ fontSize: 13, color: "#CBC8BF" }}>{who}</div>
      <div style={{ fontSize: 12, color: MUTED, marginTop: 6 }}>Signature / Date</div>
    </div>
  );
}
