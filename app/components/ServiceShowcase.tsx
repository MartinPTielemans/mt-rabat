'use client';

import { motion } from 'framer-motion';
import type { ServiceShowcaseData } from './ServiceShowcaseTabs';
import { BeforeAfterSlider } from './BeforeAfterSlider';

export function ServiceShowcase({ showcase }: { showcase: ServiceShowcaseData }) {
  if (!showcase) {
    return null;
  }

  const { title, description, beforeImage, afterImage } = showcase;

  return (
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h2 className="font-display text-4xl md:text-5xl text-charcoal uppercase tracking-wide mb-6">
          {title}
        </h2>
        <div className="w-24 h-1 bg-primary mx-auto mb-6" />
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          {description}
        </p>
      </motion.div>

      <div className="max-w-4xl mx-auto">
        <BeforeAfterSlider
          beforeImage={beforeImage}
          afterImage={afterImage}
        />
      </div>
    </div>
  );
}
