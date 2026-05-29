import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CheckCircle, Phone, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from './Navbar';
import Footer from './Footer';


const PHONE_HREF = 'tel:+17045945826';
const PHONE = '(704) 594-5826';

export default function WhoWeHelpPage({ icon: Icon, headline, subheadline, intro, benefits, services, cta, introAlign = 'center' }) {
  return (
    <div className="min-h-screen font-body">
      <Navbar />

      {/* Hero */}
      <section className="bg-primary text-primary-foreground pt-24 pb-12 px-6 text-center">
        <div className="max-w-7xl mx-auto text-center">
         <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
           <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-4">
             {Icon && <Icon className="text-secondary shrink-0" size={72} strokeWidth={1.5} />}
             <h1 className="font-heading text-2xl md:text-4xl font-bold text-center sm:text-left">{headline}</h1>
           </div>
           <p className="text-primary-foreground/70 text-lg md:text-xl max-w-2xl mx-auto">{subheadline}</p>
         </motion.div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 px-6 bg-background">
        <div className="max-w-7xl mx-auto">
          <motion.p initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className={`text-foreground/80 text-lg leading-relaxed text-${introAlign}`}>{intro}</motion.p>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 px-6 bg-muted/10">
        <div className="max-w-7xl mx-auto">
          <span className="text-secondary font-bold text-lg tracking-widest uppercase block mb-3">Why GNL Digital Works for You</span>
          <h2 className="font-heading text-3xl font-bold text-center text-foreground">Why <span className="text-secondary">GNL Digital</span> Works for You</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {benefits.map((b, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="flex items-start gap-4 bg-white border border-border rounded-lg p-6 shadow-sm">
                <CheckCircle className="text-secondary mt-1 shrink-0" size={20} />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">{b.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{b.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 px-6 bg-background">
        <div className="max-w-7xl mx-auto">
          <span className="text-secondary font-bold text-lg tracking-widest uppercase block mb-3">Our Services for You</span>
          <h2 className="font-heading text-3xl font-bold text-center text-foreground">Our Services for You</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                className="bg-primary text-primary-foreground rounded-lg p-6">
                <h3 className="font-heading font-bold text-lg mb-2 text-secondary">{s.title}</h3>
                <p className="text-primary-foreground/70 text-sm leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-secondary/10 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-7xl mx-auto">
          <h2 className="font-heading text-3xl font-bold text-foreground mb-4">{cta}</h2>
          <p className="text-muted-foreground mb-8">No contracts. No fluff. Just results from a team that knows your industry.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="font-semibold text-primary">
              <Link to="/contact">Get a Free Strategy Session <ArrowRight size={16} /></Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="font-semibold border-secondary text-secondary hover:bg-secondary/10">
              <a href={PHONE_HREF}><Phone size={16} /> {PHONE}</a>
            </Button>
          </div>
        </motion.div>
      </section>

      <Footer />

    </div>
  );
}