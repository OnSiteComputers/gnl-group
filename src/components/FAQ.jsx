import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const FAQS = [
  { q: "How long does it take to see results from SEO?", a: "Most businesses start seeing measurable improvements in rankings and traffic within 3–6 months. For more competitive markets or industries, it may take 6–12 months to reach top positions. We provide monthly reports so you can track progress every step of the way." },
  { q: "Do you work with businesses outside of Charlotte?", a: "Our primary focus is the Charlotte metro area — including Concord, Kannapolis, Huntersville, and surrounding communities. This local specialization means we deeply understand your market and competitors. Reach out and we can discuss your specific location." },
  { q: "What makes GNL Digital Group different from other agencies?", a: "We specialize in local businesses, which means we understand what it takes to rank in competitive local markets. We combine 25+ years of technology expertise with a hyper-local focus on the Charlotte area — no cookie-cutter strategies, no runaround." },
  { q: "How much does digital marketing cost?", a: "Pricing depends on the competitiveness of your industry, your goals, and the scope of work. We offer a free strategy session to assess your needs and provide a custom proposal. There are no one-size-fits-all packages — everything is tailored to your business." },
  { q: "Will I be locked into a long-term contract?", a: "We believe in earning your business every month. While SEO is a long-term investment and results compound over time, we don't believe in trapping clients in contracts. We'll discuss flexible options that make sense for your business." },
  { q: "What does the free strategy session include?", a: "We'll review your current online presence, analyze your top local competitors, identify your biggest ranking opportunities, and outline a clear roadmap. You'll leave with actionable insights — whether you choose to work with us or not." },
];

export default function FAQ() {
  const [open, setOpen] = useState(null);

  return (
    <section id="faq" style={{ padding: '80px 24px', background: '#0B0B0B', borderTop: '1px solid #161616', borderBottom: '1px solid #161616' }}>
      <div style={{ maxWidth: 860, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 14, marginBottom: 16 }}>
            <div style={{ width: 40, height: 1, background: '#D4A84B' }} />
            <span style={{ color: '#D4A84B', fontSize: 11, fontWeight: 700, letterSpacing: '.2em', textTransform: 'uppercase' }}>Common Questions</span>
            <div style={{ width: 40, height: 1, background: '#D4A84B' }} />
          </div>
          <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: 'clamp(28px,4vw,52px)', fontWeight: 800, color: '#fff', margin: 0 }}>Frequently Asked Questions</h2>
        </div>

        <div style={{ border: '1px solid #1A1A1A', background: 'linear-gradient(135deg,#0D0D0D,#090909)' }}>
          {FAQS.map((faq, i) => (
            <div key={i} style={{ borderBottom: i < FAQS.length - 1 ? '1px solid #151515' : 'none' }}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                style={{ width: '100%', textAlign: 'left', background: 'none', border: 'none', color: open === i ? '#D4A84B' : '#fff', padding: '20px 24px', fontSize: 16, fontWeight: 600, cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 16, fontFamily: "'Playfair Display',serif" }}
              >
                <span>{faq.q}</span>
                <ChevronDown size={18} style={{ color: '#D4A84B', flexShrink: 0, transform: open === i ? 'rotate(180deg)' : 'rotate(0)', transition: 'transform .3s ease' }} />
              </button>
              <AnimatePresence>
                {open === i && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.2 }} style={{ overflow: 'hidden' }}>
                    <p style={{ padding: '0 24px 20px', color: '#ccc', fontSize: 15, lineHeight: 1.85, margin: 0 }}>{faq.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}