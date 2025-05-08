import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vores Ydelser",
  description: "Se vores udvalg af ydelser til rabatbiler og vejservice",
};

export default function YdelserPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Vores Ydelser</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Rabatfræsning</h2>
          <p className="text-gray-600">
            Profesionel rabatfræsning der sikrer korrekt afvanding og
            vejsikkerhed med vores specialiserede rabatbiler.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Vejvedligeholdelse</h2>
          <p className="text-gray-600">
            Komplet vedligeholdelse af rabatter, afvandingskanaler og andre
            vejkomponenter.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Materialehåndtering</h2>
          <p className="text-gray-600">
            Udlægning af nyt materiale i rabatter, herunder stabilgrus, knust
            asfalt og beton.
          </p>
        </div>
      </div>
    </main>
  );
}
