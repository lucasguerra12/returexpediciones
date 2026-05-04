import Link from "next/link";

export default function DetalhePasseioPage() {
  return (
    <main className="flex min-h-screen flex-col font-manrope bg-[#F8F6F3] text-[#221a15]">
      
      {/* 1. HEADER GALLERY (Hero Section) */}
      <section className="relative h-[70vh] w-full pt-20 overflow-hidden group">
        <div className="absolute inset-0">
          <img 
            className="w-full h-full object-cover" 
            src="/images/atacama-v-luna.jpg" 
            alt="Valle de la Luna" 
          />
        </div>
        
        {/* Overlays & Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30"></div>
        
        <div className="absolute top-28 left-8 flex flex-col gap-4 z-10">
          <nav className="flex gap-2 text-white/90 text-sm font-medium drop-shadow-md font-inter">
            <Link href="/" className="hover:text-white transition-colors">Início</Link>
            <span className="opacity-60">/</span>
            <Link href="/destinos/atacama" className="hover:text-white transition-colors">Atacama</Link>
            <span className="opacity-60">/</span>
            <span className="font-bold text-white">Valle de la Luna</span>
          </nav>
          <div className="flex gap-2">
            <span className="px-4 py-1.5 bg-white/20 backdrop-blur-md rounded-full text-white text-[10px] font-bold uppercase tracking-widest border border-white/30">Atacama</span>
            <span className="px-4 py-1.5 bg-[#D4773C] rounded-full text-white text-[10px] font-bold uppercase tracking-widest shadow-md">Pôr do Sol</span>
          </div>
        </div>

        {/* Mini Galeria Inferior */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 w-full max-w-7xl px-8 flex justify-between items-end z-10">
          <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
            <div className="w-24 h-16 rounded-lg overflow-hidden border-2 border-white ring-4 ring-black/20 cursor-pointer flex-shrink-0">
              <img className="w-full h-full object-cover" src="/images/atacama-v-luna.jpg" alt="Thumb 1" />
            </div>
            <div className="w-24 h-16 rounded-lg overflow-hidden border-2 border-transparent hover:border-white/50 cursor-pointer flex-shrink-0 transition-all opacity-80 hover:opacity-100">
              <img className="w-full h-full object-cover" src="/images/atacama-gal-1.jpg" alt="Thumb 2" />
            </div>
            <div className="w-24 h-16 rounded-lg overflow-hidden border-2 border-transparent hover:border-white/50 cursor-pointer flex-shrink-0 transition-all opacity-80 hover:opacity-100">
              <img className="w-full h-full object-cover" src="/images/atacama-gal-2.jpg" alt="Thumb 3" />
            </div>
          </div>
          <div className="bg-black/40 backdrop-blur-lg px-5 py-2.5 rounded-full text-white font-inter text-sm font-bold border border-white/10 shadow-lg">
            3 / 12
          </div>
        </div>
      </section>

      {/* 2. MAIN CONTENT (Duas Colunas) */}
      <section className="max-w-7xl mx-auto px-8 py-16 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* COLUNA ESQUERDA: DETALHES DO PASSEIO */}
          <div className="lg:col-span-8 space-y-12">
            
            {/* Título e Infos */}
            <header className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold text-[#221a15] tracking-tight">Pôr do Sol no Valle de la Luna</h1>
              <div className="flex flex-wrap items-center gap-6">
                <div className="flex items-center gap-1 text-[#D4773C]">
                  {[1,2,3,4,5].map(star => (
                    <span key={star} className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  ))}
                  <span className="text-[#221a15] font-bold ml-2">5.0</span>
                  <span className="text-[#55433a] font-inter text-sm font-medium ml-1">(127 avaliações)</span>
                </div>
                <div className="flex items-center gap-2 text-[#55433a] font-inter font-medium">
                  <span className="material-symbols-outlined text-[#2B7A9B]">location_on</span>
                  <span>San Pedro de Atacama, Chile</span>
                </div>
              </div>
              <div className="flex flex-wrap gap-3 pt-2">
                <span className="text-xs font-inter font-bold text-[#006576] bg-[#aaedff]/30 px-4 py-1.5 rounded-full tracking-wide">#Fotografia</span>
                <span className="text-xs font-inter font-bold text-[#006576] bg-[#aaedff]/30 px-4 py-1.5 rounded-full tracking-wide">#PôrDoSol</span>
                <span className="text-xs font-inter font-bold text-[#006576] bg-[#aaedff]/30 px-4 py-1.5 rounded-full tracking-wide">#ImperdívelAtacama</span>
              </div>
            </header>

            {/* Sticky Nav Tabs */}
            <nav className="sticky top-20 z-40 bg-[#F8F6F3] border-b border-slate-200 flex gap-8 overflow-x-auto scrollbar-hide font-inter">
              {['Descrição', 'O que Inclui', 'Roteiro', 'Requisitos', 'O que Levar', 'Mapa'].map((tab, i) => (
                <button 
                  key={i} 
                  className={`py-4 text-sm whitespace-nowrap transition-colors ${i === 0 ? 'font-bold text-[#D4773C] border-b-2 border-[#D4773C]' : 'font-medium text-[#55433a] hover:text-[#D4773C]'}`}
                >
                  {tab}
                </button>
              ))}
            </nav>

            {/* Seção: Descrição */}
            <div className="space-y-6 pt-4">
              <h2 className="text-3xl font-bold text-[#221a15]">Um espetáculo de outro mundo</h2>
              <div className="font-inter text-[#55433a] text-lg leading-relaxed space-y-6">
                <p>O Valle de la Luna é uma das experiências mais icônicas de San Pedro de Atacama. Localizado na Cordilheira do Sal, o parque oferece uma paisagem surrealista que se assemelha à superfície lunar, com formações geológicas esculpidas pelo vento e pela erosão ao longo de milhões de anos.</p>
                <p>Durante a expedição, exploraremos as famosas cavernas de sal, as formações 'Três Marias' e a majestosa Gran Duna. O silêncio do deserto é quebrado apenas pelo estalar do sal sob a mudança de temperatura.</p>
              </div>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-6">
                {['Exploração das Cavernas de Sal', 'Vistas panorâmicas da Cordilheira', 'Pôr do sol no Mirante do Coyote', 'Lanche típico ao ar livre'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 font-inter text-[#221a15] font-medium">
                    <span className="w-2 h-2 bg-[#D4773C] rounded-full shrink-0"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <hr className="border-slate-200" />

            {/* Seção: Inclui / Não Inclui */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-4">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-[#221a15]">O que Inclui</h3>
                <ul className="space-y-4 font-inter text-[#55433a]">
                  <li className="flex items-center gap-3"><span className="material-symbols-outlined text-green-600">check_circle</span> Transfer ida e volta (Hotel)</li>
                  <li className="flex items-center gap-3"><span className="material-symbols-outlined text-green-600">check_circle</span> Guia bilíngue (PT/ES)</li>
                  <li className="flex items-center gap-3"><span className="material-symbols-outlined text-green-600">check_circle</span> Ingressos do Parque Nacional</li>
                  <li className="flex items-center gap-3"><span className="material-symbols-outlined text-green-600">check_circle</span> Snacks e Coquetel de Pôr do Sol</li>
                </ul>
              </div>
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-[#221a15]">Não Inclui</h3>
                <ul className="space-y-4 font-inter text-[#55433a]">
                  <li className="flex items-center gap-3"><span className="material-symbols-outlined text-red-500">cancel</span> Refeições principais</li>
                  <li className="flex items-center gap-3"><span className="material-symbols-outlined text-red-500">cancel</span> Bebidas alcoólicas extras</li>
                  <li className="flex items-center gap-3"><span className="material-symbols-outlined text-red-500">cancel</span> Gorjetas opcionais</li>
                </ul>
              </div>
            </div>

            <hr className="border-slate-200" />

            {/* Seção: Roteiro Detalhado (Timeline) */}
            <div className="space-y-8 pt-4">
              <h2 className="text-3xl font-bold text-[#221a15]">Roteiro Detalhado</h2>
              <div className="relative pl-8 space-y-12 before:content-[''] before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-[2px] before:bg-slate-200">
                
                {[
                  { time: "15:00 — Pick-up nos Hotéis", desc: "Busca em hotéis centrais em San Pedro de Atacama para início da expedição." },
                  { time: "15:30 — Chegada à Cordilheira do Sal", desc: "Primeira parada para instruções de segurança e introdução geológica da região." },
                  { time: "15:45 — Trilha das Cavernas de Sal", desc: "Caminhada leve por formações milenares onde o sal brilha sob as lanternas." },
                  { time: "17:00 — Gran Duna e Três Marias", desc: "Parada para fotos nas esculturas naturais e contemplação da imensa duna de areia." },
                  { time: "18:15 — Pôr do Sol no Mirante", desc: "Momento principal com coquetel de snacks enquanto as cores do céu se transformam.", isLast: true }
                ].map((step, i) => (
                  <div key={i} className="relative">
                    <div className={`absolute -left-[39px] top-1.5 w-5 h-5 rounded-full bg-white border-4 z-10 ${step.isLast ? 'border-[#D4773C]' : 'border-[#D4773C]'}`}></div>
                    <h4 className="font-bold text-lg text-[#221a15] mb-2">{step.time}</h4>
                    <p className="font-inter text-[#55433a] leading-relaxed">{step.desc}</p>
                  </div>
                ))}

              </div>
            </div>

            <hr className="border-slate-200" />

            {/* Seção: Requisitos & Levar */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
              <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.05)]">
                <h3 className="text-xl font-bold mb-6 text-[#221a15]">Requisitos</h3>
                <div className="space-y-4 font-inter text-sm">
                  <div className="flex justify-between border-b border-slate-100 pb-3">
                    <span className="text-[#55433a]">Idade Mínima</span>
                    <span className="font-bold text-[#221a15]">5 anos</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-100 pb-3">
                    <span className="text-[#55433a]">Nível Físico</span>
                    <span className="font-bold text-[#221a15]">Leve / Caminhada</span>
                  </div>
                  <div className="flex justify-between pb-1">
                    <span className="text-[#55433a]">Altitude Máx.</span>
                    <span className="font-bold text-[#221a15]">2.400m</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-[#fff1eb]/50 p-8 rounded-3xl border border-[#fceae2]">
                <h3 className="text-xl font-bold mb-6 text-[#221a15]">O que Levar</h3>
                <ul className="grid grid-cols-1 gap-y-3 font-inter text-sm text-[#55433a]">
                  <li className="flex items-center gap-3"><span className="material-symbols-outlined text-[#D4773C] text-lg">check</span> Protetor solar & Óculos escuros</li>
                  <li className="flex items-center gap-3"><span className="material-symbols-outlined text-[#D4773C] text-lg">check</span> Casaco leve (esfria no pôr do sol)</li>
                  <li className="flex items-center gap-3"><span className="material-symbols-outlined text-[#D4773C] text-lg">check</span> Água (1.5L por pessoa)</li>
                  <li className="flex items-center gap-3"><span className="material-symbols-outlined text-[#D4773C] text-lg">check</span> Calçado fechado para caminhada</li>
                </ul>
              </div>
            </div>

            {/* Seção: Mapa */}
            <div className="pt-4 space-y-6">
              <h2 className="text-3xl font-bold text-[#221a15]">Trajeto da Expedição</h2>
              <div className="w-full aspect-video rounded-3xl overflow-hidden shadow-lg bg-slate-200 relative border border-slate-100">
                <div className="absolute inset-0 flex items-center justify-center">
                  <img className="w-full h-full object-cover grayscale opacity-40" src="/images/combo-mapa.png" alt="Mapa" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8 bg-black/5 backdrop-blur-[2px]">
                    <span className="material-symbols-outlined text-5xl text-[#D4773C] mb-4 drop-shadow-md">map</span>
                    <p className="text-2xl font-bold text-[#221a15] mb-2">Mapa Interativo Indisponível</p>
                    <p className="font-inter text-[#55433a] max-w-md bg-white/80 p-4 rounded-xl shadow-sm">Veja o roteiro detalhado acima para entender as paradas. O guia fornecerá um briefing geográfico no início da tour.</p>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* COLUNA DIREITA: SIDEBAR DE RESERVA (Sticky) */}
          <aside className="lg:col-span-4">
            <div className="sticky top-28 space-y-6">
              
              {/* Card Principal de Reserva */}
              <div className="bg-white p-8 rounded-[32px] shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] border border-slate-100">
                <div className="flex items-baseline gap-2 mb-8 border-b border-slate-100 pb-6">
                  <span className="text-[#55433a] font-inter font-medium">A partir de</span>
                  <span className="text-4xl font-bold text-[#D4773C]">R$ 380</span>
                </div>
                
                <div className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-[11px] font-inter font-bold uppercase tracking-widest text-[#55433a]">Data da Viagem</label>
                    <div className="relative">
                      <input className="w-full p-4 rounded-xl border border-slate-200 focus:border-[#D4773C] focus:ring-1 focus:ring-[#D4773C] bg-[#F8F6F3] text-[#221a15] font-inter font-medium outline-none transition-all" type="date" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-[11px] font-inter font-bold uppercase tracking-widest text-[#55433a]">Viajantes</label>
                    <div className="flex items-center justify-between p-2 rounded-xl border border-slate-200 bg-[#F8F6F3]">
                      <button className="w-12 h-12 rounded-lg flex items-center justify-center bg-white shadow-sm hover:bg-slate-50 transition-colors text-xl font-medium text-[#55433a]">-</button>
                      <span className="font-bold text-xl text-[#221a15]">02</span>
                      <button className="w-12 h-12 rounded-lg flex items-center justify-center bg-white shadow-sm hover:bg-slate-50 transition-colors text-xl font-medium text-[#55433a]">+</button>
                    </div>
                  </div>

                  <div className="pt-6 space-y-4">
                    <button className="w-full py-5 bg-[#D4773C] text-white font-bold text-lg rounded-xl hover:bg-[#b35d24] active:scale-95 transition-all shadow-[0_10px_20px_-10px_rgba(212,119,60,0.6)]">
                      Reservar Agora
                    </button>
                    <button className="w-full py-4 flex items-center justify-center gap-2 border-2 border-slate-200 text-[#55433a] font-bold rounded-xl hover:bg-[#F8F6F3] transition-all">
                      <span className="material-symbols-outlined text-lg">chat</span> Dúvidas? Fale Conosco
                    </button>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-100 space-y-4 font-inter">
                  <div className="flex items-center gap-3 text-xs font-bold text-[#55433a] uppercase tracking-wider">
                    <span className="material-symbols-outlined text-green-600">verified</span> Saída Garantida
                  </div>
                  <div className="flex items-center gap-3 text-xs font-bold text-[#55433a] uppercase tracking-wider">
                    <span className="material-symbols-outlined text-green-600">lock</span> Pagamento 100% Seguro
                  </div>
                  <div className="flex items-center gap-3 text-xs font-bold text-[#55433a] uppercase tracking-wider">
                    <span className="material-symbols-outlined text-green-600">history</span> Cancelamento Grátis (48h)
                  </div>
                </div>
              </div>

              {/* Promo Card Combo */}
              <div className="bg-[#006576] p-8 rounded-[32px] text-white relative overflow-hidden group cursor-pointer shadow-lg hover:-translate-y-1 transition-transform">
                <div className="absolute -right-8 -bottom-8 w-40 h-40 bg-white/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>
                <h4 className="font-bold text-xl mb-3 relative z-10">Compre o Combo Atacama</h4>
                <p className="font-inter text-sm opacity-90 mb-6 relative z-10 leading-relaxed">Garanta os 5 passeios imperdíveis do deserto e economize 15% na sua reserva hoje.</p>
                <span className="font-bold text-sm underline hover:text-[#aaedff] transition-colors relative z-10">Ver opções de combos</span>
              </div>

            </div>
          </aside>

        </div>
      </section>

    </main>
  );
}