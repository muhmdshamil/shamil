import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram, FaFacebook } from 'react-icons/fa';
import { Fade } from "react-awesome-reveal";

const About = () => {
  return (
    <section id="about" className="py-16 sm:py-20 bg-gray-50 dark:bg-gray-900">
      <Fade direction="up" triggerOnce>
        <div className="main-container max-w-6xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="image w-full md:w-1/3 flex justify-center">
            <img src="/me.jpeg" alt="Shamil" className="rounded-full shadow-2xl mx-auto w-48 h-48 sm:w-60 sm:h-60 md:w-72 md:h-72 object-cover border-4 border-white dark:border-gray-700" />
          </div>
          <div className="content w-full md:w-2/3 text-center md:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 dark:text-white">Hey, I'm <span className="text-orange-500">Shamil</span></h1>
            <div className="type-writer mt-4">
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-700 dark:text-gray-300">A Passionate Web Developer</h3>
              <p className="mt-4 text-gray-600 dark:text-gray-400 leading-relaxed">
                Motivated and results-driven BCA graduate seeking a challenging position as a Web Developer or Software
                Developer within a dynamic organization. Offering a strong foundation in frontend and backend
                development, software engineering, and problem-solving, with a proven ability to build scalable applications,
                optimize performance, and collaborate within cross-functional teams to deliver innovative solutions.
              </p>
              <div className="social-links mt-6 flex justify-center md:justify-start space-x-4 sm:space-x-5">
                <a href="https://github.com/muhmdshamil" target="_blank" rel="noopener noreferrer" className="text-gray-700 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400 text-3xl transition-transform duration-300 hover:scale-125"><FaGithub /></a>
                <a href="https://www.linkedin.com/in/muhammed-shamil-p/" target="_blank" rel="noopener noreferrer" className="text-gray-700 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400 text-3xl transition-transform duration-300 hover:scale-125"><FaLinkedin /></a>
                <a href="https://www.instagram.com/shmiiex/" target="_blank" rel="noopener noreferrer" className="text-gray-700 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400 text-3xl transition-transform duration-300 hover:scale-125"><FaInstagram /></a>
                <a href="#!" target="_blank" rel="noopener noreferrer" className="text-gray-700 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400 text-3xl transition-transform duration-300 hover:scale-125"><FaFacebook /></a>
              </div>
              <a href="/Resume.pdf" download="Resume.pdf" className="inline-block mt-8">
                <button className="bg-orange-500 text-white font-semibold py-2 px-6 sm:py-3 sm:px-8 rounded-lg shadow-lg hover:bg-orange-600 transform hover:scale-105 transition duration-300">
                  Download CV
                </button>
              </a>
            </div>
          </div>
        </div>
      </Fade>
    </section>
  );
};

export default About;
