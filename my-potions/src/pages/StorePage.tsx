import Hero from '../components/Hero';
import History from '../components/History';
import ProductGrid from '../components/ProductGrid';
import Footer from '../components/Footer';

interface StorePageProps {
  onNavigate: (page: string) => void;
}

export default function StorePage({ onNavigate }: StorePageProps) {
  return (
    <div className="bg-zinc-950 text-zinc-100 min-h-screen">
      <Hero onNavigate={onNavigate} />
      <History />
      <ProductGrid />
      <Footer />
    </div>
  );
}
