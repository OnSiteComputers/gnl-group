// ============================================================
// ON-SITE COMPUTER SERVICE — Website
// Domain: www.onsitecomputerservice.net
// Brand: Warm, trusted, local, personal
// Colors: White background, navy (#1a2e5a) + blue (#2563eb) accents, orange CTA
// ============================================================

import { useEffect, useState } from "react";
import { Phone, MapPin, Star, Shield, Clock, Monitor, Wifi, HardDrive, Lock, Users, Wrench, Laptop, CheckCircle, ChevronRight, Menu, X } from "lucide-react";

// ── LOGO ── Replace src with your hosted logo URL if needed
const ONSITE_LOGO = "/logo.png";
const HERO_IMAGE = "/hero-logo.png";

// ── CONTACT INFO ── Easy to edit
const PHONE = "980-236-0810";
const EMAIL = "greg@onsitecomputerservice.net";
const ADDRESS = "53 Cabarrus Ave. W, Concord, NC 28025";

// ── SERVICES ── Edit labels and descriptions freely
const SERVICES = [
  { icon: Monitor, title: "Computer Repair", desc: "Windows PCs running slow, crashing, or acting up? We diagnose and fix it right the first time." },
  { icon: Laptop, title: "Mac Repair", desc: "Certified experience with Apple laptops and desktops. Fans, screens, logic boards, and more." },
  { icon: HardDrive, title: "Data Recovery", desc: "Lost files, failed hard drives, accidental deletions — we recover what matters most to you." },
  { icon: Users, title: "Business IT Support", desc: "Keep your business running. We handle networks, servers, workstations, and on-site visits." },
  { icon: Lock, title: "Virus & Malware Removal", desc: "Caught a virus or pop-ups taking over? We clean it up, lock it down, and set up protection for home and business." },
  { icon: Wifi, title: "Networking", desc: "Home or office — routers, switches, Wi-Fi setup, and wired network installations." },
  { icon: Shield, title: "Remote Support", desc: "Many issues solved remotely without you leaving home — fast, secure, and convenient. See our Remote Support page to get started." },
  { icon: Wrench, title: "On-Site Service", desc: "We come to you — home or office visits available throughout Concord and surrounding areas." },
];

// ── SERVICE AREAS ──
const SERVICE_AREAS = [
  "Concord", "Mount Pleasant", "Charlotte", "Gastonia",
  "Shelby", "Kannapolis", "Harrisburg", "Cabarrus County",
  "Mecklenburg County", "Surrounding Areas",
];

