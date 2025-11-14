import React from 'react';
import { Fade } from 'react-awesome-reveal';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-gray-200 dark:bg-black text-gray-800 dark:text-white py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
        <Fade direction="up" triggerOnce>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
          <div className="flex justify-center space-x-6 mb-4">
            <a href="https://github.com/shamil-p" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-orange-500 dark:hover:text-orange-400 transition-colors"><FaGithub size={24} /></a>
            <a href="https://www.linkedin.com/in/muhammed-shamil-p/" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-orange-500 dark:hover:text-orange-400 transition-colors"><FaLinkedin size={24} /></a>
            <a href="https://x.com/shamil_p_" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-orange-500 dark:hover:text-orange-400 transition-colors"><FaTwitter size={24} /></a>
          </div>
          <p className="text-md">Developed by <span className="font-semibold text-orange-500 dark:text-orange-400">Shamil</span> with ❤️</p>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-2"> {new Date().getFullYear()} Shamil. All Rights Reserved.</p>
          </motion.div>
        </Fade>
      </div>
    </footer>
  );
};

export default Footer;
