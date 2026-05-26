import { motion } from 'framer-motion';
import { Palette, Code, TrendingUp, Smartphone } from 'lucide-react';

const services = [
  { icon: Palette, title: 'Brand & Identity', desc: 'Logos, visual systems, and brand guidelines that tell your story with clarity and impact.' },
  { icon: Code, title: 'Web Development', desc: 'High-performance websites and web applications built with modern technologies.' },
  { icon: Smartphone, title: 'Product Design', desc: 'User-centered interfaces that balance beauty with usability across every device.' },
  { icon: TrendingUp, title: 'Growth Strategy', desc: 'Data-driven marketing and SEO strategies to amplify your digital presence.' },
];

export default function Services() {
  return (
    <section id="services" className="py-32 bg-card">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mb-16"
        >
          <span className="text-sm font-medium text-primary">What We Do</span>
          <h2 className="font-heading font-bold text-4xl md:text-5xl mt-3 tracking-tight">
            Services built for the modern web
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group p-8 rounded-2xl border border-border bg-background hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <s.icon size={22} className="text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-xl mb-2">{s.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}