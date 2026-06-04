import { chromium } from 'playwright';
import { mkdirSync } from 'fs';

const PAGES = process.argv[2]
  ? [{ path: process.argv[2], name: process.argv[3] || process.argv[2].replace(/\//g, '') || 'home' }]
  : [
      { path: '/', name: 'home' },
      { path: '/designer-agent', name: 'designer-agent' },
      { path: '/reddit-agent', name: 'reddit-agent' },
      { path: '/wsup-design', name: 'wsup-design' },
      { path: '/nowgg', name: 'nowgg' },
      { path: '/bluestacks', name: 'bluestacks' },
    ];

const VW = 390, VH = 844;
const browser = await chromium.launch();
const context = await browser.newContext({ colorScheme: 'light', viewport: { width: VW, height: VH }, deviceScaleFactor: 2, isMobile: true, hasTouch: true });

for (const pg of PAGES) {
  const dir = `mobile-audit/${pg.name}`;
  mkdirSync(dir, { recursive: true });
  const page = await context.newPage();
  await page.goto(`http://localhost:5173${pg.path}`, { waitUntil: 'networkidle' });
  await page.waitForFunction(() => {
    const imgs = document.querySelectorAll('img');
    return Array.from(imgs).every(img => img.complete && img.naturalHeight > 0);
  }, { timeout: 8000 }).catch(() => {});
  // pre-scroll to trigger all reveals
  await page.evaluate(async () => {
    const h = document.body.scrollHeight;
    for (let y = 0; y < h; y += 600) { window.scrollTo(0, y); await new Promise(r => setTimeout(r, 50)); }
    window.scrollTo(0, 0);
  });
  await page.waitForTimeout(1000);
  const total = await page.evaluate(() => document.body.scrollHeight);
  let idx = 0;
  for (let y = 0; y < total; y += VH - 60) {
    await page.evaluate(yy => window.scrollTo(0, yy), y);
    await page.waitForTimeout(250);
    await page.screenshot({ path: `${dir}/${String(idx).padStart(2, '0')}.png` });
    idx++;
    if (idx > 40) break;
  }
  await page.close();
  console.log(`✓ ${pg.name}: ${idx} slices (page height ${total}px)`);
}

await browser.close();
