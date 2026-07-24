import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Hero from './Components/Hero';
import About from './Components/About';
import Experience from './Components/Experience';
import Projects from './Components/Projects';
import Education from './Components/Education';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import ResumePage from './Pages/ResumePage';
import CustomCursor from './Components/CustomCursor';
import SkillsBorder from './Components/SkillsBorder';

function App() {
  return (
    <div className="bg-cv-bg text-black min-h-screen selection:bg-black selection:text-cv-yellow relative">
      <CustomCursor />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <main>
                <Hero />
                <SkillsBorder direction="left" bgClass="bg-cv-yellow" />
                <About />
                <SkillsBorder direction="right" bgClass="bg-cv-pink" />
                <Experience />
                <SkillsBorder direction="left" bgClass="bg-cv-cyan" />
                <Projects />
                <SkillsBorder direction="right" bgClass="bg-cv-green" />
                <Education />
                <SkillsBorder direction="left" bgClass="bg-cv-purple" />
                <Contact />
              </main>
              <Footer />
            </>
          }
        />
        <Route path="/resume" element={<ResumePage />} />
      </Routes>
    </div>
  );
}

export default App;
