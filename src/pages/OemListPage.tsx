import { useT, useLanguage } from '../LanguageContext';
import { useLN } from '../useLangNavigate';
import { UI } from '../i18n';
import { oemData } from '../data/oem-data';
import { deriveOemSupplierCount } from '../data/oem-derive';

export default function OemListPage() {
  const { t } = useT();
  const { lang } = useLanguage();
  const ln = useLN();

  const domestic = oemData.filter((o) => o.tier === 'domestic-top' || o.tier === 'domestic');
  const intl = oemData.filter((o) => o.tier === 'international');

  const totalSuppliers = domestic.reduce((s, o) => s + deriveOemSupplierCount(o.id), 0);

  return (
    <div className="home" style={{ maxWidth: 800 }}>
      <div className="home-hero">
        <h2 className="home-hero-title">{UI.oemTitle[lang]}</h2>
        <p className="home-hero-desc">{UI.emptyTitle[lang]} — {domestic.length} {UI.oemCount[lang]}，{intl.length} {tierLabel('international', lang)}</p>
        <div className="home-stats">
          <div className="home-stat">
            <span className="home-stat-num">{domestic.length}</span>
            <span className="home-stat-label">{UI.oemCount[lang]}{UI.total[lang]}</span>
          </div>
          <div className="home-stat">
            <span className="home-stat-num">{intl.length}</span>
            <span className="home-stat-label">{tierLabel('international', lang)}</span>
          </div>
          <div className="home-stat">
            <span className="home-stat-num">{totalSuppliers}</span>
            <span className="home-stat-label">{supplierLabel(lang)}</span>
          </div>
        </div>
      </div>

      <h3 style={{ fontSize: 15, color: '#93C5FD', marginBottom: 12, padding: '0 4px' }}>
        {domesticRankLabel(lang)}
      </h3>
      <div className="home-grid">
        {domestic.map((oem) => (
          <div key={oem.id} className="oem-card" onClick={() => ln(`/oem/${oem.id}`)}>
            <div className="oem-card-rank">#{oem.rank}</div>
            <div className="oem-card-name">{t(oem.name)}</div>
            <div className="oem-card-share">{t(oem.marketShare)}</div>
            <div className="oem-card-subs">{deriveOemSupplierCount(oem.id)} {UI.oemSupplierCount[lang]}</div>
          </div>
        ))}
      </div>

      <h3 style={{ fontSize: 15, color: '#93C5FD', margin: '24px 0 12px', padding: '0 4px' }}>
        {intlLabel(lang)}
      </h3>
      <div className="home-grid">
        {intl.map((oem) => (
          <div key={oem.id} className="oem-card intl" onClick={() => ln(`/oem/${oem.id}`)}>
            <div className="oem-card-rank">🌍</div>
            <div className="oem-card-name">{t(oem.name)}</div>
            <div className="oem-card-share">{t(oem.marketShare)}</div>
            <div className="oem-card-subs">{deriveOemSupplierCount(oem.id)} {UI.oemSupplierCount[lang]}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function tierLabel(tier: string, lang: string) {
  if (lang === 'zh') return tier === 'international' ? '国际品牌' : '国内';
  return tier === 'international' ? 'International' : 'Domestic';
}

function supplierLabel(lang: string) {
  return lang === 'zh' ? '配套关系' : 'Relations';
}

function domesticRankLabel(lang: string) {
  return lang === 'zh' ? '🇨🇳 国内整机厂商' : '🇨🇳 Chinese OEMs';
}

function intlLabel(lang: string) {
  return lang === 'zh' ? '🌍 国际品牌' : '🌍 International Brands';
}
