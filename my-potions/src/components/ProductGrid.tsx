import { useState, useEffect } from 'react';
import axios from 'axios';
import ProductCard from './ProductCard';

interface Potion {
  id: number;
  nome: string;
  descricao: string;
  imagem: string;
  preco: number;
}

export default function ProductGrid() {
  const [potions, setPotions] = useState<Potion[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get('/api/potions')
      .then((res) => setPotions(res.data))
      .catch(() => console.error('erro ao carregar pocoes'))
      .finally(() => setLoading(false));
  }, []);

  return (
    <section className="py-24 px-6 relative" id="vitrine">
      {/* fundo */}
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-neutral-950 to-zinc-950" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-orange-700/30" />
            <span className="text-orange-400/50 text-xs tracking-[0.4em] uppercase font-sans">Nossa coleção</span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-orange-700/30" />
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-amber-100">
            Poções disponíveis
          </h2>
          <p className="text-zinc-500 mt-4 max-w-xl mx-auto font-sans">
            Cada frasco e preparado artesanalmente com ingredientes selecionados
            e formulas aperfeicoadas por geracoes.
          </p>
        </div>

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((n) => (
              <div
                key={n}
                className="bg-neutral-900/50 border border-orange-900/10 rounded-xl h-96 animate-pulse"
              />
            ))}
          </div>
        ) : potions.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-zinc-500 font-serif text-lg">
              Nenhuma poção disponível no momento. Visite-nos em breve!
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {potions.map((potion) => (
              <ProductCard key={potion.id} potion={potion} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
