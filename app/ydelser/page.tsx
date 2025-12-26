import Link from "next/link";
import type { Metadata } from "next";
import { IconComponent } from "@/app/components/IconComponent";
import { FadeInUp, StaggerContainer, StaggerItem } from "@/app/components/motion";
import { Card } from "@/app/components/ui";

export const metadata: Metadata = {
  title: "Ydelser - Vejservice, Rabatfræsning og Anlægsarbejde",
  description: "MT Rabat tilbyder professionelle ydelser inden for vejservice, traditionelle anlægsopgaver, store infrastrukturopgaver og asfaltarbejde. Kontakt os for et tilbud.",
  keywords: [
    "vejservice ydelser",
    "rabatfræsning service",
    "anlægsarbejde Danmark",
    "infrastrukturopgaver",
    "asfaltarbejde",
    "vejbyggeri",
    "BSM fræsning",
    "afvandingssystemer",
    "kantforstærkning"
  ],
  openGraph: {
    title: "Ydelser - Komplet Vejservice og Anlægsarbejde",
    description: "Professionelle løsninger inden for vejservice, anlægsarbejde og infrastruktur. Fra rabatfræsning til store vejbyggeriprojekter.",
    url: "https://mtrabat.dk/ydelser",
    images: [
      {
        url: "/images/rabatfræsning/rabat fræsning efter.jpg",
        width: 1200,
        height: 630,
        alt: "MT Rabat ydelser - professionel rabatfræsning og vejservice",
      },
    ],
  },
  alternates: {
    canonical: "https://mtrabat.dk/ydelser",
  },
};



