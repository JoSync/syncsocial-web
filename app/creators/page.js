import React from 'react';
import { ShoppingBag, Zap, Heart, BarChart3, Search, Clock, Target, Users, Globe, Video, Users2, ShieldCheck } from 'lucide-react';

export const Logo = ({ className }) => (
  <svg viewBox="0 0 128 128" className={className} fill="none"><defs><linearGradient id="cg" x1="0%" y1="100%" x2="100%" y2="0%"><stop offset="0%" stopColor="#FF00E4" /><stop offset="100%" stopColor="#8B5CF6" /></linearGradient></defs><path d="M95,35 C95,15 65,15 65,35 C65,55 95,73 95,93 C95,113 65,113 65,93 M35,93 C35,113 65,113 65,93 C65,73 35,55 35,35 C35,15 65,15 65,35" stroke="url(#cg)" strokeWidth="14" strokeLinecap="round" strokeLinejoin="round"/></svg>
);

const sl_gen = [
  {t:"Group Sync", d:"Project Alpha", i:<Users2/>, s:"Start Video Call", c: "bg-violet-600"},
  {t:"Live Stream", d:"Tom's Trek", i:<Video/>, s:"Watch Live Feed", c: "bg-emerald-600"},
  {t:"Brand Drop", d:"Nike Edition", i:<ShoppingBag/>, s:"Buy Now", c: "bg-rose-600"}
];

export const texts = {
  EN: { h1: "Your world in one place", h2: "always in sync", s: "The first interactive timeline where life and commerce happen instantly", cta: "Claim Access", ok: "Success!", b: "SyncSocial.ai — The Living Calendar", ms: "Verified", mt: "Timeline", 
    f: [{t: "Live Interaction", d: "Join streams or meetings directly.", i: <Video/>},{t: "Social Pulse", d: "Follow friends live via GPS.", i: <Globe/>},{t: "Instant Commerce", d: "Buy drops in one click.", i: <ShoppingBag/>}], 
    p: { creators: { s: "Turn your schedule into a revenue machine." }, users: { s: "Never miss a beat from your favorite people." }, brands: { s: "Partner with creators at the peak of engagement." } },
    sl: sl_gen, i: ['Shopify','TikTok','Instagram','YouTube','Stripe','Pietra'] },
  NL: { h1: "Jouw wereld op één plek", h2: "altijd in sync", s: "De eerste interactieve tijdlijn waar leven en commerce direct samenkomen", cta: "Claim toegang", ok: "Succes!", b: "SyncSocial.ai — De Levende Agenda", ms: "Geverifieerd", mt: "Tijdlijn", 
    f: [{t: "Live Interactie", d: "Start meetings direct vanuit je agenda.", i: <Video/>},{t: "Sociale Pulse", d: "Volg reizen van vrienden live.", i: <Globe/>},{t: "Directe Commerce", d: "Koop drops met één klik.", i: <ShoppingBag/>}], 
    p: { creators: { s: "Maak van je agenda een winstmachine." }, users: { s: "Mis nooit meer een moment van je favorieten." }, brands: { s: "Partner met creators op het piekmoment." } },
    sl: sl_gen, i: ['Shopify','TikTok','Instagram','YouTube','Mollie','Stripe'] },
  ES: { h1: "Tu mundo en un lugar", h2: "siempre en sincronía", s: "La primera línea de tiempo donde la vida y el comercio ocurren al instante", cta: "Acceso", ok: "¡Éxito!", b: "SyncSocial.ai", ms: "Verificado", mt: "Línea", 
    f: [{t: "Interacción", d: "Únete a transmisiones directamente.", i: <Video/>},{t: "Pulso Social", d: "Sigue viajes en vivo.", i: <Globe/>},{t: "Comercio", d: "Drops y compras en un clic.", i: <ShoppingBag/>}], 
    p: { creators: { s: "Tu agenda es dinero." }, users: { s: "No te pierdas nada." }, brands: { s: "Engagement máximo." } },
    sl: sl_gen, i: ['Shopify','Stripe','Instagram'] },
  CN: { h1: "你的世界，汇于一处", h2: "永远同步", s: "连接生活与商业的第一个交互式时间轴", cta: "立即加入", ok: "成功！", b: "SyncSocial.ai", ms: "认证", mt: "时间轴", 
    f: [{t: "实时交互", d: "直接从日历项加入会议。", i: <Video/>},{t: "社交脉搏", d: "通过同步关注朋友。", i: <Globe/>},{t: "即时商业", d: "一键购买品牌首发。", i: <ShoppingBag/>}], 
    p: { creators: { s: "日程即收入。" }, users: { s: "永不错过。" }, brands: { s: "合作伙伴。" } },
    sl: sl_gen, i: ['Douyin','Xiaohongshu','Shopify'] }
};

export const IntegrationsSection = ({ c }) => (
  <div className="py-20 relative z-10 w-full border-t border-slate-50"><p className="text-[10px] font-black uppercase text-slate-400 tracking-[0.2em] mb-12">Universal Integration</p>
    <div className="flex flex-wrap justify-center gap-x-12 gap-y-6 max-w-4xl mx-auto opacity-30 grayscale hover:grayscale-0 transition-all">
      {c?.i?.map((p) => (<span key={p} className="font-black text-lg lg:text-xl text-slate-900 tracking-tighter italic whitespace-nowrap">{p}</span>))}
    </div></div>
);
