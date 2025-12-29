import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Under opbygning - MT Rabat Vejservice",
  description: "Vores hjemmeside er under opbygning. Kontakt os på telefon eller email.",
};

export default function UnderConstructionPage() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* Background - same as hero */}
      <div className="absolute inset-0 w-full h-full">
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center"
          style={{ backgroundImage: 'url("/images/Kantfyld ramper E 45.jpg")' }}
        />
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/85 via-charcoal/75 to-charcoal/90" />
        {/* Noise texture */}
        <div className="absolute inset-0 opacity-20 mix-blend-overlay noise-overlay" />
      </div>

      {/* Side accent elements */}
      <div className="absolute top-1/4 left-0 w-1 h-32 bg-primary hidden lg:block" />
      <div className="absolute top-1/3 left-4 w-16 h-0.5 bg-primary/50 hidden lg:block" />
      <div className="absolute bottom-1/3 right-0 w-1 h-24 bg-accent hidden lg:block" />

      {/* Diagonal accent at bottom */}
      <div
        className="absolute bottom-0 left-0 right-0 h-24 bg-charcoal"
        style={{ clipPath: 'polygon(0 100%, 100% 100%, 100% 0)' }}
      />

      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center py-12 px-4">
        <div className="max-w-2xl mx-auto text-center text-white bg-charcoal/60 backdrop-blur-sm p-8 md:p-12 border border-gray-700/50">
          {/* Logo */}
          <div className="mb-8">
            <Image
              src="/logo/Mt Rabat.png"
              alt="MT Rabat logo"
              width={200}
              height={80}
              className="mx-auto"
              priority
            />
          </div>

          {/* Under Construction Badge */}
          <div className="mb-8">
            <div className="inline-flex items-center gap-3 bg-primary/20 border border-primary/40 px-6 py-3">
              <div className="w-3 h-3 bg-primary rounded-full animate-pulse" />
              <span className="font-display text-lg uppercase tracking-wider">Under opbygning</span>
            </div>
          </div>

          {/* Message */}
          <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed">
            Vores nye hjemmeside er på vej. I mellemtiden er du velkommen til at kontakte os.
          </p>

          {/* Accent bar */}
          <div className="w-24 h-1 bg-primary mx-auto mb-12" />

          {/* Contact Information */}
          <div className="bg-charcoal/50 border border-gray-600 p-8 md:p-10">
            <h2 className="font-display text-2xl uppercase tracking-wide mb-8">
              Kontakt os
            </h2>

            <div className="space-y-6">
              {/* Phone */}
              <a
                href="tel:+4540486480"
                className="flex items-center justify-center gap-3 md:gap-4 group"
              >
                <div
                  className="w-10 h-10 md:w-12 md:h-12 bg-primary flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform"
                  style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}
                >
                  <svg className="w-4 h-4 md:w-5 md:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <span className="text-lg md:text-2xl font-mono text-primary group-hover:text-primary-light transition-colors">
                  +45 40 48 64 80
                </span>
              </a>

              {/* Email */}
              <a
                href="mailto:info@mtrabat.dk"
                className="flex items-center justify-center gap-3 md:gap-4 group"
              >
                <div
                  className="w-10 h-10 md:w-12 md:h-12 bg-primary flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform"
                  style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}
                >
                  <svg className="w-4 h-4 md:w-5 md:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <span className="text-base md:text-xl text-primary group-hover:text-primary-light transition-colors">
                  info@mtrabat.dk
                </span>
              </a>

              {/* Address */}
              <div className="pt-4 border-t border-gray-700">
                <p className="text-gray-400">
                  Kollund Byvej 45<br />
                  7400 Herning
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
