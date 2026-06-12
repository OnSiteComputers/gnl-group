import { useState, useEffect } from 'react';
import { base44 } from '@/api/base44Client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Phone, Mail, MapPin, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import LocalSection from '../components/LocalSection';

const PRACTICE_AREAS = ['Personal Injury', 'Criminal Defense', 'Family Law', 'Immigration', 'Estate Planning', 'Business Law', 'Real Estate', 'Employment Law', 'Other'];

const SERVICES_INTEREST = ['Legal SEO Strategy', 'Local Map Pack', 'Content Authority', 'Reputation Management', 'Performance Analytics', 'Website Optimization', 'All-In-One Web Package', 'Other'];

export default function Contact() {
  const [form, setForm] = useState({ firm_name: '', contact_name: '', email: '', phone: '', practice_area: '', service_interest: '', growth_goal: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);


  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await base44.entities.ContactSubmission.create({
        firm_name: form.firm_name,
        contact_name: form.contact_name,
        email: form.email,
        phone: form.phone,
        practice_area: form.practice_area,
        growth_goal: form.growth_goal,
        status: 'new'
      });
      setSubmitted(true);
    } catch (error) {
      console.error('Submission error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background font-body">
      <Navbar />

      <section id="contact-form-section" className="pt-32 pb-16 md:pt-32 md:pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Left — Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="h-px w-16 bg-secondary" />
                <span className="text-secondary font-body text-sm tracking-[0.3em] uppercase">Consultation Portal</span>
              </div>
              <h1 className="font-heading text-4xl md:text-5xl text-primary font-bold mb-6">
                Let's Build Your<br />Digital Authority
              </h1>
              <p className="font-body text-muted-foreground text-lg leading-relaxed mb-12">
                Schedule a complimentary strategy session. We'll analyze your firm's current digital presence and outline a roadmap to dominate search results in your practice area.
              </p>

              <div className="space-y-6">
                <a href="tel:+17045945826" className="flex items-center gap-4 group">
                  <div className="w-12 h-12 bg-primary flex items-center justify-center">
                    <Phone className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <div className="font-body text-xs uppercase tracking-widest text-muted-foreground">Call Us</div>
                    <div className="font-body text-primary group-hover:text-secondary transition-colors">(704) 594-5826</div>
                  </div>
                </a>
                <a href="mailto:linda@gnldigitalgroup.com" className="flex items-center gap-4 group">
                  <div className="w-12 h-12 bg-primary flex items-center justify-center">
                    <Mail className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <div className="font-body text-xs uppercase tracking-widest text-muted-foreground">Email</div>
                    <div className="font-body text-primary group-hover:text-secondary transition-colors">linda@gnldigitalgroup.com</div>
                  </div>
                </a>
                <a href="https://www.google.com/maps/dir//53+Cabarrus+Ave+West,+Concord,+NC+28025" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                  <div className="w-12 h-12 bg-primary flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <div className="font-body text-xs uppercase tracking-widest text-muted-foreground">Location</div>
                    <div className="font-body text-primary group-hover:text-secondary transition-colors">53 Cabarrus Ave West, Concord, NC 28025</div>
                  </div>
                </a>
              </div>
            </motion.div>

            {/* Right — Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-primary p-8 md:p-12"
            >
              {submitted ? (
                <div className="flex flex-col items-center justify-center h-full text-center py-16">
                  <CheckCircle className="w-16 h-16 text-secondary mb-6" />
                  <h3 className="font-heading text-2xl text-primary-foreground font-bold mb-3">Strategy Session Requested</h3>
                  <p className="font-body text-primary-foreground/60">We'll be in touch within 24 hours to schedule your complimentary consultation.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <h3 className="font-heading text-2xl text-primary-foreground font-bold mb-2">Request Strategy Session</h3>
                  <p className="font-body text-primary-foreground/50 text-sm mb-6">All fields marked with * are required.</p>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="font-body text-xs uppercase tracking-widest text-primary-foreground/50 mb-2 block">Firm Name *</label>
                      <Input required value={form.firm_name} onChange={e => setForm({...form, firm_name: e.target.value})} className="bg-primary-foreground/5 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/30 rounded-sm" placeholder="Smith & Associates" />
                    </div>
                    <div>
                      <label className="font-body text-xs uppercase tracking-widest text-primary-foreground/50 mb-2 block">Your Name *</label>
                      <Input required value={form.contact_name} onChange={e => setForm({...form, contact_name: e.target.value})} className="bg-primary-foreground/5 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/30 rounded-sm" placeholder="John Smith" />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="font-body text-xs uppercase tracking-widest text-primary-foreground/50 mb-2 block">Email *</label>
                      <Input required type="email" value={form.email} onChange={e => setForm({...form, email: e.target.value})} className="bg-primary-foreground/5 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/30 rounded-sm" placeholder="john@lawfirm.com" />
                    </div>
                    <div>
                      <label className="font-body text-xs uppercase tracking-widest text-primary-foreground/50 mb-2 block">Phone</label>
                      <Input value={form.phone} onChange={e => setForm({...form, phone: e.target.value})} className="bg-primary-foreground/5 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/30 rounded-sm" placeholder="(704) 555-1234" />
                    </div>
                  </div>

                  <div>
                    <label className="font-body text-xs uppercase tracking-widest text-primary-foreground/50 mb-2 block">Practice Area *</label>
                    <Select required onValueChange={v => setForm({...form, practice_area: v})}>
                      <SelectTrigger className="bg-primary-foreground/5 border-primary-foreground/20 text-primary-foreground rounded-sm">
                        <SelectValue placeholder="Select practice area" />
                      </SelectTrigger>
                      <SelectContent>
                        {PRACTICE_AREAS.map(a => <SelectItem key={a} value={a}>{a}</SelectItem>)}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="font-body text-xs uppercase tracking-widest text-primary-foreground/50 mb-2 block">Service Interest</label>
                    <Select onValueChange={v => setForm({...form, service_interest: v})}>
                      <SelectTrigger className="bg-primary-foreground/5 border-primary-foreground/20 text-primary-foreground rounded-sm">
                        <SelectValue placeholder="What are you most interested in?" />
                      </SelectTrigger>
                      <SelectContent>
                        {SERVICES_INTEREST.map(s => <SelectItem key={s} value={s}>{s}</SelectItem>)}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="font-body text-xs uppercase tracking-widest text-primary-foreground/50 mb-2 block">Growth Goal</label>
                    <Textarea value={form.growth_goal} onChange={e => setForm({...form, growth_goal: e.target.value})} className="bg-primary-foreground/5 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/30 rounded-sm min-h-[100px]" placeholder="What does growth look like for your firm? More consultations? Specific practice areas?" />
                  </div>

                  <Button type="submit" disabled={loading} size="lg" className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground font-body tracking-wide py-6 rounded-sm">
                    {loading ? 'SUBMITTING...' : 'REQUEST STRATEGY SESSION'}
                  </Button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      <LocalSection />
      <Footer />
    </div>
  );
}