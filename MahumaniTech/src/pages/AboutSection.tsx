import React from 'react';

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 space-y-20">
        
        {/* About Us Header & Overview */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-100 text-slate-800 text-xs font-semibold uppercase tracking-wider">
              Corporate Profile
            </div>
            <h2 className="font-serif-display text-4xl md:text-6xl text-slate-900 tracking-tight leading-tight">
              About Mahumani Technologies
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              Established in 2014, Mahumani Technologies is an established ICT company with over 6 years of collective experience in Information Technology, Hosting, Virtualization, Infrastructure Support, Security, Disaster Recovery, various Operating Systems, and Microsoft Exchange Services.
            </p>
            <p className="text-slate-600 text-base leading-relaxed">
              The company is operated under the leadership of its Chief Executive Officer, <strong className="text-slate-900 font-semibold">Thomas Shirindza</strong>, who brings extensive technical industry experience, joined by his wife <strong className="text-slate-900 font-semibold">Jamela</strong>, who leads Marketing and Sales.
            </p>
          </div>

          {/* Vision, Mission, Values Cards */}
          <div className="md:col-span-6 space-y-4">
            
            {/* Vision */}
            <div className="p-6 rounded-3xl bg-[#f7f9fd] border border-slate-200/80 shadow-sm space-y-2">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold text-sm">V</div>
                <h3 className="text-lg font-bold text-slate-900">Our Vision</h3>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed pl-11">
                Our vision is to be a niche diversified ICT services group in the Southern African Development Community (SADC) Region.
              </p>
            </div>

            {/* Mission */}
            <div className="p-6 rounded-3xl bg-[#f7f9fd] border border-slate-200/80 shadow-sm space-y-2">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold text-sm">M</div>
                <h3 className="text-lg font-bold text-slate-900">Our Mission</h3>
              </div>
              <ul className="text-sm text-slate-600 space-y-1.5 pl-11 list-disc list-inside">
                <li>To be a trusted partner by leveraging independence, expertise, and core values.</li>
                <li>To be a knowledge leader providing innovation and origination for entrepreneurship.</li>
                <li>To be a firm committed to consistent, measurable results for all stakeholders.</li>
              </ul>
            </div>

            {/* Values */}
            <div className="p-6 rounded-3xl bg-[#f7f9fd] border border-slate-200/80 shadow-sm space-y-2">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold text-sm">V</div>
                <h3 className="text-lg font-bold text-slate-900">Core Values</h3>
              </div>
              <div className="flex flex-wrap gap-2 pl-11 pt-1">
                {['Talent Management', 'Performance Culture', 'Client Consciousness', 'Professionalism & Integrity', 'Leading Research Repository'].map((val, idx) => (
                  <span key={idx} className="bg-white border border-slate-200 text-slate-700 text-xs font-medium px-3 py-1.5 rounded-full shadow-2xs">
                    {val}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* Leadership Sub-Section */}
        <div className="pt-12 border-t border-slate-100">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
            <h3 className="font-serif-display text-3xl md:text-4xl text-slate-900">Executive Leadership</h3>
            <p className="text-sm text-slate-600">The experienced minds guiding Mahumani Technologies forward.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Thomas Shirindza */}
            <div className="bg-[#f7f9fd] rounded-3xl border border-slate-200 p-8 space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-slate-800 text-white font-serif-display text-2xl flex items-center justify-center font-bold shrink-0 shadow-md">
                  TS
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900">Thomas Shirindza</h4>
                  <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Chief Executive Officer (CEO)</p>
                </div>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">
                Thomas has extensive local experience in Information Technology, Hosting, Virtualization, Infrastructure Support, Security, Disaster Recovery, Servers, Operating Systems, and Microsoft Exchange over 7 years. He holds a <strong className="text-slate-900 font-semibold">BSc (Computer Systems)</strong> from Heriot Watt University (Edinburgh, UK), a BTEC HND IT from London School of Business and Management, and an International Diploma in Computer Studies from CTI College (Randburg, South Africa).
              </p>
            </div>

            {/* Jamela Sieta Shirindza */}
            <div className="bg-[#f7f9fd] rounded-3xl border border-slate-200 p-8 space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-slate-800 text-white font-serif-display text-2xl flex items-center justify-center font-bold shrink-0 shadow-md">
                  JS
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900">Jamela Sieta Shirindza</h4>
                  <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Director & Head of Marketing</p>
                </div>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">
                Jamela brings more than 4 years of professional experience in Sales and Marketing. She holds a National Diploma from Central Johannesburg College and is currently advancing her studies towards a Bachelor's degree in Social Work at the University of South Africa (UNISA).
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}