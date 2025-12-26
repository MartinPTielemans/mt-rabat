import Link from "next/link";

export function Footer() {
  return (
    <footer className="relative">
      {/* CTA Section */}
      <div className="bg-charcoal relative overflow-hidden">
        {/* Diagonal separator */}
        <div 
          className="absolute top-0 left-0 right-0 h-20 bg-gray-50"
          style={{ clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 100%)' }}
        />
        
        <div className="container relative z-10 pt-32 pb-20">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-white uppercase tracking-wide mb-6">
              Klar til at starte?
            </h2>
            <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
              Kontakt os i dag for en uforpligtende samtale om dit projekt. Vi står klar til at hjælpe.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/kontakt"
                className="inline-flex items-center justify-center bg-primary hover:bg-primary-dark text-white px-10 py-4 font-display text-xl uppercase tracking-wider transition-all duration-300 group"
                style={{ clipPath: 'polygon(0 0, 100% 0, 95% 100%, 0% 100%)' }}
              >
                <span>Kontakt Os</span>
                <svg 
                  className="w-5 h-5 ml-3 transform group-hover:translate-x-1 transition-transform" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <a
                href="tel:+4540486480"
                className="inline-flex items-center justify-center border-2 border-gray-600 hover:border-primary text-gray-300 hover:text-primary px-10 py-4 font-display text-xl uppercase tracking-wider transition-all duration-300"
              >
                <svg className="w-5 h-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Ring Nu
              </a>
            </div>
          </div>
        </div>

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-grid-overlay pointer-events-none" />
      </div>

      {/* Main Footer */}
      <div className="bg-charcoal-dark relative">
        <div className="container py-16">
          <div className="grid md:grid-cols-4 gap-12">
            {/* Company Info */}
            <div className="md:col-span-1">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-primary flex items-center justify-center">
                  <span className="font-display text-white text-xl">MT</span>
                </div>
                <span className="font-display text-xl text-white uppercase tracking-wider">
                  Rabat
                </span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Professionel vejservice og rabatvedligeholdelse med fokus på kvalitet, effektivitet og holdbare løsninger.
              </p>
              <div className="flex items-center gap-2 text-primary font-mono text-sm">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                Tilgængelig 24/7
              </div>
            </div>

            {/* Kompetencer */}
            <div>
              <h4 className="font-display text-lg text-white uppercase tracking-wider mb-6 flex items-center">
                <span className="w-8 h-0.5 bg-primary mr-3" />
                Kompetencer
              </h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <span className="text-gray-400 hover:text-primary transition-colors cursor-default flex items-center">
                    <span className="w-1.5 h-1.5 bg-primary/50 mr-3" />
                    Rabatfræsning
                  </span>
                </li>
                <li>
                  <span className="text-gray-400 hover:text-primary transition-colors cursor-default flex items-center">
                    <span className="w-1.5 h-1.5 bg-primary/50 mr-3" />
                    Afvandingssystemer
                  </span>
                </li>
                <li>
                  <span className="text-gray-400 hover:text-primary transition-colors cursor-default flex items-center">
                    <span className="w-1.5 h-1.5 bg-primary/50 mr-3" />
                    Vejservice
                  </span>
                </li>
                <li>
                  <span className="text-gray-400 hover:text-primary transition-colors cursor-default flex items-center">
                    <span className="w-1.5 h-1.5 bg-primary/50 mr-3" />
                    Anlægsarbejde
                  </span>
                </li>
                <li>
                  <span className="text-gray-400 hover:text-primary transition-colors cursor-default flex items-center">
                    <span className="w-1.5 h-1.5 bg-primary/50 mr-3" />
                    Kantforstærkning
                  </span>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-display text-lg text-white uppercase tracking-wider mb-6 flex items-center">
                <span className="w-8 h-0.5 bg-primary mr-3" />
                Kontakt
              </h4>
              <ul className="space-y-4 text-sm">
                <li>
                  <a href="tel:+4540486480" className="flex items-start gap-3 text-gray-400 hover:text-primary transition-colors group">
                    <svg className="w-5 h-5 text-primary mt-0.5 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M6.62 10.79c1.44 2.83 3.76 5.15 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                    </svg>
                    <span className="font-mono">+45 40 48 64 80</span>
                  </a>
                </li>
                <li>
                  <a href="mailto:info@mtrabat.dk" className="flex items-start gap-3 text-gray-400 hover:text-primary transition-colors group">
                    <svg className="w-5 h-5 text-primary mt-0.5 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                    </svg>
                    <span>info@mtrabat.dk</span>
                  </a>
                </li>
                <li className="flex items-start gap-3 text-gray-400">
                  <svg className="w-5 h-5 text-primary mt-0.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                  <div>
                    <p>Kollund byvej 45</p>
                    <p>7400 Herning</p>
                    <p>Danmark</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Navigation */}
            <div>
              <h4 className="font-display text-lg text-white uppercase tracking-wider mb-6 flex items-center">
                <span className="w-8 h-0.5 bg-primary mr-3" />
                Navigation
              </h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link href="/" className="text-gray-400 hover:text-white transition-colors flex items-center group">
                    <svg className="w-4 h-4 mr-2 text-primary opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    Forside
                  </Link>
                </li>
                <li>
                  <Link href="/ydelser" className="text-gray-400 hover:text-white transition-colors flex items-center group">
                    <svg className="w-4 h-4 mr-2 text-primary opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    Ydelser
                  </Link>
                </li>
                <li>
                  <Link href="/kompetencer" className="text-gray-400 hover:text-white transition-colors flex items-center group">
                    <svg className="w-4 h-4 mr-2 text-primary opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    Kompetencer
                  </Link>
                </li>
                <li>
                  <Link href="/om-os" className="text-gray-400 hover:text-white transition-colors flex items-center group">
                    <svg className="w-4 h-4 mr-2 text-primary opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    Om os
                  </Link>
                </li>
                <li>
                  <Link href="/kontakt" className="text-gray-400 hover:text-white transition-colors flex items-center group">
                    <svg className="w-4 h-4 mr-2 text-primary opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    Kontakt
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800">
          <div className="container py-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-gray-500 text-sm">
                © MT Rabat {new Date().getFullYear()}. Alle rettigheder forbeholdes.
              </p>
              <p className="text-gray-600 text-xs">
                CVR: 12345678
              </p>
            </div>
          </div>
        </div>

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-grid-overlay pointer-events-none opacity-50" />
      </div>
    </footer>
  );
}
