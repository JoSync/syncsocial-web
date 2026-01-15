"use client";
import React, { useState, useEffect } from 'react';
import { Calendar, ShoppingBag, Globe, Zap, Infinity, ArrowRight, CheckCircle2, Heart, MessageCircle, DollarSign, ChevronRight, Clock } from 'lucide-react';

export default function LandingPage() {
  const [lang, setLang] = useState('NL');
  // State voor de automatische mockup flow
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 3;

  // Timer die elke 5 seconden wisselt van slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 5000); // 5000ms = 5 seconden
    return () => clearInterval(interval);
  }, []);

  const t = {
    NL: {
      hero: "Jouw leven, gesynchroniseerd met je community.",
      sub: "De eerste AI-gedreven agenda die content, commerce en community op één plek samenbrengt. Geef je volgers een stoel op de eerste rij.",
      cta: "Claim vroege toegang",
      badge: "SyncSocial.ai — De toekomst van engagement",
      mockupLabel: "Live App Simulatie"
    },
    EN: {
      hero: "Your life, synchronized with your community.",
      sub: "The first AI-powered calendar bridging content, commerce, and community. Give your followers a front-row seat.",
      cta: "Claim Early Access",
      badge: "SyncSocial.ai — The future of engagement",
      mockupLabel: "Live App Simulation"
    },
    CN: {
      hero: "同步你的社交生活",
      sub: "连接内容、商业与社交的AI日历。让你的粉丝与你同步。",
      cta: "立即加入等候名单",
      badge: "SyncSocial.ai — 社交参与的未来",
      mockupLabel: "实时应用模拟"
    }
  };

  const current = t[lang];

  // Data voor het Weekoverzicht (Slide 2)
  const weekData = [
    { day: 'MA', date: '14', title: 'Rustdag & Planning', type: 'personal', icon: <Clock size={16} /> },
    { day: 'DI', date: '15', title: 'Nieuwe YouTube Video (16:00)', type: 'content', icon: <Zap size={16} className="text-amber-500" /> },
    { day: 'WO', date: '16', title: 'Merch Drop: Summer Collection', type: 'commerce', icon: <ShoppingBag size={16} className="text-indigo-600" />, highlight: true },
    { day: 'DO', date: '17', title: 'Live Q&A met Fans (20:00)', type: 'live', icon: <Globe size={16} className="text-emerald-500" /> },
    { day: 'VR', date: '18', title: 'Weekend Vlog Teaser', type: 'content', icon: <Zap size={16} className="text-amber-500" /> },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 overflow-hidden font-sans">
      {/* Navbar */}
      <nav className="flex justify-between items-center p-6 lg:p-8 max-w-7xl mx-auto relative z-10">
        <div className="flex items-center gap-2 group cursor-pointer">
          <Infinity className="text-indigo-950 w-8 h-8 lg:w-10 lg:h-10 transition-transform group-hover:rotate-12" />
          <span className="text-xl lg:text-2xl font-black tracking-tighter text-indigo-950 italic">SyncSocial<span className="text-indigo-600">.ai</span></span>
        </div>
        <div className="flex bg-slate-100 p-1 rounded-full border border-slate-200 backdrop-blur-md">
          {['NL', 'EN', 'CN'].map((l) => (
            <button 
              key={l}
              onClick={() => setLang(l)} 
              className={`px-3 lg:px-4 py-1 rounded-full text-[10px] lg:text-xs font-black transition-all ${lang === l ? 'bg-white shadow-sm text-indigo-600 scale-105' : 'text-slate-400 hover:text-slate-600'}`}
            >
              {l}
            </button>
          ))}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 pt-8 lg:pt-12 pb-24 text-center relative z-10">
        <div className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-700 px-4 py-2 rounded-full text-xs font-bold mb-8 uppercase tracking-widest animate-fade-in">
          <Zap size={14} /> {current.badge}
        </div>
        <h1 className="text-5xl lg:text-8xl font-black tracking-tighter text-indigo-950 mb-8 leading-[0.95] max-w-5xl mx-auto">
          {current.hero}
        </h1>
        <p className="text-lg lg:text-xl text-slate-500 max-w-2xl mx-auto mb-12 leading-relaxed font-medium">
          {current.sub}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto mb-24">
          <input 
            type="email" 
            placeholder="E-mailadres" 
            className="flex-1 px-6 lg:px-8 py-4 lg:py-5 rounded-full border-2 border-slate-100 focus:border-indigo-500 outline-none text-lg transition-all shadow-inner bg-slate-50 focus:bg-white"
          />
          <button type="button" className="bg-indigo-950 text-white px-8 lg:px-10 py-4 lg:py-5 rounded-full font-black text-lg hover:bg-indigo-800 hover:scale-105 transition-all shadow-xl flex items-center justify-center gap-2 uppercase tracking-tight">
            {current.cta} <ArrowRight size={20} />
          </button>
        </div>

        {/* --- DE LEVENDE MOCKUP --- */}
        <div className="relative max-w-5xl mx-auto">
          {/* Achtergrond Gloed */}
          <div className="absolute -inset-4 lg:-inset-10 bg-gradient-to-r from-indigo-500 via-purple-500 to-emerald-400 opacity-20 blur-[60px] lg:blur-[100px] rounded-full animate-pulse-slow"></div>
          
          {/* Telefoon Frame */}
          <div className="relative bg-indigo-950 rounded-[2.5rem] lg:rounded-[3.5rem] p-3 lg:p-4 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)] border-[8px] lg:border-[14px] border-indigo-900 ring-1 ring-indigo-800/50 overflow-hidden">
            {/* Dynamic Screen Content */}
            <div className="bg-slate-50 rounded-[2rem] lg:rounded-[2.5rem] overflow-hidden border border-slate-700 relative h-[600px] lg:h-[700px] flex flex-col">
              
              {/* Vaste Header in Mockup */}
              <div className="bg-white/80 backdrop-blur-md border-b border-slate-100 p-6 flex justify-between items-center sticky top-0 z-20">
                <div className="flex items-center gap-3 text-left">
                  <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-tr from-indigo-100 to-purple-100 rounded-full flex items-center justify-center text-indigo-700 font-black shadow-sm border border-white">MS</div>
                  <div>
                    <p className="font-black text-indigo-950 leading-none text-sm lg:text-base">Maxime & Sophie</p>
                    <p className="text-[10px] text-slate-400 mt-1 font-bold uppercase tracking-tighter flex items-center gap-1"><CheckCircle2 size={10} className="text-emerald-500" /> Verified Creator</p>
                  </div>
                </div>
                <div className="flex gap-3">
                   <div className="w-9 h-9 bg-slate-100 rounded-full flex items-center justify-center text-slate-600">
                     <Calendar size={18} />
                   </div>
                   <div className="w-9 h-9 bg-indigo-600 rounded-full flex items-center justify-center text-white shadow-lg shadow-indigo-200">
                     <ShoppingBag size={18} />
                   </div>
                </div>
              </div>

              {/* ANIMATED CONTENT AREA */}
              <div className="flex-1 relative overflow-hidden p-6">
                
                {/* SLIDE 1: DAG OVERZICHT (Huidig) */}
                <div className={`absolute inset-0 p-6 transition-all duration-700 ease-in-out transform ${currentSlide === 0 ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                  <p className="text-left text-xs font-black text-slate-400 uppercase tracking-widest mb-6 flex items-center gap-2"><span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span> Vandaag's Focus</p>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4 p-5 rounded-3xl bg-indigo-50 border-2 border-indigo-200 shadow-sm text-left relative overflow-hidden group">
                      <div className="absolute top-0 right-0 bg-indigo-600 text-white text-[10px] font-bold px-3 py-1 rounded-bl-xl uppercase tracking-widest">High Priority</div>
                      <span className="font-black text-indigo-400 text-sm">13:00</span>
                      <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center border border-indigo-100 text-indigo-600 group-hover:scale-110 transition-transform"><ShoppingBag size={20} /></div>
                      <div className="flex-1">
                        <p className="font-black text-indigo-950 text-lg">Limited Merch Drop</p>
                        <p className="text-xs font-bold text-indigo-400 uppercase mt-1">Shopify Integrated • Global Shipping</p>
                      </div>
                      <ChevronRight className="text-indigo-300" />
                    </div>
                    {/* Andere dag items... */}
                    <div className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-slate-100 shadow-sm text-left opacity-60">
                      <span className="font-black text-slate-400 text-sm">16:00</span>
                      <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center border border-slate-100 text-amber-500"><Zap size={16} /></div>
                      <div className="flex-1"><p className="font-bold text-slate-700 text-sm">Social Posts Auto-Publish</p></div>
                    </div>
                  </div>
                   {/* AI Insight Bubble */}
                   <div className="mt-8 bg-white p-5 rounded-3xl border border-slate-100 shadow-lg text-left flex gap-4 items-start">
                     <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0"><Zap size={16} className="text-emerald-600" /></div>
                     <div>
                       <p className="text-sm font-bold text-slate-900 leading-tight">AI Tip: China is nu wakker.</p>
                       <p className="text-xs text-slate-500 mt-1 leading-relaxed">Verwachte engagement piek over 45 minuten. Jouw geplande posts staan klaar.</p>
                     </div>
                   </div>
                </div>

                {/* SLIDE 2: WEEK OVERZICHT (Nieuw) */}
                <div className={`absolute inset-0 p-6 transition-all duration-700 ease-in-out transform ${currentSlide === 1 ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
                   <div className="flex justify-between items-center mb-6">
                    <p className="text-left text-xs font-black text-slate-400 uppercase tracking-widest">Deze Week</p>
                    <span className="text-xs font-bold text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full">5 Events</span>
                   </div>
                   <div className="space-y-3">
                     {weekData.map((item, index) => (
                       <div key={index} className={`flex items-center gap-4 p-4 rounded-2xl border shadow-sm text-left transition-all ${item.highlight ? 'bg-indigo-50 border-indigo-200 scale-[1.02]' : 'bg-white border-slate-100'}`}>
                          <div className="flex flex-col items-center justify-center w-10">
                            <span className="text-[10px] font-bold text-slate-400 uppercase">{item.day}</span>
                            <span className={`text-lg font-black ${item.highlight ? 'text-indigo-600' : 'text-slate-900'}`}>{item.date}</span>
                          </div>
                          <div className={`w-10 h-10 rounded-xl flex items-center justify-center border ${item.highlight ? 'bg-white border-indigo-100 shadow-sm' : 'bg-slate-50 border-slate-100'}`}>{item.icon}</div>
                          <div className="flex-1">
                            <p className={`font-bold text-sm ${item.highlight ? 'text-indigo-950' : 'text-slate-700'}`}>{item.title}</p>
                            {item.highlight && <p className="text-[10px] font-bold text-indigo-500 uppercase mt-1 animate-pulse">$$ Commercial Event</p>}
                          </div>
                       </div>
                     ))}
                   </div>
                </div>

                {/* SLIDE 3: DETAIL ACTIE (Nieuw - De Kassa) */}
                <div className={`absolute inset-0 p-6 flex flex-col justify-center transition-all duration-700 ease-in-out transform ${currentSlide === 2 ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
                  <div className="bg-white rounded-[2.5rem] p-6 shadow-2xl border-2 border-indigo-100 text-center relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-indigo-50 to-white -z-10"></div>
                    <div className="w-20 h-20 bg-indigo-600 rounded-3xl mx-auto shadow-lg shadow-indigo-200 flex items-center justify-center text-white mb-6 animate-bounce-slow">
                      <ShoppingBag size={32} />
                    </div>
                    <h3 className="text-2xl font-black text-indigo-950 leading-tight mb-2">Summer Collection Drop</h3>
                    <p className="text-slate-500 font-medium mb-8">Exclusieve toegang voor volgers. 24 uur beschikbaar.</p>
                    
                    <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 mb-8">
                      <div className="flex justify-between text-sm font-bold mb-2">
                        <span className="text-slate-500">Verwachte Omzet (AI)</span>
                        <span className="text-emerald-500">€12.500 - €18.000</span>
                      </div>
                      <div className="h-3 bg-slate-200 rounded-full overflow-hidden">
                        <div className="h-full w-[65%] bg-emerald-500 rounded-full animate-pulse"></div>
                      </div>
                    </div>

                    <button className="w-full bg-indigo-600 text-white py-4 rounded-2xl font-black text-lg hover:bg-indigo-700 transition-all shadow-xl flex items-center justify-center gap-3">
                      <DollarSign size={20} /> BEKIJK LIVE SHOP
                    </button>
                  </div>
                </div>

              </div>

              {/* Navigatie Bolletjes in Mockup */}
              <div className="bg-white/80 backdrop-blur-md p-4 flex justify-center gap-2 border-t border-slate-50 sticky bottom-0 z-20">
                {[0, 1, 2].map((index) => (
                  <div key={index} className={`h-2 rounded-full transition-all duration-500 ${currentSlide === index ? 'w-8 bg-indigo-600' : 'w-2 bg-slate-300'}`}></div>
                ))}
              </div>
            </div>
          </div>
           <p className="text-center text-slate-400 text-xs font-bold uppercase tracking-widest mt-8">{current.mockupLabel}</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 text-center border-t border-slate-50 relative z-10 bg-white">
        <p className="text-slate-300 font-bold tracking-[0.3em] uppercase text-[10px]">
          &copy; 2026 SyncSocial.ai — Intelligence Synchronized.
        </p>
      </footer>
    </div>
  );
}
