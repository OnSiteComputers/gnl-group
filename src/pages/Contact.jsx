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
import MobileCtaBar from '../components/MobileCtaBar';

const INDUSTRIES = ['Law Firm', 'Medical / Healthcare', 'Real Estate', 'Home Services', 'Restaurant / Food', 'Retail', 'Financial Services', 'Auto / Automotive', 'Beauty / Wellness', 'Construction', 'Other'];
const SERVICES_INTEREST = ['Local SEO Strategy', 'Local Map Pack', 'Content Authority', 'Reputation Management', 'Performance Analytics', 'Website Optimization', 'All-In-One Web Package', 'Other'];

export default function Contact() {
  const [form, setForm] = useState({ firm_name: '', contact_name: '', email: '', phone: '', industry: '', service_interest: '', growth_goal: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => { window.scrollTo({ top: 0, behavior: 'smooth' }); }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await base44.entities.ContactSubmission.create({
        firm_name: form.firm_name,
        contact_name: form.contact_name,
        email: form.email,
        phone: form.phone,
        practice_area: form.industry,
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
    <div className="min-h-screen font-body pb-16 lg:pb-0">
      <Navbar />

      <section className="pt-56 min-h-screen grid lg:grid-cols-2">
        {/* Left — Info */}
        <div className="bg-primary text-primary-foreground flex flex-col justify-center px-8 lg:px-16 py-20">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
            <span className="text-secondary font-medium text-sm tracking-widest uppercase">Consultation Portal</span>
            <h1 className="font-heading text-4xl md:text-5xl font-bold mt-3 mb-4 leading-tight">
              Let's Build Your<br />Digital Authority
            </h1>
            <p className="text-primary-foreground/70 leading-relaxed mb-10">
              Schedule a complimentary strategy session. We'll analyze your business's current digital presence and outline a roadmap to dominate search results in your market.
            </p>
            <div className="space-y-4">
              <a href="tel:+17045945826" className="flex items-start gap-3 group">
                <div className="w-10 h-10 bg-secondary flex items-center justify-center flex-shrink-0">
                  <Phone size={16} className="text-primary" />
                </div>
                <div>
                  <p className="text-primary-foreground/50 text-xs uppercase tracking-widest">Call Us</p>
                  <p className="text-primary-foreground font-semibold group-hover:text-secondary transition-colors">(704) 594-5826</p>
                </div>
              </a>
              <a href="mailto:linda@gnldigitalgroup.com" className="flex items-start gap-3 group">
                <div className="w-10 h-10 bg-secondary flex items-center justify-center flex-shrink-0">
                  <Mail size={16} className="text-primary" />
                </div>
                <div>
                  <p className="text-primary-foreground/50 text-xs uppercase tracking-widest">Email</p>
                  <p className="text-primary-foreground font-semibold group-hover:text-secondary transition-colors">linda@gnldigitalgroup.com</p>
                </div>
              </a>
              <a href="https://www.google.com/maps/dir//53+Cabarrus+Ave+West,+Concord,+NC+28025" target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 group">
                <div className="w-10 h-10 bg-secondary flex items-center justify-center flex-shrink-0">
                  <MapPin size={16} className="text-primary" />
                </div>
                <div>
                  <p className="text-primary-foreground/50 text-xs uppercase tracking-widest">Location</p>
                  <p className="text-primary-foreground font-semibold group-hover:text-secondary transition-colors">53 Cabarrus Ave West, Concord, NC 28025</p>
                </div>
              </a>
            </div>
          </motion.div>
        </div>

        {/* Right — Form */}
        <div className="bg-background flex flex-col justify-center px-8 lg:px-16 py-20">
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center"
            >
              <CheckCircle size={48} className="text-secondary mx-auto mb-4" />
              <h3 className="font-heading text-2xl font-bold text-primary mb-2">Strategy Session Requested</h3>
              <p className="text-muted-foreground">We'll be in touch within 24 hours to schedule your complimentary consultation.</p>
            </motion.div>
          ) : (
            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              <div>
                <h3 className="font-heading text-2xl font-bold text-primary mb-1">Request Strategy Session</h3>
                <p className="text-muted-foreground text-sm">All fields marked with * are required.</p>
              </div>

              <div>
                <label className="text-xs font-semibold text-primary uppercase tracking-wider mb-1 block">Firm Name *</label>
                <Input value={form.firm_name} onChange={e => setForm({...form, firm_name: e.target.value})} placeholder="Smith & Associates" required className="rounded-sm" />
              </div>
              <div>
                <label className="text-xs font-semibold text-primary uppercase tracking-wider mb-1 block">Your Name *</label>
                <Input value={form.contact_name} onChange={e => setForm({...form, contact_name: e.target.value})} placeholder="John Smith" required className="rounded-sm" />
              </div>
              <div>
                <label className="text-xs font-semibold text-primary uppercase tracking-wider mb-1 block">Email *</label>
                <Input type="email" value={form.email} onChange={e => setForm({...form, email: e.target.value})} placeholder="john@lawfirm.com" required className="rounded-sm" />
              </div>
              <div>
                <label className="text-xs font-semibold text-primary uppercase tracking-wider mb-1 block">Phone</label>
                <Input value={form.phone} onChange={e => setForm({...form, phone: e.target.value})} placeholder="(704) 555-1234" className="rounded-sm" />
              </div>
              <div>
                <label className="text-xs font-semibold text-primary uppercase tracking-wider mb-1 block">Industry *</label>
                <Select onValueChange={v => setForm({...form, industry: v})} required>
                  <SelectTrigger className="rounded-sm"><SelectValue placeholder="Select your industry" /></SelectTrigger>
                  <SelectContent>{INDUSTRIES.map(a => <SelectItem key={a} value={a}>{a}</SelectItem>)}</SelectContent>
                </Select>
              </div>
              <div>
                <label className="text-xs font-semibold text-primary uppercase tracking-wider mb-1 block">Service Interest</label>
                <Select onValueChange={v => setForm({...form, service_interest: v})}>
                  <SelectTrigger className="rounded-sm"><SelectValue placeholder="Select service" /></SelectTrigger>
                  <SelectContent>{SERVICES_INTEREST.map(s => <SelectItem key={s} value={s}>{s}</SelectItem>)}</SelectContent>
                </Select>
              </div>
              <div>
                <label className="text-xs font-semibold text-primary uppercase tracking-wider mb-1 block">Growth Goal</label>
                <Textarea value={form.growth_goal} onChange={e => setForm({...form, growth_goal: e.target.value})} placeholder="Tell us about your growth goals..." className="rounded-sm resize-none" rows={3} />
              </div>
              <Button type="submit" disabled={loading} className="w-full rounded-sm font-bold tracking-wide">
                {loading ? 'Submitting...' : 'REQUEST FREE STRATEGY SESSION'}
              </Button>
            </motion.form>
          )}
        </div>
      </section>

      <LocalSection />
      <Footer />
      <MobileCtaBar />
    </div>
  );
}