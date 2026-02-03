'use client';

import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock,
  Send,
  Activity,
  Heart,
  Zap,
  CheckCircle2
} from 'lucide-react';
import { useState } from 'react';
import { SectionWrapper } from '@/components/ui';
import Button from './ui/Button';

interface ContactInfo {
  icon: React.ElementType;
  title: string;
  details: string[];
  gradient: string;
}

const contactData: ContactInfo[] = [
  {
    icon: Mail,
    title: 'Email',
    details: ['info@quronix.com', 'support@quronix.com'],
    gradient: 'from-primary-500 to-primary-600',
  },
  {
    icon: Phone,
    title: 'Phone',
    details: ['+1 (555) 123-4567', '+1 (555) 987-6543'],
    gradient: 'from-secondary-500 to-secondary-600',
  },
  {
    icon: MapPin,
    title: 'Location',
    details: ['123 Innovation Drive', 'Medical District, CA 94016'],
    gradient: 'from-tertiary-500 to-tertiary-600',
  },
  {
    icon: Clock,
    title: 'Business Hours',
    details: ['Mon - Fri: 9:00 AM - 6:00 PM', 'Sat: 10:00 AM - 4:00 PM'],
    gradient: 'from-accent-500 to-accent-600',
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    category: 'general',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        organization: '',
        category: 'general',
        message: '',
      });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <SectionWrapper
      id="contact"
      background="none"
      paddingY="xl"
      maxWidth="xl"
    >
      {/* Medical-Inspired Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* ECG Line Pattern */}
        <svg className="absolute top-0 left-0 w-full h-32 opacity-5" viewBox="0 0 1200 100">
          <path
            d="M0 50 L200 50 L220 30 L240 70 L260 50 L280 50 L300 20 L320 80 L340 50 L1200 50"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="text-primary-500"
          />
        </svg>

        {/* Floating Medical Icons */}
        <motion.div
          className="absolute top-20 right-20 text-primary-200"
          animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
        >
          <Heart className="w-16 h-16 opacity-20" />
        </motion.div>

        <motion.div
          className="absolute bottom-40 left-10 text-secondary-200"
          animate={{ y: [0, 15, 0], rotate: [0, -5, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
        >
          <Activity className="w-20 h-20 opacity-20" />
        </motion.div>

        <motion.div
          className="absolute top-1/2 right-10 text-tertiary-200"
          animate={{ y: [0, -15, 0], x: [0, 10, 0] }}
          transition={{ duration: 7, repeat: Infinity }}
        >
          <Zap className="w-12 h-12 opacity-20" />
        </motion.div>

        {/* Pulse Rings */}
        <motion.div
          className="absolute top-1/3 left-1/4 w-32 h-32 rounded-full border-2 border-primary-300"
          animate={{ scale: [1, 2, 1], opacity: [0.3, 0, 0.3] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
      </div>

      {/* Section Header */}
      <div className="relative z-10 text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Heartbeat Icon */}
          <motion.div
            className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-linear-to-br from-primary-500 to-secondary-500 mb-6 shadow-xl"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <Activity className="w-10 h-10 text-white" />
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Get in Touch
          </h2>
          <p className="text-xl md:text-2xl text-neutral-600 max-w-3xl mx-auto">
            Connect with our team of experts to discuss how our robotic solutions can transform your operations
          </p>
        </motion.div>
      </div>

      {/* Main Content Grid */}
      <div className="relative z-10 grid lg:grid-cols-3 gap-8 lg:gap-12">
        {/* Left Column - Contact Cards */}
        <motion.div
          className="lg:col-span-1 space-y-6"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {contactData.map((contact, index) => (
            <motion.div
              key={contact.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, x: 8 }}
              className="group"
            >
              <div className="glass rounded-2xl p-6 relative overflow-hidden">
                {/* Gradient Border */}
                <div className={`absolute left-0 top-0 bottom-0 w-1 bg-linear-to-b ${contact.gradient}`} />

                {/* Icon */}
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-xl bg-linear-to-br ${contact.gradient} flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110`}>
                    <contact.icon className="w-6 h-6 text-white" />
                  </div>

                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                      {contact.title}
                    </h3>
                    {contact.details.map((detail, idx) => (
                      <p key={idx} className="text-sm text-neutral-600">
                        {detail}
                      </p>
                    ))}
                  </div>
                </div>

                {/* Pulse Indicator */}
                <motion.div
                  className={`absolute -bottom-4 -right-4 w-24 h-24 bg-linear-to-br ${contact.gradient} rounded-full opacity-5 group-hover:opacity-10 transition-opacity duration-300`}
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                />
              </div>
            </motion.div>
          ))}

          {/* Medical Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="glass rounded-2xl p-6 text-center"
          >
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 rounded-full bg-linear-to-br from-primary-500 via-secondary-500 to-tertiary-500 flex items-center justify-center animate-pulse">
                <Heart className="w-8 h-8 text-white" />
              </div>
            </div>
            <h4 className="text-lg font-semibold text-neutral-900 mb-2">
              Healthcare Certified
            </h4>
            <p className="text-sm text-neutral-600">
              IEC 60601 & ISO 13485 Compliant Systems
            </p>
          </motion.div>
        </motion.div>

        {/* Right Column - Contact Form */}
        <motion.div
          className="lg:col-span-2"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="glass rounded-3xl p-8 md:p-10 relative overflow-hidden">
            {/* Medical Cross Pattern */}
            <div className="absolute top-0 right-0 w-64 h-64 opacity-5">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <path d="M40 0 L60 0 L60 40 L100 40 L100 60 L60 60 L60 100 L40 100 L40 60 L0 60 L0 40 L40 40 Z" fill="currentColor" className="text-primary-500" />
              </svg>
            </div>

            <h3 className="text-3xl font-bold mb-6">Send Us a Message</h3>

            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              {/* Name & Email Row */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-neutral-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border-2 border-neutral-200 focus:border-primary-500 focus:outline-none transition-colors duration-300 bg-white/50 backdrop-blur-sm"
                    placeholder="Dr. Jane Smith"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-neutral-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border-2 border-neutral-200 focus:border-primary-500 focus:outline-none transition-colors duration-300 bg-white/50 backdrop-blur-sm"
                    placeholder="jane.smith@hospital.com"
                  />
                </div>
              </div>

              {/* Organization & Category Row */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="organization" className="block text-sm font-semibold text-neutral-700 mb-2">
                    Organization
                  </label>
                  <input
                    type="text"
                    id="organization"
                    name="organization"
                    value={formData.organization}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border-2 border-neutral-200 focus:border-primary-500 focus:outline-none transition-colors duration-300 bg-white/50 backdrop-blur-sm"
                    placeholder="Hospital / Company Name"
                  />
                </div>

                <div>
                  <label htmlFor="category" className="block text-sm font-semibold text-neutral-700 mb-2">
                    Inquiry Type *
                  </label>
                  <select
                    id="category"
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border-2 border-neutral-200 focus:border-primary-500 focus:outline-none transition-colors duration-300 bg-white/50 backdrop-blur-sm"
                  >
                    <option value="general">General Inquiry</option>
                    <option value="healthcare">Healthcare Solutions</option>
                    <option value="logistics">Logistics & Warehousing</option>
                    <option value="custom">Custom Development</option>
                    <option value="support">Technical Support</option>
                    <option value="partnership">Partnership</option>
                  </select>
                </div>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-neutral-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 rounded-xl border-2 border-neutral-200 focus:border-primary-500 focus:outline-none transition-colors duration-300 bg-white/50 backdrop-blur-sm resize-none"
                  placeholder="Tell us about your project or inquiry..."
                />
              </div>

              {/* Submit Button */}
              <div className="flex items-center gap-4">
                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  className="flex-1 md:flex-none"
                  disabled={isSubmitted}
                >
                  {isSubmitted ? (
                    <>
                      <CheckCircle2 className="w-5 h-5 mr-2" />
                      Message Sent!
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>

                {isSubmitted && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex items-center gap-2 text-green-600"
                  >
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 0.5, repeat: 2 }}
                    >
                      <Heart className="w-6 h-6 fill-current" />
                    </motion.div>
                    <span className="text-sm font-medium">We&apos;ll respond within 24 hours</span>
                  </motion.div>
                )}
              </div>

              {/* Medical-Themed Info Text */}
              <div className="flex items-start gap-3 p-4 rounded-xl bg-primary-50 border border-primary-100">
                <Activity className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-primary-800">
                  <strong>Fast Response Time:</strong> Our team typically responds to healthcare-related inquiries within 4 hours during business hours. For urgent medical device support, please call our hotline.
                </p>
              </div>
            </form>
          </div>
        </motion.div>
      </div>

      {/* Bottom Trust Badges */}
      <motion.div
        className="relative z-10 mt-16 flex flex-wrap justify-center items-center gap-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        {[
          'ISO 13485 Certified',
          'IEC 60601 Compliant',
          'FDA Registered',
          'CE Marked',
        ].map((badge, index) => (
          <motion.div
            key={badge}
            className="flex items-center gap-2 px-4 py-2 glass rounded-full"
            whileHover={{ scale: 1.05 }}
          >
            <div className="w-2 h-2 rounded-full bg-linear-to-r from-primary-500 to-secondary-500 animate-pulse" />
            <span className="text-sm font-medium text-neutral-700">{badge}</span>
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  );
};

export default Contact; 