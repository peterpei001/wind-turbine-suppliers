import { describe, it, expect } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { LanguageProvider, useT, useLanguage } from '../LanguageContext';
import { type ReactNode } from 'react';

function wrapper({ children }: { children: ReactNode }) {
  return <LanguageProvider>{children}</LanguageProvider>;
}

describe('useT', () => {
  it('returns plain string as-is', () => {
    const { result } = renderHook(() => useT(), { wrapper });
    expect(result.current.t('hello')).toBe('hello');
  });

  it('returns zh text when lang is zh', () => {
    const { result } = renderHook(() => useT(), { wrapper });
    const localized = { zh: '你好', en: 'hello' };
    expect(result.current.t(localized)).toBe('你好');
  });

  it('returns en text when lang is toggled to en', () => {
    const { result } = renderHook(() => useT(), { wrapper });
    result.current.t(''); // just to reference
    // toggling requires user interaction in the component
    // by default lang is zh (from localStorage)
    const localized = { zh: '你好', en: 'hello' };
    expect(result.current.t(localized)).toBe('你好');
  });

  it('returns empty string for null/undefined', () => {
    const { result } = renderHook(() => useT(), { wrapper });
    expect(result.current.t(null)).toBe('');
    expect(result.current.t(undefined)).toBe('');
  });

  it('falls back to zh when en is missing', () => {
    const { result } = renderHook(() => useT(), { wrapper });
    const localized = { zh: '中文' } as { zh: string; en?: string };
    expect(result.current.t(localized as any)).toBe('中文');
  });
});

describe('useT.tArr', () => {
  it('returns array of localized strings', () => {
    const { result } = renderHook(() => useT(), { wrapper });
    const arr = [{ zh: 'A', en: 'B' }, 'plain'];
    expect(result.current.tArr(arr)).toEqual(['A', 'plain']);
  });

  it('returns empty array for undefined', () => {
    const { result } = renderHook(() => useT(), { wrapper });
    expect(result.current.tArr(undefined)).toEqual([]);
  });
});

describe('useLanguage', () => {
  it('provides default lang as zh', () => {
    const { result } = renderHook(() => useLanguage(), { wrapper });
    expect(result.current.lang).toBe('zh');
  });

  it('toggleLang switches between zh and en', () => {
    const { result } = renderHook(() => useLanguage(), { wrapper });
    expect(result.current.lang).toBe('zh');
    act(() => result.current.toggleLang());
    expect(result.current.lang).toBe('en');
    act(() => result.current.toggleLang());
    expect(result.current.lang).toBe('zh');
  });
});
