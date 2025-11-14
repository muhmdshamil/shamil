import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaDatabase, FaGitAlt } from 'react-icons/fa';
import { SiExpress, SiMongodb, SiTailwindcss, SiTypescript, SiNextdotjs } from 'react-icons/si';
import { motion } from 'framer-motion';

const skills = [
  { name: 'HTML', icon: <FaHtml5 />, color: 'text-orange-500' },
  { name: 'CSS', icon: <FaCss3Alt />, color: 'text-blue-500' },
  { name: 'JavaScript', icon: <FaJsSquare />, color: 'text-yellow-400' },
  { name: 'TypeScript', icon: <SiTypescript />, color: 'text-blue-600' },
  { name: 'React', icon: <FaReact />, color: 'text-cyan-400' },
  { name: 'Next.js', icon: <SiNextdotjs />, color: 'dark:text-white text-black' },
  { name: 'Node.js', icon: <FaNodeJs />, color: 'text-green-500' },
  { name: 'Express.js', icon: <SiExpress />, color: 'dark:text-white text-gray-700' },
  { name: 'MongoDB', icon: <SiMongodb />, color: 'text-green-600' },
  { name: 'SQL', icon: <FaDatabase />, color: 'text-sky-600' },
  { name: 'Tailwind CSS', icon: <SiTailwindcss />, color: 'text-cyan-500' },
  { name: 'Git', icon: <FaGitAlt />, color: 'text-red-500' },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-20 bg-gradient-to-b from-gray-50 via-white to-gray-100 dark:from-black dark:via-gray-900 dark:to-black"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="max-w-6xl mx-auto px-4 sm:px-6"
      >
        <div className="text-center mb-10 md:mb-12">
          <p className="text-sm tracking-[0.2em] uppercase text-orange-500 mb-3">Skills</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-3">
            Tools I work with
          </h2>
          <p className="text-sm md:text-base text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
            A stack focused on building fast, maintainable, and delightful web experiences across the full
            JavaScript/TypeScript ecosystem.
          </p>
        </div>

        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={'auto'}
          coverflowEffect={{
            rotate: 40,
            stretch: 0,
            depth: 120,
            modifier: 1,
            slideShadows: true,
          }}
          autoplay={{
            delay: 2200,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          modules={[EffectCoverflow, Pagination, Autoplay]}
          className="mySwiper"
        >
          {skills.map((skill, index) => (
            <SwiperSlide key={index} style={{ width: '240px', height: '240px' }}>
              <div className="relative h-full flex items-center justify-center">
                <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-br from-orange-500/60 via-pink-500/50 to-purple-600/50 opacity-70 blur-sm" />
                <div className="relative h-full w-full rounded-2xl bg-white/90 dark:bg-gray-950/90 border border-white/40 dark:border-white/10 backdrop-blur-sm shadow-xl shadow-black/30 flex flex-col justify-center items-center text-center px-6">
                  <div className={`text-6xl mb-4 drop-shadow-sm ${skill.color}`}>{skill.icon}</div>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-1">
                    {skill.name}
                  </h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    Core technology I use in modern web projects.
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </section>
  );
};

export default Skills;
