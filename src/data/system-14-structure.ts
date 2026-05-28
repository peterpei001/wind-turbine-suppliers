import type { TreeNode } from '../types';

export const structureSystem: TreeNode = {
  id: 'sys-structure',
  name: { zh: '机舱&塔筒结构', en: 'Nacelle & Tower Structure' },
  type: 'system',
  children: [
    {
      id: 'struct-nacelle-cast',
      name: { zh: '机舱座铸件', en: 'Nacelle Base Casting' },
      type: 'component',
      supplierCount: 3,
      topSupplier: { zh: '吉鑫科技', en: 'Jixin Technology' },
      cr3: '~58%',
      suppliers: [
        { id: 's144', name: { zh: '吉鑫科技', en: 'Jixin Technology' }, contact: { website: 'www.jixintech.com' }, rank: 1, marketShare: '~25%', annualShipment: '8000+t', keyParams: { zh: '大型球墨铸铁,20t+', en: 'Large ductile iron, 20t+' }, customers: [{ zh: '金风', en: 'Goldwind' }, { zh: '明阳', en: 'Mingyang' }, { zh: '远景', en: 'Envision' }], headquarters: { zh: '江苏', en: 'Jiangsu' }, tier: { zh: '国产高端', en: 'China High-End' }, techHighlights: [{ zh: '大吨位球铁铸造', en: 'Large-tonnage ductile iron casting' }], description: { zh: '风电铸件龙头，大吨位球铁机舱座批量交付', en: 'Wind power casting leader, mass-delivering large ductile iron nacelle bases' } },
        { id: 's145', name: { zh: '日月重工', en: 'Riyue Heavy Industry' }, contact: { website: 'www.riyuehi.com' }, rank: 2, marketShare: '~18%', annualShipment: '6000+t', keyParams: { zh: '大型铸件龙头', en: 'Large casting leader' }, customers: [{ zh: '远景', en: 'Envision' }, { zh: '运达', en: 'Windey' }], headquarters: { zh: '宁波', en: 'Ningbo' }, tier: { zh: '国产高端', en: 'China High-End' }, techHighlights: [{ zh: '精密铸造', en: 'Precision casting' }], description: { zh: '大型铸件龙头，覆盖机舱座/轮毂/主轴铸件', en: 'Large casting leader, covering nacelle bases/hubs/main shaft castings' } },
        { id: 's146', name: { zh: '永冠能源', en: 'Yongguan Energy' }, contact: { website: 'www.ychome.com.tw' }, rank: 3, marketShare: '~15%', annualShipment: '—', keyParams: { zh: '国际认证铸件', en: 'Internationally certified castings' }, customers: [{ zh: '西门子', en: 'Siemens' }, 'GE'], headquarters: { zh: '台湾/江苏', en: 'Taiwan/Jiangsu' }, tier: { zh: '国产高端', en: 'China High-End' }, techHighlights: [{ zh: '出口级铸件', en: 'Export-grade castings' }], description: { zh: '台资铸件企业，通过国际认证，出口西门子/GE', en: 'Taiwan-invested casting company, internationally certified, exporting to Siemens/GE' } },
      ]
    },
    {
      id: 'struct-nacelle-cover',
      name: { zh: '机舱罩/导流罩', en: 'Nacelle Cover / Spinner' },
      type: 'component',
      supplierCount: 4,
      topSupplier: { zh: '中材科技', en: 'Sinoma Science & Technology' },
      cr3: '~55%',
      suppliers: [
        { id: 's147', name: { zh: '中材科技', en: 'Sinoma Science & Technology' }, contact: { website: 'www.sinoma.com.cn' }, rank: 1, marketShare: '~25%', annualShipment: '—', keyParams: { zh: '复合材料,大型机舱罩', en: 'Composite materials, large nacelle covers' }, customers: [{ zh: '金风', en: 'Goldwind' }, { zh: '远景', en: 'Envision' }], headquarters: { zh: '北京/甘肃', en: 'Beijing/Gansu' }, tier: { zh: '国产高端', en: 'China High-End' }, techHighlights: [{ zh: '大型复合材料', en: 'Large composite materials' }], description: { zh: '复合材料龙头，大型机舱罩/导流罩批量供应', en: 'Composite materials leader, mass-supplying large nacelle covers/spinners' } },
        { id: 's148', name: { zh: '时代新材', en: 'Times New Material' }, contact: { website: 'www.trp.com.cn' }, rank: 2, marketShare: '~18%', annualShipment: '—', keyParams: { zh: '复合材料机舱罩', en: 'Composite nacelle covers' }, customers: [{ zh: '远景', en: 'Envision' }, { zh: '中车', en: 'CRRC' }], headquarters: { zh: '株洲', en: 'Zhuzhou' }, tier: { zh: '国产高端', en: 'China High-End' }, techHighlights: [{ zh: 'SMC模压工艺', en: 'SMC molding process' }], description: { zh: '中车旗下复合材料企业，SMC模压工艺领先', en: 'CRRC composite materials subsidiary, leading SMC molding process' } },
        { id: 's149', name: { zh: '双瑞风电', en: 'Shuangrui Wind Power' }, contact: { website: 'www.shuangrui.com' }, rank: 3, marketShare: '~12%', annualShipment: '—', keyParams: { zh: '船舶复合材料', en: 'Marine composite materials' }, customers: [{ zh: '金风', en: 'Goldwind' }, { zh: '明阳', en: 'Mingyang' }], headquarters: { zh: '洛阳', en: 'Luoyang' }, tier: { zh: '国产高端', en: 'China High-End' }, techHighlights: [{ zh: '船用复材技术', en: 'Marine composite technology' }], description: { zh: '船舶背景复合材料企业，海上风电复材优势', en: 'Marine-background composite company, offshore wind composite advantage' } },
        { id: 's150', name: { zh: '恒石基业', en: 'Hengshi Foundation' }, contact: { website: 'www.hengshigroup.com' }, rank: 4, marketShare: '~10%', annualShipment: '—', keyParams: { zh: '机舱罩+轮毂罩', en: 'Nacelle cover + hub cover' }, customers: [{ zh: '运达', en: 'Windey' }, { zh: '海装', en: 'Haizhuang' }], headquarters: { zh: '浙江', en: 'Zhejiang' }, tier: { zh: '国产性价比', en: 'China Cost-Effective' }, techHighlights: [{ zh: '成本优势', en: 'Cost advantage' }], description: { zh: '民营复合材料企业，性价比路线配套中小整机厂', en: 'Private composite materials company, cost-effective solutions for mid-tier OEMs' } },
      ]
    },
    {
      id: 'struct-tower',
      name: { zh: '塔筒本体', en: 'Tower Body' },
      type: 'component',
      supplierCount: 4,
      topSupplier: { zh: '天顺风能', en: 'Titan Wind Energy' },
      cr3: '~47%',
      suppliers: [
        { id: 's151', name: { zh: '天顺风能', en: 'Titan Wind Energy' }, contact: { website: 'www.titanwind.com' }, rank: 1, marketShare: '~20%', annualShipment: { zh: '3000+ 段', en: '3000+ segments' }, keyParams: { zh: '高100m+,板厚30-50mm', en: 'Height 100m+, plate thickness 30-50mm' }, customers: [{ zh: '金风', en: 'Goldwind' }, { zh: '远景', en: 'Envision' }, { zh: '明阳', en: 'Mingyang' }], headquarters: { zh: '苏州/包头', en: 'Suzhou/Baotou' }, tier: { zh: '国产高端', en: 'China High-End' }, techHighlights: [{ zh: '大直径塔筒', en: 'Large-diameter towers' }, { zh: '海外布局', en: 'Overseas presence' }], description: { zh: '国内塔筒龙头，全球产能布局，海上+陆上双驱动', en: 'Domestic tower leader, global capacity layout, onshore + offshore dual-driven' } },
        { id: 's152', name: { zh: '泰胜风能', en: 'Taisheng Wind Energy' }, contact: { website: 'www.taishengwind.com' }, rank: 2, marketShare: '~15%', annualShipment: { zh: '2000+ 段', en: '2000+ segments' }, keyParams: { zh: '陆上+海上塔筒', en: 'Onshore + offshore towers' }, customers: [{ zh: '金风', en: 'Goldwind' }, { zh: '远景', en: 'Envision' }], headquarters: { zh: '上海/江苏', en: 'Shanghai/Jiangsu' }, tier: { zh: '国产高端', en: 'China High-End' }, techHighlights: [{ zh: '海上塔筒能力', en: 'Offshore tower capability' }], description: { zh: '陆海双栖塔筒企业，金风/远景核心塔筒供应商', en: 'Land-sea dual-capability tower company, core tower supplier to Goldwind/Envision' } },
        { id: 's153', name: { zh: '大金重工', en: 'Dajin Heavy Industry' }, contact: { website: 'www.dajin.cn' }, rank: 3, marketShare: '~12%', annualShipment: { zh: '1500+ 段', en: '1500+ segments' }, keyParams: { zh: '海上塔筒优势', en: 'Offshore tower advantage' }, customers: [{ zh: '明阳', en: 'Mingyang' }, { zh: '海装', en: 'Haizhuang' }], headquarters: { zh: '辽宁/山东', en: 'Liaoning/Shandong' }, tier: { zh: '国产高端', en: 'China High-End' }, techHighlights: [{ zh: '海上大直径塔筒', en: 'Large-diameter offshore towers' }], description: { zh: '海上塔筒领先企业，大直径海上塔筒批量出口', en: 'Leading offshore tower company, batch-exporting large-diameter offshore towers' } },
        { id: 's154', name: { zh: '天能重工', en: 'Tianneng Heavy Industry' }, contact: { website: 'www.tntzgg.com' }, rank: 4, marketShare: '~10%', annualShipment: { zh: '1200+ 段', en: '1200+ segments' }, keyParams: { zh: '陆上塔筒为主', en: 'Mainly onshore towers' }, customers: [{ zh: '运达', en: 'Windey' }, { zh: '华锐', en: 'Sinovel' }], headquarters: { zh: '山东', en: 'Shandong' }, tier: { zh: '国产高端', en: 'China High-End' }, techHighlights: [{ zh: '陆上塔筒成本优势', en: 'Onshore tower cost advantage' }], description: { zh: '陆上塔筒主力供应商，成本优势显著', en: 'Main onshore tower supplier, significant cost advantage' } },
      ]
    },
    {
      id: 'struct-flange',
      name: { zh: '塔筒法兰', en: 'Tower Flange' },
      type: 'component',
      supplierCount: 3,
      topSupplier: { zh: '恒润重工', en: 'Hengrun Heavy Industry' },
      cr3: '~60%',
      suppliers: [
        { id: 's155', name: { zh: '恒润重工', en: 'Hengrun Heavy Industry' }, contact: { website: 'www.hengrun.com' }, rank: 1, marketShare: '~25%', annualShipment: '—', keyParams: { zh: '锻造法兰,直径4-8m', en: 'Forged flanges, diameter 4-8m' }, customers: [{ zh: '天顺', en: 'Titan' }, { zh: '泰胜', en: 'Taisheng' }, { zh: '大金', en: 'Dajin' }], headquarters: { zh: '江阴', en: 'Jiangyin' }, tier: { zh: '国产高端', en: 'China High-End' }, techHighlights: [{ zh: '大直径锻造法兰', en: 'Large-diameter forged flanges' }], description: { zh: '风电法兰龙头，大直径锻造法兰配套国内主要塔筒厂', en: 'Wind power flange leader, large-diameter forged flanges for major domestic tower manufacturers' } },
        { id: 's156', name: { zh: '中环海陆', en: 'Zhonghuan Hailu' }, contact: { website: 'www.zhonghuanhailu.com' }, rank: 2, marketShare: '~20%', annualShipment: '—', keyParams: { zh: '环形锻件,大直径', en: 'Ring forgings, large diameter' }, customers: [{ zh: '国内塔筒厂', en: 'Domestic tower manufacturers' }], headquarters: { zh: '张家港', en: 'Zhangjiagang' }, tier: { zh: '国产高端', en: 'China High-End' }, techHighlights: [{ zh: '超大直径环锻', en: 'Ultra-large diameter ring forging' }], description: { zh: '环形锻件专业企业，超大直径海上法兰优势', en: 'Ring forging specialist, ultra-large diameter offshore flange advantage' } },
        { id: 's157', name: { zh: '伊莱特', en: 'Yilaite' }, contact: { website: 'www.ylt.com' }, rank: 3, marketShare: '~15%', annualShipment: '—', keyParams: { zh: '重工法兰', en: 'Heavy industry flanges' }, customers: [{ zh: '大金重工', en: 'Dajin Heavy Industry' }, { zh: '泰胜', en: 'Taisheng' }], headquarters: { zh: '山东', en: 'Shandong' }, tier: { zh: '国产高端', en: 'China High-End' }, techHighlights: [{ zh: '核电+风电法兰', en: 'Nuclear + wind power flanges' }], description: { zh: '核电+风电双轨法兰企业', en: 'Nuclear + wind dual-track flange company' } },
      ]
    },
    {
      id: 'struct-ancillary',
      name: { zh: '助爬器/升降机/逃生', en: 'Climbing Aid / Lift / Escape' },
      type: 'component',
      supplierCount: 3,
      topSupplier: { zh: '中际联合(3S)', en: '3S Lift' },
      cr3: '—',
      suppliers: [
        { id: 's158', name: { zh: '中际联合 (3S Lift)', en: '3S Lift' }, contact: { website: 'www.3slift.com' }, rank: 1, marketShare: '~50%', annualShipment: { zh: '10000+ 台', en: '10000+ units' }, keyParams: { zh: '助爬器+免爬器+升降机', en: 'Climbing aid + climb-free device + lift' }, customers: [{ zh: '金风', en: 'Goldwind' }, { zh: '远景', en: 'Envision' }, { zh: '明阳', en: 'Mingyang' }, { zh: '运达', en: 'Windey' }], headquarters: { zh: '北京', en: 'Beijing' }, tier: { zh: '国产高端', en: 'China High-End' }, techHighlights: [{ zh: '塔筒升降全系列', en: 'Full tower lift product range' }], description: { zh: '全球塔筒升降设备龙头，市占率极高，免爬器+升降机全系列', en: 'Global tower lift equipment leader, extremely high market share, full climbing aid + lift range' } },
        { id: 's159', name: { zh: 'Avanti (芬兰)', en: 'Avanti (Finland)' }, contact: { website: 'www.avantiwind.com' }, rank: 2, marketShare: '~15%', annualShipment: '—', keyParams: { zh: '高端塔筒升降机', en: 'High-end tower lifts' }, customers: ['GE', { zh: '维斯塔斯', en: 'Vestas' }], headquarters: { zh: '芬兰', en: 'Finland' }, tier: { zh: '国际品牌', en: 'International Brand' }, techHighlights: [{ zh: '高端升降机', en: 'High-end lifts' }], description: { zh: '芬兰塔筒升降品牌，高端产品配套GE/维斯塔斯', en: 'Finnish tower lift brand, high-end products for GE/Vestas' } },
        { id: 's160', name: { zh: '赛福斯 (SAFES)', en: 'SAFES' }, contact: { website: 'www.safes.nl' }, rank: 3, marketShare: '~10%', annualShipment: '—', keyParams: { zh: '塔筒升降设备', en: 'Tower lift equipment' }, customers: [{ zh: '明阳', en: 'Mingyang' }, { zh: '海装', en: 'Haizhuang' }], headquarters: { zh: '青岛', en: 'Qingdao' }, tier: { zh: '国产高端', en: 'China High-End' }, techHighlights: [{ zh: '国产升降设备', en: 'Domestic lift equipment' }], description: { zh: '国产塔筒升降设备，配套明阳/海装', en: 'Domestic tower lift equipment, supplying Mingyang/Haizhuang' } },
      ]
    },
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
        { id: 's164', name: { zh: 'Schmidt Kranz (德国)', en: 'Schmidt Kranz (Germany)' }, contact: { website: 'www.schmidt-kranz.de' }, rank: 4, marketShare: '~8%', annualShipment: '—', keyParams: { zh: '进口高端', en: 'High-end imported' }, customers: ['GE', { zh: '维斯塔斯', en: 'Vestas' }], headquarters: { zh: '德国', en: 'Germany' }, tier: { zh: '国际一线', en: 'Global First-Tier' }, techHighlights: [{ zh: '高端风电螺栓', en: 'High-end wind power fasteners' }], description: { zh: '德国高端紧固件,2024年进口替代压力加大', en: 'German high-end fasteners, 2024 import substitution pressure' } },
      ]
    },
    {
      id: 'fastener-standard',
      name: { zh: '标准件(垫圈/螺母/销)', en: 'Standard Parts (Washers/Nuts/Pins)' },
      type: 'component',
      supplierCount: 2,
      topSupplier: { zh: '鹏驰/山东高强', en: 'Pengchi / Shandong Gaoqiang' },
      cr3: '—',
      suppliers: [
        { id: 's165', name: { zh: '浙江国检检测', en: 'Zhejiang Guojian Testing' }, contact: { website: 'www.chinazbj.com' }, rank: 1, marketShare: '—', annualShipment: '—', keyParams: { zh: '紧固件检测认证', en: 'Fastener testing and certification' }, customers: [{ zh: '通用', en: 'General' }], headquarters: { zh: '浙江', en: 'Zhejiang' }, tier: '—', techHighlights: [{ zh: '风电紧固件检测', en: 'Wind power fastener testing' }], description: { zh: '紧固件第三方检测,2024年业务扩容', en: 'Third-party testing, 2024 capacity expansion' } },
        { id: 's166', name: { zh: '鹏驰五金', en: 'Pengchi Hardware' }, contact: { website: 'www.pengchiwujin.com' }, rank: 2, marketShare: '—', annualShipment: '—', keyParams: { zh: '高强度标准件', en: 'High-strength standard parts' }, customers: [{ zh: '通用', en: 'General' }], headquarters: { zh: '广东', en: 'Guangdong' }, tier: { zh: '国产高端', en: 'China High-End' }, techHighlights: [{ zh: '全系列标准件', en: 'Full-range standard parts' }], description: { zh: '标准件供应链企业,2024年扩产中', en: 'Supply chain enterprise, 2024 capacity expansion' } },
      ]
    },
  ]
};
