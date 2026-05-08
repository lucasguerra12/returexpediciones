export const review = {
  name: 'review', // Nota: está no singular
  title: 'Avaliações de Clientes',
  type: 'document',
  fields: [
    {
      name: 'author',
      title: 'Nome do Viajante',
      type: 'string',
      readOnly: true, 
    },
    {
      name: 'rating',
      title: 'Estrelas (1 a 5)',
      type: 'number',
      readOnly: true,
    },
    {
      name: 'comment',
      title: 'Comentário',
      type: 'text',
      readOnly: true,
    },
    {
      name: 'approved',
      title: 'Aprovado?',
      description: 'Ative para exibir esta avaliação no site.',
      type: 'boolean',
      initialValue: false, 
    },
  ],
}