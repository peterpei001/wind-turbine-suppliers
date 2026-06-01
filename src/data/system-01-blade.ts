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
      supplierCount: 10,
      topSupplier: { zh: '中材科技', en: 'Sinomat' },
      cr3: '~66%',
      suppliers: [
        {
          id: 's1',
          name: { zh: '中材科技风电叶片股份有限公司（中材叶片）', en: 'Sinomat Science & Technology (Sinomat Blade)' },
          rank: 1,
          marketShare: '~30%',
          annualShipment: { zh: '产能60GW+', en: '60GW+ capacity' },
          keyParams: { zh: '百米级海上大兆瓦叶片，最长122m', en: '100m+ offshore mega-watt blades, up to 122m' },
          customers: [
            { zh: '金风科技', en: 'Goldwind' },
            { zh: '远景能源', en: 'Envision Energy' },
            { zh: '明阳智能', en: 'Mingyang Smart Energy' },
            { zh: '运达股份', en: 'Windey' }
          ],
          headquarters: { zh: '北京市延庆区', en: 'Beijing Yanqing' },
          tier: { zh: '国产高端', en: 'China High-end' },
          techHighlights: [
            { zh: '独家配套金风科技16-18MW海上机组', en: 'Exclusive supplier for Goldwind 16-18MW offshore turbines' },
            { zh: '抗沙尘高耐腐蚀叶片技术领先', en: 'Leading sand-resistant and corrosion-resistant blade tech' },
            { zh: '全产业链研发，客户覆盖全球26国', en: 'Full supply chain R&D, serving 26 countries globally' }
          ],
          description: {
            zh: '央企背景（中国建材集团），连续14年国内市占率第一（28%~31%）；主打百米级海上大兆瓦叶片，独家配套金风科技16~18MW海上机组；全产业链研发，抗沙尘、高耐腐蚀叶片技术领先，客户覆盖全球26个国家',
            en: 'State-owned (CNBM Group), #1 domestic market share for 14 consecutive years (28-31%); specializes in 100m+ offshore mega-watt blades, exclusive supplier for Goldwind 16-18MW offshore turbines; full supply chain R&D, advanced sand-resistant and corrosion-resistant blade technology, serving 26 countries globally'
          },
          contact: {
            website: 'yp.sinomatech.com',
            person: { zh: '徐俊（董事长）、王欣', en: 'Xu Jun (Chairman), Wang Xin' },
            phone: '010-84097712',
            email: 'bladeoffice@sinomatech.com'
          }
        },
        {
          id: 's2',
          name: { zh: '株洲时代新材料科技股份有限公司（时代新材）', en: 'Zhuzhou Times New Material Technology (TMT)' },
          rank: 2,
          marketShare: '~24%',
          annualShipment: { zh: '产能35GW+', en: '35GW+ capacity' },
          keyParams: { zh: '玻纤/碳纤，最长110m', en: 'Fiberglass/Carbon fiber, up to 110m' },
          customers: [
            { zh: '远景能源', en: 'Envision Energy' },
            { zh: '三一重能', en: 'Sany Renewable Energy' },
            { zh: '中车风电', en: 'CRRC Wind Power' }
          ],
          headquarters: { zh: '湖南省株洲市', en: 'Zhuzhou, Hunan' },
          tier: { zh: '国产高端', en: 'China High-end' },
          techHighlights: [
            { zh: '中车集团旗下央企，高分子复合材料技术雄厚', en: 'CRRC subsidiary with strong polymer composite technology' },
            { zh: '风电叶片+减振材料双主业', en: 'Dual main business: wind blades + vibration damping materials' },
            { zh: '陆上6-10MW、海上10-16MW叶片', en: 'Onshore 6-10MW and offshore 10-16MW blades' }
          ],
          description: {
            zh: '中车集团旗下央企，高分子复合材料技术实力雄厚；风电叶片+减振材料双主业；陆上6~10MW、海上10~16MW叶片出货量领先',
            en: 'CRRC state-owned subsidiary with strong polymer composite technology; dual main business of wind blades and vibration damping materials; leading shipments of onshore 6-10MW and offshore 10-16MW blades'
          },
          contact: {
            website: 'www.crrcgc.cc/sdxc',
            person: { zh: '彭华文（法定代表人）', en: 'Peng Huawen (Legal Representative)' }
          }
        },
        {
          id: 's4',
          name: { zh: '艾郎科技股份有限公司（艾郎风电）', en: 'Aeolon Technology (Aeolon Wind Power)' },
          rank: 3,
          marketShare: '~12.4%',
          annualShipment: { zh: '产能25GW+', en: '25GW+ capacity' },
          keyParams: { zh: '叶片轻量化、碳纤维应用，最长117.8m', en: 'Lightweight blades, carbon fiber application, up to 117.8m' },
          customers: [
            { zh: '运达股份', en: 'Windey' },
            { zh: '三一重能', en: 'Sany Renewable Energy' }
          ],
          headquarters: { zh: '上海市浦东新区临港新片区', en: 'Shanghai Pudong Lingang' },
          tier: { zh: '国产高端', en: 'China High-end' },
          techHighlights: [
            { zh: '叶片轻量化、碳纤维应用领域领先', en: 'Leading in blade lightweighting and carbon fiber applications' },
            { zh: '可量产117.8米超长叶片', en: 'Mass production of 117.8m ultra-long blades' },
            { zh: '摩洛哥基地为非洲最大风电叶片工厂', en: 'Morocco base is Africa\'s largest wind blade factory' }
          ],
          description: {
            zh: '国内民营龙头企业，深耕叶片轻量化、碳纤维应用领域；可量产117.8米超长叶片，产品出口欧洲、北非、东南亚；摩洛哥基地为非洲最大风电叶片工厂',
            en: 'Leading domestic private enterprise, specializing in blade lightweighting and carbon fiber applications; mass produces 117.8m ultra-long blades, exports to Europe, North Africa, Southeast Asia; Morocco facility is Africa\'s largest wind blade factory'
          },
          contact: {
            website: 'www.aeolon.com.cn',
            person: { zh: '李传胜、胡文龙（董事长）', en: 'Li Chuansheng, Hu Wenlong (Chairman)' },
            phone: '021-38181111',
            email: 'ir@aeolon.com.cn'
          }
        },
        {
          id: 's101',
          name: { zh: '明阳智慧能源集团股份公司（明阳智能·叶片事业部）', en: 'Mingyang Smart Energy (Blade Division)' },
          rank: 4,
          marketShare: '~14.7%',
          annualShipment: { zh: '产能22GW+', en: '22GW+ capacity' },
          keyParams: { zh: '海上大兆瓦叶片，12-16MW', en: 'Offshore large MW blades, 12-16MW' },
          customers: [
            { zh: '明阳智能（自用为主）', en: 'Mingyang Smart Energy (primarily in-house)' }
          ],
          headquarters: { zh: '广东省中山市', en: 'Zhongshan, Guangdong' },
          tier: { zh: '国产高端', en: 'China High-end' },
          techHighlights: [
            { zh: '整机+叶片垂直一体化标杆企业', en: 'Vertically integrated turbine + blade benchmark' },
            { zh: '海上风电技术全球领先', en: 'Global leader in offshore wind technology' },
            { zh: '阳江基地为华南核心海上叶片产能基地', en: 'Yangjiang base is South China\'s core offshore blade facility' }
          ],
          description: {
            zh: '整机+叶片垂直一体化标杆企业，海上风电技术全球领先；叶片优先配套自有整机，同时对外供货；主打12~16MW海上大兆瓦叶片，阳江基地为华南核心海上叶片产能基地',
            en: 'Vertically integrated turbine and blade benchmark, globally leading offshore wind technology; blades primarily for in-house turbines while also supplying externally; specializes in 12-16MW offshore blades; Yangjiang base is South China\'s core offshore blade production facility'
          },
          contact: {
            website: 'www.myse.com.cn',
            person: { zh: '张传卫（法定代表人）', en: 'Zhang Chuanwei (Legal Representative)' },
            phone: '0760-28186666'
          }
        },
        {
          id: 's102',
          name: { zh: '三一重能股份有限公司（三一重能·叶片事业部）', en: 'Sany Renewable Energy (Blade Division)' },
          rank: 5,
          marketShare: '~9.4%',
          annualShipment: { zh: '产能20GW+', en: '20GW+ capacity' },
          keyParams: { zh: '陆上大兆瓦叶片', en: 'Onshore large MW blades' },
          customers: [
            { zh: '三一重能（自用为主）', en: 'Sany Renewable Energy (primarily in-house)' }
          ],
          headquarters: { zh: '北京市昌平区', en: 'Beijing Changping' },
          tier: { zh: '国产高端', en: 'China High-end' },
          techHighlights: [
            { zh: '工程机械跨界风电代表，智能制造标杆', en: 'Cross-industry wind power entrant from construction machinery, smart manufacturing benchmark' },
            { zh: '韶山基地为亚洲最大单体叶片智能工厂', en: 'Shaoshan base is Asia\'s largest single blade smart factory' },
            { zh: '自动化产线普及，生产效率提升20%以上', en: 'Automated production lines, 20%+ efficiency improvement' }
          ],
          description: {
            zh: '工程机械跨界风电代表，智能制造标杆；韶山基地为亚洲最大单体叶片智能工厂，自动化产线普及，生产效率提升20%以上；主打陆上大兆瓦叶片',
            en: 'Cross-industry wind power entrant from construction machinery, smart manufacturing benchmark; Shaoshan base is Asia\'s largest single blade smart factory with automated lines achieving 20%+ efficiency improvement; specializes in onshore large MW blades'
          },
          contact: {
            website: 'www.sanyre.com.cn',
            person: { zh: '周福贵（叶片板块负责人）', en: 'Zhou Fugui (Head of Blade Division)' }
          }
        },
        {
          id: 's3',
          name: { zh: '连云港中复连众复合材料集团有限公司（中复连众）', en: 'Lianyungang Zhongfu Lianzhong Composites (LZFRP)' },
          rank: 6,
          marketShare: '~8GW',
          annualShipment: { zh: '产能8GW+', en: '8GW+ capacity' },
          keyParams: { zh: '玻纤为主，4MW及以上大型叶片', en: 'Primarily fiberglass, 4MW+ large blades' },
          customers: [
            { zh: '金风科技', en: 'Goldwind' },
            { zh: '国电联合', en: 'Guodian United Power' }
          ],
          headquarters: { zh: '江苏省连云港市', en: 'Lianyungang, Jiangsu' },
          tier: { zh: '国产高端', en: 'China High-end' },
          techHighlights: [
            { zh: '现已并入中材科技体系（2023年收购）', en: 'Acquired by Sinomat in 2023' },
            { zh: '紧邻港口，海运交付优势明显', en: 'Port proximity provides strong sea logistics advantage' },
            { zh: '海上风电叶片技术积淀深厚', en: 'Deep offshore wind blade technology accumulation' }
          ],
          description: {
            zh: '老牌国企，2023年被中材科技收购，现为中材叶片全资子公司；海上风电叶片技术积淀深厚；紧邻港口，海运交付优势明显；主营4MW及以上大型叶片',
            en: 'Established state-owned enterprise, acquired by Sinomat in 2023, now a wholly-owned subsidiary; deep offshore blade technology; port proximity provides strong sea logistics advantage; specializes in 4MW+ large blades'
          },
          contact: {
            website: 'www.lzfrp.com',
            person: { zh: '南洋（法定代表人）；翟辉（叶片子公司负责人）', en: 'Nan Yang (Legal Representative); Zhai Hui (Blade Subsidiary Head)' },
            phone: '0518-85151888',
            email: 'hr_lyg@sinomatech.com'
          }
        },
        {
          id: 's103',
          name: { zh: '洛阳双瑞风电叶片有限公司（双瑞风电）', en: 'Luoyang Shuangrui Wind Power Blade (Shuangrui Wind Power)' },
          rank: 7,
          marketShare: '~6GW',
          annualShipment: { zh: '产能6GW+', en: '6GW+ capacity' },
          keyParams: { zh: '百米级大叶片，低温/强腐蚀环境专用', en: '100m+ large blades, specialized for low-temp and corrosive environments' },
          customers: [],
          headquarters: { zh: '河南洛阳/福建厦门', en: 'Luoyang, Henan / Xiamen, Fujian' },
          tier: { zh: '国产高端', en: 'China High-end' },
          techHighlights: [
            { zh: '中船集团725所下属国企，军工技术转民用', en: 'CSSC 725 Research Institute subsidiary, military-to-civilian tech transfer' },
            { zh: '高可靠性海上叶片', en: 'High-reliability offshore blades' },
            { zh: '低温/强腐蚀环境专用叶片', en: 'Specialized blades for low-temp and corrosive environments' }
          ],
          description: {
            zh: '中船集团725所下属国企，军工技术转民用；擅长研发制造高可靠性海上叶片、低温/强腐蚀环境专用叶片；7大基地全国布局',
            en: 'CSSC 725 Research Institute subsidiary with military-to-civilian technology transfer; specializes in high-reliability offshore blades and low-temperature/corrosive environment blades; 7 production bases nationwide'
          },
          contact: {
            website: 'www.xmsrfd.cn',
            person: { zh: '史俊虎（厦门总部负责人）', en: 'Shi Junhu (Xiamen HQ Head)' },
            phone: '0592-3725000',
            email: 'srfd@725.com.cn'
          }
        },
        {
          id: 's104',
          name: { zh: '山东双一科技股份有限公司（双一科技）', en: 'Shandong Shuangyi Technology (Shuangyi Tech)' },
          rank: 8,
          marketShare: '~5GW',
          annualShipment: { zh: '产能5GW+', en: '5GW+ capacity' },
          keyParams: { zh: '风电叶片模具全球龙头，超大型模具140m+', en: 'Global leader in blade molds, ultra-large molds 140m+' },
          customers: [],
          headquarters: { zh: '山东省德州市', en: 'Dezhou, Shandong' },
          tier: { zh: '国产高端', en: 'China High-end' },
          techHighlights: [
            { zh: '风电叶片模具全球龙头（市占率35%）', en: 'Global leader in wind blade molds (35% market share)' },
            { zh: '全球少数可生产140米以上超大型叶片模具', en: 'One of few globally capable of 140m+ ultra-large blade molds' },
            { zh: '海外业务占比45%', en: 'Overseas business accounts for 45%' }
          ],
          description: {
            zh: '创业板上市民企，全球少数可生产140米以上超大型叶片模具的企业；同时生产叶片、机舱罩等复合材料部件，海外业务占比45%',
            en: 'GEM-listed private enterprise, one of few globally capable of producing 140m+ ultra-large blade molds; also produces blades, nacelle covers and other composite components; overseas business accounts for 45%'
          },
          contact: {
            website: 'www.shuangyitec.com.cn',
            person: { zh: '王庆华（法定代表人）', en: 'Wang Qinghua (Legal Representative)' },
            phone: '0534-2421888'
          }
        },
        {
          id: 's105',
          name: { zh: '江苏国信风力发电设备有限公司', en: 'Jiangsu Guoxin Wind Power Equipment' },
          rank: 9,
          marketShare: '—',
          annualShipment: { zh: '年产800~1000支（3-8MW叶片）', en: '800-1000 units/year (3-8MW blades)' },
          keyParams: { zh: '3-8MW陆上叶片', en: '3-8MW onshore blades' },
          customers: [],
          headquarters: { zh: '江苏省盐城市大丰区', en: 'Dafeng, Yancheng, Jiangsu' },
          tier: { zh: '国产性价比', en: 'China Cost-effective' },
          techHighlights: [
            { zh: '华东区域配套企业', en: 'East China regional supplier' },
            { zh: '产品性价比优势明显', en: 'Strong cost-performance advantage' }
          ],
          description: {
            zh: '华东区域配套企业，专注陆上风电市场，产品性价比优势明显',
            en: 'East China regional supplier focused on onshore wind market with strong cost-performance advantage'
          },
          contact: {}
        },
        {
          id: 's106',
          name: { zh: '内蒙古久泰新材料风电叶片有限公司', en: 'Inner Mongolia Jiutai New Material Wind Blade' },
          rank: 10,
          marketShare: '—',
          annualShipment: { zh: '年产600支（4-10MW陆上叶片）', en: '600 units/year (4-10MW onshore blades)' },
          keyParams: { zh: '4-10MW陆上叶片，抗风沙耐低温', en: '4-10MW onshore blades, sand-resistant and low-temperature tolerant' },
          customers: [],
          headquarters: { zh: '内蒙古鄂尔多斯市', en: 'Ordos, Inner Mongolia' },
          tier: { zh: '国产性价比', en: 'China Cost-effective' },
          techHighlights: [
            { zh: '深耕西北风电市场', en: 'Deep roots in Northwest China wind market' },
            { zh: '风沙、低温环境定制化叶片能力较强', en: 'Strong customization for sandstorm and low-temperature environments' }
          ],
          description: {
            zh: '深耕西北风电市场，针对风沙、低温环境定制化叶片能力较强',
            en: 'Deeply rooted in Northwest China wind market with strong customization capabilities for sandstorm and low-temperature environments'
          },
          contact: {}
        }
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
