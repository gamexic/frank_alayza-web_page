// Colección de contenido (blog). Astro 5 content layer con glob loader.
// Los archivos viven en src/content/blog/contenido-<tema>.md y los escriben
// los agentes de migración contra el CONTRATO DE FRONTMATTER de abajo.
//
// entry.id = nombre del archivo sin extensión (p. ej. 'contenido-mvp-4-semanas'),
// lo que —con build.format 'file'— produce /contenido-mvp-4-semanas.html,
// preservando 1:1 las URLs actuales.
import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ base: './src/content/blog', pattern: '**/*.md' }),
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
    description: z.string(), // meta description
    category: z.enum([
      'ia-vida-real',
      'data-negocio',
      'construyendo-productos',
      'modelos-fundacionales',
      'escalada-disciplina',
    ]),
    readingTime: z.number(), // minutos
    idea: z.string(), // callout "Idea central"
    checklist: z.array(z.string()), // checklist de implementación
    ctaTitle: z.string(),
    ctaText: z.string(),
  }),
});

export const collections = { blog };
