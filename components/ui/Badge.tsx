import React from 'react';

export interface BadgeProps {
  variant?: 'primary' | 'secondary' | 'tertiary' | 'accent' | 'neutral' | 'success' | 'warning' | 'error';
  children: React.ReactNode;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

const Badge: React.FC<BadgeProps> = ({
  variant = 'primary',
  children,
  className = '',
  size = 'md',
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-semibold rounded-full transition-all duration-200';
  
  const variants = {
    primary: 'bg-primary-100 text-primary-700 border border-primary-200',
    secondary: 'bg-secondary-100 text-secondary-700 border border-secondary-200',
    tertiary: 'bg-tertiary-100 text-tertiary-700 border border-tertiary-200',
    accent: 'bg-accent-100 text-accent-700 border border-accent-200',
    neutral: 'bg-neutral-100 text-neutral-700 border border-neutral-200',
    success: 'bg-green-100 text-green-700 border border-green-200',
    warning: 'bg-yellow-100 text-yellow-700 border border-yellow-200',
    error: 'bg-red-100 text-red-700 border border-red-200',
  };

  const sizes = {
    sm: 'px-2 py-0.5 text-xs',
    md: 'px-3 py-1 text-sm',
    lg: 'px-4 py-1.5 text-base',
  };

  return (
    <span className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}>
      {children}
    </span>
  );
};

export default Badge;