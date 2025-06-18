import { safeSanityFetch } from '@/sanity/lib/safeDataFetching';
import { competenciesPageQuery } from '@/sanity/lib/queries';
import { validateCompetenciesPage, defaultCompetenciesPageData } from '@/utils/contentValidation';
import { ErrorBoundary } from '@/app/components/ErrorBoundary';
import { IconComponent } from '@/app/components/IconComponent';

export default async function KompetencerPage() {
  const { data: competenciesPage, error } = await safeSanityFetch(
    competenciesPageQuery,
    validateCompetenciesPage,
    defaultCompetenciesPageData
  );

  // If we got an error but have fallback data, log it for monitoring
  if (error && competenciesPage) {
    console.warn('Competencies page loaded with fallback data due to error:', error.message);
  }

  // If we have no data at all, show error state
  if (!competenciesPage) {
    return (
      <main className="py-20">
        <div className="container">
          <div className="max-w-6xl mx-auto text-center">
            <p className="text-gray-600">Indhold ikke tilgængeligt</p>
          </div>
        </div>
      </main>
    );
  }

  return (
    <ErrorBoundary>
      <main className="py-20">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-8 text-center">
              {competenciesPage.title}
            </h1>
            
            <p className="text-xl text-gray-600 mb-16 text-center max-w-4xl mx-auto leading-relaxed">
              {competenciesPage.description}
            </p>

            {/* Core Competencies */}
            {competenciesPage.coreCompetencies && (
              <div className="mb-20">
                <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">
                  {competenciesPage.coreCompetencies.sectionTitle}
                </h2>
                
                {competenciesPage.coreCompetencies.competencies && (
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {competenciesPage.coreCompetencies.competencies.map((competency: any, index: number) => (
                      <div key={index} className="text-center">
                        <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                          <IconComponent name={competency.icon} className="w-10 h-10 text-white" />
                        </div>
                        <h3 className="text-xl font-bold mb-3">{competency.title}</h3>
                        <p className="text-gray-600">{competency.description}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* Technical Expertise */}
            {competenciesPage.technicalExpertise && (
              <div className="space-y-16">
                <div className="bg-gray-50 p-12 rounded-lg">
                  <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
                    {competenciesPage.technicalExpertise.sectionTitle}
                  </h2>
                  <div className="grid md:grid-cols-2 gap-12">
                    {competenciesPage.technicalExpertise.equipment && (
                      <div>
                        <h3 className="text-2xl font-bold mb-6">{competenciesPage.technicalExpertise.equipment.title}</h3>
                        <ul className="space-y-4 text-gray-600">
                          {competenciesPage.technicalExpertise.equipment.items?.map((item: string, index: number) => (
                            <li key={index} className="flex items-start">
                              <IconComponent name="check" className="w-5 h-5 text-blue-600 mt-1 mr-3 flex-shrink-0" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    
                    {competenciesPage.technicalExpertise.methods && (
                      <div>
                        <h3 className="text-2xl font-bold mb-6">{competenciesPage.technicalExpertise.methods.title}</h3>
                        <ul className="space-y-4 text-gray-600">
                          {competenciesPage.technicalExpertise.methods.items?.map((item: string, index: number) => (
                            <li key={index} className="flex items-start">
                              <IconComponent name="check" className="w-5 h-5 text-blue-600 mt-1 mr-3 flex-shrink-0" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* Experience Stats */}
            {competenciesPage.experienceStats && (
              <div className="mt-16">
                <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">
                  {competenciesPage.experienceStats.sectionTitle}
                </h2>
                {competenciesPage.experienceStats.stats && (
                  <div className="grid md:grid-cols-3 gap-8">
                    {competenciesPage.experienceStats.stats.map((stat: any, index: number) => (
                      <div key={index} className="bg-white p-8 rounded-lg shadow-lg border text-center">
                        <div className="text-4xl font-bold text-blue-600 mb-4">{stat.number}</div>
                        <h3 className="text-xl font-bold mb-2">{stat.title}</h3>
                        <p className="text-gray-600">{stat.description}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* Materials Section */}
            {competenciesPage.materialsSection && (
              <div className="bg-blue-600 text-white p-12 rounded-lg mt-16">
                <h2 className="text-3xl font-bold mb-8 text-center">
                  {competenciesPage.materialsSection.sectionTitle}
                </h2>
                <div className="grid md:grid-cols-2 gap-12">
                  {competenciesPage.materialsSection.materials && (
                    <div>
                      <h3 className="text-2xl font-bold mb-6">{competenciesPage.materialsSection.materials.title}</h3>
                      <ul className="space-y-3">
                        {competenciesPage.materialsSection.materials.items?.map((item: string, index: number) => (
                          <li key={index} className="flex items-center">
                            <IconComponent name="check" className="w-5 h-5 mr-3 flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  {competenciesPage.materialsSection.capacity && (
                    <div>
                      <h3 className="text-2xl font-bold mb-6">{competenciesPage.materialsSection.capacity.title}</h3>
                      <ul className="space-y-3">
                        {competenciesPage.materialsSection.capacity.items?.map((item: string, index: number) => (
                          <li key={index} className="flex items-center">
                            <IconComponent name="check" className="w-5 h-5 mr-3 flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </ErrorBoundary>
  );
} 