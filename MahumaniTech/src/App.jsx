import React from "react";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import WhatsAppButton from "./components/WhatsAppButton.jsx";

import HeroSection from "./pages/HeroSection.jsx";
import AboutSection from "./pages/AboutSection.jsx";
import LeadershipSection from "./pages/LeadershipSection.jsx";
// Temporarily comment out the external import to isolate the issue:
// import ServicesSection from "./pages/ServicesSection.jsx";
import ClientsSection from "./pages/ClientsSection.jsx";
import ContactSection from "./pages/ContactSection.jsx";

function ServicesSection() {
  return (
    <section id="services" className="py-20 text-center bg-slate-50">
      <h2 className="text-3xl font-bold">Services Section Placeholder</h2>
    </section>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans antialiased">
      <Navbar />
      <main className="pt-20">
        <HeroSection />
        <AboutSection />
        <LeadershipSection />
        <ServicesSection />
        <ClientsSection />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}