import React, { useState, useEffect, useContext } from 'react';
import { FaBars, FaTimes, FaSun, FaMoon } from 'react-icons/fa';
import { ThemeContext } from '../contexts/ThemeContext';
import { motion } from 'framer-motion';

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navBg = isScrolled
    ? 'bg-white/90 dark:bg-black/90 backdrop-blur border-b border-gray-200/60 dark:border-gray-800/80 shadow-sm'
    : 'bg-gradient-to-b from-black/40 via-black/20 to-transparent dark:from-black/60 dark:via-black/40 dark:to-transparent backdrop-blur';

  const linkBaseClasses =
    'relative text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400 transition-colors';

  const renderDesktopLink = (href, label) => (
    <a href={href} className={`${linkBaseClasses} pb-1`}>
      <span>{label}</span>
      <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-gradient-to-r from-orange-500 to-pink-500 transition-all duration-300 group-hover:w-full" />
    </a>
  );

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${navBg}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex justify-between items-center h-16 sm:h-20">
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="flex items-center gap-2"
        >
          <span className="text-xl sm:text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
            Shamil
          </span>
        </motion.div>

        <div className="hidden md:flex items-center gap-8">
          <div className="flex items-center gap-6 group">
            {renderDesktopLink('#about', 'About')}
            {renderDesktopLink('#skills', 'Skills')}
            {renderDesktopLink('#services', 'Services')}
            {renderDesktopLink('#projects', 'Projects')}
            {renderDesktopLink('#experience', 'Experience')}
            {renderDesktopLink('#contact', 'Contact')}
          </div>
          <button
            onClick={toggleTheme}
            className="ml-4 flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-800 shadow-sm shadow-black/10 transition-colors"
          >
            {theme === 'light' ? <FaMoon size={17} /> : <FaSun size={17} />}
          </button>
        </div>

        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={toggleTheme}
            className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-800 shadow-sm shadow-black/10 transition-colors"
          >
            {theme === 'light' ? <FaMoon size={17} /> : <FaSun size={17} />}
          </button>
          <button
            onClick={toggleMenu}
            className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-900/90 dark:bg-white/90 text-white dark:text-gray-900 shadow-md shadow-black/30 focus:outline-none z-50"
          >
            {isOpen ? <FaTimes size={18} /> : <FaBars size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black/40 backdrop-blur-sm z-30"
          onClick={toggleMenu}
        ></div>
      )}

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-0 right-0 h-full w-64 bg-white/95 dark:bg-gray-950/95 backdrop-blur-sm border-l border-gray-200/70 dark:border-gray-800/80 shadow-2xl transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 ease-in-out z-40`}
      >
        <div className="pt-20 pb-8 px-5 flex flex-col gap-3">
          {['About', 'Skills', 'Services', 'Projects', 'Experience', 'Contact'].map((label) => {
            const href = `#${label.toLowerCase()}`;
            return (
              <a
                key={label}
                href={href}
                onClick={toggleMenu}
                className="block text-center py-3 text-base font-medium text-gray-800 dark:text-gray-200 rounded-xl bg-gray-100/70 dark:bg-gray-900/80 hover:bg-orange-500 hover:text-white dark:hover:bg-orange-500 transition-all"
              >
                {label}
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
