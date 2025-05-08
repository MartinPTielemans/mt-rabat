import { createUploadthing, type FileRouter } from "uploadthing/next";

const f = createUploadthing();

// FileRouter for your app, can contain multiple FileRoutes
export const uploadRouter = {
  // Define as many FileRoutes as you like, each with a unique route key
  imageUploader: f({ image: { maxFileSize: "4MB", maxFileCount: 100 } })
    // Set permissions and file types for this FileRoute
    .middleware(async () => {
      // This code runs on your server before upload
      // Ensure the user is authorized (you can add custom auth checks here)
      
      // Return data to be used in onUploadComplete
      return {};
    })
    .onUploadComplete(async ({ file }) => {
      // This code RUNS ON YOUR SERVER after upload
      console.log("Upload complete for:", file.name);

      // Return data that can be used client-side
      return {
        uploadedBy: "Admin",
        url: file.ufsUrl,
        key: file.key,
        name: file.name,
        size: file.size,
      };
    }),
  
  // Additional route for gallery uploads (multiple images)
  galleryUploader: f({ image: { maxFileSize: "4MB", maxFileCount: 100 } })
    .middleware(async () => {
      // This code runs on your server before upload
      return {};
    })
    .onUploadComplete(async ({ file }) => {
      // This code RUNS ON YOUR SERVER after upload
      console.log("Gallery upload complete for:", file.name);

      return {
        uploadedBy: "Admin",
        url: file.ufsUrl,
        key: file.key,
        name: file.name,
        size: file.size,
      };
    }),
} satisfies FileRouter;

export type OurFileRouter = typeof uploadRouter; 