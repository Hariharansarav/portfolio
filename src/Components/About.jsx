import React, { useState, useEffect } from 'react';
import { 
  User, Sparkles, Terminal, Cpu, GraduationCap, MapPin, 
  Award, CheckCircle2, Folder, FileText, Activity, Wifi, 
  BatteryCharging, FileCode, Check 
} from 'lucide-react';

// Profile image
import profileImage from '../assets/Hariharan.png';

const About = () => {
  const [selectedFile, setSelectedFile] = useState('identity.txt');
  const [terminalPrompt, setTerminalPrompt] = useState('cat /root/identity.txt');
  const [isCompiling, setIsCompiling] = useState(false);
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

  // Update command prompt and simulate compiler check
  useEffect(() => {
    setTerminalPrompt(`cat /root/${selectedFile}`);
    setIsCompiling(true);
    const timer = setTimeout(() => {
      setIsCompiling(false);
    }, 450);
    return () => clearTimeout(timer);
  }, [selectedFile]);

  const files = [
    { name: 'identity.txt', label: 'identity.txt', size: '2.4kb', color: 'bg-cv-yellow' },
    { name: 'skills.dll', label: 'skills.dll', size: '8.1kb', color: 'bg-cv-cyan' },
    { name: 'education.dat', label: 'education.dat', size: '1.7kb', color: 'bg-cv-green' }
  ];

  return (
    <section id="about" className="py-20 bg-cv-bg relative overflow-hidden">
      {/* Absolute brutalist layout decorations */}
      <div className="absolute top-24 left-10 w-32 h-32 bg-grid-cyber border border-black/15 dark:border-white/10 hidden xl:block select-none pointer-events-none rounded-lg opacity-40"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full animate-fadeIn">
        
        {/* Section Header */}
        <div className="text-center space-y-2.5 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-cv-yellow text-black border-brutalist shadow-brutalist-sm text-xs font-mono font-bold uppercase tracking-wider">
            <User className="w-4 h-4 text-black" />
            <span>RETRO_DECK.OS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black font-display text-black uppercase">
            ABOUT ME<span className="text-cv-pink font-black text-4xl">.</span>
          </h2>
        </div>

        {/* Retro Workspace Console Container */}
        <div className="w-full bg-white dark:bg-theme-card-bg border-brutalist-thick shadow-brutalist-lg rounded-2xl overflow-hidden">
          
          {/* OS Header Toolbar */}
          <div className="bg-black text-white dark:bg-white dark:text-black border-b-3 border-black px-4 py-3 flex flex-wrap items-center justify-between font-mono text-xs select-none gap-y-2">
            <div className="flex items-center gap-2">
              <span className="w-3.5 h-3.5 rounded-full bg-cv-pink border border-black inline-block"></span>
              <strong className="tracking-widest font-black uppercase text-[10px] sm:text-xs">HARIHARAN_OS_v3.0</strong>
            </div>
            
            <div className="hidden md:flex items-center gap-6 text-[10px] sm:text-xs text-slate-350 dark:text-slate-700 font-bold">
              <span className="flex items-center gap-1.5"><Activity className="w-3.5 h-3.5 text-cv-green" /> SYS_LOAD: {systemLoad}%</span>
              <span className="flex items-center gap-1.5"><Wifi className="w-3.5 h-3.5 text-cv-cyan" /> CONNECTED // INT_PORT_5173</span>
              <span className="flex items-center gap-1.5"><BatteryCharging className="w-3.5 h-3.5 text-cv-yellow animate-pulse" /> PWR: 100%</span>
            </div>

            <div className="flex items-center gap-3 text-[10px] sm:text-xs font-black">
              <span className="bg-cv-yellow text-black px-2 py-0.5 border border-black font-black uppercase shadow-brutalist-sm">GUEST</span>
              <span className="bg-slate-800 text-white dark:bg-slate-200 dark:text-black px-2 py-0.5 border border-black rounded">{currentTime}</span>
            </div>
          </div>

          {/* OS Desktop Workspace Panels */}
          <div className="grid grid-cols-1 lg:grid-cols-12 divide-y-3 lg:divide-y-0 lg:divide-x-3 divide-black">
            
            {/* PANEL A: Directory Explorer (Tree Navigator) */}
            <div className="lg:col-span-3 bg-slate-50 dark:bg-slate-900/40 p-5 flex flex-col justify-between">
              <div>
                <span className="block font-mono text-[9px] font-black text-slate-500 dark:text-slate-400 uppercase tracking-widest border-b border-dashed border-slate-350 dark:border-slate-800 pb-2 mb-4">
                  [ DIRECTORY TREE ]
                </span>
                
                {/* Explorer File System */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-black dark:text-white font-mono text-xs font-black uppercase select-none">
                    <Folder className="w-4 h-4 text-cv-yellow fill-cv-yellow/30 shrink-0" />
                    <span>root_dir /</span>
                  </div>

                  <div className="pl-4 space-y-2.5">
                    {files.map((file) => {
                      const isActive = selectedFile === file.name;
                      return (
                        <button
                          key={file.name}
                          onClick={() => setSelectedFile(file.name)}
                          className={`w-full flex items-center justify-between text-left p-3.5 border-2 border-black font-mono text-xs select-none transition-all duration-200 cursor-pointer ${
                            isActive
                              ? `${file.color} text-black font-black shadow-brutalist-sm translate-x-1.5`
                              : 'bg-white dark:bg-theme-card-bg text-slate-700 dark:text-slate-300 font-semibold hover:-translate-y-0.5 hover:shadow-brutalist-sm'
                          }`}
                        >
                          <span className="flex items-center gap-2 truncate">
                            <FileText className={`w-4 h-4 shrink-0 ${isActive ? 'text-black' : 'text-slate-400'}`} />
                            <span className="truncate">{file.label}</span>
                          </span>
                          <span className={`text-[9px] px-1.5 py-0.5 border border-black rounded ${isActive ? 'bg-white text-black' : 'bg-slate-100 dark:bg-slate-800'}`}>
                            {file.size}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Memory statistics footer */}
              <div className="mt-8 pt-4 border-t border-dashed border-slate-300 dark:border-slate-800 font-mono text-[9px] text-slate-500 space-y-1 select-none">
                <div>DISK SIZE: 248.60 GB / 512.00 GB</div>
                <div>CLUSTER_ID: CYBER_COB_B08</div>
              </div>
            </div>

            {/* PANEL B: Simple Profile Diagnostic Screen */}
            <div className="lg:col-span-4 p-6 flex flex-col items-center justify-center bg-white dark:bg-theme-card-bg relative select-none min-h-[460px] lg:min-h-0">
              
              <span className="w-full text-left font-mono text-[9px] font-black text-slate-500 dark:text-slate-400 uppercase tracking-widest border-b border-dashed border-slate-300 dark:border-slate-800 pb-2 mb-6">
                [ DIAGNOSTIC FEED ]
              </span>

              {/* Simple Profile Picture Frame */}
              <div className="w-40 h-40 border-2 border-black overflow-hidden shadow-brutalist rounded-xl mb-8 relative group">
                <img
                  src={profileImage}
                  alt="Hariharan S"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
                />
              </div>

              {/* Minimalist Details Stack */}
              <div className="w-full space-y-3 font-mono text-xs">
                <div className="flex justify-between items-center border-b border-dashed border-slate-300 dark:border-slate-800 pb-2">
                  <span className="text-slate-500 uppercase tracking-wider text-[10px]">SYS_CORE</span>
                  <span className="font-black text-black dark:text-white">B.Tech AI & DS</span>
                </div>
                <div className="flex justify-between items-center border-b border-dashed border-slate-300 dark:border-slate-800 pb-2">
                  <span className="text-slate-500 uppercase tracking-wider text-[10px]">LOCATION</span>
                  <span className="font-black text-black dark:text-white">Coimbatore, IN</span>
                </div>
                <div className="flex justify-between items-center pb-1">
                  <span className="text-slate-500 uppercase tracking-wider text-[10px]">SYS_STATUS</span>
                  <span className="font-black text-cv-green uppercase flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-cv-green animate-pulse inline-block"></span>
                    ACTIVE
                  </span>
                </div>
              </div>

            </div>

            {/* PANEL C: Retro Terminal Console (Dynamic file compiler output) */}
            <div className="lg:col-span-5 bg-black text-cv-green p-6 font-mono text-xs flex flex-col justify-between min-h-[460px] lg:min-h-0 relative">
              
              {/* Virtual window layout dots */}
              <div className="absolute top-3.5 right-4 flex items-center gap-1.5 select-none">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500 border border-black"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500 border border-black"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-green-500 border border-black"></span>
              </div>

              {/* Terminal Viewport */}
              <div className="space-y-4 overflow-y-auto max-h-[420px] pr-2">
                
                {/* Compiler Command Prompt */}
                <div className="space-y-1">
                  <div className="text-slate-450">HARIHARAN_OS Core Terminal (tty1)</div>
                  <div className="text-slate-450">Session init: guest_client_04 // OK</div>
                  <div className="flex items-center gap-1.5 pt-1.5 text-white">
                    <span className="text-cv-yellow">guest@hariharan_os:~$</span>
                    <span>{terminalPrompt}</span>
                  </div>
                </div>

                {/* Compilation / loading simulation state */}
                {isCompiling ? (
                  <div className="space-y-1 text-cv-cyan animate-pulse">
                    <div>[SYS] MOUNTING SECTOR FOR /root/{selectedFile}...</div>
                    <div>[SYS] COMPILED SUCCESSFULLY // READ_BLOCK_OK</div>
                  </div>
                ) : (
                  <div className="animate-fadeIn space-y-4">
                    
                    {/* FILE CONTENT 1: identity.txt */}
                    {selectedFile === 'identity.txt' && (
                      <div className="space-y-4 text-white">
                        <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-cv-pink text-black border border-black rounded text-[10px] font-black uppercase">
                          <Sparkles className="w-3 h-3 text-black" /> CORE DIRECTIVE
                        </div>
                        
                        <h3 className="text-sm sm:text-base font-black text-cv-yellow leading-tight uppercase font-display border-b border-dashed border-cv-green pb-2">
                          Merging visual layouts with reliable systems
                        </h3>

                        <p className="text-slate-200 text-xs leading-relaxed font-body font-semibold">
                          I am an enthusiastic Full Stack Developer & UI/UX Designer. I specialize in building responsive, modern web applications from scratch, combining visual aesthetics with optimized backend APIs.
                        </p>

                        {/* Three focus capsules */}
                        <div className="space-y-2 pt-2">
                          <div className="flex items-center gap-3 bg-slate-900 border border-slate-800 p-2.5 rounded-lg">
                            <span className="w-5 h-5 rounded bg-cv-pink text-black flex items-center justify-center font-mono font-black text-[10px]">01</span>
                            <span className="text-[10px] font-black text-slate-200 uppercase tracking-tight">Fullstack Web Systems</span>
                          </div>
                          <div className="flex items-center gap-3 bg-slate-900 border border-slate-800 p-2.5 rounded-lg">
                            <span className="w-5 h-5 rounded bg-cv-cyan text-black flex items-center justify-center font-mono font-black text-[10px]">02</span>
                            <span className="text-[10px] font-black text-slate-200 uppercase tracking-tight">Creative UI/UX Layouts</span>
                          </div>
                          <div className="flex items-center gap-3 bg-slate-900 border border-slate-800 p-2.5 rounded-lg">
                            <span className="w-5 h-5 rounded bg-cv-orange text-black flex items-center justify-center font-mono font-black text-[10px]">03</span>
                            <span className="text-[10px] font-black text-slate-200 uppercase tracking-tight">Database Tuning & Integration</span>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* FILE CONTENT 2: skills.dll */}
                    {selectedFile === 'skills.dll' && (
                      <div className="space-y-4">
                        
                        {/* Frontend */}
                        <div className="space-y-2">
                          <div className="text-[9px] font-black text-slate-450 uppercase tracking-widest border-b border-dashed border-slate-800 pb-1 flex items-center gap-1.5">
                            <FileCode className="w-3.5 h-3.5 text-cv-cyan" /> [0x01_FRONTEND]
                          </div>
                          <div className="flex flex-wrap gap-1.5 pt-1">
                            <span className="px-2 py-0.5 bg-slate-900 border border-slate-800 rounded font-mono text-[10px] font-bold text-cv-cyan">React.js</span>
                            <span className="px-2 py-0.5 bg-slate-900 border border-slate-800 rounded font-mono text-[10px] font-bold text-white">Next.js</span>
                            <span className="px-2 py-0.5 bg-slate-900 border border-slate-800 rounded font-mono text-[10px] font-bold text-cv-cyan">Tailwind CSS</span>
                          </div>
                        </div>

                        {/* Backend */}
                        <div className="space-y-2 pt-2">
                          <div className="text-[9px] font-black text-slate-450 uppercase tracking-widest border-b border-dashed border-slate-800 pb-1 flex items-center gap-1.5">
                            <Cpu className="w-3.5 h-3.5 text-cv-green" /> [0x02_BACKEND_DB]
                          </div>
                          <div className="flex flex-wrap gap-1.5 pt-1">
                            <span className="px-2 py-0.5 bg-slate-900 border border-slate-800 rounded font-mono text-[10px] font-bold text-cv-green">Node.js</span>
                            <span className="px-2 py-0.5 bg-slate-900 border border-slate-800 rounded font-mono text-[10px] font-bold text-cv-yellow">Express.js</span>
                            <span className="px-2 py-0.5 bg-slate-900 border border-slate-800 rounded font-mono text-[10px] font-bold text-cv-green">MongoDB</span>
                            <span className="px-2 py-0.5 bg-slate-900 border border-slate-800 rounded font-mono text-[10px] font-bold text-cv-orange">MSSQL</span>
                          </div>
                        </div>

                        {/* Utilities */}
                        <div className="space-y-2 pt-2">
                          <div className="text-[9px] font-black text-slate-450 uppercase tracking-widest border-b border-dashed border-slate-800 pb-1 flex items-center gap-1.5">
                            <Terminal className="w-3.5 h-3.5 text-cv-pink" /> [0x03_DESIGN_SYSTEMS]
                          </div>
                          <div className="flex flex-wrap gap-1.5 pt-1">
                            <span className="px-2 py-0.5 bg-slate-900 border border-slate-800 rounded font-mono text-[10px] font-bold text-cv-pink">Figma</span>
                            <span className="px-2 py-0.5 bg-slate-900 border border-slate-800 rounded font-mono text-[10px] font-bold text-cv-yellow">Python</span>
                            <span className="px-2 py-0.5 bg-slate-900 border border-slate-800 rounded font-mono text-[10px] font-bold text-cv-pink">Git & GitHub</span>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* FILE CONTENT 3: education.dat */}
                    {selectedFile === 'education.dat' && (
                      <div className="space-y-4 text-white">
                        <div className="space-y-3">
                          
                          <div className="bg-slate-900 border border-slate-800 p-3 rounded-lg space-y-1">
                            <div className="text-[8px] font-bold text-slate-500 uppercase tracking-widest">FIELD OF STUDY</div>
                            <div className="font-black text-cv-green uppercase flex items-center gap-1.5 text-xs">
                              <GraduationCap className="w-4 h-4 shrink-0" />
                              B.Tech AI & Data Science
                            </div>
                          </div>

                          <div className="bg-slate-900 border border-slate-800 p-3 rounded-lg space-y-1">
                            <div className="text-[8px] font-bold text-slate-500 uppercase tracking-widest">ACADEMIC RATING</div>
                            <div className="font-black text-cv-yellow uppercase flex items-center gap-1.5 text-xs">
                              <Award className="w-4 h-4 shrink-0" />
                              CGPA 7.5 AVERAGE
                            </div>
                          </div>
                        </div>

                        <div className="bg-slate-900 border border-slate-850 p-2.5 rounded-lg text-[9px] font-bold text-slate-350 uppercase flex items-center gap-2">
                          <Check className="w-3.5 h-3.5 text-cv-green shrink-0" />
                          <span>FOCUS: Modern Web Architectures & AI</span>
                        </div>
                      </div>
                    )}

                  </div>
                )}
              </div>

              {/* Cursor flicker symbol */}
              <div className="pt-6 text-[10px] text-slate-500 select-none flex items-center gap-1">
                <span>guest@hariharan_os:~$</span>
                <span className="w-2 h-3.5 bg-cv-green animate-blink inline-block"></span>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default About;
