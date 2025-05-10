import { client, urlFor } from '@/lib/sanity'
import Image from 'next/image'

interface GalleryImage {
  _id: string
  images: {
    asset: {
      _ref: string
    }
  }[] | null
}

async function getGalleryImages() {
  const query = `*[_type == "gallery"] {
    _id,
    images
  }`
  return client.fetch<GalleryImage[]>(query)
}

export default async function Gallery() {
  const galleries = await getGalleryImages()

  if (!galleries || galleries.length === 0) {
    return <div className="p-4">No gallery images found.</div>
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {galleries.flatMap((gallery) =>
        gallery.images?.map((image, index) => (
          <div key={`${gallery._id}-${index}`} className="relative">
            <Image
              src={urlFor(image).url()}
              alt="Gallery image"
              fill
              className="object-contain rounded-lg"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        )) || []
      )}
    </div>
  )
} 