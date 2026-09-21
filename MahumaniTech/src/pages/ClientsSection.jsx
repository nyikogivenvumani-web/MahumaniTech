import React from 'react';

export default function ClientsSection() {
  const clients = [
    'Johannesburg Development Agency (JDA)',
    'PURCO SA (ISO 9001:2015 Certified)',
    'Ehlanzeni TVET College',
    'Southern African Sector Enterprises'
  ];

  const partners = [
    'Microsoft Registered Partner',
    'HP Business Partner',
    'IBM Business Partner',
    'VMware Registered Partner',
    'Dell Registered Partner'
  ];

  return (
    <section id="clients" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 space-y-20">
        
        {/* Clients Sub-section */}
        <div className="space-y-8 text-center">
          <div className="space-y-2">
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-widest">Trust & Experience</span>
            <h2 className="font-serif-display text-4xl md:text-5xl text-slate-900">Our Trusted Clients</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
            {clients.map((client, idx) => (
              <div 
                key={idx} 
                className="p-6 rounded-3xl bg-[#f7f9fd] border border-slate-200 flex items-center justify-center text-center text-slate-800 font-bold text-sm shadow-xs min-h-[100px]"
              >
                {client}
              </div>
            ))}
          </div>
        </div>

        {/* Strategic OEM Partners Sub-section */}
        <div className="pt-12 border-t border-slate-100 space-y-8 text-center">
          <div className="space-y-2">
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-widest">Industry Ecosystem</span>
            <h3 className="font-serif-display text-3xl md:text-4xl text-slate-900">Official Technology Partners</h3>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {partners.map((partner, idx) => (
              <div 
                key={idx} 
                className="px-6 py-3.5 rounded-full bg-slate-900 text-white text-xs font-semibold tracking-wide shadow-md hover:bg-slate-800 transition-colors"
              >
                {partner}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}