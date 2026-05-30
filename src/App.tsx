import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useParams, useNavigate, useLocation } from 'react-router-dom';
import { LanguageProvider, useLanguage } from './LanguageContext';
import { UI, STRENGTHS } from './i18n';
import TreeNav from './components/TreeNav';
import SearchBar from './components/SearchBar';
import HomePage from './pages/HomePage';
import BrowsePage from './pages/BrowsePage';
import DetailPage from './pages/DetailPage';
import OemListPage from './pages/OemListPage';
import OemDetailPage from './pages/OemDetailPage';
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
  const [expanded, setExpanded] = useState(false);

  return (
    <footer className="footer">
      <hr className="footer-hr" />
      <div className="footer-inner">
        <button className="footer-toggle" onClick={() => setExpanded(!expanded)}>
          {UI.aboutUs[lang]}
          <span className={`footer-arrow ${expanded ? 'open' : ''}`}>▸</span>
        </button>
        {expanded && (
          <div className="footer-content">
            <p className="footer-text">{UI.aboutDesc[lang]}</p>
            <p className="footer-text">{UI.aboutDesc2[lang]}</p>
            <p className="footer-text">{UI.aboutDesc3[lang]}</p>
            <h4 className="footer-strength-title">{UI.aboutStrengthTitle[lang]}</h4>
            <ul className="footer-strength-list">
              {STRENGTHS[lang].map((s, i) => (
                <li key={i} className="footer-strength-item">{s}</li>
              ))}
            </ul>
          </div>
        )}
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
