import React from 'react';
import { Fade } from 'react-awesome-reveal';

const Experience = () => {
  return (
    <section id="experience" className="py-16 sm:py-20 bg-gray-50 dark:bg-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <Fade direction="down" triggerOnce>
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 md:mb-16 text-gray-800 dark:text-white">Professional Experience</h2>
        </Fade>
        <div className="relative border-l-4 border-orange-400 ml-3 sm:ml-4">
          <Fade direction="up" triggerOnce>
            <div className="mb-12 pl-8 sm:pl-10 relative">
              <div className="absolute -left-4 w-8 h-8 bg-orange-400 rounded-full border-4 border-white dark:border-gray-900"></div>
              <div className="flex flex-col sm:flex-row items-start">
                <img src="/origa.jpg" alt="Origa Network Logo" className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover border-4 border-white dark:border-gray-700 shadow-md mb-4 sm:mb-0 sm:mr-8" />
                <div className="flex-1">
                  <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white">Backend Developer</h3>
                  <a href="https://www.linkedin.com/company/origa-networks/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline text-lg font-medium">@ Origa Network</a>
                  <p className="text-gray-500 dark:text-gray-400 mt-1">Feb 2024 - Present</p>
                  <p className="text-gray-700 dark:text-gray-300 mt-4 leading-relaxed">
                    As a key member of the backend team, I architect and maintain robust server-side applications using Node.js and Express. My work involves designing RESTful APIs, implementing secure authentication systems, and optimizing database performance to ensure a seamless user experience on a live, scalable project.
                  </p>
                </div>
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </section>
  );
};

export default Experience;
