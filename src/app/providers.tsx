"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState, ReactNode } from "react";

export function Providers({ children }: { children: ReactNode }) {
  // Create a client for each session
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 0, // Consider data stale immediately
            gcTime: 1000 * 60 * 60, // 1 hour (previously called cacheTime)
            refetchOnWindowFocus: true, // Refetch when window regains focus
            refetchOnMount: "always", // Always refetch when component mounts
            retry: 3, // Retry failed requests 3 times
          },
        },
      })
  );

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
