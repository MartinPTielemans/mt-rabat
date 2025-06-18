import { DocumentTextIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'

export const aboutPage = defineType({
  name: 'aboutPage',
  title: 'Om Os',
  type: 'document',
  icon: DocumentTextIcon,
  initialValue: {
    title: 'Om os',
    description: 'Marcel Tielemans er en professionel leverandør af infrastrukturløsninger med fokus på bæredygtighed og høj kvalitet.',
    companyDescription: [
      {
        _type: 'block',
        _key: 'company1',
        style: 'normal',
        children: [
          {
            _type: 'span',
            _key: 'span1',
            text: 'Vi specialiserer os i vejservice og udendørs drift og vedligeholdelse med mange års erfaring i branchen. Vores primære fokus ligger på rabatvedligeholdelse og infrastrukturarbejde, hvor vi benytter moderne udstyr og teknikker.',
          },
        ],
      },
      {
        _type: 'block',
        _key: 'company2',
        style: 'normal',
        children: [
          {
            _type: 'span',
            _key: 'span2',
            text: 'Med vores avancerede rabatbiler og fræsere sikrer vi, at vejenes rabatter vedligeholdes optimalt, hvilket er afgørende for korrekt afvanding og vejenes holdbarhed. Vi tilbyder både traditionelle anlægsopgaver og store infrastrukturopgaver.',
          },
        ],
      },
    ],
    values: [
      {
        _type: 'object',
        _key: 'value1',
        title: 'Kvalitet',
        description: 'Vi leverer altid arbejde af højeste kvalitet med fokus på holdbarhed',
        icon: 'check-circle',
      },
      {
        _type: 'object',
        _key: 'value2',
        title: 'Effektivitet',
        description: 'Moderne udstyr og teknikker sikrer hurtig og effektiv projektgennemførelse',
        icon: 'lightning-bolt',
      },
      {
        _type: 'object',
        _key: 'value3',
        title: 'Bæredygtighed',
        description: 'Vi fokuserer på miljøvenlige løsninger og bæredygtig drift',
        icon: 'heart',
      },
    ],
    contactInfo: {
      phone: '+45 40 48 64 80',
      email: 'm.t@live.dk',
      address: 'Kollund Byvej 45\n7400 Herning',
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
      name: 'companyDescription',
      title: 'Virksomhedsbeskrivelse',
      type: 'array',
      description: 'Detaljeret beskrivelse af virksomheden',
      of: [{ type: 'block' }],
      validation: (rule) => rule.required().error('Virksomhedsbeskrivelse er påkrævet'),
    }),
    defineField({
      name: 'values',
      title: 'Værdier',
      type: 'array',
      description: 'Virksomhedens kernev\u00e6rdier',
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
              description: 'Vælg et ikon (check-circle, lightning-bolt, heart)',
              options: {
                list: [
                  { title: 'Kvalitet (Check Circle)', value: 'check-circle' },
                  { title: 'Effektivitet (Lightning Bolt)', value: 'lightning-bolt' },
                  { title: 'Bæredygtighed (Heart)', value: 'heart' },
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
      validation: (rule) => rule.min(1).max(4).error('Minimum 1 og maksimum 4 værdier'),
    }),
    defineField({
      name: 'contactInfo',
      title: 'Kontaktinformation',
      type: 'object',
      description: 'Kontaktoplysninger vist på siden',
      fields: [
        defineField({
          name: 'phone',
          title: 'Telefon',
          type: 'string',
          validation: (rule) => rule.required().error('Telefon er påkrævet'),
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
          validation: (rule) => rule.required().error('Adresse er påkrævet'),
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
        title: title || 'Om Os',
        subtitle: 'Om Os side',
      }
    },
  },
}) 