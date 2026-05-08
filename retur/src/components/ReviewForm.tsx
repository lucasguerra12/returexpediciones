"use client";

import { useState } from "react";

export function ReviewForm() {
  const [formData, setFormData] = useState({ author: "", rating: 5, comment: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/reviews", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("success");
        setFormData({ author: "", rating: 5, comment: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="avaliar" className="max-w-2xl mx-auto my-20 p-8 bg-white rounded-[16px] shadow-[0_10px_30px_-10px_rgba(0,0,0,0.08)] border border-slate-100">
      <h3 className="text-2xl font-bold text-[#221a15] mb-2">Conte sua experiência</h3>
      <p className="text-sm text-slate-500 mb-8 font-inter">Sua avaliação passará por uma breve moderação antes de aparecer no site.</p>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block font-inter text-xs font-bold uppercase tracking-widest text-[#55433a] mb-2 px-1">Seu Nome</label>
          <input
            required
            type="text"
            className="w-full p-4 rounded-[8px] border border-slate-200 focus:border-[#D4773C] focus:ring-1 focus:ring-[#D4773C] outline-none transition-all font-inter"
            placeholder="Ex: João Silva"
            value={formData.author}
            onChange={(e) => setFormData({ ...formData, author: e.target.value })}
          />
        </div>

        <div>
          <label className="block font-inter text-xs font-bold uppercase tracking-widest text-[#55433a] mb-2 px-1">Avaliação (1 a 5 estrelas)</label>
          {/* Substitua o bloco das estrelas por este: */}
        <div className="flex gap-2">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              type="button" // Garante que não envie o form ao clicar
              onClick={(e) => {
                e.preventDefault(); // Isolamento extra
                setFormData({ ...formData, rating: star });
              }}
              className={`w-12 h-12 rounded-[8px] flex items-center justify-center transition-all duration-200 ${
                formData.rating >= star 
                  ? "bg-[#D4773C] text-white shadow-md scale-110" 
                  : "bg-slate-100 text-slate-400 hover:bg-slate-200"
              }`}
            >
              <span 
                className="material-symbols-outlined" 
                style={{ fontVariationSettings: formData.rating >= star ? "'FILL' 1" : "'FILL' 0" }}
              >
                star
              </span>
            </button>
          ))}
        </div>
        </div>

        <div>
          <label className="block font-inter text-xs font-bold uppercase tracking-widest text-[#55433a] mb-2 px-1">Seu Depoimento</label>
          <textarea
            required
            rows={4}
            className="w-full p-4 rounded-[8px] border border-slate-200 focus:border-[#D4773C] focus:ring-1 focus:ring-[#D4773C] outline-none transition-all font-inter resize-none"
            placeholder="Como foi sua viagem com a Retur?"
            value={formData.comment}
            onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
          />
        </div>

        <button
          type="submit"
          disabled={status === "loading"}
          className="w-full bg-[#D4773C] hover:bg-[#b35d24] text-white py-5 rounded-[8px] font-bold text-lg shadow-lg transition-all active:scale-95 disabled:opacity-50"
        >
          {status === "loading" ? "Enviando..." : "Publicar Avaliação"}
        </button>

        {status === "success" && (
          <p className="text-green-600 text-center font-bold font-inter bg-green-50 p-4 rounded-lg">✓ Obrigado! Recebemos sua avaliação.</p>
        )}
        {status === "error" && (
          <p className="text-red-600 text-center font-bold font-inter bg-red-50 p-4 rounded-lg">✕ Erro ao enviar. Tente novamente.</p>
        )}
      </form>
    </section>
  );
}