"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { toast } from "sonner";
import { GalleryImage } from "@/db";
import { useUploadThing } from "@/components/uploadthing";

type UploadResult = {
  name: string;
  size: number;
  key: string;
  url: string;
};

export default function GalleryAdminPage() {
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [loading, setLoading] = useState(true);

  const { startUpload, isUploading } = useUploadThing("galleryUploader");

  // Fetch all gallery images
  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch("/api/galleri", {
          cache: "no-store",
        });

        if (!response.ok) {
          throw new Error("Failed to fetch images");
        }

        const data = await response.json();
        setImages(data.images || []);
      } catch (error) {
        console.error("Error fetching images:", error);
        toast.error("Kunne ikke hente billeder");
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, []);

  // Direct file upload handler
  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files.length === 0) return;

    try {
      console.log("Starting upload with files:", e.target.files.length);
      const uploadedFiles = await startUpload(Array.from(e.target.files));
      console.log("Upload completed with result:", uploadedFiles);

      if (!uploadedFiles || uploadedFiles.length === 0) {
        throw new Error("Fejl under upload af billeder");
      }

      // Process uploaded files
      await handleUploadComplete(uploadedFiles as unknown as UploadResult[]);
    } catch (error) {
      console.error("Upload error:", error);
      toast.error("Fejl under upload af billeder");
    }
  };

  // Handle uploaded files
  const handleUploadComplete = async (uploadedFiles: UploadResult[]) => {
    try {
      // Save each uploaded image to the database
      const newImages = await Promise.all(
        uploadedFiles.map(async (file) => {
          const response = await fetch("/api/galleri", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              name: file.name,
              url: file.url,
              key: file.key,
              size: file.size.toString(),
            }),
          });

          if (!response.ok) {
            throw new Error(`Failed to save image: ${file.name}`);
          }

          const data = await response.json();
          return data.image;
        })
      );

      toast.success(`${newImages.length} billede(r) uploadet med succes`);
      setImages((prev) => [...newImages, ...prev]);
    } catch (error) {
      console.error("Upload error:", error);
      toast.error("Fejl under upload af billeder");
    }
  };

  // Delete gallery image
  const handleDelete = async (id: string) => {
    if (!confirm("Er du sikker på, at du vil slette dette billede?")) {
      return;
    }

    try {
      const response = await fetch(`/api/galleri?id=${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Failed to delete image");
      }

      toast.success("Billede slettet med succes");
      setImages(images.filter((image) => image.id !== id));
    } catch (error) {
      console.error("Error deleting image:", error);
      toast.error("Kunne ikke slette billede");
    }
  };

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Galleri Administration</h1>
        <Link
          href="/admin"
          className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 transition-colors"
        >
          Tilbage til admin
        </Link>
      </div>

      {/* Upload images form */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4">Upload billeder</h2>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">
              Vælg billeder (op til 100)
            </label>

            <input
              type="file"
              accept="image/*"
              multiple
              onChange={handleImageUpload}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              disabled={isUploading}
            />
            {isUploading && (
              <p className="text-blue-500 mt-1">Uploader billeder...</p>
            )}
          </div>

          <p className="text-sm text-gray-500">
            Du kan uploade op til 100 billeder ad gangen. Hvert billede må max
            være 4MB.
          </p>
        </div>
      </div>

      {/* Gallery images list */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4">Galleri billeder</h2>

        {loading ? (
          <div className="text-center py-8">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mx-auto"></div>
            <p className="mt-2">Indlæser billeder...</p>
          </div>
        ) : images.length === 0 ? (
          <p className="text-center py-8 text-gray-500">
            Ingen billeder fundet.
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {images.map((image) => (
              <div key={image.id} className="relative group">
                <div className="aspect-square overflow-hidden rounded-lg shadow-md">
                  <Image
                    src={image.url}
                    alt={image.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                  />
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <button
                    onClick={() => handleDelete(image.id)}
                    className="px-3 py-1 bg-red-500 text-white text-sm rounded hover:bg-red-600 transition-colors"
                  >
                    Slet
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
