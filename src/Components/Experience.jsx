import React, { useState } from 'react';
import { Briefcase, Calendar, Building2, MapPin, MousePointerClick } from 'lucide-react';

const Experience = () => {
  const [activeIdx, setActiveIdx] = useState(0);

  const experiences = [
    {
      id: 1,
      role: 'Full Stack Developer Intern',
      company: 'KG Agile',
      companyColor: 'text-cv-pink bg-cv-pink/10 border-cv-pink/20',
      location: 'Coimbatore',
      period: 'Feb 2026 – Present',
      duration: 'Ongoing',
      status: 'Current Role',
      isCurrent: true,
      color: 'bg-cv-pink',
      description:
        'Engaged in full-stack web application engineering utilizing Next.js, React, Express.js, and MongoDB. Responsible for frontend components, backend REST API design, and UI performance optimizations.',
      highlights: [
        'Worked on full-stack web application development using Next.js, React.js, Express.js, and MongoDB.',
        'Contributed to frontend development, backend integration, and REST API implementation.',
        'Used Postman for comprehensive API testing and validation.',
        'Engineered UI layouts and responsive interface improvements for superior UX.',
      ],
      skills: ['Next.js', 'React.js', 'Express.js', 'MongoDB', 'REST APIs', 'Postman', 'UI/UX'],
    },
    {
      id: 2,
      role: 'Web App Dev & Backend Intern',
      company: 'Lakshmi Life Sciences Private Limited (LLS)',
      companyColor: 'text-cv-green bg-cv-green/10 border-cv-green/20',
      location: 'Coimbatore',
      period: 'Jun 2025 – Jul 2025',
      duration: '2 Months',
      status: 'Completed',
      isCurrent: false,
      color: 'bg-cv-green',
      description:
        'Developed full-stack web solutions and backend services with SQL database connectivity, focusing on workflow management systems and REST API endpoints.',
      highlights: [
        'Developed full-stack applications using React.js, Node.js, Express.js, and SQL databases.',
        'Built REST APIs and implemented CRUD operations for workflow system.',
        'Worked on seamless frontend and backend integration with responsive UI design.',
        'Improved application performance through efficient database connectivity.',
      ],
      skills: ['React.js', 'Node.js', 'Express.js', 'SQL Databases', 'CRUD Operations', 'REST APIs'],
    },
    {
      id: 3,
      role: 'IoT Intern',
      company: 'Ascentz Technologies',
      companyColor: 'text-cv-cyan bg-cv-cyan/10 border-cv-cyan/20',
      location: 'Coimbatore',
      period: 'Nov 2023 – Dec 2023',
      duration: '2 Months',
      status: 'Completed',
      isCurrent: false,
      color: 'bg-cv-cyan',
      description:
        'Specialized internship training covering Internet of Things architecture, hardware sensor connectivity, and real-time monitoring systems.',
      highlights: [
        'Completed internship training focused on Internet of Things (IoT) concepts and applications.',
        'Gained practical exposure to IoT technologies, device connectivity, and real-time system monitoring.',
        'Learned fundamentals of sensor integration, embedded systems, and smart automation.',
        'Demonstrated strong learning agility and teamwork in embedded systems troubleshooting.',
      ],
      skills: ['IoT Concepts', 'Sensor Integration', 'Embedded Systems', 'Real-Time Monitoring'],
    },
    {
      id: 4,
      role: 'Administration Intern',
      company: 'SRI Valves',
      companyColor: 'text-cv-yellow bg-cv-yellow/10 border-cv-yellow/20',
      location: 'Edayarpalayam',
      period: 'Jan 2023',
      duration: '1 Month',
      status: 'Completed',
      isCurrent: false,
      color: 'bg-cv-yellow',
      description:
        'Assisted with operational administrative workflows, documentation management, and team data organization.',
      highlights: [
        'Assisted in daily office administration and operational activities.',
        'Managed office files, records, and documentation with proper organization.',
        'Supported administrative tasks related to data management.',
        'Coordinated with team members to maintain accurate records.',
      ],
      skills: ['Workflow Management', 'Data Handling', 'Office Operations', 'Team Coordination'],
    },
  ];

  const activeExp = experiences[activeIdx];

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="experience" className="py-24 bg-cv-bg relative overflow-hidden">
      {/* Decorative background stripes */}
      <div className="absolute top-0 right-0 w-32 h-full opacity-[0.02] bg-[repeating-linear-gradient(45deg,#000,#000_10px,transparent_10px,transparent_20px)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Section Title */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-cv-yellow text-black border-brutalist shadow-brutalist-sm text-xs font-mono font-bold uppercase tracking-wider">
            <Briefcase className="w-4 h-4 text-black" />
            <span>CAREER JOURNEY</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black font-display text-black uppercase">
            INTERNSHIPS & ROLES<span className="text-cv-pink font-black text-4xl">.</span>
          </h2>
          <p className="text-black max-w-xl mx-auto text-sm sm:text-base font-semibold font-body">
            Hands-on technical experience across 4 internship placements in full-stack web engineering, databases, and embedded IoT architectures.
          </p>
        </div>

        {/* TWO-PANEL INTERACTIVE GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* LEFT PANEL: OVERVIEW & GENERAL STATS CARD (5 Cols) */}
          <div className="col-span-1 lg:col-span-5 bg-white border-brutalist shadow-brutalist-lg rounded-2xl p-6 sm:p-8 flex flex-col justify-between relative hover:rotate-[-0.3deg] transition-transform duration-300 text-left">
            {/* Grid Pattern backdrop */}
            <div className="absolute inset-4 opacity-[0.02] pointer-events-none bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:16px_16px] rounded-xl" />

            <div className="relative z-10 space-y-6">
              {/* Badge header */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-cv-green text-black border-brutalist shadow-brutalist-sm text-[10px] font-mono font-bold uppercase tracking-wider rounded">
                <span>✦ PRACTICE. LEARN. BUILD. GROW.</span>
              </div>

              {/* Title & Badge */}
              <div className="flex items-start justify-between gap-6 flex-wrap md:flex-nowrap">
                <div className="space-y-4">
                  <h3 className="text-4xl sm:text-5xl font-black font-display text-black uppercase leading-none">
                    INTERNSHIP<span className="text-cv-pink font-black">.</span>
                  </h3>
                  
                  <div className="bg-cv-pink text-black border-brutalist shadow-brutalist px-4 py-2 inline-block rotate-[-1deg]">
                    <span className="text-xs sm:text-sm font-black font-mono uppercase tracking-wide">
                      EXPERIENCE & IMPACT.
                    </span>
                  </div>
                </div>

                {/* Card Illustration (ID Clip badge) */}
                <div className="w-20 h-20 bg-white border-brutalist shadow-brutalist rounded-xl p-2 relative rotate-[5deg] hover:rotate-0 transition-transform duration-200 hidden sm:flex flex-col items-center justify-between select-none pointer-events-none">
                  <div className="absolute -top-3 w-8 h-4 bg-slate-200 border-2 border-black rounded" />
                  <div className="w-full bg-cv-pink h-2 border-brutalist-thin rounded" />
                  <div className="w-8 h-8 border-brutalist bg-slate-50 flex items-center justify-center font-mono font-bold text-[6px]">PHOTO</div>
                  <div className="w-full h-1 bg-black rounded" />
                  <div className="w-8 h-1 bg-black/30 rounded" />
                </div>
              </div>

              {/* Description */}
              <p className="text-black text-xs sm:text-sm leading-relaxed font-semibold font-body">
                I love turning ideas into real-world solutions. Through internships, I've collaborated with amazing teams, worked on projects, and gained practical experience.
              </p>

              {/* Stats bento boxes */}
              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="bg-white border-brutalist shadow-brutalist-sm p-3 rounded text-left">
                  <p className="text-xl font-black font-display text-cv-pink">4</p>
                  <p className="text-[8px] font-mono font-bold uppercase text-slate-700 leading-tight">INTERNSHIPS Completed</p>
                </div>
                <div className="bg-white border-brutalist shadow-brutalist-sm p-3 rounded text-left">
                  <p className="text-xl font-black font-display text-cv-green">5+</p>
                  <p className="text-[8px] font-mono font-bold uppercase text-slate-700 leading-tight">PROJECTS Hands-on</p>
                </div>
              </div>
            </div>

            {/* Bottom skills tags */}
            <div className="border-t-2 border-black pt-6 mt-8 relative z-10 text-left">
              <span className="px-3 py-1 bg-cv-pink text-black border-brutalist-thin text-[9px] font-mono font-bold uppercase inline-block shadow-brutalist-sm rotate-[-0.5deg]">
                ✦ AREAS COVERED
              </span>
              <div className="flex flex-wrap items-center gap-1.5 mt-4">
                <span className="px-2 py-0.5 bg-white border-brutalist-thin text-[9px] font-mono font-black uppercase text-black">UI/UX DESIGN</span>
                <span className="px-2 py-0.5 bg-white border-brutalist-thin text-[9px] font-mono font-black uppercase text-black">FULLSTACK DEV</span>
                <span className="px-2 py-0.5 bg-white border-brutalist-thin text-[9px] font-mono font-black uppercase text-black">REST APIs</span>
              </div>
            </div>
          </div>

          {/* RIGHT PANEL: INTERACTIVE TIMELINE + DETAIL CARD (7 Cols) */}
          <div className="col-span-1 lg:col-span-7 bg-white border-brutalist shadow-brutalist-lg rounded-2xl p-6 sm:p-8 relative flex flex-col justify-between overflow-hidden hover:rotate-[0.3deg] transition-transform duration-300 text-left">
            
            {/* Top Header Badge */}
            <div className="flex items-center justify-between border-b-2 border-black pb-4 mb-6">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-cv-green text-black border-brutalist shadow-brutalist-sm text-[9px] font-mono font-bold uppercase tracking-wider rounded">
                <span>✦ TIMELINE EXPLORER</span>
              </div>
              <span className="text-[8px] font-mono font-black text-slate-500 uppercase">AUTOLAYOUT: ON</span>
            </div>

            {/* Split Screen View inside Right Card */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch flex-1">
              
              {/* Left Column of Right Panel: Timeline Navigation List */}
              <div className="md:col-span-5 relative pl-6 flex flex-col gap-4">
                {/* Timeline vertical dashed line */}
                <div className="absolute left-[11px] top-2 bottom-2 w-0.5 border-l-2 border-dashed border-black" />

                {experiences.map((exp, idx) => {
                  const isSelected = activeIdx === idx;
                  return (
                    <div
                      key={exp.id}
                      onClick={() => setActiveIdx(idx)}
                      className={`group relative flex items-center p-3 border-brutalist-thin rounded transition-all duration-150 cursor-pointer select-none bg-white ${
                        isSelected 
                          ? 'border-black bg-cv-yellow/10 shadow-brutalist-sm translate-x-[-1px] translate-y-[-1px]' 
                          : 'border-black/20 hover:border-black/50 hover:bg-slate-50'
                      }`}
                    >
                      {/* Timeline node square */}
                      <div className={`absolute left-[-29px] top-1/2 -translate-y-1/2 w-6 h-6 border-brutalist-thin flex items-center justify-center font-mono font-black text-xs text-black shadow-brutalist-sm ${exp.color} z-10 ${isSelected ? 'scale-105' : ''}`}>
                        {idx + 1}
                      </div>

                      {/* Summary details */}
                      <div className="flex-1 min-w-0 pr-1 text-left">
                        <h4 className="text-[11px] sm:text-xs font-black font-display text-black uppercase leading-tight tracking-tight truncate">
                          {exp.role}
                        </h4>
                        <p className="text-[8.5px] font-mono font-black text-slate-500 uppercase truncate mt-0.5">
                          {exp.company}
                        </p>
                      </div>

                      {/* Small UX hover arrow to view */}
                      {!isSelected && (
                        <span className="text-[7px] font-mono font-bold text-cv-pink uppercase tracking-wide opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-0.5 whitespace-nowrap ml-1.5">
                          <MousePointerClick className="w-2.5 h-2.5" />
                        </span>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Right Column of Right Panel: Active Details Panel (Selected card details shown here!) */}
              <div className="md:col-span-7 flex flex-col">
                <div className="bg-slate-50 border-brutalist shadow-brutalist-sm p-5 rounded-xl h-full flex flex-col justify-between relative group hover:bg-white transition-colors duration-150 min-h-[300px]">
                  
                  {/* Visual sticker indicator */}
                  <div className="absolute top-3 right-3 opacity-15 pointer-events-none select-none text-black">
                    <Briefcase className="w-8 h-8" />
                  </div>

                  <div>
                    {/* Duration and Date Header */}
                    <div className="flex items-center justify-between gap-2 border-b border-black/10 pb-2 mb-3 text-[9px] font-mono font-black text-slate-600 uppercase">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-black" />
                        {activeExp.period}
                      </span>
                      <span className="px-2 py-0.5 bg-white border-brutalist-thin rounded shadow-brutalist-sm text-black">
                        {activeExp.duration}
                      </span>
                    </div>

                    {/* Role Title */}
                    <h3 className="text-sm sm:text-base font-black font-display text-black uppercase leading-snug tracking-tight">
                      {activeExp.role}
                    </h3>

                    {/* Company Tag */}
                    <span className={`px-2 py-0.5 border border-black/25 text-[9px] font-mono font-black uppercase tracking-wider rounded inline-block mt-1.5 ${activeExp.companyColor}`}>
                      {activeExp.company}
                    </span>

                    {/* Highlights Bullet List */}
                    <ul className="space-y-2 mt-4 text-left">
                      {activeExp.highlights.map((pt, pIdx) => (
                        <li key={pIdx} className="text-[11px] text-black font-semibold leading-relaxed flex items-start gap-1.5">
                          <span className="text-cv-pink font-extrabold select-none font-mono mt-0.5">✦</span>
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Skills tags footer */}
                  <div className="flex flex-wrap gap-1 mt-4 pt-3 border-t border-black/10">
                    {activeExp.skills.map((s, sIdx) => (
                      <span key={sIdx} className="px-2 py-0.5 bg-white border-brutalist-thin text-[8px] font-mono font-bold text-black uppercase">
                        {s}
                      </span>
                    ))}
                  </div>

                </div>
              </div>

            </div>

            {/* Connect Action Footer */}
            <div className="flex items-center gap-3 pt-6 border-t-2 border-black mt-8">
              <button 
                onClick={scrollToContact}
                className="flex-1 py-2.5 bg-cv-pink text-black border-brutalist shadow-brutalist-sm text-[9.5px] font-mono font-black text-center uppercase tracking-wider hover:translate-x-[-1px] hover:translate-y-[-1px] transition-all cursor-pointer"
              >
                OPEN FOR OPPORTUNITIES
              </button>
              <button 
                onClick={scrollToContact}
                className="flex-1 py-2.5 bg-cv-cyan text-black border-brutalist shadow-brutalist-sm text-[9.5px] font-mono font-black text-center uppercase tracking-wider hover:translate-x-[-1px] hover:translate-y-[-1px] transition-all cursor-pointer"
              >
                LET'S CONNECT
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Experience;
