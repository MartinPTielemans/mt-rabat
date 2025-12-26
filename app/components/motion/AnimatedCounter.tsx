'use client';

import { motion, useSpring, useTransform, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';

interface AnimatedCounterProps {
  value: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  className?: string;
}

export function AnimatedCounter({ 
  value, 
  suffix = '', 
  prefix = '',
  duration = 2,
  className = '' 
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  
  const spring = useSpring(0, { 
    duration: duration * 1000,
    bounce: 0
  });
  
  const display = useTransform(spring, (current) => {
    return Math.round(current);
  });

  useEffect(() => {
    if (isInView) {
      spring.set(value);
    }
  }, [isInView, spring, value]);

  return (
    <span ref={ref} className={`font-mono ${className}`}>
      {prefix}
      <motion.span>{display}</motion.span>
      {suffix}
    </span>
  );
}

// Animated counter that parses strings like "20+" or "1000+"
interface ParsedCounterProps {
  text: string;
  duration?: number;
  className?: string;
}

export function ParsedCounter({ text, duration = 2, className = '' }: ParsedCounterProps) {
  // Extract number and suffix from text like "20+" or "1000+ projekter"
  const match = text.match(/^(\d+)(.*)$/);
  
  if (!match) {
    return <span className={className}>{text}</span>;
  }

  const [, numberStr, suffix] = match;
  const value = parseInt(numberStr, 10);

  return (
    <AnimatedCounter 
      value={value} 
      suffix={suffix} 
      duration={duration}
      className={className}
    />
  );
}

