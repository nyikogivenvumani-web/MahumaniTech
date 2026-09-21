import React, { useState } from 'react';
import logoImg from '../assets/logo.png';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-6xl mx-auto px-4 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#hero" className="flex items-center gap-3 group">
          <img 
            src={logoImg} 
            alt="Mahumani Technologies Logo" 
            className="h-10 w-auto object-contain transition-transform group-hover:scale-105" 
          />
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
          <a href="#about" className="hover:text-slate-900 transition-colors">About</a>
          <a href="#leadership" className="hover:text-slate-900 transition-colors">Leadership</a>
          <a href="#services" className="hover:text-slate-900 transition-colors">Services</a>
          <a href="#clients" className="hover:text-slate-900 transition-colors">Clients</a>
          <a 
            href="#contact" 
            className="px-5 py-2.5 rounded-full bg-slate-900 text-white font-semibold hover:bg-slate-800 transition-colors shadow-sm"
          >
            Get in Touch
          </a>
        </nav>

        {/* Mobile Hamburger Toggle */}
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="md:hidden p-2 text-slate-700 hover:text-slate-900 focus:outline-none"
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-slate-100 px-4 pt-2 pb-6 space-y-3 font-medium text-slate-700">
          <a href="#about" onClick={() => setIsOpen(false)} className="block py-2 hover:text-slate-900">About</a>
          <a href="#leadership" onClick={() => setIsOpen(false)} className="block py-2 hover:text-slate-900">Leadership</a>
          <a href="#services" onClick={() => setIsOpen(false)} className="block py-2 hover:text-slate-900">Services</a>
          <a href="#clients" onClick={() => setIsOpen(false)} className="block py-2 hover:text-slate-900">Clients</a>
          <a href="#contact" onClick={() => setIsOpen(false)} className="block py-2 text-blue-600 font-semibold">Get in Touch</a>
        </div>
      )}
    </header>
  );
}