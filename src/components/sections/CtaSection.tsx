import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScaleIn } from "@/components/ui/motion";

export function CtaSection() {
  return (
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
  );
}
