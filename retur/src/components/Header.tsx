import Link from 'next/link';

export function Header() {
  return (
    <header className="w-full py-4 px-8 flex items-center justify-between bg-white/90 backdrop-blur-md fixed top-0 z-50 border-b border-gray-100">
      <Link href="/">
      <img src="/images/ReturLogo.png" alt="Retur Expedições" className="h-10" />
      <div className="text-retur-terra font-bold text-2xl tracking-tighter">
      </div></Link>

      <nav className="hidden md:flex gap-8 text-sm font-medium uppercase tracking-widest text-retur-texto items-center">
        <Link href="/" className="hover:text-retur-terra transition-colors">Início</Link>
        
        {/* Dropdown de Destinos */}
        <div className="group relative py-2">
          <button className="flex items-center gap-1 hover:text-retur-terra transition-colors uppercase tracking-widest">
            Destinos <span className="material-symbols-outlined text-sm">expand_more</span>
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
      <a 
            href="https://wa.me/5511999999999?text=Olá, gostaria de ajuda para montar meu roteiro no Atacama!"
            target="_blank"
            rel="noopener noreferrer">
      <button className="bg-retur-terra text-white px-6 py-2.5 rounded-lg font-bold text-sm hover:bg-orange-700 transition-all shadow-md">
        Reservar Agora
      </button></a>
    </header>
  );
}