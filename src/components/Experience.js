import React from 'react';
import { Fade } from 'react-awesome-reveal';
import { motion } from 'framer-motion';

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-20 bg-gradient-to-b from-gray-50 via-white to-gray-100 dark:from-black dark:via-gray-900 dark:to-black"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <Fade direction="down" triggerOnce>
          <div className="text-center mb-14 md:mb-16">
            <p className="text-sm tracking-[0.2em] uppercase text-orange-500 mb-3">Experience</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-3">
              Professional journey
            </h2>
            <p className="text-sm md:text-base text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
              A snapshot of the roles where I&apos;ve built reliable backend systems, shipped features, and worked closely
              with cross-functional teams.
            </p>
          </div>
        </Fade>

        <Fade direction="up" triggerOnce>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="relative"
          >
            <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-br from-orange-500/60 via-pink-500/50 to-purple-600/50 opacity-70 blur-sm" />

            <div className="relative rounded-2xl bg-white/90 dark:bg-gray-950/90 border border-white/40 dark:border-white/10 backdrop-blur-sm shadow-xl shadow-black/30 px-5 py-6 sm:px-7 sm:py-7 md:px-9 md:py-8">
              <div className="flex flex-col sm:flex-row gap-5 sm:gap-7 items-start">
                <div className="relative flex-shrink-0">
                  <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-orange-500 to-pink-500 opacity-60 blur-sm" />
                  <img
                    src="/origa.jpg"
                    alt="Origa Network Logo"
                    className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover border-4 border-white dark:border-gray-800 shadow-lg shadow-black/40"
                  />
                </div>

                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white">
                        Backend Developer
                      </h3>
                      <a
                        href="https://www.linkedin.com/company/origa-networks/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm sm:text-base font-medium text-blue-600 hover:text-blue-500 hover:underline"
                      >
                        @ Origa Network
                      </a>
                    </div>
                    <p className="text-xs sm:text-sm font-medium text-gray-500 dark:text-gray-400 bg-gray-100/70 dark:bg-gray-900/80 px-3 py-1 rounded-full inline-flex items-center justify-center self-start">
                      Feb 2024 - Present
                    </p>
                  </div>

                  <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                    As a key member of the backend team, I architect and maintain robust server-side applications using
                    Node.js and Express. My work involves designing RESTful APIs, implementing secure authentication
                    systems, and optimizing database performance to ensure a seamless user experience on a live,
                    scalable project.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </Fade>
      </div>
    </section>
  );
};

export default Experience;
