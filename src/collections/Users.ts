import type { CollectionConfig } from 'payload'

// Admin users who can log in to manage content.
export const Users: CollectionConfig = {
  slug: 'users',
  admin: {
    useAsTitle: 'email',
    group: 'Beheer',
  },
  auth: true,
  fields: [
    {
      name: 'name',
      type: 'text',
      label: 'Naam',
    },
  ],
}
