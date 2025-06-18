import {CogIcon, HomeIcon, ImageIcon, UserIcon, DocumentIcon} from '@sanity/icons'
import type {StructureBuilder, StructureResolver} from 'sanity/structure'
import pluralize from 'pluralize-esm'

/**
 * Structure builder is useful whenever you want to control how documents are grouped and
 * listed in the studio or for adding additional in-studio previews or content to documents.
 * Learn more: https://www.sanity.io/docs/structure-builder-introduction
 */

const DISABLED_TYPES = ['settings', 'homepage', 'galleryPage', 'contactPage', 'servicesPage', 'aboutPage', 'competenciesPage', 'footer', 'assist.instruction.context']

export const structure: StructureResolver = (S: StructureBuilder) =>
  S.list()
    .title('Website Content')
    .items([
      // Homepage Singleton - Easy to edit homepage content with live preview
      S.listItem()
        .title('Homepage')
        .child(S.document().schemaType('homepage').documentId('homepage'))
        .icon(HomeIcon),
      
      // Gallery Page Singleton
      S.listItem()
        .title('Galleri Side')
        .child(S.document().schemaType('galleryPage').documentId('galleryPage'))
        .icon(ImageIcon),
      
      // Services Page Singleton
      S.listItem()
        .title('Ydelser Side')
        .child(S.document().schemaType('servicesPage').documentId('servicesPage'))
        .icon(DocumentIcon),
      
      // Contact Page Singleton
      S.listItem()
        .title('Kontakt Side')
        .child(S.document().schemaType('contactPage').documentId('contactPage'))
        .icon(UserIcon),
      
      // About Page Singleton
      S.listItem()
        .title('Om Os Side')
        .child(S.document().schemaType('aboutPage').documentId('aboutPage'))
        .icon(DocumentIcon),
      
      // Competencies Page Singleton
      S.listItem()
        .title('Kompetencer Side')
        .child(S.document().schemaType('competenciesPage').documentId('competenciesPage'))
        .icon(DocumentIcon),
      
      // Footer Singleton
      S.listItem()
        .title('Footer')
        .child(S.document().schemaType('footer').documentId('footer'))
        .icon(DocumentIcon),
      
      // Settings Singleton in order to view/edit the one particular document for Settings.  Learn more about Singletons: https://www.sanity.io/docs/create-a-link-to-a-single-edit-page-in-your-main-document-type-list
      S.listItem()
        .title('Site Settings')
        .child(S.document().schemaType('settings').documentId('siteSettings'))
        .icon(CogIcon),
      
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
