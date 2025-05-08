import { NextRequest, NextResponse } from "next/server";
import { db, galleryImages } from "@/db";
import { desc, eq } from "drizzle-orm";
import { z } from "zod";

export const dynamic = 'force-dynamic'; // Never cache this route

// Schema for gallery image validation
const galleryImageSchema = z.object({
  name: z.string().min(1, "Name is required"),
  url: z.string().url("Image URL must be a valid URL"),
  key: z.string().min(1, "Image key is required"),
  size: z.string().min(1, "Size is required"),
});

// GET - fetch all gallery images
export async function GET() {
  try {
    // Get all files from database
    const images = await db.query.galleryImages.findMany({
      orderBy: [desc(galleryImages.uploadedAt)],
    });
    
    // Return response with cache control headers
    return NextResponse.json(
      { images },
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

// POST - add a new gallery image
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validate input
    const result = galleryImageSchema.safeParse(body);
    if (!result.success) {
      return NextResponse.json(
        { error: "Ugyldig input", issues: result.error.issues },
        { status: 400 }
      );
    }
    
    // Insert gallery image into database
    const newImage = await db.insert(galleryImages).values({
      name: body.name,
      url: body.url,
      key: body.key,
      size: body.size,
    }).returning();
    
    return NextResponse.json({ image: newImage[0] }, { status: 201 });
  } catch (error) {
    console.error("Error adding gallery image:", error);
    return NextResponse.json(
      { error: "Kunne ikke tilføje billede" },
      { status: 500 }
    );
  }
}

// DELETE - delete a gallery image
export async function DELETE(request: NextRequest) {
  try {
    const url = new URL(request.url);
    const id = url.searchParams.get("id");
    
    if (!id) {
      return NextResponse.json(
        { error: "ID er påkrævet" },
        { status: 400 }
      );
    }
    
    // Delete gallery image from database
    await db.delete(galleryImages).where(eq(galleryImages.id, id));
    
    return NextResponse.json(
      { message: "Billede slettet" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error deleting gallery image:", error);
    return NextResponse.json(
      { error: "Kunne ikke slette billede" },
      { status: 500 }
    );
  }
} 