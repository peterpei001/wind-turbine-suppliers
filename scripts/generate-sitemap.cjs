const fs = require('fs');
const BASE = 'https://www.bigwingstech.com';

const urls = [
  { loc: '/', priority: '1.0', freq: 'weekly' },
  { loc: '/oems', priority: '0.8', freq: 'weekly' },
  // 16 systems
  { loc: '/browse/sys-blade?component=blade-body', priority: '0.7', freq: 'monthly' },
  { loc: '/browse/sys-pitch?component=pitch-bearing', priority: '0.7', freq: 'monthly' },
  { loc: '/browse/sys-hub?component=hub-casting', priority: '0.7', freq: 'monthly' },
  { loc: '/browse/sys-drivetrain?component=dt-gearbox', priority: '0.7', freq: 'monthly' },
  { loc: '/browse/sys-generator?component=gen-body', priority: '0.7', freq: 'monthly' },
  { loc: '/browse/sys-yaw?component=yaw-bearing', priority: '0.7', freq: 'monthly' },
  { loc: '/browse/sys-brake?component=brake-hss', priority: '0.7', freq: 'monthly' },
  { loc: '/browse/sys-converter?component=conv-power', priority: '0.7', freq: 'monthly' },
  { loc: '/browse/sys-electrical?component=elec-slipring', priority: '0.7', freq: 'monthly' },
  { loc: '/browse/sys-control?component=ctrl-plc', priority: '0.7', freq: 'monthly' },
  { loc: '/browse/sys-cms?component=cms-vibration', priority: '0.7', freq: 'monthly' },
  { loc: '/browse/sys-hydraulic?component=hydraulic-brake', priority: '0.7', freq: 'monthly' },
  { loc: '/browse/sys-cooling?component=cooling-generator', priority: '0.7', freq: 'monthly' },
  { loc: '/browse/sys-structure?component=struct-tower', priority: '0.7', freq: 'monthly' },
  { loc: '/browse/sys-foundation?component=found-on', priority: '0.7', freq: 'monthly' },
  // OEMs
  ...['oem-goldwind','oem-envision','oem-windey','oem-mingyang','oem-sany','oem-vestas'].map(id => ({
    loc: `/oem/${id}`, priority: '0.6', freq: 'monthly'
  })),
];

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(u => `  <url>
    <loc>${BASE}${u.loc}</loc>
    <priority>${u.priority}</priority>
    <changefreq>${u.freq}</changefreq>
  </url>`).join('\n')}
</urlset>`;

fs.writeFileSync('public/sitemap.xml', xml);
console.log(`Generated sitemap with ${urls.length} URLs → public/sitemap.xml`);
