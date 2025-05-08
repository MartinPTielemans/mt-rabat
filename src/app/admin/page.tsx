"use client";

import Link from "next/link";

export default function AdminPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Admin Panel</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        <Link
          href="/admin/blog"
          className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
        >
          <h2 className="text-xl font-semibold mb-2">Blog Indlæg</h2>
          <p className="text-gray-600">Opret, rediger og slet blog indlæg</p>
        </Link>

        <Link
          href="/admin/galleri"
          className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
        >
          <h2 className="text-xl font-semibold mb-2">Galleri</h2>
          <p className="text-gray-600">
            Upload og administrer galleri billeder
          </p>
        </Link>
      </div>
    </main>
  );
}
