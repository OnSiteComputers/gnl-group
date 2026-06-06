import { Phone, ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Hero({ heroImage }) {
  return (
    <section className="relative min-h-[70vh] md:min-h-screen flex items-start justify-center overflow-hidden pt-24 md:pt-52">
      {/* Background */}
      <div className="absolute inset-0">
        {heroImage && (
          <img
            src={heroImage}
            alt="Charlotte skyline at dusk"
            className="w-full h-full object-cover opacity-20"
          />
        )}
        <div className="absolute inset-0 bg-primary" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center text-primary-foreground pb-10 md:pb-24">
        {/* Legacy badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 border border-secondary/60 text-secondary px-4 py-1.5 text-sm font-medium tracking-widest uppercase mb-8"
        >
          25+ Years of Excellence
        </motion.div>

        <motion.h1
          className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          Dominate Your Market
        </motion.h1>

        <motion.p
          className="text-secondary font-heading text-xl md:text-2xl italic mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Helping Local Businesses Dominate Search Results
        </motion.p>

        <motion.p
          className="text-primary-foreground/70 text-lg max-w-2xl mx-auto mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          25+ years of proven expertise. Real results. We build the digital authority that brings customers to your business.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Button asChild size="lg" variant="secondary" className="font-bold tracking-wide text-primary px-8">
            <Link to="/contact">REQUEST STRATEGY SESSION</Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="font-bold tracking-wide border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10 px-8">
            <a href="tel:+17045945826">
              <Phone size={16} className="mr-2" />
              (704) 594-5826
            </a>
          </Button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-primary-foreground/40 animate-bounce">
        <ArrowDown size={24} />
      </div>
    </section>
  );
}