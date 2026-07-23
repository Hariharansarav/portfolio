import React from 'react';
import { X, Award, Calendar, Layers, ArrowUpRight } from 'lucide-react';

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-white border-brutalist shadow-brutalist-lg rounded-2xl overflow-hidden max-h-[85vh] flex flex-col">
        
        {/* Header Banner - colored by project theme */}
        <div className={`relative p-6 sm:p-8 ${project.color || 'bg-cv-yellow'} border-b-3 border-black text-black`}>
          
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 bg-white hover:bg-cv-pink border-brutalist-thin text-black shadow-brutalist-sm rounded transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-4 h-4 stroke-[3px]" />
          </button>

          {/* Award Badge if present */}
          {project.award && (
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-cv-pink border-brutalist-thin text-black text-xs font-bold font-mono uppercase tracking-wide mb-3 shadow-brutalist-sm">
              <Award className="w-3.5 h-3.5 text-black" />
              <span>{project.award}</span>
            </div>
          )}

          <h3 className="text-xl sm:text-2xl font-black font-display text-black pr-10 tracking-tight leading-tight uppercase">
            {project.title}
          </h3>

          <div className="flex flex-wrap items-center gap-4 mt-3 text-xs font-mono font-bold text-slate-800">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5" />
              {project.date}
            </span>
            <span className="flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5" />
              {project.category}
            </span>
          </div>

        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 bg-white text-black">
          
          {/* Project Summary */}
          <div>
            <h4 className="text-[10px] font-mono font-bold uppercase text-slate-700 tracking-wider mb-2">
              Overview & Objectives
            </h4>
            <p className="text-black text-sm sm:text-base leading-relaxed font-semibold font-body">
              {project.description}
            </p>
          </div>

          {/* Key Deliverables / Features */}
          {project.features && (
            <div>
              <h4 className="text-[10px] font-mono font-bold uppercase text-slate-700 tracking-wider mb-3">
                Key Contributions & Highlights
              </h4>
              <div className="space-y-3">
                {project.features.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-black bg-slate-50 p-3.5 rounded border-brutalist-thin font-semibold leading-relaxed hover:bg-slate-100/50 transition-colors">
                    <span className="text-cv-pink font-extrabold text-base flex-shrink-0 mt-0.5 select-none font-mono">✦</span>
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tech Stack Tags */}
          <div>
            <h4 className="text-[10px] font-mono font-bold uppercase text-slate-700 tracking-wider mb-3">
              Technologies Used
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {project.tags.map((tag, tIdx) => (
                <span
                  key={tIdx}
                  className="px-2.5 py-1 bg-white border-brutalist-thin text-[10px] sm:text-xs font-mono font-bold text-black uppercase hover:bg-cv-yellow transition-colors cursor-pointer"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-6 bg-slate-50 border-t-3 border-black flex items-center justify-between">
          <p className="text-[10px] sm:text-xs text-black font-black font-mono uppercase tracking-wider">HS • SHOWCASE</p>
          <div className="flex items-center gap-3">
            <a
              href={project.liveLink}
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 bg-white border-brutalist shadow-brutalist-sm text-black hover:bg-black/5 font-mono font-bold text-xs uppercase transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <span>Visit Site</span>
              <ArrowUpRight className="w-4 h-4 text-black" />
            </a>
            <button
              onClick={onClose}
              className="px-5 py-2.5 bg-cv-green text-black btn-brutalist text-xs cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ProjectModal;
