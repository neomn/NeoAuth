// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
  ],
  buildModules: ['@nuxtjs/pwa'],
  pwa: {
    /* PWA options */
  },
})
