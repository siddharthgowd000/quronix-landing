'use client';

import { motion, Variants, useMotionValue, useTransform } from 'framer-motion';
import { 
  Radar, 
  Brain, 
  Network, 
  Shield, 
  Puzzle, 
  Gauge,
  LucideIcon,
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { useState } from 'react';
import { SectionWrapper } from '@/components/ui';

interface Feature {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
  metric?: string;
  metricLabel?: string;
}

const featuresData: Feature[] = [
  {
    id: 'lidar-vision',
    icon: Radar,
    title: 'LiDAR & Vision',
    description: 'Multi-sensor fusion for precision navigation and environmental understanding',
    metric: '360°',
    metricLabel: 'Coverage'
  },
  {
    id: 'ai-intelligence',
    icon: Brain,
    title: 'AI-Driven Intelligence',
    description: 'Machine learning for adaptive behavior and intelligent decision-making',
    metric: '99.9%',
    metricLabel: 'Accuracy'
  },
  {
    id: 'fleet-management',
    icon: Network,
    title: 'Fleet Management',
    description: 'Cloud-connected multi-robot orchestration and coordination systems',
    metric: '100+',
    metricLabel: 'Units'
  },
  {
    id: 'medical-safety',
    icon: Shield,
    title: 'Medical-Grade Safety',
    description: 'IEC/ISO compliant design and validation for healthcare environments',
    metric: 'ISO 13482',
    metricLabel: 'Certified'
  },
  {
    id: 'custom-integration',
    icon: Puzzle,
    title: 'Custom Integration',
    description: 'Tailored solutions for specific workflows and enterprise systems',
    metric: '24/7',
    metricLabel: 'Support'
  },
  {
    id: 'realtime-control',
    icon: Gauge,
    title: 'Real-time Control',
    description: 'High-frequency control loops for smooth and responsive operation',
    metric: '<10ms',
    metricLabel: 'Latency'
  },
];

const FeatureCard = ({ feature, index }: { feature: Feature; index: number }) => {
  const [isHovered, setIsHovered] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useTransform(mouseY, [-100, 100], [5, -5]);
  const rotateY = useTransform(mouseX, [-100, 100], [-5, 5]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    setIsHovered(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
      }}
      className="group relative cursor-pointer"
    >
      {/* Main Card */}
      <div className="relative h-full glass-card rounded-3xl p-8 overflow-hidden transition-all duration-500 hover:shadow-2xl">
        
        {/* Animated Gradient Border */}
        <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary-500 via-secondary-500 to-tertiary-500 opacity-20 blur-xl" />
          <div className="absolute inset-[1px] rounded-3xl bg-white" />
        </div>

        {/* Grid Pattern Background */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
          <svg width="100%" height="100%">
            <defs>
              <pattern id={`grid-${feature.id}`} width="32" height="32" patternUnits="userSpaceOnUse">
                <path
                  d="M 32 0 L 0 0 0 32"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                  className="text-neutral-900"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill={`url(#grid-${feature.id})`} />
          </svg>
        </div>

        {/* Spotlight Effect */}
        <motion.div
          className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"
          style={{
            background: `radial-gradient(600px circle at ${mouseX}px ${mouseY}px, rgba(24, 144, 255, 0.05), transparent 40%)`,
          }}
        />

        {/* Content Container */}
        <div className="relative z-10" style={{ transform: 'translateZ(20px)' }}>
          
          {/* Icon Section */}
          <div className="relative mb-6 flex items-start justify-between">
            <motion.div
              animate={{
                scale: isHovered ? 1.1 : 1,
                rotate: isHovered ? 5 : 0,
              }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="relative"
            >
              {/* Icon Background Glow */}
              <motion.div
                className="absolute inset-0 rounded-2xl blur-2xl"
                animate={{
                  opacity: isHovered ? 0.6 : 0,
                  scale: isHovered ? 1.5 : 1,
                }}
                transition={{ duration: 0.5 }}
                style={{
                  background: 'linear-gradient(135deg, #1890ff 0%, #722ed1 100%)',
                }}
              />
              
              {/* Icon Container */}
              <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center shadow-lg transition-all duration-300">
                <feature.icon className="w-8 h-8 text-white" strokeWidth={2.5} />
              </div>
            </motion.div>

            {/* Metric Badge */}
            {feature.metric && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 + 0.3 }}
                className="flex flex-col items-end"
              >
                <span className="text-2xl font-bold bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
                  {feature.metric}
                </span>
                <span className="text-xs text-clinical text-neutral-500 mt-1">
                  {feature.metricLabel}
                </span>
              </motion.div>
            )}
          </div>

          {/* Text Content */}
          <div>
            <h3 className="text-xl font-bold mb-3 text-neutral-900 group-hover:text-primary-600 transition-colors duration-300">
              {feature.title}
            </h3>
            <p className="text-neutral-600 leading-relaxed text-sm mb-4">
              {feature.description}
            </p>

            {/* Learn More Link */}
            <motion.div
              className="flex items-center gap-2 text-sm font-medium text-primary-600 opacity-0 group-hover:opacity-100 transition-all duration-300"
              initial={{ x: -10 }}
              whileHover={{ x: 0 }}
            >
              <span>Learn more</span>
              <ArrowRight className="w-4 h-4" />
            </motion.div>
          </div>
        </div>

        {/* Corner Accent */}
        <motion.div
          className="absolute -bottom-6 -right-6 w-32 h-32 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: 'radial-gradient(circle, rgba(24, 144, 255, 0.1) 0%, transparent 70%)',
          }}
        />

        {/* Shine Effect */}
        <motion.div
          className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100"
          initial={false}
          animate={{
            background: isHovered
              ? 'linear-gradient(135deg, transparent 0%, rgba(255,255,255,0.1) 50%, transparent 100%)'
              : 'transparent',
          }}
          transition={{ duration: 0.6 }}
        />
      </div>
    </motion.div>
  );
};

