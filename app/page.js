"use client";
import React, { useState } from 'react';
import { Calendar, ShoppingBag, Globe, Zap, Infinity, ArrowRight } from 'lucide-react';

export default function LandingPage() {
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
    EN: {
      hero: "Your life, synchronized with your community.",
      sub: "The first AI-powered calendar bridging content, commerce, and community. Give your followers a front-row seat.",
      cta: "Claim Early Access",
      badge: "SyncSocial.ai — The future of engagement",
      mockupTitle: "See the potential",
      feature1: "Smart Media Drops",
      desc1: "Content appears automatically on the right timeline.",
      feature2: "One-Click Commerce",
      desc2: "Sell directly from your followers’ calendar.",
      feature3: "Global Sync",
      desc3: "Reach fans in every timezone, from the West to China."
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

  const current = t[lang];

  return (
    <div className="min-h-screen bg-white">
      <nav className="flex justify-between items-center p-8 max-w-7xl mx-auto">
        <div className="flex items-center gap-2 group cursor-pointer">
          <Infinity className="text-slate-900 w-10 h-10 transition-transform group-hover:rotate-12" />
          <span className="text-2xl font-bold tracking-tight text-slate-900 italic">SyncSocial<span className="text-indigo-600">.ai</span></span>
        </div>
        <div className="flex bg-slate-100 p-1 rounded-full">
          {['NL', 'EN', 'CN'].map((l) => (
            <button 
              key={l}
              onClick={() => setLang(l)} 
              className={`px-4 py-1 rounded-full text-xs font-bold transition ${lang === l ? 'bg-white shadow-sm text-indigo-600' : 'text-slate-400'}`}
            >
              {l}
            </button>
          ))}
        </div>
      </nav>

      <section className="max-w-7xl mx-auto px-6 pt-16 pb-24 text-center">
        <div className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-700 px-4 py-2 rounded-full text-sm font-medium mb-8">
          <Zap size={16} /> {current.badge}
        </div>
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-slate-900 mb-8 leading-[1.1]">
          {current.hero}
        </h1>
        <p className="text-xl text-slate-500 max-w-2xl mx-auto mb-12 leading-relaxed">
          {current.sub}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto mb-24">
          <input 
            type="email" 
            placeholder="E-mailadres" 
            className="flex-1 px-8 py-5 rounded-full border border-slate-200 focus:ring-2 focus:ring-indigo-500 outline-none text-lg transition-all"
          />
          <button type="button" className="bg-slate-900 text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-indigo-600 transition-all shadow-xl flex items-center justify-center gap-2">
            {current.cta} <ArrowRight size={20} />
          </button>
        </div>

        <div className="relative max-w-5xl mx-auto group">
          <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500 to-emerald-400 opacity-20 blur-3xl rounded-full group-hover:opacity-30 transition-opacity"></div>
          <div className="relative bg-slate-900 rounded-[2.5rem] p-4 shadow-2xl border-8 border-slate-800">
            <div className="bg-white rounded-[1.5rem] overflow-hidden aspect-video flex items-center justify-center border border-slate-700">
              <div className="text-center p-12">
                <Calendar size={64} className="mx-auto text-indigo-600 mb-4 opacity-20" />
                <h3 className="text-2xl font-bold text-slate-900 mb-2">{current.mockupTitle}</h3>
                <p className="text-slate-400 font-medium italic">Interactive Creator Dashboard Preview coming soon...</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-16">
          {[
            { icon: <Zap />, title: current.feature1, desc: current.desc1 },
            { icon: <ShoppingBag />, title: current.feature2, desc: current.desc2 },
            { icon: <Globe />, title: current.feature3, desc: current.desc3 }
          ].map((f, i) => (
            <div key={i} className="flex flex-col items-start">
              <div className="w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center text-indigo-600 mb-6 border border-slate-100">
                {f.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-slate-900">{f.title}</h3>
              <p className="text-slate-500 leading-relaxed text-lg">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="py-20 text-center border-t border-slate-100">
        <p className="text-slate-400 font-medium tracking-widest uppercase text-xs">
          © 2026 SyncSocial.ai — Built for the next generation of creators.
        </p>
      </footer>
    </div>
  );
}
