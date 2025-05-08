"use client";

import { useState } from "react";
import { toast } from "sonner";
import { ImageIcon, UploadCloudIcon } from "lucide-react";

import type { OurFileRouter } from "@/lib/uploadthing";
import { cn } from "@/lib/utils";
import { UploadDropzone } from "@/components/UploadThingProvider";

type UploadResult = {
  name: string;
  size: number;
  key: string;
  url: string;
};

interface UploadButtonProps {
  endpoint: keyof OurFileRouter;
  onUploadComplete?: (res: UploadResult[]) => void;
  onUploadError?: (error: Error) => void;
  className?: string;
}

/**
 * This component is currently not in use - direct file inputs with useUploadThing are used instead.
 * Keeping this for future reference or improvements.
 */
export function UploadButton({
  endpoint,
  onUploadComplete,
  onUploadError,
  className,
}: UploadButtonProps) {
  const [isUploading, setIsUploading] = useState(false);

  return (
    <UploadDropzone
      endpoint={endpoint}
      className={cn(
        "ut-uploading:opacity-60 ut-button:hidden border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-8 transition-colors hover:bg-gray-50/50 dark:hover:bg-gray-900/50 flex flex-col items-center justify-center gap-3 cursor-pointer",
        {
          "bg-gray-50/50 dark:bg-gray-900/50 pointer-events-none": isUploading,
        },
        className
      )}
      appearance={{
        container: "w-full",
        uploadIcon: "hidden",
        button: "hidden",
      }}
      onClientUploadComplete={(res) => {
        setIsUploading(false);
        toast.success("Upload fuldført!");
        if (onUploadComplete && res) {
          onUploadComplete(res as unknown as UploadResult[]);
        }
      }}
      onUploadError={(error: Error) => {
        setIsUploading(false);
        toast.error(`Fejl ved upload: ${error.message}`);
        if (onUploadError) {
          onUploadError(error);
        }
      }}
      onUploadBegin={() => {
        setIsUploading(true);
      }}
      content={{
        allowedContent: ({ fileTypes, isUploading }) =>
          isUploading
            ? "Uploader..."
            : `Billeder op til 4MB (${fileTypes
                .map((type) => `.${type}`)
                .join(", ")})`,
        label: ({ isDragActive }) => (
          <div className="flex flex-col items-center gap-3 text-center">
            <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-full">
              {isDragActive ? (
                <ImageIcon className="w-8 h-8 text-blue-500" />
              ) : (
                <UploadCloudIcon className="w-8 h-8 text-gray-400 dark:text-gray-500" />
              )}
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-sm font-medium">
                {isDragActive
                  ? "Slip for at uploade"
                  : "Træk og slip billeder her"}
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                eller{" "}
                <span className="text-blue-500 hover:underline">
                  vælg billeder
                </span>{" "}
                fra din computer
              </p>
              {isUploading && (
                <div className="mt-2 w-full h-1 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-blue-500 animate-pulse"
                    style={{ width: "100%" }}
                  ></div>
                </div>
              )}
            </div>
          </div>
        ),
      }}
    />
  );
}
