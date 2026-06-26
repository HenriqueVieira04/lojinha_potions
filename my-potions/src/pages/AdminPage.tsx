import { useState, useEffect } from 'react';
import LoginForm from '../components/LoginForm';
import AdminDashboard from '../components/AdminDashboard';

interface AdminPageProps {
  onNavigate: (page: string) => void;
}

export default function AdminPage({ onNavigate }: AdminPageProps) {
  const [token, setToken] = useState<string | null>(null);

  // verifica se ja existe token salvo ao carregar
  useEffect(() => {
    const saved = localStorage.getItem('admin_token');
    if (saved) setToken(saved);
  }, []);

  const handleLogin = (newToken: string) => {
    localStorage.setItem('admin_token', newToken);
    setToken(newToken);
  };

  const handleLogout = () => {
    localStorage.removeItem('admin_token');
    setToken(null);
  };

  if (!token) {
    return <LoginForm onLogin={handleLogin} onBack={() => onNavigate('store')} />;
  }

  return (
    <div className="bg-zinc-950 text-zinc-100 min-h-screen">
      {/* barra de navegacao superior */}
      <nav className="relative border-b border-orange-900/10 bg-neutral-950/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <button
            onClick={() => onNavigate('store')}
            className="text-orange-400/70 hover:text-orange-300 transition-colors font-serif text-sm flex items-center gap-2 cursor-pointer"
          >
            <span>&lt;-</span> Voltar a loja
          </button>
          <span className="text-zinc-600 text-xs font-sans">painel administrativo</span>
        </div>
      </nav>

      <AdminDashboard token={token} onLogout={handleLogout} />
    </div>
  );
}
