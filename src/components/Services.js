import React from 'react';
import { FaCloud, FaLock, FaUsers } from 'react-icons/fa';
import { Fade } from 'react-awesome-reveal';
import { FiArrowUpRight } from 'react-icons/fi';

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
  return (
    <section id="services" className="py-16 sm:py-20 bg-white dark:bg-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <Fade direction="down" triggerOnce>
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 md:mb-16 text-gray-800 dark:text-white">What I Offer</h2>
        </Fade>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {services.map((service, index) => (
            <Fade key={index} direction="up" delay={index * 100} triggerOnce>
              <div className="group relative h-80 rounded-2xl overflow-hidden bg-gray-900 dark:bg-gray-800 ring-1 ring-black/5 dark:ring-white/10 shadow-lg transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl">
                {/* Background image */}
                <img
                  src={service.bg}
                  alt={service.title}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent transition-colors duration-500 group-hover:from-black/70" />

                {/* Top floating icons */}
                {service.topIcons && service.topIcons.length > 0 && (
                  <div className="absolute top-4 right-4 flex items-center gap-2 z-10">
                    {service.topIcons.map((Icon, i) => (
                      <span
                        key={i}
                        className="h-9 w-9 rounded-full bg-white/90 dark:bg-white/80 backdrop-blur flex items-center justify-center ring-1 ring-black/10 shadow-md transition-transform duration-300 group-hover:-translate-y-1"
                      >
                        <Icon className="text-gray-700" />
                      </span>
                    ))}
                  </div>
                )}

                {/* Tag chips */}
                <div className="absolute bottom-4 left-4 z-10 flex flex-wrap gap-2">
                  {service.tags?.map((tag, i) => (
                    <span
                      key={i}
                      className="rounded-full bg-white/90 dark:bg-white/80 text-gray-800 text-xs font-medium px-3 py-1 shadow"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Text content */}
                <div className="relative z-10 flex h-full items-end p-6">
                  <div>
                    <h3 className="text-white text-2xl sm:text-3xl font-semibold drop-shadow-md">{service.title}</h3>
                    <p className="mt-2 max-w-md text-gray-200 text-sm opacity-0 translate-y-2 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
                      {service.description}
                    </p>
                  </div>
                </div>

                {/* CTA button */}
                <a
                  href={service.href}
                  className="absolute bottom-6 right-6 inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/90 text-gray-900 ring-1 ring-black/10 shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl"
                  aria-label={`${service.title} details`}
                >
                  <FiArrowUpRight className="text-xl" />
                </a>
              </div>
            </Fade>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
