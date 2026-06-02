import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';
import Reviews from '../components/Reviews';
import FAQ from '../components/FAQ';
import ContactCTA from '../components/ContactCTA';
import Footer from '../components/Footer';
import MobileCtaBar from '../components/MobileCtaBar';


const HERO_IMG = 'https://media.base44.com/images/public/6a152f2d01c96ed4b2ab605a/43219eb96_generated_14ef41b6.png';
const SERVICES_IMG = 'https://media.base44.com/images/public/6a152f2d01c96ed4b2ab605a/e95a8997e_generated_3f65a1f8.png';

export default function Home() {
  return (
    <div className="min-h-screen font-body pb-16 lg:pb-0">
      <Navbar />
      <Hero heroImage={HERO_IMG} />
      <Services servicesImage={SERVICES_IMG} />
      <Testimonials />
      <Reviews />
      <FAQ />
      <ContactCTA />
      <Footer />
      <MobileCtaBar />

    </div>
  );
}