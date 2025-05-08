import { UTApi } from "uploadthing/server";
import { NextResponse } from "next/server";

const utapi = new UTApi();

export const dynamic = 'force-dynamic'; // Never cache this route

export async function GET() {
  try {
    // Get all files uploaded with the imageUploader endpoint
    const response = await utapi.listFiles();
    
    // Filter to only image files that aren't deleted
    const imageFiles = response.files.filter(file => 
      file.status === "Uploaded"
    );
    
    // Return response with cache control headers
    return NextResponse.json(
      { images: imageFiles },
      { 
        headers: {
          'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
          'Pragma': 'no-cache',
          'Expires': '0',
        } 
      }
    );
  } catch (error) {
    console.error("Error fetching galleri images:", error);
    return NextResponse.json(
      { error: "Kunne ikke hente billeder" },
      { 
        status: 500,
        headers: {
          'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
          'Pragma': 'no-cache',
          'Expires': '0',
        }
      }
    );
  }
} 