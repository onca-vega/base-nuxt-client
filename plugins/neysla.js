import Neysla from "neysla";

export default defineNuxtPlugin((nuxtApp) => {
  const neysla = {
    submission: null,
    logs: null,

    async init() {
      const { PUBLIC_API_PATH } = nuxtApp.$config.public;

      const { gilaSoftwareServerApi } = await new Neysla().init({
        url: PUBLIC_API_PATH,
        name: "gilaSoftwareServerApi",
        requestType: "json",
      });

      this.submission = gilaSoftwareServerApi.setModel("submission");
      this.logs = gilaSoftwareServerApi.setModel("logs");

      console.log("Neysla is initialized!");
    },
  };

  nuxtApp.hook("app:created", () => neysla.init());

  return { provide: { neysla } };
});
