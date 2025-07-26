// Static content extracted from Sanity CMS schemas
// This replaces all CMS content with statically typed data

export interface StaticHomepage {
  hero: {
    title: string;
    subtitle: string;
    backgroundImage: {
      asset: {
        url: string;
      };
      alt: string;
    };
    primaryButtonText: string;
    secondaryButtonText: string;
  };
  mainContent: {
    title: string;
    description: string;
    features: {
      title: string;
      description: string;
      icon: string;
    }[];
  };
  capabilities: {
    title: string;
    description: string;
    leftColumn: {
      title: string;
      content: string;
    };
    rightColumn: {
      title: string;
      content: string;
    };
  };
  contactSection: {
    title: string;
    description: string;
    buttonText: string;
  };
}

export interface StaticContactPage {
  title: string;
  description: string;
  contactInfo: {
    phone: string;
    phoneHours: string;
    email: string;
    emailResponse: string;
    address: string;
    emergencyPhone: string;
    emergencyHours: string;
  };
  serviceAreas: {
    title: string;
    description: string;
    areas: string[];
  };
  contactForm: {
    title: string;
    serviceOptions: {
      label: string;
      value: string;
    }[];
    submitButtonText: string;
    privacyNotice: string;
  };
}

export interface StaticServicesPage {
  title: string;
  description: string;
  services: {
    title: string;
    description: string;
    icon: string;
    features: string[];
  }[];
  callToAction: {
    title: string;
    description: string;
    buttonText: string;
    buttonLink: string;
  };
}

export interface StaticAboutPage {
  title: string;
  description: string;
  companyDescription: string;
  values: {
    title: string;
    description: string;
    icon: string;
  }[];
  contactInfo: {
    phone: string;
    email: string;
    address: string;
  };
}

export interface StaticCompetenciesPage {
  title: string;
  description: string;
  coreCompetencies: {
    sectionTitle: string;
    competencies: {
      title: string;
      description: string;
      icon: string;
    }[];
  };
  technicalExpertise: {
    sectionTitle: string;
    equipment: {
      title: string;
      items: string[];
    };
    methods: {
      title: string;
      items: string[];
    };
  };
  experienceStats: {
    sectionTitle: string;
    stats: {
      number: string;
      title: string;
      description: string;
    }[];
  };
  materialsSection: {
    sectionTitle: string;
    materials: {
      title: string;
      items: string[];
    };
    capacity: {
      title: string;
      items: string[];
    };
  };
}

export interface StaticGalleryPage {
  title: string;
  description: string;
  categories: {
    name: string;
    slug: string;
  }[];
  images: {
    image: {
      asset: {
        url: string;
        metadata?: {
          dimensions: { width: number; height: number };
          blurhash?: string;
          lqip?: string;
        };
      };
      alt: string;
    };
    title: string;
    description: string;
    category: string;
    featured: boolean;
  }[];
  loadMoreText: string;
  callToAction: {
    title: string;
    description: string;
    primaryButtonText: string;
    secondaryButtonText: string;
    phoneNumber: string;
  };
}

// Static Homepage Data
export const homepageData: StaticHomepage = {
  hero: {
    title: "Rabatbiler sikrer vejenes holdbarhed",
    subtitle: "Marcel Tielemans' rabatbiler vedligeholder rabatterne og sikrer, at afvandingen fra vejen kan løbe væk, så vandet ikke bliver liggende på vejen. Alt sker i én arbejdsgang.",
    backgroundImage: {
      asset: {
        url: "/images/Kantfyld ramper E 45.jpg"
      },
      alt: "Kantfyld ramper på E45 motorvejen - professionel vejservice"
    },
    primaryButtonText: "Kontakt Marcel Tielemans",
    secondaryButtonText: "Læs mere"
  },
  mainContent: {
    title: "Klarer rabatterne og sikrer korrekt afvanding",
    description: "Vores nye rabatbiler er udstyret med to fræsere. En hovedfræser som kan trække vulsten tilbage til vejkanten, hvor der typisk bliver en rende efter endt afhøvling. Den komprimerer rabatten og fejer vejen samtidigt.",
    features: [
      {
        title: "Avanceret udstyr",
        description: "Udover fræser kan der monteres en snegl, som kan snegle uønsket materiale ud til bagkanten af rabatten, og dermed lavet ønsket fald fra vejkant.",
        icon: "settings"
      },
      {
        title: "Udlæggerkasse med fræser",
        description: "Monteret med en udlæggerkasse med indbygget fræser, som kan oprive gruset og lægge det på plads, samtidig med at man kan tilføre ekstra materiale i samme arbejdsgang.",
        icon: "box"
      },
      {
        title: "Øget sikkerhed",
        description: "Inde ved styrepulten er der monteret fem kameraer, så maskinføreren altid kan orientere sig i alle vinkler omkring maskinen. Det er med til at sikre arbejdsmiljøet i og omkring maskinen.",
        icon: "eye"
      }
    ]
  },
  capabilities: {
    title: "Rabatfræseren kan lægge ud i varierende bredde",
    description: "Rabatfræseren har også mulighed for at lægge nyt materiale i rabatten i varierende bredde. Det gælder både stabilgrus, knust asfalt og knust beton.",
    leftColumn: {
      title: "Alsidige anvendelsesmuligheder",
      content: "Sneglen kan desuden bruges i forbindelse med BSM fræsning, både til at afhøvle og snegle overskydende jord væk fra vejkanten, og den kan også snegle med så stor rotationshastighed, at materialet fordeles ud over rabatten.\n\nHerefter kan man køre med en græsklipper umiddelbart efter ved græsvækst."
    },
    rightColumn: {
      title: "Erfaring og kompetence",
      content: "Vejservices primære forretningsområde er vejservice og udendørs drift og vedligeholdelse. Vejservice har mange års erfaring med alle typer af drift og vedligehold."
    }
  },
  contactSection: {
    title: "Ønsker du at vide mere?",
    description: "Kontakt vores lokale afdelinger for mere information om vores rabatfræsere og hvordan vi kan hjælpe med vedligeholdelse af vejrabatter.",
    buttonText: "Kontakt Marcel Tielemans"
  }
};

