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
    const response = await fetch('/api/galleri', {
      cache: 'no-store', // Don't cache the request at the fetch level
      next: { revalidate: 0 } // For Next.js - don't cache at the route level
    });
    
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
    staleTime: 5 * 60 * 1000, // 5 minutes - consider data fresh for 5 minutes
    gcTime: 10 * 60 * 1000, // 10 minutes - keep data in cache for 10 minutes
    refetchOnMount: true, // Refetch when component mounts if data is stale
    refetchOnWindowFocus: false, // Don't refetch when window regains focus
    retry: 2, // Retry failed requests 2 times
  });
}
