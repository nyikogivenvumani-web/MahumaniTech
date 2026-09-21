import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './pages/HeroSection';
import AboutSection from './pages/AboutSection';
import LeadershipSection from './pages/LeadershipSection';
import ServicesSection from './pages/ServicesSection';
import ClientsSection from './pages/ClientsSection';
import ContactSection from './pages/ContactSection';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

export default function App() {
  return (
    <div className="min-h-screen bg-[#f7f9fd] text-slate-900 selection:bg-slate-900 selection:text-white">
      {/* Floating Navbar */}
      <Navbar />

      {/* Main Single Page Sections */}
      <main>
        <section id="home">
          <HeroSection />
        </section>

        <section id="about">
          <AboutSection />
          <LeadershipSection />
        </section>

        <section id="services">
          <ServicesSection />
        </section>

        <section id="clients">
          <ClientsSection />
        </section>

        <section id="contact">
          <ContactSection />
        </section>
      </main>

      {/* Footer & Floating Widgets */}
      <Footer />
      <WhatsAppButton />
    </div>
  );
}