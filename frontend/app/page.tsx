import { Suspense } from "react";
import Link from "next/link";
import { PortableText } from "@portabletext/react";

import { AllPosts } from "@/app/components/Posts";
import { IconComponent } from "@/app/components/IconComponent";
import { ErrorBoundary, CMSErrorFallback, HeroSkeleton, ContentSkeleton } from "@/app/components/ErrorBoundary";
import { homepageQuery } from "@/sanity/lib/queries";
import { safeSanityFetch } from "@/sanity/lib/safeDataFetching";
import { validateHomepage, defaultHomepageData, type ValidatedHomepage, type ValidatedFeature } from "@/utils/contentValidation";

export default async function Page() {
  // Use safe data fetching with validation and fallback
  const { data: homepage, error } = await safeSanityFetch(
    homepageQuery,
    validateHomepage,
    defaultHomepageData
  );

  // If we got an error but have fallback data, log it for monitoring
  if (error && homepage) {
    console.warn('Homepage loaded with fallback data due to error:', error.message);
  }

  // If we have no data at all, show error state
  if (!homepage) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            Siden kunne ikke indlæses
          </h1>
          <p className="text-gray-600 mb-8">
            Der opstod en fejl ved indlæsning af hjemmesiden. Prøv at opdatere siden.
          </p>
          <button
            onClick={() => window.location.reload()}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
          >
            Opdater siden
          </button>
        </div>
      </div>
    );
  }

  // Now we have properly typed and validated data
  const {
    hero,
    mainContent,
    capabilities,
    contactSection,
    recentProjects
  } = homepage;

  // Fallback values if Sanity data is not available
  const defaultBackgroundImage = "/images/hero-rabatbil.jpg";

  return (
    <>
      {/* Hero Section */}
      <div className="relative w-screen ml-[calc(-50vw+50%)]">
        <div
          className="relative w-full bg-cover bg-center"
          style={{
            backgroundImage: `url("${hero?.backgroundImage?.asset?.url || defaultBackgroundImage}")`,
            aspectRatio: '162/35',
            minHeight: '60vh',
          }}
        >
          <div className="absolute inset-0 bg-black/45" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-center py-20">
            <div className="max-w-5xl text-center">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-6 tracking-tight leading-tight">
                {hero?.title || "Rabatbiler sikrer vejenes holdbarhed"}
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white/90 mb-8 font-light leading-relaxed">
                {hero?.subtitle || "Marcel Tielemans' rabatbiler vedligeholder rabatterne og sikrer, at afvandingen fra vejen kan løbe væk, så vandet ikke bliver liggende på vejen. Alt sker i én arbejdsgang."}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/kontakt"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-lg font-semibold text-lg transition-colors shadow-lg"
                >
                  {hero?.primaryButtonText || "Kontakt Marcel Tielemans"}
                </Link>
                <Link
                  href="#mere-info"
                  className="border-2 border-white hover:bg-white hover:text-gray-800 text-white px-10 py-4 rounded-lg font-semibold text-lg transition-colors backdrop-blur-sm"
                >
                  {hero?.secondaryButtonText || "Læs mere"}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Section */}
      <div id="mere-info" className="py-20 bg-white">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-16 text-center">
              {mainContent?.title || "Klarer rabatterne og sikrer korrekt afvanding"}
            </h2>
            <p className="text-xl text-gray-600 mb-16 text-center max-w-4xl mx-auto leading-relaxed">
              {mainContent?.description || "Vores nye rabatbiler er udstyret med to fræsere. En hovedfræser som kan trække vulsten tilbage til vejkanten, hvor der typisk bliver en rende efter endt afhøvling. Den komprimerer rabatten og fejer vejen samtidigt."}
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
              <ErrorBoundary fallback={CMSErrorFallback} context="main-features">
                {mainContent?.features?.map((feature: ValidatedFeature, index: number) => (
                  <div key={index} className="bg-gray-50 p-8 rounded-lg">
                    <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                      <IconComponent name={feature.icon} />
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-center">{feature.title}</h3>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                )) || (
                  // This fallback should not be needed since we use defaultHomepageData, but keeping for safety
                  <div className="col-span-full">
                    <ContentSkeleton lines={3} />
                  </div>
                )}
              </ErrorBoundary>
            </div>
          </div>
        </div>
      </div>

      {/* Capabilities Section */}
      <div className="py-20 bg-gray-50">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-16 text-center">
              {capabilities?.title || "Rabatfræseren kan lægge ud i varierende bredde"}
            </h2>
            <p className="text-xl text-gray-600 mb-16 text-center max-w-4xl mx-auto leading-relaxed">
              {capabilities?.description || "Rabatfræseren har også mulighed for at lægge nyt materiale i rabatten i varierende bredde. Det gælder både stabilgrus, knust asfalt og knust beton."}
            </p>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <ErrorBoundary fallback={CMSErrorFallback} context="capabilities-left">
                <div>
                  <h3 className="text-3xl font-bold mb-8">
                    {capabilities?.leftColumn?.title}
                  </h3>
                  {capabilities?.leftColumn?.content ? (
                    <div className="prose prose-lg text-gray-600">
                      <PortableText value={capabilities.leftColumn.content} />
                    </div>
                  ) : (
                    <div>
                      <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                        Sneglen kan desuden bruges i forbindelse med BSM fræsning, både til at afhøvle og snegle overskydende jord væk fra vejkanten, og den kan også snegle med så stor rotationshastighed, at materialet fordeles ud over rabatten.
                      </p>
                      <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                        Herefter kan man køre med en græsklipper umiddelbart efter ved græsvækst.
                      </p>
                    </div>
                  )}
                </div>
              </ErrorBoundary>
              
              <ErrorBoundary fallback={CMSErrorFallback} context="capabilities-right">
                <div>
                  <h3 className="text-3xl font-bold mb-8">
                    {capabilities?.rightColumn?.title}
                  </h3>
                  {capabilities?.rightColumn?.content ? (
                    <div className="prose prose-lg text-gray-600">
                      <PortableText value={capabilities.rightColumn.content} />
                    </div>
                  ) : (
                    <div>
                      <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                        Vejservices primære forretningsområde er vejservice og udendørs drift og vedligeholdelse. Vejservice har mange års erfaring med alle typer af drift og vedligehold.
                      </p>
                      <Link
                        href="/kompetencer"
                        className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold text-lg"
                      >
                        Læs mere om vores kompetencer
                        <IconComponent name="arrow-right" className="w-5 h-5 ml-2 text-blue-600" />
                      </Link>
                    </div>
                  )}
                </div>
              </ErrorBoundary>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="py-20 bg-blue-600 text-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              {contactSection?.title || "Ønsker du at vide mere?"}
            </h2>
            <p className="text-xl mb-12 leading-relaxed">
              {contactSection?.description || "Kontakt vores lokale afdelinger for mere information om vores rabatfræsere og hvordan vi kan hjælpe med vedligeholdelse af vejrabatter."}
            </p>
            <Link
              href="/kontakt"
              className="bg-white text-blue-600 hover:bg-gray-100 px-10 py-4 rounded-lg font-semibold text-lg transition-colors inline-block"
            >
              {contactSection?.buttonText || "Kontakt Marcel Tielemans"}
            </Link>
          </div>
        </div>
      </div>

      {/* Recent Projects Section */}
      <div className="border-t border-gray-100 bg-white">
        <div className="container">
          <aside className="py-12 sm:py-20">
            <ErrorBoundary fallback={CMSErrorFallback} context="recent-projects-header">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                  {recentProjects?.title}
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  {recentProjects?.description}
                </p>
              </div>
            </ErrorBoundary>
            
            <ErrorBoundary fallback={CMSErrorFallback} context="recent-projects-content">
              <Suspense fallback={<ContentSkeleton lines={4} />}>
                {await AllPosts()}
              </Suspense>
            </ErrorBoundary>
            
            <ErrorBoundary fallback={CMSErrorFallback} context="recent-projects-footer">
              <div className="text-center mt-8">
                <Link
                  href="/blog"
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold"
                >
                  {recentProjects?.viewAllText}
                  <IconComponent name="arrow-right" className="w-4 h-4 ml-2 text-blue-600" />
                </Link>
              </div>
            </ErrorBoundary>
          </aside>
        </div>
      </div>
    </>
  );
}
