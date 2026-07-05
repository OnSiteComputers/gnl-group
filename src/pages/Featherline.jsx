import React, { useState, useEffect } from "react";

// ============================================================
// FEATHERLINE — Esthetics Studio, Tucson AZ
// Client preview page — routed at /featherline in the GNL app.
// Self-contained (inline <style>) — no shadcn/Tailwind deps.
// Draft v2 — full esthetician menu.
// [PHOTO] = placeholder image slot. Prices are PLACEHOLDER ranges.
// TODO before launch: real name + photos, real prices, booking link,
//   then split into its own repo + domain.
// ============================================================

export default function Featherline() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const menu = [
    {
      cat: "Facials & Skin",
      blurb: "Custom treatments built around your skin, not a script.",
      items: [
        { name: "Signature Custom Facial", desc: "Cleanse, exfoliate, extractions, mask, and massage tailored to your skin.", price: "$95" },
        { name: "Anti-Aging Facial", desc: "Firming actives and targeted treatment for fine lines and texture.", price: "$120" },
        { name: "Clarifying Acne Facial", desc: "Deep cleansing and extractions for congested, breakout-prone skin.", price: "$110" },
        { name: "Dermaplaning", desc: "Gentle resurfacing that removes peach fuzz and dead skin for a smooth glow.", price: "$85" },
        { name: "Chemical Peel", desc: "A customized peel to brighten tone and refine texture. Consult first.", price: "from $100" },
        { name: "Microdermabrasion", desc: "Mechanical exfoliation to renew dull, uneven skin.", price: "$95" },
      ],
    },
    {
      cat: "Lashes",
      blurb: "From a soft daily look to full, feather-light volume.",
      items: [
        { name: "Classic Lashes — Full Set", desc: "One extension per natural lash for a natural, mascara finish.", price: "$110" },
        { name: "Hybrid Lashes — Full Set", desc: "A blend of classic and volume for texture and fullness.", price: "$135" },
        { name: "Volume Lashes — Full Set", desc: "Handmade fans for a dense, dramatic set.", price: "$160" },
        { name: "Lash Fill (2–3 wks)", desc: "Maintenance to keep any set full between appointments.", price: "from $55" },
        { name: "Lash Lift & Tint", desc: "Lifts and darkens your own lashes — no extensions needed.", price: "$85" },
      ],
    },
    {
      cat: "Brows",
      blurb: "Mapped to your face and shaped with intention.",
      items: [
        { name: "Brow Shaping & Tint", desc: "Precision mapping, wax or tweeze, and a custom tint.", price: "$45" },
        { name: "Brow Lamination", desc: "Smooths and sets brow hairs into a fuller, brushed-up shape.", price: "$75" },
        { name: "Henna Brows", desc: "A longer-lasting tint that stains skin for a penciled-in effect.", price: "$65" },
      ],
    },
    {
      cat: "Waxing",
      blurb: "Clean, careful hair removal for face and body.",
      items: [
        { name: "Brow Wax", desc: "Shaping wax to clean up and define.", price: "$20" },
        { name: "Lip or Chin", desc: "Quick, precise facial waxing.", price: "$15" },
        { name: "Full Face", desc: "Complete facial hair removal.", price: "$45" },
        { name: "Underarm / Half Arm", desc: "Smooth results that last.", price: "from $30" },
        { name: "Half or Full Leg", desc: "Waxing for smoother, longer-lasting skin.", price: "from $45" },
      ],
    },
  ];

  return (
    <div style={styles.page}>
      <style>{css}</style>

      {/* NAV */}
      <header className={`fl-nav ${scrolled ? "fl-nav--solid" : ""}`}>
        <div className="fl-nav__inner">
          <a href="#top" className="fl-logo" aria-label="Featherline home">
            <svg width="34" height="34" viewBox="0 0 34 34" className="fl-logo__mark" aria-hidden="true">
              <g fill="none" stroke="#C9A99A" strokeWidth="1.6" strokeLinecap="round">
                <path d="M17 5 C 13 12, 12 18, 15 24" />
                <path d="M17 9 C 9 11, 5 14, 3 18" />
                <path d="M17 12 C 25 14, 29 17, 31 21" />
                <path d="M17 15 C 9 18, 6 22, 4 27" />
              </g>
            </svg>
            <span className="fl-logo__text">Featherline</span>
          </a>
          <nav className="fl-nav__links">
            <a href="#menu">Menu</a>
            <a href="#about">About</a>
            <a href="#studio">Studio</a>
            <a href="#book" className="fl-nav__cta">Book</a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section id="top" className="fl-hero">
        <div className="fl-hero__text">
          <p className="fl-eyebrow">Esthetics Studio — Tucson, Arizona</p>
          <h1 className="fl-hero__title">
            Skin, lashes,
            <br />
            <span className="fl-underline">brows — refined.</span>
          </h1>
          <p className="fl-hero__sub">
            A full-service esthetics studio kept calm and private. Custom facials,
            expert lashes, and brows shaped to frame you — all by a licensed
            esthetician.
          </p>
          <div className="fl-hero__actions">
            <a href="#book" className="fl-btn fl-btn--primary">Book your appointment</a>
            <a href="#menu" className="fl-btn fl-btn--ghost">See the menu</a>
          </div>
        </div>
        <div className="fl-hero__media">
          <div className="fl-photo fl-photo--hero">
            <span className="fl-photo__tag">[ PHOTO — hero portrait / treatment ]</span>
          </div>
        </div>
      </section>

      {/* MENU */}
      <section id="menu" className="fl-section">
        <div className="fl-section__head">
          <p className="fl-eyebrow">The menu</p>
          <h2 className="fl-h2">Services<span className="fl-feather" /></h2>
        </div>

        {menu.map((group) => (
          <div key={group.cat} className="fl-group">
            <div className="fl-group__head">
              <h3 className="fl-group__title">{group.cat}</h3>
              <p className="fl-group__blurb">{group.blurb}</p>
            </div>
            <div className="fl-group__list">
              {group.items.map((it) => (
                <div key={it.name} className="fl-item">
                  <div className="fl-item__main">
                    <span className="fl-item__name">{it.name}</span>
                    <span className="fl-item__dots" />
                    <span className="fl-item__price">{it.price}</span>
                  </div>
                  <p className="fl-item__desc">{it.desc}</p>
                </div>
              ))}
            </div>
          </div>
        ))}

        <p className="fl-note">
          Prices are a starting guide — final pricing is confirmed at your consult,
          where every service is shaped to you. New to the studio? Mention it when
          you book and we&apos;ll walk you through the options.
        </p>
      </section>

      {/* ABOUT */}
      <section id="about" className="fl-about">
        <div className="fl-photo fl-photo--about">
          <span className="fl-photo__tag">[ PHOTO — headshot, added later ]</span>
        </div>
        <div className="fl-about__text">
          <p className="fl-eyebrow">The artist</p>
          <h2 className="fl-h2 fl-h2--light">Licensed &amp; detail-led<span className="fl-feather fl-feather--light" /></h2>
          <p className="fl-about__body">
            Featherline is a solo studio run by a licensed esthetician who believes
            your face is already the design — the work is only to sharpen it.
            Facials, lashes, and brows, each mapped and applied with patience in a
            space kept quiet on purpose.
          </p>
          <p className="fl-about__body">
            Fully licensed, sanitary, and detail-obsessed. You&apos;ll leave looking
            like yourself on your best morning.
          </p>
        </div>
      </section>

      {/* STUDIO */}
      <section id="studio" className="fl-section">
        <div className="fl-section__head">
          <p className="fl-eyebrow">Where to find us</p>
          <h2 className="fl-h2">The studio<span className="fl-feather" /></h2>
        </div>
        <div className="fl-studio">
          <div className="fl-studio__col">
            <h3 className="fl-studio__label">Location</h3>
            <p className="fl-studio__val">Tucson, Arizona<br /><span className="fl-muted">Exact address shared on booking</span></p>
          </div>
          <div className="fl-studio__col">
            <h3 className="fl-studio__label">Hours</h3>
            <p className="fl-studio__val">Tue – Sat<br />By appointment</p>
          </div>
          <div className="fl-studio__col">
            <h3 className="fl-studio__label">Contact</h3>
            <p className="fl-studio__val">[ phone / email ]<br /><span className="fl-muted">Added at launch</span></p>
          </div>
        </div>
      </section>

      {/* BOOK */}
      <section id="book" className="fl-book">
        <p className="fl-eyebrow fl-eyebrow--center">Ready when you are</p>
        <h2 className="fl-book__title">Book your appointment</h2>
        <p className="fl-book__sub">New clients welcome. Choose a time and we&apos;ll take it from there.</p>
        <a href="#" className="fl-btn fl-btn--primary fl-btn--lg">[ Booking link ]</a>
      </section>

      {/* FOOTER */}
      <footer className="fl-footer">
        <span className="fl-logo__text fl-logo__text--foot">Featherline</span>
        <span className="fl-footer__meta">Esthetics Studio · Tucson, AZ</span>
      </footer>
    </div>
  );
}

