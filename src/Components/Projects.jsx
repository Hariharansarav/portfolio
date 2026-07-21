import React, { useState } from 'react';
import { FolderGit2, Award, ArrowUpRight } from 'lucide-react';
import ProjectModal from './ProjectModal';

const Projects = () => {
  const [activeTab, setActiveTab] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const projectsData = [
    {
      id: 1,
      title: 'Smart Tribal Farming Project',
      status: 'Ongoing',
      date: 'Present (Ongoing)',
      category: 'AI & Data Science',
      award: 'Best Paper Award Winner 🏆',
      techStack: 'React.js, Node.js, AI/ML, Data Analysis, Python, Web Tech',
      tags: ['React.js', 'AI/ML', 'Data Analysis', 'Python', 'Web Tech'],
      description:
        'An AI-powered crop suitability and planning system tailored for tribal farmers to optimize crop yield and recommend sustainable farming strategies.',
      features: [
        'Developing an AI-powered crop suitability and planning system for tribal farmers.',
        'Completed frontend web development with intuitive, highly accessible responsive UI design.',
        'Integrating machine learning models for accurate crop prediction and farming recommendations.',
        'Collaborating with research team members on data-driven agricultural solutions.',
        'Awarded the prestigious Best Paper Award for innovative application of AI in agriculture.',
      ],
      gradient: 'from-[#8b5cf6]/20 via-[#241B35] to-[#12101C] border-[#8b5cf6]/40',
      iconColor: 'text-[#8b5cf6]',
    },
    {
      id: 2,
      title: 'Audit Management System',
      status: 'Completed',
      date: 'Oct 2025',
      category: 'Full Stack',
      award: null,
      techStack: 'React.js, Node.js, Express.js, MSSQL',
      tags: ['React.js', 'Node.js', 'Express.js', 'MSSQL', 'REST API', 'CRUD'],
      description:
        'A comprehensive full-stack enterprise Audit Management System with REST API integration and MSSQL database connectivity for audit tracking and observations.',
      features: [
        'Developed a full-stack Audit Management System with robust REST API integration.',
        'Connected seamlessly to MSSQL database for secure data persistence.',
        'Implemented complete CRUD functionalities for managing audit cycles, observations, and workflow operations.',
        'Designed responsive workflow-based user interfaces and optimized backend query performance.',
      ],
      gradient: 'from-[#241B35] to-[#12101C] border-[#8b5cf6]/20',
      iconColor: 'text-[#8b5cf6]',
    },
    {
      id: 3,
      title: 'Students Choice Global',
      status: 'Completed',
      date: 'March 2025',
      category: 'Web Apps',
      award: null,
      techStack: 'Next.js, Node.js, Express.js',
      tags: ['Next.js', 'Node.js', 'Express.js', 'REST API', 'Dynamic Data'],
      description:
        'Collaborative full-stack web application built during the KG Agile internship with server-side rendered pages and dynamic data handling.',
      features: [
        'Worked on full-stack web application development as part of a collaborative team during the KG Agile internship.',
        'Developed and maintained responsive web pages using Next.js with server-side components.',
        'Engineered dynamic REST API connectivity for fast data synchronization across user modules.',
        'Contributed to dynamic data handling and feature development across multiple application sub-modules.',
      ],
      gradient: 'from-[#241B35] to-[#12101C] border-[#8b5cf6]/20',
      iconColor: 'text-[#8b5cf6]',
    },
    {
      id: 4,
      title: 'Backend API Integration & UI Development – V Do Naturals',
      status: 'Completed',
      date: 'April 2025',
      category: 'Full Stack',
      award: null,
      techStack: 'Node.js, Express.js, JavaScript, E-Commerce UI',
      tags: ['Node.js', 'Express.js', 'JavaScript', 'Admin Panel', 'E-Commerce'],
      description:
        'E-commerce admin panel development and backend API integration with dynamic data synchronization for product pages and inventory management.',
      features: [
        'Worked on admin panel development and backend API integration for an e-commerce web application.',
        'Handled frontend-backend connectivity and dynamic data integration for daily website operations.',
        'Contributed during the UI/UX design phase by framing and organizing content for product pages and section layouts.',
      ],
      gradient: 'from-[#241B35] to-[#12101C] border-[#8b5cf6]/20',
      iconColor: 'text-[#8b5cf6]',
    },
    {
      id: 5,
      title: 'Green Wheels Supply Chain Website',
      status: 'Completed',
      date: 'Dec 2023',
      category: 'Web Apps',
      award: null,
      techStack: 'HTML5, CSS3, JavaScript',
      tags: ['HTML5', 'CSS3', 'JavaScript', 'Responsive UI', 'Accessibility'],
      description:
        'Responsive supply chain business website featuring clean navigation layouts, user-friendly interface design, and cross-device performance.',
      features: [
        'Developed a responsive business website with structured navigation and user-friendly interface design.',
        'Worked on frontend development and responsive layouts for better accessibility across mobile, tablet, and desktop.',
        'Improved overall website presentation, performance, and user interaction design.',
      ],
      gradient: 'from-[#241B35] to-[#12101C] border-[#8b5cf6]/20',
      iconColor: 'text-[#8b5cf6]',
    },
  ];

  const filterTabs = ['All', 'Full Stack', 'Web Apps', 'AI & Data Science'];

  const filteredProjects = activeTab === 'All'
    ? projectsData
    : projectsData.filter((p) => p.category === activeTab);

  return (
    <section id="projects" className="py-24 bg-[#12101C] relative overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-[#8b5cf6]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#241B35] border border-[#8b5cf6]/40 text-[#c4b5fd] text-xs font-bold uppercase tracking-wider">
            <FolderGit2 className="w-3.5 h-3.5 text-[#8b5cf6]" />
            <span>Featured Innovations</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Projects & <span className="gradient-text-violet font-black">Case Studies</span>
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto text-sm sm:text-base">
            Showcase of full-stack web applications, e-commerce solutions, REST API architectures, and AI-driven agricultural systems.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {filterTabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${
                activeTab === tab
                  ? 'bg-[#8b5cf6] text-white shadow-lg shadow-[#8b5cf6]/35'
                  : 'bg-[#241B35] text-slate-300 hover:text-white border border-[#8b5cf6]/20'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className={`glass-card-violet rounded-3xl p-6 border bg-[#241B35]/90 flex flex-col justify-between relative group hover:border-[#8b5cf6] transition-all duration-300 ${project.gradient}`}
            >
              <div>
                
                {/* Top Badge Row */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="px-3 py-1 rounded-full bg-[#12101C] border border-[#8b5cf6]/30 text-[#c4b5fd] text-[11px] font-mono font-bold">
                    {project.date}
                  </span>
                  
                  {project.award && (
                    <span className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-300 text-[11px] font-bold">
                      <Award className="w-3 h-3 text-amber-400" />
                      <span>Best Paper</span>
                    </span>
                  )}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#c4b5fd] transition-colors line-clamp-2">
                  {project.title}
                </h3>

                {/* Category & Tech */}
                <p className="text-xs text-[#8b5cf6] font-mono mb-3 font-bold">
                  {project.techStack}
                </p>

                {/* Description */}
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6 line-clamp-3 font-medium">
                  {project.description}
                </p>

              </div>

              <div>
                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.tags.slice(0, 4).map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-lg bg-[#12101C] border border-[#8b5cf6]/30 text-[11px] font-semibold text-slate-300"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 4 && (
                    <span className="px-2 py-1 rounded-lg bg-[#12101C] border border-[#8b5cf6]/30 text-[11px] font-mono font-bold text-[#8b5cf6]">
                      +{project.tags.length - 4}
                    </span>
                  )}
                </div>

                {/* Card Action */}
                <button
                  onClick={() => setSelectedProject(project)}
                  className="w-full py-3 rounded-xl bg-[#12101C] hover:bg-[#8b5cf6] text-slate-200 hover:text-white border border-[#8b5cf6]/30 hover:border-[#8b5cf6] font-bold text-xs transition-all duration-200 flex items-center justify-center gap-2 group/btn cursor-pointer shadow-sm"
                >
                  <span>View Details & Highlights</span>
                  <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Modal Popup */}
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
