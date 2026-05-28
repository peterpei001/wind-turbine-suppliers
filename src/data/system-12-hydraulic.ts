import type { TreeNode } from '../types';

export const hydraulicSystem: TreeNode = {
  id: 'sys-hydraulic',
  name: { zh: '液压/润滑系统', en: 'Hydraulic / Lubrication System' },
  type: 'system',
  children: [
    {
      id: 'hydro-station',
      name: { zh: '液压制动站', en: 'Hydraulic Brake Station' },
      type: 'component',
      supplierCount: 4,
      topSupplier: { zh: '贺德克(Hydac)', en: 'Hydac' },
      cr3: '—',
      suppliers: [
        { id: 's129', name: { zh: '贺德克 (Hydac)', en: 'Hydac' }, contact: { website: 'www.hydac.com' }, rank: 1, marketShare: '~25%', annualShipment: '—', keyParams: { zh: '液压集成,高压过滤', en: 'Hydraulic integration, high-pressure filtration' }, customers: [{ zh: '金风科技', en: 'Goldwind' }, { zh: '远景能源', en: 'Envision Energy' }, { zh: '南高齿', en: 'NGC (Nanjing High Speed Gear)' }], headquarters: { zh: '德国', en: 'Germany' }, tier: { zh: '国际一线', en: 'Global First-Tier' }, techHighlights: [{ zh: '液压集成技术', en: 'Hydraulic integration technology' }], description: { zh: '全球液压品牌,2024年风电液压站龙头', en: 'Global hydraulic brand, 2024 wind power station leader' } },
        { id: 's130', name: { zh: '派克 (Parker Hannifin)', en: 'Parker Hannifin' }, contact: { website: 'www.parker.com' }, rank: 2, marketShare: '~20%', annualShipment: '—', keyParams: { zh: '液压+制动控制', en: 'Hydraulic + brake control' }, customers: ['GE', { zh: '维斯塔斯', en: 'Vestas' }], headquarters: { zh: '美国', en: 'USA' }, tier: { zh: '国际一线', en: 'Global First-Tier' }, techHighlights: [{ zh: '电液控制', en: 'Electro-hydraulic control' }], description: { zh: '美国液压巨头,2024年电液控制领先', en: 'US hydraulic giant, 2024 electro-hydraulic leader' } },
        { id: 's131', name: { zh: '博世力士乐 (Rexroth)', en: 'Bosch Rexroth' }, contact: { website: 'www.boschrexroth.com' }, rank: 3, marketShare: '~15%', annualShipment: '—', keyParams: { zh: '高端液压元件', en: 'High-end hydraulic components' }, customers: ['SGRE', 'Nordex'], headquarters: { zh: '德国', en: 'Germany' }, tier: { zh: '国际一线', en: 'Global First-Tier' }, techHighlights: [{ zh: '伺服液压', en: 'Servo hydraulics' }], description: { zh: '德国高端液压,2024年数字化液压推进', en: 'German high-end hydraulic, 2024 digital hydraulic push' } },
        { id: 's132', name: { zh: '上海敏泰液压', en: 'Shanghai Mintai Hydraulic' }, contact: { website: 'www.mintaigroup.com' }, rank: 4, marketShare: '~12%', annualShipment: '—', keyParams: { zh: '国产液压系统', en: 'Domestic hydraulic system' }, customers: [{ zh: '运达股份', en: 'Yunda' }, { zh: '华锐风电', en: 'Sinovel' }], headquarters: { zh: '上海', en: 'Shanghai' }, tier: { zh: '国产高端', en: 'China High-End' }, techHighlights: [{ zh: '液压系统集成', en: 'Hydraulic system integration' }], description: { zh: '国产液压集成商,2024年市占率持续提升', en: 'Domestic integrator, gaining share through 2024' } },
      ]
    },
    {
      id: 'hydro-lube',
      name: { zh: '集中润滑&齿轮箱润滑', en: 'Centralized Lubrication & Gearbox Lubrication' },
      type: 'component',
      supplierCount: 4,
      topSupplier: { zh: '林肯/Lincoln', en: 'Lincoln' },
      cr3: '—',
      suppliers: [
        { id: 's133', name: { zh: '林肯 (Lincoln/SKF)', en: 'Lincoln (SKF)' }, contact: { website: 'www.skf.com/lincoln' }, rank: 1, marketShare: '~35%', annualShipment: '—', keyParams: { zh: '自动注脂系统', en: 'Automatic grease injection system' }, customers: [{ zh: '金风', en: 'Goldwind' }, { zh: '远景', en: 'Envision' }, { zh: '明阳', en: 'Mingyang' }], headquarters: { zh: '美国/德国', en: 'USA / Germany' }, tier: { zh: '国际一线', en: 'Global First-Tier' }, techHighlights: [{ zh: '自动注脂', en: 'Automatic grease injection' }, { zh: '智能润滑', en: 'Intelligent lubrication' }], description: { zh: '全球集中润滑龙头,2024年智能润滑增长', en: 'Global leader, 2024 intelligent lubrication growth' } },
        { id: 's134', name: { zh: '贝卡尔特 (Bijur Delimon)', en: 'Bijur Delimon' }, contact: { website: 'www.bijurdelimon.com' }, rank: 2, marketShare: '~20%', annualShipment: '—', keyParams: { zh: '油气润滑+脂润滑', en: 'Oil-air lubrication + grease lubrication' }, customers: ['GE', 'SGRE'], headquarters: { zh: '美国', en: 'USA' }, tier: { zh: '国际一线', en: 'Global First-Tier' }, techHighlights: [{ zh: '油气润滑', en: 'Oil-air lubrication' }], description: { zh: '美国润滑品牌,2024年持续服务国际整机厂', en: '2024 US lubrication brand serving global OEMs' } },
        { id: 's135', name: { zh: '贺德克 (Hydac 过滤)', en: 'Hydac (Filtration)' }, contact: { website: 'www.hydac.com' }, rank: 3, marketShare: '~20%', annualShipment: '—', keyParams: { zh: '齿轮箱过滤+冷却', en: 'Gearbox filtration + cooling' }, customers: [{ zh: '南高齿', en: 'NGC' }, 'ZF', 'Winergy'], headquarters: { zh: '德国', en: 'Germany' }, tier: { zh: '国际一线', en: 'Global First-Tier' }, techHighlights: [{ zh: '齿轮箱过滤系统', en: 'Gearbox filtration system' }], description: { zh: '齿轮箱过滤龙头,2024年大兆瓦齿轮箱需求增长', en: 'Gearbox filtration leader, 2024 growing with larger MW gearboxes' } },
        { id: 's136', name: { zh: '郑州奥特科技', en: 'Zhengzhou Aote Technology' }, contact: { website: 'www.autol.net' }, rank: 4, marketShare: '~10%', annualShipment: '—', keyParams: { zh: '国产集中润滑', en: 'Domestic centralized lubrication' }, customers: [{ zh: '运达', en: 'Yunda' }, { zh: '三一', en: 'Sany' }], headquarters: { zh: '郑州', en: 'Zhengzhou' }, tier: { zh: '国产高端', en: 'China High-End' }, techHighlights: [{ zh: '国产集中润滑', en: 'Domestic centralized lubrication' }], description: { zh: '国产润滑品牌,2024年国产化替代加速', en: '2024 domestic brand, substitution acceleration' } },
      ]
    },
  ]
};
