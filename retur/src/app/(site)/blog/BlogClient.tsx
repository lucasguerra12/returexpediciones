"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

// Tipagem do que vem do Sanity
type Post = {
  _id: string;
  title: string;
  slug: string;
  category: string;
  resumo: string;
  imageUrl: string;
  publishedAt: string;
};

export default function BlogClient({ posts }: { posts: Post[] }) {
  const [categoriaAtiva, setCategoriaAtiva] = useState("Todas");
  const [paginaAtual, setPaginaAtual] = useState(1);
  const postsPorPagina = 4; 
  const categoriasExistentes = Array.from(new Set(posts.map((post) => post.category)));
  const abas = ["Todas", ...categoriasExistentes];

  // 2. Filtro de Categoria
  const postsFiltrados = categoriaAtiva === "Todas" 
    ? posts 
    : posts.filter(post => post.category === categoriaAtiva);

  // 3. Paginação
  const totalPaginas = Math.ceil(postsFiltrados.length / postsPorPagina);
  const indexUltimoPost = paginaAtual * postsPorPagina;
  const indexPrimeiroPost = indexUltimoPost - postsPorPagina;
  const postsAtuais = postsFiltrados.slice(indexPrimeiroPost, indexUltimoPost);

  const mudarCategoria = (categoria: string) => {
    setCategoriaAtiva(categoria);
    setPaginaAtual(1); 
  };

  const irParaPagina = (pagina: number) => {
    setPaginaAtual(pagina);
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 500, behavior: 'smooth' });
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-8 py-20 w-full">
      
      {/* NAVEGAÇÃO DE ABAS (Categorias Dinâmicas) */}
      <div className="flex flex-wrap gap-4 justify-center mb-16">
        {abas.map((aba) => (
          <button
            key={aba}
            onClick={() => mudarCategoria(aba)}
            className={`px-6 py-2 rounded-full font-bold text-sm uppercase tracking-widest transition-all ${
              categoriaAtiva === aba 
                ? "bg-[#D4773C] text-white shadow-lg" 
                : "bg-white text-slate-500 border border-slate-200 hover:border-[#D4773C] hover:text-[#D4773C]"
            }`}
          >
            {aba === "dicas" ? "Dicas de Viagem" : aba === "roteiros" ? "Roteiros" : aba}
          </button>
        ))}
      </div>

      {/* GRID DE ARTIGOS */}
      {postsFiltrados.length === 0 ? (
        <p className="text-center text-slate-500 py-10">Nenhum artigo encontrado nesta categoria ainda.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
          {postsAtuais.map((post) => (
            <Link href={`/blog/${post.slug}`} key={post._id} className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl border border-slate-100 group cursor-pointer flex flex-col transition-all duration-300 hover:-translate-y-2">
              <div className="aspect-[16/9] relative overflow-hidden bg-slate-200">
                {post.imageUrl ? (
                  <Image src={post.imageUrl} alt={post.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                ) : (
                   <div className="absolute inset-0 flex items-center justify-center text-slate-400">Sem imagem</div>
                )}
                <div className="absolute top-4 left-4 bg-[#D4773C] text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">
                  {post.category}
                </div>
              </div>
              
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold mb-4 leading-tight text-[#221a15] group-hover:text-[#D4773C] transition-colors">
                  {post.title}
                </h3>
                <p className="text-[#55433a] font-inter text-sm mb-8 line-clamp-3 leading-relaxed flex-grow">
                  {post.resumo || "Clique para ler o artigo completo..."}
                </p>
                <div className="flex items-center justify-between border-t border-slate-100 pt-6 mt-auto">
                  <p className="text-xs font-inter text-slate-400 font-bold">
                    {new Date(post.publishedAt).toLocaleDateString('pt-BR')}
                  </p>
                  <span className="material-symbols-outlined text-[#D4773C] group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}

      {/* PAGINAÇÃO */}
      {totalPaginas > 1 && (
        <div className="mt-16 flex justify-center gap-2">
          <button onClick={() => irParaPagina(paginaAtual - 1)} disabled={paginaAtual === 1} className="w-12 h-12 flex items-center justify-center rounded-xl border border-slate-200 text-slate-400 hover:border-[#D4773C] hover:text-[#D4773C] transition-all disabled:opacity-50 disabled:cursor-not-allowed bg-white">
            <span className="material-symbols-outlined">chevron_left</span>
          </button>
          {[...Array(totalPaginas)].map((_, index) => {
            const numPagina = index + 1;
            return (
              <button key={numPagina} onClick={() => irParaPagina(numPagina)} className={`w-12 h-12 flex items-center justify-center rounded-xl font-bold transition-all ${paginaAtual === numPagina ? "bg-[#D4773C] text-white shadow-md" : "border border-slate-200 text-slate-600 hover:border-[#D4773C] hover:text-[#D4773C] bg-white"}`}>
                {numPagina}
              </button>
            );
          })}
          <button onClick={() => irParaPagina(paginaAtual + 1)} disabled={paginaAtual === totalPaginas} className="w-12 h-12 flex items-center justify-center rounded-xl border border-slate-200 text-slate-400 hover:border-[#D4773C] hover:text-[#D4773C] transition-all disabled:opacity-50 disabled:cursor-not-allowed bg-white">
            <span className="material-symbols-outlined">chevron_right</span>
          </button>
        </div>
      )}
    </div>
  );
}