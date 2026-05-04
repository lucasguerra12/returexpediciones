import Link from "next/link";

export default function PasseiosPage() {
  // Dados simulados dos passeios (incluindo Santiago)
  const passeios = [
    {
      id: 1,
      title: "Geyser del Tatio ao Amanhecer",
      rating: "4.9",
      duration: "8h",
      maxPeople: "12",
      difficulty: "Moderado",
      desc: "Explore o maior campo de geysers do hemisfério sul em uma experiência matinal exclusiva...",
      price: "380",
      img: "atacama-tour-geyser.jpg",
      tag: "Atacama",
    },
    {
      id: 2,
      title: "Expedição Clássica Uyuni",
      rating: "4.8",
      duration: "3 Dias",
      maxPeople: "6",
      difficulty: "Difícil",
      desc: "Três dias de travessia pelo maior deserto de sal do mundo com hospedagem em hotéis de sal.",
      price: "1.850",
      img: "uyuni-tour-classica.jpg",
      tag: "Salar de Uyuni",
    },
    {
      id: 3,
      title: "Tour Astronômico Premium",
      rating: "5.0",
      duration: "3h",
      maxPeople: "8",
      difficulty: "Fácil",
      desc: "Observe os astros com telescópios de última geração no céu mais límpido do planeta.",
      price: "220",
      img: "atacama-tour-astro.jpg",
      tag: "Atacama",
    },
    {
      id: 4,
      title: "Vinícolas Premium de Santiago",
      rating: "4.9",
      duration: "5h",
      maxPeople: "10",
      difficulty: "Fácil",
      desc: "Degustação nas melhores vinícolas do Vale do Maipo com transporte privado e guia sommelier.",
      price: "450",
      img: "santiago-tour-vinho.jpg",
      tag: "Santiago",
    },
    {
      id: 5,
      title: "Valle Nevado e Farellones",
      rating: "4.7",
      duration: "Full Day",
      maxPeople: "14",
      difficulty: "Moderado",
      desc: "Um dia inteiro nas montanhas nevadas da Cordilheira dos Andes. Ideal para iniciantes e famílias.",
      price: "580",
      img: "santiago-tour-neve.jpg",
      tag: "Santiago",
    },
    {
      id: 6,
      title: "Combo Atacama + Uyuni",
      rating: "5.0",
      duration: "7 Dias",
      maxPeople: "6",
      difficulty: "Difícil",
      desc: "A jornada definitiva cruzando os Andes, do deserto chileno ao mar de sal boliviano.",
      price: "3.200",
      img: "combo-tour-epic.jpg",
      tag: "Combo",
    },
    // Adicione mais passeios aqui...
  ];

  return (
    <main className="flex min-h-screen flex-col font-manrope bg-[#F8F6F3] text-[#221a15]">
      
      {/* 1. HERO SECTION (Grid de Imagens) */}
      <section className="relative w-full h-[460px] pt-20 overflow-hidden bg-slate-900">
        <div className="absolute inset-0 grid grid-cols-4 grid-rows-2 gap-2 opacity-60">
          <div className="col-span-2 row-span-2 bg-cover bg-center" style={{ backgroundImage: "url('/images/atacama-hero.jpg')" }}></div>
          <div className="bg-cover bg-center" style={{ backgroundImage: "url('/images/uyuni-hero.jpg')" }}></div>
          <div className="bg-cover bg-center" style={{ backgroundImage: "url('/images/atacama-astros.jpg')" }}></div>
          <div className="bg-cover bg-center" style={{ backgroundImage: "url('/images/atacama-lagoas.jpg')" }}></div>
          <div className="bg-cover bg-center" style={{ backgroundImage: "url('/images/santiago-hero.jpg')" }}></div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#F8F6F3] via-transparent to-black/40"></div>
        <div className="relative h-full max-w-7xl mx-auto px-8 flex flex-col justify-center items-start z-10">
          <nav className="flex mb-4 text-white/80 font-inter text-sm">
            <Link href="/" className="hover:text-white transition-colors">Início</Link>
            <span className="mx-2">/</span>
            <span className="text-white font-medium">Passeios</span>
          </nav>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-8 tracking-tight">Todos os Passeios</h1>
          
          {/* Barra de Pesquisa */}
          <div className="w-full max-w-3xl bg-white p-2 rounded-xl shadow-2xl flex gap-2">
            <div className="flex-1 flex items-center px-4 gap-3">
              <span className="material-symbols-outlined text-slate-400">search</span>
              <input 
                className="w-full border-none focus:ring-0 text-lg font-inter text-[#55433a] placeholder:text-slate-400 outline-none" 
                placeholder="Buscar destino, passeio ou atração..." 
                type="text"
              />
            </div>
            <button className="bg-[#D4773C] text-white px-8 py-3 rounded-lg font-bold hover:bg-[#B35D24] transition-colors">
              Buscar
            </button>
          </div>
        </div>
      </section>

      {/* 2. CATÁLOGO: SIDEBAR (FILTROS) + GRID DE PASSEIOS */}
      <section className="max-w-[1440px] mx-auto px-8 py-20 w-full grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        
        {/* SIDEBAR (Filtros) */}
        <aside className="lg:col-span-3 sticky top-28 bg-white p-8 rounded-3xl shadow-[0_10px_30px_-10px_rgba(0,0,0,0.08)] border border-slate-100">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold">Filtrar</h2>
            <button className="text-xs font-inter text-slate-400 hover:text-[#D4773C] transition-colors uppercase tracking-widest">Limpar</button>
          </div>
          
          <div className="space-y-8">
            {/* Destino */}
            <div>
              <h3 className="font-inter font-bold text-[#55433a] uppercase tracking-widest text-xs mb-4">Destino</h3>
              <div className="space-y-3 font-inter text-sm">
                {['Atacama', 'Salar de Uyuni', 'Santiago', 'Combo'].map((dest, i) => (
                  <label key={i} className="flex items-center justify-between group cursor-pointer">
                    <span className="flex items-center gap-3 text-[#55433a] group-hover:text-[#D4773C] transition-colors">
                      <input className="rounded border-slate-300 text-[#D4773C] focus:ring-[#D4773C] w-4 h-4" type="checkbox" /> 
                      {dest}
                    </span>
                  </label>
                ))}
              </div>
            </div>
            
            <hr className="border-slate-100" />
            
            {/* Tipo de Experiência */}
            <div>
              <h3 className="font-inter font-bold text-[#55433a] uppercase tracking-widest text-xs mb-4">Experiência</h3>
              <div className="flex flex-wrap gap-2">
                {['Aventura', 'Fotografia', 'Cultural', 'Astronômico', 'Gastronomia', 'Neve'].map((exp, i) => (
                  <span key={i} className="px-4 py-2 bg-[#F8F6F3] rounded-full text-xs font-inter font-medium text-[#55433a] cursor-pointer hover:bg-[#D4773C] hover:text-white transition-colors border border-transparent hover:border-[#D4773C]">
                    {exp}
                  </span>
                ))}
              </div>
            </div>

            <hr className="border-slate-100" />
            
            {/* Dificuldade */}
            <div>
              <h3 className="font-inter font-bold text-[#55433a] uppercase tracking-widest text-xs mb-4">Dificuldade</h3>
              <div className="space-y-3 font-inter text-sm">
                {['Fácil', 'Moderado', 'Difícil'].map((diff, i) => (
                  <label key={i} className="flex items-center gap-3 cursor-pointer text-[#55433a] hover:text-[#D4773C]">
                    <input className="text-[#D4773C] focus:ring-[#D4773C] w-4 h-4 border-slate-300" name="difficulty" type="radio" />
                    <span>{diff}</span>
                  </label>
                ))}
              </div>
            </div>

            <hr className="border-slate-100" />
            
            {/* Preço */}
            <div>
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-inter font-bold text-[#55433a] uppercase tracking-widest text-xs">Preço Máx.</h3>
                <span className="text-[#D4773C] font-bold font-inter text-sm">R$ 2.000</span>
              </div>
              <input className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#D4773C]" max="4000" min="0" step="100" type="range" defaultValue="2000" />
              <div className="flex justify-between text-[10px] text-slate-400 mt-2 font-inter uppercase tracking-widest">
                <span>R$ 0</span>
                <span>R$ 4.000+</span>
              </div>
            </div>

            <button className="w-full bg-[#D4773C] text-white py-4 rounded-xl font-bold hover:bg-[#B35D24] transition-colors shadow-md mt-4">
              Aplicar Filtros
            </button>
          </div>
        </aside>

        {/* GRID DE PASSEIOS */}
        <div className="lg:col-span-9">
          
          {/* Header da Grid (Resultados e Ordenação) */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4 bg-white p-4 rounded-2xl shadow-sm border border-slate-50">
            <p className="text-[#55433a] font-inter text-sm px-2">Exibindo <span className="font-bold text-[#221a15]">23 passeios</span> encontrados</p>
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <span className="text-xs font-inter font-bold uppercase tracking-widest text-slate-400 shrink-0">Ordenar:</span>
              <select className="bg-[#F8F6F3] border-none rounded-xl py-2 px-4 font-inter text-sm font-medium text-[#55433a] focus:ring-0 cursor-pointer w-full sm:w-auto outline-none">
                <option>Mais Populares</option>
                <option>Menor Preço</option>
                <option>Maior Preço</option>
                <option>Melhor Avaliação</option>
              </select>
            </div>
          </div>

          {/* Cards de Passeios */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {passeios.map((tour) => (
              <Link href={`/passeios/${tour.id}`} key={tour.id} className="bg-white rounded-3xl overflow-hidden shadow-[0_10px_30px_-10px_rgba(0,0,0,0.08)] hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(212,119,60,0.15)] transition-all duration-300 flex flex-col group border border-slate-50">
                
                {/* Imagem do Card */}
                <div className="relative h-56 overflow-hidden">
                  <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src={`/images/${tour.img}`} alt={tour.title} />
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest text-[#D4773C] shadow-sm">
                    {tour.tag}
                  </div>
                </div>

                {/* Conteúdo do Card */}
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex justify-between items-start mb-3 gap-2">
                    <h3 className="font-bold text-xl leading-tight text-[#221a15] group-hover:text-[#D4773C] transition-colors">{tour.title}</h3>
                    <div className="flex items-center gap-1 text-[#E8A75C] shrink-0 bg-[#fff8f6] px-2 py-1 rounded-lg">
                      <span className="material-symbols-outlined text-sm">star</span>
                      <span className="text-xs font-bold text-[#55433a]">{tour.rating}</span>
                    </div>
                  </div>
                  
                  <div className="flex gap-4 mb-4 text-[#55433a]">
                    <div className="flex items-center gap-1 text-xs font-inter font-medium">
                      <span className="material-symbols-outlined text-sm text-[#D4773C]">schedule</span> {tour.duration}
                    </div>
                    <div className="flex items-center gap-1 text-xs font-inter font-medium">
                      <span className="material-symbols-outlined text-sm text-[#D4773C]">groups</span> {tour.maxPeople} máx.
                    </div>
                  </div>
                  
                  <p className="text-[#55433a] font-inter text-sm line-clamp-2 mb-6 flex-grow leading-relaxed">
                    {tour.desc}
                  </p>
                  
                  <div className="mt-auto pt-5 border-t border-slate-100 flex items-center justify-between">
                    <div>
                      <span className="block text-[10px] text-slate-400 font-inter uppercase tracking-widest mb-1">A partir de</span>
                      <span className="text-[#D4773C] font-bold text-2xl font-inter">R$ {tour.price}</span>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-[#fceae2] text-[#D4773C] flex items-center justify-center group-hover:bg-[#D4773C] group-hover:text-white transition-colors">
                      <span className="material-symbols-outlined text-sm">arrow_forward</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Botão Carregar Mais */}
          <div className="mt-16 flex justify-center">
            <button className="flex items-center gap-2 border-2 border-[#D4773C] text-[#D4773C] px-10 py-4 rounded-xl font-bold hover:bg-[#D4773C] hover:text-white transition-colors">
              Carregar Mais Passeios <span className="material-symbols-outlined">expand_more</span>
            </button>
          </div>
        </div>
      </section>

      {/* 3. CTA FOOTER */}
      <section className="bg-[#fceae2] py-24">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h2 className="text-4xl font-bold text-[#221a15] mb-6">Não encontrou o que procurava?</h2>
          <p className="font-inter text-[#55433a] text-lg mb-10 leading-relaxed">
            Nossos especialistas desenham roteiros 100% personalizados. Se você deseja combinar destinos, adicionar experiências privadas ou ajustar a duração, nós resolvemos.
          </p>
          <a href="https://wa.me/5511999999999?text=Olá, quero um roteiro sob medida!" target="_blank" rel="noopener noreferrer" className="inline-flex bg-[#D4773C] text-white px-10 py-5 rounded-xl font-bold text-lg shadow-[0_10px_30px_-10px_rgba(212,119,60,0.5)] hover:opacity-90 transition-opacity">
            Montar Roteiro Sob Medida
          </a>
        </div>
      </section>

    </main>
  );
}