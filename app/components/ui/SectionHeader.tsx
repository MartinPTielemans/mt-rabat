'use client';

import { motion } from 'framer-motion';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  theme?: 'light' | 'dark';
  className?: string;
}

export function SectionHeader({
  title,
  subtitle,
  align = 'center',
  theme = 'light',
  className = '',
}: SectionHeaderProps) {
  const alignClasses = align === 'center' ? 'text-center mx-auto' : 'text-left';
  const titleColor = theme === 'light' ? 'text-charcoal' : 'text-white';
  const subtitleColor = theme === 'light' ? 'text-gray-600' : 'text-gray-400';
  const barPosition = align === 'center' ? 'mx-auto' : '';

  return (
    <div className={`max-w-4xl ${alignClasses} ${className}`}>
      <motion.h2
        className={`font-display text-4xl md:text-5xl uppercase tracking-wide ${titleColor} mb-6`}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {title}
      </motion.h2>
      
      <motion.div
        className={`w-24 h-1 bg-primary ${barPosition} mb-6`}
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        style={{ originX: align === 'center' ? 0.5 : 0 }}
      />
      
      {subtitle && (
        <motion.p
          className={`text-lg md:text-xl ${subtitleColor} leading-relaxed`}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}

