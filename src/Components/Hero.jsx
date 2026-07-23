import React, { useState, useEffect } from 'react';
import { ArrowRight, FileText, Globe } from 'lucide-react';
import resumePDF from '../assets/Hariharan CV.pdf';

const Hero = () => {
  const [uxMode, setUxMode] = useState('ALL'); // 'ALL', 'DEV', 'DESIGN'

  const handleResumeDownload = () => {
    const link = document.createElement('a');
    link.href = resumePDF;
    link.download = 'Hariharan_S_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Simulates character-by-character typing and erasing for the raw bio JSON document
  const fullJsonText = `{
  "name": "Hariharan S",
  "focus": "UI/UX & Fullstack",
  "degree": "B.Tech AI&DS",
  "stats": {
    "internships": 4,
    "deployments": 5,
    "active_pass": true
  }
}`;

  const [typedText, setTypedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(30);

  useEffect(() => {
    const handleType = () => {
      const current = typedText;
      const fullText = fullJsonText;

      if (!isDeleting) {
        setTypedText(fullText.substring(0, current.length + 1));
        
        if (current.length === fullText.length) {
          // Pause when typing finishes
          setTypingSpeed(1800); 
          setIsDeleting(true);
        } else {
          setTypingSpeed(35); // Typist speed
        }
      } else {
        setTypedText(fullText.substring(0, current.length - 1));
        setTypingSpeed(15); // Erasing is twice as fast
        
        if (current.length === 0) {
          setIsDeleting(false);
          setTypingSpeed(600); // Pause on empty before re-typing
        }
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [typedText, isDeleting, typingSpeed, fullJsonText]);

  // A helper function to parse and syntax-highlight typed JSON tokens on the fly
  const renderColorizedJson = (text) => {
    if (!text) return null;
    return text.split('\n').map((line, i) => {
      // Colorize JSON keys, string values, integers, and boolean values
      const highlighted = line
        .replace(/(".*?")(\s*:)/g, '<span class="text-pink-400 font-bold">$1</span>$2')
        .replace(/(:\s*)(".*?")/g, '$1<span class="text-cyan-300">$2</span>')
        .replace(/(:\s*)(\d+)/g, '$1<span class="text-yellow-300 font-black">$2</span>')
        .replace(/(:\s*)(true|false)/g, '$1<span class="text-[#A3E635] font-bold">$2</span>');

      return (
        <div key={i} className="min-h-[12px]" dangerouslySetInnerHTML={{ __html: highlighted || '&nbsp;' }} />
      );
    });
  };

  return (
    <section
      id="home"
      className="min-h-screen pt-32 pb-16 flex items-center justify-center relative overflow-hidden bg-cv-bg"
    >
      {/* Decorative Neo-Brutalist Grid Lines (Retro theme) */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      {/* Huge Background Sticker Silhouette (Giant star badge decoration) */}
      <div className="absolute -top-24 -left-24 w-96 h-96 opacity-10 rotate-12 select-none pointer-events-none text-black">
        <svg viewBox="0 0 100 100" className="w-full h-full fill-current">
          <path d="M50 0 L63 38 L100 38 L70 60 L80 100 L50 75 L20 100 L30 60 L0 38 L37 38 Z" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">

        {/* SPLIT BILLBOARD DASHBOARD LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

          {/* LEFT BENTO: TEXT DESCRIPTION BOARD (7 Cols) */}
          <div className="col-span-1 lg:col-span-7 bg-white border-brutalist shadow-brutalist-lg rounded-2xl p-6 sm:p-8 flex flex-col justify-between relative hover:rotate-[-0.3deg] transition-transform duration-300 text-left">
            {/* Design grid pattern background */}
            <div className="absolute inset-4 opacity-[0.02] pointer-events-none bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:16px_16px] rounded-xl" />

            <div className="space-y-6 relative z-10 w-full">
              {/* Status Indicator Badge */}
              <div className="inline-flex items-center gap-2.5 px-4 py-2 bg-cv-yellow text-black border-brutalist shadow-brutalist-sm text-xs font-mono font-bold uppercase tracking-wider">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-black opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-black"></span>
                </span>
                <span>CONSOLE ONLINE - COIMBATORE, IN</span>
              </div>

              {/* Typography Title Headers */}
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-6xl font-black font-display text-black tracking-tight leading-[1.05] uppercase">
                  HARIHARAN S<span className="text-cv-pink font-black">.</span>
                </h1>

                <div className="bg-cv-pink text-black border-brutalist shadow-brutalist px-4 py-2.5 inline-block rotate-[-0.8deg]">
                  <h2 className="text-sm sm:text-xl font-black font-mono uppercase tracking-wide">
                    UI/UX Designer & Fullstack Developer
                  </h2>
                </div>

                {/* Dynamic Persona Bio text (Changes on Mode clicks) */}
                <div className="min-h-[84px] sm:min-h-[72px] flex items-center">
                  <p className="text-black text-sm sm:text-base leading-relaxed max-w-2xl font-semibold font-body pt-2 transition-all duration-200">
                    {uxMode === 'ALL' && "I design and build high-performance web systems, relational/non-relational database layers, and AI integrations. Combining visual UI/UX design standards with RESTful APIs to engineer complete, reliable digital products."}
                    {uxMode === 'DEV' && "I build robust backend microservices, scale transactional database queries, and design RESTful APIs. Implementing server structures in Node, Express, and SQL databases to run applications."}
                    {uxMode === 'DESIGN' && "I map interactive wireframes, construct cohesive component design systems, and frame visual layouts. Designing interactive prototypes in Figma with a focus on ease-of-use and user accessibility."}
                  </p>
                </div>
              </div>

              {/* Interactive Bio Switcher (Tactile control panel) */}
              <div className="bg-slate-50 border-brutalist-thin p-4 rounded-xl space-y-2 max-w-md shadow-inner text-black">
                <div className="font-mono text-[8px] font-black uppercase text-slate-500 tracking-wider">
                  ✦ FILTER PORTFOLIO VIEW MODE
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => setUxMode(uxMode === 'DEV' ? 'ALL' : 'DEV')}
                    className={`flex-1 py-1.5 border-2 border-black rounded text-[9.5px] font-mono font-black uppercase transition-all cursor-pointer ${
                      uxMode === 'DEV' 
                        ? 'bg-cv-green text-black translate-x-[1.5px] translate-y-[1.5px] shadow-[1px_1px_0px_0px_#000]' 
                        : 'bg-white text-black shadow-brutalist-sm hover:bg-slate-50'
                    }`}
                  >
                    {uxMode === 'DEV' ? '✦ FULLSTACK ACTIVE' : 'FULLSTACK ENG'}
                  </button>
                  <button
                    onClick={() => setUxMode(uxMode === 'DESIGN' ? 'ALL' : 'DESIGN')}
                    className={`flex-1 py-1.5 border-2 border-black rounded text-[9.5px] font-mono font-black uppercase transition-all cursor-pointer ${
                      uxMode === 'DESIGN' 
                        ? 'bg-cv-cyan text-black translate-x-[1.5px] translate-y-[1.5px] shadow-[1px_1px_0px_0px_#000]' 
                        : 'bg-white text-black shadow-brutalist-sm hover:bg-slate-50'
                    }`}
                  >
                    {uxMode === 'DESIGN' ? '✦ UI/UX ACTIVE' : 'UI/UX DESIGN'}
                  </button>
                </div>
              </div>

            </div>

            {/* Navigation and Call to Action + Social Links */}
            <div className="border-t-2 border-black pt-6 mt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6 relative z-10">
              <div className="flex flex-wrap items-center gap-3.5">
                <button
                  onClick={() => scrollToSection('projects')}
                  className="px-5 py-3 bg-cv-yellow text-black btn-brutalist text-xs cursor-pointer flex items-center gap-2 group"
                >
                  <span>View Projects</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

                <button
                  onClick={handleResumeDownload}
                  className="px-4 py-3 bg-white text-black btn-brutalist text-xs cursor-pointer flex items-center gap-1.5"
                >
                  <FileText className="w-4 h-4 text-black" />
                  <span>Get Resume PDF</span>
                </button>
              </div>

              {/* Social links */}
              <div className="flex items-center gap-3 self-start sm:self-auto">
                <a
                  href="https://github.com/Hariharansarav"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 text-[10px] font-mono font-bold text-black border-brutalist-thin shadow-brutalist-sm bg-slate-50 hover:bg-cv-pink px-2.5 py-1 rounded transition-colors uppercase tracking-wider"
                >
                  <Globe className="w-3.5 h-3.5" />
                  <span>GitHub</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/hariharan-saravanan-567a99202"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 text-[10px] font-mono font-bold text-black border-brutalist-thin shadow-brutalist-sm bg-slate-50 hover:bg-cv-pink px-2.5 py-1 rounded transition-colors uppercase tracking-wider"
                >
                  <Globe className="w-3.5 h-3.5" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>

          </div>

          {/* RIGHT BENTO: MOCK UNIX DEVELOPER TERMINAL CONSOLE CARD (5 Cols) */}
          <div className="col-span-1 lg:col-span-5 flex flex-col justify-center items-center relative min-h-[440px] lg:min-h-full">

            {/* Stamp Circle Rotating Badge */}
            <div className="absolute -top-10 -right-10 w-24 h-24 z-30 animate-spin-slow hidden lg:block">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <path id="circlePath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="none" />
                <circle cx="50" cy="50" r="30" className="fill-cv-yellow stroke-black stroke-2" />
                <text className="font-mono text-[9px] font-black fill-black uppercase tracking-[0.12em]">
                  <textPath href="#circlePath" startOffset="0%">
                    ✦ FULL STACK DEV ✦ UI/UX DESIGNER ✦
                  </textPath>
                </text>
              </svg>
            </div>

            {/* Terminal Wrapper Container to hold absolute overlay stickers */}
            <div className="relative w-full max-w-[340px] lg:max-w-full h-[400px] lg:h-[450px] z-10 flex flex-col justify-between">
              
              {/* Floating Badge 1: Top Left - ACTIVE & OPEN */}
              <div className="absolute -top-4 -left-4 z-20 bg-cv-green text-black border-brutalist px-2.5 py-1 font-mono text-[9px] font-black uppercase tracking-wide shadow-brutalist-sm rounded flex items-center gap-1.5 select-none pointer-events-none">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-black opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-black"></span>
                </span>
                <span>ACTIVE & OPEN</span>
              </div>

              {/* Floating Badge 2: Bottom Left - DEPLOYMENTS */}
              <div className="absolute -bottom-4 -left-4 z-20 bg-cv-pink text-black border-brutalist px-3 py-1.5 font-mono text-[9px] font-black uppercase tracking-wide shadow-brutalist-sm rounded flex items-center gap-1 select-none pointer-events-none">
                <span>🎗 5+ DEPLOYMENTS</span>
              </div>

              {/* Floating Badge 3: Bottom Right - INTERNSHIPS */}
              <div className="absolute -bottom-4 -right-4 z-20 bg-cv-cyan text-black border-brutalist px-3 py-1.5 font-mono text-[9px] font-black uppercase tracking-wide shadow-brutalist-sm rounded flex items-center gap-1 select-none pointer-events-none">
                <span>💼 4+ INTERNSHIPS</span>
              </div>

              {/* The Brutalist UNIX Terminal window container */}
              <div className="w-full h-full bg-[#0b0e14] border-brutalist shadow-brutalist-lg rounded-2xl overflow-hidden flex flex-col justify-between group hover:rotate-[0.8deg] transition-transform duration-300">

                {/* Window Header bar */}
                <div className="bg-black text-white px-4 py-3 flex items-center justify-between border-b-2 border-black">
                  {/* Red/Yellow/Green Window Dots */}
                  <div className="flex items-center gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-cv-pink border-brutalist-thin shadow-brutalist-sm" />
                    <div className="w-2.5 h-2.5 rounded-full bg-cv-yellow border-brutalist-thin shadow-brutalist-sm" />
                    <div className="w-2.5 h-2.5 rounded-full bg-cv-green border-brutalist-thin shadow-brutalist-sm" />
                  </div>
                  <span className="font-mono text-[9px] font-bold text-slate-450 tracking-wider">bash - hariharan@console:~</span>
                  <span className="w-6" /> {/* Spacer */}
                </div>

                {/* Terminal Code Display Body */}
                <div className="flex-1 p-5 font-mono text-[10px] sm:text-xs text-green-400 text-left space-y-4 select-none leading-relaxed overflow-y-auto">
                  <div>
                    <span className="text-white font-bold">hariharan@dev:~ $</span> cat bio.json
                  </div>
                  
                  {/* Dynamically typing code document block with real-time token syntax coloring */}
                  <div className="text-white bg-slate-900/60 p-3 rounded border border-white/5 shadow-inner min-h-[140px] flex flex-col justify-center">
                    <pre className="font-mono text-[9.5px] sm:text-[10.5px] text-green-300 leading-normal flex-1 whitespace-pre-wrap">
                      {renderColorizedJson(typedText)}
                      <span className="w-1.5 h-3 bg-green-300 inline-block animate-pulse ml-0.5" />
                    </pre>
                  </div>

                  <div>
                    <span className="text-white font-bold">hariharan@dev:~ $</span> node get_status.js
                  </div>
                  <div className="text-cv-yellow font-black uppercase text-[10px] tracking-wider leading-none">
                    ✦ CONSOLE STATUS: ACTIVE & ONLINE
                    <br />
                    ✦ LOAD: NOMINAL // COIMBATORE, IN
                  </div>
                  <div className="flex items-center gap-1 pt-1">
                    <span className="text-white font-bold">hariharan@dev:~ $</span>
                    <span className="w-2 h-4 bg-green-400 animate-pulse inline-block" />
                  </div>
                </div>

                {/* Terminal footer bar */}
                <div className="bg-black text-[9px] font-mono text-slate-500 py-1.5 px-4 text-center select-none border-t border-white/5 uppercase">
                  Vite // React App Console v2.0
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Hero;
