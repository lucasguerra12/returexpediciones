"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export function Header() {
  const [menuAberto, setMenuAberto] = useState(false);

  return (
    <header className="w-full py-2 px-6 md:px-8 bg-white/90 backdrop-blur-md fixed top-0 z-50 border-b border-gray-100 min-h-[90px] flex items-center">
      <div className="max-w-7xl mx-auto w-full flex items-center justify-between">
        
        {/* --- ESQUERDA: LOGO --- */}
        <div className="flex md:w-1/4 justify-start">
          <Link href="/" className="flex items-center">
            <Image 
              src="/images/ReturLogo.png" 
              alt="Retur Expedições" 
              width={220} 
              height={80} 
              className="h-14 md:h-20 w-auto drop-shadow-sm hover:scale-105 transition-transform duration-300" 
              priority 
            />
          </Link>
        </div>

        {/* --- CENTRO: MENUS DESKTOP --- */}
        <div className="hidden md:flex w-2/4 justify-center">
          <nav className="flex items-center gap-6 lg:gap-10 text-sm font-medium uppercase tracking-widest text-retur-texto">
            <Link href="/" className="hover:text-retur-terra transition-colors">Início</Link>
            
            {/* Link de Destinos com Dropdown */}
            <div className="group relative py-4">
              <Link 
                href="/destinos" 
                className="flex items-center gap-1 hover:text-retur-terra transition-colors uppercase tracking-widest cursor-pointer"
              >
                Destinos
                <span className="material-symbols-outlined text-sm">expand_more</span>
              </Link>
              
              <div className="absolute top-full left-1/2 -translate-x-1/2 w-64 bg-white shadow-2xl rounded-2xl py-4 border border-gray-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all transform translate-y-2 group-hover:translate-y-0">
                <Link href="/destinos/atacama" className="block px-6 py-3 hover:bg-retur-areia hover:text-retur-terra transition-colors border-l-4 border-transparent hover:border-retur-terra">Atacama</Link>
                <Link href="/destinos/uyuni" className="block px-6 py-3 hover:bg-retur-areia hover:text-retur-terra transition-colors border-l-4 border-transparent hover:border-retur-terra">Salar de Uyuni</Link>
                <Link href="/destinos/santiago" className="block px-6 py-3 hover:bg-retur-areia hover:text-retur-terra transition-colors border-l-4 border-transparent hover:border-retur-terra">Santiago</Link>
                <div className="my-2 border-t border-gray-50" />
                <Link href="/destinos/combo" className="block px-6 py-3 font-bold text-retur-terra hover:bg-retur-areia transition-colors italic">Combo Atacama + Uyuni</Link>
              </div>
            </div>

            <Link href="/sobre" className="hover:text-retur-terra transition-colors">Sobre Nós</Link>
            {/*<Link href="/blog" className="hover:text-retur-terra transition-colors">Blog</Link> */}
            <Link href="/contato" className="hover:text-retur-terra transition-colors">Contato</Link>
          </nav>
        </div>

        {/* --- DIREITA: BOTÃO CTA & HAMBÚRGUER MOBILE --- */}
        <div className="flex md:w-1/4 justify-end items-center gap-4">
          
          {/* Botão Desktop */}
          <a 
            href="https://wa.me/5517997697872?text=Olá, gostaria de ajuda para montar meu roteiro!"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:block"
          >
            <button className="bg-retur-terra text-white px-6 py-2.5 rounded-lg font-bold text-sm hover:bg-orange-700 transition-all shadow-md">
              Reservar Agora
            </button>
          </a>

          {/* Botão Hambúrguer Mobile */}
          <button 
            className="md:hidden text-retur-texto p-1"
            onClick={() => setMenuAberto(!menuAberto)}
          >
            <span className="material-symbols-outlined text-3xl">
              {menuAberto ? 'close' : 'menu'}
            </span>
          </button>
        </div>

      </div>

      {/* --- MENU MOBILE EXPANSÍVEL --- */}
      {menuAberto && (
        <div className="absolute top-full left-0 w-full bg-white shadow-2xl border-t border-gray-100 flex flex-col md:hidden py-6 px-8 gap-4 text-sm font-medium uppercase tracking-widest text-retur-texto">
          <Link href="/" onClick={() => setMenuAberto(false)} className="hover:text-retur-terra">Início</Link>
          <Link href="/destinos" onClick={() => setMenuAberto(false)} className="hover:text-retur-terra">Destinos</Link>
          <Link href="/sobre" onClick={() => setMenuAberto(false)} className="hover:text-retur-terra">Sobre Nós</Link>
          <Link href="/blog" onClick={() => setMenuAberto(false)} className="hover:text-retur-terra">Blog</Link>
          <Link href="/contato" onClick={() => setMenuAberto(false)} className="hover:text-retur-terra">Contato</Link>
          
          <a 
            href="https://wa.me/5517997697872?text=Olá, gostaria de ajuda para montar meu roteiro!"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuAberto(false)}
            className="mt-4 w-full bg-retur-terra text-white px-6 py-3 rounded-lg font-bold text-sm text-center hover:bg-orange-700 transition-all shadow-md"
          >
            Reservar Agora
          </a>
        </div>
      )}
    </header>
  );
}