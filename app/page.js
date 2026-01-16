"use client";
import React, { useState, useEffect } from 'react';
import { Calendar, ShoppingBag, Globe, Zap, Infinity, ArrowRight, CheckCircle2, Clock, DollarSign, ChevronRight, ShieldCheck, BarChart3, Heart, Users, MousePointer2, Sparkles, MessageCircle } from 'lucide-react';

export default function LandingPage() {
  const [lang, setLang] = useState('EN'); 
  const [currentSlide, setCurrentSlide] = useState(0);
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [viewers, setViewers] = useState(12400);

  useEffect(() => {
    const slideInterval = setInterval(() => setCurrentSlide((prev) => (prev + 1) % 4), 5000);
    const viewerInterval = setInterval(() => setViewers(v => v + Math.floor(Math.random() * 50)), 2000);
    return () => { clearInterval(slideInterval); clearInterval(viewerInterval); };
  }, []);

  const t = {
    EN: {
      hero: "Your life, synchronized with your community.",
      sub: "The first AI-powered calendar bridging content, commerce, and community.",
      cta: "Claim Access", success: "You're on the list!",
      badge: "SyncSocial.ai — The future of engagement",
      step1: "Connect", step1d: "Link your socials & store.",
      step2: "Sync", step2d: "AI builds your schedule.",
      step3: "Grow", step3d: "Lead fans to revenue.",
      fTitle: "Platform Features",
      f1: "Direct Commerce", f1d: "Sell merch directly through calendar events.",
      f2: "Global AI Timing", f2d: "Optimized drops for every timezone.",
      f3: "Owned Audience", f3d: "Direct line to your most loyal fans.",
      m_status: "Verified Creator", m_today: "Today", m_live: "Live Now"
    },
    NL: {
      hero: "Jouw leven, gesynchroniseerd met je community.",
      sub: "De eerste AI-gedreven agenda die content, commerce en community op één plek samenbrengt.",
      cta: "Claim toegang", success: "Je staat op de lijst!",
      badge: "SyncSocial.ai — De toekomst van engagement",
      step1: "Koppel", step1d: "Link je socials & shop.",
      step2: "Sync", step2d: "AI bouwt je agenda.",
      step3: "Groei", step3d: "Leid fans naar verkoop.",
      fTitle: "Platform Functies",
      f1: "Directe Verkoop", f1d: "Verkoop merch direct vanuit de agenda.",
      f2: "Wereldwijde AI Timing", f2d: "Geoptimaliseerde drops voor elke tijdzone.",
      f3: "Eigen Community", f3d: "Directe lijn met je trouwste volgers.",
      m_status: "Geverifieerde Creator", m_today: "Vandaag", m_live: "Nu Live"
    },
    CN: {
      hero: "同步你的社交生活",
      sub: "连接内容、商业与社交的AI日历。让你的粉丝与你同步。",
      cta: "立即加入", success: "您已加入！",
      badge: "SyncSocial.ai — 社交参与的未来",
      step1: "连接", step1d: "连接社交账号与商店。",
      step2: "同步", step2d: "AI 自动生成日程。",
      step3: "增长", step3d: "引导粉丝进入变现环节。",
      fTitle: "平台功能",
      f1: "直接商业化", f1d: "直接通过日历事件销售产品。",
      f2: "全球AI时机", f2d: "针对各时区优化投放时间。",
      f3: "私域流量", f3d: "连接忠实粉丝的最直接渠道。",
      m_status: "认证创作者", m_today: "今日", m_live: "直播中"
    }
  };

  const current = t[lang];

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-indigo-100 overflow-x-hidden relative">
      
      {/* --- SURPRISE 1: HEXAGON GRID 2.0 --- */}
      <div className="absolute inset-0 -z-10 opacity-[0.07]" 
           style={{ 
             backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='70' viewBox='0 0 40 70'%3E%3Cpath d='M20 0L40 10V30L20 40L0 30V10L20 0ZM20 70L0 60V40L20 30L40 40V60L20 70Z' fill='%234338ca' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E")`,
             maskImage: 'radial-gradient(circle, black 20%, transparent 80%)'
           }}>
      </div>

      <nav className="flex justify-between items-center p-8 max-w-7xl mx-auto relative z-50">
        <div className="flex items-center gap-2 group cursor-pointer">
          <Infinity className="text-indigo-950 w-10 h-10 transition-transform group-hover:rotate-12" />
          <span className="text-2xl font-black text-indigo-950 italic tracking-tighter">SyncSocial<span className="text-indigo-600">.ai</span></span>
        </div>
        <div className="flex bg-white/60 backdrop-blur-xl p-1 rounded-full border border-slate-200 shadow-sm">
          {['NL', 'EN', 'CN'].map((l) => (
            <button key={l} onClick={() => setLang(l)} className={`px-4 py-1 rounded-full text-xs font-black transition-all ${lang === l ? 'bg-indigo-950 text-white shadow-lg' : 'text-slate-400 hover:text-indigo-950'}`}>{l}</button>
          ))}
        </div>
      </nav>

      <section className="max-w-7xl mx-auto px-6 pt-12 pb-32 text-center flex flex-col items-center relative">
        {/* --- SURPRISE 2: FLOATING ELEMENTS --- */}
        <div className="absolute top-20 left-10 animate-bounce-slow opacity-20 hidden lg:block text-indigo-600"><Heart size={40} /></div>
        <div className="absolute bottom-40 right-10 animate-bounce-slow opacity-20 hidden lg:block text-emerald-500" style={{animationDelay: '1s'}}><DollarSign size={40} /></div>
        <div className="absolute top-40 right-20 animate-bounce-slow opacity-20 hidden lg:block text-indigo-400" style={{animationDelay: '2s'}}><MessageCircle size={32} /></div>

        <div className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-700 px-4 py-2 rounded-full text-[10px] font-black mb-8 uppercase tracking-[0.2em] shadow-sm"><Sparkles size={12} /> {current.badge}</div>
        <h1 className="text-5xl lg:text-8xl font-black tracking-tighter text-indigo-950 mb-8 leading-[0.95] max-w-5xl animate-fade-in">{current.hero}</h1>
        <p className="text-xl text-slate-500 max-w-2xl mx-auto mb-12 font-medium italic">{current.sub}</p>
        
        {/* Email Form: Refined h-16 height, centered */}
        <div className="w-full max-w-xl mx-auto mb-32 flex flex-col items-center group">
          {!isSubmitted ? (
            <form onSubmit={(e) => { e.preventDefault(); setIsSubmitted(true); }} className="flex flex-col sm:flex-row w-full animate-fade-in shadow-[0_20px_50px_rgba(67,56,202,0.15)] rounded-full overflow-hidden border border-indigo-100 mb-8 bg-white focus-within:ring-4 focus-within:ring-indigo-500/10 transition-all duration-500">
              <input type="email" required placeholder={lang === 'CN' ? '电子邮件' : (lang === 'NL' ? 'E-mailadres' : 'Email address')} 
                     className="flex-[2] h-16 px-10 outline-none text-lg bg-white focus:bg-slate-50 transition-all border-b sm:border-b-0 sm:border-r border-slate-100" />
              <button type="submit" className="flex-1 h-16 bg-indigo-950 text-white px-8 font-black text-lg hover:bg-indigo-600 transition-all flex items-center justify-center gap-3 uppercase tracking-tighter">
                {current.cta} <ArrowRight size={20} />
              </button>
            </form>
          ) : (
            <div className="bg-emerald-50 border-2 border-emerald-100 h-16 px-10 rounded-full flex items-center justify-center gap-4 animate-scale-in w-full shadow-lg mb-8">
              <CheckCircle2 size={24} className="text-emerald-500" />
              <p className="text-emerald-800 font-black text-lg italic">{current.success}</p>
            </div>
          )}

          <div className="flex items-center gap-4 animate-fade-in">
             <div className="flex -space-x-3">
               {[1,2,3,4].map(i => <div key={i} className={`w-10 h-10 rounded-full border-4 border-white bg-indigo-${i*100+100} shadow-sm flex items-center justify-center text-[10px] font-black text-white`}>
                 <Users size={14} />
               </div>)}
             </div>
             <div className="flex items-center gap-2 text-indigo-950/40">
               <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
               <p className="text-[10px] font-black uppercase tracking-[0.2em] italic">Join 500+ creators in sync</p>
             </div>
          </div>
        </div>

        {/* --- SURPRISE 3: AURORA MOCKUP --- */}
        <div className="relative w-full max-w-3xl">
          <div className="absolute -inset-20 bg-gradient-to-tr from-indigo-500 via-purple-400 to-emerald-400 opacity-30 blur-[120px] rounded-full animate-pulse-slow"></div>
          <div className="relative bg-indigo-950 rounded-[3.5rem] p-3 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] border-[12px] border-indigo-900 overflow-hidden ring-1 ring-white/20">
            <div className="bg-white rounded-[2.5rem] overflow-hidden h-[600px] flex flex-col relative">
              <div className="bg-white border-b border-slate-50 p-6 flex justify-between items-center text-left sticky top-0 z-10">
                <div className="flex items-center gap-3 text-left">
                  <div className="w-12 h-12 bg-indigo-950 rounded-full flex items-center justify-center text-white font-black text-xl border-2 border-white shadow-lg">MS</div>
                  <div className="text-left leading-tight">
                    <p className="font-black text-indigo-950 text-sm leading-none tracking-tight">Maxime & Sophie</p>
                    <p className="text-[10px] text-emerald-500 font-black uppercase tracking-widest flex items-center gap-1 mt-1"><ShieldCheck size={10} /> {current.m_status}</p>
                  </div>
                </div>
                <Globe size={20} className="text-indigo-600 animate-spin-slow" />
              </div>
              <div className="flex-1 relative p-8">
                {currentSlide === 0 && <div className="animate-fade-in text-left">
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-6 font-bold">{current.m_today}</p>
                  <div className="p-6 bg-indigo-50/50 border border-indigo-100 rounded-[2rem] shadow-sm flex items-center gap-4 text-left backdrop-blur-sm">
                    <div className="w-12 h-12 bg-indigo-600 rounded-2xl flex items-center justify-center text-white shadow-lg"><ShoppingBag size={24} /></div>
                    <div className="text-left"><p className="font-black text-indigo-950 text-lg leading-none">{current.m_event1}</p><p className="text-[10px] font-bold text-indigo-400 mt-1 uppercase">14:00 GMT</p></div>
                  </div>
                </div>}
                {currentSlide === 1 && <div className="animate-fade-in text-left"><p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-6 italic font-bold">Weekly Overview</p><div className="space-y-3">{[1,2,3].map(i => <div key={i} className="h-14 bg-slate-50 rounded-2xl border border-slate-100 flex items-center px-4 gap-4"><div className="w-8 h-8 rounded-full bg-white border border-slate-200"></div><div className="h-2 w-24 bg-slate-200 rounded-full"></div></div>)}</div></div>}
                {currentSlide === 2 && <div className="animate-fade-in flex flex-col items-center justify-center h-full text-center">
                  <div className="relative mb-6">
                    <div className="absolute -top-2 -right-2 bg-red-500 text-white text-[9px] font-black px-3 py-1 rounded-full animate-pulse">{current.m_live}</div>
                    <div className="w-32 h-32 bg-indigo-950 rounded-[2.5rem] flex items-center justify-center border-4 border-white shadow-xl overflow-hidden relative">
                       <div className="absolute inset-0 bg-indigo-600 opacity-20 animate-pulse"></div>
                       <Globe size={48} className="text-indigo-400 relative z-10" />
                    </div>
                  </div>
                  <div className="flex items-center gap-2 bg-indigo-50 px-5 py-2 rounded-full border border-indigo-100 shadow-sm"><Users size={16} className="text-indigo-600" /><span className="font-black text-indigo-950 tracking-tighter">{viewers.toLocaleString()}</span></div>
                </div>}
                {currentSlide === 3 && <div className="animate-fade-in flex flex-col items-center justify-center h-full"><BarChart3 size={64} className="text-emerald-500 mb-4 drop-shadow-lg" /><p className="text-2xl font-black text-indigo-950 italic tracking-tighter">AI Sync Intelligence</p></div>}
              </div>
              <div className="p-8 flex justify-center gap-2 border-t border-slate-50 bg-white/50 sticky bottom-0">
                {[0,1,2,3].map(i => <div key={i} className={`h-1.5 rounded-full transition-all duration-700 ${currentSlide === i ? 'w-10 bg-indigo-600 shadow-sm' : 'w-2 bg-slate-200'}`}></div>)}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8 relative z-10">
          {[
            { icon: <MousePointer2 size={24} />, title: current.step1, desc: current.step1d },
            { icon: <Infinity size={24} />, title: current.step2, desc: current.step2d },
            { icon: <Zap size={24} />, title: current.step3, desc: current.step3d }
          ].map((s, i) => (
            <div key={i} className="bg-white/40 backdrop-blur-md p-10 rounded-[3rem] border border-white shadow-sm text-center space-y-4 hover:shadow-2xl hover:-translate-y-2 transition-all group overflow-hidden relative">
              <div className="absolute top-0 right-0 p-4 opacity-[0.05] group-hover:opacity-10 transition-opacity"><Zap size={80} /></div>
              <div className="w-16 h-16 bg-indigo-600 text-white rounded-2xl flex items-center justify-center mx-auto group-hover:rotate-12 transition-transform shadow-lg shadow-indigo-100">{s.icon}</div>
              <h3 className="text-xl font-black text-indigo-950 italic tracking-
