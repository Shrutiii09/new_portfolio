import React from 'react';
import { Github, Linkedin, Code2, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { 
      icon: <Github className="w-5 h-5" />,
      href: 'https://github.com/Shrutiii09',
      label: 'GitHub'
    },
    { 
      icon: <Linkedin className="w-5 h-5" />, 
      href: 'https://www.linkedin.com/in/shrutiagarwal09',
      label: 'LinkedIn'
    },
    { 
      icon: <Code2 className="w-5 h-5" />, 
      href: 'https://leetcode.com/u/Shrutiag_',
      label: 'LeetCode'
    },
    { 
      icon: <Mail className="w-5 h-5" />, 
      href: 'mailto:shrutigrwl55@gmail.com',
      label: 'Email'
    }
  ];

  return (
    <footer className="py-10 bg-dark-400 border-t border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <a href="#hero" className="text-xl font-bold text-white flex items-center">
              <span className="text-accent-500">&lt;</span>SA<span className="text-accent-500">/&gt;</span>
            </a>
          </div>
          
          <div className="flex items-center space-x-6 mb-4 md:mb-0">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label={link.label}
              >
                {link.icon}
              </a>
            ))}
          </div>
          
          <div className="text-gray-400 text-sm">
            <p>© {currentYear} Shruti Agarwal. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;