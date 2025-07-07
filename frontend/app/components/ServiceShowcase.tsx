import Image from 'next/image'
import Link from 'next/link'
import type { ServiceShowcaseData } from '@/app/data/services'

export function ServiceShowcase({ showcase }: { showcase: ServiceShowcaseData }) {
  if (!showcase) {
    return null
  }

  const { title, description, beforeImage, afterImage, slug } = showcase

  return (
    <div className="container mx-auto px-4">
      <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-8 text-center">{title}</h2>
      <p className="text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto">{description}</p>
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4">Før</h3>
          <Image
            src={beforeImage.src}
            alt={beforeImage.alt}
            width={400}
            height={300}
            className="rounded-lg shadow-lg mx-auto"
          />
        </div>
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4">Efter</h3>
          <Image
            src={afterImage.src}
            alt={afterImage.alt}
            width={400}
            height={300}
            className="rounded-lg shadow-lg mx-auto"
          />
        </div>
      </div>
    </div>
  )
} 