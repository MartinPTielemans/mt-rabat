import "./globals.css";

import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "sonner";

import { Footer } from "@/app/components/Footer";
import Header from "@/app/components/Header";

export const metadata: Metadata = {
  title: {
    template: "%s | MT Rabat",
    default: "MT Rabat - Professionel Vejservice",
  },
  description: "Marcel Tielemans' rabatbiler vedligeholder rabatterne og sikrer, at afvandingen fra vejen kan løbe væk, så vandet ikke bliver liggende på vejen. Alt sker i én arbejdsgang.",
  openGraph: {
    title: "MT Rabat - Professionel Vejservice",
    description: "Marcel Tielemans' rabatbiler vedligeholder rabatterne og sikrer, at afvandingen fra vejen kan løbe væk, så vandet ikke bliver liggende på vejen. Alt sker i én arbejdsgang.",
    type: "website",
  },
};

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="da" className={`${inter.variable} bg-white text-black`}>
      <body>
        <div className="min-h-screen">
          <Toaster />
          <Header />
          <main className="w-full pt-24">{children}</main>
          <Footer />
        </div>
        <SpeedInsights />
      </body>
    </html>
  );
}