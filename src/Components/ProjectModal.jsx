import React from 'react';
import { X, Award, Calendar, Layers, CheckCircle2 } from 'lucide-react';

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#12101C]/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl bg-[#241B35] border border-[#8b5cf6]/40 rounded-3xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col">
        
        {/* Header Banner */}
        <div className="relative p-6 sm:p-8 bg-gradient-to-r from-[#8b5cf6]/20 via-[#241B35] to-[#12101C] border-b border-[#8b5cf6]/20">
          
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-[#12101C] border border-[#8b5cf6]/30 text-slate-300 hover:text-white hover:border-[#8b5cf6] transition-colors cursor-pointer shadow-sm"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Award Badge if present */}
          {project.award && (
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-300 text-xs font-bold mb-3">
              <Award className="w-4 h-4 text-amber-400" />
              <span>{project.award}</span>
            </div>
          )}

          <h3 className="text-2xl sm:text-3xl font-extrabold text-white pr-10">
            {project.title}
          </h3>

          <div className="flex flex-wrap items-center gap-4 mt-3 text-xs sm:text-sm text-slate-300">
            <span className="flex items-center gap-1 text-[#c4b5fd] font-mono font-bold">
              <Calendar className="w-4 h-4 text-[#8b5cf6]" />
              {project.date}
            </span>
            <span className="flex items-center gap-1 text-slate-300 font-bold">
              <Layers className="w-4 h-4 text-[#8b5cf6]" />
              {project.category}
            </span>
          </div>

        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          
          {/* Project Summary */}
          <div>
            <h4 className="text-sm font-bold uppercase text-[#8b5cf6] tracking-wider mb-2 font-mono">
              Overview & Objectives
            </h4>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-medium">
              {project.description}
            </p>
          </div>

          {/* Key Deliverables / Features */}
          {project.features && (
            <div>
              <h4 className="text-sm font-bold uppercase text-[#8b5cf6] tracking-wider mb-3 font-mono">
                Key Contributions & Highlights
              </h4>
              <div className="space-y-2">
                {project.features.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-sm text-slate-300 bg-[#12101C]/80 p-3 rounded-xl border border-slate-800 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-[#8b5cf6] mt-0.5 flex-shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tech Stack Tags */}
          <div>
            <h4 className="text-sm font-bold uppercase text-[#8b5cf6] tracking-wider mb-3 font-mono">
              Technologies Used
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, tIdx) => (
                <span
                  key={tIdx}
                  className="px-3 py-1 rounded-lg bg-[#12101C] border border-[#8b5cf6]/30 text-xs font-bold text-slate-200"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-6 bg-[#12101C] border-t border-[#8b5cf6]/20 flex items-center justify-between">
          <p className="text-xs text-slate-400 font-bold">Hariharan S • Portfolio Showcase</p>
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl bg-[#8b5cf6] hover:bg-[#7c3aed] text-white font-bold text-sm transition-colors cursor-pointer shadow-md"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};

export default ProjectModal;
