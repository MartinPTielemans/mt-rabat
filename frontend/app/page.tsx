import { Suspense } from "react";
import Link from "next/link";
import { PortableText } from "@portabletext/react";

import { AllPosts } from "@/app/components/Posts";
import { settingsQuery } from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/live";

export default async function Page() {
  const { data: settings } = await sanityFetch({
    query: settingsQuery,
  });

  return (
    <>
      {/* Hero Section */}
      <div className="relative w-screen ml-[calc(-50vw+50%)]">
        <div
          className="relative w-full bg-cover bg-center"
          style={{
            backgroundImage: 'url("/images/hero-rabatbil.jpg")',
            aspectRatio: '162/35',
            minHeight: '60vh',
          }}
        >
          <div className="absolute inset-0 bg-black/45" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-center py-20">
            <div className="max-w-5xl text-center">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-6 tracking-tight leading-tight">
                Rabatbiler sikrer vejenes holdbarhed
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white/90 mb-8 font-light leading-relaxed">
                Marcel Tielemans&apos; rabatbiler vedligeholder rabatterne og sikrer, at afvandingen fra vejen kan løbe væk, så vandet ikke bliver liggende på vejen. Alt sker i én arbejdsgang.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/kontakt"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-lg font-semibold text-lg transition-colors shadow-lg"
                >
                  Kontakt Marcel Tielemans
                </Link>
                <Link
                  href="#mere-info"
                  className="border-2 border-white hover:bg-white hover:text-gray-800 text-white px-10 py-4 rounded-lg font-semibold text-lg transition-colors backdrop-blur-sm"
                >
                  Læs mere
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
              Klarer rabatterne og sikrer korrekt afvanding
            </h2>
            <p className="text-xl text-gray-600 mb-16 text-center max-w-4xl mx-auto leading-relaxed">
              Vores nye rabatbiler er udstyret med to fræsere. En hovedfræser som kan trække vulsten tilbage til vejkanten, hvor der typisk bliver en rende efter endt afhøvling. Den komprimerer rabatten og fejer vejen samtidigt.
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
              {/* Avanceret udstyr */}
              <div className="bg-gray-50 p-8 rounded-lg">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-center">Avanceret udstyr</h3>
                <p className="text-gray-600 leading-relaxed">
                  Udover fræser kan der monteres en snegl, som kan snegle uønsket materiale ud til bagkanten af rabatten, og dermed lavet ønsket fald fra vejkant.
                </p>
              </div>
              
              {/* Udlæggerkasse */}
              <div className="bg-gray-50 p-8 rounded-lg">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-center">Udlæggerkasse med fræser</h3>
                <p className="text-gray-600 leading-relaxed">
                  Monteret med en udlæggerkasse med indbygget fræser, som kan oprive gruset og lægge det på plads, samtidig med at man kan tilføre ekstra materiale i samme arbejdsgang.
                </p>
              </div>
              
              {/* Øget sikkerhed */}
              <div className="bg-gray-50 p-8 rounded-lg">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-center">Øget sikkerhed</h3>
                <p className="text-gray-600 leading-relaxed">
                  Inde ved styrepulten er der monteret fem kameraer, så maskinføreren altid kan orientere sig i alle vinkler omkring maskinen. Det er med til at sikre arbejdsmiljøet i og omkring maskinen.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Capabilities Section */}
      <div className="py-20 bg-gray-50">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-16 text-center">
              Rabatfræseren kan lægge ud i varierende bredde
            </h2>
            <p className="text-xl text-gray-600 mb-16 text-center max-w-4xl mx-auto leading-relaxed">
              Rabatfræseren har også mulighed for at lægge nyt materiale i rabatten i varierende bredde. Det gælder både stabilgrus, knust asfalt og knust beton.
            </p>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold mb-8">Alsidige anvendelsesmuligheder</h3>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Sneglen kan desuden bruges i forbindelse med BSM fræsning, både til at afhøvle og snegle overskydende jord væk fra vejkanten, og den kan også snegle med så stor rotationshastighed, at materialet fordeles ud over rabatten.
                </p>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Herefter kan man køre med en græsklipper umiddelbart efter ved græsvækst.
                </p>
              </div>
              
              <div>
                <h3 className="text-3xl font-bold mb-8">Erfaring og kompetence</h3>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Vejservices primære forretningsområde er vejservice og udendørs drift og vedligeholdelse. Vejservice har mange års erfaring med alle typer af drift og vedligehold.
                </p>
                <Link
                  href="/kompetencer"
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold text-lg"
                >
                  Læs mere om vores kompetencer
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="py-20 bg-blue-600 text-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Ønsker du at vide mere?
            </h2>
            <p className="text-xl mb-12 leading-relaxed">
              Kontakt vores lokale afdelinger for mere information om vores rabatfræsere og hvordan vi kan hjælpe med vedligeholdelse af vejrabatter.
            </p>
            <Link
              href="/kontakt"
              className="bg-white text-blue-600 hover:bg-gray-100 px-10 py-4 rounded-lg font-semibold text-lg transition-colors inline-block"
            >
              Kontakt Marcel Tielemans
            </Link>
          </div>
        </div>
      </div>

      {/* Recent Projects Section */}
      <div className="border-t border-gray-100 bg-white">
        <div className="container">
          <aside className="py-12 sm:py-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Seneste Projekter
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Se vores seneste arbejde og projektopdateringer
              </p>
            </div>
            <Suspense>{await AllPosts()}</Suspense>
            <div className="text-center mt-8">
              <Link
                href="/blog"
                className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold"
              >
                Se alle projekter
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}
