"use client";
import React, { useState } from 'react';

// Stabiele Logo Component
const Logo = ({ className }) => (
  <svg viewBox="0 0 128 128" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M64 128C99.3462 128 128 99.3462 128 64C128 28.6538 99.3462 0 64 0C28.6538 0 0 28.6538 0 64C0 99.3462 28.6538 128 64 128Z" fill="#2563EB"/>
    <path d="M40 64C40 50.7452 50.7452 40 64 40C77.2548 40 88 50.7452 88 64C88 77.2548 77.2548 88 64 88C50.7452 88 40 77.2548 40 64Z" fill="white"/>
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
          <Logo className="w-8 h-8" />
          <span className="font-bold text-xl tracking-tight">SyncSocial</span>
        </div>
        <div className="relative group">
          <button className="bg-slate-50 border border-slate-200 px-4 py-2 rounded-lg flex items-center gap-2 font-medium">
            🌐 {lang}
          </button>
          <div className="absolute right-0 mt-2 w-32 bg-white border border-slate-200 rounded-lg hidden group-hover:block shadow-xl z-50">
            {['EN', 'NL', 'ES', 'ZH'].map(l => (
              <button key={l} onClick={() => setLang(l)} className="w-full px-4 py-3 text-left hover:bg-slate-50 transition-colors font-semibold">{l}</button>
            ))}
          </div>
        </div>
      </nav>

      {/* HERO SECTIE */}
      <section className="py-24 px-6 text-center max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight text-slate-900">
          {t.hero}
        </h1>
        <p className="text-xl text-slate-600 mb-10 leading-relaxed">
          {t.sub}
        </p>
        
        <form onSubmit={handleSubmit} className="max-w-md mx-auto flex flex-col sm:flex-row gap-3">
          <input 
            type="email" 
            placeholder="Email" 
            className="flex-1 bg-slate-50 border border-slate-200 px-6 py-4 rounded-xl outline-none focus:border-blue-500 transition-all" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required 
          />
          <button type="submit" className="bg-blue-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-200">
            {t.btn}
          </button>
        </form>
        {status && <p className="mt-4 text-blue-600 font-bold">{status}</p>}
      </section>

      {/* FLOW SECTIE (HOW IT WORKS) */}
      
      <section className="py-24 bg-slate-50 border-y border-slate-100">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-16 text-center text-slate-900 uppercase tracking-widest">{t.flow}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            {/* Stap 1 */}
            <div>
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mx-auto mb-6 text-xl">1</div>
              <h3 className="text-xl font-bold mb-4">{t.s[0]}</h3>
              <p className="text-slate-500 leading-relaxed">{t.d[0]}</p>
            </div>
            {/* Stap 2 */}
            <div>
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mx-auto mb-6 text-xl">2</div>
              <h3 className="text-xl font-bold mb-4">{t.s[1]}</h3>
              <p className="text-slate-500 leading-relaxed">{t.d[1]}</p>
            </div>
            {/* Stap 3 */}
            <div>
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mx-auto mb-6 text-xl">3</div>
              <h3 className="text-xl font-bold mb-4">{t.s[2]}</h3>
              <p className="text-slate-500 leading-relaxed">{t.d[2]}</p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-16 text-center text-slate-400 text-sm font-medium tracking-wide">
        © 2026 SYNCSOCIAL AI - ALL RIGHTS RESERVED
      </footer>

    </div>
  );
}
