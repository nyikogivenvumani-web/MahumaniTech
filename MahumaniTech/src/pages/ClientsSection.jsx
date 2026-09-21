import React from 'react';

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

  return (
    <section id="clients" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-100 text-slate-800 text-xs font-semibold uppercase tracking-wider">
            Key Institutional Clients & Partners
          </div>
          <h2 className="font-serif-display text-4xl md:text-5xl text-slate-900 tracking-tight">
            Trusted Across Southern Africa
          </h2>
          <p className="text-slate-600 text-sm md:text-base">
            Delivering robust enterprise IT infrastructure, managed services, and software solutions to major public and private sector organizations.
          </p>
        </div>

        {/* Client Logos Grid */}
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
    </section>
  );
}