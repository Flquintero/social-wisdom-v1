// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      title: "Social Wisdom | Get your answers from social",
      htmlAttrs: {
        lang: "en",
      },
      meta: [
        {
          name: "og:title",
          content: "Social Wisdom | Get your answers from social",
        },
        // {
        //   name: "image",
        //   content: "public/img/ogImage",
        // },
        // {
        //   name: "og:image",
        //   content: "public/img/ogImage",
        // },
        {
          name: "description",
          content:
            "Social Wisdom helps answer questions with the power of social media",
        },
        {
          name: "og:description",
          content:
            "Social Wisdom helps answer questions with the power of social media",
        },
      ],
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1 maximum-scale=1",
      script: [
        {
          hid: "gtm-script1",
          src: `https://www.googletagmanager.com/gtag/js?id=${process.env.NUXT_ENV_GTM_ID}`,
          async: true,
        },
        {
          hid: "gtm-script2",
          innerHTML: `window.dataLayer = window.dataLayer || []; 
          function gtag(){dataLayer.push(arguments);}gtag('js', new Date());
          gtag('config', '${process.env.NUXT_ENV_GTM_ID}');`,
        },
        {
          hid: "fb-pixel-script1",
          innerHTML: `!function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '${process.env.NUXT_ENV_FACEBOOK_PIXEL_ID}');
          fbq('track', 'PageView');`,
        },
        {
          hid: "termly-script-pp",
          type: "text/javascript",
          async: true,
          innerHTML: `(function (d, s, id) {
            var js,tjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) return;
            js = d.createElement(s);
            js.id = id;
            js.src = "https://app.termly.io/embed-policy.min.js";
            tjs.parentNode.insertBefore(js, tjs);
          })(document, "script", "termly-jssdk");`,
        },
      ],
      noscript: [
        {
          innerHTML: `<img height="1" width="1" style="display:none"
          src="https://www.facebook.com/tr?id=${process.env.NUXT_ENV_FACEBOOK_PIXEL_ID}&ev=PageView&noscript=1"
          />`,
        },
      ],
    },
  },
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
    public: {
      SENDGRID_API_KEY: process.env.NUXT_ENV_SENDGRID_API_KEY,
      ALGOLIA_ACCOUNT_ID: process.env.NUXT_ENV_ALGOLIA_ACCOUNT_ID,
      ALGOLIA_API_KEY: process.env.NUXT_ENV_ALGOLIA_API_KEY,
      ALGOLIA_INDEX: process.env.NUXT_ENV_ALGOLIA_INDEX,
      LOGROCKET_APP_ID: process.env.NUXT_ENV_LOGROCKET_APP_ID,
      MIXPANEL_PROJECT_TOKEN: process.env.NUXT_ENV_MIXPANEL_PROJECT_TOKEN,
    },
  },
});
