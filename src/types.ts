/* ════════════════ Bilingual Support ════════════════ */

export interface LocalizedString {
  zh: string;
  en: string;
}

/* ════════════════ Data Types ════════════════ */

export interface ContactInfo {
  person?: string | LocalizedString;
  phone?: string;
  email?: string;
  website?: string;
}

export interface Supplier {
  id: string;
  name: string | LocalizedString;
  rank: number;
  marketShare: string | LocalizedString;
  annualShipment: string | LocalizedString;
  revenue?: string;
  techHighlights: (string | LocalizedString)[];
  keyParams: string | LocalizedString;
  customers: (string | LocalizedString)[];
  headquarters: string | LocalizedString;
  description: string | LocalizedString;
  tier: string | LocalizedString;
  contact?: ContactInfo;
  established?: string | LocalizedString;
  employees?: string;
  mainProducts?: (string | LocalizedString)[];
}

export interface TreeNode {
  id: string;
  name: string | LocalizedString;
  type: 'root' | 'system' | 'subsystem' | 'component';
  children?: TreeNode[];
  suppliers?: Supplier[];
  supplierCount?: number;
  topSupplier?: string | LocalizedString;
  cr3?: string;
}

export interface Oem {
  id: string;
  name: LocalizedString;
  rank: number;
  marketShare: string | LocalizedString;
  globalShare?: string | LocalizedString;
  revenue?: string | LocalizedString;
  annualInstall?: string | LocalizedString;
  annualUnits?: string;
  headquarters: LocalizedString;
  established: LocalizedString;
  globalCumulative?: string | LocalizedString;
  description: LocalizedString;
  website?: string;
  platformRange?: string;
  tier: 'domestic-top' | 'domestic' | 'international';
  orderBacklog?: string | LocalizedString;
  offshoreShare?: string | LocalizedString;
  exportRevenue?: string | LocalizedString;
}

export interface OemSupplierLink {
  supplier: Supplier;
  componentId: string;
  componentName: LocalizedString;
  systemId: string;
  systemName: LocalizedString;
}
