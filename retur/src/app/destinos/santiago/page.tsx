import Link from "next/link";
import { passeiosData } from "@/src/data/passeios";

export default function SantiagoPage() {

  const numeroWhatsApp = "5517997697872";
    const passeiosSantiago = passeiosData.santiago;


  return (
    <main className="flex min-h-screen flex-col font-manrope bg-white">
      
      {/* 1. HERO SECTION */}
      <section 
        className="relative h-[70vh] flex items-end pb-20 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/santiago/santiago-hero.jpg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
        <div className="relative z-10 px-8 max-w-[1440px] mx-auto w-full text-white">
          <nav className="flex gap-2 text-[10px] uppercase tracking-widest mb-4 opacity-70">
            <Link href="/">Início</Link> <span>/</span> <Link href="/destinos">Destinos</Link> <span>/</span> <span className="text-retur-terra font-bold">Santiago</span>
          </nav>
          <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight">Santiago do Chile</h1>
          <p className="text-lg flex items-center gap-2 opacity-90 uppercase tracking-widest font-light text-sm">
            <span className="material-symbols-outlined text-retur-terra">location_on</span> Região Metropolitana, Chile
          </p>
        </div>
      </section>

      {/* 2. INTRODUÇÃO */}
      <section className="py-24 px-8 max-w-[1440px] mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <span className="text-retur-terra font-bold uppercase tracking-[0.3em] text-xs mb-4 block">Porta de Entrada dos Andes</span>
          <h2 className="text-4xl font-bold text-retur-texto mb-8 leading-tight">Vinhos, Neve e Cosmopolitismo</h2>
          <p className="text-gray-500 text-lg leading-relaxed mb-6">
            Santiago é uma metrópole vibrante que pulsa sob o olhar atento da Cordilheira dos Andes. Uma cidade que mistura arquitetura colonial, bairros boêmios e os arranha-céus mais modernos da América do Sul.
          </p>
          <p className="text-gray-500 text-lg leading-relaxed mb-10">
            A poucos quilômetros do centro, você encontra vinícolas centenárias e, durante o inverno, as melhores estações de esqui do continente. É o destino perfeito para quem busca diversidade em uma única viagem.
          </p>
          <div className="grid grid-cols-2 gap-6 border-t border-gray-100 pt-10">
            <div>
              <span className="font-bold text-retur-texto block">Cultura Vinícola</span>
              <p className="text-sm text-gray-400 mt-1">Visite algumas das vinícolas mais famosas e premiadas do mundo.</p>
            </div>
            <div>
              <span className="font-bold text-retur-texto block">Aventura na Neve</span>
              <p className="text-sm text-gray-400 mt-1">Esqui e snowboard a apenas 1 hora do centro da cidade.</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 h-[600px]">
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img src="/images/santiago/santiago-gal-3.jpeg" className="w-full h-full object-cover" alt="Valle Nevado" />
            </div>
          <div className="grid grid-rows-2 gap-4 h-full">
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img src="/images/santiago/santiago-amigos.jpeg" className="w-full h-full object-cover" alt="Vinícola" />
            </div>
            <div className="rounded-2xl overflow-hidden h-full shadow-lg">
            <img src="/images/santiago/santiago-neve.jpeg" className="w-full h-full object-cover" alt="Centro de Santiago" />
          </div>
          </div>
        </div>
      </section>

      {/* 4. PASSEIOS EM SANTIAGO */}
      <section className="py-24 bg-[#F8F6F3] overflow-hidden">
        <div className="px-8 max-w-[1440px] mx-auto w-full mb-12 flex flex-col md:flex-row justify-between items-end gap-6">
          <div>
            <h2 className="text-4xl font-bold text-[#221a15] mb-2">Passeios em Santiago</h2>
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
          
          {passeiosSantiago.map((tour) => (
            <div key={tour.id} className="min-w-[320px] md:min-w-[400px] bg-white rounded-3xl overflow-hidden shadow-[0_10px_30px_-10px_rgba(0,0,0,0.06)] border border-slate-50 flex flex-col group snap-start shrink-0">
              <div className="relative h-56 overflow-hidden">
                <img src={`/images/santiago/${tour.imagem}`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt={tour.titulo} />
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

      {/* 5. CTA */}
      <section className="py-24 bg-retur-terra text-white text-center px-8">
        <h2 className="text-4xl font-bold mb-6">Monte seu Roteiro em Santiago</h2>
        <p className="mb-10 opacity-90 max-w-xl mx-auto">Vinhos, montanhas ou cultura urbana? Deixe nossa equipe planejar a estadia perfeita para você na capital chilena.</p>
        <button className="bg-white text-retur-terra px-12 py-4 rounded-xl font-bold text-lg hover:shadow-2xl transition-all">Solicitar Orçamento</button>
      </section>

    </main>
  );
}