import React from 'react';
import { GraduationCap, Calendar, CheckCircle2, Building, BookOpen } from 'lucide-react';

const Education = () => {
  const educationList = [
    {
      id: 1,
      degree: 'B.Tech in Artificial Intelligence & Data Science',
      institution: 'KGiSL Institute of Technology',
      location: 'Coimbatore, Tamil Nadu',
      period: '2024 – Present',
      score: 'CGPA: 7.5 till 6th Sem',
      status: 'Current Program',
      isCurrent: true,
      highlights: [
        'Specializing in Machine Learning algorithms, Data Structures, and AI web applications.',
        'Recipient of the Best Paper Award for innovative AI application in tribal agriculture.',
        'Active contributor in full-stack project development and college technical symposiums.',
      ],
      color: 'border-[#8b5cf6]/40 text-[#c4b5fd] bg-[#8b5cf6]/20',
    },
    {
      id: 2,
      degree: 'Diploma in Computer Engineering',
      institution: 'Sri Ranganathar Institute of Polytechnic College',
      location: 'Coimbatore, Tamil Nadu',
      period: '2021 – 2024',
      score: 'Percentage: 81%',
      status: 'Completed',
      isCurrent: false,
      highlights: [
        'Graduated with distinction (81% aggregate score).',
        'Strong foundation in computer hardware, database design, Java programming, and web development.',
        'Completed hands-on practical lab projects and industrial internship trainings.',
      ],
      color: 'border-slate-700 text-slate-300 bg-[#12101C]',
    },
  ];

  return (
    <section id="education" className="py-24 bg-[#12101C] relative overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-[#8b5cf6]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#241B35] border border-[#8b5cf6]/40 text-[#c4b5fd] text-xs font-bold uppercase tracking-wider">
            <GraduationCap className="w-3.5 h-3.5 text-[#8b5cf6]" />
            <span>Academic Qualifications</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Education & <span className="gradient-text-violet font-black">Degrees</span>
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto text-sm sm:text-base">
            Academic foundation in Artificial Intelligence, Data Science, and Computer Engineering.
          </p>
        </div>

        {/* EDUCATION CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {educationList.map((edu) => (
            <div
              key={edu.id}
              className="glass-card-violet rounded-3xl p-6 sm:p-8 border border-[#8b5cf6]/20 bg-[#241B35]/80 hover:border-[#8b5cf6] transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                
                {/* Header Badge */}
                <div className="flex items-center justify-between gap-2 mb-4 pb-4 border-b border-slate-800">
                  <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#12101C] border border-[#8b5cf6]/30 text-slate-200 text-xs font-mono font-bold">
                    <Calendar className="w-3.5 h-3.5 text-[#8b5cf6]" />
                    {edu.period}
                  </span>

                  <span className={`px-3 py-1 rounded-full text-xs font-extrabold border ${edu.color}`}>
                    {edu.score}
                  </span>
                </div>

                {/* Degree Title */}
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 leading-snug">
                  {edu.degree}
                </h3>

                {/* Institution */}
                <div className="flex items-center gap-2 text-slate-300 text-sm font-bold mb-6">
                  <Building className="w-4 h-4 text-[#8b5cf6] flex-shrink-0" />
                  <span>{edu.institution}</span>
                </div>

                {/* Highlights */}
                <div className="space-y-2.5 mb-6">
                  {edu.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 font-medium">
                      <CheckCircle2 className="w-4 h-4 text-[#8b5cf6] mt-0.5 flex-shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>

              </div>

              <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400 font-bold">
                <span className="flex items-center gap-1">
                  <BookOpen className="w-3.5 h-3.5 text-slate-500" />
                  {edu.location}
                </span>
                <span className="text-[#c4b5fd]">{edu.status}</span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Education;
