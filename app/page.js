"use client";
import React, { useState } from 'react';

// Interne Logo component om import-fouten te voorkomen
const LocalLogo = ({ className }) => (
  <svg viewBox="0 0 128 128" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="cyber-g" x1="0%" y1="100%" x2="100%" y2="0%">
        <stop offset="0%" style={{ stopColor: "#FF00E4" }} />
        <stop offset="100%" style={{ stopColor: "#8B5CF6" }} />
      </linearGradient>
    </defs>
    <path d="M95,35 C95,15 65,15 65,35 C65,55 95,73 95,93 C95,113 65,113 65,93 M35,93 C35,113 65,113 65,93 C65,73 35,55 35,35 C35,15 65,15 65,35" stroke="url(#cyber-g)" strokeWidth="18" strokeLinecap="round" />
  </svg>
);

export default function Home() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");
  const [lang, setLang] = useState("EN");

  const translations = {
    EN: { sub: "Sync your content across all platforms with AI power.", btn: "Join Waitlist", flow: "HOW IT WORKS", s: ["Content Creation", "Smart Sync", "Auto Publish"], d: ["Upload video or text. AI understands the core.", "AI optimizes for all platforms.", "Synced posting at the perfect time."] },
    NL: { sub: "Synchroniseer je content over alle platforms met AI kracht.", btn: "Join Wachtlijst", flow: "HOE HET WERKT", s: ["Content Creatie", "Smart Sync", "Auto Publish"], d: ["Upload video of tekst. AI begrijpt de kern.", "AI optimaliseert voor elk platform.", "Gesynchroniseerd plaatsen op het juiste moment."] },
    ES: { sub: "Sincroniza tu contenido en todas las plataformas con IA.", btn: "Unirse", flow: "CÓMO FUNCIONA", s: ["Creación", "Smart Sync", "Auto Publicar"], d: ["Sube video o texto. La IA entiende la esencia.", "IA optimiza para redes sociales.", "Publicación sincronizada ideal."] },
    ZH: { sub: "利用 AI 力量同步您的所有平台内容。", btn: "加入候补名单", flow: "工作原理", s: ["内容创作", "智能同步", "自动发布"], d: ["上传视频或文本。AI 理解核心。", "AI 为所有平台优化。", "在最佳时间自动同步发布。"] }
  };

  const t = translations[lang];

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-purple-500/30">
      
      {/* --- ACHTERGROND (HEXAGON + GLOED) --- */}
      <div className="fixed inset-0 z-0 opacity-20" 
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='28' height='49'%3E%3Cpath d='M14 0L28 8V24.5L14 32.5L0 24.5V8L14 0Z' fill='none' stroke='%238B5CF6' stroke-width='0.5'/%3E%3C/svg%3E")`, backgroundSize: '56px 98px' }}>
      </div>
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-600/20 rounded-full blur-[120px] z-0"></div>

      <div className="relative z-10 flex flex-col items-center">
        
        {/* NAVIGATIE */}
        <nav className="w-full max-w-7xl flex justify-between items-center p-6 mb-12">
          <LocalLogo className="w-10 h-10" />
          <div className="relative group">
            <button className="bg-white/5 border border-white/10 px-4 py-2 rounded-xl backdrop-blur-md">🌐 {lang}</button>
            <div className="absolute right-0 mt-2 w-32 bg-zinc-900 border border-white/10 rounded-xl hidden group-hover:block overflow-hidden shadow-2xl">
              {['EN', 'NL', 'ES', 'ZH'].map(l => (
                <button key={l} onClick={() => setLang(l)} className="w-full px-4 py-3 text-left hover:bg-purple-600 transition-colors">{l}</button>
              ))}
            </div>
          </div>
        </nav>

        {/* HERO SECTIE */}
        <section className="w-full max-w-4xl px-4 text-center mb-32">
          <h1 className="text-6xl md:text-8xl font-black mb-6 tracking-tighter italic uppercase">
            Sync<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF00E4] to-[#8B5CF6] drop-shadow-[0_0_15px_rgba(255,0,228,0.3)]">Social</span>
          </h1>
          <p className="text-xl md:text-2xl text-zinc-400 mb-12 max-w-2xl mx-auto leading-relaxed">{t.sub}</p>
          
          {/* HERSTELDE EMAIL SECTIE */}
          <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-3 p-2 bg-zinc-900/80 rounded-2xl border border-white/10 shadow-2xl backdrop-blur-xl">
            <input 
              type="email" 
              placeholder="Email" 
              className="flex-1 bg-transparent px-4 py-3 outline-none text-white placeholder:text-zinc-600" 
              required 
            />
            <button className="bg-gradient-to-r from-[#FF00E4] to-[#8B5CF6] text-white px-8 py-3 rounded-xl font-bold shadow-lg shadow-purple-500/20 hover:brightness-110 active:scale-95 transition-all">
              {t.btn}
            </button>
          </form>
        </section>

        {/* FLOW SECTIE (DIT MOET NU ECHT VERSCHIJNEN) */}
        

[Image of a three-step infographic]

        <section id="how-it-works" className="w-full py-24 bg-[#080808] border-y border-white/5 relative mb-20">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <h2 className="text-4xl font-black mb-16 tracking-widest text-white uppercase italic">{t.flow}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {[0, 1, 2].map((i) => (
                <div key={i} className="bg-zinc-900/50 p-10 rounded-[2.5rem] border border-white/5 hover:border-purple-500/40 transition-all text-left relative group">
                  <div className="absolute -top-5 left-8 px-4 py-1 bg-gradient-to-r from-[#FF00E4] to-[#8B5CF6] rounded-full text-xs font-black italic shadow-lg">STEP 0{i+1}</div>
                  <h3 className="text-2xl font-bold mb-4 mt-2 text-white">{t.s[i]}</h3>
                  <p className="text-zinc-500 leading-relaxed">{t.d[i]}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="w-full py-20 text-center opacity-40 text-[10px] tracking-[0.8em] uppercase mb-10">
          SyncSocial // Protocol 2026 // AI Enhanced
        </footer>

      </div>
    </div>
  );
}
