"use client";

import { NextStudio } from 'next-sanity/studio';
import config from '../../../../../sanity.config';
import { useEffect, useState } from 'react';

export default function StudioPage() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);
  if (!isMounted) {
    return (
      <div style={{ display: 'flex', height: '100vh', justifyContent: 'center', alignItems: 'center', backgroundColor: '#fafafa', fontFamily: 'sans-serif' }}>
        <p style={{ color: '#555' }}>Carregando Painel Administrativo...</p>
      </div>
    );
  }
  return <NextStudio config={config} />;
}