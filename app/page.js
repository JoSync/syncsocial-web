"use client";
import React, { useState } from 'react';
import Logo from "../components/Logo";

export default function Home() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");
  const [lang, setLang] = useState("EN"); // Standaard Engels

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
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus(lang === "NL" ? "Verzenden..." : lang === "ES" ? "Enviando..." : "Sending...");
    setTimeout(() => setStatus(lang === "NL" ? "Bedankt!" : lang === "ES" ? "¡Gracias!" : "Success!"), 1500);
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans overflow-x-hidden relative">
      
      {/* --- DYNAMISCHE HEXAGON / GALAXY ACHTERGROND --- */}
      <div className="absolute inset-0 z-0 opacity-20" 
           style={{ 
             backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='50' height='86.6' viewBox='0 0 50 86.6'%3E%3Cpath d='M25 86.6L0 72.15V43.3L25 28.85L50 43.3V72.15L25 86.6ZM25 57.7L12.5 50.5V36.1L25 28.9L37.5 36.1V50.5L25 57.7Z' fill='%3C8B5CF6' fill-opacity='0.4'/%3E%3C/svg%3E")`,
             backgroundSize: '80px 138px'
           }}>
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050505] to-[#050505] z-0"></div>

      {/* --- NAVIGATIE MET TAAL DROPDOWN --- */}
      <nav className="relative z-20 flex justify-between items-center p-6 max-w-7xl mx-auto">
        <Logo className="w-10 h-10" />
        <div className="relative group">
          <button className="bg-gray-900/80 border border-gray-700 px-4 py-2 rounded-lg flex items-center gap-2 hover:border-[#FF00E4] transition-colors">
            🌐 {lang}
          </button>
          <div className="absolute right-0 mt-2 w-32 bg-gray-900 border border-gray-700 rounded-lg hidden group-hover:block overflow-hidden">
            {['EN', 'NL', 'ES'].map((l) => (
              <button key={l} onClick={() => setLang(l)} className="w-full px-4 py-2 text-left hover:bg-[#8B5CF6] transition-colors">{l}</button>
            ))}
          </div>
        </div>
      </nav>

      {/* --- HERO SECTIE --- */}
      <section className="relative z-10 pt-12 pb-24 px-4 text-center">
        <h1 className="text-6xl md:text-8xl font-black mb-6 tracking-tighter">
          Sync<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF00E4] to-[#8B5CF6]">Social</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          {content[lang].sub}
        </p>

        {/* EMAIL AANMELDEN */}
        <form onSubmit={handleSubmit} className="max-w-md mx-auto mb-20">
          <div className="flex flex-col sm:flex-row gap-3 p-2 bg-gray-900/50 rounded-2xl border border-gray-800 backdrop-blur-md">
            <input 
              type="email" 
              placeholder={content[lang].placeholder}
              className="flex-1 bg-transparent px-4 py-3 outline-none text-white"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button className="bg-gradient-to-r from-[#FF00E4] to-[#8B5CF6] text-white px-8 py-3 rounded-xl font-bold hover:scale-105 transition-all shadow-lg shadow-purple-500/20">
              {content[lang].button}
            </button>
          </div>
          {status && <p className="mt-4 text-[#FF00E4] font-medium animate-pulse">{status}</p>}
        </form>
      </section>

      {/* --- FLOW SECTIE (HERSTELD & VERBETERD) --- */}
      <section className="relative z-10 py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-16 text-center">{content[lang].flowTitle}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {content[lang].steps.map((step, i) => (
              <div key={i} className="relative p-8 bg-gray-900/40 rounded-3xl border border-gray-800 backdrop-blur-sm group hover:border-[#8B5CF6] transition-colors">
                <div className="absolute -top-4 -left-4 w-10 h-10 bg-gradient-to-r from-[#FF00E4] to-[#8B5CF6] rounded-full flex items-center justify-center font-bold text-sm">
                  {i + 1}
                </div>
                <h3 className="text-xl font-bold mb-4">{step}</h3>
                <p className="text-gray-500">{content[lang].desc[i]}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="relative z-10 py-12 text-center border-t border-gray-900">
        <p className="text-gray-600 text-sm">© 2026 SyncSocial.ai — Cyber-S Protocol</p>
      </footer>
    </div>
  );
}
