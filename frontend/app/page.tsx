import Image from "next/image";

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex flex-col items-center justify-center px-4">
      {/* Main Content Container */}
      <div className="max-w-4xl mx-auto text-center">
        {/* Company Logo */}
        <div className="mb-12">
          <Image
            src="/logo/Mt Rabat.png"
            alt="Mt Rabat Logo"
            width={300}
            height={200}
            className="mx-auto object-contain"
            priority
          />
        </div>

        {/* Under Construction Message */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
            Siden er under opbygning
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
            Vi arbejder på at få vores nye hjemmeside klar. <br />
            I mellemtiden kan du kontakte os direkte for alle henvendelser.
          </p>
        </div>

        {/* Company Image */}
        <div className="mb-12 rounded-lg overflow-hidden shadow-2xl">
          <Image
            src="/images/hero-rabatbil.jpg"
            alt="Mt Rabat - Rabatbiler i arbejde"
            width={800}
            height={400}
            className="w-full h-auto object-cover"
            priority
          />
        </div>

        {/* Contact Information */}
        <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
            Kontakt Marcel Tielemans
          </h2>
          <div className="grid md:grid-cols-2 gap-6 text-left">
            <div>
              <h3 className="font-semibold text-gray-700 mb-2">Specialiseret i:</h3>
              <ul className="text-gray-600 space-y-1">
                <li>• Rabatfræsning</li>
                <li>• Vejvedligeholdelse</li>
                <li>• Afvandingsarbejde</li>
                <li>• Jordarbejde</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-700 mb-2">Kontakt:</h3>
              <div className="text-gray-600 space-y-1">
                <p>📞 <span className="font-medium">40 48 64 80</span></p>
                <p>📧 <span className="font-medium">marcel@mtrabat.dk</span></p>
              </div>
            </div>
          </div>
        </div>

        {/* Static Contact Notice - No Links */}
        <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg">
          <h3 className="text-lg font-semibold text-blue-800 mb-2">
            Kontakt os direkte
          </h3>
          <p className="text-blue-700">
            Da hjemmesiden er under opbygning, bedes du kontakte os direkte via telefon eller e-mail for alle henvendelser og tilbud.
          </p>
        </div>

        {/* Footer Note */}
        <div className="mt-12 text-gray-500 text-sm">
          <p>Hjemmesiden vil snart være klar med fuld information om vores ydelser</p>
        </div>
      </div>
    </div>
  );
}
