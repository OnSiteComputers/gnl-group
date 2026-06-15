import { useState, useEffect, useRef } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Phone, ArrowRight } from "lucide-react";

const LOGO_SRC = "/gnl-logo-sig.png";

const WHO_WE_HELP = [
  { label: "Law Firms", path: "/who-we-help/law-firms" },
  { label: "Medical & Healthcare", path: "/who-we-help/medical" },
  { label: "Restaurants", path: "/who-we-help/restaurants" },
  { label: "Home Services", path: "/who-we-help/home-services" },
  { label: "Professional Services", path: "/who-we-help/professional" },
  { label: "Realtors", path: "/who-we-help/realtors" },
];

export default function GNLNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [whoDropOpen, setWhoDropOpen] = useState(false);
  const [mobileWhoOpen, setMobileWhoOpen] = useState(false);
  const dropRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setWhoDropOpen(false);
    setMobileWhoOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleClick = (e) => {
      if (dropRef.current && !dropRef.current.contains(e.target)) {
        setWhoDropOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const handleHashNav = (hash) => {
    setMenuOpen(false);
    if (location.pathname === "/") {
      const el = document.getElementById(hash.replace("#", ""));
      if (el) el.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/" + hash);
    }
  };

  const navLinkStyle = {
    color: "#888",
    textDecoration: "none",
    fontSize: 13,
    fontWeight: 500,
    letterSpacing: ".05em",
    transition: "color .2s",
    background: "none",
    border: "none",
    cursor: "pointer",
    padding: 0,
    fontFamily: "inherit",
  };

  return (
    <>
      <style>{`
        .gnl-nav-link { color: #888; text-decoration: none; font-size: 13px; font-weight: 500; letter-spacing: .05em; transition: color .2s; }
        .gnl-nav-link:hover { color: #D4A84B; }
        .gnl-drop-item { display: block; padding: 11px 18px; color: #888; text-decoration: none; font-size: 13px; transition: background .2s, color .2s; border-bottom: 1px solid #1a1a1a; }
        .gnl-drop-item:hover { color: #D4A84B; background: rgba(212,168,75,.05); }
        .gnl-btn-g { border-radius: 8px; background: linear-gradient(135deg,#C49A30,#F0C860,#C49A30); background-size: 250% auto; color: #080808; font-weight: 800; letter-spacing: .08em; padding: 10px 22px; border: none; cursor: pointer; font-size: 12px; text-transform: uppercase; text-decoration: none; display: inline-flex; align-items: center; gap: 7px; transition: background-position .5s, transform .2s, box-shadow .2s; white-space: nowrap; }
        .gnl-btn-g:hover { background-position: right center; transform: translateY(-2px); box-shadow: 0 8px 24px rgba(212,168,75,.4); }
        @media (max-width: 768px) { .gnl-desktop-nav { display: none !important; } .gnl-hamburger { display: flex !important; } }
        @media (min-width: 769px) { .gnl-desktop-nav { display: flex !important; } .gnl-hamburger { display: none !important; } }
      `}</style>

      <header style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000,
        background: scrolled ? "rgba(8,8,8,.97)" : "rgba(8,8,8,.92)",
        borderBottom: "1px solid #1A1A1A",
        backdropFilter: "blur(16px)",
        transition: "all .4s ease",
      }}>
        <div style={{ maxWidth: 1340, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", height: 72, padding: "0 32px" }}>

          {/* Logo */}
          <Link to="/" style={{ display: "flex", flexDirection: "column", alignItems: "center", textDecoration: "none", gap: 2 }}>
            <img src={LOGO_SRC} alt="GNL Digital Group" style={{ height: 46, width: "auto" }} />
            <span style={{ color: "#C8922A", fontSize: 8, fontStyle: "italic", letterSpacing: ".1em", lineHeight: 1 }}>Local Dominance. Real Results.</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="gnl-desktop-nav" style={{ gap: 32, alignItems: "center" }}>

            <a href="/" className="gnl-nav-link" onClick={(e) => { e.preventDefault(); navigate("/"); }}>Home</a>

            <button className="gnl-nav-link" onClick={() => handleHashNav("#services")} style={navLinkStyle}>Services</button>

            {/* Who We Help Dropdown */}
            <div ref={dropRef} style={{ position: "relative" }}>
              <button
                className="gnl-nav-link"
                style={{ ...navLinkStyle, display: "flex", alignItems: "center", gap: 4 }}
                onClick={() => setWhoDropOpen(p => !p)}
              >
                Who We Help
                <ChevronDown size={12} style={{ transform: whoDropOpen ? "rotate(180deg)" : "rotate(0)", transition: "transform .2s" }} />
              </button>
              {whoDropOpen && (
                <div style={{ position: "absolute", top: "calc(100% + 10px)", left: "50%", transform: "translateX(-50%)", width: 230, background: "#0D0D0D", border: "1px solid #222", borderRadius: 8, overflow: "hidden", zIndex: 200, boxShadow: "0 16px 40px rgba(0,0,0,.7)" }}>
                  {WHO_WE_HELP.map(item => (
                    <Link key={item.path} to={item.path} className="gnl-drop-item" onClick={() => setWhoDropOpen(false)}>
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link to="/gnl-proposal" className="gnl-nav-link">Pricing</Link>

            <button className="gnl-nav-link" onClick={() => handleHashNav("#contact")} style={navLinkStyle}>Contact</button>

            <a href="/#contact" className="gnl-btn-g" onClick={(e) => { e.preventDefault(); handleHashNav("#contact"); }}>
              Get Free Strategy Session <ArrowRight size={13} />
            </a>
          </nav>

          {/* Hamburger */}
          <button
            className="gnl-hamburger"
            onClick={() => setMenuOpen(p => !p)}
            style={{ background: "none", border: "none", color: "#fff", cursor: "pointer", display: "none", alignItems: "center", padding: 0 }}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div style={{ background: "#0B0B0B", borderTop: "1px solid #1A1A1A", padding: "20px 24px 28px" }}>

            <Link to="/" onClick={() => setMenuOpen(false)} style={{ display: "block", color: "#999", textDecoration: "none", fontSize: 16, fontWeight: 500, padding: "12px 0", borderBottom: "1px solid #161616" }}>
              Home
            </Link>

            <button onClick={() => handleHashNav("#services")} style={{ display: "block", width: "100%", textAlign: "left", background: "none", border: "none", borderBottom: "1px solid #161616", color: "#999", fontSize: 16, fontWeight: 500, padding: "12px 0", cursor: "pointer", fontFamily: "inherit" }}>
              Services
            </button>

            {/* Mobile Who We Help */}
            <div>
              <button
                onClick={() => setMobileWhoOpen(p => !p)}
                style={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%", background: "none", border: "none", borderBottom: "1px solid #161616", color: "#999", fontSize: 16, fontWeight: 500, padding: "12px 0", cursor: "pointer", fontFamily: "inherit" }}
              >
                Who We Help
                <ChevronDown size={16} color="#888" style={{ transform: mobileWhoOpen ? "rotate(180deg)" : "rotate(0)", transition: "transform .2s" }} />
              </button>
              {mobileWhoOpen && (
                <div style={{ paddingLeft: 16, borderBottom: "1px solid #161616" }}>
                  {WHO_WE_HELP.map(item => (
                    <Link key={item.path} to={item.path} onClick={() => setMenuOpen(false)} style={{ display: "block", color: "#777", textDecoration: "none", fontSize: 14, padding: "9px 0", borderBottom: "1px solid #111" }}>
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link to="/gnl-proposal" onClick={() => setMenuOpen(false)} style={{ display: "block", color: "#999", textDecoration: "none", fontSize: 16, fontWeight: 500, padding: "12px 0", borderBottom: "1px solid #161616" }}>
              Pricing
            </Link>

            <button onClick={() => handleHashNav("#contact")} style={{ display: "block", width: "100%", textAlign: "left", background: "none", border: "none", borderBottom: "1px solid #161616", color: "#999", fontSize: 16, fontWeight: 500, padding: "12px 0", cursor: "pointer", fontFamily: "inherit" }}>
              Contact
            </button>

            <a href="tel:+17045945826" className="gnl-btn-g" style={{ marginTop: 20, width: "100%", justifyContent: "center", fontSize: 13, padding: "14px" }}>
              <Phone size={14} />(704) 594-5826
            </a>
          </div>
        )}
      </header>
    </>
  );
}