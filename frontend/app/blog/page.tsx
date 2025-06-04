import { Suspense } from "react";
import { AllPosts } from "@/app/components/Posts";

export default function BlogPage() {
  return (
    <main className="py-20">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Blog
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Følg med i vores seneste projekter, nyheder om vores maskinpark og tips til jordarbejde og entreprenørprojekter.
            </p>
          </div>

          {/* Categories */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button className="px-6 py-2 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-colors">
              Alle indlæg
            </button>
            <button className="px-6 py-2 bg-gray-200 text-gray-700 rounded-full font-medium hover:bg-gray-300 transition-colors">
              Projekt opdateringer
            </button>
            <button className="px-6 py-2 bg-gray-200 text-gray-700 rounded-full font-medium hover:bg-gray-300 transition-colors">
              Ny maskiner
            </button>
            <button className="px-6 py-2 bg-gray-200 text-gray-700 rounded-full font-medium hover:bg-gray-300 transition-colors">
              Tips & tricks
            </button>
          </div>

          {/* Featured Post */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg p-8 mb-12 text-white">
            <div className="max-w-3xl">
              <span className="inline-block bg-blue-500 text-xs uppercase tracking-wider px-3 py-1 rounded-full font-semibold mb-4">
                Fremhævet
              </span>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Ny CAT 320 gravemaskine til vores maskinpark
              </h2>
              <p className="text-blue-100 mb-6">
                Vi har netop investeret i en splinterny CAT 320 gravemaskine, som udvider vores kapacitet betydeligt. 
                Med den seneste teknologi og forbedret brændstofeffektivitet kan vi nu tilbyde endnu bedre service.
              </p>
              <a
                href="/blog/ny-cat-320-gravemaskine"
                className="inline-flex items-center bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Læs mere
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>

          {/* Blog Posts */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-8">Seneste indlæg</h2>
            <Suspense fallback={
              <div className="space-y-8">
                {Array.from({ length: 3 }).map((_, index) => (
                  <div key={index} className="bg-gray-100 rounded-lg p-6 animate-pulse">
                    <div className="h-4 bg-gray-300 rounded w-1/4 mb-4"></div>
                    <div className="h-6 bg-gray-300 rounded w-3/4 mb-3"></div>
                    <div className="h-4 bg-gray-300 rounded w-full mb-2"></div>
                    <div className="h-4 bg-gray-300 rounded w-2/3"></div>
                  </div>
                ))}
              </div>
            }>
              <AllPosts />
            </Suspense>
          </div>

          {/* Recent Updates Section */}
          <div className="bg-gray-50 rounded-lg p-8 mb-12">
            <h3 className="text-xl font-semibold text-gray-800 mb-6">Hurtige opdateringer</h3>
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <p className="text-gray-700"><strong>15. januar:</strong> Færdiggjort udgravning til nyt erhvervsbyggeri i Roskilde</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <p className="text-gray-700"><strong>12. januar:</strong> Modtaget ny Volvo lastbil til transportdivision</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <p className="text-gray-700"><strong>8. januar:</strong> Påbegyndt stort infrastrukturprojekt i Københavns omegn</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <p className="text-gray-700"><strong>3. januar:</strong> Udvidet åbningstider for maskinudlejning i weekender</p>
                </div>
              </div>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="bg-blue-600 rounded-lg p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">Hold dig opdateret</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Tilmeld dig vores nyhedsbrev og få besked om nye projekter, 
              tilbud på maskinudlejning og tips til dit næste byggeprojekt.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Din email adresse"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
              <button
                type="submit"
                className="bg-blue-800 hover:bg-blue-900 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                Tilmeld
              </button>
            </form>
            <p className="text-xs text-blue-200 mt-4">
              Vi sender højst én email om måneden og deler aldrig din email med andre.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
} 