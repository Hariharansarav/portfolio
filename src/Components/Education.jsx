import React from 'react';
import { GraduationCap, Calendar, Building, BookOpen } from 'lucide-react';

const Education = () => {
  const educationList = [
    {
      id: 1,
      degree: 'B.Tech in Artificial Intelligence & Data Science',
      institution: 'KGiSL Institute of Technology',
      location: 'Coimbatore, Tamil Nadu',
      period: '2024 – Present',
      score: 'CGPA: 7.5 (6th Sem)',
      status: 'Current Program',
      isCurrent: true,
      highlights: [
        'Specializing in Machine Learning algorithms, Data Structures, and AI web applications.',
        'Recipient of the Best Paper Award for innovative AI application in tribal agriculture.',
        'Active contributor in full-stack project development and college technical symposiums.',
      ],
      color: 'bg-cv-pink',
    },
    {
      id: 2,
      degree: 'Diploma in Computer Engineering',
      institution: 'Sri Ranganathar Institute of Polytechnic College',
      location: 'Coimbatore, Tamil Nadu',
      period: '2021 – 2024',
      score: 'Score: 81%',
      status: 'Completed',
      isCurrent: false,
      highlights: [
        'Practical training covering relational databases, software design, and networking.',
        'Hands-on computer hardware lab assignments and troubleshooting.',
        'Graduated with distinction and strong records in core operating systems course.',
      ],
      color: 'bg-cv-green',
    },
  ];

  return (
    <section id="education" className="py-24 bg-cv-bg relative overflow-hidden">
      {/* Background Decorative Sticker */}
      <div className="absolute top-1/2 right-10 w-24 h-24 bg-cv-yellow border-brutalist rounded-full rotate-12 opacity-80 hidden md:flex font-mono font-bold text-center text-[10px] leading-tight shadow-brutalist-sm select-none pointer-events-none p-2 items-center justify-center uppercase">
        <span>Education Journey</span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center space-y-4 mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-cv-yellow text-black border-brutalist shadow-brutalist-sm text-xs font-mono font-bold uppercase tracking-wider">
            <GraduationCap className="w-4 h-4 text-black" />
            <span>ACADEMIC QUALIFICATIONS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black font-display text-black uppercase">
            EDUCATION & DEGREES<span className="text-cv-pink font-black text-4xl">.</span>
          </h2>
          <p className="text-black max-w-2xl mx-auto text-sm sm:text-base font-semibold font-body">
            Academic foundation in Artificial Intelligence, Data Science, and Computer Engineering.
          </p>
        </div>

        {/* EDUCATION CARDS GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Card 1: B.Tech - Styled as a Ticket Stub */}
          {educationList.slice(0, 1).map((edu) => (
            <div
              key={edu.id}
              className="flex border-brutalist rounded-2xl bg-white shadow-brutalist overflow-hidden relative group hover:rotate-[-0.5deg] transition-transform duration-200"
            >
              {/* Left Main Ticket Details */}
              <div className="flex-1 p-6 sm:p-8 flex flex-col justify-between">
                <div>
                  {/* Top line with period & score */}
                  <div className="flex items-center justify-between gap-2 mb-4 pb-4 border-b-2 border-black">
                    <span className="flex items-center gap-1.5 px-2.5 py-0.5 bg-black text-white text-[10px] font-mono font-bold rounded uppercase">
                      <Calendar className="w-3.5 h-3.5" />
                      {edu.period}
                    </span>
                    <span className="px-2.5 py-0.5 bg-cv-yellow border-brutalist-thin shadow-brutalist-sm text-xs font-mono font-bold text-black uppercase">
                      {edu.score}
                    </span>
                  </div>

                  {/* Degree Degree Title */}
                  <h3 className="text-lg sm:text-2xl font-black font-display text-black mb-2 uppercase leading-tight tracking-tight">
                    {edu.degree}
                  </h3>

                  {/* Institution */}
                  <div className="flex items-center gap-1.5 text-black text-xs sm:text-sm font-mono font-bold uppercase tracking-wider bg-cv-cyan/35 px-2.5 py-1 border-brutalist-thin rounded mb-6 self-start inline-flex">
                    <Building className="w-4 h-4 text-black" />
                    <span>{edu.institution}</span>
                  </div>

                  {/* Highlights list */}
                  <div className="space-y-3 mb-6">
                    {edu.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-black font-semibold leading-relaxed bg-slate-50 border-brutalist-thin p-3 rounded hover:bg-white transition-colors">
                        <span className="text-cv-pink font-extrabold text-base flex-shrink-0 mt-0.5 select-none font-mono">✦</span>
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer Info */}
                <div className="pt-4 border-t-2 border-black flex items-center justify-between text-[10px] font-mono font-bold text-black uppercase">
                  <span className="flex items-center gap-1.5">
                    <BookOpen className="w-3.5 h-3.5 text-black" />
                    {edu.location}
                  </span>
                  <span className="px-2.5 py-0.5 bg-black text-white rounded">{edu.status}</span>
                </div>
              </div>

              {/* Right Ticket Stub column */}
              <div className={`w-11 sm:w-12 border-l-2 border-dashed border-black ${edu.color} flex flex-col items-center justify-between py-4 select-none pointer-events-none relative`}>
                <div className="absolute -top-3 -left-[7px] w-3 h-3 bg-cv-bg border-2 border-black rounded-full" />
                <div className="absolute -bottom-3 -left-[7px] w-3 h-3 bg-cv-bg border-2 border-black rounded-full" />

                <span className="font-mono text-[8px] font-black text-black rotate-90 my-8 tracking-widest uppercase whitespace-nowrap">
                  PASS STUB // DEGREE
                </span>
                
                <div className="w-5 sm:w-6 h-28 barcode-stripes border-brutalist-thin rounded" />
              </div>
            </div>
          ))}

          {/* Card 2: Diploma - Styled as a Folder File */}
          {educationList.slice(1, 2).map((edu) => (
            <div key={edu.id} className="relative pt-6">
              
              {/* Folder tab */}
              <div className="absolute top-0 left-6 sm:left-10 -translate-y-1/2 flex items-center">
                <div className={`px-4 py-1.5 ${edu.color} text-black border-brutalist shadow-brutalist-sm font-mono font-bold text-[10px] sm:text-xs uppercase tracking-wider rounded-t-lg z-10`}>
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    {edu.period}
                  </span>
                </div>
                <div className="ml-2 px-2.5 py-1 bg-white border-brutalist-thin shadow-brutalist-sm text-[9px] font-mono font-bold text-black uppercase tracking-wider rounded">
                  {edu.score}
                </div>
              </div>

              {/* Main Folder Box */}
              <div className="bg-white border-brutalist shadow-brutalist rounded-b-xl rounded-tr-xl p-6 sm:p-8 hover:bg-slate-50 transition-colors duration-200 min-h-[420px] flex flex-col justify-between">
                <div>
                  
                  {/* Title Row */}
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 border-b-2 border-black pb-4 mb-4 mt-2">
                    <div>
                      {/* Degree Title */}
                      <h3 className="text-lg sm:text-2xl font-black font-display text-black uppercase leading-tight tracking-tight">
                        {edu.degree}
                      </h3>

                      {/* Institution */}
                      <div className="flex items-center gap-1.5 text-black text-xs sm:text-sm font-mono font-bold uppercase tracking-wider bg-cv-cyan/35 px-2.5 py-1 border-brutalist-thin rounded mt-2 self-start inline-flex">
                        <Building className="w-4 h-4 text-black" />
                        <span>{edu.institution}</span>
                      </div>
                    </div>
                  </div>

                  {/* Highlights list */}
                  <div className="space-y-3 mb-6">
                    {edu.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-black font-semibold leading-relaxed bg-slate-50 border-brutalist-thin p-3 rounded hover:bg-white transition-colors">
                        <span className="text-cv-pink font-extrabold text-base flex-shrink-0 mt-0.5 select-none font-mono">✦</span>
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>

                </div>

                {/* Footer Info */}
                <div className="pt-4 border-t-2 border-black flex items-center justify-between text-[10px] font-mono font-bold text-black uppercase">
                  <span className="flex items-center gap-1.5">
                    <BookOpen className="w-3.5 h-3.5 text-black" />
                    {edu.location}
                  </span>
                  <span className="px-2.5 py-0.5 bg-black text-white rounded">{edu.status}</span>
                </div>

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Education;
