import type { Metadata } from "next";
import { contactPageData } from '@/app/data/staticContent';
import ContactForm from '@/app/components/ContactForm';
import { FadeInUp, StaggerContainer, StaggerItem } from "@/app/components/motion";
import { SectionHeader } from "@/app/components/ui";

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

export default function KontaktPage() {
  const data = contactPageData;

  return (
    <main className="relative">
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-charcoal text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-overlay pointer-events-none" />
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <FadeInUp>
              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl uppercase tracking-wide mb-6">
                {data.title}
              </h1>
              <div className="w-24 h-1 bg-primary mx-auto mb-8" />
              <p className="text-xl text-gray-400 leading-relaxed max-w-3xl mx-auto">
                {data.description}
              </p>
            </FadeInUp>
          </div>
        </div>
        
        {/* Diagonal separator */}
        <div 
          className="absolute bottom-0 left-0 right-0 h-20 bg-white"
          style={{ clipPath: 'polygon(0 100%, 100% 100%, 100% 0)' }}
        />
      </section>

      {/* Contact Content */}
      <section className="py-24 bg-white relative">
        <div className="absolute inset-0 bg-diagonal-stripes pointer-events-none" />
        
        <div className="container relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Contact Information */}
              <div className="space-y-8">
                <FadeInUp>
                  <h2 className="font-display text-3xl uppercase tracking-wide text-charcoal mb-8">
                    Kontaktoplysninger
                  </h2>
                  
                  <StaggerContainer className="space-y-6">
                    <StaggerItem>
                      <div className="flex items-start gap-4 group">
                        <div 
                          className="w-14 h-14 bg-primary flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform"
                          style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}
                        >
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                          </svg>
                        </div>
                        <div>
                          <h3 className="font-display text-lg uppercase tracking-wide text-charcoal mb-1">Telefon</h3>
                          <a href="tel:+4540486480" className="text-primary font-mono text-lg hover:text-primary-dark transition-colors">
                            {data.contactInfo.phone}
                          </a>
                          <p className="text-sm text-gray-500 mt-1">{data.contactInfo.phoneHours}</p>
                        </div>
                      </div>
                    </StaggerItem>

                    <StaggerItem>
                      <div className="flex items-start gap-4 group">
                        <div 
                          className="w-14 h-14 bg-primary flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform"
                          style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}
                        >
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <div>
                          <h3 className="font-display text-lg uppercase tracking-wide text-charcoal mb-1">Email</h3>
                          <a href="mailto:info@mtrabat.dk" className="text-primary hover:text-primary-dark transition-colors">
                            {data.contactInfo.email}
                          </a>
                          <p className="text-sm text-gray-500 mt-1">{data.contactInfo.emailResponse}</p>
                        </div>
                      </div>
                    </StaggerItem>

                    <StaggerItem>
                      <div className="flex items-start gap-4 group">
                        <div 
                          className="w-14 h-14 bg-primary flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform"
                          style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}
                        >
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                        </div>
                        <div>
                          <h3 className="font-display text-lg uppercase tracking-wide text-charcoal mb-1">Adresse</h3>
                          <div className="text-gray-600 whitespace-pre-line">
                            {data.contactInfo.address}
                          </div>
                        </div>
                      </div>
                    </StaggerItem>

                    <StaggerItem>
                      <div className="flex items-start gap-4 group">
                        <div 
                          className="w-14 h-14 bg-accent flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform"
                          style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}
                        >
                          <svg className="w-6 h-6 text-charcoal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <div>
                          <h3 className="font-display text-lg uppercase tracking-wide text-charcoal mb-1">Akut Service</h3>
                          <a href="tel:+4540486480" className="text-accent-dark font-mono text-lg hover:text-accent transition-colors">
                            {data.contactInfo.emergencyPhone}
                          </a>
                          <p className="text-sm text-gray-500 mt-1">{data.contactInfo.emergencyHours}</p>
                        </div>
                      </div>
                    </StaggerItem>
                  </StaggerContainer>
                </FadeInUp>

                {/* Service Areas */}
                <FadeInUp delay={0.3}>
                  <div className="bg-gray-50 p-8 border-l-4 border-l-primary mt-8">
                    <h3 className="font-display text-xl uppercase tracking-wide text-charcoal mb-4">
                      {data.serviceAreas.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {data.serviceAreas.description}
                    </p>
                    <ul className="grid grid-cols-2 gap-2">
                      {data.serviceAreas.areas.map((area, index) => (
                        <li key={index} className="flex items-center text-gray-600">
                          <svg className="w-4 h-4 text-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {area}
                        </li>
                      ))}
                    </ul>
                  </div>
                </FadeInUp>
              </div>

              {/* Contact Form */}
              <FadeInUp delay={0.2}>
                <div className="bg-charcoal p-8 lg:p-10 relative overflow-hidden">
                  <div className="absolute inset-0 bg-grid-overlay pointer-events-none opacity-50" />
                  
                  <div className="relative z-10">
                    <h2 className="font-display text-2xl uppercase tracking-wide text-white mb-8">
                      {data.contactForm.title}
                    </h2>
                    
                    <ContactForm formData={data.contactForm} />
                  </div>
                </div>
              </FadeInUp>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
