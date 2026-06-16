import type { CollectionConfig } from 'payload'

// Uploaded images (unit photos, etc.). Stored on local disk in dev;
// switch to Vercel Blob / S3 storage before deploying to production.
export const Media: CollectionConfig = {
  slug: 'media',
  admin: {
    group: 'Beheer',
  },
  access: {
    read: () => true,
  },
  upload: {
    staticDir: 'media',
    imageSizes: [
      { name: 'thumbnail', width: 400 },
      { name: 'card', width: 768 },
      { name: 'hero', width: 1600 },
    ],
    mimeTypes: ['image/*'],
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      label: 'Alt-tekst',
      required: true,
    },
  ],
}
