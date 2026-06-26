import { useState } from 'react';
import axios from 'axios';

interface PotionFormProps {
  token: string;
  onPotionAdded: () => void;
}

export default function PotionForm({ token, onPotionAdded }: PotionFormProps) {
  const [nome, setNome] = useState('');
  const [descricao, setDescricao] = useState('');
  const [imagem, setImagem] = useState('');
  const [preco, setPreco] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage('');
    setError('');
    try {
      await axios.post(
        '/api/potions',
        { nome, descricao, imagem, preco: parseFloat(preco) },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setMessage('pocao cadastrada.');
      setNome('');
      setDescricao('');
      setImagem('');
      setPreco('');
      onPotionAdded();
    } catch {
      setError('erro ao cadastrar pocao.');
    }
  };

  return (
    <div className="bg-neutral-900/80 border border-orange-900/20 rounded-xl p-8 backdrop-blur-sm
                    shadow-[0_0_40px_rgba(234,88,12,0.05)]">
      <h3 className="font-serif text-xl font-semibold text-orange-300 mb-6 flex items-center gap-2">
        <span className="w-1.5 h-1.5 bg-orange-500 rounded-full" />
        Cadastrar nova poção
      </h3>

      <form onSubmit={handleSubmit}>
        <div className="grid md:grid-cols-3 gap-5 mb-5">
          <div className="md:col-span-2">
            <label className="block text-orange-400/50 text-xs tracking-wider uppercase mb-2 font-sans">Nome da poção</label>
            <input
              type="text"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              className="w-full bg-zinc-950 border border-orange-900/10 rounded-lg px-4 py-3
                         text-amber-100 font-sans placeholder:text-zinc-600
                         focus:outline-none focus:border-orange-700/40 focus:ring-1 focus:ring-orange-700/20
                         transition-all duration-300"
              placeholder="ex: pocao blue sky"
              required
            />
          </div>

          <div>
            <label className="block text-orange-400/50 text-xs tracking-wider uppercase mb-2 font-sans">Preço (moedas)</label>
            <input
              type="number"
              step="1"
              min="1"
              value={preco}
              onChange={(e) => setPreco(e.target.value)}
              className="w-full bg-zinc-950 border border-orange-900/10 rounded-lg px-4 py-3
                         text-amber-100 font-sans placeholder:text-zinc-600
                         focus:outline-none focus:border-orange-700/40 focus:ring-1 focus:ring-orange-700/20
                         transition-all duration-300"
              placeholder="ex: 300"
              required
            />
          </div>
        </div>

        <div className="mb-5">
          <label className="block text-orange-400/50 text-xs tracking-wider uppercase mb-2 font-sans">url da imagem</label>
          <input
            type="text"
            value={imagem}
            onChange={(e) => setImagem(e.target.value)}
            className="w-full bg-zinc-950 border border-orange-900/10 rounded-lg px-4 py-3
                       text-amber-100 font-sans placeholder:text-zinc-600
                       focus:outline-none focus:border-orange-700/40 focus:ring-1 focus:ring-orange-700/20
                       transition-all duration-300"
            placeholder="/mock/potion-X.png ou https://..."
            required
          />
        </div>

        <div className="mb-5">
          <label className="block text-orange-400/50 text-xs tracking-wider uppercase mb-2 font-sans">Descrição</label>
          <textarea
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
            rows={2}
            className="w-full bg-zinc-950 border border-orange-900/10 rounded-lg px-4 py-3
                       text-amber-100 font-sans placeholder:text-zinc-600 resize-none
                       focus:outline-none focus:border-orange-700/40 focus:ring-1 focus:ring-orange-700/20
                       transition-all duration-300"
            placeholder="descreva os efeitos e caracteristicas da pocao..."
            required
          />
        </div>

        {message && (
          <div className="mb-4 p-3 bg-emerald-500/10 border border-emerald-500/20 rounded-lg text-emerald-400 text-sm font-sans text-center">
            {message}
          </div>
        )}
        {error && (
          <div className="mb-4 p-3 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400 text-sm font-sans text-center">
            {error}
          </div>
        )}

        <button
          type="submit"
          className="btn-gold px-8 py-3 rounded-lg font-serif text-sm font-semibold text-zinc-950
                     shadow-[0_0_15px_rgba(234,88,12,0.2)]
                     hover:shadow-[0_0_30px_rgba(234,88,12,0.4)]
                     transition-all duration-300 hover:scale-[1.02] cursor-pointer"
        >
          Cadastrar poção
        </button>
      </form>
    </div>
  );
}
