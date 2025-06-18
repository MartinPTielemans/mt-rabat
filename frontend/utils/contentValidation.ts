import { z } from 'zod';

// Danish validation messages
const danishMessages = {
  required: 'Dette felt er påkrævet',
  string: 'Dette felt skal være tekst',
  url: 'Dette skal være en gyldig URL',
  email: 'Dette skal være en gyldig email-adresse',
  phone: 'Dette skal være et gyldigt telefonnummer',
  minLength: (min: number) => `Skal være mindst ${min} tegn`,
  maxLength: (max: number) => `Må ikke være længere end ${max} tegn`,
};

// Image schema validation
export const imageSchema = z.object({
  asset: z.object({
    _id: z.string(),
    url: z.string().url(danishMessages.url),
    metadata: z.object({
      dimensions: z.object({
        width: z.number(),
        height: z.number(),
      }).optional(),
      blurhash: z.string().optional(),
      lqip: z.string().optional(),
    }).optional(),
  }),
  alt: z.string().min(1, danishMessages.required),
  hotspot: z.object({
    x: z.number(),
    y: z.number(),
  }).optional(),
}).optional();

// Hero section schema
export const heroSectionSchema = z.object({
  title: z.string().min(1, danishMessages.required).max(1000, danishMessages.maxLength(1000)), // Increased to handle long content
  subtitle: z.string().min(1, danishMessages.required).max(2000, danishMessages.maxLength(2000)), // Increased to handle long content
  backgroundImage: imageSchema,
  primaryButtonText: z.string().optional(),
  secondaryButtonText: z.string().optional(),
});

// Feature schema
export const featureSchema = z.object({
  title: z.string().min(1, danishMessages.required),
  description: z.string().min(1, danishMessages.required),
  icon: z.string().optional(),
});

// Main content schema
export const mainContentSchema = z.object({
  title: z.string().min(1, danishMessages.required),
  description: z.string().min(1, danishMessages.required),
  features: z.array(featureSchema).optional(),
});

// Portable text block schema
export const portableTextSchema = z.array(z.any()).nullable().optional();

// Column schema for capabilities
export const columnSchema = z.object({
  title: z.string().optional(),
  content: portableTextSchema,
});

// Capabilities schema
export const capabilitiesSchema = z.object({
  title: z.string().min(1, danishMessages.required),
  description: z.string().min(1, danishMessages.required),
  leftColumn: columnSchema.optional(),
  rightColumn: columnSchema.optional(),
});

// Contact section schema
export const contactSectionSchema = z.object({
  title: z.string().min(1, danishMessages.required),
  description: z.string().min(1, danishMessages.required),
  buttonText: z.string().optional(),
});

// Recent projects schema
export const recentProjectsSchema = z.object({
  title: z.string().min(1, danishMessages.required),
  description: z.string().optional(),
  viewAllText: z.string().optional(),
});

// Complete homepage schema
export const homepageSchema = z.object({
  hero: heroSectionSchema.optional(),
  mainContent: mainContentSchema.optional(),
  capabilities: capabilitiesSchema.optional(),
  contactSection: contactSectionSchema.optional(),
  recentProjects: recentProjectsSchema.optional(),
});

// Type exports for TypeScript
export type ValidatedHomepage = z.infer<typeof homepageSchema>;
export type ValidatedHeroSection = z.infer<typeof heroSectionSchema>;
export type ValidatedMainContent = z.infer<typeof mainContentSchema>;
export type ValidatedFeature = z.infer<typeof featureSchema>;
export type ValidatedCapabilities = z.infer<typeof capabilitiesSchema>;
export type ValidatedContactSection = z.infer<typeof contactSectionSchema>;
export type ValidatedRecentProjects = z.infer<typeof recentProjectsSchema>;
export type ValidatedImage = z.infer<typeof imageSchema>;

// Validation functions
export function validateHomepage(data: unknown): ValidatedHomepage | null {
  try {
    return homepageSchema.parse(data);
  } catch (error) {
    console.error('Homepage validation failed:', error);
    return null;
  }
}

export function validateHeroSection(data: unknown): ValidatedHeroSection | null {
  try {
    return heroSectionSchema.parse(data);
  } catch (error) {
    console.error('Hero section validation failed:', error);
    return null;
  }
}

