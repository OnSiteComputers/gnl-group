import { useEffect, useState } from "react";
import { Phone, Monitor, Clock, ShieldCheck, CreditCard, CalendarClock, Zap, CheckCircle, Menu, X, ChevronDown } from "lucide-react";

// ── LOGO ──
const ONSITE_LOGO = "/logo.png";

// ── CONTACT INFO ──
const PHONE = "980-236-0810";

// ── PAYMENT LINKS ── TODO: replace with your real PayRoc payment links
const PAY_REGULAR = "https://securelink-prod.valorpaytech.com:4430/?redirect=1&uid=fdc8610a-5e1c-11f1-a8e1-12a0879a85b1";   // $199 regular remote support
const PAY_EMERGENCY = "https://securelink-prod.valorpaytech.com:4430/?redirect=1&uid=16545ed3-5e1d-11f1-a8e1-12a0879a85b1"; // $299 emergency remote support

// ── SCHEDULING ── Google Calendar booking page (live)
const BOOKING_LINK = "https://calendar.app.google/yYRnBHKE5EL12QZE9";

// ── REMOTE TOOL ── TODO: replace REMOTE_TOOL_LINK with your TeamViewer QuickSupport download link
const REMOTE_TOOL_NAME = "TeamViewer QuickSupport";
const REMOTE_TOOL_LINK = "https://download.teamviewer.com/download/TeamViewerQS_x64.exe";

