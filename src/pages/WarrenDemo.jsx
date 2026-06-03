import React from "react";
import {
  Phone,
  Mail,
  Menu,
  ChevronRight,
  Users,
  Baby,
  Home,
  FileText,
  ShieldCheck,
  Handshake,
  UserRoundCheck,
  Star,
} from "lucide-react";

const PHONE = "704-741-1763";
const EMAIL = "james@warrenfamilylaw.net";
const PHONE_DISPLAY = `(704) ${PHONE.slice(4)}`;

const services = [
  {
    title: "Divorce & Separation",
    text: "Guiding you through difficult times with clarity and compassion.",
    icon: Users,
  },
  {
    title: "Child Custody & Support",
    text: "Protecting what matters most—your children and parental rights.",
    icon: Baby,
  },
  {
    title: "Alimony & Property Division",
    text: "Fair and equitable solutions for your financial future.",
    icon: Home,
  },
  {
    title: "Prenuptial & Postnuptial Agreements",
    text: "Plan today for tomorrow.",
    icon: FileText,
  },
];

function Logo() {
  return (
    <a href="#home" className="flex items-center gap-3 text-white">
      <span className="grid h-12 w-12 place-items-center border border-white/80 font-serif text-4xl leading-none">
        W
      </span>
      <span className="font-serif uppercase leading-[0.9] tracking-[0.18em]">
        <span className="block text-3xl md:text-4xl">Warren</span>
        <span className="block text-xl md:text-2xl">Family Law</span>
      </span>
    </a>
  );
}

function Button({ href, children, variant = "gold" }) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-sm px-6 py-3 text-sm font-bold uppercase tracking-wide transition hover:-translate-y-0.5";
  const styles =
    variant === "gold"
      ? "bg-[#c98b24] text-white shadow-lg shadow-black/20 hover:bg-[#d99b34]"
      : "border border-white/80 bg-transparent text-white hover:bg-white hover:text-[#071a31]";

  return (
    <a href={href} className={`${base} ${styles}`}>
      {children}
    </a>
  );
}

