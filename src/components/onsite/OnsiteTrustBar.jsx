const TRUST_ITEMS = [
  { icon: '🏆', text: '170+ Five-Star Reviews' },
  { icon: '⚡', text: '24–48 Hour Turnaround' },
  { icon: '🏠', text: 'On-Site & In-Store Service' },
  { icon: '🛠️', text: '25+ Years Experience' },
];

export default function OnsiteTrustBar() {
  return (
    <section id="trust" style={{ background: '#f4f6f9', padding: '28px 20px' }}>
      <div style={{
        maxWidth: 1200, margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: 20,
      }}
        className="trust-grid"
      >
        {TRUST_ITEMS.map((item, i) => (
          <div
            key={i}
            style={{
              background: '#fff',
              borderRadius: 12,
              borderTop: '4px solid #e8521a',
              padding: '22px 18px',
              display: 'flex', alignItems: 'center', gap: 14,
              boxShadow: '0 2px 16px rgba(0,0,0,0.06)',
              transition: 'transform 0.2s, box-shadow 0.2s',
              cursor: 'default',
            }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 8px 28px rgba(0,0,0,0.11)'; }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = '0 2px 16px rgba(0,0,0,0.06)'; }}
          >
            <span style={{ fontSize: 28, lineHeight: 1 }}>{item.icon}</span>
            <span style={{
              fontFamily: "'Oswald', sans-serif",
              fontSize: 18, fontWeight: 600, color: '#002868', lineHeight: 1.3,
            }}>{item.text}</span>
          </div>
        ))}
      </div>
      <style>{`
        @media (max-width: 900px) { .trust-grid { grid-template-columns: repeat(2, 1fr) !important; } }
        @media (max-width: 480px) { .trust-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}