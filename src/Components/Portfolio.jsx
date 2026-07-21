import React from 'react';
import Header from './Header';
import Hero from './Hero';
import About from './About';
import Experience from './Experience';
import Projects from './Projects';
import Skills from './Skills';
import Education from './Education';
import Contact from './Contact';
import Footer from './Footer';

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-cyan-500 selection:text-slate-950">
      {/* SEPARATE HEADER COMPONENT */}
      <Header />

      {/* HERO SECTION */}
      <Hero />

      {/* ABOUT SECTION */}
      <About />

      {/* INTERNSHIP & EXPERIENCE SECTION */}
      <Experience />

      {/* PROJECTS SECTION */}
      <Projects />

      {/* SKILLS SECTION */}
      <Skills />

      {/* EDUCATION SECTION */}
      <Education />

      {/* CONTACT SECTION */}
      <Contact />

      {/* SEPARATE FOOTER COMPONENT */}
      <Footer />
    </div>
  );
};

export default Portfolio;