export function validateMainContent(data: unknown): ValidatedMainContent | null {
  try {
    return mainContentSchema.parse(data);
  } catch (error) {
    console.error('Main content validation failed:', error);
    return null;
  }
}

export function validateCapabilities(data: unknown): ValidatedCapabilities | null {
  try {
    return capabilitiesSchema.parse(data);
  } catch (error) {
    console.error('Capabilities validation failed:', error);
    return null;
  }
}

export function validateContactSection(data: unknown): ValidatedContactSection | null {
  try {
    return contactSectionSchema.parse(data);
  } catch (error) {
    console.error('Contact section validation failed:', error);
    return null;
  }
}

export function validateRecentProjects(data: unknown): ValidatedRecentProjects | null {
  try {
    return recentProjectsSchema.parse(data);
  } catch (error) {
    console.error('Recent projects validation failed:', error);
    return null;
  }
}

// Safe data access utilities
export function safeGet<T>(data: unknown, validator: (data: unknown) => T | null, fallback: T): T {
  const validated = validator(data);
  return validated || fallback;
}

// Gallery page schemas
export const galleryImageSchema = z.object({
  image: imageSchema,
  title: z.string().min(1, danishMessages.required),
  description: z.string().min(1, danishMessages.required),
  category: z.string().min(1, danishMessages.required),
  alt: z.string().min(1, danishMessages.required),
  featured: z.boolean().optional(),
});

export const galleryPageSchema = z.object({
  title: z.string().min(1, danishMessages.required),
  description: z.string().min(1, danishMessages.required),
  categories: z.array(z.object({
    name: z.string(),
    slug: z.object({ current: z.string() }),
  })).nullable().optional(),
  images: z.array(galleryImageSchema).nullable().optional(),
  loadMoreText: z.string().optional(),
  callToAction: z.object({
    title: z.string().min(1, danishMessages.required),
    description: z.string().min(1, danishMessages.required),
    primaryButtonText: z.string().optional(),
    secondaryButtonText: z.string().optional(),
    phoneNumber: z.string().min(1, danishMessages.required),
  }).optional(),
});

// Contact page schemas
export const contactPageSchema = z.object({
  title: z.string().min(1, danishMessages.required),
  description: z.string().min(1, danishMessages.required),
  contactInfo: z.object({
    phone: z.string().min(1, danishMessages.required),
    phoneHours: z.string().optional(),
    email: z.string().email(danishMessages.email),
    emailResponse: z.string().optional(),
    address: z.string().min(1, danishMessages.required),
    emergencyPhone: z.string().min(1, danishMessages.required),
    emergencyHours: z.string().optional(),
  }).optional(),
  serviceAreas: z.object({
    title: z.string().min(1, danishMessages.required),
    description: z.string().min(1, danishMessages.required),
    areas: z.array(z.string()).optional(),
  }).optional(),
  contactForm: z.object({
    title: z.string().min(1, danishMessages.required),
    serviceOptions: z.array(z.object({
      label: z.string(),
      value: z.string(),
    })).optional(),
    submitButtonText: z.string().optional(),
    privacyNotice: z.string().optional(),
  }).optional(),
});

// Services page schemas
export const serviceSchema = z.object({
  title: z.string().min(1, danishMessages.required),
  description: z.string().min(1, danishMessages.required),
  icon: z.string().optional(),
  features: z.array(z.string()).optional(),
});

export const servicesPageSchema = z.object({
  title: z.string().min(1, danishMessages.required),
  description: z.string().min(1, danishMessages.required),
  services: z.array(serviceSchema).optional(),
  callToAction: z.object({
    title: z.string().min(1, danishMessages.required),
    description: z.string().min(1, danishMessages.required),
    buttonText: z.string().optional(),
    buttonLink: z.string().optional(),
  }).optional(),
});

// Type exports for new pages
export type ValidatedGalleryPage = z.infer<typeof galleryPageSchema>;
export type ValidatedGalleryImage = z.infer<typeof galleryImageSchema>;
export type ValidatedContactPage = z.infer<typeof contactPageSchema>;
export type ValidatedService = z.infer<typeof serviceSchema>;
export type ValidatedServicesPage = z.infer<typeof servicesPageSchema>;

