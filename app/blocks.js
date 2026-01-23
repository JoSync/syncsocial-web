import React from 'react';
import { ShoppingBag, Zap, Heart, BarChart3, Search, Clock, Target, Users, Globe, Video, MousePointer2 } from 'lucide-react';

export const Logo = ({ className }) => (
  <svg viewBox="0 0 128 128" className={className} fill="none"><defs><linearGradient id="cg" x1="0%" y1="100%" x2="100%" y2="0%"><stop offset="0%" stopColor="#FF00E4" /><stop offset="100%" stopColor="#8B5CF6" /></linearGradient></defs><path d="M95,35 C95,15 65,15 65,35 C65,55 95,73 95,93 C95,113 65,113 65,93 M35,93 C35,113 65,113 65,93 C65,73 35,55 35,35 C35,15 65,15 65,35" stroke="url(#cg)" strokeWidth="14" strokeLinecap="round" strokeLinejoin="round"/></svg>
);

export const texts = {
  EN: { h1: "Your world in one place", h2: "always in sync", sub: "The first interactive timeline where life, content, and commerce happen instantly", cta: "Claim Access", b: "SyncSocial.ai — The Living Calendar", mt: "Timeline", 
    p: { 
      creators: { l: "Creators", t: "Monetize Influence", s: "Turn your schedule into a revenue machine.", sl: [{t:"08:00 Strategy", d:"AI scans trends", i:<Search/>, x:"Scanning TikTok..."},{t:"19:45 LIVE DROP", d:"Merch is live", i:<ShoppingBag/>, x:"$14,200 Generated"}] },
      users: { l: "Users", t: "Never miss a beat", s: "Follow your favorite people directly in your calendar.", sl: [{t:"Live Stream", d:"Tom's Amazon Trek", i:<Video/>, x:"Watch Live Feed"},{t:"Brand Drop", d:"Nike Edition", i:<ShoppingBag/>, x:"Buy Now - 2min left"}] },
      brands: { l: "Brands", t: "Partner at Peak", s: "Place your brand where engagement is highest.", sl: [{t:"Ad Placement", d:"Integrated Drop", i:<Target/>, x:"25% CTR via Sync"}] }
    }, i: ['Shopify','TikTok','Instagram','YouTube','Stripe','Pietra'] },
  NL: { h1: "Jouw wereld op één plek", h2: "altijd in sync", sub: "De eerste interactieve tijdlijn waar leven, content en commerce direct samenkomen", cta: "Claim toegang", b: "SyncSocial.ai — De Levende Agenda", mt: "Tijdlijn",
    p: { 
      creators: { l: "Creators", t: "Verzilver Invloed", s: "Maak van je agenda een winstmachine.", sl: [{t:"08:00 Strategie", d:"AI scant trends", i:<Search/>, x:"TikTok & Douyin scan..."},{t:"19:45 LIVE DROP", d:"Merch is live", i:<ShoppingBag/>, x:"€14.200 behaald"}] },
      users: { l: "Users", t: "Mis nooit iets", s: "Je favoriete mensen, direct in jouw eigen agenda.", sl: [{t:"Live Stream", d:"Tom's Reis", i:<Video/>, x:"Kijk Live Mee"},{t:"Brand Drop", d:"Nike Edition", i:<ShoppingBag/>, x:"Koop Nu - 2min over"}] },
      brands: { l: "Bedrijven", t: "Partner op de piek", s: "Adverteer op het moment van maximale engagement.", sl: [{t:"Ad Plaatsing", d:"Geïntegreerde Drop", i:<Target/>, x:"25% CTR via Sync"}] }
    }, i: ['Shopify','TikTok','Instagram','YouTube','Mollie','Stripe','Bol.com'] },
  ES: { h1: "Tu mundo en un solo lugar", h2: "siempre en sincronía", sub: "La primera línea de tiempo interactiva donde la vida y el comercio ocurren al instante", cta: "Acceso", b: "SyncSocial.ai", mt: "Línea", p: { creators:{l:"Creators",t:"Monetizar",s:"Tu agenda es dinero.",sl:[]}, users:{l:"Users",t:"No te pierdas nada",s:"Tus favoritos en tu agenda.",sl:[]}, brands:{l:"Marcas",t:"Partner",s:"Engagement máximo.",sl:[]} }, i:['Shopify','Stripe'] },
  CN: { h1: "你的世界，汇于一处", h2: "永远同步", sub: "连接生活、内容与商业的第一个交互式时间轴", cta: "立即加入", b: "SyncSocial.ai", mt: "时间轴", p: { creators:{l:"创作者",t:"变现",s:"日程即收入。",sl:[]}, users:{l:"用户",t:"永不错过",s:"关注的人在日历中。",sl:[]}, brands:{l:"品牌",t:"合作伙伴",s:"高参与度。",sl:[]} }, i:['Douyin','WeChat','Tmall'] }
};

export const IntegrationsSection = ({ c }) => (
  <div className="py-16 relative z-10 w-full border-t border-slate-50"><p className="text-[10px] font-black uppercase text-slate-400 tracking-[0.2em] mb-10">Works with</p>
    <div className="flex flex-wrap justify-center gap-x-12 gap-y-6 max-w-4xl mx-auto opacity-30 grayscale hover:grayscale-0 transition-all">
      {c.i.map((p) => (<span key={p} className="font-black text-lg lg:text-xl text-slate-900 tracking-tighter italic whitespace-nowrap">{p}</span>))}
    </div></div>
);
