"use client";
import React, { useState, useEffect } from 'react';
import { ShoppingBag, Globe, ArrowRight, CheckCircle2, ShieldCheck, BarChart3, Users, Sparkles } from 'lucide-react';
import { BACKGROUND_SVG } from './assets';
import { Logo, texts, CardsSection, FeaturesSection, IntegrationsSection } from './blocks';

export default function LandingPage() {
  const [lang, setLang] = useState('EN'); 
  const [currentSlide, setCurrentSlide] = useState(0);
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [viewers, setViewers] = useState(12400);
  const c = texts[lang];

  useEffect(() => {
    const sInt = setInterval(() => setCurrentSlide((p) => (p + 1) % 4), 5000);
    const vInt = setInterval(() => setViewers(v => v + Math.floor(Math.random() * 50)), 2000);
    return () => { clearInterval(sInt); clearInterval(vInt); };
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/waitlist", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ email }) });
      if (res.ok) { setIsSubmitted(true); setEmail(""); }
    } catch (err) { console.error(err); }
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-indigo-100 overflow-x-hidden relative">
      <div className="fixed inset-0 pointer-events-none z-40 shadow-[inset_0_0_150px_rgba(139,92,246,0.25)]"></div>
      <div className="absolute inset-0 -z-10 opacity-[0.15]" style={{ backgroundImage: BACKGROUND_SVG, maskImage: 'radial-gradient(circle, black 40%, transparent 90%)' }}></div>
      
      <nav className="flex justify-between items-center p-8 max-w-7xl mx-auto relative z-50">
        <div className="flex items-center gap-2 cursor-pointer"><Logo className="w-12 h-12" /><span className="text-2xl font-black text-indigo-950 italic">SyncSocial<span className="text-indigo-600">.ai</span></span></div>
        <div className="flex bg-white/60 backdrop-blur-xl p-1 rounded-full border border-slate-200 shadow-sm">{['NL', 'EN', 'CN'].map((l) => (<button key={l} onClick={() => setLang(l)} className={`px-4 py-1 rounded-full text-xs font-black transition ${lang === l ? 'bg-indigo-950 text-white shadow-lg' : 'text-slate-400'}`}>{l}</button>))}</div>
      </nav>

      <section className="max-w-7xl mx-auto px-6 pt-12 pb-32 text-center flex flex-col items-center relative z-10">
        <div className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-700 px-4 py-2 rounded-full text-[10px] font-black mb-8 uppercase tracking-widest"><Sparkles size={12} /> {c.b}</div>
        <h1 className="text-5xl lg:text-8xl font-black tracking-tighter text-indigo-950 mb-8 leading-[0.95] max-w-4xl">{c.hero}</h1>
        <p className="text-xl text-slate-500 max-w-2xl mb-12 font-medium italic">{c.sub}</p>
        <div className="w-full max-w-xl mb-32">
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row shadow-2xl rounded-full overflow-hidden border border-indigo-100 bg-white"><input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" className="flex-[2] h-16 px-10 outline-none text-lg" /><button type="submit" className="flex-1 h-16 bg-indigo-950 text-white px-8 font-black text-lg hover:bg-indigo-600 transition-all flex items-center justify-center gap-2 uppercase">{c.cta} <ArrowRight size={20} /></button></form>
          ) : (<div className="bg-emerald-50 border-2 border-emerald-100 h-16 px-10 rounded-full flex items-center justify-center gap-4 animate-scale-in w-full shadow-lg"><CheckCircle2 size={24} className="text-emerald-500" /><p className="text-emerald-800 font-black text-lg italic">{c.succ}</p></div>)}
        </div>
        
        <IntegrationsSection c={c} />

        <div className="relative w-full max-w-3xl mt-32">
          <div className="absolute -inset-20 bg-gradient-to-tr from-indigo-500 via-purple-400 to-emerald-400 opacity-30 blur-[120px] rounded-full animate-pulse-slow"></div>
          <div className="relative bg-indigo-950 rounded-[3.5rem] p-3 shadow-2xl border-[12px] border-indigo-900 overflow-hidden ring-1 ring-white/10">
            <div className="bg-white rounded-[2.5rem] overflow-hidden h-[600px] flex flex-col relative shadow-inner text-left">
              <div className="bg-white border-b border-slate-50 p-6 flex justify-between items-center sticky top-0 z-10">
                <div className="flex items-center gap-3"><div className="w-12 h-12 bg-indigo-950 rounded-full flex items-center justify-center text-white font-black text-xl border-2 border-white shadow-lg">MS</div><div className="leading-tight"><p className="font-black text-indigo-950 text-sm italic">Maxime & Sophie</p><p className="text-[10px] text-emerald-500 font-black uppercase flex items-center gap-1 mt-1"><ShieldCheck size={10} /> {c.ms}</p></div></div><Globe size={20} className="text-indigo-600 animate-spin-slow" />
              </div>
              <div className="flex-1 relative p-8">
                {currentSlide === 0 && <div className="animate-fade-in"><p className="text-[10px] font-black text-slate-400 uppercase mb-6">{c.mt}</p><div className="p-6 bg-indigo-50 border border-indigo-100 rounded-3xl shadow-sm flex items-center gap-4"><div className="w-12 h-12 bg-indigo-600 rounded-2xl flex items-center justify-center text-white shadow-lg"><ShoppingBag size={24} /></div><div><p className="font-black text-indigo-950 text-lg leading-none italic">Merch Drop</p><p className="text-[10px] font-bold text-indigo-400 mt-1 uppercase">14:00 GMT</p></div></div></div>}
                {currentSlide === 1 && <div className="animate-fade-in text-slate-400 uppercase text-[10px] font-black tracking-widest">{c.ml}...</div>}
                {currentSlide === 2 && <div className="animate-fade-in flex flex-col items-center justify-center h-full"><Globe size={48} className="text-indigo-400 mb-4" /><p className="font-black text-indigo-950 italic">{viewers.toLocaleString()} fans in sync</p></div>}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <CardsSection c={c} />
      <FeaturesSection c={c} />
      <footer className="py-20 text-center border-t border-slate-100 bg-white/60"><p className="text-slate-300 font-bold tracking-[0.3em] uppercase text-[10px] italic">&copy; 2026 SyncSocial.ai</p></footer>
      <style jsx global>{`
        @keyframes spin-slow { from { transform: rotate(0); } to { transform: rotate(360deg); } } .animate-spin-slow { animation: spin-slow 15s linear infinite; }
        @keyframes pulse-slow { 0%, 100% { opacity: 0.2; transform: scale(1); } 50% { opacity: 0.4; transform: scale(1.1); } } .animate-pulse-slow { animation: pulse-slow 8s ease-in-out infinite; }
        @keyframes fade-in { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } } .animate-fade-in { animation: fade-in 0.8s ease-out forwards; }
      `}</style>
    </div>
  );
}
