import type { TreeNode } from '../types';

export const electricalSystem: TreeNode = {
  id: 'sys-electrical',
  name: { zh: '电气系统', en: 'Electrical System' },
  type: 'system',
  children: [
    {
      id: 'elec-slipring',
      name: { zh: '滑环(机舱→轮毂)', en: 'Slip Ring (Nacelle to Hub)' },
      type: 'component',
      supplierCount: 5,
      topSupplier: { zh: '施莱格尔', en: 'Schlegel' },
      cr3: '~65%',
      suppliers: [
        { id: 's94', name: { zh: '施莱格尔 (Schlegel)', en: 'Schlegel' }, contact: { website: 'www.schlegel.com' }, rank: 1, marketShare: '~30%', annualShipment: '—', keyParams: { zh: '电+信号+光纤', en: 'Power + Signal + Fiber Optic' }, customers: ['GE', 'SGRE', 'Nordex'], headquarters: { zh: '德国', en: 'Germany' }, tier: { zh: '国际一线', en: 'Global First-Tier' }, techHighlights: [{ zh: '光纤滑环技术', en: 'Fiber Optic Slip Ring Technology' }], description: { zh: '风电滑环全球龙头，适配10MW+大功率机型', en: 'Global leader in wind turbine slip rings, supporting 10MW+ turbines' } },
        { id: 's95', name: { zh: '摩根先进材料', en: 'Morgan Advanced Materials' }, contact: { website: 'www.morganadvancedmaterials.com' }, rank: 2, marketShare: '~20%', annualShipment: '—', keyParams: { zh: '碳刷/滑环系统', en: 'Carbon Brush / Slip Ring System' }, customers: [{ zh: '维斯塔斯', en: 'Vestas' }, { zh: '金风科技', en: 'Goldwind' }], headquarters: { zh: '英国', en: 'UK' }, tier: { zh: '国际一线', en: 'Global First-Tier' }, techHighlights: [{ zh: '导电滑环技术', en: 'Conductive Slip Ring Technology' }], description: { zh: '英国先进材料与导电滑环，持续供货国际一线整机厂', en: 'UK advanced materials and conductive slip rings, supplying global Tier-1 OEMs' } },
        { id: 's96', name: { zh: '杭州全盛', en: 'Hangzhou Quansheng' }, contact: { website: 'www.hzqs.com' }, rank: 3, marketShare: '~12%', annualShipment: '—', keyParams: { zh: '国产滑环龙头', en: 'Leading domestic slip ring manufacturer' }, customers: [{ zh: '金风科技', en: 'Goldwind' }, { zh: '远景能源', en: 'Envision Energy' }, { zh: '运达股份', en: 'Yunda' }], headquarters: { zh: '杭州', en: 'Hangzhou' }, tier: { zh: '国产高端', en: 'China High-End' }, techHighlights: [{ zh: '国产大电流滑环', en: 'Domestic high-current slip ring' }], description: { zh: '国产滑环龙头，批量配套国内主流整机厂', en: 'Leading domestic slip ring manufacturer, mass-supplying major Chinese OEMs' } },
        { id: 's97', name: { zh: '科赛尔 (Kayser)', en: 'Kayser' }, rank: 4, marketShare: '~15%', annualShipment: '—', keyParams: { zh: '模块化滑环', en: 'Modular slip ring' }, customers: [{ zh: '国际整机厂', en: 'Global OEMs' }], headquarters: { zh: '德国', en: 'Germany' }, tier: { zh: '国际一线', en: 'Global First-Tier' }, techHighlights: [{ zh: '模块化设计', en: 'Modular design' }], description: { zh: '德国滑环品牌，模块化方案服务欧洲整机厂', en: 'German slip ring brand, modular solutions for European OEMs' } },
        { id: 's98', name: { zh: '深圳奔联技术', en: 'Shenzhen Benlian Technology' }, contact: { website: 'www.pan-link.cn' }, rank: 5, marketShare: '~8%', annualShipment: '—', keyParams: { zh: '国产替代', en: 'Domestic substitution' }, customers: [{ zh: '运达股份', en: 'Yunda' }, { zh: '三一重能', en: 'Sany Renewable Energy' }], headquarters: { zh: '深圳', en: 'Shenzhen' }, tier: { zh: '国产性价比', en: 'China Cost-Effective' }, techHighlights: [{ zh: '国产替代方案', en: 'Domestic substitution solution' }], description: { zh: '国产滑环新锐，聚焦高性价比替代方案', en: 'Rising domestic slip ring player, focused on cost-effective alternatives' } },
      ]
    },
    {
      id: 'elec-transformer',
      name: { zh: '机舱变压器', en: 'Nacelle Transformer' },
      type: 'component',
      supplierCount: 4,
      topSupplier: { zh: '特变电工', en: 'TBEA' },
      cr3: '~50%',
      suppliers: [
        { id: 's99', name: { zh: '特变电工', en: 'TBEA' }, contact: { website: 'www.tbea.com' }, rank: 1, marketShare: '~25%', annualShipment: '5000+ 台', keyParams: { zh: '干式变压器,机舱安装', en: 'Dry-type transformer, nacelle installation' }, customers: [{ zh: '金风科技', en: 'Goldwind' }, { zh: '远景能源', en: 'Envision Energy' }, { zh: '明阳智能', en: 'Mingyang Smart Energy' }], headquarters: { zh: '昌吉', en: 'Changji' }, tier: { zh: '国产高端', en: 'China High-End' }, techHighlights: [{ zh: '干式变压器技术', en: 'Dry-type transformer technology' }], description: { zh: '国内变压器龙头，干式机舱变压器主力供应商', en: 'Leading domestic transformer manufacturer, main nacelle transformer supplier' } },
        { id: 's100', name: { zh: '华鹏变压器', en: 'Huapeng Transformer' }, contact: { website: 'www.hua-peng.com' }, rank: 2, marketShare: '~15%', annualShipment: '3000+ 台', keyParams: { zh: '干式/油浸', en: 'Dry-type / Oil-immersed' }, customers: [{ zh: '运达股份', en: 'Yunda' }], headquarters: { zh: '江苏', en: 'Jiangsu' }, tier: { zh: '国产高端', en: 'China High-End' }, techHighlights: [{ zh: '风电专用变压器', en: 'Wind turbine dedicated transformer' }], description: { zh: '风电变压器专业厂，干式/油浸方案覆盖', en: 'Specialized wind transformer manufacturer, dry-type and oil-immersed solutions' } },
        { id: 's101', name: { zh: '西门子能源', en: 'Siemens Energy' }, contact: { website: 'www.siemens-energy.com' }, rank: 3, marketShare: '~12%', annualShipment: '—', keyParams: { zh: '高端变压器', en: 'High-end transformer' }, customers: ['SGRE'], headquarters: { zh: '德国', en: 'Germany' }, tier: { zh: '国际一线', en: 'Global First-Tier' }, techHighlights: [{ zh: '高效变压器', en: 'High-efficiency transformer' }], description: { zh: '国际电气巨头，高端风电变压器全球供应商', en: 'Global electrical giant, high-end wind transformer global supplier' } },
        { id: 's102', name: { zh: '海鸿电气', en: 'Haihong Electric' }, contact: { website: 'www.gdhaihong.com' }, rank: 4, marketShare: '~10%', annualShipment: '—', keyParams: { zh: '立体卷铁心变压器', en: '3D wound-core transformer' }, customers: [{ zh: '明阳智能', en: 'Mingyang Smart Energy' }], headquarters: { zh: '广东', en: 'Guangdong' }, tier: { zh: '国产高端', en: 'China High-End' }, techHighlights: [{ zh: '立体卷铁心', en: '3D wound core' }], description: { zh: '立体卷铁心变压器创新企业，服务海上风电', en: '3D wound-core transformer innovator, serving offshore wind' } },
      ]
    },
    {
      id: 'elec-cable',
      name: { zh: '电缆系统(扭缆/动力)', en: 'Cable System (Twist / Power)' },
      type: 'component',
      supplierCount: 5,
      topSupplier: { zh: '中天科技', en: 'ZTT' },
      cr3: '~47%',
      suppliers: [
        { id: 's103', name: { zh: '中天科技', en: 'ZTT (Zhongtian Technology)' }, contact: { website: 'www.ztt.cn' }, rank: 1, marketShare: '~20%', annualShipment: '8000+ km', keyParams: { zh: '海缆+陆缆+扭缆', en: 'Submarine + Land + Twist cables' }, customers: [{ zh: '金风科技', en: 'Goldwind' }, { zh: '远景能源', en: 'Envision Energy' }, { zh: '国电', en: 'Guodian' }], headquarters: { zh: '南通', en: 'Nantong' }, tier: { zh: '国产高端', en: 'China High-End' }, techHighlights: [{ zh: '海缆+扭缆全系列', en: 'Full series of submarine and twist cables' }], description: { zh: '线缆行业龙头，海缆+扭缆+66kV系统全系列覆盖', en: 'Leading cable enterprise, full coverage of submarine + twist + 66kV systems' } },
        { id: 's104', name: { zh: '远东电缆', en: 'Far East Cable' }, contact: { website: 'www.fegroup.com.cn' }, rank: 2, marketShare: '~15%', annualShipment: '6000+ km', keyParams: { zh: '陆缆为主', en: 'Primarily land cables' }, customers: [{ zh: '运达股份', en: 'Yunda' }, { zh: '华锐风电', en: 'Sinovel' }], headquarters: { zh: '宜兴', en: 'Yixing' }, tier: { zh: '国产高端', en: 'China High-End' }, techHighlights: [{ zh: '全系列电缆', en: 'Full series cables' }], description: { zh: '国内线缆龙头，风电陆缆主力供应商', en: 'Leading domestic cable manufacturer, main onshore cable supplier for wind' } },
        { id: 's105', name: { zh: '东方电缆', en: 'Orient Cable (NBO)' }, contact: { website: 'www.orientcable.com' }, rank: 3, marketShare: '~12%', annualShipment: '4000+ km', keyParams: { zh: '海缆优势,66kV', en: 'Submarine cable advantage, 66kV' }, customers: [{ zh: '明阳智能', en: 'Mingyang Smart Energy' }, { zh: '中国海装', en: 'CSSC Haizhuang' }], headquarters: { zh: '宁波', en: 'Ningbo' }, tier: { zh: '国产高端', en: 'China High-End' }, techHighlights: [{ zh: '高压海缆', en: 'High-voltage submarine cable' }], description: { zh: '海缆领军企业，66kV阵列缆及送出缆批量交付', en: 'Submarine cable leader, mass-delivering 66kV array and export cables' } },
        { id: 's106', name: { zh: '亨通光电', en: 'Hengtong Optic-Electric' }, contact: { website: 'www.htgd.com.cn' }, rank: 4, marketShare: '~10%', annualShipment: '5000+ km', keyParams: { zh: '海缆+系统方案', en: 'Submarine cable + system solutions' }, customers: [{ zh: '国电', en: 'Guodian' }, { zh: '远景能源', en: 'Envision Energy' }], headquarters: { zh: '苏州', en: 'Suzhou' }, tier: { zh: '国产高端', en: 'China High-End' }, techHighlights: [{ zh: '光电复合缆', en: 'Composite optical-electrical cable' }], description: { zh: '光电复合缆综合企业，风电海缆+陆缆全覆盖', en: 'Integrated optical-electrical cable enterprise, full wind cable coverage' } },
        { id: 's107', name: { zh: '太阳电缆', en: 'Sun Cable' }, contact: { website: 'www.sun-cable.com' }, rank: 5, marketShare: '~8%', annualShipment: '3000+ km', keyParams: { zh: '机舱专用电缆', en: 'Nacelle-specific cable' }, customers: [{ zh: '金风科技', en: 'Goldwind' }], headquarters: { zh: '福建', en: 'Fujian' }, tier: { zh: '国产高端', en: 'China High-End' }, techHighlights: [{ zh: '风电专用电缆', en: 'Wind turbine dedicated cable' }], description: { zh: '福建线缆企业，风电专用电缆供应商', en: 'Fujian cable manufacturer, wind-specific cable supplier' } },
      ]
    },
    {
      id: 'elec-hvac',
      name: { zh: '除湿/加热/环控', en: 'Dehumidification / Heating / HVAC' },
      type: 'component',
      supplierCount: 3,
      topSupplier: { zh: '蒙特(Munters)', en: 'Munters' },
      cr3: '—',
      suppliers: [
        { id: 's108', name: { zh: '蒙特 (Munters)', en: 'Munters' }, contact: { website: 'www.munters.com' }, rank: 1, marketShare: '~30%', annualShipment: '—', keyParams: { zh: '转轮除湿,防凝露', en: 'Rotary dehumidification, anti-condensation' }, customers: ['GE', { zh: '维斯塔斯', en: 'Vestas' }], headquarters: { zh: '瑞典', en: 'Sweden' }, tier: { zh: '国际一线', en: 'Global First-Tier' }, techHighlights: [{ zh: '转轮除湿技术', en: 'Rotary dehumidification technology' }], description: { zh: '转轮除湿国际品牌，机舱防凝露关键供应商', en: 'International rotary dehumidification brand, key nacelle anti-condensation supplier' } },
        { id: 's109', name: { zh: '森井电气', en: 'Sen Electric' }, contact: { website: 'www.cn-sen.com' }, rank: 2, marketShare: '~20%', annualShipment: '—', keyParams: { zh: '国产除湿', en: 'Domestic dehumidification' }, customers: [{ zh: '金风科技', en: 'Goldwind' }, { zh: '远景能源', en: 'Envision Energy' }], headquarters: { zh: '浙江', en: 'Zhejiang' }, tier: { zh: '国产高端', en: 'China High-End' }, techHighlights: [{ zh: '国产替代方案', en: 'Domestic substitution solution' }], description: { zh: '国产机舱除湿龙头，国产替代持续推进', en: 'Domestic nacelle dehumidification leader, advancing localization' } },
        { id: 's110', name: { zh: '苏州安瑞可', en: 'Suzhou Anruike' }, contact: { website: 'www.a-rack.com' }, rank: 3, marketShare: '~15%', annualShipment: '—', keyParams: { zh: '机舱环控系统', en: 'Nacelle HVAC system' }, customers: [{ zh: '运达股份', en: 'Yunda' }, { zh: '明阳智能', en: 'Mingyang Smart Energy' }], headquarters: { zh: '苏州', en: 'Suzhou' }, tier: { zh: '国产高端', en: 'China High-End' }, techHighlights: [{ zh: '机舱整体环控', en: 'Integrated nacelle HVAC' }], description: { zh: '机舱整体环控专业供应商', en: 'Specialized integrated nacelle environmental control supplier' } },
      ]
    },
    {
      id: 'elec-fire',
      name: { zh: '消防系统', en: 'Fire Protection System' },
      type: 'component',
      supplierCount: 2,
      topSupplier: { zh: '阿科普斯', en: 'Akropolis' },
      cr3: '—',
      suppliers: [
        { id: 's111', name: { zh: '阿科普斯 (Akropolis)', en: 'Akropolis' }, contact: { website: 'www.akropolis.de' }, rank: 1, marketShare: '~30%', annualShipment: '—', keyParams: { zh: '机舱自动灭火', en: 'Nacelle automatic fire suppression' }, customers: [{ zh: '金风科技', en: 'Goldwind' }, { zh: '远景能源', en: 'Envision Energy' }, { zh: '维斯塔斯', en: 'Vestas' }], headquarters: { zh: '丹麦', en: 'Denmark' }, tier: { zh: '国际一线', en: 'Global First-Tier' }, techHighlights: [{ zh: '机舱灭火系统', en: 'Nacelle fire suppression system' }], description: { zh: '风机消防全球品牌，机舱自动灭火方案龙头', en: 'Global wind turbine fire protection brand, nacelle automatic fire suppression leader' } },
        { id: 's112', name: { zh: '宁波环峰消防', en: 'Ningbo Huanfeng Fire Protection' }, contact: { website: 'www.ningbohf.com' }, rank: 2, marketShare: '~20%', annualShipment: '—', keyParams: { zh: '气溶胶灭火', en: 'Aerosol fire suppression' }, customers: [{ zh: '运达股份', en: 'Yunda' }, { zh: '明阳智能', en: 'Mingyang Smart Energy' }], headquarters: { zh: '宁波', en: 'Ningbo' }, tier: { zh: '国产高端', en: 'China High-End' }, techHighlights: [{ zh: '气溶胶灭火', en: 'Aerosol fire suppression' }], description: { zh: '国产风机消防方案，气溶胶灭火技术核心供应商', en: 'Domestic wind turbine fire protection solution, core aerosol suppression supplier' } },
      ]
    },
  ]
};