// Validation functions for new pages
export function validateGalleryPage(data: unknown): ValidatedGalleryPage | null {
  try {
    return galleryPageSchema.parse(data);
  } catch (error) {
    console.error('Gallery page validation failed:', error);
    return null;
  }
}

export function validateContactPage(data: unknown): ValidatedContactPage | null {
  try {
    return contactPageSchema.parse(data);
  } catch (error) {
    console.error('Contact page validation failed:', error);
    return null;
  }
}

export function validateServicesPage(data: unknown): ValidatedServicesPage | null {
  try {
    return servicesPageSchema.parse(data);
  } catch (error) {
    console.error('Services page validation failed:', error);
    return null;
  }
}

// Default fallback data for new pages
export const defaultGalleryPageData: ValidatedGalleryPage = {
  title: "Galleri",
  description: "Se vores arbejde, maskiner og gennemførte projekter. Vi er stolte af den kvalitet og professionalisme, vi leverer til vores kunder.",
  categories: [
    { name: 'Alle', slug: { current: 'alle' } },
    { name: 'Jordarbejde', slug: { current: 'jordarbejde' } },
    { name: 'Maskiner', slug: { current: 'maskiner' } },
    { name: 'Transport', slug: { current: 'transport' } },
    { name: 'Projekter', slug: { current: 'projekter' } },
  ],
  loadMoreText: "Indlæs flere billeder",
  callToAction: {
    title: "Har du et projekt, du gerne vil have udført?",
    description: "Vi vil gerne høre om dit projekt og give dig et uforpligtende tilbud. Kontakt os i dag, så finder vi den bedste løsning sammen.",
    primaryButtonText: "Kontakt os",
    secondaryButtonText: "Ring nu",
    phoneNumber: "+45XXXXXXXX",
  },
};

export const defaultContactPageData: ValidatedContactPage = {
  title: "Kontakt Os",
  description: "Har du brug for professionel hjælp til dit projekt? Kontakt os i dag for et uforpligtende tilbud.",
  contactInfo: {
    phone: "+45 XX XX XX XX",
    phoneHours: "Mandag - Fredag: 07:00 - 16:00",
    email: "info@mtrabat.dk",
    emailResponse: "Vi svarer inden for 24 timer",
    address: "Industrivej XX\nXXXX By\nDanmark",
    emergencyPhone: "+45 XX XX XX XX",
    emergencyHours: "24/7 nødservice",
  },
  serviceAreas: {
    title: "Serviceområder",
    description: "Vi servicerer følgende områder:",
    areas: [
      "København og omegn",
      "Nordsjælland",
      "Østsjælland",
      "Og øvrige Sjælland efter aftale",
    ],
  },
  contactForm: {
    title: "Send os en besked",
    submitButtonText: "Send besked",
    privacyNotice: "* Påkrævede felter. Vi behandler dine data fortroligt og svarer hurtigst muligt.",
  },
};

export const defaultServicesPageData: ValidatedServicesPage = {
  title: "Ydelser",
  description: "Vi tilbyder professionelle løsninger inden for vejservice og infrastruktur med fokus på kvalitet og effektivitet.",
  services: [
    {
      title: "Vejservice",
      description: "Specialiseret vejservice med fokus på rabatvedligeholdelse og afvandingssystemer. Vi sikrer, at vejene holder længere ved optimal vedligeholdelse.",
      icon: "flag",
      features: [
        "Rabatfræsning og vedligeholdelse",
        "Afvandingssystemer",
        "BSM fræsning",
      ],
    },
    {
      title: "Traditionelle anlægsopgaver",
      description: "Omfattende anlægsarbejde med fokus på kvalitet og præcision. Vi håndterer projekter fra start til slut.",
      icon: "building",
      features: [
        "Jordarbejde og udgravning",
        "Planering og forberedelse",
        "Materialeudlægning",
      ],
    },
    {
      title: "Store infrastrukturopgaver",
      description: "Komplekse infrastrukturprojekter der kræver specialiseret udstyr og erfaring. Vi leverer løsninger til store projekter.",
      icon: "box",
      features: [
        "Vejbyggeri og renovering",
        "Infrastruktur projekter",
        "Projektledelse",
      ],
    },
    {
      title: "Asfalt",
      description: "Professionel asfaltarbejde med fokus på holdbarhed og kvalitet. Vi håndterer alt fra små reparationer til store projekter.",
      icon: "arrow",
      features: [
        "Asfaltlægning",
        "Reparationer og vedligeholdelse",
        "Kvalitetskontrol",
      ],
    },
  ],
  callToAction: {
    title: "Har du brug for vores ydelser?",
    description: "Kontakt os i dag for et uforpligtende tilbud på dit projekt",
    buttonText: "Få et tilbud",
    buttonLink: "/kontakt",
  },
};

