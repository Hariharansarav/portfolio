import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowLeft, Download, Share2, Mail, Phone, MapPin,
  Briefcase, GraduationCap, Award, Code2, FileText, Check, ArrowUpRight, Sparkles
} from 'lucide-react';
import resumePDF from '../assets/Hariharan CV.pdf';

const ResumePage = () => {
  const [copied, setCopied] = useState(false);

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
      color: 'bg-[#FFDE4D]'
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
      color: 'bg-[#22D3EE]'
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
      color: 'bg-[#A3E635]'
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
      color: 'bg-[#C084FC]'
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
      color: 'bg-[#FFDE4D]'
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
      color: 'bg-[#F472B6]'
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
      color: 'bg-[#22D3EE]'
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
      color: 'bg-[#A3E635]'
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
      color: 'bg-[#C084FC]'
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
      color: 'bg-[#A3E635]' // Green
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

  return (
    <div className="min-h-screen bg-[#DBE2E9] py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden print:bg-white print:p-0">
      
      {/* Decorative background classic grid pattern */}
      <div className="absolute inset-0 opacity-[0.25] pointer-events-none bg-grid-classic print:hidden" />

      {/* Action Header */}
      <div className="max-w-5xl mx-auto mb-8 flex flex-col sm:flex-row items-center justify-between gap-4 relative z-30 print:hidden">
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-black uppercase rounded-lg border-2 border-black bg-white hover:bg-slate-50 transition-all shadow-[3px_3px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[5px_5px_0px_rgba(0,0,0,1)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[1px_1px_0px_rgba(0,0,0,1)]"
        >
          <ArrowLeft className="w-4 h-4 stroke-[3px]" />
          <span>Back to Portfolio</span>
        </Link>

        <div className="flex items-center gap-3">
          <button
            onClick={handleDownload}
            className="inline-flex items-center gap-2 bg-[#A3E635] text-black px-4 py-2.5 text-xs rounded-lg border-2 border-black font-black uppercase transition-all shadow-[3px_3px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[5px_5px_0px_rgba(0,0,0,1)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[1px_1px_0px_rgba(0,0,0,1)] cursor-pointer"
          >
            <Download className="w-4 h-4 stroke-[2.5px]" />
            <span>Download CV</span>
          </button>

          <button
            onClick={handleShare}
            className="inline-flex items-center gap-2 bg-white text-black px-4 py-2.5 text-xs rounded-lg border-2 border-black font-black uppercase transition-all shadow-[3px_3px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[5px_5px_0px_rgba(0,0,0,1)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[1px_1px_0px_rgba(0,0,0,1)] cursor-pointer"
          >
            {copied ? <Check className="w-4 h-4 text-emerald-600 stroke-[3px]" /> : <Share2 className="w-4 h-4" />}
            <span>{copied ? 'Link Copied!' : 'Share'}</span>
          </button>
        </div>
      </div>

      <main className="max-w-5xl mx-auto relative z-30 space-y-8 print:max-w-full print:space-y-4">
        
        {/* CARD 1: Header / Identity Card */}
        <div className="bg-white text-black border-3 border-black rounded-3xl p-6 sm:p-8 shadow-[6px_6px_0px_rgba(0,0,0,1)] relative overflow-hidden print:p-0 print:border-none print:shadow-none print:rounded-none font-body text-left">
          <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#FFDE4D] via-[#F472B6] to-[#22D3EE] print:hidden" />
          
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pt-2">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#FFDE4D] text-black border-2 border-black text-[10px] font-black uppercase tracking-wider font-mono shadow-[2px_2px_0px_rgba(0,0,0,1)]">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Available for Hire</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black font-display tracking-tight leading-none uppercase text-black">
                Hariharan S<span className="text-[#F472B6]">.</span>
              </h1>
              <h2 className="text-sm sm:text-base font-bold font-mono tracking-wide text-black bg-[#22D3EE]/20 px-3 py-1.5 border-2 border-black rounded-lg inline-block uppercase shadow-[2.5px_2.5px_0px_rgba(0,0,0,1)]">
                Full Stack Developer &amp; UI/UX Designer
              </h2>
            </div>

            {/* Lanyard/Barcode Deco for UI styling (hidden in print) */}
            <div className="hidden md:flex flex-col items-end print:hidden">
              <div className="barcode-stripes w-32 h-6 border-2 border-black rounded shadow-[2px_2px_0px_rgba(0,0,0,1)] mb-2 opacity-80" />
              <span className="font-mono text-[9px] uppercase tracking-widest text-slate-500">HOST_ID: HARIHARAN_S</span>
            </div>
          </div>

          {/* Contact Details Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3.5 text-xs font-mono mt-8 border-t-2 border-black/10 pt-6 print:border-none print:mt-4 print:pt-0 print:grid-cols-2">
            <a
              href="mailto:hariharansarav7@gmail.com"
              className="flex items-center gap-2.5 p-2 bg-slate-50 border-2 border-black rounded-xl hover:bg-[#FFDE4D]/10 transition-all shadow-[2px_2px_0px_rgba(0,0,0,1)] hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[3px_3px_0px_rgba(0,0,0,1)] active:translate-x-[0.5px] active:translate-y-[0.5px] active:shadow-[1px_1px_0px_rgba(0,0,0,1)]"
            >
              <Mail className="w-4 h-4 flex-shrink-0" />
              <span className="truncate">hariharansarav7@gmail.com</span>
            </a>

            <a
              href="tel:+919791680352"
              className="flex items-center gap-2.5 p-2 bg-slate-50 border-2 border-black rounded-xl hover:bg-[#FFDE4D]/10 transition-all shadow-[2px_2px_0px_rgba(0,0,0,1)] hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[3px_3px_0px_rgba(0,0,0,1)] active:translate-x-[0.5px] active:translate-y-[0.5px] active:shadow-[1px_1px_0px_rgba(0,0,0,1)]"
            >
              <Phone className="w-4 h-4 flex-shrink-0" />
              <span>+91 9791680352</span>
            </a>

            <div className="flex items-center gap-2.5 p-2 bg-slate-50 border-2 border-black rounded-xl shadow-[2px_2px_0px_rgba(0,0,0,1)]">
              <MapPin className="w-4 h-4 flex-shrink-0" />
              <span className="truncate">Coimbatore, India</span>
            </div>

            <a
              href="https://github.com/Hariharansarav"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2.5 p-2 bg-slate-50 border-2 border-black rounded-xl hover:bg-[#FFDE4D]/10 transition-all shadow-[2px_2px_0px_rgba(0,0,0,1)] hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[3px_3px_0px_rgba(0,0,0,1)] active:translate-x-[0.5px] active:translate-y-[0.5px] active:shadow-[1px_1px_0px_rgba(0,0,0,1)]"
            >
              <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                <path d="M9 18c-4.51 2-5-2-7-2" />
              </svg>
              <span className="truncate">GitHub Profile</span>
              <ArrowUpRight className="w-3.5 h-3.5 ml-auto opacity-60 flex-shrink-0" />
            </a>

            <a
              href="https://www.linkedin.com/in/hariharan-saravanan-567a99202"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2.5 p-2 bg-slate-50 border-2 border-black rounded-xl hover:bg-[#FFDE4D]/10 transition-all shadow-[2px_2px_0px_rgba(0,0,0,1)] hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[3px_3px_0px_rgba(0,0,0,1)] active:translate-x-[0.5px] active:translate-y-[0.5px] active:shadow-[1px_1px_0px_rgba(0,0,0,1)]"
            >
              <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
              <span className="truncate">LinkedIn</span>
              <ArrowUpRight className="w-3.5 h-3.5 ml-auto opacity-60 flex-shrink-0" />
            </a>
          </div>
        </div>

        {/* CARD 2: Professional Summary */}
        <div className="bg-white text-black border-3 border-black rounded-3xl p-6 sm:p-8 shadow-[6px_6px_0px_rgba(0,0,0,1)] relative overflow-hidden print:p-0 print:border-none print:shadow-none print:rounded-none font-body text-left">
          <div className="absolute top-0 right-0 bg-[#C084FC] text-black border-l-2 border-b-2 border-black text-[9px] font-black font-mono uppercase px-3 py-1 shadow-sm print:hidden">
            SUMMARY // INIT_01
          </div>
          
          <h3 className="text-sm font-black font-mono tracking-wider text-black flex items-center gap-2 uppercase mb-4">
            <FileText className="w-5 h-5 text-black" />
            <span>Professional Summary</span>
          </h3>
          
          <p className="text-xs sm:text-sm text-slate-800 leading-relaxed font-semibold">
            Enthusiastic Full Stack Developer with hands-on experience in building web applications using React.js, Next.js, Node.js, Express.js, SQL, and MongoDB. Skilled in REST API development, frontend-backend integration, CRUD operations, and database-driven applications. Experienced in developing responsive web interfaces and workflow-based systems, with knowledge of UI/UX design principles. Strong problem-solving, debugging, and collaboration skills with a passion for learning modern web technologies.
          </p>
        </div>

        {/* CARD 3: Technical Skills Matrix */}
        <div className="bg-white text-black border-3 border-black rounded-3xl p-6 sm:p-8 shadow-[6px_6px_0px_rgba(0,0,0,1)] relative overflow-hidden print:p-0 print:border-none print:shadow-none print:rounded-none font-body text-left">
          <h3 className="text-base font-black font-mono border-b-3 border-black pb-3.5 flex items-center gap-2 uppercase text-black mb-6">
            <Code2 className="w-5 h-5 text-black" />
            <span>Technical Skills Matrix</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 print:grid-cols-1">
            {skillCategories.map((s, idx) => (
              <div key={idx} className="bg-slate-50 border-2 border-black rounded-2xl overflow-hidden shadow-[3px_3px_0px_rgba(0,0,0,1)] flex flex-col justify-between text-black">
                {/* Category Header with Solid Color Background */}
                <div className={`border-b-2 border-black ${s.color} px-4 py-2 text-xs font-black uppercase text-black font-mono tracking-wider shadow-sm`}>
                  {s.name}
                </div>
                
                {/* Tag badges wrapper */}
                <div className="p-4 flex flex-wrap gap-1.5 bg-white">
                  {s.items.map((item, itemIdx) => (
                    <span
                      key={itemIdx}
                      className="px-2.5 py-1 bg-slate-50 border border-black rounded text-xs font-semibold shadow-[1px_1px_0px_rgba(0,0,0,1)] text-black"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CARD 4: Professional Journey (Work Experience) */}
        <div className="bg-white text-black border-3 border-black rounded-3xl p-6 sm:p-8 shadow-[6px_6px_0px_rgba(0,0,0,1)] relative overflow-hidden print:p-0 print:border-none print:shadow-none print:rounded-none font-body text-left">
          <h3 className="text-base font-black font-mono border-b-3 border-black pb-3.5 flex items-center gap-2 uppercase text-black mb-6">
            <Briefcase className="w-5 h-5 text-black" />
            <span>Professional Journey</span>
          </h3>

          <div className="relative pl-6 border-l-3 border-black ml-3 space-y-6 print:border-none print:ml-0 print:pl-0">
            {internships.map((exp, idx) => (
              <div key={idx} className="relative group space-y-3 text-black">
                {/* Timeline Node Dot (hidden in print) */}
                <div className="absolute -left-[32px] top-1.5 w-4 h-4 rounded-full border-2 border-black bg-white group-hover:bg-[#A3E635] transition-colors shadow-[1px_1px_0px_rgba(0,0,0,1)] print:hidden" />
                
                <div className="bg-slate-50 border-2 border-black rounded-2xl p-5 shadow-[4px_4px_0px_rgba(0,0,0,1)] hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[5px_5px_0px_rgba(0,0,0,1)] transition-all space-y-3 print:shadow-none print:border-none print:p-0">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-black/10 pb-2">
                    <div>
                      <span className={`px-2 py-0.5 border-2 border-black text-[9px] font-mono text-black rounded font-bold uppercase shadow-[1px_1px_0px_rgba(0,0,0,1)] ${exp.color}`}>
                        {exp.category}
                      </span>
                      <h4 className="text-sm sm:text-base font-black uppercase text-black pt-1.5 leading-tight">
                        {exp.role}
                      </h4>
                      <p className="text-xs font-mono font-bold text-slate-500 uppercase">
                        {exp.company} • <span className="opacity-80">{exp.location}</span>
                      </p>
                    </div>
                    <span className="self-start sm:self-center px-2.5 py-0.5 bg-white border-2 border-black text-black text-[10px] font-mono font-bold uppercase rounded-lg shadow-[2px_2px_0px_rgba(0,0,0,1)]">
                      {exp.period}
                    </span>
                  </div>

                  <ul className="space-y-1.5 text-xs sm:text-sm text-slate-800 font-semibold pl-1">
                    {exp.points.map((pt, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-2">
                        <span className="text-[#F472B6] font-black select-none text-xs leading-normal">✦</span>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {exp.tags.map((t, tIdx) => (
                      <span key={tIdx} className="px-2 py-0.5 bg-white border border-black text-[9px] font-mono font-bold text-slate-700 uppercase rounded">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CARD 5: Development Showcase (Projects) */}
        <div className="bg-white text-black border-3 border-black rounded-3xl p-6 sm:p-8 shadow-[6px_6px_0px_rgba(0,0,0,1)] relative overflow-hidden print:p-0 print:border-none print:shadow-none print:rounded-none font-body text-left">
          <h3 className="text-base font-black font-mono border-b-3 border-black pb-3.5 flex items-center gap-2 uppercase text-black mb-6">
            <Award className="w-5 h-5 text-black" />
            <span>Development Showcase</span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 print:grid-cols-1">
            {projects.map((proj, pIdx) => (
              <div
                key={pIdx}
                className="bg-slate-50 p-5 border-2 border-black rounded-2xl flex flex-col justify-between space-y-4 shadow-[4px_4px_0px_rgba(0,0,0,1)] relative overflow-hidden group hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[5px_5px_0px_rgba(0,0,0,1)] transition-all print:shadow-none print:border-none print:p-0 print:rounded-none"
              >
                {proj.award && (
                  <div className="absolute top-0 right-0 bg-[#FFDE4D] text-black border-l-2 border-b-2 border-black text-[8px] font-black font-mono uppercase px-2.5 py-1 rounded-bl-xl shadow-sm tracking-wider print:text-black print:bg-white print:border-slate-350">
                    {proj.award}
                  </div>
                )}

                <div className="space-y-2.5 text-black">
                  <div className="flex items-center justify-between border-b border-black/10 pb-1.5">
                    <span className="text-[10px] font-mono font-bold text-black bg-white border border-black/20 px-2 py-0.5 rounded shadow-[1px_1px_0px_rgba(0,0,0,1)]">
                      {proj.date}
                    </span>
                    {proj.liveLink && (
                      <a
                        href={proj.liveLink}
                        target="_blank"
                        rel="noreferrer"
                        className="text-black hover:underline transition-colors flex items-center gap-0.5 text-[10px] font-mono font-bold uppercase"
                      >
                        <span>Live Link</span>
                        <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5px]" />
                      </a>
                    )}
                  </div>

                  <h4 className="text-sm font-black uppercase text-black leading-tight">
                    {proj.title}
                  </h4>
                  
                  <p className="text-[10px] text-slate-600 font-mono font-bold uppercase tracking-wider">
                    Stack: {proj.tech}
                  </p>

                  <ul className="space-y-1.5 pl-1">
                    {proj.highlights.map((h, hIdx) => (
                      <li key={hIdx} className="text-xs text-slate-700 font-semibold flex items-start gap-1.5 leading-snug">
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

        {/* CARD 6: Education & Credentials */}
        <div className="bg-white text-black border-3 border-black rounded-3xl p-6 sm:p-8 shadow-[6px_6px_0px_rgba(0,0,0,1)] relative overflow-hidden print:p-0 print:border-none print:shadow-none print:rounded-none font-body text-left">
          <h3 className="text-base font-black font-mono border-b-3 border-black pb-3.5 flex items-center gap-2 uppercase text-black mb-6">
            <GraduationCap className="w-5 h-5 text-black" />
            <span>Academic Pathways</span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 print:grid-cols-1">
            {/* Edu 1 */}
            <div className="bg-slate-50 p-5 border-2 border-black border-dashed rounded-2xl relative shadow-[4px_4px_0px_rgba(0,0,0,1)] space-y-3 text-black print:border-none print:shadow-none print:p-0">
              <span className="text-[10px] font-mono font-bold text-black bg-white border-2 border-black px-2 py-0.5 rounded shadow-[1.5px_1.5px_0px_rgba(0,0,0,1)]">
                2024 – Present
              </span>
              <h4 className="text-sm font-black uppercase text-black leading-tight pt-1">
                B.Tech in Artificial Intelligence &amp; Data Science
              </h4>
              <p className="text-xs font-semibold text-slate-700">
                KGiSL Institute of Technology
              </p>
              <div className="pt-2.5 border-t border-dashed border-black flex justify-between items-center text-xs font-mono">
                <span className="text-slate-600">6th Sem Current Score</span>
                <span className="px-2 py-0.5 bg-[#FFDE4D] border-2 border-black rounded font-bold text-black shadow-[1.5px_1.5px_0px_rgba(0,0,0,1)]">
                  7.5 CGPA
                </span>
              </div>
            </div>

            {/* Edu 2 */}
            <div className="bg-slate-50 p-5 border-2 border-black border-dashed rounded-2xl relative shadow-[4px_4px_0px_rgba(0,0,0,1)] space-y-3 text-black print:border-none print:shadow-none print:p-0">
              <span className="text-[10px] font-mono font-bold text-black bg-white border-2 border-black px-2 py-0.5 rounded shadow-[1.5px_1.5px_0px_rgba(0,0,0,1)]">
                2021 – 2024
              </span>
              <h4 className="text-sm font-black uppercase text-black leading-tight pt-1">
                Diploma in Computer Engineering
              </h4>
              <p className="text-xs font-semibold text-slate-700">
                Sri Ranganathar Institute of Polytechnic College
              </p>
              <div className="pt-2.5 border-t border-dashed border-black flex justify-between items-center text-xs font-mono">
                <span className="text-slate-600">Final Graduation Score</span>
                <span className="px-2 py-0.5 bg-[#FFDE4D] border-2 border-black rounded font-bold text-black shadow-[1.5px_1.5px_0px_rgba(0,0,0,1)]">
                  81.0%
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Global Bottom Navigation Button */}
        <div className="mt-8 flex justify-center pb-12 print:hidden">
          <button
            onClick={handleDownload}
            className="inline-flex items-center gap-2 bg-[#A3E635] text-black px-6 py-3 border-3 border-black text-xs font-black uppercase rounded-xl transition-all shadow-[4px_4px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_rgba(0,0,0,1)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[2px_2px_0px_rgba(0,0,0,1)] cursor-pointer"
          >
            <Download className="w-4 h-4 stroke-[3px]" />
            <span>Download PDF CV</span>
          </button>
        </div>

      </main>
    </div>
  );
};

export default ResumePage;
