/**
 * This config is used to configure your Sanity Studio.
 * Learn more: https://www.sanity.io/docs/configuration
 */

import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './src/schemaTypes'
import {structure} from './src/structure'
import {unsplashImageAsset} from 'sanity-plugin-asset-source-unsplash'
import {
  presentationTool,
  defineDocuments,
  defineLocations,
  type DocumentLocation,
} from 'sanity/presentation'
import {assist} from '@sanity/assist'
// Environment variables for project configuration
const projectId = process.env.SANITY_STUDIO_PROJECT_ID || 'sbwzmaqo'
const dataset = process.env.SANITY_STUDIO_DATASET || 'production'

// URL for preview functionality - supports both local and production
const SANITY_STUDIO_PREVIEW_URL = 
  process.env.SANITY_STUDIO_PREVIEW_URL || 
  process.env.NODE_ENV === 'production' 
    ? 'https://next.mtrabat.dk' // Points to next branch deployment
    : 'http://localhost:3000'

// Define the home location for the presentation tool
const homeLocation = {
  title: 'Home',
  href: '/',
} satisfies DocumentLocation

// resolveHref() is a convenience function that resolves the URL
// path for different document types and used in the presentation tool.
function resolveHref(documentType?: string): string | undefined {
  switch (documentType) {
    case 'galleryPage':
      return '/galleri'
    case 'servicesPage':
      return '/ydelser'
    case 'contactPage':
      return '/kontakt'
    case 'aboutPage':
      return '/om-os'
    case 'competenciesPage':
      return '/kompetencer'
    case 'homepage':
      return '/'
    default:
      console.warn('Invalid document type:', documentType)
      return undefined
  }
}

// Main Sanity configuration
export default defineConfig({
  name: 'default',
  title: 'Sanity + Next.js Starter Template',

  projectId,
  dataset,

  plugins: [
    // Presentation tool configuration for Visual Editing
    presentationTool({
      previewUrl: {
        origin: SANITY_STUDIO_PREVIEW_URL,
        previewMode: {
          enable: '/api/draft-mode/enable',
        },
      },
      // Allow both local and production origins
      allowOrigins: [
        'http://localhost:3000', 
        'https://mt-rabat.vercel.app',
        'https://next.mtrabat.dk'
      ],
      resolve: {
        // The Main Document Resolver API provides a method of resolving a main document from a given route or route pattern. https://www.sanity.io/docs/presentation-resolver-api#57720a5678d9
        mainDocuments: defineDocuments([
          {
            route: '/',
            filter: `_type == "homepage" || _type == "footer"`,
          },
          {
            route: '/galleri',
            filter: `_type == "galleryPage" || _type == "footer"`,
          },
          {
            route: '/ydelser',
            filter: `_type == "servicesPage" || _type == "footer"`,
          },
          {
            route: '/kontakt',
            filter: `_type == "contactPage" || _type == "footer"`,
          },
          {
            route: '/om-os',
            filter: `_type == "aboutPage" || _type == "footer"`,
          },
          {
            route: '/kompetencer',
            filter: `_type == "competenciesPage" || _type == "footer"`,
          },
        ]),
        // Locations Resolver API allows you to define where data is being used in your application. https://www.sanity.io/docs/presentation-resolver-api#8d8bca7bfcd7
        locations: {
          homepage: defineLocations({
            locations: [homeLocation],
            message: 'This document is used on the homepage',
            tone: 'positive',
          }),
          settings: defineLocations({
            locations: [homeLocation],
            message: 'This document is used on all pages',
            tone: 'positive',
          }),
          footer: defineLocations({
            locations: [
              homeLocation,
              { title: 'Galleri', href: '/galleri' },
              { title: 'Ydelser', href: '/ydelser' },
              { title: 'Kontakt', href: '/kontakt' },
              { title: 'Om Os', href: '/om-os' },
              { title: 'Kompetencer', href: '/kompetencer' },
            ],
            message: 'This document is used in the footer on all pages',
            tone: 'positive',
          }),
          galleryPage: defineLocations({
            locations: [
              {
                title: 'Galleri Side',
                href: '/galleri',
              },
            ],
            message: 'This document is used on the gallery page',
            tone: 'positive',
          }),
          servicesPage: defineLocations({
            locations: [
              {
                title: 'Ydelser Side',
                href: '/ydelser',
              },
            ],
            message: 'This document is used on the services page',
            tone: 'positive',
          }),
          contactPage: defineLocations({
            locations: [
              {
                title: 'Kontakt Side',
                href: '/kontakt',
              },
            ],
            message: 'This document is used on the contact page',
            tone: 'positive',
          }),
          aboutPage: defineLocations({
            locations: [
              {
                title: 'Om Os Side',
                href: '/om-os',
              },
            ],
            message: 'This document is used on the about page',
            tone: 'positive',
          }),
          competenciesPage: defineLocations({
            locations: [
              {
                title: 'Kompetencer Side',
                href: '/kompetencer',
              },
            ],
            message: 'This document is used on the competencies page',
            tone: 'positive',
          }),
        },
      },
    }),
    structureTool({
      structure, // Custom studio structure configuration, imported from ./src/structure.ts
    }),
    // Additional plugins for enhanced functionality
    unsplashImageAsset(),
    assist(),
    visionTool(),
  ],

  // Schema configuration, imported from ./src/schemaTypes/index.ts
  schema: {
    types: schemaTypes,
  },

  // Webhook configuration (set up in Sanity Management)
  // To set up webhooks for automatic redeployment:
  // 1. Go to https://manage.sanity.io/projects/{projectId}/webhooks
  // 2. Create a new webhook with URL: https://mt-rabat.vercel.app/api/revalidate
  // 3. Set it to trigger on "create", "update", and "delete" events
  // 4. Add a secret and set SANITY_WEBHOOK_SECRET in your Vercel environment variables
})
