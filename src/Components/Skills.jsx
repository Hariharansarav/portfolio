import React, { useState } from 'react';
import { Cpu, Layout, Database, Wrench, Code2, Sparkles, Terminal, CheckCircle2 } from 'lucide-react';
import skillsAvatar from '../assets/Avatar.png';

// Import icons
import figmaIcon from './icons/FIGMA.png';
import illustratorIcon from './icons/ADOBE.png';
import blenderIcon from './icons/BLENDER.png';
import photoshopIcon from './icons/PS.png';
import sqlServerIcon from './icons/MSSQL.png';
import mongoDBIcon from './icons/DB.png';
import reactIcon from './icons/React.png';
import javaIcon from './icons/JAVA.png';
import pythonIcon from './icons/PYTHON.png';
import dataScienceIcon from './icons/datascience.png';
import nodeIcon from './icons/nodejs.png';
import aiIcon from './icons/AI.png';
import githubIcon from './icons/github.png';
import iotIcon from './icons/iot.png';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const skillsData = [
    { name: 'React.js', category: 'Frontend', level: 92, tag: 'Framework', icon: reactIcon },
    { name: 'Next.js', category: 'Frontend', level: 85, tag: 'Framework', icon: reactIcon },
    { name: 'Node.js & Express', category: 'Backend', level: 88, tag: 'Runtime & APIs', icon: nodeIcon },
    { name: 'Figma UI/UX', category: 'UI/UX & Tools', level: 94, tag: 'Design System', icon: figmaIcon },
    { name: 'Python', category: 'Languages & AI', level: 84, tag: 'Language', icon: pythonIcon },
    { name: 'Java', category: 'Languages & AI', level: 80, tag: 'Language', icon: javaIcon },
    { name: 'MongoDB', category: 'Backend', level: 85, tag: 'NoSQL Database', icon: mongoDBIcon },
    { name: 'MSSQL / MySQL', category: 'Backend', level: 84, tag: 'Relational DB', icon: sqlServerIcon },
    { name: 'HTML5 & CSS3', category: 'Frontend', level: 95, tag: 'Core Web', icon: null },
    { name: 'JavaScript (ES6+)', category: 'Frontend', level: 90, tag: 'Core Scripting', icon: null },
    { name: 'Tailwind CSS', category: 'Frontend', level: 92, tag: 'Styling', icon: null },
    { name: 'Data Science & AI', category: 'Languages & AI', level: 80, tag: 'Machine Learning', icon: dataScienceIcon },
    { name: 'Git & GitHub', category: 'UI/UX & Tools', level: 88, tag: 'Version Control', icon: githubIcon },
    { name: 'Adobe Photoshop', category: 'UI/UX & Tools', level: 80, tag: 'Graphics', icon: photoshopIcon },
    { name: 'Adobe Illustrator', category: 'UI/UX & Tools', level: 78, tag: 'Vector Design', icon: illustratorIcon },
    { name: 'IoT Concepts', category: 'Languages & AI', level: 76, tag: 'Sensors & Embedded', icon: iotIcon },
  ];

  const categories = ['All', 'Frontend', 'Backend', 'Languages & AI', 'UI/UX & Tools'];

  const filteredSkills = activeCategory === 'All'
    ? skillsData
    : skillsData.filter((s) => s.category === activeCategory);

  return (
    <section id="skills" className="py-24 bg-[#12101C] relative overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#8b5cf6]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#241B35] border border-[#8b5cf6]/40 text-[#c4b5fd] text-xs font-bold uppercase tracking-wider">
            <Cpu className="w-3.5 h-3.5 text-[#8b5cf6]" />
            <span>Technical Architecture</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Skills & <span className="gradient-text-violet font-black">Capabilities Matrix</span>
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto text-sm sm:text-base">
            Comprehensive breakdown of UI/UX design tools, full-stack frameworks, database engines, and programming languages.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeCategory === cat
                  ? 'bg-[#8b5cf6] text-white shadow-lg shadow-[#8b5cf6]/35'
                  : 'bg-[#241B35] text-slate-300 hover:text-white border border-[#8b5cf6]/20'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* SKILLS CARDS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredSkills.map((skill, idx) => (
            <div
              key={idx}
              className="glass-card-violet p-6 rounded-2xl border border-[#8b5cf6]/20 bg-[#241B35]/80 hover:border-[#8b5cf6] transition-all group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#12101C] border border-[#8b5cf6]/30 p-2 flex items-center justify-center group-hover:border-[#8b5cf6] transition-colors">
                    {skill.icon ? (
                      <img src={skill.icon} alt={skill.name} className="w-full h-full object-contain" />
                    ) : (
                      <Terminal className="w-5 h-5 text-[#8b5cf6]" />
                    )}
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full bg-[#12101C] text-[#c4b5fd] border border-[#8b5cf6]/30 text-[10px] font-extrabold font-mono">
                    {skill.tag}
                  </span>
                </div>

                <h3 className="text-base font-bold text-white mb-1 group-hover:text-[#c4b5fd] transition-colors">
                  {skill.name}
                </h3>
              </div>

              {/* Progress Dial Bar */}
              <div className="pt-4 border-t border-slate-800 space-y-1.5">
                <div className="flex items-center justify-between text-xs font-mono font-bold text-slate-400">
                  <span>Proficiency</span>
                  <span className="text-[#8b5cf6]">{skill.level}%</span>
                </div>
                <div className="w-full h-2 rounded-full bg-[#12101C] overflow-hidden border border-slate-800">
                  <div
                    className="h-full bg-gradient-to-r from-[#8b5cf6] to-[#c4b5fd] rounded-full transition-all duration-500"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;
