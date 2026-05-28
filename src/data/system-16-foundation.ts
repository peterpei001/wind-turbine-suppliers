import type { TreeNode } from '../types';

export const foundationSystem: TreeNode = {
  id: 'sys-foundation',
  name: { zh: '基础&海上风电', en: 'Foundation & Offshore Wind Power' },
  type: 'system',
  children: [
    {
      id: 'fnd-onahore',
      name: { zh: '陆上基础(锚栓/基础环)', en: 'Onshore Foundation (Anchor Bolts / Foundation Ring)' },
      type: 'component',
      supplierCount: 3,
      topSupplier: { zh: '恒润重工', en: 'Hengrun Heavy Industry' },
      cr3: '—',
      suppliers: [
        { id: 's167', name: { zh: '恒润重工', en: 'Hengrun Heavy Industry' }, contact: { website: 'www.hengrun.com' }, rank: 1, marketShare: '~25%', annualShipment: '—', keyParams: { zh: '锚栓笼+基础环', en: 'Anchor bolt cage + foundation ring' }, customers: [{ zh: '天顺', en: 'Titan' }, { zh: '泰胜', en: 'Taisheng' }], headquarters: { zh: '江阴', en: 'Jiangyin' }, tier: { zh: '国产高端', en: 'China High-End' }, techHighlights: [{ zh: '锚栓笼锻件', en: 'Anchor bolt cage forgings' }], description: { zh: '法兰+锚栓综合供应商,2024年大型化受益', en: 'Integrated supplier, benefiting from 2024 larger turbines' } },
        { id: 's168', name: { zh: '中环海陆', en: 'Zhonghuan Hailu' }, contact: { website: 'www.zhonghuanhailu.com' }, rank: 2, marketShare: '~20%', annualShipment: '—', keyParams: { zh: '基础环锻件', en: 'Foundation ring forgings' }, customers: [{ zh: '塔筒厂', en: 'Tower manufacturers' }], headquarters: { zh: '张家港', en: 'Zhangjiagang' }, tier: { zh: '国产高端', en: 'China High-End' }, techHighlights: [{ zh: '大型环形锻件', en: 'Large ring forgings' }], description: { zh: '环形锻件企业,2024年海上风电需求拉动', en: 'Ring forging company, driven by 2024 offshore demand' } },
      ]
    },
    {
      id: 'fnd-offshore',
      name: { zh: '海上基础(单桩/导管架/浮式)', en: 'Offshore Foundation (Monopile/Jacket/Floating)' },
      type: 'component',
      supplierCount: 4,
      topSupplier: { zh: '大金重工/海力风电', en: 'Dajin Heavy Industry / Haili Wind Power' },
      cr3: '—',
      suppliers: [
        { id: 's169', name: { zh: '大金重工', en: 'Dajin Heavy Industry' }, contact: { website: 'www.dajin.cn' }, rank: 1, marketShare: '—', annualShipment: '—', keyParams: { zh: '海上单桩,直径6-10m', en: 'Offshore monopile, diameter 6-10m' }, customers: [{ zh: '明阳', en: 'Mingyang' }, { zh: '海装', en: 'Haizhuang' }], headquarters: { zh: '辽宁/山东', en: 'Liaoning/Shandong' }, tier: { zh: '国产高端', en: 'China High-End' }, techHighlights: [{ zh: '超大直径单桩', en: 'Ultra-large diameter monopile' }], description: { zh: '海上基础龙头,2024年海外订单增长', en: 'Offshore leader, 2024 overseas order growth' } },
        { id: 's170', name: { zh: '海力风电', en: 'Haili Wind Power' }, contact: { website: 'www.jshlfd.com' }, rank: 2, marketShare: '—', annualShipment: '—', keyParams: { zh: '海上基础专业户', en: 'Offshore foundation specialist' }, customers: [{ zh: '远景', en: 'Envision' }, { zh: '金风', en: 'Goldwind' }], headquarters: { zh: '江苏', en: 'Jiangsu' }, tier: { zh: '国产高端', en: 'China High-End' }, techHighlights: [{ zh: '海上风电基础', en: 'Offshore wind foundation' }], description: { zh: '江苏海上基础龙头,2024年产能持续扩张', en: 'Jiangsu offshore foundation leader, 2024 capacity expansion' } },
        { id: 's171', name: { zh: '泰胜风能', en: 'Taisheng Wind Energy' }, contact: { website: 'www.taishengwind.com' }, rank: 3, marketShare: '—', annualShipment: '—', keyParams: { zh: '海上基础+导管架', en: 'Offshore foundation + jacket' }, customers: [{ zh: '金风', en: 'Goldwind' }, { zh: '远景', en: 'Envision' }], headquarters: { zh: '上海/江苏', en: 'Shanghai/Jiangsu' }, tier: { zh: '国产高端', en: 'China High-End' }, techHighlights: [{ zh: '导管架基础', en: 'Jacket foundation' }], description: { zh: '海上基础+导管架结构件,2024年浮式布局', en: 'Jacket + offshore foundation supplier, 2024 floating wind push' } },
        { id: 's172', name: { zh: 'Principle Power (浮式)', en: 'Principle Power (Floating)' }, contact: { website: 'www.principlepower.com' }, rank: 4, marketShare: '—', annualShipment: '—', keyParams: { zh: '半潜式浮式基础', en: 'Semi-submersible floating foundation' }, customers: [{ zh: '国际海上项目', en: 'International offshore projects' }], headquarters: { zh: '法国/葡萄牙', en: 'France/Portugal' }, tier: { zh: '国际品牌', en: 'International Brand' }, techHighlights: [{ zh: '浮式风电基础', en: 'Floating wind foundation' }], description: { zh: '浮式风电先驱,2024-2025年商业化加速', en: 'Floating wind pioneer, 2024-2025 commercialization push' } },
      ]
    },
    {
      id: 'fnd-subsea-cable',
      name: { zh: '海缆(阵列/送出缆)', en: 'Subsea Cables (Array/Export)' },
      type: 'component',
      supplierCount: 4,
      topSupplier: { zh: '东方电缆', en: 'Orient Cable' },
      cr3: '~75%',
      suppliers: [
        { id: 's173', name: { zh: '东方电缆', en: 'Orient Cable' }, contact: { website: 'www.orientcable.com' }, rank: 1, marketShare: '~30%', annualShipment: '—', keyParams: { zh: '高压海缆,220kV+', en: 'High-voltage subsea cable, 220kV+' }, customers: [{ zh: '海上风电项目', en: 'Offshore wind power projects' }], headquarters: { zh: '宁波', en: 'Ningbo' }, tier: { zh: '国产高端', en: 'China High-End' }, techHighlights: [{ zh: '500kV海缆', en: '500kV subsea cable' }], description: { zh: '海缆龙头,2024年500kV海缆批量交付', en: 'Subsea cable leader, 2024 500kV mass delivery' } },
        { id: 's174', name: { zh: '中天科技', en: 'ZTT' }, contact: { website: 'www.ztt.cn' }, rank: 2, marketShare: '~25%', annualShipment: '—', keyParams: { zh: '海缆+附件', en: 'Subsea cables + accessories' }, customers: [{ zh: '海上风电项目', en: 'Offshore wind power projects' }], headquarters: { zh: '南通', en: 'Nantong' }, tier: { zh: '国产高端', en: 'China High-End' }, techHighlights: [{ zh: '海缆全系列', en: 'Full-range subsea cables' }], description: { zh: '光电缆综合龙头,2024年海缆业务大增', en: 'Cable leader, 2024 subsea business surge' } },
        { id: 's175', name: { zh: '亨通光电', en: 'Hengtong Optic-Electric' }, contact: { website: 'www.htgd.com.cn' }, rank: 3, marketShare: '~20%', annualShipment: '—', keyParams: { zh: '超高压海缆', en: 'Ultra-high voltage subsea cable' }, customers: [{ zh: '海上风电项目', en: 'Offshore wind power projects' }], headquarters: { zh: '苏州', en: 'Suzhou' }, tier: { zh: '国产高端', en: 'China High-End' }, techHighlights: [{ zh: '500kV超高压', en: '500kV ultra-high voltage' }], description: { zh: '光电海缆综合,2024年亚太布局加速', en: 'Optical-electrical cable, 2024 Asia-Pacific expansion' } },
        { id: 's176', name: { zh: '汉缆股份', en: 'Hanhe Cable' }, contact: { website: 'www.hanhe-cable.com' }, rank: 4, marketShare: '~10%', annualShipment: '—', keyParams: { zh: '海缆+陆缆', en: 'Subsea + land cables' }, customers: [{ zh: '海上项目', en: 'Offshore projects' }], headquarters: { zh: '青岛', en: 'Qingdao' }, tier: { zh: '国产高端', en: 'China High-End' }, techHighlights: [{ zh: '海缆附件', en: 'Subsea cable accessories' }], description: { zh: '青岛线缆企业,2024年海缆市场份额提升', en: 'Qingdao cable, 2024 subsea market share increase' } },
      ]
    },
    {
      id: 'fnd-corrosion',
      name: { zh: '防腐/除盐雾', en: 'Anti-Corrosion / Salt Fog Removal' },
      type: 'component',
      supplierCount: 3,
      topSupplier: { zh: '海虹老人(Hempel)', en: 'Hempel' },
      cr3: '—',
      suppliers: [
        { id: 's177', name: { zh: '海虹老人 (Hempel)', en: 'Hempel' }, contact: { website: 'www.hempel.com' }, rank: 1, marketShare: '—', annualShipment: '—', keyParams: { zh: '风电防腐涂料', en: 'Wind power anti-corrosion coatings' }, customers: [{ zh: '全球海上风电', en: 'Global offshore wind power' }], headquarters: { zh: '丹麦', en: 'Denmark' }, tier: { zh: '国际一线', en: 'Global First-Tier' }, techHighlights: [{ zh: '海上风电防腐', en: 'Offshore wind anti-corrosion' }], description: { zh: '国际防腐涂料品牌,2024年海上风电防腐标准提升', en: 'International brand, 2024 offshore coating standards tightened' } },
        { id: 's178', name: { zh: '佐敦 (Jotun)', en: 'Jotun' }, contact: { website: 'www.jotun.com' }, rank: 2, marketShare: '—', annualShipment: '—', keyParams: { zh: '防腐涂层', en: 'Anti-corrosion coating' }, customers: [{ zh: '全球海上风电', en: 'Global offshore wind power' }], headquarters: { zh: '挪威', en: 'Norway' }, tier: { zh: '国际一线', en: 'Global First-Tier' }, techHighlights: [{ zh: '高性能涂料', en: 'High-performance coatings' }], description: { zh: '挪威涂料品牌,2024年高性能涂层方案受青睐', en: 'Norwegian brand, high-performance coatings in demand 2024' } },
        { id: 's179', name: { zh: '北京天诚防腐', en: 'Beijing Tiancheng Anti-Corrosion' }, rank: 3, marketShare: '—', annualShipment: '—', keyParams: { zh: '国产风电防腐', en: 'Domestic wind power anti-corrosion' }, customers: [{ zh: '海上项目', en: 'Offshore projects' }], headquarters: { zh: '北京', en: 'Beijing' }, tier: { zh: '国产高端', en: 'China High-End' }, techHighlights: [{ zh: '国产防腐方案', en: 'Domestic anti-corrosion solutions' }], description: { zh: '国产风电防腐服务,2024年国产替代提速', en: 'Domestic service, 2024 substitution speeding up' } },
      ]
    },
  ]
};
