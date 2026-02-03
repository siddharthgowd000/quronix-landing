'use client';

import { motion } from 'framer-motion';
import { Linkedin, Twitter, Github, Mail } from 'lucide-react';

interface FooterLink {
  label: string;
  href: string;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

const footerSections: FooterSection[] = [
  {
    title: 'Products',
    links: [
      { label: 'AMRs (100-1000kg)', href: '#products' },
      { label: 'Custom Robotics', href: '#products' },
      { label: 'AI Exercise Trainer', href: '#products' },
      { label: 'Wellness Robot', href: '#products' },
      { label: 'Physiotherapy Robot', href: '#products' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About Us', href: '#about' },
      { label: 'Technology', href: '#features' },
      { label: 'Careers', href: '#careers' },
      { label: 'Contact', href: '#contact' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Documentation', href: '#docs' },
      { label: 'Support', href: '#support' },
      { label: 'Blog', href: '#blog' },
      { label: 'Case Studies', href: '#cases' },
    ],
  },
];

const socialLinks = [
  { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
  { icon: Github, href: 'https://github.com', label: 'GitHub' },
  { icon: Mail, href: 'mailto:contact@quronix.com', label: 'Email' },
];

const Footer = () => {
  return (
    <footer className="relative bg-neutral-900 text-neutral-300 pt-16 pb-8 overflow-hidden">
      {/* Gradient Border Top */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-primary-500 via-secondary-500 to-tertiary-500" />

      {/* Geometric Pattern Overlay */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <svg width="100%" height="100%">
          <defs>
            <pattern id="footer-pattern" width="60" height="60" patternUnits="userSpaceOnUse">
              <path
                d="M 0 30 L 30 0 L 60 30 L 30 60 Z"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.7"
                className="text-primary-400"
              />
              <circle cx="30" cy="30" r="2" fill="currentColor" className="text-primary-400" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#footer-pattern)" />
        </svg>
      </div>

      {/* Main Footer Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Top Section - Multi-column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Column 1 - Company Info */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-bold font-heading text-white mb-3">
                Quronix Technologies
              </h3>
              <p className="text-sm font-medium text-primary-400 mb-4">
                Where Geometry Meets Cognition
              </p>
              <p className="text-sm text-neutral-400 leading-relaxed">
                Building intelligent robotic and mechatronic systems that transform healthcare, logistics, and industrial automation.
              </p>
            </motion.div>
          </div>

          {/* Columns 2-4 - Link Sections */}
          {footerSections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <h4 className="text-white font-semibold font-heading mb-4">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-neutral-400 hover:text-primary-400 transition-colors duration-300 inline-block hover:translate-x-1"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Divider */}
        <div className="h-px bg-linear-to-r from-transparent via-neutral-700 to-transparent mb-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Copyright */}
          <motion.p
            className="text-sm text-neutral-500"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            © {new Date().getFullYear()} Quronix Technologies. All rights reserved.
          </motion.p>

          {/* Social Media Icons */}
          <motion.div
            className="flex items-center gap-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="group relative w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center hover:bg-neutral-700 transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <social.icon className="w-5 h-5 text-neutral-400 group-hover:text-primary-400 transition-colors duration-300" />
                
                {/* Hover Glow */}
                <div className="absolute inset-0 rounded-full bg-linear-to-br from-primary-500 to-secondary-500 opacity-0 group-hover:opacity-20 blur-md transition-opacity duration-300" />
              </motion.a>
            ))}
          </motion.div>

          {/* Legal Links */}
          <motion.div
            className="flex items-center gap-6 text-sm"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <a
              href="#privacy"
              className="text-neutral-500 hover:text-primary-400 transition-colors duration-300"
            >
              Privacy Policy
            </a>
            <span className="text-neutral-700">|</span>
            <a
              href="#terms"
              className="text-neutral-500 hover:text-primary-400 transition-colors duration-300"
            >
              Terms of Service
            </a>
          </motion.div>
        </div>

        {/* Floating Badge */}
        <motion.div
          className="flex justify-center mt-8"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-neutral-800/50 backdrop-blur-sm rounded-full border border-neutral-700/50">
            <div className="flex gap-1">
              <div className="w-1.5 h-1.5 bg-linear-to-r from-primary-500 to-secondary-500 rounded-full animate-pulse" />
              <div className="w-1.5 h-1.5 bg-linear-to-r from-secondary-500 to-tertiary-500 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }} />
              <div className="w-1.5 h-1.5 bg-linear-to-r from-tertiary-500 to-primary-500 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }} />
            </div>
            <span className="text-xs font-medium text-neutral-400">
              Powered by Advanced Robotics
            </span>
          </div>
        </motion.div>
      </div>

      {/* Decorative Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-black/20 to-transparent pointer-events-none" />
    </footer>
  );
};

export default Footer;