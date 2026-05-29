import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const FAQS = [
  {
    q: "How long does it take to see results from SEO?",
    a: "Most businesses start seeing measurable improvements in rankings and traffic within 3–6 months. For more competitive markets or industries, it may take 6–12 months to reach top positions. We provide monthly reports so you can track progress every step of the way."
  },
  {
    q: "Do you work with businesses outside of Charlotte?",
    a: "Our primary focus is the Charlotte metro area — including Concord, Kannapolis, Huntersville, and surrounding communities. This local specialization means we deeply understand your market and competitors. Reach out and we can discuss your specific location."
  },
  {
    q: "What makes GNL Digital Group different from other agencies?",
    a: "We specialize in local businesses, which means we understand what it takes to rank in competitive local markets. We combine 25+ years of technology expertise with a hyper-local focus on the Charlotte area — no cookie-cutter strategies, no runaround."
  },
  {
    q: "How much does digital marketing cost?",
    a: "Pricing depends on the competitiveness of your industry, your goals, and the scope of work. We offer a free strategy session to assess your needs and provide a custom proposal. There are no one-size-fits-all packages — everything is tailored to your business."
  },
  {
    q: "Will I be locked into a long-term contract?",
    a: "We believe in earning your business every month. While SEO is a long-term investment and results compound over time, we don't believe in trapping clients in contracts. We'll discuss flexible options that make sense for your business."
  },
  {
    q: "What does the free strategy session include?",
    a: "We'll review your current online presence, analyze your top local competitors, identify your biggest ranking opportunities, and outline a clear roadmap. You'll leave with actionable insights — whether you choose to work with us or not."
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(null);

  return (
    <section id="faq" className="pt-6 pb-12 md:py-12 bg-background">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-6 md:mb-12">
          <span className="text-secondary font-bold text-base tracking-widest uppercase">Common Questions</span>
          <h2 className="font-heading text-4xl font-bold mt-3 text-primary">Frequently Asked Questions</h2>
        </div>

        <div className="border border-border divide-y divide-border rounded-xl overflow-hidden">
          {FAQS.map((faq, i) => (
            <div key={i}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-5 text-left bg-background hover:bg-primary/5 transition-colors"
              >
                <span className="font-heading font-semibold text-primary pr-4">{faq.q}</span>
                <ChevronDown
                  size={18}
                  className={`flex-shrink-0 text-secondary transition-transform duration-200 ${open === i ? 'rotate-180' : ''}`}
                />
              </button>
              <AnimatePresence>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <p className="px-6 pb-5 text-muted-foreground leading-relaxed">{faq.a}</p>
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