import React, { useState } from 'react';
// Import all portfolio images
import app1 from '../../assets/img/app.png';
import branding1 from '../../assets/img/church.jpg';
import app2 from '../../assets/img/app1.png';
import branding2 from '../../assets/img/church1.jpg';
import app3 from '../../assets/img/app2.png';
import branding3 from '../../assets/img/church2.jpg';

const portfolioItems = [
  { id: 1, category: 'app', img: app1, title: 'App 1', description: 'maseno dairy farm Managgement system' },
  { id: 3, category: 'branding', img: branding1, title: 'Poster 1',  },
  { id: 5, category: 'app', img: app2, title: 'App 2', description: 'ict department inventory management system' },
  { id: 7, category: 'branding', img: branding2, title: 'Poster 2', },
  { id: 9, category: 'app', img: app3, title: 'App 3', description: 'mount kenya milk main website ' },
  { id: 11, category: 'branding', img: branding3, title: 'Poster 3', },
  
];

const PortfolioSection = () => {
  const [activeFilter, setActiveFilter] = useState('*');

  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
  };

  // Filter logic: if '*' is active, show all. Otherwise, filter by category.
  // Note: The original filter had '.filter-app', so we strip the '.filter-' prefix.
  const filteredPortfolio = activeFilter === '*'
    ? portfolioItems
    : portfolioItems.filter(item => item.category === activeFilter.replace('.filter-', ''));

  return (
    <section id="portfolio" className="py-16 lg:py-2 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      {/* Section Title */}
      <div
        className="container mx-auto px-4 text-center mb-12"
        data-aos="fade-up"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4 relative inline-block">
          Projects
          <span className="absolute bottom-[-8px] left-1/2 transform -translate-x-1/2 w-16 h-1 bg-blue-500 rounded-full"></span>
        </h2>
       <p className="max-w-3xl mx-auto text-gray-600 dark:text-gray-300 leading-relaxed">
  This projects showcases my ability to integrate advanced technologies such as Designing,software Development, Artificial Intelligence, Machine Learning, and IoT to solve real-world problems. Built with scalability, security, and performance in mind, it demonstrates my proficiency in full-stack development, data analytics, and user-centered design — delivering solutions that are not only functional but also impactful in sectors like smart agriculture, automation, and predictive systems.
</p>

      </div>

      {/* Portfolio Filters */}
      <div className="container mx-auto px-4">
        <ul
          className="flex flex-wrap justify-center gap-2 mb-12 list-none p-0" // Flex for filters, gap for spacing, no list style
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <li
            onClick={() => handleFilterClick('*')}
            className={`cursor-pointer px-4 py-2 rounded-full text-sm font-semibold transition-colors duration-300
                        ${activeFilter === '*' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-blue-500 hover:text-white dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-blue-500'}
                       `}
          >
            All
          </li>
          <li
            onClick={() => handleFilterClick('.filter-app')}
            className={`cursor-pointer px-4 py-2 rounded-full text-sm font-semibold transition-colors duration-300
                        ${activeFilter === '.filter-app' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-blue-500 hover:text-white dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-blue-500'}
                       `}
          >
            App
          </li>
          <li
            onClick={() => handleFilterClick('.filter-branding')}
            className={`cursor-pointer px-4 py-2 rounded-full text-sm font-semibold transition-colors duration-300
                        ${activeFilter === '.filter-branding' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-blue-500 hover:text-white dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-blue-500'}
                       `}
          >
            Posters
          </li>
        </ul>

        {/* Portfolio Grid */}
        <div
          // Using Tailwind's grid system for responsive columns
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" // 1 column mobile, 2 tablet, 3 desktop
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {filteredPortfolio.map(item => (
            <div
              key={item.id}
              // Tailwind classes for individual portfolio item
              className={`portfolio-item group relative overflow-hidden rounded-lg shadow-lg bg-white dark:bg-gray-800 transition-transform duration-300 hover:scale-105`}
            >
              <img src={item.img} className="w-full h-60 object-fill" alt={item.title} />

              {/* Portfolio Info Overlay */}
              <div
                className="portfolio-info absolute inset-0 bg-black bg-opacity-70 flex flex-col justify-center items-center p-4 text-white
                           opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"
              >
                <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                <p className="text-sm text-gray-300 mb-4 text-center">{item.description}</p>
                <div className="flex space-x-4">
                  <a
                    href={item.img}
                    title={`Preview ${item.title}`}
                    data-gallery={`portfolio-gallery-${item.category}`} // GLightbox attribute
                    className="glightbox preview-link text-white text-2xl hover:text-blue-400 transition-colors"
                  >
                    <i className="bi bi-zoom-in"></i>
                  </a>
                  <a
                    href="portfolio-details.html" // This link would go to a specific project details page
                    title="More Details"
                    className="details-link text-white text-2xl hover:text-blue-400 transition-colors"
                  >
                    <i className="bi bi-link-45deg"></i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;