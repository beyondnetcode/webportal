import type { CollectionConfig } from 'payload'

export const Cases: CollectionConfig = {
  slug: 'cases',
  admin: { useAsTitle: 'title', defaultColumns: ['title', 'client', 'sector', 'featured'] },
  access: {
    read: () => true,
    create: ({ req: { user } }) => !!user && ['admin', 'author', 'autor'].includes(user.role as string),
    update: ({ req: { user } }) => !!user && ['admin', 'author', 'autor'].includes(user.role as string),
    delete: ({ req: { user } }) => user?.role === 'admin',
  },
  fields: [
    { name: 'title', type: 'text', required: true },
    { name: 'client', type: 'text' },
    { name: 'sector', type: 'text' },
    { name: 'summary', type: 'textarea' },
    { name: 'url', type: 'text' },
    { name: 'featured', type: 'checkbox', defaultValue: false },
    { name: 'order', type: 'number', defaultValue: 0 },
  ],
}
