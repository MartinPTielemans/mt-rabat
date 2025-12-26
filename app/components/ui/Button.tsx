'use client';

import { type ReactNode } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface ButtonProps {
  children: ReactNode;
  href?: string;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  icon?: ReactNode;
  iconPosition?: 'left' | 'right';
}

const variants = {
  primary: {
    base: 'bg-primary hover:bg-primary-dark text-white',
    clipPath: 'polygon(0 0, 100% 0, 95% 100%, 0% 100%)',
  },
  secondary: {
    base: 'bg-charcoal hover:bg-charcoal-light text-white',
    clipPath: 'polygon(5% 0, 100% 0, 100% 100%, 0% 100%)',
  },
  outline: {
    base: 'border-2 border-charcoal hover:bg-charcoal text-charcoal hover:text-white',
    clipPath: 'none',
  },
  ghost: {
    base: 'hover:bg-gray-100 text-charcoal',
    clipPath: 'none',
  },
};

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-10 py-4 text-xl',
};

export function Button({
  children,
  href,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  type = 'button',
  disabled = false,
  icon,
  iconPosition = 'right',
}: ButtonProps) {
  const variantStyles = variants[variant];
  const sizeStyles = sizes[size];

  const buttonContent = (
    <>
      {icon && iconPosition === 'left' && (
        <span className="mr-2 transition-transform group-hover:-translate-x-1">{icon}</span>
      )}
      <span className="relative z-10">{children}</span>
      {icon && iconPosition === 'right' && (
        <span className="ml-2 transition-transform group-hover:translate-x-1">{icon}</span>
      )}
    </>
  );

  const baseClasses = `
    group relative inline-flex items-center justify-center
    font-display uppercase tracking-wider
    transition-all duration-300
    ${variantStyles.base}
    ${sizeStyles}
    ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
    ${className}
  `;

  const style = variantStyles.clipPath !== 'none' 
    ? { clipPath: variantStyles.clipPath } 
    : {};

  if (href) {
    return (
      <Link href={href} className={baseClasses} style={style}>
        {buttonContent}
      </Link>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={baseClasses}
      style={style}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {buttonContent}
    </motion.button>
  );
}

// Arrow icon for buttons
export function ArrowIcon({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </svg>
  );
}

