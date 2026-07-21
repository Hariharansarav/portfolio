import React from 'react';
import { Briefcase, Calendar, MapPin, ChevronRight, Sparkles, Building2, CheckCircle2 } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      role: 'Full Stack Developer Intern',
      company: 'KG Agile',
      location: 'Coimbatore',
      period: 'Feb 2026 – Present',
      status: 'Current Role',
      isCurrent: true,
      description:
        'Engaged in full-stack web application engineering utilizing Next.js, React, Express.js, and MongoDB. Responsible for frontend components, backend REST API design, and UI performance optimizations.',
      highlights: [
        'Worked on full-stack web application development using Next.js, React.js, Express.js, and MongoDB.',
        'Contributed to frontend development, backend integration, and REST API implementation.',
        'Used Postman for comprehensive API testing and data handling validation.',
        'Engineered UI content layouts and responsive interface improvements for superior UX.',
      ],
      skills: ['Next.js', 'React.js', 'Express.js', 'MongoDB', 'REST APIs', 'Postman', 'UI/UX'],
    },
    {
      id: 2,
      role: 'Web App Development & Backend Engineering Intern',
      company: 'Lakshmi Life Sciences Private Limited (LLS)',
      location: 'Coimbatore',
      period: 'Jun 2025 – Jul 2025',
      status: 'Completed',
      isCurrent: false,
      description:
        'Developed full-stack web solutions and backend services with SQL database connectivity, focusing on workflow management systems and REST API endpoints.',
      highlights: [
        'Developed full-stack applications using React.js, Node.js, Express.js, and SQL databases.',
        'Built REST APIs and implemented CRUD operations for workflow and data management system.',
        'Worked on seamless frontend and backend integration with responsive UI design.',
        'Improved application performance through efficient database connectivity and server caching.',
      ],
      skills: ['React.js', 'Node.js', 'Express.js', 'SQL Databases', 'CRUD Operations', 'REST APIs'],
    },
    {
      id: 3,
      role: 'IoT Intern',
      company: 'Ascentz Technologies',
      location: 'Coimbatore',
      period: 'Nov 2023 – Dec 2023',
      status: 'Completed',
      isCurrent: false,
      description:
        'Specialized internship training covering Internet of Things architecture, hardware sensor connectivity, and real-time monitoring systems.',
      highlights: [
        'Completed internship training focused on Internet of Things (IoT) concepts and applications.',
        'Gained practical exposure to IoT technologies, device connectivity, and real-time system monitoring.',
        'Learned fundamentals of sensor integration, embedded systems, and smart automation concepts.',
        'Demonstrated strong learning agility and teamwork in embedded systems troubleshooting.',
      ],
      skills: ['IoT Concepts', 'Sensor Integration', 'Embedded Systems', 'Real-Time Monitoring'],
    },
    {
      id: 4,
      role: 'Administration Intern',
      company: 'SRI Valves',
      location: 'Edayarpalayam',
      period: 'Jan 2023',
      status: 'Completed',
      isCurrent: false,
      description:
        'Assisted with operational administrative workflows, documentation management, and team data organization.',
      highlights: [
        'Assisted in daily office administration and operational activities to ensure smooth workflow management.',
        'Managed office files, records, and documentation with proper organization and data handling.',
        'Supported administrative tasks related to data management and document maintenance.',
        'Coordinated with team members to maintain accurate records and improve office efficiency.',
      ],
      skills: ['Workflow Management', 'Data Handling', 'Office Operations', 'Team Coordination'],
    },
  ];

  return (
    <section id="experience" className="py-24 bg-[#12101C] relative overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#8b5cf6]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#241B35] border border-[#8b5cf6]/40 text-[#c4b5fd] text-xs font-bold uppercase tracking-wider">
            <Briefcase className="w-3.5 h-3.5 text-[#8b5cf6]" />
            <span>Work Experience</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Internships & <span className="gradient-text-violet font-black">Practical Roles</span>
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto text-sm sm:text-base">
            Hands-on technical experience across 4 internships in full-stack web engineering, API design, database systems, and IoT applications.
          </p>
        </div>

        {/* TIMELINE CARDS GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {experiences.map((exp) => (
            <div
              key={exp.id}
              className="glass-card-violet rounded-3xl p-6 sm:p-8 border border-[#8b5cf6]/20 bg-[#241B35]/80 hover:border-[#8b5cf6] transition-all flex flex-col justify-between"
            >
              <div>
                
                {/* Header Row */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-4 pb-4 border-b border-slate-800">
                  <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#12101C] border border-[#8b5cf6]/30 text-[#c4b5fd] text-xs font-mono font-bold">
                    <Calendar className="w-3.5 h-3.5 text-[#8b5cf6]" />
                    {exp.period}
                  </span>

                  {exp.isCurrent ? (
                    <span className="px-3 py-1 rounded-full text-xs font-extrabold bg-[#8b5cf6]/20 text-[#c4b5fd] border border-[#8b5cf6]/50 uppercase tracking-wider animate-pulse">
                      Current Role
                    </span>
                  ) : (
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#12101C] text-slate-400 border border-slate-800">
                      Completed
                    </span>
                  )}
                </div>

                {/* Role & Company */}
                <h3 className="text-xl font-bold text-white mb-1 group-hover:text-[#c4b5fd] transition-colors">
                  {exp.role}
                </h3>

                <div className="flex items-center gap-3 text-xs sm:text-sm font-bold mb-4">
                  <span className="text-[#8b5cf6] flex items-center gap-1.5">
                    <Building2 className="w-4 h-4 text-[#8b5cf6]" />
                    {exp.company}
                  </span>
                  <span className="text-slate-600">•</span>
                  <span className="flex items-center gap-1 text-slate-400 font-medium">
                    <MapPin className="w-3.5 h-3.5 text-slate-500" />
                    {exp.location}
                  </span>
                </div>

                {/* Description */}
                <p className="text-sm text-slate-300 mb-4 leading-relaxed font-medium">
                  {exp.description}
                </p>

                {/* Highlights */}
                <div className="space-y-2 mb-6">
                  {exp.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 font-medium">
                      <CheckCircle2 className="w-4 h-4 text-[#8b5cf6] mt-0.5 flex-shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>

              </div>

              {/* Skills */}
              <div className="flex flex-wrap items-center gap-2 pt-4 border-t border-slate-800">
                <span className="text-xs text-slate-400 font-mono mr-1 font-bold">Skills:</span>
                {exp.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="px-2.5 py-1 rounded-lg bg-[#12101C] border border-[#8b5cf6]/30 text-xs font-bold text-slate-300 hover:border-[#8b5cf6] hover:text-white transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Experience;
