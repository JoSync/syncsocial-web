"use client";
import React, { useState } from 'react';

// Het Cyber-S Logo (Intern voor stabiliteit)
const Logo = ({ className }) => (
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

  const t = {
    EN: { sub: "Sync your content across all platforms with AI power.", btn: "Join Waitlist", flow: "HOW IT WORKS", s: ["Content Creation", "Smart Sync", "Auto Publish"], d: ["Upload video or text. AI understands the core.", "AI optimizes for all platforms.", "Synced posting at the perfect time."] },
    NL: { sub: "Synchroniseer je content over alle platforms met AI kracht.", btn: "Join Wachtlijst", flow: "HOE HET WERKT", s: ["Content Creatie", "Smart Sync", "Auto Publish"], d: ["Upload video of tekst. AI begrijpt de kern.", "AI optimaliseert voor elk platform.", "Gesynchroniseerd plaatsen op het juiste moment."] },
    ES: { sub: "Sincroniza tu contenido en todas las plataformas con IA.", btn: "Unirse", flow: "CÓMO FUNCIONA", s: ["Creación", "Smart Sync", "Auto Publicar"], d: ["Sube video o texto. La IA entiende la esencia.", "IA optimiza para redes sociales.", "Publicación sincronizada ideal."] },
    ZH: { sub: "利用 AI 力量同步您的所有平台内容。", btn: "加入候补名单", flow: "工作原理", s: ["内容创作", "智能同步", "自动发布"], d: ["上传视频或文本。AI 理解核心。", "AI 为所有平台优化。", "在最佳时间自动同步发布。"] }
  }[lang];

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-purple-500/30 overflow-x-hidden">
      
      {/* --- DYNAMISCHE ACHTERGROND --- */}
      <div className="fixed inset-0 z-0 opacity-25" 
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='28' height='49'%3E%3Cpath d='M14 0L28 8V24.5L14 32.5L0 24.5V8L14 0Z' fill='none' stroke='%238B5CF6' stroke-width='0.5'/%3E%3C/svg%3E")`, backgroundSize: '56px 98px' }}>
      </div>
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-600/20 rounded-full blur-[130px] z-0 pointer-events-none"></div>

      <div className="relative z-10 flex flex-col items-center">
        
        {/* NAVIGATIE */}
        <nav className="w-full max-w-7xl flex justify-between items-center p-6 mb-16">
          <Logo className="w-10 h-10 drop-shadow-[0_0_8px_rgba(139,92,246,0.5)]" />
          <div className="relative group">
            <button className="bg-zinc-900/90 border border-white/10 px-5 py-2 rounded-xl backdrop-blur-md hover:border-purple-500 transition-colors">🌐 {lang}</button>
            <div className="absolute right-0 mt-2 w-32 bg-zinc-900 border border-white/10 rounded-xl hidden group-hover:block overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.5)] z-50">
              {['EN', 'NL', 'ES', 'ZH'].map(l => (
                <button key={l} onClick={() => setLang(l)} className="w-full px-4 py-3 text-left hover:bg-purple-600 transition-colors font-bold text-sm uppercase">{l}</button>
              ))}
            </div>
          </div>
        </nav>

        {/* HERO SECTIE */}
        <section className="w-full max-w-5xl px-4 text-center mb-40 pt-10">
          <h1 className="text-6xl md:text-9xl font-black mb-6 tracking-tighter italic uppercase leading-none">
            Sync<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF00E4] to-[#8B5CF6] drop-shadow-[0_0_20px_rgba(255,0,228,0.4)]">Social</span>
          </h1>
          <p className="text-xl md:text-2xl text-zinc-400 mb-14 max-w-2xl mx-auto leading-relaxed">{t.sub}</p>
          
          {/* DE JUISTE EMAIL CONTAINER */}
          <div className="max-w-md mx-auto p-2 bg-zinc-900/90 rounded-[2rem] border border-white/10 shadow-2xl backdrop-blur-2xl flex flex-col sm:flex-row gap-3">
            <input 
              type="email" 
              placeholder="Email" 
              className="flex-1 bg-transparent px-6 py-4 outline-none text-white font-medium placeholder:text-zinc-600" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button className="bg-gradient-to-r from-[#FF00E4] to-[#8B5CF6] text-white px-10 py-4 rounded-2xl font-black uppercase tracking-widest shadow-[0_0_30px_rgba(139,92,246,0.4)] hover:brightness-110 active:scale-95 transition-all">
              {t.btn}
            </button>
          </div>
        </section>

        {/* FLOW SECTIE - GEGARANDEERDE STRUCTUUR */}
        <div id="flow-section" className="w-full py-32 bg-[#0A0A0A]/90 border-y border-white/5 relative mb-20 min-h-[600px] flex items-center">
          <div className="max-w-6xl mx-auto px-4 w-full">
            <h2 className="text-4xl md:text-5xl font-black mb-20 text-center tracking-[0.2em] uppercase italic text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.1)]">
              {t.flow}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              
              <div className="bg-zinc-900/40 p-12 rounded-[3rem] border border-white/5 relative group hover:border-purple-500/30 transition-all duration-500">
                <div className="absolute -top-6 left-10 px-5 py-2 bg-[#FF00E4] rounded-2xl text-[12px] font-black italic shadow-[0_10px_20px_rgba(255,0,228,0.3)]">STEP 01</div>
                <h3 className="text-2xl font-bold mb-5 mt-4 text-white uppercase tracking-tight">{t.s[0]}</h3>
                <p className="text-zinc-500 leading-relaxed text-lg">{t.d[0]}</p>
              </div>

              <div className="bg-zinc-900/40 p-12 rounded-[3rem] border border-white/5 relative group hover:border-purple-500/30 transition-all duration-500 shadow-[0_0_50px_rgba(139,92,246,0.05)]">
                <div className="absolute -top-6 left-10 px-5 py-2 bg-purple-600 rounded-2xl text-[12px] font-black italic shadow-[0_10px_20px_rgba(139,92,246,0.3)]">STEP 02</div>
                <h3 className="text-2xl font-bold mb-5 mt-4 text-white uppercase tracking-tight">{t.s[1]}</h3>
                <p className="text-zinc-500 leading-relaxed text-lg">{t.d[1]}</p>
              </div>

              <div className="bg-zinc-900/40 p-12 rounded-[3rem] border border-white/5 relative group hover:border-purple-500/30 transition-all duration-500">
                <div className="absolute -top-6 left-10 px-5 py-2 bg-zinc-700 rounded-2xl text-[12px] font-black italic shadow-lg">STEP 03</div>
                <h3 className="text-2xl font-bold mb-5 mt-4 text-white uppercase tracking-tight">{t.s[2]}</h3>
                <p className="text-zinc-500 leading-relaxed text-lg">{t.d[2]}</p>
              </div>

            </div>
          </div>
        </div>

        {/* FOOTER */}
        <footer className="w-full py-24 text-center">
          <div className="w-20 h-[1px] bg-zinc-800 mx-auto mb-10"></div>
          <p className="text-zinc-600 text-[10px] tracking-[1em] uppercase font-bold">
            SyncSocial // Protocol 2026 // Global Node
          </p>
        </footer>

      </div>
    </div>
  );
}
