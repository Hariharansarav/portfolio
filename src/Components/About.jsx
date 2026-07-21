import React from 'react';
import { User, CheckCircle2, Code, Layout, Layers, Terminal, Award, Briefcase, FolderGit } from 'lucide-react';
import profileImage from '../assets/Hariharan.png';

const About = () => {
  const highlights = [
    'Hands-on full-stack development with React.js, Next.js, Node.js, Express.js',
    'Robust database engineering using MongoDB, MySQL & MS SQL Server',
    'RESTful API design, CRUD workflow operations & Postman validation',
    'UI/UX design in Figma & Adobe Photoshop with focus on user accessibility',
    'Collaborative agile team player & quick learner for emerging web tech',
    'AI & Data Science background (B.Tech) with research recognition',
  ];

  const coreFocusAreas = [
    {
      title: 'Frontend Engineering',
      description: 'Building fast, accessible, and responsive user interfaces with React, Next.js, and Tailwind CSS.',
      icon: Code,
      color: 'from-orange-500/10 to-amber-500/10 border-orange-200 text-orange-600',
    },
    {
      title: 'Backend & APIs',
      description: 'Designing scalable RESTful APIs, middleware, authentication, and database schemas with Node.js & Express.',
      icon: Layers,
      color: 'from-amber-500/10 to-orange-500/10 border-amber-200 text-amber-600',
    },
    {
      title: 'UI/UX Design',
      description: 'Framing wireframes, design systems, interactive prototypes, and modern component aesthetics.',
      icon: Layout,
      color: 'from-rose-500/10 to-orange-500/10 border-rose-200 text-rose-600',
    },
    {
      title: 'AI & Data Integration',
      description: 'Combining Artificial Intelligence algorithms with modern web apps for real-world agricultural & business automation.',
      icon: Terminal,
      color: 'from-orange-600/10 to-amber-600/10 border-orange-300 text-orange-700',
    },
  ];

  return (
    <section id="about" className="py-24 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-orange-100 border border-orange-200 text-orange-700 text-xs font-bold uppercase tracking-wider">
            <User className="w-3.5 h-3.5" />
            <span>Get To Know Me</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
            About <span className="gradient-text-sunset font-black">Hariharan S</span>
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-sm sm:text-base">
            Full Stack Developer specializing in responsive interfaces, efficient backend systems, and user-centered digital solutions.
          </p>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          
          {/* Image Side */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md">
              <div className="absolute inset-0 bg-gradient-to-tr from-orange-300/30 to-amber-200/30 rounded-3xl blur-2xl transform -rotate-3 scale-95" />
              
              <div className="glass-card-light rounded-3xl p-4 relative border border-slate-200 bg-white">
                <img
                  src={profileImage}
                  alt="Hariharan S"
                  className="w-full h-auto rounded-2xl object-cover shadow-md"
                />

                <div className="mt-4 p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between">
                  <div>
                    <p className="text-xs text-slate-500 uppercase font-mono">Location</p>
                    <p className="text-sm font-bold text-slate-900">Coimbatore, Tamil Nadu</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-slate-500 uppercase font-mono">Status</p>
                    <p className="text-sm font-extrabold text-orange-600">Open to Roles</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Text Side */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-2xl font-bold text-slate-900 leading-snug">
              Passionate about turning complex requirements into seamless, <span className="text-orange-600">user-focused digital applications</span>.
            </h3>

            <p className="text-slate-600 text-base leading-relaxed">
              I am an enthusiastic Full Stack Developer with hands-on experience in building modern web applications 
              using <strong className="text-slate-900">React.js, Next.js, Node.js, Express.js, SQL, and MongoDB</strong>. 
              My journey spans across end-to-end web engineering, from crafting wireframes and intuitive user interfaces to developing REST API architectures and performing database optimization.
            </p>

            <p className="text-slate-600 text-base leading-relaxed">
              Currently pursuing my <strong className="text-orange-600 font-bold">B.Tech in Artificial Intelligence & Data Science</strong> at KGiSL Institute of Technology (CGPA 7.5 till 6th semester) and actively completing a Full Stack Developer Internship at <strong className="text-slate-900">KG Agile</strong>.
            </p>

            {/* Checklist Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {highlights.map((item, index) => (
                <div key={index} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-orange-500 mt-1 flex-shrink-0" />
                  <span className="text-xs sm:text-sm text-slate-700 font-semibold">{item}</span>
                </div>
              ))}
            </div>

          </div>

        </div>

        {/* Core Focus Area Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {coreFocusAreas.map((area, idx) => (
            <div
              key={idx}
              className="glass-card-light p-6 rounded-2xl border border-slate-200 bg-white hover:bg-orange-50/50 transition-all group"
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${area.color} border p-3 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <area.icon className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-orange-600 transition-colors">
                {area.title}
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {area.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default About;
