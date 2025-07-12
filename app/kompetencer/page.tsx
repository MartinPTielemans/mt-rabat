import type { Metadata } from "next";
import { IconComponent } from "@/app/components/IconComponent";
import { competenciesPageData } from "@/app/data/staticContent";

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
    <main className="py-20">
      <div className="container">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-8 text-center">
            {data.title}
          </h1>
          
          <p className="text-xl text-gray-600 mb-16 text-center max-w-4xl mx-auto leading-relaxed">
            {data.description}
          </p>

          {/* Core Competencies */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">
              {data.coreCompetencies.sectionTitle}
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {data.coreCompetencies.competencies.map((competency, index) => (
                <div key={index} className="text-center">
                  <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <IconComponent name={competency.icon} className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{competency.title}</h3>
                  <p className="text-gray-600">{competency.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Expertise */}
          <div className="space-y-16">
            <div className="bg-gray-50 p-12 rounded-lg">
              <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
                {data.technicalExpertise.sectionTitle}
              </h2>
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-2xl font-bold mb-6">{data.technicalExpertise.equipment.title}</h3>
                  <ul className="space-y-4 text-gray-600">
                    {data.technicalExpertise.equipment.items.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <IconComponent name="check" className="w-5 h-5 text-blue-600 mt-1 mr-3 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold mb-6">{data.technicalExpertise.methods.title}</h3>
                  <ul className="space-y-4 text-gray-600">
                    {data.technicalExpertise.methods.items.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <IconComponent name="check" className="w-5 h-5 text-blue-600 mt-1 mr-3 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Experience Stats */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">
              {data.experienceStats.sectionTitle}
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {data.experienceStats.stats.map((stat, index) => (
                <div key={index} className="bg-white p-8 rounded-lg shadow-lg border text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-4">{stat.number}</div>
                  <h3 className="text-xl font-bold mb-2">{stat.title}</h3>
                  <p className="text-gray-600">{stat.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Materials Section */}
          <div className="bg-blue-600 text-white p-12 rounded-lg mt-16">
            <h2 className="text-3xl font-bold mb-8 text-center">
              {data.materialsSection.sectionTitle}
            </h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold mb-6">{data.materialsSection.materials.title}</h3>
                <ul className="space-y-3">
                  {data.materialsSection.materials.items.map((item, index) => (
                    <li key={index} className="flex items-center">
                      <IconComponent name="check" className="w-5 h-5 mr-3 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold mb-6">{data.materialsSection.capacity.title}</h3>
                <ul className="space-y-3">
                  {data.materialsSection.capacity.items.map((item, index) => (
                    <li key={index} className="flex items-center">
                      <IconComponent name="check" className="w-5 h-5 mr-3 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}