export default function KompetencerPage() {
  return (
    <main className="py-20">
      <div className="container">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-8 text-center">
            Kompetencer
          </h1>
          
          <p className="text-xl text-gray-600 mb-16 text-center max-w-4xl mx-auto leading-relaxed">
            Med mange års erfaring inden for vejservice og infrastruktur har vi opbygget stærke kompetencer, der sikrer kvalitet og effektivitet i alle vores projekter.
          </p>

          <div className="mb-20">
            <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">
              Vores kernekompetencer
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Vejservice</h3>
                <p className="text-gray-600">Specialiseret vedligeholdelse og service af veje og infrastruktur</p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-4m-5 0H3m2 0h4M9 7h6m-6 4h6m-6 4h6m-6 4h6" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Traditionelle anlægsopgaver</h3>
                <p className="text-gray-600">Omfattende erfaring med klassiske anlægs- og entreprenørarbejder</p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Store infrastrukturopgaver</h3>
                <p className="text-gray-600">Kapacitet og knowhow til at håndtere komplekse projekter</p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Asfalt</h3>
                <p className="text-gray-600">Professionel asfaltarbejde og vejbelægning i høj kvalitet</p>
              </div>
            </div>
          </div>

          {/* Detailed Competencies */}
          <div className="space-y-16">
            {/* Teknisk ekspertise */}
            <div className="bg-gray-50 p-12 rounded-lg">
              <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
                Teknisk ekspertise
              </h2>
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-2xl font-bold mb-6">Specialiseret udstyr</h3>
                  <ul className="space-y-4 text-gray-600">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-blue-600 mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Moderne rabatbiler med to fræsere
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-blue-600 mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Udlæggerkasse med indbygget fræser
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-blue-600 mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Avancerede kamerasystemer for sikkerhed
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-blue-600 mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Sneglsystemer til materialefordeling
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold mb-6">Metoder og teknikker</h3>
                  <ul className="space-y-4 text-gray-600">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-blue-600 mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      BSM fræsning og bearbejdning
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-blue-600 mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Præcis materialeudlægning
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-blue-600 mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Optimal afvandingssikring
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-blue-600 mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Integreret arbejdsproces
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Erfaring og kvalifikationer */}
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">
                Erfaring og kvalifikationer
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white p-8 rounded-lg shadow-lg border text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-4">15+</div>
                  <h3 className="text-xl font-bold mb-2">År i branchen</h3>
                  <p className="text-gray-600">Dyb erfaring med vejservice og infrastrukturarbejde</p>
                </div>
                
                <div className="bg-white p-8 rounded-lg shadow-lg border text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-4">100%</div>
                  <h3 className="text-xl font-bold mb-2">Kvalitetsfokus</h3>
                  <p className="text-gray-600">Alle projekter udføres med fokus på holdbarhed og kvalitet</p>
                </div>
                
                <div className="bg-white p-8 rounded-lg shadow-lg border text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-4">24/7</div>
                  <h3 className="text-xl font-bold mb-2">Service</h3>
                  <p className="text-gray-600">Fleksible løsninger og hurtig respons på alle henvendelser</p>
                </div>
              </div>
            </div>

            {/* Materialer og ressourcer */}
            <div className="bg-blue-600 text-white p-12 rounded-lg">
              <h2 className="text-3xl font-bold mb-8 text-center">
                Materialer og ressourcer
              </h2>
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-2xl font-bold mb-6">Godkendte materialer</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <svg className="w-5 h-5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Stabilgrus af højeste kvalitet
                    </li>
                    <li className="flex items-center">
                      <svg className="w-5 h-5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Knust asfalt til genanvendelse
                    </li>
                    <li className="flex items-center">
                      <svg className="w-5 h-5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Knust beton som bæremateriale
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold mb-6">Kapacitet</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <svg className="w-5 h-5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Projekter i varierende størrelser
                    </li>
                    <li className="flex items-center">
                      <svg className="w-5 h-5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Fleksible arbejdstider
                    </li>
                    <li className="flex items-center">
                      <svg className="w-5 h-5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Hurtig projektstart
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 