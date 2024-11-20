import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";

export default defineConfig({
  site: "https://zidanabraham.com/",
  output: "static",
  integrations: [
    sitemap(),
    tailwind({
      applyBaseStyles: false,
    }),
    react(),
  ],
});
