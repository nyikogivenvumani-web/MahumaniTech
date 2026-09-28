import React, { useState } from 'react';

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // Replace 'YOUR_FORMSPREE_ID' with your ID from Formspree connected to info@mahumanitec.co.za
  const FORMSPREE_ID = 'https://formspree.io/f/xnpnoezw';

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage('');

    try {
      const response = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: `New Web Inquiry from ${formData.name}`
        })
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
      } else {
        const data = await response.json();
        setErrorMessage(data?.errors?.[0]?.message || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      setErrorMessage('Unable to send message right now. Please check your internet connection.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-[#f7f9fd]">
      <div className="max-w-6xl mx-auto px-4 space-y-12">
        
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-200 text-slate-800 text-xs font-semibold uppercase tracking-wider">
            Get In Touch
          </div>
          <h2 className="font-serif-display text-4xl md:text-6xl text-slate-900">Contact Mahumani Technologies</h2>
          <p className="text-sm text-slate-600">Reach out for ICT inquiries, managed support proposals, or consultation meetings.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Direct Details Card */}
          <div className="lg:col-span-5 bg-white rounded-3xl border border-slate-200 p-8 shadow-sm space-y-8">
            <h3 className="text-xl font-bold text-slate-900 font-serif-display">Contact Details</h3>

            <div className="space-y-6 text-slate-700 text-sm">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center font-bold text-slate-900 shrink-0">
                  
                </div>
                <div>
                  <span className="block text-xs font-semibold uppercase text-slate-500">Phone Support</span>
                  <a href="tel:+27659645596" className="text-base font-bold text-slate-900 hover:underline">
                    (+27) 65 964 5596
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center font-bold text-slate-900 shrink-0">
                  
                </div>
                <div>
                  <span className="block text-xs font-semibold uppercase text-slate-500">Email Address</span>
                  <a href="mailto:info@mahumanitec.co.za" className="text-base font-bold text-slate-900 hover:underline">
                    info@mahumanitec.co.za
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center font-bold text-slate-900 shrink-0">
                  
                </div>
                <div>
                  <span className="block text-xs font-semibold uppercase text-slate-500">Regional Coverage</span>
                  <p className="text-base font-bold text-slate-900">Gauteng & SADC Region</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center font-bold text-slate-900 shrink-0">
                  
                </div>
                <div>
                  <span className="block text-xs font-semibold uppercase text-slate-500">Operating Hours</span>
                  <p className="text-sm text-slate-800 font-medium">Mon - Fri: 08:00 - 17:00</p>
                  <p className="text-xs text-slate-500">Remote Support available 24/7</p>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl border border-slate-200 p-8 shadow-sm">
            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-12 h-12 bg-emerald-100 text-emerald-800 rounded-full flex items-center justify-center mx-auto text-xl font-bold">
                  ✓
                </div>
                <h4 className="text-2xl font-serif-display font-bold text-slate-900">Message Received</h4>
                <p className="text-sm text-slate-600 max-w-sm mx-auto">
                  Thank you for reaching out. Your message was sent to <strong className="text-slate-800">info@mahumanitec.co.za</strong> and a representative will respond shortly.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setErrorMessage('');
                  }}
                  className="mt-4 text-xs font-semibold text-slate-900 underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="text-xl font-bold text-slate-900 font-serif-display mb-4">Send a Direct Inquiry</h3>

                {errorMessage && (
                  <div className="p-3 bg-red-50 border border-red-200 text-red-600 text-xs rounded-xl">
                    {errorMessage}
                  </div>
                )}

                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">Your Full Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="e.g. Thomas Shirindza"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-2xl bg-[#f7f9fd] border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="name@company.co.za"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-2xl bg-[#f7f9fd] border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">Message / Requirements</label>
                  <textarea
                    name="message"
                    rows={4}
                    required
                    placeholder="Describe your IT infrastructure or hosting requirements..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-2xl bg-[#f7f9fd] border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900 resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-slate-900 hover:bg-slate-800 text-white font-semibold py-3.5 rounded-full shadow-md transition-all text-sm mt-2 disabled:opacity-50"
                >
                  {loading ? 'Sending Inquiry...' : 'Submit Inquiry'}
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}