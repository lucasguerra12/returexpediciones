import Link from "next/link";
import Image from "next/image";
import { passeiosData } from "@/src/data/passeios";

export default function UyuniPage() {
  const numeroWhatsApp = "5517997697872";
  const passeiosUyuni = passeiosData.uyuni;
  return (
    <main className="flex min-h-screen flex-col font-manrope bg-white">
      
      {/* 1. HERO SECTION */}
      <section className="relative h-[70vh] flex items-end pb-20 overflow-hidden">
        <Image 
          src="/images/uyuni/uyuni-hero.jpg" 
          alt="Salar de Uyuni Hero" 
          fill 
          priority 
          className="object-cover object-center z-0" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10"></div>
        <div className="relative z-20 px-8 max-w-[1440px] mx-auto w-full text-white">
          <nav className="flex gap-2 text-[10px] uppercase tracking-widest mb-4 opacity-70">
            <Link href="/">Início</Link> <span>/</span> <Link href="/destinos">Destinos</Link> <span>/</span> <span className="text-retur-terra font-bold">Salar de Uyuni</span>
          </nav>
          <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight">Salar de Uyuni</h1>
          <p className="text-lg flex items-center gap-2 opacity-90 uppercase tracking-widest font-light text-sm">
            <span className="material-symbols-outlined text-retur-terra">location_on</span> Potosí, Bolívia
          </p>
        </div>
      </section>

      {/* 2. INTRODUÇÃO E GRID DE FOTOS */}
      <section className="py-24 px-8 max-w-[1440px] mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <span className="text-retur-terra font-bold uppercase tracking-[0.3em] text-xs mb-4 block">O Horizonte Infinito</span>
          <h2 className="text-4xl font-bold text-retur-texto mb-8 leading-tight">Onde o Céu e a Terra se Encontram</h2>
          <p className="text-gray-500 text-lg leading-relaxed mb-6">
            O Salar de Uyuni não é apenas o maior deserto de sal do mundo; é um portal para outra dimensão. Com mais de 10.000 km², esta vasta planície branca oferece um silêncio absoluto e paisagens que desafiam a percepção humana.
          </p>
          <p className="text-gray-500 text-lg leading-relaxed mb-10">
            Durante o período de chuvas, uma fina camada de água transforma o solo no maior espelho do planeta, fundindo o horizonte em uma continuidade infinita, ideal para entusiastas da fotografia e viajantes que buscam o extraordinário.
          </p>
          <div className="grid grid-cols-2 gap-6 border-t border-gray-100 pt-10">
            <div>
              <span className="font-bold text-retur-texto block">Vasto e Surreal</span>
              <p className="text-sm text-gray-400 mt-1">Mais de 10 mil km² de sal puro e horizontes sem fim.</p>
            </div>
            <div>
              <span className="font-bold text-retur-texto block">Fauna Exótica</span>
              <p className="text-sm text-gray-400 mt-1">Encontros com flamingos em lagoas coloridas a 4.000m.</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 h-[600px]">
          <div className="relative rounded-2xl overflow-hidden h-full shadow-lg">
            <Image src="/images/uyuni/uyuni-desertodesal.jpeg" fill className="object-cover" alt="Salar de Uyuni" />
          </div>
          <div className="grid grid-rows-2 gap-4 h-full">
            <div className="relative rounded-2xl overflow-hidden shadow-lg">
              <Image src="/images/uyuni/uyuni-hero.jpg" fill className="object-cover" alt="Ilha Incahuasi" />
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-lg">
              <Image src="/images/uyuni/uyuni-vertical3.png" fill className="object-cover" alt="Lagoa Colorada" />
            </div>
          </div>
        </div>
      </section>

      {/* 4. PASSEIOS NO UYUNI */}
      <section className="py-24 bg-[#F8F6F3] overflow-hidden">
        <div className="px-8 max-w-[1440px] mx-auto w-full mb-12 flex flex-col md:flex-row justify-between items-end gap-6">
          <div>
            <h2 className="text-4xl font-bold text-[#221a15] mb-2">Passeios em Salar de Uyuni</h2>
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
          <div className="min-w-[calc((100vw-1440px)/2)] hidden xl:block shrink-0"></div>
          
          {passeiosUyuni.map((tour) => (
            <div key={tour.id} className="min-w-[320px] md:min-w-[400px] bg-white rounded-3xl overflow-hidden shadow-[0_10px_30px_-10px_rgba(0,0,0,0.06)] border border-slate-50 flex flex-col group snap-start shrink-0">
              <div className="relative h-56 overflow-hidden">
                <Image src={`/images/uyuni/${tour.imagem}`} fill className="object-cover group-hover:scale-105 transition-transform duration-700" alt={tour.titulo} />
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
          <div className="min-w-[8px] shrink-0"></div>
        </div>
      </section>

      {/* 5. PLANEJE SUA VIAGEM */}
      <section className="py-24 bg-retur-areia px-8">
        <div className="max-w-[1000px] mx-auto w-full">
          <h2 className="text-4xl font-bold mb-12 text-center text-retur-texto">Planeje sua Viagem</h2>
          <div className="space-y-4">
            {[
              { q: 'Como chegar', a: 'A chegada pode ser por voo direto para Uyuni (UYU) ou via terrestre a partir de San Pedro de Atacama em nossas expedições de travessia.' },
              { q: 'Clima e Melhor Época', a: 'O período do espelho d’água ocorre entre janeiro e março. No resto do ano, o Salar fica seco e perfeitamente branco.' },
              { q: 'Dicas de Saúde', a: 'O Salar está a 3.650m. Beber muita água e evitar atividades físicas intensas no primeiro dia é fundamental para a aclimatação.' },
            ].map((item, idx) => (
              <details key={idx} className="group bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm">
                <summary className="flex justify-between items-center p-6 md:p-8 cursor-pointer font-bold text-lg text-retur-texto list-none hover:text-retur-terra transition-colors">
                  {item.q}
                  <span className="material-symbols-outlined text-gray-400 group-open:rotate-180 transition-transform duration-300">expand_more</span>
                </summary>
                <div className="px-6 md:px-8 pb-8 text-gray-500 leading-relaxed border-t border-gray-50 pt-6">
                  {item.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CTA */}
      <section className="py-24 bg-retur-terra text-white text-center px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Pronto para a imensidão?</h2>
          <p className="text-lg mb-12 opacity-90 leading-relaxed">Nossos especialistas estão prontos para desenhar a sua jornada personalizada pelo Salar de Uyuni e arredores.</p>
          <a 
            href={`https://wa.me/${numeroWhatsApp}?text=Olá! Quero montar meu roteiro personalizado para o Salar de Uyuni.`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-retur-terra px-10 py-5 rounded-xl font-bold text-lg hover:shadow-2xl transition-all inline-flex items-center gap-3"
          >
            Montar meu Roteiro no Uyuni
          </a>
        </div>
      </section>

    </main>
  );
}