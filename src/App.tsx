import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import WhyUs from '@/components/WhyUs';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import WhatsAppFab from '@/components/WhatsAppFab';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Services />
        <WhyUs />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFab />
    </div>
  );
}
