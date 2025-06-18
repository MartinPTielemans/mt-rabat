import {CogIcon} from '@sanity/icons'
import {defineArrayMember, defineField, defineType} from 'sanity'

export const servicesPage = defineType({
  name: 'servicesPage',
  title: 'Ydelser Side',
  type: 'document',
  icon: CogIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Sidetitel',
      type: 'string',
      initialValue: 'Ydelser',
      validation: (rule) => 
        rule
          .required()
          .error('Titel er påkrævet')
          .max(60)
          .warning('Titler bør være under 60 tegn for bedre SEO'),
      description: 'Hovedtitlen for ydelsessiden.',
    }),
    defineField({
      name: 'description',
      title: 'Beskrivelse',
      type: 'text',
      rows: 3,
      initialValue: 'Vi tilbyder professionelle løsninger inden for vejservice og infrastruktur med fokus på kvalitet og effektivitet.',
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
      name: 'services',
      title: 'Ydelser',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              title: 'Ydelse titel',
              type: 'string',
              validation: (rule) => 
                rule
                  .required()
                  .error('Ydelse titel er påkrævet')
                  .max(60)
                  .warning('Titler bør være under 60 tegn'),
            }),
            defineField({
              name: 'description',
              title: 'Ydelse beskrivelse',
              type: 'text',
              rows: 3,
              validation: (rule) => 
                rule
                  .required()
                  .error('Ydelse beskrivelse er påkrævet')
                  .min(100)
                  .warning('Beskrivelser bør være mindst 100 tegn for god information')
                  .max(400)
                  .warning('Beskrivelser bør være under 400 tegn for bedre læsbarhed'),
            }),
            defineField({
              name: 'icon',
              title: 'Ikon',
              type: 'string',
              options: {
                list: [
                  { title: 'Vejservice/Flag', value: 'flag' },
                  { title: 'Bygning/Struktur', value: 'building' },
                  { title: 'Container/Box', value: 'box' },
                  { title: 'Pil/Retning', value: 'arrow' },
                  { title: 'Indstillinger/Gear', value: 'settings' },
                  { title: 'Værktøjer', value: 'tools' },
                  { title: 'Øje/Vision', value: 'eye' },
                  { title: 'Skjold/Sikkerhed', value: 'shield' },
                ],
              },
              description: 'Vælg et ikon for denne ydelse.',
            }),
            defineField({
              name: 'features',
              title: 'Funktioner/Features',
              type: 'array',
              of: [
                defineArrayMember({
                  type: 'string',
                }),
              ],
              validation: (rule) => 
                rule
                  .required()
                  .min(2)
                  .error('Mindst 2 funktioner er påkrævet')
                  .max(6)
                  .warning('Maksimalt 6 funktioner anbefales for bedre layout'),
              description: 'Liste af funktioner eller fordele ved denne ydelse.',
            }),
          ],
          preview: {
            select: {
              title: 'title',
              subtitle: 'description',
            },
            prepare(selection) {
              const {title, subtitle} = selection
              return {
                title,
                subtitle: subtitle?.substring(0, 60) + '...',
              }
            },
          },
        }),
      ],
      initialValue: [
        {
          title: 'Vejservice',
          description: 'Specialiseret vejservice med fokus på rabatvedligeholdelse og afvandingssystemer. Vi sikrer, at vejene holder længere ved optimal vedligeholdelse.',
          icon: 'flag',
          features: [
            'Rabatfræsning og vedligeholdelse',
            'Afvandingssystemer',
            'BSM fræsning',
          ],
        },
        {
          title: 'Traditionelle anlægsopgaver',
          description: 'Omfattende anlægsarbejde med fokus på kvalitet og præcision. Vi håndterer projekter fra start til slut.',
          icon: 'building',
          features: [
            'Jordarbejde og udgravning',
            'Planering og forberedelse',
            'Materialeudlægning',
          ],
        },
        {
          title: 'Store infrastrukturopgaver',
          description: 'Komplekse infrastrukturprojekter der kræver specialiseret udstyr og erfaring. Vi leverer løsninger til store projekter.',
          icon: 'box',
          features: [
            'Vejbyggeri og renovering',
            'Infrastruktur projekter',
            'Projektledelse',
          ],
        },
        {
          title: 'Asfalt',
          description: 'Professionel asfaltarbejde med fokus på holdbarhed og kvalitet. Vi håndterer alt fra små reparationer til store projekter.',
          icon: 'arrow',
          features: [
            'Asfaltlægning',
            'Reparationer og vedligeholdelse',
            'Kvalitetskontrol',
          ],
        },
      ],
      validation: (rule) => 
        rule
          .required()
          .min(2)
          .error('Mindst 2 ydelser er påkrævet')
          .max(8)
          .warning('Maksimalt 8 ydelser anbefales for bedre oversigt'),
      description: 'Liste af ydelser som virksomheden tilbyder.',
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
          initialValue: 'Har du brug for vores ydelser?',
          validation: (rule) => rule.required().error('CTA titel er påkrævet'),
        }),
        defineField({
          name: 'description',
          title: 'CTA Beskrivelse',
          type: 'string',
          initialValue: 'Kontakt os i dag for et uforpligtende tilbud på dit projekt',
          validation: (rule) => rule.required().error('CTA beskrivelse er påkrævet'),
        }),
        defineField({
          name: 'buttonText',
          title: 'CTA Knap tekst',
          type: 'string',
          initialValue: 'Få et tilbud',
        }),
        defineField({
          name: 'buttonLink',
          title: 'CTA Knap link',
          type: 'string',
          initialValue: '/kontakt',
          validation: (rule) => rule.required().error('CTA knap link er påkrævet'),
        }),
      ],
      description: 'Call to action sektion nederst på siden.',
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Ydelser Side',
        subtitle: 'Ydelser side indhold og services',
      }
    },
  },
}) 