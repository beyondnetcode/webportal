import type { CollectionConfig } from 'payload'

export const Users: CollectionConfig = {
  slug: 'users',
  auth: true,
  admin: {
    useAsTitle: 'email',
  },
  access: {
    read: () => true,
    create: ({ req: { user } }) => {
      if (user?.role === 'admin') return true
      return false
    },
    update: ({ req: { user } }) => {
      if (user?.role === 'admin') return true
      return false
    },
    delete: ({ req: { user } }) => {
      if (user?.role === 'admin') return true
      return false
    },
  },
  fields: [
    {
      name: 'role',
      type: 'select',
      options: [
        { label: 'Administrador', value: 'admin' },
        { label: 'Autor', value: 'autor' },
        { label: 'Moderador', value: 'moderador' },
      ],
      defaultValue: 'autor',
      required: true,
    },
  ],
}
