import Navbar from '../components/Navbar';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';
import MobileCtaBar from '../components/MobileCtaBar';
import { Button } from '@/components/ui/button';
import { Phone, BarChart3, Users, Globe, Star, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const HERO_BG = 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=1920&q=80';

const SERVICES = [
  { icon: Globe, title: 'Local SEO', description: 'Dominate your local market. Get found by customers searching for your products or services nearby.' },
  { icon: BarChart3, title: 'Website Optimization', description: 'Fast, mobile-friendly websites that convert visitors into customers. Complete redesigns or improvements.' },
  { icon: Users, title: 'Reputation Management', description: 'Build trust with authentic reviews. We help you get more 5-star reviews and respond professionally.' },
  { icon: Star, title: 'Content Marketing', description: 'Engaging content that showcases your expertise and attracts your ideal customers.' },
  { icon: TrendingUp, title: 'Performance Tracking', description: 'Clear, transparent reports showing exactly how your digital marketing is performing.' },
  { icon: Phone, title: 'All-In-One Package', description: 'Everything you need to grow online. One monthly price, no hidden fees, cancel anytime.' },
];

export default function SmallBusiness() {
  return (
    <div className="min-h-screen font-body pb-16 lg:pb-0">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-start justify-center pt-24 md:pt-52 overflow-hidden">
        <div className="absolute inset-0">
          <img src={HERO_BG} alt="Small business" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-primary/85" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-primary-foreground pb-20">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="text-secondary font-bold text-lg tracking-widest uppercase">Grow Your Business Online</span>
            <h1 className="font-heading text-5xl md:text-6xl font-bold mt-3 mb-4 leading-tight">
              SEO &amp; Digital Marketing
              <br />for Small Businesses
            </h1>
            <p className="text-primary-foreground/70 text-lg max-w-2xl mx-auto mb-10">
              Get found by more customers, build your reputation, and grow your revenue with proven digital marketing strategies designed for small businesses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary" className="rounded-sm font-bold text-primary">
                <Link to="/contact">Get Free Consultation</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-sm font-bold border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10">
                <a href="tel:+17045945826"><Phone size={16} className="mr-2" />(704) 594-5826</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <span className="text-secondary font-bold text-lg tracking-widest uppercase">What We Offer</span>
            <h2 className="font-heading text-4xl font-bold mt-3 text-primary">Everything You Need to Grow Online</h2>
            <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">Comprehensive digital marketing services tailored for small businesses. No jargon, no hidden fees, just results.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((service, idx) => (
              <motion.div key={service.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }} className="p-6 border border-border hover:border-secondary/50 hover:shadow-md transition-all duration-300">
                <div className="w-10 h-10 bg-primary flex items-center justify-center mb-4">
                  <service.icon size={20} className="text-primary-foreground" />
                </div>
                <h3 className="font-heading font-bold text-lg text-primary mb-2">{service.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <FAQ />

      {/* CTA */}
      <section className="py-24 bg-primary text-primary-foreground text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-heading text-4xl font-bold mb-4">Ready to Grow Your Business?</h2>
          <p className="text-primary-foreground/70 mb-8">Schedule a free consultation. We'll analyze your current online presence and show you exactly how to get more customers.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="rounded-sm font-bold text-primary">
              <Link to="/contact">Schedule Free Consultation</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-sm font-bold border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10">
              <a href="tel:+17045945826">Call Now</a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <MobileCtaBar />
    </div>
  );
}