export default function OnSite() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [footerNavOpen, setFooterNavOpen] = useState(false);

  // ── CONTACT FORM ──
  const FORMSPREE_ENDPOINT = "https://formspree.io/f/xaqkgykp";
  const [formStatus, setFormStatus] = useState("idle"); // idle | sending | success | error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus("sending");
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(e.target),
      });
      if (res.ok) {
        setFormStatus("success");
        e.target.reset();
      } else {
        setFormStatus("error");
      }
    } catch {
      setFormStatus("error");
    }
  };

  // Load the Elfsight platform script once (powers the live Google Reviews widget)
  useEffect(() => {
    const SRC = "https://elfsightcdn.com/platform.js";
    if (document.querySelector(`script[src="${SRC}"]`)) return;
    const s = document.createElement("script");
    s.src = SRC;
    s.async = true;
    document.body.appendChild(s);
  }, []);

  // Smooth-scroll for in-page anchor links, offset by the REAL header height
  // so each section lands just below the sticky nav instead of underneath it.
  useEffect(() => {
    const handleClick = (e) => {
      const link = e.target.closest('a[href^="#"]');
      if (!link) return;
      const id = link.getAttribute("href").slice(1);
      const target = document.getElementById(id);
      if (!target) return;
      e.preventDefault();
      // scrollIntoView finds whatever container is actually scrolling
      // (Base44 wraps the app in its own scroll container), so this works
      // where window.scrollTo does not. scroll-margin-top in the CSS handles
      // the sticky-nav offset so the section isn't hidden under the header.
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      setMenuOpen(false);
      if (history.replaceState) history.replaceState(null, "", `#${id}`);
    };
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return (
    <div className="font-sans text-gray-800 bg-white">

      {/* ── NAVIGATION ── */}
      <nav id="site-nav" className="bg-blue-50 border-b border-blue-100 sticky top-0 z-50 shadow-sm overflow-visible">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-end justify-between gap-4">
          <a href="#top" className="leading-none flex-shrink-0" style={{ fontFamily: "'Archivo Black', sans-serif" }}>
            <div className="text-lg md:text-xl lg:text-2xl leading-none whitespace-nowrap">
              <span className="text-[#1a2e5a]">On-Site</span>{" "}
              <span className="text-orange-500">Computer Service</span>
            </div>
          </a>
          <div className="hidden md:flex items-end gap-5 lg:gap-6 text-sm lg:text-[15px] font-semibold text-gray-700 whitespace-nowrap">
            <a href="#top" className="hover:text-orange-500 transition-colors">Home</a>
            <a href="#about" className="hover:text-orange-500 transition-colors">About Us</a>
            <a href="#services" className="hover:text-orange-500 transition-colors">Services</a>
            <a href="/remote-support" className="hover:text-orange-500 transition-colors">Remote Support</a>
            <a href="#reviews" className="hover:text-orange-500 transition-colors">Reviews</a>
            <a href="#areas" className="hover:text-orange-500 transition-colors">Service Areas</a>
            <a href="#contact" className="hover:text-orange-500 transition-colors">Contact</a>
            <a href={`tel:${PHONE}`} className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-4 lg:px-5 py-2 rounded-lg transition-colors font-bold shadow-sm whitespace-nowrap">
              <Phone className="w-4 h-4" /> {PHONE}
            </a>
          </div>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-[#1a2e5a] p-2 -mr-2"
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>

        {/* ── MOBILE DROPDOWN MENU ── */}
        {menuOpen && (
          <div className="md:hidden bg-blue-50 border-t border-blue-100 px-4 pb-4">
            <div className="flex flex-col text-base font-semibold text-gray-700">
              <a href="#top" className="py-3 border-b border-blue-100 hover:text-blue-700">Home</a>
              <a href="#about" className="py-3 border-b border-blue-100 hover:text-blue-700">About Us</a>
              <a href="#services" className="py-3 border-b border-blue-100 hover:text-blue-700">Services</a>
              <a href="/remote-support" className="py-3 border-b border-blue-100 hover:text-blue-700">Remote Support</a>
              <a href="#reviews" className="py-3 border-b border-blue-100 hover:text-blue-700">Reviews</a>
              <a href="#areas" className="py-3 border-b border-blue-100 hover:text-blue-700">Service Areas</a>
              <a href="#contact" className="py-3 border-b border-blue-100 hover:text-blue-700">Contact</a>
              <a href={`tel:${PHONE}`} className="mt-4 bg-orange-500 hover:bg-orange-600 text-white px-5 py-3 rounded-lg text-center font-bold flex items-center justify-center gap-2">
                <Phone className="w-4 h-4" /> {PHONE}
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* ── HERO ── */}
      <section id="top" className="bg-gradient-to-br from-[#1a2e5a] to-[#2563eb] text-white pt-2 pb-8 md:pt-4 md:pb-10">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center gap-10">
          <div className="flex-1 text-center md:text-left">
            <p className="text-blue-200 uppercase tracking-widest text-sm font-semibold mb-3">House Calls for Technology Since 2000</p>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4">
              Trusted for <span className="text-orange-400">26 Years.</span><br />
              Serving Downtown<br className="hidden md:block" /> Concord for 16.
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-xl">
              Technology Changes. <strong className="text-white">Trust Does Not.</strong>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a href={`tel:${PHONE}`} className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-xl text-lg transition-all shadow-lg flex items-center justify-center gap-2">
                <Phone className="w-5 h-5" /> Contact Us
              </a>
              <a href="#services" className="border-2 border-white text-white hover:bg-white hover:text-blue-800 font-bold py-4 px-8 rounded-xl text-lg transition-all flex items-center justify-center gap-2">
                View Services <ChevronRight className="w-5 h-5" />
              </a>
            </div>
          </div>
          {/* Logo + Trust Card */}
          <div className="flex-shrink-0 w-full md:w-auto">
            <div className="p-6 md:p-8">

              <img
                src={HERO_IMAGE}
                alt="On-Site Computer Service"
                className="w-[380px] md:w-[460px] h-auto mx-auto"
              />

            </div>
          </div>
        </div>
      </section>

      {/* ── TRUST BAR ── */}
      <section className="bg-[#1a2e5a] text-white py-3 md:py-4">
        <div className="max-w-6xl mx-auto px-3">
          <div className="grid grid-cols-4 gap-x-2 md:gap-x-4 text-center">
            {[
              { number: "26", label: "Years of Experience" },
              { number: "16", label: "Years in Downtown Concord" },
              { number: "176+", label: "Five-Star Google Reviews" },
              { number: "100%", label: "Locally Owned and Operated" },
            ].map((stat, i) => (
              <div key={i} className="px-1">
                <div
                  className="glimmer-gold text-3xl sm:text-4xl md:text-5xl font-black leading-none mb-0.5"
                  style={{
                    color: "#f6c453",
                    textShadow: "0 0 14px rgba(246,196,83,0.5)",
                  }}
                >
                  {stat.number}
                </div>
                <div className="text-blue-200 text-[10px] sm:text-xs font-semibold uppercase tracking-wide leading-tight">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY PEOPLE CALL GREG ── */}
      <section className="py-16 md:py-20 bg-[#002868]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-3">Why Us?</h2>
            <p className="text-blue-200 max-w-xl mx-auto text-lg">No runaround. No upsells. Just honest answers and real fixes — the same way since 2000.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: "🩺", title: "He diagnoses first, bills second", desc: "Greg tells you exactly what is wrong and what it will cost before he does anything. No surprises, no hidden fees." },
              { icon: "🤝", title: "He treats you like a neighbor", desc: "Same location for 16 years. Same phone number. Same face. He knows his customers and they know him." },
              { icon: "⭐", title: "176+ five-star reviews speak for themselves", desc: "Not paid ads or gimmicks — just hundreds of real customers who came back and sent their families." },
              { icon: "🏠", title: "He comes to you", desc: "Can not bring it in? No problem. Greg offers on-site service — home visits or office calls in the Concord area." },
              { icon: "💻", title: "Windows AND Mac", desc: "Most shops pick one. Greg fixes both. PCs and Macs treated with equal care and expertise." },
              { icon: "💛", title: "Core philosophy: treat people right", desc: "Treat people like you want to be treated. That is the whole business model — and it has worked for 26 years." },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-lg font-bold text-[#1a2e5a] mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MEET GREG & LINDA ── */}
      <section id="about" className="py-16 md:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <div className="flex-1">
            <p className="text-orange-500 font-semibold uppercase tracking-widest text-sm mb-2">The People Behind the Business</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#1a2e5a] mb-5">Meet Greg and Linda Blair</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-4">
              Greg Blair has been repairing computers for 26 years — long before most people had one in their home. For the past 16 years, he has operated On-Site Computer Service from the same location in downtown Concord, building a reputation one honest repair at a time.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-4">
              Linda runs the front of house, handles communications, and makes sure every customer leaves feeling heard and taken care of. Together, they have built a business that has become part of the Concord community — not just a shop, but a trusted resource.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              "We have never been about volume. We are about doing right by each person who walks through that door or calls us for help. That has not changed in 26 years."
              <span className="block mt-2 text-[#1a2e5a] font-semibold not-italic">— Greg Blair</span>
            </p>
            <div className="flex items-center gap-3">
              <div className="flex">
                {[1,2,3,4,5].map(s => <Star key={s} className="w-5 h-5 fill-yellow-400 text-yellow-400" />)}
              </div>
              <span className="text-gray-500 font-medium">176+ five-star Google reviews</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section id="services" className="py-16 md:py-20 bg-[#002868]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-3">What We Fix</h2>
            <p className="text-blue-200 max-w-xl mx-auto text-lg">From a slow laptop to a crashed server, Greg has seen it all — and fixed most of it.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.map((svc, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md hover:border-blue-200 transition-all group">
                <div className="w-12 h-12 bg-blue-50 group-hover:bg-blue-100 rounded-xl flex items-center justify-center mb-4 transition-colors">
                  <svc.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-base font-bold text-[#1a2e5a] mb-2">{svc.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{svc.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <a href={`tel:${PHONE}`} className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-10 rounded-xl text-lg transition-all shadow-lg">
              <Phone className="w-5 h-5" /> Contact Us
            </a>
          </div>
        </div>
      </section>

      {/* ── DIAGNOSTIC PROCESS ── */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#1a2e5a] mb-3">How We Work</h2>
            <p className="text-gray-500 max-w-xl mx-auto text-lg">No guessing. No surprises. Just a straightforward process that respects your time and your wallet.</p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: "1", title: "You Call or Bring It In", desc: "Reach out by phone or drop off your device at our downtown Concord location. Calling ahead is best — Greg is often out on service calls." },
              { step: "2", title: "We Diagnose", desc: "Greg personally examines your device and identifies the exact problem — no assumptions, no guesswork." },
              { step: "3", title: "We Quote You First", desc: "Before anything is touched, you get a clear, honest quote. You decide. No pressure, ever." },
              { step: "4", title: "We Fix It Right", desc: "Quality repair with the right parts. We do not cut corners, and we stand behind our work." },
            ].map((step, i) => (
              <div key={i} className="text-center">
                <div className="w-14 h-14 rounded-full bg-[#1a2e5a] text-white text-xl font-extrabold flex items-center justify-center mx-auto mb-4 shadow-lg">
                  {step.step}
                </div>
                <h3 className="font-bold text-[#1a2e5a] mb-2">{step.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── GOOGLE REVIEWS ── */}
      <section id="reviews" className="py-16 md:py-20 bg-[#002868]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex justify-center gap-1 mb-3">
              {[1,2,3,4,5].map(s => <Star key={s} className="w-7 h-7 fill-yellow-400 text-yellow-400" />)}
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-3">176+ Five-Star Reviews</h2>
            <p className="text-blue-200 text-lg">Real customers. Real words. No scripts.</p>
          </div>
          <div
            className="elfsight-app-f007186e-c528-4a57-9e16-f74cf7c7f3d7"
            data-elfsight-app-lazy
          ></div>
          <div className="text-center mt-10">
            <a
              href="https://g.page/r/CSYE1297nyoJEAE/review"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-xl transition-all shadow-lg"
            >
              <Star className="w-5 h-5 fill-white text-white" /> Leave Us a Review
            </a>
          </div>
        </div>
      </section>

      {/* ── SERVICE AREAS ── */}
      <section id="areas" className="py-16 md:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <MapPin className="w-10 h-10 text-orange-500 mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#1a2e5a] mb-3">Where We Serve</h2>
          <p className="text-gray-500 text-lg mb-10">Based in downtown Concord — serving communities across the region.</p>
          <div className="flex flex-wrap justify-center gap-3">
            {SERVICE_AREAS.map((area, i) => (
              <span key={i} className="bg-blue-50 border border-blue-100 text-blue-800 font-medium px-5 py-2 rounded-full text-sm">
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT / CTA ── */}
      <section id="contact" className="py-16 md:py-24 bg-gradient-to-br from-[#1a2e5a] to-[#2563eb] text-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-10 md:gap-12 items-start">

            {/* LEFT: contact info */}
            <div className="text-center md:text-left">
              <h2 className="text-3xl md:text-5xl font-extrabold mb-4">
                Computer Problems? <br className="hidden md:block" />
                <span className="text-orange-400">Let us Talk.</span>
              </h2>
              <p className="text-blue-100 text-xl mb-8 max-w-xl mx-auto md:mx-0">
                Call Greg directly. No hold music, no ticket numbers — just a real conversation with someone who can actually help.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-8">
                <a href={`tel:${PHONE}`} className="bg-orange-500 hover:bg-orange-600 text-white font-extrabold py-4 px-8 rounded-xl text-lg transition-all shadow-xl flex items-center justify-center gap-3">
                  <Phone className="w-6 h-6" /> {PHONE}
                </a>
                <a href={`mailto:${EMAIL}`} className="border-2 border-white text-white hover:bg-white hover:text-blue-800 font-bold py-4 px-8 rounded-xl text-lg transition-all flex items-center justify-center gap-3">
                  Send Email
                </a>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-2 text-blue-200 mb-2">
                <MapPin className="w-5 h-5 flex-shrink-0" />
                <span className="text-lg">{ADDRESS}</span>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-2 text-blue-200 mb-6">
                <Clock className="w-5 h-5 flex-shrink-0" />
                <span className="text-lg">Mon–Fri, 10:00 AM – 6:00 PM EST</span>
              </div>
              <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10">
                <iframe
                  title="On-Site Computer Service location"
                  src="https://www.google.com/maps?q=53%20Cabarrus%20Ave%20W%2C%20Concord%2C%20NC%2028025&output=embed"
                  width="100%"
                  height="240"
                  style={{ border: 0, display: "block" }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                ></iframe>
              </div>
            </div>

            {/* RIGHT: contact form */}
            <div className="bg-white rounded-2xl shadow-2xl p-6 md:p-8 text-gray-800">
              <h3 className="text-2xl font-extrabold text-[#1a2e5a] mb-1">Send Us a Message</h3>
              <p className="text-gray-500 text-sm mb-6">Fill this out and Greg will get back to you.</p>

              {formStatus === "success" ? (
                <div className="bg-green-50 border border-green-200 rounded-xl p-6 text-center">
                  <CheckCircle className="w-10 h-10 text-green-500 mx-auto mb-3" />
                  <p className="font-bold text-green-800 mb-1">Message sent!</p>
                  <p className="text-green-700 text-sm">Thanks for reaching out — we will be in touch soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">Name</label>
                    <input type="text" name="name" required
                      className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1">Email</label>
                      <input type="email" name="email" required
                        className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1">Phone</label>
                      <input type="tel" name="phone"
                        className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">What can we help with?</label>
                    <select name="topic" required defaultValue=""
                      className="w-full border border-gray-300 rounded-lg px-4 py-2.5 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500">
                      <option value="" disabled>Select a problem type…</option>
                      <option>Computer Repair</option>
                      <option>Mac Repair</option>
                      <option>Data Recovery</option>
                      <option>Virus / Malware Removal</option>
                      <option>Business IT Support</option>
                      <option>Networking / Wi-Fi</option>
                      <option>On-Site / House Call</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">Message</label>
                    <textarea name="message" rows="4" required
                      className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
                  </div>

                  {formStatus === "error" && (
                    <p className="text-red-600 text-sm font-medium">
                      Something went wrong. Please try again, or just call us at {PHONE}.
                    </p>
                  )}

                  <button type="submit" disabled={formStatus === "sending"}
                    className="w-full bg-orange-500 hover:bg-orange-600 disabled:opacity-60 text-white font-bold py-3.5 rounded-lg text-lg transition-all shadow-lg">
                    {formStatus === "sending" ? "Sending…" : "Send Message"}
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-[#111827] text-gray-400 text-sm">
        <div className="max-w-6xl mx-auto px-4 py-12">

          {/* Top: three columns */}
          <div className="grid md:grid-cols-3 gap-10 text-left">
            {/* Col 1 — brand */}
            <div>
              <img src={ONSITE_LOGO} alt="On-Site Computer Service" className="h-16 w-auto mb-4 opacity-90" />
              <p className="text-gray-400 leading-relaxed max-w-xs">
                Downtown Concord's trusted computer &amp; Mac repair. House calls, data recovery, and business IT — your computer's doctor since 2000.
              </p>
            </div>

            {/* Col 2 — navigation (collapsible pancake menu) */}
            <div>
              <h4 className="text-[#f97316] font-bold tracking-widest uppercase text-xs mb-4" style={{ fontFamily: "'Oswald', sans-serif" }}>Navigation</h4>
              <div className="relative inline-block">
                {/* expanding list — sits ABOVE the button, revealed on toggle */}
                {footerNavOpen && (
                  <ul className="absolute bottom-full mb-2 left-0 w-48 bg-[#1a2740] border border-white/10 rounded-lg shadow-xl overflow-hidden">
                    <li><a href="#top" className="block px-4 py-2.5 hover:bg-white/5 hover:text-orange-400 transition-colors border-b border-white/5">Home</a></li>
                    <li><a href="#about" className="block px-4 py-2.5 hover:bg-white/5 hover:text-orange-400 transition-colors border-b border-white/5">About Us</a></li>
                    <li><a href="#services" className="block px-4 py-2.5 hover:bg-white/5 hover:text-orange-400 transition-colors border-b border-white/5">Services</a></li>
                    <li><a href="/remote-support" className="block px-4 py-2.5 hover:bg-white/5 hover:text-orange-400 transition-colors border-b border-white/5">Remote Support</a></li>
                    <li><a href="#reviews" className="block px-4 py-2.5 hover:bg-white/5 hover:text-orange-400 transition-colors border-b border-white/5">Reviews</a></li>
                    <li><a href="#contact" className="block px-4 py-2.5 hover:bg-white/5 hover:text-orange-400 transition-colors">Contact</a></li>
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

            {/* Col 3 — contact */}
            <div>
              <h4 className="text-[#f97316] font-bold tracking-widest uppercase text-xs mb-4" style={{ fontFamily: "'Oswald', sans-serif" }}>Contact</h4>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-orange-400 flex-shrink-0" />
                  <a href={`tel:${PHONE}`} className="hover:text-orange-400 transition-colors">{PHONE}</a>
                </li>
                <li className="leading-relaxed text-gray-400">
                  53 Cabarrus Ave. W<br/>Concord, NC 28025
                </li>
                <li className="text-gray-500">Mon–Fri 10AM–6PM EST</li>
              </ul>
            </div>
          </div>

          {/* GNL cross-link CTA box */}
          <div className="mt-12 bg-white/[0.03] border border-white/10 rounded-xl p-8 text-center">
            <img src="/gnl-logo.png" alt="GNL Digital Group" className="h-14 w-auto mx-auto mb-3" />
            <h3 className="text-[#d4af6a] text-xl md:text-2xl font-bold mb-1" style={{ fontFamily: "'Oswald', sans-serif" }}>Website by GNL Digital Group</h3>
            <p className="text-gray-300 mb-6">Local Dominance. Real Results. — Web design &amp; SEO for local businesses.</p>
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

          {/* Copyright */}
          <div className="mt-10 pt-6 border-t border-white/10 text-center text-gray-500">
            © 2026 On-Site Computer Service — Your Computer's Doctor. All rights reserved.
          </div>
        </div>
      </footer>

    </div>
  );
}