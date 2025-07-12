'use client'

import { useState } from 'react'
import { ServiceShowcase } from './ServiceShowcase'
import { services, type ServiceShowcaseData } from '@/app/data/services'

export function ServiceShowcaseTabs() {
  const [activeService, setActiveService] = useState<ServiceShowcaseData>(services[0])

  return (
    <div className="py-20 bg-gray-50" id="services-showcase">
        <div className="flex justify-center mb-12 border-b">
          {services.map((service) => (
            <button
              key={service.slug.current}
              onClick={() => setActiveService(service)}
              className={`px-8 py-3 text-xl font-semibold border-b-4 transition-all duration-300 ease-in-out transform hover:-translate-y-1 ${
                activeService.slug.current === service.slug.current
                  ? 'border-blue-600 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-800'
              }`}
            >
              {service.title}
            </button>
          ))}
        </div>
      {activeService && <ServiceShowcase showcase={activeService} />}
    </div>
  )
} 