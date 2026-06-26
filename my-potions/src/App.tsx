import { useState } from 'react';
import StorePage from './pages/StorePage';
import AdminPage from './pages/AdminPage';

type Page = 'store' | 'admin';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('store');

  const navigate = (page: string) => {
    if (page === 'store' || page === 'admin') setCurrentPage(page);
  };

  return currentPage === 'store' ? (
    <StorePage onNavigate={navigate} />
  ) : (
    <AdminPage onNavigate={navigate} />
  );
}

export default App;
