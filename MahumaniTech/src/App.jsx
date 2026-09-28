import React from 'react';

// UI Components (src/components/)
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

// Page Sections (src/pages/)
import HeroSection from './pages/HeroSection';
import ServicesSection from './pages/ServicesSection';
import AboutSection from './pages/AboutSection';
import ClientsSection from './pages/ClientsSection';
import LeadershipSection from './pages/LeadershipSection';
import ContactSection from './pages/ContactSection';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans antialiased">
      <Navbar />
      <main>
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <ClientsSection />
        <LeadershipSection />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}