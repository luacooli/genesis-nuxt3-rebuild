// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from "pathe";
import { useLayers } from "nuxt-layers-utils";

const layers = useLayers(__dirname, {
  core: "core",
  portal: "layers/portal",
  dicomvix: "layers/dicomvix",
});

export default defineNuxtConfig({
  extends: ["@nuxt/ui-pro", layers.extends()],

  alias: {
    // layers.alias('#')
    "#core": resolve("core"),
    "#portal": resolve("layers/portal"),
    "#dicomvix": resolve("layers/dicomvix"),
  },

  dir: {
    // core
    ...layers.dir("core", ["layouts", "pages", "middleware"]),

    // portal
    ...layers.dir("portal", ["pages"]),

    // dicomvix
    ...layers.dir("dicomvix", ["pages"]),
  },

  modules: [
    "@nuxt/content",
    "@nuxt/eslint",
    "@nuxt/fonts",
    "@nuxt/image",
    "@nuxt/ui",
    "@nuxthq/studio",
    "@vueuse/nuxt",
    "nuxt-og-image",
    "@formkit/nuxt",
  ],

  hooks: {
    // Define `@nuxt/ui` components as global to use them in `.md` (feel free to add those you need)
    "components:extend": (components) => {
      const globals = components.filter((c) =>
        ["UButton"].includes(c.pascalName)
      );

      globals.forEach((c) => (c.global = true));
    },
  },

  colorMode: {
    disableTransition: true,
  },

  routeRules: {
    // Temporary workaround for prerender regression. see https://github.com/nuxt/nuxt/issues/27490
    "/": { prerender: true },
    "/api/search.json": { prerender: true },
  },

  devtools: {
    enabled: true,
  },

  typescript: {
    strict: false,
  },

  future: {
    compatibilityVersion: 4,
  },

  eslint: {
    config: {
      stylistic: {
        commaDangle: "never",
        braceStyle: "1tbs",
      },
    },
  },

  compatibilityDate: "2024-07-11",
});
