import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram, FaFacebook } from 'react-icons/fa';
import { Fade } from "react-awesome-reveal";
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section
      id="about"
      className="pt-28 sm:pt-32 pb-16 sm:pb-20 scroll-mt-28 sm:scroll-mt-32 bg-gradient-to-b from-gray-50 via-white to-gray-100 dark:from-black dark:via-gray-900 dark:to-black"
    >
      <Fade direction="up" triggerOnce>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="max-w-6xl mx-auto px-4 sm:px-6"
        >
          <div className="relative">
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-orange-500/60 via-pink-500/50 to-purple-600/50 opacity-70 blur-md" />

            <div className="relative rounded-3xl bg-white/90 dark:bg-gray-950/90 border border-white/40 dark:border-white/10 backdrop-blur-sm shadow-xl shadow-black/30 px-5 py-7 sm:px-7 sm:py-8 md:px-10 md:py-10">
              <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
                <div className="w-full md:w-1/3 flex justify-center">
                  <div className="relative">
                    <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-orange-500 to-pink-500 opacity-60 blur-sm" />
                    <motion.img
                      src="/me.jpeg"
                      alt="Shamil"
                      className="relative rounded-full shadow-2xl mx-auto w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 object-cover border-4 border-white dark:border-gray-800"
                      animate={{ y: [0, -8, 0] }}
                      transition={{ duration: 6, ease: 'easeInOut', repeat: Infinity }}
                    />
                  </div>
                </div>

                <div className="w-full md:w-2/3 text-center md:text-left">
                  <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
                    Hey, I&apos;m <span className="text-orange-500">Shamil</span>
                  </h1>
                  <h3 className="mt-3 text-lg sm:text-2xl font-semibold text-gray-700 dark:text-gray-300">
                    A Passionate Web Developer
                  </h3>
                  <p className="mt-4 text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                    Motivated and results-driven BCA graduate seeking a challenging position as a Web Developer or
                    Software Developer within a dynamic organization. Offering a strong foundation in frontend and backend
                    development, software engineering, and problem-solving, with a proven ability to build scalable
                    applications, optimize performance, and collaborate within cross-functional teams to deliver
                    innovative solutions.
                  </p>

                  <div className="mt-6 flex justify-center md:justify-start gap-4 sm:gap-5">
                    <a
                      href="https://github.com/muhmdshamil"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-11 w-11 items-center justify-center rounded-full bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400 shadow-sm shadow-black/20 transition transform hover:-translate-y-0.5 hover:shadow-md"
                    >
                      <FaGithub className="text-xl" />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/muhammed-shamil-p/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-11 w-11 items-center justify-center rounded-full bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400 shadow-sm shadow-black/20 transition transform hover:-translate-y-0.5 hover:shadow-md"
                    >
                      <FaLinkedin className="text-xl" />
                    </a>
                    <a
                      href="https://www.instagram.com/shmiiex/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-11 w-11 items-center justify-center rounded-full bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400 shadow-sm shadow-black/20 transition transform hover:-translate-y-0.5 hover:shadow-md"
                    >
                      <FaInstagram className="text-xl" />
                    </a>
                    <a
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-11 w-11 items-center justify-center rounded-full bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400 shadow-sm shadow-black/20 transition transform hover:-translate-y-0.5 hover:shadow-md"
                    >
                      <FaFacebook className="text-xl" />
                    </a>
                  </div>

                  <a href="/Resume.pdf" download="Resume.pdf" className="inline-block mt-8">
                    <button className="inline-flex items-center gap-2 bg-orange-500 text-white font-semibold py-2.5 px-7 sm:py-3 sm:px-9 rounded-xl shadow-lg shadow-orange-500/30 hover:bg-orange-600 transform hover:-translate-y-0.5 hover:shadow-xl transition-all duration-300 text-sm sm:text-base">
                      Download CV
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </Fade>
    </section>
  );
};

export default About;
