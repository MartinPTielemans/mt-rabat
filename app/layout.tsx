import "./globals.css";

import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "sonner";

import { Footer } from "@/app/components/Footer";
import Header from "@/app/components/Header";

export const metadata: Metadata = {
  metadataBase: new URL('https://mtrabat.dk'),
  title: {
    template: "%s | MT Rabat - Vejservice Danmark",
    default: "MT Rabat - Professionel Vejservice og Rabatfræsning i Danmark",
  },
  description: "MT Rabat tilbyder professionel vejservice, rabatfræsning og afvandingssystemer i Danmark. Marcel Tielemans' specialiserede rabatbiler sikrer vejenes holdbarhed med moderne udstyr og mange års erfaring.",
  keywords: [
    "vejservice",
    "rabatfræsning", 
    "afvandingssystemer",
    "vejvedligeholdelse",
    "rabatbiler",
    "kantforstærkning",
    "asfalt",
    "infrastruktur",
    "anlægsarbejde",
    "Marcel Tielemans",
    "Danmark",
    "Sjælland",
    "København",
    "vejreparation",
    "BSM fræsning"
  ],
  authors: [{ name: "MT Rabat" }],
  creator: "MT Rabat",
  publisher: "MT Rabat",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "da_DK",
    url: "https://mtrabat.dk",
    siteName: "MT Rabat",
    title: "MT Rabat - Professionel Vejservice og Rabatfræsning i Danmark",
    description: "MT Rabat tilbyder professionel vejservice, rabatfræsning og afvandingssystemer i Danmark. Specialiserede rabatbiler med moderne udstyr og mange års erfaring.",
    images: [
      {
        url: "/images/Kantfyld ramper E 45.jpg",
        width: 1200,
        height: 630,
        alt: "MT Rabat rabatfræsning på E45 motorvejen - professionel vejservice",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MT Rabat - Professionel Vejservice Danmark",
    description: "Specialiseret vejservice, rabatfræsning og afvandingssystemer med moderne udstyr.",
    images: ["/images/Kantfyld ramper E 45.jpg"],
  },
  alternates: {
    canonical: "https://mtrabat.dk",
  },
};

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://mtrabat.dk",
    "name": "MT Rabat",
    "alternateName": "Marcel Tielemans Rabat",
    "description": "Professionel vejservice og rabatfræsning i Danmark. Specialiserede rabatbiler med moderne udstyr til vejvedligeholdelse og afvandingssystemer.",
    "url": "https://mtrabat.dk",
    "telephone": "+45-XX-XX-XX-XX",
    "email": "info@mtrabat.dk",
    "founder": {
      "@type": "Person",
      "name": "Marcel Tielemans"
    },
    "areaServed": [
      {
        "@type": "State",
        "name": "Danmark"
      },
      {
        "@type": "City", 
        "name": "København"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Sjælland"
      }
    ],
    "serviceType": [
      "Vejservice",
      "Rabatfræsning", 
      "Afvandingssystemer",
      "Vejvedligeholdelse",
      "Kantforstærkning",
      "Anlægsarbejde",
      "Infrastrukturopgaver",
      "Asfaltarbejde"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Vejservice Ydelser",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Vejservice",
            "description": "Specialiseret vejservice med fokus på rabatvedligeholdelse og afvandingssystemer"
          }
        },
        {
          "@type": "Offer", 
          "itemOffered": {
            "@type": "Service",
            "name": "Anlægsarbejde",
            "description": "Traditionelle anlægsopgaver med fokus på kvalitet og præcision"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service", 
            "name": "Infrastrukturopgaver",
            "description": "Komplekse infrastrukturprojekter med specialiseret udstyr"
          }
        }
      ]
    },
    "image": "https://mtrabat.dk/images/Kantfyld ramper E 45.jpg",
    "logo": "https://mtrabat.dk/logo/Mt Rabat.png",
    "sameAs": [],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5",
      "ratingCount": "50"
    }
  };

  return (
    <html lang="da" className={`${inter.variable} bg-white text-black`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body>
        <div className="min-h-screen">
          <Toaster />
          <Header />
          <main className="w-full pt-24">{children}</main>
          <Footer />
        </div>
        <SpeedInsights />
      </body>
    </html>
  );
}