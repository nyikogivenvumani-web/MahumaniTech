import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import salesImg from '../assets/services/sales.png';
import disasterImg from '../assets/services/disater.png';
import hostingImg from '../assets/services/hosting.png';
import cloudImg from '../assets/services/cloud.png';
import pabxImg from '../assets/services/pabx.png';
import backupImg from '../assets/services/backup.png';
import remoteImg from '../assets/services/remote.png';
import webdevImg from '../assets/services/webdev.png';

export default function ServicesSection() {
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      title: 'Sales of ICT Equipment',
      description: 'Procurement and delivery of tier-one hardware, workstations, servers, and networking gear.',
      badge: 'Hardware & Tech',
      icon: salesImg,
      details: [
        'Enterprise laptop & desktop procurement (Dell, HP, Lenovo)',
        'Server infrastructure and rack deployment',
        'Cisco & Ubiquiti networking hardware',
        'Manufacturer warranties and SLA support contracts'
      ]
    },
    {
      title: 'Disaster Recovery',
      description: 'Business continuity planning, real-time data replication, and rapid disaster restoration.',
      badge: 'Security',
      icon: disasterImg,
      details: [
        'Automated real-time cloud snapshot backups',
        'RTO (Recovery Time Objective) under 1 hour',
        'Failover server cluster configurations',
        'Regular disaster drill testing and reporting'
      ]
    },
    {
      title: 'Hosting Services',
      description: 'Secure enterprise domain, email, and high-uptime server web hosting solutions.',
      badge: 'Infrastructure',
      icon: hostingImg,
      details: [
        '99.9% uptime SLA guaranteed',
        'Managed cPanel & VPS hosting environments',
        'Enterprise Microsoft 365 & Google Workspace setup',
        'Free SSL certificates & DDoS protection'
      ]
    },
    {
      title: 'Cloud Services',
      description: 'Scalable cloud migration, virtualization management, and remote infrastructure environments.',
      badge: 'Cloud',
      icon: cloudImg,
      details: [
        'AWS & Microsoft Azure infrastructure management',
        'Seamless physical-to-cloud server migration',
        'Cost optimization & continuous cloud monitoring',
        'Hybrid cloud network architectures'
      ]
    },
    {
      title: 'PABX Solutions',
      description: 'Modern VOIP, IP-telephony, and integrated PBX communication networks.',
      badge: 'Telecoms',
      icon: pabxImg,
      details: [
        'Cloud-hosted VoIP phone systems',
        'Custom IVR menus & call routing logic',
        'Mobile app extension integration for remote staff',
        'SIP trunking and reduced call rates'
      ]
    },
    {
      title: 'Backup Solutions',
      description: 'Automated on-site and off-site encrypted data backup management.',
      badge: 'Data Safety',
      icon: backupImg,
      details: [
        'AES-256 end-to-end encrypted backup storage',
        'Ransomware-proof immutable off-site backups',
        'Automated daily and weekly schedule retention',
        'Granular single-file and full-system restores'
      ]
    },
    {
      title: 'Remote Services',
      description: 'Fast 24/7 helpdesk remote diagnostics, troubleshooting, and system updates.',
      badge: 'Support',
      icon: remoteImg,
      details: [
        'Instant remote desktop support via secure access',
        'Proactive background system patching and updates',
        'Dedicated 24/7 ICT helpdesk ticketing system',
        'Antivirus and endpoint security monitoring'
      ]
    },
    {
      title: 'Web Development & Systems',
      description: 'Custom web application design, database engineering, and software system maintenance.',
      badge: 'Software',
      icon: webdevImg,
      details: [
        'Custom React, Tailwind CSS, & Node.js web applications',
        'Database architecture and API integration',
        'UI/UX design and mobile responsiveness',
        'Continuous maintenance and security patching'
      ]
    }
  ];

  const handleContactClick = () => {
    setSelectedService(null);
    const contactElement = document.getElementById('contact');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-24 bg-[#f7f9fd]">
      <div className="max-w-6xl mx-auto px-4 space-y-12">
        
        {/* Header */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 text-slate-800 text-xs font-semibold uppercase tracking-wider">
            Proactive ICT Model
          </div>
          <h2 className="font-serif-display text-4xl md:text-5xl text-slate-900 tracking-tight">
            Our Core Managed Services
          </h2>
          <p className="text-slate-600 text-base md:text-lg leading-relaxed max-w-3xl">
            Click on any service card below to view detailed features and technical specifications.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: (index % 4) * 0.1 }}
              onClick={() => setSelectedService(item)}
              className="bg-white rounded-3xl border border-slate-200 p-6 flex flex-col justify-between hover:shadow-xl hover:border-blue-200 transition-all duration-300 group cursor-pointer overflow-hidden h-full"
            >
              <div className="space-y-4">
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

                <h4 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors pt-2">
                  {item.title}
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
              
              <div className="pt-6 mt-4 border-t border-slate-100 flex items-center text-xs font-semibold text-blue-600 gap-1 group-hover:translate-x-1 transition-transform">
                <span>Learn more</span>
                <span>→</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Modal Popup */}
      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedService(null)}
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
            />

            {/* Modal Card */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.2 }}
              className="relative bg-white rounded-3xl shadow-2xl border border-slate-200 w-full max-w-lg p-6 md:p-8 z-10 overflow-hidden"
            >
              <button 
                onClick={() => setSelectedService(null)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-slate-100 text-slate-500 hover:bg-slate-200 hover:text-slate-900 flex items-center justify-center transition-colors font-bold text-lg"
              >
                ✕
              </button>

              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-bold uppercase tracking-widest text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                    {selectedService.badge}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-slate-900 font-serif-display">
                  {selectedService.title}
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed">
                  {selectedService.description}
                </p>

                <div className="space-y-3 pt-2">
                  <h4 className="text-xs font-semibold text-slate-900 uppercase tracking-wider">Key Capabilities & Features:</h4>
                  <ul className="space-y-2">
                    {selectedService.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-700">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-1.5 flex-shrink-0" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 flex items-center justify-end gap-3 border-t border-slate-100">
                  <button
                    onClick={() => setSelectedService(null)}
                    className="px-5 py-2.5 rounded-full text-xs font-semibold text-slate-600 hover:bg-slate-100 transition-colors"
                  >
                    Close
                  </button>
                  <button
                    onClick={handleContactClick}
                    className="px-6 py-2.5 rounded-full text-xs font-semibold bg-slate-900 hover:bg-slate-800 text-white shadow-md transition-all"
                  >
                    Request Quote / Information
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}