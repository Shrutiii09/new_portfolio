import React from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';
import SectionHeading from './SectionHeading';

interface Certificate {
  title: string;
  issuer: string;
  url: string;
  date?: string;
}

const certificates: Certificate[] = [
  {
    title: "Python Essentials 1",
    issuer: "Cisco Networking Academy",
    url: "https://www.credly.com/badges/f4c551a6-421f-434b-81b2-5beaccfdd777"
  },
  {
    title: "Intermediate SQL Certification",
    issuer: "HackerRank",
    url: "https://www.hackerrank.com/certificates/iframe/ecd364a7f034"
  },
  {
    title: "Introduction to Cyber Security",
    issuer: "Cisco Networking Academy",
    url: "https://www.credly.com/badges/274c7aeb-f78c-4667-bd68-c249fb2b5b13"
  },
  {
    title: "Introduction to Generative AI",
    issuer: "Google Cloud",
    url: "https://www.cloudskillsboost.google/public_profiles/4d3c3f3a-b1e8-42b5-b7a7-fcd0db1a79b3/badges/8309862"
  },
  {
    title: "Data Analytics & Visualization Program",
    issuer: "Accenture North America (Forage)",
    url: "https://www.linkedin.com/posts/shrutiagarwal09_forage-certificate-activity-7325568102404960256-b1zm?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEQ8SWQBdbTbZ7JJtYuLiq44aX_8zH5kaBE"
  },
  {
    title: "Software Engineering Virtual Internship Program",
    issuer: "J.P. Morgan Chase & Co. (Forage)",
    url: "https://www.linkedin.com/posts/shrutiagarwal09_jpmorgan-virtualinternship-forage-activity-7328732395195564035-gh8q?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEQ8SWQBdbTbZ7JJtYuLiq44aX_8zH5kaBE"
  },
  {
    title: "Introduction to Data Science",
    issuer: "Cisco Networking Academy",
    url: "https://www.credly.com/badges/459eba8f-380e-405a-a2b4-7b4fffecf57b"
  }
];

const Certificates: React.FC = () => {
  return (
    <section id="certificates" className="py-20 bg-dark-400">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="Certificates"
          subtitle="Professional certifications and achievements that validate my expertise"
        />
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              className="bg-dark-300 rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-800 group hover:border-primary-500/50"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="bg-primary-900/30 p-3 rounded-lg group-hover:bg-primary-900/50 transition-colors">
                  <Award className="w-6 h-6 text-primary-400" />
                </div>
                <motion.a
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-accent-600 text-white text-sm rounded-lg hover:bg-accent-700 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Certificate
                  <ExternalLink className="w-4 h-4" />
                </motion.a>
              </div>
              
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-primary-300 transition-colors">
                {cert.title}
              </h3>
              
              <p className="text-gray-400 text-sm">
                {cert.issuer}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;