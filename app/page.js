"use client";
import React, { useState, useEffect } from 'react';
import { Calendar, ShoppingBag, Globe, Zap, Infinity, ArrowRight, CheckCircle2, Heart, MessageCircle, DollarSign } from 'lucide-react';

export default function LandingPage() {
  const [lang, setLang] = useState('NL');
  const [activeTab, setActiveTab] = useState(0);

  const t = {
    NL: {
      hero: "Jouw leven, gesynchroniseerd met je community.",
      sub: "De eerste AI-gedreven agenda die content, commerce en community op één plek samenbrengt. Geef je volgers een stoel op de eerste rij.",
      cta: "Claim vroege toegang",
      badge: "SyncSocial.ai — De toekomst van engagement",
      mockupTitle: "Creator Dashboard v1.0",
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
      mockupTitle: "Creator Dashboard v1.0",
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
      {/* Navbar */}
      <nav className="flex justify-between items-center p-8 max-w-7xl mx-auto">
        <div className="flex items-center gap-2 group cursor-pointer">
          <Infinity className="text-slate-900 w-10 h-10 transition-transform group-hover:rotate-12" />
          <span className="text-2xl font-bold tracking-tight text-slate-900 italic tracking-tighter">SyncSocial<span className="text-indigo-600">.ai</span></span>
        </div>
        <div className="flex bg-slate-100 p-1 rounded-full border border-slate-200">
          {['NL', 'EN', 'CN'].map((l) => (
            <button 
              key={l}
              onClick={() => setLang(l)} 
              className={`px-4 py-1 rounded-full text-[10px] font-black transition ${lang === l ? 'bg-white shadow-sm text-indigo-600' : 'text-slate-400'}`}
            >
              {l}
            </button>
          ))}
        </div>
      </nav>

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 pt-12 pb-24 text-center">
        <div className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-700 px-4 py-2 rounded-full text-xs font-bold mb-8 uppercase tracking-widest">
          <Zap size={14} /> {current.badge}
        </div>
        <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-slate-900 mb-8 leading-[0.95]">
          {current.hero}
        </h1>
        <p className="text-xl text-slate-500 max-w-2xl mx-auto mb-12 leading-relaxed font-medium">
          {current.sub}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto mb-24">
          <input 
            type="email" 
            placeholder="E-mailadres" 
            className="flex-1 px-8 py-5 rounded-full border-2 border-slate-100 focus:border-indigo-500 outline-none text-lg transition-all shadow-inner bg-slate-50"
          />
          <button type="button" className="bg-slate-900 text-white px-10 py-5 rounded-full font-black text-lg hover:bg-indigo-600 transition-all shadow-2xl flex items-center justify-center gap-2 uppercase tracking-tight">
            {current.cta} <ArrowRight size={20} />
          </button>
        </div>

        {/* Visual Mockup - The Pitch Tool */}
        <div className="relative max-w-5xl mx-auto">
          <div className="absolute -inset-10 bg-gradient-to-r from-indigo-500 via-purple-500 to-emerald-400 opacity-20 blur-[100px] rounded-full"></div>
          <div className="relative bg-slate-900 rounded-[3rem] p-3 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)] border-[12px] border-slate-800">
            <div className="bg-slate-50 rounded-[2rem] overflow-hidden border border-slate-700">
              {/* Mockup Header */}
              <div className="bg-white border-b border-slate-200 p-6 flex justify-between items-center">
                <div className="flex items-center gap-3 text-left">
                  <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 font-bold">MS</div>
                  <div>
                    <p className="font-bold text-slate-900 leading-none">Maxime & Sophie</p>
                    <p className="text-xs text-slate-400 mt-1 font-bold uppercase tracking-tighter">Verified Creator Dashboard</p>
                  </div>
                </div>
                <div className="flex gap-4">
                   <div className="text-right hidden sm:block">
                     <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Global Reach</p>
                     <p className="text-sm font-black text-indigo-600">842.5K Fans</p>
                   </div>
                   <div className="w-10 h-10 bg-slate-900 rounded-full flex items-center justify-center text-white">
                     <Globe size={18} />
                   </div>
                </div>
              </div>

              {/* Mockup Content */}
              <div className="p-4 sm:p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Left: Timeline */}
                <div className="space-y-4">
                  <p className="text-left text-xs font-black text-slate-400 uppercase tracking-widest mb-4">Upcoming Schedule</p>
                  {[
                    { time: '09:00', event: 'Morning Vlog Drop', icon: <Zap className="text-amber-500" />, status: 'Auto-Sync Active' },
                    { time: '13:00', event: 'Limited Merch Drop', icon: <ShoppingBag className="text-indigo-600" />, status: 'Shopify Integrated', highlight: true },
                    { time: '20:00', event: 'Live Q&A (Global)', icon: <Globe className="text-emerald-500" />, status: 'CN/NL Timezones' },
                  ].map((item, i) => (
                    <div key={i} className={`flex items-center gap-4 p-4 rounded-2xl border ${item.highlight ? 'bg-indigo-50 border-indigo-200' : 'bg-white border-slate-100'} shadow-sm text-left`}>
                      <span className="font-black text-slate-400 text-sm">{item.time}</span>
                      <div className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center border border-slate-50">{item.icon}</div>
                      <div className="flex-1">
                        <p className="font-bold text-slate-900 text-sm">{item.event}</p>
                        <p className="text-[10px] font-bold text-slate-400 uppercase">{item.status}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Right: AI Insights */}
                <div className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm text-left space-y-6">
                   <p className="text-xs font-black text-slate-400 uppercase tracking-widest">AI Conversion Insights</p>
                   <div className="flex items-end gap-2">
                     <span className="text-4xl font-black text-slate-900">+124%</span>
                     <span className="text-emerald-500 font-bold text-sm mb-1 italic">Engagement Spike</span>
                   </div>
                   <div className="space-y-3">
                      <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                        <div className="h-full w-3/4 bg-indigo-500 rounded-full"></div>
                      </div>
                      <p className="text-[11px] text-slate-500 font-medium">AI suggests: Volgers in China zijn over 2u het meest actief. Schedule content nu.</p>
                   </div>
                   <button className="w-full bg-slate-900 text-white py-3 rounded-xl font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2">
                     Optimize Schedule <Zap size={14} />
                   </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 text-center border-t border-slate-50">
        <p className="text-slate-300 font-bold tracking-[0.3em] uppercase text-[10px]">
          &copy; 2026 SyncSocial.ai — Intelligence Synchronized.
        </p>
      </footer>
    </div>
  );
}
