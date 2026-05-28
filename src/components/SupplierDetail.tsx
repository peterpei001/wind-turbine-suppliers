import { useMemo } from 'react';
import { useT, useLanguage } from '../LanguageContext';
import { UI } from '../i18n';
import type { Supplier, LocalizedString } from '../types';

interface DetailProps {
  supplier: Supplier;
  componentName: string;
  onBack: () => void;
}

const tierColor: Record<string, string> = {
  '国际一线': '#8B5CF6',
  '国际品牌': '#EC4899',
  '国产高端': '#3B82F6',
  '国产性价比': '#22C55E',
};

const getTierColor = (tier: string | LocalizedString): string => {
  const key = typeof tier === 'object' ? tier.zh : tier;
  return tierColor[key] || '#6B7280';
};

export default function SupplierDetail({ supplier, componentName, onBack }: DetailProps) {
  const s = supplier;
  const { t, tArr } = useT();
  const { lang } = useLanguage();

  const isDemo = useMemo(() => !s.contact, [s]);

  return (
    <div className="detail-page">
      {/* Top bar */}
      <div className="detail-topbar">
        <button className="detail-back" onClick={onBack}>{UI.back[lang]}</button>
        <span className="detail-breadcrumb">{componentName} / {t(s.name)}</span>
      </div>

      {/* Hero section */}
      <div className="detail-hero">
        <div className="detail-hero-left">
          <div className="detail-rank-hero">
            <span className="detail-rank-num">{UI.topLabel[lang]} {s.rank}</span>
            <span className={`detail-rank-medal ${s.rank <= 3 ? 'medal' : ''}`}>
              {s.rank === 1 ? '🥇' : s.rank === 2 ? '🥈' : s.rank === 3 ? '🥉' : `#${s.rank}`}
            </span>
          </div>
          <h1 className="detail-company-name">{t(s.name)}</h1>
          {s.tier && (
            <span className="detail-tier-badge" style={{ backgroundColor: getTierColor(s.tier) }}>
              {t(s.tier)}
            </span>
          )}
        </div>
        <div className="detail-hero-right">
          <div className="detail-metric-big">
            <span className="dm-value accent">{t(s.marketShare)}</span>
            <span className="dm-label">{UI.marketShare[lang]}</span>
          </div>
          <div className="detail-metric-big">
            <span className="dm-value">{t(s.annualShipment) || '—'}</span>
            <span className="dm-label">{UI.annualShipment[lang]}</span>
          </div>
          {s.revenue && (
            <div className="detail-metric-big">
              <span className="dm-value">{t(s.revenue)}</span>
              <span className="dm-label">{UI.revenue[lang]}</span>
            </div>
          )}
        </div>
      </div>

      <div className="detail-body">
        {/* Left column */}
        <div className="detail-main">
          {/* Company Profile */}
          <section className="detail-section">
            <h3 className="section-title">{UI.companyProfile[lang]}</h3>
            <p className="section-text">{t(s.description)}</p>
            {isDemo && (
              <p className="demo-note">{UI.demoNote[lang]}</p>
            )}
          </section>

          {/* Key Parameters */}
          <section className="detail-section">
            <h3 className="section-title">{UI.keyParams[lang]}</h3>
            <p className="section-text">{t(s.keyParams)}</p>
          </section>

          {/* Tech Highlights */}
          {s.techHighlights.length > 0 && (
            <section className="detail-section">
              <h3 className="section-title">{UI.techHighlights[lang]}</h3>
              <div className="detail-tags">
                {tArr(s.techHighlights).map((item, i) => (
                  <span key={i} className="dtag">{item}</span>
                ))}
              </div>
            </section>
          )}

          {/* Main Products */}
          {s.mainProducts && s.mainProducts.length > 0 && (
            <section className="detail-section">
              <h3 className="section-title">{UI.mainProducts[lang]}</h3>
              <ul className="detail-list">
                {tArr(s.mainProducts).map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </section>
          )}

          {/* Customers */}
          <section className="detail-section">
            <h3 className="section-title">{UI.customers[lang]}</h3>
            <div className="detail-chips">
              {tArr(s.customers).map((c, i) => (
                <span key={i} className="dchip prime">{c}</span>
              ))}
            </div>
          </section>
        </div>

        {/* Right column — side info */}
        <div className="detail-sidebar">
          {/* Contact Card */}
          <div className="side-card">
            <h4 className="side-title">{UI.contactInfo[lang]}</h4>
            {s.contact ? (
              <div className="side-info-list">
                <div className="side-info-item">
                  <span className="si-label">{UI.website[lang]}</span>
                  <a href={`https://${s.contact.website}`} target="_blank" rel="noopener noreferrer" className="si-link">
                    {s.contact.website}
                  </a>
                </div>
                <div className="side-info-item">
                  <span className="si-label">{UI.contact[lang]}</span>
                  <span className="si-value">{t(s.contact.person) || '—'}</span>
                </div>
                <div className="side-info-item">
                  <span className="si-label">{UI.phone[lang]}</span>
                  <span className="si-value">{s.contact.phone || '—'}</span>
                </div>
                <div className="side-info-item">
                  <span className="si-label">{UI.email[lang]}</span>
                  <span className="si-value">{s.contact.email || '—'}</span>
                </div>
              </div>
            ) : (
              <div className="side-placeholder">
                <p>{UI.contactPlaceholder[lang]}</p>
              </div>
            )}
          </div>

          {/* Company Info */}
          <div className="side-card">
            <h4 className="side-title">{UI.companyInfo[lang]}</h4>
            <div className="side-info-list">
              <div className="side-info-item">
                <span className="si-label">{UI.headquarters[lang]}</span>
                <span className="si-value">{t(s.headquarters)}</span>
              </div>
              {s.established && (
                <div className="side-info-item">
                  <span className="si-label">{UI.established[lang]}</span>
                  <span className="si-value">{t(s.established)}</span>
                </div>
              )}
              {s.employees && (
                <div className="side-info-item">
                  <span className="si-label">{UI.employees[lang]}</span>
                  <span className="si-value">{s.employees}</span>
                </div>
              )}
            </div>
          </div>

          {/* Rank Card */}
          <div className="side-card">
            <h4 className="side-title">{UI.industryRank[lang]}</h4>
            <div className="rank-display">
              <span className="rank-big">#{s.rank}</span>
            </div>
            <div className="rank-hint">{UI.rankHint[lang]}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
