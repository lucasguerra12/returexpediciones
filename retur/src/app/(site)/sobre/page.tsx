import Link from "next/link";
import Image from "next/image";

export default function SobreNosPage() {
  return (
    <main className="flex min-h-screen flex-col font-manrope bg-[#F8F6F3] text-[#221a15]">
      
      {/* 1. HERO SECTION */}
      <section className="relative h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <Image 
            className="object-cover" 
            src="/images/combo-sobre.png" 
            alt="Expedição Retur no Deserto"
            fill
            priority 
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        <div className="relative z-10 text-center px-8 max-w-4xl">
          <nav className="mb-6">
            <ul className="flex items-center justify-center space-x-2 text-white/80 font-inter text-xs uppercase tracking-widest">
              <li><Link href="/" className="hover:text-white transition-colors">Início</Link></li>
              <li><span className="material-symbols-outlined text-[14px]">chevron_right</span></li>
              <li className="text-white font-bold">Sobre Nós</li>
            </ul>
          </nav>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight tracking-tight">
            Viva a experiência com atendimento humano e planejamento de verdade
          </h1>
          <p className="font-inter text-lg md:text-xl text-white/90 font-light max-w-2xl mx-auto leading-relaxed">
            Especialistas em Atacama e Salar de Uyuni, Roteiros planejados com segurança, conforto e cuidado real em cada detalhe..
          </p>
        </div>
      </section>

      {/* 2. QUEM SOMOS / NOSSA HISTÓRIA */}
      <section className="py-24 max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Texto História */}
          <div className="space-y-8">
            <span className="text-[#D4773C] font-bold tracking-widest uppercase text-xs">Quem Somos</span>
            <h2 className="text-4xl font-bold text-[#221a15] leading-tight">
              A experiência faz toda a diferença
            </h2>
            <div className="space-y-6 font-inter text-[#55433a] text-lg leading-relaxed">
              <p>
                Fundada em 2018, a Retur Expediciones nasceu com a missão de transformar viagens ao Deserto do Atacama e ao Salar de Uyuni em experiências profundas, organizadas e inesquecíveis.
              </p>
              <p>
                Aqui, cada roteiro é planejado com atenção real aos detalhes: adaptação à altitude, escolha estratégica dos passeios, hospedagens confortáveis, logística eficiente e acompanhamento humano do início ao fim da viagem.
              </p>
              <p className="font-bold text-[#D4773C] text-xl italic pt-4">
                "Mais do que vender pacotes, criamos jornadas sob medida. Mais do que organizar passeios, entregamos tranquilidade."
              </p>
            </div>
          </div>

          {/* Imagem e Métricas */}
          <div className="space-y-8">
            <div className="rounded-3xl overflow-hidden shadow-[0_10px_30px_-10px_rgba(0,0,0,0.1)] h-80 relative">
              <Image src="/images/uyuni/uyuni-1.jpg" alt="História Retur" fill className="object-cover" />
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="p-8 bg-white border border-slate-100 rounded-2xl text-center shadow-sm hover:-translate-y-1 transition-transform">
                <div className="text-4xl font-bold text-[#D4773C] mb-2">Desde 2018</div>
                <div className="font-inter text-xs uppercase text-[#55433a] tracking-widest font-bold">Anos de Experiência</div>
              </div>
              <div className="p-8 bg-white border border-slate-100 rounded-2xl text-center shadow-sm hover:-translate-y-1 transition-transform">
                <div className="text-4xl font-bold text-[#D4773C] mb-2">100%</div>
                <div className="font-inter text-xs uppercase text-[#55433a] tracking-widest font-bold">Suporte e Segurança</div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 3. OS TRÊS PILARES */}
      <section className="bg-white py-24 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#221a15] mb-4">A Base da Nossa Entrega</h2>
            <p className="text-[#55433a] font-inter max-w-2xl mx-auto text-lg">Roteiros planejados com cuidado real em cada detalhe para você viver o deserto sem preocupações.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#F8F6F3] p-10 rounded-3xl hover:-translate-y-2 transition-transform duration-300 border-t-4 border-[#D4773C]">
              <span className="material-symbols-outlined text-4xl text-[#D4773C] mb-6">explore</span>
              <h3 className="text-2xl font-bold text-[#221a15] mb-4">Experiência no Destino</h3>
              <p className="text-[#55433a] font-inter leading-relaxed">Anos ajudando viajantes a explorarem os cantos mais inóspitos e belos do Atacama e do Salar de Uyuni com total segurança.</p>
            </div>
            
            <div className="bg-[#F8F6F3] p-10 rounded-3xl hover:-translate-y-2 transition-transform duration-300 border-t-4 border-[#D4773C]">
              <span className="material-symbols-outlined text-4xl text-[#D4773C] mb-6">support_agent</span>
              <h3 className="text-2xl font-bold text-[#221a15] mb-4">Atendimento Próximo</h3>
              <p className="text-[#55433a] font-inter leading-relaxed">Suporte humanizado em português e orientação completa e transparente antes e durante toda a sua viagem.</p>
            </div>
            
            <div className="bg-[#F8F6F3] p-10 rounded-3xl hover:-translate-y-2 transition-transform duration-300 border-t-4 border-[#D4773C]">
              <span className="material-symbols-outlined text-4xl text-[#D4773C] mb-6">edit_calendar</span>
              <h3 className="text-2xl font-bold text-[#221a15] mb-4">Roteiros Bem Planejados</h3>
              <p className="text-[#55433a] font-inter leading-relaxed">Cada viagem é organizada com atenção aos mínimos detalhes logísticos para que tudo funcione da melhor forma possível.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. POR QUE ESCOLHER A RETUR (Diferenciais Práticos) */}
      <section className="py-24 max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold text-[#221a15] mb-8">Por que planejar conosco?</h2>
            <p className="text-[#55433a] font-inter mb-12 text-lg">A segurança de estar com quem realmente entende das condições extremas de altitude e clima dos desertos andinos.</p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-10 gap-x-8 font-inter">
              <div className="flex items-start gap-4">
                <span className="material-symbols-outlined text-[#D4773C] text-3xl">height</span>
                <div>
                  <h4 className="font-bold text-[#221a15] mb-1">Aclimatação Segura</h4>
                  <p className="text-sm text-[#55433a]">Roteiros desenhados respeitando a altitude passo a passo.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="material-symbols-outlined text-[#D4773C] text-3xl">directions_car</span>
                <div>
                  <h4 className="font-bold text-[#221a15] mb-1">Logística Eficiente</h4>
                  <p className="text-sm text-[#55433a]">Veículos seguros e bem equipados para o off-road.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="material-symbols-outlined text-[#D4773C] text-3xl">hotel</span>
                <div>
                  <h4 className="font-bold text-[#221a15] mb-1">Hospedagens Validadas</h4>
                  <p className="text-sm text-[#55433a]">Conforto garantido, mesmo nas regiões mais remotas.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="material-symbols-outlined text-[#D4773C] text-3xl">forum</span>
                <div>
                  <h4 className="font-bold text-[#221a15] mb-1">Comunicação Clara</h4>
                  <p className="text-sm text-[#55433a]">Você nunca se sentirá perdido ou sem informações.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl">
            <Image 
              src="/images/uyuni/uyuni-aventureiro-1.jpeg" 
              alt="Diferenciais Retur" 
              fill
              className="object-cover" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#221a15]/60 to-transparent"></div>
            <div className="absolute bottom-10 left-10 right-10">
              <p className="text-white font-bold text-2xl">"Retur Expediciones — Quem viaja, vive."</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CTA FINAL */}
      <section className="relative h-[500px] flex items-center justify-center overflow-hidden bg-[#221a15]">
        <div className="absolute inset-0 z-0 opacity-40">
          <Image src="/images/uyuni/uyuni-hero.jpg" alt="Deserto" fill className="object-cover" />
        </div>
        
        <div className="relative z-10 text-center px-8 max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Viagem não é só destino.<br/>É como você vive cada momento.
          </h2>
          <p className="font-inter text-lg text-white/80 mb-10 max-w-2xl mx-auto">
            Na Retur Expediciones, você encontra atendimento próximo e suporte pensado especialmente para a realidade do deserto e da altitude.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <a 
              href="https://wa.me/5517997697872?text=Olá! Gostaria de planejar minha viagem com a Retur." 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-[#D4773C] text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-[#B35D24] shadow-lg transition-all flex items-center justify-center gap-2"
            >
              <span className="material-symbols-outlined">chat</span> Falar com a Equipe
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}