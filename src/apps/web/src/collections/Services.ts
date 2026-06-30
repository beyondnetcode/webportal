import type { CollectionConfig } from 'payload'

export const Services: CollectionConfig = {
  slug: 'services',
  admin: { useAsTitle: 'name', defaultColumns: ['name', 'kind', 'order'] },
  access: {
    read: () => true,
    create: ({ req: { user } }) => !!user && ['admin', 'author', 'autor'].includes(user.role as string),
    update: ({ req: { user } }) => !!user && ['admin', 'author', 'autor'].includes(user.role as string),
    delete: ({ req: { user } }) => user?.role === 'admin',
  },
  fields: [
    { name: 'name', type: 'text', required: true },
    {
      name: 'kind',
      type: 'select',
      required: true,
      defaultValue: 'consulting',
      options: [
        { label: 'Consultoría', value: 'consulting' },
        { label: 'Assessment', value: 'assessment' },
        { label: 'Desarrollo a medida', value: 'custom-dev' },
      ],
    },
    { name: 'description', type: 'textarea' },
    { name: 'ctaIntent', type: 'text', admin: { description: 'Intención del CTA (demo | consulting | quote).' } },
    { name: 'order', type: 'number', defaultValue: 0 },
  ],
}
