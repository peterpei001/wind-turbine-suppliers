import { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { LanguageProvider, useLanguage } from './LanguageContext';
import { UI } from './i18n';
import TreeNav from './components/TreeNav';
import SearchBar from './components/SearchBar';
import HomePage from './pages/HomePage';
import BrowsePage from './pages/BrowsePage';
import DetailPage from './pages/DetailPage';
import { treeData } from './data';
import './App.css';

function countAll(): { systems: number; components: number; suppliers: number } {
  let comps = 0;
  let supps = 0;
  for (const sys of treeData.children || []) {
    for (const c of sys.children || []) {
      if (c.type === 'component') {
        comps++;
        supps += (c as any).suppliers?.length || 0;
      }
    }
  }
  return { systems: treeData.children?.length || 0, components: comps, suppliers: supps };
}

function Header() {
  const { lang, toggleLang } = useLanguage();
  const counts = countAll();

  return (
    <header className="header">
      <div className="header-left">
        <span className="logo">🌬️</span>
        <h1 className="title">{UI.emptyTitle[lang]}</h1>
      </div>
      <SearchBar />
      <div className="header-right">
        <span className="stat-chip">{counts.systems} {UI.systems[lang]}</span>
        <span className="stat-chip">{counts.components} {UI.components[lang]}</span>
        <span className="stat-chip">{counts.suppliers} {UI.suppliers[lang]}</span>
        <button className="lang-toggle" onClick={toggleLang}>
          {UI.langSwitch[lang]}
        </button>
      </div>
    </header>
  );
}

function AppInner() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="app">
      <Header />
      <div className="body">
        <div className={`sidebar-overlay ${sidebarOpen ? 'open' : ''}`} onClick={() => setSidebarOpen(false)} />
        <div className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
          <TreeNav onClose={() => setSidebarOpen(false)} />
        </div>
        <button className="menu-btn" onClick={() => setSidebarOpen(!sidebarOpen)}>
          {sidebarOpen ? '✕' : '☰'}
        </button>
        <main className="main">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/browse" element={<BrowsePage />} />
            <Route path="/browse/:systemId" element={<BrowsePage />} />
            <Route path="/detail/:supplierId" element={<DetailPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <LanguageProvider>
        <AppInner />
      </LanguageProvider>
    </BrowserRouter>
  );
}
