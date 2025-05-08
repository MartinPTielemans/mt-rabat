import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import { ScrollToTop } from "@/components/ui/scroll-to-top";
import { Header } from "@/components/layout/header";
import { Providers } from "./providers";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rabatbiler | Marcel Tielemans",
  description:
    "Marcel Tielemans' rabatbiler vedligeholder rabatterne og sikrer, at afvandingen fra vejen kan løbe væk, så vandet ikke bliver liggende på vejen.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="da">
      <body className={inter.className}>
        <Providers>
          <ScrollProgress />
          <Header />
          {children}
          <ScrollToTop />
          <Toaster />
        </Providers>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
