import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-dark-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="About Me" />
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 max-w-3xl mx-auto text-gray-300"
        >
          <h3 className="text-2xl font-bold mb-4 text-white">Full Stack Developer & Python Enthusiast</h3>
          
          <div className="space-y-4">
            <p>
              I'm a passionate Full Stack Developer with a strong foundation in Python and 
              web technologies. My journey in tech is driven by my love for solving complex problems 
              and building user-friendly applications.
            </p>
            
            <p>
              With a B.Tech in Computer Science from Graphic Era University, I've honed my skills through 
              practical experience and a series of internships where I've worked with various technologies 
              including Django, React, and database systems.
            </p>
            
            <p>
              I specialize in developing full-stack web applications with a focus on clean code, 
              performance, and user experience. My technical toolkit includes C/C++, Python, Java, 
              JavaScript, HTML/CSS, Django, Bootstrap, Tailwind CSS, and Spring Boot.
            </p>
          </div>
          
          <div className="mt-8">
            <h4 className="text-lg font-semibold mb-2 text-white">Education</h4>
            <ul className="space-y-2">
              <li className="flex">
                <span className="text-accent-500 mr-2">•</span>
                <div>
                  <p className="font-medium">B.Tech in Computer Science</p>
                  <p className="text-sm text-gray-400">Graphic Era (Deemed to be University), Dehradun, Uttarakhand</p>
                </div>
              </li>
              <li className="flex">
                <span className="text-accent-500 mr-2">•</span>
                <div>
                  <p className="font-medium">Higher Secondary: 85%</p>
                  <p className="text-sm text-gray-400">DDPS, Bijnor, UP</p>
                </div>
              </li>
              <li className="flex">
                <span className="text-accent-500 mr-2">•</span>
                <div>
                  <p className="font-medium">Secondary: 90%</p>
                  <p className="text-sm text-gray-400">DDPS, Bijnor, UP</p>
                </div>
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;