import React from 'react';
import { Fade } from 'react-awesome-reveal';
import { FiArrowUpRight, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { FaFilm, FaShieldAlt, FaGem, FaCalculator, FaTasks, FaDumbbell, FaStore, FaTools, FaHome } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectCoverflow, FreeMode } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import 'swiper/css/free-mode';

const projects = [
  {
    title: 'Searock',
    description: 'Welcome to searock Building your home is a dream, and we know the process can be challenging. At Searock, we’re here to make it easier. For 30 years, families have trusted us not just for products, but for clear and honest guidance. Our purpose is simple: helping you choose the right products so your home-building journey feels smoother and more confident.',
    href: 'https://searock.vercel.app/',
    bg: '/images/9.png',
    topIcons: [FaHome, FaShieldAlt],
    tags: ['Construction', 'Real Estate'],
  },
  {
    title: 'Ozmia Gold & Diamonds',
    description: 'E-commerce website for jewellery catalogue.',
    href: 'https://www.ozmiagoldanddiamonds.com/',
    bg: '/images/7.png',
    topIcons: [FaStore],
    tags: ['E-commerce', 'Website'],
  },
  {
    title: 'Entetile Sass Deatil Web',
    description: 'Complete Tiles Inventory Management System.',
    href: 'https://www.entetile.com/',
    bg: '/images/8.png',
    topIcons: [FaTools],
    tags: ['Inventory', 'Management'],
  },
  {
    title: 'Campus Recruitment System',
    description: 'End-to-end campus hiring portal for students, recruiters, and admins.',
    href: 'https://campusrec-io.vercel.app/',
    bg: '/images/2.png',
    topIcons: [FaTasks],
    tags: ['Recruitment', 'Portal'],
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
  const renderCard = (p, idx) => (
    <motion.div
      layout
      key={idx}
      className="group relative h-[450px] w-full rounded-2xl cursor-grab active:cursor-grabbing"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: idx * 0.1 }}
    >
      <div className="absolute -inset-[1px] rounded-3xl bg-gradient-to-br from-orange-500/40 via-pink-500/30 to-purple-600/30 opacity-40 blur-md group-hover:opacity-100 transition-opacity duration-700" />

      <div className="relative h-full rounded-2xl overflow-hidden bg-gray-950 dark:bg-black border border-white/10 shadow-2xl shadow-black/60">
        {/* Background image with parallax effect simulation */}
        <motion.img
          src={p.bg}
          alt={p.title}
          className="absolute inset-0 h-full w-full object-cover opacity-60 group-hover:opacity-80 transition-all duration-700 ease-out"
          whileHover={{ scale: 1.15 }}
        />

        {/* Animated Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90 group-hover:opacity-75 transition-opacity" />

        {/* Top floating icons */}
        {p.topIcons && p.topIcons.length > 0 && (
          <div className="absolute top-6 right-6 flex items-center gap-3 z-30">
            {p.topIcons.map((Icon, i) => (
              <motion.span
                key={i}
                whileHover={{ y: -5, scale: 1.1 }}
                className="h-12 w-12 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center text-white shadow-xl"
              >
                <Icon size={22} className="drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]" />
              </motion.span>
            ))}
          </div>
        )}

        {/* Text content */}
        <div className="absolute inset-0 z-20 flex flex-col justify-end p-8">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-4">
              {p.tags?.map((t, i) => (
                <span
                  key={i}
                  className="rounded-full bg-orange-500/20 text-orange-400 text-[10px] uppercase tracking-wider font-bold px-3 py-1 border border-orange-500/30 backdrop-blur-sm"
                >
                  {t}
                </span>
              ))}
            </div>

            <h3 className="text-white text-3xl font-bold mb-3 tracking-tight group-hover:text-orange-400 transition-colors">
              {p.title}
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed mb-6 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
              {p.description}
            </p>
          </motion.div>
        </div>

        {/* CTA button opens project */}
        <motion.a
          href={p.href}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1, rotate: 45 }}
          whileTap={{ scale: 0.9 }}
          className="absolute bottom-8 right-8 z-30 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-500 text-white shadow-[0_10px_30px_-10px_rgba(249,115,22,0.5)] group-hover:shadow-[0_15px_40px_-10px_rgba(249,115,22,0.7)] transition-all duration-300"
          aria-label={`${p.title} link`}
        >
          <FiArrowUpRight size={24} />
        </motion.a>
      </div>
    </motion.div>
  );

  return (
    <section
      id="projects"
      className="relative py-24 bg-[#050505] overflow-hidden"
    >
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-orange-500/20 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-500/20 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 relative z-10">
        <Fade direction="down" triggerOnce>
          <div className="text-center mb-16 md:mb-20">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-block"
            >
              <span className="text-xs tracking-[0.4em] uppercase font-bold text-orange-500 mb-4 block px-4 py-2 bg-orange-500/10 rounded-full border border-orange-500/20">
                Showcase
              </span>
            </motion.div>
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-black text-white mb-6 tracking-tighter">
              Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-500">Creativity</span>
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto font-medium">
              A curated collection of digital experiences built with precision, performance, and passion.
            </p>
          </div>
        </Fade>

        {/* Swiper Carousel */}
        <div className="relative px-4 sm:px-12 group/carousel">
          <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={'auto'}
            loop={true}
            speed={800}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            coverflowEffect={{
              rotate: 5,
              stretch: 0,
              depth: 100,
              modifier: 2.5,
              slideShadows: false,
            }}
            navigation={{
              nextEl: '.swiper-button-next-custom',
              prevEl: '.swiper-button-prev-custom',
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            modules={[EffectCoverflow, Pagination, Navigation, Autoplay, FreeMode]}
            className="!pb-24 !pt-10"
            breakpoints={{
              320: { slidesPerView: 1, spaceBetween: 20 },
              640: { slidesPerView: 1.5, spaceBetween: 30 },
              1024: { slidesPerView: 2.5, spaceBetween: 40 },
              1280: { slidesPerView: 3, spaceBetween: 50 },
            }}
          >
            {projects.map((p, idx) => (
              <SwiperSlide key={idx} className="!w-[320px] sm:!w-[450px]">
                {renderCard(p, idx)}
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Buttons */}
          <div className="hidden sm:block">
            <button className="swiper-button-prev-custom absolute left-0 top-1/2 -translate-y-1/2 z-30 h-16 w-16 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-white backdrop-blur-xl hover:bg-orange-500 hover:border-orange-500 transition-all duration-300 opacity-0 group-hover/carousel:opacity-100 -translate-x-8 group-hover/carousel:translate-x-0">
              <FiChevronLeft size={30} />
            </button>
            <button className="swiper-button-next-custom absolute right-0 top-1/2 -translate-y-1/2 z-30 h-16 w-16 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-white backdrop-blur-xl hover:bg-orange-500 hover:border-orange-500 transition-all duration-300 opacity-0 group-hover/carousel:opacity-100 translate-x-8 group-hover/carousel:translate-x-0">
              <FiChevronRight size={30} />
            </button>
          </div>
        </div>

        {/* Global style for Swiper pagination */}
        <style dangerouslySetInnerHTML={{
          __html: `
          .swiper-pagination-bullet {
            background: #444 !important;
            opacity: 1 !important;
            width: 12px !important;
            height: 12px !important;
            transition: all 0.3s ease !important;
          }
          .swiper-pagination-bullet-active {
            background: #f97316 !important;
            width: 30px !important;
            border-radius: 6px !important;
          }
        `}} />
      </div>

      {/* Footer Decoration */}
      <div className="max-w-6xl mx-auto px-4 mt-20 border-t border-white/5 pt-10 text-center">
        <p className="text-gray-500 text-xs tracking-widest uppercase">Scroll or drag to explore projects</p>
      </div>
    </section>
  );
};

export default Projects;
