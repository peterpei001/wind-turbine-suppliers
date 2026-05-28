import { useParams, useNavigate } from 'react-router-dom';
import { useLN } from '../useLangNavigate';
import { useLanguage } from '../LanguageContext';
import SupplierDetail from '../components/SupplierDetail';
import { treeData } from '../data';
import type { TreeNode, Supplier } from '../types';

export default function DetailPage() {
  const { supplierId } = useParams();
  const navigate = useNavigate();
  const ln = useLN();
  const { lang } = useLanguage();

  const result = findSupplier(treeData, supplierId || '', lang);
  if (!result) {
    return (
      <div className="content-empty">
        <p>Supplier not found</p>
        <button onClick={() => ln('/browse')} className="detail-back" style={{ marginTop: 16 }}>
          ← Back
        </button>
      </div>
    );
  }

  const { supplier, componentName } = result;

  return (
    <SupplierDetail
      supplier={supplier}
      componentName={componentName}
      onBack={() => navigate(-1)}
    />
  );
}

function findSupplier(
  node: TreeNode,
  id: string,
  lang: 'zh' | 'en'
): { supplier: Supplier; componentName: string } | null {
  for (const child of node.children || []) {
    if (child.type === 'component' && child.suppliers) {
      const s = child.suppliers.find((sp) => sp.id === id);
      if (s) {
        const name = typeof child.name === 'object' ? (child.name[lang] || child.name.zh) : child.name;
        return { supplier: s, componentName: name };
      }
    }
    const found = findSupplier(child, id, lang);
    if (found) return found;
  }
  return null;
}
