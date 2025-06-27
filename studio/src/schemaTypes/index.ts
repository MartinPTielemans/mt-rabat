import {galleryPage} from './singletons/galleryPage'
import {contactPage} from './singletons/contactPage'
import {servicesPage} from './singletons/servicesPage'
import {aboutPage} from './singletons/aboutPage'
import {competenciesPage} from './singletons/competenciesPage'
import {footer} from './singletons/footer'
import {page} from './documents/page'

import {person} from './documents/person'
import {callToAction} from './objects/callToAction'
import {infoSection} from './objects/infoSection'
import {settings} from './singletons/settings'
import {link} from './objects/link'
import {blockContent} from './objects/blockContent'
import {homepage} from './singletons/homepage'

// Export an array of all the schema types.  This is used in the Sanity Studio configuration. https://www.sanity.io/docs/schema-types

export const schemaTypes = [
  // Singletons
  settings,
  homepage,
  galleryPage,
  contactPage,
  servicesPage,
  aboutPage,
  competenciesPage,
  footer,
  // Documents
  page,
  
  person,
  // Objects
  blockContent,
  infoSection,
  callToAction,
  link,
]
