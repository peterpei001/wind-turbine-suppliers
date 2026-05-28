import { useParams, useSearchParams } from 'react-router-dom';
import { useT } from '../LanguageContext';
import { useLN } from '../useLangNavigate';
import SupplierPanel from '../components/SupplierPanel';
import { treeData } from '../data';
import type { TreeNode } from '../types';

export default function BrowsePage() {
  const { systemId } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const ln = useLN();
  const { t } = useT();
  const componentId = searchParams.get('component');

  const system = systemId ? treeData.children?.find(s => s.id === systemId) : null;
  const components = system?.children?.filter(c => c.type === 'component') || [];
  const systemName = system ? t(system.name) : '';

  // ── No component selected: show component grid ──
  if (!componentId) {
    return (
      <div className="home" style={{ maxWidth: 720 }}>
        <div className="home-hero" style={{ paddingBottom: 0 }}>
          <h2 className="home-hero-title">{systemName}</h2>
          <p className="home-hero-desc" style={{ marginBottom: 0 }}>{components.length} 个部件</p>
        </div>
        <div className="home-grid">
          {components.map((comp) => (
            <div
              key={comp.id}
              className="home-card"
              onClick={() => setSearchParams({ component: comp.id })}
            >
              <div className="home-card-info">
                <div className="home-card-name">{t(comp.name)}</div>
                <div className="home-card-meta">
                  {(comp as any).supplierCount || 0} 家供应商
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // ── Component selected: show supplier panel + tab nav ──
  const currentNode = findNode(treeData, componentId);

  return (
    <div>
      <div className="component-tabs">
        <div className="component-tabs-scroll">
          {components.map((comp) => (
            <button
              key={comp.id}
              className={`component-tab ${comp.id === componentId ? 'active' : ''}`}
              onClick={() => setSearchParams({ component: comp.id })}
            >
              {t(comp.name)}
              {(comp as any).supplierCount && (
                <span className="component-tab-count">{(comp as any).supplierCount}</span>
              )}
            </button>
          ))}
        </div>
      </div>
      <SupplierPanel
        node={currentNode}
        onSelectSupplier={(s) => ln(`/detail/${s.id}`)}
      />
    </div>
  );
}

function findNode(node: TreeNode, id: string): TreeNode | null {
  if (node.id === id) return node;
  for (const child of node.children || []) {
    const found = findNode(child, id);
    if (found) return found;
  }
  return null;
}
