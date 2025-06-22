import React from 'react';
import { motion } from 'framer-motion';

const Loader: React.FC = () => {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-dark-400 via-dark-300 to-dark-400 flex items-center justify-center z-50">
      <motion.div 
        className="flex flex-col items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div 
          className="mb-8 relative"
          initial={{ scale: 0.8 }}
          animate={{ scale: [0.8, 1.1, 1] }}
          transition={{ 
            duration: 1.5, 
            times: [0, 0.6, 1],
            ease: "easeInOut"
          }}
        >
          <motion.div 
            className="text-4xl font-bold text-white flex items-center gap-2"
            animate={{ 
              textShadow: [
                "0 0 0px rgba(99, 102, 241, 0.5)",
                "0 0 30px rgba(99, 102, 241, 0.8)",
                "0 0 0px rgba(99, 102, 241, 0.5)"
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <span className="text-accent-500">&lt;</span>
            Shruti Agarwal
            <span className="text-accent-500">/&gt;</span>
          </motion.div>
          
          {/* Animated ring around text */}
          <motion.div
            className="absolute inset-0 border-2 border-primary-500/30 rounded-lg"
            animate={{ rotate: 360 }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          />
        </motion.div>
        
        <div className="flex space-x-2">
          {[0, 1, 2].map((index) => (
            <motion.div
              key={index}
              className="w-3 h-3 bg-primary-500 rounded-full"
              initial={{ y: 0 }}
              animate={{ y: [-8, 8, -8] }}
              transition={{
                duration: 1.2,
                repeat: Infinity,
                delay: index * 0.2,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>
        
        <motion.p
          className="mt-6 text-gray-400 text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          Loading amazing portfolio...
        </motion.p>
      </motion.div>
    </div>
  );
};

export default Loader;