'use client';

import React from 'react';
import { motion } from 'framer-motion';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'tertiary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  rounded?: 'full' | 'lg';
  children: React.ReactNode;
  className?: string;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', rounded = 'lg', children, className = '', ...props }, ref) => {
    const baseStyles = 'font-semibold transition-all duration-300 inline-flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed';
    
    const variants = {
      primary: 'bg-primary-500 text-white hover:bg-primary-600 active:bg-primary-700 shadow-md hover:shadow-lg',
      secondary: 'bg-secondary-500 text-white hover:bg-secondary-600 active:bg-secondary-700 shadow-md hover:shadow-lg',
      tertiary: 'bg-tertiary-500 text-white hover:bg-tertiary-600 active:bg-tertiary-700 shadow-md hover:shadow-lg',
      outline: 'border-2 border-primary-500 text-primary-600 hover:bg-primary-50 active:bg-primary-100',
      ghost: 'text-primary-600 hover:bg-primary-50 active:bg-primary-100',
    };

    const sizes = {
      sm: 'px-4 py-2 text-sm',
      md: 'px-6 py-3 text-base',
      lg: 'px-8 py-4 text-lg',
    };

    const roundedStyles = {
      full: 'rounded-full',
      lg: 'rounded-lg',
    };

    return (
      <motion.button 
        ref={ref}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${roundedStyles[rounded]} ${className}`}
        {...props}
      >
        {children}
      </motion.button>
    );
  }
);

Button.displayName = 'Button';

export default Button;