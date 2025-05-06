import Link from "next/link";
import { ArrowRight, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FadeIn, SlideIn, ScaleIn } from "@/components/ui/motion";

export function HeroSection() {
  return (
    <div className="relative h-[600px]">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            'url("https://www.arkil.dk/Files/Images/arkil/cases/arkil-rabatbil-afh%C3%B8vlning-af-rabatter-vejservice-top.jpg")',
        }}
      />
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
        <div className="max-w-2xl">
          <FadeIn delay={0.2}>
            <h1 className="text-5xl font-bold text-white mb-6">
              Rabatbiler sikrer vejenes holdbarhed
            </h1>
          </FadeIn>
          <SlideIn direction="up" delay={0.4}>
            <p className="text-xl text-white/90 mb-8">
              Marcel Tielemans&apos; rabatbiler vedligeholder rabatterne og
              sikrer, at afvandingen fra vejen kan løbe væk, så vandet ikke
              bliver liggende på vejen. Alt sker i én arbejdsgang.
            </p>
          </SlideIn>
          <div className="flex gap-4">
            <ScaleIn delay={0.6}>
              <Button
                asChild
                size="lg"
                className="bg-blue-600 hover:bg-blue-700"
              >
                <Link href="/kontakt">
                  Kontakt Marcel Tielemans{" "}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </ScaleIn>
            <ScaleIn delay={0.7}>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-white/10 text-white border-white/20 hover:bg-white/20"
              >
                <Link href="/om-os">
                  <Info className="mr-2 h-4 w-4" /> Læs mere
                </Link>
              </Button>
            </ScaleIn>
          </div>
        </div>
      </div>
    </div>
  );
}
