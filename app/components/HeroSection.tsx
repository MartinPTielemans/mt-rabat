'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';

const titleWords = ['Rabatbiler', 'sikrer', 'vejenes', 'holdbarhed'];

export function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <div ref={ref} className="relative w-screen ml-[calc(-50vw+50%)] overflow-hidden">
      {/* Background with parallax */}
      <motion.div
        style={{ y, scale }}
        className="absolute inset-0 w-full h-full"
      >
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center"
          style={{ backgroundImage: 'url("/images/Kantfyld ramper E 45.jpg")' }}
        />
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/70 via-charcoal/50 to-charcoal/80" />
        {/* Noise texture */}
        <div className="absolute inset-0 opacity-20 mix-blend-overlay noise-overlay" />
      </motion.div>

      {/* Diagonal accent line */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-32 bg-gray-50"
        style={{ clipPath: 'polygon(0 100%, 100% 100%, 100% 0)' }}
      />

      {/* Content */}
      <motion.div 
        style={{ opacity }}
        className="relative min-h-[90vh] flex items-center"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="max-w-5xl">
            {/* Animated headline */}
            <motion.h1 
              className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-white uppercase tracking-tight leading-none mb-8"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.1, delayChildren: 0.3 }
                }
              }}
            >
              {titleWords.map((word, i) => (
                <motion.span
                  key={i}
                  className="inline-block mr-[0.25em] overflow-hidden"
                  variants={{
                    hidden: { y: 100, opacity: 0 },
                    visible: {
                      y: 0,
                      opacity: 1,
                      transition: {
                        duration: 0.6,
                        ease: [0.215, 0.61, 0.355, 1]
                      }
                    }
                  }}
                >
                  {word}
                </motion.span>
              ))}
            </motion.h1>

            {/* Accent bar */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.8, ease: 'easeOut' }}
              className="w-32 h-1.5 bg-primary mb-8 origin-left"
            />

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl leading-relaxed"
            >
              Marcel Tielemans&apos; rabatbiler vedligeholder rabatterne og sikrer, at afvandingen fra vejen kan løbe væk, så vandet ikke bliver liggende på vejen. Alt sker i én arbejdsgang.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                href="/kontakt"
                className="group relative inline-flex items-center justify-center bg-primary hover:bg-primary-dark text-white px-10 py-5 font-display text-xl uppercase tracking-wider transition-all duration-300 overflow-hidden"
                style={{ clipPath: 'polygon(0 0, 100% 0, 95% 100%, 0% 100%)' }}
              >
                <span className="relative z-10 flex items-center">
                  Kontakt Marcel Tielemans
                  <svg 
                    className="w-5 h-5 ml-3 transform group-hover:translate-x-2 transition-transform" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
                <span className="absolute inset-0 bg-accent opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
              </Link>

              <Link
                href="#mere-info"
                className="group relative inline-flex items-center justify-center border-2 border-white/30 hover:border-white text-white px-10 py-5 font-display text-xl uppercase tracking-wider transition-all duration-300 backdrop-blur-sm overflow-hidden"
                style={{ clipPath: 'polygon(5% 0, 100% 0, 100% 100%, 0% 100%)' }}
              >
                <span className="relative z-10">Læs mere</span>
                <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-32 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-xs text-gray-400 uppercase tracking-widest font-mono">Scroll</span>
            <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Side accent elements */}
      <div className="absolute top-1/4 left-0 w-1 h-32 bg-primary hidden lg:block" />
      <div className="absolute top-1/3 left-4 w-16 h-0.5 bg-primary/50 hidden lg:block" />
      <div className="absolute bottom-1/3 right-0 w-1 h-24 bg-accent hidden lg:block" />
    </div>
  );
}
