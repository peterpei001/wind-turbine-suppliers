import { useT, useLanguage } from '../LanguageContext';
import { useLN } from '../useLangNavigate';
import { UI } from '../i18n';
import { treeData } from '../data';
import { SystemIcon } from '../components/SystemIcon';

export default function HomePage() {
  const { lang } = useLanguage();
  const { t } = useT();
  const ln = useLN();

  const sysCount = treeData.children?.length || 0;
  let compCount = 0;
  let suppCount = 0;
  for (const sys of treeData.children || []) {
    for (const c of sys.children || []) {
      if (c.type === 'component') {
        compCount++;
        suppCount += (c as any).suppliers?.length || 0;
      }
    }
  }

  return (
    <div className="home">
      <div className="home-hero">
        <div className="home-hero-icon">🌬️</div>
        <h2 className="home-hero-title">{UI.emptyTitle[lang]}</h2>
        <p className="home-hero-desc">{UI.emptyHint[lang]}</p>
        <div className="home-stats">
          <div className="home-stat">
            <span className="home-stat-num">{sysCount}</span>
            <span className="home-stat-label">{UI.systems[lang]}</span>
          </div>
          <div className="home-stat">
            <span className="home-stat-num">{compCount}</span>
            <span className="home-stat-label">{UI.components[lang]}</span>
          </div>
          <div className="home-stat">
            <span className="home-stat-num">{suppCount}</span>
            <span className="home-stat-label">{UI.suppliers[lang]}</span>
          </div>
        </div>
      </div>
      <div className="home-grid">
        {(treeData.children || []).map((sys) => (
          <div key={sys.id} className="home-card" onClick={() => ln(`/browse/${sys.id}`)}>
            <span className="home-card-icon">
              <SystemIcon systemId={sys.id} size={20} />
            </span>
            <div className="home-card-info">
              <div className="home-card-name">{t(sys.name)}</div>
              <div className="home-card-meta">
                {(sys.children || []).filter(c => c.type === 'component').length} {UI.components[lang]}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
