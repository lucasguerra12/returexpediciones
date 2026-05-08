import { type SchemaTypeDefinition } from 'sanity'
import { post } from './post' // Importamos o molde do blog

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [post],
}