export default function YdelserPage() {
  return (
    <main className="relative">
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-charcoal text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-overlay pointer-events-none" />
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <FadeInUp>
              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl uppercase tracking-wide mb-6">
                Ydelser
              </h1>
              <div className="w-24 h-1 bg-primary mx-auto mb-8" />
              <p className="text-xl text-gray-400 leading-relaxed max-w-3xl mx-auto">
                Vi tilbyder professionelle løsninger inden for vejservice og infrastruktur med fokus på kvalitet og effektivitet.
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

      {/* Services Grid */}
      <section className="py-24 bg-white relative">
        <div className="absolute inset-0 bg-diagonal-stripes pointer-events-none" />
        
        <div className="container relative z-10">
          <div className="max-w-6xl mx-auto">
            <StaggerContainer className="grid md:grid-cols-2 gap-8">
              <StaggerItem>
                <Card variant="numbered" number={1} className="p-8 shadow-industrial hover:shadow-industrial-hover transition-shadow">
                  <div className="w-16 h-16 bg-primary flex items-center justify-center mb-6" style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}>
                    <span className="text-white"><IconComponent name="flag" className="w-8 h-8" /></span>
                  </div>
                  <h3 className="font-display text-2xl uppercase tracking-wide text-charcoal mb-4">
                    Vejservice
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Specialiseret vejservice med fokus på rabatvedligeholdelse og afvandingssystemer. Vi sikrer, at vejene holder længere ved optimal vedligeholdelse.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start text-gray-600">
                      <svg className="w-5 h-5 text-primary mt-0.5 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Rabatfræsning og vedligeholdelse</span>
                    </li>
                    <li className="flex items-start text-gray-600">
                      <svg className="w-5 h-5 text-primary mt-0.5 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Afvandingssystemer</span>
                    </li>
                    <li className="flex items-start text-gray-600">
                      <svg className="w-5 h-5 text-primary mt-0.5 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>BSM fræsning</span>
                    </li>
                  </ul>
                </Card>
              </StaggerItem>
              
              <StaggerItem>
                <Card variant="numbered" number={2} className="p-8 shadow-industrial hover:shadow-industrial-hover transition-shadow">
                  <div className="w-16 h-16 bg-primary flex items-center justify-center mb-6" style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}>
                    <span className="text-white"><IconComponent name="building" className="w-8 h-8" /></span>
                  </div>
                  <h3 className="font-display text-2xl uppercase tracking-wide text-charcoal mb-4">
                    Traditionelle anlægsopgaver
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Omfattende anlægsarbejde med fokus på kvalitet og præcision. Vi håndterer projekter fra start til slut.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start text-gray-600">
                      <svg className="w-5 h-5 text-primary mt-0.5 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Jordarbejde og udgravning</span>
                    </li>
                    <li className="flex items-start text-gray-600">
                      <svg className="w-5 h-5 text-primary mt-0.5 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Planering og forberedelse</span>
                    </li>
                    <li className="flex items-start text-gray-600">
                      <svg className="w-5 h-5 text-primary mt-0.5 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Materialeudlægning</span>
                    </li>
                  </ul>
                </Card>
              </StaggerItem>
              
              <StaggerItem>
                <Card variant="numbered" number={3} className="p-8 shadow-industrial hover:shadow-industrial-hover transition-shadow">
                  <div className="w-16 h-16 bg-primary flex items-center justify-center mb-6" style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}>
                    <span className="text-white"><IconComponent name="box" className="w-8 h-8" /></span>
                  </div>
                  <h3 className="font-display text-2xl uppercase tracking-wide text-charcoal mb-4">
                    Store infrastrukturopgaver
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Komplekse infrastrukturprojekter der kræver specialiseret udstyr og erfaring. Vi leverer løsninger til store projekter.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start text-gray-600">
                      <svg className="w-5 h-5 text-primary mt-0.5 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Vejbyggeri og renovering</span>
                    </li>
                    <li className="flex items-start text-gray-600">
                      <svg className="w-5 h-5 text-primary mt-0.5 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Infrastruktur projekter</span>
                    </li>
                    <li className="flex items-start text-gray-600">
                      <svg className="w-5 h-5 text-primary mt-0.5 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Projektledelse</span>
                    </li>
                  </ul>
                </Card>
              </StaggerItem>
              
              <StaggerItem>
                <Card variant="numbered" number={4} className="p-8 shadow-industrial hover:shadow-industrial-hover transition-shadow">
                  <div className="w-16 h-16 bg-primary flex items-center justify-center mb-6" style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}>
                    <span className="text-white"><IconComponent name="arrow" className="w-8 h-8" /></span>
                  </div>
                  <h3 className="font-display text-2xl uppercase tracking-wide text-charcoal mb-4">
                    Asfalt
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Professionel asfaltarbejde med fokus på holdbarhed og kvalitet. Vi håndterer alt fra små reparationer til store projekter.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start text-gray-600">
                      <svg className="w-5 h-5 text-primary mt-0.5 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Asfaltlægning</span>
                    </li>
                    <li className="flex items-start text-gray-600">
                      <svg className="w-5 h-5 text-primary mt-0.5 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Reparationer og vedligeholdelse</span>
                    </li>
                    <li className="flex items-start text-gray-600">
                      <svg className="w-5 h-5 text-primary mt-0.5 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Kvalitetskontrol</span>
                    </li>
                  </ul>
                </Card>
              </StaggerItem>
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-charcoal text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-overlay pointer-events-none" />
        
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <FadeInUp>
              <h2 className="font-display text-4xl md:text-5xl uppercase tracking-wide mb-6">
                Har du brug for vores ydelser?
              </h2>
              <div className="w-24 h-1 bg-primary mx-auto mb-8" />
              <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
                Kontakt os i dag for et uforpligtende tilbud på dit projekt
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/kontakt"
                  className="inline-flex items-center justify-center bg-primary hover:bg-primary-dark text-white px-10 py-5 font-display text-xl uppercase tracking-wider transition-all duration-300 group"
                  style={{ clipPath: 'polygon(0 0, 100% 0, 95% 100%, 0% 100%)' }}
                >
                  <span>Få et tilbud</span>
                  <svg 
                    className="w-5 h-5 ml-3 transform group-hover:translate-x-2 transition-transform" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <a
                  href="tel:+4540486480"
                  className="inline-flex items-center justify-center border-2 border-gray-600 hover:border-primary text-gray-300 hover:text-primary px-10 py-5 font-display text-xl uppercase tracking-wider transition-all duration-300"
                >
                  <svg className="w-5 h-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Ring Nu
                </a>
              </div>
            </FadeInUp>
          </div>
        </div>
      </section>
    </main>
  );
}
