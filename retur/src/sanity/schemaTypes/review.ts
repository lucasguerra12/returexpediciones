export const review = {
  name: 'review', 
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
    {
      name: 'reply',
      title: 'Resposta da Agência (Opcional)',
      description: 'Escreva uma resposta para este viajante. Ela aparecerá publicamente no site, logo abaixo da avaliação.',
      type: 'text',
    },
  ],
}