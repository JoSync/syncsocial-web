"use client";
import React, { useState, useEffect } from 'react';
import { Calendar, ShoppingBag, Globe, Zap, Infinity, ArrowRight, CheckCircle2, Clock, DollarSign, ChevronRight, ShieldCheck, BarChart3, Heart, Users, MousePointer2, Sparkles } from 'lucide-react';

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
      cta: "Claim Early Access", success: "You're on the list!",
      badge: "SyncSocial.ai — The future of engagement",
      step1: "Connect", step1d: "Link your socials & store.",
      step2: "Sync", step2d: "AI builds your interactive schedule.",
      step3: "Grow", step3d: "Direct fans to revenue moments.",
      m_status: "Verified Creator", m_today: "Today", m_event1: "Merch Drop", m_live: "Live Now", m_viewers: "Viewers"
    },
    NL: {
      hero: "Jouw leven, gesynchroniseerd met je community.",
      sub: "De eerste AI-gedreven agenda die content, commerce en community op één plek samenbrengt.",
      cta: "Claim vroege toegang", success: "Je staat op de lijst!",
      badge: "SyncSocial.ai — De toekomst van engagement",
      step1: "Koppel", step1d: "Link je socials & shop.",
      step2: "Sync", step2d: "AI bouwt je interactieve agenda.",
      step3: "Groei", step3d: "Leid fans naar verkoopmomenten.",
      m_status: "Geverifieerde Creator", m_today: "Vandaag", m_event1: "Merch Drop", m_live: "Nu Live", m_viewers: "Kijkers"
    },
    CN: {
      hero: "同步你的社交生活",
      sub: "连接内容、商业与社交的AI日历。让你的粉丝与你同步。",
      cta: "立即加入", success: "您已加入！",
      badge: "SyncSocial.ai — 社交参与的未来",
      step1: "连接", step1d: "连接社交账号与商店。",
      step2: "同步", step2d: "AI 自动生成互动日程。",
      step3: "增长", step3d: "引导粉丝进入变现环节。",
      m_status: "认证创作者", m_today: "今日", m_event1: "周边上新", m_live: "直播中", m_viewers: "观看人数"
    }
  };

  const current = t[lang];

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-indigo-100 overflow-x-hidden relative">
      {/* Subtiele achtergrond decoratie */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-50 rounded-full blur-[120px] -z-10 animate-pulse"></div>
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-emerald-50 rounded-full blur-[100px] -z-10"></div>

      <nav className="flex justify-between items-center p-8 max-w-7xl mx-auto relative z-50">
        <div className="flex items-center gap-2 group cursor-pointer">
          <Infinity className="text-indigo-950 w-10 h-10 transition-transform group-hover:rotate-12" />
          <span className="text-2xl font-black text-indigo-950 italic">SyncSocial<span className="text-indigo-600">.ai</span></span>
        </div>
        <div className="flex bg-slate-100/80 backdrop-blur-sm p-1 rounded-full border border-slate-200">
          {['NL', 'EN', 'CN'].map((l) => (
            <button key={l} onClick={() => setLang(l)} className={`px-4 py-1 rounded-full text-xs font-black transition ${lang === l ? 'bg-white shadow-sm text-indigo-600' : 'text-slate-400'}`}>{l}</button>
          ))}
        </div>
      </nav>

      <section className="max-w-7xl mx-auto px-6 pt-12 pb-32 text-center flex flex-col items-center relative">
        <div className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-700 px-4 py-2 rounded-full text-[10px] font-black mb-8 uppercase tracking-[0.2em] shadow-sm"><Sparkles size={12} /> {current.badge}</div>
        <h1 className="text-5xl lg:text-8xl font-black tracking-tighter text-indigo-950 mb-8 leading-[0.95] max-w-5xl">{current.hero}</h1>
        <p className="text-xl text-slate-500 max-w-2xl mb-12 font-medium italic">{current.sub}</p>
        
        {/* Email Section with Social Proof */}
        <div className="w-full max-w-xl mx-auto mb-32 flex flex-col items-center">
          {!isSubmitted ? (
            <form onSubmit={(e) => { e.preventDefault(); setIsSubmitted(true); }} className="flex flex-col sm:flex-row w-full animate-fade-in shadow-[0_20px_50px_rgba(0,0,0,0.1)] rounded-[2rem] overflow-hidden border border-slate-100 mb-6 bg-white group focus-within:ring-2 focus-within:ring-indigo-500/20 transition-all">
              <input type="email" required placeholder={lang === 'CN' ? '电子邮件' : (lang === 'NL' ? 'E-mailadres' : 'Email address')} className="flex-[2] h-16 px-8 outline-none text-lg bg-white" />
              <button type="submit" className="flex-1 h-16 bg-indigo-950 text-white px-8 font-black text-lg hover:bg-indigo-800 transition-all flex items-center justify-center gap-2 uppercase whitespace-nowrap">{current.cta} <ArrowRight size={20} /></button>
            </form>
          ) : (
            <div className="bg-emerald-50 border-2 border-emerald-100 h-16 px-8 rounded-full flex items-center justify-center gap-4 animate-scale-in w-full shadow-lg mb-6">
              <CheckCircle2 size={24} className="text-emerald-500" />
              <p className="text-emerald-800 font-black text-lg">{current.success}</p>
            </div>
          )}
          <div className="flex items-center gap-3 animate-fade-in delay-500">
            <div className="flex -space-x-2">
              {[1,2,3,4].map(i => <div key={i} className={`w-8 h-8 rounded-full border-2 border-white bg-slate-${i*100+100}`}></div>)}
            </div>
            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest italic">Join 500+ creators in sync</p>
          </div>
        </div>

        {/* The Mockup */}
        <div className="relative w-full max-w-4xl group">
          <div className="absolute -inset-10 bg-gradient-to-r from-indigo-500 to-emerald-400 opacity-20 blur-[100px] rounded-full group-hover:opacity-30 transition-opacity"></div>
          <div className="relative bg-indigo-950 rounded-[3rem] p-3 shadow-2xl border-[12px] border-indigo-900 overflow-hidden ring-1 ring-white/10">
            <div className="bg-slate-50 rounded-[2rem] overflow-hidden h-[600px] flex flex-col border border-indigo-800/20 shadow-inner">
              <div className="bg-white border-b border-slate-100 p-6 flex justify-between items-center text-left">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-indigo-950 rounded-full flex items-center justify-center text-white font-black text-xl border-2 border-white">MS</div>
                  <div><p className="font-black text-indigo-950 text-sm leading-none">Maxime & Sophie</p><p className="text-[10px] text-emerald-500 font-black uppercase tracking-widest flex items-center gap-1 mt-1"><ShieldCheck size={10} /> {current.m_status}</p></div>
                </div>
                <div className="w-10 h-10 bg-indigo-50 rounded-full flex items-center justify-center text-indigo-600"><Globe size={20} /></div>
              </div>

              <div className="flex-1 relative p-8">
                {currentSlide === 0 && <div className="animate-fade-in text-left">
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-6">{current.m_today}</p>
                  <div className="p-6 bg-white border-2 border-indigo-100 rounded-3xl shadow-sm flex items-center gap-4">
                    <div className="w-14 h-14 bg-indigo-600 rounded-2xl flex items-center justify-center text-white shadow-lg"><ShoppingBag size={28} /></div>
                    <div><p className="font-black text-indigo-950 text-xl leading-none">{current.m_event1}</p><p className="text-[10px] font-bold text-slate-400 mt-2 uppercase tracking-tight">14:00 GMT</p></div>
                  </div>
                </div>}

                {currentSlide === 1 && <div className="animate-fade-in text-left">
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-6 tracking-widest">Next Events</p>
                  <div className="space-y-3">
                    {['YouTube Premiere', 'Shanghai Live'].map((e, i) => (
                      <div key={i} className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm flex items-center gap-4 transition-transform hover:scale-[1.02] cursor-pointer">
                        <div className="w-10 h-10 bg-indigo-50 rounded-xl flex items-center justify-center text-indigo-600 border"><Zap size={18} /></div>
                        <p className="font-bold text-indigo-950 text-sm">{e}</p>
                      </div>
                    ))}
                  </div>
                </div>}

                {currentSlide === 2 && <div className="animate-fade-in flex flex-col items-center justify-center h-full text-center">
                  <div className="relative mb-6 group cursor-pointer">
                    <div className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] font-black px-3 py-1 rounded-full animate-pulse uppercase tracking-widest shadow-lg">{current.m_live}</div>
                    <div className="w-32 h-32 bg-indigo-950 rounded-[2.5rem] flex items-center justify-center border-4 border-white shadow-2xl overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-t from-indigo-900 to-transparent opacity-60"></div>
                      <Globe size={48} className="text-indigo-400 relative z-10" />
                    </div>
                  </div>
                  <div className="flex items-center gap-3 bg-white px-6 py-3 rounded-full border border-slate-100 shadow-xl mb-4">
                    <Users size={18} className="text-indigo-600" />
                    <span className="font-black text-indigo-950 text-xl">{viewers.toLocaleString()}</span>
                  </div>
                  <div className="flex gap-2 animate-bounce"><Heart size={20} className="text-red-500 fill-red-500 opacity-80" /></div>
                </div>}

                {currentSlide === 3 && <div className="animate-fade-in text-center flex flex-col justify-center h-full">
                  <div className="w-24 h-24 bg-emerald-500 rounded-[2.5rem] mx-auto flex items-center justify-center text-white shadow-2xl mb-6 shadow-emerald-200"><BarChart3 size={48} /></div>
                  <p className="text-2xl font-black text-indigo-950 italic tracking-tighter">AI Revenue Pulse</p>
                </div>}
              </div>

              <div className="p-8 flex justify-center gap-2 border-t border-slate-50 bg-white/50">
                {[0,1,2,3].map(i => <div key={i} className={`h-1.5 rounded-full transition-all duration-500 ${currentSlide === i ? 'w-10 bg-indigo-600' : 'w-2 bg-slate-200'}`}></div>)}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS SECTION */}
      <section className="py-32 bg-white relative">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12 relative z-10">
          {[
            { icon: <MousePointer2 />, title: current.step1, desc: current.step1d },
            { icon: <Infinity />, title: current.step2, desc: current.step2d },
            { icon: <Zap />, title: current.step3, desc: current.step3d }
          ].map((s, i) => (
            <div key={i} className="text-center space-y-4 p-8 rounded-3xl transition-all hover:bg-slate-50 group">
              <div className="w-16 h-16 bg-indigo-50 rounded-2xl flex items-center justify-center text-indigo-600 mx-auto group-hover:scale-110 transition-transform">{s.icon}</div>
              <h3 className="text-2xl font-black text-indigo-950">{s.title}</h3>
              <p className="text-slate-500 font-medium">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="py-20 text-center border-t border-slate-50 bg-white relative z-10">
        <p className="text-slate-300 font-bold tracking-[0.3em] uppercase text-[10px]">&copy; 2026 SyncSocial.ai — Intelligence Synchronized.</p>
      </footer>
    </div>
  );
}
