import React from 'react';
import { ShoppingBag, Zap, ShieldCheck, BarChart3, MousePointer2, Heart, TrendingUp } from 'lucide-react';

export const Logo = ({ className }) => (
  <svg viewBox="0 0 128 128" className={className} fill="none"><defs><linearGradient id="cg" x1="0%" y1="100%" x2="100%" y2="0%"><stop offset="0%" stopColor="#FF00E4" /><stop offset="100%" stopColor="#8B5CF6" /></linearGradient></defs><path d="M95,35 C95,15 65,15 65,35 C65,55 95,73 95,93 C95,113 65,113 65,93 M35,93 C35,113 65,113 65,93 C65,73 35,55 35,35 C35,15 65,15 65,35" stroke="url(#cg)" strokeWidth="14" strokeLinecap="round" strokeLinejoin="round"/></svg>
);

export const texts = {
  EN: { hero: "Your life in sync", sub: "The first AI-powered calendar bridging content, commerce, and community", cta: "Claim Access", succ: "Success!", b: "SyncSocial.ai — The future", ft: "Features", f1: "Commerce", f1d: "Sell merch directly.", f2: "AI Timing", f2d: "Optimized drops.", f3: "Audience", f3d: "Direct line to fans.", ms: "Verified", mt: "Today", ml: "Live", int: "Works with your stack", ints: ['Shopify', 'Instagram', 'TikTok', 'YouTube', 'Facebook', 'Pinterest', 'Snapchat', 'Pietra', 'Stripe', 'Amazon'],
    slides: [{t: "Merch Drop", d: "14:00 GMT", i: <ShoppingBag size={24}/>, v: "Syncing Shopify..."}, {t: "Fan Growth", d: "Real-time", i: <Heart size={24}/>, v: "+1,240 new fans"}, {t: "AI Revenue", d: "Optimization", i: <TrendingUp size={24}/>, v: "+22% Projected Sales"}] },
  NL: { hero: "Jouw leven in sync", sub: "De eerste AI-gedreven agenda die content, commerce en community verbindt", cta: "Claim toegang", succ: "Succes!", b: "SyncSocial.ai — De toekomst", ft: "Functies", f1: "Verkoop", f1d: "Verkoop vanuit agenda.", f2: "AI Timing", f2d: "Drop op piekmomenten.", f3: "Community", f3d: "Lijn met fans.", ms: "Geverifieerd", mt: "Vandaag", ml: "Nu Live", int: "Koppelt met je stack", ints: ['Shopify', 'Instagram', 'TikTok', 'YouTube', 'Facebook', 'Pinterest', 'Snapchat', 'Mollie', 'Stripe'],
    slides: [{t: "Merch Drop", d: "14:00 GMT", i: <ShoppingBag size={24}/>, v: "Sync met Shopify..."}, {t: "Fan Groei", d: "Live", i: <Heart size={24}/>, v: "+1.240 nieuwe fans"}, {t: "AI Omzet", d: "Optimalisatie", i: <TrendingUp size={24}/>, v: "+22% Verwachte Sales"}] },
  ES: { hero: "Tu vida en sincronía", sub: "El primer calendario con IA que une contenido, comercio y comunidad", cta: "Solicitar Acceso", succ: "¡Éxito!", b: "SyncSocial.ai — El futuro", ft: "Funciones", f1: "Comercio", f1d: "Vende directamente.", f2: "Timing IA", f2d: "Drops optimizados.", f3: "Audiencia", f3d: "Línea directa con fans.", ms: "Verificado", mt: "Hoy", ml: "En Vivo", int: "Funciona con tus apps", ints: ['Shopify', 'Instagram', 'TikTok', 'YouTube', 'Facebook', 'Pinterest', 'Snapchat', 'Mercado Libre', 'WhatsApp', 'Stripe'],
    slides: [{t: "Lanzamiento", d: "14:00 GMT", i: <ShoppingBag size={24}/>, v: "Sync con Shopify..."}, {t: "Fans", d: "En Vivo", i: <Heart size={24}/>, v: "+1.240 nuevos fans"}, {t: "IA Ventas", d: "Optimización", i: <TrendingUp size={24}/>, v: "+22% Ventas Proyectadas"}] },
  CN: { hero: "同步你的生活", sub: "连接内容、商业与社交的AI日历", cta: "立即加入", succ: "成功！", b: "SyncSocial.ai — 未来", ft: "平台功能", f1: "商业化", f1d: "直接通过日历销售。", f2: "AI 时机", f2d: "全球时区优化。", f3: "私域流量", f3d: "连接忠实粉丝。", ms: "认证", mt: "今日", ml: "直播中", int: "支持全球主流平台", ints: ['Douyin', 'Xiaohongshu', 'Pietra', 'WeChat', 'Tmall', 'Shopify'],
    slides: [{t: "新款发布", d: "14:00 GMT", i: <ShoppingBag size={24}/>, v: "同步至店铺..."}, {t: "粉丝增长", d: "实时", i: <Heart size={24}/>, v: "+1,240 新粉丝"}, {t: "AI 变现", d: "数据优化", i: <TrendingUp size={24}/>, v: "+22% 预计收入"}] }
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
