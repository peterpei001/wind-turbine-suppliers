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
