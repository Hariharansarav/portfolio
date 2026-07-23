import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Hero from './Components/Hero';
import About from './Components/About';
import Experience from './Components/Experience';
import Projects from './Components/Projects';
import Skills from './Components/Skills';
import Education from './Components/Education';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import ResumePage from './Pages/ResumePage';

function App() {
  return (
    <div className="bg-cv-bg text-black min-h-screen selection:bg-black selection:text-cv-yellow">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <main>
                <Hero />
                <About />
                <Experience />
                <Projects />
                <Skills />
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
