import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-12 px-4 rounded-t-[2.5rem] mt-20">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white text-slate-900 font-serif-display text-2xl flex items-center justify-center font-bold">
                M
              </div>
              <div>
                <span className="block text-lg font-bold text-white tracking-tight leading-none">
                  Mahumani
                </span>
                <span className="block text-[11px] text-slate-400 font-medium tracking-wider uppercase mt-0.5">
                  Technologies (Pty) Ltd
                </span>
              </div>
            </div>
            
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm pt-2">
              Service through knowledge. Providing managed ICT solutions, infrastructure support, hosting, and cloud services across Southern Africa since 2014.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-white text-xs font-semibold uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <button 
                  onClick={() => scrollToSection('home')} 
                  className="hover:text-white transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('about')} 
                  className="hover:text-white transition-colors"
                >
                  About Us & Leadership
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('services')} 
                  className="hover:text-white transition-colors"
                >
                  Core ICT Services
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('clients')} 
                  className="hover:text-white transition-colors"
                >
                  Clients & Partners
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-white text-xs font-semibold uppercase tracking-wider">
              Direct Contact
            </h4>
            <div className="space-y-2 text-sm text-slate-400">
              <p className="flex items-center gap-2">
                <span className="text-slate-500">Phone:</span> 
                <a href="tel:+27659645596" className="text-slate-200 hover:underline">
                  (+27) 65 964 5596
                </a>
              </p>
              <p className="flex items-start gap-2">
                <span className="text-slate-500">Location:</span> 
                <span className="text-slate-200">Gauteng & SADC Region</span>
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {currentYear} Mahumani Technologies (Pty) Ltd. All rights reserved.</p>
          <div className="flex gap-6">
            <button onClick={() => scrollToSection('home')} className="hover:text-slate-400">
              Back to top ↑
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}