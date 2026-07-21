import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Mail, ArrowRight, Sparkles, Zap, Code2, Layout, Database, FileText, 
  Terminal, User, CheckCircle2, Award, Briefcase, GraduationCap 
} from 'lucide-react';
import skillsAvatar from '../assets/Avatar.png';
import profileImage from '../assets/Hariharan.png';
import resumePDF from '../assets/Hariharan CV.pdf';

// Import icons
import reactIcon from './icons/React.png';
import nodeIcon from './icons/nodejs.png';
import pythonIcon from './icons/PYTHON.png';
import figmaIcon from './icons/FIGMA.png';
import mongoDBIcon from './icons/DB.png';
import sqlIcon from './icons/MSSQL.png';

const Hero = () => {
  const [activeTab, setActiveTab] = useState('bio');

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

  return (
    <section id="home" className="min-h-screen pt-32 pb-20 flex items-center justify-center relative overflow-hidden bg-[#12101C]">
      
      {/* Background Electric Violet Glowing Orbs */}
      <div className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#8b5cf6]/15 rounded-full blur-3xl pointer-events-none animate-pulse-violet" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-[#7c3aed]/10 rounded-full blur-3xl pointer-events-none" />

      {/* Floating 3D Accent Badge */}
      <div className="absolute top-28 right-8 lg:right-20 z-20 animate-float-violet hidden sm:block">
        <div className="w-12 h-12 rounded-2xl bg-[#8b5cf6] text-white flex items-center justify-center shadow-lg shadow-[#8b5cf6]/40 transform rotate-12">
          <Zap className="w-7 h-7 fill-white" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* LEFT COLUMN: INTRO & CALL TO ACTION */}
          <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#241B35] border border-[#8b5cf6]/40 text-[#c4b5fd] text-xs font-semibold shadow-md">
              <span className="w-2 h-2 rounded-full bg-[#8b5cf6] animate-ping" />
              <span>Full Stack Developer & UI/UX Specialist</span>
            </div>

            {/* Main Greeting & Title */}
            <div className="space-y-2">
              <p className="text-xl sm:text-2xl font-bold text-slate-300 tracking-wide">
                Hi, I'm <span className="text-[#8b5cf6] font-extrabold">Hariharan</span>
              </p>
              
              <h1 className="text-4xl sm:text-6xl lg:text-6xl font-black text-white tracking-tight leading-tight">
                UI/UX Designer & <br />
                <span className="gradient-text-violet">Fullstack Developer</span>
              </h1>
            </div>

            {/* Description */}
            <p className="text-slate-300 text-base sm:text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Engineering responsive frontend interfaces with React & Next.js, backed by robust REST APIs, Node.js microservices, and database systems.
            </p>

            {/* Button Actions */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={() => scrollToSection('contact')}
                className="px-8 py-4 rounded-full bg-[#8b5cf6] hover:bg-[#7c3aed] text-white font-extrabold text-sm shadow-xl shadow-[#8b5cf6]/35 hover:shadow-[#8b5cf6]/60 transition-all duration-300 flex items-center gap-2 group cursor-pointer"
              >
                <span>Hire Me</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => scrollToSection('contact')}
                className="w-12 h-12 rounded-full bg-[#241B35] border border-[#8b5cf6]/30 hover:border-[#8b5cf6] text-slate-200 hover:text-[#8b5cf6] shadow-md flex items-center justify-center transition-all cursor-pointer"
                title="Send Direct Message"
              >
                <Mail className="w-5 h-5" />
              </button>

              <button
                onClick={() => scrollToSection('projects')}
                className="px-6 py-4 rounded-full bg-[#241B35] hover:bg-[#2e2344] text-slate-200 font-bold text-sm border border-[#8b5cf6]/30 shadow-md transition-all cursor-pointer"
              >
                View Projects
              </button>
            </div>

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-[#241B35] max-w-md mx-auto lg:mx-0">
              <div className="text-center lg:text-left">
                <p className="text-2xl sm:text-3xl font-extrabold text-white">4+</p>
                <p className="text-xs text-slate-400 font-semibold">Internships</p>
              </div>
              <div className="text-center lg:text-left">
                <p className="text-2xl sm:text-3xl font-extrabold text-white">5+</p>
                <p className="text-xs text-slate-400 font-semibold">Projects Built</p>
              </div>
              <div className="text-center lg:text-left">
                <p className="text-2xl sm:text-3xl font-extrabold text-[#8b5cf6]">7.5</p>
                <p className="text-xs text-slate-400 font-semibold">B.Tech CGPA</p>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: UNIQUE INTERACTIVE DEVELOPER STUDIO COMMAND CENTER */}
          <div className="lg:col-span-6">
            <div className="glass-card-violet rounded-3xl p-6 sm:p-8 border border-[#8b5cf6]/30 bg-[#241B35]/90 relative shadow-2xl backdrop-blur-2xl">
              
              {/* Studio Header Row */}
              <div className="flex items-center justify-between gap-4 pb-6 border-b border-[#8b5cf6]/20">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <img
                      src={profileImage}
                      alt="Hariharan"
                      className="w-12 h-12 rounded-xl object-cover border border-[#8b5cf6]"
                    />
                    <span className="absolute -bottom-1 -right-1 w-3.5 h-3.5 rounded-full bg-emerald-500 border-2 border-[#241B35]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white leading-tight">Hariharan S</h3>
                    <p className="text-xs text-[#c4b5fd] font-mono">Full Stack Developer & AI Engineer</p>
                  </div>
                </div>

                <span className="px-3 py-1 rounded-full bg-[#12101C] border border-[#8b5cf6]/30 text-emerald-400 text-[11px] font-mono font-semibold hidden sm:inline-block">
                  ● Available for Hire
                </span>
              </div>

              {/* Interactive Showcase Tabs */}
              <div className="flex items-center gap-2 pt-4 pb-4 border-b border-[#8b5cf6]/10 overflow-x-auto">
                {[
                  { id: 'bio', label: 'Bio & Background', icon: User },
                  { id: 'stack', label: 'Core Stack', icon: Code2 },
                  { id: 'focus', label: 'Key Strengths', icon: Sparkles },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 whitespace-nowrap ${
                      activeTab === tab.id
                        ? 'bg-[#8b5cf6] text-white shadow-md shadow-[#8b5cf6]/30'
                        : 'bg-[#12101C]/80 text-slate-300 hover:text-white border border-slate-800'
                    }`}
                  >
                    <tab.icon className="w-3.5 h-3.5" />
                    <span>{tab.label}</span>
                  </button>
                ))}
              </div>

              {/* Dynamic Tab Body Content */}
              <div className="pt-6 min-h-[220px]">
                
                {/* TAB 1: BIO & BACKGROUND */}
                {activeTab === 'bio' && (
                  <div className="space-y-4 animate-in fade-in duration-300">
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-medium">
                      Pursuing <strong className="text-white">B.Tech in Artificial Intelligence & Data Science</strong> at KGiSL Institute of Technology with hands-on full-stack development experience across 4 internships.
                    </p>

                    <div className="grid grid-cols-2 gap-3 pt-2">
                      <div className="bg-[#12101C]/80 p-3 rounded-xl border border-slate-800">
                        <p className="text-[10px] text-[#c4b5fd] font-mono uppercase">Current Internship</p>
                        <p className="text-xs font-bold text-white">Full Stack Intern @ KG Agile</p>
                      </div>
                      <div className="bg-[#12101C]/80 p-3 rounded-xl border border-slate-800">
                        <p className="text-[10px] text-[#c4b5fd] font-mono uppercase">Location</p>
                        <p className="text-xs font-bold text-white">Coimbatore, Tamil Nadu</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-xs text-[#c4b5fd] pt-1">
                      <CheckCircle2 className="w-4 h-4 text-[#8b5cf6]" />
                      <span>Proficient in React, Next.js, Node.js, Express, SQL, & MongoDB</span>
                    </div>
                  </div>
                )}

                {/* TAB 2: CORE STACK */}
                {activeTab === 'stack' && (
                  <div className="space-y-3 animate-in fade-in duration-300">
                    <p className="text-xs text-slate-300 font-medium">Primary frameworks & design tools:</p>
                    
                    <div className="grid grid-cols-2 gap-2.5">
                      {[
                        { name: 'React.js & Next.js', icon: reactIcon, level: 'Advanced' },
                        { name: 'Node.js & Express', icon: nodeIcon, level: 'Advanced' },
                        { name: 'Figma UI/UX', icon: figmaIcon, level: 'Advanced' },
                        { name: 'Python & AI', icon: pythonIcon, level: 'Proficient' },
                        { name: 'MongoDB', icon: mongoDBIcon, level: 'Intermediate' },
                        { name: 'MSSQL / MySQL', icon: sqlIcon, level: 'Intermediate' },
                      ].map((item, idx) => (
                        <div key={idx} className="flex items-center gap-2.5 p-2.5 rounded-xl bg-[#12101C]/90 border border-slate-800">
                          <img src={item.icon} alt={item.name} className="w-5 h-5 object-contain" />
                          <div>
                            <p className="text-xs font-bold text-white truncate">{item.name}</p>
                            <p className="text-[10px] text-[#8b5cf6] font-mono">{item.level}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* TAB 3: KEY STRENGTHS */}
                {activeTab === 'focus' && (
                  <div className="space-y-3 animate-in fade-in duration-300">
                    {[
                      { title: 'Frontend Architecture', desc: 'Crafting pixel-perfect, accessible UI components with React & Tailwind CSS.' },
                      { title: 'REST API & Backend Design', desc: 'Designing secure CRUD endpoints, database schemas, and middleware.' },
                      { title: 'AI & Data Innovations', desc: 'Integrating machine learning models for real-world agricultural & business automation.' },
                    ].map((st, idx) => (
                      <div key={idx} className="p-3 rounded-xl bg-[#12101C]/80 border border-slate-800 space-y-1">
                        <p className="text-xs font-bold text-white flex items-center gap-2">
                          <Sparkles className="w-3.5 h-3.5 text-[#8b5cf6]" />
                          <span>{st.title}</span>
                        </p>
                        <p className="text-xs text-slate-300">{st.desc}</p>
                      </div>
                    ))}
                  </div>
                )}

              </div>

              {/* Studio Footer */}
              <div className="pt-4 border-t border-[#8b5cf6]/20 flex items-center justify-between text-xs text-slate-400">
                <span className="font-mono">Hariharan.identity()</span>
                <button
                  onClick={handleResumeDownload}
                  className="text-[#8b5cf6] hover:text-white font-bold flex items-center gap-1 transition-colors cursor-pointer"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>Download CV</span>
                </button>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
