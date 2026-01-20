import Logo from "../components/Logo";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-black text-white p-4">
      {/* Het nieuwe Cyber-S Logo */}
      <Logo className="w-24 h-24 mb-8" />

      <h1 className="text-5xl md:text-7xl font-extrabold text-center tracking-tight">
        Sync<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF00E4] to-[#8B5CF6]">Social</span>
      </h1>
      
      <p className="mt-6 text-lg md:text-xl text-gray-400 text-center max-w-2xl">
        De toekomst van social media beheer. Krachtige AI-oplossingen in een handomdraai gesynchroniseerd.
      </p>

      <div className="mt-10 flex flex-col sm:flex-row gap-4">
        {/* De knop met de nieuwe roze-paarse gradient */}
        <button className="px-8 py-4 bg-gradient-to-tr from-[#FF00E4] to-[#8B5CF6] text-white rounded-full font-bold text-lg shadow-[0_0_20px_rgba(255,0,228,0.3)] hover:scale-105 transition-transform">
          Start nu gratis
        </button>
        
        <button className="px-8 py-4 border border-gray-700 hover:bg-gray-900 text-white rounded-full font-bold text-lg transition-colors">
          Bekijk demo
        </button>
      </div>

      <footer className="absolute bottom-8 text-gray-600 text-sm">
        © 2026 SyncSocial.ai - Alle rechten voorbehouden.
      </footer>
    </main>
  );
}
