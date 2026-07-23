import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowLeft, Download, Printer, Share2, Mail, Phone, MapPin, 
  Briefcase, GraduationCap, Award, Code2, Sparkles, FileText, Check, ArrowUpRight 
} from 'lucide-react';
import resumePDF from '../assets/Hariharan CV.pdf';

const ResumePage = () => {
  const [copied, setCopied] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = resumePDF;
    link.download = 'Hariharan_S_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handlePrint = () => {
    window.print();
  };

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const internships = [
    {
      role: 'Full Stack Developer Intern',
      company: 'KG Agile',
      location: 'Coimbatore',
      period: 'Feb 2026 – Present',
      points: [
        'Worked on full-stack web application development using Next.js, React.js, Express.js, and MongoDB.',
        'Contributed to frontend development, backend integration, and REST API implementation.',
        'Used Postman for API testing and data handling validation.',
        'Worked on UI content design and responsive user interface improvements for better user experience.',
      ],
      tags: ['Next.js', 'React.js', 'Express.js', 'MongoDB', 'Postman', 'REST APIs'],
    },
    {
      role: 'Web App Dev & Backend Intern',
      company: 'Lakshmi Life Sciences Private Limited (LLS)',
      location: 'Coimbatore',
      period: 'Jun 2025 – Jul 2025',
      points: [
        'Developed full-stack applications using React.js, Node.js, Express.js, and SQL databases.',
        'Built REST APIs and implemented CRUD operations for workflow and data management system.',
        'Worked on frontend and backend integration and responsive user interface development.',
        'Improved application performance through efficient database connectivity and backend integration.',
      ],
      tags: ['React.js', 'Node.js', 'Express.js', 'SQL Databases', 'CRUD Operations'],
    },
    {
      role: 'IoT Intern',
      company: 'Ascentz Technologies',
      location: 'Coimbatore',
      period: 'Nov 2023 – Dec 2023',
      points: [
        'Completed internship training focused on Internet of Things (IoT) concepts and applications.',
        'Gained practical exposure to IoT technologies, device connectivity, and real-time system monitoring.',
        'Learned fundamentals of sensor integration, embedded systems, and smart automation concepts.',
      ],
      tags: ['IoT', 'Sensor Integration', 'Embedded Systems', 'Real-Time Systems'],
    },
    {
      role: 'Administration Intern',
      company: 'SRI Valves',
      location: 'Edayarpalayam',
      period: 'Jan 2023',
      points: [
        'Assisted in daily office administration and operational activities to ensure smooth workflow management.',
        'Managed office files, records, and documentation with proper organization and data handling.',
        'Supported administrative tasks related to data management and document maintenance.',
      ],
      tags: ['Workflow Management', 'Office Operations', 'Data Handling'],
    },
  ];

  const projects = [
    {
      title: 'Smart Tribal Farming Project',
      date: 'Present (Ongoing)',
      award: 'Best Paper Award Winner 🏆',
      tech: 'React.js, AI/ML, Data Analysis, Web Technologies',
      liveLink: 'https://smart-tribal-farming.onrender.com/',
      highlights: [
        'Developing an AI-powered crop suitability and planning system for tribal farmers.',
        'Completed frontend development with responsive UI design.',
        'Working on AI model integration for crop prediction and farming recommendations.',
        'Received the Best Paper Award for innovative application of AI in agriculture.',
      ],
    },
    {
      title: 'Audit Management System',
      date: 'Oct 2025',
      award: null,
      tech: 'React.js, Node.js, Express.js, MSSQL',
      liveLink: 'https://llsamsystem.netlify.app/',
      highlights: [
        'Developed a full-stack Audit Management System with REST API integration and MSSQL database connectivity.',
        'Implemented CRUD functionalities for managing audits, observations, and workflow operations.',
        'Designed responsive workflow-based user interfaces and optimized backend integration.',
      ],
    },
    {
      title: 'Students Choice Global',
      date: 'March 2025',
      award: null,
      tech: 'Next.js, Node.js, Express.js',
      liveLink: 'https://www.studentschoiceglobal.com/',
      highlights: [
        'Worked on full-stack web application development as part of a collaborative team during the KG Agile internship.',
        'Developed and maintained responsive web pages using Next.js with frontend and backend integration and REST API connectivity.',
      ],
    },
    {
      title: 'V Do Naturals - Ecomm Panel',
      date: 'April 2025',
      award: null,
      tech: 'Node.js, Express.js, JavaScript',
      liveLink: 'https://vdonaturalss.com/',
      highlights: [
        'Worked on admin panel development and backend API integration for an e-commerce web application.',
        'Handled frontend-backend connectivity and dynamic data integration for website operations.',
      ],
    },
    {
      title: 'Green Wheels Supply Chain',
      date: 'Dec 2023',
      award: null,
      tech: 'HTML5, CSS3, JavaScript',
      liveLink: 'https://www.greenwheelscs.in/',
      highlights: [
        'Developed a responsive business website with structured navigation and user-friendly interface design.',
        'Worked on frontend development and responsive layouts for better accessibility across devices.',
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-cv-bg text-black py-8 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Decorative Stamp elements */}
      <div className="absolute top-4 right-4 w-28 h-28 opacity-[0.02] bg-[radial-gradient(#000_20%,transparent_20%)] bg-[size:10px_10px] pointer-events-none" />

      {/* TOP NAVIGATION BAR */}
      <div className="max-w-4xl mx-auto mb-8 flex flex-col sm:flex-row items-center justify-between gap-4 relative z-10">
        
        {/* Back Link */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 bg-white text-black btn-brutalist px-4 py-2.5 text-xs"
        >
          <ArrowLeft className="w-4 h-4 stroke-[3px]" />
          <span>BACK TO PORTFOLIO</span>
        </Link>

        {/* Quick Action Buttons */}
        <div className="flex items-center gap-2">
          <button
            onClick={handleDownload}
            className="inline-flex items-center gap-2 bg-cv-green text-black btn-brutalist px-4 py-2.5 text-xs cursor-pointer"
          >
            <Download className="w-4 h-4 stroke-[3px]" />
            <span>DOWNLOAD PDF</span>
          </button>

          <button
            onClick={handlePrint}
            className="inline-flex items-center gap-2 bg-white text-black btn-brutalist px-3.5 py-2.5 text-xs cursor-pointer hidden sm:inline-flex"
            title="Print Resume"
          >
            <Printer className="w-4 h-4 text-black" />
            <span>PRINT</span>
          </button>

          <button
            onClick={handleShare}
            className="inline-flex items-center gap-2 bg-white text-black btn-brutalist px-3.5 py-2.5 text-xs cursor-pointer"
            title="Share Resume Link"
          >
            {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Share2 className="w-4 h-4 text-black" />}
            <span>{copied ? 'COPIED LINK!' : 'SHARE'}</span>
          </button>
        </div>

      </div>

      {/* DIGITAL RESUME SHEET */}
      <main className="max-w-4xl mx-auto bg-white border-brutalist shadow-brutalist-lg rounded-2xl p-6 sm:p-10 lg:p-12 relative z-10">
        
        {/* RESUME HEADER */}
        <div className="border-b-3 border-black pb-8 mb-8 relative">
          
          {/* Aesthetic Barcode on top corner */}
          <div className="absolute top-0 right-0 hidden md:flex flex-col items-end gap-1">
            <div className="w-32 h-10 barcode-stripes border-brutalist-thin rounded" />
            <span className="font-mono text-[8px] font-black tracking-widest text-black">CV ID: 9791680352</span>
          </div>

          <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-6 text-center md:text-left">
            
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-cv-yellow text-black border-brutalist-thin text-[10px] font-bold uppercase tracking-wider font-mono shadow-brutalist-sm">
                <Sparkles className="w-3.5 h-3.5 text-black" />
                <span>INTERACTIVE DIGITAL RESUME</span>
              </div>

              <h1 className="text-4xl sm:text-5xl font-black font-display text-black tracking-tight leading-none uppercase">
                HARIHARAN S<span className="text-cv-pink font-black">.</span>
              </h1>

              <h2 className="text-xs sm:text-sm font-bold font-mono tracking-wider text-black bg-cv-cyan/30 px-2 py-0.5 border-brutalist-thin rounded inline-block uppercase">
                UI/UX Designer & Fullstack Developer | AI & Data Science
              </h2>

              <p className="text-xs sm:text-sm text-black max-w-xl font-semibold leading-relaxed font-body pt-2">
                Enthusiastic Full Stack Developer with hands-on experience building web applications using React.js, Next.js, Node.js, Express.js, SQL, and MongoDB.
              </p>
            </div>

            {/* Contact Details Column */}
            <div className="bg-slate-50 p-4 rounded border-brutalist-thin text-xs space-y-2.5 w-full md:w-auto font-mono text-black shadow-brutalist-sm">
              <a href="mailto:hariharansarav7@gmail.com" className="flex items-center justify-center md:justify-start gap-2 hover:underline">
                <Mail className="w-4 h-4 text-black flex-shrink-0" />
                <span>hariharansarav7@gmail.com</span>
              </a>
              <a href="tel:+919791680352" className="flex items-center justify-center md:justify-start gap-2 hover:underline">
                <Phone className="w-4 h-4 text-black flex-shrink-0" />
                <span>+91 9791680352</span>
              </a>
              <div className="flex items-center justify-center md:justify-start gap-2 text-black">
                <MapPin className="w-4 h-4 text-black flex-shrink-0" />
                <span>Coimbatore, Tamil Nadu</span>
              </div>
            </div>

          </div>
        </div>

        {/* SECTION NAVIGATION FILTER TABS */}
        <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 mb-10 pb-6 border-b-2 border-black">
          {[
            { label: 'All Sections', id: 'all' },
            { label: 'Experience (4)', id: 'experience' },
            { label: 'Projects & Awards (5)', id: 'projects' },
            { label: 'Technical Skills', id: 'skills' },
            { label: 'Education', id: 'education' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id)}
              className={`px-4 py-2 font-mono font-bold text-xs uppercase tracking-wider transition-all duration-100 cursor-pointer ${
                activeFilter === tab.id
                  ? 'bg-cv-yellow text-black border-brutalist shadow-brutalist-sm translate-x-[-1px] translate-y-[-1px]'
                  : 'bg-white text-black border-brutalist shadow-brutalist-sm hover:bg-black/5'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* SECTION 1: PROFESSIONAL SUMMARY */}
        {(activeFilter === 'all') && (
          <section className="mb-10 space-y-3">
            <h3 className="text-base font-black font-display text-black flex items-center gap-2 border-l-4 border-black pl-3 uppercase">
              <FileText className="w-5 h-5 text-black" />
              <span>Professional Summary</span>
            </h3>
            <p className="text-xs sm:text-sm text-black leading-relaxed bg-slate-50 p-4 rounded border-brutalist-thin font-semibold font-body">
              Enthusiastic Full Stack Developer with hands-on experience in building web applications using React.js, Next.js, Node.js, Express.js, SQL, and MongoDB. Skilled in REST API development, frontend-backend integration, CRUD operations, and database-driven applications. Experienced in developing responsive web interfaces and workflow-based systems, with knowledge of UI/UX design principles. Strong problem-solving, debugging, and collaboration skills with a passion for learning modern web technologies.
            </p>
          </section>
        )}

        {/* SECTION 2: WORK EXPERIENCE */}
        {(activeFilter === 'all' || activeFilter === 'experience') && (
          <section className="mb-10 space-y-6">
            <h3 className="text-base font-black font-display text-black flex items-center gap-2 border-l-4 border-black pl-3 uppercase">
              <Briefcase className="w-5 h-5 text-black" />
              <span>Work Experience & Internships</span>
            </h3>

            <div className="space-y-6">
              {internships.map((exp, idx) => (
                <div key={idx} className="bg-slate-50 p-6 rounded border-brutalist-thin space-y-3 hover:bg-white hover:shadow-brutalist-sm transition-all">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b-2 border-black pb-3">
                    <div>
                      <h4 className="text-sm sm:text-base font-black font-display text-black uppercase leading-tight">{exp.role}</h4>
                      <p className="text-[11px] font-mono font-bold text-black uppercase tracking-wider">{exp.company} • {exp.location}</p>
                    </div>
                    <span className="px-3 py-1 bg-white border-brutalist-thin text-black text-[10px] font-mono font-bold uppercase rounded shadow-brutalist-sm">
                      {exp.period}
                    </span>
                  </div>

                  <ul className="space-y-2">
                    {exp.points.map((pt, pIdx) => (
                      <li key={pIdx} className="text-xs sm:text-sm text-black font-semibold flex items-start gap-2 leading-relaxed">
                        <span className="text-cv-pink font-extrabold select-none font-mono">✦</span>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {exp.tags.map((t, tIdx) => (
                      <span key={tIdx} className="px-2 py-0.5 bg-white border-brutalist-thin text-[9px] sm:text-[10px] font-mono font-bold text-black uppercase">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* SECTION 3: PROJECTS & AWARDS */}
        {(activeFilter === 'all' || activeFilter === 'projects') && (
          <section className="mb-10 space-y-6">
            <h3 className="text-base font-black font-display text-black flex items-center gap-2 border-l-4 border-black pl-3 uppercase">
              <Award className="w-5 h-5 text-black" />
              <span>Projects & Recognized Achievements</span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {projects.map((proj, pIdx) => (
                <div key={pIdx} className="bg-slate-50 p-6 rounded border-brutalist-thin hover:bg-white hover:shadow-brutalist-sm transition-all flex flex-col justify-between space-y-4 text-black">
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="text-[10px] font-mono font-bold text-black">{proj.date}</span>
                      {proj.award && (
                        <span className="px-2 py-0.5 bg-cv-pink text-black border-brutalist-thin text-[9px] font-bold font-mono uppercase shadow-brutalist-sm">
                          {proj.award}
                        </span>
                      )}
                    </div>
                    
                    <div className="flex items-center justify-between gap-2">
                      <h4 className="text-sm sm:text-base font-black font-display text-black mb-1 leading-snug uppercase">{proj.title}</h4>
                      {proj.liveLink && (
                        <a 
                          href={proj.liveLink} 
                          target="_blank" 
                          rel="noreferrer" 
                          className="text-black hover:underline transition-colors flex items-center gap-0.5 text-xs font-mono font-bold uppercase"
                        >
                          <span>LINK</span>
                          <ArrowUpRight className="w-3.5 h-3.5 stroke-[2px]" />
                        </a>
                      )}
                    </div>
                    <p className="text-[10px] sm:text-xs text-slate-700 font-mono font-bold mb-3 uppercase tracking-wider">{proj.tech}</p>

                    <ul className="space-y-2">
                      {proj.highlights.map((h, hIdx) => (
                        <li key={hIdx} className="text-xs text-black font-semibold flex items-start gap-2 leading-relaxed">
                          <span className="text-cv-pink font-extrabold select-none font-mono">✦</span>
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* SECTION 4: TECHNICAL SKILLS */}
        {(activeFilter === 'all' || activeFilter === 'skills') && (
          <section className="mb-10 space-y-4">
            <h3 className="text-base font-black font-display text-black flex items-center gap-2 border-l-4 border-black pl-3 uppercase">
              <Code2 className="w-5 h-5 text-black" />
              <span>Technical Skills Breakdown</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { cat: 'Frontend', items: 'React.js, HTML5, CSS3, JavaScript, Next.js, Responsive Web Design' },
                { cat: 'Backend', items: 'Node.js, Express.js, REST API Development, CRUD Operations' },
                { cat: 'Languages', items: 'Java, Python, JavaScript (ES6+)' },
                { cat: 'Databases', items: 'MSSQL, MySQL, MongoDB' },
                { cat: 'Tools & Platforms', items: 'Git, GitHub, Postman, VS Code' },
                { cat: 'UI/UX & Design', items: 'Figma, Adobe Photoshop, Wireframing, User Interface Design' },
              ].map((s, idx) => (
                <div key={idx} className="bg-white p-4 rounded border-brutalist-thin hover:bg-cv-yellow transition-colors">
                  <h4 className="text-[10px] font-black text-black uppercase tracking-wider mb-1.5 font-mono">{s.cat}</h4>
                  <p className="text-xs font-bold text-slate-800 font-body">{s.items}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* SECTION 5: EDUCATION */}
        {(activeFilter === 'all' || activeFilter === 'education') && (
          <section className="mb-8 space-y-4">
            <h3 className="text-base font-black font-display text-black flex items-center gap-2 border-l-4 border-black pl-3 uppercase">
              <GraduationCap className="w-5 h-5 text-black" />
              <span>Education & Qualifications</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-slate-50 p-5 rounded border-brutalist-thin hover:bg-white hover:shadow-brutalist-sm transition-all space-y-2">
                <span className="text-[10px] font-mono font-bold text-slate-700">2024 – Present</span>
                <h4 className="text-sm sm:text-base font-black font-display text-black uppercase">B.Tech in Artificial Intelligence & Data Science</h4>
                <p className="text-xs font-semibold text-slate-700 font-body">KGiSL Institute of Technology</p>
                <span className="inline-block px-2.5 py-0.5 bg-cv-yellow border-brutalist-thin text-xs font-mono font-bold text-black uppercase shadow-brutalist-sm">
                  CGPA: 7.5 (6th Sem)
                </span>
              </div>

              <div className="bg-slate-50 p-5 rounded border-brutalist-thin hover:bg-white hover:shadow-brutalist-sm transition-all space-y-2">
                <span className="text-[10px] font-mono font-bold text-slate-700">2021 – 2024</span>
                <h4 className="text-sm sm:text-base font-black font-display text-black uppercase">Diploma in Computer Engineering</h4>
                <p className="text-xs font-semibold text-slate-700 font-body">Sri Ranganathar Institute of Polytechnic College</p>
                <span className="inline-block px-2.5 py-0.5 bg-cv-yellow border-brutalist-thin text-xs font-mono font-bold text-black uppercase shadow-brutalist-sm">
                  Score: 81%
                </span>
              </div>
            </div>
          </section>
        )}

        {/* FOOTER ACTIONS */}
        <div className="pt-8 border-t-2 border-black flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs font-black text-black font-mono uppercase tracking-wider">
            Hariharan S • Official Resume Sheet
          </p>
          <div className="flex items-center gap-3">
            <button
              onClick={handleDownload}
              className="px-5 py-2.5 bg-cv-green text-black btn-brutalist text-xs cursor-pointer"
            >
              DOWNLOAD PDF RESUME
            </button>
          </div>
        </div>

      </main>
    </div>
  );
};

export default ResumePage;
