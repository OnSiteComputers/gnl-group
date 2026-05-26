import { Star, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const GOOGLE_REVIEWS_URL = 'https://www.google.com/maps/place/Onsite+Computer+Service/@35.3938,-80.6399,17z';
const LEAVE_REVIEW_URL = 'https://g.page/r/review';

export default function Reviews() {
  return (
    <section className="py-24 bg-card">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-secondary font-medium text-sm tracking-widest uppercase">The Verdict</span>
          <h2 className="font-heading text-4xl font-bold mt-3 text-primary">170+ Five-Star Reviews</h2>
          <p className="text-muted-foreground mt-3">
            Over 16 years, we've built an unmatched record of client trust. Don't take our word for it — read what our clients say.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="flex justify-center gap-2 mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={28} className="fill-secondary text-secondary" />
          ))}
        </motion.div>

        <div className="grid grid-cols-3 gap-6 text-center mb-12">
          {[['170+', '5-Star Reviews'], ['16+', 'Years in Business'], ['5.0', 'Average Rating']].map(([num, label]) => (
            <div key={label} className="border border-border p-6">
              <div className="font-heading font-bold text-3xl text-primary">{num}</div>
              <div className="text-muted-foreground text-sm mt-1">{label}</div>
            </div>
          ))}
        </div>

        {/* Google Reviews embed placeholder */}
        <div className="border border-dashed border-border rounded p-8 text-center text-muted-foreground text-sm mb-10">
          Google Reviews widget will be embedded here<br />
          <span className="text-xs">(Elfsight embed code)</span>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild variant="default" className="rounded-sm gap-2">
            <a href={GOOGLE_REVIEWS_URL} target="_blank" rel="noopener noreferrer">
              <ExternalLink size={15} /> READ ALL REVIEWS
            </a>
          </Button>
          <Button asChild variant="outline" className="rounded-sm gap-2">
            <a href={LEAVE_REVIEW_URL} target="_blank" rel="noopener noreferrer">
              <Star size={15} /> LEAVE A REVIEW
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}