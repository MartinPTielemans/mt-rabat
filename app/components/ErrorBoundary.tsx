'use client';

import React from 'react';

interface ErrorBoundaryProps {
  children: React.ReactNode;
  fallback?: React.ComponentType<{error: Error; reset: () => void}>;
  context?: string;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error(`Error caught by boundary${this.props.context ? ` in ${this.props.context}` : ''}:`, error, errorInfo);
    
    // In a real application, you would send this to an error monitoring service
    // like Sentry, LogRocket, etc.
    if (typeof window !== 'undefined') {
      // Client-side error logging
      console.error('Client-side error:', {
        error: error.message,
        stack: error.stack,
        context: this.props.context,
        componentStack: errorInfo.componentStack,
        url: window.location.href,
        userAgent: navigator.userAgent,
        timestamp: new Date().toISOString(),
      });
    }
  }

  render() {
    if (this.state.hasError) {
      const FallbackComponent = this.props.fallback || DefaultErrorFallback;
      return (
        <FallbackComponent 
          error={this.state.error!} 
          reset={() => this.setState({ hasError: false, error: undefined })}
        />
      );
    }

    return this.props.children;
  }
}

// Default fallback component with Danish text
export function DefaultErrorFallback({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <div className="min-h-[200px] flex items-center justify-center p-8">
      <div className="max-w-md text-center">
        <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
          </svg>
        </div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">
          Der opstod en fejl
        </h3>
        <p className="text-gray-600 mb-4">
          Indholdet kunne ikke indlæses. Prøv at opdatere siden.
        </p>
        <button
          onClick={reset}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors"
        >
          Prøv igen
        </button>
        {process.env.NODE_ENV === 'development' && (
          <details className="mt-4 text-left">
            <summary className="cursor-pointer text-sm text-gray-500 hover:text-gray-700">
              Fejldetaljer (kun i udvikling)
            </summary>
            <pre className="mt-2 text-xs bg-gray-100 p-2 rounded overflow-auto max-h-32">
              {error.message}
              {'\n'}
              {error.stack}
            </pre>
          </details>
        )}
      </div>
    </div>
  );
}

// Specialized error fallback for CMS content
export function CMSErrorFallback({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 text-center">
      <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-3">
        <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      </div>
      <h4 className="text-sm font-medium text-gray-900 mb-1">
        Indhold ikke tilgængeligt
      </h4>
      <p className="text-xs text-gray-600 mb-3">
        Dette indhold kunne ikke indlæses fra CMS.
      </p>
      <button
        onClick={reset}
        className="text-xs bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 px-3 py-1 rounded transition-colors"
      >
        Prøv igen
      </button>
    </div>
  );
}

// Loading skeleton component
export function ContentSkeleton({ lines = 3 }: { lines?: number }) {
  return (
    <div className="animate-pulse">
      <div className="h-6 bg-gray-300 rounded mb-3"></div>
      {Array.from({ length: lines }).map((_, i) => (
        <div
          key={i}
          className={`h-4 bg-gray-300 rounded mb-2 ${i === lines - 1 ? 'w-3/4' : 'w-full'}`}
        ></div>
      ))}
    </div>
  );
}

// Hero skeleton for homepage
export function HeroSkeleton() {
  return (
    <div className="relative w-screen ml-[calc(-50vw+50%)]">
      <div className="relative w-full bg-gray-300 animate-pulse" style={{ aspectRatio: '162/35', minHeight: '60vh' }}>
        <div className="absolute inset-0 bg-black/45" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-center py-20">
          <div className="max-w-5xl text-center">
            <div className="h-16 bg-white/20 rounded mb-6"></div>
            <div className="h-8 bg-white/20 rounded mb-8 w-3/4 mx-auto"></div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="h-12 bg-white/20 rounded-lg w-48"></div>
              <div className="h-12 bg-white/20 rounded-lg w-32"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 