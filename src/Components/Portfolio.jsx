import React from 'react';
import './Portfolio.css';

import logo from '../assets/logo.png';
import resumePDF from '../assets/Hariharan CV.pdf';
import profileImage from '../assets/Hariharan.png';
import skillsAvatar from '../assets/Avatar.png';


import figmaIcon from './icons/figma.png';
import illustratorIcon from './icons/ADOBE.png';
import blenderIcon from './icons/blender.png';
import photoshopIcon from './icons/PS.png';
import sqlServerIcon from './icons/MSSQL.png';
import mongoDBIcon from './icons/db.png';
import reactIcon from './icons/React.png';
import javaIcon from './icons/java.png';

const Portfolio = () => {
  const firstName = 'HARIHARAN';
  const lastName = '';

  const handleResumeDownload = () => {
    const link = document.createElement('a');
    link.href = resumePDF;
    link.download = 'Hariharan_Saravanan_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const skills = [
    { name: 'Figma', icon: figmaIcon, color: '#F24E1E' },
    { name: 'Adobe Illustrator', icon: illustratorIcon, color: '#FF9A00' },
    { name: 'Blender', icon: blenderIcon, color: '#F5792A' },
    { name: 'Photoshop', icon: photoshopIcon, color: '#31A8FF' },
    { name: 'SQL Server', icon: sqlServerIcon, color: '#CC2927' },
    { name: 'MongoDB', icon: mongoDBIcon, color: '#47A248' },
    { name: 'React JS', icon: reactIcon, color: '#61DAFB' },
    { name: 'Java', icon: javaIcon, color: '#E76F00' }
  ];

  return (
    <div className="portfolio-container">
      {/* NAVBAR */}
      <nav className="navbar">
        <div className="logo">
          <a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>
            <img src={logo} alt="HS Logo" className="logo-image" />
          </a>
        </div>

        <ul className="nav-links">
          <li><a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>Home</a></li>
          <li><a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>About</a></li>
          <li><a href="#skills" onClick={(e) => { e.preventDefault(); scrollToSection('skills'); }}>Skills</a></li>
          <li><a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>Contact</a></li>
        </ul>
      </nav>

      {/* HERO */}
      <main className="hero-section" id="home">
        <h1 className="main-title">
          {firstName.split('').map((l, i) => (
            <span key={`first-${i}`} className="letter">{l}</span>
          ))}
          <span className="letter space"> </span>
          {lastName.split('').map((l, i) => (
            <span key={`last-${i}`} className="letter">{l}</span>
          ))}
        </h1>

        <h2 className="subtitle">
          UI/UX Enthusiast | Frontend Developer | Backend Developer
        </h2>

        <p className="description">
          Creating user-centered UI/UX designs, supported by scalable backend systems<br />
          and responsive frontend development.
        </p>

        <div className="button-group">
          <button className="cta-button" onClick={handleResumeDownload}>
            <span>Resume</span>
          </button>
          <button className="cta-button">
            <span>Projects</span>
          </button>
        </div>
      </main>

      {/* ABOUT */}
      <section className="about-section" id="about">
        <h2 className="section-title">ABOUT ME</h2>

        <div className="about-content">
          <div className="about-image">
            <img src={profileImage} alt="Hariharan Saravanan" />
          </div>

          <div className="about-text">
            <p className="about-paragraph">
              I'm Hariharan, a UI/UX-focused developer passionate about creating clean,
              intuitive, and user-centered digital experiences. I design interfaces that
              are simple, visually consistent, and easy to use, always keeping usability
              as the top priority.
            </p>
            <p className="about-paragraph">
              Along with UI/UX design, I build responsive frontend applications and
              develop scalable backend systems that support real-world functionality.
              I have also worked on freelance projects, collaborating with clients to
              deliver practical and user-focused solutions.
            </p>
            <p className="about-paragraph">
              I enjoy working across the complete development process and continuously
              learning by building projects that combine strong design with reliable
              technical foundations.
            </p>

            <div className="stats-container">
              <div className="stat-item">
                <h3 className="stat-number">5+</h3>
                <p className="stat-label">PROJECTS</p>
              </div>
              <div className="stat-item">
                <h3 className="stat-number">2+</h3>
                <p className="stat-label">YEARS EXPERIENCE</p>
              </div>
              <div className="stat-item">
                <h3 className="stat-number">15+</h3>
                <p className="stat-label">TECH & TOOLS</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section className="skills-section" id="skills">
        <h2 className="section-title">SKILLS & TOOLS</h2>

        <div className="skills-container">
          <div className="skills-orbit">
            <div className="orbit-ring outer-ring"></div>
            <div className="orbit-ring inner-ring"></div>

            <div className="skills-center">
              <img src={skillsAvatar} alt="Avatar" className="avatar-image" />
            </div>

            {skills.map((skill, index) => (
              <div
                key={skill.name}
                className={`skill-icon skill-${index + 1}`}
                style={{ '--skill-color': skill.color }}
              >
                <div className="skill-icon-inner">
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className="skill-image"
                  />
                </div>
                <div className="skill-tooltip">{skill.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;