// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  
  modules: [
    '@nuxt/content',
    '@nuxtjs/tailwindcss',
    '@nuxt/image',
    '@nuxt/icon',
    '@nuxthq/studio'
  ],

  content: {
    // Content module configuration
    highlight: {
      theme: 'github-light'
    },
    documentDriven: true
  },

  studio: {
    enabled: true
  },

  nitro: {
    prerender: {
      routes: ['/sitemap.xml']
    }
  },

  image: {
    // Image optimization
    quality: 80,
    format: ['webp']
  },

  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  },

  css: ['~/assets/css/main.css']
})