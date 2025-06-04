import Link from "next/link";
import Image from "next/image";
import { settingsQuery } from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/live";

export default async function Header() {
  const { data: settings } = await sanityFetch({
    query: settingsQuery,
  });

  return (
    <header className="fixed z-50 h-24 inset-0 bg-white/90 flex items-center backdrop-blur-lg border-b border-gray-100">
      <div className="container py-6 px-2 sm:px-6">
        <div className="flex items-center justify-between gap-5">
          <Link className="flex items-center gap-3" href="/">
            <Image
              src="/logo/Mt Rabat.png"
              alt="MT Rabat Logo"
              width={48}
              height={48}
              className="w-12 h-12"
              priority
            />
            <div className="flex flex-col">
              <span className="text-lg sm:text-2xl font-bold text-gray-800">
                MT Rabat
              </span>
              <span className="hidden sm:block text-sm text-gray-600">Marcel Tielemans</span>
            </div>
          </Link>

          <nav>
            <ul
              role="list"
              className="flex items-center gap-4 md:gap-6 leading-5 text-sm sm:text-base tracking-tight font-medium text-gray-700"
            >
              <li>
                <Link href="/" className="hover:text-blue-600 transition-colors">
                  Hjem
                </Link>
              </li>
              <li>
                <Link href="/galleri" className="hover:text-blue-600 transition-colors">
                  Galleri
                </Link>
              </li>
              <li>
                <Link href="/om-os" className="hover:text-blue-600 transition-colors">
                  Om os
                </Link>
              </li>
              <li>
                <Link href="/ydelser" className="hover:text-blue-600 transition-colors">
                  Ydelser
                </Link>
              </li>
              <li>
                <Link href="/kompetencer" className="hover:text-blue-600 transition-colors">
                  Kompetencer
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-blue-600 transition-colors">
                  Projekter
                </Link>
              </li>
              <li>
                <Link href="/kontakt" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors">
                  Kontakt
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