export default function RemoteSupport() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [footerNavOpen, setFooterNavOpen] = useState(false);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 page-fade-in">

      {/* ── NAV (matches homepage) ── */}
      <nav id="site-nav" className="bg-blue-50 border-b border-blue-100 sticky top-0 z-50 shadow-sm overflow-visible">
        <div className="max-w-6xl mx-auto px-4 py-2.5">
          {/* top row: wordmark on the LEFT, phone/menu on the RIGHT */}
          <div className="flex items-center justify-between gap-4">
            <a href="/" className="flex flex-col leading-none" style={{ fontFamily: "'Archivo Black', sans-serif" }}>
              <div className="text-xl md:text-3xl leading-none whitespace-nowrap">
                <span className="text-[#1a2e5a]">On-Site</span>{" "}
                <span className="text-orange-500">Computer Service</span>
              </div>
              <div className="text-orange-500 italic font-bold text-xs md:text-base mt-1 whitespace-nowrap" style={{ fontFamily: "inherit" }}>
                Your Computer's Doctor
              </div>
            </a>
            <div className="flex items-center justify-end flex-shrink-0">
              <a href={`tel:${PHONE}`} className="hidden md:inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-4 lg:px-5 py-2.5 rounded-lg transition-colors font-bold shadow-sm whitespace-nowrap text-sm lg:text-base">
                <Phone className="w-4 h-4" /> {PHONE}
              </a>
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="md:hidden text-[#1a2e5a] p-2 -mr-2"
                aria-label="Toggle navigation menu"
                aria-expanded={menuOpen}
              >
                {menuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
              </button>
            </div>
          </div>

          {/* bottom row: nav links spread across the full width */}
          <div className="hidden md:flex items-center justify-between text-sm lg:text-[15px] font-semibold text-gray-700 whitespace-nowrap mt-3">
            <a href="/" className="hover:text-orange-500 transition-colors">Home</a>
            <a href="/#why-us" className="hover:text-orange-500 transition-colors">Why Us?</a>
            <a href="/#about" className="hover:text-orange-500 transition-colors">About Us</a>
            <a href="/#services" className="hover:text-orange-500 transition-colors">Services</a>
            <a href="/#server-setups" className="hover:text-orange-500 transition-colors">Server Setups</a>
            <a href="/remote-support" className="text-orange-500 transition-colors">Remote Support</a>
            <a href="/#reviews" className="hover:text-orange-500 transition-colors">Reviews</a>
            <a href="/#areas" className="hover:text-orange-500 transition-colors">Service Areas</a>
            <a href="/#contact" className="hover:text-orange-500 transition-colors">Contact</a>
          </div>
        </div>

        {/* ── MOBILE DROPDOWN MENU ── */}
        {menuOpen && (
          <div className="md:hidden bg-blue-50 border-t border-blue-100 px-4 pb-4">
            <div className="flex flex-col text-base font-semibold text-gray-700">
              <a href="/" className="py-3 border-b border-blue-100 hover:text-orange-500">Home</a>
              <a href="/#why-us" className="py-3 border-b border-blue-100 hover:text-orange-500">Why Us?</a>
              <a href="/#about" className="py-3 border-b border-blue-100 hover:text-orange-500">About Us</a>
              <a href="/#services" className="py-3 border-b border-blue-100 hover:text-orange-500">Services</a>
              <a href="/#server-setups" className="py-3 border-b border-blue-100 hover:text-orange-500">Server Setups</a>
              <a href="/remote-support" className="py-3 border-b border-blue-100 text-orange-500">Remote Support</a>
              <a href="/#reviews" className="py-3 border-b border-blue-100 hover:text-orange-500">Reviews</a>
              <a href="/#areas" className="py-3 border-b border-blue-100 hover:text-orange-500">Service Areas</a>
              <a href="/#contact" className="py-3 border-b border-blue-100 hover:text-orange-500">Contact</a>
              <a href={`tel:${PHONE}`} className="mt-4 bg-orange-500 hover:bg-orange-600 text-white px-5 py-3 rounded-lg text-center font-bold flex items-center justify-center gap-2">
                <Phone className="w-4 h-4" /> {PHONE}
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* ── HERO + PAY (fits one screen below the header) ── */}
      <div className="min-h-[calc(100vh-140px)] flex flex-col">

      {/* ── HERO BAND ── */}
      <section className="bg-gradient-to-br from-[#1a2e5a] to-[#2563eb] text-white py-8 md:py-10">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <div className="w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center mx-auto mb-3">
            <Monitor className="w-6 h-6 text-white" />
          </div>
          <p className="text-blue-200 uppercase tracking-widest text-sm font-semibold mb-2">Remote Support</p>
          <h1 className="text-2xl md:text-4xl font-extrabold mb-3">Fast Help, Without Leaving Home</h1>
          <p className="text-blue-100 text-base md:text-lg max-w-2xl mx-auto">
            Greg connects to your computer securely over the internet to diagnose and fix problems —
            no house call required. Pay first, then we get you connected.
          </p>
        </div>
      </section>

      {/* ── HOW IT WORKS (compact) ── */}
      <section id="how-it-works" className="py-6 md:py-8 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-6">
            {[
              { icon: CreditCard, title: "1. Choose & Pay", desc: "Pick the option that fits and pay securely online. Payment is required before service begins." },
              { icon: CalendarClock, title: "2. Get Scheduled", desc: "Regular: pick a callback time. Emergency: Greg calls you back as soon as possible." },
              { icon: Monitor, title: "3. Get Connected", desc: `Greg sends a ${REMOTE_TOOL_NAME} link, connects to your computer, and fixes the problem.` },
            ].map((s, i) => (
              <div key={i} className="flex md:flex-col items-center md:text-center gap-3 md:gap-0">
                <div className="w-10 h-10 rounded-full bg-blue-100 text-[#1a2e5a] flex items-center justify-center md:mb-2 shrink-0">
                  <s.icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-[#1a2e5a] md:mb-1">{s.title}</h3>
                  <p className="text-gray-600 text-sm leading-snug">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="flex-1 flex flex-col justify-start py-4 md:py-6 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a2e5a] text-center mb-2">Choose Your Support</h2>
          <p className="text-gray-500 text-center mb-6 max-w-xl mx-auto">One-hour minimum per session. Additional time is billed in 30-minute increments.</p>

          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto items-stretch">

            {/* REGULAR */}
            <div className="bg-white rounded-2xl border-2 border-gray-200 p-6 flex flex-col shadow-sm">
              <div className="flex items-center gap-2 text-[#1a2e5a] mb-3">
                <CalendarClock className="w-6 h-6" />
                <h3 className="text-xl font-bold">Regular Remote Support</h3>
              </div>
              <div className="mb-1">
                <span className="text-4xl font-extrabold text-[#1a2e5a]">$199</span>
                <span className="text-gray-500 text-sm"> / 1-hour minimum</span>
              </div>
              <p className="text-gray-600 text-sm mb-4">Pay, then pick a callback time during business hours.</p>
              <ul className="text-sm text-gray-600 space-y-2 mb-5 flex-1">
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" /> Pick a time that works for you</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" /> Mon–Fri, 10:00 AM–6:00 PM EST</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" /> 26 years of expertise on the line</li>
              </ul>
              <a href={PAY_REGULAR} target="_blank" rel="noopener noreferrer"
                className="bg-[#1a2e5a] hover:bg-[#22386e] text-white font-bold py-3.5 rounded-xl text-center transition-all">
                Pay &amp; Schedule — $199
              </a>
              <p className="text-gray-400 text-xs mt-2 text-center">After payment, pick a callback time that works for you.</p>
            </div>

            {/* EMERGENCY */}
            <div className="bg-white rounded-2xl border-2 border-orange-400 p-6 flex flex-col shadow-lg relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">Priority</div>
              <div className="flex items-center gap-2 text-orange-600 mb-3">
                <Zap className="w-6 h-6" />
                <h3 className="text-xl font-bold">Emergency Remote Support</h3>
              </div>
              <div className="mb-1">
                <span className="text-4xl font-extrabold text-orange-600">$299</span>
                <span className="text-gray-500 text-sm"> / 1-hour minimum</span>
              </div>
              <p className="text-gray-600 text-sm mb-4">Pay now — Greg calls you back ASAP at the number you provide.</p>
              <ul className="text-sm text-gray-600 space-y-2 mb-5 flex-1">
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" /> Jumps to the front of the line</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" /> No scheduling — call comes ASAP</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" /> For urgent, can't-wait problems</li>
              </ul>
              <a href={PAY_EMERGENCY} target="_blank" rel="noopener noreferrer"
                className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3.5 rounded-xl text-center transition-all">
                Pay &amp; Get Priority — $299
              </a>
              <p className="text-gray-400 text-xs mt-2 text-center">After payment, your confirmation will tell you what number Greg will call from.</p>
            </div>
          </div>

          {/* trust note */}
          <div className="flex flex-wrap items-center justify-center gap-6 mt-6 text-sm text-gray-500">
            <span className="flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-[#1a2e5a]" /> Secure payment</span>
            <span className="flex items-center gap-2"><Clock className="w-4 h-4 text-[#1a2e5a]" /> 1-hour minimum</span>
            <span className="flex items-center gap-2"><Phone className="w-4 h-4 text-[#1a2e5a]" /> Questions? {PHONE}</span>
          </div>

          {/* scroll-down cue */}
          <div className="flex justify-center mt-8">
            <a href="#after-you-pay" onClick={(e) => { e.preventDefault(); document.getElementById("after-you-pay")?.scrollIntoView({ behavior: "smooth" }); }} className="inline-flex flex-col items-center text-[#1a2e5a] hover:text-orange-500 transition-colors group">
              <span className="text-sm font-semibold uppercase tracking-wide mb-1">What Happens Next</span>
              <ChevronDown className="w-6 h-6 animate-bounce" />
            </a>
          </div>
        </div>
      </section>
      </div>{/* end one-screen wrapper */}

      {/* ── AFTER PAYMENT INSTRUCTIONS ── */}
      <section id="after-you-pay" className="py-8 bg-[#1a2e5a] text-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-xl md:text-2xl font-bold mb-4">After You Pay</h2>
          <div className="grid sm:grid-cols-2 gap-4 text-left mb-6">
            <div className="bg-white/5 rounded-xl p-4">
              <div className="flex items-center gap-2 font-bold mb-1.5"><CalendarClock className="w-5 h-5 text-orange-400" /> Regular ($199)</div>
              <p className="text-blue-100 text-sm">Schedule your callback below. Greg will call you at your chosen time and connect via {REMOTE_TOOL_NAME}.</p>
            </div>
            <div className="bg-white/5 rounded-xl p-4">
              <div className="flex items-center gap-2 font-bold mb-1.5"><Zap className="w-5 h-5 text-orange-400" /> Emergency ($299)</div>
              <p className="text-blue-100 text-sm">No scheduling needed. Greg will call you ASAP at the number you provided — your payment confirmation will tell you what number to expect the call from.</p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href={BOOKING_LINK} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-7 rounded-xl transition-all">
              <CalendarClock className="w-5 h-5" /> Schedule Your Callback
            </a>
            <a href={REMOTE_TOOL_LINK} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border-2 border-white text-white hover:bg-white hover:text-[#1a2e5a] font-bold py-3 px-7 rounded-xl transition-all">
              <Monitor className="w-5 h-5" /> Download {REMOTE_TOOL_NAME}
            </a>
          </div>
          <p className="text-blue-300 text-xs mt-4">Please pay first. Only start {REMOTE_TOOL_NAME} once Greg is on the phone with you.</p>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-[#111827] text-gray-400 text-sm">
        <div className="max-w-6xl mx-auto px-4 py-8">

          {/* Top: three columns */}
          <div className="grid md:grid-cols-3 gap-8 text-left">
            <div>
              <img src={ONSITE_LOGO} alt="On-Site Computer Service" className="h-16 w-auto mb-4 opacity-90" />
              <p className="text-gray-400 leading-relaxed max-w-xs">
                Downtown Concord's trusted computer &amp; Mac repair. House calls, data recovery, and business IT — your computer's doctor since 2000.
              </p>
            </div>
            <div>
              <h4 className="text-[#f97316] font-bold tracking-widest uppercase text-xs mb-4" style={{ fontFamily: "'Oswald', sans-serif" }}>Navigation</h4>
              <div className="relative inline-block">
                {footerNavOpen && (
                  <ul className="absolute bottom-full mb-2 left-0 w-48 bg-[#1a2740] border border-white/10 rounded-lg shadow-xl overflow-hidden">
                    <li><a href="/" className="block px-4 py-2.5 hover:bg-white/5 hover:text-orange-400 transition-colors border-b border-white/5">Home</a></li>
                    <li><a href="/#about" className="block px-4 py-2.5 hover:bg-white/5 hover:text-orange-400 transition-colors border-b border-white/5">About Us</a></li>
                    <li><a href="/#services" className="block px-4 py-2.5 hover:bg-white/5 hover:text-orange-400 transition-colors border-b border-white/5">Services</a></li>
                    <li><a href="/#server-setups" className="block px-4 py-2.5 hover:bg-white/5 hover:text-orange-400 transition-colors border-b border-white/5">Server Setups</a></li>
                    <li><a href="/remote-support" className="block px-4 py-2.5 hover:bg-white/5 hover:text-orange-400 transition-colors border-b border-white/5">Remote Support</a></li>
                    <li><a href="/#reviews" className="block px-4 py-2.5 hover:bg-white/5 hover:text-orange-400 transition-colors border-b border-white/5">Reviews</a></li>
                    <li><a href="/#contact" className="block px-4 py-2.5 hover:bg-white/5 hover:text-orange-400 transition-colors">Contact</a></li>
                  </ul>
                )}
                <button
                  onClick={() => setFooterNavOpen(!footerNavOpen)}
                  className="inline-flex items-center gap-2 text-gray-300 hover:text-orange-400 transition-colors font-semibold"
                  aria-expanded={footerNavOpen}
                >
                  {footerNavOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />} Menu
                </button>
              </div>
            </div>
            <div>
              <h4 className="text-[#f97316] font-bold tracking-widest uppercase text-xs mb-4" style={{ fontFamily: "'Oswald', sans-serif" }}>Contact</h4>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-orange-400 flex-shrink-0" />
                  <a href={`tel:${PHONE}`} className="hover:text-orange-400 transition-colors">{PHONE}</a>
                </li>
                <li className="leading-relaxed text-gray-400">53 Cabarrus Ave. W<br/>Concord, NC 28025</li>
                <li className="text-gray-500">Mon–Fri 10AM–6PM EST</li>
              </ul>
            </div>
          </div>

          {/* GNL cross-link CTA box */}
          <div className="mt-8 bg-white/[0.03] border border-white/10 rounded-xl p-6 text-center">
            <img src="/gnl-logo.png" alt="GNL Digital Group" className="h-14 w-auto mx-auto mb-3" />
            <h3 className="text-[#d4af6a] text-xl md:text-2xl font-bold mb-1" style={{ fontFamily: "'Oswald', sans-serif" }}>Website by GNL Digital Group</h3>
            <p className="text-gray-300 mb-4">Local Dominance. Real Results. — Web design &amp; SEO for local businesses.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
              <a href="https://gnldigitalgroup.com" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#b8965a] hover:bg-[#c9aa6c] text-[#111827] font-bold px-7 py-3 rounded-lg transition-colors">
                Visit Our Website
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
              </a>
              <a href="tel:+17045945826"
                className="inline-flex items-center gap-2 bg-[#1a2740] hover:bg-[#22335a] text-white font-bold px-7 py-3 rounded-lg border border-white/15 transition-colors">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                Call Us
              </a>
            </div>
          </div>

          <div className="mt-6 pt-6 border-t border-white/10 text-center text-gray-500">
            © 2026 On-Site Computer Service — Your Computer's Doctor. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
