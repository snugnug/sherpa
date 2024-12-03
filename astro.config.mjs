// @ts-check
// @ts-check
import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://the-unnamed-nug.github.io",
  base: "/sherpa",
  integrations: [tailwind()],
});
