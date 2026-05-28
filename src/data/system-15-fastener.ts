import type { TreeNode } from '../types';

export const fastenerSystem: TreeNode = {
  id: 'sys-fastener',
  name: { zh: '紧固件系统', en: 'Fastener System' },
  type: 'system',
  children: [
    {
      id: 'fastener-bolt',
      name: { zh: '高强度螺栓(塔筒/叶根/结构)', en: 'High-Strength Bolts (Tower/Root/Structure)' },
      type: 'component',
      supplierCount: 4,
      topSupplier: { zh: '宁波紧固件', en: 'Ningbo Fasteners' },
      cr3: '—',
      suppliers: [
        { id: 's161', name: { zh: '宁波紧固件', en: 'Ningbo Fasteners' }, contact: { website: 'www.fastener.cn' }, rank: 1, marketShare: '~25%', annualShipment: '—', keyParams: { zh: '10.9/12.9级,M30-M64', en: 'Grade 10.9/12.9, M30-M64' }, customers: [{ zh: '天顺', en: 'Titan' }, { zh: '泰胜', en: 'Taisheng' }, { zh: '金风', en: 'Goldwind' }, { zh: '远景', en: 'Envision' }], headquarters: { zh: '宁波', en: 'Ningbo' }, tier: { zh: '国产高端', en: 'China High-End' }, techHighlights: [{ zh: '全系列高强度螺栓', en: 'Full range high-strength bolts' }], description: { zh: '风电紧固件龙头,2024年供货稳定', en: 'Wind power fastener leader, stable 2024 supply' } },
        { id: 's162', name: { zh: '上海高强度螺栓厂', en: 'Shanghai High-Strength Bolt Factory' }, contact: { website: 'www.shsbolts.com' }, rank: 2, marketShare: '~18%', annualShipment: '—', keyParams: { zh: '风电专用', en: 'Wind power dedicated' }, customers: [{ zh: '泰胜', en: 'Taisheng' }, { zh: '天能', en: 'Tianneng' }, { zh: '运达', en: 'Windey' }], headquarters: { zh: '上海', en: 'Shanghai' }, tier: { zh: '国产高端', en: 'China High-End' }, techHighlights: [{ zh: '扭矩法螺栓', en: 'Torque-method bolts' }], description: { zh: '老牌高强度螺栓企业,2024年继续领跑', en: 'Established enterprise, competitive through 2024' } },
        { id: 's163', name: { zh: '晋亿实业', en: 'Jinyi Industry' }, contact: { website: 'www.gem-year.com.cn' }, rank: 3, marketShare: '~15%', annualShipment: '—', keyParams: { zh: '紧固件龙头', en: 'Fastener leader' }, customers: [{ zh: '国内塔筒厂', en: 'Domestic tower manufacturers' }, { zh: '整机厂', en: 'Turbine manufacturers' }], headquarters: { zh: '嘉兴', en: 'Jiaxing' }, tier: { zh: '国产高端', en: 'China High-End' }, techHighlights: [{ zh: '全品类紧固件', en: 'Full-category fasteners' }], description: { zh: '紧固件行业龙头,2024年风电业务扩展', en: 'Fastener leader, 2024 wind power expansion' } },
        { id: 's164', name: { zh: 'Schmidt Kranz (德国)', en: 'Schmidt Kranz (Germany)' }, contact: { website: 'www.schmidt-kranz.de' }, rank: 4, marketShare: '~8%', annualShipment: '—', keyParams: { zh: '进口高端', en: 'High-end imported' }, customers: ['GE', { zh: '维斯塔斯', en: 'Vestas' }], headquarters: { zh: '德国', en: 'Germany' }, tier: { zh: '国际一线', en: 'Global First-Tier' }, techHighlights: [{ zh: '高端风电螺栓', en: 'High-end wind power bolts' }], description: { zh: '德国高端紧固件,2024年进口替代压力加大', en: 'German high-end fasteners, 2024 import substitution pressure' } },
      ]
    },
    {
      id: 'fastener-standard',
      name: { zh: '标准件(垫圈/螺母/销)', en: 'Standard Parts (Washers/Nuts/Pins)' },
      type: 'component',
      supplierCount: 3,
      topSupplier: { zh: '鹏驰/山东高强', en: 'Pengchi / Shandong Gaoqiang' },
      cr3: '—',
      suppliers: [
        { id: 's165', name: { zh: '浙江国检检测', en: 'Zhejiang Guojian Testing' }, contact: { website: 'www.chinazbj.com' }, rank: 1, marketShare: '—', annualShipment: '—', keyParams: { zh: '紧固件检测认证', en: 'Fastener testing and certification' }, customers: [{ zh: '通用', en: 'General' }], headquarters: { zh: '浙江', en: 'Zhejiang' }, tier: '—', techHighlights: [{ zh: '风电紧固件检测', en: 'Wind power fastener testing' }], description: { zh: '紧固件第三方检测,2024年业务扩容', en: 'Third-party testing, 2024 capacity expansion' } },
        { id: 's166', name: { zh: '鹏驰五金', en: 'Pengchi Hardware' }, contact: { website: 'www.pengchiwujin.com' }, rank: 2, marketShare: '—', annualShipment: '—', keyParams: { zh: '高强度标准件', en: 'High-strength standard parts' }, customers: [{ zh: '通用', en: 'General' }], headquarters: { zh: '广东', en: 'Guangdong' }, tier: { zh: '国产高端', en: 'China High-End' }, techHighlights: [{ zh: '全系列标准件', en: 'Full-range standard parts' }], description: { zh: '标准件供应链企业,2024年扩产中', en: 'Supply chain enterprise, 2024 capacity expansion' } },
      ]
    },
  ]
};
