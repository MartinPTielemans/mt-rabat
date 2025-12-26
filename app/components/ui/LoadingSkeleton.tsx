'use client';

import { motion } from 'framer-motion';

interface SkeletonProps {
  className?: string;
}

// Base skeleton with shimmer effect
export function Skeleton({ className = '' }: SkeletonProps) {
  return (
    <motion.div
      className={`bg-gray-200 overflow-hidden relative ${className}`}
      initial={{ opacity: 0.5 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, repeat: Infinity, repeatType: 'reverse' }}
    >
      <div 
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full animate-[shimmer_2s_infinite]"
        style={{
          animation: 'shimmer 2s infinite linear'
        }}
      />
    </motion.div>
  );
}

// Card skeleton
export function CardSkeleton() {
  return (
    <div className="bg-white border-l-4 border-l-gray-200 p-8 shadow-industrial">
      <Skeleton className="w-16 h-16 mb-6" />
      <Skeleton className="h-8 w-3/4 mb-4" />
      <Skeleton className="h-4 w-full mb-2" />
      <Skeleton className="h-4 w-5/6 mb-2" />
      <Skeleton className="h-4 w-4/5" />
    </div>
  );
}

// Hero skeleton
export function HeroSkeleton() {
  return (
    <div className="min-h-[90vh] bg-charcoal flex items-center justify-center">
      <div className="text-center px-4">
        <Skeleton className="h-20 w-96 mx-auto mb-8 bg-gray-700" />
        <Skeleton className="h-6 w-64 mx-auto mb-4 bg-gray-700" />
        <Skeleton className="h-6 w-48 mx-auto mb-12 bg-gray-700" />
        <div className="flex gap-4 justify-center">
          <Skeleton className="h-14 w-40 bg-gray-700" />
          <Skeleton className="h-14 w-40 bg-gray-700" />
        </div>
      </div>
    </div>
  );
}

// Image skeleton
export function ImageSkeleton({ aspectRatio = '1/1' }: { aspectRatio?: string }) {
  return (
    <div 
      className="bg-gray-200 overflow-hidden relative"
      style={{ aspectRatio }}
    >
      <Skeleton className="absolute inset-0" />
      <div className="absolute inset-0 flex items-center justify-center">
        <svg className="w-12 h-12 text-gray-300" fill="currentColor" viewBox="0 0 24 24">
          <path d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      </div>
    </div>
  );
}

// Page loading state
export function PageLoading() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <motion.div
        className="flex flex-col items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          className="w-16 h-16 border-4 border-gray-200 border-t-primary rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
        />
        <p className="mt-4 text-gray-500 font-mono text-sm uppercase tracking-wider">
          Indlæser...
        </p>
      </motion.div>
    </div>
  );
}

