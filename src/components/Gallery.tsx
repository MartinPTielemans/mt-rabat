import { client, urlFor } from '@/lib/sanity'
import Image from 'next/image'

interface GalleryImage {
  _id: string
  image: {
    asset: {
      _ref: string
    }
  }
}

async function getGalleryImages() {
  const query = `*[_type == "gallery"] {
    _id,
    image
  }`
  return client.fetch<GalleryImage[]>(query)
}

export default async function Gallery() {
  const images = await getGalleryImages()

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {images.map((image) => (
        <div key={image._id} className="relative aspect-square">
          <Image
            src={urlFor(image.image).url()}
            alt="Gallery image"
            fill
            className="object-cover rounded-lg"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      ))}
    </div>
  )
} 