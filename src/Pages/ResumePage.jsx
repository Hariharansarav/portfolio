import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowLeft, Download, Printer, Share2, Mail, Phone, MapPin, 
  Briefcase, GraduationCap, Award, Code2, Database, Layout, 
  Sparkles, CheckCircle2, FileText, Check 
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
      role: 'Web App Development & Backend Engineering Intern',
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
      highlights: [
        'Worked on full-stack web application development as part of a collaborative team during the KG Agile internship.',
        'Developed and maintained responsive web pages using Next.js with frontend and backend integration and REST API connectivity.',
      ],
    },
    {
      title: 'Backend API Integration & UI Development – V Do Naturals',
      date: 'April 2025',
      award: null,
      tech: 'Node.js, Express.js, JavaScript',
      highlights: [
        'Worked on admin panel development and backend API integration for an e-commerce web application.',
        'Handled frontend-backend connectivity and dynamic data integration for website operations.',
      ],
    },
    {
      title: 'Green Wheels Supply Chain Website',
      date: 'Dec 2023',
      award: null,
      tech: 'HTML5, CSS3, JavaScript',
      highlights: [
        'Developed a responsive business website with structured navigation and user-friendly interface design.',
        'Worked on frontend development and responsive layouts for better accessibility across devices.',
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-[#12101C] text-slate-100 py-8 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      
      {/* Background Glows */}
      <div className="absolute top-10 left-1/4 w-96 h-96 bg-[#8b5cf6]/10 rounded-full blur-3xl pointer-events-none" />

      {/* TOP NAVIGATION BAR */}
      <div className="max-w-5xl mx-auto mb-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        
        {/* Back Link */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#241B35] border border-[#8b5cf6]/30 hover:border-[#8b5cf6] text-slate-200 hover:text-[#8b5cf6] transition-all shadow-sm group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span className="text-sm font-bold">Back to Portfolio</span>
        </Link>

        {/* Quick Action Buttons */}
        <div className="flex items-center gap-2">
          <button
            onClick={handleDownload}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#8b5cf6] hover:bg-[#7c3aed] text-white font-extrabold text-sm shadow-md shadow-[#8b5cf6]/30 transition-all cursor-pointer"
          >
            <Download className="w-4 h-4" />
            <span>Download PDF</span>
          </button>

          <button
            onClick={handlePrint}
            className="inline-flex items-center gap-2 px-3.5 py-2.5 rounded-xl bg-[#241B35] border border-[#8b5cf6]/30 hover:border-[#8b5cf6] text-slate-200 hover:text-white text-sm font-bold transition-all cursor-pointer hidden sm:inline-flex shadow-sm"
            title="Print Resume"
          >
            <Printer className="w-4 h-4" />
            <span>Print</span>
          </button>

          <button
            onClick={handleShare}
            className="inline-flex items-center gap-2 px-3.5 py-2.5 rounded-xl bg-[#241B35] border border-[#8b5cf6]/30 hover:border-[#8b5cf6] text-slate-200 hover:text-white text-sm font-bold transition-all cursor-pointer shadow-sm"
            title="Share Resume Link"
          >
            {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Share2 className="w-4 h-4" />}
            <span>{copied ? 'Copied Link!' : 'Share'}</span>
          </button>
        </div>

      </div>

      {/* DIGITAL RESUME CONTAINER */}
      <main className="max-w-5xl mx-auto bg-[#241B35]/90 border border-[#8b5cf6]/30 rounded-3xl p-6 sm:p-10 lg:p-12 shadow-2xl backdrop-blur-2xl relative">
        
        {/* RESUME HEADER */}
        <div className="border-b border-slate-800 pb-8 mb-8">
          <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-6 text-center md:text-left">
            
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#12101C] border border-[#8b5cf6]/40 text-[#c4b5fd] text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-[#8b5cf6]" />
                <span>Interactive Digital Resume</span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
                HARIHARAN S
              </h1>

              <h2 className="text-lg sm:text-xl font-bold text-[#8b5cf6]">
                UI/UX Designer & Fullstack Developer | AI & Data Science
              </h2>

              <p className="text-xs sm:text-sm text-slate-300 max-w-xl font-medium">
                Enthusiastic Full Stack Developer with hands-on experience building web applications using React.js, Next.js, Node.js, Express.js, SQL, and MongoDB.
              </p>
            </div>

            {/* Contact Details Column */}
            <div className="bg-[#12101C] p-4 rounded-2xl border border-[#8b5cf6]/30 text-xs space-y-2.5 w-full md:w-auto font-bold">
              <a href="mailto:hariharansarav7@gmail.com" className="flex items-center gap-2 text-slate-300 hover:text-[#8b5cf6] transition-colors">
                <Mail className="w-4 h-4 text-[#8b5cf6] flex-shrink-0" />
                <span>hariharansarav7@gmail.com</span>
              </a>
              <a href="tel:+919791680352" className="flex items-center gap-2 text-slate-300 hover:text-[#8b5cf6] transition-colors">
                <Phone className="w-4 h-4 text-[#8b5cf6] flex-shrink-0" />
                <span>+91 9791680352</span>
              </a>
              <div className="flex items-center gap-2 text-slate-300">
                <MapPin className="w-4 h-4 text-[#8b5cf6] flex-shrink-0" />
                <span>Coimbatore, Tamil Nadu</span>
              </div>
            </div>

          </div>
        </div>

        {/* SECTION NAVIGATION FILTER TABS */}
        <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 mb-10 pb-6 border-b border-slate-800">
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
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeFilter === tab.id
                  ? 'bg-[#8b5cf6] text-white shadow-md shadow-[#8b5cf6]/30'
                  : 'bg-[#12101C] text-slate-300 hover:text-white border border-slate-800'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* SECTION 1: PROFESSIONAL SUMMARY */}
        {(activeFilter === 'all') && (
          <section className="mb-10 space-y-3">
            <h3 className="text-lg font-bold text-white flex items-center gap-2 border-l-4 border-[#8b5cf6] pl-3">
              <FileText className="w-5 h-5 text-[#8b5cf6]" />
              <span>Professional Summary</span>
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed bg-[#12101C] p-4 rounded-2xl border border-slate-800 font-medium">
              Enthusiastic Full Stack Developer with hands-on experience in building web applications using React.js, Next.js, Node.js, Express.js, SQL, and MongoDB. Skilled in REST API development, frontend-backend integration, CRUD operations, and database-driven applications. Experienced in developing responsive web interfaces and workflow-based systems, with knowledge of UI/UX design principles. Strong problem-solving, debugging, and collaboration skills with a passion for learning modern web technologies.
            </p>
          </section>
        )}

        {/* SECTION 2: WORK EXPERIENCE */}
        {(activeFilter === 'all' || activeFilter === 'experience') && (
          <section className="mb-10 space-y-6">
            <h3 className="text-lg font-bold text-white flex items-center gap-2 border-l-4 border-[#8b5cf6] pl-3">
              <Briefcase className="w-5 h-5 text-[#8b5cf6]" />
              <span>Work Experience & Internships</span>
            </h3>

            <div className="space-y-6">
              {internships.map((exp, idx) => (
                <div key={idx} className="bg-[#12101C] p-6 rounded-2xl border border-slate-800 space-y-3">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-3">
                    <div>
                      <h4 className="text-base font-bold text-white">{exp.role}</h4>
                      <p className="text-xs font-bold text-[#8b5cf6]">{exp.company} • {exp.location}</p>
                    </div>
                    <span className="px-3 py-1 rounded-full bg-[#8b5cf6]/20 border border-[#8b5cf6]/40 text-[#c4b5fd] text-xs font-mono font-bold">
                      {exp.period}
                    </span>
                  </div>

                  <ul className="space-y-2">
                    {exp.points.map((pt, pIdx) => (
                      <li key={pIdx} className="text-xs sm:text-sm text-slate-300 font-medium flex items-start gap-2">
                        <span className="text-[#8b5cf6] mt-1">•</span>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {exp.tags.map((t, tIdx) => (
                      <span key={tIdx} className="px-2.5 py-0.5 rounded-md bg-[#241B35] border border-[#8b5cf6]/30 text-[11px] text-[#c4b5fd] font-mono font-bold">
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
            <h3 className="text-lg font-bold text-white flex items-center gap-2 border-l-4 border-amber-500 pl-3">
              <Award className="w-5 h-5 text-amber-400" />
              <span>Projects & Recognized Achievements</span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {projects.map((proj, pIdx) => (
                <div key={pIdx} className="bg-[#12101C] p-6 rounded-2xl border border-slate-800 flex flex-col justify-between space-y-3">
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="text-xs font-mono font-bold text-[#8b5cf6]">{proj.date}</span>
                      {proj.award && (
                        <span className="px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/40 text-[11px] font-bold">
                          {proj.award}
                        </span>
                      )}
                    </div>
                    <h4 className="text-base font-bold text-white mb-1">{proj.title}</h4>
                    <p className="text-xs text-[#8b5cf6] font-mono font-bold mb-3">{proj.tech}</p>

                    <ul className="space-y-2">
                      {proj.highlights.map((h, hIdx) => (
                        <li key={hIdx} className="text-xs text-slate-300 font-medium flex items-start gap-2">
                          <span className="text-[#8b5cf6] mt-0.5">•</span>
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
            <h3 className="text-lg font-bold text-white flex items-center gap-2 border-l-4 border-[#8b5cf6] pl-3">
              <Code2 className="w-5 h-5 text-[#8b5cf6]" />
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
                <div key={idx} className="bg-[#12101C] p-4 rounded-xl border border-slate-800">
                  <h4 className="text-xs font-bold text-[#8b5cf6] uppercase tracking-wider mb-1 font-mono">{s.cat}</h4>
                  <p className="text-xs font-bold text-slate-200">{s.items}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* SECTION 5: EDUCATION */}
        {(activeFilter === 'all' || activeFilter === 'education') && (
          <section className="mb-8 space-y-4">
            <h3 className="text-lg font-bold text-white flex items-center gap-2 border-l-4 border-[#8b5cf6] pl-3">
              <GraduationCap className="w-5 h-5 text-[#8b5cf6]" />
              <span>Education & Qualifications</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-[#12101C] p-5 rounded-2xl border border-slate-800 space-y-2">
                <span className="text-xs font-mono font-bold text-[#8b5cf6]">2024 – Present</span>
                <h4 className="text-base font-bold text-white">B.Tech in Artificial Intelligence & Data Science</h4>
                <p className="text-xs font-semibold text-slate-300">KGiSL Institute of Technology</p>
                <span className="inline-block px-2.5 py-1 rounded-md bg-[#8b5cf6]/20 text-[#c4b5fd] border border-[#8b5cf6]/40 text-xs font-bold">
                  CGPA: 7.5 till 6th Sem
                </span>
              </div>

              <div className="bg-[#12101C] p-5 rounded-2xl border border-slate-800 space-y-2">
                <span className="text-xs font-mono font-bold text-[#8b5cf6]">2021 – 2024</span>
                <h4 className="text-base font-bold text-white">Diploma in Computer Engineering</h4>
                <p className="text-xs font-semibold text-slate-300">Sri Ranganathar Institute of Polytechnic College</p>
                <span className="inline-block px-2.5 py-1 rounded-md bg-[#8b5cf6]/20 text-[#c4b5fd] border border-[#8b5cf6]/40 text-xs font-bold">
                  Percentage: 81%
                </span>
              </div>
            </div>
          </section>
        )}

        {/* FOOTER ACTIONS */}
        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs font-bold text-slate-400">
            Hariharan S • Official Resume
          </p>
          <div className="flex items-center gap-3">
            <button
              onClick={handleDownload}
              className="px-5 py-2.5 rounded-xl bg-[#8b5cf6] hover:bg-[#7c3aed] text-white font-extrabold text-xs transition-all shadow-md"
            >
              Download PDF Resume
            </button>
          </div>
        </div>

      </main>
    </div>
  );
};

export default ResumePage;
