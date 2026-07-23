// WarrenPracticeArea build: 2026-07-23 v1 — imported from Claude Design "Practice Areas.dc.html"
// Practice-area detail page for the Warren Family Law demo v2.
// Route: /warren-demo-v2/practice-areas?area=<slug> (defaults to divorce).
// Shares header/footer/brand/styles with WarrenSite.jsx.
import React from 'react';
import { useSearchParams } from 'react-router-dom';
import {
  CSS, TopBar, BrandLockup, PRACTICE_AREAS, areaHref,
  PHONE_DISPLAY, PHONE_HREF, EMAIL
} from './WarrenSite';

const AREAS = {
  'divorce': {
    title: 'Divorce',
    lede: 'Ending a marriage is one of the hardest decisions a person can make. The legal process should not make it harder.',
    intro: 'In North Carolina, an absolute divorce requires at least one year of separation. But the divorce itself is often the simplest part — custody, support, and property questions are where experienced counsel matters most. Mr. Warren guides you through each step with a clear strategy and honest expectations.',
    points: [
      ['A candid case assessment', 'From the first consultation, you get a realistic picture of your options, likely outcomes, and costs — no fluff.'],
      ['Strategy built around your goals', 'Whether the priority is your children, your home, or a swift resolution, the case plan starts with what matters to you.'],
      ['Settlement when possible, trial when necessary', 'Many cases resolve through negotiation. When they don’t, you have a proven courtroom advocate.']
    ],
    note: '“Mr. Warren is the attorney you hire when you want the truth, not fluff.” — a client on Google Reviews'
  },
  'uncontested-divorce': {
    title: 'Uncontested Divorce',
    lede: 'When both spouses agree, divorce doesn’t have to be a battle — or a drawn-out expense.',
    intro: 'If you and your spouse have resolved custody, support, and property between yourselves, an uncontested divorce is the fastest, most affordable path. But “uncontested” still has legal requirements — North Carolina’s one-year separation, correct filings, and an agreement that actually protects you once it’s signed.',
    points: [
      ['Flat, predictable process', 'Clear steps and clear costs — you’ll know what happens and when, from filing to final decree.'],
      ['Agreements reviewed before you sign', 'A quick professional review catches terms you’d regret — especially around retirement accounts and support.'],
      ['Done right the first time', 'Correct paperwork and service so the divorce isn’t delayed or reopened later.']
    ],
    note: '“He cuts to the chase and does not nickel and dime you.” — a client on Google Reviews'
  },
  'military-divorce': {
    title: 'Military Divorce',
    lede: 'Military families face rules civilian divorces never touch — residency, deployment, pensions, and federal law.',
    intro: 'With bases across North Carolina, military divorce is a regular part of Charlotte-area practice. Jurisdiction and residency work differently for service members, custody must account for deployment and relocation, and dividing military pensions and benefits involves federal rules (USFSPA) that trip up inexperienced counsel.',
    points: [
      ['Jurisdiction and timing done right', 'Where and when to file matters more in military cases — we make sure the case starts on solid ground.'],
      ['Deployment-ready parenting plans', 'Custody schedules that anticipate deployment, TDY, and PCS moves instead of falling apart at the first orders.'],
      ['Military pensions and benefits', 'Proper division of military retirement, SBP elections, and health benefits under federal law.']
    ],
    note: '“He is upfront with what outcomes are realistically possible.” — a client on Google Reviews'
  },
  'child-custody': {
    title: 'Child Custody',
    lede: 'Nothing matters more than your children. Custody decisions shape their lives — and yours — for years to come.',
    intro: 'North Carolina courts decide custody based on the best interests of the child. That standard leaves room for advocacy: presenting the facts of your parenting, your home, and your child’s needs clearly and persuasively. Mr. Warren has handled custody and visitation matters for over four decades, including grandparent visitation cases.',
    points: [
      ['Physical and legal custody', 'Clear guidance on the difference between where your child lives and who makes major decisions — and how to pursue both.'],
      ['Parenting plans that hold up', 'Workable schedules for school, holidays, and vacations, drafted to prevent future conflict.'],
      ['Modifications and enforcement', 'When circumstances change or the other parent won’t follow the order, we act quickly to protect your rights.']
    ],
    note: '“He was honest, strategic, and fully focused on what matters most: my child.” — a client on Google Reviews'
  },
  'child-support': {
    title: 'Child Support',
    lede: 'Child support should reflect your child’s real needs and each parent’s real means — nothing more, nothing less.',
    intro: 'North Carolina uses established guidelines based on income, custody schedule, and expenses like health insurance and childcare. But guideline numbers are only a starting point: income can be disputed, expenses documented or challenged, and deviations argued. Getting the inputs right is where cases are won.',
    points: [
      ['Accurate support calculations', 'We make sure income, custody time, and expenses are documented correctly — the numbers that drive the guideline amount.'],
      ['Deviations when guidelines fall short', 'When the standard calculation doesn’t fit your family’s situation, we build the case for an adjustment.'],
      ['Modification and enforcement', 'Job changes, remarriage, new expenses — support orders can be revisited, and unpaid support can be collected.']
    ],
    note: '“I would recommend James to anyone dealing with a custody and/or child support issue.” — a client on Google Reviews'
  },
  'grandparents-rights': {
    title: "Grandparents' Rights",
    lede: 'When a family fractures, grandparents can be cut off from the children they love. North Carolina law offers a path.',
    intro: 'Grandparent visitation in North Carolina is limited but real: courts can grant it in the context of an ongoing custody dispute, and in some circumstances grandparents can seek custody themselves. Mr. Warren has won grandparent visitation cases — including one client’s case resolved in a matter of hours in court.',
    points: [
      ['An honest read on your standing', 'The law here is narrow — you’ll know up front whether you have a viable claim and what it takes.'],
      ['Visitation through custody proceedings', 'Timing matters: we position your request within the window the law allows.'],
      ['Custody when children need you', 'Where parents are unfit or children are at risk, we pursue grandparent custody directly.']
    ],
    note: '“Mr. Warren did a fantastic job representing me for a visitation case for my granddaughter. His experience is priceless.” — a client on Google Reviews'
  },
  'alimony': {
    title: 'Spousal Support / Alimony',
    lede: 'Whether you expect to pay or receive support, the stakes are significant — and the law gives judges wide discretion.',
    intro: 'North Carolina recognizes both post-separation support and alimony. Courts weigh sixteen statutory factors, including the length of the marriage, each spouse’s earnings and needs, and marital misconduct. With that much discretion in play, how your case is presented matters enormously.',
    points: [
      ['A realistic assessment first', 'Before anything else, you’ll know whether support is likely in your case, roughly how much, and for how long.'],
      ['Building the financial record', 'Income, budgets, and standard of living are documented carefully — the evidence courts actually rely on.'],
      ['Negotiated terms or litigated results', 'Support is often settled as part of a broader agreement; when it isn’t, we litigate it fully.']
    ],
    note: '“He is upfront with what outcomes are realistically possible.” — a client on Google Reviews'
  },
  'property-division': {
    title: 'Property Division',
    lede: 'What you built during your marriage — your home, savings, retirement, business — deserves a fair division.',
    intro: 'North Carolina follows equitable distribution: marital property is divided fairly, which usually but not always means equally. The real work is in classification and valuation — what counts as marital versus separate property, and what it’s actually worth. Mistakes here are expensive and often permanent.',
    points: [
      ['Classification done right', 'Separate, marital, and divisible property are identified precisely — including commingled assets and appreciation.'],
      ['Full and fair valuation', 'Homes, retirement accounts, pensions, and businesses are valued properly, with experts engaged when needed.'],
      ['Unequal division when justified', 'Where the statutory factors support more than half, we make that case.']
    ],
    note: '“He cuts to the chase and does not nickel and dime you like many other attorneys do.” — a client on Google Reviews'
  },
  'legal-separation': {
    title: 'Legal Separation',
    lede: 'In North Carolina, separation starts the clock on divorce — and the decisions you make now shape everything after.',
    intro: 'There’s no court filing required to be “separated” in North Carolina: it begins when spouses live apart with intent to remain apart. But a well-drafted separation agreement can resolve custody, support, and property up front — privately, and often without ever going to court.',
    points: [
      ['Separation agreements that protect you', 'Custody, support, and property terms negotiated and drafted to be enforceable — not a template off the internet.'],
      ['Guidance through the one-year period', 'What to do (and avoid) during separation so you don’t weaken your position before divorce.'],
      ['A smoother path to absolute divorce', 'With the hard questions settled early, the divorce itself becomes a formality rather than a fight.']
    ],
    note: '“I wish I had found Mr. Warren years earlier.” — a client on Google Reviews'
  },
  'adoption': {
    title: 'Adoption',
    lede: 'Few days in a courtroom are happy ones. Adoption day is — and careful legal work is what gets you there.',
    intro: 'Whether it’s a stepparent adoption, a relative adoption, or an agency placement, North Carolina adoption law demands precision: consents, terminations of parental rights, home studies, and filings that must be exactly right. Mistakes can surface years later — done properly, an adoption is permanent and unchallengeable.',
    points: [
      ['Stepparent and relative adoptions', 'The most common path — we handle consent, notice, and termination issues so the adoption holds.'],
      ['Consents and terminations done correctly', 'The legal foundation of every adoption; this is where precision matters most.'],
      ['A clear path to finalization', 'You’ll know each step, each filing, and a realistic timeline to adoption day.']
    ],
    note: '“He has sound advice, is a good listener, and did not kill us on fees.” — a client on Google Reviews'
  },
  'domestic-violence': {
    title: 'Domestic Violence',
    lede: 'If you or your children are in danger, the law can protect you — quickly. You don’t have to face this alone.',
    intro: 'North Carolina courts can issue emergency protective orders (50B) the same day in urgent situations — removing an abuser from the home, restricting contact, and granting temporary custody. Mr. Warren also defends clients wrongly accused, where a false allegation can upend a custody case. If you are in immediate danger, call 911 first.',
    points: [
      ['Emergency protective orders', 'Fast action on 50B orders: protection for you and your children, often within a day.'],
      ['Protection woven into your family case', 'Safety concerns are raised where they matter — in custody, support, and divorce proceedings.'],
      ['Defense against false allegations', 'Wrongful accusations are fought aggressively; they should never decide custody by default.']
    ],
    note: '“You won’t feel like a case number, you’ll feel represented.” — a client on Google Reviews'
  },
  'modifications-enforcement': {
    title: 'Modifications & Enforcement',
    lede: 'Court orders aren’t frozen in time — and they aren’t optional. When life changes or orders are ignored, act.',
    intro: 'Custody, child support, and alimony orders can all be modified when circumstances substantially change — a job loss, a relocation, a child’s changing needs. And when the other party simply won’t comply, contempt proceedings give the order teeth. Either way, the sooner you act, the stronger your position.',
    points: [
      ['Modifying custody and support', 'We build the record of changed circumstances that modification requires — not just assertions.'],
      ['Enforcement and contempt', 'Unpaid support and violated custody orders are pursued through the court’s contempt powers.'],
      ['Defending against unfair changes', 'When the other side seeks a modification that isn’t justified, we hold the line.']
    ],
    note: '“When circumstances change, he acts quickly to protect your rights.” — paraphrased from client reviews'
  }
};

