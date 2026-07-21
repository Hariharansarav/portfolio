import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Hero from './Components/Hero';
import Skills from './Components/Skills';
import Experience from './Components/Experience';
import Projects from './Components/Projects';
import Education from './Components/Education';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import ResumePage from './Pages/ResumePage';

function App() {
  return (
    <div className="bg-[#12101C] text-[#f3f4f6] min-h-screen selection:bg-[#8b5cf6] selection:text-white">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <main>
                <Hero />
                <Skills />
                <Experience />
                <Projects />
                <Education />
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
