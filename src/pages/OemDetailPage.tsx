import { useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useT, useLanguage } from '../LanguageContext';
import { UI } from '../i18n';
import { oemData } from '../data/oem-data';
import { deriveOemSuppliers } from '../data/oem-derive';

export default function OemDetailPage() {
  const { oemId } = useParams();
  const navigate = useNavigate();
  const { t } = useT();
  const { lang } = useLanguage();

  const oem = oemData.find((o) => o.id === oemId);

  if (!oem) {
    return (
      <div className="content-empty">
        <p>{UI.noData[lang]}</p>
        <button className="detail-back" style={{ marginTop: 16 }} onClick={() => navigate('/oems')}>
          {UI.back[lang]}
        </button>
      </div>
    );
  }

  const links = useMemo(() => deriveOemSuppliers(oem.id), [oem.id]);

  // Group links by system
  const bySystem: { systemId: string; systemName: string; suppliers: typeof links }[] = [];
  const seenSystems = new Set<string>();
  for (const link of links) {
    if (!seenSystems.has(link.systemId)) {
      seenSystems.add(link.systemId);
      bySystem.push({
        systemId: link.systemId,
        systemName: t(link.systemName),
        suppliers: links.filter((l) => l.systemId === link.systemId),
      });
    }
  }

  return (
    <div className="detail-page">
      <div className="detail-topbar">
        <button className="detail-back" onClick={() => navigate('/oems')}>{UI.back[lang]}</button>
        <span className="detail-breadcrumb">{UI.oemTitle[lang]} / {t(oem.name)}</span>
      </div>

      {/* Hero */}
      <div className="detail-hero">
        <div className="detail-hero-left">
          {oem.tier !== 'international' && (
            <span className="detail-rank-num" style={{ marginBottom: 4 }}>#{oem.rank}</span>
          )}
          <h1 className="detail-company-name">{t(oem.name)}</h1>
          <span className="detail-tier-badge" style={{
            backgroundColor: oem.tier === 'international' ? '#8B5CF6' : '#3B82F6'
          }}>
            {oem.tier === 'international' ? (lang === 'zh' ? '国际品牌' : 'International')
              : oem.tier === 'domestic-top' ? (lang === 'zh' ? '国产龙头' : 'China Top')
              : lang === 'zh' ? '国内整机' : 'China OEM'}
          </span>
        </div>
        <div className="detail-hero-right">
          <div className="detail-metric-big">
            <span className="dm-value accent">{t(oem.marketShare)}</span>
            <span className="dm-label">{UI.oemChinaShare[lang]}</span>
          </div>
          <div className="detail-metric-big">
            <span className="dm-value">{t(oem.globalShare) || '—'}</span>
            <span className="dm-label">{UI.oemGlobalShare[lang]}</span>
          </div>
          {oem.revenue && (
            <div className="detail-metric-big">
              <span className="dm-value">{t(oem.revenue)}</span>
              <span className="dm-label">{UI.oemRevenue[lang]}</span>
            </div>
          )}
        </div>
      </div>

      <div className="detail-body">
        <div className="detail-main">
          {/* Description */}
          <section className="detail-section">
            <h3 className="section-title">{UI.companyProfile[lang]}</h3>
            <p className="section-text">{t(oem.description)}</p>
          </section>

          {/* Supply chain */}
          <section className="detail-section">
            <h3 className="section-title">{UI.oemSupplyChain[lang]} ({links.length} {UI.oemSupplierCount[lang]})</h3>
            {bySystem.length === 0 ? (
              <p className="section-text">{UI.oemNoData[lang]}</p>
            ) : (
              bySystem.map((sys) => (
                <div key={sys.systemId} style={{ marginBottom: 16 }}>
                  <h4 style={{ fontSize: 14, color: '#93C5FD', marginBottom: 8, fontWeight: 600 }}>
                    📁 {sys.systemName} ({sys.suppliers.length})
                  </h4>
                  <div className="detail-chips">
                    {sys.suppliers.map((link) => (
                      <span
                        key={link.supplier.id}
                        className="dchip prime"
                        style={{ cursor: 'pointer' }}
                        onClick={() => navigate(`/detail/${link.supplier.id}`)}
                      >
                        {t(link.supplier.name)}
                      </span>
                    ))}
                  </div>
                </div>
              ))
            )}
          </section>

          {/* Key metrics */}
          <section className="detail-section">
            <h3 className="section-title">{UI.companyInfo[lang]}</h3>
            <div className="side-info-list">
              {oem.globalCumulative && (
                <div className="side-info-item">
                  <span className="si-label">{UI.oemCumulative[lang]}</span>
                  <span className="si-value">{t(oem.globalCumulative)}</span>
                </div>
              )}
              {oem.annualUnits && (
                <div className="side-info-item">
                  <span className="si-label">{UI.oemUnits[lang]}</span>
                  <span className="si-value">{oem.annualUnits}</span>
                </div>
              )}
              {oem.orderBacklog && (
                <div className="side-info-item">
                  <span className="si-label">{UI.oemBacklog[lang]}</span>
                  <span className="si-value">{t(oem.orderBacklog)}</span>
                </div>
              )}
              {oem.offshoreShare && (
                <div className="side-info-item">
                  <span className="si-label">{UI.oemOffshore[lang]}</span>
                  <span className="si-value">{t(oem.offshoreShare)}</span>
                </div>
              )}
              {oem.exportRevenue && (
                <div className="side-info-item">
                  <span className="si-label">{UI.oemExport[lang]}</span>
                  <span className="si-value">{t(oem.exportRevenue)}</span>
                </div>
              )}
            </div>
          </section>
        </div>

        {/* Sidebar */}
        <div className="detail-sidebar">
          <div className="side-card">
            <h4 className="side-title">{UI.companyInfo[lang]}</h4>
            <div className="side-info-list">
              <div className="side-info-item">
                <span className="si-label">{UI.headquarters[lang]}</span>
                <span className="si-value">{t(oem.headquarters)}</span>
              </div>
              <div className="side-info-item">
                <span className="si-label">{UI.established[lang]}</span>
                <span className="si-value">{t(oem.established)}</span>
              </div>
              {oem.platformRange && (
                <div className="side-info-item">
                  <span className="si-label">{UI.oemPlatform[lang]}</span>
                  <span className="si-value">{oem.platformRange}</span>
                </div>
              )}
              {oem.website && (
                <div className="side-info-item">
                  <span className="si-label">{UI.website[lang]}</span>
                  <a href={`https://${oem.website}`} target="_blank" rel="noopener noreferrer" className="si-link">
                    {oem.website}
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
