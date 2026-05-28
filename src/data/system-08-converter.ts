import type { TreeNode } from '../types';

export const converterSystem: TreeNode = {
  id: 'sys-converter',
  name: { zh: '变流系统', en: 'Converter System' },
  type: 'system',
  children: [
    {
      id: 'conv-igbt',
      name: { zh: '功率模块 IGBT', en: 'Power Module IGBT' },
      type: 'component',
      supplierCount: 4,
      topSupplier: { zh: '英飞凌', en: 'Infineon' },
      cr3: '~65%',
      suppliers: [
        { id: 's78', name: { zh: '英飞凌 (Infineon)', en: 'Infineon' }, contact: { website: 'www.infineon.com' }, rank: 1, marketShare: '~30%', annualShipment: '—', keyParams: 'IGBT7,1700V/3600A', customers: [{ zh: '禾望电气', en: 'Hopewind Electric' }, { zh: '阳光电源', en: 'Sungrow Power' }, 'ABB'], headquarters: { zh: '德国', en: 'Germany' }, tier: { zh: '国际一线', en: 'International Tier 1' }, techHighlights: [{ zh: 'IGBT7技术', en: 'IGBT7 Technology' }, { zh: '低损耗', en: 'Low Loss' }], description: { zh: '全球IGBT龙头', en: 'Global IGBT Leader' } },
        { id: 's79', name: 'ABB HiPak', contact: { website: 'www.abb.com' }, rank: 2, marketShare: '~20%', annualShipment: '—', keyParams: { zh: 'IGBT5,压接式模块', en: 'IGBT5, Press-Pack Module' }, customers: [{ zh: 'ABB变流器自用', en: 'ABB Converter In-House Use' }], headquarters: { zh: '瑞士', en: 'Switzerland' }, tier: { zh: '国际一线', en: 'International Tier 1' }, techHighlights: [{ zh: '压接式IGBT', en: 'Press-Pack IGBT' }], description: { zh: 'ABB自研IGBT', en: 'ABB Self-Developed IGBT' } },
        { id: 's80', name: { zh: '中车时代', en: 'CRRC Times Electric' }, contact: { website: 'www.tec.crrczic.cc' }, rank: 3, marketShare: '~15%', annualShipment: { zh: '5万+ 模块', en: '50K+ modules' }, keyParams: { zh: '国产替代,1700V/3600A', en: 'Domestic Substitute, 1700V/3600A' }, customers: [{ zh: '禾望电气', en: 'Hopewind Electric' }, { zh: '金风科技', en: 'Goldwind' }, { zh: '远景能源', en: 'Envision Energy' }], headquarters: { zh: '株洲', en: 'Zhuzhou' }, tier: { zh: '国产高端', en: 'China High-End' }, techHighlights: [{ zh: '国产IGBT突破', en: 'Domestic IGBT Breakthrough' }], description: { zh: '国产IGBT替代主力', en: 'Key Driver of Domestic IGBT Substitution' } },
        { id: 's81', name: { zh: '三菱电机', en: 'Mitsubishi Electric' }, contact: { website: 'www.mitsubishielectric.com' }, rank: 4, marketShare: '~12%', annualShipment: '—', keyParams: { zh: '第7代IGBT', en: '7th Generation IGBT' }, customers: [{ zh: '阳光电源', en: 'Sungrow Power' }], headquarters: { zh: '日本', en: 'Japan' }, tier: { zh: '国际一线', en: 'International Tier 1' }, techHighlights: [{ zh: '第7代IGBT', en: '7th Generation IGBT' }], description: { zh: '日本IGBT品牌', en: 'Japanese IGBT Brand' } },
      ]
    },
    {
      id: 'conv-capacitor',
      name: { zh: '直流母线电容', en: 'DC Bus Capacitor' },
      type: 'component',
      supplierCount: 3,
      topSupplier: { zh: '法拉电子', en: 'Faratronic' },
      cr3: '~55%',
      suppliers: [
        { id: 's82', name: { zh: '法拉电子', en: 'Faratronic' }, contact: { website: 'www.faratronic.com' }, rank: 1, marketShare: '~25%', annualShipment: '—', keyParams: { zh: '薄膜电容,长寿命', en: 'Film Capacitor, Long Life' }, customers: [{ zh: '禾望电气', en: 'Hopewind Electric' }, { zh: '阳光电源', en: 'Sungrow Power' }, { zh: '汇川技术', en: 'Inovance Technology' }], headquarters: { zh: '厦门', en: 'Xiamen' }, tier: { zh: '国产高端', en: 'China High-End' }, techHighlights: [{ zh: '薄膜电容技术', en: 'Film Capacitor Technology' }], description: { zh: '国产薄膜电容龙头', en: 'Leading Domestic Film Capacitor Manufacturer' } },
        { id: 's83', name: 'TDK/EPCOS', contact: { website: 'www.tdk-electronics.tdk.com' }, rank: 2, marketShare: '~18%', annualShipment: '—', keyParams: { zh: '薄膜/电解', en: 'Film/Electrolytic' }, customers: ['ABB', { zh: '西门子', en: 'Siemens' }], headquarters: { zh: '日本/德国', en: 'Japan/Germany' }, tier: { zh: '国际一线', en: 'International Tier 1' }, techHighlights: [{ zh: '全系列电容', en: 'Full Capacitor Series' }], description: { zh: '国际电子元件巨头', en: 'Global Electronic Components Giant' } },
        { id: 's84', name: { zh: '京瓷 AVX', en: 'Kyocera AVX' }, contact: { website: 'www.kyocera-avx.com' }, rank: 3, marketShare: '~12%', annualShipment: '—', keyParams: { zh: '高性能薄膜电容', en: 'High-Performance Film Capacitor' }, customers: [{ zh: '国际变流器厂', en: 'International Converter Manufacturers' }], headquarters: { zh: '日本/美国', en: 'Japan/USA' }, tier: { zh: '国际一线', en: 'International Tier 1' }, techHighlights: [{ zh: '高可靠性电容', en: 'High Reliability Capacitor' }], description: { zh: '国际电容品牌', en: 'International Capacitor Brand' } },
      ]
    },
    {
      id: 'conv-filter',
      name: { zh: 'LCL滤波器/电抗器', en: 'LCL Filter/Reactor' },
      type: 'component',
      supplierCount: 3,
      topSupplier: { zh: '金宏威', en: 'Jinhongwei' },
      cr3: '—',
      suppliers: [
        { id: 's85', name: { zh: '金宏威', en: 'Jinhongwei' }, contact: { website: 'www.jhw.com.cn' }, rank: 1, marketShare: '~20%', annualShipment: '—', keyParams: { zh: '电抗器+滤波器集成', en: 'Reactor + Filter Integration' }, customers: [{ zh: '禾望电气', en: 'Hopewind Electric' }, { zh: '阳光电源', en: 'Sungrow Power' }], headquarters: { zh: '深圳', en: 'Shenzhen' }, tier: { zh: '国产高端', en: 'China High-End' }, techHighlights: [{ zh: '电磁兼容设计', en: 'EMC Design' }], description: { zh: '国产滤波方案供应商', en: 'Domestic Filter Solution Supplier' } },
        { id: 's86', name: { zh: '许继电气', en: 'XJ Electric' }, contact: { website: 'www.xjec.com' }, rank: 2, marketShare: '~15%', annualShipment: '—', keyParams: { zh: '电力系统经验', en: 'Power System Experience' }, customers: [{ zh: '国家电投项目', en: 'SPIC Project' }], headquarters: { zh: '许昌', en: 'Xuchang' }, tier: { zh: '国产高端', en: 'China High-End' }, techHighlights: [{ zh: '大功率滤波', en: 'High-Power Filtering' }], description: { zh: '许继集团旗下', en: 'Subsidiary of XJ Group' } },
        { id: 's87', name: { zh: '西门子', en: 'Siemens' }, contact: { website: 'www.siemens.com' }, rank: 3, marketShare: '~10%', annualShipment: '—', keyParams: { zh: '高端方案', en: 'High-End Solution' }, customers: [{ zh: '西门子变流器', en: 'Siemens Converters' }], headquarters: { zh: '德国', en: 'Germany' }, tier: { zh: '国际一线', en: 'International Tier 1' }, techHighlights: [{ zh: '高端滤波方案', en: 'High-End Filtering Solution' }], description: { zh: '国际电气巨头', en: 'Global Electrical Giant' } },
      ]
    },
    {
      id: 'conv-integrated',
      name: { zh: '整机变流器(集成)', en: 'Integrated Converter' },
      type: 'component',
      supplierCount: 6,
      topSupplier: { zh: '禾望电气', en: 'Hopewind Electric' },
      cr3: '~55%',
      suppliers: [
        { id: 's88', name: { zh: '禾望电气', en: 'Hopewind Electric' }, contact: { website: 'www.hope-wind.com' }, rank: 1, marketShare: '~25%', annualShipment: { zh: '8000+ 台', en: '8000+ units' }, keyParams: { zh: '双馈+全功率', en: 'DFIG + Full Power' }, customers: [{ zh: '金风科技', en: 'Goldwind' }, { zh: '运达股份', en: 'Windey' }, { zh: '中车风电', en: 'CRRC Wind Power' }], headquarters: { zh: '深圳', en: 'Shenzhen' }, tier: { zh: '国产高端', en: 'China High-End' }, techHighlights: [{ zh: '自主IGBT驱动', en: 'Proprietary IGBT Drive' }, { zh: '全功率段覆盖', en: 'Full Power Range Coverage' }, { zh: '2025年可靠性排名第1', en: '#1 in 2025 Reliability Ranking' }], description: { zh: '国产风电变流器龙头,2025年可靠性排名第一', en: 'Leading Domestic Wind Power Converter Manufacturer, #1 in 2025 Reliability Ranking' } },
        { id: 's89', name: { zh: '阳光电源', en: 'Sungrow Power' }, contact: { website: 'www.sungrowpower.com' }, rank: 3, marketShare: '~15%', annualShipment: { zh: '6000+ 台', en: '6000+ units' }, keyParams: { zh: '风电+光伏,大功率', en: 'Wind + Solar, High Power' }, customers: [{ zh: '远景能源', en: 'Envision Energy' }, { zh: '明阳智能', en: 'Mingyang Smart Energy' }], headquarters: { zh: '合肥', en: 'Hefei' }, tier: { zh: '国产高端', en: 'China High-End' }, techHighlights: [{ zh: '大功率变流器', en: 'High-Power Converter' }], description: { zh: '新能源变流巨头,2025年可靠性排名第四', en: 'New Energy Converter Giant, #4 in 2025 Reliability Ranking' } },
        { id: 's90', name: 'ABB', contact: { website: 'www.abb.com' }, rank: 4, marketShare: '~10%', annualShipment: '—', keyParams: { zh: 'ACS880系列', en: 'ACS880 Series' }, customers: ['GE', { zh: '维斯塔斯', en: 'Vestas' }], headquarters: { zh: '瑞士', en: 'Switzerland' }, tier: { zh: '国际一线', en: 'International Tier 1' }, techHighlights: [{ zh: '高端变流平台', en: 'High-End Converter Platform' }], description: { zh: '国际电气巨头,2025年可靠性排名第五', en: 'Global Electrical Giant, #5 in 2025 Reliability Ranking' } },
        { id: 's91', name: { zh: '中车时代电气', en: 'CRRC Times Electric' }, contact: { website: 'www.tec.crrczic.cc' }, rank: 5, marketShare: '~8%', annualShipment: { zh: '3000+ 台', en: '3000+ units' }, keyParams: { zh: '自研+外供', en: 'Self-Developed + External Supply' }, customers: [{ zh: '中车系整机厂', en: 'CRRC Affiliated OEMs' }], headquarters: { zh: '株洲', en: 'Zhuzhou' }, tier: { zh: '国产高端', en: 'China High-End' }, techHighlights: [{ zh: 'IGBT+变流器垂直整合', en: 'IGBT + Converter Vertical Integration' }], description: { zh: '中车旗下电气企业', en: 'CRRC Subsidiary Electrical Enterprise' } },
        { id: 's92', name: { zh: '科诺伟业', en: 'KONWHA' }, contact: { website: 'www.bjkonw.com.cn' }, rank: 6, marketShare: '~6%', annualShipment: { zh: '2000+ 台', en: '2000+ units' }, keyParams: { zh: '中科院背景', en: 'CAS Background' }, customers: [{ zh: '运达股份', en: 'Windey' }, { zh: '华锐风电', en: 'Sinovel' }], headquarters: { zh: '北京', en: 'Beijing' }, tier: { zh: '国产高端', en: 'China High-End' }, techHighlights: [{ zh: '技术驱动型', en: 'Technology-Driven' }], description: { zh: '中科院电工所背景', en: 'CAS Institute of Electrical Engineering Background' } },
        { id: 's93', name: { zh: '金风(天诚同创)', en: 'Goldwind (Tiancheng Tongchuang)' }, contact: { website: 'www.tctc.com' }, rank: 2, marketShare: '~18%', annualShipment: { zh: '5000+ 台', en: '5000+ units' }, keyParams: { zh: '自研变流器', en: 'Self-Developed Converter' }, customers: [{ zh: '金风自用', en: 'Goldwind In-House Use' }], headquarters: { zh: '北京', en: 'Beijing' }, tier: { zh: '国产高端', en: 'China High-End' }, techHighlights: [{ zh: '深度定制变流', en: 'Deeply Customized Converter' }, { zh: '2025年可靠性排名第2', en: '#2 in 2025 Reliability Ranking' }], description: { zh: '金风自研变流器,2025年可靠性排名第二', en: 'Goldwind Self-Developed Converter, #2 in 2025 Reliability Ranking' } },
      ]
    },
  ]
};
