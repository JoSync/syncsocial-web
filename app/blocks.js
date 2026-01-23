import React from 'react';
import { ShoppingBag, Zap, ShieldCheck, BarChart3, MousePointer2, Heart, TrendingUp, Search, Clock, Users, Globe, Video, Users2 } from 'lucide-react';

export const Logo = ({ className }) => (
  <svg viewBox="0 0 128 128" className={className} fill="none"><defs><linearGradient id="cg" x1="0%" y1="100%" x2="100%" y2="0%"><stop offset="0%" stopColor="#FF00E4" /><stop offset="100%" stopColor="#8B5CF6" /></linearGradient></defs><path d="M95,35 C95,15 65,15 65,35 C65,55 95,73 95,93 C95,113 65,113 65,93 M35,93 C35,113 65,113 65,93 C65,73 35,55 35,35 C35,15 65,15 65,35" stroke="url(#cg)" strokeWidth="14" strokeLinecap="round" strokeLinejoin="round"/></svg>
);

export const texts = {
  EN: {
    hero: "Your world, synchronized",
    sub: "The first interactive timeline where life, content, and commerce happen instantly",
    cta: "Claim Access", succ: "Success!", b: "SyncSocial.ai — The Living Calendar",
    features: [
      {t: "Live Interaction", d: "Join streams or start group meetings directly from your calendar cell.", i: <Video className="text-violet-500"/>},
      {t: "Social Pulse", d: "Follow your friends' journeys live through synced GPS and video feeds.", i: <Globe className="text-violet-500"/>},
      {t: "Instant Commerce", d: "Get notified of drops from brands you love and buy in one click.", i: <ShoppingBag className="text-violet-500"/>}
    ],
    slides: [
      {t:"Group Sync", d:"Project Alpha Kickoff", i:<Users2/>, s:"Start Video Call Now", c: "bg-violet-600"},
      {t:"Live Stream", d:"Tom's Amazon Trek", i:<Video/>, s:"Watch Live Feed", c: "bg-emerald-600"},
      {t:"Brand Drop", d:"Nike x Sync Edition", i:<ShoppingBag/>, s:"Buy Now - 2min left", c: "bg-rose-600"}
    ],
    ints: ['Shopify', 'TikTok', 'Instagram', 'YouTube', 'Stripe', 'Amazon']
  },
  NL: {
    hero: "Jouw wereld, gesynchroniseerd",
    sub: "De eerste interactieve tijdlijn waar leven, content en commerce direct samenkomen",
    cta: "Claim toegang", succ: "Succes!", b: "SyncSocial.ai — De Levende Agenda",
    features: [
      {t: "Live Interactie", d: "Start groepsmeetings of livestreams direct vanuit je agenda-item.", i: <Video className="text-violet-500"/>},
      {t: "Sociale Pulse", d: "Volg reizen van vrienden live via gesynchroniseerde GPS en video.", i: <Globe className="text-violet-500"/>},
      {t: "Directe Commerce", d: "Krijg meldingen van drops en koop direct met één klik.", i: <ShoppingBag className="text-violet-500"/>}
    ],
    slides: [
      {t:"Groeps Sync", d:"Project Alpha Kickoff", i:<Users2/>, s:"Start Video Call", c: "bg-violet-600"},
      {t:"Live Stream", d:"Tom's Amazon Reis", i:<Video/>, s:"Kijk Live Mee", c: "bg-emerald-600"},
      {t:"Brand Drop", d:"Nike x Sync Edition", i:<ShoppingBag/>, s:"Koop Nu - 2min over", c: "bg-rose-600"}
    ],
    ints: ['Shopify', 'Instagram', 'TikTok', 'YouTube', 'Mollie', 'Stripe', 'Bol.com']
  }
};

export const IntegrationsSection = ({ c }) => (
  <div className="py-20 relative z-10 w-full border-t border-slate-50"><p className="text-[10px] font-black uppercase text-slate-400 tracking-[0.2em] mb-12">Universal Integration</p>
    <div className="flex flex-wrap justify-center gap-x-12 gap-y-6 max-w-4xl mx-auto opacity-30 grayscale hover:grayscale-0 transition-all">
      {c.ints.map((p) => (<span key={p} className="font-black text-lg lg:text-xl text-slate-900 tracking-tighter italic whitespace-nowrap">{p}</span>))}
    </div></div>
);
