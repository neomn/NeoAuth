// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
  ],
  buildModules: ['@nuxtjs/pwa'],
  pwa: {
    manifest: {
      name: 'name',
      description: "Desc",
      theme_color: '#607D8B',
      short_name: 'shortname'
    },
  },
})
