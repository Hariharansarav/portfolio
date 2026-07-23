import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUp, Mail, Phone, Code2, FileText } from 'lucide-react';
import githubIcon from './ICONS/github.png';

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
    <footer className="bg-white border-t-3 border-black pt-16 pb-12 relative overflow-hidden text-black">
      {/* Decorative background stripes */}
      <div className="absolute top-0 right-0 w-24 h-full opacity-[0.02] bg-[repeating-linear-gradient(45deg,#000,#000_10px,transparent_10px,transparent_20px)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b-2 border-black">
          
          {/* BRAND COLUMN */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-xl sm:text-2xl font-black font-display text-black tracking-tight">
                HARIHARAN<span className="text-cv-yellow font-black text-2xl animate-bounce">.</span>
              </span>
            </div>

            <p className="text-xs sm:text-sm text-black leading-relaxed max-w-md font-semibold font-body">
              Passionate about building responsive, user-centered web applications, robust REST APIs,
              and intelligent data-driven solutions with clean UI/UX standards.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://github.com/Hariharansarav"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white border-brutalist-thin shadow-brutalist-sm hover:bg-cv-yellow hover:scale-105 text-black flex items-center justify-center transition-all duration-200 p-2 rounded"
                aria-label="GitHub"
              >
                <img src={githubIcon} alt="GitHub" className="w-full h-full object-contain filter grayscale" />
              </a>
              <a
                href="mailto:hariharansarav7@gmail.com"
                className="w-9 h-9 bg-white border-brutalist-thin shadow-brutalist-sm hover:bg-cv-yellow hover:scale-105 text-black flex items-center justify-center transition-all duration-200 rounded"
                aria-label="Email"
              >
                <Mail className="w-4 h-4 text-black" />
              </a>
              <a
                href="tel:+919791680352"
                className="w-9 h-9 bg-white border-brutalist-thin shadow-brutalist-sm hover:bg-cv-yellow hover:scale-105 text-black flex items-center justify-center transition-all duration-200 rounded"
                aria-label="Phone"
              >
                <Phone className="w-4 h-4 text-black" />
              </a>
            </div>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h4 className="text-xs font-black text-black uppercase tracking-wider mb-4 border-l-3 border-black pl-3 font-mono">
              Quick Navigation
            </h4>
            <ul className="space-y-2.5 text-xs font-mono">
              {['Home', 'About', 'Experience', 'Projects', 'Skills', 'Education', 'Contact'].map((section) => (
                <li key={section}>
                  <button
                    onClick={() => scrollToSection(section.toLowerCase())}
                    className="hover:underline font-bold transition-colors flex items-center gap-1.5 cursor-pointer text-black uppercase"
                  >
                    <span className="text-cv-pink font-bold">›</span> {section}
                  </button>
                </li>
              ))}
              <li>
                <Link
                  to="/resume"
                  className="text-cv-pink font-black hover:underline transition-colors flex items-center gap-1.5 cursor-pointer pt-1 uppercase"
                >
                  <FileText className="w-3.5 h-3.5 stroke-[3px]" />
                  <span>Resume Page</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* CONTACT & LOCATION */}
          <div>
            <h4 className="text-xs font-black text-black uppercase tracking-wider mb-4 border-l-3 border-black pl-3 font-mono">
              Direct Contact
            </h4>
            <div className="space-y-3 text-xs sm:text-sm font-semibold font-body">
              <p className="flex items-start gap-2 text-black">
                <Mail className="w-4 h-4 text-black mt-0.5 flex-shrink-0" />
                <a href="mailto:hariharansarav7@gmail.com" className="hover:underline transition-colors font-mono font-bold text-xs uppercase">
                  hariharansarav7@gmail.com
                </a>
              </p>
              <p className="flex items-center gap-2 text-black">
                <Phone className="w-4 h-4 text-black flex-shrink-0" />
                <a href="tel:+919791680352" className="hover:underline transition-colors font-mono font-bold text-xs">
                  +91 9791680352
                </a>
              </p>
              <p className="flex items-center gap-2 text-black font-mono font-bold text-xs uppercase">
                <span className="w-2.5 h-2.5 bg-cv-green border-brutalist-thin rounded-full flex-shrink-0" />
                <span>Coimbatore, Tamil Nadu, India</span>
              </p>
            </div>
          </div>

        </div>

        {/* BOTTOM BAR */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] sm:text-xs">
          <p className="flex items-center gap-1.5 text-black font-mono font-black uppercase">
            <span>© {new Date().getFullYear()} Hariharan S. Built with</span>
            <Code2 className="w-4 h-4 text-black inline" />
            <span>React & Tailwind CSS.</span>
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 bg-white text-black btn-brutalist px-4 py-2 text-[10px] cursor-pointer"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5 stroke-[3px]" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
