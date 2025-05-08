import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vores Kompetencer | MT Rabat",
  description:
    "Udforsk vores specialiserede kompetencer inden for rabatvedligeholdelse, grøfteoprensning og terrænarbejde.",
};

export default function KompetencerPage() {
  return (
    <main className="container mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-6">Vores Kompetencer</h1>
      <div className="prose max-w-none">
        <p className="mb-6">
          Hos MT Rabat har vi specialiseret os i en række kerneområder inden for
          rabatvedligeholdelse og relaterede ydelser. Vores kompetencer er
          opbygget gennem mange års erfaring i branchen, og vi sørger altid for
          at levere arbejde af højeste kvalitet.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mt-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Rabatvedligeholdelse</h2>
            <p>
              Vi sikrer, at vejrabatter holdes i optimal stand for at
              understøtte vejens struktur og sikre korrekt afvanding. Dette
              inkluderer:
            </p>
            <ul className="list-disc pl-5 mt-3">
              <li>Opretning og profilering af rabatter</li>
              <li>Rensning og vedligeholdelse af afvandingssystemer</li>
              <li>Tilpasning af rabatter til forskellige vejtyper</li>
              <li>Sæsonbaseret vedligeholdelse</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Grøfteoprensning</h2>
            <p>
              Effektiv afvanding er afgørende for enhver vejstruktur. Vores
              grøfteoprensning omfatter:
            </p>
            <ul className="list-disc pl-5 mt-3">
              <li>Oprensning af grøfter og afløbskanaler</li>
              <li>Fjernelse af sediment og vegetation</li>
              <li>Genopretning af korrekte hældninger</li>
              <li>Miljøvenlige oprensningsmetoder</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Terrænarbejde</h2>
            <p>
              Vi udfører specialiseret terrænarbejde tilpasset forskellige
              projekter:
            </p>
            <ul className="list-disc pl-5 mt-3">
              <li>Landskabsmodellering og tilpasning</li>
              <li>Etablering af skråninger og volde</li>
              <li>Erosionskontrol og stabilisering</li>
              <li>Specialløsninger til udfordrende terræn</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Maskinudlejning</h2>
            <p>
              Vi tilbyder udlejning af specialmaskiner til rabatarbejde og
              lignende opgaver:
            </p>
            <ul className="list-disc pl-5 mt-3">
              <li>Rabatfræsere og rabathøvle</li>
              <li>Gravemaskiner til grøfteoprensning</li>
              <li>Transportløsninger til materialer</li>
              <li>Udstyr til præcisionsnivellering</li>
            </ul>
          </div>
        </div>

        <h2 className="text-2xl font-semibold mt-12 mb-6">Vores Tilgang</h2>
        <p className="mb-4">
          Vi lægger stor vægt på at forstå hvert projekts specifikke behov og
          udfordringer. Vores tilgang kombinerer solid teknisk viden med
          praktisk erfaring, hvilket sikrer holdbare og effektive løsninger.
        </p>
        <p className="mb-4">
          Alle vores medarbejdere er uddannede specialister inden for deres
          områder og opdateres løbende med den nyeste viden og teknikker i
          branchen.
        </p>

        <div className="mt-10 bg-gray-50 p-6 rounded-lg border border-gray-200">
          <h3 className="text-xl font-semibold mb-4">
            Har du spørgsmål om vores kompetencer?
          </h3>
          <p className="mb-4">
            Kontakt os for en uforpligtende snak om, hvordan vi kan hjælpe med
            netop dit projekt.
          </p>
          <a
            href="/kontakt"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-md transition-colors"
          >
            Kontakt os
          </a>
        </div>
      </div>
    </main>
  );
}
