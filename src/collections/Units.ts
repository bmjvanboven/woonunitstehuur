import type { CollectionConfig } from 'payload'

// Woonunits die de klant beheert. (Nog niet actief in fase 1 — Payload wordt
// in de CMS-stap ingeschakeld. Deze definitie zorgt dat payload.config.ts klopt.)
export const Units: CollectionConfig = {
  slug: 'units',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'price', 'badgeLabel'],
  },
  access: {
    read: () => true,
  },
  fields: [
    { name: 'title', type: 'text', required: true },
    { name: 'slug', type: 'text', required: true, unique: true, index: true },
    { name: 'kicker', type: 'text' },
    { name: 'subtitle', type: 'text' },
    { name: 'image', type: 'upload', relationTo: 'media' },
    {
      type: 'row',
      fields: [
        { name: 'area', type: 'text', admin: { width: '25%' } },
        { name: 'bedrooms', type: 'text', admin: { width: '25%' } },
        { name: 'persons', type: 'text', admin: { width: '25%' } },
        { name: 'baths', type: 'text', admin: { width: '25%' } },
      ],
    },
    {
      type: 'row',
      fields: [
        { name: 'price', type: 'text', admin: { width: '50%' } },
        { name: 'period', type: 'text', defaultValue: 'p/mnd', admin: { width: '50%' } },
      ],
    },
    {
      name: 'badgeTone',
      type: 'select',
      defaultValue: 'success',
      options: ['success', 'gold', 'warning', 'info', 'danger', 'neutral'],
    },
    { name: 'badgeLabel', type: 'text' },
  ],
}