// Default fallback data with Danish content
export const defaultHomepageData: ValidatedHomepage = {
  hero: {
    title: "Rabatbiler sikrer vejenes holdbarhed",
    subtitle: "Marcel Tielemans' rabatbiler vedligeholder rabatterne og sikrer, at afvandingen fra vejen kan løbe væk, så vandet ikke bliver liggende på vejen. Alt sker i én arbejdsgang.",
    primaryButtonText: "Kontakt Marcel Tielemans",
    secondaryButtonText: "Læs mere",
  },
  mainContent: {
    title: "Klarer rabatterne og sikrer korrekt afvanding",
    description: "Vores nye rabatbiler er udstyret med to fræsere. En hovedfræser som kan trække vulsten tilbage til vejkanten, hvor der typisk bliver en rende efter endt afhøvling. Den komprimerer rabatten og fejer vejen samtidigt.",
    features: [
      {
        title: "Avanceret udstyr",
        description: "Udover fræser kan der monteres en snegl, som kan snegle uønsket materiale ud til bagkanten af rabatten, og dermed lavet ønsket fald fra vejkant.",
        icon: "settings",
      },
      {
        title: "Udlæggerkasse med fræser",
        description: "Monteret med en udlæggerkasse med indbygget fræser, som kan oprive gruset og lægge det på plads, samtidig med at man kan tilføre ekstra materiale i samme arbejdsgang.",
        icon: "box",
      },
      {
        title: "Øget sikkerhed",
        description: "Inde ved styrepulten er der monteret fem kameraer, så maskinføreren altid kan orientere sig i alle vinkler omkring maskinen. Det er med til at sikre arbejdsmiljøet i og omkring maskinen.",
        icon: "eye",
      },
    ],
  },
  capabilities: {
    title: "Rabatfræseren kan lægge ud i varierende bredde",
    description: "Rabatfræseren har også mulighed for at lægge nyt materiale i rabatten i varierende bredde. Det gælder både stabilgrus, knust asfalt og knust beton.",
    leftColumn: {
      title: "Alsidige anvendelsesmuligheder",
    },
    rightColumn: {
      title: "Erfaring og kompetence",
    },
  },
  contactSection: {
    title: "Ønsker du at vide mere?",
    description: "Kontakt vores lokale afdelinger for mere information om vores rabatfræsere og hvordan vi kan hjælpe med vedligeholdelse af vejrabatter.",
    buttonText: "Kontakt Marcel Tielemans",
  },
  recentProjects: {
    title: "Seneste Projekter",
    description: "Se vores seneste arbejde og projektopdateringer",
    viewAllText: "Se alle projekter",
  },
};

// About page schemas
export const aboutValueSchema = z.object({
  title: z.string().min(1, danishMessages.required),
  description: z.string().min(1, danishMessages.required),
  icon: z.string().min(1, danishMessages.required),
});

export const aboutPageSchema = z.object({
  title: z.string().min(1, danishMessages.required),
  description: z.string().min(1, danishMessages.required),
  companyDescription: portableTextSchema,
  values: z.array(aboutValueSchema).optional(),
  contactInfo: z.object({
    phone: z.string().min(1, danishMessages.required),
    email: z.string().email(danishMessages.email),
    address: z.string().min(1, danishMessages.required),
  }).optional(),
});

// Competencies page schemas
export const competencySchema = z.object({
  title: z.string().min(1, danishMessages.required),
  description: z.string().min(1, danishMessages.required),
  icon: z.string().min(1, danishMessages.required),
});

export const technicalListSchema = z.object({
  title: z.string().min(1, danishMessages.required),
  items: z.array(z.string()).optional(),
});

