import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { passeiosData } from "@/src/data/passeios";

function getPasseioById(id: string) {
  const todosOsPasseios = [
    ...passeiosData.santiago,
    ...passeiosData.atacama,
    ...passeiosData.uyuni,
  ];
  return todosOsPasseios.find((passeio) => passeio.id === id);
}

export default async function PasseioDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const passeio = getPasseioById(resolvedParams.id);
  const numeroWhatsApp = "5517997697872";

  if (!passeio) {
    notFound();
  }

  const getDestinoFolder = (id: string) => {
    if (passeiosData.atacama.some(p => p.id === id)) return 'atacama';
    if (passeiosData.santiago.some(p => p.id === id)) return 'santiago';
    if (passeiosData.uyuni.some(p => p.id === id)) return 'uyuni';
    return '';
  };

  const pasta = getDestinoFolder(passeio.id);

  return (
    <main className="flex min-h-screen flex-col font-manrope bg-white">
      
      <section className="relative h-[60vh] flex items-end pb-12 overflow-hidden">
        <Image 
          src={`/images/${pasta}/${passeio.imagem}`} 
          alt={passeio.titulo} 
          fill 
          priority 
          className="object-cover object-center z-0" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10"></div>
        <div className="relative z-20 px-8 max-w-[1000px] mx-auto w-full text-white">
          
          <Link href={`/destinos/${pasta}`} className="flex items-center gap-2 mb-6 hover:text-[#D4773C] transition-colors font-inter text-sm uppercase tracking-widest w-fit">
            <span className="material-symbols-outlined text-sm">arrow_back</span> Voltar para {pasta}
          </Link>

          <span className="text-[#D4773C] font-bold uppercase tracking-[0.2em] text-xs mb-2 block font-inter">
            {passeio.info}
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight">{passeio.titulo}</h1>
        </div>
      </section>

      <section className="py-20 px-8 max-w-[1000px] mx-auto w-full">
        <div className="bg-[#F8F6F3] p-8 md:p-12 rounded-3xl mb-16">
          <h2 className="text-3xl font-bold text-[#221a15] mb-6">Sobre a Experiência</h2>
          <p className="text-[#55433a] font-inter text-lg leading-relaxed mb-8">
            {passeio.descricaoDetalhada}
          </p>
          
          <a 
            href={`https://wa.me/${numeroWhatsApp}?text=Olá! Estou no site e gostaria de saber os valores e datas para o passeio: *${passeio.titulo}*.`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#D4773C] text-white px-8 py-4 rounded-xl font-bold hover:bg-[#b56533] transition-colors inline-flex items-center gap-2"
          >
            Quero agendar este passeio 
          </a>
        </div>

        <h3 className="text-2xl font-bold text-[#221a15] mb-8">Galeria de Fotos</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {passeio.galeria?.map((foto, index) => (
            <div key={index} className="relative h-64 rounded-2xl overflow-hidden shadow-md">
              <Image 
                src={`/images/${pasta}/${foto}`} 
                alt={`${passeio.titulo} foto ${index + 1}`} 
                fill 
                className="object-cover hover:scale-110 transition-transform duration-500" 
              />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}