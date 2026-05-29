import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Phone, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ContactCTA() {
  return (
    <section className="py-12 bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-secondary font-bold text-lg tracking-widest uppercase">Get Started</span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold mt-3 mb-4">
            Ready to Dominate Search Results?
          </h2>
          <p className="text-primary-foreground/70 text-lg max-w-2xl mx-auto mb-10">
            Schedule your free strategy session today. We'll analyze your business's online presence and map out a path to the top.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="font-bold tracking-wide text-primary px-8">
              <Link to="/contact">
                REQUEST STRATEGY SESSION <ArrowRight size={16} className="ml-2" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="font-bold tracking-wide border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10 px-8">
              <a href="tel:+17045945826">
                <Phone size={16} className="mr-2" />
                (704) 594-5826
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}