"use client";
import React, { useState, useEffect } from 'react';
import { Globe, ArrowRight, CheckCircle2, ShieldCheck, Sparkles, ChevronDown, BarChart3 } from 'lucide-react';
import { BACKGROUND_SVG } from './assets';
import { Logo, texts, IntegrationsSection } from './blocks';

export default function LandingPage() {
  const [lang, setLang] = useState('EN'); const [showL, setShowL] = useState(false);
  const [pillar, setPillar] = useState('creators'); const [curr, setCurr] = useState(0);
  const [email, setEmail] = useState(''); const [isSub, setIsSub] = useState(false);
  
  const c = texts[lang] || texts['EN'];
  const p = c.p[pillar];

  useEffect(() => {
    if (p.sl.length > 0) {
      const sI = setInterval(() => setCurr((prev) => (prev + 1) % p.sl.length), 4000);
      return () => clearInterval(sI);
    }
  }, [p.sl.length, pillar]);

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-violet-100 overflow-x-hidden relative text-center">
      <div className="fixed inset-0 pointer-events-none z-40 shadow-[inset_0_0_150px_rgba(139,92,246,0.25)]"></div>
      <div className="absolute inset-0 -z-10 opacity-[0.15]" style={{ backgroundImage: BACKGROUND_SVG, maskImage: 'radial-gradient(circle, black 40%, transparent 90%)' }}></div>
      <nav className="flex justify-between items-center p-8 max-w-7xl mx-auto relative z-50">
        <div className="flex items-center gap-2 cursor-pointer"><Logo className="w-12 h-12" /><span className="text-2xl font-black text-violet-950 italic">SyncSocial<span className="text-violet-600">.ai</span></span></div>
        <div className="relative"><button onClick={() => setShowL(!showL)} className="flex items-center gap-2 bg-white/60 backdrop-blur-xl px-4 py-2 rounded-full border border-slate-200 text-xs font-black text-violet-950 shadow-sm">{lang} <ChevronDown size={14}/></button>
          {showL && (<div className="absolute right-0 mt-2 w-24 bg-white/90 backdrop-blur-2xl rounded-2xl border border-slate-100 shadow-2xl overflow-hidden flex flex-col z-[60]">{Object.keys(texts).map((l) => (<button key={l} onClick={() => { setLang(l); setShowL(false); }} className={`px-4 py-3 text-xs font-black text-left hover:bg-violet-50 transition ${lang === l ? 'bg-violet-100 text-violet-600' : 'text-slate-600'}`}>{l}</button>))}</div>)}
        </div>
      </nav>
      <section className="max-w-7xl mx-auto px-6 pt-12 pb-32 flex flex-col items-center relative z-10">
        <div className="inline-flex items-center gap-2 bg-violet-50 text-violet-700 px-4 py-2 rounded-full text-[10px] font-black mb-8 uppercase tracking-widest"><Sparkles size={12} /> {c.b}</div>
        <h1 className="text-5xl lg:text-8xl font-black tracking-tighter text-violet-950 mb-8 leading-[0.95] max-w-5xl">{c.h1}<br/><span className="text-violet-600">{c.h2}</span></h1>
        <p className="text-lg lg:text-xl text-slate-500 max-w-none mb-12 font-medium italic whitespace-nowrap">{c.sub}</p>
        <div className="w-full max-w-xl mb-16">
          {!isSub ? (<form onSubmit={(e)=>{e.preventDefault();setIsSub(true)}} className="flex flex-col shadow-2xl rounded-[3rem] overflow-hidden border border-violet-100 bg-white"><input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email address" className="h-16 px-10 outline-none text-lg bg-white border-b border-slate-50" /><button type="submit" className="h-16 bg-violet-950 text-white px-8 font-black text-lg hover:bg-violet-600 transition-all flex items-center justify-center gap-2 uppercase">{c.cta} <ArrowRight size={20} /></button></form>) : (<div className="bg-emerald-50 border-2 border-emerald-100 h-16 px-10 rounded-[3rem] flex items-center justify-center gap-4 animate-scale-in w-full shadow-lg"><CheckCircle2 size={24} className="text-emerald-500" /><p className="text-emerald-800 font-black text-lg italic">Success!</p></div>)}
        </div>
        <div className="flex bg-slate-100/50 p-1.5 rounded-full mb-16 gap-1 w-full max-w-xl border border-slate-100 backdrop-blur-sm">
          {Object.keys(c.p).map((k) => (<button key={k} onClick={() => {setPillar(k); setCurr(0);}} className={`flex-1 py-3 rounded-full text-[10px] font-black uppercase transition-all ${pillar === k ? 'bg-violet-950 text-white shadow-lg' : 'text-slate-400 hover:text-slate-600'}`}>{c.p[k].l}</button>))}
        </div>
        <div className="w-full max-w-3xl mb-20 animate-fade-in" key={pillar}>
          <h2 className="text-4xl font-black text-violet-950 italic mb-4 tracking-tighter uppercase">{p.t}</h2>
          <p className="text-slate-500 font-medium mb-12 italic">{p.s}</p>
          <div className="relative bg-violet-950 rounded-[4rem] p-4 shadow-3xl border-[16px] border-violet-900 overflow-hidden">
            <div className="bg-white rounded-[3rem] overflow-hidden h-[500px] flex flex-col relative text-left">
              <div className="bg-violet-950 p-1 flex gap-1">{p.sl.map((_,i)=>(<div key={i} className={`h-1 flex-1 rounded-full transition-all duration-500 ${i<=curr?'bg-violet-400':'bg-violet-900/40'}`}></div>))}</div>
              <div className="p-8 flex justify-between items-center border-b border-slate-50"><div className="flex items-center gap-4"><div className="w-14 h-14 bg-violet-950 rounded-full flex items-center justify-center text-white font-black text-2xl border-2 border-white">SYNC</div><div><p className="font-black text-violet-950 italic text-lg leading-tight">Universal Life</p><p className="text-[10px] text-emerald-500 font-black uppercase tracking-widest mt-1 flex items-center gap-1"><ShieldCheck size={10}/> All Systems Connected</p></div></div><Globe size={24} className="text-violet-600 animate-spin-slow" /></div>
              <div className="flex-1 p-10 bg-slate-50/50 flex flex-col justify-center">{p.sl.length > 0 ? (
                <div key={curr} className="animate-fade-in space-y-8"><div className="bg-white p-10 rounded-[3rem] shadow-2xl border border-violet-100 flex items-center gap-8"><div className="w-20 h-20 bg-violet-600 rounded-[1.5rem] flex items-center justify-center text-white shadow-xl">{p.sl[curr].i}</div><div className="flex-1"><p className="text-2xl font-black text-violet-950 italic leading-none mb-2">{p.sl[curr].t}</p><p className="text-sm font-bold text-slate-400 uppercase tracking-widest">{p.sl[curr].d}</p></div></div><div className="bg-violet-950 p-6 rounded-[2rem] shadow-lg flex items-center justify-between"><span className="text-[10px] font-black text-violet-200 uppercase tracking-[0.2em]">{p.sl[curr].x}</span><BarChart3 className="text-emerald-400" size={18}/></div></div>
              ) : <div className="text-center text-slate-300 font-black italic">Coming Soon...</div>}</div>
            </div>
          </div>
        </div>
        <IntegrationsSection c={c} />
      </section>
      <footer className="py-20 border-t border-slate-100 bg-white/60"><p className="text-slate-300 font-bold tracking-[0.3em] uppercase text-[10px] italic">&copy; 2026 SyncSocial.ai</p></footer>
      <style jsx global>{`@keyframes spin-slow{from{transform:rotate(0)}to{transform:rotate(360deg)}}.animate-spin-slow{animation:spin-slow 15s linear infinite}@keyframes pulse-slow{0%,100%{opacity:0.2;transform:scale(1)}50%{opacity:0.4;transform:scale(1.1)}}.animate-pulse-slow{animation:pulse-slow 8s ease-in-out infinite}@keyframes fade-in{from{opacity:0;transform:translateY(10px)}to{opacity:1;transform:translateY(0)}}.animate-fade-in{animation:fade-in 0.8s ease-out forwards}@keyframes scale-in{from{transform:scale(0.95);opacity:0}to{transform:scale(1);opacity:1}}.animate-scale-in{animation:scale-in 0.4s cubic-bezier(0.16,1,0.3,1) forwards}`}</style>
    </div>
  );
}
