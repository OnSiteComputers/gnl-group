import React, { useState, useEffect } from 'react';
import {
  Phone,
  Mail,
  Menu,
  Users,
  Baby,
  Home,
  FileText,
  ShieldCheck,
  Handshake,
  Star,
  ChevronRight
} from 'lucide-react';

const PHONE = '704-741-1763';
const PHONE_HREF = 'tel:+17047411763';
const EMAIL = 'james@warrenfamilylaw.net';
const EMAIL_HREF = `mailto:${EMAIL}`;

// Real Google reviews (lightly trimmed for length). Rotates automatically.
const REVIEWS = [
  {
    text: "Mr. Warren is the attorney you hire when you want the truth, not fluff. He was honest, strategic, and fully focused on what matters most: my child. He and his paralegal make a sharp, responsive team that kept me informed and prepared. You won't feel like a case number, you'll feel represented.",
    cite: 'Zack M., Charlotte, NC'
  },
  {
    text: "Only hire Mr. Warren if you want to WIN. One of the best civil lawyers in the Charlotte area. He is extremely detail-oriented, professional, and strategic. He fought hard for my case and communicated clearly throughout the process. Highly recommend him to anyone needing strong legal representation.",
    cite: 'Saicharan K., Charlotte, NC'
  },
  {
    text: "Mr. Warren did a fantastic job representing me for a visitation case for my granddaughter. His experience is priceless, his advice and attention to law and facts are to the point. He is a powerhouse in the courtroom, doesn't waste any time, and had our case won in our favor in a couple hours.",
    cite: 'Sara J., Charlotte, NC'
  },
  {
    text: "I wish I had found Mr. Warren years earlier. He was forthright, fair, and asked me from the outset what my goals were. He cuts to the chase and does not nickel and dime you like many other attorneys do. I would highly recommend him to go to bat for you in your case.",
    cite: 'Mark P., Charlotte, NC'
  },
  {
    text: "BEST family law attorney, by far. I've known Mr. Warren since the mid 90's and would use no other in a divorce situation. Extremely professional and will fight for you, all the way.",
    cite: 'Greg H., Charlotte, NC'
  },
  {
    text: "I have been a client of Mr. Warren for many years. We went to trial in one divorce case, and he was so good, so on-point, we easily won the case. He has sound advice, is a good listener, and did not kill us on fees. I highly recommend Mr. Warren!",
    cite: 'Steve J., Charlotte, NC'
  },
  {
    text: "Won my case with the upmost professionalism and toughness. I would recommend James to anyone dealing with a custody and/or child support issue. Fantastic!",
    cite: 'Mary B., Charlotte, NC'
  },
  {
    text: "Mr. Warren has done a wonderful job representing me. He is very strong in the courtroom, is upfront with what outcomes are realistically possible, and stays on top of case law to support the case at hand. I highly recommend him.",
    cite: 'Beth H., Charlotte, NC'
  }
];

// Put James.Warren.jpg in your Base44 / public directory.
// Public assets are referenced from the site root like this:
const JAMES_PHOTO = '/James.Warren.jpg';

const services = [
  {
    icon: Users,
    title: 'Divorce & Separation',
    text: 'Compassionate representation to help you move forward.'
  },
  {
    icon: Baby,
    title: 'Child Custody & Support',
    text: 'Protecting your children and your parental rights.'
  },
  {
    icon: Home,
    title: 'Alimony & Property Division',
    text: 'Fair and equitable solutions for your future.'
  },
  {
    icon: FileText,
    title: 'Prenuptial & Postnuptial Agreements',
    text: 'Plan today for tomorrow.'
  }
];

