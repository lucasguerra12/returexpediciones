import Link from "next/link";

export default function Home() {
  const getWhatsAppLink = (tourName: string) => {
    const message = encodeURIComponent(`Olá! Gostaria de mais informações e um orçamento para o tour: ${tourName}`);
    return `https://wa.me/5511999999999?text=${message}`;
  };

  return (
    <main className="flex min-h-screen flex-col font-manrope bg-white">
      
      {/* 1. HERO SECTION */}
      <section 
        className="relative h-[90vh] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 text-center text-white px-4 max-w-4xl">
          <h1 className="text-4xl md:text-7xl font-bold mb-6 tracking-tight leading-tight">
            Viva o Atacama e o Uyuni com Quem Realmente Entende
          </h1>
          <p className="text-lg md:text-xl mb-8 font-light opacity-90">
            Roteiros exclusivos desde 2018 | Guias especializados | Atendimento em Português
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/destinos" 
              className="bg-retur-terra hover:bg-orange-700 text-white px-10 py-4 rounded-md font-semibold transition-all shadow-lg"
            >
              Conhecer Destinos
            </Link>
            <button className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/40 text-white px-10 py-4 rounded-md font-semibold transition-all">
              Solicitar Orçamento
            </button>
          </div>
        </div>
      </section>

      {/* 2. ESCOLHA SEU DESTINO */}
      <section className="py-24 px-8 max-w-[1440px] mx-auto w-full">
        <h2 className="text-4xl font-bold text-retur-texto mb-12">
          Escolha seu Destino
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card Atacama */}
          <div className="group relative h-[500px] rounded-2xl overflow-hidden cursor-pointer shadow-xl">
            <img src="/images/dest-atacama.jpg" alt="Atacama" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
            <div className="absolute bottom-8 left-8 text-white">
              <h3 className="text-2xl font-bold mb-2">ATACAMA</h3>
              <p className="text-sm mb-6 text-gray-300 max-w-xs">Vales da lua e morte, geysers, lagoas altiplânicas a 2.400m altitude.</p>
              <span className="text-retur-terra font-bold text-sm tracking-widest flex items-center gap-2 group-hover:gap-4 transition-all">
                VER ROTEIROS <span className="text-xl">→</span>
              </span>
            </div>
          </div>

          {/* Card Uyuni */}
          <div className="group relative h-[500px] rounded-2xl overflow-hidden cursor-pointer shadow-xl">
            <img src="/images/dest-uyuni.jpg" alt="Uyuni" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
            <div className="absolute bottom-8 left-8 text-white">
              <h3 className="text-2xl font-bold mb-2">SALAR DE UYUNI</h3>
              <p className="text-sm mb-6 text-gray-300 max-w-xs">O maior deserto de sal do mundo, um espelho infinito a 3.650m altitude.</p>
              <span className="text-retur-terra font-bold text-sm tracking-widest flex items-center gap-2 group-hover:gap-4 transition-all">
                VER ROTEIROS <span className="text-xl">→</span>
              </span>
            </div>
          </div>

          {/* Card Santiago (Adicionado) */}
          <div className="group relative h-[500px] rounded-2xl overflow-hidden cursor-pointer shadow-xl">
            <img src="/images/dest-santiago.jpg" alt="Santiago" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
            <div className="absolute bottom-8 left-8 text-white">
              <h3 className="text-2xl font-bold mb-2">SANTIAGO</h3>
              <p className="text-sm mb-6 text-gray-300 max-w-xs">Capital chilena, vinícolas e a majestosa Cordilheira dos Andes.</p>
              <span className="text-retur-terra font-bold text-sm tracking-widest flex items-center gap-2 group-hover:gap-4 transition-all">
                VER ROTEIROS <span className="text-xl">→</span>
              </span>
            </div>
          </div>

          {/* Card Combo */}
          <div className="group relative h-[500px] rounded-2xl overflow-hidden cursor-pointer shadow-xl border-2 border-retur-terra">
            <img src="/images/dest-combo.jpg" alt="Atacama + Uyuni" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
            <div className="absolute top-6 right-6 bg-retur-terra text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">
              Experiência Completa
            </div>
            <div className="absolute bottom-8 left-8 text-white">
              <h3 className="text-2xl font-bold mb-2">ATACAMA + UYUNI</h3>
              <p className="text-sm mb-6 text-gray-300 max-w-xs">A jornada definitiva pelos Andes, conectando os dois destinos.</p>
              <span className="text-retur-terra font-bold text-sm tracking-widest flex items-center gap-2 group-hover:gap-4 transition-all">
                VER COMBO <span className="text-xl">→</span>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. TOURS MAIS POPULARES */}
      <section className="py-20 bg-[#F8F9FA] px-8 border-y border-gray-100">
        <div className="max-w-[1440px] mx-auto w-full">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-4xl font-bold text-retur-texto mb-2">Tours Mais Populares</h2>
              <p className="text-gray-500">Explore nossas expedições favoritas e mais bem avaliadas.</p>
            </div>
            <Link href="/passeios" className="text-retur-terra font-semibold hover:underline">Ver Todos →</Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Geyser del Tatio', price: '380', img: 'tour-1.jpg', duration: '7 horas', people: '12', type: 'Atacama' },
              { title: 'Lagunas Baltinache', price: '320', img: 'tour-2.jpg', duration: '5 horas', people: '10', type: 'Atacama' },
              { title: 'Isla Incahuasi', price: '1.250', img: 'tour-3.jpg', duration: 'Full Day', people: '6', type: 'Uyuni' },
              { title: 'Laguna Colorada', price: '2.080', img: 'tour-4.jpg', duration: '3 dias', people: '6', type: 'Combo' },
            ].map((tour, idx) => (
              <div key={idx} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all border border-gray-200 flex flex-col h-full">
                <div className="relative h-56">
                  <img src={`/images/${tour.img}`} alt={tour.title} className="w-full h-full object-cover" />
                  <span className="absolute top-4 left-4 bg-white/90 backdrop-blur text-[10px] font-bold px-2 py-1 rounded text-retur-texto uppercase">
                    {tour.type}
                  </span>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h4 className="font-bold text-xl mb-4">{tour.title}</h4>
                  <div className="space-y-3 mb-6">
                    <p className="text-sm text-gray-500 flex items-center gap-2">
                      <span className="material-symbols-outlined text-[18px]">schedule</span> {tour.duration}
                    </p>
                    <p className="text-sm text-gray-500 flex items-center gap-2">
                      <span className="material-symbols-outlined text-[18px]">group</span> Máx. {tour.people} pessoas
                    </p>
                  </div>
                  <div className="mt-auto flex justify-between items-center pt-4 border-t border-gray-100">
                    <div>
                      <span className="text-[10px] text-gray-400 block uppercase tracking-widest">A partir de</span>
                      <span className="font-bold text-retur-terra text-2xl font-inter">R$ {tour.price}</span>
                    </div>
                    <a 
                      href={getWhatsAppLink(tour.title)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-retur-areia border border-gray-200 text-retur-texto w-12 h-12 rounded-full flex items-center justify-center hover:bg-retur-terra hover:text-white hover:border-retur-terra transition-all"
                    >
                      <span className="material-symbols-outlined">more</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. POR QUE VIAJAR COM A RETUR? (Ícones P&B Material Symbols) */}
      <section className="py-24 px-8 max-w-7xl mx-auto w-full text-center">
        <h2 className="text-4xl font-bold text-retur-texto mb-4">Por que viajar com a Retur?</h2>
        <p className="text-gray-500 mb-16 max-w-2xl mx-auto">Compromisso com a sua segurança, conforto e a melhor experiência visual da sua vida.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {[
            { title: 'Desde 2018', desc: 'Anos de experiência operando nas condições extremas do deserto.', icon: 'event_available' },
            { title: 'Guias Locais', desc: 'Profissionais que conhecem cada segredo da região e garantem segurança.', icon: 'explore' },
            { title: 'Suporte PT-BR', desc: 'Atendimento personalizado no seu idioma, do planeamento até o retorno.', icon: 'support_agent' },
            { title: 'Roteiros Exclusivos', desc: 'Adaptamos a experiência ao seu ritmo e preferências fotográficas.', icon: 'tune' },
          ].map((item, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <span className="material-symbols-outlined text-[48px] text-retur-texto mb-6 opacity-80">
                {item.icon}
              </span>
              <h4 className="font-bold text-xl mb-3">{item.title}</h4>
              <p className="text-sm text-gray-500 leading-relaxed px-4">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. O QUE DIZEM NOSSOS VIAJANTES */}
      <section className="py-24 px-8 bg-white">
        <div className="max-w-[1440px] mx-auto w-full">
          <h2 className="text-4xl font-bold text-retur-texto mb-12 text-center">O Que Dizem Nossos Viajantes</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'Mariana Silva', date: 'Maio 2023', comment: 'Experiência surreal! A Retur cuidou de todos os detalhes, desde o translado até as melhores dicas para fotos no Salar.', rating: 5 },
              { name: 'Ricardo Oliveira', date: 'Outubro 2022', comment: 'Melhor escolha que fizemos. Os carros são novos, a comida estava ótima mesmo no meio do deserto. Segurança total.', rating: 5 },
              { name: 'Fernanda Costa', date: 'Agosto 2023', comment: 'Viagem dos sonhos. O atendimento desde o primeiro contato foi impecável. Toda a equipe é muito dedicada.', rating: 5 },
            ].map((review, idx) => (
              <div key={idx} className="bg-[#FFF4F0] p-10 rounded-3xl flex flex-col justify-between">
                <div>
                  <div className="flex gap-1 mb-6 text-retur-terra">
                    {[...Array(review.rating)].map((_, i) => (
                      <span key={i} className="material-symbols-outlined text-[20px] fill-current">star</span>
                    ))}
                  </div>
                  <p className="text-retur-texto italic leading-relaxed mb-8 text-lg">"{review.comment}"</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-gray-300 rounded-full overflow-hidden border-2 border-white shadow-sm">
                    <img src={`/images/avatar-${idx+1}.jpg`} alt={review.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h5 className="font-bold text-sm">{review.name}</h5>
                    <span className="text-[10px] text-gray-500 uppercase tracking-widest">{review.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 flex justify-center items-center gap-4 grayscale opacity-40">
            <span className="text-xs font-bold uppercase tracking-widest">Avaliações reais via</span>
            <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" alt="Google" className="h-6" />
          </div>
        </div>
      </section>

      {/* 6. CTA FINAL */}
      <section 
        className="relative h-[500px] flex items-center justify-center bg-cover bg-center overflow-hidden"
        style={{ backgroundImage: "url('/images/cta-bg.jpg')" }}
      >
        <div className="absolute inset-0 bg-retur-escuro/60 backdrop-blur-[2px]"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Pronto para a sua próxima aventura?</h2>
          <p className="text-lg mb-10 opacity-80">Deixe os detalhes com os especialistas e foque apenas em viver o momento.</p>
          <a 
            href="https://wa.me/5511999999999?text=Olá, quero planejar minha próxima aventura!" 
            target="_blank"
            rel="noopener noreferrer"
            className="bg-retur-terra hover:bg-orange-700 text-white px-12 py-4 rounded-md font-bold text-lg transition-all shadow-2xl inline-flex items-center gap-3"
          >
            Falar com Consultor <span className="material-symbols-outlined">chat</span>
          </a>
        </div>
      </section>

    </main>
  );
}