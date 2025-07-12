export type ServiceShowcaseData = {
  title: string;
  description: string;
  slug: { current: string };
  beforeImage: {
    src: string;
    alt: string;
  };
  afterImage: {
    src: string;
    alt: string;
  };
};

export const services: ServiceShowcaseData[] = [
  {
    title: "Afvanding",
    description:
      "Her kan du se et eksempel på effektiv afvanding, hvor vi har fjernet overskydende materiale fra vejrabatten for at sikre korrekt vandafledning og forbedre trafiksikkerheden.",
    slug: { current: "afvanding" },
    beforeImage: {
      src: "/images/afvanding/afvanding før.jpg",
      alt: "Afvanding før behandling",
    },
    afterImage: {
      src: "/images/afvanding/afvanding efter.jpg",
      alt: "Afvanding efter behandling",
    },
  },
  {
    title: "Rabatfræsning",
    description:
      "Vores specialiserede rabatfræsere fjerner effektivt ukrudt og uønsket materiale, og efterlader en ren og velplejet vejrabat. Se forskellen vores præcisionsudstyr gør.",
    slug: { current: "rabatfræsning" },
    beforeImage: {
      src: "/images/rabatfræsning/rabat fræsning før.jpg",
      alt: "Rabatfræsning før behandling (placeholder)",
    },
    afterImage: {
      src: "/images/rabatfræsning/rabat fræsning efter.jpg",
      alt: "Rabatfræsning efter behandling",
    },
  },
  {
    title: "Kantforstærkning",
    description:
      "Kantforstærkning er en vigtig del af vejvedligeholdelsen, da det sikrer, at vejen er stabil og holdbar. Se forskellen vores præcisionsudstyr gør.",
    slug: { current: "kantforstærkning" },
    beforeImage: {
      src: "/images/kantforstærkning/kantforstærkning før.jpg",
      alt: "Kantforstærkning før behandling (placeholder)",
    },
    afterImage: {
      src: "/images/kantforstærkning/kantforstærkning efter.jpg",
      alt: "Kantforstærkning efter behandling",
    },
  },
];
