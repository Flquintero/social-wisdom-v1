import mixpanel from "mixpanel-browser";

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig();
  mixpanel.init(config.public.MIXPANEL_PROJECT_TOKEN, {
    debug: true,
    track_pageview: true,
    persistence: "localStorage",
  });
});
