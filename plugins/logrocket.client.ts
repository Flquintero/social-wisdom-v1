import LogRocket from "logrocket";

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig();
  LogRocket.init(config.public.LOGROCKET_APP_ID);
});
