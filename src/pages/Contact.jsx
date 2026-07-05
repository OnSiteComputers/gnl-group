// Contact — build: 2026-07-05 v1
import { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, CheckCircle, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

console.log("Contact build: 2026-07-05 v1 ✅");

const PRACTICE_AREAS = ['Personal Injury', 'Criminal Defense', 'Family Law', 'Immigration', 'Estate Planning', 'Business Law', 'Real Estate', 'Employment Law', 'Other'];
const SERVICES_INTEREST = ['Local SEO Strategy', 'Local Map Pack', 'Content Authority', 'Reputation Management', 'Performance Analytics', 'Website Optimization', 'All-In-One Web Package', 'Other'];

const inp = {
  width: '100%', background: 'rgba(255,255,255,.05)', border: '1px solid rgba(255,255,255,.15)',
  color: '#fff', padding: '12px 14px', fontSize: 14, borderRadius: 4, outline: 'none', fontFamily: "'Inter',sans-serif",
};
const lbl = { display: 'block', color: '#aaa', fontSize: 11, fontWeight: 700, letterSpacing: '.16em', textTransform: 'uppercase', marginBottom: 8 };
const sel = { ...inp, cursor: 'pointer', appearance: 'none', WebkitAppearance: 'none' };

export default function Contact() {
  const [form, setForm] = useState({ firm_name: '', contact_name: '', email: '', phone: '', practice_area: '', service_interest: '', growth_goal: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => { window.scrollTo({ top: 0, behavior: 'smooth' }); }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch('https://formspree.io/f/mojorlpr', {
        method: 'POST',
        headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firm_name: form.firm_name,
          contact_name: form.contact_name,
          email: form.email,
          phone: form.phone,
          practice_area: form.practice_area,
          service_interest: form.service_interest,
          growth_goal: form.growth_goal,
          _subject: `GNL strategy session request — ${form.firm_name || form.contact_name}`,
        }),
      });
      if (res.ok) {
        setSubmitted(true);
      } else {
        console.error('Submission error:', await res.text());
      }
    } catch (error) {
      console.error('Submission error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ background: '#080808', color: '#fff', fontFamily: "'Inter',sans-serif", minHeight: '100vh' }}>
      <Navbar />

      <section style={{ padding: '130px 24px 80px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(320px,1fr))', gap: 64, alignItems: 'start' }}>

            {/* Left — Info */}
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 20 }}>
                <div style={{ height: 1, width: 48, background: '#D4A84B' }} />
                <span style={{ color: '#D4A84B', fontSize: 11, fontWeight: 700, letterSpacing: '.2em', textTransform: 'uppercase' }}>Consultation Portal</span>
              </div>
              <h1 style={{ fontFamily: "'Playfair Display',serif", fontSize: 'clamp(32px,5vw,56px)', fontWeight: 800, color: '#fff', lineHeight: 1.1, marginBottom: 24 }}>
                Let's Build Your<br />Digital Authority
              </h1>
              <p style={{ color: '#ccc', fontSize: 17, lineHeight: 1.8, marginBottom: 48 }}>
                Schedule a complimentary strategy session. We'll analyze your firm's current digital presence and outline a roadmap to dominate search results in your practice area.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
                {[
                  { href: 'tel:+17045945826', icon: Phone, label: 'Call Us', value: '(704) 594-5826' },
                  { href: 'mailto:linda@gnldigitalgroup.com', icon: Mail, label: 'Email', value: 'linda@gnldigitalgroup.com' },
                  { href: 'https://www.google.com/maps/dir//53+Cabarrus+Ave+West,+Concord,+NC+28025', icon: MapPin, label: 'Location', value: '53 Cabarrus Ave West, Concord, NC 28025', external: true },
                ].map(({ href, icon: Icon, label, value, external }) => (
                  <a key={label} href={href} target={external ? '_blank' : undefined} rel={external ? 'noopener noreferrer' : undefined}
                    style={{ display: 'flex', alignItems: 'center', gap: 16, textDecoration: 'none' }}>
                    <div style={{ width: 48, height: 48, background: 'rgba(212,168,75,.1)', border: '1px solid rgba(212,168,75,.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <Icon size={20} style={{ color: '#D4A84B' }} />
                    </div>
                    <div>
                      <div style={{ color: '#888', fontSize: 11, fontWeight: 700, letterSpacing: '.14em', textTransform: 'uppercase', marginBottom: 2 }}>{label}</div>
                      <div style={{ color: '#fff', fontSize: 15 }}>{value}</div>
                    </div>
                  </a>
                ))}
              </div>
            </motion.div>

            {/* Right — Form */}
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
              style={{ background: 'linear-gradient(145deg,#111,#0D0D0D)', border: '1px solid rgba(212,168,75,.2)', padding: '40px 36px', borderRadius: 4 }}>
              {submitted ? (
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '48px 0' }}>
                  <CheckCircle size={64} style={{ color: '#D4A84B', marginBottom: 24 }} />
                  <h3 style={{ fontFamily: "'Playfair Display',serif", fontSize: 26, color: '#fff', fontWeight: 700, marginBottom: 12 }}>Strategy Session Requested</h3>
                  <p style={{ color: '#ccc', fontSize: 15, lineHeight: 1.75 }}>We'll be in touch within 24 hours to schedule your complimentary consultation.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                  <div>
                    <h3 style={{ fontFamily: "'Playfair Display',serif", fontSize: 26, color: '#fff', fontWeight: 700, marginBottom: 6 }}>Request Strategy Session</h3>
                    <p style={{ color: '#888', fontSize: 13 }}>All fields marked with * are required.</p>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                    <div>
                      <label style={lbl}>Firm Name *</label>
                      <input required style={inp} value={form.firm_name} onChange={e => setForm({ ...form, firm_name: e.target.value })} placeholder="Smith & Associates" />
                    </div>
                    <div>
                      <label style={lbl}>Your Name *</label>
                      <input required style={inp} value={form.contact_name} onChange={e => setForm({ ...form, contact_name: e.target.value })} placeholder="John Smith" />
                    </div>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                    <div>
                      <label style={lbl}>Email *</label>
                      <input required type="email" style={inp} value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} placeholder="john@firm.com" />
                    </div>
                    <div>
                      <label style={lbl}>Phone</label>
                      <input style={inp} value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} placeholder="(704) 555-1234" />
                    </div>
                  </div>

                  <div>
                    <label style={lbl}>Practice Area *</label>
                    <select required style={sel} value={form.practice_area} onChange={e => setForm({ ...form, practice_area: e.target.value })}>
                      <option value="" style={{ background: '#111' }}>Select practice area</option>
                      {PRACTICE_AREAS.map(a => <option key={a} value={a} style={{ background: '#111' }}>{a}</option>)}
                    </select>
                  </div>

                  <div>
                    <label style={lbl}>Service Interest</label>
                    <select style={sel} value={form.service_interest} onChange={e => setForm({ ...form, service_interest: e.target.value })}>
                      <option value="" style={{ background: '#111' }}>What are you most interested in?</option>
                      {SERVICES_INTEREST.map(s => <option key={s} value={s} style={{ background: '#111' }}>{s}</option>)}
                    </select>
                  </div>

                  <div>
                    <label style={lbl}>Growth Goal</label>
                    <textarea style={{ ...inp, minHeight: 100, resize: 'vertical' }} value={form.growth_goal} onChange={e => setForm({ ...form, growth_goal: e.target.value })} placeholder="What does growth look like for your firm? More consultations? Specific practice areas?" />
                  </div>

                  <button type="submit" disabled={loading} style={{
                    borderRadius: 8, background: loading ? '#888' : 'linear-gradient(135deg,#C49A30,#F0C860,#C49A30)', backgroundSize: '250% auto',
                    color: '#080808', fontWeight: 800, letterSpacing: '.1em', padding: '16px', border: 'none', cursor: loading ? 'not-allowed' : 'pointer',
                    fontSize: 13, textTransform: 'uppercase', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
                  }}>
                    {loading ? 'Submitting...' : (<>Request Strategy Session <ArrowRight size={16} /></>)}
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Location */}
      <section style={{ padding: '80px 24px', background: '#0B0B0B', borderTop: '1px solid #161616' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 14, marginBottom: 16 }}>
              <div style={{ width: 40, height: 1, background: '#D4A84B' }} />
              <span style={{ color: '#D4A84B', fontSize: 11, fontWeight: 700, letterSpacing: '.2em', textTransform: 'uppercase' }}>Find Us</span>
              <div style={{ width: 40, height: 1, background: '#D4A84B' }} />
            </div>
            <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: 'clamp(28px,4vw,48px)', fontWeight: 800, color: '#fff', margin: 0 }}>Visit the Lab</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(320px,1fr))', gap: 40, alignItems: 'start' }}>
            <div style={{ border: '1px solid #222', overflow: 'hidden', borderRadius: 4 }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3254.5!2d-80.6399!3d35.3938!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8854b0c7e5a6e5a1%3A0x1234567890!2s53+Cabarrus+Ave+W%2C+Concord%2C+NC+28025!5e0!3m2!1sen!2sus!4v1700000000"
                width="100%" height="340" style={{ border: 0, display: 'block' }} allowFullScreen loading="lazy" title="GNL Digital Group Location"
              />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              {[
                { icon: MapPin, label: 'Address', value: '53 Cabarrus Ave West, Concord, NC 28025' },
                { icon: Phone, label: 'Phone', value: '(704) 594-5826', href: 'tel:+17045945826' },
                { icon: Mail, label: 'Email', value: 'linda@gnldigitalgroup.com', href: 'mailto:linda@gnldigitalgroup.com' },
              ].map(({ icon: Icon, label, value, href }) => (
                <div key={label} style={{ display: 'flex', alignItems: 'flex-start', gap: 16 }}>
                  <div style={{ width: 40, height: 40, background: 'rgba(212,168,75,.1)', border: '1px solid rgba(212,168,75,.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Icon size={16} style={{ color: '#D4A84B' }} />
                  </div>
                  <div>
                    <p style={{ color: '#D4A84B', fontWeight: 700, fontSize: 13, marginBottom: 2 }}>{label}</p>
                    {href
                      ? <a href={href} style={{ color: '#ccc', fontSize: 14, textDecoration: 'none' }}>{value}</a>
                      : <p style={{ color: '#ccc', fontSize: 14, margin: 0 }}>{value}</p>
                    }
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}