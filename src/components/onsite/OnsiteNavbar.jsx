import { useState, useEffect } from 'react';

const LOGO_URL = 'https://media.base44.com/images/public/6a15c006a4679719cfa0af7a/e15967dc9_download.png';

const NAV_LINKS = [
  { label: 'Home', id: 'top' },
  { label: 'Why Us', id: 'trust' },
  { label: 'Services', id: 'services-section' },
  { label: 'About', id: 'about-section' },
  { label: 'Reviews', id: 'reviews-section' },
  { label: 'Contact', id: 'contact-section' },
];

export default function OnsiteNavbar({ scrollTo }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (id) => {
    setMenuOpen(false);
    scrollTo(id);
  };

  return (
    <>
      <nav style={{
        position: 'sticky', top: 0, zIndex: 99999,
        background: '#fff',
        boxShadow: scrolled ? '0 2px 20px rgba(0,0,0,0.12)' : '0 2px 12px rgba(0,0,0,0.08)',
        transition: 'box-shadow 0.3s',
        width: '100%',
      }}>
        <div style={{
          maxWidth: 1200, margin: '0 auto',
          padding: '0 24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          minHeight: 80,
        }}>
          {/* Logo + Brand */}
          <button
            onClick={() => handleNav('top')}
            style={{ display: 'flex', alignItems: 'center', gap: 14, background: 'none', border: 'none', cursor: 'pointer', padding: 0, textDecoration: 'none' }}
          >
            {/* Logo */}
            <img src={LOGO_URL} alt="On-Site Computer Service" style={{
              height: 64, width: 'auto', maxWidth: 120,
              objectFit: 'contain',
              flexShrink: 0,
            }} />
            <div style={{ textAlign: 'left' }}>
              <div style={{
                fontFamily: "'Oswald', sans-serif",
                fontWeight: 700, fontSize: 18, color: '#002868',
                lineHeight: 1.2, letterSpacing: 0.5,
              }}>On-Site Computer Service</div>
              <a
                href="https://www.google.com/maps/dir//53+Cabarrus+Ave+W,+Concord,+NC+28025"
                target="_blank"
                rel="noreferrer"
                style={{ fontSize: 11, color: '#002868', textDecoration: 'none', letterSpacing: 0.5, display: 'block', marginTop: 2 }}
                onClick={(e) => e.stopPropagation()}
              >
                53 Cabarrus Ave West, Concord NC
              </a>
            </div>
          </button>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex" style={{ alignItems: 'center', gap: 28 }}>
            {NAV_LINKS.map(l => (
              <button
                key={l.id}
                onClick={() => handleNav(l.id)}
                style={{
                  background: 'none', border: 'none', cursor: 'pointer',
                  color: '#002868', fontSize: 13, fontWeight: 700,
                  letterSpacing: 1, textTransform: 'uppercase',
                  padding: '4px 0',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={e => e.target.style.color = '#e8521a'}
                onMouseLeave={e => e.target.style.color = '#002868'}
              >
                {l.label}
              </button>
            ))}
          </div>

          {/* Phone + Hamburger */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexShrink: 0 }}>
            <a
              href="tel:9802360810"
              style={{
                display: 'inline-flex', alignItems: 'center',
                background: '#fff',
                color: '#002868',
                border: '2.5px solid #f05a1a',
                borderRadius: 18,
                padding: '8px 16px',
                fontFamily: "'Oswald', sans-serif",
                fontSize: 13, fontWeight: 600,
                textDecoration: 'none',
                boxShadow: '0 4px 16px rgba(240,90,26,0.18)',
                transition: 'all 0.2s',
                whiteSpace: 'nowrap',
              }}
              onMouseEnter={e => { e.currentTarget.style.color = '#f05a1a'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
              onMouseLeave={e => { e.currentTarget.style.color = '#002868'; e.currentTarget.style.transform = 'none'; }}
            >
              ☎ 980-236-0810
            </a>
            {/* Hamburger */}
            <button
              className="lg:hidden"
              onClick={() => setMenuOpen(o => !o)}
              aria-label="Toggle menu"
              style={{
                background: 'none', border: 'none', cursor: 'pointer',
                display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
                width: 28, height: 20, padding: 0, flexShrink: 0,
              }}
            >
              {[0,1,2].map(i => (
                <span key={i} style={{
                  display: 'block', width: '100%', height: 3,
                  background: '#002868', borderRadius: 3,
                  transition: 'all 0.3s',
                  transform: menuOpen
                    ? i === 0 ? 'translateY(8.5px) rotate(45deg)'
                    : i === 2 ? 'translateY(-8.5px) rotate(-45deg)'
                    : 'none'
                    : 'none',
                  opacity: menuOpen && i === 1 ? 0 : 1,
                }} />
              ))}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div style={{
            background: '#fff',
            borderTop: '2px solid #e8521a',
            position: 'absolute', top: '100%', left: 0, right: 0,
            zIndex: 99998,
            boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
          }}>
            {NAV_LINKS.map(l => (
              <button
                key={l.id}
                onClick={() => handleNav(l.id)}
                style={{
                  display: 'block', width: '100%', textAlign: 'left',
                  padding: '14px 20px',
                  background: 'none', border: 'none',
                  borderBottom: '1px solid #e2e7ef',
                  color: '#002868', fontSize: 15, fontWeight: 600,
                  textTransform: 'uppercase', letterSpacing: 0.5,
                  cursor: 'pointer',
                }}
                onMouseEnter={e => { e.currentTarget.style.background = '#f4f6f9'; e.currentTarget.style.color = '#e8521a'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'none'; e.currentTarget.style.color = '#002868'; }}
              >
                {l.label}
              </button>
            ))}
          </div>
        )}
      </nav>
    </>
  );
}