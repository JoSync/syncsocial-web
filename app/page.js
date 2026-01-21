"use client";
import React, { useState } from 'react';

// De oorspronkelijke blauwe logo-badge
const Logo = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className} xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="50" fill="#2563EB" />
    <path d="M30 50 Q50 30 70 50 Q50 70 30 50" stroke="white" strokeWidth="8" fill="none" strokeLinecap="round" />
  </svg>
);

export default function Home() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");
  const [lang, setLang] = useState("EN");

  const translations = {
    EN: {
      hero: "SyncSocial",
      sub: "Sync your content across all platforms with AI power.",
      placeholder: "Enter your email",
      btn: "Join Waitlist",
      flowTitle: "How It Works",
      steps: ["Content Creation", "Smart Sync", "Auto Publish"],
      desc: ["Upload video or text. AI understands the core.", "AI optimizes for all platforms.", "Synced posting at the perfect time."]
    },
    NL: {
      hero: "SyncSocial",
      sub: "Synchroniseer je content over alle platforms met AI kracht.",
      placeholder: "Voer je email in",
      btn: "Join Wachtlijst",
      flowTitle: "Hoe Het Werkt",
      steps: ["Content Creatie", "Smart Sync", "Auto Publish"],
      desc: ["Upload video of tekst. AI begrijpt de kern.", "AI optimaliseert voor elk platform.", "Gesynchroniseerd plaatsen op het juiste moment."]
    },
    ES: {
      hero: "SyncSocial",
      sub: "Sincroniza tu contenido en todas las plataformas con IA.",
      placeholder: "Tu correo electrónico",
      btn: "Unirse",
      flowTitle: "Cómo Funciona",
      steps: ["Creación", "Smart Sync", "Auto Publicar"],
      desc: ["Sube video o texto. La IA entiende la esencia.", "IA optimiza para redes sociales.", "Publicación sincronizada ideal."]
    },
    ZH: {
      hero: "SyncSocial",
      sub: "利用 AI 力量同步您的所有平台内容。",
      placeholder: "您的电子邮件地址",
      btn: "加入候补名单",
      flowTitle: "工作原理",
      steps: ["内容创作", "智能同步", "自动发布"],
      desc: ["上传视频或文本。AI 深入理解核心。", "AI 为所有平台优化。", "在最佳时间自动同步发布。"]
    }
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
        <div className="flex items-center gap-3">
          <Logo className="w-10 h-10" />
          <span className="font-bold text-2xl text-blue-600 tracking-tight">SyncSocial</span>
        </div>
        
        {/* TAAL DROPDOWN */}
        <div className="relative group">
          <button className="bg-slate-50 border border-slate-200 px-4 py-2 rounded-lg flex items-center gap-2 font-semibold text-slate-600 hover:bg-slate-100 transition-all">
            🌐 {lang}
          </button>
          <div className="absolute right-0 mt-2 w-32 bg-white border border-slate-200 rounded-xl hidden group-hover:block shadow-2xl z-50 overflow-hidden">
            {['EN', 'NL', 'ES', 'ZH'].map(l => (
              <button 
                key={l} 
                onClick={() => setLang(l)} 
                className="w-full px-4 py-3 text-left hover:bg-blue-50 hover:text-blue-600 transition-colors font-bold text-sm"
              >
                {l}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* HERO SECTIE */}
      <section className="py-24 px-6 text-center max-w-4xl mx-auto">
        <h1 className="text-6xl md:text-7xl font-black mb-6 text-slate-900 tracking-tight">
          {t.hero}
        </h1>
        <p className="text-xl md:text-2xl text-slate-500 mb-12 leading-relaxed">
          {t.sub}
        </p>
        
        {/* EMAIL FORMULIER */}
        <form onSubmit={handleSubmit} className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
          <input 
            type="email" 
            placeholder={t.placeholder}
            className="flex-1 bg-slate-50 border-2 border-slate-100 px-6 py-4 rounded-2xl outline-none focus:border-blue-500 focus:bg-white transition-all text-lg" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required 
          />
          <button type="submit" className="bg-blue-600 text-white px-10 py-4 rounded-2xl font-bold text-lg hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-200 transition-all transform active:scale-95">
            {t.btn}
          </button>
        </form>
        {status && <p className="mt-6 text-blue-600 font-black text-lg animate-bounce">{status}</p>}
      </section>

      {/* FLOW SECTIE (HOW IT WORKS) */}
      
      <section className="py-24 bg-slate-50 border-y border-slate-200">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-black mb-20 text-center text-slate-900 uppercase tracking-[0.2em]">{t.flowTitle}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {/* Stap 1 */}
            <div className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-slate-100">
              <div className="w-14 h-14 bg-blue-600 text-white rounded-2xl flex items-center justify-center font-black text-2xl mb-8 shadow-lg shadow-blue-200">1</div>
              <h3 className="text-2xl font-bold mb-4 text-slate-900">{t.steps[0]}</h3>
              <p className="text-slate-500 leading-relaxed text-lg">{t.desc[0]}</p>
            </div>
            {/* Stap 2 */}
            <div className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-slate-100">
              <div className="w-14 h-14 bg-blue-600 text-white rounded-2xl flex items-center justify-center font-black text-2xl mb-8 shadow-lg shadow-blue-200">2</div>
              <h3 className="text-2xl font-bold mb-4 text-slate-900">{t.steps[1]}</h3>
              <p className="text-slate-500 leading-relaxed text-lg">{t.desc[1]}</p>
            </div>
            {/* Stap 3 */}
            <div className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-slate-100">
              <div className="w-14 h-14 bg-blue-600 text-white rounded-2xl flex items-center justify-center font-black text-2xl mb-8 shadow-lg shadow-blue-200">3</div>
              <h3 className="text-2xl font-bold mb-4 text-slate-900">{t.steps[2]}</h3>
              <p className="text-slate-500 leading-relaxed text-lg">{t.desc[2]}</p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-20 text-center text-slate-400 font-bold uppercase tracking-[0.4em] text-xs">
        © 2026 SYNCSOCIAL AI - ALL RIGHTS RESERVED
      </footer>

    </div>
  );
}
