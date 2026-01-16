"use client";
import React, { useState, useEffect } from 'react';
import { Calendar, ShoppingBag, Globe, Zap, Infinity, ArrowRight, CheckCircle2, Clock, DollarSign, ChevronRight, ShieldCheck, BarChart3 } from 'lucide-react';

export default function LandingPage() {
  const [lang, setLang] = useState('EN'); 
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
      // Hier komt straks de koppeling met de e-mailservice
    }
  };

  const t = {
    EN: {
      hero: "Your life, synchronized with your community.",
      sub: "The first AI-powered calendar bridging content, commerce, and community. Give your followers a front-row seat.",
      cta: "Claim Early Access",
      success: "You're on the list! We'll be in touch soon.",
      badge: "SyncSocial.ai — The future of engagement",
      featTitle: "Why creators choose SyncSocial",
      f1: "Direct Commerce", f1d: "No 'link in bio' friction. Sell products directly through the calendar events your fans already follow.",
      f2: "Global AI Timing", f2d: "Our AI analyzes global timezones and engagement peaks to drop content exactly when your fans are active.",
      f3: "Owned Audience", f3d: "Break free from algorithms. Your calendar is a direct, private line to your most loyal community."
    },
    NL: {
      hero: "Jouw leven, gesynchroniseerd met je community.",
      sub: "De eerste AI-gedreven agenda die content, commerce en community op één plek samenbrengt. Geef je volgers een stoel op de eerste rij.",
      cta: "Claim vroege toegang",
      success: "Je staat op de lijst! We nemen snel contact met je op.",
      badge: "SyncSocial.ai — De toekomst van engagement",
      featTitle: "Waarom creators voor SyncSocial kiezen",
      f1: "Directe Verkoop", f1d: "Geen gedoe met 'link in bio'. Verkoop merch direct vanuit de agenda-items die je fans volgen.",
      f2: "Wereldwijde AI Timing", f2d: "Onze AI analyseert tijdzones en engagement-pieken om content te droppen als je fans écht actief zijn.",
      f3: "Eigen Community", f3d: "Bevrijd jezelf van algoritmes. Je agenda is een directe, private lijn met je meest loyale volgers."
    },
    CN: {
      hero: "同步你的社交生活",
      sub: "连接内容、商业与社交的AI日历。让你的粉丝与你同步。",
      cta: "立即加入等候名单",
      success: "您已加入等候名单！我们会尽快与您联系。",
      badge: "SyncSocial.ai — 社交参与的未来",
      featTitle: "为什么创作者选择 SyncSocial",
      f1: "直接商业化", f1d: "无需繁琐的'个人资料链接'。直接通过粉丝订阅的日历事件销售产品。",
      f2: "全球AI时机", f2d: "我们的AI分析全球时差和互动峰值，在粉丝最活跃时精准投放内容。",
      f3: "私域流量", f3d: "摆脱算法限制。你的日历是连接忠实粉丝的最直接、私密的渠道。"
    }
  };

  const current = t[lang];

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-indigo-100">
      <nav className="flex justify-between items-center p-8 max-w-7xl mx-auto relative z-50">
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

      <section className="max-w-7xl mx-auto px-6 pt-12 pb-32 text-center relative">
        <div className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-700 px-4 py-2 rounded-full text-xs font-bold mb-8 uppercase tracking-widest">
          <Zap size={14} /> {current.badge}
        </div>
        <h1 className="text-6xl lg:text-8xl font-black tracking-tighter text-indigo-950 mb-8 leading-[0.95] max-w-5xl mx-auto">
          {current.hero}
        </h1>
        <p className="text-xl text-slate-500 max-w-2xl mx-auto mb-12 leading-relaxed font-medium italic">
          {current.sub}
        </p>
        
        {/* Email Form - NU CORRECT GECENTREERD */}
        <div className="flex justify-center items-center w-full mb-32 h-24">
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 w-full max-w-lg animate-fade-in">
              <input 
                type="email" required value={email} onChange={(e) => setEmail(e.target.value)}
                placeholder={lang === 'CN' ? '电子邮件' : (lang === 'NL' ? 'E-mailadres' : 'Email address')} 
                className="flex-1 px-8 py-5 rounded-full border-2 border-slate-100 focus:border-indigo-500 outline-none text-lg transition-all shadow-inner bg-slate-50"
              />
              <button type="submit" className="bg-indigo-950 text-white px-10 py-5 rounded-full font-black text-lg hover:bg-indigo-800 transition-all shadow-xl flex items-center justify-center gap-2 whitespace-nowrap uppercase tracking-tight">
                {current.cta} <ArrowRight size={20} />
              </button>
            </form>
          ) : (
            <div className="bg-emerald-50 border-2 border-emerald-100 p-6 rounded-[2.5rem] flex items-center justify-center gap-4 animate-scale-in w-full max-w-lg shadow-lg shadow-emerald-100">
              <CheckCircle2 size={24} className="text-emerald-500" />
              <p className="text-emerald-800 font-black text-lg text-left leading-tight">{current.success}</p>
            </div>
          )}
        </div>

        {/* Mockup Simulation */}
        <div className="relative max-w-4xl mx-auto group">
          <div className="absolute -inset-20 bg-gradient-to-r from-indigo-500 via-purple-500 to-emerald-400 opacity-20 blur-[120px] rounded-full"></div>
          <div className="relative bg-indigo-950 rounded-[3.5rem] p-4 shadow-2xl border-[14px] border-indigo-900 overflow-hidden">
            <div className="bg-slate-50 rounded-[2.5rem] overflow-hidden h-[600px] flex flex-col">
              <div className="bg-white border-b border-slate-100 p-6 flex justify-between items-center">
                <div className="flex items-center gap-3 text-left">
                  <div className="w-12 h-12 bg-indigo-950 rounded-full flex items-center justify-center text-white font-black text-xl border-2 border-white shadow-lg">MS</div>
                  <div className="leading-tight">
                    <p className="font-black text-indigo-950">Maxime & Sophie</p>
                    <p className="text-[10px] text-emerald-500 font-black uppercase tracking-widest flex items-center gap-1"><ShieldCheck size={10} /> Verified Creator</p>
                  </div>
                </div>
                <div className="w-10 h-10 bg-indigo-50 rounded-full flex items-center justify-center text-indigo-600"><Globe size={20} /></div>
              </div>

              <div className="flex-1 relative p-8">
                {currentSlide === 0 && (
                  <div className="animate-fade-in text-left">
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-6 font-bold">Today's Schedule</p>
                    <div className="p-6 bg-white border-2 border-indigo-100 rounded-[2rem] shadow-sm flex items-center gap-5">
                       <div className="w-14 h-14 bg-indigo-600 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-indigo-100"><ShoppingBag size={28} /></div>
                       <div><p className="font-black text-indigo-950 text-xl">Merch Drop</p><p className="text-xs font-bold text-slate-400 tracking-tight">14:00 • Global Ready</p></div>
                    </div>
                  </div>
                )}
                {currentSlide === 1 && (
                  <div className="animate-fade-in text-left">
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-6 font-bold">Upcoming Week</p>
                    <div className="space-y-4">
                      {[
                        { day: 'TUE', title: 'New Vlog Launch', icon: <Zap size={18} /> },
                        { day: 'WED', title: 'Live Stream Shanghai', icon: <Globe size={18} /> }
                      ].map((item, i) => (
                        <div key={i} className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm flex items-center gap-4">
                           <div className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center text-indigo-600 font-bold border border-slate-100">{item.icon}</div>
                           <div><p className="font-bold text-indigo-950 text-sm leading-tight">{item.title}</p><p className="text-[10px] text-slate-400 font-bold uppercase">{item.day} • 16:00 GMT</p></div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                {currentSlide === 2 && (
                  <div className="animate-fade-in text-center flex flex-col justify-center h-full">
                    <div className="w-24 h-24 bg-emerald-500 rounded-[2.5rem] mx-auto flex items-center justify-center text-white shadow-2xl mb-6 shadow-emerald-200"><BarChart3 size={40} /></div>
                    <p className="text-2xl font-black text-indigo-950 italic tracking-tighter">AI Revenue Pulse</p>
                    <p className="text-emerald-500 font-black mt-2 uppercase text-xs tracking-[0.2em]">Target: +240% Growth</p>
                  </div>
                )}
              </div>

              <div className="p-8 flex justify-center gap-2">
                {[0,1,2].map(i => (
                  <div key={i} className={`h-1.5 rounded-full transition-all duration-500 ${currentSlide === i ? 'w-8 bg-indigo-600' : 'w-2 bg-slate-200'}`}></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-slate-50 py-32 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl lg:text-5xl font-black text-indigo-950 mb-20 text-center tracking-tighter uppercase">{current.featTitle}</h2>
          <div className="grid lg:grid-cols-3 gap-12 lg:gap-20">
            <div className="space-y-6 text-center lg:text-left">
              <div className="w-16 h-16 bg-white rounded-2xl shadow-sm border border-slate-200 flex items-center justify-center text-indigo-600 mx-auto lg:mx-0"><ShoppingBag size={32} /></div>
              <h3 className="text-2xl font-black text-indigo-950">{current.f1}</h3>
              <p className="text-slate-500 font-medium leading-relaxed">{current.f1d}</p>
            </div>
            <div className="space-y-6 text-center lg:text-left">
              <div className="w-16 h-16 bg-white rounded-2xl shadow-sm border border-slate-200 flex items-center justify-center text-indigo-600 mx-auto lg:mx-0"><BarChart3 size={32} /></div>
              <h3 className="text-2xl font-black text-indigo-950">{current.f2}</h3>
              <p className="text-slate-500 font-medium leading-relaxed">{current.f2d}</p>
            </div>
            <div className="space-y-6 text-center lg:text-left">
              <div className="w-16 h-16 bg-white rounded-2xl shadow-sm border border-slate-200 flex items-center justify-center text-indigo-600 mx-auto lg:mx-0"><ShieldCheck size={32} /></div>
              <h3 className="text-2xl font-black text-indigo-950">{current.f3}</h3>
              <p className="text-slate-500 font-medium leading-relaxed">{current.f3d}</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-20 text-center bg-white border-t border-slate-50">
        <p className="text-slate-300 font-bold tracking-[0.3em] uppercase text-[10px]">
          &copy; 2026 SyncSocial.ai — Intelligence Synchronized.
        </p>
      </footer>
    </div>
  );
}
