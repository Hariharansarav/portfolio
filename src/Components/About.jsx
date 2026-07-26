import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  User, Sparkles, MapPin, Mail, ArrowUpRight, 
  Clock, Activity, Cpu, Briefcase, FolderGit2
} from 'lucide-react';

// Profile image
import profileImage from '../assets/Hariharan.png';

const About = () => {
  const [systemLoad, setSystemLoad] = useState(38);
  const [currentTime, setCurrentTime] = useState('');

  // Update time and load metrics dynamically
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);

    const loadInterval = setInterval(() => {
      setSystemLoad(Math.floor(Math.random() * (45 - 28 + 1) + 28));
    }, 4000);

    return () => {
      clearInterval(interval);
      clearInterval(loadInterval);
    };
  }, []);

  return (
    <section id="about" className="py-20 bg-cv-bg relative overflow-hidden transition-colors duration-300">
      {/* Decorative background grid pattern */}
      <div className="absolute top-24 left-10 w-32 h-32 bg-grid-cyber border border-black/15 dark:border-white/10 hidden xl:block select-none pointer-events-none rounded-lg opacity-40"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full animate-fadeIn">
        
        {/* Section Header */}
        <div className="text-center space-y-2.5 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-cv-yellow text-black border-brutalist shadow-brutalist-sm text-xs font-mono font-bold uppercase tracking-wider">
            <User className="w-4 h-4 text-black" />
            <span>PORTFOLIO_DOSSIER.EXE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black font-display text-black uppercase">
            ABOUT ME<span className="text-cv-pink font-black text-4xl">.</span>
          </h2>
        </div>

        {/* 2-Panel Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch text-black">
          
          {/* LEFT PANEL: Official Identification ID Card (Spans 5 Columns) */}
          <div className="lg:col-span-5 bg-white dark:bg-theme-card-bg border-brutalist-thick shadow-brutalist-lg rounded-3xl p-6 relative flex flex-col justify-between overflow-hidden dark:text-white">
            
            {/* Lanyard punch hole clip graphic */}
            <div className="w-full flex justify-center pb-2 select-none">
              <div className="w-10 h-3.5 bg-slate-100 dark:bg-slate-800 border-2 border-black rounded-full relative flex items-center justify-center shadow-brutalist-sm">
                <span className="w-4 h-1.5 bg-black dark:bg-white rounded-full inline-block"></span>
              </div>
            </div>

            {/* ID Card Content Box */}
            <div className="space-y-5">
              
              {/* ID Header Strip */}
              <div className="bg-black text-white dark:bg-white dark:text-black border-2 border-black p-2 text-center rounded font-mono text-[9px] font-black uppercase tracking-widest select-none shadow-brutalist-sm">
                PORTFOLIO STATION // HOST IDENTIFICATION
              </div>

              {/* Colored Avatar Box (No Grayscale) */}
              <div className="w-36 h-36 border-brutalist rounded-xl overflow-hidden bg-cv-yellow shadow-brutalist mx-auto relative group select-none shrink-0">
                <img
                  src={profileImage}
                  alt="Hariharan"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* Official Credentials list */}
              <div className="border-2 border-black dark:border-white border-dashed p-3.5 rounded-xl space-y-2.5 font-mono text-xs select-none bg-slate-50 dark:bg-slate-900/60 text-black dark:text-white">
                <div className="flex justify-between items-center border-b border-dashed border-slate-350 dark:border-slate-800 pb-1.5">
                  <span className="text-slate-500 dark:text-cv-pink uppercase tracking-tight text-[9px] font-black">NAME</span>
                  <span className="font-black">HARIHARAN S.</span>
                </div>
                <div className="flex justify-between items-center border-b border-dashed border-slate-350 dark:border-slate-800 pb-1.5">
                  <span className="text-slate-500 dark:text-cv-pink uppercase tracking-tight text-[9px] font-black">EMAIL</span>
                  <span className="font-black truncate max-w-[180px]" title="hariharansarav7@gmail.com">hariharansarav7@gmail.com</span>
                </div>
                <div className="flex justify-between items-center border-b border-dashed border-slate-350 dark:border-slate-800 pb-1.5">
                  <span className="text-slate-500 dark:text-cv-pink uppercase tracking-tight text-[9px] font-black">PROGRAM</span>
                  <span className="font-black">B.Tech AI & DS</span>
                </div>
                <div className="flex justify-between items-center border-b border-dashed border-slate-350 dark:border-slate-800 pb-1.5">
                  <span className="text-slate-500 dark:text-cv-pink uppercase tracking-tight text-[9px] font-black">ROLE</span>
                  <span className="font-black">UI/UX & FULLSTACK</span>
                </div>
                <div className="flex justify-between items-center border-b border-dashed border-slate-350 dark:border-slate-800 pb-1.5">
                  <span className="text-slate-500 dark:text-cv-pink uppercase tracking-tight text-[9px] font-black">LOCATION</span>
                  <span className="font-black">Coimbatore, IN</span>
                </div>
                <div className="flex justify-between items-center border-b border-dashed border-slate-350 dark:border-slate-800 pb-1.5">
                  <span className="text-slate-500 dark:text-cv-pink uppercase tracking-tight text-[9px] font-black">STATUS</span>
                  <span className="font-black text-cv-green uppercase flex items-center gap-1">
                    <span className="w-2.5 h-2.5 rounded-full bg-cv-green animate-pulse inline-block"></span>
                    ACTIVE
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-500 dark:text-cv-pink uppercase tracking-tight text-[9px] font-black">EXPIRY</span>
                  <span className="font-black">2026-12 // GUEST</span>
                </div>
              </div>

            </div>

            {/* Official Card Barcode decoration at bottom */}
            <div className="pt-5 border-t border-dashed border-slate-300 dark:border-slate-850 mt-auto select-none">
              <div className="bg-white border-2 border-black p-2.5 rounded-lg flex flex-col items-center shadow-brutalist-sm">
                <svg className="w-full h-8" viewBox="0 0 100 20" preserveAspectRatio="none">
                  <rect x="0" y="0" width="3" height="20" fill="black" />
                  <rect x="5" y="0" width="1" height="20" fill="black" />
                  <rect x="8" y="0" width="2" height="20" fill="black" />
                  <rect x="13" y="0" width="4" height="20" fill="black" />
                  <rect x="20" y="0" width="1" height="20" fill="black" />
                  <rect x="23" y="0" width="3" height="20" fill="black" />
                  <rect x="29" y="0" width="2" height="20" fill="black" />
                  <rect x="33" y="0" width="1" height="20" fill="black" />
                  <rect x="36" y="0" width="5" height="20" fill="black" />
                  <rect x="44" y="0" width="2" height="20" fill="black" />
                  <rect x="49" y="0" width="1" height="20" fill="black" />
                  <rect x="52" y="0" width="4" height="20" fill="black" />
                  <rect x="58" y="0" width="2" height="20" fill="black" />
                  <rect x="63" y="0" width="3" height="20" fill="black" />
                  <rect x="69" y="0" width="1" height="20" fill="black" />
                  <rect x="73" y="0" width="4" height="20" fill="black" />
                  <rect x="80" y="0" width="2" height="20" fill="black" />
                  <rect x="84" y="0" width="1" height="20" fill="black" />
                  <rect x="87" y="0" width="3" height="20" fill="black" />
                  <rect x="92" y="0" width="5" height="20" fill="black" />
                  <rect x="99" y="0" width="1" height="20" fill="black" />
                </svg>
                <span className="font-mono text-[6px] font-black uppercase text-black pt-1 tracking-widest">
                  SYS_HOST_IDENT_BARCODE_2026
                </span>
              </div>
            </div>

          </div>

          {/* RIGHT PANEL: Biography Note & Dynamic Stats (Spans 7 Columns) */}
          <div className="lg:col-span-7 bg-white dark:bg-theme-card-bg border-brutalist-thick shadow-brutalist-lg rounded-3xl p-6 sm:p-8 lg:p-10 flex flex-col justify-between relative dark:text-white">
            
            <div className="space-y-6">
              {/* Profile tag badge */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-cv-pink text-black border border-black rounded-full text-[10px] font-mono font-bold uppercase tracking-wider w-max select-none shadow-brutalist-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-black inline-block"></span>
                <span>ABOUT ME // HOST_BIOGRAPHY</span>
              </div>

              {/* Headline */}
              <h3 className="text-2xl sm:text-4xl font-black font-display text-black dark:text-white leading-tight uppercase">
                Hey, I'm Hariharan S<span className="text-cv-pink font-black font-display">.</span>
              </h3>

              {/* Biography personal note */}
              <p className="font-body text-xs sm:text-sm font-semibold text-black dark:text-white leading-relaxed">
                I am a developer driven by both styling pixels and configuring secure APIs. I focus on developing clean frontend architectures in React and Next.js, then connecting them into resilient database endpoints. My studies in Artificial Intelligence & Data Science enable me to bridge the gap between creative visual designs and analytical machine layers, ensuring systems scale without compromising details.
              </p>

              {/* Stats Counters Grid (Internships and Projects count) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 select-none">
                
                {/* Internships counter badge */}
                <div className="bg-cv-pink border-2 border-black p-4 rounded-xl flex items-center gap-4 shadow-brutalist-sm hover:-translate-y-0.5 transition-transform duration-100 text-black">
                  <div className="w-12 h-12 bg-white rounded-lg border-2 border-black flex items-center justify-center font-display font-black text-2xl shadow-brutalist-sm">
                    4
                  </div>
                  <div className="leading-tight">
                    <div className="font-mono text-[9px] font-black uppercase text-black/80">CREDENTIAL</div>
                    <div className="font-mono text-xs font-black uppercase text-black">INTERNSHIPS</div>
                  </div>
                </div>

                {/* Projects counter badge */}
                <div className="bg-cv-cyan border-2 border-black p-4 rounded-xl flex items-center gap-4 shadow-brutalist-sm hover:-translate-y-0.5 transition-transform duration-100 text-black">
                  <div className="w-12 h-12 bg-white rounded-lg border-2 border-black flex items-center justify-center font-display font-black text-2xl shadow-brutalist-sm">
                    5
                  </div>
                  <div className="leading-tight">
                    <div className="font-mono text-[9px] font-black uppercase text-black/80">CREDENTIAL</div>
                    <div className="font-mono text-xs font-black uppercase text-black">HANDLED PROJECTS</div>
                  </div>
                </div>

              </div>

            </div>

            {/* Overlapping Resume Link Sticker Badge */}
            <div className="pt-8 select-none mt-auto">
              <Link 
                to="/resume" 
                className="w-full text-center flex items-center justify-center gap-2.5 py-3.5 bg-cv-yellow text-black border-2 border-black px-4 py-2 font-mono text-xs font-black uppercase shadow-brutalist hover:-translate-y-0.5 hover:shadow-brutalist-lg transition-all rounded-lg cursor-pointer select-none font-bold"
              >
                <span>Explore Full Resume Sheet</span>
                <ArrowUpRight className="w-4 h-4 text-black shrink-0 stroke-[2.5px]" />
              </Link>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default About;
