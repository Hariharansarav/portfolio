import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUp, Mail, Phone, Code2, FileText } from 'lucide-react';
import githubIcon from './icons/github.png';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#12101C] border-t border-[#8b5cf6]/20 pt-16 pb-12 relative overflow-hidden text-slate-400">
      {/* Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#8b5cf6]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-slate-800">
          
          {/* BRAND COLUMN */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-black text-white tracking-tight">
                hariharan<span className="text-[#8b5cf6] font-extrabold">.</span>
              </span>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed max-w-md font-medium">
              Passionate about building responsive, user-centered web applications, robust REST APIs,
              and intelligent data-driven solutions with clean UI/UX standards.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://github.com/Hariharansarav"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-[#241B35] border border-[#8b5cf6]/30 hover:border-[#8b5cf6] text-slate-300 hover:text-[#8b5cf6] flex items-center justify-center transition-all duration-200 p-2"
                aria-label="GitHub"
              >
                <img src={githubIcon} alt="GitHub" className="w-full h-full object-contain filter invert opacity-80 hover:opacity-100" />
              </a>
              <a
                href="mailto:hariharansarav7@gmail.com"
                className="w-10 h-10 rounded-xl bg-[#241B35] border border-[#8b5cf6]/30 hover:border-[#8b5cf6] text-slate-300 hover:text-[#8b5cf6] flex items-center justify-center transition-all duration-200"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href="tel:+919791680352"
                className="w-10 h-10 rounded-xl bg-[#241B35] border border-[#8b5cf6]/30 hover:border-[#8b5cf6] text-slate-300 hover:text-[#8b5cf6] flex items-center justify-center transition-all duration-200"
                aria-label="Phone"
              >
                <Phone className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-[#8b5cf6] pl-3">
              Quick Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              {['Home', 'Skills', 'Experience', 'Projects', 'Education', 'Contact'].map((section) => (
                <li key={section}>
                  <button
                    onClick={() => scrollToSection(section.toLowerCase())}
                    className="hover:text-[#8b5cf6] font-medium transition-colors flex items-center gap-1.5 cursor-pointer text-slate-300"
                  >
                    <span className="text-[#8b5cf6]">›</span> {section}
                  </button>
                </li>
              ))}
              <li>
                <Link
                  to="/resume"
                  className="text-[#8b5cf6] font-bold hover:text-white transition-colors flex items-center gap-1.5 cursor-pointer pt-1"
                >
                  <FileText className="w-3.5 h-3.5 text-[#8b5cf6]" />
                  <span>Resume Page</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* CONTACT & LOCATION */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-[#8b5cf6] pl-3">
              Direct Contact
            </h4>
            <div className="space-y-3 text-sm font-medium">
              <p className="flex items-start gap-2 text-slate-300">
                <Mail className="w-4 h-4 text-[#8b5cf6] mt-0.5 flex-shrink-0" />
                <a href="mailto:hariharansarav7@gmail.com" className="hover:text-[#8b5cf6] transition-colors">
                  hariharansarav7@gmail.com
                </a>
              </p>
              <p className="flex items-center gap-2 text-slate-300">
                <Phone className="w-4 h-4 text-[#8b5cf6] flex-shrink-0" />
                <a href="tel:+919791680352" className="hover:text-[#8b5cf6] transition-colors">
                  +91 9791680352
                </a>
              </p>
              <p className="flex items-center gap-2 text-slate-300">
                <span className="w-2 h-2 rounded-full bg-[#8b5cf6] flex-shrink-0 animate-ping" />
                <span>Coimbatore, Tamil Nadu, India</span>
              </p>
            </div>
          </div>

        </div>

        {/* BOTTOM BAR */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p className="flex items-center gap-1.5 text-slate-400 font-bold">
            <span>© {new Date().getFullYear()} Hariharan S. Built with</span>
            <Code2 className="w-4 h-4 text-[#8b5cf6] inline" />
            <span>React & Tailwind CSS.</span>
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 bg-[#241B35] hover:bg-[#8b5cf6] text-slate-300 hover:text-white px-4 py-2 rounded-full border border-[#8b5cf6]/30 transition-all duration-200 cursor-pointer shadow-sm font-bold"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
