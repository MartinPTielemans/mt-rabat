export default function OmOsPage() {
  return (
    <main className="py-20">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-8 text-center">
            Om os
          </h1>
          
          <div className="prose prose-lg mx-auto text-gray-600 mb-16">
            <p className="text-xl leading-relaxed mb-8">
              Marcel Tielemans er en professionel leverandør af infrastrukturløsninger med fokus på bæredygtighed og høj kvalitet.
            </p>
            
            <p className="leading-relaxed mb-6">
              Vi specialiserer os i vejservice og udendørs drift og vedligeholdelse med mange års erfaring i branchen. Vores primære fokus ligger på rabatvedligeholdelse og infrastrukturarbejde, hvor vi benytter moderne udstyr og teknikker.
            </p>
            
            <p className="leading-relaxed mb-6">
              Med vores avancerede rabatbiler og fræsere sikrer vi, at vejenes rabatter vedligeholdes optimalt, hvilket er afgørende for korrekt afvanding og vejenes holdbarhed. Vi tilbyder både traditionelle anlægsopgaver og store infrastrukturopgaver.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Kvalitet</h3>
              <p className="text-gray-600">Vi leverer altid arbejde af højeste kvalitet med fokus på holdbarhed</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Effektivitet</h3>
              <p className="text-gray-600">Moderne udstyr og teknikker sikrer hurtig og effektiv projektgennemførelse</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Bæredygtighed</h3>
              <p className="text-gray-600">Vi fokuserer på miljøvenlige løsninger og bæredygtig drift</p>
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
              Kontakt information
            </h2>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <h3 className="font-semibold mb-2">Telefon</h3>
                <p className="text-blue-600">+45 40 48 64 80</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Email</h3>
                <p className="text-blue-600">m.t@live.dk</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Adresse</h3>
                <p className="text-gray-600">Kollund Byvej 45<br />7400 Herning</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 