export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container">
        <div className="py-12">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold mb-4">MT Rabat</h3>
              <p className="text-gray-300 mb-4 max-w-md">
                Professionel maskinstation og entreprenørarbejde med over 10 års erfaring. 
                Vi leverer kvalitetsarbejde inden for jordarbejde, transport og maskinudlejning.
              </p>
              <div className="flex gap-4">
                <a
                  href="tel:+45XXXXXXXX"
                  className="text-gray-300 hover:text-white transition-colors"
                  aria-label="Ring til os"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.15 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                  </svg>
                </a>
                <a
                  href="mailto:info@mtrabat.dk"
                  className="text-gray-300 hover:text-white transition-colors"
                  aria-label="Send email"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Hurtige links</h4>
              <ul className="space-y-2">
                <li>
                  <a href="/" className="text-gray-300 hover:text-white transition-colors">
                    Hjem
                  </a>
                </li>
                <li>
                  <a href="/galleri" className="text-gray-300 hover:text-white transition-colors">
                    Galleri
                  </a>
                </li>
                <li>
                  <a href="/blog" className="text-gray-300 hover:text-white transition-colors">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="/kontakt" className="text-gray-300 hover:text-white transition-colors">
                    Kontakt
                  </a>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2">
                <li>
                  <span className="text-gray-300">Jordarbejde</span>
                </li>
                <li>
                  <span className="text-gray-300">Transport</span>
                </li>
                <li>
                  <span className="text-gray-300">Maskinudlejning</span>
                </li>
                <li>
                  <span className="text-gray-300">Entreprenørarbejde</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} MT Rabat. Alle rettigheder forbeholdes.
            </p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="/privatlivspolitik" className="text-gray-400 hover:text-white text-sm transition-colors">
                Privatlivspolitik
              </a>
              <a href="/handelsbetingelser" className="text-gray-400 hover:text-white text-sm transition-colors">
                Handelsbetingelser
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
