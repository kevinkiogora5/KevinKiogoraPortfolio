import React from 'react';

const SkillProgress = ({ skillName, percentage, delay }) => {
  // We'll use inline style for the width to directly apply the percentage
  // For a real animation, you might combine this with AOS or a separate CSS animation.
  // The 'transition-all duration-1000 ease-out' gives a smooth fill effect if combined with AOS or state change.
  return (
    <div className="mb-8" data-aos="fade-up" data-aos-delay={delay}>
      <div className="flex justify-between items-center mb-2">
        <span className="text-lg font-semibold text-gray-800 dark:text-gray-200">{skillName}</span>
        <i className="text-base font-medium text-gray-600 dark:text-gray-400">{percentage}%</i>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
        <div
          className="bg-blue-500 h-2.5 rounded-full transition-all duration-1000 ease-out" // Added transition for potential animation
          style={{ width: `${percentage}%` }} // Dynamic width
          role="progressbar"
          aria-valuenow={percentage}
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
      </div>
    </div>
  );
};

const SkillsSection = () => {
  return (
    <section id="skills" className="py-16 lg:py-2 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      {/* Section Title */}
      <div
        className="container mx-auto px-4 text-center mb-12"
        data-aos="fade-up"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4 relative inline-block">
          Skills & Programming Languages
          <span className="absolute bottom-[-8px] left-1/2 transform -translate-x-1/2 w-16 h-1 bg-blue-500 rounded-full"></span>
        </h2>
        <p className="max-w-3xl mx-auto text-gray-600 dark:text-gray-300 leading-relaxed">
          Here are some of the technologies and programming languages I'm proficient in.
        </p>
      </div>

      {/* Skills Content */}
      <div
        className="container mx-auto px-4"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <div className="flex flex-wrap -mx-4"> {/* Flex container for columns */}
          {/* Left Column */}
          <div className="w-full lg:w-1/2 px-4">
            <SkillProgress skillName="HTML" percentage={100} delay="200" />
            <SkillProgress skillName="CSS" percentage={90} delay="250" />
            <SkillProgress skillName="JavaScript" percentage={75} delay="300" />
            <SkillProgress skillName="React.js" percentage={85} delay="350" />
            <SkillProgress skillName="Machine Learning" percentage={70} delay="450" />
          </div>

          {/* Right Column */}
          <div className="w-full lg:w-1/2 px-4 mt-8 lg:mt-0"> {/* Added top margin for mobile, removed on desktop */}
            <SkillProgress skillName="Python" percentage={80} delay="200" />
            <SkillProgress skillName="PHP" percentage={70} delay="250" />
            <SkillProgress skillName="SQL" percentage={65} delay="300" />
            <SkillProgress skillName="Node.js" percentage={70} delay="350" />
            <SkillProgress skillName="AI Development" percentage={75} delay="400" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;