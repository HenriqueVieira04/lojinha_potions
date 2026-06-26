export default function History() {
  return (
    <section className="py-24 px-6 relative overflow-hidden" id="historia">
      {/* fundo */}
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-neutral-950 to-zinc-950" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-orange-700/30" />
            <span className="text-orange-400/50 text-xs tracking-[0.4em] uppercase font-sans">Nossa história</span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-orange-700/30" />
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-amber-100">
            Uma tradição de excelência
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-zinc-400 leading-relaxed font-sans">
              fundada em <span className="text-orange-400 font-semibold">1867</span> por
              <span className="text-orange-300 font-serif"> Eudora Merigold</span>, bisavó de Annabelle,
              a loja <span className="text-orange-200/80 font-serif italic">Poções e Soluçõees</span> nasceu
              no coracao do Beco Diagonal como uma modesta botique familiar.
            </p>
            <p className="text-zinc-400 leading-relaxed font-sans">
              Ao longo de mais de um seculo e meio, a familia Merigold aperfeicoou formulas ancestrais,
              descobriu novos ingredientes e estabeleceu parcerias com os mais renomados mestres de poções
              do mundo bruxo. De geracao em geracao, o conhecimento foi transmitido com zelo e reverencia.
            </p>
            <p className="text-zinc-400 leading-relaxed font-sans">
              Hoje, sob a lideranca de <span className="text-orange-300 font-serif">Annabelle Merigold</span>,
              a loja mantem viva a tradição artesanal, combinando métodos centenarios com inovações
              contemporaneas. Cada frasco que sai de nossas prateleiras carrega o peso de 150 anos
              de historia e dedicação.
            </p>
            <div className="pt-4">
              <p className="text-orange-400/60 font-serif italic text-sm border-l-2 border-orange-700/20 pl-4">
                "Uma pocao bem preparada é como uma sinfonia — cada ingrediente deve entrar no momento exato,
                na proporção perfeita." — Annabelle Merigold.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {/* foto 1 */}
            <div className="aspect-square rounded-lg border border-orange-900/20 bg-gradient-to-br from-neutral-800 to-zinc-900 
                          flex flex-col items-center justify-center p-4 text-center backdrop-blur-sm
                          hover:border-orange-700/40 transition-all duration-500 mt-8">
              <img className="aspect-square rounded-lg border border-orange-900/20 bg-gradient-to-br from-neutral-800 to-zinc-900
               hover:border-orange-700/40 transition-all duration-500" src="../../mock/loja.png" alt="Fachada original, 1867" />
              <p className="text-orange-400/30 text-xs pt-2 font-sans">Fachada original, 1867</p>
            </div>
            

            {/* foto 2 */}
            <div className="aspect-square rounded-lg border border-orange-900/20 bg-gradient-to-br from-neutral-800 to-zinc-900 
                          flex flex-col items-center justify-center p-4 text-center backdrop-blur-sm
                          hover:border-orange-700/40 transition-all duration-500 mt-8">
              <img className="aspect-square rounded-lg border border-orange-900/20 bg-gradient-to-br from-neutral-800 to-zinc-900 
              hover:border-orange-700/40 transition-all duration-500" src="../../mock/interior1892.png" alt="Interior da botique, 1892" />
              <p className="text-orange-400/30 text-xs pt-2 font-sans">Interior da botique, 1892</p>
            </div>

            {/* foto 3 */}
            <div className="aspect-square rounded-lg border border-orange-900/20 bg-gradient-to-br from-neutral-800 to-zinc-900 
                          flex flex-col items-center justify-center p-4 text-center backdrop-blur-sm
                          hover:border-orange-700/40 transition-all duration-500 mt-8">
              <img className="aspect-square rounded-lg border border-orange-900/20 bg-gradient-to-br from-neutral-800 to-zinc-900 
              hover:border-orange-700/40 transition-all duration-500" src="../../mock/livro.png" alt="Interior da botique, 1892" />
              <p className="text-orange-400/30 text-xs pt-2 font-sans">Livro de receitas original</p>
            </div>

            {/* foto 4 */}
            <div className="aspect-square rounded-lg border border-orange-900/20 bg-gradient-to-br from-neutral-800 to-zinc-900 
                          flex flex-col items-center justify-center p-4 text-center backdrop-blur-sm
                          hover:border-orange-700/40 transition-all duration-500 mt-8">
              <img className="aspect-square rounded-lg border border-orange-900/20 bg-gradient-to-br from-neutral-800 to-zinc-900 
              hover:border-orange-700/40 transition-all duration-500" src="../../mock/annabelle.png" alt="Interior da botique, 1892" />
              <p className="text-orange-400/30 text-xs pt-2 font-sans">Annabelle, atual proprietária</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
