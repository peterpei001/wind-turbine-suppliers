import type { TreeNode } from '../types';

export const bladeSystem: TreeNode = {
  id: 'sys-blade',
  name: { zh: '叶片系统', en: 'Blade System' },
  type: 'system',
  children: [
    {
      id: 'blade-body',
      name: { zh: '叶片本体', en: 'Blade Body' },
      type: 'component',
      supplierCount: 6,
      topSupplier: { zh: '中材科技', en: 'Sinomat' },
      cr3: '~58%',
      suppliers: [
        { id: 's1', name: { zh: '中材科技', en: 'Sinomat' }, rank: 1, marketShare: '~30%', annualShipment: { zh: '2024年24GW', en: '2024 24GW' }, keyParams: { zh: '玻纤/碳纤主梁,最长120m+', en: 'Fiberglass/Carbon fiber spar cap, up to 120m+' }, customers: [{ zh: '金风科技', en: 'Goldwind' }, { zh: '远景能源', en: 'Envision Energy' }, { zh: '明阳智能', en: 'Mingyang Smart Energy' }, { zh: '运达股份', en: 'Windey' }], headquarters: { zh: '北京/甘肃', en: 'Beijing/Gansu' }, tier: { zh: '国产高端', en: 'China High-end' }, techHighlights: [{ zh: '碳纤主梁工艺', en: 'Carbon fiber spar cap process' }, { zh: '超百米叶片', en: 'Blades exceeding 100m' }, { zh: '16MW漂浮式122米叶片', en: '16MW floating 122m blade' }], description: { zh: '全球风电叶片龙头,连续13年市占率第一,2024年叶片营收125.95亿元,销量24GW,布局巴西/乌兹别克斯坦海外基地', en: 'Global blade leader #1 for 13 consecutive years, 2024 blade revenue ¥12.6B, 24GW sales, overseas bases in Brazil/Uzbekistan' }, contact: { website: 'www.sinomat.com', person: { zh: '张经理', en: 'Manager Zhang' }, phone: '0931-xxxxxxx', email: 'info@sinomat.com' }, established: { zh: '2001年', en: '2001' }, employees: '5000+', mainProducts: [{ zh: '风电叶片', en: 'Wind turbine blades' }, { zh: '复合材料制品', en: 'Composite material products' }, { zh: '玻璃纤维制品', en: 'Fiberglass products' }] },
        { id: 's2', name: { zh: '时代新材', en: 'Times New Material (TMT)' }, rank: 2, marketShare: '~24%', annualShipment: { zh: '2024年营收102.69亿元', en: '2024 revenue ¥10.3B' }, keyParams: { zh: '玻纤/碳纤,最长110m', en: 'Fiberglass/Carbon fiber, up to 110m' }, customers: [{ zh: '远景能源', en: 'Envision Energy' }, { zh: '三一重能', en: 'Sany Renewable Energy' }, { zh: '中车风电', en: 'CRRC Wind Power' }], headquarters: { zh: '株洲', en: 'Zhuzhou' }, tier: { zh: '国产高端', en: 'China High-end' }, techHighlights: [{ zh: '碳纤拉挤主梁', en: 'Carbon fiber pultruded spar cap' }, { zh: '可回收叶片TMT82', en: 'Recyclable blade TMT82' }, { zh: '聚氨酯树脂规模化', en: 'Large-scale polyurethane resin' }], description: { zh: '国内风电叶片第二,2025年叶片营收首破百亿达102.69亿元,国内市占率约24%,布局越南/塞尔维亚海外基地', en: '#2 in China wind blades, first time exceeding ¥10B revenue, ~24% domestic share, expanding to Vietnam/Serbia' }, contact: { website: 'www.trp.com.cn' } },
        { id: 's3', name: { zh: '中复连众', en: 'Zhongfu Lianzhong' }, rank: 3, marketShare: '~15%', annualShipment: { zh: '1800+ 支', en: '1800+ units' }, keyParams: { zh: '玻纤为主,最长100m', en: 'Primarily fiberglass, up to 100m' }, customers: [{ zh: '金风科技', en: 'Goldwind' }, { zh: '国电联合', en: 'Guodian United Power' }], headquarters: { zh: '连云港', en: 'Lianyungang' }, tier: { zh: '国产高端', en: 'China High-end' }, techHighlights: [{ zh: '玻纤叶片成本优势', en: 'Cost advantage in fiberglass blades' }], description: { zh: '2023年被中材科技收购,现为中材叶片全资子公司,玻纤叶片性价比突出', en: 'Acquired by Sinomat in 2023, now a wholly-owned subsidiary under Sinomat Blade, cost-effective fiberglass blades' }, contact: { website: 'www.lzfrp.com' } },
        { id: 's4', name: { zh: '艾朗科技', en: 'Ailang Technology' }, rank: 4, marketShare: '~8%', annualShipment: { zh: '800+ 支', en: '800+ units' }, keyParams: { zh: '民企,性价比路线', en: 'Private enterprise, cost-effective strategy' }, customers: [{ zh: '运达股份', en: 'Windey' }, { zh: '三一重能', en: 'Sany Renewable Energy' }], headquarters: { zh: '无锡', en: 'Wuxi' }, tier: { zh: '国产性价比', en: 'China Cost-effective' }, techHighlights: [{ zh: '快速交付', en: 'Fast delivery' }, { zh: '灵活定制', en: 'Flexible customization' }], description: { zh: '民营叶片企业，以快速响应和性价比取胜', en: 'Private blade manufacturer known for fast response and cost-effectiveness' }, contact: { website: 'www.ailangtech.com' } },
        { id: 's5', name: 'LM Wind Power', rank: 5, marketShare: '~10%', annualShipment: '—', keyParams: { zh: '全球龙头,最长108m', en: 'Global leader, up to 108m' }, customers: ['GE', 'SGRE'], headquarters: { zh: '丹麦/全球', en: 'Denmark/Global' }, tier: { zh: '国际一线', en: 'International Top-tier' }, techHighlights: [{ zh: '全球叶片技术领先', en: 'Global technology leadership in blades' }, { zh: '自动铺层工艺', en: 'Automated layup process' }], description: { zh: 'GE旗下全球叶片龙头，技术储备深厚', en: 'GE-owned global blade leader with deep technology portfolio' }, contact: { website: 'www.lmwindpower.com' } },
        { id: 's6', name: { zh: '西门子歌美飒叶片', en: 'Siemens Gamesa Blades' }, rank: 6, marketShare: '~8%', annualShipment: '—', keyParams: { zh: '自用为主', en: 'Primarily in-house use' }, customers: ['Siemens Gamesa'], headquarters: { zh: '丹麦/西班牙', en: 'Denmark/Spain' }, tier: { zh: '国际一线', en: 'International Top-tier' }, techHighlights: [{ zh: '叶片-整机一体化设计', en: 'Integrated blade-turbine design' }], description: { zh: 'SGRE自研自产叶片', en: 'SGRE self-developed and manufactured blades' }, contact: { website: 'www.siemensgamesa.com' } },
      ]
    },
    {
      id: 'blade-ancillary',
      name: { zh: '叶片辅材', en: 'Blade Ancillary Materials' },
      type: 'component',
      supplierCount: 4,
      topSupplier: '—',
      cr3: '—',
      suppliers: [
        { id: 's7', name: { zh: '叶片防雷系统 (多家)', en: 'Blade Lightning Protection System (Multiple Suppliers)' }, rank: 1, marketShare: '—', annualShipment: '—', keyParams: { zh: '雷电流通流容量(kA)', en: 'Lightning current capacity (kA)' }, customers: [{ zh: '各叶片厂', en: 'Various Blade Manufacturers' }], headquarters: '—', tier: '—', techHighlights: [{ zh: '叶片接闪器', en: 'Blade receptor' }, { zh: '雷电流引下线', en: 'Lightning down conductor' }], description: { zh: '防雷系统通常随叶片配套供应', en: 'Lightning protection system typically supplied with blades' } },
        { id: 's8', name: { zh: '前缘保护膜 (多家)', en: 'Leading Edge Protection Film (Multiple Suppliers)' }, rank: 2, marketShare: '—', annualShipment: '—', keyParams: { zh: '材料(聚氨酯/橡胶)', en: 'Material (Polyurethane/Rubber)' }, customers: [{ zh: '各叶片厂', en: 'Various Blade Manufacturers' }], headquarters: '—', tier: '—', techHighlights: [{ zh: '耐雨蚀', en: 'Rain erosion resistance' }, { zh: '可修复涂层', en: 'Repairable coating' }], description: { zh: '前缘腐蚀保护材料', en: 'Leading edge erosion protection material' } },
      ]
    },
  ]
};
