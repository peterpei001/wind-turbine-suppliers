import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useT, useLanguage } from '../LanguageContext';
import { UI } from '../i18n';
import { treeData } from '../data';
import type { Supplier, LocalizedString } from '../types';

interface SearchResult {
  supplier: Supplier;
  componentName: string;
  systemName: string;
}

function tField(field: string | LocalizedString, lang: 'zh' | 'en'): string {
  if (typeof field === 'string') return field;
  return field[lang] || field.zh || '';
}

function getAllSuppliers(lang: 'zh' | 'en'): SearchResult[] {
  const results: SearchResult[] = [];
  for (const sys of treeData.children || []) {
    const systemName = tField(sys.name, lang);
    for (const comp of sys.children || []) {
      if (comp.type === 'component' && comp.suppliers) {
        const componentName = tField(comp.name, lang);
        for (const s of comp.suppliers) {
          results.push({ supplier: s, componentName, systemName });
        }
      }
    }
  }
  return results;
}

function matchesQuery(item: SearchResult, query: string, lang: 'zh' | 'en'): boolean {
  const q = query.toLowerCase();
  const s = item.supplier;
  const name = tField(s.name, lang).toLowerCase();
  const desc = tField(s.description, lang).toLowerCase();
  const keyParams = tField(s.keyParams, lang).toLowerCase();
  const hq = tField(s.headquarters, lang).toLowerCase();
  if (name.includes(q) || desc.includes(q) || keyParams.includes(q) || hq.includes(q)) return true;
  for (const c of s.customers) {
    if (tField(c, lang).toLowerCase().includes(q)) return true;
  }
  for (const t of s.techHighlights) {
    if (tField(t, lang).toLowerCase().includes(q)) return true;
  }
  return false;
}

export default function SearchBar() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [focused, setFocused] = useState(false);
  const navigate = useNavigate();
  const { lang } = useLanguage();
  const { t } = useT();
  const wrapperRef = useRef<HTMLDivElement>(null);
  const allSuppliers = useRef<SearchResult[]>([]);

  useEffect(() => {
    allSuppliers.current = getAllSuppliers(lang);
  }, [lang]);

  useEffect(() => {
    if (query.trim().length < 1) {
      setResults([]);
      return;
    }
    const q = query.trim();
    const matched = allSuppliers.current.filter((item) => matchesQuery(item, q, lang));
    setResults(matched.slice(0, 20));
  }, [query, lang]);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
        setFocused(false);
      }
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  const handleSelect = (supplierId: string) => {
    setQuery('');
    setResults([]);
    setFocused(false);
    navigate(`/detail/${supplierId}`);
  };

  return (
    <div className="search-wrapper" ref={wrapperRef}>
      <input
        className="search-input"
        type="text"
        placeholder={UI.searchPlaceholder[lang]}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onFocus={() => setFocused(true)}
      />
      {focused && results.length > 0 && (
        <div className="search-dropdown">
          {results.map((r) => (
            <div
              key={r.supplier.id}
              className="search-item"
              onClick={() => handleSelect(r.supplier.id)}
            >
              <span className="search-item-name">{t(r.supplier.name)}</span>
              <span className="search-item-meta">
                #{r.supplier.rank} · {r.componentName} · {r.systemName}
              </span>
            </div>
          ))}
        </div>
      )}
      {focused && query.trim().length > 0 && results.length === 0 && (
        <div className="search-dropdown">
          <div className="search-empty">{UI.searchNoResults[lang]}</div>
        </div>
      )}
    </div>
  );
}
