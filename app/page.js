"use client";
import React, { useState, useEffect } from 'react';
import { Calendar, ShoppingBag, Globe, Zap, Infinity, ArrowRight, CheckCircle2, Clock, DollarSign, ChevronRight } from 'lucide-react';

export default function LandingPage() {
  const [lang, setLang] = useState('NL');
  const [currentSlide, setCurrentSlide] = useState(0);
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 3);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.includes('@')) {
      setIsSubmitted(true);
      // Hier kunnen we later de koppeling met een database maken
    }
  };

  const t = {
    NL: {
      hero: "Jouw leven, gesynchroniseerd met je community.",
      sub: "De eerste AI-gedreven agenda die content, commerce en community op één plek samenbrengt.",
      cta: "Claim vroege toegang",
      success: "Je staat op de lijst! We nemen snel contact met je op.",
      badge: "SyncSocial.ai — De toekomst van engagement"
    },
    EN: {
      hero: "Your life, synchronized with your community.",
      sub: "The first AI-powered calendar bridging content, commerce, and community.",
      cta: "Claim Early Access",
      success: "You're on the list! We'll be in touch soon.",
      badge: "SyncSocial.ai — The future of engagement"
    },
    CN: {
      hero: "同步你的社交生活",
      sub: "连接内容、商业与社交的AI日历。让你的粉丝与你同步。",
      cta: "立即加入等候名单",
      success: "您已加入等候名单！我们会尽快与您联系。",
      badge: "SyncSocial.ai — 社交参与的未来"
    }
  };

  const current = t[lang];

  return (
    <div className="min-h-screen bg-white text-slate-900 overflow-hidden font-sans">
      <nav className="flex justify-between items-center p-8 max-w-7xl mx-auto relative z-10">
        <div className="flex items-center gap-2 group cursor-pointer">
          <Infinity className="text-indigo-950 w-10 h-10 transition-transform group-hover:rotate-12" />
          <span className="text-2xl font-black tracking-tighter text-indigo-950 italic">SyncSocial<span className="text-indigo-600">.ai</span></span>
        </div>
        <div className="flex bg-slate-100 p-1 rounded-full border border-slate-200">
          {['NL', 'EN', 'CN'].map((l) => (
            <button key={l} onClick={() => setLang(l)} className={`px-4 py-1 rounded-full text-xs font-black transition ${lang === l ? 'bg-white shadow-sm text-indigo-600' : 'text-slate-400'}`}>{l}</button>
          ))}
        </div>
      </nav>

      <section className="max-w-7xl mx-auto px-6 pt-12 pb-24 text-center relative z-10">
        <div className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-700 px-4 py-2 rounded-full text-xs font-bold mb-8 uppercase tracking-widest tracking-widest">
          <Zap size={14} /> {current.badge}
        </div>
        <h1 className="text-6xl lg:text-8xl font-black tracking-tighter text-indigo-950 mb-8 leading-[0.95] max-w-5xl mx-auto">
          {current.hero}
        </h1>
        <p className="text-xl text-slate-500 max-w-2xl mx-auto mb-12 leading-relaxed font-medium">
          {current.sub}
        </p>
        
        <div className="max-w-lg mx-auto mb-24">
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
              <input 
                type="email" 
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="E-mailadres" 
                className="flex-1 px-8 py-5 rounded-full border-2 border-slate-100 focus:border-indigo-500 outline-none text-lg transition-all shadow-inner bg-slate-50"
              />
              <button type="submit" className="bg-indigo-950 text-white px-10 py-5 rounded-full font-black text-lg hover:bg-indigo-800 transition-all shadow-xl flex items-center justify-center gap-2">
                {current.cta} <ArrowRight size={20} />
              </button>
            </form>
          ) : (
            <div className="bg-emerald-50 border-2 border-emerald-100 p-6 rounded-[2rem] flex items-center justify-center gap-4 animate-fade-in">
              <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center text-white shadow-lg shadow-emerald-200">
                <CheckCircle2 size={24} />
              </div>
              <p className="text-emerald-800 font-black text-lg text-left leading-tight">{current.success}</p>
            </div>
          )}
        </div>

        {/* --- DE LEVENDE MOCKUP (Blijft hetzelfde als gisteren) --- */}
        <div className="relative max-w-5xl mx-auto">
           <div className="absolute -inset-10 bg-gradient-to-r from-indigo-500 via-purple-500 to-emerald-400 opacity-20 blur-[100px] rounded-full"></div>
           <div className="relative bg-indigo-950 rounded-[3.5rem] p-4 shadow-2xl border-[14px] border-indigo-900 overflow-hidden">
             <div className="bg-slate-50 rounded-[2.5rem] overflow-hidden relative h-[600px] flex flex-col">
                {/* Hier de content van de slides (Dag, Week, Kassa) */}
                <div className="p-12 text-center flex flex-col items-center justify-center h-full">
                   <Calendar size={48} className="text-indigo-200 mb-4 animate-bounce-slow" />
                   <p className="text-slate-400 font-bold italic tracking-tighter uppercase">Bekijk de interactieve preview op je mobiel</p>
                </div>
             </div>
           </div>
        </div>
      </section>

      <footer className="py-12 text-center border-t border-slate-50">
        <p className="text-slate-300 font-bold tracking-[0.3em] uppercase text-[10px]">
          &copy; 2026 SyncSocial.ai — Intelligence Synchronized.
        </p>
      </footer>
    </div>
  );
}
