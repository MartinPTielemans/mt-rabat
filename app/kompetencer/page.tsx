import type { Metadata } from "next";
import { IconComponent } from "@/app/components/IconComponent";
import { competenciesPageData } from "@/app/data/staticContent";
import { FadeInUp, StaggerContainer, StaggerItem } from "@/app/components/motion";
import { SectionHeader, FeatureCard, StatsCard } from "@/app/components/ui";
import { ParsedCounter } from "@/app/components/motion/AnimatedCounter";

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
  const data = competenciesPageData;

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

      {/* Core Competencies */}
      <section className="py-24 bg-white relative">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <SectionHeader
              title={data.coreCompetencies.sectionTitle}
              className="mb-16"
            />
            
            <StaggerContainer className="grid md:grid-cols-3 gap-12">
              {data.coreCompetencies.competencies.map((competency, index) => (
                <StaggerItem key={index}>
                  <FeatureCard
                    icon={<IconComponent name={competency.icon} className="w-10 h-10" />}
                    title={competency.title}
                    description={competency.description}
                  />
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* Technical Expertise */}
      <section className="py-24 bg-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-diagonal-stripes pointer-events-none" />
        
        <div className="container relative z-10">
          <div className="max-w-6xl mx-auto">
            <SectionHeader
              title={data.technicalExpertise.sectionTitle}
              className="mb-16"
            />
            
            <div className="grid md:grid-cols-2 gap-8">
              <FadeInUp className="bg-white p-8 border-l-4 border-l-primary shadow-industrial">
                <h3 className="font-display text-2xl uppercase tracking-wide text-charcoal mb-6">
                  {data.technicalExpertise.equipment.title}
                </h3>
                <ul className="space-y-4">
                  {data.technicalExpertise.equipment.items.map((item, index) => (
                    <li key={index} className="flex items-start text-gray-600">
                      <svg className="w-5 h-5 text-primary mt-1 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </FadeInUp>
              
              <FadeInUp delay={0.2} className="bg-white p-8 border-l-4 border-l-primary shadow-industrial">
                <h3 className="font-display text-2xl uppercase tracking-wide text-charcoal mb-6">
                  {data.technicalExpertise.methods.title}
                </h3>
                <ul className="space-y-4">
                  {data.technicalExpertise.methods.items.map((item, index) => (
                    <li key={index} className="flex items-start text-gray-600">
                      <svg className="w-5 h-5 text-primary mt-1 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{item}</span>
                    </li>
                  ))}
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
            <SectionHeader
              title={data.experienceStats.sectionTitle}
              className="mb-16"
            />
            
            <StaggerContainer className="grid md:grid-cols-3 gap-8">
              {data.experienceStats.stats.map((stat, index) => (
                <StaggerItem key={index}>
                  <StatsCard
                    number={stat.number}
                    title={stat.title}
                    description={stat.description}
                  />
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* Materials Section */}
      <section className="py-24 bg-charcoal text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-overlay pointer-events-none" />
        
        <div className="container relative z-10">
          <div className="max-w-6xl mx-auto">
            <SectionHeader
              title={data.materialsSection.sectionTitle}
              theme="dark"
              className="mb-16"
            />
            
            <div className="grid md:grid-cols-2 gap-8">
              <FadeInUp className="bg-charcoal-light p-8 border-l-4 border-l-primary">
                <h3 className="font-display text-2xl uppercase tracking-wide text-white mb-6">
                  {data.materialsSection.materials.title}
                </h3>
                <ul className="space-y-4">
                  {data.materialsSection.materials.items.map((item, index) => (
                    <li key={index} className="flex items-center text-gray-300">
                      <svg className="w-5 h-5 text-primary mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </FadeInUp>
              
              <FadeInUp delay={0.2} className="bg-charcoal-light p-8 border-l-4 border-l-accent">
                <h3 className="font-display text-2xl uppercase tracking-wide text-white mb-6">
                  {data.materialsSection.capacity.title}
                </h3>
                <ul className="space-y-4">
                  {data.materialsSection.capacity.items.map((item, index) => (
                    <li key={index} className="flex items-center text-gray-300">
                      <svg className="w-5 h-5 text-accent mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </FadeInUp>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
