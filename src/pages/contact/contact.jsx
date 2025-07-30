import React from 'react';

const ContactSection = () => {
  return (
    <section id="contact" className="py-10 lg:py-0 bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-gray-200">
      {/* Section Title */}
      <div
        className="container mx-auto px-4 text-center mb-12"
        data-aos="fade-up"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4 relative inline-block">
          Contact
          <span className="absolute bottom-[-8px] left-1/2 transform -translate-x-1/2 w-16 h-1 bg-blue-500 rounded-full"></span>
        </h2>
        <p className="max-w-3xl mx-auto text-gray-600 dark:text-gray-300 leading-relaxed">
          Feel free to reach out to me for collaborations, questions, or just to say hello!
        </p>
      </div>

      {/* Main Contact Content */}
      <div
        className="container mx-auto px-4"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <div className="flex flex-wrap -mx-4 lg:justify-between"> {/* Flex container for columns, -mx-4 for negative margin */}
          {/* Info Items Column */}
          <div className="w-full lg:w-5/12 px-4 mb-8 lg:mb-0"> {/* Full width on small, ~40% on large, padding, bottom margin */}
            {/* Location Info Item */}
            <div
              className="flex items-start bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md mb-6"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <i className="bi bi-geo-alt flex-shrink-0 text-blue-500 text-3xl mr-4"></i>
              <div>
                <h3 className="text-xl font-semibold mb-1">Location:</h3>
                <p className="text-gray-600 dark:text-gray-300">Makutano, Meru County, Kenya</p>
              </div>
            </div>

            {/* Email Info Item */}
            <div
              className="flex items-start bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md mb-6"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <i className="bi bi-envelope flex-shrink-0 text-blue-500 text-3xl mr-4"></i>
              <div>
                <h3 className="text-xl font-semibold mb-1">Email:</h3>
                <p className="text-gray-600 dark:text-gray-300">kevinkiogora5@gmail.com</p>
              </div>
            </div>

            {/* Call Info Item */}
            <div
              className="flex items-start bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <i className="bi bi-phone flex-shrink-0 text-blue-500 text-3xl mr-4"></i>
              <div>
                <h3 className="text-xl font-semibold mb-1">Call:</h3>
                <p className="text-gray-600 dark:text-gray-300">+254 799 336 780</p>
              </div>
            </div>
          </div>

          {/* Contact Form Column */}
          <div className="w-full lg:w-7/12 px-4"> {/* Full width on small, ~60% on large, padding */}
            <form
              action="forms/contact.php" // Keep this action for server-side processing
              method="post"
              className="php-email-form bg-white dark:bg-gray-700 p-8 rounded-lg shadow-md"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="flex flex-wrap -mx-3 mb-6"> {/* Negative margin for row spacing */}
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <input
                    type="text"
                    name="name"
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 placeholder-gray-500 dark:placeholder-gray-400"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div className="w-full md:w-1/2 px-3">
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 placeholder-gray-500 dark:placeholder-gray-400"
                    name="email"
                    placeholder="Your Email"
                    required
                  />
                </div>
              </div>
              <div className="mb-6 px-3">
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 placeholder-gray-500 dark:placeholder-gray-400"
                  name="subject"
                  placeholder="Subject"
                  required
                />
              </div>
              <div className="mb-6 px-3">
                <textarea
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 placeholder-gray-500 dark:placeholder-gray-400"
                  name="message"
                  rows="6"
                  placeholder="Message"
                  required
                ></textarea>
              </div>
              <div className="text-center px-3">
                {/* These divs (`loading`, `error-message`, `sent-message`) would typically be controlled by React state for form submission status */}
                <div className="loading text-blue-500 mb-2 hidden">Loading</div>
                <div className="error-message text-red-500 mb-2 hidden"></div>
                <div className="sent-message text-green-500 mb-2 hidden">Your message has been sent. Thank you!</div>
                <button
                  type="submit"
                  className="bg-blue-600 text-white py-3 px-8 rounded-full hover:bg-blue-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;