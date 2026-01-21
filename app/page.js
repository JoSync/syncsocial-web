"use client";
import React, { useState } from 'react';

// HET CORRECTE LOGO: Infinity Sign met Gradient (Roze/Paars)
const Logo = ({ className }) => (
  <svg viewBox="0 0 100 50" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="logo-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" style={{ stopColor: "#FF00E4" }} />
        <stop offset="100%" style={{ stopColor: "#8B5CF6" }} />
      </linearGradient>
    </defs>
    <path 
      d="M25 35C16.7 35 10 28.3 10 20C10 11.7 16.7 5 25 5C30.5 5 35.5 8 38.2 12.5L61.8 27.5C64.5 32 69.5 35 75 35C83.3 35 90 28.3 90 20C90 11.7 83.3 5 75 5C69.5 5 64.5 8 61.8 12.5L38.2 27.5C35.5 32 30.5 35 25 35Z" 
      stroke="url(#logo-gradient)" 
      strokeWidth="8" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
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
      placeholder: "Your email address",
      btn: "Join Waitlist",
      flowTitle: "How it works",
      steps: ["Content Creation", "Smart Sync", "Auto Publish"],
      desc: ["Upload your video or text. AI understands the core.", "AI optimizes for TikTok, Insta, LinkedIn.", "Synced posting at the perfect time."]
    },
    NL: {
      hero: "SyncSocial",
      sub: "Synchroniseer je content over alle platforms met AI kracht.",
      placeholder: "Je e-mailadres",
      btn: "Join Wachtlijst",
      flowTitle: "Hoe het werkt",
      steps: ["Content Creatie", "Smart Sync", "Auto Publish"],
      desc: ["Upload je video of tekst. AI begrijpt de kern.", "AI optimaliseert voor TikTok, Insta, LinkedIn.", "Gesynchroniseerd plaatsen op het beste moment."]
    },
    ES: {
      hero: "SyncSocial",
      sub: "Sincroniza tu contenido en todas las plataformas con IA.",
      placeholder: "Tu correo electrónico",
      btn: "Unirse a la lista",
      flowTitle: "Cómo funciona",
      steps: ["Creación de Contenido", "Smart Sync", "Auto Publicar"],
      desc: ["Sube tu video o texto. La IA entiende la esencia.", "IA optimiza para TikTok, Insta, LinkedIn.", "Publicación sincronizada en el momento ideal."]
    },
    ZH: {
      hero: "SyncSocial",
      sub: "利用 AI 力量同步您的所有平台内容。",
      placeholder: "您的电子邮件地址",
      btn: "加入候补名单",
      flowTitle: "工作原理",
      steps: ["内容创作", "智能同步", "自动发布"],
      desc: ["上传您的视频或文本。AI 深入理解核心内容。", "AI 为 TikTok, Instagram, LinkedIn 优化内容。", "在最佳时间自动同步发布。"]
    }
  };

  const t = translations[lang];

  const handleSubmit = (e) => {
    e.preventDefault();
    const loading = { EN: "Sending...", NL: "Verzenden...", ES: "Enviando...", ZH: "发送中..." };
    const success = { EN: "Success! You are on the list.", NL: "Bedankt! Je staat op de lijst.", ES: "¡Gracias!", ZH: "谢谢！" };
    
    setStatus(loading[lang]);
    
    // Simulatie van de flow die we hadden
    setTimeout(() => {
      setStatus(success[lang]);
      setEmail("");
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-purple-100 selection:text-purple-900">
      
      {/* --- NAVIGATIE --- */}
      <nav className="flex justify-between items-center p-6 max-w-7xl mx-auto border-b border-slate-100">
        <div className="flex items-center gap-3">
          <Logo className="w-16 h-10" />
          <span className="font-extrabold text-2xl tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-[#FF00E4] to-[#8B5CF6]">
            SyncSocial
          </span>
        </div>
        
        <div className="relative group">
          <button className="bg-slate-50 border border-slate-200 px-4 py-2 rounded-lg flex items-center gap-2 font-bold text-slate-600 hover:bg-slate-100 transition-all">
            🌐 {lang}
          </button>
          <div className="absolute right-0 mt-2 w-32 bg-white border border-slate-200 rounded-xl hidden group-hover:block shadow-xl z-50 overflow-hidden">
            {['EN', 'NL', 'ES', 'ZH'].map(l => (
              <button 
                key={l} 
                onClick={() => setLang(l)} 
                className="w-full px-4 py-3 text-left hover:bg-purple-50 hover:text-purple-600 transition-colors font-bold text-sm"
              >
                {l}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* --- HERO SECTIE --- */}
      <section className="py-24 px-6 text-center max-w-4xl mx-auto">
        <h1 className="text-6xl md:text-8xl font-black mb-6 tracking-tight text-slate-900">
          Sync<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF00E4] to-[#8B5CF6]">Social</span>
        </h1>
        <p className="text-xl md:text-2xl text-slate-500 mb-12 leading-relaxed max-w-2xl mx-auto">
          {t.sub}
        </p>
        
        {/* EMAIL INPUT (Met de Gradients die we hadden) */}
        <form onSubmit={handleSubmit} className="max-w-md mx-auto flex flex-col sm:flex-row gap-3">
          <input 
            type="email" 
            placeholder={t.placeholder}
            className="flex-1 bg-slate-50 border-2 border-slate-200 px-6 py-4 rounded-2xl outline-none focus:border-[#FF00E4] focus:bg-white transition-all text-lg font-medium text-slate-800" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required 
          />
          <button type="submit" className="bg-gradient-to-r from-[#FF00E4] to-[#8B5CF6] text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-lg shadow-purple-200 hover:brightness-110 hover:shadow-purple-300 hover:scale-105 transition-all">
            {t.btn}
          </button>
        </form>
        {status && <p className="mt-6 text-[#FF00E4] font-bold text-lg animate-pulse">{status}</p>}
      </section>

      {/* --- FLOW SECTIE --- */}
      
      <section className="py-24 bg-slate-50 border-y border-slate-200">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-black mb-20 text-center text-slate-900 uppercase tracking-widest">{t.flowTitle}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            
            {/* Stap 1 */}
            <div className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-gradient-to-tr from-[#FF00E4] to-[#8B5CF6] text-white rounded-2xl flex items-center justify-center font-black text-2xl mb-6 shadow-lg shadow-purple-100">1</div>
              <h3 className="text-2xl font-bold mb-4 text-slate-900">{t.steps[0]}</h3>
              <p className="text-slate-500 leading-relaxed font-medium">{t.desc[0]}</p>
            </div>

            {/* Stap 2 */}
            <div className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-gradient-to-tr from-[#FF00E4] to-[#8B5CF6] text-white rounded-2xl flex items-center justify-center font-black text-2xl mb-6 shadow-lg shadow-purple-100">2</div>
              <h3 className="text-2xl font-bold mb-4 text-slate-900">{t.steps[1]}</h3>
              <p className="text-slate-500 leading-relaxed font-medium">{t.desc[1]}</p>
            </div>

            {/* Stap 3 */}
            <div className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-gradient-to-tr from-[#FF00E4] to-[#8B5CF6] text-white rounded-2xl flex items-center justify-center font-black text-2xl mb-6 shadow-lg shadow-purple-100">3</div>
              <h3 className="text-2xl font-bold mb-4 text-slate-900">{t.steps[2]}</h3>
              <p className="text-slate-500 leading-relaxed font-medium">{t.desc[2]}</p>
            </div>

          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="py-20 text-center">
        <p className="text-slate-400 font-bold uppercase tracking-[0.2em] text-xs">
          © 2026 SyncSocial AI
        </p>
      </footer>

    </div>
  );
}
