import {CogIcon, HomeIcon, ImageIcon, UserIcon, DocumentIcon} from '@sanity/icons'
import type {StructureBuilder, StructureResolver} from 'sanity/structure'
import pluralize from 'pluralize-esm'

/**
 * Structure builder is useful whenever you want to control how documents are grouped and
 * listed in the studio or for adding additional in-studio previews or content to documents.
 * Learn more: https://www.sanity.io/docs/structure-builder-introduction
 */

const DISABLED_TYPES = ['settings', 'homepage', 'galleryPage', 'contactPage', 'servicesPage', 'aboutPage', 'competenciesPage', 'footer', 'assist.instruction.context']

// Singleton pages configuration
const singletonPages = [
  { schemaType: 'homepage', title: 'Homepage', icon: HomeIcon, documentId: 'homepage' },
  { schemaType: 'galleryPage', title: 'Galleri Side', icon: ImageIcon, documentId: 'galleryPage' },
  { schemaType: 'servicesPage', title: 'Ydelser Side', icon: DocumentIcon, documentId: 'servicesPage' },
  { schemaType: 'contactPage', title: 'Kontakt Side', icon: UserIcon, documentId: 'contactPage' },
  { schemaType: 'aboutPage', title: 'Om Os Side', icon: DocumentIcon, documentId: 'aboutPage' },
  { schemaType: 'competenciesPage', title: 'Kompetencer Side', icon: DocumentIcon, documentId: 'competenciesPage' },
  { schemaType: 'footer', title: 'Footer', icon: DocumentIcon, documentId: 'footer' },
  { schemaType: 'settings', title: 'Site Settings', icon: CogIcon, documentId: 'siteSettings' },
] as const

export const structure: StructureResolver = (S: StructureBuilder) =>
  S.list()
    .title('Website Content')
    .items([
      // Singleton pages configuration
      ...singletonPages.map(({schemaType, title, icon, documentId}) =>
        S.listItem()
          .title(title)
          .child(S.document().schemaType(schemaType).documentId(documentId))
          .icon(icon)
      ),
      
      // Divider
      S.divider(),
      ...S.documentTypeListItems()
        // Remove the singletons and system types from the list of content types
        .filter((listItem: any) => !DISABLED_TYPES.includes(listItem.getId()))
        // Pluralize the title of each document type.  This is not required but just an option to consider.
        .map((listItem) => {
          return listItem.title(pluralize(listItem.getTitle() as string))
        }),
    ])
