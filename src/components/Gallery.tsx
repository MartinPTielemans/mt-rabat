"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { useGalleryImages } from "@/hooks/useGalleryImages";

type ImageFile = {
  id: string;
  name: string;
  key: string;
  url?: string;
  size: number;
  uploadedAt: number;
};

export default function Gallery() {
  const [loadedImages, setLoadedImages] = useState<Record<string, boolean>>({});
  const [selectedImage, setSelectedImage] = useState<ImageFile | null>(null);
  const {
    data: images,
    isLoading,
    error,
    isError,
    refetch,
  } = useGalleryImages();

  const handleImageLoad = (imageId: string) => {
    setLoadedImages((prev) => ({
      ...prev,
      [imageId]: true,
    }));
  };

  const openModal = (image: ImageFile) => {
    setSelectedImage(image);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = "auto";
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-[50vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (isError || error) {
    return (
      <div className="text-center py-10">
        <p className="text-red-500 mb-4">
          Kunne ikke indlæse billeder. Prøv venligst igen senere.
        </p>
        <button
          onClick={() => refetch()}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
        >
          Prøv igen
        </button>
      </div>
    );
  }

  if (!images || images.length === 0) {
    return (
      <div className="text-center py-10">
        <p className="mb-4">Ingen billeder fundet.</p>
        <button
          onClick={() => refetch()}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
        >
          Opdater galleri
        </button>
      </div>
    );
  }

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((image: ImageFile, index: number) => (
          <motion.div
            key={image.id}
            className="overflow-hidden rounded-lg shadow-lg cursor-pointer relative aspect-square"
            onClick={() => openModal(image)}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: loadedImages[image.id] ? 1 : 0.3, y: 0 }}
            transition={{ duration: 0.3 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {!loadedImages[image.id] && (
              <div className="absolute inset-0 flex justify-center items-center">
                <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
              </div>
            )}
            <div className="relative aspect-square">
              <Image
                src={image.url || ""}
                alt={image.name || "Galleri billede"}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                onLoad={() => handleImageLoad(image.id)}
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
