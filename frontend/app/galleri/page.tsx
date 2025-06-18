import { Suspense } from "react";
import Link from "next/link";
import Image from "next/image";
import { ErrorBoundary } from "@/app/components/ErrorBoundary";
import { IconComponent } from "@/app/components/IconComponent";
import { galleryPageQuery } from "@/sanity/lib/queries";
import { safeSanityFetch } from "@/sanity/lib/safeDataFetching";
import { 
  validateGalleryPage, 
  defaultGalleryPageData,
  type ValidatedGalleryPage,
  type ValidatedGalleryImage
} from "@/utils/contentValidation";

// Gallery image component with proper type safety
function GalleryImage({ 
  image, 
  onImageClick 
}: { 
  image: ValidatedGalleryImage; 
  onImageClick?: () => void; 
}) {
  return (
    <div className="group cursor-pointer" onClick={onImageClick}>
      <div className="relative aspect-square bg-gray-200 rounded-lg overflow-hidden">
        {image.image?.asset?.url ? (
          <Image
            src={image.image.asset.url}
            alt={image.alt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-600 opacity-20"></div>
        )}
        
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-300 flex items-center justify-center">
          <div className="text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <IconComponent name="search" className="w-12 h-12 mx-auto mb-2" />
            <p className="text-sm font-medium">Se større billede</p>
          </div>
        </div>
      </div>
      
      <div className="mt-4">
        <h3 className="font-semibold text-gray-800">{image.title}</h3>
        <p className="text-sm text-gray-600 mt-1">{image.description}</p>
      </div>
    </div>
  );
}

// Gallery content component
function GalleryContent({ data }: { data: ValidatedGalleryPage }) {
  const categories = data.categories || defaultGalleryPageData.categories!;
  const images = data.images || [];
  const callToAction = data.callToAction || defaultGalleryPageData.callToAction!;

  return (
    <>
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
          {data.title}
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          {data.description}
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {categories.map((category, index) => (
          <button 
            key={category.slug?.current || index}
            className={`px-6 py-2 rounded-full font-medium transition-colors ${
              index === 0 
                ? 'bg-blue-600 text-white hover:bg-blue-700' 
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            {category.name}
          </button>
        ))}
      </div>

      {/* Gallery Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.length > 0 ? (
          images.map((image, index) => (
            <ErrorBoundary key={index} context="Gallery Image">
              <GalleryImage image={image} />
            </ErrorBoundary>
          ))
        ) : (
          // Fallback placeholder images if no CMS images
          Array.from({ length: 12 }).map((_, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="relative aspect-square bg-gray-200 rounded-lg overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-600 opacity-20"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-gray-500">
                    <IconComponent name="image" className="w-16 h-16 mx-auto mb-4 text-gray-400" />
                    <p className="text-sm">Projekt billede {index + 1}</p>
                  </div>
                </div>
                
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-300 flex items-center justify-center">
                  <div className="text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <IconComponent name="search" className="w-12 h-12 mx-auto mb-2" />
                    <p className="text-sm font-medium">Se større billede</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-4">
                <h3 className="font-semibold text-gray-800">
                  {index % 4 === 0 ? 'Udgravning af byggegrunde' :
                   index % 4 === 1 ? 'Transport af byggematerialer' :
                   index % 4 === 2 ? 'Moderne gravemaskiner' :
                   'Færdigt anlægsprojekt'}
                </h3>
                <p className="text-sm text-gray-600 mt-1">
                  {index % 4 === 0 ? 'Professionel udgravning til nyt boligbyggeri' :
                   index % 4 === 1 ? 'Sikker transport af tunge materialer' :
                   index % 4 === 2 ? 'Vores moderne maskinpark' :
                   'Komplet anlægsprojekt fra start til slut'}
                </p>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Load More Button */}
      <div className="text-center mt-12">
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
          {data.loadMoreText || defaultGalleryPageData.loadMoreText}
        </button>
      </div>

      {/* Call to Action */}
      <div className="bg-gray-50 rounded-lg p-8 mt-16 text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          {callToAction.title}
        </h2>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          {callToAction.description}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/kontakt"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            {callToAction.primaryButtonText || "Kontakt os"}
          </Link>
          <a
            href={`tel:${callToAction.phoneNumber}`}
            className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            {callToAction.secondaryButtonText || "Ring nu"}
          </a>
        </div>
      </div>
    </>
  );
}

// Loading component
function GalleryLoading() {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <div className="h-12 bg-gray-200 rounded mb-6 max-w-md mx-auto animate-pulse"></div>
        <div className="h-6 bg-gray-200 rounded max-w-2xl mx-auto animate-pulse"></div>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.from({ length: 6 }).map((_, index) => (
          <div key={index} className="animate-pulse">
            <div className="aspect-square bg-gray-200 rounded-lg"></div>
            <div className="mt-4">
              <div className="h-5 bg-gray-200 rounded mb-2"></div>
              <div className="h-4 bg-gray-200 rounded w-3/4"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Main gallery page component
export default async function GalleriPage() {
  const result = await safeSanityFetch(
    galleryPageQuery,
    validateGalleryPage,
    defaultGalleryPageData
  );

  if (result.error) {
    console.error('Gallery page data fetch error:', result.error);
  }

  const galleryData = result.data || defaultGalleryPageData;

  return (
    <main className="py-20">
      <div className="container">
        <ErrorBoundary context="Gallery Page">
          <Suspense fallback={<GalleryLoading />}>
            <GalleryContent data={galleryData} />
          </Suspense>
        </ErrorBoundary>
      </div>
    </main>
  );
} 