const Features = () => {
  return (
    <SectionWrapper
      id="technology"
      background="none"
      paddingY="xl"
      maxWidth="xl"
    >
      {/* Section Header */}
      <motion.div
        className="text-center mb-20"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {/* Badge */}
        <motion.div
          className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full mb-6"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Sparkles className="w-4 h-4 text-primary-500" />
          <span className="text-sm font-medium text-clinical text-neutral-700">
            Enterprise Technology
          </span>
        </motion.div>

        {/* Main Heading */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-linear-to-r from-neutral-900 via-neutral-800 to-neutral-900 bg-clip-text text-transparent">
          Advanced Technology Stack
        </h2>
        
        {/* Subheading */}
        <p className="text-xl md:text-2xl text-neutral-600 max-w-3xl mx-auto">
          Built on cutting-edge robotics, AI, and medical-grade engineering
        </p>

        {/* Decorative Line */}
        <motion.div
          className="mt-8 mx-auto w-24 h-1 bg-linear-to-r from-primary-500 to-secondary-500 rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: 96 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        />
      </motion.div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {featuresData.map((feature, index) => (
          <FeatureCard key={feature.id} feature={feature} index={index} />
        ))}
      </div>

      {/* Bottom CTA Section */}
      <motion.div
        className="mt-20 text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <div className="inline-flex flex-col md:flex-row items-center gap-4 p-8 glass-card rounded-3xl max-w-2xl">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full animate-pulse" />
            <span className="text-sm font-medium text-clinical text-neutral-700">
              Ready to deploy
            </span>
          </div>
          <div className="hidden md:block w-px h-8 bg-neutral-200" />
          <div className="flex items-center gap-3">
            <Shield className="w-5 h-5 text-primary-500" />
            <span className="text-sm font-medium text-clinical text-neutral-700">
              Medical-grade certified
            </span>
          </div>
          <div className="hidden md:block w-px h-8 bg-neutral-200" />
          <div className="flex items-center gap-3">
            <Network className="w-5 h-5 text-secondary-500" />
            <span className="text-sm font-medium text-clinical text-neutral-700">
              Cloud-connected
            </span>
          </div>
        </div>
      </motion.div>

      {/* Background Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden -z-10">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-secondary-500/5 rounded-full blur-3xl" />
      </div>
    </SectionWrapper>
  );
};

export default Features;