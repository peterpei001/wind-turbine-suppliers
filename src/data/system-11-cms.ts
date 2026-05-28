import type { TreeNode } from '../types';

export const cmsSystem: TreeNode = {
  id: 'sys-cms',
  name: { zh: '状态监测系统', en: 'Condition Monitoring System' },
  type: 'system',
  children: [
    {
      id: 'cms-vibration',
      name: { zh: 'CMS 振动监测', en: 'CMS Vibration Monitoring' },
      type: 'component',
      supplierCount: 5,
      topSupplier: 'SKF',
      cr3: '—',
      suppliers: [
        { id: 's122', name: 'SKF', contact: { website: 'www.skf.com' }, rank: 1, marketShare: '~25%', annualShipment: '—', keyParams: { zh: '轴承+CMS一体化', en: 'Bearing + CMS integration' }, customers: [{ zh: '金风科技', en: 'Goldwind' }, { zh: '远景能源', en: 'Envision Energy' }, 'GE'], headquarters: { zh: '瑞典', en: 'Sweden' }, tier: { zh: '国际一线', en: 'Global First-Tier' }, techHighlights: [{ zh: '轴承+CMS融合', en: 'Bearing + CMS convergence' }], description: { zh: '全球轴承+CMS一体化龙头，覆盖金风/远景/GE等主力整机厂', en: 'Global bearing + CMS integration leader, serving Goldwind/Envision/GE and other major OEMs' } },
        { id: 's123', name: { zh: '英华达 (EnOcean)', en: 'EnOcean' }, contact: { website: 'www.enocean.com' }, rank: 2, marketShare: '~20%', annualShipment: '—', keyParams: { zh: '加速度传感器+分析', en: 'Acceleration sensor + analysis' }, customers: [{ zh: '金风科技', en: 'Goldwind' }, { zh: '远景能源', en: 'Envision Energy' }], headquarters: { zh: '美国', en: 'USA' }, tier: { zh: '国际品牌', en: 'Global Brand' }, techHighlights: [{ zh: '无线传感方案', en: 'Wireless sensing solution' }], description: { zh: '无线传感与能量采集技术先驱，CMS传感器主力供应商', en: 'Global pioneer in wireless sensing and energy harvesting, key CMS sensor supplier' } },
        { id: 's124', name: { zh: '普卢福 (Prüftechnik)', en: 'Prüftechnik' }, contact: { website: 'www.pruftechnik.com' }, rank: 3, marketShare: '~15%', annualShipment: '—', keyParams: { zh: '振动分析', en: 'Vibration analysis' }, customers: ['SGRE', 'Nordex'], headquarters: { zh: '德国', en: 'Germany' }, tier: { zh: '国际一线', en: 'Global First-Tier' }, techHighlights: [{ zh: '精密振动分析', en: 'Precision vibration analysis' }], description: { zh: '德国精密振动分析专家，配套SGRE/Nordex等国际整机厂', en: 'German precision vibration analysis expert, core supplier to SGRE/Nordex' } },
        { id: 's125', name: { zh: '北京天泽智云', en: 'Beijing Tianze Zhiyun' }, contact: { website: 'www.cyber-insight.com' }, rank: 4, marketShare: '~12%', annualShipment: '—', keyParams: { zh: '国产CMS+AI预测', en: 'Domestic CMS + AI prediction' }, customers: [{ zh: '金风科技', en: 'Goldwind' }, { zh: '远景能源', en: 'Envision Energy' }], headquarters: { zh: '北京', en: 'Beijing' }, tier: { zh: '国产高端', en: 'China High-End' }, techHighlights: [{ zh: 'AI故障预测', en: 'AI fault prediction' }], description: { zh: '国产CMS+AI故障预测领先者，AI驱动预测性维护', en: 'Leading domestic CMS + AI fault prediction, AI-driven predictive maintenance' } },
        { id: 's126', name: { zh: '浙江中自机电', en: 'Zhejiang Zhongzi Mechanical & Electrical' }, contact: { website: 'www.chitic.com' }, rank: 5, marketShare: '~10%', annualShipment: '—', keyParams: { zh: '国产振动监测', en: 'Domestic vibration monitoring' }, customers: [{ zh: '运达股份', en: 'Yunda' }], headquarters: { zh: '浙江', en: 'Zhejiang' }, tier: { zh: '国产性价比', en: 'China Cost-Effective' }, techHighlights: [{ zh: '国产CMS方案', en: 'Domestic CMS solution' }], description: { zh: '国产振动监测方案供应商', en: 'Domestic vibration monitoring solution provider' } },
      ]
    },
    {
      id: 'cms-scada',
      name: { zh: 'SCADA 远程监控', en: 'SCADA Remote Monitoring' },
      type: 'component',
      supplierCount: 3,
      topSupplier: { zh: '整机厂自研', en: 'OEM Self-Developed' },
      cr3: '—',
      suppliers: [
        { id: 's127', name: { zh: '整机厂自研 (金风/远景等)', en: 'OEM Self-Developed (Goldwind/Envision etc.)' }, rank: 1, marketShare: '—', annualShipment: '—', keyParams: { zh: '数据采集+远程监控', en: 'Data acquisition + remote monitoring' }, customers: [{ zh: '各整机厂自用', en: 'Used by various OEMs internally' }], headquarters: '—', tier: '—', techHighlights: [{ zh: '定制化SCADA', en: 'Customized SCADA' }], description: { zh: '主要整机厂自研SCADA系统，全量数据采集与远程运维', en: 'Major OEMs self-developed SCADA systems, full data acquisition and remote O&M' } },
        { id: 's128', name: { zh: '格林威治 (Greenwich)', en: 'Greenwich' }, contact: { website: 'greenwich.envisioncn.com' }, rank: 2, marketShare: '—', annualShipment: '—', keyParams: { zh: '第三方SCADA平台', en: 'Third-party SCADA platform' }, customers: [{ zh: '运达', en: 'Yunda' }, { zh: '华锐', en: 'Sinovel' }], headquarters: { zh: '北京', en: 'Beijing' }, tier: { zh: '国产高端', en: 'China High-End' }, techHighlights: [{ zh: '第三方监控平台', en: 'Third-party monitoring platform' }], description: { zh: '第三方SCADA监控平台，服务国内中小整机厂', en: 'Third-party SCADA monitoring platform, serving domestic mid-tier OEMs' } },
      ]
    },
  ]
};
