import React from 'react';

const ResumeSection = () => {
  return (
    <section id="resume" className="py-16 lg:py-2 bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-gray-200">
      {/* Section Title */}
      <div
        className="container mx-auto px-4 text-center mb-12"
        data-aos="fade-up"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4 relative inline-block">
          Resume
          <span className="absolute bottom-[-8px] left-1/2 transform -translate-x-1/2 w-16 h-1 bg-blue-500 rounded-full"></span>
        </h2>
        <p className="max-w-3xl mx-auto text-gray-600 dark:text-gray-300 leading-relaxed">
          A summary of my professional and academic background.
        </p>
      </div>

      {/* Resume Content */}
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap -mx-4"> {/* Flex container for columns */}

          {/* Left Column: Summary & Education */}
          <div className="w-full lg:w-1/2 px-4 mb-8 lg:mb-0" data-aos="fade-up" data-aos-delay="100">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 border-b-2 border-blue-500 pb-2 inline-block">Summary</h3> {/* Added bottom border */}
            
            {/* Summary Item */}
            <div className="mb-6 pb-6 relative pl-8 border-l-4 border-blue-500 before:absolute before:left-0 before:top-0 before:h-4 before:w-4 before:bg-blue-500 before:rounded-full before:mt-1 before:ml-[-10px] before:border-4 before:border-white dark:before:border-gray-800">
              <h4 className="text-xl font-semibold mb-1">Kevin Kiogora</h4>
             <p className="italic text-gray-700 dark:text-gray-300 mb-3">
    A forward-thinking UI/UX Designer & Web Developer with a growing specialization in Artificial Intelligence and Machine Learning. I enjoy building intuitive user interfaces and integrating smart, data-driven systems that enhance user experience and business efficiency. My goal is to bridge the gap between intelligent automation and clean, user-centered design.
  </p>
              <ul className="list-none p-0 m-0 text-gray-700 dark:text-gray-300 space-y-2">
                <li>Makutano, Meru County, Kenya</li>
                <li>+254 799 336 780</li>
                <li>kevinkiogora5@gmail.com</li>
              </ul>
            </div>

            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 mt-8 border-b-2 border-blue-500 pb-2 inline-block">Educational Background</h3> {/* Added bottom border and top margin */}
            
            {/* Education Item - Secondary School */}
<div className="mb-6 pb-6 relative pl-8 border-l-4 border-blue-500 before:absolute before:left-0 before:top-0 before:h-4 before:w-4 before:bg-blue-500 before:rounded-full before:mt-1 before:ml-[-10px] before:border-4 before:border-white dark:before:border-gray-800">
  <h4 className="text-xl font-semibold mb-1">Kenya Certificate of Secondary Education (KCSE)</h4>
  <h5 className="text-sm font-light text-gray-600 dark:text-gray-400 bg-gray-200 dark:bg-gray-700 inline-block px-3 py-1 rounded-full mb-2">2017 - 2021</h5>
  <p className="italic text-gray-700 dark:text-gray-300 mb-2">
    Muthambi Boys High School, Tharaka Nithi County
  </p>
  <p className="text-gray-700 dark:text-gray-300">
    Graduated with distinction, earning recognition as the best student in Computer Studies. Actively participated in national and regional science fairs, where I showcased innovative IoT-based projects that combined principles of physics and computing. These experiences laid a strong foundation for my passion in technology and intelligent systems development.
  </p>
</div>


            {/* Education Item - University */}
<div className="mb-6 pb-6 relative pl-8 border-l-4 border-blue-500 before:absolute before:left-0 before:top-0 before:h-4 before:w-4 before:bg-blue-500 before:rounded-full before:mt-1 before:ml-[-10px] before:border-4 before:border-white dark:before:border-gray-800">
  <h4 className="text-xl font-semibold mb-1">Bachelor of Science in Mathematics and Computer Science</h4>
  <h5 className="text-sm font-light text-gray-600 dark:text-gray-400 bg-gray-200 dark:bg-gray-700 inline-block px-3 py-1 rounded-full mb-2">2021 - Present</h5>
  <p className="italic text-gray-700 dark:text-gray-300 mb-2">
    Maseno University, Kisumu County, Kenya
  </p>
  <p className="text-gray-700 dark:text-gray-300">
    Currently pursuing a rigorous interdisciplinary program that combines advanced mathematical concepts with computer science principles. My academic journey has equipped me with strong analytical, programming, and problem-solving skills, particularly in areas like software development, artificial intelligence, and data analysis. I have also engaged in practical projects involving web development, machine learning, and IoT systems—driven by a passion for building intelligent, scalable, and impactful digital solutions.
  </p>
</div>

            {/* Add more educational entries here if needed */}
          </div>

          {/* Right Column: Professional Experience */}
          <div className="w-full lg:w-1/2 px-4" data-aos="fade-up" data-aos-delay="200">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 border-b-2 border-blue-500 pb-2 inline-block">Professional Experience</h3> {/* Added bottom border */}
            
           {/* Experience Item - Industrial Attachment */}
<div className="mb-6 pb-6 relative pl-8 border-l-4 border-blue-500 before:absolute before:left-0 before:top-0 before:h-4 before:w-4 before:bg-blue-500 before:rounded-full before:mt-1 before:ml-[-10px] before:border-4 before:border-white dark:before:border-gray-800">
  <h4 className="text-xl font-semibold mb-1">Software Developer Intern</h4>
  <h5 className="text-sm font-light text-gray-600 dark:text-gray-400 bg-gray-200 dark:bg-gray-700 inline-block px-3 py-1 rounded-full mb-2">May 2025 – August 2025</h5>
  <p className="italic text-gray-700 dark:text-gray-300 mb-3">
    Mount Kenya Milk (Meru Central Co-operative Union), Meru, Kenya
  </p>
  <ul className="list-disc list-outside pl-5 text-gray-700 dark:text-gray-300 space-y-2">
    <li>Developed and deployed the official company website to enhance Mount Kenya Milk’s digital presence and customer engagement.</li>
    <li>Designed and implemented a robust ICT inventory management system to streamline tracking and management of tech assets across departments.</li>
    <li>Built a companion mobile application for the inventory system, enabling staff to perform asset updates and lookups remotely in real time.</li>
    <li>Collaborated with ICT staff and end-users to gather requirements, conduct testing, and ensure successful project rollouts.</li>
  </ul>
</div>


            {/* Experience Item - AI & Machine Learning */}
<div className="mb-6 pb-6 relative pl-8 border-l-4 border-blue-500 before:absolute before:left-0 before:top-0 before:h-4 before:w-4 before:bg-blue-500 before:rounded-full before:mt-1 before:ml-[-10px] before:border-4 before:border-white dark:before:border-gray-800">
  <h4 className="text-xl font-semibold mb-1">AI & Machine Learning Student Researcher</h4>
  <h5 className="text-sm font-light text-gray-600 dark:text-gray-400 bg-gray-200 dark:bg-gray-700 inline-block px-3 py-1 rounded-full mb-2">2025 – Present</h5>
  <p className="italic text-gray-700 dark:text-gray-300 mb-3">
    School of Computing and Informatics, Maseno University, Kenya
  </p>
  <ul className="list-disc list-outside pl-5 text-gray-700 dark:text-gray-300 space-y-2">
    <li>Currently exploring and applying AI and machine learning techniques in real-world problem-solving as part of academic research and coursework.</li>
    <li>Developed and trained machine learning models using Python, scikit-learn, and TensorFlow for tasks such as classification, regression, and prediction.</li>
    <li>Worked on AI-driven prototypes, including systems for intelligent dairy management and predictive inventory control using IoT and sensor data.</li>
    <li>Collaborating with peers and faculty to present findings, participate in research symposiums, and stay up-to-date with emerging trends in AI and data science.</li>
  </ul>
</div>

{/* Experience Item - PLP Academy */}
<div className="mb-6 pb-6 relative pl-8 border-l-4 border-blue-500 before:absolute before:left-0 before:top-0 before:h-4 before:w-4 before:bg-blue-500 before:rounded-full before:mt-1 before:ml-[-10px] before:border-4 before:border-white dark:before:border-gray-800">
  <h4 className="text-xl font-semibold mb-1">IoT Development Trainee</h4>
  <h5 className="text-sm font-light text-gray-600 dark:text-gray-400 bg-gray-200 dark:bg-gray-700 inline-block px-3 py-1 rounded-full mb-2">2025 – Present</h5>
  <p className="italic text-gray-700 dark:text-gray-300 mb-3">
    PLP Academy (Power Learn Project), Kenya
  </p>
  <ul className="list-disc list-outside pl-5 text-gray-700 dark:text-gray-300 space-y-2">
    <li>Enrolled in a hands-on tech training program focusing on IoT development, embedded systems, and smart device integration.</li>
    <li>Currently learning to build connected systems using microcontrollers (e.g., Arduino, ESP32), sensors, and cloud-based services.</li>
    <li>Collaborating on group projects involving real-time data acquisition, edge computing, and wireless communication protocols.</li>
    <li>Gaining strong foundational knowledge in C++, Python, and circuit design as part of PLP’s project-based learning approach.</li>
  </ul>
</div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;