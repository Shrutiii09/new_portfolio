import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SectionHeading from './SectionHeading';
import { projects } from '../data/projects';

const Projects: React.FC = () => {
  const getCategoryColor = (category: string) => {
    const colors = {
      web: 'bg-blue-500/20 text-blue-300 border-blue-500/30',
      security: 'bg-red-500/20 text-red-300 border-red-500/30',
      system: 'bg-green-500/20 text-green-300 border-green-500/30',
      compiler: 'bg-purple-500/20 text-purple-300 border-purple-500/30',
      scraping: 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30',
      ml: 'bg-pink-500/20 text-pink-300 border-pink-500/30',
      fintech: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30'
    };
    return colors[category as keyof typeof colors] || 'bg-gray-500/20 text-gray-300 border-gray-500/30';
  };

  const getCategoryLabel = (category: string) => {
    const labels = {
      ml: 'Machine Learning',
      fintech: 'FinTech'
    };
    return labels[category as keyof typeof labels] || category.charAt(0).toUpperCase() + category.slice(1);
  };

  return (
    <section id="projects" className="py-20 bg-dark-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="Projects"
          subtitle="A collection of my recent work and personal projects"
        />
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="bg-dark-400 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-800 h-full flex flex-col group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="p-6 flex-grow">
                <div className="flex items-start justify-between mb-3">
                  <span className={`px-2 py-1 text-xs font-medium rounded-full border ${getCategoryColor(project.category)}`}>
                    {getCategoryLabel(project.category)}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary-300 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-300 mb-4 line-clamp-3">
                  {project.shortDescription}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech, i) => (
                    <span 
                      key={i} 
                      className="text-xs font-mono py-1 px-2 rounded-full bg-primary-900/40 text-primary-300"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="text-xs font-mono py-1 px-2 rounded-full bg-gray-700 text-gray-300">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>
                
                <motion.div
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link 
                    to={`/project/${project.slug}`}
                    className="inline-flex items-center text-accent-500 hover:text-accent-400 transition-colors font-medium"
                  >
                    View Details
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>
              </div>
              
              <div className="border-t border-gray-800 p-4 flex justify-end gap-4">
                {project.github && (
                  <motion.a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                    aria-label={`View ${project.title} source code on GitHub`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Github className="w-5 h-5" />
                  </motion.a>
                )}
                {project.liveDemo && (
                  <motion.a 
                    href={project.liveDemo} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                    aria-label={`Visit ${project.title} live demo`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <ExternalLink className="w-5 h-5" />
                  </motion.a>
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