import { safeSanityFetch } from '@/sanity/lib/safeDataFetching';
import { aboutPageQuery } from '@/sanity/lib/queries';
import { validateAboutPage, defaultAboutPageData } from '@/utils/contentValidation';
import { ErrorBoundary } from '@/app/components/ErrorBoundary';
import { IconComponent } from '@/app/components/IconComponent';
import { PortableText } from '@portabletext/react';

export default async function OmOsPage() {
  const { data: aboutPage, error } = await safeSanityFetch(
    aboutPageQuery,
    validateAboutPage,
    defaultAboutPageData
  );

  // If we got an error but have fallback data, log it for monitoring
  if (error && aboutPage) {
    console.warn('About page loaded with fallback data due to error:', error.message);
  }

  // If we have no data at all, show error state
  if (!aboutPage) {
    return (
      <main className="py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
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
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-8 text-center">
              {aboutPage.title}
            </h1>
            
            <div className="prose prose-lg mx-auto text-gray-600 mb-16">
              {aboutPage.description && (
                <p className="text-xl leading-relaxed mb-8">
                  {aboutPage.description}
                </p>
              )}
              
              {aboutPage.companyDescription && (
                <div className="prose prose-lg max-w-none">
                  <PortableText value={aboutPage.companyDescription} />
                </div>
              )}
            </div>

            {aboutPage.values && aboutPage.values.length > 0 && (
              <div className="grid md:grid-cols-3 gap-8 mb-16">
                {aboutPage.values.map((value: any, index: number) => (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent 
                        name={value.icon} 
                        className="w-8 h-8 text-white"
                      />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                    <p className="text-gray-600">{value.description}</p>
                  </div>
                ))}
              </div>
            )}

            {aboutPage.contactInfo && (
              <div className="bg-gray-50 p-8 rounded-lg">
                <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
                  Kontakt information
                </h2>
                <div className="grid md:grid-cols-3 gap-8 text-center">
                  <div>
                    <h3 className="font-semibold mb-2">Telefon</h3>
                    <p className="text-blue-600">{aboutPage.contactInfo.phone}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Email</h3>
                    <p className="text-blue-600">{aboutPage.contactInfo.email}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Adresse</h3>
                    <p className="text-gray-600 whitespace-pre-line">{aboutPage.contactInfo.address}</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </ErrorBoundary>
  );
} 