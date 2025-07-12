import type { Metadata } from "next";
import { contactPageData } from '@/app/data/staticContent';

export const metadata: Metadata = {
  title: "Kontakt - MT Rabat Vejservice",
  description: "Kontakt MT Rabat for professionel vejservice i Danmark. Vi servicerer København, Nordsjælland, Østsjælland og øvrige Sjælland. Ring for et uforpligtende tilbud.",
  keywords: [
    "kontakt vejservice",
    "MT Rabat kontakt",
    "vejservice København",
    "vejservice Sjælland",
    "rabatfræsning tilbud",
    "Marcel Tielemans kontakt",
    "vejservice Danmark kontakt"
  ],
  openGraph: {
    title: "Kontakt MT Rabat - Professionel Vejservice",
    description: "Har du brug for professionel vejservice? Kontakt MT Rabat i dag. Vi servicerer hele Sjælland med moderne udstyr og mange års erfaring.",
    url: "https://mtrabat.dk/kontakt",
    type: "website",
  },
  alternates: {
    canonical: "https://mtrabat.dk/kontakt",
  },
};

import ContactForm from '@/app/components/ContactForm';

export default function KontaktPage() {
  const data = contactPageData;

  return (
    <main className="py-20">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              {data.title}
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {data.description}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-6">
                  Kontaktoplysninger
                </h2>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-1">Telefon</h3>
                      <p className="text-gray-600">{data.contactInfo.phone}</p>
                      <p className="text-sm text-gray-500">{data.contactInfo.phoneHours}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-1">Email</h3>
                      <p className="text-gray-600">{data.contactInfo.email}</p>
                      <p className="text-sm text-gray-500">{data.contactInfo.emailResponse}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-1">Adresse</h3>
                      <div className="text-gray-600 whitespace-pre-line">
                        {data.contactInfo.address}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-1">Akut Service</h3>
                      <p className="text-gray-600">{data.contactInfo.emergencyPhone}</p>
                      <p className="text-sm text-gray-500">{data.contactInfo.emergencyHours}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Service Areas */}
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  {data.serviceAreas.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {data.serviceAreas.description}
                </p>
                <ul className="text-gray-600 space-y-2">
                  {data.serviceAreas.areas.map((area, index) => (
                    <li key={index}>• {area}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div className="bg-gray-50 p-8 rounded-lg">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">
                  {data.contactForm.title}
                </h2>
                
                <ContactForm formData={data.contactForm} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}