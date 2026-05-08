import Link from "next/link";
import Image from "next/image";
import { client } from "../../sanity/lib/client";
import { ReviewForm } from "../../components/ReviewForm";
import { ReviewsSection } from "../../components/ReviewsSection";

export const revalidate = 3600; 

async function getReviews() {
  const query = `*[_type == "review" && approved == true] | order(_createdAt desc) [0...12] {
    _id,
    author,
    rating,
    comment,
    "date": _createdAt
  }`;
  return client.fetch(query);
}

export default async function Home() {
  const reviews = await getReviews();

  return (
    <main className="flex min-h-screen flex-col font-manrope bg-white">
      
      {/* 1. HERO SECTION */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <Image 
          src="/images/santiago/santiago-hero.jpg" 
          alt="Santiago Hero" 
          fill 
          priority 
          className="object-cover object-center" 
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 text-center text-white px-4 max-w-4xl">
          <h1 className="text-4xl md:text-7xl font-bold mb-3 tracking-tight leading-tight">
            Viva o Atacama, Santiago e o Uyuni com Quem Realmente Entende
          </h1>
          <p className="text-lg md:text-xl mb-7 font-light opacity-90">
            Roteiros exclusivos desde 2018 | Guias especializados | Atendimento em Português
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <Link 
              href="/destinos" 
              className="bg-[#D4773C] hover:bg-orange-700 text-white px-10 py-4 rounded-md font-semibold transition-all shadow-lg"
            >
              Conhecer Destinos
            </Link>
            <a 
              href="https://wa.me/5517997697872?text=Olá, gostaria de ajuda para montar meu roteiro no Atacama!"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/40 text-white px-10 py-4 rounded-md font-semibold transition-all">
                Solicitar Orçamento
              </button>
            </a>
          </div>
        </div>
      </section>

      {/* 2. ESCOLHA SEU DESTINO */}
      <section className="py-24 px-8 max-w-[1440px] mx-auto w-full">
        <h2 className="text-4xl font-bold text-[#221a15] mb-12">
          Escolha seu Destino
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card Atacama */}
          <Link href="/destinos/atacama" className="group relative h-[500px] rounded-2xl overflow-hidden cursor-pointer shadow-xl block">
            <Image src="/images/atacama/atacama-ruta-hori.jpg" alt="Atacama" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
            <div className="absolute bottom-8 left-8 text-white">
              <h3 className="text-2xl font-bold mb-2">ATACAMA</h3>
              <p className="text-sm mb-6 text-gray-300 max-w-xs">Vales da lua e morte, geysers, lagoas altiplânicas a 2.400m altitude.</p>
              <span className="text-[#D4773C] font-bold text-sm tracking-widest flex items-center gap-2 group-hover:gap-4 transition-all">
                VER ROTEIROS <span className="text-xl">→</span>
              </span>
            </div>
          </Link> 

          {/* Card Uyuni */}
          <Link href="/destinos/uyuni" className="group relative h-[500px] rounded-2xl overflow-hidden cursor-pointer shadow-xl block">
            <Image src="/images/uyuni/uyuni-vertical3.png" alt="Uyuni" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
            <div className="absolute bottom-8 left-8 text-white">
              <h3 className="text-2xl font-bold mb-2">SALAR DE UYUNI</h3>
              <p className="text-sm mb-6 text-gray-300 max-w-xs">O maior deserto de sal do mundo, um espelho infinito a 3.650m altitude.</p>
              <span className="text-[#D4773C] font-bold text-sm tracking-widest flex items-center gap-2 group-hover:gap-4 transition-all">
                VER ROTEIROS <span className="text-xl">→</span>
              </span>
            </div>
          </Link>

          {/* Card Santiago */}
          <Link href="/destinos/santiago" className="group relative h-[500px] rounded-2xl overflow-hidden cursor-pointer shadow-xl block">
            <Image src="/images/santiago/santiago-gal-3.jpeg" alt="Santiago" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
            <div className="absolute bottom-8 left-8 text-white">
              <h3 className="text-2xl font-bold mb-2">SANTIAGO</h3>
              <p className="text-sm mb-6 text-gray-300 max-w-xs">Capital chilena, vinícolas e a majestosa Cordilheira dos Andes.</p>
              <span className="text-[#D4773C] font-bold text-sm tracking-widest flex items-center gap-2 group-hover:gap-4 transition-all">
                VER ROTEIROS <span className="text-xl">→</span>
              </span>
            </div>
          </Link>

          {/* Card Combo */}
          <Link href="/destinos/combo" className="group relative h-[500px] rounded-2xl overflow-hidden cursor-pointer shadow-xl border-2 border-[#D4773C] block">
            <Image src="/images/uyuni/dest-uyuni.jpg" alt="Atacama + Uyuni" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
            <div className="absolute top-6 right-6 bg-[#D4773C] text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">
              Experiência Completa
            </div>
            <div className="absolute bottom-8 left-8 text-white">
              <h3 className="text-2xl font-bold mb-2">ATACAMA + UYUNI</h3>
              <p className="text-sm mb-6 text-gray-300 max-w-xs">A jornada definitiva pelos Andes, conectando os dois destinos.</p>
              <span className="text-[#D4773C] font-bold text-sm tracking-widest flex items-center gap-2 group-hover:gap-4 transition-all">
                VER COMBO <span className="text-xl">→</span>
              </span>
            </div>
          </Link>
        </div>
      </section>

      {/* 4. POR QUE VIAJAR COM A RETUR? */}
      <section className="py-24 px-8 max-w-7xl mx-auto w-full text-center">
        <h2 className="text-4xl font-bold text-[#221a15] mb-4">Por que viajar com a Retur?</h2>
        <p className="text-gray-500 mb-16 max-w-2xl mx-auto">Compromisso com a sua segurança, conforto e a melhor experiência visual da sua vida.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {[
            { title: 'Desde 2018', desc: 'Anos de experiência operando nas condições extremas do deserto.', icon: 'event_available' },
            { title: 'Guias Locais', desc: 'Profissionais que conhecem cada segredo da região e garantem segurança.', icon: 'explore' },
            { title: 'Suporte PT-BR', desc: 'Atendimento personalizado no seu idioma, do planeamento até o retorno.', icon: 'support_agent' },
            { title: 'Roteiros Exclusivos', desc: 'Adaptamos a experiência ao seu ritmo e preferências fotográficas.', icon: 'tune' },
          ].map((item, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <span className="material-symbols-outlined text-[48px] text-[#221a15] mb-6 opacity-80">
                {item.icon}
              </span>
              <h4 className="font-bold text-xl mb-3">{item.title}</h4>
              <p className="text-sm text-gray-500 leading-relaxed px-4">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. O QUE DIZEM NOSSOS VIAJANTES (COMPONENTE INTERATIVO) */}
      <ReviewsSection reviews={reviews} />

      {/* FORMULÁRIO DE AVALIAÇÃO */}
      <ReviewForm />

      {/* 6. CTA FINAL */}
      <section className="relative h-[500px] flex items-center justify-center overflow-hidden">
        <Image 
          src="/images/atacama/atacama-ruta-hori.jpg" 
          alt="Atacama Background" 
          fill 
          className="object-cover object-center" 
        />
        <div className="absolute inset-0 bg-[#221a15]/60 z-0"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Pronto para a sua próxima aventura?</h2>
          <p className="text-lg mb-10 opacity-80">Deixe os detalhes com os especialistas e foque apenas em viver o momento.</p>
          <a 
            href="https://wa.me/5517997697872?text=Olá, quero planejar minha próxima aventura!" 
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#D4773C] hover:bg-orange-700 text-white px-12 py-4 rounded-md font-bold text-lg transition-all shadow-2xl inline-flex items-center gap-3"
          >
            Falar com Consultor <span className="material-symbols-outlined">chat</span>
          </a>
        </div>
      </section>

    </main>
  );
}