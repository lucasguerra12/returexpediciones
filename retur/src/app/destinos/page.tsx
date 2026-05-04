import Link from "next/link";

export default function Destinos() {
  const destinos = [
    {
      id: "atacama",
      title: "Deserto do Atacama",
      location: "San Pedro de Atacama, Chile",
      description: "O deserto mais árido do mundo, onde paisagens lunares e lagoas altiplânicas criam um cenário inesquecível.",
      image: "/images/dest-atacama.jpg",
      tag: "Mais Popular",
      altitude: "2.400m",
      epoca: "Mar - Nov",
      temp: "0°C a 25°C",
      features: ["Lagoas Altiplânicas", "Geysers", "Valle de la Luna", "Tour Astronômico"]
    },
    {
      id: "uyuni",
      title: "Salar de Uyuni",
      location: "Potosí, Bolívia",
      description: "O maior deserto de sal do mundo, um horizonte infinito que se transforma em um espelho perfeito durante o verão.",
      image: "/images/dest-uyuni.jpg",
      altitude: "3.650m",
      epoca: "Jan - Abr",
      temp: "-10°C a 15°C",
      features: ["Espelho d'água", "Ilha Incahuasi", "Cemitério de Trens", "Lagoas Coloradas"]
    },
    {
      id: "combo",
      title: "Expedição Atacama + Uyuni",
      location: "Chile & Bolívia",
      description: "A jornada definitiva pelos Andes, conectando os dois destinos mais surreais da América do Sul em uma única travessia.",
      image: "/images/dest-combo.jpg",
      tag: "Experiência Completa",
      duracao: "7 a 10 dias",
      altitude: "Até 4.500m",
      features: ["O melhor dos dois destinos", "Travessia exclusiva 4x4", "Guia bilíngue especializado"]
    },
    {
      id: "santiago",
      title: "Santiago do Chile",
      location: "Santiago, Chile",
      description: "Entre vinícolas premiadas e a imponente Cordilheira dos Andes. A mistura perfeita de cosmopolitismo e natureza exuberante.",
      image: "/images/dest-santiago.jpg",
      altitude: "520m",
      epoca: "Todo o ano",
      temp: "-2°C a 30°C",
      features: ["Vinícolas Premium", "Cajón del Maipo", "Valle Nevado (Inverno)", "Sky Costanera"]
    }
  ];

  return (
    <main className="flex min-h-screen flex-col font-manrope bg-white">
      
      {/* HERO SECTION */}
      <section 
        className="relative h-[90vh] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('/images/hero-destinos.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 text-center text-white px-4">
          <span className="text-sm uppercase tracking-[0.3em] mb-4 block opacity-80">Início {">"} Destinos</span>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">Escolha seu Destino</h1>
          <p className="text-lg md:text-xl font-light opacity-90 max-w-2xl mx-auto">
            "Há experiências únicas nos desertos mais incríveis da América do Sul."
          </p>
        </div>
      </section>

      {/* GRID DE DESTINOS ALTERNADOS */}
      <section className="py-24 px-8 max-w-[1440px] mx-auto w-full space-y-32">
        {destinos.map((dest, index) => (
          <div 
            key={dest.id}
            className={`flex flex-col lg:items-center gap-12 lg:gap-20 ${
              index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
            }`}
          >
            {/* Imagem */}
            <div className="w-full lg:w-1/2 h-[400px] md:h-[500px] rounded-3xl overflow-hidden shadow-2xl relative group">
              <img 
                src={dest.image} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                alt={dest.title}
              />
              {dest.tag && (
                <span className="absolute top-6 left-6 bg-retur-terra text-white text-[10px] font-bold px-4 py-1.5 rounded-full uppercase tracking-widest shadow-lg">
                  {dest.tag}
                </span>
              )}
            </div>

            {/* Texto */}
            <div className="w-full lg:w-1/2">
              <div className="flex items-center gap-2 text-retur-terra font-bold text-xs uppercase tracking-widest mb-6">
                <span className="material-symbols-outlined text-lg">location_on</span>
                {dest.location}
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-retur-texto mb-6">{dest.title}</h2>
              
              <div className="flex gap-8 mb-8 text-[11px] text-gray-500 uppercase tracking-widest border-y border-gray-100 py-6">
                {dest.altitude && <div><span className="block font-bold text-retur-texto mb-1 text-sm">Altitude</span> {dest.altitude}</div>}
                {dest.epoca && <div><span className="block font-bold text-retur-texto mb-1 text-sm">Melhor Época</span> {dest.epoca}</div>}
                {dest.temp && <div><span className="block font-bold text-retur-texto mb-1 text-sm">Temp.</span> {dest.temp}</div>}
                {dest.duracao && <div><span className="block font-bold text-retur-texto mb-1 text-sm">Duração</span> {dest.duracao}</div>}
              </div>

              <p className="text-gray-500 text-lg leading-relaxed mb-8">{dest.description}</p>
              
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-8 mb-10">
                {dest.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                    <span className="material-symbols-outlined text-retur-terra text-sm">check_circle</span>
                    {feature}
                  </li>
                ))}
              </ul>

              <button className="bg-retur-terra text-white px-10 py-4 rounded-xl font-bold hover:bg-orange-700 hover:shadow-xl transition-all w-full sm:w-auto">
                Explorar {dest.title.split(' ')[dest.title.split(' ').length - 1]}
              </button>
            </div>
          </div>
        ))}
      </section>

      {/* TABELA DE COMPARAÇÃO AMPLIADA */}
      <section className="py-32 bg-retur-areia px-8">
        <div className="max-w-[1200px] mx-auto w-full">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Ainda em dúvida?</h2>
            <p className="text-gray-500">Compare detalhadamente as características de cada expedição.</p>
          </div>
          
          <div className="overflow-x-auto rounded-[40px] shadow-2xl border border-white bg-white/50 backdrop-blur-sm">
            <table className="w-full text-left border-collapse min-w-[800px]">
              <thead>
                <tr className="bg-white">
                  <th className="p-10 text-[10px] uppercase text-gray-400 font-bold tracking-[0.2em]">Característica</th>
                  <th className="p-10 text-xl font-bold text-retur-terra">Atacama</th>
                  <th className="p-10 text-xl font-bold text-retur-terra">Uyuni</th>
                  <th className="p-10 text-xl font-bold text-retur-terra">Santiago</th>
                </tr>
              </thead>
              <tbody className="text-sm text-retur-texto">
                {[
                  { label: "Melhor Época", v1: "Março a Novembro", v2: "Janeiro a Abril (Espelho)", v3: "Todo o ano" },
                  { label: "Altitude Média", v1: "2.400m - 4.200m", v2: "3.650m", v3: "520m - 3.000m" },
                  { label: "Duração Ideal", v1: "4 a 6 dias", v2: "3 a 4 dias", v3: "3 a 5 dias" },
                  { label: "Dificuldade", v1: "Fácil a Médio", v2: "Médio", v3: "Fácil" },
                  { label: "Hospedagem", v1: "Hotéis Boutique e Vilas", v2: "Hotéis de Sal e Refúgios", v3: "Hotéis de Luxo e Apart" },
                  { label: "Perfil da Viagem", v1: "Contemplação e Trekking", v2: "Aventura e Fotografia", v3: "Gastronomia e Cidade" },
                ].map((row, idx) => (
                  <tr key={idx} className="border-t border-gray-100 hover:bg-white/80 transition-colors">
                    <td className="p-10 font-bold uppercase text-[11px] tracking-widest text-gray-400">{row.label}</td>
                    <td className="p-10 font-medium">{row.v1}</td>
                    <td className="p-10 font-medium">{row.v2}</td>
                    <td className="p-10 font-medium">{row.v3}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FOOTER CTA */}
      <section className="py-24 bg-retur-terra text-white text-center px-8">
        <h2 className="text-4xl font-bold mb-6">Monte seu Roteiro Sob Medida</h2>
        <p className="mb-10 opacity-90 max-w-xl mx-auto">Fale com um especialista para criar uma viagem que combine perfeitamente com seu tempo e estilo.</p>
        <button className="bg-white text-retur-terra px-12 py-4 rounded-xl font-bold text-lg hover:shadow-2xl transition-all flex items-center gap-3 mx-auto">
         Chamar no WhatsApp
        </button>
      </section>

    </main>
  );
}