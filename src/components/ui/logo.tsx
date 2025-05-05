"use client";

import { motion } from "motion/react";
import Link from "next/link";

export function Logo() {
  return (
    <Link href="/" className="block">
      <motion.div
        className="flex items-center space-x-2"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <motion.div
          className="flex justify-center items-center w-10 h-10 bg-blue-600 rounded-full"
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{
            duration: 3,
            ease: "linear",
            repeat: Infinity,
            repeatType: "loop",
          }}
        >
          <motion.div
            className="w-6 h-6 bg-white rounded-full"
            initial={{ scale: 0.8 }}
            animate={{ scale: [0.8, 1, 0.8] }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <div className="font-bold text-xl text-gray-800">MT Rabat</div>
          <div className="text-xs text-gray-500">Marcel Tielemans</div>
        </motion.div>
      </motion.div>
    </Link>
  );
}
