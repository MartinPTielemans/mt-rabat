import {EnvelopeIcon} from '@sanity/icons'
import {defineArrayMember, defineField, defineType} from 'sanity'

export const contactPage = defineType({
  name: 'contactPage',
  title: 'Kontakt Side',
  type: 'document',
  icon: EnvelopeIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Sidetitel',
      type: 'string',
      initialValue: 'Kontakt Os',
      validation: (rule) => 
        rule
          .required()
          .error('Titel er påkrævet')
          .max(60)
          .warning('Titler bør være under 60 tegn for bedre SEO'),
      description: 'Hovedtitlen for kontaktsiden.',
    }),
    defineField({
      name: 'description',
      title: 'Beskrivelse',
      type: 'text',
      rows: 3,
      initialValue: 'Har du brug for professionel hjælp til dit projekt? Kontakt os i dag for et uforpligtende tilbud.',
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
      name: 'contactInfo',
      title: 'Kontaktoplysninger',
      type: 'object',
      fields: [
        defineField({
          name: 'phone',
          title: 'Telefonnummer',
          type: 'string',
          initialValue: '+45 XX XX XX XX',
          validation: (rule) => 
            rule
              .required()
              .error('Telefonnummer er påkrævet')
              .regex(/^\+45\s?\d{2}\s?\d{2}\s?\d{2}\s?\d{2}$/, 'Skal være et gyldigt dansk telefonnummer'),
        }),
        defineField({
          name: 'phoneHours',
          title: 'Telefontider',
          type: 'string',
          initialValue: 'Mandag - Fredag: 07:00 - 16:00',
        }),
        defineField({
          name: 'email',
          title: 'Email',
          type: 'string',
          initialValue: 'info@mtrabat.dk',
          validation: (rule) => 
            rule
              .required()
              .error('Email er påkrævet')
              .email()
              .error('Skal være en gyldig email-adresse'),
        }),
        defineField({
          name: 'emailResponse',
          title: 'Email svartid',
          type: 'string',
          initialValue: 'Vi svarer inden for 24 timer',
        }),
        defineField({
          name: 'address',
          title: 'Adresse',
          type: 'text',
          rows: 3,
          initialValue: 'Industrivej XX\nXXXX By\nDanmark',
          validation: (rule) => rule.required().error('Adresse er påkrævet'),
        }),
        defineField({
          name: 'emergencyPhone',
          title: 'Akut service telefon',
          type: 'string',
          initialValue: '+45 XX XX XX XX',
          validation: (rule) => 
            rule
              .required()
              .error('Akut service telefon er påkrævet')
              .regex(/^\+45\s?\d{2}\s?\d{2}\s?\d{2}\s?\d{2}$/, 'Skal være et gyldigt dansk telefonnummer'),
        }),
        defineField({
          name: 'emergencyHours',
          title: 'Akut service beskrivelse',
          type: 'string',
          initialValue: '24/7 nødservice',
        }),
      ],
    }),
    defineField({
      name: 'serviceAreas',
      title: 'Serviceområder',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Serviceområder titel',
          type: 'string',
          initialValue: 'Serviceområder',
          validation: (rule) => rule.required().error('Titel er påkrævet'),
        }),
        defineField({
          name: 'description',
          title: 'Beskrivelse',
          type: 'string',
          initialValue: 'Vi servicerer følgende områder:',
          validation: (rule) => rule.required().error('Beskrivelse er påkrævet'),
        }),
        defineField({
          name: 'areas',
          title: 'Områder',
          type: 'array',
          of: [
            defineArrayMember({
              type: 'string',
            }),
          ],
          initialValue: [
            'København og omegn',
            'Nordsjælland',
            'Østsjælland',
            'Og øvrige Sjælland efter aftale',
          ],
          validation: (rule) => rule.required().min(1).error('Mindst ét serviceområde er påkrævet'),
        }),
      ],
    }),
    defineField({
      name: 'contactForm',
      title: 'Kontaktformular',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Formular titel',
          type: 'string',
          initialValue: 'Send os en besked',
          validation: (rule) => rule.required().error('Formular titel er påkrævet'),
        }),
        defineField({
          name: 'serviceOptions',
          title: 'Service muligheder',
          type: 'array',
          of: [
            defineArrayMember({
              type: 'object',
              fields: [
                defineField({
                  name: 'label',
                  title: 'Vist navn',
                  type: 'string',
                  validation: (rule) => rule.required(),
                }),
                defineField({
                  name: 'value',
                  title: 'Værdi',
                  type: 'string',
                  validation: (rule) => rule.required(),
                }),
              ],
              preview: {
                select: {
                  title: 'label',
                  subtitle: 'value',
                },
              },
            }),
          ],
          initialValue: [
            { label: 'Vælg service', value: '' },
            { label: 'Jordarbejde', value: 'jordarbejde' },
            { label: 'Transport', value: 'transport' },
            { label: 'Maskinudlejning', value: 'maskinudlejning' },
            { label: 'Andet', value: 'andet' },
          ],
          description: 'Muligheder for service type dropdown.',
        }),
        defineField({
          name: 'submitButtonText',
          title: 'Send knap tekst',
          type: 'string',
          initialValue: 'Send besked',
        }),
        defineField({
          name: 'privacyNotice',
          title: 'Privatlivs besked',
          type: 'text',
          rows: 2,
          initialValue: '* Påkrævede felter. Vi behandler dine data fortroligt og svarer hurtigst muligt.',
        }),
      ],
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Kontakt Side',
        subtitle: 'Kontakt side indhold og oplysninger',
      }
    },
  },
}) 