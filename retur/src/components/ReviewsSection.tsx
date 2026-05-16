"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export function ReviewsSection({ reviews }: { reviews: any[] }) {
  const [mostrarTodas, setMostrarTodas] = useState(false);
  
  // 1. Criamos um estado para saber se o componente já "montou" no navegador
  const [isMounted, setIsMounted] = useState(false);

  // 2. O useEffect só roda no navegador do cliente, após o primeiro render
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const reviewsVisiveis = mostrarTodas ? reviews : reviews.slice(0, 3);

  return (
    <section className="py-24 px-8 bg-white transition-all duration-500">
      <div className="max-w-[1440px] mx-auto w-full">
        
        {/* CABEÇALHO */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="text-left">
            <h2 className="text-4xl font-bold text-[#221a15] mb-4">O Que Dizem Nossos Viajantes</h2>
            <p className="text-gray-500">Experiências reais de quem já desbravou os Andes com a gente.</p>
          </div>
          
          <div className="flex flex-wrap gap-4 justify-start md:justify-end">
            {reviews.length > 3 && (
              <button 
                onClick={() => setMostrarTodas(!mostrarTodas)}
                className="bg-white text-[#D4773C] border-2 border-[#D4773C] px-8 py-3 rounded-xl font-bold text-sm hover:bg-[#FFF4F0] transition-all shadow-sm"
              >
                {mostrarTodas ? "Mostrar menos" : `Ver todas (${reviews.length})`}
              </button>
            )}
            
            <Link 
              href="#avaliar" 
              className="bg-[#D4773C] text-white px-8 py-3 rounded-xl font-bold text-sm hover:bg-orange-700 transition-all shadow-md"
            >
              Deixar Avaliação
            </Link>
          </div>
        </div>
        
        {/* O GRID DE AVALIAÇÕES */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviewsVisiveis.map((review: any) => (
            <div key={review._id} className="bg-[#FFF4F0] p-10 rounded-3xl flex flex-col justify-between hover:shadow-md transition-shadow relative">
              <div className="mb-6">
                <div className="flex gap-1 mb-6 text-yellow-500">
                  {[...Array(5)].map((_, i) => (
                    <span 
                      key={i} 
                      className={`material-symbols-outlined text-[20px] ${i < review.rating ? 'fill-current' : 'text-gray-300'}`} 
                      style={{ fontVariationSettings: i < review.rating ? "'FILL' 1" : "'FILL' 0" }}
                    >
                      star
                    </span>
                  ))}
                </div>
                <p className="text-[#221a15] italic leading-relaxed text-lg">"{review.comment}"</p>
                
                {/* --- SEÇÃO: RESPOSTA DA AGÊNCIA --- */}
                {review.reply && (
                  <div className="mt-8 bg-white/70 p-5 rounded-2xl border-l-4 border-[#D4773C] relative">
                    <div className="absolute -top-3 left-4 bg-[#D4773C] text-white text-[10px] uppercase tracking-widest font-bold px-3 py-1 rounded-full flex items-center gap-1">
                      <span className="material-symbols-outlined text-[12px]">support_agent</span>
                      Retur Responde
                    </div>
                    <p className="text-sm text-[#55433a] leading-relaxed pt-2">
                      {review.reply}
                    </p>
                  </div>
                )}
                {/* --------------------------------------- */}

              </div>
              
              <div className="flex items-center gap-4 mt-auto pt-6 border-t border-[#f0dfd7]">
                <div className="w-14 h-14 bg-[#D4773C] text-white rounded-full flex items-center justify-center font-bold text-2xl shadow-sm shrink-0">
                  {review.author?.charAt(0).toUpperCase()}
                </div>
                <div>
                  <h5 className="font-bold text-sm text-[#221a15]">{review.author}</h5>
                  <span className="text-[10px] text-gray-500 uppercase tracking-widest">
                    {/* 3. Só mostramos a data se o componente já estiver montado no cliente. Também trocamos 'date' para '_createdAt', que é como o Sanity salva a data de criação */}
                    {isMounted ? new Date(review._createdAt || new Date()).toLocaleDateString('pt-BR', { month: 'long', year: 'numeric' }) : "..."}
                  </span>
                </div>
              </div>
            </div>
          ))}

          {reviewsVisiveis.length === 0 && (
            <p className="col-span-full text-center text-gray-400 py-10">Nenhuma avaliação aprovada no momento.</p>
          )}
        </div>
        
        {/* LINK PARA O GOOGLE */}
        <div className="mt-16 flex justify-center">
          <a 
            href="https://www.google.com/search?q=retur+expediciones..."
            target="_blank" 
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 bg-white text-[#221a15] px-8 py-4 rounded-full border border-gray-200 shadow-sm hover:border-[#D4773C] hover:shadow-md transition-all duration-300"
          >
            <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" alt="Google Logo" className="w-5 h-5" />
            <span className="font-bold text-sm tracking-widest uppercase text-gray-700 group-hover:text-[#D4773C] transition-colors">
              Ver outras avaliações no Google
            </span>
            <span className="material-symbols-outlined text-gray-400 group-hover:text-[#D4773C] group-hover:translate-x-1 transition-all">
              arrow_forward
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}