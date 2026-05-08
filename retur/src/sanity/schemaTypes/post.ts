export const post = {
  name: 'post',
  title: 'Artigos do Blog',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Título do Artigo',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'URL do Artigo (Link)',
      description: 'Clique em "Generate" para criar o link automaticamente a partir do título.',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'mainImage',
      title: 'Imagem de Capa',
      type: 'image',
      options: {
        hotspot: true, // Permite que a cliente recorte a imagem no painel
      },
    },
    {
      name: 'publishedAt',
      title: 'Data de Publicação',
      type: 'datetime',
    },
    {
      name: 'body',
      title: 'Texto do Artigo',
      type: 'array',
      of: [{ type: 'block' }], // Isso permite texto rico (negrito, itálico, listas)
    },
  ],
}