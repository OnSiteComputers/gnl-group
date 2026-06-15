const WHY_ITEMS = [
  {
    icon: '🔬',
    title: 'Expert Diagnosis',
    desc: 'We find the real problem and fix it right the first time. No guesswork, no unnecessary charges.',
  },
  {
    icon: '💻',
    title: 'All Types of Computers',
    desc: 'Desktops, laptops, custom gaming PCs, workstations, and Apple products — we service them all.',
  },
  {
    icon: '⚙️',
    title: 'Hardware & Software',
    desc: 'From hardware upgrades and SSD installs to virus removal and OS optimization — covered.',
  },
  {
    icon: '🏘️',
    title: 'Home or Business',
    desc: 'We come to you or you visit our Concord store — flexible options that fit your schedule.',
  },
];

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

export default function OnsiteWhyUs() {
  return (
    <section id="why" style={{ background: '#f4f6f9', padding: '80px 24px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', textAlign: 'center' }}>
        <SectionTag>Why Choose Us</SectionTag>
        <h2 style={{
          fontFamily: "'Oswald', sans-serif",
          fontSize: 'clamp(28px, 4vw, 42px)',
          fontWeight: 700, color: '#002868',
          marginBottom: 14, lineHeight: 1.2,
        }}>Why Trust Us</h2>
        <p style={{
          fontSize: 17, color: '#4a5568',
          maxWidth: 660, lineHeight: 1.7,
          margin: '0 auto 48px',
        }}>
          We don't just fix computers — we find the real problem and fix it right the first time.
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: 22,
        }}
          className="why-grid"
        >
          {WHY_ITEMS.map((item, i) => (
            <div
              key={i}
              style={{
                background: '#fff',
                borderRadius: 12,
                borderTop: '4px solid #e8521a',
                padding: '32px 22px',
                boxShadow: '0 2px 16px rgba(0,0,0,0.06)',
                transition: 'transform 0.2s, box-shadow 0.2s',
                cursor: 'default',
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 10px 32px rgba(0,0,0,0.12)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = '0 2px 16px rgba(0,0,0,0.06)'; }}
            >
              <div style={{ fontSize: 38, marginBottom: 16 }}>{item.icon}</div>
              <h3 style={{
                fontFamily: "'Oswald', sans-serif",
                fontSize: 20, fontWeight: 600,
                color: '#002868', marginBottom: 10,
              }}>{item.title}</h3>
              <p style={{ fontSize: 15, color: '#4a5568', lineHeight: 1.6 }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 900px) { .why-grid { grid-template-columns: repeat(2, 1fr) !important; } }
        @media (max-width: 500px) { .why-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}