import React from 'react';

// Institutional Client Images
import cidbLogo from '../assets/clients/cidb.png';
import dhetLogo from '../assets/clients/dhet.png';
import ehlanzeniLogo from '../assets/clients/ehlanzeni.png';
import ewsetaLogo from '../assets/clients/ewseta.png';
import jdaLogo from '../assets/clients/jda.png';
import limpopoLogo from '../assets/clients/limpopo.png';
import nrcsLogo from '../assets/clients/nrcs.png';
import purcoLogo from '../assets/clients/purco.png';

export default function ClientsSection() {
  const clients = [
    { name: 'PURCO SA', logo: purcoLogo },
    { name: 'Johannesburg Development Agency (JDA)', logo: jdaLogo },
    { name: 'Ehlanzeni TVET College', logo: ehlanzeniLogo },
    { name: 'CIDB', logo: cidbLogo },
    { name: 'DHET', logo: dhetLogo },
    { name: 'EWSETA', logo: ewsetaLogo },
    { name: 'Limpopo Provincial Treasury', logo: limpopoLogo },
    { name: 'NRCS', logo: nrcsLogo },
  ];

  const partners = [
    {
      name: 'Microsoft',
      role: 'Registered Partner',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg',
    },
    {
      name: 'HP',
      role: 'Business Partner',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/a/ad/HP_logo_2012.svg',
    },
    {
      name: 'IBM',
      role: 'Business Partner',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg',
    },
    {
      name: 'VMware',
      role: 'Registered Partner',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/VMware_logo.svg',
    },
    {
      name: 'Dell Technologies',
      role: 'Registered Partner',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/1/18/Dell_logo_2016.svg',
    },
  ];

  return (
    <section id="clients" className="py-24 bg-white border-t border-slate-100">
      <div className="max-w-6xl mx-auto px-4 space-y-20">
        
        {/* Main Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-100 text-slate-800 text-xs font-semibold uppercase tracking-wider">
            Ecosystem & Network
          </div>
          <h2 className="font-serif-display text-4xl md:text-5xl text-slate-900 tracking-tight">
            Trusted Across Southern Africa
          </h2>
          <p className="text-slate-600 text-sm md:text-base">
            Delivering robust enterprise IT infrastructure, managed services, and software solutions to major public and private sector organizations.
          </p>
        </div>

        {/* Section 1: Key Institutional Clients */}
        <div className="space-y-6">
          <div className="flex items-center justify-between border-b border-slate-100 pb-4">
            <h3 className="font-serif-display text-2xl text-slate-900">Key Institutional Clients</h3>
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Public & Private Sector</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {clients.map((client, index) => (
              <div 
                key={index}
                className="bg-[#f7f9fd] rounded-2xl border border-slate-200/80 p-6 flex flex-col items-center justify-center h-32 hover:border-slate-300 hover:shadow-md transition-all group"
              >
                <img 
                  src={client.logo} 
                  alt={client.name} 
                  className="max-h-16 max-w-[80%] object-contain grayscale group-hover:grayscale-0 transition-all duration-300 opacity-80 group-hover:opacity-100" 
                />
              </div>
            ))}
          </div>
        </div>

        {/* Section 2: Strategic OEM Technology Partners */}
        <div className="space-y-6">
          <div className="flex items-center justify-between border-b border-slate-100 pb-4">
            <h3 className="font-serif-display text-2xl text-slate-900">Technology Partners</h3>
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">OEM Alliances</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="bg-[#f7f9fd] rounded-2xl border border-slate-200/80 p-6 flex flex-col items-center justify-center gap-3 h-36 hover:border-slate-300 hover:shadow-md transition-all group"
              >
                <div className="h-10 w-full flex items-center justify-center">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="max-h-full max-w-[80%] object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <div className="text-center">
                  <span className="block text-xs font-bold text-slate-900">
                    {partner.name}
                  </span>
                  <span className="block text-[10px] text-slate-500 uppercase tracking-wider font-medium">
                    {partner.role}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}