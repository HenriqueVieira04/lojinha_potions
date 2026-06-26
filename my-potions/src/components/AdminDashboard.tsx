import { useState, useEffect } from 'react';
import axios from 'axios';
import PotionForm from './PotionForm';
import PotionCard from './PotionCard';

interface Potion {
  id: number;
  nome: string;
  descricao: string;
  imagem: string;
  preco: number;
}

interface AdminDashboardProps {
  token: string;
  onLogout: () => void;
}

export default function AdminDashboard({ token, onLogout }: AdminDashboardProps) {
  const [potions, setPotions] = useState<Potion[]>([]);
  const [refreshKey, setRefreshKey] = useState(0);
  const [showForm, setShowForm] = useState(false);
  const [deleting, setDeleting] = useState<number | null>(null);
  const [selected, setSelected] = useState<Potion | null>(null);

  const fetchPotions = () => {
    axios
      .get('/api/potions')
      .then((res) => {
        setPotions(res.data);
        if (res.data.length > 0 && !selected) setSelected(res.data[0]);
      })
      .catch(() => console.error('Erro ao carregar pocoes'));
  };

  useEffect(() => { fetchPotions(); }, [refreshKey]);

  const handlePotionAdded = () => {
    setRefreshKey((k) => k + 1);
    setShowForm(false);
  };

  const handleDelete = async (id: number) => {
    if (!confirm('Remover esta poção?')) return;
    setDeleting(id);
    try {
      await axios.delete(`/api/potions/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setPotions((prev) => prev.filter((p) => p.id !== id));
      setSelected((prev) => (prev?.id === id ? null : prev));
    } catch {
      alert('Erro ao remover pocao.');
    } finally {
      setDeleting(null);
    }
  };

  const totalMoedas = potions.reduce((sum, p) => sum + p.preco, 0);
  const maisCara = potions.length > 0 ? Math.max(...potions.map((p) => p.preco)) : 0;
  const maisBarata = potions.length > 0 ? Math.min(...potions.map((p) => p.preco)) : 0;

  return (
    <div className="min-h-screen relative">
      <div className="absolute inset-0 bg-gradient-to-br from-zinc-950 via-neutral-950 to-orange-950/20" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(234,88,12,0.06)_0%,_transparent_50%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-10">
        {/* header */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-10">
          <div>
            <h1 className="font-serif text-3xl font-bold text-amber-100">Administração</h1>
            <p className="text-zinc-500 text-sm mt-1 font-sans">Gerencie o catálogo de poções</p>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => setShowForm(!showForm)}
              className="px-5 py-2.5 rounded-lg text-sm font-sans font-semibold
                         bg-gradient-to-r from-orange-700 to-orange-600 text-white
                         hover:from-orange-600 hover:to-orange-500
                         shadow-[0_0_15px_rgba(234,88,12,0.2)]
                         transition-all duration-300 cursor-pointer"
            >
              {showForm ? 'Fechar' : '+ NOVA POÇÃO'}
            </button>
            <button
              onClick={onLogout}
              className="px-5 py-2.5 rounded-lg text-sm font-sans uppercase
                         border border-red-500/20 text-red-400/70
                         hover:bg-red-500/10 hover:border-red-500/40
                         transition-all duration-300 cursor-pointer"
            >
              Sair
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {[
            { label: 'total de pocoes', value: potions.length, color: 'from-orange-900/40 to-orange-950/20', border: 'border-orange-900/10' },
            { label: 'moedas em estoque', value: totalMoedas, color: 'from-amber-900/40 to-amber-950/20', border: 'border-amber-900/10' },
            { label: 'mais cara', value: `${maisCara} m.`, color: 'from-orange-900/30 to-red-950/20', border: 'border-red-900/10' },
            { label: 'mais barata', value: `${maisBarata} m.`, color: 'from-emerald-900/30 to-emerald-950/20', border: 'border-emerald-900/10' },
          ].map((stat, i) => (
            <div key={i} className={`bg-gradient-to-br ${stat.color} ${stat.border} border rounded-xl p-5 backdrop-blur-sm`}>
              <p className="text-zinc-500 text-xs font-sans uppercase tracking-wider mb-2">{stat.label}</p>
              <p className="text-amber-200 font-serif text-2xl font-bold">{stat.value}</p>
            </div>
          ))}
        </div>

        {showForm && (
          <div className="mb-10">
            <PotionForm token={token} onPotionAdded={handlePotionAdded} />
          </div>
        )}

        {/* layout */}
        <div className="grid lg:grid-cols-3 gap-6">
          {/* lista de cards */}
          <div className="lg:col-span-2">
            <div className="bg-neutral-900/60 border border-orange-900/10 rounded-xl p-6 backdrop-blur-sm">
              <h3 className="font-serif text-lg font-semibold text-orange-300 mb-6">
                Poções cadastradas ({potions.length})
              </h3>
              {potions.length === 0 ? (
                <p className="text-zinc-500 font-sans text-sm py-8 text-center">Nenhuma poção cadastrada ainda.</p>
              ) : (
                <div className="space-y-3">
                  {potions.map((potion) => (
                    <PotionCard
                      key={potion.id}
                      potion={potion}
                      selected={selected?.id === potion.id}
                      onSelect={setSelected}
                      onDelete={handleDelete}
                      deleting={deleting === potion.id}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* painel lateral de detalhes */}
          <div className="lg:col-span-1">
            <div className="bg-neutral-900/60 border border-orange-900/10 rounded-xl p-6 backdrop-blur-sm sticky top-6">
              <h3 className="font-serif text-lg font-semibold text-orange-300 mb-4">detalhes</h3>
              {selected ? (
                <div className="space-y-4">
                  <div className="aspect-square bg-white rounded-lg overflow-hidden border border-orange-900/5">
                    <img src={selected.imagem} alt={selected.nome} className="w-full h-full object-contain p-3" />
                  </div>
                  <div>
                    <p className="text-zinc-500 text-xs font-sans uppercase tracking-wider">Nome</p>
                    <p className="text-amber-100 font-serif text-lg font-semibold">{selected.nome}</p>
                  </div>
                  <div>
                    <p className="text-zinc-500 text-xs font-sans uppercase tracking-wider">Preço</p>
                    <p className="text-orange-400 font-serif text-xl font-bold">{selected.preco} Moedas</p>
                  </div>
                  <div>
                    <p className="text-zinc-500 text-xs font-sans uppercase tracking-wider">Descrição</p>
                    <p className="text-zinc-400 text-sm font-sans leading-relaxed">{selected.descricao}</p>
                  </div>
                </div>
              ) : (
                <p className="text-zinc-500 text-sm font-sans leading-relaxed">
                  Clique em uma poção na lista ao lado para ver os detalhes.
                </p>
              )}
              <div className="border-t border-orange-900/10 pt-4 mt-4">
                <p className="text-zinc-600 text-xs font-sans">Preço em moedas do mundo bruxo.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
