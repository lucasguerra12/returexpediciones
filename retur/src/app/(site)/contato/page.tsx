"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function ContatoPage() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [assunto, setAssunto] = useState("Solicitar orçamento");
  const [destino, setDestino] = useState("Atacama");
  const [pessoas, setPessoas] = useState("1");
  const [mensagem, setMensagem] = useState("");
  const numeroOficial = "5517997697872";
  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // mensagem padronizada
    const texto = `Olá, equipe Retur Expedições! Gostaria de falar sobre: *${assunto}*

*Detalhes do Contato:*
Nome: ${nome}
E-mail: ${email}
WhatsApp: ${whatsapp}

*Detalhes da Viagem:*
Destino: ${destino}
Número de Pessoas: ${pessoas}

*Mensagem:*
${mensagem}`;
    const encodedText = encodeURIComponent(texto);
    if (typeof window !== 'undefined') {
      window.open(`https://wa.me/${numeroOficial}?text=${encodedText}`, "_blank");
    }
  };

  return (
    <main className="flex min-h-screen flex-col font-manrope bg-[#F8F6F3] text-[#221a15]">
      
      {/* 1. HERO SECTION */}
      <section className="relative h-[400px] min-h-[350px] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <Image 
            className="object-cover" 
            src="/images/atacama/atacama-ruta-hori.jpg" 
            alt="Atendimento Retur" 
            fill
            priority
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="relative z-10 text-center text-white px-4 max-w-4xl">
          <nav className="flex justify-center gap-2 mb-6 font-inter text-xs uppercase tracking-widest text-white/80">
            <Link className="hover:text-white" href="/">Início</Link>
            <span>/</span>
            <span className="text-white font-bold">Contato</span>
          </nav>
          <h1 className="text-5xl md:text-6xl font-bold mb-4 tracking-tight">Fale Conosco</h1>
          <p className="font-inter text-lg text-white/90 font-light">Estamos prontos para transformar sua viagem em realidade.</p>
        </div>
      </section>

      {/* 2. CONTACT INFO CARDS */}
      <section className="max-w-7xl mx-auto px-8 py-20 w-full -mt-16 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* WhatsApp Card */}
          <div className="bg-white p-8 rounded-3xl shadow-[0_10px_30px_-10px_rgba(0,0,0,0.08)] flex flex-col items-center text-center group hover:-translate-y-1 transition-transform border border-slate-50">
            <div className="w-16 h-16 rounded-2xl bg-green-100 flex items-center justify-center mb-6">
              <span className="material-symbols-outlined text-green-600 text-3xl">chat</span>
            </div>
            <h3 className="text-2xl font-bold mb-2">WhatsApp</h3>
            <p className="font-inter text-[#55433a] mb-2">+55 17 9 9769-7872</p>
            <p className="font-inter text-xs font-bold uppercase tracking-widest text-green-600 mb-8">Resposta rápida</p>
            <a 
              href={`https://wa.me/${numeroOficial}?text=Olá! Gostaria de tirar algumas dúvidas sobre os roteiros.`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-green-600 text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-green-700 transition-colors shadow-lg shadow-green-600/20"
            >
              Abrir WhatsApp
            </a>
          </div>

          {/* Email Card */}
          <div className="bg-white p-8 rounded-3xl shadow-[0_10px_30px_-10px_rgba(0,0,0,0.08)] flex flex-col items-center text-center group hover:-translate-y-1 transition-transform border border-slate-50">
            <div className="w-16 h-16 rounded-2xl bg-[#D4773C]/10 flex items-center justify-center mb-6">
              <span className="material-symbols-outlined text-[#D4773C] text-3xl">mail</span>
            </div>
            <h3 className="text-2xl font-bold mb-2">E-mail</h3>
            <p className="font-inter text-[#55433a] mb-2">contato@returexpediciones.com</p>
            <p className="font-inter text-xs font-bold uppercase tracking-widest text-slate-400 mb-8">Resposta em até 24h</p>
            <a 
              href="mailto:contato@returexpediciones.com"
              className="w-full bg-[#D4773C] text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-[#b35d24] transition-colors shadow-lg shadow-[#D4773C]/20"
            >
              Enviar E-mail
            </a>
          </div>

          {/* Atendimento Card */}
          <div className="bg-white p-8 rounded-3xl shadow-[0_10px_30px_-10px_rgba(0,0,0,0.08)] flex flex-col items-center text-center group hover:-translate-y-1 transition-transform border border-slate-50">
            <div className="w-16 h-16 rounded-2xl bg-[#aaedff]/30 flex items-center justify-center mb-6">
              <span className="material-symbols-outlined text-[#006576] text-3xl">public</span>
            </div>
            <h3 className="text-2xl font-bold mb-4">Atendimento</h3>
            <p className="font-inter text-[#55433a] text-sm leading-relaxed mb-6">
              Suporte em <b>Português, Espanhol e Inglês</b> para reservas, dúvidas e planejamento de roteiros.
            </p>
            <div className="w-full bg-[#F8F6F3] py-3 rounded-xl font-inter text-xs font-bold text-[#55433a] uppercase tracking-widest mt-auto border border-slate-100">
              Seg a Sáb - 09h às 18h
            </div>
          </div>

        </div>
      </section>

      {/* 3. FORM & INFO SECTION */}
      <section className="bg-white py-24 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-20">
          
          {/* ESQUERDA: FORMULÁRIO */}
          <div>
            <h2 className="text-4xl font-bold mb-8 text-[#221a15]">Envie sua Mensagem</h2>
            <form onSubmit={handleWhatsAppSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="font-inter text-xs font-bold uppercase tracking-widest text-[#55433a] px-1">Nome Completo</label>
                  <input required value={nome} onChange={(e) => setNome(e.target.value)} className="w-full p-4 rounded-xl border border-slate-200 focus:border-[#D4773C] focus:ring-1 focus:ring-[#D4773C] bg-[#F8F6F3] outline-none transition-all" placeholder="Seu nome" type="text" />
                </div>
                <div className="space-y-2">
                  <label className="font-inter text-xs font-bold uppercase tracking-widest text-[#55433a] px-1">E-mail</label>
                  <input required value={email} onChange={(e) => setEmail(e.target.value)} className="w-full p-4 rounded-xl border border-slate-200 focus:border-[#D4773C] focus:ring-1 focus:ring-[#D4773C] bg-[#F8F6F3] outline-none transition-all" placeholder="seu@email.com" type="email" />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="font-inter text-xs font-bold uppercase tracking-widest text-[#55433a] px-1">WhatsApp</label>
                  <input required value={whatsapp} onChange={(e) => setWhatsapp(e.target.value)} className="w-full p-4 rounded-xl border border-slate-200 focus:border-[#D4773C] focus:ring-1 focus:ring-[#D4773C] bg-[#F8F6F3] outline-none transition-all" placeholder="+55 (11) 99999-9999" type="tel" />
                </div>
                <div className="space-y-2">
                  <label className="font-inter text-xs font-bold uppercase tracking-widest text-[#55433a] px-1">Assunto</label>
                  <select value={assunto} onChange={(e) => setAssunto(e.target.value)} className="w-full p-4 rounded-xl border border-slate-200 focus:border-[#D4773C] focus:ring-1 focus:ring-[#D4773C] bg-[#F8F6F3] outline-none transition-all cursor-pointer">
                    <option>Solicitar orçamento</option>
                    <option>Dúvidas sobre passeio</option>
                    <option>Personalizar roteiro</option>
                    <option>Outros</option>
                  </select>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="font-inter text-xs font-bold uppercase tracking-widest text-[#55433a] px-1">Destino</label>
                  <select value={destino} onChange={(e) => setDestino(e.target.value)} className="w-full p-4 rounded-xl border border-slate-200 focus:border-[#D4773C] focus:ring-1 focus:ring-[#D4773C] bg-[#F8F6F3] outline-none transition-all cursor-pointer">
                    <option>Atacama</option>
                    <option>Salar de Uyuni</option>
                    <option>Santiago</option>
                    <option>Combo Atacama + Uyuni</option>
                    <option>Ainda não sei</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="font-inter text-xs font-bold uppercase tracking-widest text-[#55433a] px-1">Passageiros</label>
                  <input required value={pessoas} onChange={(e) => setPessoas(e.target.value)} className="w-full p-4 rounded-xl border border-slate-200 focus:border-[#D4773C] focus:ring-1 focus:ring-[#D4773C] bg-[#F8F6F3] outline-none transition-all" min="1" placeholder="1" type="number" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="font-inter text-xs font-bold uppercase tracking-widest text-[#55433a] px-1">Mensagem</label>
                <textarea required value={mensagem} onChange={(e) => setMensagem(e.target.value)} className="w-full p-4 rounded-xl border border-slate-200 focus:border-[#D4773C] focus:ring-1 focus:ring-[#D4773C] bg-[#F8F6F3] outline-none transition-all resize-none" placeholder="Conte-nos um pouco sobre a viagem dos seus sonhos..." rows={5}></textarea>
              </div>
              
              <button type="submit" className="w-full bg-[#D4773C] text-white py-5 rounded-xl font-bold text-lg shadow-[0_10px_20px_-10px_rgba(212,119,60,0.6)] hover:bg-[#b35d24] active:scale-95 transition-all flex items-center justify-center gap-2">
                <span className="material-symbols-outlined">send</span> Enviar pelo WhatsApp
              </button>
            </form>
          </div>

          {/* DIREITA: ADDITIONAL INFO */}
          <div className="space-y-8">
            
            {/* Location */}
            <div className="bg-[#F8F6F3] p-10 rounded-3xl border border-slate-100">
              <div className="flex gap-6 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[#D4773C]">location_on</span>
                </div>
                <div>
                  <h4 className="text-2xl font-bold mb-2">Onde Estamos</h4>
                  <p className="font-inter text-[#55433a] leading-relaxed">
                    Escritório no <b>Brasil</b> e em <b>San Pedro de Atacama</b>, Região de Antofagasta, Chile.
                  </p>
                </div>
              </div>
              {/* Maps Placeholder */}
              <div className="w-full h-56 bg-slate-200 rounded-2xl overflow-hidden relative group">
                <Image className="object-cover" src="/images/mapa.png" alt="Mapa San Pedro" fill />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-all"></div>
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-[#F8F6F3] p-10 rounded-3xl border border-slate-100">
              <h4 className="font-inter text-xs font-bold text-[#55433a] uppercase tracking-widest mb-6">Acompanhe nossas expedições</h4>
              <div className="grid grid-cols-2 gap-4">
                <a 
                  href="https://www.instagram.com/retur_expediciones/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 flex items-center gap-3 hover:border-[#D4773C] transition-colors group"
                >
                  <span className="material-symbols-outlined text-slate-400 group-hover:text-[#D4773C]">photo_camera</span>
                  <span className="font-bold text-[#221a15] group-hover:text-[#D4773C]">Instagram</span>
                </a>
                <a 
                  href="#" 
                  className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 flex items-center gap-3 hover:border-[#D4773C] transition-colors group"
                >
                  <span className="material-symbols-outlined text-slate-400 group-hover:text-[#D4773C]">reviews</span>
                  <span className="font-bold text-[#221a15] group-hover:text-[#D4773C]">TripAdvisor</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. QUICK FAQ */}
      <section className="max-w-4xl mx-auto px-8 py-24">
        <h2 className="text-4xl font-bold text-center mb-16 text-[#221a15]">Dúvidas Frequentes</h2>
        <div className="space-y-4">
          {[
            { q: 'Qual o tempo médio de resposta?', a: 'Pelo WhatsApp, costumamos responder em menos de 15 minutos. Por e-mail, garantimos um retorno em até 24 horas úteis.' },
            { q: 'Como recebo um pacote personalizado?', a: 'Basta preencher o formulário acima selecionando "Solicitar orçamento". Nossa equipe entrará em contato para entender seu perfil e montar o roteiro ideal.' },
            { q: 'Posso pagar em Reais (BRL)?', a: 'Sim! Facilitamos o pagamento para brasileiros através de PIX ou transferência nacional, evitando taxas de IOF de cartões internacionais.' },
            { q: 'Quais as formas de pagamento aceitas?', a: 'Aceitamos PIX, Cartão de Crédito (Parcelamos em até 12x), Transferência Bancária e por Pesos CLP via Wise' },
            { q: 'Qual a política de cancelamento?', a: 'Oferecemos cancelamento flexível. Roteiros mais longos como a travessia do Uyuni possuem regras específicas detalhadas no contrato no momento da reserva.' },
          ].map((faq, i) => (
            <details key={i} className="group bg-white rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] overflow-hidden border border-slate-100">
              <summary className="flex justify-between items-center p-6 md:p-8 cursor-pointer list-none">
                <span className="font-bold text-lg text-[#221a15] group-hover:text-[#D4773C] transition-colors">{faq.q}</span>
                <span className="material-symbols-outlined text-slate-400 group-open:rotate-180 transition-transform">expand_more</span>
              </summary>
              <div className="px-6 md:px-8 pb-8 font-inter text-[#55433a] border-t border-slate-50 pt-4 leading-relaxed">
                {faq.a}
              </div>
            </details>
          ))}
        </div>
      </section>

    </main>
  );
}