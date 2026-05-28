import type { TreeNode } from '../types';

export const generatorSystem: TreeNode = {
  id: 'sys-generator',
  name: { zh: '发电机系统', en: 'Generator System' },
  type: 'system',
  children: [
    {
      id: 'gen-body',
      name: { zh: '发电机本体', en: 'Generator Body' },
      type: 'component',
      supplierCount: 6,
      topSupplier: { zh: '永济电机', en: 'Yongji Electric' },
      cr3: '~52%',
      suppliers: [
        { id: 's54', name: { zh: '永济电机', en: 'Yongji Electric' }, rank: 1, marketShare: '~25%', annualShipment: { zh: '4000+ 台', en: '4000+ units' }, keyParams: { zh: '双馈+永磁,全功率', en: 'DFIG + PM, Full Power' }, customers: [{ zh: '金风科技', en: 'Goldwind' }, { zh: '远景能源', en: 'Envision Energy' }, { zh: '运达股份', en: 'Windey' }], headquarters: { zh: '永济', en: 'Yongji' }, tier: { zh: '国产高端', en: 'China High-End' }, techHighlights: [{ zh: '双馈/永磁全覆盖', en: 'Full DFIG/PMSG Coverage' }, { zh: '高功率密度', en: 'High Power Density' }], description: { zh: '国内风电发电机龙头,2025年可靠性排名第一', en: 'Leading Domestic Wind Generator Manufacturer, #1 in 2025 Reliability Ranking' }, contact: { website: 'www.crrcgc.cc/yjdj' } },
        { id: 's55', name: 'ABB', rank: 5, marketShare: '~10%', annualShipment: '—', keyParams: { zh: '高端永磁/双馈', en: 'High-End PM/DFIG' }, customers: ['GE', { zh: '维斯塔斯', en: 'Vestas' }], headquarters: { zh: '瑞士/全球', en: 'Switzerland/Global' }, tier: { zh: '国际一线', en: 'International Tier 1' }, techHighlights: [{ zh: '高效发电机技术', en: 'High-Efficiency Generator Technology' }], description: { zh: '国际电气巨头,2025年可靠性排名第五', en: 'Global Electrical Giant, #5 in 2025 Reliability Ranking' }, contact: { website: 'www.abb.com' } },
        { id: 's56', name: { zh: '中车株洲电机', en: 'CRRC Zhuzhou Electric' }, rank: 3, marketShare: '~12%', annualShipment: { zh: '2000+ 台', en: '2000+ units' }, keyParams: { zh: '双馈为主', en: 'Primarily DFIG' }, customers: [{ zh: '中车系整机厂', en: 'CRRC Affiliated OEMs' }], headquarters: { zh: '株洲', en: 'Zhuzhou' }, tier: { zh: '国产高端', en: 'China High-End' }, techHighlights: [{ zh: '大功率双馈电机', en: 'High-Power DFIG Motor' }], description: { zh: '中车旗下电机企业,2025年可靠性排名第三', en: 'CRRC Subsidiary Motor Manufacturer, #3 in 2025 Reliability Ranking' }, contact: { website: 'www.crrcgc.cc' } },
        { id: 's57', name: { zh: '西门子', en: 'Siemens' }, rank: 4, marketShare: '~10%', annualShipment: '—', keyParams: { zh: '高端发电机', en: 'High-End Generator' }, customers: ['SGRE'], headquarters: { zh: '德国', en: 'Germany' }, tier: { zh: '国际一线', en: 'International Tier 1' }, techHighlights: [{ zh: '高效发电技术', en: 'High-Efficiency Power Generation Technology' }], description: { zh: '国际电气巨头,2025年可靠性排名第四', en: 'Global Electrical Giant, #4 in 2025 Reliability Ranking' }, contact: { website: 'www.siemens.com' } },
        { id: 's58', name: { zh: '兰电电机', en: 'Lanzhou Electric Machinery' }, rank: 6, marketShare: '~8%', annualShipment: { zh: '1200+ 台', en: '1200+ units' }, keyParams: { zh: '兰电品牌', en: 'Landian Brand' }, customers: [{ zh: '运达股份', en: 'Windey' }, { zh: '华锐风电', en: 'Sinovel' }], headquarters: { zh: '兰州', en: 'Lanzhou' }, tier: { zh: '国产高端', en: 'China High-End' }, techHighlights: [{ zh: '高可靠性设计', en: 'High Reliability Design' }], description: { zh: '老牌国有电机厂', en: 'Established State-Owned Motor Factory' }, contact: { website: 'www.lec.cn' } },
        { id: 's59', name: { zh: '湘电股份', en: 'XEMC (Xiangtan Electric)' }, rank: 2, marketShare: '~15%', annualShipment: { zh: '2500+ 台', en: '2500+ units' }, keyParams: { zh: '永磁电机领先', en: 'Leading in PM Motors' }, customers: [{ zh: '湘电风能', en: 'XEMC Wind Power' }, { zh: '哈电', en: 'Harbin Electric' }], headquarters: { zh: '湘潭', en: 'Xiangtan' }, tier: { zh: '国产高端', en: 'China High-End' }, techHighlights: [{ zh: '永磁直驱电机', en: 'PM Direct Drive Motor' }, { zh: '2025年可靠性排名第2', en: '#2 in 2025 Reliability Ranking' }], description: { zh: '永磁电机技术领先,2025年可靠性排名第二', en: 'Leading PM Motor Technology, #2 in 2025 Reliability Ranking' }, contact: { website: 'www.xemc.com.cn' } },
      ]
    },
    {
      id: 'gen-slipring',
      name: { zh: '集电环/碳刷', en: 'Slip Ring / Carbon Brush' },
      type: 'component',
      supplierCount: 4,
      topSupplier: '摩根',
      cr3: '~65%',
      suppliers: [
        { id: 's60', name: { zh: '摩根先进材料 (Morgan)', en: 'Morgan Advanced Materials' }, rank: 1, marketShare: '~30%', annualShipment: '—', keyParams: { zh: '碳刷+滑环,高端', en: 'Carbon Brush + Slip Ring, High-End' }, customers: [{ zh: '通用', en: 'GE (General Electric)' }], headquarters: { zh: '英国', en: 'United Kingdom' }, tier: { zh: '国际一线', en: 'International Tier 1' }, techHighlights: [{ zh: '碳刷材料技术', en: 'Carbon Brush Material Technology' }], description: { zh: '全球碳刷/滑环技术领先', en: 'Global Leader in Carbon Brush/Slip Ring Technology' }, contact: { website: 'www.morganadvancedmaterials.com' } },
        { id: 's61', name: { zh: '施莱格尔 (Schlegel)', en: 'Schlegel' }, rank: 2, marketShare: '~20%', annualShipment: '—', keyParams: { zh: '风电专用滑环', en: 'Wind Power Specialized Slip Ring' }, customers: ['GE', 'SGRE'], headquarters: { zh: '德国', en: 'Germany' }, tier: { zh: '国际一线', en: 'International Tier 1' }, techHighlights: [{ zh: '风电专用滑环', en: 'Wind Power Slip Ring' }], description: { zh: '德国滑环品牌', en: 'German Slip Ring Brand' }, contact: { website: 'www.schleifring.com' } },
        { id: 's62', name: { zh: '崇德 (Schunk)', en: 'Schunk' }, rank: 3, marketShare: '~15%', annualShipment: '—', keyParams: { zh: '碳刷/刷架系统', en: 'Carbon Brush/Brush Holder System' }, customers: [{ zh: '西门子', en: 'Siemens' }, { zh: '维斯塔斯', en: 'Vestas' }], headquarters: { zh: '德国', en: 'Germany' }, tier: { zh: '国际一线', en: 'International Tier 1' }, techHighlights: [{ zh: '碳刷架系统', en: 'Carbon Brush Holder System' }], description: { zh: '德国碳刷品牌', en: 'German Carbon Brush Brand' }, contact: { website: 'www.schunk-group.com' } },
        { id: 's63', name: { zh: '上海摩根碳制品', en: 'Shanghai Morgan Carbon Products' }, rank: 4, marketShare: '~12%', annualShipment: '—', keyParams: { zh: '国产替代', en: 'Domestic Substitute' }, customers: [{ zh: '永济电机', en: 'Yongji Electric' }, { zh: '兰电电机', en: 'Lanzhou Electric Machinery' }], headquarters: { zh: '上海', en: 'Shanghai' }, tier: { zh: '国产高端', en: 'China High-End' }, techHighlights: [{ zh: '国产碳刷方案', en: 'Domestic Carbon Brush Solution' }], description: { zh: '摩根在华合资企业', en: 'Morgan Joint Venture in China' }, contact: { website: 'www.morgansealsandbearings.com.cn' } },
      ]
    },
  ]
};
