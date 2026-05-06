"use client";

import Link from "next/link";
import { useState } from "react";

export default function ComboPage() {
  // Estado para controlar qual aba de roteiro está ativa (7 ou 10 dias)
  const [roteiroDias, setRoteiroDias] = useState<7 | 10>(7);

  // Dados do Roteiro de 7 Dias
  const roteiro7Dias = [
    { day: "DIA 1", title: "San Pedro de Atacama", desc: "Chegada, recepção e briefing da expedição. Tarde livre para aclimatação no vilarejo.", icon: "flight_land", img: "atacama/atacama-amigos.jpg" },
    { day: "DIA 2", title: "Lagunas Altiplânicas", desc: "Visita às lagoas Miscanti e Miñiques a 4.000m de altitude. Paisagens de tirar o fôlego.", icon: "water", img: "atacama/atacama-baltinache.jpeg" },
    { day: "DIA 4", title: "Travessia para Uyuni", desc: "Cruzamento da fronteira Hito Cajón. Início da jornada boliviana em veículos 4x4.", icon: "directions_car", img: "uyuni/uyuni.jpg" },
    { day: "DIA 7", title: "Salar de Uyuni", desc: "O grande espelho d'água, sessão de fotos com perspectiva e finalização da travessia.", icon: "landscape", img: "uyuni/uyuni-hotel.jpg" },
  ];

  // Dados do Roteiro de 10 Dias (Mais imersivo)
  const roteiro10Dias = [
    { day: "DIA 1", title: "Chegada & Aclimatação", desc: "Recepção em San Pedro. Pôr do sol clássico no Valle de la Luna e Vallecito.", icon: "flight_land", img: "atacama/atacama-valle-luna.jpg" },
    { day: "DIA 3", title: "Geysers & Lagunas", desc: "Amanhecer nos Geysers del Tatio e flutuação nas Lagunas Escondidas de Baltinache.", icon: "water", img: "atacama/atacama-geysers-fumaca.jpg" },
    { day: "DIA 6", title: "Fronteira Bolívia", desc: "Início da travessia 4x4 passando pela Reserva Eduardo Avaroa e suas lagoas coloridas.", icon: "directions_car", img: "uyuni/uyuni.jpg" },
    { day: "DIA 9", title: "O Amanhecer no Salar", desc: "A imensidão do Salar de Uyuni ao nascer do sol e descanso no autêntico Hotel de Sal.", icon: "landscape", img: "uyuni/uyuni-hotel.jpg" },
    { day: "DIA 10", title: "Retorno", desc: "Despedida do Altiplano boliviano e transfer seguro para o aeroporto ou retorno ao Chile.", icon: "flight_takeoff", img: "atacama/atacama-licancanbur-vulcao-hori.jpeg" },
  ];

  // Define qual array será renderizado com base no estado atual
  const roteiroAtivo = roteiroDias === 7 ? roteiro7Dias : roteiro10Dias;

  return (
    <main className="flex min-h-screen flex-col font-manrope bg-[#F8F6F3] text-[#221a15]">
      
      {/* 1. HERO SECTION (Split Screen) */}
      <section className="relative h-[80vh] md:h-screen w-full flex flex-col md:flex-row overflow-hidden">
        {/* Lado Esquerdo - Atacama */}
        <div className="relative w-full h-1/2 md:h-full md:w-1/2 group">
          <div className="absolute inset-0 bg-black/40 z-10 transition-colors duration-500 group-hover:bg-black/20"></div>
          <img className="absolute inset-0 w-full h-full object-cover" src="/images/atacama/atacama-licancanbur-vulcao-hori.jpeg" alt="Atacama" />
          <div className="absolute bottom-10 left-10 z-20">
            <span className="text-white/80 font-inter font-medium uppercase tracking-widest text-sm">Chile</span>
            <h3 className="text-white font-bold text-3xl">Deserto do Atacama</h3>
          </div>
        </div>

        {/* Lado Direito - Uyuni */}
        <div className="relative w-full h-1/2 md:h-full md:w-1/2 group">
          <div className="absolute inset-0 bg-black/40 z-10 transition-colors duration-500 group-hover:bg-black/20"></div>
          <img className="absolute inset-0 w-full h-full object-cover" src="/images/uyuni/uyuni.jpg" alt="Uyuni" />
          <div className="absolute bottom-10 right-10 z-20 text-right">
            <span className="text-white/80 font-inter font-medium uppercase tracking-widest text-sm">Bolívia</span>
            <h3 className="text-white font-bold text-3xl">Salar de Uyuni</h3>
          </div>
        </div>

        {/* Overlay Central */}
        <div className="absolute inset-0 flex flex-col items-center justify-center z-30 pointer-events-none">
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-8 md:p-16 rounded-[32px] text-center max-w-2xl mx-4 pointer-events-auto shadow-2xl">
            <h1 className="text-white font-bold text-4xl md:text-5xl lg:text-6xl mb-4 tracking-tight">Atacama + Uyuni</h1>
            <p className="font-inter text-white/90 text-lg mb-8">A Experiência Completa dos Desertos</p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <span className="bg-white/20 text-white px-4 py-1.5 rounded-full text-sm font-medium border border-white/30 backdrop-blur-md">7-10 dias</span>
              <span className="bg-white/20 text-white px-4 py-1.5 rounded-full text-sm font-medium border border-white/30 backdrop-blur-md">2 países</span>
              <span className="bg-white/20 text-white px-4 py-1.5 rounded-full text-sm font-medium border border-white/30 backdrop-blur-md">Guia bilíngue</span>
            </div>
            <div className="flex flex-col sm:flex-row gap-5 justify-center">
             <a 
            href="https://wa.me/5517997697872?text=Olá, gostaria de ajuda para montar meu roteiro no Atacama!"
            target="_blank"
            rel="noopener noreferrer">
            <button className="bg-[#D4773C] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-[#c95e1a] transition-colors shadow-lg flex items-center justify-center gap-2">
              Solicitar Orçamento
            </button></a>
          </div>
          </div>
        </div>
      </section>

      <section className="py-24 max-w-7xl mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-[#221a15]">Por que fazer o combo?</h2>
          <p className="text-[#55433a] font-inter max-w-2xl mx-auto">A jornada definitiva pelo coração dos Andes, conectando as paisagens mais surreais da América do Sul em uma única travessia.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: "landscape", title: "Melhor dos 2 Mundos", desc: "Contraste as montanhas vulcânicas do Atacama com a imensidão branca infinita do maior deserto de sal do planeta.", color: "text-[#D4773C]", bg: "bg-[#ffdbc9]/40" },
            { icon: "savings", title: "Economia de Tempo", desc: "Logística integrada que otimiza deslocamentos, evitando gastos duplicados e conexões desnecessárias.", color: "text-[#2B7A9B]", bg: "bg-[#c0e8ff]/40" },
            { icon: "explore", title: "Travessia Épica", desc: "Cruze a fronteira terrestre entre Chile e Bolívia em veículos 4x4 equipados para o terreno mais desafiador da região.", color: "text-[#006576]", bg: "bg-[#aaedff]/40" },
          ].map((item, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl shadow-[0_10px_30px_-10px_rgba(0,0,0,0.08)] border border-slate-100 transition-transform hover:-translate-y-2">
              <div className={`w-16 h-16 ${item.bg} flex items-center justify-center rounded-2xl mb-6 ${item.color}`}>
                <span className="material-symbols-outlined text-4xl">{item.icon}</span>
              </div>
              <h3 className="text-xl font-bold mb-4">{item.title}</h3>
              <p className="text-[#55433a] font-inter text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      

      {/* 4. MAPA DA ROTA */}
      <section className="py-24 max-w-7xl mx-auto px-8">
        <div className="bg-[#f0dfd7] rounded-[40px] overflow-hidden grid grid-cols-1 lg:grid-cols-2 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.08)]">
          <div className="p-12 md:p-20 flex flex-col justify-center">
            <h2 className="text-4xl font-bold mb-6 text-[#221a15]">Mapa da Rota</h2>
            <p className="text-[#55433a] font-inter mb-12 text-lg">Uma travessia de aproximadamente 500km conectando os dois destinos mais icônicos do Altiplano.</p>
            
            <div className="space-y-6 relative before:absolute before:left-4 before:top-4 before:bottom-4 before:w-0.5 before:bg-white">
              <div className="flex items-start gap-6 relative z-10">
                <div className="w-8 h-8 bg-[#D4773C] text-white flex items-center justify-center rounded-full font-bold text-sm shrink-0 shadow-md">A</div>
                <div>
                  <p className="font-bold text-lg">San Pedro de Atacama (Chile)</p>
                  <p className="font-inter text-sm text-[#55433a] mt-1">Ponto de partida e aclimatação.</p>
                </div>
              </div>
              <div className="flex items-start gap-6 relative z-10">
                <div className="w-8 h-8 bg-slate-400 text-white flex items-center justify-center rounded-full shrink-0 shadow-md">
                  <span className="material-symbols-outlined text-sm">flag</span>
                </div>
                <div>
                  <p className="font-bold text-lg">Hito Cajón</p>
                  <p className="font-inter text-sm text-[#55433a] mt-1">Fronteira Chile/Bolívia - Controle Migratório.</p>
                </div>
              </div>
              <div className="flex items-start gap-6 relative z-10">
                <div className="w-8 h-8 bg-[#2B7A9B] text-white flex items-center justify-center rounded-full font-bold text-sm shrink-0 shadow-md">B</div>
                <div>
                  <p className="font-bold text-lg">Salar de Uyuni (Bolívia)</p>
                  <p className="font-inter text-sm text-[#55433a] mt-1">Destino final e ápice da aventura.</p>
                </div>
              </div>
            </div>

            <div className="mt-12 grid grid-cols-2 gap-4">
              <div className="bg-white/60 backdrop-blur-sm p-5 rounded-2xl">
                <p className="font-inter text-xs font-bold uppercase text-[#55433a] tracking-widest mb-1">Distância Total</p>
                <p className="text-2xl font-bold text-[#221a15]">~520 km</p>
              </div>
              <div className="bg-white/60 backdrop-blur-sm p-5 rounded-2xl">
                <p className="font-inter text-xs font-bold uppercase text-[#55433a] tracking-widest mb-1">Duração do Trânsito</p>
                <p className="text-2xl font-bold text-[#221a15]">4 Dias <span className="text-sm font-normal">(Off-road)</span></p>
              </div>
            </div>
          </div>
          <div className="h-[400px] lg:h-auto min-h-[500px]">
            <img className="w-full h-full object-cover" src="/images/salarmapa.png" alt="Mapa da Rota Atacama para Uyuni" />
          </div>
        </div>
      </section>

      {/* 5. TRANSPARÊNCIA (O que inclui / não inclui) */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-4xl font-bold text-center mb-16 text-[#221a15]">Transparência Total</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#f0dfd7]/30 p-10 rounded-[32px] border border-[#f0dfd7]">
              <div className="flex items-center gap-4 mb-8">
                <span className="material-symbols-outlined text-[#006576] text-3xl">verified</span>
                <h3 className="text-2xl font-bold text-[#006576]">O que INCLUI</h3>
              </div>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6">
                {["Traslados Aeroporto Calama", "Hospedagens citadas", "Café da manhã diário", "Almoços e Jantares na Bolívia", "Guia local especialista", "Cilindro de Oxigênio no 4x4", "Radiocomunicação Satelital", "Kits de Primeiros Socorros", "Vinhos e petiscos", "Taxas de Parques Nacionais"].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 font-inter text-sm text-[#221a15]">
                    <span className="material-symbols-outlined text-[#006576] text-lg shrink-0">check</span> {item}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-white p-10 rounded-[32px] border border-slate-200 shadow-sm">
              <div className="flex items-center gap-4 mb-8">
                <span className="material-symbols-outlined text-[#ba1a1a] text-3xl">block</span>
                <h3 className="text-2xl font-bold text-[#ba1a1a]">NÃO inclui</h3>
              </div>
              <ul className="space-y-4">
                {["Passagens aéreas internacionais", "Jantares em San Pedro de Atacama", "Gastos extras e Gorjetas", "Testes de COVID (se exigidos)"].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 font-inter text-sm text-[#221a15]">
                    <span className="material-symbols-outlined text-[#ba1a1a] text-lg shrink-0">close</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 6. PREPARE-SE */}
      <section className="py-24 max-w-7xl mx-auto px-8">
        <h2 className="text-4xl font-bold text-center mb-16 text-[#221a15]">Prepare-se para a Aventura</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: "height", title: "ALTITUDE", desc: "Alcançaremos 4.900m. Recomendamos aclimatação prévia e muita hidratação." },
            { icon: "fitness_center", title: "FÍSICO", desc: "Dificuldade moderada. Caminhadas leves, mas a altitude exige esforço extra." },
            { icon: "description", title: "DOCUMENTOS", desc: "RG original (menos de 10 anos) ou Passaporte. Certificado de Vacina." },
            { icon: "thermostat", title: "CLIMA", desc: "Extremo. Dias quentes e noites que podem chegar a -15°C." }
          ].map((item, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl border border-slate-100 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.08)] text-center">
              <span className="material-symbols-outlined text-4xl text-[#D4773C] mb-6">{item.icon}</span>
              <h4 className="font-bold mb-3 tracking-wide">{item.title}</h4>
              <p className="font-inter text-sm text-[#55433a] leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 7. CTA FINAL */}
      <section className="py-24 px-8">
        <div className="max-w-5xl mx-auto bg-[#D4773C] rounded-[48px] p-12 md:p-24 text-center text-white shadow-2xl relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="font-bold text-4xl md:text-5xl mb-6 leading-tight">Pronto para a Aventura Completa?</h2>
            <p className="font-inter text-lg mb-12 opacity-90 max-w-2xl mx-auto">Nossos especialistas estão prontos para ajudar você a planejar a viagem da sua vida.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a 
                href="https://wa.me/5517997697872?text=Olá, gostaria de ajuda para montar meu roteiro Combo Atacama + Uyuni!"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="bg-white text-[#D4773C] px-10 py-4 rounded-full font-bold text-lg hover:bg-slate-50 transition-colors shadow-lg flex items-center justify-center gap-2">
                  <span className="material-symbols-outlined">chat</span>
                  Solicitar Orçamento
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}