import Link from "next/link";

export default function UyuniPage() {
  return (
    <main className="flex min-h-screen flex-col font-manrope bg-white">
      
      {/* 1. HERO SECTION */}
      <section 
        className="relative h-[70vh] flex items-end pb-20 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/uyuni-hero.jpg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
        <div className="relative z-10 px-8 max-w-[1440px] mx-auto w-full text-white">
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
          <div className="rounded-2xl overflow-hidden h-full shadow-lg">
            <img src="/images/uyuni-gal-1.jpg" className="w-full h-full object-cover" alt="Salar de Uyuni" />
          </div>
          <div className="grid grid-rows-2 gap-4 h-full">
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img src="/images/uyuni-gal-2.jpg" className="w-full h-full object-cover" alt="Ilha Incahuasi" />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img src="/images/uyuni-gal-3.jpg" className="w-full h-full object-cover" alt="Lagoa Colorada" />
            </div>
          </div>
        </div>
      </section>

      {/* 3. O QUE VOCÊ IRÁ VER */}
      <section className="py-24 bg-retur-areia px-8">
        <div className="max-w-[1440px] mx-auto w-full text-center">
          <h2 className="text-4xl font-bold mb-16">O que você irá ver</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Espelho d'água", img: "uyuni-espelho.jpg" },
              { title: "Ilha Incahuasi", img: "uyuni-ilha.jpg" },
              { title: "Laguna Colorada", img: "uyuni-laguna.jpg" },
              { title: "Cemitério de Trens", img: "uyuni-trens.jpg" },
            ].map((item, idx) => (
              <div key={idx} className="group relative h-80 rounded-2xl overflow-hidden shadow-md">
                <img src={`/images/${item.img}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={item.title} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <h4 className="absolute bottom-6 left-6 text-white font-bold text-xl">{item.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. PASSEIOS NO UYUNI */}
      <section className="py-24 px-8 max-w-[1440px] mx-auto w-full">
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-retur-texto mb-2">Passeios no Uyuni</h2>
          <p className="text-gray-500">Explore o deserto de sal com segurança e conforto em veículos preparados.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: 'Travessia Clássica (Salar)',
              desc: 'Três dias de jornada cruzando o deserto de sal e as lagoas altiplânicas da Reserva Nacional.',
              price: '1.850',
              img: 'uyuni-tour-1.jpg',
              duration: '3 Dias',
              people: '6',
              tag: 'MAIS POPULAR'
            },
            {
              title: 'Expedição Premium Uyuni',
              desc: 'Conforto absoluto em veículos privados e hospedagem exclusiva nos hotéis de sal.',
              price: '2.400',
              img: 'uyuni-tour-2.jpg',
              duration: '4 Dias',
              people: '4',
              tag: 'NOBRE'
            },
            {
              title: 'Tour de 1 Dia (Salar)',
              desc: 'Focado no Salar e na Ilha Incahuasi, ideal para quem tem pouco tempo mas quer fotos icônicas.',
              price: '1.250',
              img: 'uyuni-tour-3.jpg',
              duration: '10 Horas',
              people: '6',
              tag: 'DAY TOUR'
            }
          ].map((tour, idx) => (
            <div key={idx} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-gray-100 flex flex-col group cursor-pointer">
              <div className="relative h-64 overflow-hidden">
                <img src={`/images/${tour.img}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={tour.title} />
                {tour.tag && (
                  <span className="absolute top-4 left-4 bg-white/95 backdrop-blur text-retur-texto text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-widest shadow-sm">
                    {tour.tag}
                  </span>
                )}
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex gap-5 mb-4 text-xs text-gray-500 font-medium">
                  <span className="flex items-center gap-1.5"><span className="material-symbols-outlined text-[18px]">schedule</span> {tour.duration}</span>
                  <span className="flex items-center gap-1.5"><span className="material-symbols-outlined text-[18px]">group</span> Máx. {tour.people}</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-retur-texto">{tour.title}</h3>
                <p className="text-sm text-gray-500 mb-8 leading-relaxed">{tour.desc}</p>
                
                <div className="mt-auto flex justify-between items-end border-t border-gray-100 pt-6">
                  <div>
                    <span className="text-[10px] text-gray-400 uppercase tracking-widest block mb-1">A partir de</span>
                    <span className="text-2xl font-bold text-retur-terra font-inter">R$ {tour.price}</span>
                  </div>
                  <span className="text-retur-terra font-bold text-xs uppercase tracking-widest flex items-center gap-1 group-hover:gap-2 transition-all">
                    Explorar <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </span>
                </div>
              </div>
            </div>
          ))}
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
          <a href="#" className="bg-white text-retur-terra px-10 py-5 rounded-xl font-bold text-lg hover:shadow-2xl transition-all inline-flex items-center gap-3">
            Montar meu Roteiro no Uyuni
          </a>
        </div>
      </section>

    </main>
  );
}