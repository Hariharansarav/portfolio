import React, { useState } from 'react';
import { ExternalLink, Calendar, Award, FileText, Bookmark } from 'lucide-react';
import ProjectModal from './ProjectModal';

// Import icons with corrected paths (case-sensitive)
import sqlServerIcon from './ICONS/MSSQL.png';
import reactIcon from './ICONS/React.png';
import dataScienceIcon from './ICONS/datascience.png';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const projectsData = [
    {
      id: 1,
      title: 'Audit Management System',
      category: 'Fullstack',
      role: 'Backend & DB Developer',
      date: 'Oct 2025',
      domain: 'llsamsystem.netlify.app',
      tags: ['React.js', 'Node.js', 'Express.js', 'MSSQL'],
      icon: sqlServerIcon,
      color: 'bg-cv-yellow',
      code: 'AM-01',
      description:
        'Developed a full-stack Audit Management System with REST API integration and MSSQL database connectivity. Implemented CRUD functionalities for managing audits, observations, and workflow operations. Designed responsive workflow-based user interfaces and optimized backend integration for improved application performance.',
      features: [
        'Developed a full-stack Audit Management System with REST API integration and MSSQL database connectivity.',
        'Implemented CRUD functionalities for managing audits, observations, and workflow operations.',
        'Designed responsive workflow-based user interfaces and optimized backend integration for improved application performance.',
      ],
      liveLink: 'https://llsamsystem.netlify.app/',
    },
    {
      id: 2,
      title: 'Students Choice Global',
      category: 'Fullstack',
      role: 'Full Stack Intern',
      date: 'March 2025',
      domain: 'studentschoiceglobal.com',
      tags: ['Next.js', 'Node.js', 'Express.js', 'React.js'],
      icon: reactIcon,
      color: 'bg-cv-pink',
      code: 'SC-02',
      description:
        'Worked on full-stack web application development as part of a collaborative team during the KG Agile internship. Developed and maintained responsive web pages using Next.js with frontend and backend integration and REST API connectivity. Contributed to dynamic data handling and feature development across multiple application modules.',
      features: [
        'Worked on full-stack web application development as part of a collaborative team during the KG Agile internship.',
        'Developed and maintained responsive web pages using Next.js with frontend and backend integration and REST API connectivity.',
        'Contributed to dynamic data handling and feature development across multiple application modules.',
      ],
      liveLink: 'https://www.studentschoiceglobal.com/',
    },
    {
      id: 3,
      title: 'V Do Naturals Integration',
      category: 'Fullstack',
      role: 'API & UI Developer',
      date: 'April 2025',
      domain: 'vdonaturalss.com',
      tags: ['Node.js', 'Express.js', 'JavaScript', 'E-Commerce'],
      icon: reactIcon,
      color: 'bg-cv-cyan',
      code: 'VD-03',
      description:
        'Worked on admin panel development and backend API integration for an e-commerce web application. Handled frontend-backend connectivity and dynamic data integration for website operations. Contributed during the UI/UX design phase by framing and organizing content for product pages and website sections.',
      features: [
        'Worked on admin panel development and backend API integration for an e-commerce web application.',
        'Handled frontend-backend connectivity and dynamic data integration for website operations.',
        'Contributed during the UI/UX design phase by framing and organizing content for product pages and website sections.',
      ],
      liveLink: 'https://vdonaturalss.com/',
    },
    {
      id: 4,
      title: 'Green Wheels Website',
      category: 'UI/UX',
      role: 'Frontend Developer',
      date: 'Dec 2023',
      domain: 'greenwheelscs.in',
      tags: ['HTML5', 'CSS3', 'JavaScript', 'Responsive UI'],
      icon: null,
      color: 'bg-cv-purple',
      code: 'GW-04',
      description:
        'Developed a responsive business website with structured navigation and user-friendly interface design. Worked on frontend development and responsive layouts for better accessibility across devices. Improved overall website presentation and user experience.',
      features: [
        'Developed a responsive business website with structured navigation and user-friendly interface design.',
        'Worked on frontend development and responsive layouts for better accessibility across devices.',
        'Improved overall website presentation and user experience.',
      ],
      liveLink: 'https://www.greenwheelscs.in/',
    },
    {
      id: 5,
      title: 'Smart Tribal Farming',
      category: 'Web Apps',
      role: 'AI & Full Stack Dev',
      date: 'Ongoing',
      domain: 'smart-tribal-farming.onrender.com',
      award: 'Best Paper Award ✦',
      tags: ['React.js', 'AI/ML', 'Data Analysis', 'Python'],
      icon: dataScienceIcon,
      color: 'bg-cv-green',
      code: 'SF-05',
      description:
        'Developing an AI-powered crop suitability and planning system for tribal farmers. Completed frontend development with responsive UI design. Working on AI model integration for crop prediction and farming recommendations. Collaborating with team members on data-driven agricultural solutions. Received the Best Paper Award for innovative application of AI in agriculture.',
      features: [
        'Developing an AI-powered crop suitability and planning system for tribal farmers.',
        'Completed frontend development with responsive UI design.',
        'Working on AI model integration for crop prediction and farming recommendations.',
        'Collaborating with team members on data-driven agricultural solutions.',
        'Received the Best Paper Award for innovative application of AI in agriculture.',
      ],
      liveLink: 'https://smart-tribal-farming.onrender.com/',
    },
  ];

  const filters = ['All', 'Fullstack', 'UI/UX', 'Web Apps'];

  const filteredProjects = activeFilter === 'All'
    ? projectsData
    : projectsData.filter((p) => p.category === activeFilter);

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="projects" className="py-24 bg-cv-bg relative overflow-hidden">
      {/* Background Decorative Star */}
      <div className="absolute top-24 right-10 w-24 h-24 text-cv-pink opacity-20 pointer-events-none select-none hidden md:block">
        <svg viewBox="0 0 100 100" className="w-full h-full fill-current animate-pulse">
          <path d="M50 0 L63 38 L100 38 L70 60 L80 100 L50 75 L20 100 L30 60 L0 38 L37 38 Z" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full space-y-8">
        
        {/* TOP PANEL ROW: OVERVIEW & STATS (divided into two cards) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Card A: Overview (7 Cols) */}
          <div className="col-span-1 lg:col-span-7 bg-white border-brutalist shadow-brutalist rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 relative text-left group hover:rotate-[-0.3deg] transition-all duration-300">
            {/* Visual background lines */}
            <div className="absolute inset-4 opacity-[0.02] pointer-events-none bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:16px_16px] rounded-xl" />

            <div className="space-y-4 flex-1 relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-cv-green text-black border-brutalist shadow-brutalist-sm text-[10px] font-mono font-bold uppercase tracking-wider rounded">
                <span>✦ WHAT I'VE BUILT</span>
              </div>
              <h2 className="text-4xl sm:text-5xl font-black font-display text-black uppercase leading-none">
                PROJECTS<span className="text-cv-pink font-black">.</span>
              </h2>
              <div className="bg-cv-pink text-black border-brutalist shadow-brutalist px-4 py-2 inline-block rotate-[-1.5deg] hover:rotate-0 transition-transform">
                <span className="text-xs sm:text-sm font-black font-mono uppercase tracking-wide">
                  IDEAS. CODE. IMPACT.
                </span>
              </div>
              <p className="text-black text-xs sm:text-sm leading-relaxed font-semibold font-body">
                A collection of things I've designed and built. Each project taught me something new and pushed me to grow.
              </p>
            </div>

            {/* Illustration */}
            <div className="w-24 h-24 bg-white border-brutalist shadow-brutalist rounded-xl p-2 relative rotate-[4deg] group-hover:rotate-0 transition-transform duration-250 flex flex-col justify-between select-none pointer-events-none flex-shrink-0 self-center z-10">
              <div className="flex gap-1">
                <div className="w-2 h-2 rounded-full bg-cv-pink border border-black" />
                <div className="w-2 h-2 rounded-full bg-cv-yellow border border-black" />
                <div className="w-2 h-2 rounded-full bg-cv-green border border-black" />
              </div>
              <div className="w-full h-8 border border-black bg-slate-50 flex items-center justify-center font-mono font-bold text-[8px] rounded">
                WEBPAGE
              </div>
              <div className="flex justify-between items-center">
                <div className="w-8 h-1 bg-black rounded" />
                <div className="px-1 bg-cv-yellow border border-black rounded text-[6.5px] font-mono font-black">&lt;/&gt;</div>
              </div>
            </div>

            {/* Micro barcode sticker at top right */}
            <div className="absolute top-3 right-3 flex items-center gap-1.5 opacity-60">
              <div className="w-12 h-4 barcode-stripes border border-black rounded-[2px]" />
              <span className="font-mono text-[6.5px] font-bold">V.07</span>
            </div>
          </div>

          {/* Card B: Stats & Filters (5 Cols) - REDESIGNED WITH LEDS AND STACKS */}
          <div className="col-span-1 lg:col-span-5 bg-white border-brutalist shadow-brutalist rounded-2xl p-6 flex flex-col justify-between gap-6 text-left relative overflow-hidden group hover:rotate-[0.3deg] transition-all duration-300">
            
            {/* Header info */}
            <div className="flex justify-between items-center border-b border-black/10 pb-2.5">
              <span className="font-mono text-[8px] font-black uppercase text-slate-500 tracking-wider">✦ METRICS & CHANNELS RACK</span>
              <span className="w-1.5 h-1.5 rounded-full bg-cv-green border border-black animate-pulse" />
            </div>

            {/* 4 Stats Grid with LED status indicators */}
            <div className="grid grid-cols-4 gap-2">
              <div className="border border-dashed border-black p-2.5 rounded text-center bg-white shadow-sm relative hover:scale-102 transition-transform">
                <p className="text-base sm:text-lg font-black font-display text-cv-green leading-none">05+</p>
                <p className="text-[7.5px] font-mono font-black uppercase text-slate-700 leading-tight mt-1.5">PROJECTS</p>
                <div className="absolute top-1 right-1 w-1.5 h-1.5 rounded-full bg-cv-green border border-black/35 shadow-[0_0_4px_#A3E635]" />
              </div>
              <div className="border border-dashed border-black p-2.5 rounded text-center bg-white shadow-sm relative hover:scale-102 transition-transform">
                <p className="text-base sm:text-lg font-black font-display text-cv-pink leading-none">03</p>
                <p className="text-[7.5px] font-mono font-black uppercase text-slate-700 leading-tight mt-1.5">FULLSTACK</p>
                <div className="absolute top-1 right-1 w-1.5 h-1.5 rounded-full bg-cv-pink border border-black/35 shadow-[0_0_4px_#F472B6]" />
              </div>
              <div className="border border-dashed border-black p-2.5 rounded text-center bg-white shadow-sm relative hover:scale-102 transition-transform">
                <p className="text-base sm:text-lg font-black font-display text-cv-cyan leading-none">02</p>
                <p className="text-[7.5px] font-mono font-black uppercase text-slate-700 leading-tight mt-1.5">UI/UX</p>
                <div className="absolute top-1 right-1 w-1.5 h-1.5 rounded-full bg-cv-cyan border border-black/35 shadow-[0_0_4px_#22D3EE]" />
              </div>
              <div className="border border-dashed border-black p-2.5 rounded text-center bg-white shadow-sm relative hover:scale-102 transition-transform">
                <p className="text-base sm:text-lg font-black font-display text-cv-yellow leading-none">05+</p>
                <p className="text-[7.5px] font-mono font-black uppercase text-slate-700 leading-tight mt-1.5">TECH USED</p>
                <div className="absolute top-1 right-1 w-1.5 h-1.5 rounded-full bg-cv-yellow border border-black/35 shadow-[0_0_4px_#FFDE4D]" />
              </div>
            </div>

            {/* Filter pills block styled like a patch panel bay */}
            <div className="pt-4 border-t border-slate-200">
              <div className="bg-slate-50 border-brutalist-thin p-3 rounded-xl flex flex-wrap gap-2.5 shadow-inner">
                {filters.map((f) => (
                  <button
                    key={f}
                    onClick={() => setActiveFilter(f)}
                    className={`px-3.5 py-1.5 border-2 border-black rounded-lg font-mono text-[9.5px] font-black uppercase transition-all duration-100 cursor-pointer ${
                      activeFilter === f
                        ? 'bg-black text-white shadow-brutalist-sm translate-x-[-1px] translate-y-[-1px]'
                        : 'bg-white text-black hover:bg-slate-50 hover:shadow-brutalist-sm'
                    }`}
                  >
                    {f}
                  </button>
                ))}
              </div>
            </div>

          </div>

        </div>

        {/* BOTTOM SECTION: BRUTALIST CONCERT ADMISSION TICKET STUBS LIST (NO SCREENSHOTS) */}
        <div className="flex flex-col gap-6 w-full">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white border-brutalist shadow-brutalist rounded-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-0 relative hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-brutalist-lg transition-all duration-200 group text-left w-full"
            >
              
              {/* Left Ticket Main Body (8 Cols) */}
              <div className="col-span-1 lg:col-span-8 p-6 flex flex-col justify-between space-y-4">
                
                {/* Header Ticket Row */}
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <span className={`w-8 h-8 rounded-full border border-black flex items-center justify-center font-mono font-black text-xs text-black ${project.color}`}>
                      {project.id}
                    </span>
                    <span className="px-2.5 py-0.5 bg-black text-white text-[8.5px] font-mono font-bold uppercase rounded tracking-widest shadow-brutalist-sm">
                      {project.category} PASS
                    </span>
                  </div>

                  <span className="flex items-center gap-1.5 text-[10px] font-mono font-black text-slate-500">
                    <Calendar className="w-3.5 h-3.5 text-black" />
                    RELEASE: {project.date}
                  </span>
                </div>

                {/* Project Title Block */}
                <div className="space-y-2">
                  
                  {project.award && (
                    <div className="inline-flex items-center gap-1 px-1.5 py-0.5 bg-cv-pink border border-black/25 text-[8.5px] font-mono font-black uppercase tracking-wider rounded shadow-brutalist-sm">
                      <Award className="w-3 h-3 text-black" />
                      {project.award}
                    </div>
                  )}

                  <h3 className="text-xl sm:text-2xl font-black font-display text-black uppercase leading-tight tracking-tight group-hover:underline flex items-center gap-2">
                    <Bookmark className="w-5 h-5 text-cv-pink flex-shrink-0" />
                    <span>{project.title}</span>
                  </h3>
                  
                  <p className="text-xs sm:text-sm text-black font-semibold font-body leading-relaxed max-w-4xl">
                    {project.description}
                  </p>
                </div>

                {/* Tech Badge Tags Row */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  <span className="text-[9px] font-mono font-bold uppercase tracking-wider text-slate-450 self-center mr-1">STACK:</span>
                  {project.tags.map((t, idx) => (
                    <span 
                      key={idx}
                      className="px-2.5 py-0.5 bg-slate-50 border border-black/15 text-[8.5px] font-mono font-black uppercase rounded text-slate-800"
                    >
                      {t}
                    </span>
                  ))}
                </div>

              </div>

              {/* Perforated Tear Line Separator (Decorative dashed borders + physical cutouts) */}
              <div className="hidden lg:block relative col-span-1 w-0 h-full flex justify-center">
                {/* Perforated torn ticket notch cutouts */}
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 w-7 h-7 rounded-full bg-cv-bg border-b-3 border-black z-20" />
                <div className="absolute -bottom-3.5 left-1/2 -translate-x-1/2 w-7 h-7 rounded-full bg-cv-bg border-t-3 border-black z-20" />
                <div className="h-full border-r-3 border-dashed border-black/35" />
              </div>

              {/* Perforated Separator in Mobile (Horizontal instead of vertical) */}
              <div className="lg:hidden border-t-3 border-dashed border-black/35 w-full relative h-0">
                <div className="absolute -left-3.5 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-cv-bg border-r-3 border-black z-20" />
                <div className="absolute -right-3.5 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-cv-bg border-l-3 border-black z-20" />
              </div>

              {/* Right Ticket Coupon Stub (3 Cols) */}
              <div className="col-span-1 lg:col-span-3 bg-slate-50 p-6 flex flex-col justify-between items-center text-center space-y-4 lg:space-y-0 h-full self-center">
                
                {/* Visual Barcode Stamp */}
                <div className="space-y-1.5 w-full flex flex-col items-center">
                  <div className="w-3/4 h-8 barcode-stripes border border-black rounded shadow-brutalist-sm" />
                  <span className="font-mono text-[8px] font-black text-slate-600 tracking-wider">
                    {project.code} // {project.domain}
                  </span>
                </div>

                {/* Sub info */}
                <div className="font-mono text-[9px] uppercase leading-tight space-y-0.5">
                  <div className="text-slate-500 font-bold">STUB ASSIGNMENT</div>
                  <div className="font-black text-slate-800">{project.role}</div>
                </div>

                {/* Stacked Ticket Actions (Yellow View Live + White details Inspect) */}
                <div className="w-full space-y-2 pt-2">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full py-2 bg-cv-yellow text-black border-brutalist-thin shadow-brutalist-sm text-[9.5px] font-mono font-black text-center uppercase tracking-wider hover:bg-slate-50 hover:translate-x-[-1px] hover:translate-y-[-1px] transition-all cursor-pointer flex items-center justify-center gap-1"
                  >
                    <span>VIEW LIVE</span>
                    <ExternalLink className="w-3 h-3 text-black" />
                  </a>
                  
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="w-full py-2 bg-white text-black border-brutalist-thin shadow-brutalist-sm text-[9.5px] font-mono font-black uppercase hover:bg-slate-50 cursor-pointer"
                  >
                    INSPECT DETAILS
                  </button>
                </div>

              </div>

            </div>
          ))}
        </div>

        {/* Bottom CTA Banner */}
        <div className="flex items-center justify-center gap-3 pt-8">
          <button 
            onClick={scrollToContact}
            className="px-5 py-3 bg-cv-pink text-black border-brutalist shadow-brutalist-sm text-xs font-mono font-black text-center uppercase tracking-wider hover:translate-x-[-1px] hover:translate-y-[-1px] transition-all cursor-pointer"
          >
            INTERESTED IN COLLABORATING?
          </button>
          <button 
            onClick={scrollToContact}
            className="px-5 py-3 bg-white text-black border-brutalist shadow-brutalist-sm text-xs font-mono font-black text-center uppercase tracking-wider hover:translate-x-[-1px] hover:translate-y-[-1px] transition-all cursor-pointer"
          >
            LET'S CONNECT
          </button>
        </div>

      </div>

      {/* Project Modal details */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
};

export default Projects;
