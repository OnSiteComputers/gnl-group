// CohenDemo.jsx — Live preview / sample site for Cohen Construction Inc.
// Route: /cohen-demo
// Palette: Navy + brushed silver + white (matched to Cohen logo) — light, airy, lakefront
// Logo: /cohen-logo.png (place provided PNG in public/)
// Featured feature: Request a Consultation / Lot Inquiry (Web3Forms, points to Greg for testing)
// Version: v02 — 2026-07-07
import React, { useState } from "react";

const WEB3FORMS_KEY = "3d89122b-0437-4179-bc13-c6ac794da038";

const NAVY = "#12233A";
const NAVY_D = "#0C1A2E";
const STEEL = "#5B6A78";
const SILVER = "#AEB7BF";
const WATER = "#2E5A7A";
const WHITE = "#FFFFFF";
const MIST = "#F5F8FB";
const FADE = "#6B7783";

const LOGO = "/cohen-logo.png";

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
  "Not sure yet — help me choose",
];

const LOT_TYPES = ["Waterfront", "Water view", "Interior lot", "Covered boat slip", "Not sure yet"];

const serif = { fontFamily: "'Playfair Display',Georgia,serif" };
const sans = { fontFamily: "'Inter','Helvetica Neue',Arial,sans-serif" };

const field = {
  width: "100%",
  padding: "13px 15px",
  fontSize: 15.5,
  border: "1px solid #D4DDE5",
  borderRadius: 4,
  background: "#fff",
  color: NAVY,
  boxSizing: "border-box",
  ...sans,
};
const label = {
  display: "block",
  fontSize: 13,
  fontWeight: 600,
  letterSpacing: "0.03em",
  textTransform: "uppercase",
  color: FADE,
  marginBottom: 7,
};

