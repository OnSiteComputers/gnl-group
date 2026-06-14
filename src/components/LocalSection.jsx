import { MapPin, Phone, Mail, Clock, Navigation } from 'lucide-react';
import { motion } from 'framer-motion';

const INFO = {
  address: '53 Cabarrus Ave West, Concord, NC 28025',
  phone: '(704) 594-5826',
  phoneHref: 'tel:+17045945826',
  email: 'linda@gnldigitalgroup.com',
  directionsUrl: 'https://www.google.com/maps?q=53+Cabarrus+Ave+West,+Concord,+NC+28025',
  hours: 'Mon–Fri: 10AM–6PM | Sat–Sun: Closed',
};

const rows = [
  { icon: MapPin, label: 'Address', value: INFO.address },
  { icon: Phone, label: 'Phone', value: INFO.phone, href: INFO.phoneHref },
  { icon: Mail, label: 'Email', value: INFO.email, href: `mailto:${INFO.email}` },
  { icon: Clock, label: 'Hours', value: INFO.hours },
];

export default function LocalSection() {
  return (
    <section style={{ padding: '80px 24px', background: '#0B0B0B', borderTop: '1px solid #161616', borderBottom: '1px solid #161616' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <motion.div style={{ textAlign: 'center', marginBottom: 48 }} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 14, marginBottom: 16 }}>
            <div style={{ width: 40, height: 1, background: '#D4A84B' }} />
            <span style={{ color: '#D4A84B', fontSize: 11, fontWeight: 700, letterSpacing: '.2em', textTransform: 'uppercase' }}>Local Nexus</span>
            <div style={{ width: 40, height: 1, background: '#D4A84B' }} />
          </div>
          <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: 'clamp(28px,4vw,48px)', fontWeight: 800, color: '#fff', margin: 0 }}>Visit the Lab</h2>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(320px,1fr))', gap: 40, alignItems: 'start' }}>
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            style={{ border: '1px solid #222', overflow: 'hidden', borderRadius: 4 }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3254.5!2d-80.6399!3d35.3938!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8854b0c7e5a6e5a1%3A0x1234567890!2s53+Cabarrus+Ave+W%2C+Concord%2C+NC+28025!5e0!3m2!1sen!2sus!4v1700000000"
              width="100%" height="350" style={{ border: 0, display: 'block' }} allowFullScreen loading="lazy" title="GNL Digital Group Location"
            />
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            {rows.map(({ icon: Icon, label, value, href }) => (
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
            <a href={INFO.directionsUrl} target="_blank" rel="noopener noreferrer"
              style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 8, borderRadius: 8, background: 'linear-gradient(135deg,#C49A30,#F0C860,#C49A30)', backgroundSize: '250% auto', color: '#080808', fontWeight: 800, letterSpacing: '.08em', padding: '14px 24px', border: 'none', cursor: 'pointer', fontSize: 13, textTransform: 'uppercase', textDecoration: 'none', marginTop: 8 }}>
              <Navigation size={16} /> Get Directions
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}