import { chromium } from 'playwright';
import { mkdirSync } from 'fs';

mkdirSync('mobile-audit/verify', { recursive: true });

const browser = await chromium.launch();
const context = await browser.newContext({ colorScheme: 'light', viewport: { width: 390, height: 844 }, deviceScaleFactor: 2, isMobile: true, hasTouch: true });

const shots = [
  { path: '/', sel: '#education', name: 'home-education' },
  { path: '/', sel: '.cbox', name: 'home-contact' },
  { path: '/', sel: '.srow', name: 'home-stats' },
  { path: '/wsup-design', sel: '.wsup-feature-map', name: 'wsup-feature-map' },
  { path: '/wsup-design', sel: '.wsup-mobile-grid', name: 'wsup-gift-flow' },
  { path: '/reddit-agent', sel: '.cs-chart', name: 'reddit-chart' },
  { path: '/designer-agent', sel: '.cs-timeline', name: 'da-timeline' },
];

for (const s of shots) {
  const page = await context.newPage();
  await page.goto(`http://localhost:5173${s.path}`, { waitUntil: 'networkidle' });
  const el = page.locator(s.sel).first();
  await el.scrollIntoViewIfNeeded();
  await page.waitForTimeout(2200); // let bar animations finish
  await el.screenshot({ path: `mobile-audit/verify/${s.name}.png` });
  await page.close();
  console.log(`✓ ${s.name}`);
}

await browser.close();
