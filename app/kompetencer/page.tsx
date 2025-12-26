import type { Metadata } from "next";
import { IconComponent } from "@/app/components/IconComponent";
import { FadeInUp, StaggerContainer, StaggerItem } from "@/app/components/motion";

export const metadata: Metadata = {
  title: "Kompetencer - Vejservice Ekspertise og Teknisk Udstyr",
  description: "MT Rabats kernekompetencer inden for vejservice, infrastruktur og projektledelse. 20+ års erfaring, moderne udstyr og specialiserede metoder til vejvedligeholdelse.",
  keywords: [
    "vejservice kompetencer",
    "teknisk ekspertise",
    "rabatbiler udstyr",
    "vejservice erfaring",
    "infrastruktur kompetencer",
    "BSM fræsning ekspertise",
    "vejservice statistik",
    "moderne vejservice udstyr"
  ],
  openGraph: {
    title: "Kompetencer - MT Rabats Vejservice Ekspertise",
    description: "Specialiserede kompetencer inden for vejservice med 20+ års erfaring, 1000+ projekter og moderne teknisk udstyr til alle vejservice opgaver.",
    url: "https://mtrabat.dk/kompetencer",
    type: "website",
  },
  alternates: {
    canonical: "https://mtrabat.dk/kompetencer",
  },
};



