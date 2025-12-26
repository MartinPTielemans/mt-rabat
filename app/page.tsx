import Link from "next/link";
import type { Metadata } from "next";
import { IconComponent } from "@/app/components/IconComponent";
import { ServiceShowcaseTabs } from "@/app/components/ServiceShowcaseTabs";
import { HeroSection } from "@/app/components/HeroSection";
import { homepageData } from "@/app/data/staticContent";
import { FadeInUp, StaggerContainer, StaggerItem } from "@/app/components/motion";
import { SectionHeader, FeatureCard } from "@/app/components/ui";

export const metadata: Metadata = {
  title: "Forside - Professionel Vejservice og Rabatfræsning",
  description: "MT Rabat tilbyder specialiseret vejservice med moderne rabatbiler. Vi vedligeholder vejrabatter, sikrer korrekt afvanding og forlænger vejenes levetid i hele Danmark.",
  keywords: [
    "vejservice forside",
    "rabatbiler Danmark", 
    "vejvedligeholdelse",
    "afvanding veje",
    "Marcel Tielemans",
    "professionel vejservice"
  ],
  openGraph: {
    title: "MT Rabat - Markedsledende Vejservice i Danmark",
    description: "Specialiserede rabatbiler med avanceret udstyr til vejvedligeholdelse, rabatfræsning og afvandingssystemer. Erfaren vejservice i hele Danmark.",
    url: "https://mtrabat.dk",
    images: [
      {
        url: "/images/Kantfyld ramper E 45.jpg",
        width: 1200,
        height: 630,
        alt: "MT Rabat rabatfræsning på E45 - professionel vejservice",
      },
    ],
  },
  alternates: {
    canonical: "https://mtrabat.dk",
  },
};

export default function Page() {
  const {
    hero,
    mainContent,
    capabilities,
    contactSection,
  } = homepageData;

  return (
    <>
      {/* Hero Section */}
      <HeroSection
        title={hero.title}
        subtitle={hero.subtitle}
        primaryButtonText={hero.primaryButtonText}
        secondaryButtonText={hero.secondaryButtonText}
        backgroundImage={hero.backgroundImage.asset.url}
      />

      {/* Main Content Section */}
      <section id="mere-info" className="py-24 bg-white relative">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <SectionHeader
              title={mainContent.title}
              subtitle={mainContent.description}
              className="mb-16"
            />
            
            <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {mainContent.features.map((feature, index) => (
                <StaggerItem key={index}>
                  <FeatureCard
                    icon={<IconComponent name={feature.icon} className="w-10 h-10" />}
                    title={feature.title}
                    description={feature.description}
                  />
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-24 bg-gray-50 relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 bg-diagonal-stripes pointer-events-none" />
        
        <div className="container relative z-10">
          <div className="max-w-6xl mx-auto">
            <SectionHeader
              title={capabilities.title}
              subtitle={capabilities.description}
              className="mb-16"
            />
            
            <div className="grid md:grid-cols-2 gap-16 items-start">
              <FadeInUp className="bg-white p-8 border-l-4 border-l-primary shadow-industrial">
                <h3 className="font-display text-2xl uppercase tracking-wide text-charcoal mb-6">
                  {capabilities.leftColumn.title}
                </h3>
                <div className="space-y-4">
                  {capabilities.leftColumn.content.split('\n\n').map((paragraph, index) => (
                    <p key={index} className="text-gray-600 leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </FadeInUp>
              
              <FadeInUp delay={0.2} className="bg-white p-8 border-l-4 border-l-primary shadow-industrial">
                <h3 className="font-display text-2xl uppercase tracking-wide text-charcoal mb-6">
                  {capabilities.rightColumn.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {capabilities.rightColumn.content}
                </p>
                <Link
                  href="/kompetencer"
                  className="inline-flex items-center text-primary hover:text-primary-dark font-medium transition-colors group"
                >
                  <span>Læs mere om vores kompetencer</span>
                  <IconComponent name="arrow-right" className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" />
                </Link>
              </FadeInUp>
            </div>
          </div>
        </div>
      </section>

      {/* Service Showcase */}
      <ServiceShowcaseTabs />

      {/* Contact Section */}
      <section className="py-24 bg-charcoal text-white relative overflow-hidden">
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-grid-overlay pointer-events-none" />
        
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <FadeInUp>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl uppercase tracking-wide mb-6">
                {contactSection.title}
              </h2>
              <div className="w-24 h-1 bg-primary mx-auto mb-8" />
              <p className="text-xl text-gray-400 mb-12 leading-relaxed max-w-2xl mx-auto">
                {contactSection.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/kontakt"
                  className="inline-flex items-center justify-center bg-primary hover:bg-primary-dark text-white px-10 py-5 font-display text-xl uppercase tracking-wider transition-all duration-300 group"
                  style={{ clipPath: 'polygon(0 0, 100% 0, 95% 100%, 0% 100%)' }}
                >
                  <span>{contactSection.buttonText}</span>
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
                  <span className="font-mono">+45 40 48 64 80</span>
                </a>
              </div>
            </FadeInUp>
          </div>
        </div>
      </section>
    </>
  );
}
