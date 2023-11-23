// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "nuxt-svgo",
    "nuxt-lodash",
    "@nuxt/image",
    "@vite-pwa/nuxt",
  ],
  tailwindcss: {
    cssPath: "~/scss/tw.scss",
  },
  css: ["~/scss/main.scss"],
  app: {
    head: {},
    pageTransition: { name: "page", mode: "out-in" },
  },
});
