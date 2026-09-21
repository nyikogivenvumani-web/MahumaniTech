import React from 'react';

// Relative path imports
import ceoImg from '../assets/ceo.png';
import directorImg from '../assets/director.png';

export default function LeadershipSection() {
  return (
    <section id="leadership" className="py-24 bg-white border-t border-slate-100">
      <div className="max-w-6xl mx-auto px-4 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-100 text-slate-800 text-xs font-semibold uppercase tracking-wider">
            Executive Board
          </div>
          <h2 className="font-serif-display text-4xl md:text-5xl text-slate-900 tracking-tight">
            Leadership &amp; Vision
          </h2>
          <p className="text-slate-600 text-sm md:text-base">
            Guided by experienced ICT professionals with a commitment to technical excellence and client success.
          </p>
        </div>

        {/* Leadership Profiles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* CEO Profile */}
          <div className="bg-[#f7f9fd] rounded-3xl border border-slate-200 p-8 space-y-6 flex flex-col justify-between hover:border-slate-300 transition-all">
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <img 
                  src={ceoImg} 
                  alt="Thomas Shirindza" 
                  className="w-16 h-16 rounded-2xl object-cover border border-slate-200 shadow-sm shrink-0 bg-slate-100"
                />
                <div>
                  <h3 className="text-xl font-bold text-slate-900">Thomas Shirindza</h3>
                  <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mt-0.5">
                    Chief Executive Officer (CEO)
                  </p>
                </div>
              </div>

              <p className="text-slate-600 text-sm leading-relaxed">
                Thomas has extensive local experience in Information Technology, Hosting, Virtualization, Infrastructure Support, Security, Disaster Recovery, Servers, Operating Systems, and Microsoft Exchange over 7 years.
              </p>
            </div>

            {/* Qualifications */}
            <div className="pt-6 border-t border-slate-200/80 space-y-2">
              <span className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider">Qualifications</span>
              <ul className="text-xs text-slate-700 space-y-1 font-medium">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-900"></span>
                  <span>BSc (Computer Systems) – Heriot-Watt University (Edinburgh, UK)</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-900"></span>
                  <span>BTEC HND IT – London School of Business and Management</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-900"></span>
                  <span>International Diploma in Computer Studies – CTI College</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Director Profile */}
          <div className="bg-[#f7f9fd] rounded-3xl border border-slate-200 p-8 space-y-6 flex flex-col justify-between hover:border-slate-300 transition-all">
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <img 
                  src={directorImg} 
                  alt="Jamela Sieta Shirindza" 
                  className="w-16 h-16 rounded-2xl object-cover border border-slate-200 shadow-sm shrink-0 bg-slate-100"
                />
                <div>
                  <h3 className="text-xl font-bold text-slate-900">Jamela Sieta Shirindza</h3>
                  <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mt-0.5">
                    Director &amp; Head of Marketing
                  </p>
                </div>
              </div>

              <p className="text-slate-600 text-sm leading-relaxed">
                Jamela brings over 4 years of professional experience in Sales and Marketing. She drives strategic client outreach, brand positioning, and enterprise account growth across the Southern African development region.
              </p>
            </div>

            {/* Qualifications */}
            <div className="pt-6 border-t border-slate-200/80 space-y-2">
              <span className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider">Qualifications &amp; Education</span>
              <ul className="text-xs text-slate-700 space-y-1 font-medium">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-900"></span>
                  <span>National Diploma – Central Johannesburg College</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-900"></span>
                  <span>Bachelor's Candidate in Social Work – UNISA</span>
                </li>
              </ul>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}