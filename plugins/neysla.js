import Neysla from "neysla";

export default defineNuxtPlugin((nuxtApp) => {
  const neysla = {
    notification: null,

    async init() {
      const { PUBLIC_API_PATH } = nuxtApp.$config.public;

      const { gilaSoftwareServerApi } = await new Neysla().init({
        url: PUBLIC_API_PATH,
        name: "gilaSoftwareServerApi",
        requestType: "json",
      });

      this.notification = gilaSoftwareServerApi.setModel("notification");

      console.log("Neysla is initialized!");
    },
  };

  nuxtApp.hook("app:created", () => neysla.init());

  return { provide: { neysla } };
});
