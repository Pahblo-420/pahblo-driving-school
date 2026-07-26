import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Define the Learner's Hub resources collection
const resources = defineCollection({
  // The new loader API
  loader: glob({ pattern: "**/*.md", base: "./src/content/resources" }),
  
  // The frontmatter schema for your markdown files
  schema: z.object({
    title: z.string(),
    description: z.string(),
  })
});

export const collections = { resources };