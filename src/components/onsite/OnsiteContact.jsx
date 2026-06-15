import { useState } from 'react';
import { base44 } from '@/api/base44Client';

const SectionTag = ({ children }) => (
  <div style={{
    display: 'inline-block',
    background: '#fff', color: '#002868',
    border: '2.5px solid #e8521a',
    borderRadius: 10, padding: '10px 20px',
    fontFamily: "'Oswald', sans-serif",
    fontSize: 15, fontWeight: 700,
    letterSpacing: 1, textTransform: 'uppercase',
    marginBottom: 18,
    boxShadow: '0 4px 16px rgba(232,82,26,0.12)',
  }}>
    {children}
  </div>
);

const inputStyle = {
  width: '100%',
  padding: '12px 16px',
  border: '2px solid #e2e7ef',
  borderRadius: 8,
  fontSize: 15,
  fontFamily: "'Source Sans 3', sans-serif",
  color: '#1a1a2e',
  background: '#fff',
  outline: 'none',
  transition: 'border-color 0.2s',
  boxSizing: 'border-box',
};

const INFO_ITEMS = [
  {
    icon: '☎',
    iconColor: '#002868',
    label: 'Call or Text',
    value: <a href="tel:9802360810" style={{ color: '#1a1a2e', textDecoration: 'none', fontWeight: 600, fontSize: 15 }}>980-236-0810</a>,
    sub: 'We answer calls and texts',
  },
  {
    icon: '✉️',
    label: 'Email',
    value: <a href="mailto:greg@onsitecomputerstore.com" style={{ color: '#1a1a2e', textDecoration: 'none', fontWeight: 600, fontSize: 15 }}>greg@onsitecomputerstore.com</a>,
    sub: '',
  },
  {
    icon: '📍',
    label: 'Our Location',
    value: <a href="https://www.google.com/maps/dir//53+Cabarrus+Ave+W,+Concord,+NC+28025" target="_blank" rel="noreferrer" style={{ color: '#1a1a2e', textDecoration: 'none', fontWeight: 600, fontSize: 15 }}>53 Cabarrus Ave West, Concord NC 28025</a>,
    sub: 'Serving Concord and surrounding areas',
  },
  {
    icon: '🕐',
    label: 'Business Hours',
    value: <span style={{ fontWeight: 600, fontSize: 15 }}>Mon – Fri: 10:00 AM – 6:00 PM</span>,
    sub: 'Saturday: By Appointment · Sunday: Closed',
  },
];

