import React from 'react';
import { motion } from 'framer-motion';

export interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverable?: boolean;
  gradientBorder?: boolean;
  padding?: 'sm' | 'md' | 'lg' | 'xl';
}

const Card: React.FC<CardProps> = ({
  children,
  className = '',
  hoverable = false,
  gradientBorder = false,
  padding = 'md',
}) => {
  const paddingStyles = {
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
    xl: 'p-10',
  };

  const baseStyles = `glass rounded-xl transition-all duration-300 ${paddingStyles[padding]}`;
  
  const hoverStyles = hoverable
    ? 'hover:shadow-xl hover:scale-[1.02] cursor-pointer'
    : '';

  const borderStyles = gradientBorder
    ? 'border-2 border-transparent bg-gradient-to-br from-primary-500/20 via-secondary-500/20 to-tertiary-500/20 bg-clip-padding'
    : '';

  if (hoverable) {
    return (
      <motion.div
        whileHover={{ scale: 1.02, y: -4 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        className={`${baseStyles} ${hoverStyles} ${borderStyles} ${className}`}
      >
        {gradientBorder && (
          <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary-500 via-secondary-500 to-tertiary-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300 -z-10" />
        )}
        {children}
      </motion.div>
    );
  }

  return (
    <div className={`${baseStyles} ${borderStyles} ${className}`}>
      {children}
    </div>
  );
};

export default Card;