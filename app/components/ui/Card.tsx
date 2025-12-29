'use client';

import { type ReactNode } from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: ReactNode;
  variant?: 'default' | 'dark' | 'numbered';
  number?: number;
  className?: string;
  hover?: boolean;
}

export function Card({
  children,
  variant = 'default',
  number,
  className = '',
  hover = true,
}: CardProps) {
  const baseStyles = 'relative overflow-hidden';
  
  const variantStyles = {
    default: 'bg-white border-l-4 border-l-primary',
    dark: 'bg-charcoal text-white border-l-4 border-l-primary',
    numbered: 'bg-white border-l-4 border-l-primary',
  };

  return (
    <motion.div
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5 }}
      whileHover={hover ? { y: -8, transition: { duration: 0.3 } } : undefined}
    >
      {/* Number overlay for numbered variant */}
      {variant === 'numbered' && number !== undefined && (
        <div className="absolute top-2 right-4 font-display text-7xl text-gray-100 select-none pointer-events-none leading-none">
          {String(number).padStart(2, '0')}
        </div>
      )}
      
      {/* Diagonal pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `repeating-linear-gradient(
            -45deg,
            transparent,
            transparent 10px,
            currentColor 10px,
            currentColor 11px
          )`
        }}
      />
      
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}

// Service Card specifically styled for services page
interface ServiceCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  features: string[];
  index: number;
}

export function ServiceCard({ title, description, icon, features, index }: ServiceCardProps) {
  return (
    <Card variant="numbered" number={index + 1} className="p-8 shadow-industrial hover:shadow-industrial-hover transition-shadow">
      {/* Icon */}
      <div className="w-16 h-16 bg-primary flex items-center justify-center mb-6" style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}>
        <span className="text-white">{icon}</span>
      </div>
      
      {/* Title */}
      <h3 className="font-display text-2xl uppercase tracking-wide text-charcoal mb-4">
        {title}
      </h3>
      
      {/* Description */}
      <p className="text-gray-600 mb-6 leading-relaxed">
        {description}
      </p>
      
      {/* Features */}
      <ul className="space-y-3">
        {features.map((feature, i) => (
          <motion.li
            key={i}
            className="flex items-start text-gray-600"
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <svg className="w-5 h-5 text-primary mt-0.5 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span>{feature}</span>
          </motion.li>
        ))}
      </ul>
    </Card>
  );
}

// Stats Card
interface StatsCardProps {
  number: string;
  title: string;
  description: string;
}

export function StatsCard({ number, title, description }: StatsCardProps) {
  return (
    <motion.div
      className="bg-white p-8 border-l-4 border-l-primary shadow-industrial text-center"
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
    >
      <div className="font-mono text-4xl md:text-5xl font-bold text-primary mb-4">
        {number}
      </div>
      <h3 className="font-display text-xl uppercase tracking-wide text-charcoal mb-2">
        {title}
      </h3>
      <p className="text-gray-600 text-sm">
        {description}
      </p>
    </motion.div>
  );
}

// Feature Card with hexagonal icon
interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <motion.div
      className="text-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {/* Hexagonal icon container */}
      <div 
        className="w-20 h-20 bg-primary flex items-center justify-center mx-auto mb-6"
        style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}
      >
        <span className="text-white">{icon}</span>
      </div>
      
      <h3 className="font-display text-xl uppercase tracking-wide text-charcoal mb-3">
        {title}
      </h3>
      
      <p className="text-gray-600 leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
}

