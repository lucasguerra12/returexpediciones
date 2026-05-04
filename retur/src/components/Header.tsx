import Link from 'next/link';

export function Header() {
  return (
    <header className="w-full py-4 px-8 flex items-center justify-between bg-white/80 backdrop-blur-md fixed top-0 z-50">
      {/* Logo */}
      <div className="text-retur-terra font-bold text-2xl tracking-tighter">
        <img src="/images/ReturLogo.png" alt="Retur Expedições" className="h-12" />
      </div>

      {/* Navegação */}
      <nav className="hidden md:flex gap-8 text-sm font-medium uppercase tracking-wider text-retur-texto">
        <Link href="/expedicoes" className="hover:text-retur-terra transition-colors">Expedições</Link>
        <Link href="/atacama" className="hover:text-retur-terra transition-colors">Atacama</Link>
        <Link href="/uyuni" className="hover:text-retur-terra transition-colors">Uyuni</Link>
        <Link href="/sobre" className="hover:text-retur-terra transition-colors">Sobre Nós</Link>
        <Link href="/contato" className="hover:text-retur-terra transition-colors">Contato</Link>
      </nav>

      {/* Botão de Ação */}
      <button className="bg-retur-terra text-white px-6 py-2 rounded-md font-medium hover:bg-orange-700 transition-colors">
        Reservar Agora
      </button>
    </header>
  );
}