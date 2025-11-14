import React from 'react';
import { Fade } from 'react-awesome-reveal';
import { FiArrowUpRight } from 'react-icons/fi';
import { FaFilm, FaShieldAlt, FaGem, FaCalculator, FaTasks, FaDumbbell } from 'react-icons/fa';
import { motion } from 'framer-motion';

const projects = [
   {
    title: 'Campus Recruitment System',
    description: 'End-to-end campus hiring portal for students, recruiters, and admins.',
    href: 'https://campusrec-io.vercel.app/',
    bg: '/images/2.png',
    topIcons: [FaTasks],
    tags: ['Placement', 'Portal'],
  },
  {
    title: 'Gym.pro',
    description: 'Modern fitness platform with workout tracking and exercise library.',
    href: 'https://gym-pro-f.vercel.app/',
    bg: '/images/1.png',
    topIcons: [FaDumbbell],
    tags: ['Fitness', 'React'],
  },
  {
    title: 'TMDB Model Movie Website',
    description: 'Movie discovery app using TMDB-style interface and flows.',
    href: 'https://tmdb-eight-cyan.vercel.app/',
    bg: '/images/6.png',
    topIcons: [FaFilm],
    tags: ['React', 'API'],
  },
  {
    title: 'Disaster Management System',
    description: 'College project for incident reporting and coordination.',
    href: 'https://lnkd.in/eGUC7RPV',
    bg: '/images/5.png',
    topIcons: [FaShieldAlt],
    tags: ['Coordination', 'Reporting'],
  },
  {
    title: 'Jewellery Frontend',
    description: 'Elegant storefront UI for jewellery catalogue.',
    href: 'https://jewellary-eight.vercel.app/',
    bg: '/images/3.png',
    topIcons: [FaGem],
    tags: ['UI', 'E‑commerce'],
  },
  {
    title: 'Simple JS Calculator',
    description: 'Vanilla JS calculator built for speed and simplicity.',
    href: 'https://muhmdshamil.github.io/Calculater/',
    bg: '/images/4.png',
    topIcons: [FaCalculator],
    tags: ['JavaScript', 'Utility'],
  },
  {
    title: 'Todo App',
    description: 'Task manager to keep your day organized.',
    href: 'https://muhmdshamil.github.io/ToduApp.js/',
    bg: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=1600&auto=format&fit=crop',
    topIcons: [FaTasks],
    tags: ['Productivity', 'LocalStorage'],
  },
];

const Projects = () => {
  const firstRow = projects.slice(0, 4);
  const secondRow = projects.slice(4);

  const renderCard = (p, idx) => (
    <div key={idx} className="group relative h-80 rounded-2xl">
      <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-br from-orange-500/60 via-pink-500/50 to-purple-600/50 opacity-70 blur-sm group-hover:opacity-90 transition-opacity duration-500" />

      <div className="relative h-full rounded-2xl overflow-hidden bg-gray-950 dark:bg-black border border-white/10 dark:border-white/10 shadow-xl shadow-black/40">
        {/* Background image */}
        <img
          src={p.bg}
          alt={p.title}
          className="absolute inset-0 h-full w-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-700 ease-out group-hover:scale-110"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/65 to-black/10" />

        {/* Top floating icons */}
        {p.topIcons && p.topIcons.length > 0 && (
          <div className="absolute top-4 right-4 flex items-center gap-2 z-10">
            {p.topIcons.map((Icon, i) => (
              <span
                key={i}
                className="h-9 w-9 rounded-xl bg-white/90 dark:bg-white/85 backdrop-blur flex items-center justify-center ring-1 ring-black/10 shadow-md shadow-black/30 transition-transform duration-300 group-hover:-translate-y-1 group-hover:scale-105"
              >
                <Icon className="text-gray-700" />
              </span>
            ))}
          </div>
        )}

        {/* Tags */}
        <div className="absolute inset-x-0 bottom-4 px-4 flex flex-wrap gap-2 z-10 opacity-0 translate-y-1 transition-all duration-300 delay-150 group-hover:opacity-100 group-hover:translate-y-0">
          {p.tags?.map((t, i) => (
            <span
              key={i}
              className="rounded-full bg-white/95 text-gray-900 text-[11px] font-medium px-3 py-1 shadow-sm shadow-black/20"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Text content */}
        <div className="relative z-10 flex h-full items-end p-6">
          <div>
            <h3 className="text-white text-2xl sm:text-[1.6rem] font-semibold drop-shadow-[0_6px_18px_rgba(0,0,0,0.8)]">
              {p.title}
            </h3>
            <p className="mt-2 max-w-md text-gray-200/95 text-sm leading-relaxed opacity-80 group-hover:opacity-100 transition-opacity duration-400">
              {p.description}
            </p>
          </div>
        </div>

        {/* CTA button opens project */}
        <a
          href={p.href}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute bottom-6 right-6 z-20 inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/95 text-gray-900 ring-1 ring-black/10 shadow-lg shadow-black/40 transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl group-hover:rotate-45"
          aria-label={`${p.title} link`}
        >
          <FiArrowUpRight className="text-lg" />
        </a>
      </div>
    </div>
  );

  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-b from-gray-50 via-white to-gray-100 dark:from-black dark:via-gray-900 dark:to-black"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="max-w-6xl mx-auto px-4 sm:px-6"
      >
        <Fade direction="down" triggerOnce>
          <div className="text-center mb-12 md:mb-14">
            <p className="text-sm tracking-[0.2em] uppercase text-orange-500 mb-3">Projects</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-3">
              Work I&apos;ve built
            </h2>
            <p className="text-sm md:text-base text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
              A selection of apps and experiments that highlight my experience with modern frontend, backend, and
              product-focused development.
            </p>
          </div>
        </Fade>

        <div className="space-y-8 md:space-y-10">
          {/* Mobile: horizontal scroll list */}
          <div className="sm:hidden -mx-4 pb-4">
            <div className="flex overflow-x-auto gap-4 px-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {projects.map((p, idx) => (
                <div key={idx} className="w-72 shrink-0">
                  {renderCard(p, idx)}
                </div>
              ))}
            </div>
          </div>

          {/* Tablet & Desktop: 2-row grid (4 + 3) */}
          <div className="hidden sm:block space-y-8 md:space-y-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {firstRow.map((p, idx) => (
                <div key={idx}>{renderCard(p, idx)}</div>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {secondRow.map((p, idx) => (
                <div key={idx}>{renderCard(p, idx + firstRow.length)}</div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
