import Link from "next/link";
import { passeiosData } from "@/src/data/passeios";

export default function AtacamaPage() {
  const numeroWhatsApp = "5517997697872";
  const passeiosAtacama = passeiosData.atacama;

  return (
    <main className="flex min-h-screen flex-col font-manrope bg-white">
      
      {/* 1. HERO SECTION */}
      <section 
        className="relative h-[70vh] flex items-end pb-20 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/atacama/atacama.jpg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
        <div className="relative z-10 px-8 max-w-[1440px] mx-auto w-full text-white">
          <nav className="flex gap-2 text-[10px] uppercase tracking-widest mb-4 opacity-70 font-inter">
            <Link href="/">Início</Link> <span>/</span> <span>Destinos</span> <span>/</span> <span className="text-[#D4773C] font-bold">Atacama</span>
          </nav>
          <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight">Deserto do Atacama</h1>
          <p className="text-lg flex items-center gap-2 opacity-90 uppercase tracking-widest font-light text-sm font-inter">
            <span className="material-symbols-outlined text-[#D4773C]">location_on</span> San Pedro de Atacama, Chile
          </p>
        </div>
      </section>

      {/* 2. INTRODUÇÃO E GRID DE FOTOS */}
      <section className="py-24 px-8 max-w-[1440px] mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <span className="text-[#D4773C] font-bold uppercase tracking-[0.3em] text-xs mb-4 block font-inter">Exploração sem limites</span>
          <h2 className="text-4xl font-bold text-[#221a15] mb-8 leading-tight">O Deserto mais Árido do Mundo</h2>
          <p className="text-[#55433a] font-inter text-lg leading-relaxed mb-6">
            O Atacama não é apenas um deserto; é um laboratório geológico a céu aberto. Situado no norte do Chile, este vasto platô oferece paisagens surreais que desafiam a imaginação, desde vales lunares a lagoas de um azul hipnotizante.
          </p>
          <p className="text-[#55433a] font-inter text-lg leading-relaxed mb-10">
            Nossas expedições são desenhadas para quem busca mais do que fotos. Focamos na logística de alto padrão para garantir conforto em altitudes elevadas, permitindo que você se concentre apenas na imensidão à sua frente.
          </p>
          <div className="grid grid-cols-2 gap-6 border-t border-slate-100 pt-10">
            <div>
              <span className="font-bold text-[#221a15] block">Aclimatação Segura</span>
              <p className="font-inter text-sm text-slate-500 mt-1">Roteiros pensados no bem-estar do seu corpo.</p>
            </div>
            <div>
              <span className="font-bold text-[#221a15] block">Logística Premium</span>
              <p className="font-inter text-sm text-slate-500 mt-1">Veículos 4x4 modernos e equipados para extremos.</p>
            </div>
          </div>
        </div>

        {/* Grid de Fotos Estilo Galeria */}
        <div className="grid grid-cols-2 gap-4 h-[600px]">
          <div className="rounded-2xl overflow-hidden h-full shadow-lg">
            <img src="/images/atacama/atacama-multi.png" className="w-full h-full object-cover" alt="Atacama Paisagem" />
          </div>
          <div className="grid grid-rows-2 gap-4 h-full">
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img src="/images/atacama/atacama-geysers-paisagem.jpg" className="w-full h-full object-cover" alt="Salar Atacama" />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img src="/images/atacama/atacama-amigos.jpg" className="w-full h-full object-cover" alt="Geysers" />
            </div>
          </div>
        </div>
      </section>

      {/* 3. CARROSSEL DE PASSEIOS NO ATACAMA */}
      <section className="py-24 bg-[#F8F6F3] overflow-hidden">
        <div className="px-8 max-w-[1440px] mx-auto w-full mb-12 flex flex-col md:flex-row justify-between items-end gap-6">
          <div>
            <h2 className="text-4xl font-bold text-[#221a15] mb-2">Passeios no Atacama</h2>
            <p className="font-inter text-[#55433a] text-lg">Deslize para ver todas as experiências disponíveis neste destino.</p>
          </div>
          <div className="flex gap-2">
             <span className="material-symbols-outlined text-slate-400">swipe_left</span>
             <span className="font-inter text-sm font-bold text-slate-400 uppercase tracking-widest">Deslize</span>
             <span className="material-symbols-outlined text-slate-400">swipe_right</span>
          </div>
        </div>

        {/* Container do Carrossel */}
        <div className="flex overflow-x-auto gap-6 px-8 pb-12 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {/* Espaçamento inicial para alinhar com o container */}
          <div className="min-w-[calc((100vw-1440px)/2)] hidden xl:block shrink-0"></div>
          
          {passeiosAtacama.map((tour) => (
            <div key={tour.id} className="min-w-[320px] md:min-w-[400px] bg-white rounded-3xl overflow-hidden shadow-[0_10px_30px_-10px_rgba(0,0,0,0.06)] border border-slate-50 flex flex-col group snap-start shrink-0">
              <div className="relative h-56 overflow-hidden">
                <img src={`/images/atacama/${tour.imagem}`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt={tour.titulo} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold mb-3 text-[#221a15] leading-tight">{tour.titulo}</h3>
                <p className="font-inter text-sm text-[#55433a] mb-8 leading-relaxed flex-grow">{tour.resumo}</p>
                
                <div className="mt-auto border-t border-slate-100 pt-6">
                  <a 
                    href={`https://wa.me/${numeroWhatsApp}?text=Olá! Gostaria de orçar e saber mais sobre o passeio: *${tour.titulo}* no Atacama.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-[#F8F6F3] text-[#D4773C] py-4 rounded-xl font-bold hover:bg-[#D4773C] hover:text-white transition-colors flex items-center justify-center gap-2 group/btn border border-[#f0dfd7]"
                  >
                    <span className="material-symbols-outlined text-lg">chat</span>
                    Solicitar Orçamento
                  </a>
                </div>
              </div>
            </div>
          ))}

          {/* Espaçamento final para o último item não colar na tela */}
          <div className="min-w-[8px] shrink-0"></div>
        </div>
      </section>

      {/* 4. PLANEJE SUA VIAGEM */}
      <section className="py-24 px-8">
        <div className="max-w-[1000px] mx-auto w-full">
          <h2 className="text-4xl font-bold mb-12 text-center text-[#221a15]">Dicas Práticas do Destino</h2>
          <div className="space-y-4">
            {[
              { q: 'Como chegar', a: 'A porta de entrada é o aeroporto de Calama (CJC). De lá, são cerca de 1h30 de transfer terrestre até a vila de San Pedro de Atacama.' },
              { q: 'Altitude e Aclimatação', a: 'San Pedro está a 2.400m. Nossos roteiros começam com passeios mais baixos (como o Valle de la Luna) para que seu corpo se adapte de forma saudável antes de subir aos 4.300m dos Geysers.' },
              { q: 'O que levar na mala', a: 'Roupas em camadas (estilo cebola), protetor solar FPS 50+, hidratante labial intenso, colírio, óculos de sol com proteção UV e garrafas de água são essenciais para o clima extremo.' },
            ].map((item, idx) => (
              <details key={idx} className="group bg-[#F8F6F3] border border-slate-100 rounded-2xl overflow-hidden shadow-sm">
                <summary className="flex justify-between items-center p-6 md:p-8 cursor-pointer font-bold text-lg text-[#221a15] list-none hover:text-[#D4773C] transition-colors">
                  {item.q}
                  <span className="material-symbols-outlined text-slate-400 group-open:rotate-180 transition-transform duration-300">expand_more</span>
                </summary>
                <div className="px-6 md:px-8 pb-8 font-inter text-[#55433a] leading-relaxed border-t border-slate-200/50 pt-6">
                  {item.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CTA FOOTER */}
      <section className="py-24 bg-[#D4773C] text-white text-center px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="max-w-3xl mx-auto relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Monte seu Roteiro no Atacama</h2>
          <p className="font-inter text-lg mb-12 opacity-90 leading-relaxed">Não se preocupe com qual passeio fazer primeiro. Nossos especialistas estão prontos para desenhar a sua jornada personalizada focando na aclimatação correta.</p>
          <a 
            href={`https://wa.me/${numeroWhatsApp}?text=Olá! Gostaria de ajuda para montar um roteiro completo no Atacama.`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-[#D4773C] px-10 py-5 rounded-xl font-bold text-lg hover:shadow-2xl transition-all inline-flex items-center justify-center gap-3"
          >
            Falar com um Especialista <span className="material-symbols-outlined">whatsapp</span>
          </a>
        </div>
      </section>

    </main>
  );
}