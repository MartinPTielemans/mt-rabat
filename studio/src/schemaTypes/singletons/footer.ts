import { defineField, defineType } from 'sanity'
import { footerInitialValues } from '../../lib/initialValues'

export const footer = defineType({
  name: 'footer',
  title: 'Footer',
  type: 'document',
  initialValue: footerInitialValues,
  fields: [
    defineField({
      name: 'title',
      title: 'Intern titel',
      type: 'string',
      description: 'Kun til CMS, vises ikke på hjemmesiden',
      initialValue: 'Footer indhold',
      validation: (rule) => rule.required().error('Titel er påkrævet'),
    }),
    defineField({
      name: 'companySection',
      title: 'Virksomhedssektion',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Overskrift',
          type: 'string',
          initialValue: 'Om os',
          validation: (rule) => rule.required().error('Overskrift er påkrævet'),
        }),
        defineField({
          name: 'description',
          title: 'Beskrivelse',
          type: 'text',
          rows: 3,
          validation: (rule) => rule.required().max(200).error('Beskrivelse er påkrævet (max 200 tegn)'),
        }),
      ],
    }),
    defineField({
      name: 'competenciesSection',
      title: 'Kompetencesektion',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Overskrift',
          type: 'string',
          initialValue: 'Kompetencer',
          validation: (rule) => rule.required().error('Overskrift er påkrævet'),
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
                  name: 'name',
                  title: 'Kompetence navn',
                  type: 'string',
                  validation: (rule) => rule.required().error('Kompetence navn er påkrævet'),
                }),
              ],
              preview: {
                select: {
                  title: 'name',
                },
              },
            },
          ],
          validation: (rule) => rule.min(1).error('Mindst én kompetence er påkrævet'),
        }),
      ],
    }),
    defineField({
      name: 'contactSection',
      title: 'Kontaktsektion',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Overskrift',
          type: 'string',
          initialValue: 'Kontakt',
          validation: (rule) => rule.required().error('Overskrift er påkrævet'),
        }),
        defineField({
          name: 'phone',
          title: 'Telefonnummer',
          type: 'string',
          validation: (rule) => rule.required().error('Telefonnummer er påkrævet'),
        }),
        defineField({
          name: 'email',
          title: 'E-mail',
          type: 'string',
          validation: (rule) => rule.required().email().error('Gyldig e-mail er påkrævet'),
        }),
        defineField({
          name: 'address',
          title: 'Adresse',
          type: 'text',
          rows: 2,
          validation: (rule) => rule.required().error('Adresse er påkrævet'),
        }),
      ],
    }),
    defineField({
      name: 'linksSection',
      title: 'Linkssektion',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Overskrift',
          type: 'string',
          initialValue: 'Links',
          validation: (rule) => rule.required().error('Overskrift er påkrævet'),
        }),
        defineField({
          name: 'links',
          title: 'Links',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({
                  name: 'title',
                  title: 'Link tekst',
                  type: 'string',
                  validation: (rule) => rule.required().error('Link tekst er påkrævet'),
                }),
                defineField({
                  name: 'url',
                  title: 'URL',
                  type: 'string',
                  validation: (rule) => rule.required().error('URL er påkrævet'),
                }),
              ],
              preview: {
                select: {
                  title: 'title',
                  subtitle: 'url',
                },
              },
            },
          ],
        }),
      ],
    }),
    defineField({
      name: 'copyright',
      title: 'Copyright tekst',
      type: 'string',
      description: 'Vis kun virksomhedsnavn, årstallet tilføjes automatisk',
      initialValue: 'Marcel Tielemans',
      validation: (rule) => rule.required().error('Copyright tekst er påkrævet'),
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Footer indhold',
      }
    },
  },
}) 