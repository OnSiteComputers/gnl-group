const FOOTER_LINKS = [
  { label: 'Home', id: 'top' },
  { label: 'Why Us', id: 'trust' },
  { label: 'Services', id: 'services-section' },
  { label: 'About', id: 'about-section' },
  { label: 'Reviews', id: 'reviews-section' },
  { label: 'Contact', id: 'contact-section' },
];

export default function OnsiteFooter({ scrollTo }) {
  return (
    <footer style={{
      background: '#f8f9fc',
      borderTop: '1px solid #d7dde7',
    }}>
      <div style={{
        maxWidth: 1400, margin: '0 auto',
        padding: '18px 40px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 24,
        flexWrap: 'wrap',
      }}
        className="footer-inner"
      >
        <div style={{ color: '#5f6b7a', fontSize: 13, whiteSpace: 'nowrap' }}>
          © {new Date().getFullYear()} On-Site Computer Service. All rights reserved.
        </div>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap' }}>
          {FOOTER_LINKS.map((l, i) => (
            <button
              key={l.id}
              onClick={() => scrollTo(l.id)}
              style={{
                background: 'none', border: 'none', cursor: 'pointer',
                color: '#002868', fontSize: 13, fontWeight: 800,
                textTransform: 'uppercase', letterSpacing: 0.3,
                padding: '0 16px',
                borderRight: i < FOOTER_LINKS.length - 1 ? '1px solid #cfd5df' : 'none',
                transition: 'color 0.2s',
              }}
              onMouseEnter={e => e.target.style.color = '#f05a1a'}
              onMouseLeave={e => e.target.style.color = '#002868'}
            >
              {l.label}
            </button>
          ))}
        </div>

        <a
          href="tel:9802360810"
          style={{
            background: '#fff', color: '#002868',
            border: '2.5px solid #f05a1a',
            borderRadius: 16, padding: '10px 18px',
            fontSize: 14, fontWeight: 800,
            textDecoration: 'none', whiteSpace: 'nowrap',
            boxShadow: '0 4px 14px rgba(240,90,26,0.16)',
            transition: 'all 0.2s',
          }}
          onMouseEnter={e => { e.currentTarget.style.color = '#f05a1a'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
          onMouseLeave={e => { e.currentTarget.style.color = '#002868'; e.currentTarget.style.transform = 'none'; }}
        >
          ☎ 980-236-0810
        </a>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .footer-inner {
            flex-direction: column !important;
            text-align: center !important;
            padding: 16px 20px !important;
            gap: 12px !important;
          }
        }
      `}</style>
    </footer>
  );
}