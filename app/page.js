"use client";
import React, { useState } from 'react';

// We zetten het Logo direct hierin om import-fouten te voorkomen
const LocalLogo = ({ className }) => (
  <svg viewBox="0 0 128 128" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="lg" x1="0%" y1="100%" x2="100%" y2="0%">
        <stop offset="0%" style={{ stopColor: "#FF00E4" }} />
        <stop offset="100%" style={{ stopColor: "#8B5CF6" }} />
      </linearGradient>
    </defs>
    <path d="M95,35 C95,15 65,15 65,35 C65,55 95,73 95,93 C95,113 65,113 65,93 M35,93 C35,113 65,113 65,93 C65,73 35,55 35,35 C35,15 65,15 65,35" stroke="url(#lg)" strokeWidth="18" strokeLinecap="round" />
  </svg>
);

export default function Home() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");
  const [lang, setLang] = useState("EN");

  const translations = {
    EN: { sub: "Sync your content across all platforms with AI power.", btn: "Join Waitlist", flow: "HOW IT WORKS", s1: "Content Creation", d1: "Upload video or text. AI understands the core.", s2: "Smart Sync", d2: "AI optimizes for all platforms.", s3: "Auto Publish", d3: "Synced posting at the perfect time." },
    NL: { sub: "Synchroniseer je content over alle platforms met AI kracht.", btn: "Join Wachtlijst", flow: "HOE HET WERKT", s1: "Content Creatie", d1: "Upload video of tekst. AI begrijpt de kern.", s2: "Smart Sync", d2: "AI optimaliseert voor elk platform.", s3: "Auto Publish", d3: "Gesynchroniseerd plaatsen op het juiste moment." },
    ES: { sub: "Sincroniza tu contenido en todas las plataformas con IA.", btn: "Unirse", flow: "CÓMO FUNCIONA", s1: "Creación", d1: "Sube video o texto. La IA entiende la esencia.", s2: "Smart Sync", d2: "IA optimiza para redes sociales.", s3: "Auto Publicar", d3: "Publicación sincronizada ideal." },
    ZH: { sub: "利用 AI 力量同步您的所有平台内容。", btn: "加入候补名单", flow: "工作原理", s1: "内容创作", d1: "上传视频或文本。AI 理解核心。", s2: "智能同步", d2: "AI 为所有平台优化。", s3: "自动发布", d3: "在最佳时间自动同步发布。" }
  };

  const t = translations[lang];

  return (
    <div className="min-h-screen bg-[#050505] text-white relative">
      
      {/* --- ACHTERGROND (HEXAGON + GLOED) --- */}
      <div className="fixed inset-0 opacity-20 z-0" 
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='28' height='49'%3E%3Cpath d='M14 0L28 8V24.5L14 32.5L0 24.5V8L14 0Z' fill='none' stroke='%238B5CF6' stroke-width='0.5'/%3E%3C/svg%3E")`, backgroundSize: '56px 98px' }}>
      </div>
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-600/20 rounded-full blur-[120px] z-0 opacity-60"></div>

      <div className="relative z-10">
        {/* NAVIGATIE */}
        <nav className="flex justify-between items-center p-6 max-w-7xl mx-auto">
          <LocalLogo className="w-10 h-10" />
          <div className="relative group">
            <button className="bg-white/5 border border-white/10 px-4 py-2 rounded-lg block">🌐 {lang}</button>
            <div className="absolute right-0 mt-2 w-32 bg-zinc-900 border border-white/10 rounded-lg hidden group-hover:block overflow-hidden shadow-2xl">
              {['EN', 'NL', 'ES', 'ZH'].map(l => (
                <button key={l} onClick={() => setLang(l)} className="w-full px-4 py-3 text-left hover:bg-purple-600 transition-colors">{l}</button>
              ))}
            </div>
          </div>
        </nav>

        {/* HERO */}
        <section className="pt-20 pb-24 px-4 text-center max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-black mb-6 tracking-tighter italic uppercase">
            Sync<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF00E4] to-[#8B5CF6]">Social</span>
          </h1>
          <p className="text-xl md:text-2xl text-zinc-400 mb-10">{t.sub}</p>
          <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-3">
            <input type="email" placeholder="Email" className="flex-1 bg-white/5 border border-white/10 px-6 py-4 rounded-2xl outline-none" required />
            <button className="bg-gradient-to-r from-[#FF00E4] to-[#8B5CF6] px-8 py-4 rounded-2xl font-bold hover:scale-105 transition-transform">{t.btn}</button>
          </form>
        </section>

        {/* FLOW SECTIE (DIT MOET NU ZICHTBAAR ZIJN) */}
        <section className="py-24 px-4 bg-zinc-900/40 border-y-2 border-purple-500/30">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-black mb-16 text-center tracking-widest">{t.flow}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-black/60 p-10 rounded-[2rem] border border-white/10">
                <div className="text-[#FF00E4] text-5xl font-black mb-4">01</div>
                <h3 className="text-2xl font-bold mb-4">{t.s1}</h3>
                <p className="text-zinc-500 leading-relaxed">{t.d1}</p>
              </div>
              <div className="bg-black/60 p-10 rounded-[2rem] border border-white/10">
                <div className="text-[#8B5CF6] text-5xl font-black mb-4">02</div>
                <h3 className="text-2xl font-bold mb-4">{t.s2}</h3>
                <p className="text-zinc-500 leading-relaxed">{t.d2}</p>
              </div>
              <div className="bg-black/60 p-10 rounded-[2rem] border border-white/10">
                <div className="text-white text-5xl font-black mb-4">03</div>
                <h3 className="text-2xl font-bold mb-4">{t.s3}</h3>
                <p className="text-zinc-500 leading-relaxed">{t.d3}</p>
              </div>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="py-20 text-center opacity-40 text-xs tracking-[0.5em] uppercase">
          © 2026 SyncSocial Protocol
        </footer>
      </div>
    </div>
  );
}
