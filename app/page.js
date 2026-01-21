"use client";
import React, { useState } from 'react';
import Logo from "../components/Logo";

export default function Home() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");
  const [lang, setLang] = useState("EN");

  const content = {
    EN: {
      hero: "SyncSocial",
      sub: "Sync your content across all platforms with AI power.",
      placeholder: "Your email address",
      button: "Join Waitlist",
      flowTitle: "How it works",
      steps: ["Content Creation", "Smart Sync", "Auto Publish"],
      desc: ["Upload your video or text. AI understands the core.", "AI optimizes for TikTok, Insta, LinkedIn.", "Synced posting at the perfect time."]
    },
    NL: {
      hero: "SyncSocial",
      sub: "Synchroniseer je content over alle platforms met AI kracht.",
      placeholder: "Je e-mailadres",
      button: "Join Wachtlijst",
      flowTitle: "Hoe het werkt",
      steps: ["Content Creatie", "Smart Sync", "Auto Publish"],
      desc: ["Upload je video of tekst. AI begrijpt de kern.", "AI optimaliseert voor TikTok, Insta, LinkedIn.", "Gesynchroniseerd plaatsen op het beste moment."]
    },
    ES: {
      hero: "SyncSocial",
      sub: "Sincroniza tu contenido en todas las plataformas con IA.",
      placeholder: "Tu correo electrónico",
      button: "Unirse a la lista",
      flowTitle: "Cómo funciona",
      steps: ["Creación de Contenido", "Smart Sync", "Auto Publicar"],
      desc: ["Sube tu video o texto. La IA entiende la esencia.", "IA optimiza para TikTok, Insta, LinkedIn.", "Publicación sincronizada en el momento ideal."]
    },
    ZH: {
      hero: "SyncSocial",
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
    setStatus(msg[lang] || msg.EN);
    setTimeout(() => setStatus("Success!"), 1500);
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans overflow-x-hidden relative">
      
      {/* --- DYNAMISCH HEXAGON WEB EFFECT --- */}
      <style jsx global>{`
        @keyframes scan {
          0% { transform: translateY(-50%) translateX(-50%) rotate(0deg); }
          100% { transform: translateY(-50%) translateX(-50%) rotate(360deg); }
        }
        .hexagon-bg {
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='104' fill='none' stroke='%238B5CF6' stroke-opacity='0.15' stroke-width='1'%3E%3Cpath d='M30 0L60 17.3v34.7L30 69.3L0 52V17.3L30 0z'/%3E%3C/svg%3E");
          background-size: 60px 104px;
        }
        .glow-overlay {
          background: radial-gradient(circle at center, rgba(139, 92, 246, 0.15) 0%, transparent 70%);
          animation: scan 20s linear infinite;
        }
      `}</style>

      <div className="fixed inset-0 hexagon-bg z-0"></div>
      <div className="fixed inset-0 glow-overlay z-0 w-[200%] h-[200%] top-1/2 left-1/2"></div>
      <div className="fixed inset-0 bg-gradient-to-b from-[#050505] via-transparent to-[#050505] z-0"></div>

      {/* --- NAVIGATIE --- */}
      <nav className="relative z-20 flex justify-between items-center p-6 max-w-7xl mx-auto">
        <Logo className="w-10 h-10 drop-shadow-[0_0_8px_#8B5CF6]" />
        <div className="relative group">
          <button className="bg-gray-900/90 border border-gray-700 px-4 py-2 rounded-lg flex items-center gap-2 hover:border-[#FF00E4]">
            🌐 {lang}
          </button>
          <div className="absolute right-0 mt-2 w-32 bg-gray-900 border border-gray-700 rounded-lg hidden group-hover:block z-30">
            {['EN', 'NL', 'ES', 'ZH'].map((l) => (
              <button key={l} onClick={() => setLang(l)} className="w-full px-4 py-3 text-left hover:bg-[#8B5CF6]/20">{l}</button>
            ))}
          </div>
        </div>
      </nav>

      {/* --- HERO --- */}
      <section className="relative z-10 pt-24 pb-20 px-4 text-center">
        <h1 className="text-6xl md:text-8xl font-black mb-6 tracking-tighter">
          Sync<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF00E4] to-[#8B5CF6] drop-shadow-[0_0_15px_rgba(139,92,246,0.5)]">Social</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          {content[lang].sub}
        </p>

        {/* EMAIL AANMELDEN */}
        <form onSubmit={handleSubmit} className="max-w-md mx-auto mb-32">
          <div className="flex flex-col sm:row gap-3 p-2 bg-black/60 rounded-2xl border border-[#8B5CF6]/30 backdrop-blur-xl shadow-[0_0_30px_rgba(139,92,246,0.1)]">
            <input 
              type="email" 
              placeholder={content[lang].placeholder}
              className="flex-1 bg-transparent px-4 py-3 outline-none text-white placeholder:text-gray-600"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button className="bg-gradient-to-r from-[#FF00E4] to-[#8B5CF6] text-white px-8 py-3 rounded-xl font-bold hover:brightness-110 transition-all">
              {content[lang].button}
            </button>
          </div>
          {status && <p className="mt-4 text-[#FF00E4] font-bold">{status}</p>}
        </form>
      </section>

      {/* --- FLOW SECTIE (GEGARANDEERD AANWEZIG) --- */}
      <section className="relative z-10 py-32 px-4 bg-[#080808]/80 border-y border-[#8B5CF6]/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black mb-20 text-center tracking-tight uppercase italic">
            {content[lang].flowTitle}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {content[lang].steps.map((step, i) => (
              <div key={i} className="group relative p-10 bg-black/40 rounded-[2rem] border border-white/5 backdrop-blur-md hover:border-[#8B5CF6]/50 transition-all">
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-14 h-14 bg-gradient-to-br from-[#FF00E4] to-[#8B5CF6] rounded-2xl flex items-center justify-center font-black text-xl shadow-[0_0_20px_rgba(139,92,246,0.5)] group-hover:scale-110 transition-transform">
                  {i + 1}
                </div>
                <h3 className="text-2xl font-bold mb-4 mt-6 text-center">{step}</h3>
                <p className="text-gray-500 text-center leading-relaxed">{content[lang].desc[i]}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="relative z-10 py-20 text-center">
        <p className="text-gray-600 text-sm tracking-[0.3em] uppercase">© 2026 SyncSocial.ai // Protocol Enabled</p>
      </footer>
    </div>
  );
}
