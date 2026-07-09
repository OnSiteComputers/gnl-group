// CohenProposal build: 2026-07-09 v9
// CohenProposal.jsx &mdash; GNL Digital Group proposal for Cohen Construction Inc.
// Route: /cohen-proposal
// Palette: Navy + brushed silver + white (matched to Cohen logo) &mdash; light & airy, lakefront-appropriate
// Logo: /cohen-logo.png (place the provided PNG in public/)
// Phone image: /yeahlink-t43u.png (place the provided PNG in public/)
// Version: v08 &mdash; 2026-07-09 (phone image filename -> yeahlink-t43u.png to match asset)
import React, { useEffect } from "react";

const NAVY = "#12233A";
const NAVY_D = "#0C1A2E";
const STEEL = "#5B6A78";
const SILVER = "#AEB7BF";
const WATER = "#2E5A7A";
const WHITE = "#FFFFFF";
const MIST = "#F5F8FB";
const FADE = "#6B7783";

const LOGO = "/cohen-logo.png";
const PHONE_IMG = "/yeahlink-t43u.png";
const DEMO_URL = "/cohen-still-water"; // primary/hero button -> our favorite

const DEMOS = [
  { slug: "/cohen-still-water", name: "Still Water", tag: "Elegant & serene", note: "Editorial calm â€” big water, quiet type. Our favorite." },
  { slug: "/cohen-lake-life",   name: "Lake Life",   tag: "Warm & lifestyle", note: "Sunlit and inviting â€” the lake-life feeling, dock to door." },
  { slug: "/cohen-blueprint",   name: "Blueprint",   tag: "Bold & architectural", note: "Confident and structured â€” craftsmanship up front." },
  { slug: "/cohen-demo",        name: "Original Demo", tag: "The first concept", note: "Where we started â€” the original working sample." },
];

const wrap = {
  background: WHITE,
  color: NAVY,
  fontFamily: "'Inter','Helvetica Neue',Arial,sans-serif",
  minHeight: "100vh",
  WebkitFontSmoothing: "antialiased",
  lineHeight: 1.65,
};
const serif = { fontFamily: "'Playfair Display',Georgia,serif" };
const container = { maxWidth: 920, margin: "0 auto", padding: "0 28px" };
const kicker = {
  fontSize: 12,
  letterSpacing: "0.3em",
  textTransform: "uppercase",
  color: WATER,
  fontWeight: 700,
};

function Section({ id, children, style }) {
  return (
    <section id={id} style={{ padding: "70px 0", ...style }}>
      <div style={container}>{children}</div>
    </section>
  );
}

function Check({ children, dark }) {
  return (
    <li
      style={{
        display: "flex",
        gap: 14,
        alignItems: "flex-start",
        padding: "12px 0",
        borderBottom: `1px solid ${dark ? "rgba(255,255,255,0.12)" : "#E6ECF2"}`,
        listStyle: "none",
      }}
    >
      <span style={{ color: WATER, fontSize: 14, lineHeight: 1.7, flexShrink: 0 }}>
        &#9670;
      </span>
      <span style={{ fontSize: 15.5, color: dark ? "rgba(255,255,255,0.92)" : NAVY }}>
        {children}
      </span>
    </li>
  );
}

function PriceRow({ label, value, note }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "baseline",
        gap: 20,
        padding: "20px 0",
        borderBottom: `1px solid #E6ECF2`,
      }}
    >
      <div>
        <div style={{ fontSize: 16, fontWeight: 700, color: NAVY }}>{label}</div>
        {note && <div style={{ fontSize: 13.5, color: FADE, marginTop: 4 }}>{note}</div>}
      </div>
      <div style={{ ...serif, fontSize: 24, color: WATER, whiteSpace: "nowrap", fontWeight: 600 }}>
        {value}
      </div>
    </div>
  );
}

