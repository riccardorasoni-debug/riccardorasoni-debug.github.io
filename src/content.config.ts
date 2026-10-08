import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const papers = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/papers' }),
  schema: z.object({
    title: z.string(),
    shortTitle: z.string().optional(),
    category: z.string(),
    status: z.enum(['Working paper', 'Work in progress', 'Published', 'Forthcoming']),
    year: z.number().int(),
    description: z.string(),
    coauthors: z.array(z.string()).default([]),
    keywords: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
    order: z.number().int().default(50),
    pdf: z.string().optional(),
    external: z.url().optional(),
  }),
});
export const collections = { papers };
