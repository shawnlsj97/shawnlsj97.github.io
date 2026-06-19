import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: "https://shawnlsj97.github.io",
  integrations: [
    tailwind({
      applyBaseStyles: false
    })
  ]
});