export const experienceStatSchema = z.object({
  number: z.string().min(1, danishMessages.required),
  title: z.string().min(1, danishMessages.required),
  description: z.string().min(1, danishMessages.required),
});

export const competenciesPageSchema = z.object({
  title: z.string().min(1, danishMessages.required),
  description: z.string().min(1, danishMessages.required),
  coreCompetencies: z.object({
    sectionTitle: z.string().min(1, danishMessages.required),
    competencies: z.array(competencySchema).optional(),
  }).optional(),
  technicalExpertise: z.object({
    sectionTitle: z.string().min(1, danishMessages.required),
    equipment: technicalListSchema.optional(),
    methods: technicalListSchema.optional(),
  }).optional(),
  experienceStats: z.object({
    sectionTitle: z.string().min(1, danishMessages.required),
    stats: z.array(experienceStatSchema).optional(),
  }).optional(),
  materialsSection: z.object({
    sectionTitle: z.string().min(1, danishMessages.required),
    materials: technicalListSchema.optional(),
    capacity: technicalListSchema.optional(),
  }).optional(),
});

// Footer schema
export const footerCompetencySchema = z.object({
  name: z.string().min(1, danishMessages.required),
});

export const footerLinkSchema = z.object({
  title: z.string().min(1, danishMessages.required),
  url: z.string().min(1, danishMessages.required),
});

export const footerSchema = z.object({
  title: z.string().min(1, danishMessages.required),
  companySection: z.object({
    title: z.string().min(1, danishMessages.required),
    description: z.string().min(1, danishMessages.required).max(200, danishMessages.maxLength(200)),
  }).optional(),
  competenciesSection: z.object({
    title: z.string().min(1, danishMessages.required),
    competencies: z.array(footerCompetencySchema).optional(),
  }).optional(),
  contactSection: z.object({
    title: z.string().min(1, danishMessages.required),
    phone: z.string().min(1, danishMessages.required),
    email: z.string().email(danishMessages.email),
    address: z.string().min(1, danishMessages.required),
  }).optional(),
  linksSection: z.object({
    title: z.string().min(1, danishMessages.required),
    links: z.array(footerLinkSchema).optional(),
  }).optional(),
  copyright: z.string().min(1, danishMessages.required),
});

// Type exports for new pages
export type ValidatedFooter = z.infer<typeof footerSchema>;
export type ValidatedFooterCompetency = z.infer<typeof footerCompetencySchema>;
export type ValidatedFooterLink = z.infer<typeof footerLinkSchema>;
export type ValidatedAboutPage = z.infer<typeof aboutPageSchema>;
export type ValidatedAboutValue = z.infer<typeof aboutValueSchema>;
export type ValidatedCompetenciesPage = z.infer<typeof competenciesPageSchema>;
export type ValidatedCompetency = z.infer<typeof competencySchema>;
export type ValidatedTechnicalList = z.infer<typeof technicalListSchema>;
export type ValidatedExperienceStat = z.infer<typeof experienceStatSchema>;

// Validation functions for new pages
export function validateAboutPage(data: unknown): ValidatedAboutPage | null {
  try {
    return aboutPageSchema.parse(data);
  } catch (error) {
    console.error('About page validation failed:', error);
    return null;
  }
}

export function validateCompetenciesPage(data: unknown): ValidatedCompetenciesPage | null {
  try {
    return competenciesPageSchema.parse(data);
  } catch (error) {
    console.error('Competencies page validation failed:', error);
    return null;
  }
}

export function validateFooter(data: unknown): ValidatedFooter | null {
  try {
    return footerSchema.parse(data);
  } catch (error) {
    console.error('Footer validation failed:', error);
    return null;
  }
}

// Default fallback data for new pages
export const defaultAboutPageData: ValidatedAboutPage = {
  title: "Om os",
  description: "Marcel Tielemans er en professionel leverandør af infrastrukturløsninger med fokus på bæredygtighed og høj kvalitet.",
  values: [
    {
      title: "Kvalitet",
      description: "Vi leverer altid arbejde af højeste kvalitet med fokus på holdbarhed",
      icon: "check-circle",
    },
    {
      title: "Effektivitet",
      description: "Moderne udstyr og teknikker sikrer hurtig og effektiv projektgennemførelse",
      icon: "lightning-bolt",
    },
    {
      title: "Bæredygtighed",
      description: "Vi fokuserer på miljøvenlige løsninger og bæredygtig drift",
      icon: "heart",
    },
  ],
  contactInfo: {
    phone: "+45 40 48 64 80",
    email: "m.t@live.dk",
    address: "Kollund Byvej 45\n7400 Herning",
  },
};

