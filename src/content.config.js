// 1. Import utilities from `astro:content`
import { z, defineCollection } from "astro:content";
import { glob } from "astro/loaders"; // Not available with legacy API

// 2. Define your collection(s)
const docs = defineCollection({
  loader: glob({ pattern: "**\/[^_]*.md", base: "./src/content/docs" }),
  schema: z.object({
    title: z.string().optional(),
    tags: z.array(z.string()).optional(),
  }),
});

export const collections = { docs };
