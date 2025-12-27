import React from 'react';
import { Fade } from 'react-awesome-reveal';
import { motion } from 'framer-motion';

const experiences = [
  {
    role: 'Backend Developer',
    company: 'Origa Network',
    logo: '/origa.jpg',
    website: 'https://www.linkedin.com/company/origa-networks/',
    duration: 'Feb 2024 - Present',
    description: 'As a key member of the backend team, I architect and maintain robust server-side applications using Node.js and Express. My work involves designing RESTful APIs, implementing secure authentication systems, and optimizing database performance to ensure a seamless user experience on a live, scalable project.'
  },
  {
    role: 'Computer Lab Assistant',
    company: 'Iss Arts and Science College',
    logo: '/iss logo.png',
    website: 'https://issartsandsciencecollege.com/',
    duration: 'June 2024 - Present',
    description: 'Assisted students and staff with basic computer, software, and printing issues. Maintained and monitored computer systems, ensuring proper functionality. Managed lab schedules, enforced lab rules, and ensured a safe working environment. Supported installation and troubleshooting of software and hardware issues.'
  }
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-24 bg-[#050505] relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none opacity-20">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-500/10 blur-[150px] rounded-full" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/10 blur-[150px] rounded-full" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
        <Fade direction="down" triggerOnce>
          <div className="text-center mb-16 md:mb-20">
            <span className="text-xs tracking-[0.4em] uppercase font-bold text-orange-500 mb-4 block px-4 py-2 bg-orange-500/10 rounded-full border border-orange-500/20 inline-block">
              Career Path
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-6 tracking-tighter">
              Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-500">Journey</span>
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto font-medium">
              A timeline of my growth, technical contributions, and the environments where I've honed my skills.
            </p>
          </div>
        </Fade>

        <div className="space-y-10">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: index * 0.2, ease: "easeOut" }}
              className="group relative"
            >
              <div className="absolute -inset-[1px] rounded-3xl bg-gradient-to-r from-orange-500/20 via-white/5 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />

              <div className="relative rounded-2xl bg-white/5 dark:bg-white/5 border border-white/10 backdrop-blur-xl p-8 sm:p-10 transition-all duration-500 group-hover:bg-white/[0.08]">
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  <div className="relative flex-shrink-0 group-hover:scale-110 transition-transform duration-500">
                    <div className="absolute -inset-2 rounded-2xl bg-gradient-to-tr from-orange-500 to-pink-500 opacity-20 blur-md group-hover:opacity-40" />
                    <img
                      src={exp.logo}
                      alt={`${exp.company} Logo`}
                      className="relative w-24 h-24 rounded-2xl object-cover border-2 border-white/20 shadow-2xl bg-white p-1"
                    />
                  </div>

                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
                      <div>
                        <h3 className="text-2xl sm:text-3xl font-bold text-white group-hover:text-orange-400 transition-colors">
                          {exp.role}
                        </h3>
                        <a
                          href={exp.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-lg font-medium text-gray-400 hover:text-white transition-colors flex items-center gap-2 mt-1"
                        >
                          @ {exp.company}
                          <span className="w-4 h-4 inline-block bg-white/10 rounded-md flex items-center justify-center text-[10px] opacity-0 group-hover:opacity-100 transition-opacity">↗</span>
                        </a>
                      </div>
                      <div className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-orange-400 font-bold text-sm whitespace-nowrap shadow-inner">
                        {exp.duration}
                      </div>
                    </div>

                    <p className="text-gray-300 text-lg leading-relaxed font-medium opacity-80 group-hover:opacity-100 transition-opacity">
                      {exp.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

