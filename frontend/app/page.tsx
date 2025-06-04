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
      <div className="relative">
        <div className="relative bg-gradient-to-br from-blue-900 to-gray-800">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="container relative">
            <div className="min-h-[60vh] mx-auto max-w-4xl pt-20 pb-20 space-y-8 flex flex-col items-center justify-center text-center text-white">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
                MT Rabat
              </h1>
              <p className="text-xl sm:text-2xl md:text-3xl font-light max-w-3xl">
                Professionel maskinstation og entreprenørarbejde
              </p>
              <p className="text-lg sm:text-xl text-gray-200 max-w-2xl">
                Vi tilbyder kvalitetsarbejde inden for jordarbejde, transport og maskinudlejning
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <Link
                  href="/kontakt"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
                >
                  Få et tilbud
                </Link>
                <Link
                  href="/galleri"
                  className="border-2 border-white hover:bg-white hover:text-gray-800 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
                >
                  Se vores arbejde
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-20 bg-gray-50">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12">
              Vores Services
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-4m-5 0H3m2 0h4M9 7h6m-6 4h6m-6 4h6m-6 4h6" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4">Jordarbejde</h3>
                <p className="text-gray-600">
                  Professionelt jordarbejde, udgravning og planering til alle typer projekter
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4">Transport</h3>
                <p className="text-gray-600">
                  Pålidelig transport af materialer, jord og maskiner til byggepladser
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4">Maskinudlejning</h3>
                <p className="text-gray-600">
                  Moderne maskiner til udlejning med eller uden operatør
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
              Om MT Rabat
            </h2>
            {settings?.description && (
              <div className="prose sm:prose-lg md:prose-xl mx-auto text-gray-600">
                <PortableText value={settings.description} />
              </div>
            )}
            <div className="mt-12 flex flex-col sm:flex-row gap-8 justify-center">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">10+</div>
                <div className="text-gray-600">År i branchen</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
                <div className="text-gray-600">Tilfredse kunder</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">24/7</div>
                <div className="text-gray-600">Service og support</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Projects Section */}
      <div className="border-t border-gray-100 bg-gray-50">
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
