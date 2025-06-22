import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, Phone, MapPin, MessageCircle } from 'lucide-react';
import SectionHeading from './SectionHeading';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState<null | 'success' | 'error'>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Create mailto link with form data
    const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
    const mailtoLink = `mailto:shrutigrwl55@gmail.com?subject=${subject}&body=${body}`;
    
    // Open email client
    window.location.href = mailtoLink;
    
    // Simulate form submission success
    setTimeout(() => {
      setFormStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
      
      // Reset status after 3 seconds
      setTimeout(() => {
        setFormStatus(null);
      }, 3000);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      value: "shrutigrwl55@gmail.com",
      href: "mailto:shrutigrwl55@gmail.com"
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: "Phone",
      value: "+91 8979595695",
      href: "tel:+918979595695"
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: "Location",
      value: "Dehradun, Uttarakhand, India"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-dark-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="Contact Me"
          subtitle="Get in touch for collaboration, opportunities, or just to say hello!"
        />
        
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6 text-white flex items-center gap-3">
              <MessageCircle className="w-7 h-7 text-accent-500" />
              Let's Talk
            </h3>
            
            <p className="text-gray-300 mb-8 leading-relaxed">
              I'm always open to new opportunities, collaborations, or just having a chat about technology.
              Feel free to reach out through the form or directly via email or phone.
            </p>
            
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div 
                  key={index} 
                  className="flex items-start group"
                  whileHover={{ x: 10 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="bg-primary-900/30 p-3 rounded-lg mr-4 group-hover:bg-primary-800/40 transition-colors">
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="text-white font-medium">{info.label}</h4>
                    {info.href ? (
                      <motion.a 
                        href={info.href} 
                        className="text-gray-400 hover:text-accent-500 transition-colors"
                        whileHover={{ scale: 1.05 }}
                      >
                        {info.value}
                      </motion.a>
                    ) : (
                      <p className="text-gray-400">{info.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Quick Contact Buttons */}
            <div className="mt-8 flex flex-wrap gap-4">
              <motion.a
                href="mailto:shrutigrwl55@gmail.com"
                className="flex items-center gap-2 px-6 py-3 bg-accent-600 text-white rounded-lg hover:bg-accent-700 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail className="w-4 h-4" />
                Send Email
              </motion.a>
              <motion.a
                href="tel:+918979595695"
                className="flex items-center gap-2 px-6 py-3 border border-primary-500 text-primary-400 rounded-lg hover:bg-primary-500 hover:text-white transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Phone className="w-4 h-4" />
                Call Now
              </motion.a>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="bg-dark-400 p-6 rounded-lg shadow-lg border border-gray-800">
              {formStatus === 'success' && (
                <motion.div 
                  className="mb-6 p-4 bg-accent-500/20 border border-accent-500 rounded-lg text-accent-500"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  Your email client should open shortly with the message pre-filled!
                </motion.div>
              )}
              
              {formStatus === 'error' && (
                <motion.div 
                  className="mb-6 p-4 bg-red-500/20 border border-red-500 rounded-lg text-red-500"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  There was an error. Please try contacting me directly via email.
                </motion.div>
              )}
              
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-dark-300 border border-gray-700 rounded-lg focus:ring-primary-500 focus:border-primary-500 text-white transition-colors"
                  required
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-dark-300 border border-gray-700 rounded-lg focus:ring-primary-500 focus:border-primary-500 text-white transition-colors"
                  required
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-2 bg-dark-300 border border-gray-700 rounded-lg focus:ring-primary-500 focus:border-primary-500 text-white transition-colors resize-none"
                  required
                ></textarea>
              </div>
              
              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 px-6 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
              >
                {isSubmitting ? (
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    className="w-4 h-4 border-2 border-white border-t-transparent rounded-full mr-2"
                  />
                ) : (
                  <Send className="w-4 h-4 mr-2" />
                )}
                {isSubmitting ? 'Opening Email Client...' : 'Send Message'}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;