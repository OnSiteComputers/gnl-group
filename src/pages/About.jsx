import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Phone, Award, Users, Target } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import MobileCtaBar from '../components/MobileCtaBar';

const VALUES = [
  { icon: Award, title: "Proven Expertise", desc: "25+ years in technology, 16 years serving the same community. We're not going anywhere." },
  { icon: Users, title: "Personal Service", desc: "You'll work directly with Greg and Linda — no account managers, no runaround." },
  { icon: Phone, title: "Always Available", desc: "Real people answer the phone. If you get voicemail, we'll call you back the same day." },
  { icon: Target, title: "Real Results", desc: "We focus on what matters: getting your firm found by people who need you most." },
];

export default function About() {
  return (
    <div className="min-h-screen font-body pb-16 lg:pb-0">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-56 pb-16 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="text-secondary font-medium text-sm tracking-widest uppercase">Our Story</span>
          <h1 className="font-heading text-5xl md:text-6xl font-bold mt-3 mb-4">GNL Digital Group</h1>
          <p className="text-primary-foreground/70 text-xl font-heading italic">
            Greg &amp; Linda — Helping Charlotte-Area Businesses Dominate Search Results
          </p>
        </div>
      </section>

      {/* The Story Section */}
      <section className="py-20 bg-background">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-heading text-3xl font-bold text-primary mb-6">How GNL Started</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                It all happened on a Saturday morning in a mall parking lot. Greg was delivering an iMac back to a lawyer customer — someone who'd been trusting On-Site Computer Service for years.
              </p>
              <p>
                Greg mentioned he'd just redesigned his own website. The attorney replied that he'd been paying a company called Scorpion to manage his website and SEO. Then the lawyer asked Greg, "What do you know about SEO?"
              </p>
              <p>
                Greg's response was simple: "I've been in business for 25+ years and have 170+ 5-star Google reviews. What does that tell you?"
              </p>
              <p>
                After taking a look at what the attorney was getting, Greg realized the agency wasn't delivering results. That moment sparked something: <strong className="text-primary">local businesses were being underserved</strong> by big marketing agencies.
              </p>
              <p>
                GNL Digital Group was born from that conversation. Greg and Linda decided to offer what those agencies don't: <strong className="text-primary">personalized service, real expertise, and honest pricing</strong> — right here in the Charlotte area.
              </p>
            </div>

            <div className="mt-10 grid md:grid-cols-3 gap-6">
              {[
                { title: "Specialized Focus", desc: "We focus on local businesses in the Charlotte area because that's where we can make the biggest impact." },
                { title: "Local Partnership", desc: "We're not a faceless agency. We're your neighbors in Concord, invested in your success." },
                { title: "Honest Pricing", desc: "Just real results at fair prices." },
              ].map((item) => (
                <div key={item.title} className="border-l-2 border-secondary pl-4">
                  <h4 className="font-heading font-bold text-primary mb-2">{item.title}</h4>
                  <p className="text-muted-foreground text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Meet Greg & Linda */}
      <section className="py-20 bg-card">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div className="text-center mb-12" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-heading text-4xl font-bold text-primary">Meet Greg &amp; Linda</h2>
            <p className="text-muted-foreground mt-3">25+ years of technology expertise, now focused on helping Charlotte-area businesses grow.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="border border-border p-8">
              <div className="w-16 h-16 bg-primary flex items-center justify-center mb-4">
                <span className="font-heading font-bold text-3xl text-primary-foreground">G</span>
              </div>
              <h3 className="font-heading text-2xl font-bold text-primary mb-1">Greg</h3>
              <p className="text-secondary text-sm font-medium mb-4">Co-Founder &amp; Technical Director</p>
              <div className="space-y-3 text-muted-foreground text-sm leading-relaxed">
                <p><strong className="text-primary">26 years</strong> in the computer industry, with a storefront location in Concord for 16 years.</p>
                <p>Graduated from DeVry Institute of Technology in 1985 with a degree in Computer Information Systems.</p>
                <p>Originally from Toledo, Ohio, Greg has called North Carolina home for decades and is committed to serving the local business community.</p>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="border border-border p-8">
              <div className="w-16 h-16 bg-secondary flex items-center justify-center mb-4">
                <span className="font-heading font-bold text-3xl text-primary">L</span>
              </div>
              <h3 className="font-heading text-2xl font-bold text-primary mb-1">Linda</h3>
              <p className="text-secondary text-sm font-medium mb-4">Co-Founder &amp; Client Relations</p>
              <div className="space-y-3 text-muted-foreground text-sm leading-relaxed">
                <p><strong className="text-primary">25+ years</strong> as a veterinary surgery technician, bringing meticulous attention to detail and compassionate client care.</p>
                <p>Holds a Bachelor's degree from Eastern Illinois University in the Veterinary field.</p>
                <p>Now leading client communications, Google Business Profile optimization, and helping satisfied clients share their success through reviews.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-background">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div className="text-center mb-12" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-heading text-4xl font-bold text-primary">Our Values</h2>
            <p className="text-muted-foreground mt-3">What makes GNL Digital Group different from the big agencies.</p>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-6">
            {VALUES.map((item, idx) => (
              <motion.div key={item.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }} className="flex gap-4 p-6 border border-border">
                <div className="w-10 h-10 bg-primary flex items-center justify-center flex-shrink-0">
                  <item.icon size={18} className="text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-primary mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-primary-foreground text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-heading text-4xl font-bold mb-4">Ready to Grow Your Business?</h2>
          <p className="text-primary-foreground/70 mb-8">Let's talk about how we can help your business dominate search results in your local market.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="rounded-sm font-bold text-primary">
              <Link to="/contact">Schedule Free Strategy Session</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-sm font-bold border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10">
              <a href="tel:+17045945826"><Phone size={16} className="mr-2" />(704) 594-5826</a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <MobileCtaBar />
    </div>
  );
}