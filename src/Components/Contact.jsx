import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Send, CheckCircle, FileText, MessageSquare } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });

      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    }, 1000);
  };

  return (
    <section id="contact" className="py-24 bg-[#12101C] relative overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#8b5cf6]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#241B35] border border-[#8b5cf6]/40 text-[#c4b5fd] text-xs font-bold uppercase tracking-wider">
            <MessageSquare className="w-3.5 h-3.5 text-[#8b5cf6]" />
            <span>Get In Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Let's Build Something <span className="gradient-text-violet font-black">Together</span>
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto text-sm sm:text-base">
            Have a project, internship opportunity, or question? Feel free to send a message or contact me directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Direct Contact Cards Side */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="glass-card-violet rounded-3xl p-6 sm:p-8 border border-[#8b5cf6]/20 bg-[#241B35]/80 space-y-6">
              <h3 className="text-xl font-bold text-white mb-2">
                Contact Information
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-medium">
                Available for full-time full stack roles, freelance projects, and research collaborations.
              </p>

              <div className="space-y-4 pt-2">
                
                {/* Email Item */}
                <a
                  href="mailto:hariharansarav7@gmail.com"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-[#12101C] border border-[#8b5cf6]/30 hover:border-[#8b5cf6] transition-all group"
                >
                  <div className="w-11 h-11 rounded-xl bg-[#8b5cf6]/20 border border-[#8b5cf6]/40 flex items-center justify-center text-[#c4b5fd] group-hover:scale-110 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[11px] text-slate-400 uppercase font-mono font-bold">Email Address</p>
                    <p className="text-sm font-bold text-white group-hover:text-[#c4b5fd] transition-colors">
                      hariharansarav7@gmail.com
                    </p>
                  </div>
                </a>

                {/* Phone Item */}
                <a
                  href="tel:+919791680352"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-[#12101C] border border-[#8b5cf6]/30 hover:border-[#8b5cf6] transition-all group"
                >
                  <div className="w-11 h-11 rounded-xl bg-[#8b5cf6]/20 border border-[#8b5cf6]/40 flex items-center justify-center text-[#c4b5fd] group-hover:scale-110 transition-transform">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[11px] text-slate-400 uppercase font-mono font-bold">Phone Number</p>
                    <p className="text-sm font-bold text-white group-hover:text-[#c4b5fd] transition-colors">
                      +91 9791680352
                    </p>
                  </div>
                </a>

                {/* Location Item */}
                <div className="flex items-center gap-4 p-4 rounded-2xl bg-[#12101C] border border-slate-800">
                  <div className="w-11 h-11 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-[#8b5cf6]">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[11px] text-slate-400 uppercase font-mono font-bold">Location</p>
                    <p className="text-sm font-bold text-white">
                      Coimbatore, Tamil Nadu, India
                    </p>
                  </div>
                </div>

              </div>

              {/* View Separate Resume Page Quick Link */}
              <div className="pt-4 border-t border-slate-800">
                <Link
                  to="/resume"
                  className="w-full py-3.5 rounded-2xl bg-[#8b5cf6] hover:bg-[#7c3aed] text-white font-extrabold text-sm shadow-lg shadow-[#8b5cf6]/30 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <FileText className="w-4 h-4" />
                  <span>View Separate Resume Page</span>
                </Link>
              </div>

            </div>

          </div>

          {/* Form Side */}
          <div className="lg:col-span-7">
            <div className="glass-card-violet rounded-3xl p-6 sm:p-8 border border-[#8b5cf6]/20 bg-[#241B35]/80 relative">
              
              {submitted && (
                <div className="mb-6 p-4 rounded-2xl bg-[#8b5cf6]/20 border border-[#8b5cf6]/50 text-[#c4b5fd] flex items-center gap-3 animate-in fade-in">
                  <CheckCircle className="w-5 h-5 text-[#8b5cf6] flex-shrink-0" />
                  <p className="text-xs sm:text-sm font-bold">
                    Thank you! Your message has been sent successfully. Hariharan will get back to you shortly.
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-400 font-mono mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. John Doe"
                      className="w-full px-4 py-3 rounded-xl bg-[#12101C] border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-[#8b5cf6] text-sm font-semibold"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-400 font-mono mb-2">
                      Your Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 rounded-xl bg-[#12101C] border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-[#8b5cf6] text-sm font-semibold"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-slate-400 font-mono mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Project Inquiry / Job Opportunity"
                    className="w-full px-4 py-3 rounded-xl bg-[#12101C] border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-[#8b5cf6] text-sm font-semibold"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-slate-400 font-mono mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows="5"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write your message here..."
                    className="w-full px-4 py-3 rounded-xl bg-[#12101C] border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-[#8b5cf6] text-sm font-semibold resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 rounded-xl bg-[#8b5cf6] hover:bg-[#7c3aed] text-white font-extrabold text-sm shadow-xl shadow-[#8b5cf6]/35 hover:shadow-[#8b5cf6]/55 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  {loading ? (
                    <span>Sending Message...</span>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;
