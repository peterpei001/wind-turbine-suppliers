# Phase 2 Plan: Router + i18n Infrastructure

## Context

The app currently runs as a single-page state machine — App.tsx holds `selectedNode`/`selectedSupplier` in useState and toggles between SupplierPanel and SupplierDetail. There is no URL-based navigation, no language switching, and all UI chrome text is hardcoded Chinese. The data layer already supports bilingual `{ zh, en }` format. This phase adds routing and a proper language toggle.

## Approach

- **react-router-dom** for URL routing (no hash router — standard BrowserRouter, Vite dev server handles fallback)
- **Custom React Context** for language state — no i18next dep needed since our data is local and the `t()`/`tArr()` pattern is already in place
- **`useT()` hook** — context-aware replacement for the current `t(field, 'zh')` calls, so components don't pass language manually
- **Extract Chinese UI strings** into a `i18n.ts` file as `{ zh, en }` objects

## Files to Create/Modify

### 1. Install dependency
- `npm install react-router-dom`

### 2. NEW: `src/i18n.ts` — UI string translations
- Export a `UI` object mapping all hardcoded Chinese strings in the UI to bilingual format
- Keys: `back`, `breadcrumbSep`, `marketShare`, `annualShipment`, `revenue`, `companyProfile`, `keyParams`, `techHighlights`, `mainProducts`, `customers`, `contactInfo`, `website`, `contact`, `phone`, `email`, `companyInfo`, `headquarters`, `established`, `employees`, `industryRank`, `rankHint`, `supplierCount`, `systems`, `components`, `suppliers`, `navTitle`, `noData`, `demoNote`, etc.
- Type: `{ zh: string; en: string }` (use the same LocalizedString interface)

### 3. NEW: `src/LanguageContext.tsx` — language state + useT hook
- `LanguageProvider` component wrapping children with language state
- `useLanguage()` hook returning `{ lang, toggleLang }`
- `useT()` hook returning `{ t, tArr }` bound to current language
  - `t(field)` — replaces `t(field, lang)` — no lang argument needed
  - `tArr(arr)` — replaces `tArr(arr, lang)` — no lang argument needed
- Store language preference in localStorage

### 4. UPDATE: `src/App.tsx`
- Wrap everything in `<BrowserRouter>` and `<LanguageProvider>`
- Replace state-based switching with `<Routes>`
- Routes:
  - `/` → HomePage (current empty state with systems overview)
  - `/browse/:systemId?` → BrowsePage (TreeNav + SupplierPanel)
  - `/detail/:supplierId` → DetailPage (SupplierDetail)
- Move current layout (header, sidebar, main) into a shared LayoutRoute

### 5. NEW: `src/pages/HomePage.tsx`
- Shows the empty-state content from current SupplierPanel (the "🌬️ 风电供应商图谱" landing)
- Lists all 16 systems as quick-entry cards (sourced from treeData)

### 6. NEW: `src/pages/BrowsePage.tsx`
- Merges current App.tsx browse state + TreeNav + SupplierPanel
- URL param `systemId` controls which system is expanded in the nav
- `?component=X` search param controls selected component
- Clicking supplier navigates to `/detail/:supplierId`

### 7. NEW: `src/pages/DetailPage.tsx`
- Reads supplier from URL param, looks up in treeData
- Renders SupplierDetail component
- Back button navigates to `/browse/...`

### 8. UPDATE: `src/components/SupplierDetail.tsx`
- Replace `t(field, 'zh')` with `t(field)` from `useT()` hook
- Replace hardcoded Chinese UI strings with `UI.key` from `i18n.ts`

### 9. UPDATE: `src/components/SupplierPanel.tsx`
- Same: `t()` → `useT().t()`, hardcoded strings → `UI.*`

### 10. UPDATE: `src/components/TreeNav.tsx`
- Same: `t()` → `useT().t()`, hardcoded strings → `UI.*`
- `onSelect` navigates to `/browse/:systemId?component=:componentId`

### 11. UPDATE: `src/main.tsx`
- Wrap `<App />` with `<BrowserRouter>` (or do it inside App.tsx)

### 12. UPDATE: Vite config for SPA routing (if deploying)
- Add `historyApiFallback` equivalent for production build

## Key Design Decisions

- **No i18next**: Our data is local, the `{ zh, en }` pattern is already typed. i18next adds 20KB+ and config overhead for what is essentially a two-locale toggle plus string lookup.
- **`useT()` hook over context-consuming `t()`**: By making `t()` and `tArr()` context-aware through a hook, we avoid passing `lang` everywhere. Existing calls like `t(s.name, 'zh')` become `t(s.name)`.
- **Page components as thin wrappers**: Each page is a thin shell that reads route params and delegates to existing components. No refactoring of the components themselves beyond switching t() sources.

## Implementation Order

1. `npm install react-router-dom`
2. Create `src/i18n.ts` — extract all Chinese UI strings
3. Create `src/LanguageContext.tsx` — LanguageProvider + useT hook
4. Update `src/App.tsx` — routing + LanguageProvider
5. Create `src/pages/HomePage.tsx`
6. Create `src/pages/BrowsePage.tsx`
7. Create `src/pages/DetailPage.tsx`
8. Update components (SupplierDetail, SupplierPanel, TreeNav) — useT + UI strings
9. Update `src/main.tsx` if needed
10. Build + verify

## Verification

```bash
npm run build
npm run dev
```
- Navigate to `/` → see home page
- Click a system → URL updates to `/browse/sys-blade`
- Click a component → component selected in nav
- Click a supplier → navigate to `/detail/s1`
- Click back → back to browse
- Toggle language → all text switches between zh/en
