import Link from "next/link";
import Image from "next/image";
import { IconComponent } from "@/app/components/IconComponent";
import { galleryPageData } from "@/app/data/staticContent";

// Gallery image component
function GalleryImage({ 
  image, 
  onImageClick 
}: { 
  image: typeof galleryPageData.images[0]; 
  onImageClick?: () => void; 
}) {
  return (
    <div className="group cursor-pointer" onClick={onImageClick}>
      <div className="relative aspect-square bg-gray-200 rounded-lg overflow-hidden">
        <Image
          src={image.image.asset.url}
          alt={image.image.alt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        
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

// Main gallery page component
export default function GalleriPage() {
  const data = galleryPageData;

  return (
    <main className="py-20">
      <div className="container">
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
          {data.categories.map((category, index) => (
            <button 
              key={category.slug}
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
          {data.images.map((image, index) => (
            <GalleryImage key={index} image={image} />
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
            {data.loadMoreText}
          </button>
        </div>

        {/* Call to Action */}
        <div className="bg-gray-50 rounded-lg p-8 mt-16 text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            {data.callToAction.title}
          </h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            {data.callToAction.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/kontakt"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              {data.callToAction.primaryButtonText}
            </Link>
            <a
              href={`tel:${data.callToAction.phoneNumber}`}
              className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              {data.callToAction.secondaryButtonText}
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}