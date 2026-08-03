import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowLeft, Download, Share2, Mail, Phone, MapPin,
  Briefcase, GraduationCap, Award, Code2, FileText, Check,
  ArrowUpRight, Sparkles, Folder, FileCode, Contact, ChevronLeft,
  ChevronRight, RefreshCw, Layers, ExternalLink, HelpCircle
} from 'lucide-react';
import resumePDF from '../assets/Hariharan CV.pdf';
import profileImage from '../assets/Hariharan.png';
import avatarImage from '../assets/HariAvatar.png';

const ResumePage = () => {
  const [activeTab, setActiveTab] = useState('summary'); // 'summary' | 'skills' | 'experience' | 'projects' | 'education' | 'contact'
  const [copied, setCopied] = useState(false);

  const tabsList = ['summary', 'skills', 'experience', 'projects', 'education', 'contact'];

  const handleBack = () => {
    const idx = tabsList.indexOf(activeTab);
    if (idx > 0) setActiveTab(tabsList[idx - 1]);
  };

  const handleForward = () => {
    const idx = tabsList.indexOf(activeTab);
    if (idx < tabsList.length - 1) setActiveTab(tabsList[idx + 1]);
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = resumePDF;
    link.download = 'Hariharan_S_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleShare = () => {
    const shareUrl = `${window.location.origin}${window.location.pathname}#/resume`;
    navigator.clipboard.writeText(shareUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const internships = [
    {
      role: 'Full Stack Developer Intern',
      company: 'KG Agile',
      location: 'Coimbatore',
      period: 'Feb 2026 – April 2026',
      points: [
        'Worked on full-stack web application development using Next.js, React.js, Express.js, and MongoDB.',
        'Contributed to frontend development, backend integration, and REST API implementation.',
        'Used Postman for API testing and validation.',
        'Worked on UI content design and responsive layout improvements.',
      ],
      tags: ['Next.js', 'React.js', 'Express.js', 'MongoDB', 'Postman', 'REST APIs'],
      category: 'Full Stack',
      color: 'bg-[#FFDE4D]' // Yellow
    },
    {
      role: 'Web App Dev & Backend Intern',
      company: 'Lakshmi Life Sciences Private Limited (LLS)',
      location: 'Coimbatore',
      period: 'Jun 2025 – Jul 2025',
      points: [
        'Developed full-stack applications using React.js, Node.js, Express.js, and SQL databases.',
        'Built REST APIs and implemented CRUD operations for workflow and data management systems.',
        'Worked on frontend and backend integration and responsive user interface development.',
        'Improved application performance through efficient database connectivity.',
      ],
      tags: ['React.js', 'Node.js', 'Express.js', 'SQL Databases', 'CRUD Operations'],
      category: 'Backend',
      color: 'bg-[#22D3EE]' // Cyan
    },
    {
      role: 'IoT Intern',
      company: 'Ascentz Technologies',
      location: 'Coimbatore',
      period: 'Nov 2023 – Dec 2023',
      points: [
        'Completed internship training focused on Internet of Things (IoT) concepts and applications.',
        'Gained practical exposure to IoT technologies, device connectivity, and real-time system monitoring.',
        'Learned fundamentals of sensor integration, embedded systems, and smart automation.',
      ],
      tags: ['IoT', 'Sensor Integration', 'Embedded Systems', 'Real-Time Systems'],
      category: 'IoT & Hardware',
      color: 'bg-[#A3E635]' // Lime Green
    },
    {
      role: 'Administration Intern',
      company: 'SRI Valves',
      location: 'Edayarpalayam',
      period: 'Jan 2023',
      points: [
        'Assisted in daily office administration and operational activities to ensure smooth workflow management.',
        'Managed office files, records, and documentation with proper organization and data handling.',
        'Supported administrative tasks related to data management.',
      ],
      tags: ['Workflow Management', 'Office Operations', 'Data Handling'],
      category: 'Administration',
      color: 'bg-[#C084FC]' // Purple
    },
  ];

  const projects = [
    {
      title: 'Smart Tribal Farming Project',
      date: 'Sept 2025',
      award: 'Best Paper Award Winner 🏆',
      tech: 'React.js, AI/ML, Data Analysis',
      liveLink: 'https://smart-tribal-farming.onrender.com/',
      highlights: [
        'Developing an AI-powered crop suitability and planning system for tribal farmers.',
        'Completed frontend development with responsive UI design.',
        'Working on AI model integration for crop prediction and recommendations.',
        'Received the Best Paper Award for innovative application of AI in agriculture.',
      ],
      color: 'bg-[#FFDE4D]' // Yellow
    },
    {
      title: 'CampusRoute Tracking System',
      date: 'Ongoing',
      award: 'UI/UX & Developer Role 🎨',
      tech: 'React Native, Socket.io, Redis, MySQL',
      liveLink: null,
      highlights: [
        'Designing and developing a full-stack real-time campus bus tracking and transport management platform.',
        'Led the UI/UX design phase, creating user flows, wireframes, and components in Figma.',
        'Implementing live GPS location tracking with Socket.io, caching locations in Redis.',
        'Building dedicated features for student notifications, breakdowns, and admin control panels.',
      ],
      color: 'bg-[#F472B6]' // Pink
    },
    {
      title: 'Audit Management System',
      date: 'Oct 2025',
      award: null,
      tech: 'React.js, Node.js, Express.js, MSSQL',
      liveLink: 'https://llsamsystem.netlify.app/',
      highlights: [
        'Developed a full-stack Audit Management System with REST API integration and MSSQL connectivity.',
        'Implemented CRUD functionalities for managing audits, observations, and workflow operations.',
        'Designed responsive workflow-based user interfaces and optimized backend integration.',
      ],
      color: 'bg-[#22D3EE]' // Cyan
    },
    {
      title: 'Students Choice Global',
      date: 'March 2025',
      award: null,
      tech: 'Next.js, Node.js, Express.js',
      liveLink: 'https://www.studentschoiceglobal.com/',
      highlights: [
        'Worked on full-stack development as part of a collaborative team during the KG Agile internship.',
        'Developed and maintained responsive web pages using Next.js with REST API connectivity.',
      ],
      color: 'bg-[#A3E635]' // Lime Green
    },
    {
      title: 'V Do Naturals - Ecomm Panel',
      date: 'April 2025',
      award: null,
      tech: 'Node.js, Express.js, JavaScript',
      liveLink: 'https://vdonaturalss.com/',
      highlights: [
        'Worked on admin panel development and backend API integration for an e-commerce web application.',
        'Handled frontend-backend connectivity and dynamic data integration.',
      ],
      color: 'bg-[#C084FC]' // Purple
    },
    {
      title: 'Green Wheels Supply Chain',
      date: 'Dec 2023',
      award: null,
      tech: 'HTML5, CSS3, JavaScript',
      liveLink: 'https://www.greenwheelscs.in/',
      highlights: [
        'Developed a responsive business website with structured navigation and user-friendly interface design.',
        'Worked on frontend development and responsive layouts for better accessibility.',
      ],
      color: 'bg-slate-100'
    },
  ];

  const skillCategories = [
    {
      name: 'UI/UX & Design',
      items: ['Figma', 'Photoshop', 'Wireframing', 'UI Design'],
      color: 'bg-[#F472B6]' // Pink
    },
    {
      name: 'Frontend',
      items: ['React.js', 'HTML5', 'CSS3', 'JavaScript (ES6+)', 'Next.js', 'Responsive Design'],
      color: 'bg-[#FFDE4D]' // Yellow
    },
    {
      name: 'Backend',
      items: ['Node.js', 'Express.js', 'REST API Dev', 'CRUD Operations'],
      color: 'bg-[#22D3EE]' // Cyan
    },
    {
      name: 'Databases',
      items: ['MSSQL', 'MySQL', 'MongoDB'],
      color: 'bg-[#A3E635]' // Lime Green
    },
    {
      name: 'Languages',
      items: ['Java', 'Python', 'JavaScript'],
      color: 'bg-[#C084FC]' // Purple
    },
    {
      name: 'Tools & Platforms',
      items: ['Git', 'GitHub', 'Postman', 'VS Code'],
      color: 'bg-[#FB923C]' // Orange
    }
  ];

  // Address Bar path logic
  const getPathForTab = (tab) => {
    switch (tab) {
      case 'summary': return 'C:\\Resume\\Summary.txt';
      case 'skills': return 'C:\\Resume\\Skills_Matrix.sys';
      case 'experience': return 'C:\\Resume\\Experience\\';
      case 'projects': return 'C:\\Resume\\Projects\\';
      case 'education': return 'C:\\Resume\\Academic_Path.cert';
      case 'contact': return 'C:\\Resume\\Contact.vcf';
      default: return 'C:\\Resume\\';
    }
  };

  const getMetadataForTab = (tab) => {
    switch (tab) {
      case 'summary': return { size: '1.2 KB', type: 'Text Document', modified: 'Today, 18:24 PM' };
      case 'skills': return { size: '3.4 KB', type: 'System Matrix Configuration', modified: 'July 2026' };
      case 'experience': return { size: '8.1 KB', type: 'Directory Folders', modified: 'April 2026' };
      case 'projects': return { size: '12.5 KB', type: 'Application Shortcuts', modified: 'Ongoing' };
      case 'education': return { size: '2.8 KB', type: 'Certificate Records', modified: 'June 2026' };
      case 'contact': return { size: '0.9 KB', type: 'vCard Contact Card', modified: 'Today' };
      default: return { size: '0 KB', type: 'Unknown', modified: 'None' };
    }
  };

  const activeMeta = getMetadataForTab(activeTab);

  return (
    <div className="min-h-screen bg-[#DBE2E9] py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden print:bg-white print:p-0">
      
      {/* Vintage grid pattern Overlay (matches main portfolio) */}
      <div className="absolute inset-0 opacity-[0.25] pointer-events-none bg-grid-classic print:hidden" />

      {/* TOP HEADER MENU */}
      <div className="max-w-5xl mx-auto mb-8 flex flex-col sm:flex-row items-center justify-between gap-4 relative z-30 print:hidden">
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-black uppercase rounded-xl border-2 border-black bg-white hover:bg-slate-50 transition-all shadow-[3px_3px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[5px_5px_0px_rgba(0,0,0,1)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[1px_1px_0px_rgba(0,0,0,1)]"
        >
          <ArrowLeft className="w-4 h-4 stroke-[3px]" />
          <span>Back to Portfolio</span>
        </Link>

        {/* Global utility actions */}
        <div className="flex items-center gap-3">
          <button
            onClick={handleDownload}
            className="inline-flex items-center gap-2 bg-[#A3E635] text-black px-4 py-2.5 text-xs rounded-xl border-2 border-black font-black uppercase transition-all shadow-[3px_3px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[5px_5px_0px_rgba(0,0,0,1)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[1px_1px_0px_rgba(0,0,0,1)] cursor-pointer"
          >
            <Download className="w-4 h-4 stroke-[2.5px]" />
            <span>Download CV</span>
          </button>

          <button
            onClick={handleShare}
            className="inline-flex items-center gap-2 bg-white text-black px-4 py-2.5 text-xs rounded-xl border-2 border-black font-black uppercase transition-all shadow-[3px_3px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[5px_5px_0px_rgba(0,0,0,1)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[1px_1px_0px_rgba(0,0,0,1)] cursor-pointer"
          >
            {copied ? <Check className="w-4 h-4 text-emerald-600 stroke-[3px]" /> : <Share2 className="w-4 h-4" />}
            <span>{copied ? 'Link Copied!' : 'Share'}</span>
          </button>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* EXPLORER WINDOW FRAME                                                     */}
      {/* ========================================================================= */}
      <main className="max-w-5xl mx-auto bg-white border-3 border-black rounded-3xl shadow-[6px_6px_0px_rgba(0,0,0,1)] overflow-hidden relative z-25 text-left flex flex-col print:border-none print:shadow-none print:bg-white animate-fadeIn">
        
        {/* Title Bar */}
        <div className="bg-[#DBE2E9] border-b-3 border-black p-4 flex items-center justify-between select-none print:hidden">
          <div className="flex items-center gap-2">
            {/* Retro close/minimize buttons */}
            <div className="w-3.5 h-3.5 rounded-full bg-[#EF4444] border-2 border-black shadow-[1px_1px_0px_rgba(0,0,0,1)]"></div>
            <div className="w-3.5 h-3.5 rounded-full bg-[#FBBF24] border-2 border-black shadow-[1px_1px_0px_rgba(0,0,0,1)]"></div>
            <div className="w-3.5 h-3.5 rounded-full bg-[#10B981] border-2 border-black shadow-[1px_1px_0px_rgba(0,0,0,1)]"></div>
          </div>
          <span className="font-mono text-xs font-black uppercase tracking-wider text-black flex items-center gap-2">
            <Layers className="w-4 h-4 text-black" />
            <span>Hariharan_S_Resume_V2.sys</span>
          </span>
          <div className="w-12 h-1 bg-transparent"></div> {/* Spacer balance */}
        </div>

        {/* Path / Explorer Navigation Bar */}
        <div className="border-b-3 border-black p-3.5 bg-slate-50 flex items-center gap-3.5 print:hidden">
          {/* Back/Forward Controls */}
          <div className="flex items-center gap-2">
            <button
              onClick={handleBack}
              disabled={activeTab === 'summary'}
              className="p-1.5 bg-white border-2 border-black rounded-lg shadow-[1.5px_1.5px_0px_rgba(0,0,0,1)] hover:bg-slate-100 disabled:opacity-40 disabled:hover:bg-white cursor-pointer active:translate-x-[0.5px] active:translate-y-[0.5px] active:shadow-[0.5px_0.5px_0px_rgba(0,0,0,1)]"
            >
              <ChevronLeft className="w-4 h-4 stroke-[2.5px]" />
            </button>
            <button
              onClick={handleForward}
              disabled={activeTab === 'contact'}
              className="p-1.5 bg-white border-2 border-black rounded-lg shadow-[1.5px_1.5px_0px_rgba(0,0,0,1)] hover:bg-slate-100 disabled:opacity-40 disabled:hover:bg-white cursor-pointer active:translate-x-[0.5px] active:translate-y-[0.5px] active:shadow-[0.5px_0.5px_0px_rgba(0,0,0,1)]"
            >
              <ChevronRight className="w-4 h-4 stroke-[2.5px]" />
            </button>
          </div>

          {/* Address Breadcrumb */}
          <div className="flex-1 flex items-center gap-2 px-3 py-1.5 bg-white border-2 border-black rounded-xl font-mono text-xs text-black shadow-inner overflow-x-auto whitespace-nowrap">
            <span className="text-slate-400 font-bold">Address:</span>
            <span className="font-bold select-all">{getPathForTab(activeTab)}</span>
          </div>

          <button
            onClick={() => setActiveTab('summary')}
            className="p-1.5 bg-[#FFDE4D] border-2 border-black rounded-lg shadow-[1.5px_1.5px_0px_rgba(0,0,0,1)] hover:bg-[#FFDE4D]/90 cursor-pointer text-xs font-black uppercase flex items-center gap-1 active:translate-x-[0.5px] active:translate-y-[0.5px]"
          >
            <RefreshCw className="w-3.5 h-3.5 stroke-[2.5px]" />
            <span className="hidden sm:inline">Root</span>
          </button>
        </div>

        {/* Metadata Status Line */}
        <div className="bg-slate-100 px-4 py-2 border-b-2 border-black/10 font-mono text-[10px] font-bold text-slate-500 uppercase flex flex-wrap items-center gap-x-6 gap-y-1 print:hidden select-none">
          <span>Type: {activeMeta.type}</span>
          <span>Size: {activeMeta.size}</span>
          <span>Last modified: {activeMeta.modified}</span>
        </div>

        {/* CORE CONTAINER SPLIT */}
        <div className="flex flex-col md:flex-row min-h-[520px]">
          
          {/* LEFT SIDEBAR NAVIGATION PANEL (Navigation Tree) */}
          <aside className="w-full md:w-60 border-b-3 md:border-b-0 md:border-r-3 border-black p-5 bg-slate-50 print:hidden shrink-0 select-none">
            <span className="font-mono text-[9px] font-black text-slate-400 block uppercase tracking-widest mb-3.5">DIRECTORY TREE</span>
            
            <nav className="space-y-2.5 font-mono text-xs">
              <button
                onClick={() => setActiveTab('summary')}
                className={`w-full flex items-center gap-2.5 p-2.5 rounded-xl border-2 transition-all text-left cursor-pointer ${
                  activeTab === 'summary'
                    ? 'bg-[#FFDE4D] border-black font-black shadow-[2.5px_2.5px_0px_rgba(0,0,0,1)]'
                    : 'bg-white border-black/15 font-semibold text-slate-800 hover:border-black'
                }`}
              >
                <FileText className="w-4 h-4 text-black" />
                <span>Summary.txt</span>
              </button>

              <button
                onClick={() => setActiveTab('skills')}
                className={`w-full flex items-center gap-2.5 p-2.5 rounded-xl border-2 transition-all text-left cursor-pointer ${
                  activeTab === 'skills'
                    ? 'bg-[#22D3EE] border-black font-black shadow-[2.5px_2.5px_0px_rgba(0,0,0,1)]'
                    : 'bg-white border-black/15 font-semibold text-slate-800 hover:border-black'
                }`}
              >
                <Code2 className="w-4 h-4 text-black" />
                <span>Skills_Matrix.sys</span>
              </button>

              <button
                onClick={() => setActiveTab('experience')}
                className={`w-full flex items-center gap-2.5 p-2.5 rounded-xl border-2 transition-all text-left cursor-pointer ${
                  activeTab === 'experience'
                    ? 'bg-[#A3E635] border-black font-black shadow-[2.5px_2.5px_0px_rgba(0,0,0,1)]'
                    : 'bg-white border-black/15 font-semibold text-slate-800 hover:border-black'
                }`}
              >
                <Folder className="w-4 h-4 text-black" />
                <span>Experience/</span>
              </button>

              <button
                onClick={() => setActiveTab('projects')}
                className={`w-full flex items-center gap-2.5 p-2.5 rounded-xl border-2 transition-all text-left cursor-pointer ${
                  activeTab === 'projects'
                    ? 'bg-[#F472B6] border-black font-black shadow-[2.5px_2.5px_0px_rgba(0,0,0,1)]'
                    : 'bg-white border-black/15 font-semibold text-slate-800 hover:border-black'
                }`}
              >
                <FileCode className="w-4 h-4 text-black" />
                <span>Projects/</span>
              </button>

              <button
                onClick={() => setActiveTab('education')}
                className={`w-full flex items-center gap-2.5 p-2.5 rounded-xl border-2 transition-all text-left cursor-pointer ${
                  activeTab === 'education'
                    ? 'bg-[#C084FC] border-black font-black shadow-[2.5px_2.5px_0px_rgba(0,0,0,1)]'
                    : 'bg-white border-black/15 font-semibold text-slate-800 hover:border-black'
                }`}
              >
                <GraduationCap className="w-4 h-4 text-black" />
                <span>Academic_Path.cert</span>
              </button>

              <button
                onClick={() => setActiveTab('contact')}
                className={`w-full flex items-center gap-2.5 p-2.5 rounded-xl border-2 transition-all text-left cursor-pointer ${
                  activeTab === 'contact'
                    ? 'bg-[#FB923C] border-black font-black shadow-[2.5px_2.5px_0px_rgba(0,0,0,1)]'
                    : 'bg-white border-black/15 font-semibold text-slate-800 hover:border-black'
                }`}
              >
                <Contact className="w-4 h-4 text-black" />
                <span>Contact.vcf</span>
              </button>
            </nav>
          </aside>

          {/* RIGHT MAIN PANEL (Content Pane) */}
          <div className="flex-1 p-6 sm:p-8 overflow-y-auto max-h-[620px] bg-white">
            
            {/* 1. TAB: SUMMARY */}
            {activeTab === 'summary' && (
              <div className="space-y-6 animate-fadeIn font-body">
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 border-b-2 border-black/10 pb-6">
                  
                  {/* Photo Frame */}
                  <div className="w-32 h-32 border-3 border-black rounded-2xl overflow-hidden bg-slate-50 shadow-[4px_4px_0px_rgba(0,0,0,1)] select-none shrink-0 relative">
                    <img
                      src={profileImage}
                      alt="Hariharan S"
                      className="w-full h-full object-cover"
                      onError={(e) => { e.target.src = avatarImage; }}
                    />
                  </div>

                  <div className="space-y-2.5 text-center sm:text-left">
                    <div className="inline-flex items-center gap-1 px-2.5 py-0.5 bg-[#FFDE4D] border-2 border-black text-[9px] font-black uppercase shadow-[1.5px_1.5px_0px_rgba(0,0,0,1)]">
                      <Sparkles className="w-3 h-3" />
                      <span>Available for Hire</span>
                    </div>
                    <h2 className="text-3xl font-black uppercase tracking-tight text-black leading-none">
                      Hariharan S
                    </h2>
                    <h3 className="text-sm font-bold font-mono uppercase bg-[#22D3EE]/25 border-2 border-black rounded-lg px-2.5 py-1 inline-block shadow-[2.5px_2.5px_0px_rgba(0,0,0,1)] text-black">
                      Full Stack Developer &amp; UI/UX Designer
                    </h3>
                  </div>
                </div>

                <div className="space-y-4">
                  {/* Text Editor Box styling */}
                  <div className="border-2 border-black rounded-2xl p-5 bg-slate-50 font-mono text-xs leading-relaxed text-slate-800 shadow-[3px_3px_0px_rgba(0,0,0,1)]">
                    <span className="text-[10px] text-slate-400 block border-b border-black/10 pb-1.5 mb-2.5 uppercase font-bold">Summary.txt Editor // View Only</span>
                    <p className="font-semibold text-[13px] leading-relaxed">
                      Enthusiastic Full Stack Developer with hands-on experience in building web applications using React.js, Next.js, Node.js, Express.js, SQL, and MongoDB. Skilled in REST API development, frontend-backend integration, CRUD operations, and database-driven applications. Experienced in developing responsive web interfaces and workflow-based systems, with knowledge of UI/UX design principles. Strong problem-solving, debugging, and collaboration skills with a passion for learning modern web technologies.
                    </p>
                  </div>

                  {/* Summary Stats Matrix */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2">
                    <div className="p-3 bg-white border-2 border-black rounded-xl text-center shadow-[2px_2px_0px_rgba(0,0,0,1)]">
                      <span className="block text-xl font-black text-black font-mono">2+</span>
                      <span className="text-[9px] font-mono font-bold uppercase text-slate-550">Years Focus</span>
                    </div>
                    <div className="p-3 bg-white border-2 border-black rounded-xl text-center shadow-[2px_2px_0px_rgba(0,0,0,1)]">
                      <span className="block text-xl font-black text-black font-mono">10+</span>
                      <span className="text-[9px] font-mono font-bold uppercase text-slate-550">Projects Done</span>
                    </div>
                    <div className="p-3 bg-white border-2 border-black rounded-xl text-center shadow-[2px_2px_0px_rgba(0,0,0,1)]">
                      <span className="block text-xl font-black text-black font-mono">7.5</span>
                      <span className="text-[9px] font-mono font-bold uppercase text-slate-550">CGPA (DS)</span>
                    </div>
                    <div className="p-3 bg-white border-2 border-black rounded-xl text-center shadow-[2px_2px_0px_rgba(0,0,0,1)]">
                      <span className="block text-xl font-black text-black font-mono">4</span>
                      <span className="text-[9px] font-mono font-bold uppercase text-slate-550">Internships</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* 2. TAB: SKILLS */}
            {activeTab === 'skills' && (
              <div className="space-y-6 animate-fadeIn">
                <div className="border-b-2 border-black/10 pb-4 mb-4">
                  <h3 className="text-lg font-black uppercase tracking-tight flex items-center gap-2 text-black">
                    <Code2 className="w-5 h-5 text-black" />
                    <span>Technical Skills Matrix</span>
                  </h3>
                  <p className="text-xs text-slate-500 font-mono mt-1">Matrix variables setup for frontend, backend, UI/UX configurations.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {skillCategories.map((s, idx) => (
                    <div
                      key={idx}
                      className="border-2 border-black rounded-2xl p-4 bg-slate-50 hover:bg-slate-100/50 shadow-[3px_3px_0px_rgba(0,0,0,1)] transition-all flex flex-col justify-between"
                    >
                      <div className="flex items-center justify-between border-b border-black/10 pb-2 mb-3">
                        <span className="font-mono text-xs font-black uppercase text-black">
                          {s.name}
                        </span>
                        <span className={`w-3.5 h-3.5 rounded-full border border-black ${s.color}`}></span>
                      </div>
                      
                      <div className="flex flex-wrap gap-1.5">
                        {s.items.map((item, itemIdx) => (
                          <span
                            key={itemIdx}
                            className="px-2.5 py-0.5 bg-white border border-black rounded text-xs font-semibold text-black"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 3. TAB: EXPERIENCE */}
            {activeTab === 'experience' && (
              <div className="space-y-6 animate-fadeIn">
                <div className="border-b-2 border-black/10 pb-4">
                  <h3 className="text-lg font-black uppercase tracking-tight flex items-center gap-2 text-black">
                    <Briefcase className="w-5 h-5 text-black" />
                    <span>Professional Journey</span>
                  </h3>
                  <p className="text-xs text-slate-500 font-mono mt-1">Displaying subdirectory list /Experience/internships</p>
                </div>

                <div className="space-y-5">
                  {internships.map((exp, idx) => (
                    <div
                      key={idx}
                      className="border-2 border-black rounded-2xl p-5 bg-slate-50 hover:translate-x-[-1px] hover:translate-y-[-1px] transition-all shadow-[3px_3px_0px_rgba(0,0,0,1)] hover:shadow-[4.5px_4.5px_0px_rgba(0,0,0,1)] space-y-3"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-black/10 pb-2.5">
                        <div>
                          <span className={`px-2 py-0.5 border-2 border-black text-[9px] font-mono text-black rounded font-bold uppercase shadow-[1.5px_1.5px_0px_rgba(0,0,0,1)] ${exp.color}`}>
                            {exp.category}
                          </span>
                          <h4 className="text-base font-black uppercase text-black pt-2 leading-tight">
                            {exp.role}
                          </h4>
                          <p className="text-xs font-mono font-bold text-slate-500 uppercase mt-0.5">
                            {exp.company} • <span className="opacity-80">{exp.location}</span>
                          </p>
                        </div>

                        <span className="self-start sm:self-center px-2.5 py-0.5 bg-white border-2 border-black text-black font-mono text-[10px] font-bold uppercase rounded-lg shadow-[1.5px_1.5px_0px_rgba(0,0,0,1)]">
                          {exp.period}
                        </span>
                      </div>

                      <ul className="space-y-1.5 text-xs sm:text-sm text-slate-800 font-semibold pl-1 leading-relaxed">
                        {exp.points.map((pt, pIdx) => (
                          <li key={pIdx} className="flex items-start gap-2">
                            <span className="text-[#F472B6] font-black select-none text-xs leading-normal">✦</span>
                            <span>{pt}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-1.5 pt-2">
                        {exp.tags.map((t, tIdx) => (
                          <span key={tIdx} className="px-2 py-0.5 bg-white border border-black text-[9px] font-mono font-bold text-slate-700 uppercase rounded">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 4. TAB: PROJECTS */}
            {activeTab === 'projects' && (
              <div className="space-y-6 animate-fadeIn">
                <div className="border-b-2 border-black/10 pb-4">
                  <h3 className="text-lg font-black uppercase tracking-tight flex items-center gap-2 text-black">
                    <Award className="w-5 h-5 text-black" />
                    <span>Development Showcase</span>
                  </h3>
                  <p className="text-xs text-slate-500 font-mono mt-1">Directory list of executable client applications /Projects/</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {projects.map((proj, idx) => (
                    <div
                      key={idx}
                      className="border-2 border-black bg-slate-50 rounded-2xl p-4 flex flex-col justify-between shadow-[3px_3px_0px_rgba(0,0,0,1)] hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[4.5px_4.5px_0px_rgba(0,0,0,1)] transition-all relative overflow-hidden"
                    >
                      {proj.award && (
                        <div className="absolute top-0 right-0 bg-[#FFDE4D] text-black border-l-2 border-b-2 border-black text-[8px] font-black font-mono uppercase px-2 py-0.5 shadow-sm tracking-wider">
                          {proj.award}
                        </div>
                      )}

                      <div className="space-y-3.5">
                        <div className="flex justify-between items-center border-b border-black/10 pb-1.5">
                          <span className="text-[10px] font-mono font-bold text-black bg-white border border-black/25 px-2 py-0.5 rounded shadow-[1.5px_1.5px_0px_rgba(0,0,0,1)]">
                            {proj.date}
                          </span>
                          
                          {proj.liveLink && (
                            <a
                              href={proj.liveLink}
                              target="_blank"
                              rel="noreferrer"
                              className="text-black hover:underline font-mono text-[10px] font-bold uppercase flex items-center gap-0.5"
                            >
                              <span>Run App</span>
                              <ExternalLink className="w-3.5 h-3.5" />
                            </a>
                          )}
                        </div>

                        <h4 className="text-sm font-black uppercase text-black leading-tight tracking-wide">
                          {proj.title}
                        </h4>

                        <p className="text-[10px] text-slate-500 font-mono font-bold uppercase tracking-wider">
                          Stack: {proj.tech}
                        </p>

                        <ul className="space-y-1.5 pl-1">
                          {proj.highlights.map((h, hIdx) => (
                            <li key={hIdx} className="text-xs text-slate-750 font-semibold flex items-start gap-1.5 leading-snug">
                              <span className="text-[#22D3EE] font-mono select-none">▸</span>
                              <span>{h}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 5. TAB: EDUCATION */}
            {activeTab === 'education' && (
              <div className="space-y-6 animate-fadeIn">
                <div className="border-b-2 border-black/10 pb-4">
                  <h3 className="text-lg font-black uppercase tracking-tight flex items-center gap-2 text-black">
                    <GraduationCap className="w-5 h-5 text-black" />
                    <span>Academic Pathways</span>
                  </h3>
                  <p className="text-xs text-slate-500 font-mono mt-1">Verified academic certificates list /Academic_Path.cert</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Edu 1 */}
                  <div className="bg-slate-50 p-5 border-2 border-black border-dashed rounded-2xl relative shadow-[3.5px_3.5px_0px_rgba(0,0,0,1)] space-y-3">
                    <span className="text-[9px] font-mono font-bold text-black bg-white border-2 border-black px-2 py-0.5 rounded shadow-[1.5px_1.5px_0px_rgba(0,0,0,1)]">
                      2024 – Present
                    </span>
                    <h4 className="text-base font-black uppercase text-black leading-tight mt-1">
                      B.Tech in Artificial Intelligence &amp; Data Science
                    </h4>
                    <p className="text-xs font-semibold text-slate-650">
                      KGiSL Institute of Technology
                    </p>
                    <div className="pt-2.5 border-t border-dashed border-black/25 flex justify-between items-center text-xs font-mono">
                      <span className="text-slate-500 font-bold">6th Sem CGPA</span>
                      <span className="px-2.5 py-0.5 bg-[#FFDE4D] border-2 border-black rounded font-black">7.5</span>
                    </div>
                  </div>

                  {/* Edu 2 */}
                  <div className="bg-slate-50 p-5 border-2 border-black border-dashed rounded-2xl relative shadow-[3.5px_3.5px_0px_rgba(0,0,0,1)] space-y-3">
                    <span className="text-[9px] font-mono font-bold text-black bg-white border-2 border-black px-2 py-0.5 rounded shadow-[1.5px_1.5px_0px_rgba(0,0,0,1)]">
                      2021 – 2024
                    </span>
                    <h4 className="text-base font-black uppercase text-black leading-tight mt-1">
                      Diploma in Computer Engineering
                    </h4>
                    <p className="text-xs font-semibold text-slate-650">
                      Sri Ranganathar Institute of Polytechnic College
                    </p>
                    <div className="pt-2.5 border-t border-dashed border-black/25 flex justify-between items-center text-xs font-mono">
                      <span className="text-slate-500 font-bold">Graduation Score</span>
                      <span className="px-2.5 py-0.5 bg-[#FFDE4D] border-2 border-black rounded font-black">81.0%</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* 6. TAB: CONTACT */}
            {activeTab === 'contact' && (
              <div className="space-y-6 animate-fadeIn">
                <div className="border-b-2 border-black/10 pb-4">
                  <h3 className="text-lg font-black uppercase tracking-tight flex items-center gap-2 text-black">
                    <Contact className="w-5 h-5 text-black" />
                    <span>Contact vCard Details</span>
                  </h3>
                  <p className="text-xs text-slate-500 font-mono mt-1">Active communication ports registry /Contact.vcf</p>
                </div>

                <div className="max-w-md mx-auto bg-slate-50 p-6 border-3 border-black rounded-3xl shadow-[5px_5px_0px_rgba(0,0,0,1)] space-y-5 font-mono text-xs">
                  {/* Card head */}
                  <div className="flex items-center justify-between border-b-2 border-black pb-3">
                    <span className="font-black text-black">vCard Address Book</span>
                    <span className="px-2 py-0.5 bg-[#FFDE4D] border-2 border-black rounded text-[9px] font-black uppercase">Active</span>
                  </div>

                  <div className="space-y-3.5">
                    <div className="flex justify-between items-center border-b border-black/10 pb-1.5">
                      <span className="text-slate-500 font-bold uppercase">NAME</span>
                      <span className="text-black font-black uppercase">HARIHARAN SARAVANAN</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-black/10 pb-1.5">
                      <span className="text-slate-500 font-bold uppercase">EMAIL</span>
                      <a href="mailto:hariharansarav7@gmail.com" className="text-black font-black underline hover:text-[#22D3EE]">hariharansarav7@gmail.com</a>
                    </div>
                    <div className="flex justify-between items-center border-b border-black/10 pb-1.5">
                      <span className="text-slate-500 font-bold uppercase">PHONE</span>
                      <a href="tel:+919791680352" className="text-black font-black hover:text-[#22D3EE]">+91 9791680352</a>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-500 font-bold uppercase">LOCATION</span>
                      <span className="text-black font-black uppercase">COIMBATORE, INDIA</span>
                    </div>
                  </div>

                  {/* Actions inside vCard */}
                  <div className="grid grid-cols-2 gap-3 pt-3 border-t-2 border-black/10">
                    <a
                      href="https://github.com/Hariharansarav"
                      target="_blank"
                      rel="noreferrer"
                      className="p-2.5 bg-white border-2 border-black rounded-xl text-center font-black uppercase tracking-wider hover:bg-slate-100 flex items-center justify-center gap-1 hover:translate-y-[-1px] shadow-[2px_2px_0px_rgba(0,0,0,1)]"
                    >
                      <span>GitHub</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/hariharan-saravanan-567a99202"
                      target="_blank"
                      rel="noreferrer"
                      className="p-2.5 bg-white border-2 border-black rounded-xl text-center font-black uppercase tracking-wider hover:bg-slate-100 flex items-center justify-center gap-1 hover:translate-y-[-1px] shadow-[2px_2px_0px_rgba(0,0,0,1)]"
                    >
                      <span>LinkedIn</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            )}

          </div>

        </div>

      </main>

      {/* FOOTER ACTIONS BAR */}
      <div className="mt-8 flex justify-center pb-12 print:hidden">
        <button
          onClick={handleDownload}
          className="inline-flex items-center gap-2.5 bg-[#A3E635] text-black px-8 py-3.5 border-3 border-black text-xs font-black uppercase rounded-xl transition-all shadow-[4px_4px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_rgba(0,0,0,1)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[2px_2px_0px_rgba(0,0,0,1)] cursor-pointer"
        >
          <Download className="w-4 h-4 stroke-[3px]" />
          <span>Download Offline CV</span>
        </button>
      </div>

    </div>
  );
};

export default ResumePage;
