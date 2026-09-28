import React from 'react';

// Components folder
import FadeIn from './components/FadeIn';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import WhatsAppButton from './components/WhatsAppButton';

// Pages folder
import AboutSection from './pages/AboutSection';
import ClientsSection from './pages/ClientsSection';
import ContactSection from './pages/ContactSection';
import HeroSection from './pages/HeroSection';
import LeadershipSection from './pages/LeadershipSection';
import ServicesSection from './pages/ServicesSection';

export default function App() {
  useScrollFadeIn(); // Initializes smooth fade-in for all matching classes

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main>
        <div className="fade-in-element">
          <HeroSection />
        </div>

        <div className="fade-in-element">
          <ServicesSection />
        </div>

        <div className="fade-in-element">
          <AboutSection />
        </div>

        <div className="fade-in-element">
          <ContactSection />
        </div>
      </main>

      <Footer />
    </div>
  );
}