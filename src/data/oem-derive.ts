import type { OemSupplierLink, LocalizedString } from '../types';
import { treeData } from './index';
import { resolveOemId } from './oem-aliases';

export function deriveOemSuppliers(oemId: string): OemSupplierLink[] {
  const results: OemSupplierLink[] = [];

  for (const sys of treeData.children || []) {
    const systemName = sys.name;
    for (const comp of sys.children || []) {
      if (comp.type !== 'component' || !comp.suppliers) continue;
      const componentName = comp.name;
      for (const supplier of comp.suppliers) {
        const matched = supplier.customers.some((c) => {
          const name = typeof c === 'string' ? c : c.zh;
          return resolveOemId(name) === oemId;
        });
        if (matched) {
          results.push({
            supplier,
            componentId: comp.id,
            componentName: componentName as LocalizedString,
            systemId: sys.id,
            systemName: systemName as LocalizedString,
          });
        }
      }
    }
  }

  return results;
}

export function deriveOemSupplierCount(oemId: string): number {
  return deriveOemSuppliers(oemId).length;
}
