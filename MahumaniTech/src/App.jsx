import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import AboutSection from './components/AboutSection';
import ClientsSection from './components/ClientsSection';
import LeadershipSection from './components/LeadershipSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import FadeIn from './components/FadeIn';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans antialiased selection:bg-slate-900 selection:text-white">
      {/* Sticky Top Navigation */}
      <Navbar />

      <main>
        {/* Main Landing Sections */}
        <HeroSection />
        
        <ServicesSection />

        <FadeIn direction="up">
          <AboutSection />
        </FadeIn>

        <FadeIn direction="up">
          <ClientsSection />
        </FadeIn>

        <FadeIn direction="up">
          <LeadershipSection />
        </FadeIn>

        <FadeIn direction="up">
          <ContactSection />
        </FadeIn>
      </main>

      {/* Footer & Floating Widgets */}
      <Footer />
      <WhatsAppButton />
    </div>
  );
}