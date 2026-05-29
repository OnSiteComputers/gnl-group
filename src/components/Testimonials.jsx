import { Quote } from 'lucide-react';
import { motion } from 'framer-motion';

const TESTIMONIALS = [
  {
    quote: "GNL Digital Group completely transformed how we show up online. Greg brings 25+ years of real-world technology expertise to every strategy — this isn't a cookie-cutter SEO agency. If you want someone who genuinely understands how to grow a local business digitally, this is it.",
    author: "Greg B.",
    firm: "On-Site Computer Service",
    location: "Concord, NC",
    years: "25+ Years in Business"
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-12 bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-secondary font-bold text-lg tracking-widest uppercase">Client Testimonials</span>
          <h2 className="font-heading text-4xl font-bold mt-3">What Our Clients Say</h2>
          <p className="text-primary-foreground/60 mt-3">
            Real results from real businesses. Here's what our clients have to say about working with GNL Digital Group.
          </p>
        </motion.div>

        {TESTIMONIALS.map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="border border-primary-foreground/20 p-8 relative rounded-xl"
          >
            <Quote size={32} className="text-secondary mb-6" />
            <p className="font-heading text-xl italic text-primary-foreground/90 leading-relaxed mb-8">
              "{t.quote}"
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-secondary flex items-center justify-center rounded-full">
                <span className="font-heading font-bold text-primary text-lg">{t.author.charAt(0)}</span>
              </div>
              <div>
                <p className="font-heading font-bold text-primary-foreground">{t.author}</p>
                <p className="text-secondary text-sm">{t.firm}</p>
                <p className="text-primary-foreground/50 text-xs">{t.location} • {t.years}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}