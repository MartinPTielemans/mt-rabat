import { Suspense } from "react";
import Link from "next/link";
import { ErrorBoundary } from "@/app/components/ErrorBoundary";
import { IconComponent } from "@/app/components/IconComponent";
import { servicesPageQuery } from "@/sanity/lib/queries";
import { safeSanityFetch } from "@/sanity/lib/safeDataFetching";
import { 
  validateServicesPage, 
  defaultServicesPageData,
  type ValidatedServicesPage,
  type ValidatedService
} from "@/utils/contentValidation";

// Service card component with proper type safety
function ServiceCard({ service }: { service: ValidatedService }) {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg border">
      <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
        <IconComponent name={service.icon} className="w-8 h-8 text-white" />
      </div>
      <h2 className="text-2xl font-bold mb-4 text-center">{service.title}</h2>
      <p className="text-gray-600 mb-6 leading-relaxed">
        {service.description}
      </p>
      {service.features && service.features.length > 0 && (
        <ul className="space-y-2 text-gray-600">
          {service.features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <IconComponent name="check" className="w-5 h-5 text-blue-600 mt-0.5 mr-2 flex-shrink-0" />
              {feature}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

// Services content component
function ServicesContent({ data }: { data: ValidatedServicesPage }) {
  const services = data.services || defaultServicesPageData.services!;
  const callToAction = data.callToAction || defaultServicesPageData.callToAction!;

  return (
    <>
      <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-8 text-center">
        {data.title}
      </h1>
      
      <p className="text-xl text-gray-600 mb-16 text-center max-w-4xl mx-auto leading-relaxed">
        {data.description}
      </p>

      <div className="grid md:grid-cols-2 gap-12 mb-20">
        {services.map((service, index) => (
          <ErrorBoundary key={index} context={`Service: ${service.title}`}>
            <ServiceCard service={service} />
          </ErrorBoundary>
        ))}
      </div>

      {/* Call to Action */}
      <div className="bg-blue-600 text-white p-12 rounded-lg text-center">
        <h2 className="text-3xl font-bold mb-4">
          {callToAction.title}
        </h2>
        <p className="text-xl mb-8 opacity-90">
          {callToAction.description}
        </p>
        <Link
          href={callToAction.buttonLink || "/kontakt"}
          className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors inline-block"
        >
          {callToAction.buttonText || "Få et tilbud"}
        </Link>
      </div>
    </>
  );
}

// Loading component
function ServicesLoading() {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <div className="h-12 bg-gray-200 rounded mb-8 max-w-md mx-auto animate-pulse"></div>
        <div className="h-6 bg-gray-200 rounded max-w-2xl mx-auto animate-pulse"></div>
      </div>
      <div className="grid md:grid-cols-2 gap-12 mb-20">
        {Array.from({ length: 4 }).map((_, index) => (
          <div key={index} className="bg-white p-8 rounded-lg shadow-lg border animate-pulse">
            <div className="w-16 h-16 bg-gray-200 rounded-full mx-auto mb-6"></div>
            <div className="h-6 bg-gray-200 rounded mb-4 max-w-40 mx-auto"></div>
            <div className="space-y-2 mb-6">
              <div className="h-4 bg-gray-200 rounded"></div>
              <div className="h-4 bg-gray-200 rounded w-5/6"></div>
              <div className="h-4 bg-gray-200 rounded w-4/6"></div>
            </div>
            <div className="space-y-2">
              {Array.from({ length: 3 }).map((_, i) => (
                <div key={i} className="h-4 bg-gray-200 rounded w-3/4"></div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Main services page component
export default async function YdelserPage() {
  const result = await safeSanityFetch(
    servicesPageQuery,
    validateServicesPage,
    defaultServicesPageData
  );

  if (result.error) {
    console.error('Services page data fetch error:', result.error);
  }

  const servicesData = result.data || defaultServicesPageData;

  return (
    <main className="py-20">
      <div className="container">
        <div className="max-w-6xl mx-auto">
          <ErrorBoundary context="Services Page">
            <Suspense fallback={<ServicesLoading />}>
              <ServicesContent data={servicesData} />
            </Suspense>
          </ErrorBoundary>
        </div>
      </div>
    </main>
  );
} 