export default function CohenProposal() {
  useEffect(() => { console.log("CohenProposal build: 2026-07-09 v9 âœ…"); }, []);

  return (
    <div style={wrap}>
      {/* HERO */}
      <div
        style={{
          background: "linear-gradient(180deg, #FFFFFF 0%, #F5F8FB 100%)",
          borderBottom: `1px solid #E6ECF2`,
          padding: "56px 0 60px",
          textAlign: "center",
        }}
      >
        <div style={container}>
          <img
            src={LOGO}
            alt="Cohen Construction Inc."
            style={{ display: "block", width: "min(380px, 78%)", height: "auto", margin: "0 auto 8px" }}
          />
          <div style={{ ...kicker, marginTop: 18 }}>A Proposal Prepared by GNL Digital Group</div>
          <h1
            style={{
              ...serif,
              fontSize: 44,
              lineHeight: 1.13,
              margin: "18px auto 16px",
              fontWeight: 600,
              color: NAVY,
              maxWidth: 720,
            }}
          >
            A website as refined as the homes you build.
          </h1>
          <p style={{ fontSize: 18, color: FADE, maxWidth: 620, margin: "0 auto 30px" }}>
            Twenty-five years of lakefront craftsmanship on Lake Tillery deserves
            a digital presence that reflects it. Here&rsquo;s what a builder of
            your standing should have online.
          </p>
          <a
            href={DEMO_URL}
            style={{
              background: NAVY,
              color: WHITE,
              textDecoration: "none",
              fontWeight: 700,
              fontSize: 14,
              letterSpacing: "0.04em",
              padding: "16px 30px",
              borderRadius: 3,
              display: "inline-block",
            }}
          >
            VIEW A LIVE PREVIEW &rarr;
          </a>
        </div>
      </div>

      {/* THE GAP */}
      <Section id="gap">
        <div style={kicker}>01 &mdash; Where things stand</div>
        <h2 style={{ ...serif, fontSize: 30, margin: "16px 0 22px", fontWeight: 600, color: NAVY }}>
          The homes are extraordinary. The website isn&rsquo;t.
        </h2>
        <p style={{ fontSize: 16.5, color: STEEL, maxWidth: 720, marginTop: 0 }}>
          A buyer looking for a custom lakefront home on Lake Tillery finds you
          online before they ever call. Right now, here&rsquo;s what they find &mdash;
          and each of these quietly costs you credibility with a high-end buyer:
        </p>
        <ul style={{ padding: 0, margin: "20px 0 0" }}>
          <Check>
            <strong>No secure connection.</strong> The site loads over plain HTTP
            &mdash; no padlock. Browsers flag it &ldquo;Not Secure,&rdquo; and a
            million-dollar buyer notices.
          </Check>
          <Check>
            <strong>Communities without detail.</strong> Nine named communities &mdash;
            Uwharrie Landing, Eagle Pointe, Edgewater, The Peninsula, Swift Island
            Plantation and more &mdash; listed with a line each. No lot detail, no way to
            inquire on a specific property.
          </Check>
          <Check>
            <strong>Invisible in search.</strong> Nothing is built to rank for
            &ldquo;Lake Tillery custom home builder&rdquo; or &ldquo;Norwood NC
            lakefront builder&rdquo; &mdash; the exact phrases your buyers type.
          </Check>
          <Check>
            <strong>No real portfolio.</strong> Thirty-plus years of custom homes,
            and no gallery that shows the work the way it deserves.
          </Check>
        </ul>
      </Section>

      {/* WHAT WE BUILD (navy band) */}
      <div style={{ background: NAVY, color: WHITE }}>
        <Section id="build">
          <div style={{ ...kicker, color: SILVER }}>02 &mdash; What GNL builds for you</div>
          <h2 style={{ ...serif, fontSize: 30, margin: "16px 0 22px", fontWeight: 600, color: WHITE }}>
            A complete, managed digital presence.
          </h2>
          <ul style={{ padding: 0, margin: 0 }}>
            <Check dark>
              <strong>Custom website</strong> &mdash; designed around Lake Tillery and
              lakefront living, with real photography and a portfolio that shows
              your homes the way they look in person.
            </Check>
            <Check dark>
              <strong>Community &amp; lot pages</strong> &mdash; each of your nine
              communities given its own page, with a &ldquo;Request a Consultation
              / Lot Inquiry&rdquo; path so serious buyers reach you directly.
            </Check>
            <Check dark>
              <strong>Local SEO</strong> &mdash; built to rank for the searches that
              bring lakefront buyers to Norwood and Lake Tillery. This is the part
              that pays for itself.
            </Check>
            <Check dark>
              <strong>Google Business Profile</strong> &mdash; set up and optimized so
              Cohen Construction appears in Google Maps and local results with
              photos, hours, and a direct call button.
            </Check>
            <Check dark>
              <strong>Managed hosting, domain &amp; SSL</strong> &mdash; the padlock,
              fast load times, no maintenance on your end. It simply works.
            </Check>
            <Check dark>
              <strong>Professional business email</strong> on your own domain.
            </Check>
          </ul>
        </Section>
      </div>

      {/* PHONES & FAX */}
      <div style={{ background: MIST, borderTop: `1px solid #E6ECF2`, borderBottom: `1px solid #E6ECF2` }}>
        <Section id="phones">
          <div style={kicker}>03 &mdash; Phones &amp; fax, handled too</div>
          <h2 style={{ ...serif, fontSize: 30, margin: "16px 0 22px", fontWeight: 600, color: NAVY }}>
            Your office phone, brought up to date.
          </h2>
          <p style={{ fontSize: 16.5, color: STEEL, maxWidth: 720, marginTop: 0 }}>
            While we&rsquo;re modernizing everything else, your phone line comes with
            it &mdash; on the same account, managed by the same hands. You keep both of
            your existing numbers; nothing changes for anyone who already calls you.
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: 34,
              alignItems: "center",
              marginTop: 26,
            }}
          >
            <div
              style={{
                background: WHITE,
                border: `1px solid #E0E7EE`,
                borderRadius: 8,
                padding: "26px 22px",
                textAlign: "center",
              }}
            >
              <img
                src={PHONE_IMG}
                alt="Yealink T43U desk phone"
                style={{ display: "block", width: "100%", maxWidth: 340, height: "auto", margin: "0 auto" }}
              />
              <div style={{ ...kicker, marginTop: 16 }}>Yealink T43U</div>
              <div style={{ fontSize: 13.5, color: FADE, marginTop: 6 }}>
                Professional HD desk phone &middot; two included
              </div>
            </div>
            <ul style={{ padding: 0, margin: 0 }}>
              <Check>
                <strong>Two Yealink T43U desk phones</strong> &mdash; professional,
                hardwired handsets included with your build. Both ring on your business
                line, so whoever&rsquo;s free picks up.
              </Check>
              <Check>
                <strong>Your voice number, ported over.</strong> Your existing business
                line moves to the new system exactly as-is &mdash; same number on your
                cards, your signs, and your trucks.
              </Check>
              <Check>
                <strong>Your fax line becomes email fax &mdash; an upgrade.</strong> Incoming
                faxes arrive as clean PDFs in your inbox. Send a fax from any browser.
                Nothing to jam, no toner, no paper &mdash; and your fax number stays the same.
              </Check>
              <Check>
                <strong>One account, one point of contact.</strong> Phones, fax, website,
                and email all managed together. One call to Greg fixes anything.
              </Check>
            </ul>
          </div>
        </Section>
      </div>

      {/* INVESTMENT */}
      <Section id="investment">
        <div style={kicker}>04 &mdash; Investment</div>
        <h2 style={{ ...serif, fontSize: 30, margin: "16px 0 8px", fontWeight: 600, color: NAVY }}>
          Straightforward, all-inclusive.
        </h2>
        <p style={{ fontSize: 16, color: FADE, maxWidth: 680, marginTop: 0 }}>
          One build fee, one flat monthly. Everything above is covered &mdash; design,
          SEO, hosting, domain, SSL, email, and ongoing management. No hourly
          billing, no surprises.
        </p>
        <div
          style={{
            marginTop: 28,
            border: `1px solid #E0E7EE`,
            borderRadius: 6,
            padding: "8px 30px 22px",
            background: MIST,
          }}
        >
          <PriceRow
            label="Initial build"
            value="$5,000"
            note="One-time. Design, SEO foundation, community pages, GBP setup, migration &mdash; and two Yealink T43U desk phones included."
          />
          <PriceRow
            label="Managed website &amp; SEO"
            value="$3,500 / mo"
            note="Hosting, domain, SSL, email, SEO, updates, and full management."
          />
          <PriceRow
            label="Phone &amp; fax service"
            value="$150 / mo"
            note="Your business line on both desk phones, plus email-based fax. Both numbers ported."
          />
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "baseline",
              gap: 20,
              padding: "22px 0 6px",
            }}
          >
            <div style={{ fontSize: 17, fontWeight: 800, color: NAVY }}>Monthly total</div>
            <div style={{ ...serif, fontSize: 28, color: WATER, whiteSpace: "nowrap", fontWeight: 700 }}>
              $3,650 / mo
            </div>
          </div>
          <div style={{ paddingTop: 12, fontSize: 14.5, color: FADE }}>
            Three-month minimum, then month-to-month with 30 days&rsquo; notice.
            Nothing is due at signing &mdash; we start building immediately, and the
            first payment is due when your new site goes live.
          </div>
        </div>
      </Section>

      {/* WHY GNL (mist band) */}
      <div style={{ background: MIST, borderTop: `1px solid #E6ECF2`, borderBottom: `1px solid #E6ECF2` }}>
        <Section id="why">
          <div style={kicker}>05 &mdash; Why us</div>
          <h2 style={{ ...serif, fontSize: 30, margin: "16px 0 18px", fontWeight: 600, color: NAVY }}>
            Twenty-five years of trust.
          </h2>
          <p style={{ fontSize: 16.5, color: STEEL, maxWidth: 720, marginTop: 0 }}>
            We&rsquo;ve handled your computers and technology for more than two
            decades. You already know how we work &mdash; thoroughly, reliably, and
            without drama. GNL Digital Group is the same hands, now building the
            web presence to match the reputation you&rsquo;ve spent a career
            earning on Lake Tillery.
          </p>
        </Section>
      </div>

      {/* CLOSE */}
      <Section id="directions">
        <div style={{ textAlign: "center", marginBottom: 34 }}>
          <div style={kicker}>Four directions to explore</div>
          <h2 style={{ ...serif, fontSize: 30, margin: "14px 0 12px", fontWeight: 600, color: NAVY }}>
            One brand. Four ways to tell it.
          </h2>
          <p style={{ fontSize: 16, color: FADE, maxWidth: 560, margin: "0 auto" }}>
            We built several live directions so you can feel the difference, not
            just imagine it. Click any one to open the full page &mdash; each is real,
            with Robbie&rsquo;s own drone photography built in.
          </p>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: 18,
          }}
        >
          {DEMOS.map((d) => (
            <a
              key={d.slug}
              href={d.slug}
              style={{
                textDecoration: "none",
                color: NAVY,
                border: "1px solid #E0E7EE",
                borderRadius: 6,
                padding: "26px 24px",
                background: "linear-gradient(180deg, #FFFFFF 0%, #F5F8FB 100%)",
                display: "block",
              }}
            >
              <div style={{ ...kicker, marginBottom: 10 }}>{d.tag}</div>
              <div style={{ ...serif, fontSize: 22, fontWeight: 600, color: NAVY, marginBottom: 8 }}>
                {d.name}
              </div>
              <p style={{ fontSize: 14.5, color: FADE, margin: "0 0 16px", lineHeight: 1.5 }}>
                {d.note}
              </p>
              <span style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.04em", color: NAVY }}>
                VIEW THIS DIRECTION &rarr;
              </span>
            </a>
          ))}
        </div>
      </Section>

      <Section id="close">
        <div
          style={{
            border: `1px solid #E0E7EE`,
            borderRadius: 6,
            padding: "44px 34px",
            textAlign: "center",
            background: "linear-gradient(180deg, #FFFFFF 0%, #F5F8FB 100%)",
          }}
        >
          <div style={kicker}>Ready to see it?</div>
          <h2 style={{ ...serif, fontSize: 30, margin: "14px 0 12px", fontWeight: 600, color: NAVY }}>
            Take a look at the live preview.
          </h2>
          <p style={{ fontSize: 16, color: FADE, maxWidth: 540, margin: "0 auto 26px" }}>
            We&rsquo;ve built a working sample &mdash; including the Request a
            Consultation / Lot Inquiry feature &mdash; so you can see exactly how it
            feels before you decide.
          </p>
          <a
            href={DEMO_URL}
            style={{
              background: NAVY,
              color: WHITE,
              textDecoration: "none",
              fontWeight: 700,
              fontSize: 14,
              letterSpacing: "0.04em",
              padding: "16px 34px",
              borderRadius: 3,
              display: "inline-block",
            }}
          >
            VIEW THE LIVE PREVIEW &rarr;
          </a>
          <div style={{ marginTop: 28, fontSize: 14.5, color: FADE }}>
            Greg Blair &middot; GNL Digital Group &middot;{" "}
            <span style={{ color: NAVY, fontWeight: 600 }}>704-594-5826</span>
          </div>
        </div>
      </Section>

      {/* FOOTER */}
      <div style={{ background: NAVY_D, padding: "26px 0", textAlign: "center" }}>
        <div style={{ fontSize: 12, color: SILVER, letterSpacing: "0.04em" }}>
          GNL Digital Group &middot; Concord, North Carolina &middot; Proposal v08 &middot; 2026
        </div>
      </div>
    </div>
  );
}
