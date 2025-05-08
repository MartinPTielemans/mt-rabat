import { UTApi } from "uploadthing/server";
import { NextResponse } from "next/server";

const utapi = new UTApi();

export async function GET() {
  try {
    // Get all files uploaded with the imageUploader endpoint
    const response = await utapi.listFiles();
    
    // Filter to only image files that aren't deleted
    const imageFiles = response.files.filter(file => 
      file.status === "Uploaded"
    );
    
    return NextResponse.json({ images: imageFiles });
  } catch (error) {
    console.error("Error fetching gallery images:", error);
    return NextResponse.json(
      { error: "Failed to fetch images" },
      { status: 500 }
    );
  }
} 