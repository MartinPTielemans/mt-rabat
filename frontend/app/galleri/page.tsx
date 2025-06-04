import Link from "next/link";

export default function GalleriPage() {
  return (
    <main className="py-20">
      <div className="container">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Galleri
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Se vores arbejde, maskiner og gennemførte projekter. Vi er stolte af den kvalitet og professionalisme, vi leverer til vores kunder.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button className="px-6 py-2 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-colors">
              Alle
            </button>
            <button className="px-6 py-2 bg-gray-200 text-gray-700 rounded-full font-medium hover:bg-gray-300 transition-colors">
              Jordarbejde
            </button>
            <button className="px-6 py-2 bg-gray-200 text-gray-700 rounded-full font-medium hover:bg-gray-300 transition-colors">
              Maskiner
            </button>
            <button className="px-6 py-2 bg-gray-200 text-gray-700 rounded-full font-medium hover:bg-gray-300 transition-colors">
              Transport
            </button>
            <button className="px-6 py-2 bg-gray-200 text-gray-700 rounded-full font-medium hover:bg-gray-300 transition-colors">
              Projekter
            </button>
          </div>

          {/* Gallery Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Placeholder images - these would be replaced with actual images from Sanity */}
            {Array.from({ length: 12 }).map((_, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="relative aspect-square bg-gray-200 rounded-lg overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-600 opacity-20"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-gray-500">
                      <svg className="w-16 h-16 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <p className="text-sm">Projekt billede {index + 1}</p>
                    </div>
                  </div>
                  
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-300 flex items-center justify-center">
                    <div className="text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <svg className="w-12 h-12 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                      </svg>
                      <p className="text-sm font-medium">Se større billede</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-4">
                  <h3 className="font-semibold text-gray-800">
                    {index % 4 === 0 ? 'Udgravning af byggegrunde' :
                     index % 4 === 1 ? 'Transport af byggematerialer' :
                     index % 4 === 2 ? 'Moderne gravemaskiner' :
                     'Færdigt anlægsprojekt'}
                  </h3>
                  <p className="text-sm text-gray-600 mt-1">
                    {index % 4 === 0 ? 'Professionel udgravning til nyt boligbyggeri' :
                     index % 4 === 1 ? 'Sikker transport af tunge materialer' :
                     index % 4 === 2 ? 'Vores moderne maskinpark' :
                     'Komplet anlægsprojekt fra start til slut'}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center mt-12">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Indlæs flere billeder
            </button>
          </div>

          {/* Call to Action */}
          <div className="bg-gray-50 rounded-lg p-8 mt-16 text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Har du et projekt, du gerne vil have udført?
            </h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Vi vil gerne høre om dit projekt og give dig et uforpligtende tilbud. 
              Kontakt os i dag, så finder vi den bedste løsning sammen.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/kontakt"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Kontakt os
              </Link>
              <a
                href="tel:+45XXXXXXXX"
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Ring nu
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 