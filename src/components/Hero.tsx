import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Download } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center justify-center text-center">
          <motion.div 
            className="mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-accent-500 font-mono text-lg">Hello, I'm</span>
          </motion.div>
          
          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 text-white leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Shruti <span className="text-primary-500">Agarwal</span>
          </motion.h1>
          
          <motion.div 
            className="h-12 sm:h-16 overflow-hidden mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="font-mono text-xl sm:text-2xl text-gray-300 animate-text-slide">
              <div className="h-full flex items-center justify-center">Full Stack Developer</div>
              <div className="h-full flex items-center justify-center">Python Developer</div>
              <div className="h-full flex items-center justify-center">Django Expert</div>
              <div className="h-full flex items-center justify-center">Web Developer</div>
              <div className="h-full flex items-center justify-center">Problem Solver</div>
              <div className="h-full flex items-center justify-center">Full Stack Developer</div>
            </div>
          </motion.div>
          
          <motion.p 
            className="text-gray-400 max-w-xl mx-auto mb-8 text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            Passionate about building beautiful, functional, and user-friendly web applications
            using cutting-edge technologies.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <a 
              href="#contact" 
              className="px-8 py-3 rounded-full bg-primary-600 text-white font-medium hover:bg-primary-700 transition-colors duration-300 flex items-center gap-2"
            >
              Get in Touch
            </a>
            <a 
              href="https://drive.google.com/file/d/1dkFr2wu1PftmxG_F-PqE-ptw-5TcQX5H/view?usp=sharing" 
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 rounded-full border border-accent-500 text-accent-500 font-medium hover:bg-accent-500 hover:text-white transition-colors duration-300 flex items-center gap-2"
            >
              <Download className="w-4 h-4" />
              Resume
            </a>
          </motion.div>
        </div>
      </div>
      
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 0.5, 
          delay: 1.2,
          repeat: Infinity,
          repeatType: "reverse",
          repeatDelay: 0.2
        }}
      >
        <a href="#about" aria-label="Scroll down">
          <ChevronDown size={32} />
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;