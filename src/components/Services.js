import React from 'react';
import { FaCloud, FaLock, FaUsers } from 'react-icons/fa';
import { Fade } from 'react-awesome-reveal';
import { FiArrowUpRight } from 'react-icons/fi';
import { motion } from 'framer-motion';

const services = [
  {
    title: 'Web Development',
    description:
      'Full‑stack websites and web apps built for speed, SEO, and scalability.',
    bg:
      'https://images.unsplash.com/photo-1508830524289-0adcbe822b40?q=80&w=1600&auto=format&fit=crop',
    tags: ['SEO‑friendly', 'Scalable'],
    href: '#contact',
    topIcons: [FaCloud, FaLock],
  },
  {
    title: 'Frontend Development',
    description:
      'React + Tailwind CSS to craft fast, accessible, and beautiful UIs.',
    bg:
      'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1600&auto=format&fit=crop',
    tags: ['Performance', 'Accessible'],
    href: '#contact',
    topIcons: [FaUsers],
  },
  {
    title: 'Backend Development',
    description:
      'Robust APIs, authentication, and integrations powered by Node.js.',
    bg:
      'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1600&auto=format&fit=crop',
    tags: ['Secure', 'Reliable'],
    href: '#contact',
    topIcons: [FaLock, FaCloud],
  },
  {
    title: 'Database Design',
    description:
      'Schema design, optimization, and backups for SQL/NoSQL systems.',
    bg:
      'https://images.unsplash.com/photo-1510511459019-5dda7724fd87?q=80&w=1600&auto=format&fit=crop',
    tags: ['Optimized', 'Reliable'],
    href: '#contact',
    topIcons: [FaLock],
  },
  {
    title: 'Responsive Design',
    description:
      'Mobile‑first layouts that adapt cleanly to every screen size.',
    bg:
      'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=1600&auto=format&fit=crop',
    tags: ['Mobile‑first', 'Cross‑browser'],
    href: '#contact',
    topIcons: [FaUsers],
  },
  {
    title: 'UI/UX Design',
    description:
      'Clean interfaces and user‑centered flows that convert.',
    bg: 'https://miro.medium.com/v2/resize:fit:1200/1*U4TabkCozgfZN1ioqFim7g.jpeg',
    tags: ['User‑Centric', 'Accessible'],
    href: '#contact',
    topIcons: [FaUsers],
  },
];

const Services = () => {
  const renderServiceCard = (service, index) => (
    <Fade key={index} direction="up" delay={index * 80} triggerOnce>
      <motion.div
        whileHover={{ y: -6, scale: 1.01 }}
        className="group relative h-80 rounded-2xl"
      >
        <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-br from-orange-500/50 via-pink-500/40 to-purple-500/40 opacity-60 group-hover:opacity-90 blur-sm transition-all duration-500" />

        <div className="relative h-full rounded-2xl overflow-hidden bg-gray-950 dark:bg-black border border-white/10 dark:border-white/10 shadow-xl shadow-black/30">
          <img
            src={service.bg}
            alt={service.title}
            className="absolute inset-0 h-full w-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/65 to-black/10" />

          {service.topIcons && service.topIcons.length > 0 && (
            <div className="absolute top-4 right-4 flex items-center gap-2 z-10">
              {service.topIcons.map((Icon, i) => (
                <span
                  key={i}
                  className="h-9 w-9 rounded-xl bg-white/90 dark:bg-white/85 backdrop-blur flex items-center justify-center ring-1 ring-black/10 shadow-md shadow-black/30 transition-transform duration-300 group-hover:-translate-y-1"
                >
                  <Icon className="text-gray-700" />
                </span>
              ))}
            </div>
          )}

          <div className="absolute inset-x-0 bottom-4 px-4 flex flex-wrap gap-2 z-10">
            {service.tags?.map((tag, i) => (
              <span
                key={i}
                className="rounded-full bg-white/95 text-gray-900 text-[11px] font-medium px-3 py-1 shadow-sm shadow-black/20"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="relative z-10 flex h-full items-end p-6">
            <div>
              <h3 className="text-white text-2xl sm:text-[1.45rem] font-semibold drop-shadow-[0_6px_18px_rgba(0,0,0,0.8)]">
                {service.title}
              </h3>
              <p className="mt-2 max-w-xs text-gray-200/90 text-xs sm:text-sm leading-relaxed opacity-80 group-hover:opacity-100 transition-opacity duration-400">
                {service.description}
              </p>
            </div>
          </div>

          <a
            href={service.href}
            className="absolute bottom-6 right-6 inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/95 text-gray-900 ring-1 ring-black/10 shadow-lg shadow-black/40 transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl"
            aria-label={`${service.title} details`}
          >
            <FiArrowUpRight className="text-lg" />
          </a>
        </div>
      </motion.div>
    </Fade>
  );

  return (
    <section
      id="services"
      className="py-20 bg-gradient-to-b from-gray-50 via-white to-gray-100 dark:from-black dark:via-gray-900 dark:to-black"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <Fade direction="down" triggerOnce>
          <div className="text-center mb-14 md:mb-16">
            <p className="text-sm tracking-[0.2em] uppercase text-orange-500 mb-3">Services</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              What I can do for you
            </h2>
            <p className="text-sm md:text-base text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
              From idea to deployment, I help you design, build, and launch modern digital experiences that feel fast,
              polished, and reliable.
            </p>
          </div>
        </Fade>

        <div className="space-y-8 md:space-y-10">
          {/* Mobile: horizontal scroll list */}
          <div className="sm:hidden -mx-4">
            <div className="flex overflow-x-auto gap-4 px-4 pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {services.map((service, index) => (
                <div key={index} className="w-72 shrink-0">
                  {renderServiceCard(service, index)}
                </div>
              ))}
            </div>
          </div>

          {/* Tablet & Desktop: grid */}
          <div className="hidden sm:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 md:gap-8">
            {services.map((service, index) => renderServiceCard(service, index))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
