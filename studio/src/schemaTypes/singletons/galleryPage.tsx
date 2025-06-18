import {ImageIcon} from '@sanity/icons'
import {defineArrayMember, defineField, defineType} from 'sanity'

export const galleryPage = defineType({
  name: 'galleryPage',
  title: 'Galleri Side',
  type: 'document',
  icon: ImageIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Sidetitel',
      type: 'string',
      initialValue: 'Galleri',
      validation: (rule) => 
        rule
          .required()
          .error('Titel er påkrævet')
          .max(60)
          .warning('Titler bør være under 60 tegn for bedre SEO'),
      description: 'Hovedtitlen for gallerisiden.',
    }),
    defineField({
      name: 'description',
      title: 'Beskrivelse',
      type: 'text',
      rows: 3,
      initialValue: 'Se vores arbejde, maskiner og gennemførte projekter. Vi er stolte af den kvalitet og professionalisme, vi leverer til vores kunder.',
      validation: (rule) => 
        rule
          .required()
          .error('Beskrivelse er påkrævet')
          .min(50)
          .warning('Beskrivelser bør være mindst 50 tegn')
          .max(300)
          .warning('Beskrivelser bør være under 300 tegn for bedre læsbarhed'),
      description: 'Beskrivende tekst under titlen.',
    }),
    defineField({
      name: 'categories',
      title: 'Kategorier',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({
              name: 'name',
              title: 'Kategori navn',
              type: 'string',
              validation: (rule) => rule.required().error('Kategori navn er påkrævet'),
            }),
            defineField({
              name: 'slug',
              title: 'URL slug',
              type: 'slug',
              options: {
                source: 'name',
              },
              validation: (rule) => rule.required().error('URL slug er påkrævet'),
            }),
          ],
          preview: {
            select: {
              title: 'name',
            },
          },
        }),
      ],
      initialValue: [
        { name: 'Alle', slug: { current: 'alle' } },
        { name: 'Jordarbejde', slug: { current: 'jordarbejde' } },
        { name: 'Maskiner', slug: { current: 'maskiner' } },
        { name: 'Transport', slug: { current: 'transport' } },
        { name: 'Projekter', slug: { current: 'projekter' } },
      ],
      description: 'Kategorier til filtrering af billeder.',
    }),
    defineField({
      name: 'images',
      title: 'Galleri billeder',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({
              name: 'image',
              title: 'Billede',
              type: 'image',
              options: {
                hotspot: true,
                metadata: ['blurhash', 'lqip', 'palette'],
              },
              validation: (rule) => rule.required().error('Billede er påkrævet'),
            }),
            defineField({
              name: 'title',
              title: 'Billede titel',
              type: 'string',
              validation: (rule) => 
                rule
                  .required()
                  .error('Billede titel er påkrævet')
                  .max(80)
                  .warning('Titler bør være under 80 tegn'),
            }),
            defineField({
              name: 'description',
              title: 'Billede beskrivelse',
              type: 'text',
              rows: 2,
              validation: (rule) => 
                rule
                  .required()
                  .error('Billede beskrivelse er påkrævet')
                  .max(200)
                  .warning('Beskrivelser bør være under 200 tegn'),
            }),
            defineField({
              name: 'category',
              title: 'Kategori',
              type: 'string',
              options: {
                list: [
                  { title: 'Alle', value: 'alle' },
                  { title: 'Jordarbejde', value: 'jordarbejde' },
                  { title: 'Maskiner', value: 'maskiner' },
                  { title: 'Transport', value: 'transport' },
                  { title: 'Projekter', value: 'projekter' },
                ],
              },
              validation: (rule) => rule.required().error('Kategori er påkrævet'),
            }),
            defineField({
              name: 'alt',
              title: 'Alt tekst (tilgængelighed)',
              type: 'string',
              validation: (rule) => 
                rule
                  .required()
                  .error('Alt tekst er påkrævet for tilgængelighed')
                  .min(10)
                  .warning('Alt tekst bør være beskrivende (mindst 10 tegn)')
                  .max(120)
                  .warning('Alt tekst bør være under 120 tegn'),
              description: 'Beskrivelse af billedet for skærmlæsere og SEO.',
            }),
            defineField({
              name: 'featured',
              title: 'Fremhævet billede',
              type: 'boolean',
              initialValue: false,
              description: 'Marker som fremhævet billede for at vise det først.',
            }),
          ],
          preview: {
            select: {
              title: 'title',
              subtitle: 'description',
              media: 'image',
            },
          },
        }),
      ],
      description: 'Billeder til galleriet med kategorier og beskrivelser.',
    }),
    defineField({
      name: 'loadMoreText',
      title: 'Indlæs flere tekst',
      type: 'string',
      initialValue: 'Indlæs flere billeder',
      description: 'Tekst på knappen til at indlæse flere billeder.',
    }),
    defineField({
      name: 'callToAction',
      title: 'Call to Action sektion',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'CTA Titel',
          type: 'string',
          initialValue: 'Har du et projekt, du gerne vil have udført?',
          validation: (rule) => rule.required().error('CTA titel er påkrævet'),
        }),
        defineField({
          name: 'description',
          title: 'CTA Beskrivelse',
          type: 'text',
          rows: 3,
          initialValue: 'Vi vil gerne høre om dit projekt og give dig et uforpligtende tilbud. Kontakt os i dag, så finder vi den bedste løsning sammen.',
          validation: (rule) => rule.required().error('CTA beskrivelse er påkrævet'),
        }),
        defineField({
          name: 'primaryButtonText',
          title: 'Primær knap tekst',
          type: 'string',
          initialValue: 'Kontakt os',
        }),
        defineField({
          name: 'secondaryButtonText',
          title: 'Sekundær knap tekst',
          type: 'string',
          initialValue: 'Ring nu',
        }),
        defineField({
          name: 'phoneNumber',
          title: 'Telefonnummer',
          type: 'string',
          initialValue: '+45XXXXXXXX',
          validation: (rule) => 
            rule
              .required()
              .error('Telefonnummer er påkrævet')
              .regex(/^\+45\d{8}$/, 'Skal være et gyldigt dansk telefonnummer (+45XXXXXXXX)'),
        }),
      ],
      description: 'Call to action sektion nederst på siden.',
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Galleri Side',
        subtitle: 'Galleri side indhold og billeder',
      }
    },
  },
}) 