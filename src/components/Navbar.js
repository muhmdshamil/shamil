import React, { useState, useEffect, useContext } from 'react';
import { FaBars, FaTimes, FaSun, FaMoon } from 'react-icons/fa';
import { ThemeContext } from '../contexts/ThemeContext';

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

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white dark:bg-black shadow-md' : 'bg-transparent'}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex justify-between items-center h-20">
        <div className="text-2xl font-bold text-gray-800 dark:text-white">Shamil</div>
        <div className="hidden md:flex items-center space-x-8">
          <a href="#about" className="text-gray-600 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400 transition-colors font-medium">About</a>
          <a href="#skills" className="text-gray-600 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400 transition-colors font-medium">Skills</a>
          <a href="#services" className="text-gray-600 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400 transition-colors font-medium">Services</a>
          <a href="#projects" className="text-gray-600 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400 transition-colors font-medium">Projects</a>
          <a href="#experience" className="text-gray-600 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400 transition-colors font-medium">Experience</a>
          <a href="#contact" className="text-gray-600 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400 transition-colors font-medium">Contact</a>
          <button onClick={toggleTheme} className="p-2 rounded-full text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none">
            {theme === 'light' ? <FaMoon size={20} /> : <FaSun size={20} />}
          </button>
        </div>
        <div className="md:hidden flex items-center">
          <button onClick={toggleTheme} className="p-2 mr-2 rounded-full text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none">
            {theme === 'light' ? <FaMoon size={20} /> : <FaSun size={20} />}
          </button>
          <button onClick={toggleMenu} className="text-gray-800 dark:text-white focus:outline-none z-50">
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>
      {/* Mobile Menu Overlay */}
      {isOpen && <div className="md:hidden fixed inset-0 bg-black opacity-50 z-30" onClick={toggleMenu}></div>}
      {/* Mobile Menu */}
      <div className={`md:hidden fixed top-0 right-0 h-full w-64 bg-white dark:bg-black shadow-lg transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out z-40`}>
        <div className="pt-24 pb-8 px-4">
          <a href="#about" className="block text-center py-3 text-lg text-gray-700 dark:text-gray-300 hover:bg-orange-500 hover:text-white rounded-md transition-all" onClick={toggleMenu}>About</a>
          <a href="#skills" className="block text-center py-3 text-lg text-gray-700 dark:text-gray-300 hover:bg-orange-500 hover:text-white rounded-md transition-all" onClick={toggleMenu}>Skills</a>
          <a href="#services" className="block text-center py-3 text-lg text-gray-700 dark:text-gray-300 hover:bg-orange-500 hover:text-white rounded-md transition-all" onClick={toggleMenu}>Services</a>
          <a href="#projects" className="block text-center py-3 text-lg text-gray-700 dark:text-gray-300 hover:bg-orange-500 hover:text-white rounded-md transition-all" onClick={toggleMenu}>Projects</a>
          <a href="#experience" className="block text-center py-3 text-lg text-gray-700 dark:text-gray-300 hover:bg-orange-500 hover:text-white rounded-md transition-all" onClick={toggleMenu}>Experience</a>
          <a href="#contact" className="block text-center py-3 text-lg text-gray-700 dark:text-gray-300 hover:bg-orange-500 hover:text-white rounded-md transition-all" onClick={toggleMenu}>Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
