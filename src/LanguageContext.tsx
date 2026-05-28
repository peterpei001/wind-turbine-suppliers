import { createContext, useContext, useState, type ReactNode } from 'react';
import type { LocalizedString } from './types';

interface LanguageContextValue {
  lang: 'zh' | 'en';
  setLang: (l: 'zh' | 'en') => void;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<'zh' | 'en'>('zh');

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider');
  return ctx;
}

export function useT() {
  const { lang } = useLanguage();

  const t = (field: string | LocalizedString | null | undefined): string => {
    if (!field) return '';
    if (typeof field === 'string') return field;
    return field[lang] || field.zh || '';
  };

  const tArr = (arr: (string | LocalizedString)[] | undefined): string[] => {
    if (!arr) return [];
    return arr.map((item) => {
      if (typeof item === 'string') return item;
      return item[lang] || item.zh || '';
    });
  };

  return { t, tArr };
}
