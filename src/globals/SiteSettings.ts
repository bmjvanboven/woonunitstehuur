import type { GlobalConfig } from 'payload'

// Site-brede instellingen (contactgegevens e.d.). Nog niet actief in fase 1.
export const SiteSettings: GlobalConfig = {
  slug: 'site-settings',
  access: {
    read: () => true,
  },
  fields: [
    { name: 'phone', type: 'text', defaultValue: '085 — 902 6800' },
    { name: 'email', type: 'text', defaultValue: 'info@woonunitstehuur.nl' },
    { name: 'region', type: 'text', defaultValue: 'Heel Nederland' },
  ],
}
