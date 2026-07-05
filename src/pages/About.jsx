// About — build: 2026-07-05 v1
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Phone, Award, Users, Target, ArrowRight } from 'lucide-react';
import GNLNavbar from '../components/GNLNavbar';
import Footer from '../components/Footer';

console.log("About build: 2026-07-05 v1 ✅");

const VALUES = [
  { icon: Award, title: "Proven Expertise", desc: "25+ years in technology, 16 years serving the same community. We're not going anywhere." },
  { icon: Users, title: "Personal Service", desc: "You'll work directly with Greg and Linda — no account managers, no runaround." },
  { icon: Phone, title: "Always Available", desc: "Real people answer the phone. If you get voicemail, we'll call you back the same day." },
  { icon: Target, title: "Real Results", desc: "We focus on what matters: getting your firm found by people who need you most." },
];

const S = {
  page: { background: '#080808', color: '#fff', fontFamily: "'Inter',sans-serif", minHeight: '100vh' },
  hero: { background: 'linear-gradient(135deg,#0D0B06,#1C1607,#0D0B06)', padding: '152px 24px 80px', textAlign: 'center', borderBottom: '1px solid #1E1800' },
  sectionDark: { padding: '80px 24px', background: '#080808', borderBottom: '1px solid #161616' },
  sectionMid: { padding: '80px 24px', background: '#0B0B0B', borderBottom: '1px solid #161616' },
  inner: { maxWidth: 1100, margin: '0 auto' },
  inner3: { maxWidth: 900, margin: '0 auto' },
  label: { display: 'inline-flex', alignItems: 'center', gap: 14, marginBottom: 16 },
  bar: { width: 40, height: 1, background: '#D4A84B' },
  labelText: { color: '#D4A84B', fontSize: 11, fontWeight: 700, letterSpacing: '.2em', textTransform: 'uppercase' },
  h2: { fontFamily: "'Playfair Display',serif", fontSize: 'clamp(28px,4vw,52px)', fontWeight: 800, color: '#fff', margin: 0 },
  h1: { fontFamily: "'Playfair Display',serif", fontSize: 'clamp(36px,5.5vw,72px)', fontWeight: 800, color: '#fff', lineHeight: 1.08, margin: '16px 0 12px' },
  body: { color: '#ccc', lineHeight: 1.88, fontSize: 16 },
  card: { background: 'linear-gradient(145deg,#111,#0D0D0D)', border: '1px solid #1E1E1E', padding: '28px', borderRadius: 4 },
};

