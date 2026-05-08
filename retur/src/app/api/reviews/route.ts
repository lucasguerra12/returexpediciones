import { createClient } from 'next-sanity';
import { NextResponse } from 'next/server';

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  useCdn: false,
  token: process.env.SANITY_API_WRITE_TOKEN, 
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { author, rating, comment } = body;

    // Cria o documento no Sanity
    const result = await client.create({
      _type: 'review',
      author,
      rating: Number(rating),
      comment,
      approved: false, // Toda avaliação nasce reprovada para moderação
    });

    return NextResponse.json({ message: 'Avaliação enviada com sucesso!', id: result._id });
  } catch (err) {
    console.error('Erro ao enviar avaliação:', err);
    return NextResponse.json({ message: 'Erro ao processar avaliação.' }, { status: 500 });
  }
}