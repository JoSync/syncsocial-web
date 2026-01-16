"use client";
import React, { useState, useEffect } from 'react';
import { Calendar, ShoppingBag, Globe, Zap, Infinity, ArrowRight, CheckCircle2, Clock, DollarSign, ShieldCheck, BarChart3, Heart, Users, MousePointer2, Sparkles, MessageCircle } from 'lucide-react';

export default function LandingPage() {
  const [lang, setLang] = useState('EN'); 
  const [currentSlide, setCurrentSlide] = useState(0);
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [viewers, setViewers] = useState(12400);

  useEffect(() => {
    const sInt = setInterval(() => setCurrentSlide((p) => (p + 1) % 4), 5000);
    const vInt = setInterval(() => setViewers(v => v + Math.floor(Math.random() * 50)), 2000);
    return () => { clearInterval(sInt); clearInterval(vInt); };
  }, []);

  const t = {
    EN: { hero: "Your life, synchronized with your community.", sub: "The first AI-powered calendar bridging content, commerce, and community.", cta: "Claim Access", success: "You're on the list!", badge: "SyncSocial.ai — The future of engagement", s1: "Connect", s1d: "Link socials & store.", s2: "Sync", s2d: "AI builds your schedule.", s3: "Grow", s3d: "Lead fans to revenue.", fTitle: "Platform Features", f1: "Direct Commerce", f1d: "Sell merch directly.", f2: "Global AI Timing", f2d: "Optimized drops.", f3: "Owned Audience", f3d: "Direct line to fans.", m_status: "Verified", m_today: "Today", m_live: "Live Now" },
    NL: { hero: "Jouw leven, gesynchroniseerd met je community.", sub: "De eerste AI-gedreven agenda die content, commerce en community verbindt.", cta: "Claim toegang", success: "Je staat op de lijst!", badge: "SyncSocial.ai — De toekomst van engagement", s1: "Koppel", s1d: "Link je socials & shop.", s2: "Sync", s2d: "AI bouwt je agenda.", s3: "Groei", s3d: "Leid fans naar sales.", fTitle: "Platform Functies", f1: "Directe Verkoop", f1d: "Verkoop merch vanuit agenda.", f2: "Wereldwijde AI Timing", f2d: "Drop op piekmomenten.", f3: "Eigen Community", f3d: "Directe lijn met fans.", m_status: "Geverifieerd", m_today: "Vandaag", m_live: "Nu Live" },
    CN: { hero: "同步你的社交生活", sub: "连接内容、商业与社交的AI日历。", cta: "立即加入", success: "您已加入！", badge: "SyncSocial.ai — 社交参与的未来", s1: "连接", s1d: "连接社交账号与商店。", s2: "同步", s2d: "AI 自动生成日程。", s3: "增长", s3d: "引导粉丝进入变现。", fTitle: "平台功能", f1: "直接商业化", f1d: "直接通过日历销售。", f2: "全球AI时机", f2d: "针对各时区优化时间。", f3: "私域流量", f3d: "连接忠实粉丝的渠道。", m_status: "认证创作者", m_today: "今日", m_live: "直播中" }
  };
  const c = t[lang];

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-indigo-100 overflow-x-hidden relative">
      {/* Verrassing: De Hexagon Grid 2.0 (Nu duidelijker) */}
      <div className="absolute inset-0 -z-10 opacity-[0.12]" 
           style={{ 
             backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='28' height='49' viewBox='0 0 28 49'%3E%3Cpath fill-rule='evenodd' d='M13.99 9.25l13 7.5v15l-13 7.5L1 31.75v-15l12.99-7.5zM3 17.89v12.72l11 6.35 11-6.35V17.89l-11-6.35-11 6.35z' fill='%234338ca' /%3E%3C/svg%3E")`,
             maskImage: 'radial-gradient(circle, black 40%, transparent 90%)'
           }}>
      </div>

      <nav className="flex justify-between items-center p-8 max-w-7xl mx-auto relative z-50">
        <div className="flex items-center gap-2 group cursor-pointer">
          <Infinity className="text-indigo-950 w-10 h-10 transition-transform group-hover:rotate-12" />
          <span className="text-2xl font-black text-indigo-950 italic">SyncSocial<span className="text-indigo-600">.ai</span></span>
        </div>
        <div className="flex bg-white/60 backdrop-blur-xl p-1 rounded-full border border-slate-200 shadow-sm">
          {['NL', 'EN', 'CN'].map((l) => (
            <button key={l} onClick={() => setLang(l)} className={`px-4 py-1 rounded-full text-xs font-black transition-all ${lang === l ? 'bg-indigo-950 text-white shadow-lg' : 'text-slate-400'}`}>{l}</button>
          ))}
        </div>
      </nav>

      <section className="max-w-7xl mx-auto px-6 pt-12 pb-32 text-center flex flex-col items-center relative">
        {/* Floating Icons Parallax */}
        <div className="absolute top-20 left-10 animate-float opacity-30 hidden lg:block text-indigo-600"><Heart size={44} /></div>
        <div className="absolute bottom-40 right-10 animate-float-slow opacity-30 hidden lg:block text-emerald-500"><DollarSign size={44} /></div>

        <div className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-700 px-4 py-2 rounded-full text-[10px] font-black mb-8 uppercase tracking-widest"><Sparkles size={12} /> {c.badge}</div>
        <h1 className="text-5xl lg:text-8xl font-black tracking-tighter text-indigo-950 mb-8 leading-[0.95] max-w-4xl">{c.hero}</h1>
        <p className="text-xl text-slate-500 max-w-2xl mx-auto mb-12 font-medium italic">{c.sub}</p>
        
        {/* Email Form: De nieuwe, compacte h-16 versie */}
        <div className="w-full max-w-xl mx-auto mb-32 flex flex-col items-center">
          {!isSubmitted ? (
            <form onSubmit={(e) => { e.preventDefault(); setIsSubmitted(true); }} className="flex flex-col sm:flex-row w-full animate-fade-in shadow-[0_25px_50px_-12px_rgba(67,56,202,0.25)] rounded-full overflow-hidden border border-indigo-100 bg-white">
              <input type="email" required placeholder={lang === 'CN' ? '电子邮件' : 'Email address'} 
                     className="flex-[2] h-16 px-10 outline-none text-lg bg-white border-b sm:border-b-0 sm:border-r border-slate-100" />
              <button type="submit" className="flex-1 h-16 bg-indigo-950 text-white px-8 font-black text-lg hover:bg-indigo-600 transition-all flex items-center justify-center gap-2 uppercase">
                {c.cta} <ArrowRight size={20} />
              </button>
            </form>
          ) : (
            <div className="bg-emerald-50 border-2 border-emerald-100 h-16 px-10 rounded-full flex items-center justify-center gap-4 animate-scale-in w-full shadow-lg">
              <CheckCircle2 size={24} className="text-emerald-500" />
              <p className="text-emerald-800 font-black text-lg italic">{c.success}</p>
            </div>
          )}
          <div className="flex items-center gap-3 mt-8 opacity-60">
             <div className="flex -space-x-3">
               {[1,2,3,4].map(i => <div key={i} className={`w-9 h-9 rounded-full border-2 border-white bg-indigo-${i*100+100} shadow-sm`}></div>)}
             </div>
             <div className="flex items-center gap-2 text-slate-400">
               <Sparkles size={14} className="text-indigo-400" />
               <p className="text-[10px] font-black uppercase tracking-widest italic tracking-widest">Join 500+ creators in sync</p>
             </div>
          </div>
        </div>

                              {/* Mockup Simulation: De Aurora Glow verrassing */}
        <div className="relative w-full max-w-3xl">
          <div className="absolute -inset-20 bg-gradient-to-tr from-indigo-500 via-purple-400 to-emerald-400 opacity-30 blur-[120px] rounded-full animate-pulse-slow"></div>
          <div className="relative bg-indigo-950 rounded-[3.5rem] p-3 shadow-2xl border-[12px] border-indigo-900 overflow-hidden ring-1 ring-white/10">
            <div className="bg-white rounded-[2.5rem] overflow-hidden h-[600px] flex flex-col relative shadow-inner">
              <div className="bg-white border-b border-slate-50 p-6 flex justify-between items-center text-left sticky top-0 z-10">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-indigo-950 rounded-full flex items-center justify-center text-white font-black text-xl border-2 border-white">MS</div>
                  <div className="text-left leading-tight"><p className="font-black text-indigo-950 text-sm">{lang === 'CN' ? '创作者' : 'Maxime & Sophie'}</p><p className="text-[10px] text-emerald-500 font-black uppercase tracking-widest flex items-center gap-1 mt-1"><ShieldCheck size={10} /> {c.m_status}</p></div>
                </div>
                <Globe size={20} className="text-indigo-600 animate-spin-slow" />
              </div>
              <div className="flex-1 relative p-8">
                {currentSlide === 0 && <div className="animate-fade-in text-left">
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-6">{c.m_today}</p>
                  <div className="p-6 bg-indigo-50 border border-indigo-100 rounded-3xl shadow-sm flex items-center gap-4">
                    <div className="w-12 h-12 bg-indigo-600 rounded-2xl flex items-center justify-center text-white"><ShoppingBag size={24} /></div>
                    <div><p className="font-black text-indigo-950 text-lg leading-none">Merch Drop</p><p className="text-[10px] font-bold text-indigo-400 mt-1 uppercase">14:00 GMT</p></div>
                  </div>
                </div>}
                {currentSlide === 1 && <div className="animate-fade-in text-left"><p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-6 italic">Weekly Overview</p><div className="space-y-3">{[1,2,3].map(i => <div key={i} className="h-14 bg-slate-50 rounded-2xl border flex items-center px-4"><div className="w-8 h-8 rounded-full bg-white border mr-4 shadow-sm"></div><div className="h-2 w-24 bg-slate-200 rounded-full"></div></div>)}</div></div>}
                {currentSlide === 2 && <div className="animate-fade-in flex flex-col items-center justify-center h-full text-center">
                  <div className="relative mb-6">
                    <div className="absolute -top-2 -right-2 bg-red-500 text-white text-[9px] font-black px-3 py-1 rounded-full animate-pulse">{c.m_live}</div>
                    <div className="w-32 h-32 bg-indigo-950 rounded-[2.5rem] flex items-center justify-center border-4 border-white shadow-xl overflow-hidden"><Globe size={48} className="text-indigo-400" /></div>
                  </div>
                  <div className="flex items-center gap-2 bg-indigo-50 px-5 py-2 rounded-full border border-indigo-100 shadow-sm"><Users size={16} /><span className="font-black text-indigo-950">{viewers.toLocaleString()}</span></div>
                </div>}
                {currentSlide === 3 && <div className="animate-fade-in flex flex-col items-center justify-center h-full"><BarChart3 size={64} className="text-emerald-500 mb-4 animate-bounce-slow" /><p className="text-2xl font-black text-indigo-950 italic">AI Analytics</p></div>}
              </div>
              <div className="p-8 flex justify-center gap-2">
                {[0,1,2,3].map(i => <div key={i} className={`h-1.5 rounded-full transition-all duration-500 ${currentSlide === i ? 'w-10 bg-indigo-600 shadow-sm' : 'w-2 bg-slate-200'}`}></div>)}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-24 relative z-10">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
          {[ { i: <MousePointer2 />, t: c.s1, d: c.s1d }, { i: <Infinity />, t: c.s2, d: c.s2d }, { i: <Zap />, t: c.s3, d: c.s3d } ].map((s, i) => (
            <div key={i} className="bg-white/60 backdrop-blur-xl p-10 rounded-[3rem] border border-white shadow-sm text-center space-y-4 hover:shadow-2xl transition-all group">
              <div className="w-16 h-16 bg-indigo-600 text-white rounded-2xl flex items-center justify-center mx-auto transition-transform group-hover:rotate-12 shadow-lg">{s.i}</div>
              <h3 className="text-xl font-black text-indigo-950 italic tracking-tighter uppercase">{s.t}</h3>
              <p className="text-slate-500 font-medium text-sm">{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="py-32 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl lg:text-7xl font-black text-indigo-950 tracking-tighter uppercase text-center mb-20 italic">{c.fTitle}</h2>
          <div className="grid lg:grid-cols-3 gap-8">
            {[ { i: <ShoppingBag />, t: c.f1, d: c.f1d }, { i: <BarChart3 />, t: c.f2, d: c.f2d }, { i: <ShieldCheck />, t: c.f3, d: c.f3d } ].map((f, i) => (
              <div key={i} className="p-12 rounded-[3.5rem] bg-white border border-slate-100 hover:border-indigo-100 transition-all group relative overflow-hidden">
                <div className="w-14 h-14 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-indigo-950 group-hover:text-white transition-all">{f.i}</div>
                <h3 className="text-2xl font-black text-indigo-950 mb-4 italic leading-none">{f.t}</h3>
                <p className="text-slate-500 font-medium leading-relaxed">{f.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="py-20 text-center border-t border-slate-100 bg-white/60 backdrop-blur-md">
        <p className="text-slate-300 font-bold tracking-[0.3em] uppercase text-[10px] italic">&copy; 2026 SyncSocial.ai</p>
      </footer>

      <style jsx global>{`
        @keyframes float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-20px); } }
        .animate-float { animation: float 5s ease-in-out infinite; }
        .animate-float-slow { animation: float 7s ease-in-out infinite; }
        @keyframes spin-slow { from { transform: rotate(0); } to { transform: rotate(360deg); } }
        .animate-spin-slow { animation: spin-slow 15s linear infinite; }
        @keyframes pulse-slow { 0%, 100% { opacity: 0.2; transform: scale(1); } 50% { opacity: 0.4; transform: scale(1.1); } }
        .animate-pulse-slow { animation: pulse-slow 8s ease-in-out infinite; }
      `}</style>
    </div>
  );
}
