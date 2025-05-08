export default function ProjekterPage() {
  const projects = [
    {
      id: 1,
      title: "Villa Renovering",
      description:
        "Komplet renovering af ældre villa, herunder nyt tag, vinduer og facade.",
      imageUrl: "/images/project1.jpg",
    },
    {
      id: 2,
      title: "Badeværelse Modernisering",
      description:
        "Totalrenovering af badeværelse med nye fliser, sanitet og vandrør.",
      imageUrl: "/images/project2.jpg",
    },
    {
      id: 3,
      title: "Køkken Installation",
      description:
        "Design og installation af moderne køkken med skræddersyede løsninger.",
      imageUrl: "/images/project3.jpg",
    },
    {
      id: 4,
      title: "Erhvervsbyggeri",
      description:
        "Ombygning af kontorarealer til åbent kontorlandskab for lokal virksomhed.",
      imageUrl: "/images/project4.jpg",
    },
  ];

  return (
    <main className="container mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-8">Projekter</h1>
      <p className="mb-8 max-w-3xl">
        Herunder finder du et udvalg af vores seneste projekter. Vi er stolte af
        vores arbejde og deler gerne disse eksempler på den kvalitet og det
        håndværk, vi leverer til vores kunder.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="border rounded-lg overflow-hidden shadow-md"
          >
            <div className="h-48 bg-gray-200 flex items-center justify-center">
              {/* Placeholder for project images */}
              <span className="text-gray-500">Projektbillede</span>
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-xl mb-2">{project.title}</h3>
              <p className="text-gray-700">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
