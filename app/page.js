"use client";
import React, { useState, useEffect } from 'react';
import { Calendar, ShoppingBag, Globe, Zap, Infinity, ArrowRight, CheckCircle2, Clock, DollarSign, ChevronRight } from 'lucide-react';

export default function LandingPage() {
  const [lang, setLang] = useState('NL');
  const [currentSlide, setCurrentSlide] = useState(0);
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Timer voor de mockup flow
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
    }
  };

  const t = {
    NL: {
      hero: "Jouw leven, gesynchroniseerd met je community.",
      sub: "De eerste AI-gedreven agenda die content, commerce en community op één plek samenbrengt. Geef je volgers een stoel op de eerste rij.",
      cta: "Claim vroege toegang",
      success: "Je staat op de lijst! We nemen snel contact met je op.",
      badge: "SyncSocial.ai — De toekomst van engagement"
    },
    EN: {
      hero: "Your life, synchronized with your community.",
      sub: "The first AI-powered calendar bridging content, commerce, and community. Give your followers a front-row seat.",
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

  const weekData = [
    { day: 'MA', date: '14', title: 'Planning & Content Prep', type: 'personal', icon: <Clock size={16} /> },
    { day: 'DI', date: '15', title: 'Vlog Drop (16:00)', type: 'content', icon: <Zap size={16} className="text-amber-500" /> },
    { day: 'WO', date: '16', title: 'Merch Drop: Summer Coll.', type: 'commerce', icon: <ShoppingBag size={16} className="text-indigo-600" />, highlight: true },
    { day: 'DO', date: '17', title: 'Global Q&A (20:00)', type: 'live', icon: <Globe size={16} className="text-emerald-500" /> },
    { day: 'VR', date: '18', title: 'Weekly Recap Teaser', type: 'content', icon: <Zap size={16} className="text-amber-500" /> },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 overflow-hidden font-sans">
      {/* Navbar */}
      <nav className="flex justify-between items-center p-8 max-w-7xl mx-auto relative z-10">
        <div className="flex items-center gap-2 group cursor-pointer">
          <Infinity className="text-indigo-950 w-10 h-10 transition-transform group-hover:rotate-12" />
          <span className="text-2xl font-black tracking-tighter text-indigo-950 italic">SyncSocial<span className="text-indigo-600">.ai</span></span>
        </div>
        <div className="flex bg-slate-100 p-1 rounded-full border border-slate-200">
          {['NL', 'EN', 'CN'].map((l) => (
            <button 
              key={l} 
              onClick={() => setLang(l)} 
              className={`px-4 py-1 rounded-full text-xs font-black transition ${lang === l ? 'bg-white shadow-sm text-indigo-600' : 'text-slate-400'}`}
            >
              {l}
            </button>
          ))}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 pt-12 pb-24 text-center relative z-10">
        <div className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-700 px-4 py-2 rounded-full text-xs font-bold mb-8 uppercase tracking-widest">
          <Zap size={14} /> {current.badge}
        </div>
        <h1 className="text-6xl lg:text-8xl font-black tracking-tighter text-indigo-950 mb-8 leading-[0.95] max-w-5xl mx-auto">
          {current.hero}
        </h1>
        <p className="text-xl text-slate-500 max-w-2xl mx-auto mb-12 leading-relaxed font-medium">
          {current.sub}
        </p>
        
        {/* Email Waitlist Interaction */}
        <div className="max-w-lg mx-auto mb-24 h-24 flex items-center justify-center">
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 w-full animate-fade-in">
              <input 
                type="email" 
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="E-mailadres" 
                className="flex-1 px-8 py-5 rounded-full border-2 border-slate-100 focus:border-indigo-500 outline-none text-lg transition-all shadow-inner bg-slate-50"
              />
              <button type="submit" className="bg-indigo-950 text-white px-10 py-5 rounded-full font-black text-lg hover:bg-indigo-800 transition-all shadow-xl flex items-center justify-center gap-2 whitespace-nowrap">
                {current.cta} <ArrowRight size={20} />
              </button>
            </form>
          ) : (
            <div className="bg-emerald-50 border-2 border-emerald-100 p-6 rounded-[2.5rem] flex items-center justify-center gap-4 animate-scale-in w-full">
              <div className="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center text-white shadow-lg shadow-emerald-200">
                <CheckCircle2 size={20} />
              </div>
              <p className="text-emerald-800 font-black text-md text-left leading-tight">{current.success}</p>
            </div>
          )}
        </div>

        {/* --- DE LEVENDE MOCKUP --- */}
        <div className="relative max-w-4xl mx-auto">
          <div className="absolute -inset-10 bg-gradient-to-r from-indigo-500 via-purple-500 to-emerald-400 opacity-20 blur-[100px] rounded-full"></div>
          
          {/* Telefoon Frame */}
          <div className="relative bg-indigo-950 rounded-[3rem] p-3 shadow-2xl border-[12px] border-indigo-900 overflow-hidden ring-1 ring-indigo-800/50">
            <div className="bg-slate-50 rounded-[2rem] overflow-hidden relative h-[650px] flex flex-col">
              
              {/* Header Mockup */}
              <div className="bg-white/80 backdrop-blur-md border-b border-slate-100 p-6 flex justify-between items-center z-20">
                <div className="flex items-center gap-3 text-left">
                  <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-700 font-black border-2 border-white shadow-sm">MS</div>
                  <div>
                    <p className="font-black text-indigo-950 text-base leading-none">Maxime & Sophie</p>
                    <p className="text-[10px] text-slate-400 mt-1 font-bold uppercase tracking-tighter flex items-center gap-1"><CheckCircle2 size={10} className="text-emerald-500" /> Verified Creator</p>
                  </div>
                </div>
                <div className="flex gap-2">
                   <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center text-slate-600"><Calendar size={18} /></div>
                   <div className="w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center text-white shadow-lg shadow-indigo-200"><ShoppingBag size={18} /></div>
                </div>
              </div>

              {/* Animated Screens Area */}
              <div className="flex-1 relative overflow-hidden">
                
                {/* Slide 1: Dagoverzicht */}
                <div className={`absolute inset-0 p-8 transition-all duration-700 ease-in-out ${currentSlide === 0 ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'}`}>
                  <p className="text-left text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-6">Today's Schedule</p>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4 p-5 rounded-3xl bg-indigo-50 border-2 border-indigo-100 shadow-sm text-left relative overflow-hidden">
                      <div className="absolute top-0 right-0 bg-indigo-600 text-white text-[8px] font-bold px-3 py-1 rounded-bl-xl uppercase tracking-widest">Live Now</div>
                      <span className="font-black text-indigo-400 text-sm">13:00</span>
                      <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center border border-indigo-50 text-indigo-600"><ShoppingBag size={22} /></div>
                      <div className="flex-1">
                        <p className="font-black text-indigo-950 text-lg leading-tight">Summer Merch Drop</p>
                        <p className="text-[10px] font-bold text-indigo-400 uppercase mt-1">Direct Checkout Active</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 p-5 rounded-2xl bg-white border border-slate-100 shadow-sm text-left opacity-60">
                      <span className="font-black text-slate-400 text-sm">16:00</span>
                      <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center border border-slate-50 text-amber-500"><Zap size={18} /></div>
                      <div className="flex-1"><p className="font-bold text-slate-700">Content Auto-Publish</p></div>
                    </div>
                  </div>
                  <div className="mt-8 bg-white p-6 rounded-[2rem] border border-slate-100 shadow-xl text-left flex gap-4">
                     <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0 text-emerald-600"><Zap size={20} /></div>
                     <div>
                       <p className="text-sm font-black text-slate-900 leading-tight italic">AI Insight: Peak Engagement</p>
                       <p className="text-xs text-slate-500 mt-2 leading-relaxed">Je volgers in China zijn over 20 min. het meest actief. Strategische drop voorbereid.</p>
                     </div>
                  </div>
                </div>

                {/* Slide 2: Weekoverzicht */}
                <div className={`absolute inset-0 p-8 transition-all duration-700 ease-in-out ${currentSlide === 1 ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'}`}>
                   <p className="text-left text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-6">Upcoming Week</p>
                   <div className="space-y-3">
                     {weekData.map((item, index) => (
                       <div key={index} className={`flex items-center gap-4 p-4 rounded-2xl border shadow-sm text-left transition-all ${item.highlight ? 'bg-indigo-50 border-indigo-200 scale-[1.03]' : 'bg-white border-slate-100'}`}>
                          <div className="flex flex-col items-center justify-center w-10">
                            <span className="text-[10px] font-bold text-slate-400 uppercase leading-none mb-1">{item.day}</span>
                            <span className={`text-lg font-black ${item.highlight ? 'text-indigo-600' : 'text-slate-900'}`}>{item.date}</span>
                          </div>
                          <div className={`w-10 h-10 rounded-xl flex items-center justify-center border ${item.highlight ? 'bg-white border-indigo-100' : 'bg-slate-50 border-slate-50'}`}>{item.icon}</div>
                          <div className="flex-1">
                            <p className={`font-bold text-sm leading-tight ${item.highlight ? 'text-indigo-950' : 'text-slate-700'}`}>{item.title}</p>
                            {item.highlight && <p className="text-[9px] font-black text-indigo-500 uppercase mt-1 tracking-tighter">$$ Revenue Event</p>}
                          </div>
                       </div>
                     ))}
                   </div>
                </div>

                {/* Slide 3: Kassa/Action */}
                <div className={`absolute inset-0 p-8 flex flex-col justify-center transition-all duration-700 ease-in-out ${currentSlide === 2 ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
                  <div className="bg-white rounded-[2.5rem] p-8 shadow-2xl border-2 border-indigo-50 text-center relative overflow-hidden">
                    <div className="w-20 h-20 bg-indigo-600 rounded-[2rem] mx-auto shadow-xl shadow-indigo-200 flex items-center justify-center text-white mb-6">
                      <ShoppingBag size={36} />
                    </div>
                    <h3 className="text-2xl font-black text-indigo-950 leading-tight mb-3">Summer Drop Live</h3>
                    <p className="text-slate-500 text-sm font-medium mb-8">Exclusieve link geactiveerd in de agenda van 842K volgers.</p>
                    <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100 mb-8">
                       <div className="flex justify-between text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3">
                         <span>AI Sales Target</span>
                         <span className="text-emerald-500">82% Achieved</span>
                       </div>
                       <div className="h-2 w-full bg-slate-200 rounded-full overflow-hidden">
                         <div className="h-full w-[82%] bg-emerald-500 rounded-full animate-pulse"></div>
                       </div>
                    </div>
                    <button className="w-full bg-indigo-600 text-white py-4 rounded-2xl font-black text-sm uppercase tracking-[0.2em] shadow-lg shadow-indigo-100">
                       View Live Store
                    </button>
                  </div>
                </div>

              </div>

              {/* Slide Indicators */}
              <div className="bg-white/80 p-6 flex justify-center gap-2 border-t border-slate-50">
                {[0, 1, 2].map((i) => (
                  <div key={i} className={`h-1.5 rounded-full transition-all duration-500 ${currentSlide === i ? 'w-8 bg-indigo-600' : 'w-2 bg-slate-200'}`}></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-20 text-center border-t border-slate-50 bg-white relative z-10">
        <p className="text-slate-300 font-bold tracking-[0.3em] uppercase text-[10px]">
          &copy; 2026 SyncSocial.ai — Intelligence Synchronized.
        </p>
      </footer>
    </div>
  );
}
