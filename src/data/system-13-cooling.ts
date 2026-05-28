import type { TreeNode } from '../types';

export const coolingSystem: TreeNode = {
  id: 'sys-cooling',
  name: { zh: '冷却系统', en: 'Cooling System' },
  type: 'system',
  children: [
    {
      id: 'cool-gen',
      name: { zh: '发电机冷却', en: 'Generator Cooling' },
      type: 'component',
      supplierCount: 3,
      topSupplier: { zh: '高澜股份/英维克', en: 'Golang / Envicool' },
      cr3: '—',
      suppliers: [
        { id: 's137', name: { zh: '高澜股份', en: 'Golang' }, contact: { website: 'www.golang.com' }, rank: 1, marketShare: '~25%', annualShipment: '5000+ 套', keyParams: { zh: '液冷系统,冷却功率(kW)', en: 'Liquid cooling system, cooling power (kW)' }, customers: [{ zh: '禾望', en: 'Hopewind' }, { zh: '阳光', en: 'Sungrow' }, { zh: '金风', en: 'Goldwind' }], headquarters: { zh: '广州', en: 'Guangzhou' }, tier: { zh: '国产高端', en: 'China High-End' }, techHighlights: [{ zh: '液冷系统集成', en: 'Liquid cooling system integration' }], description: { zh: '国产液冷龙头，发电机与变流器冷却系统批量配套', en: 'Leading domestic liquid cooling company, mass-supplying generator and converter cooling systems' } },
        { id: 's138', name: { zh: '英维克', en: 'Envicool' }, contact: { website: 'www.envicool.com' }, rank: 2, marketShare: '~15%', annualShipment: '3000+ 套', keyParams: { zh: '液冷+温控', en: 'Liquid cooling + temperature control' }, customers: [{ zh: '远景', en: 'Envision' }, { zh: '明阳', en: 'Mingyang' }], headquarters: { zh: '深圳', en: 'Shenzhen' }, tier: { zh: '国产高端', en: 'China High-End' }, techHighlights: [{ zh: '精密温控', en: 'Precision temperature control' }], description: { zh: '精密温控解决方案供应商，覆盖液冷+空冷双技术路线', en: 'Precision temperature control solution provider, covering liquid + air cooling paths' } },
        { id: 's139', name: { zh: '空冷方案(通用)', en: 'Air Cooling Solution (General)' }, rank: 3, marketShare: '—', annualShipment: '—', keyParams: { zh: '空空/空水冷却', en: 'Air-air / air-water cooling' }, customers: [{ zh: '通用', en: 'General' }], headquarters: '—', tier: '—', techHighlights: [{ zh: '成熟空冷方案', en: 'Mature air cooling solutions' }], description: { zh: '开放式空冷系统', en: 'Open air cooling system' } },
      ]
    },
    {
      id: 'cool-gearbox',
      name: { zh: '齿轮箱冷却', en: 'Gearbox Cooling' },
      type: 'component',
      supplierCount: 3,
      topSupplier: { zh: '贺德克/Hydac', en: 'Hydac' },
      cr3: '—',
      suppliers: [
        { id: 's140', name: { zh: '贺德克 (Hydac)', en: 'Hydac' }, contact: { website: 'www.hydac.com' }, rank: 1, marketShare: '~30%', annualShipment: '—', keyParams: { zh: '齿轮箱散热器', en: 'Gearbox radiator' }, customers: [{ zh: '南高齿', en: 'NGC' }, { zh: '重齿', en: 'Chongchi' }], headquarters: { zh: '德国', en: 'Germany' }, tier: { zh: '国际一线', en: 'Global First-Tier' }, techHighlights: [{ zh: '集成式冷却', en: 'Integrated cooling' }], description: { zh: '齿轮箱冷却国际品牌，配套南高齿/重齿等齿轮箱龙头', en: 'International gearbox cooling brand, supplying NGC/Chongchi and other gearbox leaders' } },
        { id: 's141', name: { zh: '川润股份', en: 'Chuanrun' }, contact: { website: 'www.chuanrun.com' }, rank: 2, marketShare: '~15%', annualShipment: '—', keyParams: { zh: '国产润滑冷却', en: 'Domestic lubrication cooling' }, customers: [{ zh: '南高齿', en: 'NGC' }, { zh: '重齿', en: 'Chongchi' }], headquarters: { zh: '四川', en: 'Sichuan' }, tier: { zh: '国产高端', en: 'China High-End' }, techHighlights: [{ zh: '国产冷却系统', en: 'Domestic cooling system' }], description: { zh: '国产润滑冷却企业，齿轮箱冷却系统核心供应商', en: 'Domestic lubrication and cooling company, core gearbox cooling supplier' } },
      ]
    },
    {
      id: 'cool-converter',
      name: { zh: '变流器冷却', en: 'Converter Cooling' },
      type: 'component',
      supplierCount: 2,
      topSupplier: { zh: '高澜股份', en: 'Golang' },
      cr3: '—',
      suppliers: [
        { id: 's142', name: { zh: '高澜股份', en: 'Golang' }, contact: { website: 'www.golang.com' }, rank: 1, marketShare: '~25%', annualShipment: '—', keyParams: { zh: 'IGBT液冷板', en: 'IGBT liquid cooling plate' }, customers: [{ zh: '禾望', en: 'Hopewind' }, { zh: '阳光', en: 'Sungrow' }], headquarters: { zh: '广州', en: 'Guangzhou' }, tier: { zh: '国产高端', en: 'China High-End' }, techHighlights: [{ zh: 'IGBT液冷散热', en: 'IGBT liquid cooling' }], description: { zh: '电力电子冷却龙头，IGBT液冷板主力供应商', en: 'Power electronics cooling leader, main IGBT liquid cooling plate supplier' } },
        { id: 's143', name: { zh: '英维克', en: 'Envicool' }, contact: { website: 'www.envicool.com' }, rank: 2, marketShare: '~15%', annualShipment: '—', keyParams: { zh: '变流器温控', en: 'Converter temperature control' }, customers: [{ zh: '远景', en: 'Envision' }, { zh: '明阳', en: 'Mingyang' }], headquarters: { zh: '深圳', en: 'Shenzhen' }, tier: { zh: '国产高端', en: 'China High-End' }, techHighlights: [{ zh: '风冷/液冷全方案', en: 'Air/liquid cooling full solutions' }], description: { zh: '变流器温控方案供应商，风冷/液冷全覆盖', en: 'Converter temperature control solution provider, full air/liquid cooling coverage' } },
      ]
    },
  ]
};
