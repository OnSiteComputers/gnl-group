import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const projects = [
  { title: 'Solara Finance', tag: 'Web App', color: 'from-blue-500/20 to-indigo-500/20', img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop' },
  { title: 'Noma Wellness', tag: 'Brand Identity', color: 'from-emerald-500/20 to-teal-500/20', img: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=400&fit=crop' },
  { title: 'Arclight Studios', tag: 'E-Commerce', color: 'from-purple-500/20 to-pink-500/20', img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop' },
  { title: 'Vantage AI', tag: 'Product Design', color: 'from-amber-500/20 to-orange-500/20', img: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&h=400&fit=crop' },
];

export default function Portfolio() {
  return (
    <section id="work" className="py-32">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mb-16"
        >
          <span className="text-sm font-medium text-primary">Selected Work</span>
          <h2 className="font-heading font-bold text-4xl md:text-5xl mt-3 tracking-tight">
            Projects we're proud of
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative rounded-2xl overflow-hidden border border-border bg-card cursor-pointer"
            >
              <div className={`aspect-[4/3] bg-gradient-to-br ${p.color} relative overflow-hidden`}>
                <img src={p.img} alt={p.title} className="w-full h-full object-cover mix-blend-multiply opacity-80 group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6 flex items-center justify-between">
                <div>
                  <h3 className="font-heading font-semibold text-lg">{p.title}</h3>
                  <span className="text-sm text-muted-foreground">{p.tag}</span>
                </div>
                <div className="w-10 h-10 rounded-full border border-border flex items-center justify-center group-hover:bg-primary group-hover:border-primary group-hover:text-primary-foreground transition-all duration-300">
                  <ExternalLink size={16} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}