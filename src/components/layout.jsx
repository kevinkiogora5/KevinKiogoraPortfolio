import React, { useEffect, useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { useLocation } from 'react-router-dom';

import profileImg from '../assets/img/profile1.jpg';

const Header = () => {
  const location = useLocation();
  const [activeNav, setActiveNav] = useState('hero');

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.substring(1);
      if (hash) {
        setActiveNav(hash);
      } else {
        setActiveNav('hero');
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, [location.hash]);

  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const toggleMobileNav = () => {
    setMobileNavOpen(!mobileNavOpen);
    document.body.classList.toggle('mobile-nav-active');
  };

  return (
    <header
      id="header"
      className={`fixed top-0 w-72 h-screen overflow-y-auto flex flex-col items-center
                  bg-gray-800 text-white z-[9999] transition-all duration-300 ease-in-out
                  ${mobileNavOpen ? 'left-0' : 'left-[-288px]'}
                  xl:left-0 xl:fixed xl:w-72 xl:top-0 xl:left-0
                `}
       >
      <i
        className="fixed top-6 right-6 bi bi-list text-3xl text-white cursor-pointer z-[10000] xl:hidden"
        onClick={toggleMobileNav}
      ></i>

      <div className="w-full text-center p-4 border-b border-gray-700">
        <img
  src={profileImg}
  alt="Profile"
  className="img-fluid rounded-full mx-auto w-[100px] h-[100px] object-cover border-4 border-gray-600"
/>
      </div>

      <a href="/" className="logo flex items-center justify-center py-2 text-white no-underline">
        <h1 className="sitename text-2xl font-bold">Kevin Kiogora</h1>
      </a>

      <div className="social-links text-center py-2 space-x-2">
        <a href="https://twitter.com/@kevNeymahkiogi"target="_blank" className="inline-block w-8 h-8 leading-8 rounded-full bg-gray-700 text-white text-center hover:bg-blue-500 transition-colors duration-300">
          <i className="bi bi-twitter-x"></i>
        </a>
        <a href="https://facebook.com/K Neymah K Kiogi"target="_blank" className="inline-block w-8 h-8 leading-8 rounded-full bg-gray-700 text-white text-center hover:bg-blue-500 transition-colors duration-300">
          <i className="bi bi-facebook"></i>
        </a>
        <a href="https://www.instagram.com/k.neymak.k/" target="_blank" className="inline-block w-8 h-8 leading-8 rounded-full bg-gray-700 text-white text-center hover:bg-blue-500 transition-colors duration-300">
          <i className="bi bi-instagram"></i>
        </a>
        <a href="https://wa.me/254746047596"target="_blank" className="inline-block w-8 h-8 leading-8 rounded-full bg-gray-700 text-white text-center hover:bg-blue-500 transition-colors duration-300">
  <i className="bi bi-whatsapp"></i> 
</a>
        <a href="https://www.linkedin.com/in/kevin-neymah-17177930b/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BSttn8vCjSKCAeQeJC9CA%2Bg%3D%3D" target="_blank" className="inline-block w-8 h-8 leading-8 rounded-full bg-gray-700 text-white text-center hover:bg-blue-500 transition-colors duration-300">
          <i className="bi bi-linkedin"></i>
        </a>
      </div>

      <nav
        id="navmenu"
        className={`navmenu w-full py-4 ${mobileNavOpen ? 'block' : 'hidden'} xl:block`}
      >
        <ul className="list-none p-0 m-0">
          <li>
            <ScrollLink
              to="hero"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className={`flex items-center p-3 text-white no-underline cursor-pointer
                          hover:bg-gray-700 hover:text-blue-400 transition-colors duration-200
                          ${activeNav === 'hero' ? 'bg-blue-600 text-white' : ''}`}
              onClick={toggleMobileNav}
            >
              <i className="bi bi-house navicon text-lg mr-3"></i>Home
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="about"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className={`flex items-center p-3 text-white no-underline cursor-pointer
                          hover:bg-gray-700 hover:text-blue-400 transition-colors duration-200
                          ${activeNav === 'about' ? 'bg-blue-600 text-white' : ''}`}
              onClick={toggleMobileNav}
            >
              <i className="bi bi-person navicon text-lg mr-3"></i> About
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="skills"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className={`flex items-center p-3 text-white no-underline cursor-pointer
                          hover:bg-gray-700 hover:text-blue-400 transition-colors duration-200
                          ${activeNav === 'skills' ? 'bg-blue-600 text-white' : ''}`}
              onClick={toggleMobileNav}
            >
              <i className="bi bi-code-slash navicon text-lg mr-3"></i> Skills
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="resume"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className={`flex items-center p-3 text-white no-underline cursor-pointer
                          hover:bg-gray-700 hover:text-blue-400 transition-colors duration-200
                          ${activeNav === 'resume' ? 'bg-blue-600 text-white' : ''}`}
              onClick={toggleMobileNav}
            >
              <i className="bi bi-file-earmark-text navicon text-lg mr-3"></i> Education Background
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="portfolio"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className={`flex items-center p-3 text-white no-underline cursor-pointer
                          hover:bg-gray-700 hover:text-blue-400 transition-colors duration-200
                          ${activeNav === 'portfolio' ? 'bg-blue-600 text-white' : ''}`}
              onClick={toggleMobileNav}
            >
              <i className="bi bi-images navicon text-lg mr-3"></i> Projects
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="services" // <--- This 'to' ID should match the section's ID
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className={`flex items-center p-3 text-white no-underline cursor-pointer
                          hover:bg-gray-700 hover:text-blue-400 transition-colors duration-200
                          ${activeNav === 'services' ? 'bg-blue-600 text-white' : ''}`} // <--- Update activeNav check if you change ID
              onClick={toggleMobileNav}
            >
              <i className="bi bi-hdd-stack navicon text-lg mr-3"></i> Interests {/* <--- Updated text */}
            </ScrollLink>
          </li>

          <li>
            <ScrollLink
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className={`flex items-center p-3 text-white no-underline cursor-pointer
                          hover:bg-gray-700 hover:text-blue-400 transition-colors duration-200
                          ${activeNav === 'contact' ? 'bg-blue-600 text-white' : ''}`}
              onClick={toggleMobileNav}
            >
              <i className="bi bi-envelope navicon text-lg mr-3"></i> Contact
            </ScrollLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
