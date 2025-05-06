import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FadeIn, SlideIn, Hover } from "@/components/ui/motion";

export function SecondFeaturesSection() {
  return (
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
                  Herefter kan man køre med en græsklipper umiddelbart efter ved
                  græsvækst.
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
  );
}