export default function KompetencerPage() {
  return (
    <main className="relative">
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-charcoal text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-overlay pointer-events-none" />
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <FadeInUp>
              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl uppercase tracking-wide mb-6">
                Kompetencer
              </h1>
              <div className="w-24 h-1 bg-primary mx-auto mb-8" />
              <p className="text-xl text-gray-400 leading-relaxed max-w-3xl mx-auto">
                Vores kernekompetencer og tekniske ekspertise sikrer professionelle løsninger på alle projekter.
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

      {/* Core Competencies */}
      <section className="py-24 bg-white relative">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="max-w-4xl text-center mx-auto mb-16">
              <FadeInUp>
                <h2 className="font-display text-4xl md:text-5xl uppercase tracking-wide text-charcoal mb-6">
                  Kernekompetencer
                </h2>
                <div className="w-24 h-1 bg-primary mx-auto mb-6" />
              </FadeInUp>
            </div>
            
            <StaggerContainer className="grid md:grid-cols-3 gap-12">
              <StaggerItem>
                <div className="text-center">
                  <div 
                    className="w-20 h-20 bg-primary flex items-center justify-center mx-auto mb-6"
                    style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}
                  >
                    <span className="text-white"><IconComponent name="flag" className="w-10 h-10" /></span>
                  </div>
                  <h3 className="font-display text-xl uppercase tracking-wide text-charcoal mb-3">
                    Vejservice
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Specialiseret vejvedligeholdelse og rabatfræsning med moderne udstyr.
                  </p>
                </div>
              </StaggerItem>
              
              <StaggerItem>
                <div className="text-center">
                  <div 
                    className="w-20 h-20 bg-primary flex items-center justify-center mx-auto mb-6"
                    style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}
                  >
                    <span className="text-white"><IconComponent name="building" className="w-10 h-10" /></span>
                  </div>
                  <h3 className="font-display text-xl uppercase tracking-wide text-charcoal mb-3">
                    Infrastruktur
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Omfattende infrastrukturprojekter fra planlægning til udførelse.
                  </p>
                </div>
              </StaggerItem>
              
              <StaggerItem>
                <div className="text-center">
                  <div 
                    className="w-20 h-20 bg-primary flex items-center justify-center mx-auto mb-6"
                    style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}
                  >
                    <span className="text-white"><IconComponent name="settings" className="w-10 h-10" /></span>
                  </div>
                  <h3 className="font-display text-xl uppercase tracking-wide text-charcoal mb-3">
                    Projektledelse
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Professionel projektledelse sikrer leverance til tiden og inden for budget.
                  </p>
                </div>
              </StaggerItem>
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* Technical Expertise */}
      <section className="py-24 bg-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-diagonal-stripes pointer-events-none" />
        
        <div className="container relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="max-w-4xl text-center mx-auto mb-16">
              <FadeInUp>
                <h2 className="font-display text-4xl md:text-5xl uppercase tracking-wide text-charcoal mb-6">
                  Teknisk Ekspertise
                </h2>
                <div className="w-24 h-1 bg-primary mx-auto mb-6" />
              </FadeInUp>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <FadeInUp className="bg-white p-8 border-l-4 border-l-primary shadow-industrial">
                <h3 className="font-display text-2xl uppercase tracking-wide text-charcoal mb-6">
                  Udstyr
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start text-gray-600">
                    <svg className="w-5 h-5 text-primary mt-1 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Moderne rabatbiler</span>
                  </li>
                  <li className="flex items-start text-gray-600">
                    <svg className="w-5 h-5 text-primary mt-1 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Specialfræsere</span>
                  </li>
                  <li className="flex items-start text-gray-600">
                    <svg className="w-5 h-5 text-primary mt-1 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Kamerasystemer</span>
                  </li>
                  <li className="flex items-start text-gray-600">
                    <svg className="w-5 h-5 text-primary mt-1 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>GPS-styring</span>
                  </li>
                </ul>
              </FadeInUp>
              
              <FadeInUp delay={0.2} className="bg-white p-8 border-l-4 border-l-primary shadow-industrial">
                <h3 className="font-display text-2xl uppercase tracking-wide text-charcoal mb-6">
                  Metoder
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start text-gray-600">
                    <svg className="w-5 h-5 text-primary mt-1 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>BSM fræsning</span>
                  </li>
                  <li className="flex items-start text-gray-600">
                    <svg className="w-5 h-5 text-primary mt-1 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Rabatvedligeholdelse</span>
                  </li>
                  <li className="flex items-start text-gray-600">
                    <svg className="w-5 h-5 text-primary mt-1 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Afvandingssystemer</span>
                  </li>
                  <li className="flex items-start text-gray-600">
                    <svg className="w-5 h-5 text-primary mt-1 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Materialeudlægning</span>
                  </li>
                </ul>
              </FadeInUp>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Stats */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="max-w-4xl text-center mx-auto mb-16">
              <FadeInUp>
                <h2 className="font-display text-4xl md:text-5xl uppercase tracking-wide text-charcoal mb-6">
                  Erfaring
                </h2>
                <div className="w-24 h-1 bg-primary mx-auto mb-6" />
              </FadeInUp>
            </div>
            
            <StaggerContainer className="grid md:grid-cols-3 gap-8">
              <StaggerItem>
                <div className="bg-white p-8 border-l-4 border-l-primary shadow-industrial text-center">
                  <div className="font-mono text-4xl md:text-5xl font-bold text-primary mb-4">
                    20+
                  </div>
                  <h3 className="font-display text-xl uppercase tracking-wide text-charcoal mb-2">
                    Års erfaring
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Mange års erfaring inden for vejservice
                  </p>
                </div>
              </StaggerItem>
              
              <StaggerItem>
                <div className="bg-white p-8 border-l-4 border-l-primary shadow-industrial text-center">
                  <div className="font-mono text-4xl md:text-5xl font-bold text-primary mb-4">
                    1000+
                  </div>
                  <h3 className="font-display text-xl uppercase tracking-wide text-charcoal mb-2">
                    Projekter
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Gennemførte projekter i hele Danmark
                  </p>
                </div>
              </StaggerItem>
              
              <StaggerItem>
                <div className="bg-white p-8 border-l-4 border-l-primary shadow-industrial text-center">
                  <div className="font-mono text-4xl md:text-5xl font-bold text-primary mb-4">
                    100%
                  </div>
                  <h3 className="font-display text-xl uppercase tracking-wide text-charcoal mb-2">
                    Kundetilfredshed
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Høj kundetilfredshed og tillid
                  </p>
                </div>
              </StaggerItem>
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* Materials Section */}
      <section className="py-24 bg-charcoal text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-overlay pointer-events-none" />
        
        <div className="container relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="max-w-4xl text-center mx-auto mb-16">
              <FadeInUp>
                <h2 className="font-display text-4xl md:text-5xl uppercase tracking-wide text-white mb-6">
                  Materialer og Kapacitet
                </h2>
                <div className="w-24 h-1 bg-primary mx-auto mb-6" />
              </FadeInUp>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <FadeInUp className="bg-charcoal-light p-8 border-l-4 border-l-primary">
                <h3 className="font-display text-2xl uppercase tracking-wide text-white mb-6">
                  Materialer
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-center text-gray-300">
                    <svg className="w-5 h-5 text-primary mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Stabilgrus</span>
                  </li>
                  <li className="flex items-center text-gray-300">
                    <svg className="w-5 h-5 text-primary mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Knust asfalt</span>
                  </li>
                  <li className="flex items-center text-gray-300">
                    <svg className="w-5 h-5 text-primary mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Knust beton</span>
                  </li>
                  <li className="flex items-center text-gray-300">
                    <svg className="w-5 h-5 text-primary mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Specialmaterialer</span>
                  </li>
                </ul>
              </FadeInUp>
              
              <FadeInUp delay={0.2} className="bg-charcoal-light p-8 border-l-4 border-l-accent">
                <h3 className="font-display text-2xl uppercase tracking-wide text-white mb-6">
                  Kapacitet
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-center text-gray-300">
                    <svg className="w-5 h-5 text-accent mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Store projekter</span>
                  </li>
                  <li className="flex items-center text-gray-300">
                    <svg className="w-5 h-5 text-accent mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Hurtig leverance</span>
                  </li>
                  <li className="flex items-center text-gray-300">
                    <svg className="w-5 h-5 text-accent mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Fleksible løsninger</span>
                  </li>
                  <li className="flex items-center text-gray-300">
                    <svg className="w-5 h-5 text-accent mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>24/7 service</span>
                  </li>
                </ul>
              </FadeInUp>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