export default function OnsiteContact() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', service: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email) return;
    setLoading(true);
    try {
      await base44.entities.ContactSubmission.create({
        firm_name: 'On-Site Computer Service Inquiry',
        contact_name: form.name,
        email: form.email,
        phone: form.phone,
        service_interest: form.service,
        growth_goal: form.message,
        status: 'new',
      });
      setSuccess(true);
      setForm({ name: '', phone: '', email: '', service: '', message: '' });
    } catch (err) {
      console.error(err);
    }
    setLoading(false);
  };

  return (
    <section id="contact-section" style={{ background: '#fff', padding: '80px 24px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', textAlign: 'center' }}>
        <SectionTag>Get In Touch</SectionTag>
        <h2 style={{
          fontFamily: "'Oswald', sans-serif",
          fontSize: 'clamp(26px, 4vw, 42px)',
          fontWeight: 700, color: '#002868',
          marginBottom: 14, lineHeight: 1.2,
        }}>Contact Us</h2>
        <p style={{ fontSize: 17, color: '#4a5568', maxWidth: 540, lineHeight: 1.7, margin: '0 auto 48px' }}>
          Have a question or need computer help? We're here for you.
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 40,
          textAlign: 'left',
          maxWidth: 960,
          margin: '0 auto',
        }}
          className="contact-grid"
        >
          {/* Form */}
          <div style={{
            background: '#f4f6f9',
            borderRadius: 16, padding: '40px 36px',
          }}>
            <h3 style={{
              fontFamily: "'Oswald', sans-serif",
              fontSize: 24, color: '#002868',
              marginBottom: 24, textAlign: 'center',
            }}>Send Us a Message</h3>

            {success ? (
              <div style={{
                background: '#e8f5e9', border: '2px solid #4caf50',
                borderRadius: 12, padding: '28px 24px', textAlign: 'center',
              }}>
                <div style={{ fontSize: 48, marginBottom: 12 }}>✅</div>
                <div style={{
                  fontFamily: "'Oswald', sans-serif",
                  fontSize: 22, color: '#002868', fontWeight: 700, marginBottom: 8,
                }}>Message Sent!</div>
                <p style={{ color: '#4a5568', fontSize: 15 }}>
                  Thanks! We'll get back to you as soon as possible.
                </p>
                <button
                  onClick={() => setSuccess(false)}
                  style={{
                    marginTop: 18,
                    background: '#002868', color: '#fff',
                    border: 'none', borderRadius: 8,
                    padding: '10px 24px',
                    fontFamily: "'Oswald', sans-serif",
                    fontSize: 15, fontWeight: 600, cursor: 'pointer',
                  }}
                >
                  Send Another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                {[
                  { label: 'Your Name *', name: 'name', type: 'text', placeholder: 'John Smith', required: true },
                  { label: 'Phone Number', name: 'phone', type: 'tel', placeholder: '(704) 555-0000' },
                  { label: 'Email Address *', name: 'email', type: 'email', placeholder: 'you@email.com', required: true },
                ].map(field => (
                  <div key={field.name} style={{ marginBottom: 16 }}>
                    <label style={{ display: 'block', fontSize: 12, fontWeight: 700, color: '#002868', letterSpacing: 0.5, textTransform: 'uppercase', marginBottom: 6 }}>
                      {field.label}
                    </label>
                    <input
                      type={field.type}
                      name={field.name}
                      value={form[field.name]}
                      onChange={handleChange}
                      placeholder={field.placeholder}
                      required={field.required}
                      style={inputStyle}
                      onFocus={e => { e.target.style.borderColor = '#e8521a'; }}
                      onBlur={e => { e.target.style.borderColor = '#e2e7ef'; }}
                    />
                  </div>
                ))}

                <div style={{ marginBottom: 16 }}>
                  <label style={{ display: 'block', fontSize: 12, fontWeight: 700, color: '#002868', letterSpacing: 0.5, textTransform: 'uppercase', marginBottom: 6 }}>
                    Service Needed
                  </label>
                  <select
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    style={{ ...inputStyle, cursor: 'pointer' }}
                    onFocus={e => { e.target.style.borderColor = '#e8521a'; }}
                    onBlur={e => { e.target.style.borderColor = '#e2e7ef'; }}
                  >
                    <option value="">Select a service...</option>
                    <option>Computer &amp; Gaming PC Repair</option>
                    <option>Virus &amp; Malware Removal</option>
                    <option>Data Recovery &amp; Backup</option>
                    <option>Hardware Installation &amp; Upgrades</option>
                    <option>Laptop Repair</option>
                    <option>Network Setup &amp; Support</option>
                    <option>Other</option>
                  </select>
                </div>

                <div style={{ marginBottom: 18 }}>
                  <label style={{ display: 'block', fontSize: 12, fontWeight: 700, color: '#002868', letterSpacing: 0.5, textTransform: 'uppercase', marginBottom: 6 }}>
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Describe your computer issue..."
                    rows={4}
                    style={{ ...inputStyle, resize: 'vertical', minHeight: 110 }}
                    onFocus={e => { e.target.style.borderColor = '#e8521a'; }}
                    onBlur={e => { e.target.style.borderColor = '#e2e7ef'; }}
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  style={{
                    width: '100%',
                    background: loading ? '#aaa' : '#e8521a',
                    color: '#fff',
                    border: 'none',
                    borderRadius: 8,
                    padding: '16px',
                    fontFamily: "'Oswald', sans-serif",
                    fontSize: 18, fontWeight: 600,
                    letterSpacing: 0.5,
                    cursor: loading ? 'not-allowed' : 'pointer',
                    transition: 'all 0.2s',
                  }}
                  onMouseEnter={e => { if (!loading) e.currentTarget.style.background = '#ff6b35'; }}
                  onMouseLeave={e => { if (!loading) e.currentTarget.style.background = '#e8521a'; }}
                >
                  {loading ? 'Sending...' : 'Send Message →'}
                </button>
              </form>
            )}
          </div>

          {/* Contact Info */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            {INFO_ITEMS.map((item, i) => (
              <div
                key={i}
                style={{
                  display: 'flex', gap: 16, alignItems: 'flex-start',
                  padding: '20px 0',
                  borderBottom: i < INFO_ITEMS.length - 1 ? '1px solid #e2e7ef' : 'none',
                }}
              >
                <div style={{
                  width: 44, height: 44, flexShrink: 0,
                  background: 'rgba(232,82,26,0.1)',
                  borderRadius: 10,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 20,
                  color: item.iconColor || 'inherit',
                }}>
                  {item.icon}
                </div>
                <div>
                  <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 1, textTransform: 'uppercase', color: '#e8521a', marginBottom: 3 }}>
                    {item.label}
                  </div>
                  <div>{item.value}</div>
                  {item.sub && <div style={{ fontSize: 13, color: '#4a5568', marginTop: 2 }}>{item.sub}</div>}
                </div>
              </div>
            ))}

            {/* Quick Call CTA */}
            <a
              href="tel:9802360810"
              style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10,
                background: '#002868', color: '#fff',
                borderRadius: 14, padding: '18px 28px',
                fontFamily: "'Oswald', sans-serif",
                fontSize: 20, fontWeight: 700,
                textDecoration: 'none',
                marginTop: 24,
                boxShadow: '0 8px 28px rgba(0,40,104,0.22)',
                transition: 'all 0.2s',
                letterSpacing: 0.5,
              }}
              onMouseEnter={e => { e.currentTarget.style.background = '#003580'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
              onMouseLeave={e => { e.currentTarget.style.background = '#002868'; e.currentTarget.style.transform = 'none'; }}
            >
              ☎ Call Now: 980-236-0810
            </a>
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; gap: 28px !important; }
        }
      `}</style>
    </section>
  );
}