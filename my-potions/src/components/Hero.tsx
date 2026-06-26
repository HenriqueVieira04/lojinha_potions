interface HeroProps {
  onNavigate: (page: string) => void;
}

export default function Hero({ onNavigate }: HeroProps) {
  return (
    <header className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden">
      {/* fundo mistico */}
      <div className="absolute inset-0 bg-gradient-to-b from-neutral-950 via-slate-900 to-zinc-950" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(234,88,12,0.06)_0%,_transparent_70%)]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-600/30 to-transparent" />

      {/* conteudo */}
      <div className="relative z-10 max-w-4xl mx-auto">
        {/* ornamento superior */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-orange-500/40" />
          <span className="text-orange-400/50 text-sm tracking-[0.3em] uppercase font-sans">est. 1867</span>
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-orange-500/40" />
        </div>

        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-amber-200 via-orange-300 to-orange-600 mb-6 tracking-tight">
          Poções e Soluções
        </h1>

        <p className="text-lg md:text-xl text-orange-200/70 font-serif italic mb-4">
          por Annabelle Merigold
        </p>

        <p className="text-base md:text-lg text-zinc-400 max-w-2xl mx-auto mb-12 leading-relaxed font-sans">
          Desde 1867, a mais prestigiada loja de poções do mundo bruxo.
          Elixires raros, ingredientes exóticos e formulas ancestrais
          preparadas com a excelência que só a Merigold pode oferecer.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => {
              const grid = document.getElementById('vitrine');
              if (grid) grid.scrollIntoView({ behavior: 'smooth' });
            }}
            className="btn-gold px-10 py-4 rounded font-serif text-lg font-semibold text-zinc-950 
                       shadow-[0_0_30px_rgba(234,88,12,0.25)] hover:shadow-[0_0_50px_rgba(234,88,12,0.4)]
                       transition-all duration-300 hover:scale-105 cursor-pointer"
          >
            Ver poções!
          </button>
          <button
            onClick={() => onNavigate('admin')}
            className="px-8 py-4 rounded font-sans text-sm tracking-wider uppercase
                       border border-orange-700/20 text-orange-400/70
                       hover:bg-orange-900/10 hover:border-orange-700/40 hover:text-orange-300
                       transition-all duration-300 cursor-pointer backdrop-blur-sm"
          >
            Area do administrador
          </button>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-orange-700/20 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-orange-400/40 rounded-full animate-bounce" />
        </div>
      </div>
    </header>
  );
}
