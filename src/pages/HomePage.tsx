import { useNavigate } from 'react-router-dom';
import { useT, useLanguage } from '../LanguageContext';
import { UI } from '../i18n';
import { treeData } from '../data';

const systemIcons: Record<string, string> = {
  'sys-blade': '🌀', 'sys-pitch': '⚙️', 'sys-hub': '🛞', 'sys-drivetrain': '🔧',
  'sys-generator': '⚡', 'sys-yaw': '🔄', 'sys-brake': '🛑', 'sys-converter': '🔌',
  'sys-electrical': '💡', 'sys-control': '🧠', 'sys-cms': '📊', 'sys-hydraulic': '💧',
  'sys-cooling': '❄️', 'sys-structure': '🏗️', 'sys-foundation': '🏠',
};

export default function HomePage() {
  const { lang } = useLanguage();
  const { t } = useT();
  const navigate = useNavigate();

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
          <div key={sys.id} className="home-card" onClick={() => navigate(`/browse/${sys.id}`)}>
            <div className="home-card-icon">{systemIcons[sys.id] || '📦'}</div>
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
