import React, { useState, useEffect } from 'react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 py-4 md:py-6 transition-all duration-300">
      <div className="max-w-6xl mx-auto">
        <nav
          className={`flex items-center justify-between px-6 py-3 rounded-full border transition-all duration-300 ${
            isScrolled
              ? 'bg-white/80 backdrop-blur-md border-slate-200/80 shadow-lg shadow-slate-900/5'
              : 'bg-white/90 backdrop-blur-sm border-slate-200 shadow-sm'
          }`}
        >
          {/* Logo Brand */}
          <button 
            onClick={() => scrollToSection('home')}
            className="flex items-center gap-3 text-left group focus:outline-none"
          >
            <div className="w-9 h-9 rounded-full bg-slate-900 text-white font-serif-display text-xl flex items-center justify-center font-bold shadow-md group-hover:scale-105 transition-transform">
              M
            </div>
            <div>
              <span className="block text-base font-bold tracking-tight text-slate-900 leading-none">
                Mahumani
              </span>
              <span className="block text-[10px] text-slate-500 font-medium tracking-wide uppercase mt-0.5">
                Technologies
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
            <button
              onClick={() => scrollToSection('home')}
              className="hover:text-slate-900 transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="hover:text-slate-900 transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="hover:text-slate-900 transition-colors"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('clients')}
              className="hover:text-slate-900 transition-colors"
            >
              Clients & Partners
            </button>
          </div>

          {/* Action CTA Button */}
          <div className="hidden md:flex items-center">
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold px-5 py-2.5 rounded-full shadow-md transition-all transform hover:-translate-y-0.5"
            >
              Contact Us
            </button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-slate-700 hover:text-slate-900 p-1 focus:outline-none"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </nav>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-2 bg-white rounded-3xl border border-slate-200 p-6 shadow-xl space-y-4 text-center text-slate-700 font-medium text-base animate-in fade-in slide-in-from-top-2 duration-200">
            <button
              onClick={() => scrollToSection('home')}
              className="block w-full py-2 hover:text-slate-900"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="block w-full py-2 hover:text-slate-900"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="block w-full py-2 hover:text-slate-900"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('clients')}
              className="block w-full py-2 hover:text-slate-900"
            >
              Clients & Partners
            </button>
            <div className="pt-2 border-t border-slate-100">
              <button
                onClick={() => scrollToSection('contact')}
                className="w-full bg-slate-900 text-white font-semibold py-3 rounded-full shadow-md"
              >
                Contact Us
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}