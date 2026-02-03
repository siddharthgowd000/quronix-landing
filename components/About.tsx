'use client';

import { motion, Variants } from 'framer-motion';
import { Shield, Layers, Rocket } from 'lucide-react';
import { SectionWrapper } from '@/components/ui';

interface StatCard {
  id: string;
  icon: React.ElementType;
  title: string;
  description: string;
  gradient: string;
}

const statsData: StatCard[] = [
  {
    id: 'medical-grade',
    icon: Shield,
    title: 'Medical-Grade',
    description: 'IEC/ISO Compliant Engineering',
    gradient: 'from-primary-500 to-primary-600',
  },
  {
    id: 'end-to-end',
    icon: Layers,
    title: 'End-to-End',
    description: 'Concept to Deployment',
    gradient: 'from-secondary-500 to-secondary-600',
  },
  {
    id: 'real-world',
    icon: Rocket,
    title: 'Real-World',
    description: 'Production-Ready Systems',
    gradient: 'from-tertiary-500 to-tertiary-600',
  },
];

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, x: 30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <SectionWrapper
      id="about"
      background="none"
      paddingY="xl"
      maxWidth="xl"
    >
      {/* Background Geometric Mesh Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none mask-radial-faded">
        <svg width="100%" height="100%">
          <defs>
            <pattern id="about-mesh" width="60" height="60" patternUnits="userSpaceOnUse">
              <path
                d="M 0 30 L 30 0 L 60 30 L 30 60 Z"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.5"
                className="text-primary-400"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#about-mesh)" />
        </svg>
      </div>

      {/* Two-Column Layout */}
      <motion.div
        className="relative z-10 flex flex-col lg:flex-row gap-12 lg:gap-16 items-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
      >
        {/* Left Column - Text Content */}
        <motion.div variants={textVariants as Variants} className="flex-1 space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            About Quronix Technologies
          </h2>

          <p className="text-lg text-neutral-700 leading-relaxed">
            Quronix Technologies is a{' '}
            <span className="font-semibold bg-linear-to-r from-primary-600 to-secondary-500 bg-clip-text text-transparent">
              deep-technology company
            </span>{' '}
            focused on intelligent robotic and mechatronic systems that solve real-world challenges across healthcare, logistics, and industrial automation.
          </p>

          <p className="text-lg text-neutral-700 leading-relaxed">
            We operate at the{' '}
            <span className="font-semibold bg-linear-to-r from-secondary-500 to-tertiary-500 bg-clip-text text-transparent">
              intersection of robotics, medical devices, and advanced engineering
            </span>
            , bringing together expertise in mechanical design, embedded systems, AI, and regulatory compliance to deliver production-ready solutions.
          </p>

          <div className="pt-4 pl-6 border-l-4 border-primary-500">
            <p className="text-lg text-neutral-700 leading-relaxed italic">
              Our philosophy is simple:{' '}
              <span className="font-bold bg-linear-to-r from-primary-600 via-secondary-500 to-tertiary-500 bg-clip-text text-transparent">
                Intelligence must translate into motion, action, and impact.
              </span>{' '}
              Every system we build is designed not just to be smart, but to make a tangible difference in the real world.
            </p>
          </div>
        </motion.div>

        {/* Right Column - Stats Cards */}
        <motion.div variants={textVariants as Variants} className="flex-1 w-full lg:w-auto">
          <div className="space-y-6">
            {statsData.map((stat, index) => (
              <motion.div
                key={stat.id}
                variants={cardVariants as Variants}
                whileHover={{ scale: 1.03, x: 8 }}
                transition={{ duration: 0.3 }}
                className="group relative"
              >
                <div className="glass rounded-2xl p-6 overflow-hidden transition-all duration-300 group-hover:shadow-xl">
                  {/* Gradient Border Effect */}
                  <div className={`absolute inset-0 rounded-2xl bg-linear-to-br ${stat.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                  
                  {/* Card Border Accent */}
                  <div className={`absolute left-0 top-0 bottom-0 w-1 bg-linear-to-b ${stat.gradient} rounded-l-2xl`} />

                  <div className="relative z-10 flex items-center gap-6">
                    {/* Icon */}
                    <div className={`w-16 h-16 rounded-xl bg-linear-to-br ${stat.gradient} flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110`}>
                      <stat.icon className="w-8 h-8 text-white" strokeWidth={2} />
                    </div>

                    {/* Text Content */}
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-neutral-900 mb-1">
                        {stat.title}
                      </h3>
                      <p className="text-sm text-neutral-600 font-medium">
                        {stat.description}
                      </p>
                    </div>
                  </div>

                  {/* Floating Accent */}
                  <div className={`absolute -bottom-8 -right-8 w-32 h-32 bg-linear-to-br ${stat.gradient} opacity-5 rounded-full blur-2xl group-hover:opacity-10 transition-opacity duration-500`} />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-8 text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 px-5 py-2.5 glass rounded-full">
              <div className="flex gap-1">
                <div className="w-2 h-2 bg-linear-to-r from-primary-500 to-secondary-500 rounded-full animate-pulse" />
                <div className="w-2 h-2 bg-linear-to-r from-secondary-500 to-tertiary-500 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }} />
                <div className="w-2 h-2 bg-linear-to-r from-tertiary-500 to-primary-500 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }} />
              </div>
              <span className="text-sm font-medium text-neutral-700">
                Innovation in Motion
              </span>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </SectionWrapper>
  );
};

export default About;