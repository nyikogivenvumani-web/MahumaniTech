import React from 'react';

export default function HeroSection() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-b from-[#f0f4ff] via-[#f7f9fd] to-white">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Top Tag Badge */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm text-xs font-semibold text-slate-700">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>South Africa • Industry Certified ICT Partner</span>
          </div>
        </div>

        {/* Hero Header Content */}
        <div className="text-center max-w-3xl mx-auto space-y-6">
          <h1 className="font-serif-display text-5xl md:text-7xl lg:text-8xl text-slate-900 tracking-tight leading-[0.95]">
            Service Through <span className="italic text-slate-700">Knowledge.</span>
          </h1>
          
          <p className="text-base md:text-lg text-slate-600 font-normal leading-relaxed max-w-2xl mx-auto">
            Mahumani Technologies provides reliable, proactive managed IT solutions, infrastructure support, hosting, and ICT equipment sales across Southern Africa.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button
              onClick={() => scrollToSection('services')}
              className="w-full sm:w-auto bg-slate-900 hover:bg-slate-800 text-white font-semibold px-8 py-3.5 rounded-full shadow-lg shadow-slate-900/10 transition-all transform hover:-translate-y-0.5"
            >
              Explore Our Services
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="w-full sm:w-auto bg-white hover:bg-slate-50 text-slate-900 border border-slate-200 font-semibold px-8 py-3.5 rounded-full shadow-sm transition-all"
            >
              Get in Touch
            </button>
          </div>
        </div>

        {/* Feature Preview Card / Graphic Box */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xl shadow-slate-900/5 p-4 md:p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 -mt-8 -mr-8 w-40 h-40 bg-blue-50 rounded-full blur-2xl pointer-events-none"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                <span className="block text-2xl font-bold text-slate-900 font-serif-display">2014</span>
                <span className="text-xs text-slate-500 font-medium uppercase tracking-wider mt-1 block">Established Legacy</span>
              </div>
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                <span className="block text-2xl font-bold text-slate-900 font-serif-display">3 Core Divisions</span>
                <span className="text-xs text-slate-500 font-medium uppercase tracking-wider mt-1 block">Support, Equipment & Hosting</span>
              </div>
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                <span className="block text-2xl font-bold text-slate-900 font-serif-display">SADC Region</span>
                <span className="text-xs text-slate-500 font-medium uppercase tracking-wider mt-1 block">Trusted Enterprise Reach</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}