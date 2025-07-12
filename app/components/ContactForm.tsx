'use client';

import { useState } from 'react';
import { toast } from 'sonner';
import { useRef } from 'react';

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
      console.log('Response status:', response.status, 'OK:', response.ok);
      if (!response.ok) {
        throw new Error('Fejl ved afsendelse');
      }
      console.log('Showing success toast');
      toast.success('Besked sendt succesfuldt!');
      console.log('Resetting form');
      formRef.current?.reset();
    } catch (error) {
      console.log('Caught error:', error);
      toast.error('Fejl ved afsendelse af besked. Prøv igen.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-gray-50 p-8 rounded-lg">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        {formData.title}
      </h2>
      <form onSubmit={handleSubmit} ref={formRef} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="fornavn" className="block text-sm font-medium text-gray-700 mb-2">
              Fornavn *
            </label>
            <input
              type="text"
              id="fornavn"
              name="fornavn"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label htmlFor="efternavn" className="block text-sm font-medium text-gray-700 mb-2">
              Efternavn *
            </label>
            <input
              type="text"
              id="efternavn"
              name="efternavn"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div>
          <label htmlFor="telefon" className="block text-sm font-medium text-gray-700 mb-2">
            Telefon
          </label>
          <input
            type="tel"
            id="telefon"
            name="telefon"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div>
          <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
            Type service
          </label>
          <select
            id="service"
            name="service"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            {formData.serviceOptions.map((option, index) => (
              <option key={index} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="besked" className="block text-sm font-medium text-gray-700 mb-2">
            Besked *
          </label>
          <textarea
            id="besked"
            name="besked"
            rows={5}
            required
            placeholder="Beskriv dit projekt eller dine behov..."
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          ></textarea>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors disabled:opacity-50"
        >
          {isSubmitting ? 'Sender...' : formData.submitButtonText}
        </button>

        <p className="text-sm text-gray-500 text-center">
          {formData.privacyNotice}
        </p>
      </form>
    </div>
  );
} 