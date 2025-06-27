import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, Phone, MapPin, MessageCircle, CheckCircle, AlertCircle } from 'lucide-react';
import SectionHeading from './SectionHeading';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState<null | 'success' | 'error' | 'submitting'>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    
    try {
      const response = await fetch('https://formspree.io/f/xwpbablk', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      if (response.ok) {
        setFormStatus('success');
        setFormData({ name: '', email: '', message: '' });
        
        // Reset status after 5 seconds
        setTimeout(() => {
          setFormStatus(null);
        }, 5000);
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      setFormStatus('error');
      
      // Reset error status after 5 seconds
      setTimeout(() => {
        setFormStatus(null);
      }, 5000);
    }
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
              {/* Success Message */}
              {formStatus === 'success' && (
                <motion.div 
                  className="mb-6 p-4 bg-green-500/20 border border-green-500 rounded-lg text-green-400 flex items-center gap-3"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                >
                  <CheckCircle className="w-5 h-5" />
                  <div>
                    <p className="font-medium">Message sent successfully!</p>
                    <p className="text-sm text-green-300">Thank you for reaching out. I'll get back to you soon.</p>
                  </div>
                </motion.div>
              )}
              
              {/* Error Message */}
              {formStatus === 'error' && (
                <motion.div 
                  className="mb-6 p-4 bg-red-500/20 border border-red-500 rounded-lg text-red-400 flex items-center gap-3"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                >
                  <AlertCircle className="w-5 h-5" />
                  <div>
                    <p className="font-medium">Failed to send message</p>
                    <p className="text-sm text-red-300">Please try again or contact me directly via email.</p>
                  </div>
                </motion.div>
              )}
              
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                  Your Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-dark-300 border border-gray-700 rounded-lg focus:ring-primary-500 focus:border-primary-500 text-white transition-colors"
                  required
                  disabled={formStatus === 'submitting'}
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-dark-300 border border-gray-700 rounded-lg focus:ring-primary-500 focus:border-primary-500 text-white transition-colors"
                  required
                  disabled={formStatus === 'submitting'}
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-2 bg-dark-300 border border-gray-700 rounded-lg focus:ring-primary-500 focus:border-primary-500 text-white transition-colors resize-none"
                  required
                  disabled={formStatus === 'submitting'}
                  placeholder="Tell me about your project, collaboration ideas, or just say hello!"
                ></textarea>
              </div>
              
              <motion.button
                type="submit"
                disabled={formStatus === 'submitting'}
                className="w-full py-3 px-6 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                whileHover={{ scale: formStatus === 'submitting' ? 1 : 1.02 }}
                whileTap={{ scale: formStatus === 'submitting' ? 1 : 0.98 }}
              >
                {formStatus === 'submitting' ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="w-4 h-4 border-2 border-white border-t-transparent rounded-full mr-2"
                    />
                    Sending Message...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </>
                )}
              </motion.button>
              
              <p className="text-xs text-gray-500 mt-3 text-center">
                Your message will be sent securely via Formspree
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;