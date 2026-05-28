import type { TreeNode } from '../types';

export const brakeSystem: TreeNode = {
  id: 'sys-brake',
  name: { zh: '制动系统', en: 'Brake System' },
  type: 'system',
  children: [
    {
      id: 'brake-main',
      name: { zh: '高速轴制动器', en: 'High-Speed Shaft Brake' },
      type: 'component',
      supplierCount: 3,
      topSupplier: { zh: '华伍股份', en: 'Huawo' },
      cr3: '~65%',
      suppliers: [
        { id: 's73', name: { zh: '华伍股份', en: 'Huawo' }, rank: 1, marketShare: '~35%', annualShipment: { zh: '15000+ 台', en: '15000+ units' }, keyParams: { zh: '高速轴+偏航制动', en: 'High-Speed Shaft + Yaw Brake' }, customers: [{ zh: '金风科技', en: 'Goldwind' }, { zh: '远景能源', en: 'Envision Energy' }, { zh: '明阳智能', en: 'Mingyang Smart Energy' }, { zh: '运达股份', en: 'Windey' }], headquarters: { zh: '江西', en: 'Jiangxi' }, tier: { zh: '国产高端', en: 'China High-End' }, techHighlights: [{ zh: '盘式制动技术', en: 'Disc Brake Technology' }], description: { zh: '国内风电制动器龙头', en: 'Leading Domestic Wind Power Brake Manufacturer' }, contact: { website: 'www.hua-wu.com' } },
        { id: 's74', name: { zh: '焦作制动器', en: 'Jiaozuo Brake' }, rank: 2, marketShare: '~20%', annualShipment: { zh: '8000+ 台', en: '8000+ units' }, keyParams: { zh: '偏航制动+转子制动', en: 'Yaw Brake + Rotor Brake' }, customers: [{ zh: '运达股份', en: 'Windey' }, { zh: '华锐风电', en: 'Sinovel' }], headquarters: { zh: '河南', en: 'Henan' }, tier: { zh: '国产高端', en: 'China High-End' }, techHighlights: [{ zh: '全系列制动器', en: 'Full Brake Series' }], description: { zh: '国内制动器老牌企业', en: 'Established Domestic Brake Manufacturer' }, contact: { website: 'www.jzzdq.com' } },
        { id: 's75', name: { zh: '西伯瑞 (SIBRE)', en: 'SIBRE' }, rank: 3, marketShare: '~12%', annualShipment: '—', keyParams: { zh: '国际品牌', en: 'International Brand' }, customers: ['GE', 'SGRE'], headquarters: { zh: '丹麦', en: 'Denmark' }, tier: { zh: '国际一线', en: 'International Tier 1' }, techHighlights: [{ zh: '高端制动方案', en: 'High-End Brake Solution' }], description: { zh: '丹麦风电制动品牌', en: 'Danish Wind Brake Brand' }, contact: { website: 'www.sibre.de' } },
      ]
    },
    {
      id: 'brake-rotor',
      name: { zh: '转子制动器', en: 'Rotor Brake' },
      type: 'component',
      supplierCount: 2,
      topSupplier: { zh: '华伍股份', en: 'Huawo' },
      cr3: '—',
      suppliers: [
        { id: 's76', name: { zh: '华伍股份', en: 'Huawo' }, rank: 1, marketShare: '~35%', annualShipment: '—', keyParams: { zh: '转子制动', en: 'Rotor Brake' }, customers: [{ zh: '金风', en: 'Goldwind' }, { zh: '远景', en: 'Envision Energy' }, { zh: '明阳', en: 'Mingyang Smart Energy' }, { zh: '运达', en: 'Windey' }], headquarters: { zh: '江西', en: 'Jiangxi' }, tier: { zh: '国产高端', en: 'China High-End' }, techHighlights: [{ zh: '制动系统全套方案', en: 'Complete Brake System Solution' }], description: { zh: '国产风电制动龙头', en: 'Leading Domestic Wind Brake Manufacturer' }, contact: { website: 'www.hua-wu.com' } },
        { id: 's77', name: { zh: '焦作制动器', en: 'Jiaozuo Brake' }, rank: 2, marketShare: '~20%', annualShipment: '—', keyParams: { zh: '转子制动', en: 'Rotor Brake' }, customers: [{ zh: '运达', en: 'Windey' }, { zh: '华锐', en: 'Sinovel' }], headquarters: { zh: '河南', en: 'Henan' }, tier: { zh: '国产高端', en: 'China High-End' }, techHighlights: [{ zh: '盘式制动器', en: 'Disc Brake' }], description: { zh: '风电制动器老牌企业', en: 'Established Wind Brake Manufacturer' }, contact: { website: 'www.jzzdq.com' } },
      ]
    },
  ]
};
