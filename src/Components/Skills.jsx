import React, { useState } from 'react';
import { Cpu, Power, Sliders, Volume2, Database } from 'lucide-react';

const Skills = () => {
  const [mixerPower, setMixerPower] = useState(true);
  const [boostActive, setBoostActive] = useState(false);
  const [selectedSkill, setSelectedSkill] = useState(null);

  const skillsData = [
    { name: 'React.js', category: 'Frontend', type: 'Library', color: 'bg-cv-yellow', glow: '#FFDE4D', desc: 'Building dynamic and fast client interfaces.' },
    { name: 'Next.js', category: 'Frontend', type: 'SSR Framework', color: 'bg-cv-pink', glow: '#F472B6', desc: 'Server-side rendering and static page builds.' },
    { name: 'Node.js & Express', category: 'Backend', type: 'API Runtime', color: 'bg-cv-cyan', glow: '#22D3EE', desc: 'Scalable RESTful API and backend routing.' },
    { name: 'Figma UI/UX', category: 'Design', type: 'Design Tool', color: 'bg-cv-purple', glow: '#C084FC', desc: 'Wireframing, prototypes, and layouts.' },
    { name: 'Python', category: 'Backend', type: 'Language', color: 'bg-cv-green', glow: '#A3E635', desc: 'Data structures, scripting, and ML models.' },
    { name: 'MongoDB', category: 'Backend', type: 'NoSQL Database', color: 'bg-cv-orange', glow: '#FB923C', desc: 'Document schemas and dynamic databases.' },
    { name: 'MSSQL / MySQL', category: 'Backend', type: 'Relational DB', color: 'bg-cv-yellow', glow: '#FFDE4D', desc: 'Queries, relational modeling, and indexes.' },
    { name: 'JavaScript', category: 'Frontend', type: 'Language', color: 'bg-cv-green', glow: '#A3E635', desc: 'DOM manipulation and ES6+ asynchronous features.' },
    { name: 'HTML5 & CSS3', category: 'Frontend', type: 'Structure', color: 'bg-cv-purple', glow: '#C084FC', desc: 'Semantic layouts and responsive flexbox grids.' },
    { name: 'Tailwind CSS', category: 'Frontend', type: 'Styling', color: 'bg-cv-yellow', glow: '#FFDE4D', desc: 'Utility-first framework and layout configuration.' },
    { name: 'Git & GitHub', category: 'Tools', type: 'Version Control', color: 'bg-cv-pink', glow: '#F472B6', desc: 'Code repositories and collaborative workflows.' },
    { name: 'Adobe Photoshop', category: 'Design', type: 'Graphic Editor', color: 'bg-cv-cyan', glow: '#22D3EE', desc: 'Image composition and asset editing.' },
    { name: 'Adobe Illustrator', category: 'Design', type: 'Vector Design', color: 'bg-cv-orange', glow: '#FB923C', desc: 'Vector logos, branding assets, and wireframes.' },
    { name: 'IoT Concepts', category: 'Tools', type: 'Embedded Stack', color: 'bg-cv-green', glow: '#A3E635', desc: 'Hardware routing, sensor integration, and triggers.' },
    { name: 'Java', category: 'Backend', type: 'System Language', color: 'bg-cv-pink', glow: '#F472B6', desc: 'OOP architectures and algorithm development.' }
  ];

  // Map each skill's active toggle state
  const [activeToggles, setActiveToggles] = useState(
    skillsData.reduce((acc, curr) => {
      acc[curr.name] = true; // Default all skills engaged
      return acc;
    }, {})
  );

  const handleToggle = (name) => {
    if (!mixerPower) return; // Can't toggle if console is powered off
    setActiveToggles(prev => ({
      ...prev,
      [name]: !prev[name]
    }));
  };

  const activeCount = Object.values(activeToggles).filter(Boolean).length;

  return (
    <section id="skills" className="py-24 bg-cv-bg relative overflow-hidden">
      {/* Decorative background stamps */}
      <div className="absolute top-10 left-10 w-28 h-28 bg-cv-pink border-brutalist rounded-full rotate-[-6deg] opacity-85 hidden md:flex font-mono font-bold text-center text-[10px] leading-tight shadow-brutalist-sm select-none pointer-events-none p-2 items-center justify-center uppercase z-0">
        <span>Mixer Rack v2.0</span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Section Title */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-cv-yellow text-black border-brutalist shadow-brutalist-sm text-xs font-mono font-bold uppercase tracking-wider">
            <Cpu className="w-4 h-4 text-black" />
            <span>HARDWARE CONSOLE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black font-display text-black uppercase">
            SKILLS MIXER EQ<span className="text-cv-pink font-black text-4xl">.</span>
          </h2>
          <p className="text-black max-w-2xl mx-auto text-sm sm:text-base font-semibold font-body">
            An interactive console soundboard patchbay. Engage channel switches to patch tools and view detailed properties.
          </p>
        </div>

        {/* MAIN CONSOLE MIXER BOARD */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch text-black">
          
          {/* LEFT COLUMN: CONSOLE CONTROLS & MASTER SECTION (4 Cols) */}
          <div className="col-span-1 lg:col-span-4 bg-white border-brutalist shadow-brutalist rounded-2xl p-6 flex flex-col justify-between space-y-6 text-left">
            
            {/* Console branding header */}
            <div className="flex justify-between items-center border-b-2 border-black pb-4">
              <span className="font-mono text-xs font-black uppercase tracking-wider">MASTER EQUALIZER V2.0</span>
              <div className="flex gap-1">
                <div className="w-2.5 h-2.5 rounded-full bg-cv-pink border border-black shadow-[0_0_4px_#F472B6]" />
                <div className="w-2.5 h-2.5 rounded-full bg-cv-yellow border border-black shadow-[0_0_4px_#FFDE4D]" />
              </div>
            </div>

            {/* Master Control Knobs */}
            <div className="grid grid-cols-2 gap-4">
              <button 
                onClick={() => setMixerPower(!mixerPower)}
                className={`p-4 border-2 border-black rounded-xl font-mono text-xs font-black flex flex-col items-center justify-center gap-2 transition-all cursor-pointer ${
                  mixerPower ? 'bg-cv-green shadow-brutalist-sm' : 'bg-slate-100 shadow-[2px_2px_0px_0px_#000]'
                }`}
              >
                <Power className="w-6 h-6 text-black" />
                <span>POWER: {mixerPower ? 'ON' : 'OFF'}</span>
              </button>

              <button 
                onClick={() => mixerPower && setBoostActive(!boostActive)}
                className={`p-4 border-2 border-black rounded-xl font-mono text-xs font-black flex flex-col items-center justify-center gap-2 transition-all cursor-pointer ${
                  boostActive && mixerPower ? 'bg-cv-pink shadow-brutalist-sm' : 'bg-slate-100 shadow-[2px_2px_0px_0px_#000]'
                }`}
                disabled={!mixerPower}
              >
                <Sliders className="w-6 h-6 text-black" />
                <span>GAIN BOOST: {boostActive ? 'ON' : 'OFF'}</span>
              </button>
            </div>

            {/* Master Volume Indicator bar */}
            <div className="space-y-2">
              <div className="flex justify-between font-mono text-[9px] font-black uppercase">
                <span>Engaged Modules Load</span>
                <span>{mixerPower ? `${Math.round((activeCount / skillsData.length) * 100)}%` : '0%'}</span>
              </div>
              <div className="h-6 bg-slate-100 border-brutalist-thin rounded overflow-hidden p-0.5 flex">
                {mixerPower && Array.from({ length: 10 }).map((_, i) => (
                  <div
                    key={i}
                    className={`flex-1 h-full border-r border-black last:border-0 ${
                      i < Math.round((activeCount / skillsData.length) * 10)
                        ? i < 6 ? 'bg-cv-green' : i < 8 ? 'bg-cv-yellow' : 'bg-cv-pink'
                        : 'bg-transparent'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* LED Inspector Display (Prints details of hovered skill) */}
            <div className="bg-slate-900 border-brutalist-thin text-green-400 p-4 rounded font-mono text-[10px] space-y-2 h-36 flex flex-col justify-between shadow-inner">
              {selectedSkill && mixerPower ? (
                <>
                  <div className="text-[7.5px] font-bold text-slate-500 uppercase tracking-widest leading-none border-b border-white/10 pb-1 flex justify-between">
                    <span>MODULE INSPECT</span>
                    <span>ENGAGED: {activeToggles[selectedSkill.name] ? 'YES' : 'NO'}</span>
                  </div>
                  <div className="leading-tight space-y-0.5">
                    <div>NAME: <span className="text-white font-black">{selectedSkill.name}</span></div>
                    <div>TYPE: <span className="text-cv-yellow font-black">{selectedSkill.type}</span></div>
                    <div>CATEGORY: <span className="text-cv-pink font-black">{selectedSkill.category}</span></div>
                  </div>
                  <div className="text-slate-300 leading-normal line-clamp-2">
                    {selectedSkill.desc}
                  </div>
                </>
              ) : (
                <div className="h-full flex items-center justify-center text-center text-slate-500 font-black text-xs uppercase px-4 leading-normal">
                  {mixerPower ? 'HOVER OR SELECT A MODULE CARD TO PATCH INSPECTOR' : 'SYSTEM OFFLINE'}
                </div>
              )}
            </div>

          </div>

          {/* RIGHT COLUMN: RACK CHANNELS & SKILL PATCHES (8 Cols) */}
          <div className="col-span-1 lg:col-span-8 bg-white border-brutalist shadow-brutalist rounded-2xl p-6 sm:p-8 flex flex-col justify-between space-y-6">
            
            {/* Patch Directory Headings */}
            <div className="flex justify-between items-center border-b-2 border-black pb-4 text-left">
              <span className="font-mono text-xs font-black uppercase tracking-wider flex items-center gap-1">
                <Database className="w-4 h-4 text-black" />
                <span>CHANNEL GRID SECTION</span>
              </span>
              <span className="font-mono text-[9px] text-slate-500 font-bold uppercase">
                TOTAL CHANNELS: 15 PATCHED
              </span>
            </div>

            {/* Grid of Interactive Modules */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {skillsData.map((skill, idx) => {
                const isEngaged = activeToggles[skill.name] && mixerPower;
                
                return (
                  <div
                    key={idx}
                    onMouseEnter={() => setSelectedSkill(skill)}
                    className={`border-brutalist-thin p-3.5 rounded-xl flex flex-col justify-between space-y-3 transition-all relative ${
                      isEngaged 
                        ? 'bg-slate-50 hover:bg-slate-100 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-1px] hover:translate-y-[-1px]' 
                        : 'bg-slate-200 border-black/35 shadow-none'
                    }`}
                  >
                    {/* Module Title / Tag */}
                    <div className="flex items-start justify-between gap-1 text-left">
                      <div className="space-y-0.5">
                        <span className={`text-[11px] font-black uppercase ${isEngaged ? 'text-black' : 'text-slate-500 line-through'}`}>
                          {skill.name}
                        </span>
                        <span className="text-[7.5px] font-mono text-slate-400 font-bold uppercase block leading-none">
                          {skill.type}
                        </span>
                      </div>
                      
                      {/* LED Glowing dot widget */}
                      <div 
                        className="w-2.5 h-2.5 rounded-full border border-black transition-all duration-200"
                        style={{
                          backgroundColor: isEngaged ? skill.glow : '#64748b',
                          boxShadow: isEngaged ? `0 0 8px ${skill.glow}` : 'none'
                        }}
                      />
                    </div>

                    {/* Rotary dial / Toggle row */}
                    <div className="flex items-center justify-between border-t border-black/10 pt-2.5">
                      
                      {/* Stylized SVG Dial */}
                      <div className="flex items-center gap-1 select-none pointer-events-none">
                        <svg className="w-5 h-5" viewBox="0 0 20 20">
                          <circle cx="10" cy="10" r="8" fill="none" stroke="black" strokeWidth="1.5" className="stroke-black" />
                          <line x1="10" y1="10" x2="10" y2="4" stroke="black" strokeWidth="2.5" className="origin-[10px_10px]" style={{ transform: isEngaged ? 'rotate(45deg)' : 'rotate(-90deg)', transition: 'transform 0.3s ease' }} />
                        </svg>
                        <span className="font-mono text-[6.5px] font-bold text-slate-400">PAN</span>
                      </div>

                      {/* Hardware Button Toggle Switch */}
                      <button
                        onClick={() => handleToggle(skill.name)}
                        disabled={!mixerPower}
                        className={`px-2 py-0.5 border border-black text-[7.5px] font-mono font-black uppercase rounded shadow-brutalist-sm transition-all cursor-pointer ${
                          isEngaged 
                            ? 'bg-cv-yellow text-black hover:bg-slate-50' 
                            : 'bg-slate-350 text-slate-600 shadow-none translate-x-[1px] translate-y-[1px]'
                        }`}
                      >
                        {isEngaged ? 'BYPASS' : 'ENGAGE'}
                      </button>

                    </div>

                    {/* Channel ID Watermark in corner */}
                    <div className="absolute top-1 right-2 text-[5.5px] font-mono font-bold text-slate-300 pointer-events-none">
                      CH-{idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
                    </div>

                  </div>
                );
              })}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Skills;
