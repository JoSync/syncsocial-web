"use client";
import React, { useState, useEffect } from 'react';
import { Calendar, ShoppingBag, Globe, Zap, Infinity, ArrowRight, CheckCircle2, Clock, DollarSign, ChevronRight, ShieldCheck, BarChart3 } from 'lucide-react';

export default function LandingPage() {
  const [lang, setLang] = useState('EN'); 
  const [currentSlide, setCurrentSlide] = useState(0);
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => setCurrentSlide((prev) => (prev + 1) % 3), 5000);
    return () => clearInterval(interval);
  }, []);

  const t = {
    EN: {
      hero: "Your life, synchronized with your community.",
      sub: "The first AI-powered calendar bridging content, commerce, and community.",
      cta: "Claim Early Access", success: "You're on the list!",
      badge: "SyncSocial.ai — The future of engagement",
      featTitle: "Why creators choose SyncSocial",
      f1: "Direct Commerce", f1d: "Sell products directly through calendar events.",
      f2: "Global AI Timing", f2d: "AI drops content when fans are most active.",
      f3: "Owned Audience", f3d: "A direct, private line to your most loyal community.",
      m_status: "Verified Creator", m_today: "Today", m_event1: "Merch Drop", m_week: "Next Week", m_ai: "AI Revenue Pulse"
    },
    NL: {
      hero: "Jouw leven, gesynchroniseerd met je community.",
      sub: "De eerste AI-gedreven agenda die content, commerce en community op één plek samenbrengt.",
      cta: "Claim vroege toegang", success: "Je staat op de lijst!",
      badge: "SyncSocial.ai — De toekomst van engagement",
      featTitle: "Waarom creators voor SyncSocial kiezen",
      f1: "Directe Verkoop", f1d: "Verkoop merch direct vanuit de agenda.",
      f2: "Wereldwijde AI Timing", f2d: "AI dropt content als fans écht actief zijn.",
      f3: "Eigen Community", f3d: "Een directe, private lijn met je volgers.",
      m_status: "Geverifieerde Creator", m_today: "Vandaag", m_event1: "Merch Drop", m_week: "Volgende Week", m_ai: "AI Omzet Pulse"
    },
    CN: {
      hero: "同步你的社交生活",
      sub: "连接内容、商业与社交的AI日历。让你的粉丝与你同步。",
      cta: "立即加入", success: "您已加入！",
      badge: "SyncSocial.ai — 社交参与的未来",
      featTitle: "为什么选择 SyncSocial",
      f1: "直接商业化", f1d: "直接通过日历事件销售产品。",
      f2: "全球AI时机", f2d: "AI在粉丝最活跃时精准投放内容。",
      f3: "私域流量", f3d: "连接忠实粉丝的最直接、私密的渠道。",
      m_status: "认证创作者", m_today: "今日", m_event1: "周边上新", m_week: "本周预告", m_ai: "AI 营收脉搏"
    }
  };

  const current = t[lang];

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-indigo-100">
      <nav className="flex justify-between items-center p-8 max-w-7xl mx-auto relative z-50">
        <div className="flex items-center gap-2 group cursor-pointer">
          <Infinity className="text-indigo-950 w-10 h-10 transition-transform group-hover:rotate-12" />
          <span className="text-2xl font-black text-indigo-950 italic">SyncSocial<span className="text-indigo-600">.ai</span></span>
        </div>
        <div className="flex bg-slate-100 p-1 rounded-full border border-slate-200 shadow-sm">
          {['NL', 'EN', 'CN'].map((l) => (
            <button key={l} onClick={() => setLang(l)} className={`px-4 py-1 rounded-full text-xs font-black transition ${lang === l ? 'bg-white shadow-sm text-indigo-600' : 'text-slate-400'}`}>{l}</button>
          ))}
        </div>
      </nav>

      <section className="max-w-7xl mx-auto px-6 pt-12 pb-32 text-center flex flex-col items-center">
        <div className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-700 px-4 py-2 rounded-full text-xs font-bold mb-8 uppercase tracking-widest animate-fade-in"><Zap size={14} /> {current.badge}</div>
        <h1 className="text-5xl lg:text-8xl font-black tracking-tighter text-indigo-950 mb-8 leading-tight max-w-5xl">{current.hero}</h1>
        <p className="text-xl text-slate-500 max-w-2xl mb-12 font-medium italic">{current.sub}</p>
        
        <div className="w-full max-w-xl mx-auto mb-32">
          {!isSubmitted ? (
            <form onSubmit={(e) => { e.preventDefault(); setIsSubmitted(true); }} className="flex flex-col sm:flex-row w-full animate-fade-in shadow-2xl rounded-full overflow-hidden border-2 border-slate-100">
              <input type="email" required placeholder={lang === 'CN' ? '电子邮件' : (lang === 'NL' ? 'E-mailadres' : 'Email address')} className="flex-[2] h-16 px-8 outline-none text-lg bg-slate-50 focus:bg-white transition-all" />
              <button type="submit" className="flex-1 h-16 bg-indigo-950 text-white px-8 font-black text-lg hover:bg-indigo-800 transition-all flex items-center justify-center gap-2 uppercase whitespace-nowrap">{current.cta} <ArrowRight size={20} /></button>
            </form>
          ) : (
            <div className="bg-emerald-50 border-2 border-emerald-100 h-16 px-8 rounded-full flex items-center justify-center gap-4 animate-scale-in w-full shadow-lg">
              <CheckCircle2 size={24} className="text-emerald-500" />
              <p className="text-emerald-800 font-black text-lg">{current.success}</p>
            </div>
          )}
        </div>

        <div className="relative w-full max-w-4xl group">
          <div className="absolute -inset-10 bg-gradient-to-r from-indigo-500 to-emerald-400 opacity-20 blur-[100px] rounded-full group-hover:opacity-30 transition-opacity"></div>
          <div className="relative bg-indigo-950 rounded-[3rem] p-3 shadow-2xl border-[12px] border-indigo-900 overflow-hidden">
            <div className="bg-slate-50 rounded-[2rem] overflow-hidden h-[600px] flex flex-col border border-indigo-800/20">
              <div className="bg-white border-b border-slate-100 p-6 flex justify-between items-center text-left">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-indigo-950 rounded-full flex items-center justify-center text-white font-black text-xl border-2 border-white shadow-md">MS</div>
                  <div><p className="font-black text-indigo-950 text-sm">Maxime & Sophie</p><p className="text-[10px] text-emerald-500 font-black uppercase tracking-widest flex items-center gap-1"><ShieldCheck size={10} /> {current.m_status}</p></div>
                </div>
                <div className="w-10 h-10 bg-indigo-50 rounded-full flex items-center justify-center text-indigo-600"><Globe size={20} /></div>
              </div>
              <div className="flex-1 relative p-8">
                {currentSlide === 0 && <div className="animate-fade-in text-left">
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-6">{current.m_today}</p>
                  <div className="p-6 bg-white border-2 border-indigo-100 rounded-3xl shadow-sm flex items-center gap-4">
                    <div className="w-12 h-12 bg-indigo-600 rounded-2xl flex items-center justify-center text-white"><ShoppingBag size={24} /></div>
                    <div><p className="font-black text-indigo-950 text-lg leading-none">{current.m_event1}</p><p className="text-[10px] font-bold text-slate-400 mt-1 uppercase">14:00 GMT</p></div>
                  </div>
                </div>}
                {currentSlide === 1 && <div className="animate-fade-in text-left">
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-6">{current.m_week}</p>
                  <div className="space-y-3">
                    {['Content Drop', 'Shanghai Live'].map((e, i) => (
                      <div key={i} className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm flex items-center gap-4">
                        <div className="w-8 h-8 bg-slate-50 rounded-lg border flex items-center justify-center text-indigo-600"><Zap size={16} /></div>
                        <p className="font-bold text-indigo-950 text-sm">{e}</p>
                      </div>
                    ))}
                  </div>
                </div>}
                {currentSlide === 2 && <div className="animate-fade-in text-center flex flex-col justify-center h-full">
                  <div className="w-20 h-20 bg-emerald-500 rounded-3xl mx-auto flex items-center justify-center text-white shadow-xl mb-4"><BarChart3 size={36} /></div>
                  <p className="text-xl font-black text-indigo-950 italic">{current.m_ai}</p>
                  <p className="text-emerald-500 font-black uppercase text-[10px] tracking-widest mt-2">Target Achieved</p>
                </div>}
              </div>
              <div className="p-8 flex justify-center gap-2">
                {[0,1,2].map(i => <div key={i} className={`h-1.5 rounded-full transition-all ${currentSlide === i ? 'w-8 bg-indigo-600' : 'w-2 bg-slate-200'}`}></div>)}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-32 border-t border-slate-100 text-center lg:text-left">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl lg:text-5xl font-black text-indigo-950 mb-20 text-center tracking-tighter uppercase">{current.featTitle}</h2>
          <div className="grid lg:grid-cols-3 gap-12 lg:gap-20 text-center">
            <div className="space-y-4">
              <div className="w-16 h-16 bg-white rounded-2xl shadow-sm border border-slate-200 flex items-center justify-center text-indigo-600 mx-auto"><ShoppingBag size={32} /></div>
              <h3 className="text-xl font-black text-indigo-950">{current.f1}</h3>
              <p className="text-slate-500 font-medium">{current.f1d}</p>
            </div>
            <div className="space-y-4">
              <div className="w-16 h-16 bg-white rounded-2xl shadow-sm border border-slate-200 flex items-center justify-center text-indigo-600 mx-auto"><BarChart3 size={32} /></div>
              <h3 className="text-xl font-black text-indigo-950">{current.f2}</h3>
              <p className="text-slate-500 font-medium">{current.f2d}</p>
            </div>
            <div className="space-y-4">
              <div className="w-16 h-16 bg-white rounded-2xl shadow-sm border border-slate-200 flex items-center justify-center text-indigo-600 mx-auto"><ShieldCheck size={32} /></div>
              <h3 className="text-xl font-black text-indigo-950">{current.f3}</h3>
              <p className="text-slate-500 font-medium">{current.f3d}</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-20 text-center border-t border-slate-50 bg-white">
        <p className="text-slate-300 font-bold tracking-[0.3em] uppercase text-[10px]">&copy; 2026 SyncSocial.ai — Intelligence Synchronized.</p>
      </footer>
    </div>
  );
}
