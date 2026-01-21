"use client";
import React, { useState } from 'react';
import Logo from "../components/Logo";

export default function Home() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");
  const [lang, setLang] = useState("EN");

  const content = {
    EN: {
      hero: "Future of Social Media",
      sub: "Sync your content across all platforms with AI power.",
      placeholder: "Your email address",
      button: "Join Waitlist",
      flowTitle: "How it works",
      steps: ["Content Creation", "Smart Sync", "Auto Publish"],
      desc: ["Upload your video or text. AI understands the core.", "AI optimizes for TikTok, Insta, LinkedIn.", "Synced posting at the perfect time."]
    },
    NL: {
      hero: "Toekomst van Social Media",
      sub: "Synchroniseer je content over alle platforms met AI kracht.",
      placeholder: "Je e-mailadres",
      button: "Join Wachtlijst",
      flowTitle: "Hoe het werkt",
      steps: ["Content Creatie", "Smart Sync", "Auto Publish"],
      desc: ["Upload je video of tekst. AI begrijpt de kern.", "AI optimaliseert voor TikTok, Insta, LinkedIn.", "Gesynchroniseerd plaatsen op het beste moment."]
    },
    ES: {
      hero: "Futuro de Redes Sociales",
      sub: "Sincroniza tu contenido en todas las plataformas con IA.",
      placeholder: "Tu correo electrónico",
      button: "Unirse a la lista",
      flowTitle: "Cómo funciona",
      steps: ["Creación de Contenido", "Smart Sync", "Auto Publicar"],
      desc: ["Sube tu video o texto. La IA entiende la esencia.", "IA optimiza para TikTok, Insta, LinkedIn.", "Publicación sincronizada en el momento ideal."]
    },
    ZH: {
      hero: "社交媒体的未来",
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
    const msg = { NL: "Verzenden...", ES: "Enviando...", ZH: "发送中...", EN: "Sending..." };
    const thanks = { NL: "Bedankt!", ES: "¡Gracias!", ZH: "谢谢！", EN: "Success!" };
    setStatus(msg[lang] || msg.EN);
    setTimeout(() => setStatus(thanks[lang] || thanks.EN), 1500);
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans overflow-x-hidden relative">
      
      {/* --- VERBETERDE HEXAGON ACHTERGROND --- */}
      <div className="absolute inset-0 z-0" 
           style={{ 
             backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='56' height='100' fill='none' stroke='%23ffffff' stroke-opacity='0.07' stroke-width='1'%3E%3Cpath d='M28 0L56 16.5V49.5L28 66L0 49.5V16.5L28 0ZM28 100L56 83.5V50.5L28 34L0 50.5V83.5L28 100Z'/%3E%3C/svg%3E")`,
             backgroundSize: '56px 100px'
           }}>
      </div>
      
      {/* Gradient overlay voor diepte */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/50 via-transparent to-[#050505] z-0"></div>

      {/* --- NAVIGATIE MET TAAL DROPDOWN --- */}
      <nav className="relative z-20 flex justify-between items-center p-6 max-w-7xl mx-auto">
        <Logo className="w-10 h-10" />
        <div className="relative group">
          <button className="bg-gray-900/90 border border-gray-700 px-4 py-2 rounded-lg flex items-center gap-2 hover:border-[#FF00E4] transition-all">
            🌐 {lang}
          </button>
          <div className="absolute right-0 mt-2 w-32 bg-gray-900 border border-gray-700 rounded-lg hidden group-hover:block z-30 shadow-2xl">
            {['EN', 'NL', 'ES', 'ZH'].map((l) => (
              <button key={l} onClick={() => setLang(l)} className="w-full px-4 py-3 text-left hover:bg-gradient-to-r from-[#FF00E4] to-[#8B5CF6] transition-colors first:rounded-t-lg last:rounded-b-lg">{l}</button>
            ))}
          </div>
        </div>
      </nav>

      {/* --- HERO SECTIE --- */}
      <section className="relative z-10 pt-20 pb-20 px-4 text-center">
        <h1 className="text-6xl md:text-8xl font-black mb-6 tracking-tighter leading-none">
          Sync<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF00E4] to-[#8B5CF6]">Social</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          {content[lang].sub}
        </p>

        {/* EMAIL AANMELDEN */}
        <form onSubmit={handleSubmit} className="max-w-md mx-auto mb-24">
          <div className="flex flex-col sm:flex-row gap-3 p-2 bg-gray-900/60 rounded-2xl border border-white/10 backdrop-blur-xl">
            <input 
              type="email" 
              placeholder={content[lang].placeholder}
              className="flex-1 bg-transparent px-4 py-3 outline-none text-white placeholder:text-gray-600"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button className="bg-gradient-to-r from-[#FF00E4] to-[#8B5CF6] text-white px-8 py-3 rounded-xl font-bold hover:scale-105 transition-all shadow-[0_0_20px_rgba(255,0,228,0.4)]">
              {content[lang].button}
            </button>
          </div>
          {status && <p className="mt-4 text-[#FF00E4] font-bold animate-pulse">{status}</p>}
        </form>
      </section>

      {/* --- FLOW SECTIE (ZICHTBAAR GEMAAKT) --- */}
      <section className="relative z-10 py-24 px-4 bg-white/[0.02] border-y border-white/5">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black mb-16 text-center tracking-tight">{content[lang].flowTitle}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {content[lang].steps.map((step, i) => (
              <div key={i} className="relative p-10 bg-gray-900/80 rounded-[2.5rem] border border-white/10 backdrop-blur-md hover:border-[#8B5CF6] transition-all group">
                <div className="absolute -top-5 left-10 w-12 h-12 bg-gradient-to-tr from-[#FF00E4] to-[#8B5CF6] rounded-2xl flex items-center justify-center font-black shadow-lg shadow-purple-500/40 rotate-12 group-hover:rotate-0 transition-transform">
                  {i + 1}
                </div>
                <h3 className="text-2xl font-bold mb-4 mt-2">{step}</h3>
                <p className="text-gray-400 leading-relaxed">{content[lang].desc[i]}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="relative z-10 py-16 text-center">
        <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-gray-700 to-transparent mx-auto mb-8"></div>
        <p className="text-gray-500 text-sm tracking-widest uppercase">© 2026 SyncSocial.ai — Cyber-S Protocol</p>
      </footer>
    </div>
  );
}