const styles = { page: { margin: 0 } };

const css = `
:root{
  --oat:#F3EEE4;--ivory:#FBF8F1;--espresso:#3A2E28;--espresso-soft:#5B4A41;
  --taupe:#C9A99A;--rose:#D9BFB4;--line:#E4DACB;
}
*{box-sizing:border-box;}
.fl-nav,.fl-hero,.fl-section,.fl-about,.fl-book,.fl-footer{font-family:'Inter',-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;}
h1,h2,h3,.fl-logo__text{font-family:Georgia,'Times New Roman',serif;}

.fl-nav{position:fixed;top:0;left:0;right:0;z-index:50;transition:all .3s ease;padding:20px 0;}
.fl-nav--solid{background:var(--ivory);padding:12px 0;box-shadow:0 1px 0 var(--line);}
.fl-nav__inner{max-width:1120px;margin:0 auto;padding:0 28px;display:flex;align-items:center;justify-content:space-between;}
.fl-logo{display:flex;align-items:center;gap:9px;text-decoration:none;}
.fl-logo__text{font-size:22px;letter-spacing:.5px;color:var(--espresso);font-weight:400;}
.fl-nav__links{display:flex;gap:30px;align-items:center;}
.fl-nav__links a{font-size:14px;letter-spacing:.3px;color:var(--espresso-soft);text-decoration:none;transition:color .2s;}
.fl-nav__links a:hover{color:var(--espresso);}
.fl-nav__cta{border:1px solid var(--espresso);padding:8px 18px;border-radius:2px;color:var(--espresso)!important;}
.fl-nav__cta:hover{background:var(--espresso);color:var(--ivory)!important;}

.fl-hero{background:var(--oat);min-height:100vh;display:grid;grid-template-columns:1.05fr .95fr;align-items:center;gap:40px;max-width:1120px;margin:0 auto;padding:120px 28px 60px;}
.fl-eyebrow{font-size:12px;letter-spacing:2.5px;text-transform:uppercase;color:var(--taupe);margin:0 0 22px;}
.fl-eyebrow--center{text-align:center;}
.fl-hero__title{font-size:clamp(42px,5.6vw,72px);line-height:1.03;color:var(--espresso);margin:0 0 26px;font-weight:400;}
.fl-underline{position:relative;display:inline-block;}
.fl-underline:after{content:"";position:absolute;left:0;bottom:6px;width:100%;height:2px;background:linear-gradient(90deg,var(--taupe),transparent);}
.fl-hero__sub{font-size:18px;line-height:1.6;color:var(--espresso-soft);max-width:440px;margin:0 0 36px;}
.fl-hero__actions{display:flex;gap:14px;flex-wrap:wrap;}

.fl-btn{display:inline-block;font-size:14px;letter-spacing:.4px;padding:14px 26px;border-radius:2px;text-decoration:none;transition:all .2s ease;cursor:pointer;}
.fl-btn--primary{background:var(--espresso);color:var(--ivory);}
.fl-btn--primary:hover{background:var(--espresso-soft);}
.fl-btn--ghost{border:1px solid var(--taupe);color:var(--espresso);}
.fl-btn--ghost:hover{background:var(--rose);border-color:var(--rose);}
.fl-btn--lg{padding:16px 40px;font-size:15px;}

.fl-photo{background:linear-gradient(135deg,#E8DDD0,#D8C7BA);border-radius:3px;display:flex;align-items:center;justify-content:center;position:relative;overflow:hidden;}
.fl-photo:before{content:"";position:absolute;inset:0;background:repeating-linear-gradient(45deg,transparent,transparent 22px,rgba(255,255,255,.18) 22px,rgba(255,255,255,.18) 23px);}
.fl-photo__tag{position:relative;font-family:'Inter',sans-serif;font-size:12px;letter-spacing:1px;color:var(--espresso-soft);text-transform:uppercase;text-align:center;padding:0 20px;}
.fl-photo--hero{aspect-ratio:4/5;width:100%;}
.fl-photo--about{aspect-ratio:1/1;width:100%;}

.fl-section{max-width:1120px;margin:0 auto;padding:100px 28px;}
.fl-section__head{margin-bottom:52px;}
.fl-h2{font-size:clamp(30px,4vw,42px);color:var(--espresso);margin:0;font-weight:400;display:inline-flex;align-items:center;}
.fl-h2--light{color:var(--ivory);}
.fl-feather{display:inline-block;width:54px;height:2px;margin-left:16px;background:linear-gradient(90deg,var(--taupe),transparent);border-radius:2px;transform:translateY(4px);}
.fl-feather--light{background:linear-gradient(90deg,var(--rose),transparent);}

.fl-group{margin-bottom:56px;}
.fl-group__head{margin-bottom:26px;border-bottom:1px solid var(--line);padding-bottom:16px;}
.fl-group__title{font-size:26px;color:var(--espresso);margin:0 0 6px;font-weight:400;}
.fl-group__blurb{font-size:14px;color:var(--espresso-soft);margin:0;font-style:italic;}
.fl-group__list{display:grid;grid-template-columns:1fr 1fr;gap:26px 48px;}
.fl-item__main{display:flex;align-items:baseline;gap:8px;margin-bottom:5px;}
.fl-item__name{font-size:16px;color:var(--espresso);font-weight:500;white-space:nowrap;}
.fl-item__dots{flex:1;border-bottom:1px dotted var(--taupe);transform:translateY(-3px);}
.fl-item__price{font-size:14px;letter-spacing:.5px;color:var(--taupe);font-weight:600;white-space:nowrap;}
.fl-item__desc{font-size:13.5px;line-height:1.55;color:var(--espresso-soft);margin:0;}
.fl-note{text-align:center;font-size:15px;color:var(--espresso-soft);max-width:600px;margin:44px auto 0;line-height:1.65;font-style:italic;}

.fl-about{background:var(--espresso);display:grid;grid-template-columns:.9fr 1.1fr;gap:60px;align-items:center;padding:100px 28px;max-width:1120px;margin:0 auto;}
.fl-about__text .fl-eyebrow{color:var(--rose);}
.fl-about__body{font-size:16px;line-height:1.7;color:#E9E0D8;margin:0 0 20px;max-width:460px;}

.fl-studio{display:grid;grid-template-columns:repeat(3,1fr);gap:40px;border-top:1px solid var(--line);padding-top:40px;}
.fl-studio__label{font-size:12px;letter-spacing:2px;text-transform:uppercase;color:var(--taupe);margin:0 0 14px;font-family:'Inter',sans-serif;font-weight:600;}
.fl-studio__val{font-size:18px;line-height:1.5;color:var(--espresso);margin:0;}
.fl-muted{font-size:14px;color:var(--espresso-soft);}

.fl-book{background:var(--rose);text-align:center;padding:110px 28px;}
.fl-book__title{font-size:clamp(34px,5vw,52px);color:var(--espresso);margin:0 0 18px;font-weight:400;}
.fl-book__sub{font-size:17px;color:var(--espresso-soft);margin:0 auto 34px;max-width:420px;line-height:1.6;}

.fl-footer{background:var(--espresso);display:flex;align-items:center;justify-content:space-between;max-width:1120px;margin:0 auto;padding:34px 28px;flex-wrap:wrap;gap:12px;}
.fl-logo__text--foot{font-size:18px;color:var(--ivory);}
.fl-footer__meta{font-size:13px;letter-spacing:.5px;color:var(--rose);font-family:'Inter',sans-serif;}

@media(max-width:820px){
  .fl-hero{grid-template-columns:1fr;padding-top:110px;}
  .fl-hero__media{order:-1;}
  .fl-photo--hero{aspect-ratio:3/4;max-height:420px;}
  .fl-group__list{grid-template-columns:1fr;gap:22px;}
  .fl-about{grid-template-columns:1fr;gap:36px;}
  .fl-studio{grid-template-columns:1fr;gap:28px;}
  .fl-nav__links{gap:18px;}
  .fl-nav__links a:not(.fl-nav__cta){display:none;}
}
`;
