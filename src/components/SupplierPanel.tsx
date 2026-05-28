import { useT, useLanguage } from '../LanguageContext';
import { UI } from '../i18n';
import type { TreeNode, Supplier, LocalizedString } from '../types';

interface SupplierPanelProps {
  node: TreeNode | null;
  onSelectSupplier: (supplier: Supplier) => void;
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

const rankMedal = (rank: number) => {
  if (rank === 1) return '🥇';
  if (rank === 2) return '🥈';
  if (rank === 3) return '🥉';
  return `#${rank}`;
};

export default function SupplierPanel({ node, onSelectSupplier }: SupplierPanelProps) {
  const { t } = useT();
  const { lang } = useLanguage();

  if (!node) {
    return (
      <div className="content-empty">
        <div className="content-empty-icon">🌬️</div>
        <h2>{UI.emptyTitle[lang]}</h2>
        <p>{UI.emptyHint[lang]}</p>
      </div>
    );
  }

  if (node.type !== 'component' || !node.suppliers?.length) {
    return (
      <div className="content-empty">
        <p>{UI.noData[lang]}</p>
      </div>
    );
  }

  return (
    <div className="content-area">
      <div className="content-header">
        <h2>{t(node.name)}</h2>
        <div className="content-meta">
          {UI.total[lang]} <strong>{node.suppliers.length}</strong> {UI.supplierCount[lang]}
          {node.cr3 && <span> · CR3: {node.cr3}</span>}
        </div>
      </div>
      <div className="supplier-grid">
        {node.suppliers.map((s) => (
          <SupplierCard
            key={s.id}
            supplier={s}
            onDetail={() => onSelectSupplier(s)}
          />
        ))}
      </div>
    </div>
  );
}

interface SupplierCardProps {
  supplier: Supplier;
  onDetail: () => void;
}

function SupplierCard({ supplier, onDetail }: SupplierCardProps) {
  const { t, tArr } = useT();
  const { lang } = useLanguage();

  return (
    <div className="supplier-card" onClick={onDetail} role="button" tabIndex={0}
      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') onDetail(); }}>
      <div className="card-rank-row">
        <span className="card-rank-medal">{rankMedal(supplier.rank)}</span>
        <span className="card-rank-label">{UI.topLabel[lang]} {supplier.rank}</span>
      </div>
      <h3 className="card-company">{t(supplier.name)}</h3>
      {supplier.tier && (
        <span className="card-tier-badge" style={{ backgroundColor: getTierColor(supplier.tier) }}>
          {t(supplier.tier)}
        </span>
      )}

      <div className="card-metrics">
        <div className="metric">
          <span className="metric-value accent">{t(supplier.marketShare)}</span>
          <span className="metric-label">{UI.marketShare[lang]}</span>
        </div>
        <div className="metric">
          <span className="metric-value">{t(supplier.annualShipment) || '—'}</span>
          <span className="metric-label">{UI.annualShipLabel[lang]}</span>
        </div>
      </div>

      <div className="card-detail">
        <span className="detail-label">{UI.keyParams[lang]}</span>
        <p className="detail-text">{t(supplier.keyParams)}</p>
      </div>

      {supplier.techHighlights.length > 0 && (
        <div className="card-tags">
          {tArr(supplier.techHighlights).map((item, i) => (
            <span key={i} className="tag">{item}</span>
          ))}
        </div>
      )}

      <div className="card-detail">
        <span className="detail-label">{UI.customers[lang]}</span>
        <div className="customer-chips">
          {tArr(supplier.customers).map((c, i) => (
            <span key={i} className="chip">{c}</span>
          ))}
        </div>
      </div>

      <div className="card-footer">
        <button className="card-detail-btn" onClick={onDetail}>
          {UI.viewDetail[lang]}
        </button>
      </div>
    </div>
  );
}