export default function WarrenDemo() {
  const [reviewIndex, setReviewIndex] = useState(0);
  useEffect(() => {
    const id = setInterval(() => {
      setReviewIndex((i) => (i + 1) % REVIEWS.length);
    }, 6000);
    return () => clearInterval(id);
  }, []);
  const review = REVIEWS[reviewIndex];
  return (
    <main className="warren-demo">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600;700&family=Inter:wght@400;500;600;700;800&display=swap');

        .warren-demo {
          --sage: #5f6f58;
          --sage-2: #4c5a47;
          --sage-soft: #e8ede3;
          --gold: #c2974e;
          --gold-2: #a87f3d;
          --cream: #f7f3ec;
          --cream-2: #fdfbf7;
          --ink: #3a3a37;
          --muted: #6f6c66;
          min-height: 100vh;
          background: #ece7dd;
          color: var(--ink);
          font-family: Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
        }

        .warren-page {
          width: min(1430px, 100%);
          margin: 0 auto;
          background: white;
          box-shadow: 0 8px 28px rgba(0,0,0,.18);
          overflow: hidden;
        }

        .topbar {
          height: 112px;
          background: linear-gradient(90deg, #5f6f58 0%, #4c5a47 100%);
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 36px;
          color: white;
          border-bottom: 1px solid rgba(255,255,255,.12);
        }

        .brand {
          display: flex;
          align-items: center;
          gap: 18px;
          text-decoration: none;
          color: white;
        }

        .brand-mark {
          width: 64px;
          height: 64px;
          border: 1.5px solid rgba(255,255,255,.85);
          display: grid;
          place-items: center;
          font-family: "Cormorant Garamond", serif;
          font-size: 44px;
          line-height: 1;
          font-weight: 600;
        }

        .brand-name {
          font-family: "Cormorant Garamond", serif;
          font-weight: 700;
          font-size: clamp(30px, 3vw, 43px);
          line-height: .83;
          letter-spacing: 4px;
          text-transform: uppercase;
        }

        .brand-name span {
          display: block;
          font-size: .56em;
          letter-spacing: 8px;
          margin-top: 8px;
        }

        .desktop-nav {
          display: flex;
          align-items: center;
          gap: clamp(18px, 2vw, 38px);
          margin-left: auto;
          margin-right: 30px;
        }

        .desktop-nav a {
          color: white;
          text-decoration: none;
          font-size: 14px;
          font-weight: 800;
          letter-spacing: .02em;
        }

        .header-phone,
        .gold-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 11px;
          background: linear-gradient(180deg, #6f7f66 0%, #4c5a47 100%);
          color: white;
          text-decoration: none;
          border-radius: 4px;
          font-weight: 800;
          box-shadow: inset 0 1px 0 rgba(255,255,255,.18);
          border: 1px solid rgba(255,255,255,.12);
        }

        .header-phone {
          height: 58px;
          padding: 0 28px;
          font-size: 22px;
        }

        .mobile-menu {
          display: none;
          color: white;
        }

        .hero {
          position: relative;
          min-height: 555px;
          display: grid;
          grid-template-columns: 45% 55%;
          background:
            radial-gradient(circle at 88% 15%, rgba(95,111,88,.06), transparent 22%),
            linear-gradient(90deg, #f7f3ec 0%, #f2ede3 42%, rgba(242,237,227,.55) 62%, rgba(242,237,227,.15) 100%),
            linear-gradient(135deg, #f7f3ec 0%, #eef1e8 100%);
          overflow: hidden;
        }

        .hero::after {
          content: "";
          position: absolute;
          inset: 0;
          background:
            linear-gradient(90deg, rgba(247,243,236,.92) 0%, rgba(247,243,236,.72) 32%, rgba(247,243,236,.20) 55%, rgba(247,243,236,0) 72%);
          pointer-events: none;
        }

        .hero-copy {
          position: relative;
          z-index: 2;
          padding: 46px 0 42px 58px;
          max-width: 600px;
        }

        .eyebrow {
          color: var(--gold);
          font-size: 22px;
          font-weight: 800;
          letter-spacing: 1.4px;
          text-transform: uppercase;
          margin-bottom: 18px;
        }

        .hero h1 {
          font-family: "Cormorant Garamond", serif;
          font-weight: 700;
          font-size: clamp(52px, 5vw, 70px);
          line-height: .98;
          color: var(--ink);
          margin: 0;
          letter-spacing: -.03em;
        }

        .hero h1 .gold {
          color: var(--sage);
          display: block;
        }

        .gold-rule {
          width: 62px;
          height: 2px;
          background: var(--gold);
          margin: 28px 0 26px;
        }

        .hero p {
          color: var(--muted);
          font-size: 18px;
          line-height: 1.55;
          max-width: 520px;
          margin: 0 0 26px;
        }

        .hero-actions {
          display: flex;
          gap: 22px;
          flex-wrap: wrap;
          align-items: center;
        }

        .gold-button {
          min-height: 52px;
          padding: 0 25px;
          font-size: 15px;
          letter-spacing: .02em;
        }

        .outline-button {
          min-height: 52px;
          padding: 0 24px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          color: var(--sage-2);
          border: 1px solid var(--sage);
          text-decoration: none;
          border-radius: 3px;
          font-weight: 800;
          font-size: 15px;
        }

        .hero-photo-wrap {
          position: relative;
          z-index: 1;
          min-height: 555px;
          overflow: hidden;
        }

        .hero-photo-wrap::before {
          content: "";
          position: absolute;
          inset: 0;
          background:
            linear-gradient(90deg, rgba(247,243,236,.55), rgba(247,243,236,0) 32%),
            radial-gradient(circle at 78% 18%, rgba(194,151,78,.10), transparent 30%);
          z-index: 1;
          pointer-events: none;
        }

        .hero-photo {
          position: absolute;
          right: 9%;
          bottom: -10px;
          height: 108%;
          width: min(570px, 75%);
          object-fit: cover;
          object-position: center top;
          filter: contrast(1.03) saturate(1.02);
          border-radius: 0;
          z-index: 2;
          mix-blend-mode: normal;
        }

        .hero-photo-bg {
          position: absolute;
          inset: 0;
          background:
            linear-gradient(90deg, rgba(247,243,236,.45), rgba(232,237,227,.25)),
            url(${JAMES_PHOTO});
          background-size: cover;
          background-position: center 30%;
          transform: scale(1.09);
          filter: blur(2px) brightness(1.05) saturate(.95);
        }

        .services {
          background: var(--cream);
          padding: 18px 44px 24px;
          text-align: center;
          border-top: 1px solid rgba(0,0,0,.05);
        }

        .services .eyebrow-small {
          color: var(--gold-2);
          font-size: 16px;
          font-weight: 800;
          letter-spacing: 4px;
          text-transform: uppercase;
          margin-bottom: 2px;
        }

        .services h2 {
          font-family: "Cormorant Garamond", serif;
          font-size: clamp(35px, 3vw, 44px);
          line-height: 1;
          margin: 0;
          color: var(--ink);
        }

        .title-rule {
          width: 70px;
          height: 2px;
          background: var(--gold);
          margin: 18px auto 0;
        }

        .service-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          margin-top: 0;
        }

        .service-card {
          padding: 0 30px;
          min-height: 152px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-end;
          border-right: 1px solid rgba(58,58,55,.14);
        }

        .service-card:last-child {
          border-right: none;
        }

        .service-card svg {
          width: 52px;
          height: 52px;
          color: var(--sage);
          fill: none;
          stroke-width: 2.4;
          margin-bottom: 14px;
        }

        .service-card h3 {
          font-family: "Cormorant Garamond", serif;
          font-size: 21px;
          line-height: 1.08;
          color: var(--ink);
          margin: 0 0 8px;
          font-weight: 700;
        }

        .service-card p {
          color: var(--muted);
          font-size: 14px;
          line-height: 1.45;
          margin: 0 0 13px;
        }

        .learn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          color: var(--ink);
          text-decoration: none;
          font-size: 12px;
          font-weight: 900;
          letter-spacing: .05em;
        }

        .reviews {
          display: grid;
          grid-template-columns: 29% 34% 37%;
          min-height: 207px;
          background: var(--sage);
          color: white;
        }

        .review-score {
          padding: 30px 40px;
          background: linear-gradient(135deg, #5f6f58, #4c5a47);
          border-right: 1px solid rgba(255,255,255,.22);
        }

        .review-score .label {
          color: var(--gold);
          font-weight: 800;
          letter-spacing: .06em;
          font-size: 15px;
          margin-bottom: 13px;
        }

        .stars {
          color: var(--gold);
          display: flex;
          gap: 8px;
          margin-bottom: 9px;
        }

        .stars svg {
          width: 28px;
          height: 28px;
          fill: currentColor;
          stroke: currentColor;
        }

        .review-score p {
          margin: 0 0 18px;
          font-size: 14px;
        }

        .review-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 42px;
          padding: 0 20px;
          border: 1px solid var(--gold);
          color: white;
          text-decoration: none;
          border-radius: 3px;
          font-size: 13px;
          font-weight: 800;
        }

        .quote-box {
          padding: 22px 34px;
          background: linear-gradient(90deg, #5a6a53, #4c5a47);
          display: grid;
          grid-template-columns: 56px 1fr;
          align-items: start;
          gap: 6px;
        }

        .quote-mark {
          font-family: Georgia, serif;
          color: var(--gold);
          font-size: 86px;
          line-height: .75;
        }

        @keyframes reviewFade {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .review-fade { animation: reviewFade .6s ease both; }

        .quote-box blockquote {
          margin: 0;
          font-family: "Cormorant Garamond", serif;
          font-size: 18px;
          line-height: 1.45;
          font-style: italic;
          color: white;
        }

        .quote-box cite {
          display: block;
          color: var(--gold);
          margin-top: 9px;
          font-style: normal;
          font-size: 15px;
        }

        .city-panel {
          position: relative;
          overflow: hidden;
          background:
            linear-gradient(180deg, rgba(194,151,78,.18), rgba(95,111,88,.30)),
            linear-gradient(135deg, #d8b877 0%, #8a9a7e 52%, #5f6f58 100%);
        }

        .city-panel::before {
          content: "";
          position: absolute;
          inset: 0;
          background:
            linear-gradient(to top, #4c5a47 0 19%, transparent 19%),
            linear-gradient(90deg,
              transparent 0 6%, rgba(76,90,71,.86) 6% 12%, transparent 12% 16%,
              rgba(76,90,71,.8) 16% 22%, transparent 22% 26%,
              rgba(76,90,71,.9) 26% 32%, transparent 32% 36%,
              rgba(76,90,71,.82) 36% 46%, transparent 46% 50%,
              rgba(76,90,71,.88) 50% 58%, transparent 58% 62%,
              rgba(76,90,71,.8) 62% 70%, transparent 70% 76%,
              rgba(76,90,71,.86) 76% 84%, transparent 84% 100%);
          opacity: .95;
          clip-path: polygon(0 70%, 6% 70%, 6% 40%, 12% 40%, 12% 62%, 16% 62%, 16% 35%, 22% 35%, 22% 69%, 26% 69%, 26% 27%, 32% 27%, 32% 70%, 36% 70%, 36% 48%, 46% 48%, 46% 70%, 50% 70%, 50% 22%, 58% 22%, 58% 70%, 62% 70%, 62% 30%, 70% 30%, 70% 70%, 76% 70%, 76% 41%, 84% 41%, 84% 70%, 100% 70%, 100% 100%, 0 100%);
        }

        .city-panel::after {
          content: "";
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
          height: 54px;
          background:
            repeating-linear-gradient(165deg, transparent 0 18px, rgba(255,255,255,.22) 18px 21px, transparent 21px 35px),
            linear-gradient(90deg, #4c5a47, #5f6f58);
        }

        .trust {
          background: var(--cream);
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 0;
          padding: 28px 58px;
          border-bottom: 1px solid rgba(0,0,0,.05);
        }

        .trust-item {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 25px;
          min-height: 58px;
          border-right: 1px solid rgba(6,27,56,.25);
          color: var(--ink);
          font-weight: 500;
          font-size: 18px;
          line-height: 1.25;
          text-transform: uppercase;
        }

        .trust-item:last-child {
          border-right: none;
        }

        .trust-item svg {
          width: 52px;
          height: 52px;
          stroke-width: 1.8;
          color: var(--ink);
          flex: 0 0 auto;
        }

        .mobile-shell {
          display: none;
        }

        @media (max-width: 1020px) {
          .desktop-nav { display: none; }
          .topbar { height: 90px; padding: 0 28px; }
          .header-phone { font-size: 18px; height: 52px; }
          .hero { grid-template-columns: 1fr; min-height: auto; }
          .hero-copy { padding: 48px 28px; max-width: 680px; }
          .hero-photo-wrap { min-height: 440px; }
          .hero-photo { right: 8%; height: 112%; width: min(500px, 70%); }
          .service-grid { grid-template-columns: repeat(2, 1fr); gap: 24px 0; }
          .service-card:nth-child(2) { border-right: none; }
          .reviews { grid-template-columns: 1fr; }
          .city-panel { min-height: 190px; }
          .trust { grid-template-columns: 1fr; padding: 20px; }
          .trust-item { border-right: none; border-bottom: 1px solid rgba(6,27,56,.17); padding: 18px 0; }
          .trust-item:last-child { border-bottom: none; }
        }

        @media (max-width: 720px) {
          .warren-page.desktop-version { display: none; }

          .mobile-shell {
            display: block;
            width: min(430px, 100%);
            margin: 0 auto;
            background: var(--cream);
            color: var(--ink);
            min-height: 100vh;
          }

          .mobile-top {
            height: 118px;
            background: linear-gradient(90deg, #5f6f58, #4c5a47);
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 0 22px;
            color: white;
          }

          .mobile-top .brand-mark {
            width: 46px;
            height: 46px;
            font-size: 31px;
          }

          .mobile-top .brand-name {
            font-size: 30px;
            letter-spacing: 2px;
          }

          .mobile-top .brand-name span {
            font-size: .54em;
            letter-spacing: 5px;
            margin-top: 5px;
          }

          .mobile-hero {
            position: relative;
            min-height: 365px;
            padding: 28px 24px 20px;
            overflow: hidden;
            background:
              linear-gradient(90deg, rgba(247,243,236,.95) 0%, rgba(247,243,236,.72) 52%, rgba(247,243,236,.25) 100%),
              url(${JAMES_PHOTO});
            background-size: cover;
            background-position: 72% top;
          }

          .mobile-hero::after {
            content: "";
            position: absolute;
            inset: auto 0 0 0;
            height: 120px;
            background: linear-gradient(0deg, var(--cream), transparent);
          }

          .mobile-hero-content {
            position: relative;
            z-index: 2;
            width: 58%;
          }

          .mobile-hero h1 {
            font-family: "Cormorant Garamond", serif;
            font-size: 30px;
            line-height: 1.04;
            margin: 0 0 14px;
            color: var(--ink);
          }

          .mobile-hero h1 .gold {
            color: var(--sage);
          }

          .mobile-hero p {
            font-size: 14px;
            line-height: 1.45;
            margin: 0 0 20px;
            color: var(--muted);
          }

          .mobile-actions {
            display: grid;
            gap: 10px;
            width: 100%;
            position: relative;
            z-index: 2;
            margin-top: 18px;
          }

          .mobile-actions a {
            min-height: 52px;
            border-radius: 4px;
            text-decoration: none;
            font-weight: 800;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 10px;
          }

          .mobile-actions .gold-button {
            color: white;
          }

          .mobile-actions .outline {
            border: 1px solid var(--sage);
            color: var(--sage-2);
            background: rgba(95,111,88,.06);
          }

          .mobile-service-list {
            background: var(--cream-2);
            color: var(--ink);
          }

          .mobile-service {
            display: grid;
            grid-template-columns: 58px 1fr 24px;
            gap: 14px;
            align-items: center;
            padding: 18px 22px;
            border-bottom: 1px solid rgba(58,58,55,.12);
          }

          .mobile-service svg {
            width: 42px;
            height: 42px;
            stroke-width: 2.2;
            color: var(--sage);
          }

          .mobile-service h3 {
            font-size: 16px;
            margin: 0 0 4px;
            color: var(--ink);
            font-weight: 800;
          }

          .mobile-service p {
            font-size: 13px;
            line-height: 1.35;
            margin: 0;
            color: var(--muted);
          }

          .mobile-reviews {
            padding: 24px 22px 28px;
            background: linear-gradient(135deg, #5f6f58, #4c5a47);
            text-align: center;
            color: white;
          }

          .google-dot {
            width: 60px;
            height: 60px;
            border-radius: 50%;
            margin: 0 auto 12px;
            background: conic-gradient(#4285f4 0 25%, #34a853 0 50%, #fbbc05 0 75%, #ea4335 0);
            display: grid;
            place-items: center;
          }

          .google-dot span {
            width: 40px;
            height: 40px;
            border-radius: 50%;
            background: white;
            color: #4285f4;
            font-weight: 900;
            font-size: 28px;
            line-height: 40px;
          }

          .mobile-stars {
            color: var(--gold);
            font-size: 28px;
            letter-spacing: 3px;
            margin-bottom: 6px;
          }

          .mobile-reviews a {
            color: white;
            text-decoration: underline;
            text-underline-offset: 8px;
            font-weight: 800;
            display: inline-block;
            margin-top: 18px;
          }
        }
      `}</style>

      <div className="warren-page desktop-version">
        <header className="topbar">
          <a className="brand" href="#top" aria-label="Warren Family Law">
            <div className="brand-mark">W</div>
            <div className="brand-name">Warren <span>Family Law</span></div>
          </a>

          <nav className="desktop-nav" aria-label="Main navigation">
            <a href="#top">HOME</a>
            <a href="#services">PRACTICE AREAS⌄</a>
            <a href="#about">ABOUT US</a>
            <a href="#reviews">REVIEWS</a>
            <a href="#resources">RESOURCES</a>
            <a href="#contact">CONTACT</a>
          </nav>

          <a className="header-phone" href={PHONE_HREF}>
            <Phone size={27} fill="white" /> ({PHONE.slice(0, 3)}) {PHONE.slice(4)}
          </a>
        </header>

        <section className="hero" id="top">
          <div className="hero-copy">
            <div className="eyebrow">42 Years of Experience</div>
            <h1>
              Trusted Guidance.<br />
              Strong Advocates.
              <span className="gold">Better Outcomes.</span>
            </h1>
            <div className="gold-rule" />
            <p>
              For over 42 years, Warren Family Law has helped families in Charlotte and surrounding areas
              navigate life's most challenging transitions with skill, compassion, and integrity.
            </p>
            <div className="hero-actions">
              <a className="gold-button" href={PHONE_HREF}>
                <Phone size={21} fill="white" /> CALL ({PHONE.slice(0, 3)}) {PHONE.slice(4)}
              </a>
              <a className="outline-button" href={EMAIL_HREF}>
                SCHEDULE A CONSULTATION
              </a>
            </div>
          </div>

          <div className="hero-photo-wrap" aria-hidden="true">
            <div className="hero-photo-bg" />
            <img className="hero-photo" src={JAMES_PHOTO} alt="" />
          </div>
        </section>

        <section className="services" id="services">
          <div className="eyebrow-small">Serving Families in Charlotte and Surrounding Areas</div>
          <h2>Comprehensive Family Law Services</h2>
          <div className="title-rule" />

          <div className="service-grid">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <article className="service-card" key={service.title}>
                  <Icon />
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                  <a className="learn" href={EMAIL_HREF}>LEARN MORE <ChevronRight size={13} /></a>
                </article>
              );
            })}
          </div>
        </section>

        <section className="reviews" id="reviews">
          <div className="review-score">
            <div className="label">WHAT OUR CLIENTS SAY</div>
            <div className="stars" aria-label="4.5 star rating">
              {[1, 2, 3, 4, 5].map((star) => <Star key={star} />)}
            </div>
            <p>4.5 ★ on Google · 15 reviews</p>
            <a className="review-button" href={EMAIL_HREF}>READ ALL REVIEWS</a>
          </div>

          <div className="quote-box">
            <div className="quote-mark">“</div>
            <div key={reviewIndex} className="review-fade">
              <blockquote>{review.text}</blockquote>
              <cite>– {review.cite}</cite>
            </div>
          </div>

          <div className="city-panel" aria-label="Charlotte skyline graphic" />
        </section>

        <section className="trust">
          <div className="trust-item">
            <ShieldCheck />
            <span>42+ Years<br />of Experience</span>
          </div>
          <div className="trust-item">
            <Handshake />
            <span>Local, Trusted,<br />Focused on Family.</span>
          </div>
          <div className="trust-item">
            <Users />
            <span>Personalized Attention<br />Every Step of the Way</span>
          </div>
        </section>
      </div>

      <div className="mobile-shell">
        <header className="mobile-top">
          <a className="brand" href="#top" aria-label="Warren Family Law">
            <div className="brand-mark">W</div>
            <div className="brand-name">Warren <span>Family Law</span></div>
          </a>
          <Menu size={34} />
        </header>

        <section className="mobile-hero">
          <div className="mobile-hero-content">
            <h1><span className="gold">42 Years</span><br />of Family Law Experience You Can Trust</h1>
            <p>Compassionate. Experienced. Focused on your family and your future.</p>
          </div>
          <div className="mobile-actions">
            <a className="gold-button" href={PHONE_HREF}>
              <Phone size={20} fill="white" /> CALL ({PHONE.slice(0, 3)}) {PHONE.slice(4)}
            </a>
            <a className="outline" href={EMAIL_HREF}>
              <Mail size={20} /> CONTACT US
            </a>
          </div>
        </section>

        <section className="mobile-service-list">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <article className="mobile-service" key={service.title}>
                <Icon />
                <div>
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                </div>
                <ChevronRight />
              </article>
            );
          })}
        </section>

        <section className="mobile-reviews">
          <div className="google-dot"><span>G</span></div>
          <div className="mobile-stars">★★★★½</div>
          <div>4.5 ★ on Google · 15 Reviews</div>
          <a href={EMAIL_HREF}>READ OUR REVIEWS</a>
        </section>
      </div>
    </main>
  );
}
