import { useLanguage } from '../LanguageContext';
import { useLN } from '../useLangNavigate';
import { UI } from '../i18n';
import { treeData } from '../data';

const systemIcons: Record<string, string> = {
  'sys-blade': '🌀', 'sys-pitch': '⚙️', 'sys-hub': '🛞', 'sys-drivetrain': '🔧',
  'sys-generator': '⚡', 'sys-yaw': '🔄', 'sys-brake': '🛑', 'sys-converter': '🗄️',
  'sys-electrical': '💡', 'sys-control': '🧠', 'sys-cms': '📊', 'sys-hydraulic': '💧',
  'sys-cooling': '❄️', 'sys-structure': '🏗️', 'sys-foundation': '🏠',
};

const shortLabels: Record<string, { zh: string; en: string }> = {
  'sys-blade': { zh: '叶片', en: 'Blade' },
  'sys-pitch': { zh: '变桨', en: 'Pitch' },
  'sys-hub': { zh: '轮毂', en: 'Hub' },
  'sys-drivetrain': { zh: '传动', en: 'Drivetrain' },
  'sys-generator': { zh: '发电机', en: 'Generator' },
  'sys-yaw': { zh: '偏航', en: 'Yaw' },
  'sys-brake': { zh: '制动', en: 'Brake' },
  'sys-converter': { zh: '变流', en: 'Converter' },
  'sys-electrical': { zh: '电气', en: 'Electrical' },
  'sys-control': { zh: '控制', en: 'Control' },
  'sys-cms': { zh: 'CMS', en: 'CMS' },
  'sys-hydraulic': { zh: '液压', en: 'Hydraulic' },
  'sys-cooling': { zh: '冷却', en: 'Cooling' },
  'sys-structure': { zh: '结构', en: 'Structure' },
  'sys-foundation': { zh: '基础', en: 'Foundation' },
};

const tagColors: Record<string, string> = {
  'sys-blade': '#3B82F6', 'sys-pitch': '#8B5CF6', 'sys-hub': '#EC4899',
  'sys-drivetrain': '#F59E0B', 'sys-generator': '#22C55E', 'sys-yaw': '#14B8A6',
  'sys-brake': '#EF4444', 'sys-converter': '#A855F7', 'sys-electrical': '#EAB308',
  'sys-control': '#06B6D4', 'sys-cms': '#F97316', 'sys-hydraulic': '#0EA5E9',
  'sys-cooling': '#6366F1', 'sys-structure': '#84CC16', 'sys-foundation': '#64748B',
};

export default function HomePage() {
  const { lang } = useLanguage();
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
        {(treeData.children || []).map((sys) => {
          const label = shortLabels[sys.id];
          const color = tagColors[sys.id] || '#3B82F6';
          const shortName = lang === 'zh' ? label?.zh : label?.en;
          return (
            <div key={sys.id} className="home-card" onClick={() => ln(`/browse/${sys.id}`)}>
              <div className="home-card-tag" style={{ backgroundColor: color }}>
                <span className="home-card-tag-icon">{systemIcons[sys.id] || '📦'}</span>
                <span className="home-card-tag-label">{shortName}</span>
              </div>
              <div className="home-card-info">
                <div className="home-card-meta">
                  {(sys.children || []).filter(c => c.type === 'component').length} {UI.components[lang]}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
