import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';
import { BriefcaseIcon } from 'lucide-react';

interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  description: string[];
}

const ExperienceData: ExperienceItem[] = [
  {
    title: "Full Stack Developer Intern",
    company: "TBI-GEU",
    period: "July 2024 - October 2024",
    description: [
      "Developed full-stack web applications, handling front-end, back-end development, including web design.",
      "Ensured confidentiality and conduct compliance, utilizing project management skills."
    ]
  },
  {
    title: "Python Developer Intern",
    company: "Pratinik Infotech",
    period: "April 2024 - June 2024",
    description: [
      "Gained experience in Python and Django, developing web applications and collaborating on projects.",
      "Enhanced problem-solving skills within a professional environment."
    ]
  },
  {
    title: "Python Intern",
    company: "Uptricks Services Pvt. Ltd.",
    period: "March 2024 - April 2024",
    description: [
      "Learned Beautiful Soup for web scraping, enhancing Python skills at basic and intermediate levels.",
      "Contributed to team projects, developing practical programming knowledge."
    ]
  }
];

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-dark-400">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="Experience"
          subtitle="My professional journey and internships that have shaped my career path"
        />
        
        <div className="mt-16 max-w-3xl mx-auto">
          <div className="relative border-l-2 border-primary-600 pl-8 ml-4">
            {ExperienceData.map((exp, index) => (
              <motion.div 
                key={index}
                className="mb-12 relative"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="absolute -left-12 top-0 bg-dark-300 p-2 rounded-full border-2 border-primary-600">
                  <BriefcaseIcon className="text-primary-500 w-5 h-5" />
                </div>
                
                <div className="bg-dark-300 p-6 rounded-lg shadow-lg">
                  <div className="flex flex-wrap justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                    <span className="text-sm font-mono text-accent-500 mt-1">{exp.period}</span>
                  </div>
                  
                  <p className="text-primary-400 font-medium mb-4">{exp.company}</p>
                  
                  <ul className="space-y-2">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-accent-500 mr-2 mt-1">•</span>
                        <span className="text-gray-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;