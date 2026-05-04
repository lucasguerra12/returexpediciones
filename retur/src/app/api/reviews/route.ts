import { NextResponse } from 'next/server';

export async function GET() {
  const PLACE_ID = 'SEU_PLACE_ID_DO_GOOGLE';
  const API_KEY = process.env.GOOGLE_MAPS_API_KEY;

  const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${PLACE_ID}&fields=reviews,rating&key=${API_KEY}`;

  const res = await fetch(url);
  const data = await res.json();

  return NextResponse.json(data.result.reviews);
}