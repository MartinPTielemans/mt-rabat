'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { href: '/', label: 'Hjem' },
  { href: '/om-os', label: 'Om os' },
  { href: '/ydelser', label: 'Ydelser' },
  { href: '/kompetencer', label: 'Kompetencer' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className={`fixed z-50 inset-x-0 top-0 transition-all duration-300 ${
          isScrolled
            ? 'h-16 bg-charcoal/98 shadow-lg backdrop-blur-lg'
            : 'h-20 bg-charcoal/95 backdrop-blur-md'
        }`}
      >
        <div className="container h-full px-4 sm:px-6">
          <div className="flex items-center justify-between h-full">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <motion.div
                whileHover={{ rotate: [0, -10, 10, 0] }}
                transition={{ duration: 0.5 }}
              >
                <Image
                  src="/logo/Mt Rabat.png"
                  alt="MT Rabat Logo"
                  width={48}
                  height={48}
                  className={`transition-all duration-300 ${
                    isScrolled ? 'w-10 h-10' : 'w-12 h-12'
                  }`}
                  priority
                />
              </motion.div>
              <div className="flex flex-col">
                <span className={`font-display uppercase tracking-wider text-white transition-all duration-300 ${
                  isScrolled ? 'text-lg' : 'text-xl sm:text-2xl'
                }`}>
                  MT Rabatservice
                </span>
                <span className="hidden sm:block text-xs text-gray-400 tracking-wide">
                  Marcel Tielemans
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:block">
              <ul className="flex items-center gap-1">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="relative px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors group"
                    >
                      {link.label}
                      <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                    </Link>
                  </li>
                ))}
                <li className="ml-4">
                  <Link
                    href="/kontakt"
                    className="relative overflow-hidden bg-primary hover:bg-primary-dark text-white px-6 py-2.5 font-display text-sm uppercase tracking-wider transition-all duration-300 group"
                    style={{ clipPath: 'polygon(0 0, 100% 0, 92% 100%, 0% 100%)' }}
                  >
                    <span className="relative z-10">Kontakt</span>
                    <span className="absolute inset-0 bg-accent opacity-0 group-hover:opacity-20 transition-opacity" />
                  </Link>
                </li>
              </ul>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden relative w-10 h-10 flex items-center justify-center text-white"
              aria-label={isMobileMenuOpen ? 'Luk menu' : 'Åbn menu'}
            >
              <div className="relative w-6 h-5">
                <motion.span
                  animate={{
                    rotate: isMobileMenuOpen ? 45 : 0,
                    y: isMobileMenuOpen ? 8 : 0,
                  }}
                  className="absolute top-0 left-0 w-full h-0.5 bg-white origin-center"
                />
                <motion.span
                  animate={{
                    opacity: isMobileMenuOpen ? 0 : 1,
                    x: isMobileMenuOpen ? -20 : 0,
                  }}
                  className="absolute top-2 left-0 w-full h-0.5 bg-white"
                />
                <motion.span
                  animate={{
                    rotate: isMobileMenuOpen ? -45 : 0,
                    y: isMobileMenuOpen ? -8 : 0,
                  }}
                  className="absolute top-4 left-0 w-full h-0.5 bg-white origin-center"
                />
              </div>
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden"
            />

            {/* Menu Panel */}
            <motion.nav
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="fixed top-0 right-0 bottom-0 z-50 w-80 max-w-[85vw] bg-charcoal-dark md:hidden"
            >
              <div className="flex flex-col h-full pt-20 pb-8 px-6">
                {/* Close button */}
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="absolute top-5 right-5 w-10 h-10 flex items-center justify-center text-gray-400 hover:text-white"
                  aria-label="Luk menu"
                >
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>

                {/* Navigation Links */}
                <ul className="flex-1 space-y-2">
                  {navLinks.map((link, index) => (
                    <motion.li
                      key={link.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block py-3 px-4 text-xl font-display uppercase tracking-wider text-gray-300 hover:text-white hover:bg-charcoal-light transition-colors border-l-2 border-transparent hover:border-primary"
                      >
                        {link.label}
                      </Link>
                    </motion.li>
                  ))}
                </ul>

                {/* CTA Button */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <Link
                    href="/kontakt"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block w-full bg-primary hover:bg-primary-dark text-white text-center py-4 font-display text-lg uppercase tracking-wider transition-colors"
                  >
                    Kontakt Os
                  </Link>
                </motion.div>

                {/* Contact Info */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="mt-8 pt-6 border-t border-gray-800"
                >
                  <p className="text-sm text-gray-500 mb-2">Ring til os</p>
                  <a href="tel:+4540486480" className="text-lg text-primary font-mono">
                    +45 40 48 64 80
                  </a>
                </motion.div>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
