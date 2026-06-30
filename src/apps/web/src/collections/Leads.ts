import type { CollectionConfig } from 'payload'

export const Leads: CollectionConfig = {
  slug: 'leads',
  admin: { useAsTitle: 'email', defaultColumns: ['email', 'intent', 'name', 'createdAt'] },
  access: {
    // Lectura interna; creación solo vía route handler (overrideAccess) para evitar spam directo a la API.
    read: ({ req: { user } }) => !!user && ['admin', 'author', 'autor', 'moderator', 'moderador'].includes(user.role as string),
    create: ({ req: { user } }) => user?.role === 'admin',
    update: ({ req: { user } }) => user?.role === 'admin',
    delete: ({ req: { user } }) => user?.role === 'admin',
  },
  fields: [
    { name: 'name', type: 'text' },
    { name: 'email', type: 'email', required: true },
    { name: 'company', type: 'text' },
    {
      name: 'intent',
      type: 'select',
      defaultValue: 'demo',
      options: [
        { label: 'Demo', value: 'demo' },
        { label: 'Consultoría', value: 'consulting' },
        { label: 'Cotización', value: 'quote' },
      ],
    },
    { name: 'message', type: 'textarea' },
    { name: 'source', type: 'text', admin: { readOnly: true } },
  ],
}
