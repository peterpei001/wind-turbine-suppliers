import type { TreeNode } from '../types';

export const yawSystem: TreeNode = {
  id: 'sys-yaw',
  name: { zh: '偏航系统', en: 'Yaw System' },
  type: 'system',
  children: [
    {
      id: 'yaw-bearing',
      name: { zh: '偏航轴承', en: 'Yaw Bearing' },
      type: 'component',
      supplierCount: 5,
      topSupplier: { zh: '罗特艾德', en: 'Rothe Erde' },
      cr3: '~60%',
      suppliers: [
        { id: 's64', name: { zh: '罗特艾德 (Rothe Erde)', en: 'Rothe Erde' }, rank: 1, marketShare: '~30%', annualShipment: '—', keyParams: { zh: '全球龙头,直径1-4m', en: 'Global Leader, Diameter 1-4m' }, customers: ['GE', 'SGRE', 'Nordex'], headquarters: { zh: '德国', en: 'Germany' }, tier: { zh: '国际一线', en: 'International Tier 1' }, techHighlights: [{ zh: '大直径回转轴承', en: 'Large Diameter Slewing Bearing' }], description: { zh: '全球偏航轴承及回转支承龙头', en: 'Global Yaw Bearing & Slewing Ring Leader' }, contact: { website: 'www.thyssenkrupp-rotheerde.com' } },
        { id: 's65', name: { zh: 'IMO (德国)', en: 'IMO (Germany)' }, rank: 2, marketShare: '~20%', annualShipment: '—', keyParams: { zh: '高精度回转轴承', en: 'High-Precision Slewing Bearing' }, customers: [{ zh: '维斯塔斯', en: 'Vestas' }], headquarters: { zh: '德国', en: 'Germany' }, tier: { zh: '国际一线', en: 'International Tier 1' }, techHighlights: [{ zh: '精密回转支承', en: 'Precision Slewing Ring' }], description: { zh: '德国精密回转轴承品牌', en: 'German Precision Slewing Bearing Brand' }, contact: { website: 'www.imo.de' } },
        { id: 's66', name: { zh: '洛轴 (LYC)', en: 'LYC (Luoyang Bearing)' }, rank: 3, marketShare: '~18%', annualShipment: { zh: '10000+ 套', en: '10000+ units' }, keyParams: { zh: '内齿/外齿全面覆盖', en: 'Full Internal/External Gear Coverage' }, customers: [{ zh: '金风科技', en: 'Goldwind' }, { zh: '远景能源', en: 'Envision Energy' }, { zh: '运达股份', en: 'Windey' }], headquarters: { zh: '洛阳', en: 'Luoyang' }, tier: { zh: '国产高端', en: 'China High-End' }, techHighlights: [{ zh: '国产大直径轴承', en: 'Domestic Large Diameter Bearing' }], description: { zh: '国内偏航轴承龙头企业', en: 'Leading Domestic Yaw Bearing Manufacturer' }, contact: { website: 'www.lyc.cn' } },
        { id: 's67', name: { zh: '天马轴承', en: 'Tianma Bearing' }, rank: 4, marketShare: '~12%', annualShipment: { zh: '6000+ 套', en: '6000+ units' }, keyParams: { zh: '高性价比', en: 'High Cost Performance' }, customers: [{ zh: '运达股份', en: 'Windey' }, { zh: '三一重能', en: 'Sany Renewable Energy' }], headquarters: { zh: '浙江', en: 'Zhejiang' }, tier: { zh: '国产性价比', en: 'China Cost-Effective' }, techHighlights: [{ zh: '性价比优势', en: 'Cost Performance Advantage' }], description: { zh: '民营偏航轴承企业', en: 'Private Yaw Bearing Enterprise' }, contact: { website: 'www.tmb.net.cn' } },
        { id: 's68', name: { zh: '瓦轴 (ZWZ)', en: 'ZWZ (Wafangdian Bearing)' }, rank: 5, marketShare: '~10%', annualShipment: { zh: '5000+ 套', en: '5000+ units' }, keyParams: { zh: '国产替代', en: 'Domestic Substitute' }, customers: [{ zh: '明阳智能', en: 'Mingyang Smart Energy' }, { zh: '华锐风电', en: 'Sinovel' }], headquarters: { zh: '瓦房店', en: 'Wafangdian' }, tier: { zh: '国产高端', en: 'China High-End' }, techHighlights: [{ zh: '回转轴承全系列', en: 'Full Slewing Bearing Series' }], description: { zh: '国产偏航轴承老牌企业', en: 'Established Domestic Yaw Bearing Enterprise' }, contact: { website: 'www.zwz-bearing.com' } },
      ]
    },
    {
      id: 'yaw-drive',
      name: { zh: '偏航驱动', en: 'Yaw Drive' },
      type: 'component',
      supplierCount: 4,
      topSupplier: { zh: '邦飞利', en: 'Bonfiglioli' },
      cr3: '~63%',
      suppliers: [
        { id: 's69', name: { zh: '邦飞利 (Bonfiglioli)', en: 'Bonfiglioli' }, rank: 1, marketShare: '~25%', annualShipment: '—', keyParams: { zh: '电机+减速器集成', en: 'Motor + Gearbox Integration' }, customers: ['GE', { zh: '维斯塔斯', en: 'Vestas' }, { zh: '金风科技', en: 'Goldwind' }], headquarters: { zh: '意大利', en: 'Italy' }, tier: { zh: '国际一线', en: 'International Tier 1' }, techHighlights: [{ zh: '集成化驱动方案', en: 'Integrated Drive Solution' }], description: { zh: '意大利偏航驱动品牌', en: 'Italian Yaw Drive Brand' }, contact: { website: 'www.bonfiglioli.com' } },
        { id: 's70', name: { zh: '汇川技术', en: 'Inovance Technology' }, rank: 2, marketShare: '~20%', annualShipment: { zh: '12000+ 台', en: '12000+ units' }, keyParams: { zh: '国产,性价比路线', en: 'Domestic, Cost-Effective Approach' }, customers: [{ zh: '远景能源', en: 'Envision Energy' }, { zh: '运达股份', en: 'Windey' }, { zh: '三一重能', en: 'Sany Renewable Energy' }], headquarters: { zh: '深圳', en: 'Shenzhen' }, tier: { zh: '国产高端', en: 'China High-End' }, techHighlights: [{ zh: '国产伺服驱动', en: 'Domestic Servo Drive' }], description: { zh: '国产偏航驱动龙头企业', en: 'Leading Domestic Yaw Drive Manufacturer' } },
        { id: 's71', name: { zh: '布雷维尼 (Brevini)', en: 'Brevini' }, rank: 3, marketShare: '~18%', annualShipment: '—', keyParams: { zh: '高可靠性', en: 'High Reliability' }, customers: ['SGRE', 'Nordex'], headquarters: { zh: '意大利', en: 'Italy' }, tier: { zh: '国际一线', en: 'International Tier 1' }, techHighlights: [{ zh: '高可靠性驱动', en: 'High Reliability Drive' }], description: { zh: '意大利偏航驱动品牌', en: 'Italian Yaw Drive Brand' }, contact: { website: 'www.brevini.com' } },
        { id: 's72', name: { zh: '伦茨 (Lenze)', en: 'Lenze' }, rank: 4, marketShare: '~12%', annualShipment: '—', keyParams: { zh: '伺服驱动', en: 'Servo Drive' }, customers: [{ zh: '维斯塔斯', en: 'Vestas' }], headquarters: { zh: '德国', en: 'Germany' }, tier: { zh: '国际一线', en: 'International Tier 1' }, techHighlights: [{ zh: '风电伺服驱动', en: 'Wind Power Servo Drive' }], description: { zh: '德国偏航驱动品牌', en: 'German Yaw Drive Brand' }, contact: { website: 'www.lenze.com' } },
      ]
    },
  ]
};
