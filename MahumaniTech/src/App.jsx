import React from "react";
import Navbar from "./components/Navbar.jsx";
import HeroSection from "./pages/HeroSection.jsx";
import AboutSection from "./pages/AboutSection.jsx";
import LeadershipSection from "./pages/LeadershipSection.jsx";
import ServicesSection from "./pages/ServicesSection.jsx";
import ClientsSection from "./pages/ClientsSection.jsx";

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