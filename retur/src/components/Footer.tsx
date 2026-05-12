import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-white pt-20 pb-10 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div>
          <h3 className="text-retur-terra font-bold text-xl mb-6">Retur Expedições</h3>
          <p className="text-sm text-gray-500 leading-relaxed mb-6">
            Especialistas em vivências autênticas nos desertos mais altos do mundo. Segurança e sofisticação em cada detalhe.
          </p>
          <div className="flex gap-4">
            {/* Ícones de redes sociais em P&B */}
            <a href="#" className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-200 text-gray-400 hover:text-retur-terra transition-colors">
               <span className="material-symbols-outlined text-[20px]">photo_camera</span>
            </a>
            <a href="#" className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-200 text-gray-400 hover:text-retur-terra transition-colors">
               <span className="material-symbols-outlined text-[20px]">share</span>
            </a>
          </div>
        </div>

        <div>
          <h6 className="font-bold text-retur-texto mb-6 uppercase tracking-widest text-xs">Explorar</h6>
          <ul className="space-y-4 text-sm text-gray-500">
            <li><Link href="/destinos" className="hover:text-retur-terra transition-colors">Destinos</Link></li>
            <li><Link href="/blog" className="hover:text-retur-terra transition-colors">Blog</Link></li>
          </ul>
        </div>

        <div>
          <h6 className="font-bold text-retur-texto mb-6 uppercase tracking-widest text-xs">Institucional</h6>
          <ul className="space-y-4 text-sm text-gray-500">
            <li><Link href="/sobre" className="hover:text-retur-terra transition-colors">Sobre Nós</Link></li>
            <li><Link href="/contato" className="hover:text-retur-terra transition-colors">Contato</Link></li>
          </ul>
        </div>

        <div>
          <h6 className="font-bold text-retur-texto mb-6 uppercase tracking-widest text-xs">Newsletter</h6>
          <p className="text-sm text-gray-500 mb-4">Receba dicas de expedição e promoções.</p>
          <div className="flex bg-retur-areia rounded-lg overflow-hidden border border-gray-200">
            <input 
              type="email" 
              placeholder="Seu e-mail" 
              className="bg-transparent border-none focus:ring-0 text-sm px-4 py-3 w-full outline-none"
            />
            <button className="bg-retur-terra text-white px-4 flex items-center justify-center">
              <span className="material-symbols-outlined text-sm">send</span>
            </button>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-8 pt-8 border-t border-gray-100 text-center flex flex-col items-center gap-4">
        
        <div className="opacity-80 hover:opacity-100 transition-opacity">
          <img 
            src="/images/imagem_cadastur.jpg" 
            alt="Selo oficial Cadastur" 
            className="h-12 w-auto object-contain" 
          />
        </div>

        <div>
          <p className="text-[10px] text-gray-400 uppercase tracking-[0.2em]">
            © 2024 Retur Expedições. Especialistas em Atacama e Uyuni.
          </p>
          <p className="text-[10px] text-gray-400 uppercase tracking-[0.2em] mt-1">
            Registro Cadastur: 52737968/0001-07
          </p>
        </div>
        
      </div>
    </footer>
  );
}