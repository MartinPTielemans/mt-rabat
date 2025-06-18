import { sanityFetch } from './live';
import { defineQuery } from 'next-sanity';

// Error types for better error handling
export interface DataFetchError {
  message: string;
  code: 'NETWORK_ERROR' | 'VALIDATION_ERROR' | 'UNKNOWN_ERROR';
  originalError?: Error;
}

export interface SafeFetchResult<T> {
  data: T | null;
  error: DataFetchError | null;
  isLoading: boolean;
}

/**
 * Safe data fetching with error handling and validation
 * @param query - GROQ query string
 * @param validator - Optional validation function
 * @param fallback - Fallback data to use if fetch fails
 * @returns SafeFetchResult with data, error, and loading state
 */
export async function safeSanityFetch<T>(
  queryStr: string,
  validator?: (data: unknown) => T | null,
  fallback?: T
): Promise<SafeFetchResult<T>> {
  try {
    const { data } = await sanityFetch({ query: queryStr });
    
    // If validator is provided, use it to validate the data
    if (validator) {
      const validatedData = validator(data);
      if (validatedData !== null) {
        return {
          data: validatedData,
          error: null,
          isLoading: false,
        };
      } else {
        // Validation failed, use fallback or return error
        if (fallback !== undefined) {
          return {
            data: fallback,
            error: {
              message: 'Data validation failed, using fallback',
              code: 'VALIDATION_ERROR',
            },
            isLoading: false,
          };
        } else {
          return {
            data: null,
            error: {
              message: 'Data validation failed and no fallback provided',
              code: 'VALIDATION_ERROR',
            },
            isLoading: false,
          };
        }
      }
    }
    
    // No validator, return data as-is (typed as T)
    return {
      data: data as T,
      error: null,
      isLoading: false,
    };
    
  } catch (error) {
    console.error('Sanity fetch error:', error);
    
    // Determine error type
    let errorCode: DataFetchError['code'] = 'UNKNOWN_ERROR';
    let errorMessage = 'En uventet fejl opstod ved indlæsning af indhold';
    
    if (error instanceof Error) {
      if (error.message.includes('network') || error.message.includes('fetch')) {
        errorCode = 'NETWORK_ERROR';
        errorMessage = 'Netværksfejl - kunne ikke hente indhold';
      }
    }
    
    return {
      data: fallback || null,
      error: {
        message: errorMessage,
        code: errorCode,
        originalError: error instanceof Error ? error : undefined,
      },
      isLoading: false,
    };
  }
}

/**
 * Helper function to create a safe query with built-in validation
 */
export function createSafeQuery<T>(
  groqQueryInput: string,
  validator: (data: unknown) => T | null,
  fallback: T
) {
  return async (): Promise<SafeFetchResult<T>> => {
    return safeSanityFetch(groqQueryInput, validator, fallback);
  };
}

/**
 * Type guard utilities for common Sanity data patterns
 */
export function isValidSanityImage(data: unknown): data is { asset: { url: string; _id: string }; alt?: string } {
  return (
    typeof data === 'object' &&
    data !== null &&
    'asset' in data &&
    typeof (data as any).asset === 'object' &&
    (data as any).asset !== null &&
    typeof (data as any).asset.url === 'string' &&
    typeof (data as any).asset._id === 'string'
  );
}

export function isValidSanityReference(data: unknown): data is { _ref: string; _type: 'reference' } {
  return (
    typeof data === 'object' &&
    data !== null &&
    '_ref' in data &&
    '_type' in data &&
    typeof (data as any)._ref === 'string' &&
    (data as any)._type === 'reference'
  );
}

/**
 * Utility for handling Sanity query errors gracefully
 */
export function handleSanityError(error: unknown, context: string): DataFetchError {
  console.error(`Sanity error in ${context}:`, error);
  
  if (error instanceof Error) {
    if (error.message.includes('GROQ')) {
      return {
        message: 'Fejl i forespørgsel til indhold',
        code: 'VALIDATION_ERROR',
        originalError: error,
      };
    }
    
    if (error.message.includes('network') || error.message.includes('fetch')) {
      return {
        message: 'Netværksfejl - prøv igen senere',
        code: 'NETWORK_ERROR',
        originalError: error,
      };
    }
  }
  
  return {
    message: 'Ukendt fejl ved indlæsning af indhold',
    code: 'UNKNOWN_ERROR',
    originalError: error instanceof Error ? error : undefined,
  };
}

/**
 * Retry logic for failed requests
 */
export async function retryableSanityFetch<T>(
  groqQueryString: string,
  validator?: (data: unknown) => T | null,
  fallback?: T,
  maxRetries: number = 3,
  retryDelay: number = 1000
): Promise<SafeFetchResult<T>> {
  let lastError: DataFetchError | null = null;
  
  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    const result = await safeSanityFetch(groqQueryString, validator, fallback);
    
    if (result.error === null || result.error.code !== 'NETWORK_ERROR') {
      return result;
    }
    
    lastError = result.error;
    
    if (attempt < maxRetries) {
      // Wait before retrying
      await new Promise(resolve => setTimeout(resolve, retryDelay * attempt));
    }
  }
  
  return {
    data: fallback || null,
    error: {
      ...lastError!,
      message: `Kunne ikke hente indhold efter ${maxRetries} forsøg`,
    },
    isLoading: false,
  };
} 