import { DocumentTextIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'

export const competenciesPage = defineType({
  name: 'competenciesPage',
  title: 'Kompetencer',
  type: 'document',
  icon: DocumentTextIcon,
  initialValue: {
    title: 'Kompetencer',
    description: 'Med mange års erfaring inden for vejservice og infrastruktur har vi opbygget stærke kompetencer, der sikrer kvalitet og effektivitet i alle vores projekter.',
    coreCompetencies: {
      sectionTitle: 'Vores kernekompetencer',
      competencies: [
        {
          _type: 'object',
          _key: 'comp1',
          title: 'Vejservice',
          description: 'Specialiseret vedligeholdelse og service af veje og infrastruktur',
          icon: 'map',
        },
        {
          _type: 'object',
          _key: 'comp2',
          title: 'Traditionelle anlægsopgaver',
          description: 'Omfattende erfaring med klassiske anlægs- og entreprenørarbejder',
          icon: 'building',
        },
        {
          _type: 'object',
          _key: 'comp3',
          title: 'Store infrastrukturopgaver',
          description: 'Kapacitet og knowhow til at håndtere komplekse projekter',
          icon: 'archive',
        },
        {
          _type: 'object',
          _key: 'comp4',
          title: 'Asfalt',
          description: 'Professionel asfaltarbejde og vejbelægning i høj kvalitet',
          icon: 'arrows',
        },
      ],
    },
    technicalExpertise: {
      sectionTitle: 'Teknisk ekspertise',
      equipment: {
        title: 'Specialiseret udstyr',
        items: [
          'Moderne rabatbiler med to fræsere',
          'Udlæggerkasse med indbygget fræser',
          'Avancerede kamerasystemer for sikkerhed',
          'Sneglsystemer til materialefordeling',
        ],
      },
      methods: {
        title: 'Metoder og teknikker',
        items: [
          'BSM fræsning og bearbejdning',
          'Præcis materialeudlægning',
          'Optimal afvandingssikring',
          'Integreret arbejdsproces',
        ],
      },
    },
    experienceStats: {
      sectionTitle: 'Erfaring og kvalifikationer',
      stats: [
        {
          _type: 'object',
          _key: 'stat1',
          number: '15+',
          title: 'År i branchen',
          description: 'Dyb erfaring med vejservice og infrastrukturarbejde',
        },
        {
          _type: 'object',
          _key: 'stat2',
          number: '100%',
          title: 'Kvalitetsfokus',
          description: 'Alle projekter udføres med fokus på holdbarhed og kvalitet',
        },
        {
          _type: 'object',
          _key: 'stat3',
          number: '24/7',
          title: 'Service',
          description: 'Fleksible løsninger og hurtig respons på alle henvendelser',
        },
      ],
    },
    materialsSection: {
      sectionTitle: 'Materialer og ressourcer',
      materials: {
        title: 'Godkendte materialer',
        items: [
          'Stabilgrus af højeste kvalitet',
          'Knust asfalt til genanvendelse',
          'Knust beton som bæremateriale',
        ],
      },
      capacity: {
        title: 'Kapacitet',
        items: [
          'Projekter i varierende størrelser',
          'Fleksible arbejdstider',
          'Hurtig projektstart',
        ],
      },
    },
  },
  fields: [
    defineField({
      name: 'title',
      title: 'Titel',
      type: 'string',
      description: 'Sidens hovedtitel',
      validation: (rule) => rule.required().error('Titel er påkrævet'),
    }),
    defineField({
      name: 'description',
      title: 'Beskrivelse',
      type: 'text',
      description: 'Kort beskrivelse under titlen',
      validation: (rule) => rule.required().max(500).error('Beskrivelse er påkrævet (max 500 tegn)'),
    }),
    defineField({
      name: 'coreCompetencies',
      title: 'Kernekompetencer',
      type: 'object',
      description: 'Sektion med kernekompetencer',
      fields: [
        defineField({
          name: 'sectionTitle',
          title: 'Sektion titel',
          type: 'string',
          validation: (rule) => rule.required().error('Sektion titel er påkrævet'),
        }),
        defineField({
          name: 'competencies',
          title: 'Kompetencer',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({
                  name: 'title',
                  title: 'Titel',
                  type: 'string',
                  validation: (rule) => rule.required().error('Titel er påkrævet'),
                }),
                defineField({
                  name: 'description',
                  title: 'Beskrivelse',
                  type: 'text',
                  validation: (rule) => rule.required().error('Beskrivelse er påkrævet'),
                }),
                defineField({
                  name: 'icon',
                  title: 'Ikon',
                  type: 'string',
                  description: 'Vælg et SVG ikon',
                  options: {
                    list: [
                      { title: 'Vejservice (Map)', value: 'map' },
                      { title: 'Anlægsopgaver (Building)', value: 'building' },
                      { title: 'Infrastruktur (Archive)', value: 'archive' },
                      { title: 'Asfalt (Arrows)', value: 'arrows' },
                    ],
                  },
                  validation: (rule) => rule.required().error('Ikon er påkrævet'),
                }),
              ],
              preview: {
                select: {
                  title: 'title',
                  subtitle: 'description',
                },
              },
            },
          ],
          validation: (rule) => rule.min(1).max(6).error('Minimum 1 og maksimum 6 kompetencer'),
        }),
      ],
    }),
    defineField({
      name: 'technicalExpertise',
      title: 'Teknisk ekspertise',
      type: 'object',
      description: 'Sektion med teknisk ekspertise',
      fields: [
        defineField({
          name: 'sectionTitle',
          title: 'Sektion titel',
          type: 'string',
          validation: (rule) => rule.required().error('Sektion titel er påkrævet'),
        }),
        defineField({
          name: 'equipment',
          title: 'Specialiseret udstyr',
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              title: 'Titel',
              type: 'string',
              validation: (rule) => rule.required().error('Titel er påkrævet'),
            }),
            defineField({
              name: 'items',
              title: 'Udstyr elementer',
              type: 'array',
              of: [{ type: 'string' }],
              validation: (rule) => rule.min(1).error('Mindst 1 element påkrævet'),
            }),
          ],
        }),
        defineField({
          name: 'methods',
          title: 'Metoder og teknikker',
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              title: 'Titel',
              type: 'string',
              validation: (rule) => rule.required().error('Titel er påkrævet'),
            }),
            defineField({
              name: 'items',
              title: 'Metode elementer',
              type: 'array',
              of: [{ type: 'string' }],
              validation: (rule) => rule.min(1).error('Mindst 1 element påkrævet'),
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: 'experienceStats',
      title: 'Erfaring og kvalifikationer',
      type: 'object',
      description: 'Statistikker og kvalifikationer',
      fields: [
        defineField({
          name: 'sectionTitle',
          title: 'Sektion titel',
          type: 'string',
          validation: (rule) => rule.required().error('Sektion titel er påkrævet'),
        }),
        defineField({
          name: 'stats',
          title: 'Statistikker',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({
                  name: 'number',
                  title: 'Nummer/værdi',
                  type: 'string',
                  description: 'F.eks. "15+", "100%", "24/7"',
                  validation: (rule) => rule.required().error('Nummer er påkrævet'),
                }),
                defineField({
                  name: 'title',
                  title: 'Titel',
                  type: 'string',
                  validation: (rule) => rule.required().error('Titel er påkrævet'),
                }),
                defineField({
                  name: 'description',
                  title: 'Beskrivelse',
                  type: 'text',
                  validation: (rule) => rule.required().error('Beskrivelse er påkrævet'),
                }),
              ],
              preview: {
                select: {
                  title: 'title',
                  subtitle: 'number',
                },
              },
            },
          ],
          validation: (rule) => rule.min(1).max(4).error('Minimum 1 og maksimum 4 statistikker'),
        }),
      ],
    }),
    defineField({
      name: 'materialsSection',
      title: 'Materialer og ressourcer',
      type: 'object',
      description: 'Sektion med materialer og kapacitet',
      fields: [
        defineField({
          name: 'sectionTitle',
          title: 'Sektion titel',
          type: 'string',
          validation: (rule) => rule.required().error('Sektion titel er påkrævet'),
        }),
        defineField({
          name: 'materials',
          title: 'Godkendte materialer',
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              title: 'Titel',
              type: 'string',
              validation: (rule) => rule.required().error('Titel er påkrævet'),
            }),
            defineField({
              name: 'items',
              title: 'Materiale elementer',
              type: 'array',
              of: [{ type: 'string' }],
              validation: (rule) => rule.min(1).error('Mindst 1 element påkrævet'),
            }),
          ],
        }),
        defineField({
          name: 'capacity',
          title: 'Kapacitet',
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              title: 'Titel',
              type: 'string',
              validation: (rule) => rule.required().error('Titel er påkrævet'),
            }),
            defineField({
              name: 'items',
              title: 'Kapacitet elementer',
              type: 'array',
              of: [{ type: 'string' }],
              validation: (rule) => rule.min(1).error('Mindst 1 element påkrævet'),
            }),
          ],
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare({ title }) {
      return {
        title: title || 'Kompetencer',
        subtitle: 'Kompetencer side',
      }
    },
  },
}) 