import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Github, ExternalLink, CheckCircle, Lightbulb, Target } from 'lucide-react';
import { getProjectBySlug } from '../data/projects';
import Navbar from './Navbar';
import Footer from './Footer';
import Background from './Background';

const ProjectDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? getProjectBySlug(slug) : null;

  if (!project) {
    return <Navigate to="/" replace />;
  }

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
    <div className="min-h-screen bg-dark-400">
      <Background />
      <Navbar />
      
      <main className="relative z-10 pt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <Link 
              to="/#projects"
              className="inline-flex items-center text-accent-500 hover:text-accent-400 transition-colors font-medium"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Projects
            </Link>
          </motion.div>

          {/* Project Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-12"
          >
            <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
              <div className="flex-1">
                <span className={`inline-block px-3 py-1 text-sm font-medium rounded-full border mb-4 ${getCategoryColor(project.category)}`}>
                  {getCategoryLabel(project.category)}
                </span>
                <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  {project.title}
                </h1>
                <p className="text-xl text-gray-300 leading-relaxed">
                  {project.shortDescription}
                </p>
              </div>
              
              <div className="flex gap-4">
                {project.github && (
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Github className="w-5 h-5" />
                    View Code
                  </motion.a>
                )}
                {project.liveDemo && (
                  <motion.a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ExternalLink className="w-5 h-5" />
                    Live Demo
                  </motion.a>
                )}
              </div>
            </div>

            {/* Technologies */}
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1 text-sm font-mono bg-primary-900/40 text-primary-300 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Description */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-dark-300 rounded-lg p-8 border border-gray-800"
              >
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <Target className="w-6 h-6 mr-3 text-primary-400" />
                  Project Overview
                </h2>
                <div className="space-y-4">
                  {project.description.map((paragraph, index) => (
                    <p key={index} className="text-gray-300 leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </motion.section>

              {/* Features */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-dark-300 rounded-lg p-8 border border-gray-800"
              >
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <CheckCircle className="w-6 h-6 mr-3 text-accent-500" />
                  Key Features
                </h2>
                <ul className="space-y-4">
                  {project.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-accent-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.section>

              {/* Challenges & Learnings */}
              {(project.challenges || project.learnings) && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {project.challenges && (
                    <motion.section
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                      className="bg-dark-300 rounded-lg p-8 border border-gray-800"
                    >
                      <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                        <Target className="w-5 h-5 mr-2 text-red-400" />
                        Challenges
                      </h3>
                      <ul className="space-y-3">
                        {project.challenges.map((challenge, index) => (
                          <li key={index} className="flex items-start">
                            <span className="text-red-400 mr-2 mt-1">•</span>
                            <span className="text-gray-300 text-sm">{challenge}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.section>
                  )}

                  {project.learnings && (
                    <motion.section
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.5 }}
                      className="bg-dark-300 rounded-lg p-8 border border-gray-800"
                    >
                      <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                        <Lightbulb className="w-5 h-5 mr-2 text-yellow-400" />
                        Key Learnings
                      </h3>
                      <ul className="space-y-3">
                        {project.learnings.map((learning, index) => (
                          <li key={index} className="flex items-start">
                            <span className="text-yellow-400 mr-2 mt-1">•</span>
                            <span className="text-gray-300 text-sm">{learning}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.section>
                  )}
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Project Info */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-dark-300 rounded-lg p-6 border border-gray-800 sticky top-24"
              >
                <h3 className="text-lg font-bold text-white mb-4">Project Info</h3>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-medium text-gray-400 mb-1">Category</h4>
                    <span className={`inline-block px-2 py-1 text-xs font-medium rounded-full border ${getCategoryColor(project.category)}`}>
                      {getCategoryLabel(project.category)}
                    </span>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-medium text-gray-400 mb-2">Technologies</h4>
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 text-xs font-mono bg-primary-900/40 text-primary-300 rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="pt-4 border-t border-gray-700">
                    <div className="flex flex-col gap-3">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
                        >
                          <Github className="w-4 h-4" />
                          View Source Code
                        </a>
                      )}
                      {project.liveDemo && (
                        <a
                          href={project.liveDemo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
                        >
                          <ExternalLink className="w-4 h-4" />
                          Live Demo
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ProjectDetail;