import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setSending(true);
    await new Promise(r => setTimeout(r, 1000));
    toast.success("Message sent! We'll be in touch soon.");
    setForm({ name: '', email: '', message: '' });
    setSending(false);
  };

  return (
    <section id="contact" className="py-32 bg-card">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-sm font-medium text-primary">Get in Touch</span>
            <h2 className="font-heading font-bold text-4xl md:text-5xl mt-3 tracking-tight mb-6">
              Let's build something great together
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-10 max-w-md">
              Have a project in mind? We'd love to hear about it. Drop us a line and we'll get back to you within 24 hours.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-muted-foreground">
                <Mail size={18} className="text-primary" />
                <span>hello@gnldigital.com</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin size={18} className="text-primary" />
                <span>Amsterdam, Netherlands</span>
              </div>
            </div>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="space-y-5"
          >
            <Input placeholder="Your name" value={form.name} onChange={e => setForm(p => ({ ...p, name: e.target.value }))} className="h-12 rounded-xl bg-background" />
            <Input placeholder="Email address" type="email" value={form.email} onChange={e => setForm(p => ({ ...p, email: e.target.value }))} className="h-12 rounded-xl bg-background" />
            <Textarea placeholder="Tell us about your project..." rows={5} value={form.message} onChange={e => setForm(p => ({ ...p, message: e.target.value }))} className="rounded-xl bg-background resize-none" />
            <Button type="submit" disabled={sending} className="w-full h-12 rounded-xl gap-2">
              {sending ? 'Sending...' : 'Send Message'} <Send size={16} />
            </Button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}