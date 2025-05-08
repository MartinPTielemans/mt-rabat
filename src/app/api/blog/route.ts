import { NextRequest, NextResponse } from "next/server";
import { db, blogPosts } from "@/db";
import { desc, eq } from "drizzle-orm";
import { z } from "zod";

// Schema for blog post validation
const blogPostSchema = z.object({
  title: z.string().min(1, "Title is required"),
  content: z.string().min(1, "Content is required"),
  imageUrl: z.string().url("Image URL must be a valid URL"),
  imageKey: z.string().min(1, "Image key is required"),
  caption: z.string().optional(),
});

// GET - fetch all blog posts
export async function GET() {
  try {
    const posts = await db.query.blogPosts.findMany({
      orderBy: [desc(blogPosts.createdAt)],
    });
    
    return NextResponse.json({ posts });
  } catch (error) {
    console.error("Error fetching blog posts:", error);
    return NextResponse.json(
      { error: "Kunne ikke hente blogindlæg" },
      { status: 500 }
    );
  }
}

// POST - create a new blog post
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validate input
    const result = blogPostSchema.safeParse(body);
    if (!result.success) {
      return NextResponse.json(
        { error: "Ugyldig input", issues: result.error.issues },
        { status: 400 }
      );
    }
    
    // Insert blog post into database
    const newPost = await db.insert(blogPosts).values({
      title: body.title,
      content: body.content,
      imageUrl: body.imageUrl,
      imageKey: body.imageKey,
      caption: body.caption,
    }).returning();
    
    return NextResponse.json({ post: newPost[0] }, { status: 201 });
  } catch (error) {
    console.error("Error creating blog post:", error);
    return NextResponse.json(
      { error: "Kunne ikke oprette blogindlæg" },
      { status: 500 }
    );
  }
}

// DELETE - delete a blog post
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
    
    // Delete blog post from database
    await db.delete(blogPosts).where(eq(blogPosts.id, id));
    
    return NextResponse.json(
      { message: "Blogindlæg slettet" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error deleting blog post:", error);
    return NextResponse.json(
      { error: "Kunne ikke slette blogindlæg" },
      { status: 500 }
    );
  }
} 