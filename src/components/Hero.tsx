import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Download, Sparkles } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary-400/30 rounded-full"
            initial={{
              x: typeof window !== 'undefined' ? Math.random() * window.innerWidth : Math.random() * 1200,
              y: typeof window !== 'undefined' ? Math.random() * window.innerHeight : Math.random() * 800,
            }}
            animate={{
              y: [null, -100, null],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center justify-center text-center">
          <motion.div 
            className="mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.span 
              className="text-accent-500 font-mono text-lg flex items-center gap-2"
              animate={{ 
                textShadow: [
                  "0 0 0px rgba(16, 185, 129, 0.5)",
                  "0 0 20px rgba(16, 185, 129, 0.8)",
                  "0 0 0px rgba(16, 185, 129, 0.5)"
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Sparkles className="w-5 h-5" />
              Hello, I'm
            </motion.span>
          </motion.div>
          
          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="text-gray-900 dark:text-white">Shruti </span>
            <motion.span 
              className="text-primary-500"
              animate={{ 
                textShadow: [
                  "0 0 0px rgba(99, 102, 241, 0.5)",
                  "0 0 30px rgba(99, 102, 241, 0.8)",
                  "0 0 0px rgba(99, 102, 241, 0.5)"
                ]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              Agarwal
            </motion.span>
          </motion.h1>
          
          <motion.div 
            className="h-12 sm:h-16 overflow-hidden mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="font-mono text-xl sm:text-2xl text-gray-700 dark:text-gray-300 animate-text-slide">
              <div className="h-full flex items-center justify-center">Full Stack Developer</div>
              <div className="h-full flex items-center justify-center">Python Developer</div>
              <div className="h-full flex items-center justify-center">Django Expert</div>
              <div className="h-full flex items-center justify-center">Web Developer</div>
              <div className="h-full flex items-center justify-center">Problem Solver</div>
              <div className="h-full flex items-center justify-center">Full Stack Developer</div>
            </div>
          </motion.div>
          
          <motion.p 
            className="text-gray-600 dark:text-gray-400 max-w-xl mx-auto mb-8 text-lg leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Passionate about building beautiful, functional, and user-friendly web applications
            using cutting-edge technologies.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <motion.a 
              href="#contact" 
              className="px-8 py-3 rounded-full bg-primary-600 text-white font-medium hover:bg-primary-700 transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.span
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                👋
              </motion.span>
              Get in Touch
            </motion.a>
            <motion.a 
              href="https://drive.google.com/file/d/1onNuDgnZ93HAwjRo5mfwadPzRYOdZ9ww/view?usp=sharing" 
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 rounded-full border-2 border-accent-500 text-accent-500 font-medium hover:bg-accent-500 hover:text-white transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                animate={{ y: [0, -2, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <Download className="w-4 h-4" />
              </motion.div>
              Resume
            </motion.a>
          </motion.div>
        </div>
      </div>
      
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-600 dark:text-white"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 0.6, 
          delay: 1.2,
          repeat: Infinity,
          repeatType: "reverse",
          repeatDelay: 0.5
        }}
      >
        <motion.a 
          href="#about" 
          aria-label="Scroll down"
          whileHover={{ scale: 1.2 }}
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown size={32} />
        </motion.a>
      </motion.div>
    </section>
  );
};

export default Hero;