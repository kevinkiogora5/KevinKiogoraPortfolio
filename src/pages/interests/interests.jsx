import React from 'react';

const InterestsSection = () => {
  // You can customize these interests, icons, and descriptions
  const interests = [
   {
  icon: 'bi-dribbble',
  title: 'Football',
  description: 'Passionate footballer and dedicated striker, thriving on teamwork, strategy, and the thrill of the game.',
},
    {
      icon: 'bi-camera',
      title: 'Photography',
      description: 'Capturing moments and landscapes, exploring visual storytelling and composition.',
    },
    {
      icon: 'bi-code-slash',
      title: 'Open Source Contributions',
      description: 'Contributing to open-source projects, learning from the community, and giving back.',
    },
    {
      icon: 'bi-controller',
      title: 'Gaming',
      description: 'Engaging in strategic and immersive video games for relaxation and mental challenge.',
    },
    {
      icon: 'bi-globe',
      title: 'Travel',
      description: 'Exploring new cultures, landscapes, and experiences around the world.',
    },
    {
  icon: 'bi-tv',
  title: 'Watching Football',
  description: 'A passionate supporter of Real Madrid and Manchester United, enjoying match days, highlights, and tactical analysis.',
},
  ];

  return (
    <section id="services" className="py-16 lg:py-2 bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-gray-200">
      {/* Section Title */}
      <div
        className="container mx-auto px-4 text-center mb-12"
        data-aos="fade-up"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4 relative inline-block">
          Interests
          <span className="absolute bottom-[-8px] left-1/2 transform -translate-x-1/2 w-16 h-1 bg-blue-500 rounded-full"></span>
        </h2>
        <p className="max-w-3xl mx-auto text-gray-600 dark:text-gray-300 leading-relaxed">
          Beyond coding, here are some of the activities and passions that enrich my life and fuel my creativity.
        </p>
      </div>

      {/* Interests Grid */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {interests.map((interest, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-6 bg-white dark:bg-gray-700 rounded-lg shadow-md
                         hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              data-aos="fade-up"
              data-aos-delay={`${200 + index * 100}`} // Staggered animation delay
            >
              <div className="text-blue-500 text-5xl mb-4">
                <i className={`bi ${interest.icon}`}></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">{interest.title}</h3>
              <p className="text-center text-gray-600 dark:text-gray-300 text-sm">{interest.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InterestsSection;
