import { useQuery } from '@tanstack/react-query';

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
    
    return data.images;
  } catch (error) {
    console.error('Error fetching gallery images:', error);
    throw error;
  }
}

// Hook to fetch gallery images with react-query
export function useGalleryImages() {
  return useQuery({
    queryKey: ['gallery-images'],
    queryFn: fetchGalleryImages,
    refetchOnWindowFocus: false,
    staleTime: 1000 * 60 * 5, // 5 minutes
  });
}
