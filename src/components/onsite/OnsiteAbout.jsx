const STATS = [
  { num: '170+', lbl: '5-Star Reviews' },
  { num: '4.9★', lbl: 'Google Rating' },
  { num: '25+', lbl: 'Years Experience' },
  { num: '24hr', lbl: 'Avg Turnaround' },
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

export default function OnsiteAbout() {
  return (
    <section id="about-section" style={{
      background: '#f4f6f9',
      borderTop: '1px solid #e2e7ef',
      borderBottom: '1px solid #e2e7ef',
      padding: '80px 24px',
    }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 420px',
          gap: 80,
          alignItems: 'center',
        }}
          className="about-grid"
        >
          <div>
            <SectionTag>About Us</SectionTag>
            <h2 style={{
              fontFamily: "'Oswald', sans-serif",
              fontSize: 'clamp(26px, 4vw, 42px)',
              fontWeight: 700, color: '#002868',
              marginBottom: 14, lineHeight: 1.2,
            }}>25+ Years of Hands-On Experience</h2>

            <p style={{ fontSize: 17, color: '#4a5568', lineHeight: 1.7, marginBottom: 24 }}>
              With over 25 years of hands-on experience, I diagnose and repair computers the right way — no guesswork.
              From simple issues to systems other shops said were unfixable, I take the time to find the real problem and fix it right.
            </p>
            <p style={{ fontSize: 16, color: '#4a5568', lineHeight: 1.7, marginBottom: 36 }}>
              We offer both on-site service and in-store repairs at our Concord location,
              giving you the flexibility to choose what works best for you.
              Whether you want us to come to you or prefer to drop your computer off,
              we make the process fast, easy, and stress-free.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 20 }}>
              {STATS.map((s, i) => (
                <div key={i} style={{
                  background: '#fff', borderRadius: 12, borderTop: '4px solid #e8521a',
                  padding: '28px 20px', textAlign: 'center',
                  boxShadow: '0 2px 16px rgba(0,0,0,0.06)',
                  transition: 'transform 0.2s, box-shadow 0.2s',
                }}
                  onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 8px 28px rgba(0,0,0,0.12)'; }}
                  onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = '0 2px 16px rgba(0,0,0,0.06)'; }}
                >
                  <div style={{
                    fontFamily: "'Oswald', sans-serif",
                    fontSize: 48, fontWeight: 700, color: '#e8521a', lineHeight: 1, marginBottom: 10,
                  }}>{s.num}</div>
                  <div style={{ fontSize: 14, color: '#4a5568', letterSpacing: 0.3 }}>{s.lbl}</div>
                </div>
              ))}
            </div>
          </div>

          <div style={{
            background: '#fff', borderRadius: 20, borderTop: '4px solid #e8521a',
            padding: 48, boxShadow: '0 4px 28px rgba(0,0,0,0.08)',
            display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 24,
            transition: 'transform 0.2s, box-shadow 0.2s',
          }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-6px)'; e.currentTarget.style.boxShadow = '0 12px 44px rgba(0,0,0,0.14)'; }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = '0 4px 28px rgba(0,0,0,0.08)'; }}
          >
            <div style={{
              width: 200, height: 160,
              background: 'linear-gradient(135deg, #002868 60%, #e8521a)',
              borderRadius: 16,
              display: 'flex', flexDirection: 'column',
              alignItems: 'center', justifyContent: 'center', gap: 8,
            }}>
              <span style={{
                fontFamily: "'Oswald', sans-serif",
                fontSize: 52, fontWeight: 700, color: '#fff', letterSpacing: 2, lineHeight: 1,
              }}>OCS</span>
              <span style={{ fontSize: 10, color: 'rgba(255,255,255,0.8)', letterSpacing: 1, textTransform: 'uppercase', textAlign: 'center', padding: '0 12px' }}>
                On-Site Computer Service
              </span>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontFamily: "'Oswald', sans-serif", fontSize: 18, color: '#002868', fontWeight: 600 }}>
                Concord's Trusted Tech Expert
              </div>
              <div style={{ fontSize: 14, color: '#4a5568', marginTop: 4 }}>
                Serving Concord and surrounding areas since 2000
              </div>
            </div>
            <div style={{ color: '#f5c518', fontSize: 28, letterSpacing: 3 }}>★★★★★</div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 40px !important; text-align: center; }
        }
      `}</style>
    </section>
  );
}