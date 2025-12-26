import type { Metadata } from "next";
import { IconComponent } from "@/app/components/IconComponent";
import { aboutPageData } from "@/app/data/staticContent";
import { FadeInUp, StaggerContainer, StaggerItem } from "@/app/components/motion";
import { SectionHeader, FeatureCard } from "@/app/components/ui";

export const metadata: Metadata = {
  title: "Om Os - MT Rabat Vejservice Historie og Værdier",
  description: "Lær om MT Rabat og Marcel Tielemans. Vi leverer kvalitets vejservice med mange års erfaring, moderne udstyr og fokus på kvalitet, erfaring og tillid.",
  keywords: [
    "om MT Rabat",
    "Marcel Tielemans",
    "vejservice historie",
    "vejservice erfaring",
    "kvalitets vejservice",
    "dansk vejservice virksomhed",
    "vejservice værdier"
  ],
  openGraph: {
    title: "Om MT Rabat - Erfaren Vejservice Virksomhed",
    description: "Marcel Tielemans og MT Rabat leverer professionel vejservice med fokus på kvalitet, erfaring og tillid. Mange års erfaring i dansk vejservice.",
    url: "https://mtrabat.dk/om-os",
    type: "website",
  },
  alternates: {
    canonical: "https://mtrabat.dk/om-os",
  },
};

export default function OmOsPage() {
  const data = aboutPageData;

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

      {/* Company Description */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <FadeInUp className="bg-gray-50 p-10 border-l-4 border-l-primary shadow-industrial">
              <p className="text-lg text-gray-600 leading-relaxed">
                {data.companyDescription}
              </p>
            </FadeInUp>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-diagonal-stripes pointer-events-none" />
        
        <div className="container relative z-10">
          <div className="max-w-6xl mx-auto">
            <SectionHeader
              title="Vores Værdier"
              className="mb-16"
            />
            
            <StaggerContainer className="grid md:grid-cols-3 gap-12">
              {data.values.map((value, index) => (
                <StaggerItem key={index}>
                  <FeatureCard
                    icon={<IconComponent name={value.icon} className="w-10 h-10" />}
                    title={value.title}
                    description={value.description}
                  />
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-24 bg-charcoal text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-overlay pointer-events-none" />
        
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto">
            <SectionHeader
              title="Kontakt Information"
              theme="dark"
              className="mb-12"
            />
            
            <FadeInUp>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-charcoal-light p-8 border-l-4 border-l-primary">
                  <div className="flex items-center gap-3 mb-4">
                    <div 
                      className="w-12 h-12 bg-primary flex items-center justify-center"
                      style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}
                    >
                      <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <h3 className="font-display text-lg uppercase tracking-wide">Telefon</h3>
                  </div>
                  <a href="tel:+4540486480" className="text-primary font-mono text-lg hover:text-primary-light transition-colors">
                    {data.contactInfo.phone}
                  </a>
                </div>
                
                <div className="bg-charcoal-light p-8 border-l-4 border-l-primary">
                  <div className="flex items-center gap-3 mb-4">
                    <div 
                      className="w-12 h-12 bg-primary flex items-center justify-center"
                      style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}
                    >
                      <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <h3 className="font-display text-lg uppercase tracking-wide">Email</h3>
                  </div>
                  <a href="mailto:info@mtrabat.dk" className="text-primary hover:text-primary-light transition-colors">
                    {data.contactInfo.email}
                  </a>
                </div>
                
                <div className="bg-charcoal-light p-8 border-l-4 border-l-primary">
                  <div className="flex items-center gap-3 mb-4">
                    <div 
                      className="w-12 h-12 bg-primary flex items-center justify-center"
                      style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}
                    >
                      <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <h3 className="font-display text-lg uppercase tracking-wide">Adresse</h3>
                  </div>
                  <div className="text-gray-400 whitespace-pre-line">
                    {data.contactInfo.address}
                  </div>
                </div>
              </div>
            </FadeInUp>
          </div>
        </div>
      </section>
    </main>
  );
}
