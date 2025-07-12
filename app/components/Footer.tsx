import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container">
        <div className="py-12">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div>
              <h3 className="text-lg font-semibold mb-4">MT Rabat</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Professionel vejservice og rabatvedligeholdelse med fokus på kvalitet og effektivitet.
              </p>
            </div>

            {/* Kompetencer */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Kompetencer</h4>
              <ul className="space-y-2 text-sm">
                <li><span className="text-gray-300">Rabatfræsning</span></li>
                <li><span className="text-gray-300">Afvandingssystemer</span></li>
                <li><span className="text-gray-300">Vejservice</span></li>
                <li><span className="text-gray-300">Anlægsarbejde</span></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Kontakt</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center">
                  <svg className="w-4 h-4 mr-2 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.15 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                  </svg>
                  <span className="text-gray-300">Telefon: +45 40 48 64 80</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 mr-2 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                  <span className="text-gray-300">Email: info@mtrabat.dk</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-4 h-4 mr-2 mt-0.5 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                  <span className="text-gray-300 whitespace-pre-line">Adresse: Kollund byvej 45<br />7400 Herning<br />Danmark</span>
                </li>
              </ul>
            </div>

            {/* Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Navigation</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/" className="text-gray-300 hover:text-white transition-colors">
                    Forside
                  </Link>
                </li>
                <li>
                  <Link href="/ydelser" className="text-gray-300 hover:text-white transition-colors">
                    Ydelser
                  </Link>
                </li>
                <li>
                  <Link href="/kompetencer" className="text-gray-300 hover:text-white transition-colors">
                    Kompetencer
                  </Link>
                </li>
                {/* <li>
                  <Link href="/galleri" className="text-gray-300 hover:text-white transition-colors">
                    Galleri
                  </Link>
                </li> */}
                <li>
                  <Link href="/om-os" className="text-gray-300 hover:text-white transition-colors">
                    Om os
                  </Link>
                </li>
                <li>
                  <Link href="/kontakt" className="text-gray-300 hover:text-white transition-colors">
                    Kontakt
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p className="text-gray-400 text-sm">
              © MT Rabat {new Date().getFullYear()}. Alle rettigheder forbeholdes.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}