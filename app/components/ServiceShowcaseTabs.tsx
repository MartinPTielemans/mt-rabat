'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ServiceShowcase } from './ServiceShowcase';
import { services, type ServiceShowcaseData } from '@/app/data/services';

export function ServiceShowcaseTabs() {
  const [activeService, setActiveService] = useState<ServiceShowcaseData>(services[0]);

  return (
    <div className="py-20 bg-gray-50 relative overflow-hidden" id="services-showcase">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-diagonal-stripes pointer-events-none" />
      
      <div className="container relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-4xl md:text-5xl text-charcoal uppercase tracking-wide mb-4">
            Vores Arbejde
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-4" />
          <p className="text-gray-600 max-w-2xl mx-auto">
            Se eksempler på vores arbejde med før- og efter-billeder
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {services.map((service, index) => (
            <motion.button
              key={service.slug.current}
              onClick={() => setActiveService(service)}
              className={`relative px-6 py-3 font-display text-lg uppercase tracking-wider transition-all duration-300 ${
                activeService.slug.current === service.slug.current
                  ? 'text-white'
                  : 'text-gray-600 hover:text-charcoal'
              }`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Active background */}
              {activeService.slug.current === service.slug.current && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-primary"
                  style={{ clipPath: 'polygon(0 0, 100% 0, 95% 100%, 5% 100%)' }}
                  transition={{ type: 'spring', duration: 0.5 }}
                />
              )}
              
              {/* Tab text */}
              <span className="relative z-10">{service.title}</span>
              
              {/* Inactive underline indicator */}
              {activeService.slug.current !== service.slug.current && (
                <span className="absolute bottom-0 left-6 right-6 h-0.5 bg-gray-300" />
              )}
            </motion.button>
          ))}
        </div>

        {/* Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeService.slug.current}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {activeService && <ServiceShowcase showcase={activeService} />}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
