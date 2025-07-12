import Link from "next/link";
import type { Metadata } from "next";
import { IconComponent } from "@/app/components/IconComponent";
import { servicesPageData } from "@/app/data/staticContent";

export const metadata: Metadata = {
  title: "Ydelser - Vejservice, Rabatfræsning og Anlægsarbejde",
  description: "MT Rabat tilbyder professionelle ydelser inden for vejservice, traditionelle anlægsopgaver, store infrastrukturopgaver og asfaltarbejde. Kontakt os for et tilbud.",
  keywords: [
    "vejservice ydelser",
    "rabatfræsning service",
    "anlægsarbejde Danmark",
    "infrastrukturopgaver",
    "asfaltarbejde",
    "vejbyggeri",
    "BSM fræsning",
    "afvandingssystemer",
    "kantforstærkning"
  ],
  openGraph: {
    title: "Ydelser - Komplet Vejservice og Anlægsarbejde",
    description: "Professionelle løsninger inden for vejservice, anlægsarbejde og infrastruktur. Fra rabatfræsning til store vejbyggeriprojekter.",
    url: "https://mtrabat.dk/ydelser",
    images: [
      {
        url: "/images/rabatfræsning/rabat fræsning efter.jpg",
        width: 1200,
        height: 630,
        alt: "MT Rabat ydelser - professionel rabatfræsning og vejservice",
      },
    ],
  },
  alternates: {
    canonical: "https://mtrabat.dk/ydelser",
  },
};

// Service card component
function ServiceCard({ service }: { service: typeof servicesPageData.services[0] }) {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg border">
      <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
        <IconComponent name={service.icon} className="w-8 h-8 text-white" />
      </div>
      <h2 className="text-2xl font-bold mb-4 text-center">{service.title}</h2>
      <p className="text-gray-600 mb-6 leading-relaxed">
        {service.description}
      </p>
      <ul className="space-y-2 text-gray-600">
        {service.features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <IconComponent name="check" className="w-5 h-5 text-blue-600 mt-0.5 mr-2 flex-shrink-0" />
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
}

// Main services page component
export default function YdelserPage() {
  const data = servicesPageData;

  return (
    <main className="py-20">
      <div className="container">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-8 text-center">
            {data.title}
          </h1>
          
          <p className="text-xl text-gray-600 mb-16 text-center max-w-4xl mx-auto leading-relaxed">
            {data.description}
          </p>

          <div className="grid md:grid-cols-2 gap-12 mb-20">
            {data.services.map((service, index) => (
              <ServiceCard key={index} service={service} />
            ))}
          </div>

          {/* Call to Action */}
          <div className="bg-blue-600 text-white p-12 rounded-lg text-center">
            <h2 className="text-3xl font-bold mb-4">
              {data.callToAction.title}
            </h2>
            <p className="text-xl mb-8 opacity-90">
              {data.callToAction.description}
            </p>
            <Link
              href={data.callToAction.buttonLink}
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors inline-block"
            >
              {data.callToAction.buttonText}
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}