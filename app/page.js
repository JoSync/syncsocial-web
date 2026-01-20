"use client";
import React, { useState } from 'react';
import Logo from "../components/Logo";

export default function Home() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Verzenden...");
    // Hier komt straks je Resend koppeling
    setTimeout(() => setStatus("Bedankt! Je staat op de lijst."), 1500);
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-[#FF00E4]/30">
      
      {/* --- HERO SECTIE --- */}
      <section className="relative pt-20 pb-32 px-4 overflow-hidden">
        {/* Glow effect op de achtergrond */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#8B5CF6] opacity-10 blur-[120px] rounded-full"></div>
        
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="flex justify-center mb-8">
            <Logo className="w-24 h-24 drop-shadow-[0_0_15px_rgba(255,0,228,0.5)]" />
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black mb-6 tracking-tighter">
            Sync<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF00E4] to-[#8B5CF6]">Social</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            De toekomst van social media beheer. Synchroniseer je content met de kracht van AI.
          </p>

          {/* EMAIL AANMELDEN (Je originele functie) */}
          <form onSubmit={handleSubmit} className="max-w-md mx-auto mb-16">
            <div className="flex flex-col sm:flex-row gap-3 p-2 bg-gray-900/50 rounded-2xl border border-gray-800 backdrop-blur-sm">
              <input 
                type="email" 
                placeholder="Je e-mailadres" 
                className="flex-1 bg-transparent px-4 py-3 outline-none text-white placeholder:text-gray-600"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button className="bg-gradient-to-r from-[#FF00E4] to-[#8B5CF6] text-white px-8 py-3 rounded-xl font-bold hover:opacity-90 transition-all active:scale-95 shadow-lg shadow-purple-500/20">
                Join Waitlist
              </button>
            </div>
            {status && <p className="mt-4 text-[#FF00E4] font-medium">{status}</p>}
          </form>
        </div>
      </section>

      {/* --- FLOW SECTIE (De visuele flow die je had) --- */}
      <section className="py-24 bg-gradient-to-b from-transparent to-gray-900/20 border-y border-gray-900">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-16">Hoe het werkt</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
            
            {/* Stap 1 */}
            <div className="relative p-8 bg-gray-900/40 rounded-3xl border border-gray-800">
              <div className="w-12 h-12 bg-[#FF00E4] rounded-full flex items-center justify-center mb-6 mx-auto font-bold">1</div>
              <h3 className="text-xl font-bold mb-4">Content Creatie</h3>
              <p className="text-gray-500">Upload je video of tekst. Onze AI begrijpt direct de essentie.</p>
            </div>

            {/* Stap 2 */}
            <div className="relative p-8 bg-gray-900/40 rounded-3xl border border-gray-800">
              <div className="w-12 h-12 bg-[#8B5CF6] rounded-full flex items-center justify-center mb-6 mx-auto font-bold">2</div>
              <h3 className="text-xl font-bold mb-4">Smart Sync</h3>
              <p className="text-gray-500">AI optimaliseert je content voor elk platform: TikTok, Insta, LinkedIn.</p>
            </div>

            {/* Stap 3 */}
            <div className="relative p-8 bg-gray-900/40 rounded-3xl border border-gray-800">
              <div className="w-12 h-12 bg-white text-black rounded-full flex items-center justify-center mb-6 mx-auto font-bold">3</div>
              <h3 className="text-xl font-bold mb-4">Auto Publish</h3>
              <p className="text-gray-500">Alles wordt gesynchroniseerd geplaatst op het perfecte moment.</p>
            </div>

          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="py-12 border-t border-gray-900 text-center">
        <p className="text-gray-600 text-sm">© 2026 SyncSocial.ai — Powered by AI</p>
      </footer>
    </div>
  );
}