export default function WarrenDemo() {
  return (
    <main className="min-h-screen bg-[#f7f4ee] text-[#071a31]">
      {/* Header */}
      <header className="absolute left-0 right-0 top-0 z-30 border-b border-white/10 bg-[#06182c]/95 text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <Logo />

          <nav className="hidden items-center gap-8 text-sm font-semibold uppercase tracking-wide lg:flex">
            <a href="#home" className="hover:text-[#d59a2a]">Home</a>
            <a href="#services" className="hover:text-[#d59a2a]">Practice Areas</a>
            <a href="#about" className="hover:text-[#d59a2a]">About Us</a>
            <a href="#reviews" className="hover:text-[#d59a2a]">Reviews</a>
            <a href="#resources" className="hover:text-[#d59a2a]">Resources</a>
            <a href={`mailto:${EMAIL}`} className="hover:text-[#d59a2a]">Contact</a>
          </nav>

          <a
            href={`tel:${PHONE}`}
            className="hidden items-center gap-2 rounded-sm bg-[#c98b24] px-6 py-3 text-lg font-bold shadow-lg shadow-black/20 hover:bg-[#d99b34] md:flex"
          >
            <Phone size={22} fill="currentColor" />
            {PHONE_DISPLAY}
          </a>

          <button className="lg:hidden" aria-label="Open navigation menu">
            <Menu size={32} />
          </button>
        </div>
      </header>

      {/* Hero */}
      <section
        id="home"
        className="relative overflow-hidden bg-[#071a31] pt-28 text-white"
      >
        <div className="absolute inset-0 opacity-40">
          <div className="h-full w-full bg-[radial-gradient(circle_at_76%_35%,rgba(201,139,36,0.35),transparent_22%),linear-gradient(90deg,#06182c_0%,#06182c_39%,rgba(6,24,44,0.65)_64%,rgba(6,24,44,0.2)_100%)]" />
        </div>

        <div className="mx-auto grid max-w-7xl items-center gap-8 px-5 pb-12 pt-8 lg:grid-cols-[1fr_0.9fr] lg:px-8 lg:pb-0">
          <div className="relative z-10 max-w-2xl py-10 lg:py-20">
            <p className="mb-4 text-lg font-bold uppercase tracking-[0.16em] text-[#d59a2a]">
              40 Years of Experience
            </p>
            <h1 className="font-serif text-5xl font-bold leading-tight md:text-6xl lg:text-7xl">
              Trusted Guidance.
              <br />
              Strong Advocates.
              <br />
              <span className="text-[#d59a2a]">Better Outcomes.</span>
            </h1>
            <div className="my-6 h-px w-14 bg-[#d59a2a]" />
            <p className="max-w-xl text-lg leading-8 text-white/90">
              For over 40 years, Warren Family Law has helped families in Charlotte and
              surrounding areas navigate life&apos;s most challenging transitions with skill,
              compassion, and integrity.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button href={`tel:${PHONE}`}>
                <Phone size={20} fill="currentColor" /> Call {PHONE_DISPLAY}
              </Button>
              <Button href={`mailto:${EMAIL}`} variant="outline">
                <Mail size={20} /> Schedule a Consultation
              </Button>
            </div>
          </div>

          <div className="relative z-10 hidden min-h-[520px] items-end justify-center lg:flex">
            <div className="absolute inset-x-10 bottom-0 h-[440px] rounded-t-full bg-gradient-to-b from-[#e8d3b1]/30 to-transparent blur-2xl" />
            <img
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=900&q=80"
              alt="Experienced family law attorney seated in an office"
              className="relative max-h-[560px] w-full object-cover object-top mix-blend-normal"
            />
          </div>
        </div>
      </section>

      {/* Mobile-style service strip that also works on desktop */}
      <section id="services" className="bg-[#fbfaf7] py-12 shadow-inner">
        <div className="mx-auto max-w-7xl px-5 text-center lg:px-8">
          <p className="text-sm font-bold uppercase tracking-[0.24em] text-[#c98b24] md:text-base">
            Serving Families in Charlotte and Surrounding Areas
          </p>
          <h2 className="mt-2 font-serif text-4xl font-bold md:text-5xl">
            Comprehensive Family Law Services
          </h2>
          <div className="mx-auto mt-4 h-px w-16 bg-[#c98b24]" />

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4 lg:gap-0">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <article
                  key={service.title}
                  className={`px-7 py-4 text-center ${
                    index !== services.length - 1 ? "lg:border-r lg:border-[#071a31]/25" : ""
                  }`}
                >
                  <Icon className="mx-auto mb-4 h-12 w-12 text-[#071a31]" strokeWidth={2.2} />
                  <h3 className="font-serif text-xl font-bold leading-snug">{service.title}</h3>
                  <p className="mx-auto mt-3 max-w-xs leading-6 text-[#071a31]/80">{service.text}</p>
                  <a
                    href={`mailto:${EMAIL}?subject=${encodeURIComponent(service.title + " Consultation")}`}
                    className="mt-4 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wide hover:text-[#c98b24]"
                  >
                    Learn More <ChevronRight size={16} />
                  </a>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section id="reviews" className="bg-[#06182c] text-white">
        <div className="mx-auto grid max-w-7xl lg:grid-cols-[1.55fr_1fr]">
          <div className="grid gap-8 px-5 py-10 md:grid-cols-[0.75fr_1.25fr] lg:px-8">
            <div>
              <p className="font-bold uppercase tracking-wide text-[#d59a2a]">What Our Clients Say</p>
              <div className="mt-4 flex gap-1 text-[#d59a2a]">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={28} fill="currentColor" />
                ))}
              </div>
              <p className="mt-3 text-sm text-white/80">Based on 15+ Google Reviews</p>
              <a
                href="#reviews"
                className="mt-5 inline-flex rounded-sm border border-[#c98b24] px-6 py-3 text-sm font-bold uppercase tracking-wide hover:bg-[#c98b24]"
              >
                Read All Reviews
              </a>
            </div>

            <blockquote className="border-l border-white/20 pl-8 font-serif text-lg italic leading-8 text-white/90">
              <span className="mr-3 align-top text-6xl leading-none text-[#d59a2a]">“</span>
              Jim Warren and his team were incredible. They guided me through one of
              the hardest times in my life with professionalism, compassion, and
              exceptional attention to detail. I highly recommend Warren Family Law.
              <footer className="mt-3 font-sans text-base not-italic text-[#d59a2a]">
                – Client, Concord, NC
              </footer>
            </blockquote>
          </div>

          <div className="min-h-[230px] bg-[linear-gradient(rgba(6,24,44,0.15),rgba(6,24,44,0.15)),url('https://images.unsplash.com/photo-1605730953301-137cb6a40365?auto=format&fit=crop&w=900&q=80')] bg-cover bg-center" />
        </div>
      </section>

      {/* Trust bar */}
      <section className="bg-[#fbfaf7] py-7">
        <div className="mx-auto grid max-w-7xl gap-6 px-5 md:grid-cols-3 lg:px-8">
          <div className="flex items-center justify-center gap-5 border-[#071a31]/20 md:border-r">
            <ShieldCheck className="h-12 w-12" />
            <p className="font-semibold uppercase tracking-wide">40+ Years<br />of Experience</p>
          </div>
          <div className="flex items-center justify-center gap-5 border-[#071a31]/20 md:border-r">
            <Handshake className="h-12 w-12" />
            <p className="font-semibold uppercase tracking-wide">Local, Trusted,<br />Focused on Family</p>
          </div>
          <div className="flex items-center justify-center gap-5">
            <UserRoundCheck className="h-12 w-12" />
            <p className="font-semibold uppercase tracking-wide">Personalized Attention<br />Every Step of the Way</p>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section id="contact" className="bg-white px-5 py-14 text-center">
        <h2 className="font-serif text-4xl font-bold">Ready to Talk?</h2>
        <p className="mx-auto mt-3 max-w-2xl text-lg text-[#071a31]/75">
          Contact Warren Family Law to schedule a confidential consultation.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button href={`tel:${PHONE}`}>
            <Phone size={20} fill="currentColor" /> Call {PHONE_DISPLAY}
          </Button>
          <a
            href={`mailto:${EMAIL}`}
            className="inline-flex items-center gap-2 font-semibold text-[#071a31] hover:text-[#c98b24]"
          >
            <Mail size={20} /> {EMAIL}
          </a>
        </div>
      </section>
    </main>
  );
}