// Static Contact Page Data
export const contactPageData: StaticContactPage = {
  title: "Kontakt Os",
  description:
    "Har du brug for professionel hjælp til dit projekt? Kontakt os i dag for et uforpligtende tilbud.",
  contactInfo: {
    phone: "+45 40 48 64 80",
    phoneHours: "Mandag - Fredag: 07:00 - 16:00",
    email: "info@mtrabat.dk",
    emailResponse: "Vi svarer inden for 24 timer",
    address: "Kollund byvej 45\n7400 Herning\nDanmark",
    emergencyPhone: "+45 40 48 64 80",
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
    serviceOptions: [
      { label: "Vælg service", value: "" },
      { label: "Kantfyld/forstærkning", value: "Kantfyld/forstærkning" },
      { label: "Rabatfræsning", value: "Rabatfræsning" },
      { label: "Snegle/Afhøvling", value: "Snegle/Afhøvling" },
      { label: "Generel Rabatvedligeholdelse", value: "Generel Rabatvedligeholdelse" },
      { label: "Andet", value: "Andet" },
    ],
    submitButtonText: "Send besked",
    privacyNotice:
      "* Påkrævede felter. Vi behandler dine data fortroligt og svarer hurtigst muligt.",
  },
};

// Static Services Page Data
export const servicesPageData: StaticServicesPage = {
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
        "BSM fræsning"
      ]
    },
    {
      title: "Traditionelle anlægsopgaver",
      description: "Omfattende anlægsarbejde med fokus på kvalitet og præcision. Vi håndterer projekter fra start til slut.",
      icon: "building",
      features: [
        "Jordarbejde og udgravning",
        "Planering og forberedelse",
        "Materialeudlægning"
      ]
    },
    {
      title: "Store infrastrukturopgaver",
      description: "Komplekse infrastrukturprojekter der kræver specialiseret udstyr og erfaring. Vi leverer løsninger til store projekter.",
      icon: "box",
      features: [
        "Vejbyggeri og renovering",
        "Infrastruktur projekter",
        "Projektledelse"
      ]
    },
    {
      title: "Asfalt",
      description: "Professionel asfaltarbejde med fokus på holdbarhed og kvalitet. Vi håndterer alt fra små reparationer til store projekter.",
      icon: "arrow",
      features: [
        "Asfaltlægning",
        "Reparationer og vedligeholdelse",
        "Kvalitetskontrol"
      ]
    }
  ],
  callToAction: {
    title: "Har du brug for vores ydelser?",
    description: "Kontakt os i dag for et uforpligtende tilbud på dit projekt",
    buttonText: "Få et tilbud",
    buttonLink: "/kontakt"
  }
};

// Static About Page Data
export const aboutPageData: StaticAboutPage = {
  title: "Om Os",
  description: "Marcel Tielemans Rabat er en specialiseret virksomhed med mange års erfaring inden for vejservice og infrastruktur.",
  companyDescription: "Vi er dedikeret til at levere højkvalitets vejservice og infrastrukturløsninger med fokus på bæredygtighed og effektivitet.",
  values: [
    {
      title: "Kvalitet",
      description: "Vi leverer altid arbejde af højeste kvalitet med fokus på holdbarhed og præcision.",
      icon: "star"
    },
    {
      title: "Erfaring",
      description: "Mange års erfaring sikrer, at vi kan håndtere selv de mest komplekse projekter.",
      icon: "shield"
    },
    {
      title: "Tillid",
      description: "Vi bygger langvarige relationer baseret på tillid og pålidelighed.",
      icon: "tools"
    }
  ],
  contactInfo: {
    phone: "+45 40 48 64 80",
    email: "info@mtrabat.dk",
    address: "Kollund byvej 45\n7400 Herning\nDanmark"
  }
};

