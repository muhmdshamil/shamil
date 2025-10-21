import React, { useEffect, useRef, useState } from 'react';
import { Fade } from 'react-awesome-reveal';
import { FiArrowUpRight, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { FaFilm, FaShieldAlt, FaGem, FaCalculator, FaTasks, FaDumbbell } from 'react-icons/fa';

const projects = [
  {
    title: 'Gym.pro',
    description: 'Modern fitness platform with workout tracking and exercise library.',
    href: 'https://gym-pro-f.vercel.app/',
    bg: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1600&auto=format&fit=crop',
    topIcons: [FaDumbbell],
    tags: ['Fitness', 'React'],
  },
  {
    title: 'TMDB Model Movie Website',
    description: 'Movie discovery app using TMDB-style interface and flows.',
    href: 'https://tmdb-eight-cyan.vercel.app/',
    bg: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=1600&auto=format&fit=crop',
    topIcons: [FaFilm],
    tags: ['React', 'API'],
  },
  {
    title: 'Disaster Management System',
    description: 'College project for incident reporting and coordination.',
    href: 'https://lnkd.in/eGUC7RPV',
    bg: 'https://images.unsplash.com/photo-1526378722484-bd91ca387e72?q=80&w=1600&auto=format&fit=crop',
    topIcons: [FaShieldAlt],
    tags: ['Coordination', 'Reporting'],
  },
  {
    title: 'Jewellery Frontend',
    description: 'Elegant storefront UI for jewellery catalogue.',
    href: 'https://jewellary-eight.vercel.app/',
    bg: 'https://images.unsplash.com/photo-1543294001-f7cd5d7fb516?q=80&w=1600&auto=format&fit=crop',
    topIcons: [FaGem],
    tags: ['UI', 'E‑commerce'],
  },
  {
    title: 'Simple JS Calculator',
    description: 'Vanilla JS calculator built for speed and simplicity.',
    href: 'https://muhmdshamil.github.io/Calculater/',
    bg: 'https://images.unsplash.com/photo-1551281044-8d8c5aa0b212?q=80&w=1600&auto=format&fit=crop',
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
  const trackRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemWidthRef = useRef(0);
  const [isPaused, setIsPaused] = useState(false);
  const autoTimerRef = useRef(null);
  const AUTOPLAY_MS = 4000;

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    const update = () => {
      const first = el.querySelector('.carousel-item');
      if (first) {
        const styles = window.getComputedStyle(el);
        const gap = parseFloat(styles.columnGap || styles.gap || '24');
        itemWidthRef.current = first.clientWidth + gap;
      }
    };
    update();
    window.addEventListener('resize', update);

    const onScroll = () => {
      if (!itemWidthRef.current) return;
      const idx = Math.round(el.scrollLeft / itemWidthRef.current);
      setCurrentIndex(Math.max(0, Math.min(projects.length - 1, idx)));
    };
    el.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      window.removeEventListener('resize', update);
      el.removeEventListener('scroll', onScroll);
    };
  }, []);

  useEffect(() => {
    const onVis = () => setIsPaused(document.hidden);
    document.addEventListener('visibilitychange', onVis);
    return () => document.removeEventListener('visibilitychange', onVis);
  }, []);

  const scrollToIndex = (idx) => {
    const el = trackRef.current;
    if (!el || !itemWidthRef.current) return;
    el.scrollTo({ left: idx * itemWidthRef.current, behavior: 'smooth' });
    setCurrentIndex(idx);
  };

  const handlePrev = () => scrollToIndex(Math.max(0, currentIndex - 1));
  const handleNext = () => scrollToIndex(Math.min(projects.length - 1, currentIndex + 1));

  useEffect(() => {
    if (isPaused) return;
    autoTimerRef.current = setInterval(() => {
      const next = (currentIndex + 1) % projects.length;
      scrollToIndex(next);
    }, AUTOPLAY_MS);
    return () => clearInterval(autoTimerRef.current);
  }, [currentIndex, isPaused]);

  return (
    <section id="projects" className="py-16 sm:py-20 bg-white dark:bg-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <Fade direction="down" triggerOnce>
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 md:mb-16 text-gray-800 dark:text-white">Projects</h2>
        </Fade>
        <div className="relative">
          {/* Carousel Track */}
          <div
            ref={trackRef}
            className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth gap-6 pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onTouchStart={() => setIsPaused(true)}
            onTouchEnd={() => setIsPaused(false)}
          >
            {projects.map((p, idx) => (
              <div key={idx} className="carousel-item snap-center shrink-0 w-[85%] sm:w-[70%] lg:w-[45%] xl:w-[40%]">
                <div className={`group relative h-80 rounded-2xl overflow-hidden bg-gray-900 dark:bg-gray-800 ring-1 ring-black/5 dark:ring-white/10 shadow-lg transition-all duration-500 ease-out ${idx === currentIndex ? 'scale-[1.02] shadow-2xl' : 'scale-100'} hover:scale-[1.03]`}>
                  {/* Background image */}
                  <img
                    src={p.bg}
                    alt={p.title}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 filter group-hover:brightness-110 group-hover:contrast-105"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent transition-colors duration-500 group-hover:from-black/70 group-hover:via-black/30 group-hover:to-black/10" />

                  {/* Top floating icons (like Services) */}
                  {p.topIcons && p.topIcons.length > 0 && (
                    <div className="absolute top-4 right-4 flex items-center gap-2 z-10">
                      {p.topIcons.map((Icon, i) => (
                        <span
                          key={i}
                          className="h-9 w-9 rounded-full bg-white/90 dark:bg-white/80 backdrop-blur flex items-center justify-center ring-1 ring-black/10 shadow-md transition-transform duration-300 group-hover:-translate-y-1 group-hover:scale-105"
                        >
                          <Icon className="text-gray-700" />
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Tags */}
                  <div className="absolute bottom-4 left-4 z-10 flex flex-wrap gap-2 opacity-0 translate-y-1 transition-all duration-300 delay-150 group-hover:opacity-100 group-hover:translate-y-0">
                    {p.tags?.map((t, i) => (
                      <span key={i} className="rounded-full bg-white/90 dark:bg-white/80 text-gray-800 text-xs font-medium px-3 py-1 shadow">
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Text content */}
                  <div className="relative z-10 flex h-full items-end p-6">
                    <div>
                      <h3 className="text-white text-2xl sm:text-3xl font-semibold drop-shadow-md">{p.title}</h3>
                      <p className="mt-2 max-w-md text-gray-200 text-sm opacity-0 translate-y-2 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
                        {p.description}
                      </p>
                    </div>
                  </div>

                  {/* CTA button opens project */}
                  <a
                    href={p.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute bottom-6 right-6 z-20 inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/90 text-gray-900 ring-1 ring-black/10 shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl group-hover:rotate-45"
                    aria-label={`${p.title} link`}
                  >
                    <FiArrowUpRight className="text-xl" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Edge gradients */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-white dark:from-black to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-white dark:from-black to-transparent" />

          {/* Controls */}
          <button
            onClick={handlePrev}
            aria-label="Previous"
            className="absolute -left-2 sm:-left-3 top-1/2 -translate-y-1/2 h-10 w-10 sm:h-11 sm:w-11 rounded-full bg-white/90 text-gray-900 ring-1 ring-black/10 shadow-md hover:shadow-lg hover:bg-white transition-all flex items-center justify-center"
          >
            <FiChevronLeft className="text-xl" />
          </button>
          <button
            onClick={handleNext}
            aria-label="Next"
            className="absolute -right-2 sm:-right-3 top-1/2 -translate-y-1/2 h-10 w-10 sm:h-11 sm:w-11 rounded-full bg-white/90 text-gray-900 ring-1 ring-black/10 shadow-md hover:shadow-lg hover:bg-white transition-all flex items-center justify-center"
          >
            <FiChevronRight className="text-xl" />
          </button>

          {/* Dots */}
          <div className="mt-6 flex justify-center gap-2">
            {projects.map((_, i) => (
              <button
                key={i}
                aria-label={`Go to slide ${i + 1}`}
                onClick={() => scrollToIndex(i)}
                className={`${i === currentIndex ? 'w-6 bg-gray-900 dark:bg-white' : 'w-2.5 bg-gray-300 dark:bg-gray-600'} h-2.5 rounded-full transition-all`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
