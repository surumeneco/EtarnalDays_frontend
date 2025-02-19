// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  components: true,

  css: ["@/assets/styles/reset.css", "bootstrap/dist/css/bootstrap.min.css", "bootstrap-icons/font/bootstrap-icons.css", "@/assets/styles/default.scss"],

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/styles/_variables.scss";',
        },
      },
    },
  },

  app: {
    head: {
      title: "Eternalia",
    },
  },

  compatibilityDate: "2025-02-19",
});
