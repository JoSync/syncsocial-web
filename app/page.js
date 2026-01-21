"use client";
import React, { useState, useEffect } from 'react';
import { ShoppingBag, Globe, Zap, ArrowRight, CheckCircle2, ShieldCheck, BarChart3, Users, MousePointer2, Sparkles } from 'lucide-react';
import { BACKGROUND_SVG } from './assets';

// Het Cyber-S Logo met Roze-Paarse Gradient
const Logo = ({ className }) => (
  <svg viewBox="0 0 128 128" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="cyber-gradient" x1="0%" y1="100%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#FF00E4" />
        <stop offset="100%" stopColor="#8B5CF6" />
      </linearGradient>
    </defs>
    <path d="M95,35 C95,15 65,15 65,35 C65,55 95,73 95,93 C95,113 65,113 65,93 M35,93 C35,113 65,113 65,93 C65,73 35,55 35,35 C35,15 65,15 65,35" stroke="url(#cyber-gradient)" strokeWidth="14" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/waitlist", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ email }) });
      if (res.ok) { setIsSubmitted(true); setEmail(""); } else { alert("Error!"); }
    } catch (err) { console.error(err); }
  };

  const t = {
    EN: { hero: "Your life, synchronized with your community.", sub: "The first AI-powered calendar bridging content, commerce, and community.", cta: "Claim Access", succ: "Success! You're on the list.", b: "SyncSocial.ai — The future of engagement", s1: "Connect", s1d: "Link socials & store.", s2: "Sync", s2d: "AI builds your schedule.", s3: "Grow", s3d: "Lead fans to revenue.", ft: "Platform Features", f1: "Direct Commerce", f1d: "Sell merch directly.", f2: "Global AI Timing", f2d: "Optimized drops.", f3: "Owned Audience", f3d: "Direct line to fans.", ms: "Verified", mt: "Today", ml: "Live Now" },
    NL: { hero: "Jouw leven, gesynchroniseerd met je community.", sub: "De eerste AI-gedreven agenda die content, commerce en community verbindt.", cta: "Claim toegang", succ: "Succes! Je staat op de lijst.", b: "SyncSocial.ai — De toekomst van engagement", s1: "Koppel", s1d: "Link je socials & shop.", s2: "Sync", s2d: "AI bouwt je agenda.", s3: "Groei", s3d: "Leid fans naar sales.", ft: "Platform Functies", f1: "Directe Verkoop", f1d: "Verkoop merch vanuit agenda.", f2: "Wereldwijde AI Timing", f2d: "Drop op piekmomenten.", f3: "Eigen Community", f3d: "Directe lijn met fans.", ms: "Geverifieerd", mt: "Vandaag", ml: "Nu Live" },
    CN: { hero: "同步你的社交生活", sub: "连接内容、商业与社交的AI日历。", cta: "立即加入", succ: "成功！您已加入名单。", b: "SyncSocial.ai — 社交参与的未来", s1: "连接", s1d: "连接社交账号与商店。", s2: "同步", s2d: "AI 自动生成日程。", s3: "增长", s3d: "引导粉丝进入变现环节。", ft: "平台功能", f1: "直接商业化", f1d: "直接通过日历销售。", f2: "全球AI时机", f2d: "针对各时区优化时间。", f3: "私域流量", f3d: "连接忠实粉丝的渠道。", ms: "认证创作者", mt: "今日", ml: "直播中" }
  };
  const c = t[lang];

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-indigo-100 overflow-x-hidden relative">
      
      {/* DE PAARSE GLOED AAN DE RANDEN */}
      <div className="fixed inset-0 pointer-events-none z-40 shadow-[inset_0_0_120px_rgba(139,92,246,0.15)]"></div>

      <div className="absolute inset-0 -z-10 opacity-[0.15]" style={{ backgroundImage: BACKGROUND_SVG, maskImage: 'radial-gradient(circle, black 40%, transparent 90%)' }}></div>
      
      <nav className="flex justify-between items-center p-8 max-w-7xl mx-auto relative z-50">
        <div className="flex items-center gap-2 cursor-pointer">
            <Logo className="w-12 h-12" />
            <span className="text-2xl font-black text-indigo-950 italic">SyncSocial<span className="text-indigo-600">.ai</span></span>
        </div>
        <div className="flex bg-white/60 backdrop-blur-xl p-1 rounded-full border border-slate-200 shadow-sm">
          {['NL', 'EN', 'CN'].map((l) => (<button key={l} onClick={() => setLang(l)} className={`px-4 py-1 rounded-full text-xs font-black transition ${lang === l ? 'bg-indigo-950 text-white shadow-lg' : 'text-slate-400'}`}>{l}</button>))}
        </div>
      </nav>

      <section className="max-w-7xl mx-auto px-6 pt-12 pb-32 text-center flex flex-col items-center">
        <div className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-700 px-4 py-2 rounded-full text-[10px] font-black mb-8 uppercase tracking-widest"><Sparkles size={12} /> {c.b}</div>
        <h1 className="text-5xl lg:text-8xl font-black tracking-tighter text-indigo-950 mb-8 leading-[0.95] max-w-4xl">{c.hero}</h1>
        <p className="text-xl text-slate-500 max-w-2xl mb-12 font-medium italic">{c.sub}</p>
        
        <div className="w-full max-w-xl mb-32">
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row shadow-2xl rounded-full overflow-hidden border border-indigo-100 bg-white">
              <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email address" className="flex-[2] h-16 px-10 outline-none text-lg bg-white border-b sm:border-b-0 sm:border-r border-slate-100" />
              <button type="submit" className="flex-1 h-16 bg-indigo-950 text-white px-8 font-black text-lg hover:bg-indigo-600 transition-all flex items-center justify-center gap-2 uppercase">{c.cta} <ArrowRight size={20} /></button>
            </form>
          ) : (
            <div className="bg-emerald-50 border-2 border-emerald-100 h-16 px-10 rounded-full flex items-center justify-center gap-4 animate-scale-in w-full shadow-lg">
              <CheckCircle2 size={24} className="text-emerald-500" /><p className="text-emerald-800 font-black text-lg italic">{c.succ}</p>
            </div>
          )}
          <div className="flex items-center justify-center gap-3 mt-8">
             <div className="flex -space-x-3">{[1,2,3,4].map(i => <div key={i} className="w-9 h-9 rounded-full border-2 border-indigo-50 bg-white shadow-sm flex items-center justify-center text-indigo-300"><Users size={14} />
