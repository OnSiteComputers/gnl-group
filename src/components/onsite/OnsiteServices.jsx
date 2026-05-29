const SERVICES = [
  {
    icon: '🖥️',
    title: 'Computer & Gaming PC Repair',
    desc: 'We repair and troubleshoot both store-bought and custom-built gaming PCs. From crashes and overheating to performance issues and upgrades — we fix it right.',
  },
  {
    icon: '🛡️',
    title: 'Virus & Malware Removal',
    desc: 'Remove viruses, malware, spyware and other threats to keep your system safe, secure and running smoothly.',
  },
  {
    icon: '💾',
    title: 'Data Recovery & Backup',
    desc: "Recover lost or deleted data and set up secure backups to protect what matters most. We recover what others can't.",
  },
  {
    icon: '🔧',
    title: 'Hardware Installation & Upgrades',
    desc: 'Upgrade RAM, storage, graphics cards and more. We install and configure the right hardware for your needs.',
  },
  {
    icon: '💼',
    title: 'Laptop Repair',
    desc: 'Screen replacement, battery issues, keyboard problems, charging ports and more. We fix all major laptop brands.',
  },
  {
    icon: '📶',
    title: 'Network Setup & Support',
    desc: 'Wi-Fi setup, router configuration, printer setup and network troubleshooting for a fast, reliable connection.',
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

export default function OnsiteServices() {
  return (
    <section id="services-section" style={{ background: '#fff', padding: '80px 24px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', textAlign: 'center' }}>
        <SectionTag>What We Fix</SectionTag>
        <h2 style={{
          fontFamily: "'Oswald', sans-serif",
          fontSize: 'clamp(26px, 4vw, 42px)',
          fontWeight: 700, color: '#002868',
          marginBottom: 14, lineHeight: 1.2,
        }}>On-Site or In-Store Repairs Available</h2>
        <p style={{
          fontSize: 17, color: '#4a5568',
          maxWidth: 660, lineHeight: 1.7,
          margin: '0 auto 48px',
        }}>
          Whether you want us to come to you or prefer to drop your computer off,
          we make the process fast, easy, and stress-free.
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 24,
        }}
          className="services-grid"
        >
          {SERVICES.map((svc, i) => (
            <div
              key={i}
              style={{
                background: '#fff',
                borderRadius: 12,
                borderTop: '4px solid #e8521a',
                padding: '32px 28px',
                boxShadow: '0 2px 20px rgba(0,0,0,0.07)',
                transition: 'transform 0.2s, box-shadow 0.2s',
                cursor: 'default',
                textAlign: 'left',
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 10px 36px rgba(0,0,0,0.13)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = '0 2px 20px rgba(0,0,0,0.07)'; }}
            >
              <div style={{ fontSize: 34, marginBottom: 16, textAlign: 'center' }}>{svc.icon}</div>
              <h3 style={{
                fontFamily: "'Oswald', sans-serif",
                fontSize: 20, fontWeight: 600,
                color: '#002868', marginBottom: 10, textAlign: 'center',
              }}>{svc.title}</h3>
              <p style={{ fontSize: 15, color: '#4a5568', lineHeight: 1.6, textAlign: 'center' }}>{svc.desc}</p>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 900px) { .services-grid { grid-template-columns: repeat(2, 1fr) !important; } }
        @media (max-width: 600px) { .services-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}