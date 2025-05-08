import { NextResponse } from "next/server";
import { listFiles } from "@/lib/cloudflare";

export const dynamic = 'force-dynamic'; // Never cache this route

export async function GET() {
  try {
    // Get all files from Cloudflare R2 bucket
    const imageFiles = await listFiles();
    
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