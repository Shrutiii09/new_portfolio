import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Users, Target, Award, Star, Zap } from 'lucide-react';
import SectionHeading from './SectionHeading';

interface Achievement {
  title: string;
  description: string;
  icon: React.ReactNode;
  category: string;
  highlight: string;
  stats?: string;
}

const achievements: Achievement[] = [
  {
    title: "Smart India Hackathon (SIH) - Team Leader",
    description: "Led a team that was selected among the top 30 out of 165+ teams at the University level for the Smart India Hackathon, demonstrating exceptional leadership and technical innovation.",
    icon: <Trophy className="w-8 h-8" />,
    category: "Leadership",
    highlight: "Top 30/165+ Teams",
    stats: "University Level"
  },
  {
    title: "Multiple Technical Certifications",
    description: "Earned 7+ professional certifications from industry leaders including Cisco, Google Cloud, HackerRank, and Accenture, showcasing continuous learning and expertise.",
    icon: <Award className="w-8 h-8" />,
    category: "Professional Development",
    highlight: "7+ Certifications",
    stats: "Industry Leaders"
  },
  {
    title: "Full Stack Project Portfolio",
    description: "Developed 8+ comprehensive projects spanning web development, security, system programming, and data analysis, demonstrating versatility across multiple domains.",
    icon: <Target className="w-8 h-8" />,
    category: "Technical Excellence",
    highlight: "8+ Projects",
    stats: "Multiple Domains"
  },
  {
    title: "Internship Excellence",
    description: "Successfully completed 3 professional internships, gaining hands-on experience in full-stack development, Python programming, and data analytics.",
    icon: <Star className="w-8 h-8" />,
    category: "Professional Experience",
    highlight: "3 Internships",
    stats: "Industry Experience"
  }
];

const Achievements: React.FC = () => {
  return (
    <section id="achievements" className="py-20 bg-gradient-to-br from-light-100 to-white dark:from-dark-400 dark:to-dark-300 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <motion.div 
          className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-yellow-400/30 to-orange-500/30 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-full blur-3xl"
          animate={{ 
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0]
          }}
          transition={{ 
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/2 w-24 h-24 bg-gradient-to-r from-blue-500/30 to-cyan-500/30 rounded-full blur-2xl"
          animate={{ 
            x: [-50, 50, -50],
            y: [-30, 30, -30],
            scale: [1, 1.3, 1]
          }}
          transition={{ 
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading 
          title="Achievements & Recognition"
          subtitle="Key milestones and accomplishments that showcase my dedication to excellence and continuous growth"
        />
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              className="group relative"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <div className="bg-white/90 dark:bg-dark-300/90 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 dark:border-gray-700 shadow-xl hover:shadow-2xl transition-all duration-500 h-full">
                {/* Icon and Category */}
                <div className="flex items-start justify-between mb-6">
                  <motion.div 
                    className="p-4 rounded-2xl bg-gradient-to-br from-yellow-400 to-orange-500 text-white shadow-lg"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    {achievement.icon}
                  </motion.div>
                  <div className="text-right">
                    <span className="inline-block px-3 py-1 text-xs font-semibold bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full">
                      {achievement.category}
                    </span>
                  </div>
                </div>

                {/* Title and Highlight */}
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                    {achievement.title}
                  </h3>
                  <div className="flex items-center gap-2 mb-3">
                    <Zap className="w-4 h-4 text-yellow-500" />
                    <span className="text-lg font-semibold text-yellow-600 dark:text-yellow-400">
                      {achievement.highlight}
                    </span>
                    {achievement.stats && (
                      <>
                        <span className="text-gray-400">•</span>
                        <span className="text-sm text-gray-600 dark:text-gray-400">
                          {achievement.stats}
                        </span>
                      </>
                    )}
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {achievement.description}
                </p>

                {/* Hover glow effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 rounded-2xl opacity-0 transition-opacity duration-300"
                  animate={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                />

                {/* Shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Achievement Stats */}
        <motion.div
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {[
            { label: "Team Leadership", value: "SIH Top 30", icon: <Users className="w-6 h-6" /> },
            { label: "Certifications", value: "7+", icon: <Award className="w-6 h-6" /> },
            { label: "Projects", value: "8+", icon: <Target className="w-6 h-6" /> },
            { label: "Internships", value: "4", icon: <Star className="w-6 h-6" /> },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center p-6 bg-white/60 dark:bg-dark-300/60 backdrop-blur-sm rounded-xl border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <motion.div 
                className="flex justify-center mb-3 text-primary-500"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                {stat.icon}
              </motion.div>
              <motion.div 
                className="text-2xl font-bold text-gray-800 dark:text-white mb-1"
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.1 }}
              >
                {stat.value}
              </motion.div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;