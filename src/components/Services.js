import React from 'react';
import { FaLaptopCode, FaServer, FaMobileAlt, FaCogs, FaPalette, FaCloudUploadAlt } from 'react-icons/fa';
import { Fade } from 'react-awesome-reveal';

const services = [
  {
    icon: <FaLaptopCode className="text-5xl text-blue-500" />,
    title: 'Frontend Development',
    description: 'Creating beautiful and responsive user interfaces with modern technologies like React and Tailwind CSS.',
  },
  {
    icon: <FaServer className="text-5xl text-green-500" />,
    title: 'Backend Development',
    description: 'Developing efficient, scalable, and secure backend systems with Node.js and databases.',
  },
  {
    icon: <FaMobileAlt className="text-5xl text-purple-500" />,
    title: 'Responsive Design',
    description: 'Ensuring a seamless experience across all devices with mobile-friendly designs.',
  },
  {
    icon: <FaPalette className="text-5xl text-red-500" />,
    title: 'UI/UX Design',
    description: 'Designing intuitive and engaging user experiences with a focus on usability and aesthetics.',
  },
  {
    icon: <FaCloudUploadAlt className="text-5xl text-indigo-500" />,
    title: 'Web Deployment',
    description: 'Deploying and managing web applications on cloud platforms for high availability and scalability.',
  },
  {
    icon: <FaCogs className="text-5xl text-orange-500" />,
    title: 'SEO Optimization',
    description: 'Improving website visibility with SEO best practices and performance optimization.',
  },
];

const Services = () => {
  return (
    <section id="services" className="py-16 sm:py-20 bg-white dark:bg-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <Fade direction="down" triggerOnce>
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 md:mb-16 text-gray-800 dark:text-white">What I Offer</h2>
        </Fade>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 text-center">
          {services.map((service, index) => (
            <Fade key={index} direction="up" delay={index * 100} triggerOnce>
              <div className="bg-gray-100 dark:bg-gray-700 p-6 sm:p-8 rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 h-full">
                <div className="mb-4 inline-block">{service.icon}</div>
                <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-gray-900 dark:text-white">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{service.description}</p>
              </div>
            </Fade>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
