'use client';

import { useState, useRef } from 'react';
import { toast } from 'sonner';
import { motion } from 'framer-motion';

type ContactFormProps = {
  formData: {
    title: string;
    serviceOptions: { label: string; value: string }[];
    submitButtonText: string;
    privacyNotice: string;
  };
};

export default function ContactForm({ formData }: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formDataObj = new FormData(e.currentTarget);
    const body = {
      fornavn: formDataObj.get('fornavn'),
      efternavn: formDataObj.get('efternavn'),
      email: formDataObj.get('email'),
      telefon: formDataObj.get('telefon'),
      service: formDataObj.get('service'),
      besked: formDataObj.get('besked'),
    };

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });
      if (!response.ok) {
        throw new Error('Fejl ved afsendelse');
      }
      toast.success('Besked sendt succesfuldt!', {
        style: {
          background: '#1b1d27',
          color: '#fff',
          border: '1px solid #E57322',
        },
      });
      formRef.current?.reset();
    } catch {
      toast.error('Fejl ved afsendelse af besked. Prøv igen.', {
        style: {
          background: '#1b1d27',
          color: '#fff',
          border: '1px solid #ef4434',
        },
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClasses = `
    w-full px-4 py-3 
    bg-charcoal-light border-2 border-gray-700 
    text-white placeholder-gray-500
    focus:border-primary focus:outline-none
    transition-colors duration-200
  `;

  const labelClasses = `
    block text-sm font-medium text-gray-400 mb-2 uppercase tracking-wider
  `;

  return (
    <form onSubmit={handleSubmit} ref={formRef} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="fornavn" className={labelClasses}>
            Fornavn <span className="text-primary">*</span>
          </label>
          <input
            type="text"
            id="fornavn"
            name="fornavn"
            required
            onFocus={() => setFocusedField('fornavn')}
            onBlur={() => setFocusedField(null)}
            className={inputClasses}
          />
        </div>
        <div>
          <label htmlFor="efternavn" className={labelClasses}>
            Efternavn <span className="text-primary">*</span>
          </label>
          <input
            type="text"
            id="efternavn"
            name="efternavn"
            required
            onFocus={() => setFocusedField('efternavn')}
            onBlur={() => setFocusedField(null)}
            className={inputClasses}
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className={labelClasses}>
          Email <span className="text-primary">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          onFocus={() => setFocusedField('email')}
          onBlur={() => setFocusedField(null)}
          className={inputClasses}
        />
      </div>

      <div>
        <label htmlFor="telefon" className={labelClasses}>
          Telefon
        </label>
        <input
          type="tel"
          id="telefon"
          name="telefon"
          onFocus={() => setFocusedField('telefon')}
          onBlur={() => setFocusedField(null)}
          className={inputClasses}
        />
      </div>

      <div>
        <label htmlFor="service" className={labelClasses}>
          Type service
        </label>
        <select
          id="service"
          name="service"
          onFocus={() => setFocusedField('service')}
          onBlur={() => setFocusedField(null)}
          className={`${inputClasses} cursor-pointer`}
        >
          {formData.serviceOptions.map((option, index) => (
            <option key={index} value={option.value} className="bg-charcoal-dark">
              {option.label}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="besked" className={labelClasses}>
          Besked <span className="text-primary">*</span>
        </label>
        <textarea
          id="besked"
          name="besked"
          rows={5}
          required
          placeholder="Beskriv dit projekt eller dine behov..."
          onFocus={() => setFocusedField('besked')}
          onBlur={() => setFocusedField(null)}
          className={`${inputClasses} resize-none`}
        ></textarea>
      </div>

      <motion.button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-primary hover:bg-primary-dark text-white font-display text-lg uppercase tracking-wider py-4 px-6 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden group"
        style={{ clipPath: 'polygon(0 0, 100% 0, 97% 100%, 0% 100%)' }}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <span className="relative z-10 flex items-center justify-center">
          {isSubmitting ? (
            <>
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Sender...
            </>
          ) : (
            <>
              {formData.submitButtonText}
              <svg 
                className="w-5 h-5 ml-3 transform group-hover:translate-x-2 transition-transform" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </>
          )}
        </span>
        <span className="absolute inset-0 bg-accent opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
      </motion.button>

      <p className="text-sm text-gray-500 text-center">
        {formData.privacyNotice}
      </p>
    </form>
  );
}
