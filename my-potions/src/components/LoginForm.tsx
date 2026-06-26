import { useState } from 'react';
import axios from 'axios';

interface LoginFormProps {
  onLogin: (token: string) => void;
  onBack: () => void;
}

export default function LoginForm({ onLogin, onBack }: LoginFormProps) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      const res = await axios.post('/api/login', { username, password });
      onLogin(res.data.token);
    } catch {
      setError('credenciais invalidas. tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-neutral-950 to-zinc-950" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(234,88,12,0.06)_0%,_transparent_70%)]" />

      <div className="relative z-10 w-full max-w-md">
        <div className="text-center mb-10">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-8 bg-gradient-to-r from-transparent to-orange-600/40" />
            <span className="text-orange-400/40 text-lg">-</span>
            <div className="h-px w-8 bg-gradient-to-l from-transparent to-orange-600/40" />
          </div>
          <h2 className="font-serif text-3xl font-bold text-orange-200 mb-2">
            area restrita
          </h2>
          <p className="text-zinc-500 text-sm font-sans">
            acesso exclusivo para o administrador da loja
          </p>
        </div>

        <div className="mb-6 text-center">
          <button
            type="button"
            onClick={onBack}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-lg text-sm font-sans
                       border border-orange-900/20 text-orange-400/60
                       hover:bg-orange-900/10 hover:border-orange-700/30 hover:text-orange-300
                       transition-all duration-300 cursor-pointer"
          >
            <span>&lt;-</span> Voltar para a loja!
          </button>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-neutral-900/80 border border-orange-900/10 rounded-xl p-8 backdrop-blur-sm
                     shadow-[0_0_40px_rgba(0,0,0,0.5)]"
        >
          <div className="mb-5">
            <label className="block text-orange-400/60 text-xs tracking-wider uppercase mb-2 font-sans">
              Usuário
            </label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full bg-zinc-950 border border-orange-900/10 rounded-lg px-4 py-3
                         text-amber-100 font-sans placeholder:text-zinc-600
                         focus:outline-none focus:border-orange-700/40 focus:ring-1 focus:ring-orange-700/20
                         transition-all duration-300"
              placeholder="digite seu usuario"
              required
            />
          </div>

          <div className="mb-6">
            <label className="block text-orange-400/60 text-xs tracking-wider uppercase mb-2 font-sans">
              Senha
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-zinc-950 border border-orange-900/10 rounded-lg px-4 py-3
                         text-amber-100 font-sans placeholder:text-zinc-600
                         focus:outline-none focus:border-orange-700/40 focus:ring-1 focus:ring-orange-700/20
                         transition-all duration-300"
              placeholder="digite sua senha"
              required
            />
          </div>

          {error && (
            <div className="mb-4 p-3 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400 text-sm font-sans text-center">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full btn-gold py-3 rounded-lg font-serif text-base font-semibold text-zinc-950
                       shadow-[0_0_20px_rgba(234,88,12,0.2)]
                       hover:shadow-[0_0_40px_rgba(234,88,12,0.4)]
                       transition-all duration-300 hover:scale-[1.02] cursor-pointer
                       disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
          >
            {loading ? 'autenticando...' : 'entrar'}
          </button>
        </form>

        <p className="text-center mt-6 text-zinc-600 text-xs font-sans">
          Use as credenciais de administrador fornecidas
        </p>
      </div>
    </div>
  );
}
