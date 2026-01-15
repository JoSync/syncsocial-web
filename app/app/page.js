"use client";
import React, { useState } from 'react';
import { Calendar, ShoppingBag, Globe, Zap, Infinity, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function LandingPage() {
  const [email, setEmail] = useState('');
  const [lang, setLang] = useState('NL');

  const t = {
    NL: {
      hero: "Jouw leven, gesynchroniseerd met je community.",
      sub: "De eerste AI-gedreven agenda die content, commerce en community op één plek samenbrengt. Geef je volgers een stoel op de eerste rij.",
      cta: "Claim vroege toegang",
      badge: "SyncSocial.ai — De toekomst van engagement",
      mockupTitle: "Bekijk de potentie",
      feature1: "Smart Media Drops",
      desc1: "Content verschijnt automatisch op de juiste tijdlijn.",
      feature2: "One-Click Commerce",
      desc2: "Verkoop direct vanuit de agenda van je volgers.",
      feature3: "Global Sync",
      desc3: "Bereik fans in elke tijdzone, van NL tot China."
    },
    CN: {
      hero: "同步你的社交生活",
      sub: "连接内容、商业与社交的AI日历。让你的粉丝与你同步。",
      cta: "立即加入等候名单",
      badge: "SyncSocial.ai — 社交参与的未来",
      mockupTitle: "查看潜能",
      feature1: "智能内容投递",
      desc1: "照片和视频自动出现在粉丝的时间轴上。",
      feature2: "一键商业化",
      desc2: "直接在粉丝的日历中销售周边。",
      feature3: "全球同步",
      desc3: "覆盖全球粉丝，突破时差障碍。"
    }
  };

  const current = lang === 'CN' ? t.CN : t.NL;

  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <nav className="flex justify-between items-center p-8 max-w-7xl mx-auto">
        <div className="flex items-center gap-2 group cursor-pointer">
          <Infinity className="text-brand-indigo w-10 h-10 group-hover:rotate-12 transition-transform" />
          <span className="text-2xl font-bold tracking-tight text-brand-indigo italic">SyncSocial<span className="text-brand-mint">.ai</span></span>
        </div>
        <div className="flex bg-slate-100 p-1 rounded-full">
          <button onClick={() => setLang('NL')} className={`px-4 py-1 rounded-full text-xs font-bold transition ${lang === 'NL' ? 'bg-white shadow-sm text-brand-indigo' : 'text-slate-400'}`}>NL</button>
          <button onClick={() => setLang('CN')} className={`px-4 py-1 rounded-full text-xs font-bold transition ${lang === 'CN' ? 'bg-white shadow-sm text-brand-indigo' : 'text-slate-400'}`}>CN</button>
        </div>
      </nav>

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 pt-16 pb-24 text-center">
        <div className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-700 px-4 py-2 rounded-full text-sm font-medium mb-8 animate-fade-in">
          <Zap size={16} /> {current.badge}
        </div>
        <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-brand-indigo mb-8 leading-[0.9]">
          {current.hero}
        </h1>
        <p className="text-xl text-slate-500 max-w-2xl mx-auto mb-12 leading-relaxed">
          {current.sub}
        </p>
        
        <form className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto mb-24">
          <input 
            type="email" 
            placeholder="E-mailadres" 
            className="flex-1 px-8 py-5 rounded-full border border-slate-200 focus:ring-2 focus:ring-brand-indigo outline-none text-lg transition-all"
            required
          />
          <button className="bg-brand-indigo text-white px-10 py-5 rounded-full font-bold text-lg hover:scale-105 transition-all shadow-xl shadow-indigo-200 flex items-center justify-center gap-2">
            {current.cta} <ArrowRight size={20} />
          </button>
        </form>

        {/* Visual Mockup Placeholder */}
        <div className="relative max-w-5xl mx-auto">
          <div className="absolute -inset-4 bg-gradient-to-r from-brand-indigo to-brand-mint opacity-20 blur-3xl rounded-full"></div>
          <div className="relative bg-slate-900 rounded-[2.5rem] p-4 shadow-2xl border-8 border-slate-800">
            <div className="bg-white rounded-[1.5rem] overflow-hidden aspect-[16/9] flex items-center justify-center">
              <div className="text-center p-12">
                <Calendar size={64} className="mx-auto text-brand-indigo mb-4 opacity-20" />
                <p className="text-slate-400 font-medium italic">Interactive Creator Dashboard Preview coming in 48h...</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Props */}
      <section className="py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-16">
          {[
            { icon: <Zap />, title: current.feature1, desc: current.desc1 },
            { icon: <ShoppingBag />, title: current.feature2, desc: current.desc2 },
            { icon: <Globe />, title: current.feature3, desc: current.desc3 }
          ].map((f, i) => (
            <div key={i} className="flex flex-col items-start">
              <div className="w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center text-brand-indigo mb-6 border border-slate-100">
                {f.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4">{f.title}</h3>
              <p className="text-slate-500 leading-relaxed text-lg">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="py-20 text-center border-t border-slate-100">
        <p className="text-slate-400 font-medium tracking-widest uppercase text-xs italic">
          &copy; 2026 SyncSocial.ai — Powered by Intelligence
        </p>
      </footer>
    </div>
  );
}
