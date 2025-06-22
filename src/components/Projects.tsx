import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import SectionHeading from './SectionHeading';

interface ProjectData {
  title: string;
  description: string[];
  technologies: string[];
  github?: string;
  liveDemo?: string;
}

const projects: ProjectData[] = [
  {
    title: "Data Leak Detection System",
    description: [
      "Real time data monitoring system in Python",
      "Developed a Python system to effectively identify and flag potential data leaks.",
      "Integrated real-time monitoring for immediate detection and response to data breaches."
    ],
    technologies: ["Python", "Data Analysis", "Security"],
    github: "https://github.com/Shrutiii09/data-leak-detection"
  },
  {
    title: "Encryption and Decryption using Digital Cryptography",
    description: [
      "Developed a Django-based steganography tool using LSB encryption for secure image data hiding.",
      "Designed a responsive UI with JavaScript, Bootstrap, and Tailwind CSS; implemented unit testing for validation."
    ],
    technologies: ["Django", "JavaScript", "Bootstrap", "Tailwind CSS", "Cryptography"],
    github: "https://github.com/Shrutiii09/steganography-tool"
  },
  {
    title: "Web Scraping Tool",
    description: [
      "Created a Python scraper with Beautiful Soup for automated data collection.",
      "Developed an adaptable, scalable tool for diverse web scraping tasks."
    ],
    technologies: ["Python", "Beautiful Soup", "Data Collection"],
    github: "https://github.com/Shrutiii09/web-scraper"
  },
  {
    title: "TIC-TAC-TOE",
    description: [
      "Built a Tic-Tac-Toe game with Next.js, React, and TypeScript featuring animations and Vercel deployment."
    ],
    technologies: ["Next.js", "React", "TypeScript", "Vercel"],
    liveDemo: "https://bouncee.vercel.app/",
    github: "https://github.com/Shrutiii09/tic-tac-toe"
  },
  {
    title: "ATM Project",
    description: [
      "Designed an ATM simulation project using object-oriented programming in C++.",
      "Simulated banking transactions and user interactions."
    ],
    technologies: ["C++", "OOP"],
    github: "https://github.com/Shrutiii09/atm-simulation"
  }
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 bg-dark-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="Projects"
          subtitle="A collection of my recent work and personal projects"
        />
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-dark-400 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-800 h-full flex flex-col"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="p-6 flex-grow">
                <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                
                <div className="text-gray-300 space-y-2 mb-4">
                  {project.description.map((desc, i) => (
                    <p key={i}>{desc}</p>
                  ))}
                </div>
                
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.technologies.map((tech, i) => (
                    <span 
                      key={i} 
                      className="text-xs font-mono py-1 px-2 rounded-full bg-primary-900/40 text-primary-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="border-t border-gray-800 p-4 flex justify-end gap-4">
                {project.github && (
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                    aria-label={`View ${project.title} source code on GitHub`}
                  >
                    <Github className="w-5 h-5" />
                  </a>
                )}
                {project.liveDemo && (
                  <a 
                    href={project.liveDemo} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                    aria-label={`Visit ${project.title} live demo`}
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;