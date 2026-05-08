"use client";

import { NextStudio } from 'next-sanity/studio';
import config from '../../../../../sanity.config';
import { useEffect, useState } from 'react';

export default function StudioPage() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // Avisa que o site já chegou no navegador do usuário
    setIsMounted(true);
  }, []);

  // Enquanto estiver no servidor da Vercel, mostramos apenas uma tela de carregamento (evitando o erro do window)
  if (!isMounted) {
    return (
      <div style={{ display: 'flex', height: '100vh', justifyContent: 'center', alignItems: 'center', backgroundColor: '#fafafa', fontFamily: 'sans-serif' }}>
        <p style={{ color: '#555' }}>Carregando Painel Administrativo...</p>
      </div>
    );
  }

  // Quando chegar no navegador com segurança, carrega o painel pesado
  return <NextStudio config={config} />;
}