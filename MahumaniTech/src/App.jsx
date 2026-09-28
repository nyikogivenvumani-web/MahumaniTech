import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import { useScrollFadeIn } from './useScrollFadeIn';

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