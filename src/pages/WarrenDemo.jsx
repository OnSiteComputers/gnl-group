import { useState, useEffect, useRef } from 'react';

const PHONE = '(704) 555-0100';
const PHONE_HREF = 'tel:+17045550100';

const practiceAreas = [
  {
    title: 'Divorce',
    icon: '⚖️',
    desc: 'Strategic, compassionate guidance through one of life\'s most difficult transitions. We protect your assets, your future, and your peace of mind.',
    detail: 'Whether contested or uncontested, we help you navigate property division, spousal support, and every detail with clarity and care.'
  },
  {
    title: 'Child Custody',
    icon: '🤝',
    desc: 'Your children deserve stability. We fight for custody arrangements that put their wellbeing first — always.',
    detail: 'From joint custody agreements to contested hearings, James A. Warren Jr. brings 42 years of family court experience to your case.'
  },
  {
    title: 'Child Support',
    icon: '🏡',
    desc: 'Fair support arrangements that reflect the real financial needs of your children and your family situation.',
    detail: 'We handle establishing and modifying support orders, ensuring every agreement is accurate, enforceable, and fair.'
  },
  {
    title: 'Spousal Support',
    icon: '💼',
    desc: 'Whether you\'re seeking support or responding to a claim, we make sure the outcome is grounded in fact.',
    detail: 'Alimony determinations can be complex. We make sure the financial realities of your marriage are accurately represented.'
  },
];

const stats = [
  { num: '42', label: 'Years of Experience' },
  { num: '1,000s', label: 'Families Helped' },
  { num: 'Direct', label: 'Access to James' },
  { num: 'Local', label: 'Charlotte & the Carolinas' },
];

const testimonials = [
  {
    text: 'James guided me through the hardest year of my life with patience, honesty, and real expertise. I always felt like I was his only client.',
    name: 'Former Client',
    case: 'Divorce & Custody'
  },
  {
    text: 'When I called, James answered. When I had questions, he explained everything clearly. That personal attention made all the difference.',
    name: 'Former Client',
    case: 'Child Custody'
  },
  {
    text: 'After 42 years in practice, James has seen everything. His calm experience gave me confidence when I needed it most.',
    name: 'Former Client',
    case: 'Spousal Support'
  },
];

function useInView(ref) {
  const [inView, setInView] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold: 0.12 });
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return inView;
}

function FadeIn({ children, delay = 0, style = {} }) {
  const ref = useRef();
  const inView = useInView(ref);
  return (
    <div ref={ref} style={{
      opacity: inView ? 1 : 0,
      transform: inView ? 'translateY(0)' : 'translateY(28px)',
      transition: `opacity .75s ease ${delay}s, transform .75s ease ${delay}s`,
      ...style
    }}>
      {children}
    </div>
  );
}

