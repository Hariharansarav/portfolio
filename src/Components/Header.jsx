import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Menu, X, Download, FileText, Sparkles } from 'lucide-react';
import resumePDF from '../assets/Hariharan CV.pdf';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      if (location.pathname === '/') {
        const sections = ['home', 'skills', 'experience', 'projects', 'education', 'contact'];
        const scrollPosition = window.scrollY + 200;

        for (const section of sections) {
          const el = document.getElementById(section);
          if (el) {
            const top = el.offsetTop;
            const height = el.offsetHeight;
            if (scrollPosition >= top && scrollPosition < top + height) {
              setActiveSection(section);
              break;
            }
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location]);

  const scrollToSection = (id) => {
    setMobileMenuOpen(false);
    if (location.pathname !== '/') {
      navigate('/', { replace: false });
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleResumeDownload = () => {
    const link = document.createElement('a');
    link.href = resumePDF;
    link.download = 'Hariharan_S_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Removed About from nav items
  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'Skills', id: 'skills' },
    { label: 'Experience', id: 'experience' },
    { label: 'Projects', id: 'projects' },
    { label: 'Education', id: 'education' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#12101C]/90 backdrop-blur-md border-b border-[#8b5cf6]/20 py-3 shadow-lg shadow-[#12101C]/80'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* BRAND LOGO */}
        <Link
          to="/"
          onClick={(e) => {
            if (location.pathname === '/') {
              e.preventDefault();
              scrollToSection('home');
            }
          }}
          className="flex items-center gap-1 group cursor-pointer"
        >
          <span className="text-2xl font-black text-white tracking-tight group-hover:text-[#8b5cf6] transition-colors">
            hariharan<span className="text-[#8b5cf6] font-extrabold">.</span>
          </span>
        </Link>

        {/* CENTER FLOATING NAV PILL */}
        <nav className="hidden md:flex items-center gap-1 bg-[#241B35]/90 px-3 py-1.5 rounded-full border border-[#8b5cf6]/30 shadow-md backdrop-blur-md">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`px-4 py-2 rounded-full text-xs lg:text-sm font-bold transition-all duration-200 cursor-pointer ${
                location.pathname === '/' && activeSection === item.id
                  ? 'bg-[#8b5cf6] text-white shadow-md shadow-[#8b5cf6]/30'
                  : 'text-slate-300 hover:text-white hover:bg-[#12101C]/60'
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* RIGHT BUTTON GROUP */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            to="/resume"
            className="flex items-center gap-2 text-slate-300 hover:text-[#8b5cf6] font-bold text-xs px-3 py-2 transition-colors"
          >
            <span>Resume Page</span>
          </Link>

          <button
            onClick={handleResumeDownload}
            className="flex items-center gap-2 bg-[#8b5cf6] hover:bg-[#7c3aed] text-white px-5 py-2.5 rounded-full text-xs font-bold transition-all duration-300 shadow-lg shadow-[#8b5cf6]/25 hover:shadow-[#8b5cf6]/45 cursor-pointer"
          >
            <Download className="w-4 h-4 text-white" />
            <span>Download CV</span>
          </button>
        </div>

        {/* MOBILE MENU TOGGLE */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-300 hover:text-[#8b5cf6] bg-[#241B35] border border-[#8b5cf6]/30 rounded-xl focus:outline-none shadow-sm"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-[#8b5cf6]" /> : <Menu className="w-6 h-6 text-[#8b5cf6]" />}
          </button>
        </div>

      </div>

      {/* MOBILE NAV DRAWER */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#241B35]/98 border-b border-[#8b5cf6]/30 backdrop-blur-xl px-4 pt-3 pb-6 space-y-2 animate-in slide-in-from-top duration-300 shadow-xl">
          <div className="flex flex-col space-y-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`flex items-center justify-between px-4 py-3 rounded-xl text-left font-bold transition-all ${
                  location.pathname === '/' && activeSection === item.id
                    ? 'bg-[#8b5cf6]/20 text-[#8b5cf6] border border-[#8b5cf6]/40'
                    : 'text-slate-300 hover:bg-[#12101C]/60'
                }`}
              >
                <span>{item.label}</span>
                {location.pathname === '/' && activeSection === item.id && <Sparkles className="w-4 h-4 text-[#8b5cf6]" />}
              </button>
            ))}
          </div>

          <div className="pt-3 border-t border-[#12101C] flex flex-col gap-2">
            <Link
              to="/resume"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 bg-[#12101C] text-slate-200 font-bold py-3 rounded-xl border border-slate-800"
            >
              <FileText className="w-4 h-4 text-[#8b5cf6]" />
              <span>Go to Resume Page</span>
            </Link>
            <button
              onClick={handleResumeDownload}
              className="w-full flex items-center justify-center gap-2 bg-[#8b5cf6] text-white font-bold py-3 rounded-xl shadow-lg shadow-[#8b5cf6]/30"
            >
              <Download className="w-4 h-4" />
              <span>Download Resume PDF</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
