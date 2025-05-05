"use client";

import { motion } from "motion/react";
import { Logo } from "./logo";
import Link from "next/link";

export function Header() {
  return (
    <motion.header
      className="bg-white shadow-sm py-4 sticky top-0 z-40"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        <Logo />

        <motion.nav className="hidden md:flex space-x-8">
          {["Om os", "Services", "Projekter", "Kontakt"].map((item, i) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href={`/${item.toLowerCase().replace(/\s+/g, "-")}`}
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                {item}
              </Link>
            </motion.div>
          ))}
        </motion.nav>

        <motion.button
          className="md:hidden"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </motion.button>
      </div>
    </motion.header>
  );
}
