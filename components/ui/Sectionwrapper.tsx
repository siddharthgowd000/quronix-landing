'use client';

import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  background?: 'default' | 'gradient' | 'pattern' | 'glass' | 'none';
  id?: string;
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full';
  paddingY?: 'sm' | 'md' | 'lg' | 'xl';
  animate?: boolean;
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({
  children,
  className = '',
  background = 'default',
  id,
  maxWidth = '2xl',
  paddingY = 'lg',
  animate = true,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const backgrounds = {
    default: 'bg-white',
    gradient: 'bg-gradient-to-br from-neutral-50 via-primary-50/30 to-secondary-50/20',
    pattern: 'bg-white relative overflow-hidden',
    glass: 'glass',
    none: 'bg-transparent',
  };

  const maxWidths = {
    sm: 'max-w-3xl',
    md: 'max-w-5xl',
    lg: 'max-w-6xl',
    xl: 'max-w-7xl',
    '2xl': 'max-w-screen-2xl',
    full: 'max-w-full',
  };

  const paddingYStyles = {
    sm: 'py-12 md:py-16',
    md: 'py-16 md:py-20 lg:py-24',
    lg: 'py-16 md:py-24 lg:py-32',
    xl: 'py-20 md:py-28 lg:py-36',
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <section
      id={id}
      className={`relative ${backgrounds[background]} ${paddingYStyles[paddingY]} ${className}`}
      ref={ref}
    >
      {/* Pattern Background (only when background='pattern') */}
      {background === 'pattern' && (
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <svg width="100%" height="100%">
            <defs>
              <pattern id="section-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path
                  d="M 40 0 L 0 0 0 40"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="0.5"
                  className="text-primary-300"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#section-grid)" />
          </svg>
        </div>
      )}

      <motion.div
        className={`${maxWidths[maxWidth]} mx-auto px-6 relative z-10`}
        variants={animate ? containerVariants : undefined}
        initial={animate ? 'hidden' : undefined}
        animate={animate && isInView ? 'visible' : undefined}
      >
        {children}
      </motion.div>
    </section>
  );
};

export default SectionWrapper;