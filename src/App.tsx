import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useParams, useNavigate, useLocation } from 'react-router-dom';
import { LanguageProvider, useLanguage } from './LanguageContext';
import { useLN } from './useLangNavigate';
import { UI } from './i18n';
import TreeNav from './components/TreeNav';
import SearchBar from './components/SearchBar';
import HomePage from './pages/HomePage';
import BrowsePage from './pages/BrowsePage';
import DetailPage from './pages/DetailPage';
import OemListPage from './pages/OemListPage';
import OemDetailPage from './pages/OemDetailPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import { treeData } from './data';
import { oemData } from './data/oem-data';
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
  const { lang } = useLanguage();
  const counts = countAll();
  const navigate = useNavigate();
  const location = useLocation();

  const toggleLang = () => {
    const newLang = lang === 'zh' ? 'en' : 'zh';
    const path = location.pathname.replace(/^\/(zh|en)/, `/${newLang}`);
    navigate(path);
  };

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
        <span className="stat-chip">{oemData.length} {UI.oemCount[lang]}</span>
        <button className="lang-toggle" onClick={toggleLang}>
          {UI.langSwitch[lang]}
        </button>
      </div>
    </header>
  );
}

/** Reads :lang from URL and sets it in context */
function LangGate({ children }: { children: React.ReactNode }) {
  const { lang: paramsLang } = useParams();
  const { setLang } = useLanguage();

  useEffect(() => {
    if (paramsLang === 'zh' || paramsLang === 'en') setLang(paramsLang);
  }, [paramsLang, setLang]);

  return <>{children}</>;
}

function Footer() {
  const { lang } = useLanguage();
  const ln = useLN();

  return (
    <footer className="footer">
      <hr className="footer-hr" />
      <div className="footer-inner">
        <div className="footer-links">
          <button className="footer-link" onClick={() => ln('/')}>
            {UI.homeNav[lang]}
          </button>
          <button className="footer-link" onClick={() => ln('/about')}>
            {UI.aboutUs[lang]}
          </button>
          <button className="footer-link" onClick={() => ln('/contact')}>
            {UI.contactUs[lang]}
          </button>
        </div>
        <p className="footer-copy">{UI.emptyTitle[lang]} &copy; {new Date().getFullYear()}</p>
      </div>
    </footer>
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
            <Route path="/:lang" element={<LangGate><HomePage /></LangGate>} />
            <Route path="/:lang/browse" element={<LangGate><BrowsePage /></LangGate>} />
            <Route path="/:lang/browse/:systemId" element={<LangGate><BrowsePage /></LangGate>} />
            <Route path="/:lang/detail/:supplierId" element={<LangGate><DetailPage /></LangGate>} />
            <Route path="/:lang/oems" element={<LangGate><OemListPage /></LangGate>} />
            <Route path="/:lang/oem/:oemId" element={<LangGate><OemDetailPage /></LangGate>} />
            <Route path="/:lang/about" element={<LangGate><AboutPage /></LangGate>} />
            <Route path="/:lang/contact" element={<LangGate><ContactPage /></LangGate>} />
            <Route path="/" element={<Navigate to="/zh/" replace />} />
            <Route path="*" element={<Navigate to="/zh/" replace />} />
          </Routes>
        </main>
      </div>
      <Footer />
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
