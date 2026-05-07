"use client";

import { useState, useEffect } from "react";

export function CookieBanner() {
  const [isMounted, setIsMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // 1. Avisa que o site já "nasceu" no navegador
    setIsMounted(true);
    
    // 2. Agora sim, com segurança, verifica o cookie
    const consent = localStorage.getItem("cookie_consent");
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  // Se ainda não montou no navegador ou se não for visível, retorna vazio (evita o erro de hidratação)
  if (!isMounted || !isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-retur-texto text-white p-6 z-50 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-4">
      <div className="text-sm md:text-base opacity-90 max-w-4xl">
        Utilizamos cookies para melhorar a sua experiência, analisar o tráfego do site e personalizar anúncios. 
        Ao continuar a navegar, você concorda com a nossa política de privacidade.
      </div>
      <div className="flex gap-4 shrink-0">
        <button 
          onClick={() => {
            localStorage.setItem("cookie_consent", "true");
            setIsVisible(false);
          }}
          className="bg-retur-terra hover:bg-orange-700 text-white px-6 py-2 rounded-md font-bold transition-colors whitespace-nowrap"
        >
          Aceitar e Fechar
        </button>
      </div>
    </div>
  );
}