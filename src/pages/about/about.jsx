import React from 'react';
import profileImg from '../../assets/img/profile1.jpg';// Ensure this path is correct for your project structure

const AboutSection = () => {
  return (
    <section id="about" className="py-16 lg:py-2 bg-white dark:bg-gray-900"> {/* Section padding and background */}
      {/* Section Title */}
      <div
        className="container mx-auto px-4 text-center mb-12" // mx-auto for centering, px-4 for horizontal padding
        data-aos="fade-up"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4 relative inline-block">
          About
          {/* Underline effect, similar to section-title */}
          <span className="absolute bottom-[-8px] left-1/2 transform -translate-x-1/2 w-16 h-1 bg-blue-500 rounded-full"></span>
        </h2>
        <p className="max-w-3xl mx-auto text-gray-600 dark:text-gray-300 leading-relaxed">
          Passionate about crafting innovative digital solutions, I blend creativity with technical expertise to bring ideas to life. With a strong foundation in both design and development, I strive to build user-centered, high-performance applications that leave a lasting impression. Every project I take on is a step toward continuous learning, growth, and making a meaningful impact in the tech world.
        </p>
      </div>

      {/* Main Content Area */}
      <div
        className="container mx-auto px-4" // Centering and padding for the main content
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <div className="flex flex-wrap -mx-4 justify-center items-start"> {/* flex-wrap for row, -mx-4 to offset inner padding, justify-center */}
          {/* Image Column */}
          <div className="w-full lg:w-1/3 px-4 mb-6 lg:mb-0"> {/* w-full for mobile, lg:w-1/3 for large screens, px-4 for column padding */}
            <img src={profileImg} className="max-w-full h-auto rounded-lg shadow-md" alt="Profile" />
          </div>

          {/* Content Column */}
          <div className="w-full lg:w-2/3 px-4"> {/* w-full for mobile, lg:w-2/3 for large screens, px-4 for column padding */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-4">
              Frontend &amp; Backend Developer.
            </h2>
            <p className="italic text-gray-700 dark:text-gray-300 mb-6"> {/* fst-italic py-3 equivalent */}
              I specialize in designing intuitive user experiences and developing responsive, accessible websites that not only look great but function seamlessly across all devices. With a passion for clean design and efficient code, I turn ideas into interactive digital experiences that solve real-world problems.
            </p>

            <div className="flex flex-wrap -mx-4"> {/* Flex container for inner columns */}
              {/* Left List Column */}
              <div className="w-full md:w-1/2 px-4"> {/* w-full for mobile, md:w-1/2 for medium screens */}
                <ul className="list-none p-0 m-0 space-y-3"> {/* Removed default list styles, added vertical space */}
                  <li className="flex items-center text-gray-700 dark:text-gray-300">
                    <i className="bi bi-chevron-right text-blue-500 mr-2"></i> {/* Icon styling and margin */}
                    <strong className="font-semibold text-gray-800 dark:text-white mr-1">Birthday:</strong> <span>29 oct 2002</span>
                  </li>
                  <li className="flex items-center text-gray-700 dark:text-gray-300">
                    <i className="bi bi-chevron-right text-blue-500 mr-2"></i>
                    <strong className="font-semibold text-gray-800 dark:text-white mr-1">Phone:</strong> <span>+254 799 336 780</span>
                  </li>
                  <li className="flex items-center text-gray-700 dark:text-gray-300">
                    <i className="bi bi-chevron-right text-blue-500 mr-2"></i>
                    <strong className="font-semibold text-gray-800 dark:text-white mr-1">Town:</strong> <span>Kenya Meru</span>
                  </li>
                </ul>
              </div>

              {/* Right List Column */}
              <div className="w-full md:w-1/2 px-4 mt-6 md:mt-0"> {/* w-full for mobile, md:w-1/2 for medium screens, mt-6 for mobile spacing */}
                <ul className="list-none p-0 m-0 space-y-3">
                  <li className="flex items-center text-gray-700 dark:text-gray-300">
                    <i className="bi bi-chevron-right text-blue-500 mr-2"></i>
                    <strong className="font-semibold text-gray-800 dark:text-white mr-1">Age Group:</strong> <span>GenZ</span>
                  </li>
                  <li className="flex items-center text-gray-700 dark:text-gray-300">
                    <i className="bi bi-chevron-right text-blue-500 mr-2"></i>
                    <strong className="font-semibold text-gray-800 dark:text-white mr-1">Degree:</strong> <span>UnderGraduate</span>
                  </li>
                  <li className="flex items-center text-gray-700 dark:text-gray-300">
                    <i className="bi bi-chevron-right text-blue-500 mr-2"></i>
                    <strong className="font-semibold text-gray-800 dark:text-white mr-1">Email:</strong> <span>kevinkiogora5@gmail.com</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;