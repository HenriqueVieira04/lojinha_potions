export default function Footer() {
  return (
    <footer className="relative py-16 px-6 border-t border-orange-900/10">
      {/* fundo */}
      <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 to-zinc-950" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-10">
          <div>
            <h3 className="font-serif text-xl font-bold text-orange-300 mb-3">
              Poções e soluções
            </h3>
            <p className="text-zinc-500 text-sm leading-relaxed font-sans">
              A mais antiga e prestigiada loja de pocoes do mundo bruxo,
              servindo bruxos e bruxas desde 1867.
            </p>
          </div>

          {/* contato */}
          <div>
            <h4 className="font-serif text-sm font-semibold text-orange-400/70 uppercase tracking-wider mb-4">
              Contato
            </h4>
            <ul className="space-y-2 text-sm text-zinc-500 font-sans">
              <li className="flex items-center gap-2">
                <span className="text-orange-700/50">-</span>
                Beco diagonal, n 42
              </li>
              <li className="flex items-center gap-2">
                <span className="text-orange-700/50">-</span>
                Londres, Inglaterra
              </li>
              <li className="flex items-center gap-2">
                <span className="text-orange-700/50">-</span>
                Coruja: AngelWings (serial ID: 089756-09834).
              </li>
            </ul>
          </div>

          {/* horario */}
          <div>
            <h4 className="font-serif text-sm font-semibold text-orange-400/70 uppercase tracking-wider mb-4">
              Horário de funcionamento
            </h4>
            <ul className="space-y-2 text-sm text-zinc-500 font-sans">
              <li>Segunda a Sexta: 8h - 20h</li>
              <li>Sábado: 9h - 18h</li>
              <li>Domingo: fechado</li>
              <li className="text-orange-400/50 text-xs mt-2 italic">
                * Exceto em luas cheias
              </li>
            </ul>
          </div>
        </div>

        {/* linha inferior */}
        <div className="mt-12 pt-8 border-t border-orange-900/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-zinc-600 text-xs font-sans">
            &copy; {new Date().getFullYear()} Poções e Soluções — Annabelle Merigold.
            todos os direitos reservados.
          </p>
          <p className="text-zinc-700 text-xs font-serif italic">
            Por Henrique Vieira Lima!
          </p>
        </div>
      </div>
    </footer>
  );
}
