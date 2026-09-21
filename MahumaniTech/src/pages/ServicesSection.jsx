import React from 'react';

import salesImg from '../assets/services/sales.png';
import disasterImg from '../assets/services/disater.png';
import hostingImg from '../assets/services/hosting.png';
import cloudImg from '../assets/services/cloud.png';
import pabxImg from '../assets/services/pabx.png';
import backupImg from '../assets/services/backup.png';
import remoteImg from '../assets/services/remote.png';
import webdevImg from '../assets/services/webdev.png';

export default function ServicesSection() {
  const services = [
    {
      title: 'Sales of ICT Equipment',
      description: 'Procurement and delivery of tier-one hardware, workstations, servers, and networking gear.',
      badge: 'Hardware & Tech',
      icon: salesImg
    },
    {
      title: 'Disaster Recovery',
      description: 'Business continuity planning, real-time data replication, and rapid disaster restoration.',
      badge: 'Security',
      icon: disasterImg
    },
    {
      title: 'Hosting Services',
      description: 'Secure enterprise domain, email, and high-uptime server web hosting solutions.',
      badge: 'Infrastructure',
      icon: hostingImg
    },
    {
      title: 'Cloud Services',
      description: 'Scalable cloud migration, virtualization management, and remote infrastructure environments.',
      badge: 'Cloud',
      icon: cloudImg
    },
    {
      title: 'PABX Solutions',
      description: 'Modern VOIP, IP-telephony, and integrated PBX communication networks.',
      badge: 'Telecoms',
      icon: pabxImg
    },
    {
      title: 'Backup Solutions',
      description: 'Automated on-site and off-site encrypted data backup management.',
      badge: 'Data Safety',
      icon: backupImg
    },
    {
      title: 'Remote Services',
      description: 'Fast 24/7 helpdesk remote diagnostics, troubleshooting, and system updates.',
      badge: 'Support',
      icon: remoteImg
    },
    {
      title: 'Web Development & Systems',
      description: 'Custom web application design, database engineering, and software system maintenance.',
      badge: 'Software',
      icon: webdevImg
    }
  ];

  return (
    <section id="services" className="py-24 bg-[#f7f9fd]">
      <div className="max-w-6xl mx-auto px-4 space-y-16">
        
        {/* Managed IT Model Overview Header */}
        <div className="bg-white rounded-3xl border border-slate-200/80 p-8 md:p-12 shadow-sm space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 text-slate-800 text-xs font-semibold uppercase tracking-wider">
            Proactive ICT Model
          </div>
          <h2 className="font-serif-display text-4xl md:text-5xl text-slate-900 tracking-tight">
            Our Core Managed Services
          </h2>
          <p className="text-slate-600 text-base md:text-lg leading-relaxed max-w-4xl">
            Based on a <strong className="text-slate-900 font-semibold">managed services model</strong>, our solutions are proactive rather than reactive. We prevent IT issues before they turn into costly downtime.
          </p>
        </div>

        {/* Service Cards Grid */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="font-serif-display text-2xl md:text-3xl text-slate-900">Service Offerings</h3>
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">8 Specialized Divisions</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((item, index) => (
              <div 
                key={index}
                className="bg-white rounded-3xl border border-slate-200 p-6 flex flex-col justify-between hover:shadow-lg hover:border-slate-300 transition-all duration-300 group overflow-hidden"
              >
                <div className="space-y-4">
                  {/* Banner / Image Display */}
                  <div className="relative w-full h-36 rounded-2xl overflow-hidden bg-slate-100 border border-slate-100">
                    <img 
                      src={item.icon} 
                      alt={item.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
                    />
                    <span className="absolute top-2 right-2 text-[10px] font-bold uppercase tracking-widest text-slate-800 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-full shadow-sm">
                      {item.badge}
                    </span>
                  </div>

                  <h4 className="text-lg font-bold text-slate-900 group-hover:text-slate-800 transition-colors pt-2">
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
                
                <div className="pt-6 mt-4 border-t border-slate-100 flex items-center text-xs font-semibold text-slate-900 gap-1 group-hover:translate-x-1 transition-transform">
                  <span>Learn more</span>
                  <span>→</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}