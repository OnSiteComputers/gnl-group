import { Search, TrendingUp, MapPin, FileText, BarChart3, Globe, Package } from 'lucide-react';
import { motion } from 'framer-motion';

const SERVICES = [
  { icon: Search, title: 'Local SEO Strategy', desc: 'Dominate search results for high-value keywords in Charlotte and surrounding counties.' },
  { icon: MapPin, title: 'Local Map Pack', desc: 'Claim the top 3 positions in Google Maps where 46% of all searches have local intent.' },
  { icon: FileText, title: 'Content Authority', desc: 'Expert-level content that builds topical authority and converts visitors into paying customers.' },
  { icon: TrendingUp, title: 'Reputation Management', desc: 'Leverage your reviews and build a 5-star digital presence that instills immediate trust.' },
  { icon: BarChart3, title: 'Performance Analytics', desc: 'Transparent monthly reporting showing exactly how your investment drives new customer inquiries.' },
  { icon: Globe, title: 'Website Optimization', desc: 'Fast, mobile-first websites built to convert local traffic into real business results.' },
  { icon: Package, title: 'All-In-One Web Package', desc: 'Complete website rebuild, domain registration, and hosting with ongoing management—one simple monthly fee.' },
];

export default function Services({ servicesImage }) {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-secondary font-bold text-base tracking-widest uppercase">Our Expertise</span>
          <h2 className="font-heading text-5xl md:text-6xl font-bold mt-3 text-primary">
            Built for Local Dominance
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            We don't do generic SEO. Every strategy is engineered specifically for businesses competing in the Charlotte metropolitan area.
          </p>
        </motion.div>

        {/* 6-service grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {SERVICES.slice(0, 6).map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-6 border border-border bg-card hover:border-secondary/50 hover:shadow-md transition-all duration-300"
            >
              <div className="w-10 h-10 bg-primary flex items-center justify-center mb-4">
                <s.icon size={20} className="text-primary-foreground" />
              </div>
              <h3 className="font-heading font-bold text-lg text-primary mb-2">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Featured Package */}
        {SERVICES.slice(6).map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 bg-primary text-primary-foreground flex flex-col md:flex-row items-start md:items-center gap-6"
          >
            <div className="w-12 h-12 bg-secondary flex items-center justify-center flex-shrink-0">
              <s.icon size={24} className="text-primary" />
            </div>
            <div>
              <h3 className="font-heading font-bold text-2xl mb-2">{s.title}</h3>
              <p className="text-primary-foreground/80 leading-relaxed">{s.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}