export default function WarrenDemo() {
  const [activeArea, setActiveArea] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const c = {
    navy: '#1e3a5f',
    navyLight: '#2d5282',
    gold: '#b8860b',
    goldLight: '#d4a017',
    warmWhite: '#fdfaf6',
    cream: '#f5f0e8',
    lightBlue: '#eef4fb',
    text: '#2d3748',
    muted: '#718096',
    border: 'rgba(30,58,95,.1)',
  };

  return (
    <div style={{ fontFamily: "'Lora', serif", background: c.warmWhite, color: c.text, minHeight: '100vh' }}>
      <link href="https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600&family=Nunito:wght@300;400;500;600;700&display=swap" rel="stylesheet" />

      <style>{`
        * { box-sizing:border-box; margin:0; padding:0; }
        @keyframes heroFade { from{opacity:0;transform:translateY(24px);}to{opacity:1;transform:translateY(0);} }
        .h1{animation:heroFade .8s ease forwards;}
        .h2{animation:heroFade .8s .18s ease forwards;opacity:0;}
        .h3{animation:heroFade .8s .36s ease forwards;opacity:0;}
        .h4{animation:heroFade .8s .54s ease forwards;opacity:0;}
        .btn-primary{display:inline-flex;align-items:center;gap:8px;background:#1e3a5f;color:#fff;padding:16px 32px;font-family:'Nunito',sans-serif;font-weight:700;font-size:14px;letter-spacing:.5px;text-decoration:none;border-radius:4px;transition:all .2s;}
        .btn-primary:hover{background:#2d5282;transform:translateY(-2px);box-shadow:0 8px 24px rgba(30,58,95,.2);}
        .btn-gold{display:inline-flex;align-items:center;gap:8px;background:#b8860b;color:#fff;padding:16px 32px;font-family:'Nunito',sans-serif;font-weight:700;font-size:14px;letter-spacing:.5px;text-decoration:none;border-radius:4px;transition:all .2s;}
        .btn-gold:hover{background:#d4a017;transform:translateY(-2px);box-shadow:0 8px 24px rgba(184,134,11,.25);}
        .btn-ghost{display:inline-flex;align-items:center;gap:8px;border:2px solid #1e3a5f;color:#1e3a5f;padding:15px 32px;font-family:'Nunito',sans-serif;font-weight:700;font-size:14px;letter-spacing:.5px;text-decoration:none;border-radius:4px;transition:all .2s;}
        .btn-ghost:hover{background:#eef4fb;transform:translateY(-2px);}
        .area-card{background:#fff;border:1px solid rgba(30,58,95,.1);border-radius:8px;padding:36px 30px;cursor:pointer;transition:all .25s;}
        .area-card:hover{transform:translateY(-4px);box-shadow:0 12px 32px rgba(30,58,95,.1);border-color:rgba(30,58,95,.25);}
        .area-card.active{background:#eef4fb;border-color:#1e3a5f;border-left:4px solid #b8860b;}
        .test-card{background:#fff;border-radius:8px;padding:36px;box-shadow:0 4px 16px rgba(30,58,95,.06);transition:transform .2s;}
        .test-card:hover{transform:translateY(-4px);}
        .nav-link{font-family:'Nunito',sans-serif;font-size:13px;font-weight:600;letter-spacing:.5px;color:#fff;text-decoration:none;opacity:.85;transition:opacity .2s;}
        .nav-link:hover{opacity:1;}
        .demo-badge{position:fixed;bottom:20px;right:20px;background:#1e3a5f;color:#fff;padding:10px 16px;font-family:'Nunito',sans-serif;font-size:11px;font-weight:700;letter-spacing:1px;text-transform:uppercase;z-index:100;border-radius:20px;box-shadow:0 4px 16px rgba(30,58,95,.3);}
        @media(max-width:768px){.two-col{grid-template-columns:1fr!important;}.four-col{grid-template-columns:repeat(2,1fr)!important;}.hero-pad{padding:100px 24px 60px!important;}}
      `}</style>

      {/* DEMO BADGE */}
      <div className="demo-badge">⚡ Demo by GNL Digital Group</div>

      {/* NAV */}
      <nav style={{
        position:'fixed',top:0,left:0,right:0,zIndex:50,
        background: scrolled ? 'rgba(30,58,95,.97)' : 'rgba(30,58,95,.85)',
        backdropFilter:'blur(10px)',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,.1)' : 'none',
        transition:'all .3s',padding:'18px 40px',
        display:'flex',alignItems:'center',justifyContent:'space-between'
      }}>
        <div>
          <div style={{fontFamily:"'Lora',serif",fontSize:22,fontWeight:700,color:'#fff'}}>
            Warren <span style={{color:'#d4a017'}}>Family Law</span>
          </div>
          <div style={{fontFamily:"'Nunito',sans-serif",fontSize:10,letterSpacing:'3px',textTransform:'uppercase',color:'rgba(212,160,23,.8)',marginTop:2}}>
            Charlotte, North Carolina
          </div>
        </div>
        <div style={{display:'flex',gap:28,alignItems:'center'}}>
          <a href="#about" className="nav-link">Our Firm</a>
          <a href="#practice" className="nav-link">Practice Areas</a>
          <a href="#contact" className="nav-link">Contact</a>
          <a href={PHONE_HREF} className="btn-gold" style={{padding:'11px 20px',fontSize:13}}>
            Free Consultation
          </a>
        </div>
      </nav>

      {/* HERO — light, warm, hopeful */}
      <section style={{
        minHeight:'100vh',
        background:`linear-gradient(160deg, #eef4fb 0%, #f5f0e8 40%, #e8f0f8 100%)`,
        display:'flex',alignItems:'center',position:'relative',overflow:'hidden'
      }}>
        {/* decorative circles */}
        <div style={{position:'absolute',top:'-10%',right:'-5%',width:500,height:500,borderRadius:'50%',background:'radial-gradient(circle,rgba(30,58,95,.05),transparent)',pointerEvents:'none'}}/>
        <div style={{position:'absolute',bottom:'-5%',left:'-8%',width:400,height:400,borderRadius:'50%',background:'radial-gradient(circle,rgba(184,134,11,.06),transparent)',pointerEvents:'none'}}/>

        <div style={{maxWidth:1200,margin:'0 auto',padding:'120px 40px 80px',display:'grid',gridTemplateColumns:'1.15fr .85fr',gap:80,alignItems:'center'}} className="two-col hero-pad">
          <div>
            <div className="h1" style={{display:'inline-block',background:'rgba(30,58,95,.08)',borderLeft:'3px solid #b8860b',padding:'8px 16px',fontFamily:"'Nunito',sans-serif",fontSize:12,fontWeight:700,letterSpacing:'3px',textTransform:'uppercase',color:c.navy,marginBottom:28}}>
              Serving Families Since 1984
            </div>
            <h1 className="h2" style={{fontFamily:"'Lora',serif",fontSize:'clamp(36px,5.5vw,64px)',fontWeight:700,color:c.navy,lineHeight:1.1,marginBottom:24}}>
              Guiding Families<br/>Through Life's<br/><em style={{color:c.gold,fontStyle:'italic'}}>Hardest Decisions.</em>
            </h1>
            <p className="h3" style={{fontFamily:"'Nunito',sans-serif",fontWeight:400,fontSize:18,color:c.muted,lineHeight:1.8,maxWidth:520,marginBottom:40}}>
              For over four decades, families across Charlotte have trusted James A. Warren Jr. to handle their most personal legal matters with experience, compassion, and genuine care.
            </p>
            <div className="h4" style={{display:'flex',gap:16,flexWrap:'wrap'}}>
              <a href={PHONE_HREF} className="btn-primary">📞 Schedule a Consultation</a>
              <a href="#practice" className="btn-ghost">Our Practice Areas</a>
            </div>
          </div>

          {/* Attorney card — light version */}
          <div className="h3">
            <div style={{background:'#fff',borderRadius:16,boxShadow:'0 20px 60px rgba(30,58,95,.12)',padding:'48px 36px',textAlign:'center',position:'relative',overflow:'hidden'}}>
              <div style={{position:'absolute',top:0,left:0,right:0,height:6,background:'linear-gradient(90deg,#1e3a5f,#b8860b)'}}/>
              {/* silhouette */}
              <div style={{width:110,height:110,borderRadius:'50%',background:'linear-gradient(135deg,#eef4fb,#dde8f4)',border:'3px solid #1e3a5f',margin:'0 auto 20px',display:'flex',alignItems:'center',justifyContent:'center'}}>
                <svg width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="#1e3a5f" strokeWidth="1.2" opacity=".5">
                  <circle cx="12" cy="8" r="4"/>
                  <path d="M4 21c0-4.4 3.6-8 8-8s8 3.6 8 8"/>
                </svg>
              </div>
              <div style={{fontFamily:"'Lora',serif",fontSize:22,fontWeight:700,color:c.navy,marginBottom:4}}>James A. Warren Jr.</div>
              <div style={{fontFamily:"'Nunito',sans-serif",fontSize:11,letterSpacing:'3px',textTransform:'uppercase',color:c.gold,marginBottom:20}}>Founding Attorney</div>
              <div style={{width:40,height:2,background:c.gold,margin:'0 auto 20px'}}/>
              <p style={{fontFamily:"'Lora',serif",fontStyle:'italic',fontSize:15,color:c.muted,lineHeight:1.75}}>
                "When you hire me, you meet with me — not a paralegal, not a junior associate. You get 42 years of experience in your corner."
              </p>
              <div style={{marginTop:24,padding:'12px 16px',background:'#eef4fb',borderRadius:8}}>
                <div style={{fontFamily:"'Nunito',sans-serif",fontSize:12,fontWeight:700,color:c.navy}}>⭐⭐⭐⭐⭐ 5.0 Google Rating</div>
                <div style={{fontFamily:"'Nunito',sans-serif",fontSize:11,color:c.muted,marginTop:4}}>42 years · Charlotte, NC</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS — soft blue band */}
      <div style={{background:c.navy,padding:'44px 40px'}}>
        <div style={{maxWidth:900,margin:'0 auto',display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:24,textAlign:'center'}} className="four-col">
          {stats.map((st,i)=>(
            <FadeIn key={st.label} delay={i*.1}>
              <div style={{fontFamily:"'Lora',serif",fontSize:46,fontWeight:700,color:'#d4a017',lineHeight:1}}>{st.num}</div>
              <div style={{fontFamily:"'Nunito',sans-serif",fontSize:11,letterSpacing:'2px',textTransform:'uppercase',color:'rgba(255,255,255,.5)',marginTop:10}}>{st.label}</div>
            </FadeIn>
          ))}
        </div>
      </div>

      {/* ABOUT */}
      <section id="about" style={{padding:'100px 40px',background:'#fff'}}>
        <div style={{maxWidth:1100,margin:'0 auto',display:'grid',gridTemplateColumns:'1fr 1fr',gap:80,alignItems:'center'}} className="two-col">
          <FadeIn>
            <div style={{fontFamily:"'Nunito',sans-serif",fontSize:11,letterSpacing:'4px',textTransform:'uppercase',color:c.gold,fontWeight:700,marginBottom:16}}>Our Firm</div>
            <h2 style={{fontFamily:"'Lora',serif",fontSize:'clamp(28px,4vw,44px)',fontWeight:700,color:c.navy,lineHeight:1.15,marginBottom:24}}>
              You Meet Directly<br/>with <em style={{color:c.gold}}>James.</em>
            </h2>
            <div style={{width:48,height:3,background:c.gold,borderRadius:2,marginBottom:28}}/>
            <p style={{fontFamily:"'Nunito',sans-serif",fontWeight:400,fontSize:16,color:c.muted,lineHeight:1.9,marginBottom:20}}>
              When you're starting the divorce process, struggling with a custody dispute, or dealing with any family law matter, you want to talk to someone who can actually give you real answers.
            </p>
            <p style={{fontFamily:"'Nunito',sans-serif",fontWeight:400,fontSize:16,color:c.muted,lineHeight:1.9,marginBottom:36}}>
              At Warren Family Law, you meet directly with Jim. His personal approach — and his record of resolving complex matters for Charlotte families — is what sets him apart.
            </p>
            <a href={PHONE_HREF} className="btn-primary">Talk to Jim Today</a>
          </FadeIn>
          <FadeIn delay={.2}>
            <div style={{background:c.cream,borderRadius:12,padding:'44px 36px',border:`1px solid ${c.border}`}}>
              {[
                {label:'Founded',value:'1984'},
                {label:'Location',value:'Charlotte, NC'},
                {label:'Practice Focus',value:'Family Law'},
                {label:'Approach',value:'Direct — you work with James'},
                {label:'Initial Consultation',value:'Free'},
              ].map((item,i)=>(
                <div key={item.label} style={{display:'flex',justifyContent:'space-between',alignItems:'center',padding:'16px 0',borderBottom:i<4?`1px solid ${c.border}`:'none'}}>
                  <span style={{fontFamily:"'Nunito',sans-serif",fontSize:12,letterSpacing:'1.5px',textTransform:'uppercase',color:c.muted,fontWeight:600}}>{item.label}</span>
                  <span style={{fontFamily:"'Lora',serif",fontSize:16,fontWeight:600,color:c.navy}}>{item.value}</span>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* PRACTICE AREAS */}
      <section id="practice" style={{padding:'100px 40px',background:c.lightBlue}}>
        <div style={{maxWidth:1100,margin:'0 auto'}}>
          <FadeIn style={{textAlign:'center',marginBottom:60}}>
            <div style={{fontFamily:"'Nunito',sans-serif",fontSize:11,letterSpacing:'4px',textTransform:'uppercase',color:c.gold,fontWeight:700,marginBottom:16}}>How We Help</div>
            <h2 style={{fontFamily:"'Lora',serif",fontSize:'clamp(28px,4vw,44px)',fontWeight:700,color:c.navy,lineHeight:1.1}}>Practice Areas</h2>
            <div style={{width:48,height:3,background:c.gold,borderRadius:2,margin:'20px auto 0'}}/>
          </FadeIn>
          <div style={{display:'grid',gridTemplateColumns:'repeat(2,1fr)',gap:20}} className="two-col">
            {practiceAreas.map((area,i)=>(
              <FadeIn key={area.title} delay={i*.1}>
                <div className={`area-card${activeArea===i?' active':''}`} onClick={()=>setActiveArea(i)}>
                  <div style={{fontSize:28,marginBottom:16}}>{area.icon}</div>
                  <h3 style={{fontFamily:"'Lora',serif",fontSize:22,fontWeight:700,color:c.navy,marginBottom:12}}>{area.title}</h3>
                  <p style={{fontFamily:"'Nunito',sans-serif",fontWeight:400,fontSize:15,color:c.muted,lineHeight:1.8}}>
                    {activeArea===i ? area.detail : area.desc}
                  </p>
                  {activeArea!==i && <div style={{marginTop:16,fontFamily:"'Nunito',sans-serif",fontSize:12,fontWeight:700,color:c.navy,letterSpacing:'1px'}}>Learn more →</div>}
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section style={{padding:'100px 40px',background:'#fff'}}>
        <div style={{maxWidth:1100,margin:'0 auto'}}>
          <FadeIn style={{textAlign:'center',marginBottom:60}}>
            <div style={{fontFamily:"'Nunito',sans-serif",fontSize:11,letterSpacing:'4px',textTransform:'uppercase',color:c.gold,fontWeight:700,marginBottom:16}}>Client Stories</div>
            <h2 style={{fontFamily:"'Lora',serif",fontSize:'clamp(28px,4vw,44px)',fontWeight:700,color:c.navy}}>What Our Clients Say</h2>
            <div style={{width:48,height:3,background:c.gold,borderRadius:2,margin:'20px auto 0'}}/>
          </FadeIn>
          <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:24}} className="four-col" >
            {testimonials.map((t,i)=>(
              <FadeIn key={i} delay={i*.15}>
                <div className="test-card">
                  <div style={{fontSize:36,color:c.gold,fontFamily:"'Lora',serif",lineHeight:1,marginBottom:16}}>"</div>
                  <p style={{fontFamily:"'Lora',serif",fontStyle:'italic',fontSize:16,color:c.text,lineHeight:1.85,marginBottom:24}}>{t.text}</p>
                  <div style={{fontFamily:"'Nunito',sans-serif",fontSize:12,fontWeight:700,color:c.navy,letterSpacing:'1px',textTransform:'uppercase'}}>{t.name}</div>
                  <div style={{fontFamily:"'Nunito',sans-serif",fontSize:12,color:c.gold,marginTop:4}}>{t.case}</div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA — soft, hopeful, not dark */}
      <section id="contact" style={{padding:'100px 40px',background:`linear-gradient(135deg,#eef4fb,#f5f0e8)`,textAlign:'center',position:'relative',overflow:'hidden'}}>
        <div style={{position:'absolute',top:'50%',left:'50%',transform:'translate(-50%,-50%)',width:600,height:600,borderRadius:'50%',background:'radial-gradient(circle,rgba(30,58,95,.04),transparent)',pointerEvents:'none'}}/>
        <FadeIn>
          <div style={{fontFamily:"'Nunito',sans-serif",fontSize:11,letterSpacing:'4px',textTransform:'uppercase',color:c.gold,fontWeight:700,marginBottom:20}}>Get in Touch</div>
          <h2 style={{fontFamily:"'Lora',serif",fontSize:'clamp(30px,5vw,54px)',fontWeight:700,color:c.navy,marginBottom:20}}>
            Let's Talk About<br/><em style={{color:c.gold}}>Your Situation.</em>
          </h2>
          <p style={{fontFamily:"'Nunito',sans-serif",fontWeight:400,fontSize:18,color:c.muted,maxWidth:520,margin:'0 auto 40px',lineHeight:1.8}}>
            Schedule a confidential consultation. No pressure — just straight answers from an attorney who genuinely cares about your family.
          </p>
          <div style={{display:'flex',gap:16,justifyContent:'center',flexWrap:'wrap'}}>
            <a href={PHONE_HREF} className="btn-primary">📞 Call Now — {PHONE}</a>
            <a href="#contact" className="btn-gold">Free Consultation</a>
          </div>
          <p style={{fontFamily:"'Nunito',sans-serif",fontSize:13,color:c.muted,marginTop:32}}>
            Charlotte, North Carolina &nbsp;·&nbsp; Serving Families Since 1984 &nbsp;·&nbsp; Free Initial Consultation
          </p>
        </FadeIn>
      </section>

      {/* FOOTER */}
      <footer style={{background:c.navy,padding:'44px 40px',textAlign:'center',borderTop:'4px solid #b8860b'}}>
        <div style={{fontFamily:"'Lora',serif",fontSize:22,fontWeight:700,color:'#fff',marginBottom:8}}>
          Warren <span style={{color:'#d4a017'}}>Family Law</span>
        </div>
        <div style={{fontFamily:"'Nunito',sans-serif",fontSize:12,color:'rgba(255,255,255,.35)',marginTop:16}}>
          © 2026 Warren Family Law · Charlotte, NC · Demo concept prepared by GNL Digital Group
        </div>
      </footer>
    </div>
  );
}
