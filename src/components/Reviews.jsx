import { Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';



export default function Reviews() {
  return (
    <section id="reviews" className="py-12 bg-card">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-6 md:mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-secondary font-bold text-base tracking-widest uppercase">The Verdict</span>
          <h2 className="font-heading text-4xl font-bold mt-3 text-primary">177 Five-Star Reviews</h2>
          <p className="text-muted-foreground mt-3">
            Over 25+ years, we've built an unmatched record of client trust. Don't take our word for it — read what our clients say.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="flex justify-center gap-2 mb-6 md:mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={28} className="fill-secondary text-secondary" />
          ))}
        </motion.div>

        <div className="grid grid-cols-2 gap-6 text-center mb-8 md:mb-12">
          {[['177', '5-Star Reviews'], ['25+', 'Years in Business']].map(([num, label]) => (
            <div key={label} className="border border-border p-6 rounded-xl">
              <div className="font-heading font-bold text-3xl text-primary">{num}</div>
              <div className="text-muted-foreground text-sm mt-1">{label}</div>
            </div>
          ))}
        </div>

        {/* Section Title */}
        <motion.h3
          className="font-heading text-3xl font-bold text-center text-primary mb-4 md:mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          What Our Customers Say
        </motion.h3>

        {/* Elfsight Google Reviews Widget */}
        <div className="mb-10 elfsight-reviews-container">
          <div className="elfsight-app-989581b6-5532-43fa-8f5f-66c819c1d351" data-elfsight-app-lazy></div>
        </div>


      </div>
    </section>
  );
}