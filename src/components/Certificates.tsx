import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, ExternalLink, Calendar, Building, CheckCircle, Filter } from 'lucide-react';
import SectionHeading from './SectionHeading';

interface Certificate {
  title: string;
  issuer: string;
  url: string;
  date?: string;
  category: 'programming' | 'data' | 'security' | 'cloud' | 'professional';
  skills: string[];
  featured?: boolean;
}

const certificates: Certificate[] = [
  {
    title: "Python Essentials 1",
    issuer: "Cisco Networking Academy",
    url: "https://www.credly.com/badges/f4c551a6-421f-434b-81b2-5beaccfdd777",
    date: "2024",
    category: "programming",
    skills: ["Python", "Programming Fundamentals", "Data Structures"],
    featured: true
  },
  {
    title: "Intermediate SQL Certification",
    issuer: "HackerRank",
    url: "https://www.hackerrank.com/certificates/iframe/ecd364a7f034",
    date: "2024",
    category: "data",
    skills: ["SQL", "Database Management", "Query Optimization"],
    featured: true
  },
  {
    title: "Introduction to Cyber Security",
    issuer: "Cisco Networking Academy",
    url: "https://www.credly.com/badges/274c7aeb-f78c-4667-bd68-c249fb2b5b13",
    date: "2024",
    category: "security",
    skills: ["Cybersecurity", "Network Security", "Risk Assessment"]
  },
  {
    title: "Introduction to Generative AI",
    issuer: "Google Cloud",
    url: "https://www.cloudskillsboost.google/public_profiles/4d3c3f3a-b1e8-42b5-b7a7-fcd0db1a79b3/badges/8309862",
    date: "2024",
    category: "cloud",
    skills: ["AI/ML", "Google Cloud", "Generative AI"],
    featured: true
  },
  {
    title: "Data Analytics & Visualization Program",
    issuer: "Accenture North America (Forage)",
    url: "https://www.linkedin.com/posts/shrutiagarwal09_forage-certificate-activity-7325568102404960256-b1zm",
    date: "2025",
    category: "professional",
    skills: ["Data Analysis", "Visualization", "Business Intelligence"]
  },
  {
    title: "Software Engineering Virtual Internship Program",
    issuer: "J.P. Morgan Chase & Co. (Forage)",
    url: "https://www.linkedin.com/posts/shrutiagarwal09_jpmorgan-virtualinternship-forage-activity-7328732395195564035-gh8q",
    date: "2025",
    category: "professional",
    skills: ["Software Engineering", "Financial Technology", "Development"]
  },
  {
    title: "Introduction to Data Science",
    issuer: "Cisco Networking Academy",
    url: "https://www.credly.com/badges/459eba8f-380e-405a-a2b4-7b4fffecf57b",
    date: "2024",
    category: "data",
    skills: ["Data Science", "Analytics", "Statistical Analysis"]
  }
];

const categories = [
  { key: 'all', label: 'All Certificates', color: 'from-gray-500 to-gray-600' },
  { key: 'programming', label: 'Programming', color: 'from-blue-500 to-cyan-500' },
  { key: 'data', label: 'Data & Analytics', color: 'from-green-500 to-emerald-500' },
  { key: 'security', label: 'Security', color: 'from-red-500 to-pink-500' },
  { key: 'cloud', label: 'Cloud & AI', color: 'from-purple-500 to-indigo-500' },
  { key: 'professional', label: 'Professional', color: 'from-orange-500 to-yellow-500' }
];

