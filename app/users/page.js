"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, CheckCircle2, ShieldCheck, Sparkles, Globe, Video, Clock, ShoppingBag } from 'lucide-react';
import { BACKGROUND_SVG } from '../assets';
import { Logo, texts, IntegrationsSection } from '../blocks';

export default function UsersPage() {
  const [lang, setLang] = useState('EN'); const [curr, setCurr] = useState(0);
  const [email, setEmail] = useState(''); const [isSub, setIsSub] = useState(false);
  const c = texts[lang] || texts['EN'];
  const sl = [
    {t:"Live Update", d:"Tom is now in the Amazon", x:"GPS Sync: Moving North", i:<Globe/>, c:"bg-emerald-600"},
    {t:"Drop Alert", d:"Sneaker Release", x:"Access unlocked", i:<ShoppingBag/>, c:"bg-rose-600"},
    {t:"Reminder", d:"Stream starts", x:"Added to calendar", i:<Clock/>, c:"bg-indigo-600"}
  ];

  useEffect(() => { const sI = setInterval(() => setCurr((p) => (p + 1) % sl.length), 4000); return () => clearInterval(sI); }, [sl.length]);

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-violet-100 overflow-x-hidden relative">
      <div className="absolute inset-0 -z-10 opacity-[0.1]" style={{ backgroundImage: BACKGROUND_SVG }}></div>
      <nav className="p-8 max-w-7xl mx-auto flex justify-between items-center relative z-50">
        <Link href="/" className="flex items-center gap-2 text-slate-400 hover:text-violet-600 font-black uppercase text-xs tracking-widest"><ArrowLeft size={16}/> Back</Link>
        <div className="flex items-center gap-2"><Logo className="w-8 h-8" /><span className="text-xl font-black text-violet-950 italic">SyncSocial<span className="text-violet-600">.Users</span></span></div>
      </nav>
      <main className="max-w-7xl mx-auto px-6 py-12 grid lg:grid-cols-2 gap-20 items-center">
        <div className="space-y-8 text-left">
          <div className="inline-flex items-center gap-2 bg-violet-50 text-violet-700 px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest"><Sparkles size={12} /> User Experience</div>
          <h1 className="text-6xl lg:text-7xl font-black tracking-tighter text-violet-950 leading-[0.9] italic uppercase">Never miss<br/><span className="text-violet-600">a single beat</span></h1>
          <p className="text-xl text-slate-500 font-medium italic leading-relaxed max-w-xl">{c?.p?.users?.s}</p>
          {!isSub ? (<form onSubmit={(e)=>{e.preventDefault();setIsSub(true)}} className="flex flex-col shadow-2xl rounded-[3rem] overflow-hidden border border-violet-100 bg-white max-w-md"><input type="email" required value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Enter your email" className="h-16 px-10 outline-none text-lg" /><button type="submit" className="h-16 bg-violet-950 text-white font-black text-lg hover:bg-violet-600 transition-all uppercase flex items-center justify-center gap-2">Get Early Access <ArrowRight size={20}/></button></form>
          ) : (<div className="bg-emerald-50 border-2 border-emerald-100 p-6 rounded-[3rem] flex items-center gap-4 animate-scale-in shadow-lg max-w-md"><CheckCircle2 size={24} className="text-emerald-500" /><p className="text-emerald-800 font-black italic">You're in the loop.</p></div>)}
        </div>
        <div className="relative">
          <div className="absolute -inset-10 bg-emerald-500/10 blur-[100px] rounded-full"></div>
          <div className="relative bg-violet-950 rounded-[4rem] p-3 shadow-3xl border-[12px] border-violet-900 overflow-hidden">
            <div className="bg-white rounded-[3rem] overflow-hidden h-[600px] flex flex-col relative text-left">
              <div className="bg-violet-950 p-1 flex gap-1">{sl.map((_,i)=>(<div key={i} className={`h-1 flex-1 rounded-full transition-all duration-500 ${i<=curr?'bg-violet-400':'bg-violet-900/30'}`}></div>))}</div>
              <div className="p-8 flex justify-between items-center border-b border-slate-50"><div className="flex items-center gap-3"><div className="w-12 h-12 bg-violet-950 rounded-full flex items-center justify-center text-white font-black text-xl border-2 border-white shadow-md">U</div><div><p className="font-black text-violet-950 text-sm italic">Personal Timeline</p><p className="text-[10px] text-emerald-500 font-black uppercase flex items-center gap-1 mt-1"><ShieldCheck size={10} /> Live Tracking</p></div></div><Globe size={20} className="text-violet-600 animate-spin-slow" /></div>
              <div className="flex-1 p-10 bg-slate-50/50 flex flex-col justify-center">
                <div key={curr} className="animate-fade-in space-y-6">
                  <div className="bg-white p-8 rounded-[2.5rem] shadow-xl border border-violet-100 flex items-center gap-6"><div className={`w-16 h-16 ${sl[curr].c} rounded-2xl flex items-center justify-center text-white shadow-xl`}>{sl[curr].i}</div><div><p className="text-2xl font-black text-violet-950 italic leading-none mb-1">{sl[curr].t}</p><p className="text-xs font-bold text-slate-400 uppercase tracking-widest">{sl[curr].d}</p></div></div>
                  <div className="bg-violet-950 p-6 rounded-[2rem] shadow-lg flex items-center justify-between"><span className="text-xs font-black text-violet-200 uppercase tracking-widest">{sl[curr].x}</span><ArrowRight className="text-emerald-400" size={20}/></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <div className="max-w-7xl mx-auto px-6 pb-32"><IntegrationsSection c={c} /></div>
      <style jsx global>{`@keyframes fade-in { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } } .animate-fade-in { animation: fade-in 0.6s ease-out forwards; } @keyframes spin-slow { from { transform: rotate(0deg); } to { transform: rotate(360deg); } } .animate-spin-slow { animation: spin-slow 12s linear infinite; }`}</style>
    </div>
  );
}
