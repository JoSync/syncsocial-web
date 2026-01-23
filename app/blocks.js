import React from 'react';
import { ShoppingBag, Zap, ShieldCheck, BarChart3, MousePointer2, Heart, TrendingUp, Search, Clock, MessageSquare, Target } from 'lucide-react';

export const Logo = ({ className }) => (
  <svg viewBox="0 0 128 128" className={className} fill="none"><defs><linearGradient id="cg" x1="0%" y1="100%" x2="100%" y2="0%"><stop offset="0%" stopColor="#FF00E4" /><stop offset="100%" stopColor="#8B5CF6" /></linearGradient></defs><path d="M95,35 C95,15 65,15 65,35 C65,55 95,73 95,93 C95,113 65,113 65,93 M35,93 C35,113 65,113 65,93 C65,73 35,55 35,35 C35,15 65,15 65,35" stroke="url(#cg)" strokeWidth="14" strokeLinecap="round" strokeLinejoin="round"/></svg>
);

export const texts = {
  EN: { hero: "Your life in sync", sub: "The first AI-powered calendar bridging content, commerce, and community", cta: "Claim Access", succ: "Success!", b: "SyncSocial.ai — The future", ft: "Features", f1: "Commerce", f1d: "Sell merch directly.", f2: "AI Timing", f2d: "Optimized drops.", f3: "Audience", f3d: "Direct line to fans.", ms: "Verified", mt: "Timeline", ml: "Live", int: "Works with your stack", ints: ['Shopify', 'Instagram', 'TikTok', 'YouTube', 'Facebook', 'Pinterest', 'Snapchat', 'Pietra', 'Stripe', 'Amazon'],
    slides: [
      {t:"08:00 Strategy", d:"AI scans global trends", i:<Search/>, s:"Scanning TikTok & Douyin..."},
      {t:"09:30 Inventory", d:"Syncing with Shopify", i:<ShoppingBag/>, s:"Stock: 500 units ready"},
      {t:"11:00 Content", d:"Generating briefings", i:<Zap/>, s:"Briefs sent to team"},
      {t:"13:00 Multi-Sync", d:"Platform alignment", i:<Target/>, s:"IG, TikTok, YT aligned"},
      {t:"15:00 Timing Fix", d:"AI optimizes drop time", i:<Clock/>, s:"Shifted to 19:45 (Peak)"},
      {t:"17:00 Reminders", d:"Fans notified", i:<MessageSquare/>, s:"12k Calendars synced"},
      {t:"19:45 LIVE DROP", d:"Merch is live", i:<TrendingUp/>, s:"Processing orders..."},
      {t:"21:00 Analytics", d:"Revenue reporting", i:<BarChart3/>, s:"$14,200 Revenue generated"},
      {t:"23:00 Retention", d:"AI schedules thanks", i:<Heart/>, s:"Loyalty loop started"}
    ]},
  NL: { hero: "Jouw leven in sync", sub: "De eerste AI-gedreven agenda die content, commerce en community verbindt", cta: "Claim toegang", succ: "Succes!", b: "SyncSocial.ai — De toekomst", ft: "Functies", f1: "Verkoop", f1d: "Verkoop vanuit agenda.", f2: "AI Timing", f2d: "Drop op piekmomenten.", f3: "Community", f3d: "Lijn met fans.", ms: "Geverifieerd", mt: "Tijdlijn", ml: "Nu Live", int: "Koppelt met je stack", ints: ['Shopify', 'Instagram', 'TikTok', 'YouTube', 'Facebook', 'Pinterest', 'Snapchat', 'Mollie', 'Stripe'],
    slides: [
      {t:"08:00 Strategie", d:"AI scant trends", i:<Search/>, s:"TikTok & Douyin scan..."},
      {t:"09:30 Voorraad", d:"Sync met Shopify", i:<ShoppingBag/>, s:"500 stuks gereed"},
      {t:"11:00 Content", d:"Briefings maken", i:<Zap/>, s:"Briefings verzonden"},
      {t:"13:00 Multi-Sync", d:"Platform uitlijning", i:<Target/>, s:"IG, TikTok, YT klaar"},
      {t:"15:00 Timing Fix", d:"AI optimaliseert", i:<Clock/>, s:"Verplaatst naar 19:45"},
      {t:"17:00 Notificaties", d:"Fans herinnerd", i:<MessageSquare/>, s:"12k agenda's gesynct"},
      {t:"19:45 LIVE DROP", d:"Merch is live", i:<TrendingUp/>, s:"Orders verwerken..."},
      {t:"21:00 Analyse", d:"Omzet rapport", i:<BarChart3/>, s:"€14.200 omzet behaald"},
      {t:"23:00 Retentie", d:"AI plant bedankjes", i:<Heart/>, s:"Loyalty loop actief"}
    ]}
};

export const IntegrationsSection = ({ c }) => (
  <div className="py-12 relative z-10 w-full"><p className="text-[10px] font-black uppercase text-slate-400 tracking-[0.2em] mb-10">{c.int}</p>
    <div className="flex flex-wrap justify-center gap-x-12 gap-y-6 max-w-4xl mx-auto opacity-30 grayscale hover:grayscale-0 transition-all duration-1000">
      {c.ints.map((p) => (<span key={p} className="font-black text-lg lg:text-xl text-slate-900 tracking-tighter italic whitespace-nowrap">{p}</span>))}
    </div></div>
);

export const CardsSection = ({ c }) => (
  <section className="py-24 relative z-10"><div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
    {[{i:<MousePointer2/>,t:c.hero,d:c.sub},{i:<Logo className="w-8 h-8"/>,t:c.b,d:c.sub},{i:<Zap/>,t:c.cta,d:c.sub}].map((s,i)=>(
      <div key={i} className="bg-white/60 backdrop-blur-xl p-10 rounded-[3rem] border border-white shadow-sm text-center space-y-4 hover:shadow-2xl transition-all group">
        <div className="w-16 h-16 bg-violet-600 text-white rounded-2xl flex items-center justify-center mx-auto transition-transform group-hover:rotate-12 shadow-lg">{s.i}</div>
        <h3 className="text-xl font-black text-violet-950 italic tracking-tighter uppercase">{s.t}</h3>
      </div>))}</div></section>
);

export const FeaturesSection = ({ c }) => (
  <section className="py-32 relative z-10 text-center"><div className="max-w-7xl mx-auto px-6"><h2 className="text-4xl lg:text-7xl font-black text-violet-950 tracking-tighter uppercase mb-20 italic underline decoration-violet-600 underline-offset-8">{c.ft}</h2>
    <div className="grid lg:grid-cols-3 gap-8">{[{i:<ShoppingBag/>,t:c.f1,d:c.f1d},{i:<BarChart3/>,t:c.f2,d:c.f2d},{i:<ShieldCheck/>,t:c.f3,d:c.f3d}].map((f,i)=>(
        <div key={i} className="p-12 rounded-[3.5rem] bg-white border border-slate-100 hover:border-violet-100 transition-all text-left group">
          <div className="w-14 h-14 bg-violet-50 text-violet-600 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-violet-950 group-hover:text-white transition-all">{f.i}</div>
          <h3 className="text-2xl font-black text-violet-950 mb-4 italic leading-none">{f.t}</h3><p className="text-slate-500 font-medium leading-relaxed">{f.d}</p>
        </div>))}</div></div></section>
);
