import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { IconComponent } from "@/app/components/IconComponent";
import { FadeInUp, StaggerContainer, StaggerItem } from "@/app/components/motion";

export const metadata: Metadata = {
  title: "Galleri - Før og Efter Billeder af Vejservice Projekter",
  description: "Se MT Rabats vejservice projekter - før og efter billeder af rabatfræsning, afvanding og kantforstærkning. Professionelle resultater og kvalitetsarbejde.",
  keywords: [
    "vejservice galleri",
    "før efter billeder",
    "rabatfræsning billeder",
    "afvanding projekter",
    "kantforstærkning eksempler",
    "vejservice resultater",
    "MT Rabat arbejde",
    "vejvedligeholdelse galleri"
  ],
  openGraph: {
    title: "Galleri - Se MT Rabats Vejservice Projekter",
    description: "Imponerende før og efter billeder af vores vejservice projekter. Fra rabatfræsning til afvanding - se kvaliteten af vores arbejde.",
    url: "https://mtrabat.dk/galleri",
    images: [
      {
        url: "/images/afvanding/afvanding efter.jpg",
        width: 1200,
        height: 630,
        alt: "MT Rabat galleri - professionel afvanding efter behandling",
      },
    ],
  },
  alternates: {
    canonical: "https://mtrabat.dk/galleri",
  },
};



const images = [
  {
    url: "/images/afvanding/afvanding før.jpg",
    alt: "Afvanding før behandling",
    title: "Afvanding - Før",
    description: "Vejrabat før afvandingsarbejde",
    category: "afvanding",
  },
  {
    url: "/images/afvanding/afvanding efter.jpg",
    alt: "Afvanding efter behandling",
    title: "Afvanding - Efter",
    description: "Vejrabat efter professionel afvandingsbehandling",
    category: "afvanding",
  },
  {
    url: "/images/rabatfræsning/rabat fræsning før.jpg",
    alt: "Rabatfræsning før behandling",
    title: "Rabatfræsning - Før",
    description: "Vejrabat før fræsning",
    category: "rabatfræsning",
  },
  {
    url: "/images/rabatfræsning/rabat fræsning efter.jpg",
    alt: "Rabatfræsning efter behandling",
    title: "Rabatfræsning - Efter",
    description: "Vejrabat efter professionel fræsning",
    category: "rabatfræsning",
  },
  {
    url: "/images/kantforstærkning/kantforstærkning før.jpg",
    alt: "Kantforstærkning før behandling",
    title: "Kantforstærkning - Før",
    description: "Vejkant før forstærkning",
    category: "kantforstærkning",
  },
  {
    url: "/images/kantforstærkning/kantforstærkning efter.jpg",
    alt: "Kantforstærkning efter behandling",
    title: "Kantforstærkning - Efter",
    description: "Vejkant efter professionel forstærkning",
    category: "kantforstærkning",
  }
];

function GalleryImage({ image }: { image: typeof images[0] }) {
  return (
    <div className="group cursor-pointer">
      <div className="relative aspect-square bg-charcoal overflow-hidden border-l-4 border-l-primary shadow-industrial group-hover:shadow-industrial-hover transition-all duration-300">
        <Image
          src={image.url}
          alt={image.alt}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/80 transition-all duration-300 flex items-center justify-center">
          <div className="text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
            <div 
              className="w-16 h-16 bg-primary flex items-center justify-center mx-auto mb-4"
              style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}
            >
              <IconComponent name="search" className="w-8 h-8" />
            </div>
            <p className="font-display text-lg uppercase tracking-wide">Se detaljer</p>
          </div>
        </div>
      </div>
      
      <div className="mt-4">
        <h3 className="font-display text-lg uppercase tracking-wide text-charcoal">{image.title}</h3>
        <p className="text-sm text-gray-600 mt-1">{image.description}</p>
      </div>
    </div>
  );
}

export default function GalleriPage() {
  return (
    <main className="relative">
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-charcoal text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-overlay pointer-events-none" />
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <FadeInUp>
              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl uppercase tracking-wide mb-6">
                Galleri
              </h1>
              <div className="w-24 h-1 bg-primary mx-auto mb-8" />
              <p className="text-xl text-gray-400 leading-relaxed max-w-3xl mx-auto">
                Se eksempler på vores arbejde og projekter
              </p>
            </FadeInUp>
          </div>
        </div>
        
        {/* Diagonal separator */}
        <div 
          className="absolute bottom-0 left-0 right-0 h-20 bg-white"
          style={{ clipPath: 'polygon(0 100%, 100% 100%, 100% 0)' }}
        />
      </section>

      {/* Filter Tabs */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="container">
          <div className="flex flex-wrap justify-center gap-2">
            <button 
              className="px-6 py-3 font-display uppercase tracking-wider transition-all duration-300 bg-primary text-white"
              style={{ clipPath: 'polygon(0 0, 100% 0, 95% 100%, 5% 100%)' }}
            >
              Alle
            </button>
            <button 
              className="px-6 py-3 font-display uppercase tracking-wider transition-all duration-300 bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-charcoal"
            >
              Afvanding
            </button>
            <button 
              className="px-6 py-3 font-display uppercase tracking-wider transition-all duration-300 bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-charcoal"
            >
              Rabatfræsning
            </button>
            <button 
              className="px-6 py-3 font-display uppercase tracking-wider transition-all duration-300 bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-charcoal"
            >
              Kantforstærkning
            </button>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 bg-white relative">
        <div className="absolute inset-0 bg-diagonal-stripes pointer-events-none" />
        
        <div className="container relative z-10">
          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {images.map((image, index) => (
              <StaggerItem key={index}>
                <GalleryImage image={image} />
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* Load More Button */}
          <FadeInUp className="text-center mt-12">
            <button 
              className="inline-flex items-center bg-charcoal hover:bg-charcoal-light text-white px-10 py-4 font-display text-lg uppercase tracking-wider transition-all duration-300 group"
              style={{ clipPath: 'polygon(0 0, 100% 0, 97% 100%, 3% 100%)' }}
            >
              Indlæs flere billeder
              <svg 
                className="w-5 h-5 ml-3 transform group-hover:translate-y-1 transition-transform" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </button>
          </FadeInUp>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-charcoal text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-overlay pointer-events-none" />
        
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <FadeInUp>
              <h2 className="font-display text-4xl md:text-5xl uppercase tracking-wide mb-6">
                Interesseret i vores arbejde?
              </h2>
              <div className="w-24 h-1 bg-primary mx-auto mb-8" />
              <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
                Kontakt os for at høre mere om hvordan vi kan hjælpe dig
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/kontakt"
                  className="inline-flex items-center justify-center bg-primary hover:bg-primary-dark text-white px-10 py-5 font-display text-xl uppercase tracking-wider transition-all duration-300 group"
                  style={{ clipPath: 'polygon(0 0, 100% 0, 95% 100%, 0% 100%)' }}
                >
                  <span>Kontakt os</span>
                  <svg 
                    className="w-5 h-5 ml-3 transform group-hover:translate-x-2 transition-transform" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <a
                  href="tel:+4540486480"
                  className="inline-flex items-center justify-center border-2 border-gray-600 hover:border-primary text-gray-300 hover:text-primary px-10 py-5 font-display text-xl uppercase tracking-wider transition-all duration-300"
                >
                  <svg className="w-5 h-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Ring nu
                </a>
              </div>
            </FadeInUp>
          </div>
        </div>
      </section>
    </main>
  );
}
