import React from 'react';
import { ShoppingBag, Zap, ShieldCheck, BarChart3, MousePointer2, Share2 } from 'lucide-react';

export const Logo = ({ className }) => (
  <svg viewBox="0 0 128 128" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs><linearGradient id="cg" x1="0%" y1="100%" x2="100%" y2="0%"><stop offset="0%" stopColor="#FF00E4" /><stop offset="100%" stopColor="#8B5CF6" /></linearGradient></defs>
    <path d="M95,35 C95,15 65,15 65,35 C65,55 95,73 95,93 C95,113 65,113 65,93 M35,93 C35,113 65,113 65,93 C65,73 35,55 35,35 C35,15 65,15 65,35" stroke="url(#cg)" strokeWidth="14" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const texts = {
  EN: { hero: "Your life in sync.", sub: "The first AI-powered calendar bridging content, commerce, and community.", cta: "Claim Access", succ: "Success! You're on the list.", b: "SyncSocial.ai — The future of engagement", s1: "Connect", s1d: "Link socials & store.", s2: "Sync", s2d: "AI builds your schedule.", s3: "Grow", s3d: "Lead fans to revenue.", ft: "Platform Features", f1: "Direct Commerce", f1d: "Sell merch directly.", f2: "Global AI Timing", f2d: "Optimized drops.", f3: "Owned Audience", f3d: "Direct line to fans.", ms: "Verified", mt: "Today", ml: "Live Now", int: "Works with your stack" },
  NL: { hero: "Jouw leven in sync.", sub: "De eerste AI-gedreven agenda die content, commerce en community verbindt.", cta: "Claim toegang", succ: "Succes! Je staat op de lijst.", b: "SyncSocial.ai — De toekomst van engagement", s1: "Koppel", s1d: "Link je socials & shop.", s2: "Sync", s2d: "AI bouwt je agenda.", s3: "Groei", s3d: "Leid fans naar sales.", ft: "Platform Functies", f1: "Directe Verkoop", f1d: "Verkoop merch vanuit agenda.", f2: "Wereldwijde AI Timing", f2d: "Drop op piekmomenten.", f3: "Eigen Community", f3d: "Directe lijn met fans.", ms: "Geverifieerd", mt: "Vandaag", ml: "Nu Live", int: "Koppelt met je stack" }
};

export const IntegrationsSection = ({ c }) => (
  <div className="py-12 border-y border-slate-50 bg-slate-50/30">
    <p className="text-[10px] font-black uppercase text-slate-400 tracking-[0.2em] mb-8">{c.int}</p>
    <div className="flex flex-wrap justify-center gap-8 lg:gap-16 opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
      {['Shopify', 'TikTok', 'Instagram', 'Pietra', 'Stripe'].map((p) => (
        <span key={p} className="font-black text-xl lg:text-2xl text-slate-900 tracking-tighter italic">{p}</span>
      ))}
    </div>
  </div>
);

export const CardsSection = ({ c }) => (
  <section className="py-24 relative z-10"><div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
    {[{i:<MousePointer2/>,t:c.s1,d:c.s1d},{i:<Logo className="w-8 h-8"/>,t:c.s2,d:c.s2d},{i:<Zap/>,t:c.s3,d:c.s3d}].map((s,i)=>(
      <div key={i} className="bg-white/60 backdrop-blur-xl p-10 rounded-[3rem] border border-white shadow-sm text-center space-y-4 hover:shadow-2xl transition-all group">
        <div className="w-16 h-16 bg-indigo-600 text-white rounded-2xl flex items-center justify-center mx-auto transition-transform group-hover:rotate-12 shadow-lg">{s.i}</div>
        <h3 className="text-xl font-black text-indigo-950 italic tracking-tighter uppercase">{s.t}</h3>
        <p className="text-slate-500 font-medium text-sm">{s.d}</p>
      </div>))}
  </div></section>
);

export const FeaturesSection = ({ c }) => (
  <section className="py-32 relative z-10 text-center"><div className="max-w-7xl mx-auto px-6">
    <h2 className="text-4xl lg:text-7xl font-black text-indigo-950 tracking-tighter uppercase mb-20 italic underline decoration-indigo-600 underline-offset-8">{c.ft}</h2>
    <div className="grid lg:grid-cols-3 gap-8">
      {[{i:<ShoppingBag/>,t:c.f1,d:c.f1d},{i:<BarChart3/>,t:c.f2,d:c.f2d},{i:<ShieldCheck/>,t:c.f3,d:c.f3d}].map((f,i)=>(
        <div key={i} className="p-12 rounded-[3.5rem] bg-white border border-slate-100 hover:border-indigo-100 transition-all text-left group">
          <div className="w-14 h-14 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-indigo-950 group-hover:text-white transition-all">{f.i}</div>
          <h3 className="text-2xl font-black text-indigo-950 mb-4 italic leading-none">{f.t}</h3>
          <p className="text-slate-500 font-medium leading-relaxed">{f.d}</p>
        </div>))}
    </div>
  </div></section>
);
