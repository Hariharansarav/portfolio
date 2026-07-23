import React, { useState } from 'react';
import { Mail, Globe, Send, CheckCircle2 } from 'lucide-react';

const Contact = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;

    // Prefill mailto subject and body properties
    const subject = encodeURIComponent(`Portfolio Message from ${formState.name}`);
    const body = encodeURIComponent(
      `Hi Hariharan,\n\nYou received a new message from your portfolio contact form:\n\nSender: ${formState.name}\nEmail: ${formState.email}\n\nMessage:\n${formState.message}\n\nBest regards,\n${formState.name}`
    );

    // Redirect to default mail client prefilled
    window.location.href = `mailto:hariharansarav7@gmail.com?subject=${subject}&body=${body}`;

    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormState({ name: '', email: '', message: '' });
    }, 4000);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact" className="py-24 bg-cv-bg relative overflow-hidden">
      {/* Decorative Background Stamps */}
      <div className="absolute top-12 left-10 w-24 h-24 bg-cv-pink border-brutalist rounded-full rotate-[-12deg] opacity-75 hidden md:flex items-center justify-center font-mono font-bold text-center text-[10px] leading-tight shadow-brutalist-sm select-none pointer-events-none p-2 uppercase z-0">
        <span>Inquire Direct Console</span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-cv-yellow text-black border-brutalist shadow-brutalist-sm text-xs font-mono font-bold uppercase tracking-wider">
            <Mail className="w-4 h-4 text-black" />
            <span>GET IN TOUCH</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black font-display text-black uppercase">
            SEND A POSTCARD<span className="text-cv-pink font-black text-4xl">.</span>
          </h2>
          <p className="text-black max-w-2xl mx-auto text-sm sm:text-base font-semibold font-body">
            Drop a message directly onto this retro postcard to initiate a project proposal or collaboration request.
          </p>
        </div>

        {/* SINGLE UNIFIED RETRO POSTCARD CARD */}
        <div className="relative bg-[#FAF9F6] border-brutalist shadow-brutalist-lg rounded-2xl p-6 sm:p-10 lg:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch overflow-hidden text-black hover:rotate-[-0.3deg] transition-transform duration-300">

          {/* Postcard Center Dashed Division Line (Desktop Only) */}
          <div className="hidden lg:block absolute left-[56%] top-8 bottom-8 w-0.5 border-l-2 border-dashed border-slate-350 pointer-events-none" />

          {/* LEFT COLUMN: WRITING PANEL / CONTACT FORM (7 Cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6 text-left pr-0 lg:pr-6">

            {/* Form Header */}
            <div>
              <span className="px-2 py-0.5 bg-black text-white text-[9px] font-black font-mono tracking-wider uppercase rounded">
                MESSAGE SHEET
              </span>
              <h3 className="text-xl sm:text-2xl font-black font-display text-black uppercase mt-2">
                Dear Hariharan,
              </h3>
            </div>

            {submitted ? (
              /* Submission Success UI */
              <div className="flex-1 flex flex-col items-center justify-center text-center p-8 bg-slate-50 border-brutalist-thin rounded-xl animate-in zoom-in duration-200">
                <CheckCircle2 className="w-12 h-12 text-cv-green stroke-[2.5px] mb-4" />
                <h4 className="text-lg font-black font-display text-black uppercase">Postcard Sent!</h4>
                <p className="text-xs font-bold text-slate-600 mt-2 max-w-xs font-mono uppercase">
                  Thank you for writing. I will inspect your message and reply as soon as possible.
                </p>
              </div>
            ) : (
              /* Handwritten Form inputs */
              <form onSubmit={handleSubmit} className="flex-1 space-y-6 font-body">

                {/* Name line */}
                <div className="space-y-1.5">
                  <label className="font-mono text-[9px] sm:text-[10px] font-black text-slate-500 uppercase block tracking-wider">
                    1. Write your full name here:
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formState.name}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter name..."
                    className="w-full bg-transparent border-b-3 border-black pb-1.5 text-xs sm:text-sm font-semibold font-body text-black focus:outline-none focus:border-cv-pink transition-colors"
                  />
                </div>

                {/* Email line */}
                <div className="space-y-1.5">
                  <label className="font-mono text-[9px] sm:text-[10px] font-black text-slate-500 uppercase block tracking-wider">
                    2. Provide your response email:
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formState.email}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter email address..."
                    className="w-full bg-transparent border-b-3 border-black pb-1.5 text-xs sm:text-sm font-semibold font-body text-black focus:outline-none focus:border-cv-pink transition-colors"
                  />
                </div>

                {/* Message line */}
                <div className="space-y-1.5">
                  <label className="font-mono text-[9px] sm:text-[10px] font-black text-slate-500 uppercase block tracking-wider">
                    3. Type your postcard message below:
                  </label>
                  <textarea
                    name="message"
                    value={formState.message}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    placeholder="Describe your project, timeline, or request..."
                    className="w-full bg-transparent border-b-3 border-black pb-1.5 text-xs sm:text-sm font-semibold font-body text-black focus:outline-none focus:border-cv-pink resize-none transition-colors"
                  />
                </div>

                {/* Send Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="px-5 py-3 bg-cv-yellow text-black border-brutalist shadow-brutalist-sm text-xs font-mono font-black uppercase hover:bg-slate-50 hover:translate-x-[-1px] hover:translate-y-[-1px] transition-all cursor-pointer inline-flex items-center gap-2"
                  >
                    <span>Mails Postcard</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* RIGHT COLUMN: MAILING DETAILS & POSTAGE STAMPS (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8 pl-0 lg:pl-10 text-left pt-6 lg:pt-0">

            {/* Stamp Section */}
            <div className="flex justify-between items-start">
              <span className="text-[8px] font-mono font-black text-slate-400 uppercase tracking-widest leading-none pt-2">
                AFFIX STAMP HERE
              </span>

              {/* POSTAGE STAMP BOX */}
              <div className="relative">
                {/* Stamp border (scalloped block) */}
                <div className="w-24 h-28 bg-cv-yellow border-brutalist rounded p-2 flex flex-col justify-between text-black relative z-10 select-none shadow-brutalist-sm hover:rotate-[1deg] transition-transform">
                  <div className="flex items-center justify-between text-[7px] font-mono font-black uppercase leading-none">
                    <span>COIMBATORE</span>
                    <span>15¢</span>
                  </div>
                  {/* Stamp Illustration */}
                  <div className="w-full h-14 border border-black bg-white rounded flex items-center justify-center p-1 font-mono text-[7px] font-black text-center uppercase tracking-tighter">
                    <div>
                      <span>✦ DEV PASS ✦</span>
                      <div className="w-12 h-5 barcode-stripes border border-black mt-1 mx-auto" />
                    </div>
                  </div>
                  <div className="text-[6.5px] font-mono font-black text-center uppercase tracking-widest leading-none">
                    H.S. PORTFOLIO
                  </div>
                </div>

                {/* Circular Postmark Ink Seal Overlaid */}
                <div className="absolute -top-4 -left-6 w-16 h-16 border-2 border-dashed border-slate-700/60 rounded-full flex items-center justify-center select-none pointer-events-none rotate-[-15deg] z-20 font-mono text-[6px] font-black text-slate-700/60 uppercase text-center p-1">
                  <div>
                    <span>DELIVERED PO</span>
                    <br />
                    <span>2026</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Address Details Section */}
            <div className="space-y-4 pt-4 border-t border-black/10">
              <h4 className="text-xs font-mono font-black text-slate-500 uppercase tracking-widest leading-none">
                DELIVER ADDRESS:
              </h4>

              {/* Address rows resembling handwritten blocks */}
              <div className="space-y-3 font-mono text-xs font-bold text-black uppercase">
                <div className="flex items-start gap-2">
                  <span className="text-slate-400">TO:</span>
                  <div>
                    <p className="font-black text-sm font-display leading-none">HARIHARAN S.</p>
                    <p className="text-[9px] text-slate-500 leading-normal mt-0.5">FULLSTACK ENGINEER & UI/UX</p>
                  </div>
                </div>

                <div className="flex items-center gap-2 border-b border-black/10 pb-1">
                  <span className="text-slate-400">ADD:</span>
                  <a href="mailto:hariharansarav7@gmail.com" className="hover:underline tracking-tight truncate">
                    hariharansarav7@gmail.com
                  </a>
                </div>

                <div className="flex items-center gap-2 border-b border-black/10 pb-1">
                  <span className="text-slate-400">TEL:</span>
                  <span className="tracking-wide">+91 97916 80352</span>
                </div>

                <div className="flex items-center gap-2 border-b border-black/10 pb-1">
                  <span className="text-slate-400">LOC:</span>
                  <span className="tracking-wide">Coimbatore, Tamil Nadu, IN</span>
                </div>
              </div>
            </div>

            {/* Social Stamp Links */}
            <div className="pt-4 border-t-2 border-black flex flex-wrap items-center gap-2">
              <a
                href="https://github.com/Hariharansarav"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 text-[9px] font-mono font-black text-black border-brutalist-thin shadow-brutalist-sm bg-white hover:bg-cv-pink px-2.5 py-1 rounded transition-colors uppercase tracking-wider"
              >
                <Globe className="w-3.5 h-3.5" />
                <span>GitHub</span>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 text-[9px] font-mono font-black text-black border-brutalist-thin shadow-brutalist-sm bg-white hover:bg-cv-pink px-2.5 py-1 rounded transition-colors uppercase tracking-wider"
              >
                <Globe className="w-3.5 h-3.5" />
                <span>LinkedIn</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;
