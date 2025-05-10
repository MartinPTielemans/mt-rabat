import { Metadata } from "next";
import Gallery from "@/components/Gallery";

export const metadata: Metadata = {
  title: "Billedgalleri",
  description: "Galleri med uploadede billeder",
};

export default function GalleryPage() {
  return (
    <main className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Galleri</h1>
      <Gallery />
    </main>
  );
}
