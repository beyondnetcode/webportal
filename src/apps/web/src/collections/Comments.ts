import type { CollectionConfig } from 'payload'

export const Comments: CollectionConfig = {
  slug: 'comments',
  admin: {
    useAsTitle: 'content',
  },
  access: {
    // Anyone can read approved comments. Admins and moderators can read all.
    read: ({ req: { user } }) => {
      if (user && ['admin', 'moderador'].includes(user.role as string)) return true
      return {
        status: {
          equals: 'aprobado',
        },
      }
    },
    create: () => true, // Anyone can create a comment (will default to pendiente)
    update: ({ req: { user } }) => {
      if (!user) return false
      return ['admin', 'moderador'].includes(user.role as string)
    },
    delete: ({ req: { user } }) => {
      if (!user) return false
      return ['admin', 'moderador'].includes(user.role as string)
    },
  },
  fields: [
    {
      name: 'content',
      type: 'textarea',
      required: true,
    },
    {
      name: 'post',
      type: 'relationship',
      relationTo: 'posts',
      required: true,
    },
    {
      name: 'authorName',
      type: 'text',
      required: true,
    },
    {
      name: 'status',
      type: 'select',
      options: [
        { label: 'Pendiente', value: 'pendiente' },
        { label: 'Aprobado', value: 'aprobado' },
      ],
      defaultValue: 'pendiente',
      required: true,
      admin: {
        position: 'sidebar',
      },
    },
  ],
}
