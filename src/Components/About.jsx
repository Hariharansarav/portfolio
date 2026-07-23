import React from 'react';
import { User, Code, Layout, Layers } from 'lucide-react';
import profileImage from '../assets/Hariharan.png';

const About = () => {
  const highlights = [
    'Full-Stack Web Development (React.js, Next.js, Node.js, Express.js)',
    'UI/UX Wireframing, Prototypes & Design Systems (Figma, Photoshop)',
    'Relational & Non-Relational Database Integration (MSSQL, MongoDB)',
    'Agile Collaboration & Fast Learning for Emerging Technologies',
  ];

  const coreFocusAreas = [
    {
      title: 'Frontend Engineering',
      description: 'Building fast, accessible, and responsive user interfaces with React, Next.js, and Tailwind CSS.',
      icon: Code,
      color: 'bg-cv-yellow',
    },
    {
      title: 'Backend & APIs',
      description: 'Designing scalable RESTful APIs, middleware, authentication, and database schemas with Node.js & Express.',
      icon: Layers,
      color: 'bg-cv-pink',
    },
    {
      title: 'UI/UX Design',
      description: 'Framing wireframes, design systems, interactive prototypes, and modern component aesthetics.',
      icon: Layout,
      color: 'bg-cv-cyan',
    },
  ];

  return (
    <section id="about" className="py-24 bg-cv-bg relative overflow-hidden">
      {/* Decorative background stamps */}
      <div className="absolute top-20 right-10 w-24 h-24 bg-cv-yellow border-brutalist rounded-full flex items-center justify-center rotate-6 opacity-80 hidden md:flex font-mono font-bold text-center text-[10px] leading-tight shadow-brutalist-sm select-none pointer-events-none p-2 uppercase z-0">
        <span>Creative fullstack systems</span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Section Header (Outside the Card) */}
        <div className="text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-cv-yellow text-black border-brutalist shadow-brutalist-sm text-xs font-mono font-bold uppercase tracking-wider">
            <User className="w-4 h-4 text-black" />
            <span>GET TO KNOW ME</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black font-display text-black uppercase">
            ABOUT ME<span className="text-cv-pink font-black text-4xl">.</span>
          </h2>
          <p className="text-black max-w-2xl mx-auto text-sm sm:text-base font-semibold font-body">
            Full Stack Developer & UI/UX Designer specializing in clean interfaces and robust systems.
          </p>
        </div>

        {/* WHOLE CARD DOSSIER CONTAINER */}
        <div className="bg-white border-brutalist shadow-brutalist-lg rounded-2xl p-6 sm:p-10 lg:p-12 relative overflow-hidden">
          
          {/* Dossier Header Index bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b-3 border-black pb-6 mb-8 text-black">
            <div className="flex items-center gap-3 font-mono font-black text-[10px] sm:text-xs uppercase tracking-wider">
              <span className="bg-black text-white px-2 py-0.5 rounded">DOSSIER</span>
              <span className="text-slate-800">REF: ACCESS_FILE_07 // HARIHARANSARAV</span>
            </div>
            
            {/* Visual Mini Barcode */}
            <div className="flex items-center gap-1.5 self-start sm:self-auto">
              <div className="w-20 h-6 barcode-stripes border-brutalist-thin rounded" />
              <span className="font-mono text-[8px] font-bold">STATUS: OK</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Left Column inside card: Profile ID Proof card */}
            <div className="lg:col-span-5 flex justify-center w-full">
              <div className="relative w-full max-w-sm">
                
                {/* ID badge card body */}
                <div className="bg-slate-50 border-brutalist shadow-brutalist rounded-xl p-6 relative flex flex-col items-center text-center overflow-hidden hover:rotate-[-0.5deg] transition-transform duration-200">
                  
                  {/* Lanyard slot punch */}
                  <div className="w-12 h-2.5 bg-white border-2 border-black rounded-full mb-4 shadow-inner" />

                  {/* ID Card Banner */}
                  <div className="w-full bg-cv-pink text-black border-brutalist-thin py-1 px-4 mb-4 text-[9px] font-mono font-black uppercase tracking-widest shadow-brutalist-sm">
                    IDENTIFICATION ACCESS CARD
                  </div>

                  {/* Profile Photo */}
                  <div className="relative mb-4">
                    <img
                      src={profileImage}
                      alt="Hariharan S Profile Photo"
                      className="w-36 h-36 border-brutalist object-cover bg-white shadow-brutalist-sm relative z-10"
                    />
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full bg-cv-yellow border-brutalist-thin shadow-brutalist-sm flex items-center justify-center font-mono font-black text-[7px] text-black uppercase z-20">
                      APPROVED
                    </div>
                  </div>

                  {/* ID Card Details Fields (Short & Sweet!) */}
                  <div className="w-full space-y-2 text-left bg-white border-brutalist-thin p-4 rounded font-mono text-black shadow-brutalist-sm">
                    <div>
                      <span className="text-[7px] text-slate-500 font-bold block uppercase leading-none">HOLDER NAME</span>
                      <span className="text-sm font-black font-display uppercase leading-tight tracking-tight">HARIHARAN S.</span>
                    </div>
                    <div className="grid grid-cols-2 gap-2 border-t border-black/10 pt-2">
                      <div>
                        <span className="text-[7px] text-slate-500 font-bold block uppercase leading-none">INTERESTED FIELDS</span>
                        <span className="text-[9px] font-black uppercase leading-tight">UI/UX & FULLSTACK</span>
                      </div>
                      <div>
                        <span className="text-[7px] text-slate-500 font-bold block uppercase leading-none">LOCATION</span>
                        <span className="text-[9px] font-black uppercase leading-tight">COIMBATORE</span>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-2 border-t border-black/10 pt-2">
                      <div>
                        <span className="text-[7px] text-slate-500 font-bold block uppercase leading-none">STATUS</span>
                        <span className="px-1.5 py-0.5 bg-cv-green border-brutalist-thin text-[8px] font-black uppercase tracking-wider rounded shadow-brutalist-sm inline-block">
                          ACTIVE
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Barcode Strip */}
                  <div className="w-full mt-4">
                    <div className="w-full h-8 barcode-stripes border-brutalist-thin rounded" />
                    <span className="text-[7px] font-mono font-bold text-slate-600 mt-1 block uppercase">ID CODE: 9791680352-A</span>
                  </div>

                </div>
              </div>
            </div>

            {/* Right Column inside card: Bio paragraphs, qualifications and highlights */}
            <div className="lg:col-span-7 space-y-6">
              <h3 className="text-xl sm:text-2xl font-black text-black leading-snug uppercase font-display">
                Merging visual user layouts with <span className="bg-cv-pink px-2 border-brutalist-thin shadow-brutalist-sm py-0.5 inline-block rotate-[-0.5deg]">reliable system engineering</span>.
              </h3>

              <p className="text-black text-sm sm:text-base leading-relaxed font-body font-medium">
                I am an enthusiastic <strong className="font-extrabold text-black">UI/UX Designer & Full Stack Developer</strong>. 
                I specialize in building responsive, modern web applications from scratch, combining visual aesthetics with optimized backend APIs. My goal is to design simple, elegant, and functional digital experiences.
              </p>

              {/* Checklist Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {highlights.map((item, index) => (
                  <div key={index} className="flex items-start gap-2.5 bg-slate-50 border-brutalist-thin shadow-brutalist-sm p-3 rounded hover:bg-cv-cyan/10 transition-colors">
                    <span className="text-cv-pink font-black text-base flex-shrink-0 mt-0.5 select-none font-mono">✦</span>
                    <span className="text-xs sm:text-sm text-black font-bold font-body">{item}</span>
                  </div>
                ))}
              </div>

            </div>

          </div>

          {/* Core Focus Area Grid */}
          <div className="mt-10 pt-8 border-t-3 border-black">
            <h4 className="text-xs font-black text-black uppercase tracking-wider mb-6 font-mono border-l-3 border-black pl-2">
              Core Areas of Expertise
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {coreFocusAreas.map((area, idx) => (
                <div
                  key={idx}
                  className="bg-slate-50 border-brutalist-thin shadow-brutalist rounded-xl p-5 hover:bg-cv-yellow transition-all duration-200 group relative hover:rotate-[0.5deg]"
                >
                  <div className={`w-12 h-12 rounded ${area.color} border-brutalist flex items-center justify-center mb-4 group-hover:scale-105 transition-transform text-black`}>
                    <area.icon className="w-6 h-6 stroke-[2.5px]" />
                  </div>
                  <h5 className="text-base font-black text-black mb-2 font-display uppercase tracking-wide group-hover:underline">
                    {area.title}
                  </h5>
                  <p className="text-xs sm:text-sm text-black leading-relaxed font-semibold font-body">
                    {area.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default About;