const Certificates: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredCertificates = activeFilter === 'all' 
    ? certificates 
    : certificates.filter(cert => cert.category === activeFilter);

  const getCategoryColor = (category: string) => {
    const categoryData = categories.find(cat => cat.key === category);
    return categoryData?.color || 'from-gray-500 to-gray-600';
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'programming': return '💻';
      case 'data': return '📊';
      case 'security': return '🔒';
      case 'cloud': return '☁️';
      case 'professional': return '🏢';
      default: return '🏆';
    }
  };

  return (
    <section id="certificates" className="py-20 bg-gradient-to-br from-light-200 to-light-100 dark:from-dark-300 dark:to-dark-400 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 right-10 w-64 h-64 bg-gradient-to-r from-primary-500/30 to-accent-500/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-10 left-10 w-48 h-48 bg-gradient-to-r from-secondary-500/30 to-primary-500/30 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading 
          title="Certifications & Achievements"
          subtitle="Professional certifications that validate my expertise and commitment to continuous learning"
        />
        
        {/* Filter Buttons */}
        <motion.div 
          className="flex flex-wrap justify-center gap-3 mt-12 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          {categories.map((category) => (
            <motion.button
              key={category.key}
              onClick={() => setActiveFilter(category.key)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full border-2 transition-all duration-300 ${
                activeFilter === category.key
                  ? 'bg-primary-500 border-primary-500 text-white shadow-lg shadow-primary-500/25'
                  : 'bg-white/70 dark:bg-dark-300/70 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-primary-500'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Filter className="w-4 h-4" />
              <span className="text-sm font-medium">{category.label}</span>
              <span className="bg-white/20 px-2 py-0.5 rounded-full text-xs">
                {category.key === 'all' ? certificates.length : certificates.filter(c => c.category === category.key).length}
              </span>
            </motion.button>
          ))}
        </motion.div>

        {/* Featured Certificates */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-center text-gray-800 dark:text-white mb-8">
            🌟 Featured Certifications
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {certificates.filter(cert => cert.featured).map((cert, index) => (
              <motion.div
                key={`featured-${cert.title}`}
                className="relative group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <div className="bg-gradient-to-br from-white to-gray-50 dark:from-dark-300 dark:to-dark-400 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 shadow-xl hover:shadow-2xl transition-all duration-300">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${getCategoryColor(cert.category)} text-white`}>
                      <Award className="w-6 h-6" />
                    </div>
                    <span className="text-2xl">{getCategoryIcon(cert.category)}</span>
                  </div>
                  
                  <h4 className="font-bold text-lg text-gray-800 dark:text-white mb-2 line-clamp-2">
                    {cert.title}
                  </h4>
                  
                  <div className="flex items-center gap-2 mb-3">
                    <Building className="w-4 h-4 text-gray-500" />
                    <p className="text-sm text-gray-600 dark:text-gray-400">{cert.issuer}</p>
                  </div>

                  <div className="flex flex-wrap gap-1 mb-4">
                    {cert.skills.slice(0, 2).map((skill, i) => (
                      <span key={i} className="px-2 py-1 text-xs bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full">
                        {skill}
                      </span>
                    ))}
                    {cert.skills.length > 2 && (
                      <span className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded-full">
                        +{cert.skills.length - 2}
                      </span>
                    )}
                  </div>

                  <motion.a
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary-500 to-accent-500 text-white text-sm rounded-lg hover:shadow-lg transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <CheckCircle className="w-4 h-4" />
                    Verify Certificate
                    <ExternalLink className="w-3 h-3" />
                  </motion.a>

                  {/* Shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* All Certificates Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {filteredCertificates.map((cert, index) => (
              <motion.div
                key={`${activeFilter}-${cert.title}`}
                className="bg-white/80 dark:bg-dark-300/80 backdrop-blur-sm rounded-xl p-6 border border-gray-200 dark:border-gray-700 hover:border-primary-500 transition-all duration-300 hover:shadow-lg group"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${getCategoryColor(cert.category)} group-hover:scale-110 transition-transform duration-300`}>
                    <Award className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
                    <Calendar className="w-3 h-3" />
                    {cert.date}
                  </div>
                </div>
                
                <h4 className="font-bold text-lg text-gray-800 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                  {cert.title}
                </h4>
                
                <div className="flex items-center gap-2 mb-3">
                  <Building className="w-4 h-4 text-gray-500" />
                  <p className="text-sm text-gray-600 dark:text-gray-400">{cert.issuer}</p>
                </div>

                <div className="flex flex-wrap gap-1 mb-4">
                  {cert.skills.map((skill, i) => (
                    <span key={i} className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full">
                      {skill}
                    </span>
                  ))}
                </div>

                <motion.a
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-primary-500 text-white text-sm rounded-lg hover:bg-primary-600 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Certificate
                  <ExternalLink className="w-3 h-3" />
                </motion.a>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Statistics */}
        <motion.div
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {[
            { label: "Total Certificates", count: certificates.length, icon: "🏆" },
            { label: "Tech Platforms", count: "5+", icon: "💻" },
            { label: "Skill Areas", count: "15+", icon: "🎯" },
            { label: "Learning Hours", count: "200+", icon: "⏱️" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center p-6 bg-white/60 dark:bg-dark-300/60 backdrop-blur-sm rounded-xl border border-gray-200 dark:border-gray-700"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <div className="text-3xl mb-2">{stat.icon}</div>
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
    </section>
  );
};

export default Certificates;