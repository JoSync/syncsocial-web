"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, CheckCircle2, ShieldCheck, Sparkles, BarChart3, Globe, ShoppingBag } from 'lucide-react';
import { BACKGROUND_SVG } from '../assets';
import { Logo, texts, IntegrationsSection } from '../blocks';

export default function CreatorsPage() {
  const [lang, setLang] = useState('EN'); const [curr, setCurr] = useState(0);
  const [email, setEmail] = useState(''); const [isSub, setIsSub] = useState(false);
  const c = texts[lang] || texts['EN'];
  
  // Veiligheidscheck voor data
  const pillarData = c?.p?.creators || { s: "Sync your influence." };

  const sl = [
    {t:"08:00 Strategy", d:"AI scans global trends", x:"Scanning TikTok..."},
    {t:"09:30 Inventory", d:"Syncing with Shopify", x:"Stock: 500 units ready"},
    {t:"13:00 Multi-Sync", d:"Platform alignment", x:"IG, TikTok, YT aligned"},
    {t:"15:00 Timing Fix", d:"AI optimizes drop", x:"Shifted to 19:45 (Peak)"},
    {t:"19:45 LIVE DROP", d:"Merch is live", x:"Processing orders..."},
    {t:"21:00 Analytics", d:"Revenue reporting", x:"$14,200 Revenue generated"}
  ];

  useEffect(() => { const sI = setInterval(() => setCurr((p) => (p + 1) % sl.length), 3500); return () => clearInterval(sI); }, [sl.length]);

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-violet-100 overflow-x-hidden relative">
      <div className="absolute inset-0 -z-10 opacity-[0.1]" style={{ backgroundImage: BACKGROUND_SVG }}></div>
      <nav className="p-8 max-w-7xl mx-auto flex justify-between items-center relative z-50">
        <Link href="/" className="flex items-center gap-2 text-slate-400 hover:text-violet-600 transition-colors font-black uppercase text-xs tracking-widest"><ArrowLeft size={16}/> Back</Link>
        <div className="flex items-center gap-2"><Logo className="w-8 h-8" /><span className="text-xl font-black text-violet-950 italic">SyncSocial<span className="text-violet-600">.Creators</span></span></div>
      </nav>
      <main className="max-w-7xl mx-auto px-6 py-12 grid lg:grid-cols-2 gap-20 items-center">
        <div className="space-y-8 text-left">
          <div className="inline-flex items-center gap-2 bg-violet-50 text-violet-700 px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest"><Sparkles size={12} /> Creator Mode</div>
          <h1 className="text-6xl lg:text-7xl font-black tracking-tighter text-violet-950 leading-[0.9] italic uppercase">Turn your life<br/><span className="text-violet-600">into a business</span></h1>
          <p className="text-xl text-slate-500 font-medium italic leading-relaxed max-w-xl">{pillarData.s}</p>
          {!isSub ? (<form onSubmit={(e)=>{e.preventDefault();setIsSub(true)}} className="flex flex-col shadow-2xl rounded-[3rem] overflow-hidden border border-violet-100 bg-white max-w-md"><input type="email" required value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Enter creator email" className="h-16 px-10 outline-none text-lg" /><button type="submit" className="h-16 bg-violet-950 text-white font-black text-lg hover:bg-violet-600 transition-all uppercase flex items-center justify-center gap-2">Claim Access <ArrowRight size={20}/></button></form>
          ) : (<div className="bg-emerald-50 border-2 border-emerald-100 p-6 rounded-[3rem] flex items-center gap-4 animate-scale-in shadow-lg max-w-md"><CheckCircle2 size={24} className="text-emerald-500" /><p className="text-emerald-800 font-black italic">You are on the list, Creator.</p></div>)}
        </div>
        <div className="relative bg-violet-950 rounded-[4rem] p-3 shadow-3xl border-[12px] border-violet-900 overflow-hidden">
          <div className="bg-white rounded-[3rem] overflow-hidden h-[600px] flex flex-col relative text-left">
            <div className="bg-violet-950 p-1 flex gap-1">{sl.map((_,i)=>(<div key={i} className={`h-1 flex-1 rounded-full transition-all duration-500 ${i<=curr?'bg-violet-400':'bg-violet-900/30'}`}></div>))}</div>
            <div className="p-8 flex justify-between items-center border-b border-slate-50"><div className="flex items-center gap-3"><div className="w-12 h-12 bg-violet-950 rounded-full flex items-center justify-center text-white font-black text-xl border-2 border-white shadow-md">MS</div><div><p className="font-black text-violet-950 text-sm italic">Creator Sync</p><p className="text-[10px] text-emerald-500 font-black uppercase flex items-center gap-1 mt-1"><ShieldCheck size={10} /> Active</p></div></div><Globe size={20} className="text-violet-600 animate-spin-slow" /></div>
            <div className="flex-1 p-10 bg-slate-50/50 flex flex-col justify-center"><div key={curr} className="animate-fade-in space-y-6"><div className="bg-white p-8 rounded-[2.5rem] shadow-xl border border-violet-100"><p className="text-3xl font-black text-violet-950 italic leading-none mb-2">{sl[curr].t}</p><p className="text-sm font-bold text-slate-400 uppercase tracking-widest">{sl[curr].d}</p></div><div className="bg-violet-950 p-6 rounded-[2rem] shadow-lg flex items-center justify-between"><span className="text-xs font-black text-violet-200 uppercase tracking-widest">{sl[curr].x}</span><BarChart3 className="text-emerald-400" size={20}/></div></div></div>
          </div>
        </div>
      </main>
      <div className="max-w-7xl mx-auto px-6 pb-32"><IntegrationsSection c={c} /></div>
      <style jsx global>{`@keyframes fade-in { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } } .animate-fade-in { animation: fade-in 0.6s ease-out forwards; } @keyframes spin-slow { from { transform: rotate(0deg); } to { transform: rotate(360deg); } } .animate-spin-slow { animation: spin-slow 12s linear infinite; }`}</style>
    </div>
  );
}
