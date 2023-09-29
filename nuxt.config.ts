// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  devtools: { enabled: true },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/scss/main.scss" as *;',
        },
      },
    },
  },
  modules: [["@nuxtjs/google-fonts", { families: { Nobel: true } }]],
  components: [
    // ~/components/special-components/Btn.vue => <SpecialBtn />
    { path: "~/components/elements", prefix: "Base" },
    { path: "~/components/functional", prefix: "Functional" },
    { path: "~/components/sections", prefix: "Section" },
    { path: "~/components/layout", prefix: "Layout" },

    // It's important that this comes last if you have overrides you wish to apply
    // to sub-directories of `~/components`.
    //
    // ~/components/Btn.vue => <Btn />
    // ~/components/base/Btn.vue => <BaseBtn />
    "~/components",
  ],
  runtimeConfig: {
    SENDGRID_API_KEY: process.env.NUXT_ENV_SENDGRID_API_KEY,
    ALGOLIA_ACCOUNT_ID: process.env.NUXT_ENV_ALGOLIA_ACCOUNT_ID,
    ALGOLIA_API_KEY: process.env.NUXT_ENV_ALGOLIA_API_KEY,
    ALGOLIA_INDEX: process.env.NUXT_ENV_ALGOLIA_INDEX,
  },
});
