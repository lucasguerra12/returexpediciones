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
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'category',
      title: 'Categoria',
      type: 'string',
      options: {
        list: [
          { title: 'Dicas de Viagem', value: 'dicas' },
          { title: 'Roteiros', value: 'roteiros' },
          { title: 'Curiosidades', value: 'curiosidades' },
          { title: 'Gastronomia', value: 'gastronomia' },
        ],
        layout: 'dropdown', 
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'resumo',
      title: 'Resumo (Chamada do Artigo)',
      type: 'text',
      description: 'Um texto curto de 2 a 3 linhas que vai aparecer no card principal do blog.',
      validation: (Rule: any) => Rule.max(200),
    },
    {
      name: 'mainImage',
      title: 'Imagem de Capa',
      type: 'image',
      options: { hotspot: true },
    },
    {
      name: 'publishedAt',
      title: 'Data de Publicação',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    },
    {
      name: 'body',
      title: 'Texto do Artigo',
      type: 'array',
      of: [{ type: 'block' }],
    },
  ],
}