export default function CohenDemo() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    community: "",
    lot: "",
    message: "",
  });
  const [sent, setSent] = useState(false);
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState("");

  const upd = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const submit = async () => {
    setErr("");
    if (!form.name || !form.email || !form.community) {
      setErr("Please fill in your name, email, and a community.");
      return;
    }
    setBusy(true);
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: "Cohen Construction — Lot Inquiry (DEMO)",
          from_name: "Cohen Construction Demo Site",
          name: form.name,
          email: form.email,
          phone: form.phone,
          community: form.community,
          lot_type: form.lot,
          message: form.message,
        }),
      });
      const data = await res.json();
      if (data.success) setSent(true);
      else setErr("Something went wrong. Please try again.");
    } catch (e) {
      setErr("Something went wrong. Please try again.");
    }
    setBusy(false);
  };

  return (
    <div style={{ ...sans, background: WHITE, color: NAVY, minHeight: "100vh" }}>
      {/* PREVIEW BANNER */}
      <div
        style={{
          background: NAVY_D,
          color: SILVER,
          padding: "14px 18px",
          textAlign: "center",
          fontSize: 14.5,
          fontFamily: "'Courier New',monospace",
          letterSpacing: "0.02em",
        }}
      >
        <span style={{ color: WHITE, fontWeight: 700 }}>&#9671; PREVIEW &mdash;</span> this
        is a sample built by GNL Digital Group. It shows one feature &mdash; the{" "}
        <strong>Request a Consultation / Lot Inquiry</strong> form &mdash; not the full
        website.
      </div>

      {/* HERO */}
      <div
        style={{
          background: "linear-gradient(180deg, #FFFFFF 0%, #EEF3F8 100%)",
          padding: "48px 24px 60px",
          textAlign: "center",
          borderBottom: `1px solid #E2E9F0`,
        }}
      >
        <img
          src={LOGO}
          alt="Cohen Construction Inc."
          style={{ width: "min(360px, 80%)", height: "auto", marginBottom: 26 }}
        />
        <h1
          style={{
            ...serif,
            fontSize: 46,
            lineHeight: 1.1,
            margin: "0 auto 16px",
            fontWeight: 600,
            color: NAVY,
            maxWidth: 640,
          }}
        >
          Your custom home on Lake Tillery.
        </h1>
        <p
          style={{
            fontSize: 18.5,
            color: STEEL,
            maxWidth: 580,
            margin: "0 auto 30px",
          }}
        >
          Thirty years of lakefront craftsmanship &mdash; from waterfront estates to
          gated communities. Tell us where you want to build.
        </p>
        <a
          href="#inquiry"
          style={{
            background: NAVY,
            color: WHITE,
            textDecoration: "none",
            fontWeight: 700,
            fontSize: 15,
            letterSpacing: "0.03em",
            padding: "16px 34px",
            borderRadius: 4,
            display: "inline-block",
          }}
        >
          Request a Consultation &rarr;
        </a>
      </div>

      {/* COMMUNITIES STRIP */}
      <div style={{ background: MIST, padding: "54px 24px", textAlign: "center" }}>
        <div
          style={{
            fontSize: 13,
            letterSpacing: "0.28em",
            textTransform: "uppercase",
            color: WATER,
            fontWeight: 700,
          }}
        >
          Our Communities
        </div>
        <h2 style={{ ...serif, fontSize: 30, margin: "12px 0 30px", fontWeight: 600, color: NAVY }}>
          Nine ways to live on the water.
        </h2>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 12,
            justifyContent: "center",
            maxWidth: 780,
            margin: "0 auto",
          }}
        >
          {COMMUNITIES.slice(0, 9).map((c) => (
            <span
              key={c}
              style={{
                background: "#fff",
                border: "1px solid #D8E1EA",
                borderRadius: 30,
                padding: "10px 20px",
                fontSize: 14.5,
                color: NAVY,
                fontWeight: 500,
              }}
            >
              {c}
            </span>
          ))}
        </div>
      </div>

      {/* INQUIRY FORM */}
      <div id="inquiry" style={{ padding: "72px 24px", background: WHITE }}>
        <div style={{ maxWidth: 620, margin: "0 auto" }}>
          <div
            style={{
              fontSize: 13,
              letterSpacing: "0.28em",
              textTransform: "uppercase",
              color: WATER,
              fontWeight: 700,
              textAlign: "center",
            }}
          >
            Request a Consultation
          </div>
          <h2
            style={{
              ...serif,
              fontSize: 32,
              margin: "12px 0 10px",
              fontWeight: 600,
              textAlign: "center",
              color: NAVY,
            }}
          >
            Let&rsquo;s talk about your lot.
          </h2>
          <p
            style={{
              fontSize: 16,
              color: FADE,
              textAlign: "center",
              maxWidth: 480,
              margin: "0 auto 36px",
            }}
          >
            Tell us which community interests you and what kind of lot you have in
            mind. Robbie&rsquo;s office will reach out personally.
          </p>

          {sent ? (
            <div
              style={{
                background: MIST,
                border: `2px solid ${WATER}`,
                borderRadius: 8,
                padding: "44px 30px",
                textAlign: "center",
              }}
            >
              <div style={{ fontSize: 40, marginBottom: 10, color: WATER }}>&#10003;</div>
              <h3 style={{ ...serif, fontSize: 24, margin: "0 0 10px", color: NAVY }}>
                Thank you.
              </h3>
              <p style={{ fontSize: 16, color: STEEL, margin: 0 }}>
                Your inquiry has been received. We&rsquo;ll be in touch shortly to
                talk through your custom home on Lake Tillery.
              </p>
            </div>
          ) : (
            <div
              style={{
                background: "#fff",
                border: "1px solid #E2E9F0",
                borderRadius: 8,
                padding: "34px 30px",
                boxShadow: "0 6px 30px rgba(18,35,58,0.07)",
              }}
            >
              <div style={{ marginBottom: 18 }}>
                <label style={label}>Your Name *</label>
                <input style={field} value={form.name} onChange={upd("name")} />
              </div>
              <div style={{ display: "flex", gap: 14, marginBottom: 18, flexWrap: "wrap" }}>
                <div style={{ flex: "1 1 220px" }}>
                  <label style={label}>Email *</label>
                  <input style={field} type="email" value={form.email} onChange={upd("email")} />
                </div>
                <div style={{ flex: "1 1 180px" }}>
                  <label style={label}>Phone</label>
                  <input style={field} value={form.phone} onChange={upd("phone")} />
                </div>
              </div>
              <div style={{ marginBottom: 18 }}>
                <label style={label}>Community of Interest *</label>
                <select style={field} value={form.community} onChange={upd("community")}>
                  <option value="">Select a community&hellip;</option>
                  {COMMUNITIES.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
              </div>
              <div style={{ marginBottom: 18 }}>
                <label style={label}>Lot Type</label>
                <select style={field} value={form.lot} onChange={upd("lot")}>
                  <option value="">Select a lot type&hellip;</option>
                  {LOT_TYPES.map((l) => (
                    <option key={l} value={l}>
                      {l}
                    </option>
                  ))}
                </select>
              </div>
              <div style={{ marginBottom: 22 }}>
                <label style={label}>Tell us about your project</label>
                <textarea
                  style={{ ...field, minHeight: 110, resize: "vertical" }}
                  value={form.message}
                  onChange={upd("message")}
                  placeholder="Timeline, budget range, must-haves, or anything you'd like us to know…"
                />
              </div>

              {err && (
                <div style={{ color: "#B0342C", fontSize: 14.5, marginBottom: 16 }}>{err}</div>
              )}

              <button
                onClick={submit}
                disabled={busy}
                style={{
                  width: "100%",
                  background: busy ? "#7E8B98" : NAVY,
                  color: "#fff",
                  border: 0,
                  borderRadius: 4,
                  padding: "16px",
                  fontSize: 16,
                  fontWeight: 700,
                  letterSpacing: "0.03em",
                  cursor: busy ? "default" : "pointer",
                  ...sans,
                }}
              >
                {busy ? "Sending…" : "Send My Inquiry →"}
              </button>
            </div>
          )}
        </div>
      </div>

      {/* FOOTER */}
      <div
        style={{
          background: NAVY,
          color: "rgba(255,255,255,0.82)",
          padding: "40px 24px",
          textAlign: "center",
        }}
      >
        <img
          src={LOGO}
          alt="Cohen Construction Inc."
          style={{ width: 220, height: "auto", marginBottom: 14, filter: "brightness(1.15)" }}
        />
        <div style={{ fontSize: 14.5, lineHeight: 1.8 }}>
          121 N Main St, Norwood, NC 28128
          <br />
          (704) 474-3518 &middot; Lake Tillery, North Carolina
        </div>
        <div
          style={{
            marginTop: 22,
            paddingTop: 18,
            borderTop: "1px solid rgba(255,255,255,0.15)",
            fontSize: 12,
            fontFamily: "'Courier New',monospace",
            color: SILVER,
          }}
        >
          &#9671; Sample preview by GNL Digital Group &middot; v02 &middot; 2026
        </div>
      </div>
    </div>
  );
}
