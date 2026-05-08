import { client } from "../../../sanity/lib/client";
import Link from "next/link";
import BlogClient from "./BlogClient";

export const revalidate = 120; 
async function getPosts() {
  const query = `*[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    "slug": slug.current,
    category,
    resumo,
    "imageUrl": mainImage.asset->url,
    publishedAt
  }`;
  
  return client.fetch(query);
}

export default async function BlogPage() {
  const posts = await getPosts(); 

  return (
    <main className="flex min-h-screen flex-col font-manrope bg-[#F8F6F3] text-[#221a15]">
      
      <section className="relative h-[460px] flex items-center justify-center overflow-hidden pt-20 bg-slate-900">
        <div className="absolute inset-0 z-0 opacity-60">
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/30"></div>
        </div>
        
        <div className="relative z-10 text-center text-white px-8 max-w-4xl mx-auto w-full">
          <nav className="mb-6 flex justify-center items-center gap-2 font-inter text-xs uppercase tracking-widest text-white/80">
            <Link href="/" className="hover:text-white transition-colors">Início</Link>
            <span className="material-symbols-outlined text-[14px]">chevron_right</span>
            <span className="text-white font-bold">Informativo</span>
          </nav>
          <h1 className="text-5xl md:text-6xl font-bold mb-4 tracking-tight">Blog da Retur</h1>
          <p className="font-inter text-lg text-white/90 font-light max-w-2xl mx-auto leading-relaxed">
            Informações práticas, curiosidades e guias rápidos para você conhecer melhor as maravilhas do Chile e da Bolívia.
          </p>
        </div>
      </section>

      {/* COMPONENTE INTERATIVO COM OS DADOS DO SANITY */}
      <BlogClient posts={posts} />

    </main>
  );
}