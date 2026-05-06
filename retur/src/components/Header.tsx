"use client";

import Link from 'next/link';
import { useState } from 'react';

export function Header() {
  const [menuAberto, setMenuAberto] = useState(false);

  return (
    <header className="w-full py-4 px-8 flex items-center justify-between bg-white/90 backdrop-blur-md fixed top-0 z-50 border-b border-gray-100">
      <Link href="/">
        <img src="/images/ReturLogo.png" alt="Retur Expedições" className="h-10" />
        <div className="text-retur-terra font-bold text-2xl tracking-tighter">
        </div>
      </Link>

      {/* MENU DESKTOP (Seu código original intacto) */}
      <nav className="hidden md:flex gap-8 text-sm font-medium uppercase tracking-widest text-retur-texto items-center">
        <Link href="/" className="hover:text-retur-terra transition-colors">Início</Link>
        
        {/* Dropdown de Destinos */}
        <div className="group relative py-2">
          <button className="flex items-center gap-1 hover:text-retur-terra transition-colors uppercase tracking-widest">
            Destinos<span className="material-symbols-outlined text-sm">expand_more</span>
          </button>
          <div className="absolute top-full left-0 w-64 bg-white shadow-2xl rounded-2xl py-4 border border-gray-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all transform translate-y-2 group-hover:translate-y-0">
            <Link href="/destinos/atacama" className="block px-6 py-3 hover:bg-retur-areia hover:text-retur-terra transition-colors border-l-4 border-transparent hover:border-retur-terra">Atacama</Link>
            <Link href="/destinos/uyuni" className="block px-6 py-3 hover:bg-retur-areia hover:text-retur-terra transition-colors border-l-4 border-transparent hover:border-retur-terra">Salar de Uyuni</Link>
            <Link href="/destinos/santiago" className="block px-6 py-3 hover:bg-retur-areia hover:text-retur-terra transition-colors border-l-4 border-transparent hover:border-retur-terra">Santiago</Link>
            <div className="my-2 border-t border-gray-50" />
            <Link href="/destinos/combo" className="block px-6 py-3 font-bold text-retur-terra hover:bg-retur-areia transition-colors italic">Combo Atacama + Uyuni</Link>
          </div>
        </div>

        <Link href="/sobre" className="hover:text-retur-terra transition-colors">Sobre Nós</Link>
        <Link href="/blog" className="hover:text-retur-terra transition-colors">Blog</Link>
        <Link href="/contato" className="hover:text-retur-terra transition-colors">Contato</Link>
      </nav>

      {/* CONTAINER DO BOTÃO + MENU HAMBÚRGUER */}
      <div className="flex items-center gap-4">
        {/* Seu botão Reservar Agora intacto (Some em telas muito pequenas para não quebrar o layout, indo para dentro do menu) */}
        <a 
          href="https://wa.me/5517997697872?text=Olá, gostaria de ajuda para montar meu roteiro no Atacama!"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden sm:block"
        >
          <button className="bg-retur-terra text-white px-6 py-2.5 rounded-lg font-bold text-sm hover:bg-orange-700 transition-all shadow-md">
            Reservar Agora
          </button>
        </a>

        {/* Ícone de Hambúrguer (Aparece apenas em celulares: md:hidden) */}
        <button 
          className="md:hidden text-retur-texto p-1"
          onClick={() => setMenuAberto(!menuAberto)}
        >
          <span className="material-symbols-outlined text-3xl">
            {menuAberto ? 'close' : 'menu'}
          </span>
        </button>
      </div>

      {/* MENU MOBILE (Aparece ao clicar no Hambúrguer) */}
      {menuAberto && (
        <div className="absolute top-full left-0 w-full bg-white shadow-2xl border-t border-gray-100 flex flex-col md:hidden py-6 px-8 gap-4 text-sm font-medium uppercase tracking-widest text-retur-texto">
          <Link href="/" onClick={() => setMenuAberto(false)} className="hover:text-retur-terra">Início</Link>
          
          <div className="font-bold text-retur-terra border-b border-gray-100 pb-2 mt-2">Destinos</div>
          <Link href="/destinos/atacama" onClick={() => setMenuAberto(false)} className="pl-4 hover:text-retur-terra">Atacama</Link>
          <Link href="/destinos/uyuni" onClick={() => setMenuAberto(false)} className="pl-4 hover:text-retur-terra">Salar de Uyuni</Link>
          <Link href="/destinos/santiago" onClick={() => setMenuAberto(false)} className="pl-4 hover:text-retur-terra">Santiago</Link>
          <Link href="/destinos/combo" onClick={() => setMenuAberto(false)} className="pl-4 font-bold text-retur-terra">Combo Atacama + Uyuni</Link>
          
          <div className="border-t border-gray-100 pt-4 mt-2 flex flex-col gap-4">
            <Link href="/sobre" onClick={() => setMenuAberto(false)} className="hover:text-retur-terra">Sobre Nós</Link>
            <Link href="/blog" onClick={() => setMenuAberto(false)} className="hover:text-retur-terra">Blog</Link>
            <Link href="/contato" onClick={() => setMenuAberto(false)} className="hover:text-retur-terra">Contato</Link>
          </div>

          <a 
            href="https://wa.me/5517997697872?text=Olá, gostaria de ajuda para montar meu roteiro no Atacama!"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuAberto(false)}
            className="mt-4 sm:hidden w-full"
          >
            <button className="w-full bg-retur-terra text-white px-6 py-3 rounded-lg font-bold text-sm hover:bg-orange-700 transition-all shadow-md">
              Reservar Agora
            </button>
          </a>
        </div>
      )}
    </header>
  );
}