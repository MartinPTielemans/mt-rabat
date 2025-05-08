"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "motion/react";

type ImageFile = {
  id: string;
  name: string;
  key: string;
  url?: string;
  size: number;
  uploadedAt: number;
};

export default function Gallery() {
  const [images, setImages] = useState<ImageFile[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState<ImageFile | null>(null);

  useEffect(() => {
    async function fetchImages() {
      try {
        setLoading(true);
        const response = await fetch("/api/galleri");

        if (!response.ok) {
          throw new Error("Kunne ikke hente billeder");
        }

        const data = await response.json();

        // Add URL property to each image
        const imagesWithUrls = data.images.map((img: ImageFile) => ({
          ...img,
          url: `https://utfs.io/f/${img.key.split("/").pop()}`,
        }));

        setImages(imagesWithUrls);
      } catch (err) {
        console.error("Error fetching images:", err);
        setError("Kunne ikke indlæse billeder. Prøv venligst igen senere.");
      } finally {
        setLoading(false);
      }
    }

    fetchImages();
  }, []);

  const openModal = (image: ImageFile) => {
    setSelectedImage(image);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = "auto";
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[50vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-10">
        <p className="text-red-500">{error}</p>
      </div>
    );
  }

  if (images.length === 0) {
    return (
      <div className="text-center py-10">
        <p>Ingen billeder fundet. Upload venligst nogle billeder først.</p>
      </div>
    );
  }

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((image, index) => (
          <motion.div
            key={image.id}
            className="overflow-hidden rounded-lg shadow-lg cursor-pointer"
            onClick={() => openModal(image)}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="relative aspect-square">
              <Image
                src={image.url || ""}
                alt={image.name || "Galleri billede"}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                priority={index < 4}
              />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <div
            className="relative max-w-4xl max-h-[90vh] w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute -top-10 right-0 text-white text-2xl"
              aria-label="Luk modal"
            >
              &times;
            </button>
            <div className="relative w-full h-[80vh]">
              <Image
                src={selectedImage.url || ""}
                alt={selectedImage.name || "Valgt billede"}
                fill
                className="object-contain"
                sizes="100vw"
                priority
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
