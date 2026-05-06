import Link from "next/link";

export default function AtacamaPage() {
  return (
    <main className="flex min-h-screen flex-col font-manrope bg-white">
      
      {/* 1. HERO SECTION */}
      <section 
        className="relative h-[80vh] flex items-end pb-20 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/atacama/atacama.jpg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
        <div className="relative z-10 px-8 max-w-[1440px] mx-auto w-full text-white">
          <nav className="flex gap-2 text-[10px] uppercase tracking-widest mb-4 opacity-70">
            <Link href="/">Início</Link> <span>/</span> <Link href="/destinos">Destinos</Link> <span>/</span> <span className="text-retur-terra font-bold">Atacama</span>
          </nav>
          <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight">Deserto do Atacama</h1>
          <p className="text-lg flex items-center gap-2 opacity-90 uppercase tracking-widest font-light text-sm">
            <span className="material-symbols-outlined text-retur-terra">location_on</span> San Pedro de Atacama, Chile
          </p>
        </div>
      </section>

      {/* 2. INTRODUÇÃO E GRID DE FOTOS */}
      <section className="py-24 px-8 max-w-[1440px] mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <span className="text-retur-terra font-bold uppercase tracking-[0.3em] text-xs mb-4 block">Exploração sem limites</span>
          <h2 className="text-4xl font-bold text-retur-texto mb-8 leading-tight">O Deserto mais Árido do Mundo</h2>
          <p className="text-gray-500 text-lg leading-relaxed mb-6">
            O Atacama não é apenas um deserto; é um laboratório geológico a céu aberto. Situado no norte do Chile, este vasto platô oferece paisagens surreais que desafiam a imaginação, desde vales lunares a lagoas de um azul hipnotizante.
          </p>
          <p className="text-gray-500 text-lg leading-relaxed mb-10">
            Nossas expedições são desenhadas para quem busca mais do que fotos. Focamos na logística de alto padrão para garantir conforto em altitudes elevadas, permitindo que você se concentre apenas na imensidão à sua frente.
          </p>
          <div className="grid grid-cols-2 gap-6 border-t border-gray-100 pt-10">
            <div>
              <span className="font-bold text-retur-texto block">Fotografia Criativa</span>
              <p className="text-sm text-gray-400 mt-1">Guia especializado em ângulos únicos e iluminação perfeita.</p>
            </div>
            <div>
              <span className="font-bold text-retur-texto block">Logística Premium</span>
              <p className="text-sm text-gray-400 mt-1">Veículos 4x4 modernos, equipados para as condições extremas.</p>
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
      {/* 4. PASSEIOS NO ATACAMA (Secção Adicionada - Fiel ao Protótipo) */}
      <section className="py-24 px-8 max-w-[1440px] mx-auto w-full">
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-retur-texto mb-2">Passeios no Atacama</h2>
          <p className="text-gray-500">Roteiros imersivos com guias especializados em grupos reduzidos.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: 'Pôr do Sol no Valle de la Luna',
              desc: 'A experiência clássica de ver as cores do deserto mudarem com o cair do sol sobre as formações de sal.',
              img: 'atacama-tour-1.jpg',
              tag: 'POPULAR'
            },
            {
              title: 'Tour Astronômico Premium',
              desc: 'Observação do céu mais limpo do planeta com telescópios profissionais de última geração.',
              img: 'atacama-tour-2.jpg',
              tag: 'NOTURNO'
            },
            {
              title: 'Rota dos Salares (Piedras Rojas)',
              desc: 'Expedição de dia inteiro cruzando os pontos mais cênicos e remotos do impressionante Altiplano.',
              img: 'atacama-tour-3.jpg',
              tag: 'ALTA ALTITUDE'
            }
          ].map((tour, idx) => (
            <div key={idx} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-gray-100 flex flex-col group cursor-pointer">
              <div className="relative h-60 overflow-hidden">
                <img src={`/images/${tour.img}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={tour.title} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                {tour.tag && (
                  <span className="absolute top-4 left-4 bg-white/95 backdrop-blur text-retur-texto text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-widest shadow-sm">
                    {tour.tag}
                  </span>
                )}
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-xl font-bold mb-3 text-retur-texto">{tour.title}</h3>
                <p className="text-sm text-gray-500 mb-8 leading-relaxed">{tour.desc}</p>
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
              { q: 'Como chegar', a: 'A porta de entrada é o aeroporto de Calama (CJC). De lá, são cerca de 1h30 de transfer até San Pedro de Atacama.' },
              { q: 'Altitude e Aclimatação', a: 'San Pedro está a 2.400m. Nossos roteiros começam com passeios baixos para que seu corpo se adapte de forma saudável antes de subir aos 4.000m dos Geysers.' },
              { q: 'O que levar', a: 'Roupas em camadas (estilo cebola), protetor solar FPS 50+, hidratante labial intenso, óculos de sol e muita água são essenciais.' },
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

      {/* 6. CTA FOOTER */}
      <section className="py-24 bg-retur-terra text-white text-center px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Monte seu Roteiro no Atacama</h2>
          <p className="text-lg mb-12 opacity-90 leading-relaxed">Nossos especialistas estão prontos para desenhar a sua jornada personalizada, alinhando seus interesses e o tempo disponível no deserto.</p>
          <a 
            href="https://wa.me/5511999999999?text=Olá, gostaria de ajuda para montar meu roteiro no Atacama!"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-retur-terra px-10 py-5 rounded-xl font-bold text-lg hover:shadow-2xl transition-all inline-flex items-center gap-3"
          >
            Solicitar Orçamento <span className="material-symbols-outlined"></span>
          </a>
        </div>
      </section>

    </main>
  );
}