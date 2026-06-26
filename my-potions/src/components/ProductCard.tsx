interface Potion {
  id: number;
  nome: string;
  descricao: string;
  imagem: string;
  preco: number;
}

interface ProductCardProps {
  potion: Potion;
}

export default function ProductCard({ potion }: ProductCardProps) {
  return (
    <div className="group relative bg-gradient-to-b from-neutral-900 to-zinc-950 
                    border border-orange-900/20 rounded-xl overflow-hidden
                    hover:border-orange-700/40 hover:shadow-[0_0_30px_rgba(234,88,12,0.15)]
                    transition-all duration-500 backdrop-blur-sm">
      {/* imagem 1:1 com fundo branco e object-contain */}
      <div className="relative aspect-square bg-white overflow-hidden">
        <img
          src={potion.imagem}
          alt={potion.nome}
          className="w-full h-full object-contain p-4 transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
        {/* overlay sutil no hover */}
        <div className="absolute inset-0 bg-orange-900/0 group-hover:bg-orange-900/5 transition-colors duration-500" />
      </div>

      {/* conteudo */}
      <div className="p-6">
        {/* nome */}
        <h3 className="font-serif text-xl font-semibold text-amber-100 mb-2 group-hover:text-orange-300 transition-colors duration-300">
          {potion.nome}
        </h3>

        {/* descricao */}
        <p className="text-zinc-500 text-sm leading-relaxed mb-4 line-clamp-3 font-sans">
          {potion.descricao}
        </p>

        {/* preco e botao */}
        <div className="flex items-center justify-between">
          <span className="font-serif text-lg font-bold text-orange-400">
            {potion.preco} Moedas
          </span>
          <button
            className="px-5 py-2 rounded text-sm font-semibold text-zinc-950 font-sans
                       bg-gradient-to-r from-orange-600 to-amber-600
                       hover:from-orange-500 hover:to-amber-500
                       shadow-[0_0_15px_rgba(234,88,12,0.2)]
                       hover:shadow-[0_0_25px_rgba(234,88,12,0.4)]
                       transition-all duration-300 hover:scale-105 cursor-pointer"
          >
            Comprar
          </button>
        </div>
      </div>
    </div>
  );
}
