interface Potion {
  id: number;
  nome: string;
  descricao: string;
  imagem: string;
  preco: number;
}

interface PotionCardProps {
  potion: Potion;
  selected: boolean;
  onSelect: (p: Potion) => void;
  onDelete: (id: number) => void;
  deleting: boolean;
}

export default function PotionCard({ potion, selected, onSelect, onDelete, deleting }: PotionCardProps) {
  return (
    <div
      onClick={() => onSelect(potion)}
      className={`flex items-center gap-4 p-4 rounded-xl border cursor-pointer transition-all duration-300
        ${selected
          ? 'bg-orange-900/20 border-orange-700/40 shadow-[0_0_20px_rgba(234,88,12,0.1)]'
          : 'bg-zinc-950/60 border-orange-900/5 hover:border-orange-900/20 hover:bg-neutral-900/80'
        }`}
    >
      <div className="w-14 h-14 bg-white rounded-lg overflow-hidden flex-shrink-0 border border-orange-900/5">
        <img src={potion.imagem} alt={potion.nome} className="w-full h-full object-contain p-1.5" />
      </div>

      <div className="flex-1 min-w-0">
        <p className="text-amber-100 font-serif text-sm font-semibold truncate">{potion.nome}</p>
        <p className="text-orange-400 font-sans text-xs font-bold mt-0.5">{potion.preco} moedas</p>
        <p className="text-zinc-600 text-xs mt-0.5 truncate font-sans">#{potion.id}</p>
      </div>

      {/* delete */}
      <button
        onClick={(e) => { e.stopPropagation(); onDelete(potion.id); }}
        disabled={deleting}
        className="px-3 py-1.5 rounded-lg text-xs font-sans font-semibold
                   bg-red-500/10 text-red-400 border border-red-500/20
                   hover:bg-red-500/20 hover:border-red-500/40
                   transition-all duration-300 cursor-pointer
                   disabled:opacity-50 disabled:cursor-not-allowed flex-shrink-0"
      >
        {deleting ? '...' : 'remover'}
      </button>
    </div>
  );
}
