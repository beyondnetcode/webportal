import type { GlobalConfig } from 'payload'

export const Home: GlobalConfig = {
  slug: 'home',
  label: 'Landing (Home)',
  access: {
    read: () => true, // público (AD-3: lectura intencional)
    // Editores: admin/author (acepta roles ES/EN durante la transición AD-8).
    update: ({ req: { user } }) => {
      if (!user) return false
      return ['admin', 'author', 'autor'].includes(user.role as string)
    },
  },
  fields: [
    {
      name: 'hero',
      type: 'group',
      fields: [
        { name: 'kicker', type: 'text' },
        { name: 'title', type: 'text' },
        { name: 'titleHighlight', type: 'text', admin: { description: 'Palabra/frase resaltada en dorado dentro del título.' } },
        { name: 'subtitle', type: 'textarea' },
        { name: 'ctaPrimaryLabel', type: 'text' },
        { name: 'ctaSecondaryLabel', type: 'text' },
        { name: 'note', type: 'text' },
      ],
    },
    { name: 'techs', type: 'array', fields: [{ name: 'name', type: 'text', required: true }] },
    {
      name: 'features',
      type: 'array',
      fields: [
        { name: 'icon', type: 'text', admin: { description: 'Clase de icono Tabler, p. ej. ti-shield-check' } },
        { name: 'title', type: 'text', required: true },
        { name: 'text', type: 'textarea' },
      ],
    },
    {
      name: 'stats',
      type: 'array',
      fields: [
        { name: 'num', type: 'text', required: true },
        { name: 'label', type: 'text', required: true },
      ],
    },
    {
      name: 'testimonial',
      type: 'group',
      fields: [
        { name: 'quote', type: 'textarea' },
        { name: 'authorName', type: 'text' },
        { name: 'authorRole', type: 'text' },
        { name: 'initials', type: 'text' },
      ],
    },
    {
      name: 'finalCta',
      type: 'group',
      fields: [
        { name: 'title', type: 'text' },
        { name: 'subtitle', type: 'textarea' },
        { name: 'primaryLabel', type: 'text' },
        { name: 'secondaryLabel', type: 'text' },
      ],
    },
  ],
}