export default function About() {
  return (
    <div style={S.page}>
      <GNLNavbar />

      {/* Hero */}
      <section style={S.hero}>
        <div style={{ ...S.inner3, textAlign: 'center' }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, border: '1px solid rgba(212,168,75,.4)', background: 'rgba(212,168,75,.06)', color: '#D4A84B', padding: '9px 22px', fontSize: 11, fontWeight: 700, letterSpacing: '.16em', textTransform: 'uppercase', marginBottom: 24 }}>
              <div style={{ width: 6, height: 6, background: '#D4A84B', borderRadius: '50%' }} />
              Our Story
            </div>
            <h1 style={S.h1}>GNL Digital Group</h1>
            <p style={{ color: '#ccc', fontSize: 20, fontStyle: 'italic', fontFamily: "'Playfair Display',serif" }}>
              Greg &amp; Linda — Helping Charlotte-Area Businesses Dominate Search Results
            </p>
          </motion.div>
        </div>
      </section>

      {/* Origin Story */}
      <section style={S.sectionDark}>
        <div style={{ ...S.inner3, textAlign: 'center' }}>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div style={{ ...S.label, justifyContent: 'center' }}>
              <div style={S.bar} /><span style={S.labelText}>How It Started</span><div style={S.bar} />
            </div>
            <h2 style={{ ...S.h2, marginBottom: 36 }}>How GNL Started</h2>
            <div style={{ textAlign: 'left', maxWidth: 720, margin: '0 auto' }}>
              {[
                "It all happened on a Saturday morning in a mall parking lot. Greg was delivering an iMac back to a lawyer customer — someone who'd been trusting On-Site Computer Service for years.",
                "Greg mentioned he'd just redesigned his own website. The attorney replied that he'd been paying a big marketing agency to manage his website and SEO — and wasn't happy with the results. Then the lawyer asked Greg, \"What do you know about SEO?\"",
                "Greg's response was simple: \"I've been in business for 25+ years and have 170+ 5-star Google reviews. What does that tell you?\"",
                null, // special paragraph
                null, // special paragraph 2
              ].filter((_, idx) => idx < 3).map((text, idx) => (
                <p key={idx} style={{ ...S.body, marginBottom: 20 }}>{text}</p>
              ))}
              <p style={{ ...S.body, marginBottom: 20 }}>
                After taking a look at what the attorney was getting, Greg realized the agency wasn't delivering results. That moment sparked something: <strong style={{ color: '#D4A84B' }}>local businesses were being underserved</strong> by big marketing agencies.
              </p>
              <p style={{ ...S.body, marginBottom: 0 }}>
                GNL Digital Group was born from that conversation. Greg and Linda decided to offer what those agencies don't: <strong style={{ color: '#D4A84B' }}>personalized service, real expertise, and honest pricing</strong> — right here in the Charlotte area.
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))', gap: 20, textAlign: 'left', marginTop: 48 }}>
              {[
                { title: "Specialized Focus", desc: "We focus on local businesses in the Charlotte area because that's where we can make the biggest impact." },
                { title: "Local Partnership", desc: "We're not a faceless agency. We're your neighbors in Concord, invested in your success." },
                { title: "Honest Pricing", desc: "Just real results at fair prices." },
              ].map((item) => (
                <div key={item.title} style={{ borderLeft: '2px solid #D4A84B', paddingLeft: 20 }}>
                  <h4 style={{ fontFamily: "'Playfair Display',serif", fontWeight: 700, color: '#fff', marginBottom: 8, fontSize: 16 }}>{item.title}</h4>
                  <p style={{ color: '#ccc', fontSize: 14, margin: 0, lineHeight: 1.7 }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Meet Greg & Linda */}
      <section style={S.sectionMid}>
        <div style={S.inner}>
          <motion.div style={{ textAlign: 'center', marginBottom: 48 }} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div style={{ ...S.label, justifyContent: 'center' }}>
              <div style={S.bar} /><span style={S.labelText}>The Team</span><div style={S.bar} />
            </div>
            <h2 style={{ ...S.h2, marginTop: 4 }}>Meet Greg &amp; Linda</h2>
            <p style={{ color: '#ccc', marginTop: 12, fontSize: 16 }}>25+ years of technology expertise, now focused on helping Charlotte-area businesses grow.</p>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: 24 }}>
            {[
              {
                letter: 'G', name: 'Greg', role: 'Co-Founder & Technical Director', bg: 'linear-gradient(135deg,#C49A30,#F0C860)',
                paras: [
                  <><strong style={{ color: '#D4A84B' }}>26 years</strong> in the computer industry, with a storefront location in Concord for 16 years.</>,
                  'Graduated from DeVry Institute of Technology in 1985 with a degree in Computer Information Systems.',
                  'Originally from Toledo, Ohio, Greg has called North Carolina home for decades and is committed to serving the local business community.',
                ]
              },
              {
                letter: 'L', name: 'Linda', role: 'Co-Founder & Client Relations', bg: 'linear-gradient(135deg,#C49A30,#F0C860)',
                paras: [
                  <><strong style={{ color: '#D4A84B' }}>25+ years</strong> as a veterinary surgery technician, bringing meticulous attention to detail and compassionate client care.</>,
                  "Holds a Bachelor's degree from Eastern Illinois University in the Veterinary field.",
                  'Now leading client communications, Google Business Profile optimization, and helping satisfied clients share their success through reviews.',
                ]
              }
            ].map((person) => (
              <motion.div key={person.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={S.card}>
                <div style={{ width: 56, height: 56, background: person.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16, borderRadius: 2 }}>
                  <span style={{ fontFamily: "'Playfair Display',serif", fontWeight: 700, fontSize: 28, color: '#080808' }}>{person.letter}</span>
                </div>
                <h3 style={{ fontFamily: "'Playfair Display',serif", fontSize: 24, fontWeight: 700, color: '#fff', marginBottom: 4 }}>{person.name}</h3>
                <p style={{ color: '#D4A84B', fontSize: 13, fontWeight: 600, marginBottom: 16 }}>{person.role}</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                  {person.paras.map((p, i) => <p key={i} style={{ color: '#ccc', fontSize: 14, lineHeight: 1.75, margin: 0 }}>{p}</p>)}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section style={S.sectionDark}>
        <div style={S.inner}>
          <motion.div style={{ textAlign: 'center', marginBottom: 48 }} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div style={{ ...S.label, justifyContent: 'center' }}>
              <div style={S.bar} /><span style={S.labelText}>Our Values</span><div style={S.bar} />
            </div>
            <h2 style={{ ...S.h2, marginTop: 4 }}>What Makes Us Different</h2>
            <p style={{ color: '#ccc', marginTop: 12, fontSize: 16 }}>What makes GNL Digital Group different from the big agencies.</p>
          </motion.div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: 20 }}>
            {VALUES.map((item, idx) => (
              <motion.div key={item.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }}
                style={{ display: 'flex', gap: 16, ...S.card }}>
                <div style={{ width: 44, height: 44, background: 'rgba(212,168,75,.1)', border: '1px solid rgba(212,168,75,.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <item.icon size={18} style={{ color: '#D4A84B' }} />
                </div>
                <div>
                  <h3 style={{ fontFamily: "'Playfair Display',serif", fontWeight: 700, color: '#fff', marginBottom: 8, fontSize: 16 }}>{item.title}</h3>
                  <p style={{ color: '#ccc', fontSize: 14, lineHeight: 1.75, margin: 0 }}>{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '100px 24px', background: 'linear-gradient(135deg,#0D0B06,#1C1607,#0D0B06)', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 1, background: 'linear-gradient(90deg,transparent,rgba(212,168,75,.4),transparent)' }} />
        <div style={{ maxWidth: 680, margin: '0 auto', position: 'relative', zIndex: 10 }}>
          <h2 style={{ ...S.h2, marginBottom: 20 }}>Ready to Grow Your Business?</h2>
          <p style={{ color: '#ccc', marginBottom: 40, fontSize: 16, lineHeight: 1.75 }}>Let's talk about how we can help your business dominate search results in your local market.</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16, justifyContent: 'center' }}>
            <Link to="/contact" style={{ borderRadius: 8, background: 'linear-gradient(135deg,#C49A30,#F0C860,#C49A30)', backgroundSize: '250% auto', color: '#080808', fontWeight: 800, letterSpacing: '.08em', padding: '15px 36px', border: 'none', cursor: 'pointer', fontSize: 13, textTransform: 'uppercase', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 9 }}>
              Schedule Free Strategy Session <ArrowRight size={16} />
            </Link>
            <a href="tel:+17045945826" style={{ borderRadius: 8, background: 'transparent', color: '#fff', fontWeight: 700, letterSpacing: '.08em', padding: '14px 35px', border: '1px solid rgba(255,255,255,.3)', cursor: 'pointer', fontSize: 13, textTransform: 'uppercase', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 9 }}>
              <Phone size={16} />(704) 594-5826
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}