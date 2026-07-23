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
        const sections = ['home', 'about', 'experience', 'projects', 'skills', 'education', 'contact'];
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

  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Experience', id: 'experience' },
    { label: 'Projects', id: 'projects' },
    { label: 'Skills', id: 'skills' },
    { label: 'Education', id: 'education' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <header className="fixed left-0 right-0 z-50 top-4 px-4 sm:px-6">
      <div
        className={`max-w-7xl mx-auto bg-white border-brutalist text-black px-5 py-3 transition-all duration-300 ${
          isScrolled
            ? 'shadow-brutalist-lg rounded-xl'
            : 'shadow-brutalist rounded-lg'
        }`}
      >
        <div className="flex items-center justify-between">
          {/* BRAND LOGO */}
          <Link
            to="/"
            onClick={(e) => {
              if (location.pathname === '/') {
                e.preventDefault();
                scrollToSection('home');
              }
            }}
            className="flex items-center gap-1.5 group cursor-pointer"
          >
            <span className="text-xl sm:text-2xl font-black font-display tracking-tight text-black hover:text-black">
              HARIHARAN<span className="text-cv-yellow select-none font-black text-2xl font-display inline-block animate-bounce">.</span>
            </span>
          </Link>

          {/* DOCK NAV PILL */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`px-3 py-1.5 rounded font-mono font-bold text-xs uppercase tracking-wide transition-all ${
                  location.pathname === '/' && activeSection === item.id
                    ? 'bg-cv-yellow text-black border-brutalist-thin shadow-brutalist-sm translate-x-[-1px] translate-y-[-1px]'
                    : 'text-black hover:bg-black/5 hover:underline'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* RIGHT ACTION BUTTONS */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              to="/resume"
              className="flex items-center gap-1.5 text-black hover:text-black hover:underline font-mono font-bold text-xs transition-all"
            >
              <FileText className="w-4 h-4 stroke-[2px]" />
              <span>RESUME PAGE</span>
            </Link>

            <button
              onClick={handleResumeDownload}
              className="flex items-center gap-2 bg-cv-green text-black btn-brutalist px-4 py-2 text-xs cursor-pointer"
            >
              <Download className="w-3.5 h-3.5 stroke-[3px]" />
              <span>DOWNLOAD CV</span>
            </button>
          </div>

          {/* MOBILE TOGGLE */}
          <div className="flex lg:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-black hover:bg-cv-yellow bg-white border-brutalist-thin rounded-lg focus:outline-none shadow-brutalist-sm transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-black" /> : <Menu className="w-5 h-5 text-black" />}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE DRAWER */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-2 bg-white border-brutalist shadow-brutalist rounded-xl p-4 space-y-3 animate-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col space-y-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`flex items-center justify-between px-4 py-2.5 rounded font-mono font-bold text-xs uppercase tracking-wider text-left transition-all ${
                  location.pathname === '/' && activeSection === item.id
                    ? 'bg-cv-yellow text-black border-brutalist-thin shadow-brutalist-sm'
                    : 'text-black hover:bg-black/5'
                }`}
              >
                <span>{item.label}</span>
                {location.pathname === '/' && activeSection === item.id && <Sparkles className="w-4 h-4 text-black animate-pulse" />}
              </button>
            ))}
          </div>

          <div className="pt-3 border-t-2 border-black flex flex-col gap-2.5">
            <Link
              to="/resume"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 bg-white border-brutalist shadow-brutalist-sm text-black hover:bg-black/5 font-mono font-bold py-2.5 rounded text-xs"
            >
              <FileText className="w-4 h-4 text-black" />
              <span>GO TO RESUME PAGE</span>
            </Link>
            
            <button
              onClick={handleResumeDownload}
              className="w-full flex items-center justify-center gap-2 bg-cv-green text-black btn-brutalist py-2.5 rounded text-xs cursor-pointer"
            >
              <Download className="w-4 h-4 stroke-[3px]" />
              <span>DOWNLOAD RESUME PDF</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