export const defaultCompetenciesPageData: ValidatedCompetenciesPage = {
  title: "Kompetencer",
  description: "Med mange års erfaring inden for vejservice og infrastruktur har vi opbygget stærke kompetencer, der sikrer kvalitet og effektivitet i alle vores projekter.",
  coreCompetencies: {
    sectionTitle: "Vores kernekompetencer",
    competencies: [
      {
        title: "Vejservice",
        description: "Specialiseret vedligeholdelse og service af veje og infrastruktur",
        icon: "map",
      },
      {
        title: "Traditionelle anlægsopgaver",
        description: "Omfattende erfaring med klassiske anlægs- og entreprenørarbejder",
        icon: "building",
      },
      {
        title: "Store infrastrukturopgaver",
        description: "Kapacitet og knowhow til at håndtere komplekse projekter",
        icon: "archive",
      },
      {
        title: "Asfalt",
        description: "Professionel asfaltarbejde og vejbelægning i høj kvalitet",
        icon: "arrows",
      },
    ],
  },
  technicalExpertise: {
    sectionTitle: "Teknisk ekspertise",
    equipment: {
      title: "Specialiseret udstyr",
      items: [
        "Moderne rabatbiler med to fræsere",
        "Udlæggerkasse med indbygget fræser",
        "Avancerede kamerasystemer for sikkerhed",
        "Sneglsystemer til materialefordeling",
      ],
    },
    methods: {
      title: "Metoder og teknikker",
      items: [
        "BSM fræsning og bearbejdning",
        "Præcis materialeudlægning",
        "Optimal afvandingssikring",
        "Integreret arbejdsproces",
      ],
    },
  },
  experienceStats: {
    sectionTitle: "Erfaring og kvalifikationer",
    stats: [
      {
        number: "15+",
        title: "År i branchen",
        description: "Dyb erfaring med vejservice og infrastrukturarbejde",
      },
      {
        number: "100%",
        title: "Kvalitetsfokus",
        description: "Alle projekter udføres med fokus på holdbarhed og kvalitet",
      },
      {
        number: "24/7",
        title: "Service",
        description: "Fleksible løsninger og hurtig respons på alle henvendelser",
      },
    ],
  },
  materialsSection: {
    sectionTitle: "Materialer og ressourcer",
    materials: {
      title: "Godkendte materialer",
      items: [
        "Stabilgrus af højeste kvalitet",
        "Knust asfalt til genanvendelse",
        "Knust beton som bæremateriale",
      ],
    },
    capacity: {
      title: "Kapacitet",
      items: [
        "Projekter i varierende størrelser",
        "Fleksible arbejdstider",
        "Hurtig projektstart",
      ],
    },
  },
};

// Default footer data
export const defaultFooterData: ValidatedFooter = {
  title: "Footer indhold",
  companySection: {
    title: "Om os",
    description: "Marcel Tielemans er en professionel leverandør af infrastrukturløsninger med fokus på bæredygtighed og høj kvalitet.",
  },
  competenciesSection: {
    title: "Kompetencer",
    competencies: [
      { name: "Vejservice" },
      { name: "Traditionelle anlægsopgaver" },
      { name: "Store infrastrukturopgaver" },
      { name: "Asfalt" },
    ],
  },
  contactSection: {
    title: "Kontakt",
    phone: "+45 40 48 64 80",
    email: "m.t@live.dk",
    address: "Kollund Byvej 45\n7400 Herning",
  },
  linksSection: {
    title: "Links",
    links: [
      { title: "Privatlivspolitik", url: "/privatlivspolitik" },
      { title: "Cookiepolitik", url: "/cookiepolitik" },
      { title: "Årsrapporter", url: "/aarsrapporter" },
      { title: "Job og karriere", url: "/job-karriere" },
    ],
  },
  copyright: "Marcel Tielemans",
}; 