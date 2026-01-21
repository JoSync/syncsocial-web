"use client";
import React, { useState } from 'react';

// Het ROZE INFINITY LOGO (zoals afgesproken in de witte template)
const Logo = ({ className }) => (
  <svg viewBox="0 0 128 128" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M40 44C25 44 15 54 15 64C15 74 25 84 40 84C55 84 73 44 88 44C103 44 113 54 113 64C113 74 103 84 88 84C73 84 55 44 40 44Z" 
          stroke="#FF00E4" strokeWidth="12" strokeLinecap="round" />
  </svg>
);

export default function Home() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");
  const [lang, setLang] = useState("EN");

  const translations = {
    EN: { hero: "SyncSocial", sub: "Sync your content across all platforms with AI power.", btn: "Join Waitlist", flow: "HOW IT WORKS", s: ["Content Creation", "Smart Sync", "Auto Publish"], d: ["Upload video or text. AI understands the core.", "AI optimizes for all platforms.", "Synced posting at the perfect time."] },
    NL: { hero: "SyncSocial", sub: "Synchroniseer je content over alle platforms met AI kracht.", btn: "Join Wachtlijst", flow: "HOE HET WERKT", s: ["Content Creatie", "Smart Sync", "Auto Publish"], d: ["Upload video of tekst. AI begrijpt de kern.", "AI optimaliseert voor elk platform.", "Gesynchroniseerd plaatsen op het juiste moment."] },
    ES: { hero: "SyncSocial", sub: "Sincroniza tu contenido en todas las plataformas con IA.", btn: "Unirse", flow: "CÓMO FUNCIONA", s: ["Creación", "Smart Sync", "Auto Publicar"], d: ["Sube video o texto. La IA entiende la esencia.", "IA optimiza para redes sociales.", "Publicación sincronizada ideal."] },
    ZH: { hero: "SyncSocial", sub: "利用 AI 力量同步您的所有平台内容。", btn: "加入候补名单", flow: "工作原理", s: ["内容创作", "智能同步", "自动发布"], d: ["上传视频或文本。AI 理解核心。", "AI 为所有平台优化。", "在最佳时间自动同步发布。"] }
  };

  const t = translations[lang];

  const handleSubmit = (e) => {
    e.preventDefault();
    const loading = { EN: "Sending...", NL: "Verzenden...", ES: "Enviando...", ZH: "发送中..." };
    const success = { EN: "Success!", NL: "Bedankt!", ES: "¡Gracias!", ZH: "谢谢！" };
    setStatus(loading[lang]);
    setTimeout(() => {
      setStatus(success[lang]);
      setEmail("");
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans">
      
      {/* NAVIGATIE */}
      <nav className="flex justify-between items-center p-6 max-w-7xl mx-auto border-b border-slate-100">
        <div className="flex items-center gap-2">
          <Logo className="w-10 h-10" />
          <span className="font-bold text-2xl tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-[#FF00E4] to-[#8B5CF6]">SyncSocial</span>
        </div>
        <div className="relative group">
          <button className="bg-slate-50 border border-slate-200 px-4 py-2 rounded-lg flex items-center gap-2 font-semibold">
            🌐 {lang}
          </button>
          <div className="absolute right-0 mt-2 w-32 bg-white border border-slate-200 rounded-xl hidden group-hover:block shadow-2xl z-50 overflow-hidden">
            {['EN', 'NL', 'ES', 'ZH'].map(l => (
              <button key={l} onClick={() => setLang(l)} className="w-full px-4 py-3 text-left hover:bg-slate-50 transition-colors font-bold text-sm uppercase">{l}</button>
            ))}
          </div>
        </div>
      </nav>

      {/* HERO SECTIE */}
      <section className="py-24 px-6 text-center max-w-4xl mx-auto">
        <h1 className="text-6xl md:text-8xl font-black mb-6 tracking-tight text-slate-900 uppercase italic">
          {t.hero}
        </h1>
        <p className="text-xl md:text-2xl text-slate-500 mb-12 leading-relaxed">
          {t.sub}
        </p>
        
        <form onSubmit={handleSubmit} className="max-w-md mx-auto flex flex-col sm:flex-row gap-3">
          <input 
            type="email" 
            placeholder="Email" 
            className="flex-1 bg-slate-50 border-2 border-slate-100 px-6 py-4 rounded-2xl outline-none focus:border-[#FF00E4] transition-all text-lg" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required 
          />
          <button type="submit" className="bg-gradient-to-r from-[#FF00E4] to-[#8B5CF6] text-white px-10 py-4 rounded-2xl font-black uppercase tracking-widest shadow-lg shadow-purple-200 hover:brightness-110 active:scale-95 transition-all">
            {t.btn}
          </button>
        </form>
        {status && <p className="mt-6 text-[#FF00E4] font-black text-lg">{status}</p>}
      </section>

      {/* FLOW SECTIE (HOW IT WORKS) */}
      <section className="py-24 bg-slate-50 border-y border-slate-200">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-black mb-20 text-center text-slate-900 uppercase tracking-widest italic">{t.flow}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Stap 1 */}
            <div className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-slate-200 relative">
              <div className="w-12 h-12 bg-[#FF00E4] text-white rounded-xl flex items-center justify-center font-black text-xl mb-6 shadow-md shadow-pink-100">1</div>
              <h3 className="text-2xl font-bold mb-4 text-slate-900">{t.s[0]}</h3>
              <p className="text-slate-500 leading-relaxed">{t.d[0]}</p>
            </div>
            {/* Stap 2 */}
            <div className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-slate-200 relative">
              <div className="w-12 h-12 bg-[#8B5CF6] text-white rounded-xl flex items-center justify-center font-black text-xl mb-6 shadow-md shadow-purple-100">2</div>
              <h3 className="text-2xl font-bold mb-4 text-slate-900">{t.s[1]}</h3>
              <p className="text-slate-500 leading-relaxed">{t.d[1]}</p>
            </div>
            {/* Stap 3 */}
            <div className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-slate-200 relative">
              <div className="w-12 h-12 bg-slate-800 text-white rounded-xl flex items-center justify-center font-black text-xl mb-6 shadow-md shadow-slate-200">3</div>
              <h3 className="text-2xl font-bold mb-4 text-slate-900">{t.s[2]}</h3>
              <p className="text-slate-500 leading-relaxed">{t.d[2]}</p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-20 text-center text-slate-400 font-bold uppercase tracking-[0.5em] text-xs">
        © 2026 SYNCSOCIAL AI - ALL RIGHTS RESERVED
      </footer>

    </div>
  );
}
