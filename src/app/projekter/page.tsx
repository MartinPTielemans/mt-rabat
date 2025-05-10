import { Metadata } from "next";
import Image from "next/image";
import { client, urlFor } from "@/lib/sanity";
import { PortableText } from "@portabletext/react";
import { PortableTextBlock } from "@portabletext/types";

export const metadata: Metadata = {
  title: "Projekter",
  description: "Projekter og blogindlæg fra MT Rabat",
};

export const dynamic = "force-dynamic";

interface Project {
  _id: string;
  title: string;
  content: PortableTextBlock[];
  mainImage: {
    asset: {
      _ref: string;
    };
  };
  publishedAt: string;
  caption?: string;
}

async function getProjects() {
  const query = `*[_type == "project"] | order(publishedAt desc) {
    _id,
    title,
    content,
    mainImage,
    publishedAt,
    caption
  }`;
  return client.fetch<Project[]>(query);
}

export default async function ProjekterPage() {
  const projects = await getProjects();

  return (
    <main className="container mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-8">Projekter</h1>
      <p className="mb-8 max-w-3xl">
        Herunder finder du et udvalg af vores seneste projekter og blogindlæg.
        Vi er stolte af vores arbejde og deler gerne disse eksempler på den
        kvalitet og det håndværk, vi leverer til vores kunder.
      </p>

      {projects.length === 0 ? (
        <p className="text-center py-8 text-gray-500">
          Ingen projekter eller blogindlæg fundet.
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project._id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="relative aspect-[3/4] w-full">
                <Image
                  src={urlFor(project.mainImage).url()}
                  alt={project.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
                <p className="text-gray-600 text-sm mb-3">
                  {new Date(project.publishedAt).toLocaleDateString("da-DK")}
                </p>
                <div className="text-gray-800 line-clamp-3 mb-4">
                  <PortableText value={project.content} />
                </div>
                {project.caption && (
                  <p className="text-gray-500 italic text-sm">{project.caption}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}
