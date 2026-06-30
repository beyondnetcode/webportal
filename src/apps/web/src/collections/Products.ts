import type { CollectionConfig } from 'payload'

export const Products: CollectionConfig = {
  slug: 'products',
  admin: { useAsTitle: 'name', defaultColumns: ['name', 'type', 'featured', 'order'] },
  access: {
    read: () => true, // público (AD-3)
    create: ({ req: { user } }) => !!user && ['admin', 'author', 'autor'].includes(user.role as string),
    update: ({ req: { user } }) => !!user && ['admin', 'author', 'autor'].includes(user.role as string),
    delete: ({ req: { user } }) => user?.role === 'admin',
  },
  fields: [
    { name: 'name', type: 'text', required: true },
    { name: 'slug', type: 'text', required: true, unique: true, index: true },
    {
      name: 'type',
      type: 'select',
      required: true,
      defaultValue: 'oss',
      options: [
        { label: 'OSS', value: 'oss' },
        { label: 'SaaS', value: 'saas' },
        { label: 'Enterprise', value: 'enterprise' },
        { label: 'Librería', value: 'library' },
      ],
    },
    { name: 'shortDesc', type: 'textarea' },
    { name: 'longDesc', type: 'textarea' },
    {
      name: 'links',
      type: 'group',
      fields: [
        { name: 'github', type: 'text' },
        { name: 'nuget', type: 'text' },
        { name: 'docs', type: 'text' },
        { name: 'demo', type: 'text' },
      ],
    },
    { name: 'featured', type: 'checkbox', defaultValue: false },
    { name: 'order', type: 'number', defaultValue: 0 },
  ],
}
