import { Phone, ArrowRight, Search, MapPin, TrendingUp, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const RANKINGS = [
  { name: 'Your Business', status: 'Now #1', highlight: true },
  { name: 'Competitor A', status: '#2' },
  { name: 'Competitor B', status: '#3' },
  { name: 'Competitor C', status: '#4' },
];

const PROOF = [
  ['26 years', 'founder technology experience'],
  ['177+', 'On-Site five-star reviews'],
  ['Web + SEO + VoIP', 'one accountable partner'],
];

export default function Hero({ heroImage }) {
  return (
    <section className="relative min-h-screen overflow-hidden bg-primary pt-28 md:pt-56">
      <div className="absolute inset-0">
        {heroImage && <img src={heroImage} alt="Charlotte skyline" className="h-full w-full object-cover opacity-10" />}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(184,134,11,0.32),transparent_32%),linear-gradient(135deg,rgba(15,23,42,0.98),rgba(7,13,26,0.94))]" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </div>

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 px-6 pb-20 lg:grid-cols-[1.02fr_0.98fr]">
        <div className="text-primary-foreground">
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }} className="mb-6 inline-flex items-center gap-2 rounded-full border border-secondary/50 bg-white/5 px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-secondary shadow-2xl backdrop-blur">
            <ShieldCheck size={15} /> Founder-led · 26 years in technology
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, delay: 0.08 }} className="font-heading text-5xl font-bold leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl">
            Own the Top of Local Search.
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.16 }} className="mt-7 max-w-2xl text-lg leading-8 text-primary-foreground/78 md:text-xl">
            GNL Digital Group builds Fortune-500-level local websites, search visibility, and VoIP systems for businesses that need the phone to ring. Built by the same owner behind On-Site Computer Service's 26-year local reputation.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.24 }} className="mt-9 flex flex-col gap-4 sm:flex-row">
            <Button asChild size="lg" variant="secondary" className="rounded-full px-8 font-bold tracking-wide text-primary shadow-xl shadow-secondary/20">
              <Link to="/contact">Request Strategy Session <ArrowRight size={18} className="ml-2" /></Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full border-primary-foreground/30 bg-white/5 px-8 font-bold tracking-wide text-primary-foreground hover:bg-white/10">
              <a href="tel:+17045945826"><Phone size={17} className="mr-2" /> (704) 594-5826</a>
            </Button>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.32 }} className="mt-10 grid gap-3 sm:grid-cols-3">
            {PROOF.map(([num, label]) => (
              <div key={num} className="rounded-2xl border border-white/10 bg-white/[0.06] p-4 backdrop-blur">
                <div className="font-heading text-2xl font-bold text-secondary">{num}</div>
                <div className="mt-1 text-xs uppercase tracking-widest text-primary-foreground/58">{label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0, scale: 0.96, y: 24 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ duration: 0.75, delay: 0.18 }} className="relative">
          <div className="absolute -inset-6 rounded-[2.5rem] bg-secondary/20 blur-3xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-white/15 bg-white/[0.08] p-5 shadow-2xl backdrop-blur-xl">
            <div className="rounded-[1.35rem] bg-white p-5 text-slate-900 shadow-xl">
              <div className="flex items-center gap-3 border-b border-slate-200 pb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white"><Search size={19} /></div>
                <div>
                  <div className="text-sm font-bold text-slate-500">Google Search</div>
                  <div className="text-lg font-bold">best local service near me</div>
                </div>
              </div>

              <div className="mt-5 rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex items-center gap-2 font-bold"><MapPin size={17} className="text-secondary" /> Local Map Pack</div>
                  <div className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold text-emerald-700">climbing</div>
                </div>
                <div className="space-y-3">
                  {RANKINGS.map((r, index) => (
                    <motion.div key={r.name} initial={{ opacity: 0, x: 28 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.45 + index * 0.12 }} className={`flex items-center justify-between rounded-xl border p-4 ${r.highlight ? 'border-secondary bg-secondary/15 shadow-lg shadow-secondary/10' : 'border-slate-200 bg-white'}`}>
                      <div>
                        <div className="font-bold">{r.name}</div>
                        <div className="mt-1 flex items-center gap-1 text-xs text-slate-500"><TrendingUp size={13} /> web · SEO · calls</div>
                      </div>
                      <div className={`rounded-full px-3 py-1 text-sm font-black ${r.highlight ? 'bg-secondary text-primary' : 'bg-slate-100 text-slate-600'}`}>{r.status}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
