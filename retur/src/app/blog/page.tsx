"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function BlogPage() {
  const todosArtigos = [
    {
      id: "valle-de-la-luna",
      titulo: "Valle de la Luna: O pôr do sol mais famoso do Atacama",
      resumo: "Caminhe por formações rochosas e dunas de areia que imitam a superfície lunar. Saiba o que esperar desse cenário mágico ao entardecer.",
      data: "15 Mai 2024",
      tempo: "4 min de leitura",
      imagem: "atacama/atacama-v-luna.jpg",
      tags: ["#Atacama", "#PôrDoSol"]
    },
    {
      id: "geysers-del-tatio",
      titulo: "Geysers del Tatio: Vale a pena acordar de madrugada?",
      resumo: "Entenda por que as fumarolas de vapor a mais de 4.300m de altitude exigem que o passeio comece antes do amanhecer.",
      data: "10 Mai 2024",
      tempo: "5 min de leitura",
      imagem: "atacama/atacama-geyser.jpg",
      tags: ["#Atacama", "#Geysers"]
    },
    {
      id: "valle-nevado-farellones",
      titulo: "Valle Nevado e Farellones: Neve e diversão perto de Santiago",
      resumo: "Tudo o que você precisa saber sobre as estações de esqui e os parques de neve mais cobiçados da Cordilheira dos Andes.",
      data: "05 Mai 2024",
      tempo: "6 min de leitura",
      imagem: "santiago/santiago-neve.jpg",
      tags: ["#Santiago", "#Neve"]
    },
    {
      id: "baltinache",
      titulo: "Lagunas Escondidas de Baltinache: O oásis turquesa",
      resumo: "Longe das multidões, um conjunto de lagoas de um azul vibrante cercadas de sal branco onde é impossível afundar.",
      data: "28 Abr 2024",
      tempo: "4 min de leitura",
      imagem: "atacama/atacama-baltinache.jpg",
      tags: ["#Atacama", "#Lagoas"]
    },
    {
      id: "tour-astronomico",
      titulo: "Tour Astronômico: Lendo o céu do Deserto do Atacama",
      resumo: "Aprenda sobre a cosmovisão andina e observe planetas e constelações pelos telescópios no céu mais limpo da Terra.",
      data: "22 Abr 2024",
      tempo: "5 min de leitura",
      imagem: "atacama/atacama-astros.jpg",
      tags: ["#Atacama", "#Estrelas"]
    },
    {
      id: "hotel-de-sal-uyuni",
      titulo: "Como é dormir em um Hotel de Sal no Uyuni?",
      resumo: "Camas, mesas e paredes feitas de blocos de sal puros. Conheça o conforto surreal das hospedagens da travessia boliviana.",
      data: "15 Abr 2024",
      tempo: "4 min de leitura",
      imagem: "uyuni/uyuni-hotel.jpg",
      tags: ["#Uyuni", "#Hospedagem"]
    },
    {
      id: "tour-vinicola",
      titulo: "Tour Vinícola em Santiago: Degustação aos pés da Cordilheira",
      resumo: "Descubra os sabores do Chile visitando as vinhas tradicionais e entendendo o processo de produção dos melhores vinhos da região.",
      data: "10 Abr 2024",
      tempo: "5 min de leitura",
      imagem: "santiago/santiago-tour-vinho.jpg",
      tags: ["#Santiago", "#Vinhos"]
    },
    {
      id: "vulcao-lascar",
      titulo: "Vulcão Lascar: A emoção de subir um vulcão ativo",
      resumo: "Dicas de aclimatação e preparo físico para quem deseja encarar as fumarolas na cratera deste gigante andino.",
      data: "05 Abr 2024",
      tempo: "7 min de leitura",
      imagem: "atacama/atacama-lascar.jpg",
      tags: ["#Atacama", "#Vulcão"]
    }
  ];

  const [paginaAtual, setPaginaAtual] = useState(1);
  const postsPorPagina = 4;
  const totalPaginas = Math.ceil(todosArtigos.length / postsPorPagina);

  const indexUltimoPost = paginaAtual * postsPorPagina;
  const indexPrimeiroPost = indexUltimoPost - postsPorPagina;
  const postsAtuais = todosArtigos.slice(indexPrimeiroPost, indexUltimoPost);

  const irParaPagina = (pagina: number) => {
    setPaginaAtual(pagina);
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 600, behavior: 'smooth' });
    }
  };

  return (
    <main className="flex min-h-screen flex-col font-manrope bg-[#F8F6F3] text-[#221a15]">
      
      {/* 1. HERO SECTION */}
      <section className="relative h-[460px] flex items-center justify-center overflow-hidden pt-20 bg-slate-900">
        <div className="absolute inset-0 z-0 opacity-60">
          <Image className="object-cover" src="/images/atacama/atacama-hero.jpg" alt="Deserto do Atacama" fill priority />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/30"></div>
        </div>
        
        <div className="relative z-10 text-center text-white px-8 max-w-4xl mx-auto w-full">
          <nav className="mb-6 flex justify-center items-center gap-2 font-inter text-xs uppercase tracking-widest text-white/80">
            <Link href="/" className="hover:text-white transition-colors">Início</Link>
            <span className="material-symbols-outlined text-[14px]">chevron_right</span>
            <span className="text-white font-bold">Informativo</span>
          </nav>
          <h1 className="text-5xl md:text-6xl font-bold mb-4 tracking-tight">Mural de Dicas</h1>
          <p className="font-inter text-lg text-white/90 font-light max-w-2xl mx-auto mb-10 leading-relaxed">
            Informações práticas, curiosidades e guias rápidos para você conhecer melhor as maravilhas do Chile e da Bolívia.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-8 py-20 w-full">
        
        {/* 2. ARTIGO EM DESTAQUE */}
        <div className="mb-20">
          <Link href="/blog/hotel-de-sal-uyuni" className="bg-white rounded-3xl overflow-hidden flex flex-col md:flex-row shadow-[0_10px_30px_-10px_rgba(0,0,0,0.08)] group transition-transform duration-300 hover:-translate-y-2 border border-slate-50 cursor-pointer">
            <div className="md:w-1/2 h-80 md:h-auto relative overflow-hidden">
              <Image src="/images/uyuni/uyuni-hero.jpg" alt="Salar de Uyuni Espelho" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute top-6 left-6 flex gap-2">
                <span className="bg-[#D4773C] text-white font-inter font-bold text-[10px] px-4 py-1.5 rounded-full uppercase tracking-widest shadow-md">DESTAQUE</span>
              </div>
            </div>
            <div className="md:w-1/2 p-10 lg:p-14 flex flex-col justify-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight group-hover:text-[#D4773C] transition-colors">
                Expedição Uyuni: O que esperar do maior deserto de sal do mundo
              </h2>
              <p className="font-inter text-[#55433a] text-lg mb-8 leading-relaxed line-clamp-3">
                Conheça os detalhes desta travessia épica. De ilusões de ótica no sal branco ao espetáculo do espelho d'água na época de chuvas.
              </p>
              <div className="flex items-center gap-6 text-slate-500 font-inter text-sm mb-10 border-t border-slate-100 pt-6">
                <div className="flex items-center gap-2 font-medium"><span className="material-symbols-outlined text-[18px]">calendar_today</span> 20 Mai 2024</div>
                <div className="flex items-center gap-2 font-medium"><span className="material-symbols-outlined text-[18px]">schedule</span> Leitura rápida</div>
              </div>
              <div className="inline-flex items-center justify-center bg-[#D4773C] text-white px-8 py-4 rounded-xl font-bold w-fit hover:bg-[#b35d24] transition-all shadow-[0_10px_20px_-10px_rgba(212,119,60,0.6)]">
                Acessar Guia
                <span className="material-symbols-outlined ml-2 text-[20px]">arrow_forward</span>
              </div>
            </div>
          </Link>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          {/* GRID DE ARTIGOS */}
          <div className="lg:w-2/3">
            <div className="flex justify-between items-center mb-10 border-b border-slate-200 pb-4">
              <h3 className="text-2xl font-bold text-[#221a15]">Últimas Informações</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {postsAtuais.map((post) => (
                <Link href={`/blog/${post.id}`} key={post.id} className="bg-white rounded-3xl overflow-hidden shadow-[0_10px_30px_-10px_rgba(0,0,0,0.06)] group border border-slate-50 cursor-pointer flex flex-col hover:-translate-y-2 transition-transform duration-300">
                  <div className="aspect-[4/3] relative overflow-hidden">
                    <Image src={`/images/atacama/${post.imagem}`} alt={post.titulo} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                  </div>
                  <div className="p-8 flex flex-col flex-grow">
                    <div className="flex gap-2 mb-4">
                      {post.tags.map((tag, idx) => (
                        <span key={idx} className="text-[10px] font-inter font-bold text-slate-400 uppercase tracking-widest">{tag}</span>
                      ))}
                    </div>
                    <h3 className="text-xl font-bold mb-4 leading-tight group-hover:text-[#D4773C] transition-colors text-[#221a15]">
                      {post.titulo}
                    </h3>
                    <p className="text-[#55433a] font-inter text-sm mb-8 line-clamp-3 leading-relaxed flex-grow">
                      {post.resumo}
                    </p>
                    <div className="flex items-center justify-between mt-auto border-t border-slate-100 pt-6">
                      <p className="text-[11px] font-inter text-slate-400 uppercase tracking-widest font-bold">{post.data}</p>
                      <span className="material-symbols-outlined text-[#D4773C] group-hover:translate-x-1 transition-transform">arrow_forward</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* PAGINAÇÃO */}
            {totalPaginas > 1 && (
              <div className="mt-16 flex justify-center items-center gap-2 font-inter font-bold text-sm">
                <button onClick={() => irParaPagina(paginaAtual - 1)} disabled={paginaAtual === 1} className="w-12 h-12 flex items-center justify-center rounded-xl border border-slate-200 text-slate-400 hover:border-[#D4773C] hover:text-[#D4773C] transition-all disabled:opacity-50 disabled:cursor-not-allowed bg-white">
                  <span className="material-symbols-outlined">chevron_left</span>
                </button>
                {[...Array(totalPaginas)].map((_, index) => {
                  const numPagina = index + 1;
                  return (
                    <button key={numPagina} onClick={() => irParaPagina(numPagina)} className={`w-12 h-12 flex items-center justify-center rounded-xl transition-all ${paginaAtual === numPagina ? "bg-[#D4773C] text-white shadow-md" : "border border-slate-200 text-slate-600 hover:border-[#D4773C] hover:text-[#D4773C] bg-white"}`}>
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

          {/* SIDEBAR */}
          <aside className="lg:w-1/3 space-y-10">
            <div className="bg-white p-8 rounded-3xl shadow-[0_10px_30px_-10px_rgba(0,0,0,0.08)] border border-slate-50">
              <h4 className="font-bold text-xl mb-8 border-b-2 border-[#D4773C] pb-2 inline-block">Destinos</h4>
              <ul className="space-y-5 font-inter text-sm font-bold text-[#55433a]">
                <li><Link href="/destinos/atacama" className="flex justify-between items-center group hover:text-[#D4773C] transition-colors"><span className="flex items-center gap-3"><span className="material-symbols-outlined text-slate-300 text-lg group-hover:text-[#D4773C]">location_on</span> San Pedro de Atacama</span></Link></li>
                <li><Link href="/destinos/uyuni" className="flex justify-between items-center group hover:text-[#D4773C] transition-colors"><span className="flex items-center gap-3"><span className="material-symbols-outlined text-slate-300 text-lg group-hover:text-[#D4773C]">location_on</span> Salar de Uyuni</span></Link></li>
                <li><Link href="/destinos/santiago" className="flex justify-between items-center group hover:text-[#D4773C] transition-colors"><span className="flex items-center gap-3"><span className="material-symbols-outlined text-slate-300 text-lg group-hover:text-[#D4773C]">location_on</span> Santiago do Chile</span></Link></li>
              </ul>
            </div>

            <div className="bg-[#006576] p-10 rounded-3xl shadow-xl text-white relative overflow-hidden group">
              <div className="absolute -right-8 -bottom-8 w-40 h-40 bg-white/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>
              <span className="material-symbols-outlined text-[40px] mb-6 relative z-10 text-[#aaedff]">mail</span>
              <h4 className="text-2xl font-bold mb-4 leading-tight relative z-10">Dicas por E-mail</h4>
              <p className="text-white/80 font-inter text-sm mb-8 relative z-10 leading-relaxed">Deixe seu e-mail para receber informações sobre clima, o que vestir e curiosidades dos Andes.</p>
              <form className="space-y-4 relative z-10">
                <input className="w-full px-5 py-4 rounded-xl border-none text-[#221a15] font-inter font-medium placeholder:text-slate-400 focus:ring-2 focus:ring-white outline-none" placeholder="Seu e-mail" type="email" required />
                <button className="w-full py-4 rounded-xl bg-[#D4773C] text-white font-bold hover:bg-[#b35d24] transition-colors shadow-lg">Quero Receber</button>
              </form>
            </div>
            
            {/* Instagram Link */}
            <a href="https://www.instagram.com/retur_expediciones/" target="_blank" rel="noopener noreferrer" className="block bg-white p-8 rounded-3xl shadow-[0_10px_30px_-10px_rgba(0,0,0,0.08)] border border-slate-50 group hover:border-[#D4773C] transition-colors">
              <div className="flex items-center gap-3 mb-6">
                <span className="material-symbols-outlined text-[#D4773C] text-3xl">photo_camera</span>
                <div>
                  <h4 className="font-bold text-xl leading-none text-[#221a15]">Siga a Retur</h4>
                  <span className="text-[#55433a] font-inter text-xs">@retur_expediciones</span>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="aspect-square relative rounded-xl overflow-hidden"><Image src="/images/atacama/atacama-v-luna.jpg" alt="Atacama" fill className="object-cover group-hover:scale-105 transition-transform duration-500" /></div>
                <div className="aspect-square relative rounded-xl overflow-hidden"><Image src="/images/uyuni-hero.jpg" alt="Uyuni" fill className="object-cover group-hover:scale-105 transition-transform duration-500" /></div>
              </div>
            </a>

          </aside>
        </div>
      </section>
    </main>
  );
}