import type { TreeNode } from '../types';

export const hubSystem: TreeNode = {
  id: 'sys-hub',
  name: { zh: '轮毂', en: 'Hub' },
  type: 'system',
  children: [
    {
      id: 'hub-body',
      name: { zh: '轮毂铸件', en: 'Hub Casting' },
      type: 'component',
      supplierCount: 3,
      topSupplier: { zh: '吉鑫科技', en: 'Jixin Technology' },
      cr3: '~55%',
      suppliers: [
        { id: 's27', name: { zh: '吉鑫科技', en: 'Jixin Technology' }, rank: 1, marketShare: '~25%', annualShipment: { zh: '20000+ 吨', en: '20000+ tons' }, keyParams: { zh: '大型球墨铸铁,20t+', en: 'Large ductile iron casting, 20t+' }, customers: [{ zh: '金风科技', en: 'Goldwind' }, { zh: '明阳智能', en: 'Mingyang Smart Energy' }, { zh: '远景能源', en: 'Envision Energy' }], headquarters: { zh: '江苏', en: 'Jiangsu' }, tier: { zh: '国产高端', en: 'China High-end' }, techHighlights: [{ zh: '大吨位球铁铸造', en: 'Large-tonnage ductile iron casting' }, { zh: '精密加工', en: 'Precision machining' }], description: { zh: '国内风电铸件龙头企业', en: 'Leading domestic wind power casting manufacturer' }, contact: { website: 'www.jixintech.com' } },
        { id: 's28', name: { zh: '日月重工', en: 'Riyue Heavy Industry' }, rank: 2, marketShare: '~15%', annualShipment: { zh: '15000+ 吨', en: '15000+ tons' }, keyParams: { zh: '大型铸件龙头', en: 'Large casting leader' }, customers: [{ zh: '远景能源', en: 'Envision Energy' }, { zh: '运达股份', en: 'Windey' }], headquarters: { zh: '宁波', en: 'Ningbo' }, tier: { zh: '国产高端', en: 'China High-end' }, techHighlights: [{ zh: '大型铸件工艺', en: 'Large casting technology' }], description: { zh: '国内大型铸件龙头企业', en: 'Leading domestic large casting manufacturer' }, contact: { website: 'www.riyuehi.com' } },
        { id: 's29', name: { zh: '永冠能源', en: 'Yongguan Energy' }, rank: 3, marketShare: '~15%', annualShipment: { zh: '12000+ 吨', en: '12000+ tons' }, keyParams: { zh: '大型铸件', en: 'Large castings' }, customers: [{ zh: '西门子', en: 'Siemens' }, 'GE'], headquarters: { zh: '台湾/江苏', en: 'Taiwan/Jiangsu' }, tier: { zh: '国产高端', en: 'China High-end' }, techHighlights: [{ zh: '国际认证铸件', en: 'Internationally certified castings' }], description: { zh: '台资大型铸件企业', en: 'Taiwan-invested large casting enterprise' }, contact: { website: 'www.ychome.com.tw' } },
      ]
    },
  ]
};
