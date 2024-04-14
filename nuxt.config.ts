const { PUBLIC_API_PATH } = process.env;

export default defineNuxtConfig({
  devtools: { enabled: false },
  devServer: { port: 8080 },

  ssr: false,
  modules: ["@nuxt/ui"],
  nitro: {
    devProxy: {
      "/api": {
        target: "http://localhost:3000/api",
      },
    },
  },
  runtimeConfig: {
    public: {
      PUBLIC_API_PATH,
    },
  },
});
