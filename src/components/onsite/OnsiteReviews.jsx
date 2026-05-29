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

export default function OnsiteReviews() {
  return (
    <section id="reviews-section" style={{ background: '#f4f6f9', padding: '80px 24px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', textAlign: 'center' }}>
        <SectionTag>Customer Reviews</SectionTag>
        <h2 style={{
          fontFamily: "'Oswald', sans-serif",
          fontSize: 'clamp(26px, 4vw, 42px)',
          fontWeight: 700, color: '#002868',
          marginBottom: 14, lineHeight: 1.2,
        }}>What Our Customers Are Saying</h2>
        <p style={{
          fontSize: 17, color: '#4a5568',
          maxWidth: 660, lineHeight: 1.7,
          margin: '0 auto 40px',
        }}>
          See why customers across Concord trust On-Site Computer Service for honest, reliable computer repair.
        </p>

        {/* Elfsight Reviews Widget */}
        <div style={{ marginBottom: 32 }}>
          <div
            className="elfsight-app-59326f3f-41fd-4afb-959a-18438e9cd406"
            data-elfsight-app-lazy="true"
          />
        </div>

        {/* Review Us CTA */}
        <a
          href="https://www.google.com/maps/place/On-Site+Computer+Service"
          target="_blank"
          rel="noreferrer"
          style={{
            display: 'inline-flex', alignItems: 'center', gap: 10,
            background: '#fff', color: '#002868',
            border: '2.5px solid #f05a1a',
            borderRadius: 18, padding: '13px 28px',
            fontFamily: "'Oswald', sans-serif",
            fontSize: 16, fontWeight: 600,
            textDecoration: 'none',
            boxShadow: '0 8px 24px rgba(240,90,26,0.18)',
            transition: 'all 0.2s',
          }}
          onMouseEnter={e => { e.currentTarget.style.color = '#f05a1a'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
          onMouseLeave={e => { e.currentTarget.style.color = '#002868'; e.currentTarget.style.transform = 'none'; }}
        >
          <span style={{ color: '#f5c518' }}>★</span> Leave Us a Review on Google
        </a>
      </div>
    </section>
  );
}