import { Cog, Truck, Info } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import {
  FadeIn,
  StaggerContainer,
  StaggerItem,
  Hover,
} from "@/components/ui/motion";

export function FeaturesSection() {
  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <FadeIn className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Klarer rabatterne og sikrer korrekt afvanding
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Vores nye rabatbiler er udstyret med to fræsere. En hovedfræser som
            kan trække vulsten tilbage til vejkanten, hvor der typisk bliver en
            rende efter endt afhøvling. Den komprimerer rabatten og fejer vejen
            samtidigt.
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
                    Monteret med en udlæggerkasse med indbygget fræser, som kan
                    oprive gruset og lægge det på plads, samtidig med at man kan
                    tilføje ekstra materiale i samme arbejdsgang.
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
                  <h3 className="text-xl font-semibold mb-2">Øget sikkerhed</h3>
                  <p className="text-gray-600">
                    Inde ved styrepulten er der monteret fem kameraer, så
                    maskinføreren altid kan orientere sig i alle vinkler omkring
                    maskinen. Det er med til at sikre arbejdsmiljøet i og
                    omkring maskinen.
                  </p>
                </CardContent>
              </Card>
            </Hover>
          </StaggerItem>
        </StaggerContainer>
      </div>
    </div>
  );
}
