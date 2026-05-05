import Link from "next/link";

export default function SantiagoPage() {
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
      <section className="py-24 px-8 max-w-[1440px] mx-auto w-full">
        <h2 className="text-4xl font-bold text-retur-texto mb-12">Passeios em Santiago</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: 'Vinícolas Premium', price: '350', img: 'santiago-tour-1.jpg', duration: '5h', people: '12', tag: 'GASTRONOMIA' },
            { title: 'Cajón del Maipo', price: '480', img: 'santiago-tour-2.jpg', duration: '9h', people: '10', tag: 'NATUREZA' },
            { title: 'Valle Nevado & Farellones', price: '550', img: 'santiago-tour-3.jpg', duration: 'Full Day', people: '12', tag: 'NEVE' }
          ].map((tour, idx) => (
            <div key={idx} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-gray-100 flex flex-col group cursor-pointer">
              <div className="relative h-64 overflow-hidden">
                <img src={`/images/${tour.img}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={tour.title} />
                <span className="absolute top-4 left-4 bg-white/95 backdrop-blur text-retur-texto text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-widest">{tour.tag}</span>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex gap-5 mb-4 text-xs text-gray-500 font-medium">
                  <span className="flex items-center gap-1.5"><span className="material-symbols-outlined text-[18px]">schedule</span> {tour.duration}</span>
                  <span className="flex items-center gap-1.5"><span className="material-symbols-outlined text-[18px]">group</span> Máx. {tour.people}</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-retur-texto">{tour.title}</h3>
                <div className="mt-auto flex justify-between items-end border-t border-gray-100 pt-6">
                  <div>
                    <span className="text-[10px] text-gray-400 uppercase tracking-widest block mb-1">A partir de</span>
                    <span className="text-2xl font-bold text-retur-terra font-inter">R$ {tour.price}</span>
                  </div>
                  <span className="text-retur-terra font-bold text-xs uppercase tracking-widest flex items-center gap-1">Explorar →</span>
                </div>
              </div>
            </div>
          ))}
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