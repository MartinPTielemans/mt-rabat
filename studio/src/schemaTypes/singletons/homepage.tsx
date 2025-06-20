import {HomeIcon} from '@sanity/icons'
import {defineArrayMember, defineField, defineType} from 'sanity'

export const homepage = defineType({
  name: 'homepage',
  title: 'Homepage',
  type: 'document',
  icon: HomeIcon,
  fields: [
    // Hero Section
    defineField({
      name: 'hero',
      title: 'Hero Section',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Hero Title',
          type: 'string',
          initialValue: 'Rabatbiler sikrer vejenes holdbarhed',
          validation: (rule) => 
            rule
              .required()
              .error('Titel er påkrævet')
              .max(1000)
              .warning('Titler bør være under 1000 tegn for bedre SEO'),
          description: 'Hovedtitlen for hjemmesiden. Vigtig for SEO.',
        }),
        defineField({
          name: 'subtitle',
          title: 'Hero Subtitle',
          type: 'text',
          rows: 3,
          initialValue: 'Marcel Tielemans\' rabatbiler vedligeholder rabatterne og sikrer, at afvandingen fra vejen kan løbe væk, så vandet ikke bliver liggende på vejen. Alt sker i én arbejdsgang.',
          validation: (rule) => 
            rule
              .required()
              .error('Undertitel er påkrævet')
              .max(2000)
              .warning('Undertitler bør være under 2000 tegn for bedre læsbarhed'),
          description: 'Beskrivende tekst under hovedtitlen.',
        }),
        defineField({
          name: 'backgroundImage',
          title: 'Background Image',
          type: 'image',
          options: {
            hotspot: true,
            metadata: ['blurhash', 'lqip', 'palette'],
          },
          validation: (rule) => 
            rule
              .required()
              .error('Baggrundsbillede er påkrævet'),
          fields: [
            defineField({
              name: 'alt',
              title: 'Alternativ tekst (dansk)',
              type: 'string',
              validation: (rule) => 
                rule
                  .required()
                  .error('Alt-tekst er påkrævet for tilgængelighed')
                  .min(10)
                  .warning('Alt-tekst bør være beskrivende (mindst 10 tegn)')
                  .max(100)
                  .warning('Alt-tekst bør være under 100 tegn'),
              description: 'Beskrivelse af billedet for skærmlæsere og SEO. Skriv på dansk.',
            }),
          ],
          description: 'Baggrundsbillede for hero-sektionen. Anbefalet størrelse: 1920x800px.',
        }),
        defineField({
          name: 'primaryButtonText',
          title: 'Primary Button Text',
          type: 'string',
          initialValue: 'Kontakt Marcel Tielemans',
        }),
        defineField({
          name: 'secondaryButtonText',
          title: 'Secondary Button Text',
          type: 'string',
          initialValue: 'Læs mere',
        }),
      ],
    }),
    // Main Content Section
    defineField({
      name: 'mainContent',
      title: 'Main Content Section',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Section Title',
          type: 'string',
          initialValue: 'Klarer rabatterne og sikrer korrekt afvanding',
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: 'description',
          title: 'Section Description',
          type: 'text',
          initialValue: 'Vores nye rabatbiler er udstyret med to fræsere. En hovedfræser som kan trække vulsten tilbage til vejkanten, hvor der typisk bliver en rende efter endt afhøvling. Den komprimerer rabatten og fejer vejen samtidigt.',
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: 'features',
          title: 'Features',
          type: 'array',
          of: [
            defineArrayMember({
              type: 'object',
              fields: [
                defineField({
                  name: 'title',
                  title: 'Feature Title',
                  type: 'string',
                  validation: (rule) => 
                    rule
                      .required()
                      .error('Titel er påkrævet')
                      .max(60)
                      .warning('Titler bør være under 60 tegn for bedre layout'),
                  description: 'Kort og beskrivende titel for funktionen.',
                }),
                defineField({
                  name: 'description',
                  title: 'Feature Description',
                  type: 'text',
                  rows: 4,
                  validation: (rule) => 
                    rule
                      .required()
                      .error('Beskrivelse er påkrævet')
                      .min(50)
                      .warning('Beskrivelser bør være mindst 50 tegn for god information')
                      .max(300)
                      .warning('Beskrivelser bør være under 300 tegn for bedre læsbarhed'),
                  description: 'Detaljeret beskrivelse af funktionen på dansk.',
                }),
                defineField({
                  name: 'icon',
                  title: 'Icon Name',
                  type: 'string',
                  options: {
                    list: [
                      {title: 'Settings/Gear', value: 'settings'},
                      {title: 'Box/Container', value: 'box'},
                      {title: 'Eye/Vision', value: 'eye'},
                      {title: 'Shield/Security', value: 'shield'},
                      {title: 'Tools', value: 'tools'},
                      {title: 'Star', value: 'star'},
                    ],
                  },
                  description: 'Choose an icon for this feature',
                }),
              ],
              preview: {
                select: {
                  title: 'title',
                  subtitle: 'description',
                  icon: 'icon',
                },
                prepare(selection) {
                  const {title, subtitle, icon} = selection;
                  return {
                    title,
                    subtitle: subtitle?.substring(0, 60) + '...',
                    media: icon ? undefined : undefined, // Could add icon preview here
                  };
                },
              },
            }),
          ],
          initialValue: [
            {
              title: 'Avanceret udstyr',
              description: 'Udover fræser kan der monteres en snegl, som kan snegle uønsket materiale ud til bagkanten af rabatten, og dermed lavet ønsket fald fra vejkant.',
              icon: 'settings',
            },
            {
              title: 'Udlæggerkasse med fræser',
              description: 'Monteret med en udlæggerkasse med indbygget fræser, som kan oprive gruset og lægge det på plads, samtidig med at man kan tilføre ekstra materiale i samme arbejdsgang.',
              icon: 'box',
            },
            {
              title: 'Øget sikkerhed',
              description: 'Inde ved styrepulten er der monteret fem kameraer, så maskinføreren altid kan orientere sig i alle vinkler omkring maskinen. Det er med til at sikre arbejdsmiljøet i og omkring maskinen.',
              icon: 'eye',
            },
          ],
        }),
      ],
    }),
    // Capabilities Section
    defineField({
      name: 'capabilities',
      title: 'Capabilities Section',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Section Title',
          type: 'string',
          initialValue: 'Rabatfræseren kan lægge ud i varierende bredde',
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: 'description',
          title: 'Section Description',
          type: 'text',
          initialValue: 'Rabatfræseren har også mulighed for at lægge nyt materiale i rabatten i varierende bredde. Det gælder både stabilgrus, knust asfalt og knust beton.',
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: 'leftColumn',
          title: 'Left Column',
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              title: 'Column Title',
              type: 'string',
              initialValue: 'Alsidige anvendelsesmuligheder',
            }),
            defineField({
              name: 'content',
              title: 'Column Content',
              type: 'array',
              of: [defineArrayMember({type: 'block'})],
            }),
          ],
        }),
        defineField({
          name: 'rightColumn',
          title: 'Right Column',
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              title: 'Column Title',
              type: 'string',
              initialValue: 'Erfaring og kompetence',
            }),
            defineField({
              name: 'content',
              title: 'Column Content',
              type: 'array',
              of: [defineArrayMember({type: 'block'})],
            }),
          ],
        }),
      ],
    }),
    // Contact Section
    defineField({
      name: 'contactSection',
      title: 'Contact Section',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Section Title',
          type: 'string',
          initialValue: 'Ønsker du at vide mere?',
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: 'description',
          title: 'Section Description',
          type: 'text',
          initialValue: 'Kontakt vores lokale afdelinger for mere information om vores rabatfræsere og hvordan vi kan hjælpe med vedligeholdelse af vejrabatter.',
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: 'buttonText',
          title: 'Button Text',
          type: 'string',
          initialValue: 'Kontakt Marcel Tielemans',
        }),
      ],
    }),
    // Recent Projects Section
    defineField({
      name: 'recentProjects',
      title: 'Recent Projects Section',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Section Title',
          type: 'string',
          initialValue: 'Seneste Projekter',
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: 'description',
          title: 'Section Description',
          type: 'string',
          initialValue: 'Se vores seneste arbejde og projektopdateringer',
        }),
        defineField({
          name: 'viewAllText',
          title: 'View All Button Text',
          type: 'string',
          initialValue: 'Se alle projekter',
        }),
      ],
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Homepage',
        subtitle: 'Homepage content and sections'
      }
    },
  },
}) 