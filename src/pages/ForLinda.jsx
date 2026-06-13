import { useEffect, useState } from "react";

// ════════════════════════════════════════════════════════════════
//  FOR LINDA  (route: /linda)
//
//  Add to your router:
//    <Route path="/linda" element={<ForLinda />} />
//
//  A private page. Built fast, meant forever.
// ════════════════════════════════════════════════════════════════

export default function ForLinda() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    document.title = "For Linda";
    const t = setTimeout(() => setShow(true), 200);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="fl">
      <style>{css}</style>

      <div className="fl-sky" aria-hidden="true">
        <span className="fl-glow" />
      </div>

      <main className={`fl-wrap ${show ? "in" : ""}`}>
        <p className="fl-eyebrow">FROM GREG &nbsp;·&nbsp; TO MY WIFE</p>

        <h1>
          Linda,<br />
          <span>I love you.</span>
        </h1>

        <div className="fl-letter">
          <p>
            I don&rsquo;t say it the right way often enough. I get buried in the shop,
            in the phones, in the next thing that&rsquo;s on fire &mdash; and the one
            person who&rsquo;s been beside me through all of it is you.
          </p>
          <p>
            Twenty-six years of work, and you&rsquo;re still the best part of every
            day I come home to. You put up with my hours, my stubbornness, my
            perfectionism, and you&rsquo;re still here. That means more to me than I
            know how to put into words &mdash; so I built you a page instead, because
            apparently that&rsquo;s the language I speak best.
          </p>
          <p>
            I&rsquo;m not perfect, and neither are our hard days. But I&rsquo;m in this
            &mdash; all the way, for the long haul. You and me.
          </p>
          <p className="fl-sign">
            All my love,<br />
            <strong>Greg</strong>
          </p>
        </div>

        <div className="fl-heart" aria-hidden="true">&#10084;</div>
      </main>
    </div>
  );
}

const css = `
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;1,500&family=Nunito+Sans:wght@400;600&display=swap');

* { box-sizing: border-box; }

.fl {
  --night: #1a2238;
  --rose: #E8B4B8;
  --gold: #E6C79C;
  --cream: #FBF7F2;
  margin: 0;
  min-height: 100vh;
  min-height: 100dvh;
  background: linear-gradient(170deg, #1a2238 0%, #2d3553 45%, #4a3b52 100%);
  color: var(--cream);
  font-family: 'Nunito Sans', -apple-system, sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 32px 22px;
  overflow-x: hidden;
}

.fl-sky { position: fixed; inset: 0; pointer-events: none; overflow: hidden; }
.fl-glow {
  position: absolute; top: -25%; left: 50%; transform: translateX(-50%);
  width: 720px; height: 720px; max-width: 140vw; border-radius: 50%;
  background: radial-gradient(circle, rgba(230,199,156,0.20), rgba(232,180,184,0.08) 45%, transparent 70%);
}

.fl-wrap {
  position: relative; z-index: 1; max-width: 560px; width: 100%; text-align: center;
  opacity: 0; transform: translateY(14px); transition: opacity 1.1s ease, transform 1.1s ease;
}
.fl-wrap.in { opacity: 1; transform: none; }

.fl-eyebrow {
  font-size: 11.5px; letter-spacing: 3px; color: var(--gold); font-weight: 600; margin: 0 0 22px;
}

.fl h1 {
  font-family: 'Cormorant Garamond', Georgia, serif;
  font-weight: 600; font-size: clamp(44px, 13vw, 76px); line-height: 1.05; margin: 0 0 30px;
}
.fl h1 span { color: var(--rose); font-style: italic; display: inline-block; margin-top: 6px; }

.fl-letter {
  background: rgba(255,255,255,0.05);
  border: 1px solid rgba(230,199,156,0.22);
  border-radius: 18px;
  padding: 28px 26px;
  backdrop-filter: blur(4px);
  text-align: left;
}
.fl-letter p {
  font-family: 'Cormorant Garamond', Georgia, serif;
  font-size: clamp(18px, 5vw, 21px); line-height: 1.7; margin: 0 0 18px; color: #F3EBE2;
}
.fl-letter p:last-child { margin-bottom: 0; }
.fl-sign { margin-top: 26px !important; }
.fl-sign strong { font-size: 1.25em; color: var(--rose); }

.fl-heart {
  margin-top: 26px; font-size: 30px; color: var(--rose);
  animation: beat 2.4s ease-in-out infinite;
}
@keyframes beat {
  0%, 100% { transform: scale(1); }
  15% { transform: scale(1.18); }
  30% { transform: scale(1); }
  45% { transform: scale(1.12); }
}
@media (prefers-reduced-motion: reduce) {
  .fl-wrap { transition: none; opacity: 1; transform: none; }
  .fl-heart { animation: none; }
}
`;
