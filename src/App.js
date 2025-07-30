import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Link as ScrollLink, scroller } from 'react-scroll';
// Import Bootstrap Icons CSS
import 'bootstrap-icons/font/bootstrap-icons.css';

// Import all section components
import Header from './components/layout';
import HeroSection from './pages/home/home.jsx';
import AboutSection from './pages/about/about.jsx';
import SkillsSection from './pages/skills/skills.jsx';
import ResumeSection from './pages/education/education.jsx';
import PortfolioSection from './pages/projects/projects.jsx';
import ContactSection from './pages/contact/contact.jsx';
import InterestsSection from './pages/interests/interests.jsx'; 

// Conditional imports for client-side libraries
let AOS;
let GLightbox;
let PureCounter;
if (typeof window !== 'undefined') {
  AOS = require('aos');
  GLightbox = require('glightbox');
  PureCounter = require('@srexi/purecounterjs/dist/purecounter_vanilla');
  require('waypoints/lib/noframework.waypoints.min.js');
}

const App = () => {
  useEffect(() => {
    // Initialize AOS
    if (AOS) {
      AOS.init({
        duration: 600,
        easing: 'ease-in-out',
        once: true,
        mirror: false,
      });
    }

    // Initialize GLightbox
    if (GLightbox) {
      GLightbox({
        selector: '.glightbox',
      });
    }

    // Initialize PureCounter
    if (PureCounter) {
      new PureCounter();
    }
  }, []);

  return (
    <Router>
      <div className="index-page">
        <Header />

        <main className="main xl:ml-72">
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ResumeSection />
          <PortfolioSection />
          <InterestsSection /> 
          <ContactSection />
        </main>
      </div>
    </Router>
  );
};

export default App;
