import { client } from "../../../../sanity/lib/client";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

// Revalida o cache a cada 60 segundos
export const revalidate = 60;

// Tipagem rigorosa para evitar brechas no Sanity
async function getPost(slug: string) {
  const query = `*[_type == "post" && slug.current == $slug][0] {
    title,
    "slug": slug.current,
    category,
    publishedAt,
    "imageUrl": mainImage.asset->url,
    body
  }`;

  // Passando o $slug com segurança
  const post = await client.fetch(query, { slug });
  return post;
}

// Tipagem atualizada para o Next.js 15+ (params agora é uma Promise)
type Props = {
  params: Promise<{ id: string }>;
};

export default async function PostPage({ params }: Props) {
  // 1. DESEMPACOTANDO A URL (A correção principal)
  const resolvedParams = await params;
  const slugDaUrl = resolvedParams.id;

  // 2. BUSCANDO OS DADOS COM SEGURANÇA
  const post = await getPost(slugDaUrl);

  // Se o usuário digitar uma URL de um artigo que não existe, manda para página 404
  if (!post) {
    notFound();
  }

  return (
    <main className="flex min-h-screen flex-col font-manrope bg-[#F8F6F3] text-[#221a15]">
      {/* 1. HERO / HEADER DO ARTIGO */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 px-8">
        <div className="max-w-4xl mx-auto">
          <nav className="mb-8 flex items-center gap-2 font-inter text-xs uppercase tracking-widest text-[#D4773C] font-bold">
            <Link href="/" className="hover:underline">Início</Link>
            <span className="material-symbols-outlined text-[14px]">chevron_right</span>
            <Link href="/blog" className="hover:underline">Blog</Link>
            <span className="material-symbols-outlined text-[14px]">chevron_right</span>
            <span className="text-slate-400">Artigo</span>
          </nav>

          <span className="inline-block bg-[#D4773C]/10 text-[#D4773C] text-[10px] font-bold px-4 py-1.5 rounded-full uppercase tracking-[2px] mb-6">
            {post.category || "Informativo"}
          </span>
          
          <h1 className="text-4xl md:text-6xl font-extrabold mb-8 leading-[1.1] tracking-tight">
            {post.title}
          </h1>

          <div className="flex items-center gap-6 text-slate-500 font-inter text-sm border-t border-slate-200 pt-8">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[18px]">calendar_today</span>
              {post.publishedAt 
                ? new Date(post.publishedAt).toLocaleDateString('pt-BR', { day: '2-digit', month: 'long', year: 'numeric' })
                : 'Data não informada'}
            </div>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[18px]">schedule</span>
              Leitura rápida
            </div>
          </div>
        </div>
      </section>

      {/* 2. IMAGEM DE CAPA AMPLA */}
      <section className="max-w-6xl mx-auto w-full px-4 md:px-8 mb-16 md:mb-24">
        <div className="relative aspect-[21/9] rounded-[32px] overflow-hidden shadow-2xl">
          {post.imageUrl ? (
            <Image 
              src={post.imageUrl} 
              alt={post.title} 
              fill 
              priority
              className="object-cover"
            />
          ) : (
            <div className="absolute inset-0 bg-slate-200 flex items-center justify-center text-slate-400">
              Sem imagem de capa
            </div>
          )}
        </div>
      </section>

      {/* 3. CONTEÚDO DO ARTIGO + SIDEBAR */}
      <section className="max-w-6xl mx-auto px-8 pb-24 w-full grid grid-cols-1 lg:grid-cols-12 gap-16">
        
        {/* TEXTO DO ARTIGO (Lido com PortableText) */}
        <div className="lg:col-span-8 prose prose-lg prose-slate max-w-none 
          prose-headings:font-manrope prose-headings:font-bold prose-headings:text-[#221a15]
          prose-p:font-inter prose-p:text-[#55433a] prose-p:leading-relaxed
          prose-strong:text-[#221a15] prose-strong:font-bold
          prose-li:text-[#55433a]
          prose-img:rounded-3xl prose-img:shadow-lg">
          
          <PortableText value={post.body} />
          
          <div className="mt-16 pt-8 border-t border-slate-200 flex flex-wrap gap-4">
            <span className="text-sm font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2">
              <span className="material-symbols-outlined text-[18px]">sell</span> Tags:
            </span>
            <span className="text-xs font-bold text-[#D4773C] bg-white px-4 py-2 rounded-lg border border-slate-100 shadow-sm">#Expedição</span>
            {post.category && (
              <span className="text-xs font-bold text-[#D4773C] bg-white px-4 py-2 rounded-lg border border-slate-100 shadow-sm">#{post.category}</span>
            )}
          </div>
        </div>

        {/* SIDEBAR DE CONVERSÃO */}
        <aside className="lg:col-span-4 space-y-8">
          <div className="bg-[#006576] p-10 rounded-[32px] text-white sticky top-32 shadow-xl overflow-hidden group">
             <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-white/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>
            
            <h4 className="text-2xl font-bold mb-4 relative z-10">Gostou do roteiro?</h4>
            <p className="text-white/80 font-inter text-sm mb-8 leading-relaxed relative z-10">
              Personalizamos sua viagem para o Atacama ou Uyuni com guias especialistas e vivências autênticas.
            </p>
            <Link 
              href="/contato" 
              className="inline-flex items-center justify-center w-full bg-[#D4773C] text-white py-4 rounded-xl font-bold hover:bg-[#b35d24] transition-all shadow-lg relative z-10"
            >
              Falar com Consultor
              <span className="material-symbols-outlined ml-2 text-[20px]">arrow_forward</span>
            </Link>
          </div>

          <div className="bg-white p-8 rounded-[32px] border border-slate-100 shadow-sm">
            <h4 className="font-bold text-lg mb-6 flex items-center gap-2 text-[#221a15]">
              <span className="material-symbols-outlined text-[#D4773C]">share</span>
              Compartilhar
            </h4>
            <div className="flex gap-4">
              <button className="w-12 h-12 rounded-xl bg-[#F8F6F3] flex items-center justify-center text-slate-500 hover:text-[#D4773C] transition-colors">
                <span className="material-symbols-outlined">link</span>
              </button>
              <button className="w-12 h-12 rounded-xl bg-[#F8F6F3] flex items-center justify-center text-slate-500 hover:text-[#D4773C] transition-colors">
                <span className="material-symbols-outlined">alternate_email</span>
              </button>
            </div>
          </div>
        </aside>
      </section>
    </main>
  );
}