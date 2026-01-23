"use client";
import React, { useState, useEffect } from 'react';
import { Globe, ArrowRight, CheckCircle2, ShieldCheck, BarChart3, Sparkles, ChevronDown } from 'lucide-react';
import { BACKGROUND_SVG } from './assets';
import { Logo, texts, CardsSection, FeaturesSection, IntegrationsSection } from './blocks';

export default function LandingPage() {
  const [lang, setLang] = useState('EN'); 
  const [showLang, setShowLang] = useState(false);
  const [curr, setCurr] = useState(0);
  const [email, setEmail] = useState('');
  const [isSub, setIsSub] = useState(false);
  const c = texts[lang] || texts['EN'];

  useEffect(() => {
    const sInt = setInterval(() => setCurr((p) => (p + 1) % c.slides.length), 3000);
    return () => clearInterval(sInt);
  }, [c.slides.length]);

  const hS = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/waitlist", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ email }) });
      if (res.ok) { setIsSub(true); setEmail(""); }
    } catch (err) { console.error(err); }
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-violet-100 overflow-x-hidden relative">
      <div className="fixed inset-0 pointer-events-none z-40 shadow-[inset_0_0_150px_rgba(139,92,246,0.25)]"></div>
      <div className="absolute inset-0 -z-10 opacity-[0.15]" style={{ backgroundImage: BACKGROUND_SVG, maskImage: 'radial-gradient(circle, black 40%, transparent 90%)' }}></div>
      <nav className="flex justify-between items-center p-8 max-w-7xl mx-auto relative z-50">
        <div className="flex items-center gap-2 cursor-pointer"><Logo className="w-12 h-12" /><span className="text-2xl font-black text-violet-950 italic">SyncSocial<span className="text-violet-600">.ai</span></span></div>
        <div className="relative">
          <button onClick={() => setShowLang(!showLang)} className="flex items-center gap-2 bg-white/60 backdrop-blur-xl px-4 py-2 rounded-full border border-slate-200 text-xs font-black text-violet-950 shadow-sm transition hover:bg-white">{lang} <ChevronDown size={14} className={`transition-transform ${showLang ? 'rotate-180' : ''}`} /></button>
          {showLang && (<div className="absolute right-0 mt-2 w-24 bg-white/90 backdrop-blur-2xl rounded-2xl border border-slate-100 shadow-2xl overflow-hidden flex flex-col z-[60]">{['EN', 'NL', 'ES', 'CN'].map((l) => (<button key={l} onClick={() => { setLang(l); setShowLang(false); }} className={`px-4 py-3 text-xs font-black text-left hover:bg-violet-50 transition ${lang === l ? 'bg-violet-100 text-violet-600' : 'text-slate-600'}`}>{l}</button>))}</div>)}
        </div>
      </nav>
      <section className="max-w-7xl mx-auto px-6 pt-12 pb-32 text-center flex flex-col items-center relative z-10">
        <div className="inline-flex items-center gap-2 bg-violet-50 text-violet-700 px-4 py-2 rounded-full text-[10px] font-black mb-8 uppercase tracking-widest"><Sparkles size={12} /> {c.b}</div>
        <h1 className="text-5xl lg:text-8xl font-black tracking-tighter text-violet-950 mb-8 leading-[0.95] max-w-4xl">{c.hero}</h1>
        <p className="text-lg lg:text-xl text-slate-500 max-w-5xl mb-12 font-medium italic">{c.sub}</p>
        <div className="w-full max-w-xl mb-24">
          {!isSub ? (<form onSubmit={hS} className="flex flex-col shadow-2xl rounded-[3rem] overflow-hidden border border-violet-100 bg-white"><input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email address" className="h-16 px-10 outline-none text-lg bg-white border-b border-slate-50" /><button type="submit" className="h-16 bg-violet-950 text-white px-8 font-black text-lg hover:bg-violet-600 transition-all flex items-center justify-center gap-2 uppercase">{c.cta} <ArrowRight size={20} /></button></form>) : (<div className="bg-emerald-50 border-2 border-emerald-100 h-16 px-10 rounded-[3rem] flex items-center justify-center gap-4 animate-scale-in w-full shadow-lg"><CheckCircle2 size={24} className="text-emerald-500" /><p className="text-emerald-800 font-black text-lg italic">{c.succ}</p></div>)}
        </div>
        <IntegrationsSection c={c} />
        <div className="relative w-full max-w-3xl mt-24">
          <div className="absolute -inset-20 bg-gradient-to-tr from-violet-500 via-purple-400 to-emerald-400 opacity-30 blur-[120px] rounded-full animate-pulse-slow"></div>
          <div className="relative bg-violet-950 rounded-[3.5rem] p-3 shadow-2xl border-[12px] border-violet-900 overflow-hidden ring-1 ring-white/10">
            <div className="bg-white rounded-[2.5rem] overflow-hidden h-[600px] flex flex-col relative shadow-inner text-left">
              <div className="bg-violet-950 p-1 flex gap-1">{c.slides.map((_,i)=>(<div key={i} className={`h-1 flex-1 rounded-full transition-all duration-500 ${i<=curr?'bg-violet-400':'bg-violet-900/30'}`}></div>))}</div>
              <div className="bg-white border-b border-slate-50 p-6 flex justify-between items-center"><div className="flex items-center gap-3"><div className="w-12 h-12 bg-violet-950 rounded-full flex items-center justify-center text-white font-black text-xl border-2 border-white shadow-lg">MS</div><div><p className="font-black text-violet-950 text-sm italic">Maxime & Sophie</p><p className="text-[10px] text-emerald-500 font-black uppercase flex items-center gap-1 mt-1"><ShieldCheck size={10} /> {c.ms}</p></div></div><Globe size={20} className="text-violet-600 animate-spin-slow" /></div>
              <div className="flex-1 relative p-8 bg-slate-50/50">
                <div key={curr} className="animate-fade-in">
                  <p className="text-[10px] font-black text-slate-400 uppercase mb-6 italic">{c.mt}</p>
                  <div className="p-8 bg-white border border-violet-100 rounded-[2.5rem] shadow-xl flex items-center gap-6 mb-8">
                    <div className="w-16 h-16 bg-violet-600 rounded-2xl flex items-center justify-center text-white shadow-lg">{c.slides[curr].i}</div>
                    <div><p className="font-black text-violet-950 text-xl leading-none italic">{c.slides[curr].t}</p><p className="text-[11px] font-bold text-slate-400 mt-2 uppercase">{c.slides[curr].d}</p></div>
                  </div>
                  <div className="bg-violet-950 p-6 rounded-[2rem] shadow-lg flex items-center justify-between"><span className="text-[10px] font-black text-violet-200 uppercase tracking-[0.2em]">{c.slides[curr].s}</span><BarChart3 className="text-emerald-400" size={18}/></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <CardsSection c={c} /><FeaturesSection c={c} />
      <footer className="py-20 text-center border-t border-slate-100 bg-white/60"><p className="text-slate-300 font-bold tracking-[0.3em] uppercase text-[10px] italic">&copy; 2026 SyncSocial.ai</p></footer>
      <style jsx global>{`@keyframes spin-slow{from{transform:rotate(0)}to{transform:rotate(360deg)}}.animate-spin-slow{animation:spin-slow 15s linear infinite}@keyframes pulse-slow{0%,100%{opacity:0.2;transform:scale(1)}50%{opacity:0.4;transform:scale(1.1)}}.animate-pulse-slow{animation:pulse-slow 8s ease-in-out infinite}@keyframes fade-in{from{opacity:0;transform:translateY(10px)}to{opacity:1;transform:translateY(0)}}.animate-fade-in{animation:fade-in 0.8s ease-out forwards}@keyframes scale-in{from{transform:scale(0.95);opacity:0}to{transform:scale(1);opacity:1}}.animate-scale-in{animation:scale-in 0.4s cubic-bezier(0.16,1,0.3,1) forwards}`}</style>
    </div>
  );
}
