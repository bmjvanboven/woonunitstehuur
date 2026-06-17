import type { CollectionConfig } from 'payload'

// Vrije inhoudspagina's (over ons, FAQ, voorwaarden, …). Nog niet actief in fase 1.
export const Pages: CollectionConfig = {
  slug: 'pages',
  admin: {
    useAsTitle: 'title',
  },
  access: {
    read: () => true,
  },
  fields: [
    { name: 'title', type: 'text', required: true },
    { name: 'slug', type: 'text', required: true, unique: true, index: true },
    { name: 'content', type: 'richText' },
  ],
}
