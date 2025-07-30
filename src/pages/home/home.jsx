import React, { useRef, useEffect } from 'react';
import heroBg from '../../assets/img/profile2.jpg';
import Typed from 'typed.js'; 

const HeroSection = () => {
  const typedRef = useRef(null); // Create a ref for the span element

  useEffect(() => {
    // Check if the ref is attached to a DOM element and Typed.js is imported
    if (typedRef.current && Typed) {
      const typedItems = typedRef.current.getAttribute('data-typed-items');

      if (typedItems) {
        // Initialize Typed.js on the ref's current DOM element
        const typed = new Typed(typedRef.current, {
          strings: typedItems.split(',').map(item => item.trim()), // .trim() to remove whitespace
          loop: true,
          typeSpeed: 100,
          backSpeed: 50,
          backDelay: 2000,
        });

        // Cleanup function: Destroy Typed.js instance on component unmount
        return () => {
          typed.destroy();
        };
      }
    }
  }, []); // Empty dependency array: runs once on mount, cleans up on unmount

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center items-center text-center text-white overflow-hidden"
    >
      <img
        src={heroBg}
        alt="Hero Background"
        className="absolute inset-0 w-full h-full object-fill z-15"
        data-aos="fade-in"
      />

      <div className="absolute inset-0 bg-black opacity-50 z-10"></div>

      <div
        className="relative container mx-auto px-4 py-8 z-20"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
          Kevin Kiogora
        </h2>
        <p className="text-xl sm:text-2xl font-light">
          I'm a{' '}
          {/* Attach the ref here */}
          <span ref={typedRef} className="typed" data-typed-items="Full Stack Developer, Technical Director, Graphics Operator, Photographer, Designer"></span>
          <span className="typed-cursor" aria-hidden="true">|</span>
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
