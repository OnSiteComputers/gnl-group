export default function OnsiteHero() {
  return (
    <section id="top" style={{
      background: '#f4f6f9',
      padding: '48px 24px 64px',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Decorative orange accent */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0,
        height: 4, background: 'linear-gradient(90deg, #e8521a, #ff6b35)',
      }} />

      <div style={{
        maxWidth: 1200, margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'clamp(280px, 55%, 700px) 1fr',
        gap: 48,
        alignItems: 'center',
      }}
        className="hero-grid"
      >
        {/* Left: Content */}
        <div>
          {/* Badge */}
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 10,
            background: '#fff', border: '2.5px solid #e8521a',
            borderRadius: 12, padding: '10px 18px',
            marginBottom: 28,
            boxShadow: '0 4px 16px rgba(232,82,26,0.18)',
          }}>
            <span style={{ color: '#f5c518', fontSize: 22, letterSpacing: 2 }}>★★★★★</span>
            <span style={{
              fontFamily: "'Oswald', sans-serif",
              color: '#002868', fontSize: 15, fontWeight: 700, whiteSpace: 'nowrap',
            }}>
              170+ Five-Star Google Reviews
            </span>
          </div>

          {/* Headline */}
          <h1 style={{
            fontFamily: "'Oswald', sans-serif",
            fontSize: 'clamp(32px, 5vw, 54px)',
            fontWeight: 700, color: '#002868',
            lineHeight: 1.2, marginBottom: 20,
            letterSpacing: '-0.5px',
          }}>
            Expert Computer<br />
            Repair in{' '}
            <span style={{ color: '#e8521a' }}>Concord, NC</span>
          </h1>

          {/* Sub */}
          <p style={{
            fontSize: 18, color: '#4a5568',
            lineHeight: 1.7, marginBottom: 36,
            maxWidth: 560,
          }}>
            Fast diagnostics. No guesswork. Most repairs completed within 24–48 hours.{' '}
            <strong style={{ color: '#002868' }}>Many customers come to us after being told their computer couldn't be fixed.</strong>
          </p>

          {/* CTA Buttons */}
          <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
            <a
              href="tel:9802360810"
              style={{
                display: 'inline-block',
                background: '#fff',
                color: '#002868',
                border: '2.5px solid #f05a1a',
                borderRadius: 14,
                padding: '13px 28px',
                fontFamily: "'Oswald', sans-serif",
                fontSize: 16, fontWeight: 600,
                textDecoration: 'none',
                boxShadow: '0 8px 24px rgba(240,90,26,0.18)',
                transition: 'all 0.2s',
                letterSpacing: 0.3,
              }}
              onMouseEnter={e => { e.currentTarget.style.color = '#f05a1a'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
              onMouseLeave={e => { e.currentTarget.style.color = '#002868'; e.currentTarget.style.transform = 'none'; }}
            >
              ☎ 980-236-0810
            </a>
            <a
              href="https://www.google.com/maps/dir//53+Cabarrus+Ave+W,+Concord,+NC+28025"
              target="_blank"
              rel="noreferrer"
              style={{
                display: 'inline-block',
                background: '#fff',
                color: '#002868',
                border: '2.5px solid #f05a1a',
                borderRadius: 14,
                padding: '13px 28px',
                fontFamily: "'Oswald', sans-serif",
                fontSize: 16, fontWeight: 600,
                textDecoration: 'none',
                transition: 'all 0.2s',
                letterSpacing: 0.3,
              }}
              onMouseEnter={e => { e.currentTarget.style.color = '#f05a1a'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
              onMouseLeave={e => { e.currentTarget.style.color = '#002868'; e.currentTarget.style.transform = 'none'; }}
            >
              📍 Get Directions
            </a>
          </div>
        </div>

        {/* Right: Stats Card */}
        <div style={{
          background: '#fff',
          borderRadius: 16,
          borderTop: '4px solid #e8521a',
          padding: '40px 36px',
          textAlign: 'center',
          boxShadow: '0 4px 32px rgba(0,0,0,0.08)',
          transition: 'transform 0.2s, box-shadow 0.2s',
        }}
          onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-6px)'; e.currentTarget.style.boxShadow = '0 12px 40px rgba(0,0,0,0.14)'; }}
          onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = '0 4px 32px rgba(0,0,0,0.08)'; }}
        >
          <div style={{
            fontFamily: "'Oswald', sans-serif",
            fontSize: 72, fontWeight: 700,
            color: '#e8521a', lineHeight: 1,
          }}>
            <span>170</span>+
          </div>
          <div style={{ color: '#4a5568', fontSize: 15, marginTop: 6, letterSpacing: 0.5 }}>
            Five-Star Google Reviews
          </div>
          <div style={{ color: '#f5c518', fontSize: 28, margin: '16px 0 8px', letterSpacing: 2 }}>★★★★★</div>
          <div style={{
            fontFamily: "'Oswald', sans-serif",
            fontSize: 36, fontWeight: 700, color: '#002868',
          }}>4.9 / 5.0</div>
          <div style={{ width: 40, height: 2, background: '#e8521a', margin: '20px auto' }} />
          <div style={{
            fontFamily: "'Oswald', sans-serif",
            fontSize: 22, fontWeight: 600, color: '#002868',
          }}>25+ Years</div>
          <div style={{
            color: '#4a5568', fontSize: 12, letterSpacing: 1,
            textTransform: 'uppercase', marginTop: 4,
          }}>Of Expert Experience</div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 24px !important;
            text-align: center;
          }
          .hero-grid > div:first-child { text-align: center; }
          .hero-grid > div:first-child > div:first-child { justify-content: center; }
          .hero-grid > div:first-child > div:last-child { justify-content: center; }
        }
      `}</style>
    </section>
  );
}