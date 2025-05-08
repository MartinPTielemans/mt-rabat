"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { toast } from "sonner";
import { useUploadThing } from "@/components/uploadthing";
import { BlogPost } from "@/db";

export default function BlogAdminPage() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [caption, setCaption] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [imageKey, setImageKey] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const { startUpload, isUploading } = useUploadThing("imageUploader");

  // Fetch all blog posts
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch("/api/blog", {
          cache: "no-store",
        });

        if (!response.ok) {
          throw new Error("Failed to fetch posts");
        }

        const data = await response.json();
        setPosts(data.posts || []);
      } catch (error) {
        console.error("Error fetching posts:", error);
        toast.error("Kunne ikke hente blogindlæg");
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  // Handle image upload
  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files.length === 0) return;

    try {
      const uploadedFiles = await startUpload(Array.from(e.target.files));

      if (!uploadedFiles || uploadedFiles.length === 0) {
        throw new Error("Fejl under upload af billede");
      }

      const file = uploadedFiles[0];
      setImageUrl(file.url);
      setImageKey(file.key);
      toast.success("Billede uploadet med succes");
    } catch (error) {
      console.error("Upload error:", error);
      toast.error("Fejl under upload af billede");
    }
  };

  // Submit new blog post
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!title || !content || !imageUrl || !imageKey) {
      toast.error("Udfyld venligst alle påkrævede felter");
      return;
    }

    setSubmitting(true);

    try {
      const response = await fetch("/api/blog", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          content,
          imageUrl,
          imageKey,
          caption,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to create blog post");
      }

      toast.success("Blogindlæg oprettet med succes");

      // Reset form
      setTitle("");
      setContent("");
      setCaption("");
      setImageUrl("");
      setImageKey("");

      // Refresh posts list
      const data = await response.json();
      setPosts([data.post, ...posts]);
    } catch (error) {
      console.error("Error creating post:", error);
      toast.error("Kunne ikke oprette blogindlæg");
    } finally {
      setSubmitting(false);
    }
  };

  // Delete blog post
  const handleDelete = async (id: string) => {
    if (!confirm("Er du sikker på, at du vil slette dette blogindlæg?")) {
      return;
    }

    try {
      const response = await fetch(`/api/blog?id=${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Failed to delete blog post");
      }

      toast.success("Blogindlæg slettet med succes");
      setPosts(posts.filter((post) => post.id !== id));
    } catch (error) {
      console.error("Error deleting post:", error);
      toast.error("Kunne ikke slette blogindlæg");
    }
  };

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Blog Administration</h1>
        <Link
          href="/admin"
          className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 transition-colors"
        >
          Tilbage til admin
        </Link>
      </div>

      {/* Create new blog post form */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4">Opret nyt blogindlæg</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Titel *</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Indhold *</label>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md min-h-[150px]"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Billede *</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              disabled={isUploading}
            />
            {isUploading && (
              <p className="text-blue-500 mt-1">Uploader billede...</p>
            )}
            {imageUrl && (
              <div className="mt-2">
                <Image
                  src={imageUrl}
                  alt="Preview"
                  width={200}
                  height={200}
                  className="object-cover rounded"
                />
              </div>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Billedtekst
            </label>
            <input
              type="text"
              value={caption}
              onChange={(e) => setCaption(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
            />
          </div>

          <button
            type="submit"
            disabled={submitting || isUploading || !imageUrl}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors disabled:opacity-50"
          >
            {submitting ? "Gemmer..." : "Opret blogindlæg"}
          </button>
        </form>
      </div>

      {/* Blog posts list */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4">Eksisterende blogindlæg</h2>

        {loading ? (
          <div className="text-center py-8">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mx-auto"></div>
            <p className="mt-2">Indlæser blogindlæg...</p>
          </div>
        ) : posts.length === 0 ? (
          <p className="text-center py-8 text-gray-500">
            Ingen blogindlæg fundet.
          </p>
        ) : (
          <div className="space-y-6">
            {posts.map((post) => (
              <div key={post.id} className="border-b pb-6 last:border-b-0">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="md:w-1/4">
                    <Image
                      src={post.imageUrl}
                      alt={post.title}
                      width={200}
                      height={150}
                      className="object-cover rounded w-full h-[150px]"
                    />
                  </div>
                  <div className="md:w-3/4">
                    <h3 className="text-lg font-semibold">{post.title}</h3>
                    <p className="text-gray-600 text-sm mb-2">
                      {new Date(post.createdAt).toLocaleDateString("da-DK")}
                    </p>
                    <p className="text-gray-800 mb-4 line-clamp-2">
                      {post.content}
                    </p>
                    <div className="flex gap-2">
                      <button
                        onClick={() => handleDelete(post.id)}
                        className="px-3 py-1 bg-red-500 text-white text-sm rounded hover:bg-red-600 transition-colors"
                      >
                        Slet
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
