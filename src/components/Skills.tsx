import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code, Database, Wrench, Users, Brain, Zap, Star } from 'lucide-react';
import SectionHeading from './SectionHeading';

interface SkillCategory {
  category: string;
  icon: React.ReactNode;
  color: string;
  skills: {
    name: string;
    level: number;
    description: string;
  }[];
}

const skillsData: SkillCategory[] = [
  {
    category: "Programming Languages",
    icon: <Code className="w-6 h-6" />,
    color: "from-blue-500 to-cyan-500",
    skills: [
      { name: "Python", level: 95, description: "Advanced web development, data analysis, automation" },
      { name: "C/C++", level: 85, description: "System programming, algorithms, data structures" },
      { name: "JavaScript", level: 80, description: "Modern ES6+, async programming, DOM manipulation" },
      { name: "Java", level: 70, description: "Object-oriented programming, Spring framework" },
      { name: "HTML/CSS", level: 90, description: "Semantic markup, responsive design, animations" },
    ]
  },
  {
    category: "Frameworks & Libraries",
    icon: <Database className="w-6 h-6" />,
    color: "from-purple-500 to-pink-500",
    skills: [
      { name: "Django", level: 90, description: "Full-stack web development, REST APIs, authentication" },
      { name: "React", level: 85, description: "Component architecture, hooks, state management" },
      { name: "Bootstrap", level: 80, description: "Responsive design, component library" },
      { name: "Tailwind CSS", level: 85, description: "Utility-first CSS, custom design systems" },
      { name: "Spring Boot", level: 65, description: "Java enterprise applications, microservices" },
    ]
  },
  {
    category: "Developer Tools",
    icon: <Wrench className="w-6 h-6" />,
    color: "from-green-500 to-emerald-500",
    skills: [
      { name: "Git", level: 85, description: "Version control, branching strategies, collaboration" },
      { name: "VS Code", level: 95, description: "Advanced debugging, extensions, productivity" },
      { name: "Docker", level: 70, description: "Containerization, deployment, orchestration" },
      { name: "PyCharm", level: 80, description: "Python development, debugging, refactoring" },
      { name: "IntelliJ", level: 65, description: "Java development, code analysis, testing" },
    ]
  },
  {
    category: "Soft Skills",
    icon: <Users className="w-6 h-6" />,
    color: "from-orange-500 to-red-500",
    skills: [
      { name: "Problem Solving", level: 95, description: "Analytical thinking, debugging, optimization" },
      { name: "Communication", level: 80, description: "Technical writing, presentations, collaboration" },
      { name: "Team Leadership", level: 75, description: "Project management, mentoring, coordination" },
      { name: "Adaptability", level: 90, description: "Learning new technologies, flexible approach" },
      { name: "Attention to Detail", level: 95, description: "Code quality, testing, documentation" },
    ]
  }
];

const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState(0);
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const getSkillIcon = (level: number) => {
    if (level >= 90) return <Star className="w-4 h-4 text-yellow-400" />;
    if (level >= 80) return <Zap className="w-4 h-4 text-blue-400" />;
    if (level >= 70) return <Brain className="w-4 h-4 text-purple-400" />;
    return <Code className="w-4 h-4 text-gray-400" />;
  };

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-light-100 to-light-200 dark:from-dark-400 dark:to-dark-300 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-accent-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-secondary-500/20 rounded-full blur-2xl animate-pulse delay-500" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading 
          title="Skills & Expertise"
          subtitle="My technical capabilities and professional competencies across various domains"
        />
        
        <div className="mt-16">
          {/* Category Navigation */}
          <motion.div 
            className="flex flex-wrap justify-center gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            {skillsData.map((category, index) => (
              <motion.button
                key={index}
                onClick={() => setActiveCategory(index)}
                className={`flex items-center gap-3 px-6 py-3 rounded-full border-2 transition-all duration-300 ${
                  activeCategory === index
                    ? 'bg-primary-500 border-primary-500 text-white shadow-lg shadow-primary-500/25'
                    : 'bg-white/50 dark:bg-dark-300/50 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-primary-500 hover:text-primary-500'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category.icon}
                <span className="font-medium">{category.category}</span>
              </motion.button>
            ))}
          </motion.div>

          {/* Skills Display */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="max-w-4xl mx-auto"
            >
              <div className="bg-white/80 dark:bg-dark-300/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 dark:border-gray-700 shadow-xl">
                <div className="flex items-center gap-4 mb-8">
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${skillsData[activeCategory].color}`}>
                    {skillsData[activeCategory].icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                    {skillsData[activeCategory].category}
                  </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {skillsData[activeCategory].skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      className="group relative"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: skillIndex * 0.1 }}
                      onHoverStart={() => setHoveredSkill(skill.name)}
                      onHoverEnd={() => setHoveredSkill(null)}
                    >
                      <div className="bg-gray-50 dark:bg-dark-400 rounded-xl p-6 border border-gray-200 dark:border-gray-600 hover:border-primary-500 transition-all duration-300 hover:shadow-lg">
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center gap-3">
                            {getSkillIcon(skill.level)}
                            <h4 className="font-semibold text-gray-800 dark:text-white">
                              {skill.name}
                            </h4>
                          </div>
                          <span className="text-sm font-mono text-primary-600 dark:text-primary-400">
                            {skill.level}%
                          </span>
                        </div>

                        {/* Progress Bar */}
                        <div className="relative mb-3">
                          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                            <motion.div 
                              className={`h-2 rounded-full bg-gradient-to-r ${skillsData[activeCategory].color}`}
                              initial={{ width: 0 }}
                              animate={{ width: `${skill.level}%` }}
                              transition={{ duration: 1, delay: skillIndex * 0.1 }}
                            />
                          </div>
                          
                          {/* Animated glow effect */}
                          <motion.div
                            className={`absolute top-0 h-2 rounded-full bg-gradient-to-r ${skillsData[activeCategory].color} opacity-50 blur-sm`}
                            initial={{ width: 0 }}
                            animate={{ width: hoveredSkill === skill.name ? `${skill.level}%` : '0%' }}
                            transition={{ duration: 0.3 }}
                          />
                        </div>

                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {skill.description}
                        </p>

                        {/* Hover effect overlay */}
                        <div className="absolute inset-0 bg-gradient-to-r from-primary-500/5 to-accent-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Skills Summary */}
          <motion.div
            className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            {[
              { label: "Languages", count: "5+", icon: <Code className="w-6 h-6" /> },
              { label: "Frameworks", count: "8+", icon: <Database className="w-6 h-6" /> },
              { label: "Tools", count: "10+", icon: <Wrench className="w-6 h-6" /> },
              { label: "Projects", count: "15+", icon: <Star className="w-6 h-6" /> },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center p-6 bg-white/60 dark:bg-dark-300/60 backdrop-blur-sm rounded-xl border border-gray-200 dark:border-gray-700"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex justify-center mb-3 text-primary-500">
                  {stat.icon}
                </div>
                <div className="text-2xl font-bold text-gray-800 dark:text-white mb-1">
                  {stat.count}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;