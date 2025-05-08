import { Metadata } from "next";
import Image from "next/image";
import { db, blogPosts } from "@/db";
import { desc } from "drizzle-orm";

export const metadata: Metadata = {
  title: "Blog",
  description: "Blog og nyheder fra MT Rabat",
};

export const dynamic = "force-dynamic";

export default async function BlogPage() {
  // Fetch all blog posts
  const posts = await db.query.blogPosts.findMany({
    orderBy: [desc(blogPosts.createdAt)],
  });

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Blog</h1>

      {posts.length === 0 ? (
        <p className="text-center py-8 text-gray-500">
          Ingen blogindlæg fundet.
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="relative aspect-video">
                <Image
                  src={post.imageUrl}
                  alt={post.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
                <p className="text-gray-600 text-sm mb-3">
                  {new Date(post.createdAt).toLocaleDateString("da-DK")}
                </p>
                <p className="text-gray-800 line-clamp-3 mb-4">
                  {post.content}
                </p>
                {post.caption && (
                  <p className="text-gray-500 italic text-sm">{post.caption}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}
