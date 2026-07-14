// PiedmontProposal.jsx
// GNL Digital Group — Piedmont Hardwood Lumber Co. proposal page
// Route: /piedmont-proposal
// Change-note: demo-ready pass — demo buttons repointed to /piedmont-order-desk,
//   "Call Greg" CTA now dials Greg (704) 577-4936, phone photos added to hardware
//   section (public/piedmont/phone-cordless.jpg + phone-desk.jpg).
// Prior: initial build — new website + inventory app + live stock feed +
//   VoIP phone system (2x Yealink AX83H cordless + 1x Yealink T34W desk).
//   Pricing: $15,000 build-out (50% deposit / 50% on delivery), $500/mo.
//   Country-plain VoIP walkthrough built around three wins: extension dialing,
//   yard crew cells as extensions (keeps Sherry at her desk), Lynn's cell filtered.
//   Palette carried from the live inventory demo (sawmill: pine/bark/cream/steel).
//
// Per-client constants:
const CLIENT = {
  name: "Piedmont Hardwood Lumber Co.",
  town: "Mt. Pleasant, NC",
  phone: "(704) 436-9311",
  gregPhone: "(704) 577-4936",
  est: "1960",
  contactOwner: "Lynn",
  contactFront: "Sherry",
  demoUrl: "/piedmont-order-desk",       // the live order desk (stock + orders) route
  buildOut: "$15,000",
  deposit: "$7,500",
  balance: "$7,500",
  monthly: "$500",
};

import React from "react";

// ---- sawmill palette (matches the inventory demo) ----
const C = {
  bark:  "#3B2A1E",
  pine:  "#7A5230",
  sawdust:"#F5F0E5",
  plank: "#EAD9BF",
  steel: "#2F6B7A",
  steelDk:"#204A54",
  ink:   "#2A1D12",
  line:  "#D8C4A4",
  green: "#3E7C4F",
  amber: "#C6801E",
  paper: "#FBF8F1",
};

const PUBLIC = "/piedmont"; // image folder in public/ ; files: loader.jpg, stacks.jpg, warehouse.jpg, sign.jpg, boards.jpg

