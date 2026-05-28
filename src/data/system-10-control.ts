import type { TreeNode } from '../types';

export const controlSystem: TreeNode = {
  id: 'sys-control',
  name: { zh: '控制系统', en: 'Control System' },
  type: 'system',
  children: [
    {
      id: 'ctrl-plc',
      name: { zh: '主控 PLC', en: 'Main Controller PLC' },
      type: 'component',
      supplierCount: 4,
      topSupplier: { zh: '倍福(Beckhoff)', en: 'Beckhoff' },
      cr3: '~75%',
      suppliers: [
        { id: 's113', name: { zh: '倍福 (Beckhoff)', en: 'Beckhoff' }, contact: { website: 'www.beckhoff.com' }, rank: 1, marketShare: '~40%', annualShipment: { zh: '20000+ 套', en: '20000+ units' }, keyParams: 'TwinCAT,EtherCAT', customers: [{ zh: '金风科技', en: 'Goldwind' }, { zh: '远景能源', en: 'Envision Energy' }, { zh: '明阳智能', en: 'Mingyang Smart Energy' }, { zh: '运达股份', en: 'Yunda' }], headquarters: { zh: '德国', en: 'Germany' }, tier: { zh: '国际一线', en: 'Global First-Tier' }, techHighlights: [{ zh: 'TwinCAT软件平台', en: 'TwinCAT software platform' }, { zh: 'EtherCAT总线', en: 'EtherCAT bus' }, { zh: '2025年可靠性排名第1', en: '#1 in 2025 Reliability Ranking' }], description: { zh: '全球风电主控PLC最主流品牌,2025年可靠性排名第一', en: 'The most mainstream brand of wind turbine main controller PLC globally, #1 in 2025 Reliability Ranking' } },
        { id: 's114', name: { zh: '巴赫曼 (Bachmann)', en: 'Bachmann' }, contact: { website: 'www.bachmann.info' }, rank: 2, marketShare: '~20%', annualShipment: '—', keyParams: { zh: '冗余PLC,安全系统', en: 'Redundant PLC, safety system' }, customers: ['SGRE', 'Nordex', 'GE'], headquarters: { zh: '奥地利', en: 'Austria' }, tier: { zh: '国际一线', en: 'Global First-Tier' }, techHighlights: [{ zh: '冗余架构', en: 'Redundant architecture' }, { zh: '功能安全', en: 'Functional safety' }, { zh: '2025年可靠性排名第2', en: '#2 in 2025 Reliability Ranking' }], description: { zh: '奥地利高端自动化,2025年可靠性排名第二', en: 'Austrian high-end automation, #2 in 2025 Reliability Ranking' } },
        { id: 's115', name: 'Mita-Teknik', contact: { website: 'www.mita-teknik.com' }, rank: 3, marketShare: '~15%', annualShipment: '—', keyParams: { zh: '风电专用控制器', en: 'Wind turbine dedicated controller' }, customers: [{ zh: '维斯塔斯', en: 'Vestas' }, 'GE'], headquarters: { zh: '丹麦', en: 'Denmark' }, tier: { zh: '国际品牌', en: 'Global Brand' }, techHighlights: [{ zh: '风电深度定制', en: 'Deep wind turbine customization' }], description: { zh: '丹麦风电控制专家', en: 'Danish wind turbine control expert' } },
        { id: 's116', name: { zh: '汇川技术', en: 'Inovance Technology' }, rank: 4, marketShare: '~8%', annualShipment: { zh: '4000+ 套', en: '4000+ units' }, keyParams: { zh: 'AC800系列', en: 'AC800 Series' }, customers: [{ zh: '运达股份', en: 'Yunda' }, { zh: '三一重能', en: 'Sany Renewable Energy' }], headquarters: { zh: '深圳', en: 'Shenzhen' }, tier: { zh: '国产高端', en: 'China High-End' }, techHighlights: [{ zh: '国产PLC替代', en: 'Domestic PLC substitution' }], description: { zh: '国产PLC替代先锋', en: 'Pioneer of domestic PLC substitution' } },
      ]
    },
    {
      id: 'ctrl-sensor',
      name: { zh: '传感器系统', en: 'Sensor System' },
      type: 'component',
      supplierCount: 5,
      topSupplier: { zh: 'Lufft/海德汉', en: 'Lufft / Heidenhain' },
      cr3: '—',
      suppliers: [
        { id: 's117', name: { zh: 'Lufft (风速仪)', en: 'Lufft (Anemometer)' }, contact: { website: 'www.lufft.com' }, rank: 1, marketShare: '~35%', annualShipment: '—', keyParams: { zh: '超声波,免维护', en: 'Ultrasonic, maintenance-free' }, customers: [{ zh: '金风', en: 'Goldwind' }, { zh: '远景', en: 'Envision' }, { zh: '维斯塔斯', en: 'Vestas' }], headquarters: { zh: '德国', en: 'Germany' }, tier: { zh: '国际一线', en: 'Global First-Tier' }, techHighlights: [{ zh: '超声波传感', en: 'Ultrasonic sensing' }], description: { zh: '德国气象传感器', en: 'German meteorological sensor manufacturer' } },
        { id: 's118', name: { zh: '海德汉 (编码器)', en: 'Heidenhain (Encoder)' }, contact: { website: 'www.heidenhain.de' }, rank: 2, marketShare: '~35%', annualShipment: '—', keyParams: { zh: '高精度旋转编码器', en: 'High-precision rotary encoder' }, customers: [{ zh: '通用', en: 'General/multiple OEMs' }], headquarters: { zh: '德国', en: 'Germany' }, tier: { zh: '国际一线', en: 'Global First-Tier' }, techHighlights: [{ zh: '光电编码器', en: 'Optical encoder' }], description: { zh: '全球编码器龙头', en: 'Global encoder leader' } },
        { id: 's119', name: 'Gill Instruments', contact: { website: 'www.gillinstruments.com' }, rank: 3, marketShare: '~20%', annualShipment: '—', keyParams: { zh: '超声波/机械式', en: 'Ultrasonic / Mechanical' }, customers: ['GE', 'SGRE'], headquarters: { zh: '英国', en: 'UK' }, tier: { zh: '国际一线', en: 'Global First-Tier' }, techHighlights: [{ zh: '二维/三维风速仪', en: '2D/3D anemometer' }], description: { zh: '英国气象传感器', en: 'UK meteorological sensor manufacturer' } },
        { id: 's120', name: { zh: '堡盟 (Baumer)', en: 'Baumer' }, contact: { website: 'www.baumer.com' }, rank: 4, marketShare: '~20%', annualShipment: '—', keyParams: { zh: '绝对值编码器', en: 'Absolute encoder' }, customers: [{ zh: '通用', en: 'General/multiple OEMs' }], headquarters: { zh: '瑞士', en: 'Switzerland' }, tier: { zh: '国际一线', en: 'Global First-Tier' }, techHighlights: [{ zh: '绝对值编码器', en: 'Absolute encoder' }], description: { zh: '瑞士传感品牌', en: 'Swiss sensor brand' } },
        { id: 's121', name: { zh: '华控兴业', en: 'Huakong Xingye' }, contact: { website: 'www.hkxybj.com' }, rank: 5, marketShare: '~10%', annualShipment: '—', keyParams: { zh: '国产替代', en: 'Domestic substitution' }, customers: [{ zh: '运达', en: 'Yunda' }, { zh: '三一', en: 'Sany' }], headquarters: { zh: '北京', en: 'Beijing' }, tier: { zh: '国产性价比', en: 'China Cost-Effective' }, techHighlights: [{ zh: '国产仪表替代', en: 'Domestic instrument substitution' }], description: { zh: '国产仪器仪表', en: 'Domestic instrumentation manufacturer' } },
      ]
    },
  ]
};
