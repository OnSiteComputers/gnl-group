// Voip build: 2026-07-07 v1
import { useEffect } from "react";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { PhoneCall, Network, Headphones, Repeat, ShieldCheck, Building2, ArrowRight, CheckCircle2 } from 'lucide-react';

const FEATURES = [
  ['Professional call flow', 'Ring groups, voicemail, business-hours routing, and clean transfers built around how your office works.', PhoneCall],
  ['Desk phones + mobile users', 'Grandstream desk phones, cordless handsets, and softphone options for owners who work from anywhere.', Headphones],
  ['Number porting handled', 'Keep your existing business number while we manage the technical move and cutover.', Repeat],
  ['Network-ready setup', 'Phones are only as good as the network underneath them. We check the wiring, router, and switch path too.', Network],
  ['Web + SEO + phones', 'Your website gets found, SEO brings the lead in, and the phone system makes sure the call lands.', Building2],
  ['Local support', 'No giant call center. The same local team that builds the system supports it.', ShieldCheck],
];

const FITS = [
  ['Solo office', 'A clean main number, one or two phones, voicemail, and basic routing.'],
  ['Growing team', 'Multiple users, ring groups, call handling rules, and polished office setup.'],
  ['Full bundle', 'Website, local SEO, and VoIP built together so the whole customer path works.'],
];

export default function Voip() {
  useEffect(() => { console.log("Voip build: 2026-07-07 v1"); }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="pt-24 md:pt-48">
        <section className="relative overflow-hidden bg-primary px-6 py-24 text-primary-foreground">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(184,134,11,0.25),transparent_34%)]" />
          <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
            <div>
              <div className="mb-5 inline-flex rounded-full border border-secondary/50 px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-secondary">Business VoIP</div>
              <h1 className="font-heading text-5xl font-bold leading-tight md:text-6xl">The phone that rings when they find you.</h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-primary-foreground/75">GNL Digital Group installs practical business phone systems as part of the full local-growth stack: website, local SEO, and VoIP working together.</p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Button asChild size="lg" variant="secondary" className="rounded-full font-bold text-primary"><Link to="/contact">Get a Custom Quote <ArrowRight size={18} className="ml-2" /></Link></Button>
                <Button asChild size="lg" variant="outline" className="rounded-full border-white/30 bg-white/5 text-white hover:bg-white/10"><a href="tel:+17045945826">Call (704) 594-5826</a></Button>
              </div>
            </div>
            <div className="rounded-[2rem] border border-white/15 bg-white/[0.08] p-6 shadow-2xl backdrop-blur">
              {['Website gets found', 'SEO brings the lead', 'VoIP answers the call'].map((item, i) => (
                <div key={item} className="mb-4 flex items-center gap-4 rounded-2xl bg-white p-5 text-primary last:mb-0">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-secondary font-black text-primary">{i + 1}</div>
                  <div className="font-heading text-xl font-bold">{item}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 py-20">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-3xl">
              <span className="text-sm font-bold uppercase tracking-[0.22em] text-secondary">One accountable partner</span>
              <h2 className="mt-3 font-heading text-4xl font-bold text-primary">Stop juggling a website vendor, SEO vendor, and phone vendor.</h2>
              <p className="mt-4 text-muted-foreground">Every quote is built around the client&rsquo;s exact setup. No posted packages, no generic per-seat pitch, and no paying for features the office will never use.</p>
            </div>
            <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {FEATURES.map(([title, desc, Icon]) => (
                <div key={title} className="rounded-2xl border border-border bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
                  <Icon className="mb-5 h-9 w-9 text-secondary" />
                  <h3 className="font-heading text-xl font-bold text-primary">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-primary px-6 py-20 text-primary-foreground">
          <div className="mx-auto max-w-7xl">
            <div className="text-center">
              <span className="text-sm font-bold uppercase tracking-[0.22em] text-secondary">Find your fit</span>
              <h2 className="mt-3 font-heading text-4xl font-bold">Built around your office, not a price table.</h2>
            </div>
            <div className="mt-12 grid gap-5 md:grid-cols-3">
              {FITS.map(([title, desc]) => (
                <div key={title} className="rounded-2xl border border-white/10 bg-white/[0.06] p-6 backdrop-blur">
                  <CheckCircle2 className="mb-5 h-8 w-8 text-secondary" />
                  <h3 className="font-heading text-2xl font-bold text-secondary">{title}</h3>
                  <p className="mt-3 leading-7 text-primary-foreground/75">{desc}</p>
                  <Button asChild variant="secondary" className="mt-6 rounded-full font-bold text-primary"><Link to="/contact">Get a Quote</Link></Button>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
