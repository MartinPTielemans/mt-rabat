'use client';

import { motion, type HTMLMotionProps, type Variants } from 'framer-motion';
import { type ReactNode } from 'react';

// Animation variants for reuse across components
export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' }
  }
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { duration: 0.5, ease: 'easeOut' }
  }
};

export const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.5, ease: 'easeOut' }
  }
};

export const slideInRight: Variants = {
  hidden: { opacity: 0, x: 30 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.5, ease: 'easeOut' }
  }
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.4, ease: 'easeOut' }
  }
};

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  }
};

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: 'easeOut' }
  }
};

// Word-by-word animation for headlines
export const wordReveal: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: [0.215, 0.61, 0.355, 1]
    }
  })
};

interface MotionDivProps extends HTMLMotionProps<'div'> {
  children: ReactNode;
  delay?: number;
}

// Fade-in-up section wrapper
export function FadeInUp({ children, delay = 0, ...props }: MotionDivProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { 
          opacity: 1, 
          y: 0,
          transition: { duration: 0.6, delay, ease: 'easeOut' }
        }
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

// Scale-in wrapper
export function ScaleIn({ children, delay = 0, ...props }: MotionDivProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      variants={{
        hidden: { opacity: 0, scale: 0.9 },
        visible: { 
          opacity: 1, 
          scale: 1,
          transition: { duration: 0.4, delay, ease: 'easeOut' }
        }
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

// Stagger container for lists/grids
interface StaggerContainerProps extends HTMLMotionProps<'div'> {
  children: ReactNode;
  staggerDelay?: number;
}

export function StaggerContainer({ children, staggerDelay = 0.1, ...props }: StaggerContainerProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: staggerDelay,
            delayChildren: 0.1
          }
        }
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

// Stagger item for use inside StaggerContainer
export function StaggerItem({ children, ...props }: MotionDivProps) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.4, ease: 'easeOut' }
        }
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

// Animated headline with word reveal
interface AnimatedHeadlineProps {
  text: string;
  className?: string;
  as?: 'h1' | 'h2' | 'h3';
}

export function AnimatedHeadline({ text, className = '', as: Tag = 'h1' }: AnimatedHeadlineProps) {
  const words = text.split(' ');
  
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className={className}
    >
      <Tag className="overflow-hidden">
        {words.map((word, i) => (
          <motion.span
            key={i}
            custom={i}
            variants={wordReveal}
            className="inline-block mr-[0.25em]"
          >
            {word}
          </motion.span>
        ))}
      </Tag>
    </motion.div>
  );
}

// Hover lift effect for cards
interface HoverLiftProps extends HTMLMotionProps<'div'> {
  children: ReactNode;
  liftAmount?: number;
}

export function HoverLift({ children, liftAmount = 8, ...props }: HoverLiftProps) {
  return (
    <motion.div
      whileHover={{ 
        y: -liftAmount,
        transition: { duration: 0.3, ease: 'easeOut' }
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

// Parallax wrapper
interface ParallaxProps {
  children: ReactNode;
  speed?: number;
  className?: string;
}

export function Parallax({ children, speed = 0.5, className = '' }: ParallaxProps) {
  return (
    <motion.div
      className={className}
      style={{ y: 0 }}
      initial={{ y: 0 }}
      whileInView={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 100 }}
    >
      {children}
    </motion.div>
  );
}

