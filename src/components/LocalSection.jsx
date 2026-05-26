import { MapPin, Phone, Mail, Clock, Navigation } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const INFO = {
  address: '53 Cabarrus Ave West, Concord, NC 28025',
  phone: '(704) 594-5826',
  phoneHref: 'tel:+17045945826',
  email: 'linda@gnldigitalgroup.com',
  directionsUrl: 'https://www.google.com/maps?q=53+Cabarrus+Ave+West,+Concord,+NC+28025',
  hours: 'Mon–Fri: 10AM–6PM | Sat–Sun: Closed',
};

export default function LocalSection() {
  return (
    <section className="py-24 bg-card">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-secondary font-medium text-sm tracking-widest uppercase">Local Nexus</span>
          <h2 className="font-heading text-4xl font-bold mt-3 text-primary">Visit the Lab</h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="border border-border overflow-hidden"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3254.5!2d-80.6399!3d35.3938!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8854b0c7e5a6e5a1%3A0x1234567890!2s53+Cabarrus+Ave+W%2C+Concord%2C+NC+28025!5e0!3m2!1sen!2sus!4v1700000000"
              width="100%"
              height="350"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="GNL Digital Group Location"
            />
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-primary flex items-center justify-center flex-shrink-0">
                <MapPin size={18} className="text-primary-foreground" />
              </div>
              <div>
                <p className="font-heading font-bold text-primary mb-1">Address</p>
                <p className="text-muted-foreground text-sm">{INFO.address}</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-primary flex items-center justify-center flex-shrink-0">
                <Phone size={18} className="text-primary-foreground" />
              </div>
              <div>
                <p className="font-heading font-bold text-primary mb-1">Phone</p>
                <a href={INFO.phoneHref} className="text-secondary hover:underline text-sm">{INFO.phone}</a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-primary flex items-center justify-center flex-shrink-0">
                <Mail size={18} className="text-primary-foreground" />
              </div>
              <div>
                <p className="font-heading font-bold text-primary mb-1">Email</p>
                <a href={`mailto:${INFO.email}`} className="text-secondary hover:underline text-sm">{INFO.email}</a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-primary flex items-center justify-center flex-shrink-0">
                <Clock size={18} className="text-primary-foreground" />
              </div>
              <div>
                <p className="font-heading font-bold text-primary mb-1">Hours</p>
                <p className="text-muted-foreground text-sm">{INFO.hours}</p>
              </div>
            </div>
            <Button asChild className="w-full rounded-sm gap-2">
              <a href={INFO.directionsUrl} target="_blank" rel="noopener noreferrer">
                <Navigation size={16} /> Get Directions
              </a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}