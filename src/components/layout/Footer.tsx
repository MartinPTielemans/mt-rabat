import { FadeIn } from "@/components/ui/motion";

export function Footer() {
  return (
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
                <li>Telefon: +45 40 48 64 80</li>
                <li>Email: m.t@live.dk</li>
                <li>Adresse: Kollund Byvej 45 7400 Herning</li>
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
  );
}
