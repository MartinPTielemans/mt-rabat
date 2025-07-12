import Link from "next/link";
import { IconComponent } from "@/app/components/IconComponent";
import { ServiceShowcaseTabs } from "@/app/components/ServiceShowcaseTabs";
import { homepageData } from "@/app/data/staticContent";

export default function Page() {
  // Use static data instead of CMS
  const {
    hero,
    mainContent,
    capabilities,
    contactSection,
  } = homepageData;

  return (
    <>
      {/* Hero Section */}
      <div className="relative w-screen ml-[calc(-50vw+50%)]">
        <div
          className="relative w-full bg-cover bg-center"
          style={{
            backgroundImage: `url("${hero.backgroundImage.asset.url}")`,
            aspectRatio: '162/35',
            minHeight: '70vh',
          }}
        >
          <div className="absolute inset-0 bg-black/45" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-center py-20">
            <div className="max-w-5xl text-center">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-6 tracking-tight leading-tight">
                {hero.title}
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white/90 mb-8 font-light leading-relaxed">
                {hero.subtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/kontakt"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-lg font-semibold text-lg transition-colors shadow-lg"
                >
                  {hero.primaryButtonText}
                </Link>
                <Link
                  href="#mere-info"
                  className="border-2 border-white hover:bg-white hover:text-gray-800 text-white px-10 py-4 rounded-lg font-semibold text-lg transition-colors backdrop-blur-sm"
                >
                  {hero.secondaryButtonText}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Section */}
      <div id="mere-info" className="py-20 bg-white">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-16 text-center">
              {mainContent.title}
            </h2>
            <p className="text-xl text-gray-600 mb-16 text-center max-w-4xl mx-auto leading-relaxed">
              {mainContent.description}
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
              {mainContent.features.map((feature, index) => (
                <div key={index} className="bg-gray-50 p-8 rounded-lg">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <IconComponent name={feature.icon} />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-center">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Capabilities Section */}
      <div className="py-20 bg-gray-50">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-16 text-center">
              {capabilities.title}
            </h2>
            <p className="text-xl text-gray-600 mb-16 text-center max-w-4xl mx-auto leading-relaxed">
              {capabilities.description}
            </p>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold mb-8">
                  {capabilities.leftColumn.title}
                </h3>
                <div className="prose prose-lg text-gray-600">
                  {capabilities.leftColumn.content.split('\n\n').map((paragraph, index) => (
                    <p key={index} className="text-lg text-gray-600 mb-6 leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="text-3xl font-bold mb-8">
                  {capabilities.rightColumn.title}
                </h3>
                <div>
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                    {capabilities.rightColumn.content}
                  </p>
                  <Link
                    href="/kompetencer"
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold text-lg"
                  >
                    Læs mere om vores kompetencer
                    <IconComponent name="arrow-right" className="w-5 h-5 ml-2 text-blue-600" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ServiceShowcaseTabs />

      {/* Contact Section */}
      <div className="py-20 bg-blue-600 text-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              {contactSection.title}
            </h2>
            <p className="text-xl mb-12 leading-relaxed">
              {contactSection.description}
            </p>
            <Link
              href="/kontakt"
              className="bg-white text-blue-600 hover:bg-gray-100 px-10 py-4 rounded-lg font-semibold text-lg transition-colors inline-block"
            >
              {contactSection.buttonText}
            </Link>
          </div>
        </div>
      </div>

    </>
  );
}