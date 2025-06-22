import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Code2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isProjectPage = location.pathname.startsWith('/project/');

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const navItems = [
    { name: 'About', href: isProjectPage ? '/#about' : '#about' },
    { name: 'Experience', href: isProjectPage ? '/#experience' : '#experience' },
    { name: 'Projects', href: isProjectPage ? '/#projects' : '#projects' },
    { name: 'Skills', href: isProjectPage ? '/#skills' : '#skills' },
    { name: 'Certificates', href: isProjectPage ? '/#certificates' : '#certificates' },
    { name: 'Contact', href: isProjectPage ? '/#contact' : '#contact' },
  ];

  const socialLinks = [
    { 
      icon: <Github className="w-5 h-5" />,
      href: 'https://github.com/Shrutiii09',
      label: 'GitHub'
    },
    { 
      icon: <Linkedin className="w-5 h-5" />, 
      href: 'https://www.linkedin.com/in/shrutiagarwal09',
      label: 'LinkedIn'
    },
    { 
      icon: <Code2 className="w-5 h-5" />, 
      href: 'https://leetcode.com/u/Shrutiag_',
      label: 'LeetCode'
    }
  ];

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-dark-300/80 backdrop-blur-sm shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {isProjectPage ? (
              <Link 
                to="/"
                className="text-xl font-bold text-white flex items-center hover:text-primary-300 transition-colors"
              >
                Shruti Agarwal
              </Link>
            ) : (
              <a 
                href="#hero"
                className="text-xl font-bold text-white flex items-center"
              >
                Shruti Agarwal
              </a>
            )}
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <ul className="flex space-x-8">
              {navItems.map((item, index) => (
                <motion.li 
                  key={item.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  {isProjectPage ? (
                    <Link 
                      to={item.href} 
                      className="text-gray-300 hover:text-white transition-colors relative group"
                    >
                      {item.name}
                      <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-accent-500 transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                  ) : (
                    <a 
                      href={item.href} 
                      className="text-gray-300 hover:text-white transition-colors relative group"
                    >
                      {item.name}
                      <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-accent-500 transition-all duration-300 group-hover:w-full"></span>
                    </a>
                  )}
                </motion.li>
              ))}
            </ul>
            <div className="flex items-center space-x-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label={link.label}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </nav>

          {/* Mobile menu button */}
          <motion.button
            className="md:hidden text-gray-300 hover:text-white"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {isOpen ? <X /> : <Menu />}
          </motion.button>
        </div>
      </div>

      {/* Mobile menu */}
      <motion.div
        className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="px-4 pt-2 pb-6 space-y-2 bg-dark-300/90 backdrop-blur-sm">
          {navItems.map((item) => (
            <div key={item.name}>
              {isProjectPage ? (
                <Link
                  to={item.href}
                  className="block py-2 text-gray-300 hover:text-white"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ) : (
                <a
                  href={item.href}
                  className="block py-2 text-gray-300 hover:text-white"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              )}
            </div>
          ))}
          <div className="flex space-x-4 pt-4">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label={link.label}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </motion.div>
    </header>
  );
};

export default Navbar;