// Static Competencies Page Data
export const competenciesPageData: StaticCompetenciesPage = {
  title: "Kompetencer",
  description: "Vores kernekompetencer og tekniske ekspertise sikrer professionelle løsninger på alle projekter.",
  coreCompetencies: {
    sectionTitle: "Kernekompetencer",
    competencies: [
      {
        title: "Vejservice",
        description: "Specialiseret vejvedligeholdelse og rabatfræsning med moderne udstyr.",
        icon: "flag"
      },
      {
        title: "Infrastruktur",
        description: "Omfattende infrastrukturprojekter fra planlægning til udførelse.",
        icon: "building"
      },
      {
        title: "Projektledelse",
        description: "Professionel projektledelse sikrer leverance til tiden og inden for budget.",
        icon: "settings"
      }
    ]
  },
  technicalExpertise: {
    sectionTitle: "Teknisk Ekspertise",
    equipment: {
      title: "Udstyr",
      items: [
        "Moderne rabatbiler",
        "Specialfræsere",
        "Kamerasystemer",
        "GPS-styring"
      ]
    },
    methods: {
      title: "Metoder",
      items: [
        "BSM fræsning",
        "Rabatvedligeholdelse",
        "Afvandingssystemer",
        "Materialeudlægning"
      ]
    }
  },
  experienceStats: {
    sectionTitle: "Erfaring",
    stats: [
      {
        number: "20+",
        title: "Års erfaring",
        description: "Mange års erfaring inden for vejservice"
      },
      {
        number: "1000+",
        title: "Projekter",
        description: "Gennemførte projekter i hele Danmark"
      },
      {
        number: "100%",
        title: "Kundetilfredshed",
        description: "Høj kundetilfredshed og tillid"
      }
    ]
  },
  materialsSection: {
    sectionTitle: "Materialer og Kapacitet",
    materials: {
      title: "Materialer",
      items: [
        "Stabilgrus",
        "Knust asfalt",
        "Knust beton",
        "Specialmaterialer"
      ]
    },
    capacity: {
      title: "Kapacitet",
      items: [
        "Store projekter",
        "Hurtig leverance",
        "Fleksible løsninger",
        "24/7 service"
      ]
    }
  }
};

// Static Gallery Page Data
export const galleryPageData: StaticGalleryPage = {
  title: "Galleri",
  description: "Se eksempler på vores arbejde og projekter",
  categories: [
    { name: "Alle", slug: "alle" },
    { name: "Afvanding", slug: "afvanding" },
    { name: "Rabatfræsning", slug: "rabatfræsning" },
    { name: "Kantforstærkning", slug: "kantforstærkning" }
  ],
  images: [
    {
      image: {
        asset: {
          url: "/images/afvanding/afvanding før.jpg"
        },
        alt: "Afvanding før behandling"
      },
      title: "Afvanding - Før",
      description: "Vejrabat før afvandingsarbejde",
      category: "afvanding",
      featured: false
    },
    {
      image: {
        asset: {
          url: "/images/afvanding/afvanding efter.jpg"
        },
        alt: "Afvanding efter behandling"
      },
      title: "Afvanding - Efter",
      description: "Vejrabat efter professionel afvandingsbehandling",
      category: "afvanding",
      featured: true
    },
    {
      image: {
        asset: {
          url: "/images/rabatfræsning/rabat fræsning før.jpg"
        },
        alt: "Rabatfræsning før behandling"
      },
      title: "Rabatfræsning - Før",
      description: "Vejrabat før fræsning",
      category: "rabatfræsning",
      featured: false
    },
    {
      image: {
        asset: {
          url: "/images/rabatfræsning/rabat fræsning efter.jpg"
        },
        alt: "Rabatfræsning efter behandling"
      },
      title: "Rabatfræsning - Efter",
      description: "Vejrabat efter professionel fræsning",
      category: "rabatfræsning",
      featured: true
    },
    {
      image: {
        asset: {
          url: "/images/kantforstærkning/kantforstærkning før.jpg"
        },
        alt: "Kantforstærkning før behandling"
      },
      title: "Kantforstærkning - Før",
      description: "Vejkant før forstærkning",
      category: "kantforstærkning",
      featured: false
    },
    {
      image: {
        asset: {
          url: "/images/kantforstærkning/kantforstærkning efter.jpg"
        },
        alt: "Kantforstærkning efter behandling"
      },
      title: "Kantforstærkning - Efter",
      description: "Vejkant efter professionel forstærkning",
      category: "kantforstærkning",
      featured: true
    }
  ],
  loadMoreText: "Indlæs flere billeder",
  callToAction: {
    title: "Interesseret i vores arbejde?",
    description: "Kontakt os for at høre mere om hvordan vi kan hjælpe dig",
    primaryButtonText: "Kontakt os",
    secondaryButtonText: "Ring nu",
    phoneNumber: "+45 40 48 64 80"
  }
};