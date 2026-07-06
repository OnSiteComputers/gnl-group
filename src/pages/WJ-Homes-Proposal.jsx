// WJHomesProposal.jsx
// GNL Digital Group — W.J. Homes, LLC barter proposal page
// Build: 2026-07-06 v02 ✅
// Route: /wj-homes-proposal
// Design system: "Quiet Authority" — INK #0B0B0C · GOLD #C8A85A · BONE #F5F3EE
//
// DEAL (v02 — corrected):
//   Greg's side: full web package — $5,000 startup + $3,500/mo (12 months included) + 2x GRP2636 phones.
//                Real first-year value: $47,000.
//   Wesley's side: framing labor + ALL materials (lumber, LVL, slider, basement material) —
//                  EXCEPT the two windows, which Greg supplies.
//   After 12 months: rolls to standard $3,500/mo.

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
            head="12 months of VoIP phone service"
            body="A full year of business phone service included in the trade. After that, it continues at standard service if you want to keep it."
          />
        </ul>
      </Section>

      {/* ============ THE VALUE ============ */}
      <Section n="03" title="What that's worth">
        <p style={pStyle}>
          Straight numbers, no games. This is what I charge everyone else for the same
          package:
        </p>
        <div
          style={{
            border: `1px solid ${INK_SOFT}`,
            borderRadius: 6,
            overflow: "hidden",
            maxWidth: 560,
            marginTop: 8,
          }}
        >
          <PriceRow label="Website + SEO + Google Profile — startup" value="$5,000" />
          <PriceRow label="VoIP service — $3,500/mo × 12 months" value="$42,000" />
          <PriceRow label="Two GRP2636 phones" value="included" />
          <PriceRow label="First-year value" value="$47,000" total />
        </div>
        <p style={{ ...pStyle, marginTop: 22 }}>
          That's the real number. You're not getting a stripped-down "friend version" —
          you're getting the exact package I put in front of law firms and medical offices,
          startup waived and a full year of service covered.
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
            I'm putting $47,000 of first-year value on the table. You're putting your crew,
            your craftsmanship, and the materials on the table. That's two businesses making
            a real trade — not me doing you a favor, and not you doing me one. Both sides
            bring something that costs them.
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
          <TermRow label="Web package" value="Website + local SEO + Google Business Profile + 2× GRP2636 + 12 months VoIP service" />
          <TermRow label="First-year value" value="$47,000 ($5,000 startup + $42,000 service), covered in the trade" />
          <TermRow label="After year one" value="Continues at standard $3,500/mo if kept" />
          <TermRow label="Framing" value="Rear addition/deck (dried-in) + basement framing — labor by Wesley" />
          <TermRow label="Materials" value="Wesley supplies ALL materials incl. the LVL — except the two windows, which Greg supplies" />
          <TermRow label="Phones" value="Purchased by Greg, included in the deal, Wesley's to keep" />
        </ul>
      </Section>

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

function PriceRow({ label, value, total }) {
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
      <span
        style={{
          color: total ? GOLD : "#D2CFC6",
          fontSize: total ? 20 : 15.5,
          fontWeight: 700,
          fontFamily: total ? "'Playfair Display', Georgia, serif" : "inherit",
          whiteSpace: "nowrap",
        }}
      >
        {value}
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
