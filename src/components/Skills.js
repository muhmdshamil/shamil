import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaDatabase, FaGitAlt } from 'react-icons/fa';
import { SiExpress, SiMongodb, SiTailwindcss, SiTypescript, SiNextdotjs } from 'react-icons/si';

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
    <section id="skills" className="py-20 bg-gray-50 dark:bg-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white">My Skills</h2>
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={'auto'}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          modules={[EffectCoverflow, Pagination, Autoplay]}
          className="mySwiper"
        >
          {skills.map((skill, index) => (
            <SwiperSlide key={index} style={{ width: '250px', height: '250px' }}>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg h-full flex flex-col justify-center items-center text-center transform transition-transform duration-500 hover:scale-105">
                <div className={`text-6xl mb-4 ${skill.color}`}>{skill.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{skill.name}</h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Skills;
