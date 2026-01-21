"use client";
import React, { useState } from 'react';
import Logo from "../components/Logo";

export default function Home() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");
  const [lang, setLang] = useState("EN");

  const content = {
    EN: {
      sub: "Sync your content across all platforms with AI power.",
      placeholder: "Your email address",
      button: "Join Waitlist",
      flowTitle: "HOW IT WORKS",
      steps: ["Content Creation", "Smart Sync", "Auto Publish"],
      desc: ["Upload your video or text. AI understands the core.", "AI optimizes for TikTok, Insta, LinkedIn.", "Synced posting at the perfect time."]
    },
    NL: {
      sub: "Synchroniseer je content over alle platforms met AI kracht.",
      placeholder: "Je e-mailadres",
      button: "Join Wachtlijst",
      flowTitle: "HOE HET WERKT",
      steps: ["Content Creatie", "Smart Sync", "Auto Publish"],
      desc: ["Upload je video of tekst. AI begrijpt de kern.", "AI optimaliseert voor TikTok, Insta, LinkedIn.", "Gesynchroniseerd plaatsen op het beste moment."]
    },
    ES: {
      sub: "Sincroniza tu contenido en todas las plataformas con IA.",
      placeholder: "Tu correo electrónico",
      button: "Unirse a la lista",
      flowTitle: "CÓMO FUNCIONA",
      steps: ["Creación de Contenido", "Smart Sync", "Auto Publicar"],
      desc: ["Sube tu video o texto. La IA entiende la esencia.", "IA optimiza para TikTok, Insta, LinkedIn.", "Publicación sincronizada en el momento ideal."]
    },
    ZH: {
      sub: "利用 AI 力量同步您的所有平台内容。",
      placeholder: "您的电子邮件地址",
      button: "加入候补名单",
      flowTitle: "工作原理",
      steps: ["内容创作", "智能同步", "自动发布"],
      desc: ["上传您的视频或文本。AI 深入理解核心内容。", "AI 为 TikTok, Instagram, LinkedIn 优化内容。", "在最佳时间自动同步发布。"]
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus(lang === "NL" ? "Verzenden..." : "Sending...");
    setTimeout(() => setStatus("Success!"), 1500);
  };

  return (
    <div className="min-h-screen bg-black text-white relative overflow-x-hidden">
      
      {/* --- ACHTERGROND EFFECTEN --- */}
      {/* 1. De Hexagons */}
      <div className="fixed inset-0 opacity-20 z-0" 
           style={{ 
             backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='28' height='49' viewBox='0 0 28 49'%3E%3Cpath d='M14 0L28 8V24.5L14 32.5L0 24.5V8L14 0Z' fill='none' stroke='%238B5CF6' stroke-width='0.5'/%3E%3C/svg%3E")`,
             backgroundSize: '56px 98px'
           }}>
      </div>

      {/* 2. De Paarse Gloed (Galaxy effect) */}
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-600/20 rounded-full blur-[120px] z-0 pointer-events-none"></div>

      {/* --- NAVIGATIE --- */}
      <nav className="relative z-50 flex justify-between items-center p-6 max-w-7xl mx-auto font-sans">
        <Logo className="w-10 h-10" />
        <div className="relative group">
          <button className="bg-white/5 border border-white/10 px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-white/10 transition-all">
            🌐 {lang}
          </button>
          <div className="absolute right-0 mt-2 w-32 bg-zinc-900 border border-white/10 rounded-lg hidden group-hover:block shadow-2xl overflow-hidden">
            {['EN', 'NL', 'ES', 'ZH'].map((l) => (
              <button key={l} onClick={() => setLang(l)} className="w-full px-4 py-3 text-left hover:bg-purple-600 transition-colors">{l}</button>
            ))}
          </div>
        </div>
      </nav>

      {/* --- HERO SECTIE --- */}
      <section className="relative z-10 pt-20 pb-20 px-4 text-center">
        <h1 className="text-6xl md:text-8xl font-black mb-6 tracking-tighter italic uppercase">
          Sync<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF00E4] to-[#8B5CF6]">Social</span>
        </h1>
        <p className="text-xl md:text-2xl text-zinc-400 max-w-2xl mx-auto mb-10">
          {content[lang].sub}
        </p>

        {/* EMAIL AANMELDEN */}
        <form onSubmit={handleSubmit} className="max-w-md mx-auto mb-20">
          <div className="flex flex-col sm:flex-row gap-3 p-2 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-xl shadow-2xl">
            <input 
              type="email" 
              placeholder={content[lang].placeholder}
              className="flex-1 bg-transparent px-4 py-3 outline-none text-white placeholder:text-zinc-600"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button className="bg-gradient-to-r from-[#FF00E4] to-[#8B5CF6] text-white px-8 py-3 rounded-xl font-bold hover:brightness-125 transition-all shadow-lg shadow-purple-500/20">
              {content[lang].button}
            </button>
          </div>
          {status && <p className="mt-4 text-[#FF00E4] font-bold">{status}</p>}
        </form>
      </section>

      {/* --- FLOW SECTIE --- */}
      <section className="relative z-10 w-full py-24 bg-zinc-900/50 border-y border-purple-500/20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-black mb-16 text-center tracking-[0.2em] text-white">
            {content[lang].flowTitle}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Stap 1 */}
            <div className="p-8 bg-black/60 rounded-3xl border border-white/5 hover:border-purple-500/50 transition-all">
               <div className="w-12 h-12 bg-gradient-to-tr from-[#FF00E4] to-[#8B5CF6] rounded-xl flex items-center justify-center font-black mb-6 shadow-lg shadow-purple-500/40">1</div>
               <h3 className="text-xl font-bold mb-3">{content[lang].steps[0]}</h3>
               <p className="text-zinc-500">{content[lang].desc[0]}</p>
            </div>
            {/* Stap 2 */}
            <div className="p-8 bg-black/60 rounded-3xl border border-white/5 hover:border-purple-500/50 transition-all">
               <div className="w-12 h-12 bg-gradient-to-tr from-[#FF00E4] to-[#8B5CF6] rounded-xl flex items-center justify-center font-black mb-6 shadow-lg shadow-purple-500/40">2</div>
               <h3 className="text-xl font-bold mb-3">{content[lang].steps[1]}</h3>
               <p className="text-zinc-500">{content[lang].desc[1]}</p>
            </div>
            {/* Stap 3 */}
            <div className="p-8 bg-black/60 rounded-3xl border border-white/5 hover:border-purple-500/50 transition-all">
               <div className="w-12 h-12 bg-gradient-to-tr from-[#FF00E4] to-[#8B5CF6] rounded-xl flex items-center justify-center font-black mb-6 shadow-lg shadow-purple-500/40">3</div>
               <h3 className="text-xl font-bold mb-3">{content[lang].steps[2]}</h3>
               <p className="text-zinc-500">{content[lang].desc[2]}</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="relative z-10 py-20 text-center">
        <p className="text-zinc-600 text-xs tracking-[0.4em] uppercase">© 2026 SyncSocial.ai // AI Protocol</p>
      </footer>
    </div>
  );
}