export default function PiedmontProposal() {
  return (
    <div style={{background:C.sawdust, color:C.ink, fontFamily:'"Inter",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif', lineHeight:1.55}}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700;800&family=Inter:wght@400;500;600;700&display=swap');
        .pf{font-family:"Playfair Display",Georgia,serif;}
        .mono{font-family:"SFMono-Regular",Consolas,"Liberation Mono",Menlo,monospace;}
        .wrap{max-width:960px;margin:0 auto;padding:0 22px;}
        .eyebrow{font-size:12px;letter-spacing:2.5px;text-transform:uppercase;color:${C.pine};font-weight:700;}
        .rule{height:2px;background:${C.line};border:none;margin:0;}
        .btn{display:inline-block;text-decoration:none;font-weight:700;border-radius:7px;padding:15px 30px;font-size:16px;transition:.15s;cursor:pointer;border:none;}
        .btn-gold{background:${C.pine};color:#fff;}
        .btn-gold:hover{background:${C.bark};}
        .btn-steel{background:${C.steel};color:#fff;}
        .btn-steel:hover{background:${C.steelDk};}
        .btn-ghost{background:transparent;color:${C.sawdust};border:1.5px solid rgba(245,240,229,.6);}
        .btn-ghost:hover{background:rgba(245,240,229,.12);}
        .card{background:${C.paper};border:1px solid ${C.line};border-radius:12px;box-shadow:0 2px 0 ${C.plank};}
        @media(max-width:640px){.pf.h1{font-size:34px!important;} .stepgrid{grid-template-columns:1fr!important;} .pricegrid{grid-template-columns:1fr!important;}}
      `}</style>

      {/* ============ HERO ============ */}
      <header style={{position:"relative", minHeight:420, overflow:"hidden", borderBottom:`5px solid ${C.bark}`}}>
        <img src={`${PUBLIC}/loader.jpg`} alt="Piedmont Hardwood Lumber yard"
             style={{position:"absolute", inset:0, width:"100%", height:"100%", objectFit:"cover", objectPosition:"center 42%"}}/>
        <div style={{position:"absolute", inset:0, background:`linear-gradient(90deg, rgba(43,29,18,.90) 0%, rgba(43,29,18,.74) 48%, rgba(43,29,18,.42) 100%)`}}/>
        <div style={{position:"relative"}} className="wrap">
          <div style={{paddingTop:54, paddingBottom:48}}>
            <div className="eyebrow" style={{color:C.plank}}>A Proposal Prepared For</div>
            <h1 className="pf h1" style={{color:C.sawdust, fontSize:52, fontWeight:800, lineHeight:1.05, margin:"12px 0 6px", textShadow:"0 2px 12px rgba(0,0,0,.5)"}}>
              Piedmont Hardwood<br/>Lumber Co.
            </h1>
            <div style={{color:C.plank, fontSize:16, marginBottom:26, textShadow:"0 1px 6px rgba(0,0,0,.6)"}}>
              Southern Yellow Pine · Since {CLIENT.est} · {CLIENT.town} · We Buy Timber
            </div>
            <div style={{display:"flex", gap:14, flexWrap:"wrap"}}>
              <a className="btn btn-gold" href={CLIENT.demoUrl}>See Your Live Stock Board</a>
              <a className="btn btn-ghost" href="#package">What You Get</a>
            </div>
          </div>
        </div>
      </header>

      {/* ============ OPENING ============ */}
      <section className="wrap" style={{padding:"52px 22px 10px"}}>
        <div className="eyebrow">The Short Version</div>
        <h2 className="pf" style={{fontSize:30, color:C.bark, fontWeight:700, margin:"8px 0 18px", maxWidth:720}}>
          You've built something real over sixty-plus years. The way folks find you and buy from you should match it.
        </h2>
        <p style={{fontSize:18, color:"#4a3a28", maxWidth:760, marginBottom:16}}>
          {CLIENT.contactOwner}, this is a plan to bring three things up to where the rest of your operation
          already is — the website, the way your stock gets tracked, and your phones. Not fancy for the sake of
          fancy. Every piece here saves {CLIENT.contactFront} time, catches business you're missing, and makes
          Piedmont look as solid online as it does when a truck pulls into the yard.
        </p>
        <p style={{fontSize:18, color:"#4a3a28", maxWidth:760}}>
          One number covers the build. One small number a month keeps it running. That's it.
        </p>
      </section>

      {/* ============ THE PACKAGE ============ */}
      <section id="package" className="wrap" style={{padding:"40px 22px 10px"}}>
        <div className="eyebrow">Everything In One Package</div>
        <h2 className="pf" style={{fontSize:34, color:C.bark, fontWeight:800, margin:"8px 0 26px"}}>Four things, done right, done together.</h2>

        <div style={{display:"grid", gridTemplateColumns:"1fr 1fr", gap:18}} className="stepgrid">
          {[
            {t:"A New Website", n:"01",
             d:`A clean, fast website that actually says what you sell, lists your phone number where people can find it, and works on a phone screen — because that's where your customers are standing when they need lumber. Built to be found on Google, not buried.`},
            {t:"A Live Stock Board", n:"02",
             d:`The big one. ${CLIENT.contactFront} stops running the yard-count spreadsheet in her head. She keeps stock on a clean, simple screen — and your wholesale customers can check what's in stock themselves, right on the website, instead of tying up the phone. Same number she keeps is the number they see.`},
            {t:"Your Phones, Done Right", n:"03",
             d:`Two cordless handsets and a desk phone, set up to do everything your phone service is actually capable of — which is a lot more than you're using today. This is where ${CLIENT.contactFront} stops walking the yard all day. (Full walkthrough below.)`},
            {t:"Kept Running", n:"04",
             d:`Once it's built, I keep it all working — the website, the stock board, the phone system, and your standing on Google. One person you can call. Not a call center three states away.`},
          ].map((s,i)=>(
            <div key={i} className="card" style={{padding:"24px 24px 26px"}}>
              <div className="pf" style={{fontSize:15, color:C.steel, fontWeight:700, letterSpacing:2, marginBottom:6}}>{s.n}</div>
              <div className="pf" style={{fontSize:23, color:C.bark, fontWeight:700, marginBottom:10}}>{s.t}</div>
              <div style={{fontSize:16, color:"#5a4a36"}}>{s.d}</div>
            </div>
          ))}
        </div>
      </section>

      {/* stock board strip with photo */}
      <section style={{marginTop:44, background:C.bark, color:C.sawdust, padding:"46px 0"}}>
        <div className="wrap" style={{display:"grid", gridTemplateColumns:"1.1fr .9fr", gap:34, alignItems:"center"}}>
          <div>
            <div className="eyebrow" style={{color:C.plank}}>Why The Stock Board Matters</div>
            <h3 className="pf" style={{fontSize:28, fontWeight:700, margin:"10px 0 14px", color:C.sawdust}}>
              Right now, every "y'all got any 1×6 in twelve-foot?" is a phone call {CLIENT.contactFront} has to stop and answer.
            </h3>
            <p style={{fontSize:17, color:"#e4d6bf", marginBottom:14}}>
              She pulls up the spreadsheet, reads down the column, tells the customer. Every single time. And that
              spreadsheet only makes sense because she's the one who built it — which means the day she's out, the
              yard's a guessing game.
            </p>
            <p style={{fontSize:17, color:"#e4d6bf", marginBottom:22}}>
              The stock board fixes both. She keeps the counts on a clean screen anybody can read. Your customers
              check stock on the website themselves. Fewer interruptions, faster answers, and one set of numbers
              everybody trusts.
            </p>
            <a className="btn btn-gold" href={CLIENT.demoUrl}>See It Working →</a>
          </div>
          <div style={{borderRadius:12, overflow:"hidden", border:`1px solid ${C.line}`, boxShadow:"0 3px 0 rgba(0,0,0,.3)"}}>
            <img src={`${PUBLIC}/stacks.jpg`} alt="Sorted, tagged pine ready to sell" style={{width:"100%", display:"block"}}/>
          </div>
        </div>
      </section>

      {/* ============ THE VOIP WALKTHROUGH — the heart ============ */}
      <section className="wrap" style={{padding:"56px 22px 20px"}}>
        <div className="eyebrow">Your Phones — In Plain English</div>
        <h2 className="pf" style={{fontSize:36, color:C.bark, fontWeight:800, margin:"8px 0 8px", maxWidth:780}}>
          You're paying for a phone system and using about a tenth of it.
        </h2>
        <p style={{fontSize:18, color:"#4a3a28", maxWidth:780, marginBottom:8}}>
          Here's the thing most folks never get told: those internet phones can do a whole lot more than ring and
          hang up. Yours can dial straight to a person, reach a man out in the yard on his own cell phone, and keep
          the calls {CLIENT.contactOwner} <em>doesn't</em> want off his personal line. You've just never had it set
          up that way. Let me walk you through it like you're standing at the counter.
        </p>
        <p style={{fontSize:15, color:"#7a6a52", maxWidth:780, marginBottom:30}}>
          No wires to run — these phones ride your internet. Two cordless handsets you can carry, and one desk phone
          that sits at the front. Read the three below with your finger.
        </p>

        {/* three scenarios */}
        <div style={{display:"grid", gap:18}}>

          {/* Scenario 1 */}
          <div className="card" style={{padding:0, overflow:"hidden"}}>
            <div style={{display:"grid", gridTemplateColumns:"64px 1fr"}}>
              <div style={{background:C.steel, display:"flex", alignItems:"center", justifyContent:"center"}}>
                <span className="pf" style={{color:"#fff", fontSize:26, fontWeight:800}}>1</span>
              </div>
              <div style={{padding:"22px 26px"}}>
                <div className="pf" style={{fontSize:22, color:C.bark, fontWeight:700, marginBottom:8}}>
                  "Let me get {CLIENT.contactOwner} for you."
                </div>
                <p style={{fontSize:16.5, color:"#5a4a36", marginBottom:10}}>
                  A customer's on the line and needs {CLIENT.contactOwner}. Today, {CLIENT.contactFront} either
                  hollers for him or walks off to find him. With this, she just presses <b>one button</b> — his
                  extension — and it rings him wherever he is. His desk if he's in, his cell if he's not. She never
                  leaves the counter, and the customer never gets "hang on, let me go look for him."
                </p>
                <div className="mono" style={{fontSize:13, color:C.steelDk, background:C.sawdust, borderRadius:6, padding:"8px 12px", display:"inline-block"}}>
                  Press "Lynn" → rings his desk, then his cell → connected.
                </div>
              </div>
            </div>
          </div>

          {/* Scenario 2 — the big one */}
          <div className="card" style={{padding:0, overflow:"hidden", border:`2px solid ${C.pine}`}}>
            <div style={{display:"grid", gridTemplateColumns:"64px 1fr"}}>
              <div style={{background:C.pine, display:"flex", alignItems:"center", justifyContent:"center"}}>
                <span className="pf" style={{color:"#fff", fontSize:26, fontWeight:800}}>2</span>
              </div>
              <div style={{padding:"22px 26px"}}>
                <div style={{display:"inline-block", background:C.plank, color:C.bark, fontSize:11, fontWeight:700, letterSpacing:1, textTransform:"uppercase", padding:"3px 10px", borderRadius:20, marginBottom:10}}>
                  The one that changes {CLIENT.contactFront}'s whole day
                </div>
                <div className="pf" style={{fontSize:22, color:C.bark, fontWeight:700, marginBottom:8}}>
                  Reaching the yard crew without walking the yard.
                </div>
                <p style={{fontSize:16.5, color:"#5a4a36", marginBottom:10}}>
                  Right now, when {CLIENT.contactFront} needs to ask one of your yard men a question, she gets up and
                  goes and finds him. Every day, all day. That's why she's got two portable phones — she's never at
                  her desk.
                </p>
                <p style={{fontSize:16.5, color:"#5a4a36", marginBottom:10}}>
                  We fix that. I can add your yard men's cell phones to the phone system as <b>extensions</b>. Then
                  {" "}{CLIENT.contactFront} dials a short number from the front desk and it rings that man's cell
                  {" "}right in his pocket, out in the yard. She asks her question and hangs up — <b>without leaving
                  the office</b>. She stays where the customers' calls come in, and nobody's chasing anybody across
                  the lot.
                </p>
                <div className="mono" style={{fontSize:13, color:C.steelDk, background:C.sawdust, borderRadius:6, padding:"8px 12px", display:"inline-block"}}>
                  Dial the yard man's extension → his cell rings in the yard → answered.
                </div>
              </div>
            </div>
          </div>

          {/* Scenario 3 */}
          <div className="card" style={{padding:0, overflow:"hidden"}}>
            <div style={{display:"grid", gridTemplateColumns:"64px 1fr"}}>
              <div style={{background:C.steel, display:"flex", alignItems:"center", justifyContent:"center"}}>
                <span className="pf" style={{color:"#fff", fontSize:26, fontWeight:800}}>3</span>
              </div>
              <div style={{padding:"22px 26px"}}>
                <div className="pf" style={{fontSize:22, color:C.bark, fontWeight:700, marginBottom:8}}>
                  {CLIENT.contactOwner}'s cell stops being everybody's hotline.
                </div>
                <p style={{fontSize:16.5, color:"#5a4a36", marginBottom:10}}>
                  I'd bet {CLIENT.contactOwner} gets calls on his personal cell all day that he'd just as soon not.
                  We set his phone up so it <b>only rings him directly for the people who should reach him</b> —
                  everybody else lands at the front desk where {CLIENT.contactFront} catches them. He keeps his same
                  cell phone and number. It just quits being the number the whole county calls.
                </p>
                <p style={{fontSize:15, color:"#7a6a52", marginBottom:10}}>
                  I run my own cell exactly this way. Adding somebody to your "rings straight through" list is as
                  easy as texting me their name and number.
                </p>
                <div className="mono" style={{fontSize:13, color:C.steelDk, background:C.sawdust, borderRadius:6, padding:"8px 12px", display:"inline-block"}}>
                  Approved caller → rings {CLIENT.contactOwner}'s cell. Everybody else → front desk.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* the hardware */}
        <div className="card" style={{marginTop:26, padding:"24px 26px", background:C.paper}}>
          <div className="eyebrow" style={{marginBottom:12}}>The Phones You'll Have</div>
          <div style={{display:"grid", gridTemplateColumns:"1fr 1fr 1fr", gap:16}} className="stepgrid">
            {[
              {q:"2×", t:"Yealink AX83H", img:`${PUBLIC}/phone-cordless.jpg`, alt:"Yealink cordless handset in charging cradle",
               d:"Cordless handsets. Carry them anywhere — the counter, the office, out front. Wi-Fi, so no wires."},
              {q:"1×", t:"Yealink T34W", img:`${PUBLIC}/phone-desk.jpg`, alt:"Yealink desk phone with one-touch buttons",
               d:"A desk phone for the front counter — Sherry's home base, with one-touch buttons for the yard and for Lynn."},
              {q:"—", t:"Your number, kept", img:null, alt:"",
               d:"We move your current number over. Nothing changes for the folks who already call you. And you stop renting phones by the month."},
            ].map((h,i)=>(
              <div key={i} style={{borderLeft:`3px solid ${C.pine}`, paddingLeft:14}}>
                {h.img && (
                  <div style={{background:"#fff", border:`1px solid ${C.line}`, borderRadius:8, height:170, display:"flex", alignItems:"center", justifyContent:"center", marginBottom:12, overflow:"hidden"}}>
                    <img src={h.img} alt={h.alt} style={{maxHeight:"92%", maxWidth:"92%", objectFit:"contain", display:"block"}}/>
                  </div>
                )}
                <div className="pf" style={{fontSize:24, color:C.pine, fontWeight:800}}>{h.q}</div>
                <div style={{fontWeight:700, color:C.bark, fontSize:16, margin:"2px 0 6px"}}>{h.t}</div>
                <div style={{fontSize:14.5, color:"#5a4a36"}}>{h.d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ PRICING ============ */}
      <section style={{marginTop:40, background:C.plank, padding:"52px 0"}}>
        <div className="wrap">
          <div className="eyebrow">What It Costs</div>
          <h2 className="pf" style={{fontSize:34, color:C.bark, fontWeight:800, margin:"8px 0 8px"}}>Plain numbers. No surprises.</h2>
          <p style={{fontSize:17, color:"#5a4a36", maxWidth:680, marginBottom:28}}>
            One price to build the whole thing. One small price a month to keep it all running. That monthly covers
            the stock board, the phone system, and keeping you found on Google — the ongoing work, not a fee for
            nothing.
          </p>

          <div style={{display:"grid", gridTemplateColumns:"1.15fr .85fr", gap:18}} className="pricegrid">
            {/* build */}
            <div className="card" style={{padding:"30px 30px 32px", background:C.paper}}>
              <div style={{fontSize:13, letterSpacing:1.5, textTransform:"uppercase", color:C.pine, fontWeight:700, marginBottom:6}}>The Build — One Time</div>
              <div className="pf" style={{fontSize:52, fontWeight:800, color:C.bark, lineHeight:1}}>{CLIENT.buildOut}</div>
              <div style={{fontSize:15, color:"#7a6a52", margin:"6px 0 18px"}}>Website · Stock board · Phone system set up & number moved</div>
              <hr className="rule" style={{margin:"0 0 16px"}}/>
              <div style={{fontSize:15.5, color:"#4a3a28", marginBottom:8}}>
                <b style={{color:C.bark}}>{CLIENT.deposit} to start</b> — so I can order your phones and begin the build.
              </div>
              <div style={{fontSize:15.5, color:"#4a3a28"}}>
                <b style={{color:C.bark}}>{CLIENT.balance} when it's done</b> — the day it's live and in your hands. Nothing due in between.
              </div>
            </div>
            {/* monthly */}
            <div className="card" style={{padding:"30px 30px 32px", background:C.bark, color:C.sawdust}}>
              <div style={{fontSize:13, letterSpacing:1.5, textTransform:"uppercase", color:C.plank, fontWeight:700, marginBottom:6}}>Kept Running — Monthly</div>
              <div className="pf" style={{fontSize:52, fontWeight:800, color:C.sawdust, lineHeight:1}}>{CLIENT.monthly}<span style={{fontSize:20, color:C.plank}}>/mo</span></div>
              <div style={{fontSize:15, color:"#e4d6bf", margin:"14px 0 0"}}>
                Covers all three:
              </div>
              <ul style={{fontSize:15.5, color:"#e4d6bf", margin:"8px 0 0", paddingLeft:18}}>
                <li style={{marginBottom:6}}>The stock board — kept live and backed up</li>
                <li style={{marginBottom:6}}>The phone system — running and tuned</li>
                <li>Google standing — so customers keep finding you</li>
              </ul>
            </div>
          </div>

          <div style={{marginTop:28, textAlign:"center"}}>
            <a className="btn btn-steel" href={`tel:${CLIENT.gregPhone.replace(/[^0-9]/g,"")}`} style={{fontSize:17, padding:"16px 40px"}}>
              Let's Do It — Call Greg · {CLIENT.gregPhone}
            </a>
            <div style={{fontSize:14, color:"#6a5a42", marginTop:12}}>
              Or just tell me at the yard. When you say go, I go.
            </div>
          </div>
        </div>
      </section>

      {/* ============ CLOSING ============ */}
      <section className="wrap" style={{padding:"50px 22px 20px", textAlign:"center"}}>
        <div style={{maxWidth:640, margin:"0 auto"}}>
          <div className="eyebrow" style={{textAlign:"center"}}>One Last Thing</div>
          <h2 className="pf" style={{fontSize:30, color:C.bark, fontWeight:700, margin:"10px 0 16px"}}>
            You already know how I work.
          </h2>
          <p style={{fontSize:18, color:"#4a3a28", marginBottom:14}}>
            Ten years I've kept your computers running. If I tell you this'll happen, it happens — and it'll be done
            the way I'd do it for my own shop. No template, no runaround, no call center. Just me, and it'll be
            right.
          </p>
          <p style={{fontSize:17, color:"#5a4a36"}}>
            Take a look at your live stock board below. That's not a picture — it's the real thing, working.
          </p>
          <div style={{marginTop:24}}>
            <a className="btn btn-gold" href={CLIENT.demoUrl} style={{fontSize:17, padding:"16px 40px"}}>Open Your Live Stock Board</a>
          </div>
        </div>
      </section>

      {/* footer */}
      <footer style={{background:C.bark, color:C.plank, padding:"30px 0", marginTop:36, textAlign:"center", fontSize:13.5}}>
        <div className="wrap">
          <div className="pf" style={{fontSize:18, color:C.sawdust, marginBottom:6}}>GNL Digital Group</div>
          <div>Prepared for {CLIENT.name} · {CLIENT.town} · {CLIENT.phone}</div>
          <div style={{marginTop:8, opacity:.7}}>Web · Inventory systems · Business phones · Local · Concord, NC</div>
        </div>
      </footer>
    </div>
  );
}
