import { useLanguage } from '../LanguageContext';
import { UI } from '../i18n';
import { treeData } from '../data';

export default function HomePage() {
  const { lang } = useLanguage();

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
    <div className="content-empty">
      <div className="content-empty-icon">🌬️</div>
      <h2>{UI.emptyTitle[lang]}</h2>
      <p>{UI.emptyHint[lang]}</p>
      <div className="content-empty-hints">
        <span>{sysCount} {UI.systems[lang]}</span>
        <span>·</span>
        <span>{compCount}+ {UI.components[lang]}</span>
        <span>·</span>
        <span>{suppCount}+ {UI.suppliers[lang]}</span>
      </div>
    </div>
  );
}
