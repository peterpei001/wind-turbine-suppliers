import { useState } from 'react';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import { useT, useLanguage } from '../LanguageContext';
import { UI } from '../i18n';
import { treeData } from '../data';
import type { TreeNode } from '../types';

interface TreeNavProps {
  onClose?: () => void;
}

export default function TreeNav({ onClose }: TreeNavProps) {
  const { t } = useT();
  const { lang } = useLanguage();
  const navigate = useNavigate();
  const { systemId } = useParams();
  const [searchParams] = useSearchParams();
  const componentId = searchParams.get('component');

  const [expanded, setExpanded] = useState<Record<string, boolean>>(() => {
    const all: Record<string, boolean> = {};
    treeData.children?.forEach(c => {
      all[c.id] = !systemId || c.id === systemId;
    });
    return all;
  });

  const toggle = (id: string) => {
    setExpanded(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const handleSelect = (child: TreeNode, parentId: string) => {
    navigate(`/browse/${parentId}?component=${child.id}`);
    onClose?.();
  };

  const goOem = () => { navigate('/oems'); onClose?.(); };

  return (
    <nav className="tree-nav">
      <div className="tree-header">{UI.navTitle[lang]}</div>
      <div className="tree-scroll">
        {treeData.children?.map((system) => (
          <div key={system.id} className="tree-system">
            <div
              className="tree-system-head"
              onClick={() => toggle(system.id)}
            >
              <span className={`tree-arrow ${expanded[system.id] ? 'expanded' : ''}`}>▶</span>
              <span className="tree-system-name">{t(system.name)}</span>
              <span className="tree-badge">{system.children?.length || 0}</span>
            </div>
            {expanded[system.id] && system.children?.map((child) => (
              <div
                key={child.id}
                className={`tree-item ${componentId === child.id ? 'active' : ''} ${child.type === 'component' ? 'clickable' : ''}`}
                onClick={() => child.type === 'component' && handleSelect(child, system.id)}
              >
                <span className="tree-dot">└─</span>
                <span className="tree-item-name">{t(child.name)}</span>
                {child.supplierCount && (
                  <span className="tree-supplier-count">{child.supplierCount}{UI.supplierSuffix[lang]}</span>
                )}
              </div>
            ))}
          </div>
        ))}
        <div className="tree-sep" />
        <div className="tree-system-head" onClick={goOem} style={{ paddingLeft: 10 }}>
          <span className="tree-arrow" style={{ visibility: 'hidden' }}>▶</span>
          <span className="tree-system-name" style={{ color: '#F1F5F9' }}>{UI.oemNav[lang]}</span>
        </div>
      </div>
    </nav>
  );
}
