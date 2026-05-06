import Link from "next/link";

export default function ArtigoBlogPage() {
  return (
    <main className="flex min-h-screen flex-col font-manrope bg-[#F8F6F3] text-[#221a15]">
      
      {/* 1. HERO SECTION DO ARTIGO */}
      <section className="relative h-[60vh] md:h-[665px] w-full pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            className="w-full h-full object-cover" 
            src="/images/uyuni-hero.jpg" 
            alt="Cenário do Salar de Uyuni" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
        </div>
        
        <div className="relative z-10 h-full flex flex-col justify-end pb-16 px-8 max-w-5xl mx-auto w-full">
          <nav className="flex items-center gap-2 mb-6 font-inter text-xs uppercase tracking-widest text-white/80">
            <Link href="/" className="hover:text-white transition-colors">Início</Link>
            <span className="material-symbols-outlined text-[14px]">chevron_right</span>
            <Link href="/blog" className="hover:text-white transition-colors">Informativo</Link>
            <span className="material-symbols-outlined text-[14px]">chevron_right</span>
            <span className="text-white font-bold">Dicas Práticas</span>
          </nav>
          
          <div className="mb-6">
            <span className="inline-block px-4 py-1.5 bg-[#D4773C] text-white font-inter font-bold text-[10px] rounded-full uppercase tracking-widest shadow-md">
              Uyuni
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-8 tracking-tight">
            Expedição Uyuni: O que esperar do maior deserto de sal do mundo
          </h1>
        </div>
      </section>

      {/* 2. CONTEÚDO DO ARTIGO */}
      <section className="max-w-7xl mx-auto px-8 py-20 w-full grid grid-cols-1 lg:grid-cols-12 gap-16">
        
        {/* COLUNA ESQUERDA: TEXTO DO ARTIGO */}
        <div className="lg:col-span-8 font-inter text-lg text-[#55433a] leading-relaxed">
          

          <h2 className="font-manrope text-3xl font-bold text-[#221a15] mb-6 mt-16">O fenômeno do espelhamento</h2>
          <p className="mb-8">
            O segredo para ver o Salar de Uyuni transformado em um espelho infinito está na época das chuvas, que ocorre geralmente entre janeiro e março. Uma fina camada de água se acumula sobre o sal, criando um reflexo perfeito do céu. É uma experiência surreal, onde o horizonte desaparece e você sente que está caminhando entre as nuvens[cite: 17].
          </p>

          <div className="my-16 -mx-8 md:-mx-0 rounded-3xl overflow-hidden shadow-lg relative">
            <img 
              src="/images/uyuni-tour-1.jpg" 
              alt="Reflexo no Salar de Uyuni" 
              className="w-full h-[400px] md:h-[500px] object-cover"
            />
          </div>

          <h2 className="font-manrope text-3xl font-bold text-[#221a15] mb-6 mt-16">Checklist Essencial: O que levar</h2>
          <ul className="space-y-6 mb-12">
            <li className="flex items-start gap-4">
              <span className="material-symbols-outlined text-[#D4773C] text-2xl shrink-0">landscape</span>
              <span><strong className="text-[#221a15]">Proteção Solar:</strong> O reflexo no sal branco é extremamente intenso. Óculos de sol com boa proteção UV e protetor solar FPS 50+ são indispensáveis para evitar queimaduras[cite: 17].</span>
            </li>
            <li className="flex items-start gap-4">
              <span className="material-symbols-outlined text-[#D4773C] text-2xl shrink-0">thermostat</span>
              <span><strong className="text-[#221a15]">Sistema de Camadas:</strong> Mesmo no verão, as noites podem atingir temperaturas negativas. Use o sistema de 3 camadas: térmica, isolante (fleece) e um bom corta-vento[cite: 17].</span>
            </li>
            <li className="flex items-start gap-4">
              <span className="material-symbols-outlined text-[#D4773C] text-2xl shrink-0">water_drop</span>
              <span><strong className="text-[#221a15]">Hidratação:</strong> A altitude desidrata o corpo muito mais rápido do que o normal. Recomendamos beber pelo menos 2 a 3 litros de água por dia[cite: 17].</span>
            </li>
          </ul>

          <blockquote className="border-l-4 border-[#D4773C] pl-8 py-6 my-12 bg-[#fff1eb] rounded-r-2xl italic text-xl font-manrope text-[#221a15]">
            "O Uyuni não é apenas uma viagem de belas paisagens, é uma jornada de resiliência e contemplação da força da natureza andina."[cite: 17]
          </blockquote>

          {/* Dica Pro Box */}
          <div className="bg-[#f6e5dd] p-8 md:p-10 rounded-3xl my-12 border border-[#D4773C]/20 shadow-sm">
            <div className="flex gap-4 items-start">
              <span className="material-symbols-outlined text-[#D4773C] text-4xl shrink-0">lightbulb</span>
              <div>
                <h4 className="font-manrope font-bold text-xl mb-3 text-[#221a15]">Dica de Especialista</h4>
                <p className="mb-0 text-[#55433a] text-base leading-relaxed">
                  O "Mal de Altitude" (Soroche) é comum ao passar dos 4.000m. Não subestime a natureza: evite álcool nos primeiros dias, coma refeições leves, beba chá de coca e, acima de tudo, caminhe devagar[cite: 17].
                </p>
              </div>
            </div>
          </div>

          <p className="mb-8">
            Se você optar por fazer a travessia completa saindo de San Pedro de Atacama no Chile até o Uyuni na Bolívia, prepare-se para dias de off-road em veículos 4x4. A viagem passa por gêiseres, lagoas coloridas (como a Laguna Colorada) e desertos que parecem ter saído de uma pintura de Salvador Dalí.
          </p>

          {/* Tags */}
          <div className="pt-12 border-t border-slate-200 flex flex-wrap gap-3 items-center mt-16">
            {["#Uyuni", "#Bolívia", "#Dicas", "#Checklist"].map((tag, i) => (
              <span key={i} className="px-4 py-1.5 bg-[#F8F6F3] border border-slate-200 rounded-full text-sm text-[#55433a] font-medium">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* COLUNA DIREITA: SIDEBAR (Sticky - Foco WhatsApp, Sem Preços) */}
        <aside className="lg:col-span-4">
          <div className="sticky top-28 space-y-6">
            
            {/* Card Principal de Contato Direto */}
            <div className="bg-white p-8 rounded-[32px] shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] border border-slate-100 text-center">
              <div className="w-16 h-16 rounded-full bg-[#fceae2] mx-auto flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-[#D4773C] text-3xl">map</span>
              </div>
              <h3 className="font-manrope text-2xl font-bold text-[#221a15] mb-4">Gostou do Destino?</h3>
              <p className="font-inter text-[#55433a] mb-8 text-sm leading-relaxed">
                Nossa equipe monta o roteiro perfeito e personalizado para você viver essa experiência no Uyuni ou Atacama.
              </p>

              <div className="space-y-4">
                <a 
                  href="https://wa.me/5517997697872?text=Olá! Estava lendo o blog sobre o Uyuni e gostaria de planejar meu roteiro."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 bg-[#D4773C] text-white font-bold rounded-xl hover:bg-[#b35d24] active:scale-95 transition-all shadow-[0_10px_20px_-10px_rgba(212,119,60,0.6)] flex items-center justify-center gap-2"
                >
                  <span className="material-symbols-outlined text-xl">chat</span> Solicitar Orçamento
                </a>
              </div>
              
              <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col gap-3 font-inter">
                <div className="flex items-center justify-center gap-2 text-[10px] font-bold text-[#55433a] uppercase tracking-widest">
                  <span className="material-symbols-outlined text-green-600 text-sm">support_agent</span> Atendimento em Português
                </div>
                <div className="flex items-center justify-center gap-2 text-[10px] font-bold text-[#55433a] uppercase tracking-widest">
                  <span className="material-symbols-outlined text-green-600 text-sm">verified</span> Especialistas Locais
                </div>
              </div>
            </div>

          </div>
        </aside>
      </section>

      {/* 3. CONTINUE LENDO */}
      <section className="bg-white py-24 border-t border-slate-100 px-8">
        <div className="max-w-7xl mx-auto">
          <h3 className="font-manrope text-4xl font-bold mb-12 text-center text-[#221a15]">Leia também</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {[
              {
                id: "baltinache",
                titulo: "5 Lagoas Escondidas que você precisa conhecer no Atacama",
                imagem: "atacama-baltinache.jpg",
                tag: "Destinos"
              },
              {
                id: "vulcao-lascar",
                titulo: "Vulcão Lascar: Como se preparar para seu primeiro 5.000m",
                imagem: "atacama-lascar.jpg",
                tag: "Dicas Práticas"
              },
              {
                id: "tour-astronomico",
                titulo: "Tour Astronômico: Lendo o céu do Deserto do Atacama",
                imagem: "atacama-astros.jpg",
                tag: "Cultura Local"
              }
            ].map((post, i) => (
              <Link href={`/blog/${post.id}`} key={i} className="bg-[#F8F6F3] rounded-3xl overflow-hidden shadow-sm hover:shadow-[0_10px_30px_-10px_rgba(0,0,0,0.08)] transition-all group border border-slate-50 flex flex-col">
                <div className="h-48 relative overflow-hidden">
                  <img src={`/images/${post.imagem}`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt={post.titulo} />
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <span className="font-inter text-[10px] font-bold text-[#D4773C] uppercase tracking-widest mb-3 block">{post.tag}</span>
                  <h4 className="font-manrope font-bold text-xl group-hover:text-[#D4773C] transition-colors leading-tight text-[#221a15]">{post.titulo}</h4>
                </div>
              </Link>
            ))}

          </div>
        </div>
      </section>

    </main>
  );
}