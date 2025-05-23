"use client";

import { motion } from "motion/react";
import { Logo } from "@/components/ui/logo";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Hjem" },
  { href: "/galleri", label: "Galleri" },
  { href: "/om-os", label: "Om os" },
  { href: "/ydelser", label: "Ydelser" },
  { href: "/kompetencer", label: "Kompetencer" },
  { href: "/projekter", label: "Projekter" },
  { href: "/kontakt", label: "Kontakt" },
];

export function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <motion.header
      className="bg-white/80 backdrop-blur-md shadow-sm py-4 sticky top-0 z-40"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        <Logo />

        <motion.nav className="hidden md:flex space-x-8">
          {navLinks.map((link, i) => (
            <motion.div
              key={link.href}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i, duration: 0.5 }}
              whileHover={{ scale: pathname !== link.href ? 1.05 : 1 }}
              whileTap={{ scale: pathname !== link.href ? 0.95 : 1 }}
            >
              {pathname === link.href ? (
                <span
                  className="relative text-blue-600 font-medium cursor-default"
                  aria-current="page"
                >
                  {link.label}
                  <motion.div
                    layoutId="underline"
                    className="absolute left-0 top-full h-0.5 w-full bg-blue-600"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </span>
              ) : (
                <Link
                  href={link.href}
                  className="relative text-gray-600 hover:text-blue-600 transition-colors"
                >
                  {link.label}
                </Link>
              )}
            </motion.div>
          ))}
        </motion.nav>

        {/* Mobile menu button */}
        <motion.button
          onClick={toggleMenu}
          className="md:hidden p-2"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          aria-label={isMenuOpen ? "Luk menu" : "Åbn menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>
      </div>

      {/* Mobile navigation */}
      {isMenuOpen && (
        <motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.2 }}
          className="md:hidden absolute left-0 right-0 bg-white shadow-md mt-4"
        >
          <div className="flex flex-col py-4">
            {navLinks.map((link) =>
              pathname === link.href ? (
                <span
                  key={link.href}
                  className="px-6 py-3 text-blue-600 font-medium bg-blue-50 cursor-default"
                  aria-current="page"
                >
                  {link.label}
                </span>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-6 py-3 hover:bg-gray-50"
                  onClick={() => {
                    setIsMenuOpen(false);
                  }}
                >
                  {link.label}
                </Link>
              )
            )}
          </div>
        </motion.nav>
      )}
    </motion.header>
  );
}
