import React from 'react';
import { Fade } from 'react-awesome-reveal';
import { FaCheckCircle } from 'react-icons/fa';

const Banner = () => {
  return (
    <section id="banner" className="py-10 bg-gray-100 dark:bg-black border-y border-gray-200/60 dark:border-white/10">
      <Fade direction="up" triggerOnce>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="rounded-2xl bg-white/70 dark:bg-white/[0.06] backdrop-blur px-6 py-8 sm:px-10 sm:py-10 flex items-center justify-between gap-6 shadow-lg">
            <div className="flex items-center gap-4">
              <span className="hidden sm:inline-flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-green-500/20">
                <FaCheckCircle className="text-green-400 text-2xl sm:text-3xl" />
              </span>
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">Successfully completed 20+ projects</h3>
                <p className="text-gray-600 dark:text-gray-300 mt-1 text-sm sm:text-base">Delivering quality websites, apps, and interfaces with performance and polish.</p>
              </div>
            </div>
            <a href="#projects" className="hidden sm:inline-flex rounded-lg bg-orange-500 hover:bg-orange-600 text-white font-semibold px-5 py-3 transition">
              View Work
            </a>
          </div>
        </div>
      </Fade>
    </section>
  );
};

export default Banner;
