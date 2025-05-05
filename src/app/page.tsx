"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Cog, Truck, Info, ArrowRight } from "lucide-react";
import Link from "next/link";
import {
  FadeIn,
  SlideIn,
  ScaleIn,
  StaggerContainer,
  StaggerItem,
  Hover,
} from "@/components/ui/motion";
import { Header } from "@/components/ui/header";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
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

      {/* Features Section */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <FadeIn className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Klarer rabatterne og sikrer korrekt afvanding
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Vores nye rabatbiler er udstyret med to fræsere. En hovedfræser
              som kan trække vulsten tilbage til vejkanten, hvor der typisk
              bliver en rende efter endt afhøvling. Den komprimerer rabatten og
              fejer vejen samtidigt.
            </p>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <StaggerItem>
              <Hover>
                <Card className="border-0 shadow-lg">
                  <CardContent className="pt-6">
                    <div className="rounded-full bg-blue-100 w-12 h-12 flex items-center justify-center mb-4">
                      <Cog className="h-6 w-6 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">
                      Avanceret udstyr
                    </h3>
                    <p className="text-gray-600">
                      Udover fræser kan der monteres en snegl, som kan snegle
                      uønsket materiale ud til bagkanten af rabatten, og dermed
                      lavet ønsket fald fra vejkant.
                    </p>
                  </CardContent>
                </Card>
              </Hover>
            </StaggerItem>

            <StaggerItem>
              <Hover>
                <Card className="border-0 shadow-lg">
                  <CardContent className="pt-6">
                    <div className="rounded-full bg-blue-100 w-12 h-12 flex items-center justify-center mb-4">
                      <Truck className="h-6 w-6 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">
                      Udlæggerkasse med fræser
                    </h3>
                    <p className="text-gray-600">
                      Monteret med en udlæggerkasse med indbygget fræser, som
                      kan oprive gruset og lægge det på plads, samtidig med at
                      man kan tilføje ekstra materiale i samme arbejdsgang.
                    </p>
                  </CardContent>
                </Card>
              </Hover>
            </StaggerItem>

            <StaggerItem>
              <Hover>
                <Card className="border-0 shadow-lg">
                  <CardContent className="pt-6">
                    <div className="rounded-full bg-blue-100 w-12 h-12 flex items-center justify-center mb-4">
                      <Info className="h-6 w-6 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">
                      Øget sikkerhed
                    </h3>
                    <p className="text-gray-600">
                      Inde ved styrepulten er der monteret fem kameraer, så
                      maskinføreren altid kan orientere sig i alle vinkler
                      omkring maskinen. Det er med til at sikre arbejdsmiljøet i
                      og omkring maskinen.
                    </p>
                  </CardContent>
                </Card>
              </Hover>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </div>

      {/* Second Features Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <FadeIn className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Rabatfræseren kan lægge ud i varierende bredde
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl">
              Rabatfræseren har også mulighed for at lægge nyt materiale i
              rabatten i varierende bredde. Det gælder både stabilgrus, knust
              asfalt og knust beton.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <SlideIn direction="left" delay={0.2}>
              <Hover>
                <div className="bg-white p-8 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-4">
                    Alsidige anvendelsesmuligheder
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Sneglen kan desuden bruges i forbindelse med BSM fræsning,
                    både til at afhøvle og snegle overskydende jord væk fra
                    vejkanten, og den kan også snegle med så stor
                    rotationshastighed, at materialet fordeles ud over rabatten.
                  </p>
                  <p className="text-gray-600">
                    Herefter kan man køre med en græsklipper umiddelbart efter
                    ved græsvækst.
                  </p>
                </div>
              </Hover>
            </SlideIn>

            <SlideIn direction="right" delay={0.3}>
              <Hover>
                <div className="bg-white p-8 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-4">
                    Erfaring og kompetence
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Vejservices primære forretningsområde er vejservice og
                    udendørs drift og vedligeholdelse. Vejservice har mange års
                    erfaring med alle typer af drift og vedligehold.
                  </p>
                  <Button asChild className="bg-blue-600 hover:bg-blue-700">
                    <Link href="/kompetencer">
                      Læs mere om vores kompetencer{" "}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </Hover>
            </SlideIn>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-50 py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <ScaleIn>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Ønsker du at vide mere?
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Kontakt vores lokale afdelinger for mere information om vores
              rabatfræsere og hvordan vi kan hjælpe med vedligeholdelse af
              vejrabatter.
            </p>
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
              <Link href="/kontakt">
                Kontakt Marcel Tielemans <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </ScaleIn>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FadeIn delay={0.1}>
              <div>
                <h3 className="text-lg font-semibold mb-4">Om os</h3>
                <p className="text-gray-400">
                  Marcel Tielemans er en professionel leverandør af
                  infrastrukturløsninger med fokus på bæredygtighed og høj
                  kvalitet.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div>
                <h3 className="text-lg font-semibold mb-4">Kompetencer</h3>
                <ul className="space-y-2 text-gray-400">
                  <li>Vejservice</li>
                  <li>Traditionelle anlægsopgaver</li>
                  <li>Store infrastrukturopgaver</li>
                  <li>Asfalt</li>
                </ul>
              </div>
            </FadeIn>
            <FadeIn delay={0.3}>
              <div>
                <h3 className="text-lg font-semibold mb-4">Kontakt</h3>
                <ul className="space-y-2 text-gray-400">
                  <li>Telefon: +45 73 22 50 50</li>
                  <li>Email: info@marcel-tielemans.dk</li>
                  <li>Adresse: Søndergård Alle 4, 6500 Vojens</li>
                </ul>
              </div>
            </FadeIn>
            <FadeIn delay={0.4}>
              <div>
                <h3 className="text-lg font-semibold mb-4">Links</h3>
                <ul className="space-y-2 text-gray-400">
                  <li>Privatlivspolitik</li>
                  <li>Cookiepolitik</li>
                  <li>Årsrapporter</li>
                  <li>Job og karriere</li>
                </ul>
              </div>
            </FadeIn>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; Marcel Tielemans {new Date().getFullYear()}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