const ctaBtn = {
  display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: 50,
  background: 'linear-gradient(180deg,#6f333d 0%,#471e25 100%)', border: '2px solid #c19a4f',
  boxShadow: 'inset 0 0 0 2px #471e25, inset 0 0 0 3px rgba(217,184,120,.75)',
  color: 'white', textDecoration: 'none', borderRadius: 4, fontWeight: 800, boxSizing: 'border-box'
};

export default function WarrenPracticeArea() {
  const [searchParams] = useSearchParams();
  const q = searchParams.get('area');
  const slug = AREAS[q] ? q : 'divorce';
  const area = AREAS[slug];
  const others = PRACTICE_AREAS.filter(a => a.slug !== slug);

  return (
    <main className="wfl">
      <style>{CSS}</style>
      <div className="page">
        <TopBar onHome={false} />

        <section style={{ background: 'linear-gradient(135deg,#f7f3ec 0%,#f3ecea 100%)', padding: 'clamp(40px,4.5vw,64px) clamp(28px,5vw,64px)', borderBottom: '1px solid rgba(0,0,0,.05)' }}>
          <div style={{ fontSize: 13, color: '#6f6c66', marginBottom: 16 }}>
            <a href="/warren-demo-v2" style={{ textDecoration: 'none' }}>Home</a> <span style={{ color: '#a87f3d' }}>&#8250;</span> Practice Areas <span style={{ color: '#a87f3d' }}>&#8250;</span> {area.title}
          </div>
          <div className="eyebrow" style={{ fontSize: 14, marginBottom: 14 }}>Practice Area</div>
          <h1 className="serif" style={{ fontWeight: 600, fontSize: 'clamp(42px,4.2vw,60px)', lineHeight: 1.02, margin: 0, letterSpacing: '-.02em', color: '#33372f' }}>{area.title}</h1>
          <div className="rule" style={{ margin: '26px 0 0' }} />
        </section>

        <section style={{ display: 'flex', flexWrap: 'wrap', gap: 'clamp(32px,4vw,64px)', padding: 'clamp(40px,4.5vw,64px) clamp(28px,5vw,64px)', alignItems: 'flex-start' }}>
          <div style={{ flex: '2 1 480px', maxWidth: 760 }}>
            <p style={{ color: '#3a3a37', fontSize: 19, lineHeight: 1.65, margin: '0 0 18px', fontWeight: 500, textWrap: 'pretty' }}>{area.lede}</p>
            <p style={{ color: '#6f6c66', fontSize: 16, lineHeight: 1.7, margin: '0 0 36px', textWrap: 'pretty' }}>{area.intro}</p>
            <h2 className="serif" style={{ fontSize: 'clamp(28px,2.4vw,36px)', fontWeight: 600, margin: '0 0 24px', color: '#33372f' }}>How We Help</h2>
            <div style={{ display: 'grid', gap: 22, marginBottom: 40 }}>
              {area.points.map(([heading, text], i) => (
                <div key={i} style={{ display: 'grid', gridTemplateColumns: '34px 1fr', gap: 16, alignItems: 'start' }}>
                  <div className="serif" style={{ width: 34, height: 34, border: '1px solid #c2974e', borderRadius: '50%', display: 'grid', placeItems: 'center', color: '#a87f3d', fontSize: 18, fontWeight: 700 }}>{i + 1}</div>
                  <div>
                    <h3 style={{ fontSize: 16, fontWeight: 700, margin: '0 0 6px', color: '#33372f' }}>{heading}</h3>
                    <p style={{ color: '#6f6c66', fontSize: 15, lineHeight: 1.6, margin: 0, textWrap: 'pretty' }}>{text}</p>
                  </div>
                </div>
              ))}
            </div>
            <div style={{ background: '#f1e5e4', borderLeft: '3px solid #6f333d', padding: '22px 26px', borderRadius: '0 6px 6px 0' }}>
              <p className="serif" style={{ margin: 0, fontStyle: 'italic', fontSize: 19, lineHeight: 1.5, color: '#55252d' }}>{area.note}</p>
            </div>
          </div>

          <aside style={{ flex: '1 1 300px', maxWidth: 380, position: 'sticky', top: 24, display: 'grid', gap: 20 }}>
            <div style={{ background: 'linear-gradient(135deg,#5c2830,#471e25)', color: 'white', borderRadius: 8, padding: '30px 28px' }}>
              <h3 className="serif" style={{ fontSize: 26, fontWeight: 600, margin: '0 0 10px' }}>Talk to Mr. Warren</h3>
              <p style={{ fontSize: 14, lineHeight: 1.6, color: 'rgba(255,255,255,.85)', margin: '0 0 22px' }}>Confidential consultations. Get a straight answer about your case.</p>
              <div style={{ display: 'grid', gap: 10 }}>
                <a href={PHONE_HREF} style={{ ...ctaBtn, fontSize: 16 }}>{PHONE_DISPLAY}</a>
                <a href={`mailto:${EMAIL}`} style={{ ...ctaBtn, fontSize: 13, letterSpacing: '.05em' }}>EMAIL US</a>
              </div>
            </div>
            <div style={{ background: '#f7f3ec', border: '1px solid rgba(111,51,61,.18)', borderRadius: 8, padding: '24px 26px' }}>
              <div style={{ fontWeight: 800, fontSize: 12, letterSpacing: '.16em', color: '#a87f3d', marginBottom: 14 }}>OTHER PRACTICE AREAS</div>
              <div style={{ display: 'grid', gap: 4 }}>
                {others.map(a => (
                  <a key={a.slug} href={areaHref(a.slug)} style={{ display: 'flex', alignItems: 'center', gap: 8, color: '#55252d', fontSize: 14, fontWeight: 600, textDecoration: 'none', padding: '8px 10px', borderRadius: 6 }}>
                    <span style={{ color: '#c2974e' }}>&#8250;</span> {a.label}
                  </a>
                ))}
              </div>
            </div>
          </aside>
        </section>

        <section style={{ background: 'linear-gradient(135deg,#471e25,#5c2830)', color: 'white', textAlign: 'center', padding: 'clamp(44px,4.5vw,64px) 28px' }}>
          <h2 className="serif" style={{ fontSize: 'clamp(30px,2.8vw,40px)', fontWeight: 600, margin: '0 0 12px' }}>42 Years of Experience on Your Side</h2>
          <p style={{ color: 'rgba(255,255,255,.88)', fontSize: 16, lineHeight: 1.6, maxWidth: 540, margin: '0 auto 26px', textWrap: 'pretty' }}>Every case starts with a candid conversation about your goals.</p>
          <a href={PHONE_HREF} style={{ ...ctaBtn, display: 'inline-flex', minHeight: 54, padding: '0 30px', fontSize: 16 }}>CALL {PHONE_DISPLAY}</a>
        </section>

        <footer style={{ background: '#3b1d22', color: 'rgba(255,255,255,.85)', padding: '32px clamp(28px,5vw,64px)', display: 'flex', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap', alignItems: 'center' }}>
          <BrandLockup crestHeight={56} wordSize={24} tagSize={11} showTagline={false} />
          <div style={{ fontSize: 12, lineHeight: 1.6, color: 'rgba(255,255,255,.45)', textAlign: 'right' }}>
            <div>&copy; 2026 Warren Family Law. All rights reserved.</div>
            <div>Attorney advertising. Prior results do not guarantee a similar outcome.</div>
          </div>
        </footer>
      </div>
    </main>
  );
}
