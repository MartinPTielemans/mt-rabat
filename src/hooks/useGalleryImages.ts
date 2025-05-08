import { useQuery } from '@tanstack/react-query';

type ImageFile = {
  id: string;
  name: string;
  key: string;
  url?: string;
  size: number;
  uploadedAt: number;
};

// Function to fetch gallery images
async function fetchGalleryImages() {
  try {
    const response = await fetch('/api/galleri');
    
    if (!response.ok) {
      const errorData = await response.json().catch(() => null);
      throw new Error(
        errorData?.error || `Server error: ${response.status}`
      );
    }
    
    const data = await response.json();
    
    if (!data.images || !Array.isArray(data.images)) {
      throw new Error('Invalid response format');
    }
    
    // Add URL property to each image
    return data.images.map((img: ImageFile) => ({
      ...img,
      url: `https://utfs.io/f/${img.key.split('/').pop()}`,
    }));
  } catch (error) {
    console.error('Error fetching gallery images:', error);
    throw error;
  }
}

// Hook that uses TanStack Query to fetch and cache gallery images
export function useGalleryImages() {
  return useQuery({
    queryKey: ['galleryImages'],
    queryFn: fetchGalleryImages,
    staleTime: 1000 * 60 * 5, // 5 minutes
    gcTime: 1000 * 60 * 60, // 1 hour
  });
}

// Helper hook to prefetch gallery images on hover/focus
export function usePrefetchGalleryImages() {
  // This function can be called when hovering over gallery links
  const prefetchImages = async () => {
    // Create new Image objects to preload the first 12 images
    const prefetchFirstBatch = (images: ImageFile[]) => {
      const imagesToPreload = images.slice(0, 12);
      
      imagesToPreload.forEach((image: ImageFile) => {
        if (image.url) {
          const img = new window.Image();
          img.src = image.url;
        }
      });
    };

    try {
      // Fetch the images data
      const images = await fetchGalleryImages();
      prefetchFirstBatch(images);
      return true;
    } catch (error) {
      console.error('Error prefetching gallery images:', error);
      return false;
    }
  };

  return { prefetchImages };
} 