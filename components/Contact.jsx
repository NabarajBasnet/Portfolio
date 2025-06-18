import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      },
    },
  };

  const glowVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 1.2,
        ease: "easeOut"
      },
    },
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      alert("Message sent! Thanks for reaching out. I'll get back to you soon.");
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section
      id="contact"
      ref={ref}
      className="min-h-screen py-24 px-6 bg-black relative overflow-hidden"
    >
      {/* Animated Background Gradients */}
      <motion.div
        className="absolute inset-0 opacity-20"
        variants={glowVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-white/10 to-white/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-white/8 to-white/12 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-white/6 to-white/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </motion.div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

      <motion.div
        className="container max-w-6xl mx-auto relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <motion.h2
            className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Get In Touch
          </motion.h2>
          <motion.div
            className="w-32 h-1 bg-gradient-to-r from-white via-gray-200 to-white mx-auto rounded-full"
            initial={{ width: 0 }}
            animate={isInView ? { width: 128 } : { width: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          />
          <motion.p
            className="text-xl text-gray-300 mt-8 max-w-2xl mx-auto"
            variants={itemVariants}
          >
            I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <motion.div variants={itemVariants} className="space-y-12">
            <div className="space-y-8">
              <motion.div
                className="group p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-500"
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-white to-gray-300 flex items-center justify-center">
                    <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-white mb-1">Email</h3>
                    <p className="text-gray-300 text-lg">nabarajbasnet2000@gmail.com</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="group p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-500"
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-white to-gray-300 flex items-center justify-center">
                    <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-white mb-1">Phone</h3>
                    <p className="text-gray-300 text-lg">+977 9763427690</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="group p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-500"
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-white to-gray-300 flex items-center justify-center">
                    <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-white mb-1">Follow Me</h3>
                    <div className="flex space-x-4 mt-2">
                      <motion.a
                        href="#"
                        className="text-gray-300 hover:text-white transition-colors duration-300 relative group"
                        whileHover={{ scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        LinkedIn
                        <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></div>
                      </motion.a>
                      <motion.a
                        href="#"
                        className="text-gray-300 hover:text-white transition-colors duration-300 relative group"
                        whileHover={{ scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        GitHub
                        <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></div>
                      </motion.a>
                      <motion.a
                        href="#"
                        className="text-gray-300 hover:text-white transition-colors duration-300 relative group"
                        whileHover={{ scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        Twitter
                        <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></div>
                      </motion.a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            variants={itemVariants}
            className="relative"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-white/20 via-white/10 to-white/20 rounded-3xl blur opacity-25"></div>
            <div className="relative p-8 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg border border-white/20">
              <div className="space-y-8">
                <motion.div
                  whileFocus={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-3">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="w-full px-4 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-transparent transition-all duration-300 backdrop-blur-sm hover:bg-white/10"
                  />
                </motion.div>

                <motion.div
                  whileFocus={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-3">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your email"
                    className="w-full px-4 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-transparent transition-all duration-300 backdrop-blur-sm hover:bg-white/10"
                  />
                </motion.div>

                <motion.div
                  whileFocus={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-3">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your message"
                    rows={6}
                    className="w-full px-4 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-transparent transition-all duration-300 backdrop-blur-sm hover:bg-white/10 resize-none"
                  />
                </motion.div>

                <motion.button
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="relative w-full py-4 px-8 rounded-xl font-semibold text-white overflow-hidden group"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white via-gray-200 to-white transition-all duration-300 group-hover:scale-105"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-white via-gray-100 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="relative z-10 text-lg text-black font-semibold">
                    {isSubmitting ? (
                      <div className="flex items-center justify-center space-x-2">
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        <span>Sending...</span>
                      </div>
                    ) : (
                      'Send Message'
                    )}
                  </span>
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}