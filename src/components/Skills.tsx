import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';

interface SkillCategory {
  category: string;
  skills: {
    name: string;
    level: number; // 1-5 scale
  }[];
}

const skillsData: SkillCategory[] = [
  {
    category: "Languages",
    skills: [
      { name: "C/C++", level: 4 },
      { name: "Python", level: 5 },
      { name: "Java", level: 3 },
      { name: "JavaScript", level: 4 },
      { name: "HTML/CSS", level: 4 },
    ]
  },
  {
    category: "Frameworks",
    skills: [
      { name: "Django", level: 4 },
      { name: "Bootstrap", level: 4 },
      { name: "Tailwind CSS", level: 4 },
      { name: "Spring Boot", level: 3 },
    ]
  },
  {
    category: "Developer Tools",
    skills: [
      { name: "Git", level: 4 },
      { name: "Docker", level: 3 },
      { name: "VS Code", level: 5 },
      { name: "PyCharm", level: 4 },
      { name: "IntelliJ", level: 3 },
    ]
  },
  {
    category: "Soft Skills",
    skills: [
      { name: "Responsiveness", level: 5 },
      { name: "Organizational Ability", level: 4 },
      { name: "Attention to Detail", level: 5 },
      { name: "Verbal Communication", level: 4 },
      { name: "Problem Solving", level: 5 },
    ]
  }
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-dark-400">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="Skills"
          subtitle="My technical expertise and professional capabilities"
        />
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12">
          {skillsData.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              className="bg-dark-300 rounded-lg p-6 shadow-lg border border-gray-800"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold mb-6 text-white">{category.category}</h3>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-300">{skill.name}</span>
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <span 
                            key={i} 
                            className={`w-2 h-2 rounded-full ${
                              i < skill.level ? 'bg-accent-500' : 'bg-gray-700'
                            }`}
                          ></span>
                        ))}
                      </div>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-1.5">
                      <motion.div 
                        className="bg-primary-600 h-1.5 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level * 20}%` }}
                        transition={{ duration: 0.8, delay: 0.2 + skillIndex * 0.1 }}
                        viewport={{ once: true }}
                      ></motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;